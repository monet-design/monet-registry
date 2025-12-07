import * as fs from 'fs';
import * as path from 'path';
import { ScreenshotQueue } from './queue';
import {
  loadState,
  saveState,
  isCompleted,
  markCompleted,
  isPageCompleted,
  markPageCompleted,
  ScreenshotState,
} from './state';
import {
  initBrowser,
  createTabs,
  closeBrowser,
  TabWorker,
  CONFIG,
} from './browser';
import { captureComponent, CaptureResult, capturePage, PageCaptureResult } from './screenshot';

interface FailedCapture {
  componentId: string;
  error: string;
  timestamp: string;
}

interface CliOptions {
  all: boolean;
  concurrency: number;
  component?: string;
  components: string[]; // 여러 컴포넌트 지정
}

function parseArgs(): CliOptions {
  const args = process.argv.slice(2);
  const options: CliOptions = {
    all: false,
    concurrency: CONFIG.TAB_COUNT,
    components: [],
  };

  for (const arg of args) {
    if (arg === '--all') {
      options.all = true;
    } else if (arg.startsWith('--concurrency=')) {
      const value = parseInt(arg.split('=')[1], 10);
      if (!isNaN(value) && value > 0) {
        options.concurrency = value;
      }
    } else if (arg.startsWith('--component=')) {
      options.component = arg.split('=')[1];
    } else if (!arg.startsWith('--')) {
      // 플래그가 아닌 인자는 컴포넌트 ID로 취급
      options.components.push(arg);
    }
  }

  return options;
}

function loadComponentIds(): string[] {
  const registryPath = path.join(
    __dirname,
    "../../public/generated/registry.json"
  );

  if (!fs.existsSync(registryPath)) {
    console.error(
      'Error: public/generated/registry.json not found. Run "pnpm metadata:build" first.'
    );
    process.exit(1);
  }

  const data = fs.readFileSync(registryPath, 'utf-8');
  const registry = JSON.parse(data);

  // registry는 객체 형태: { "component-id": { id: "component-id", ... }, ... }
  return Object.keys(registry);
}

function loadPageIds(): string[] {
  const registryPath = path.join(
    __dirname,
    "../../public/generated/page-registry.json"
  );

  if (!fs.existsSync(registryPath)) {
    // 페이지 레지스트리가 없으면 빈 배열 반환 (페이지가 아직 없을 수 있음)
    return [];
  }

  const data = fs.readFileSync(registryPath, 'utf-8');
  const registry = JSON.parse(data);

  return Object.keys(registry);
}

async function processComponentQueue(
  queue: ScreenshotQueue,
  workers: TabWorker[],
  state: ScreenshotState,
  failures: FailedCapture[]
): Promise<number> {
  let completedCount = 0;
  const totalCount = queue.size();
  const worker = workers[0]; // 단일 탭 사용

  // 순차 처리: 하나씩 차례대로 캡처
  while (!queue.isEmpty()) {
    const componentId = queue.dequeue();
    if (!componentId) break;

    const result: CaptureResult = await captureComponent(worker.page, componentId);

    if (result.success && result.path) {
      markCompleted(state, componentId, result.path);
      saveState(state);
      completedCount++;
      console.log(`[Component ${completedCount}/${totalCount}] ✓ ${componentId}`);
    } else {
      failures.push({
        componentId,
        error: result.error || 'Unknown error',
        timestamp: new Date().toISOString(),
      });
      console.log(`[Component ${completedCount}/${totalCount}] ✗ ${componentId}: ${result.error}`);
    }
  }
  return completedCount;
}

async function processPageQueue(
  queue: ScreenshotQueue,
  workers: TabWorker[],
  state: ScreenshotState,
  failures: FailedCapture[]
): Promise<number> {
  let completedCount = 0;
  const totalCount = queue.size();
  const worker = workers[0];

  while (!queue.isEmpty()) {
    const pageId = queue.dequeue();
    if (!pageId) break;

    const result: PageCaptureResult = await capturePage(worker.page, pageId);

    if (result.success && result.path) {
      markPageCompleted(state, pageId, result.path);
      saveState(state);
      completedCount++;
      console.log(`[Page ${completedCount}/${totalCount}] ✓ ${pageId}`);
    } else {
      failures.push({
        componentId: pageId, // reusing the same interface
        error: result.error || 'Unknown error',
        timestamp: new Date().toISOString(),
      });
      console.log(`[Page ${completedCount}/${totalCount}] ✗ ${pageId}: ${result.error}`);
    }
  }
  return completedCount;
}

