#!/usr/bin/env npx tsx
/**
 * Final section capture for bolta.io with precise boundaries
 */

import puppeteer from "puppeteer";
import * as fs from "fs";
import * as path from "path";

const OUTPUT_DIR = "/Users/choesumin/Desktop/dev/choisumin/monet/landing-mon-components/public/scraped/bolta-io-2025-12-07";
const URL = "https://bolta.io/";
const VIEWPORT = { width: 1440, height: 900 };

// Final section definitions based on careful visual analysis
// Total page height: 5214px
const SECTIONS = [
  { index: 0, name: "header", top: 0, height: 68, category: "header" },
  { index: 1, name: "hero", top: 68, height: 860, category: "hero" },
  { index: 2, name: "testimonial", top: 928, height: 904, category: "testimonial" },
  { index: 3, name: "feature", top: 1832, height: 920, category: "feature" },
  { index: 4, name: "stats", top: 2752, height: 200, category: "stats" },       // Just the stats numbers
  { index: 5, name: "cta", top: 2952, height: 300, category: "cta" },           // Newsletter CTA (볼타 레터)
  { index: 6, name: "trust", top: 3252, height: 480, category: "trust" },       // Security trust badges
  { index: 7, name: "faq", top: 3732, height: 500, category: "faq" },           // FAQ section
  { index: 8, name: "footer", top: 4232, height: 982, category: "footer" },     // Footer (rest of page)
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
    console.log(`Capturing section ${section.index}: ${section.name} (${section.category}) - top: ${section.top}, height: ${section.height}`);

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
  console.log("\nDone! Final sections captured.");
  console.log("\nSection summary:");
  SECTIONS.forEach(s => {
    console.log(`  ${s.index}. ${s.name} (${s.category}): ${s.top}px - ${s.top + s.height}px`);
  });
}

main().catch(console.error);
