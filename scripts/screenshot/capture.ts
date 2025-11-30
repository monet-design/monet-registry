import puppeteer, { Browser, Page } from "puppeteer";
import * as fs from "fs/promises";
import * as path from "path";

export interface Viewport {
  name: string;
  width: number;
  height: number;
}

export interface CaptureOptions {
  component: string;
  baseUrl: string;
  outputDir: string;
  viewports: Viewport[];
  waitTime: number;
}

export const defaultViewports: Viewport[] = [
  { name: "desktop", width: 1280, height: 800 },
  { name: "mobile", width: 390, height: 844 },
];

export class ScreenshotCapture {
  private browser: Browser | null = null;

  async initialize(): Promise<void> {
    this.browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
      ],
    });
  }

  async captureComponent(options: CaptureOptions): Promise<string[]> {
    if (!this.browser) {
      throw new Error("Browser not initialized. Call initialize() first.");
    }

    const { component, baseUrl, outputDir, viewports, waitTime } = options;
    const screenshots: string[] = [];

    // 출력 디렉토리 생성
    const componentOutputDir = path.join(outputDir, component);
    await fs.mkdir(componentOutputDir, { recursive: true });

    const page = await this.browser.newPage();

    try {
      for (const viewport of viewports) {
        await page.setViewport({
          width: viewport.width,
          height: viewport.height,
        });

        const url = `${baseUrl}?component=${component}`;
        await page.goto(url, {
          waitUntil: "networkidle0",
          timeout: 30000,
        });

        // 폰트 로딩 대기
        await page.evaluate(() => document.fonts.ready);

        // 애니메이션 완료 대기
        await new Promise((resolve) => setTimeout(resolve, waitTime));

        // 스크린샷 캡처
        const outputPath = path.join(
          componentOutputDir,
          `${viewport.name}.png`
        );

        await page.screenshot({
          path: outputPath,
          fullPage: true,
          type: "png",
        });

        screenshots.push(outputPath);
      }
    } finally {
      await page.close();
    }

    return screenshots;
  }

  async captureMultiple(
    components: string[],
    baseOptions: Omit<CaptureOptions, "component">,
    concurrency: number = 3
  ): Promise<Map<string, string[]>> {
    const results = new Map<string, string[]>();

    // 청크로 나누어 병렬 처리
    for (let i = 0; i < components.length; i += concurrency) {
      const chunk = components.slice(i, i + concurrency);

      const promises = chunk.map(async (component) => {
        try {
          const screenshots = await this.captureComponent({
            ...baseOptions,
            component,
          });
          return { component, screenshots, error: null };
        } catch (error) {
          return {
            component,
            screenshots: [],
            error: error instanceof Error ? error.message : String(error),
          };
        }
      });

      const chunkResults = await Promise.all(promises);

      for (const result of chunkResults) {
        if (result.error) {
          console.error(`Failed to capture ${result.component}: ${result.error}`);
        } else {
          results.set(result.component, result.screenshots);
        }
      }
    }

    return results;
  }

  async close(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
  }
}

// 컴포넌트 목록 가져오기
export async function getComponentList(registryPath: string): Promise<string[]> {
  const entries = await fs.readdir(registryPath, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}
