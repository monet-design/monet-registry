import * as fs from 'fs';
import * as path from 'path';
import { ScreenshotQueue } from './queue';
import { loadState, saveState, isCompleted, markCompleted, ScreenshotState } from './state';
import {
  initBrowser,
  createTabs,
  closeBrowser,
  TabWorker,
  CONFIG,
} from './browser';
import { captureComponent, CaptureResult } from './screenshot';

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

async function processQueue(
  queue: ScreenshotQueue,
  workers: TabWorker[],
  state: ScreenshotState,
  failures: FailedCapture[]
): Promise<void> {
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
      console.log(`[${completedCount}/${totalCount}] ✓ ${componentId}`);
    } else {
      failures.push({
        componentId,
        error: result.error || 'Unknown error',
        timestamp: new Date().toISOString(),
      });
      console.log(`[${completedCount}/${totalCount}] ✗ ${componentId}: ${result.error}`);
    }
  }
}

async function main(): Promise<void> {
  const options = parseArgs();

  console.log('='.repeat(50));
  console.log('Screenshot Capture Script');
  console.log('='.repeat(50));
  console.log(`Concurrency: ${options.concurrency} tabs`);
  console.log(`Mode: ${options.all ? 'Capture all (ignore state)' : 'Incremental'}`);
  if (options.component) {
    console.log(`Target: ${options.component}`);
  }
  if (options.components.length > 0) {
    console.log(`Targets: ${options.components.join(', ')}`);
  }
  console.log('='.repeat(50));

  // 1. Load component IDs
  const allComponentIds = loadComponentIds();
  let componentIds: string[];

  if (options.components.length > 0) {
    // 여러 컴포넌트가 지정된 경우, registry에 존재하는 것만 필터링
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
  console.log(`Found ${componentIds.length} components to process`);

  // 2. Load state
  // 특정 컴포넌트가 지정된 경우 (components 또는 component), 해당 컴포넌트는 state에서 제외하여 강제 재캡처
  let state = loadState();
  if (options.all) {
    state = { completed: {} };
  } else if (options.components.length > 0 || options.component) {
    // 지정된 컴포넌트들을 state에서 제거하여 재캡처 대상으로 만듦
    const targetsToRecapture = options.components.length > 0 ? options.components : [options.component!];
    for (const id of targetsToRecapture) {
      delete state.completed[id];
    }
  }
  console.log(`Already captured: ${Object.keys(state.completed).length} components`);

  // 3. Filter uncaptured components
  const uncaptured = componentIds.filter((id) => !isCompleted(state, id));
  console.log(`To capture: ${uncaptured.length} components`);

  if (uncaptured.length === 0) {
    console.log('All components already captured. Use --all to recapture.');
    return;
  }

  // 4. Initialize queue
  const queue = new ScreenshotQueue();
  queue.enqueueAll(uncaptured);

  // 5. Initialize browser
  console.log('\nStarting browser...');
  const browser = await initBrowser();

  // 6. Create tabs
  console.log(`Creating ${options.concurrency} tabs...`);
  const workers = await createTabs(browser, options.concurrency);

  // 7. Process queue
  const failures: FailedCapture[] = [];
  console.log('\nStarting capture...\n');

  const startTime = Date.now();
  await processQueue(queue, workers, state, failures);
  const duration = ((Date.now() - startTime) / 1000).toFixed(1);

  // 8. Close browser
  console.log('\nClosing browser...');
  await closeBrowser(browser);

  // 9. Print summary
  console.log('\n' + '='.repeat(50));
  console.log('Summary');
  console.log('='.repeat(50));
  console.log(`Duration: ${duration}s`);
  console.log(`Captured: ${uncaptured.length - failures.length}`);
  console.log(`Failed: ${failures.length}`);

  if (failures.length > 0) {
    console.log('\nFailed components:');
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
