import * as path from "path";
import { Page } from "puppeteer";
import { CONFIG } from "./browser";

const OUTPUT_DIR = path.join(__dirname, "../../public/registry/preview");

export interface CaptureResult {
  success: boolean;
  componentId: string;
  path?: string;
  error?: string;
}

export async function captureComponent(
  page: Page,
  componentId: string
): Promise<CaptureResult> {
  const url = `${CONFIG.BASE_URL}/example/registry/${componentId}`;
  const outputPath = path.join(OUTPUT_DIR, `${componentId}.png`);

  try {
    // 1. Bring tab to front (activate tab)
    await page.bringToFront();

    // 2. Wait for active tab stabilization (3초 대기)
    await new Promise((resolve) => setTimeout(resolve, CONFIG.ACTIVE_TAB_WAIT));

    // 3. Navigate to component page
    await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

    // // 4. Trigger viewport animations with scroll and mouse movement
    // await page.evaluate(() => {
    //   // Scroll down and back up to trigger whileInView animations
    //   window.scrollTo(0, document.body.scrollHeight);
    //   window.scrollTo(0, 0);
    // });

    // // 5. Move mouse to center to trigger hover-based animations
    // const viewport = page.viewport();
    // if (viewport) {
    //   await page.mouse.move(viewport.width / 2, viewport.height / 2);
    // }

    // 6. Wait for animations to complete
    await new Promise((resolve) => setTimeout(resolve, CONFIG.WAIT_TIME));

    // 7. Take screenshot
    await page.screenshot({
      path: outputPath,
      fullPage: false,
    });

    return {
      success: true,
      componentId,
      path: outputPath,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return {
      success: false,
      componentId,
      error: errorMessage,
    };
  }
}
