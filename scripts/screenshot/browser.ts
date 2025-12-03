import puppeteer, { Browser, Page } from "puppeteer";

export const CONFIG = {
  TAB_COUNT: 1, // 순차 처리를 위해 1개 탭만 사용
  BASE_URL: "http://localhost:3000",
  WAIT_TIME: 1500,
  ACTIVE_TAB_WAIT: 1500, // 스크린샷 전 active tab 유지 시간
  VIEWPORT: { width: 1440, height: 1080 },
} as const;

export interface TabWorker {
  id: number;
  page: Page;
  busy: boolean;
}

export async function initBrowser(): Promise<Browser> {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
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
