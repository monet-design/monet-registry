#!/usr/bin/env npx tsx
/**
 * Manual section capture script for inblog.ai
 */

import puppeteer from "puppeteer";
import * as fs from "fs";
import * as path from "path";

const OUTPUT_DIR = "/Users/choesumin/Desktop/dev/choisumin/monet/landing-mon-components/public/scraped/inblog-ai-2025-12-14";
const URL = "https://inblog.ai/";
const VIEWPORT = { width: 1440, height: 900 };

// Manual section definitions based on visual analysis of the page
// Full page height is ~20405px
const SECTIONS = [
  { name: "header", top: 0, height: 77, category: "header" },
  { name: "hero", top: 77, height: 900, category: "hero" },
  { name: "logo-cloud", top: 977, height: 200, category: "logo-cloud" },
  { name: "feature-1", top: 1177, height: 1400, category: "feature" },
  { name: "feature-2", top: 2577, height: 1800, category: "feature" },
  { name: "feature-3", top: 4377, height: 2200, category: "feature" },
  { name: "feature-4", top: 6577, height: 2000, category: "feature" },
  { name: "feature-5", top: 8577, height: 2000, category: "feature" },
  { name: "feature-6", top: 10577, height: 2000, category: "feature" },
  { name: "testimonial", top: 12577, height: 2200, category: "testimonial" },
  { name: "blog", top: 14777, height: 1600, category: "feature" },
  { name: "pricing", top: 16377, height: 1600, category: "pricing" },
  { name: "cta", top: 17977, height: 800, category: "cta" },
  { name: "faq", top: 18777, height: 700, category: "faq" },
  { name: "footer", top: 19477, height: 930, category: "footer" },
];

async function main() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", `--window-size=${VIEWPORT.width},${VIEWPORT.height}`],
    defaultViewport: VIEWPORT,
  });

  const page = await browser.newPage();

  console.log(`Loading ${URL}...`);
  await page.goto(URL, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise(r => setTimeout(r, 5000)); // Wait for animations

  // Get full page height
  const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log(`Page height: ${bodyHeight}px`);

  // Create sections directory
  const sectionsDir = path.join(OUTPUT_DIR, "sections");
  fs.mkdirSync(sectionsDir, { recursive: true });

  // Update sections.json
  const sectionsJson = SECTIONS.map((s, i) => ({
    index: i,
    tag: "section",
    selector: `section-${i}`,
    category: s.category,
    rect: { top: s.top, height: s.height },
    confidence: 1.0,
    name: s.name,
  }));

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "sections.json"),
    JSON.stringify(sectionsJson, null, 2)
  );

  // Capture each section by scrolling and taking screenshots
  for (let i = 0; i < SECTIONS.length; i++) {
    const section = SECTIONS[i];
    console.log(`Capturing section ${i}: ${section.name} (${section.category})`);

    try {
      // Scroll to section
      await page.evaluate((top) => {
        window.scrollTo(0, top);
      }, section.top);
      await new Promise(r => setTimeout(r, 500));

      // Take full page screenshot and clip
      await page.screenshot({
        path: path.join(sectionsDir, `section-${i}.png`),
        clip: {
          x: 0,
          y: section.top,
          width: VIEWPORT.width,
          height: Math.min(section.height, bodyHeight - section.top),
        },
        fullPage: false,
      });

      console.log(`  ✓ Captured section-${i}.png`);
    } catch (e) {
      console.warn(`  ✗ Failed to capture section ${i}:`, e);
    }
  }

  await browser.close();
  console.log("\nDone! Sections saved to:", sectionsDir);
}

main().catch(console.error);
