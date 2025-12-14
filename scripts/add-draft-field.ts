/**
 * 기존 모든 metadata.yaml에 draft: false 필드를 추가하는 마이그레이션 스크립트
 *
 * 사용법:
 *   pnpm metadata:add-draft
 *   npx tsx scripts/add-draft-field.ts
 */

import * as fs from "fs";
import * as path from "path";
import yaml from "js-yaml";

interface MetadataYaml {
  schemaVersion: string;
  name: string;
  category: string;
  draft?: boolean;
  [key: string]: unknown;
}

async function main() {
  const registryDir = path.join(process.cwd(), "src/components/registry");

  let updatedComponents = 0;
  let updatedPages = 0;
  let skippedComponents = 0;
  let skippedPages = 0;

  // 1. section 컴포넌트 처리
  const componentDirs = fs
    .readdirSync(registryDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name !== "pages")
    .map((d) => d.name);

  console.log(`Found ${componentDirs.length} component directories`);

  for (const dir of componentDirs) {
    const metaPath = path.join(registryDir, dir, "metadata.yaml");
    if (!fs.existsSync(metaPath)) {
      continue;
    }

    try {
      const content = fs.readFileSync(metaPath, "utf-8");
      const data = yaml.load(content) as MetadataYaml;

      if (data.draft === undefined) {
        data.draft = false;
        const newContent = yaml.dump(data, {
          lineWidth: -1,
          quotingType: '"',
          sortKeys: false,
        });
        fs.writeFileSync(metaPath, newContent);
        updatedComponents++;
        console.log(`  Updated: ${dir}`);
      } else {
        skippedComponents++;
      }
    } catch (e) {
      console.error(`  Error processing ${dir}:`, e);
    }
  }

  // 2. page 컴포넌트 처리
  const pagesDir = path.join(registryDir, "pages");
  if (fs.existsSync(pagesDir)) {
    const pageDirs = fs
      .readdirSync(pagesDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);

    console.log(`Found ${pageDirs.length} page directories`);

    for (const dir of pageDirs) {
      const metaPath = path.join(pagesDir, dir, "metadata.yaml");
      if (!fs.existsSync(metaPath)) {
        continue;
      }

      try {
        const content = fs.readFileSync(metaPath, "utf-8");
        const data = yaml.load(content) as MetadataYaml;

        if (data.draft === undefined) {
          data.draft = false;
          const newContent = yaml.dump(data, {
            lineWidth: -1,
            quotingType: '"',
            sortKeys: false,
          });
          fs.writeFileSync(metaPath, newContent);
          updatedPages++;
          console.log(`  Updated page: ${dir}`);
        } else {
          skippedPages++;
        }
      } catch (e) {
        console.error(`  Error processing page ${dir}:`, e);
      }
    }
  }

  console.log("\n=== Migration Complete ===\n");
  console.log(`Components updated: ${updatedComponents}`);
  console.log(`Components skipped (already has draft): ${skippedComponents}`);
  console.log(`Pages updated: ${updatedPages}`);
  console.log(`Pages skipped (already has draft): ${skippedPages}`);
  console.log(`\nTotal updated: ${updatedComponents + updatedPages}`);
}

main().catch(console.error);
