/**
 * 특정 페이지와 하위 섹션 컴포넌트들을 draft 상태로 설정하는 스크립트
 *
 * 사용법:
 *   npx tsx scripts/set-draft-by-page.ts page-id-1 page-id-2 ...
 *   pnpm metadata:set-draft page-id-1 page-id-2 ...
 */

import * as fs from "fs";
import * as path from "path";
import yaml from "js-yaml";

interface PageRegistry {
  [pageId: string]: {
    id: string;
    sections: Array<{ id: string; category: string; order: number }>;
  };
}

interface MetadataYaml {
  draft?: boolean;
  [key: string]: unknown;
}

function setDraft(metaPath: string, componentId: string): boolean {
  if (!fs.existsSync(metaPath)) {
    console.log(`  [SKIP] ${componentId} - metadata.yaml not found`);
    return false;
  }

  try {
    const content = fs.readFileSync(metaPath, "utf-8");
    const data = yaml.load(content) as MetadataYaml;

    if (data.draft === true) {
      console.log(`  [SKIP] ${componentId} - already draft`);
      return false;
    }

    data.draft = true;
    const newContent = yaml.dump(data, {
      lineWidth: -1,
      quotingType: '"',
      sortKeys: false,
    });
    fs.writeFileSync(metaPath, newContent);
    console.log(`  [SET]  ${componentId} -> draft: true`);
    return true;
  } catch (e) {
    console.error(`  [ERR]  ${componentId}: ${e}`);
    return false;
  }
}

async function main() {
  const pageIds = process.argv.slice(2);

  if (pageIds.length === 0) {
    console.error("Usage: npx tsx scripts/set-draft-by-page.ts <page-id> [page-id...]");
    console.error("\nExample:");
    console.error("  npx tsx scripts/set-draft-by-page.ts torder-com-landing payhere-in-landing");
    process.exit(1);
  }

  // page-registry.json 로드
  const pageRegistryPath = path.join(
    process.cwd(),
    "public/generated/page-registry.json"
  );

  if (!fs.existsSync(pageRegistryPath)) {
    console.error("Error: page-registry.json not found. Run 'pnpm metadata:build' first.");
    process.exit(1);
  }

  const pageRegistry: PageRegistry = JSON.parse(
    fs.readFileSync(pageRegistryPath, "utf-8")
  );

  const registryDir = path.join(process.cwd(), "src/components/registry");
  let totalUpdated = 0;

  for (const pageId of pageIds) {
    console.log(`\n=== Processing: ${pageId} ===`);

    const page = pageRegistry[pageId];
    if (!page) {
      console.log(`  [WARN] Page not found in registry: ${pageId}`);
      continue;
    }

    // 1. 페이지 컴포넌트 draft 설정
    const pageMetaPath = path.join(process.cwd(), "src/components/pages", pageId, "metadata.yaml");
    if (setDraft(pageMetaPath, `pages/${pageId}`)) {
      totalUpdated++;
    }

    // 2. 섹션 컴포넌트들 draft 설정
    for (const section of page.sections) {
      const sectionMetaPath = path.join(registryDir, section.id, "metadata.yaml");
      if (setDraft(sectionMetaPath, section.id)) {
        totalUpdated++;
      }
    }
  }

  console.log(`\n=== Complete ===`);
  console.log(`Total updated: ${totalUpdated}`);
  console.log(`\nRun 'pnpm metadata:build' to rebuild registry.json`);
}

main().catch(console.error);