async function main(): Promise<void> {
  const options = parseArgs();

  console.log('='.repeat(50));
  console.log('Screenshot Capture Script');
  console.log('='.repeat(50));
  console.log(`Concurrency: ${options.concurrency} tabs`);
  console.log(`Mode: ${options.all ? 'Capture all (ignore state)' : 'Incremental'}`);
  if (options.component) {
    console.log(`Target component: ${options.component}`);
  }
  if (options.components.length > 0) {
    console.log(`Target components: ${options.components.join(', ')}`);
  }
  console.log('='.repeat(50));

  // 1. Load component IDs and page IDs
  const allComponentIds = loadComponentIds();
  const allPageIds = loadPageIds();
  let componentIds: string[];
  let pageIds: string[];

  // 컴포넌트 필터링
  if (options.components.length > 0) {
    componentIds = options.components.filter((id) => allComponentIds.includes(id));
    const notFound = options.components.filter((id) => !allComponentIds.includes(id));
    if (notFound.length > 0) {
      console.log(`Warning: Components not found in registry: ${notFound.join(', ')}`);
    }
  } else if (options.component) {
    componentIds = [options.component];
  } else {
    componentIds = allComponentIds;
  }

  // 페이지는 특정 지정이 없으면 전체 사용
  pageIds = allPageIds;

  console.log(`Found ${componentIds.length} components, ${pageIds.length} pages`);

  // 2. Load state
  let state = loadState();
  if (options.all) {
    state = { completed: {}, pageCompleted: {} };
  } else if (options.components.length > 0 || options.component) {
    const targetsToRecapture = options.components.length > 0 ? options.components : [options.component!];
    for (const id of targetsToRecapture) {
      delete state.completed[id];
    }
  }
  console.log(`Already captured: ${Object.keys(state.completed).length} components, ${Object.keys(state.pageCompleted).length} pages`);

  // 3. Filter uncaptured
  const uncapturedComponents = componentIds.filter((id) => !isCompleted(state, id));
  const uncapturedPages = pageIds.filter((id) => !isPageCompleted(state, id));
  console.log(`To capture: ${uncapturedComponents.length} components, ${uncapturedPages.length} pages`);

  if (uncapturedComponents.length === 0 && uncapturedPages.length === 0) {
    console.log('All components and pages already captured. Use --all to recapture.');
    return;
  }

  // 4. Initialize browser
  console.log('\nStarting browser...');
  const browser = await initBrowser();

  // 5. Create tabs
  console.log(`Creating ${options.concurrency} tabs...`);
  const workers = await createTabs(browser, options.concurrency);

  // 6. Process queues
  const failures: FailedCapture[] = [];
  const startTime = Date.now();

  // Process components
  if (uncapturedComponents.length > 0) {
    console.log('\n--- Capturing Components ---\n');
    const componentQueue = new ScreenshotQueue();
    componentQueue.enqueueAll(uncapturedComponents);
    await processComponentQueue(componentQueue, workers, state, failures);
  }

  // Process pages
  if (uncapturedPages.length > 0) {
    console.log('\n--- Capturing Pages ---\n');
    const pageQueue = new ScreenshotQueue();
    pageQueue.enqueueAll(uncapturedPages);
    await processPageQueue(pageQueue, workers, state, failures);
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);

  // 7. Close browser
  console.log('\nClosing browser...');
  await closeBrowser(browser);

  // 8. Print summary
  const totalToCapture = uncapturedComponents.length + uncapturedPages.length;
  console.log('\n' + '='.repeat(50));
  console.log('Summary');
  console.log('='.repeat(50));
  console.log(`Duration: ${duration}s`);
  console.log(`Captured: ${totalToCapture - failures.length}`);
  console.log(`Failed: ${failures.length}`);

  if (failures.length > 0) {
    console.log('\nFailed:');
    for (const failure of failures) {
      console.log(`  - ${failure.componentId}: ${failure.error}`);
    }
  }

  console.log('\nDone!');
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
