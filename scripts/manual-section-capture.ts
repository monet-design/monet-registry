#!/usr/bin/env npx tsx
/**
 * Manual section capture script for bolta.io
 */

import puppeteer from "puppeteer";
import * as fs from "fs";
import * as path from "path";

const OUTPUT_DIR = "/Users/choesumin/Desktop/dev/choisumin/monet/landing-mon-components/public/scraped/bolta-io-2025-12-07";
const URL = "https://bolta.io/";
const VIEWPORT = { width: 1440, height: 900 };

// Manual section definitions based on visual analysis
const SECTIONS = [
  { name: "header", top: 0, height: 68, category: "header" },
  { name: "hero", top: 68, height: 860, category: "hero" },
  { name: "testimonial", top: 928, height: 904, category: "testimonial" },
  { name: "feature", top: 1832, height: 920, category: "feature" },
  { name: "stats", top: 2752, height: 200, category: "stats" },
  { name: "cta", top: 2952, height: 350, category: "cta" },
  { name: "trust", top: 3302, height: 400, category: "trust" },
  { name: "faq", top: 3702, height: 900, category: "faq" },
  { name: "footer", top: 4602, height: 612, category: "footer" },
];

async function main() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", `--window-size=${VIEWPORT.width},${VIEWPORT.height}`],
    defaultViewport: VIEWPORT,
  });

  const page = await browser.newPage();

  console.log(`Loading ${URL}...`);
  await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 60000 });
  await new Promise(r => setTimeout(r, 5000)); // Wait for animations

  // Get full page height
  const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log(`Page height: ${bodyHeight}px`);

  // Set viewport to full height for screenshot
  await page.setViewport({ width: VIEWPORT.width, height: bodyHeight });
  await new Promise(r => setTimeout(r, 1000));

  // Create sections directory
  const sectionsDir = path.join(OUTPUT_DIR, "sections-manual");
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
    path.join(OUTPUT_DIR, "sections-manual.json"),
    JSON.stringify(sectionsJson, null, 2)
  );

  // Capture each section
  for (let i = 0; i < SECTIONS.length; i++) {
    const section = SECTIONS[i];
    console.log(`Capturing section ${i}: ${section.name} (${section.category})`);

    try {
      await page.screenshot({
        path: path.join(sectionsDir, `section-${i}.png`),
        clip: {
          x: 0,
          y: section.top,
          width: VIEWPORT.width,
          height: Math.min(section.height, bodyHeight - section.top),
        },
      });
    } catch (e) {
      console.warn(`Failed to capture section ${i}:`, e);
    }
  }

  await browser.close();
  console.log("Done!");
}

main().catch(console.error);
