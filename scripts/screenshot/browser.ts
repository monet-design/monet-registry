import puppeteer, { Browser, Page } from "puppeteer";

// 환경변수 기반 설정
const isDocker = process.env.DOCKER_ENV === "true";
const tabCount = parseInt(process.env.TAB_COUNT || "1", 10);

export const CONFIG = {
  TAB_COUNT: isDocker ? tabCount : 1, // Docker에서만 병렬 처리
  BASE_URL: "http://localhost:3000",
  WAIT_TIME: 1500,
  ACTIVE_TAB_WAIT: isDocker ? 0 : 1500, // headless에서는 불필요
  VIEWPORT: { width: 1440, height: 1080 },
} as const;

export interface TabWorker {
  id: number;
  page: Page;
  busy: boolean;
}

export async function initBrowser(): Promise<Browser> {
  const browser = await puppeteer.launch({
    headless: isDocker,
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage", // Docker 공유 메모리 이슈 해결
      "--disable-gpu",
      `--window-size=${CONFIG.VIEWPORT.width},${CONFIG.VIEWPORT.height}`,
    ],
    defaultViewport: CONFIG.VIEWPORT,
  });
  return browser;
}

export async function createTabs(
  browser: Browser,
  count: number = CONFIG.TAB_COUNT
): Promise<TabWorker[]> {
  const workers: TabWorker[] = [];

  for (let i = 0; i < count; i++) {
    const page = await browser.newPage();
    await page.setViewport(CONFIG.VIEWPORT);

    // Disable reduced-motion to allow animations
    await page.emulateMediaFeatures([
      { name: "prefers-reduced-motion", value: "no-preference" },
    ]);

    workers.push({
      id: i,
      page,
      busy: false,
    });
  }

  return workers;
}

export async function closeBrowser(browser: Browser): Promise<void> {
  await browser.close();
}

export function getIdleWorker(workers: TabWorker[]): TabWorker | undefined {
  return workers.find((worker) => !worker.busy);
}

export function getIdleWorkerCount(workers: TabWorker[]): number {
  return workers.filter((worker) => !worker.busy).length;
}

export function getBusyWorkerCount(workers: TabWorker[]): number {
  return workers.filter((worker) => worker.busy).length;
}
