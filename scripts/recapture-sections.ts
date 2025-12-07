#!/usr/bin/env npx tsx
/**
 * Re-capture sections for bolta.io with adjusted boundaries
 */

import puppeteer from "puppeteer";
import * as fs from "fs";
import * as path from "path";

const OUTPUT_DIR = "/Users/choesumin/Desktop/dev/choisumin/monet/landing-mon-components/public/scraped/bolta-io-2025-12-07";
const URL = "https://bolta.io/";
const VIEWPORT = { width: 1440, height: 900 };

// Adjusted section definitions based on visual analysis
const SECTIONS = [
  { index: 0, name: "header", top: 0, height: 68, category: "header" },
  { index: 1, name: "hero", top: 68, height: 860, category: "hero" },
  { index: 2, name: "testimonial", top: 928, height: 904, category: "testimonial" },
  { index: 3, name: "feature", top: 1832, height: 920, category: "feature" },
  { index: 4, name: "stats", top: 2752, height: 450, category: "stats" },  // Stats + Newsletter CTA
  { index: 5, name: "trust", top: 3202, height: 530, category: "trust" },  // Trust/security section
  { index: 6, name: "faq", top: 3732, height: 500, category: "faq" },      // FAQ section
  { index: 7, name: "footer", top: 4232, height: 612, category: "footer" },
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
  await new Promise(r => setTimeout(r, 5000));

  const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log(`Page height: ${bodyHeight}px`);

  await page.setViewport({ width: VIEWPORT.width, height: bodyHeight });
  await new Promise(r => setTimeout(r, 1000));

  // Use the existing sections directory
  const sectionsDir = path.join(OUTPUT_DIR, "sections");
  fs.mkdirSync(sectionsDir, { recursive: true });

  // Update sections.json
  const sectionsJson = SECTIONS.map((s) => ({
    index: s.index,
    tag: "section",
    selector: `section-${s.index}`,
    category: s.category,
    rect: { top: s.top, height: s.height },
    confidence: 1.0,
    name: s.name,
  }));

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "sections.json"),
    JSON.stringify(sectionsJson, null, 2)
  );

  // Capture each section
  for (const section of SECTIONS) {
    console.log(`Capturing section ${section.index}: ${section.name} (${section.category})`);

    const captureHeight = Math.min(section.height, bodyHeight - section.top);
    if (captureHeight <= 0) {
      console.warn(`Skipping section ${section.index}: invalid height`);
      continue;
    }

    try {
      await page.screenshot({
        path: path.join(sectionsDir, `section-${section.index}.png`),
        clip: {
          x: 0,
          y: section.top,
          width: VIEWPORT.width,
          height: captureHeight,
        },
      });
    } catch (e) {
      console.warn(`Failed to capture section ${section.index}:`, e);
    }
  }

  await browser.close();
  console.log("Done! Updated sections.json and captured all sections.");
}

main().catch(console.error);
