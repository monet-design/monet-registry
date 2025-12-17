#!/usr/bin/env npx tsx
/**
 * 기존 page metadata에 pageType: landing 추가
 *
 * 사용법: npx tsx scripts/migrate-page-type.ts
 */

import * as fs from "fs";
import * as path from "path";

async function main() {
  const pagesDir = path.join(process.cwd(), "src/components/pages");

  if (!fs.existsSync(pagesDir)) {
    console.error("Pages directory not found:", pagesDir);
    process.exit(1);
  }

  const dirs = fs
    .readdirSync(pagesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory());

  let migrated = 0;
  let skipped = 0;
  let notFound = 0;

  console.log("\n=== Page Type Migration ===\n");

  for (const dir of dirs) {
    const metaPath = path.join(pagesDir, dir.name, "metadata.yaml");

    if (!fs.existsSync(metaPath)) {
      console.log(`[NO METADATA] ${dir.name}`);
      notFound++;
      continue;
    }

    let content = fs.readFileSync(metaPath, "utf-8");

    // 이미 pageType이 있으면 스킵
    if (content.includes("pageType:")) {
      console.log(`[SKIP] ${dir.name} - pageType already exists`);
      skipped++;
      continue;
    }

    // category: page 또는 category: "page" 다음 줄에 pageType: landing 삽입
    const categoryPattern = /^(category:\s*["']?page["']?\s*)$/m;

    if (!categoryPattern.test(content)) {
      // 패턴이 안 맞으면 다른 방식 시도
      const categoryLinePattern = /^(category:\s*["']?page["']?)(\r?\n)/m;
      if (categoryLinePattern.test(content)) {
        content = content.replace(
          categoryLinePattern,
          "$1$2pageType: landing$2"
        );
        fs.writeFileSync(metaPath, content);
        console.log(`[OK] ${dir.name}`);
        migrated++;
      } else {
        console.log(`[WARN] ${dir.name} - category field pattern not matched`);
        skipped++;
      }
      continue;
    }

    content = content.replace(categoryPattern, "$1\npageType: landing");
    fs.writeFileSync(metaPath, content);
    console.log(`[OK] ${dir.name}`);
    migrated++;
  }

  console.log("\n=== Summary ===");
  console.log(`Migrated: ${migrated}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`No metadata: ${notFound}`);
  console.log(`Total: ${dirs.length}`);
}

main().catch(console.error);
