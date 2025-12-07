#!/usr/bin/env npx tsx
/**
 * Page 컴포넌트 생성 스크립트
 *
 * 여러 section 컴포넌트를 조합하여 하나의 page 컴포넌트를 생성합니다.
 *
 * 사용 예시:
 *   npx tsx scripts/generate-page-component.ts \
 *     --name "example-com-landing" \
 *     --sections "example-com-hero,example-com-pricing,example-com-footer" \
 *     --source-url "https://example.com" \
 *     --scraped-dir "public/scraped/example-com-2025-01-15"
 */

import * as fs from "fs";
import * as path from "path";
import yaml from "js-yaml";

interface SectionInfo {
  id: string;
  category: string;
  order: number;
}

interface GeneratePageOptions {
  name: string;
  sections: string[];
  sourceUrl: string;
  scrapedDir?: string;
  title?: string;
}

/**
 * kebab-case를 PascalCase로 변환
 */
function kebabToPascal(kebabStr: string): string {
  return kebabStr
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

/**
 * Page 컴포넌트 index.tsx 생성
 */
function generatePageIndexTsx(name: string, sections: string[]): string {
  const pascalName = kebabToPascal(name);

  const imports = sections
    .map((id, i) => {
      const pascalId = kebabToPascal(id);
      return `import ${pascalId} from "@/components/registry/${id}";`;
    })
    .join("\n");

  const components = sections
    .map((id) => {
      const pascalId = kebabToPascal(id);
      return `        <${pascalId} mode={mode} />`;
    })
    .join("\n");

  return `"use client";

${imports}

interface ${pascalName}Props {
  mode?: "light" | "dark";
}

/**
 * ${name} - Full page component
 *
 * This page combines the following sections:
 * ${sections.map((s) => `- ${s}`).join("\n * ")}
 */
export default function ${pascalName}({ mode = "light" }: ${pascalName}Props) {
  return (
    <div className="w-full min-h-screen">
${components}
    </div>
  );
}
`;
}

/**
 * Page 컴포넌트 metadata.yaml 생성
 */
function generatePageMetadata(
  name: string,
  sections: SectionInfo[],
  sourceUrl: string,
  scrapedDir?: string,
  title?: string
): string {
  const now = new Date().toISOString();
  let domain = "unknown";

  try {
    domain = new URL(sourceUrl).hostname.replace(/^www\./, "");
  } catch {
    // ignore
  }

  // 미리보기 이미지 경로 결정
  let previewPath = "";
  if (scrapedDir) {
    // public/ 경로에서 상대 경로 추출
    const relativePath = scrapedDir.replace(/.*public\//, "");
    previewPath = `${relativePath}/full-page.png`;
  } else {
    previewPath = `scraped/${name}/full-page.png`;
  }

  const metadata = {
    schemaVersion: "2.0",
    name,
    category: "page",
    images: {
      preview: previewPath,
    },
    title: title || `${domain} Landing Page`,
    sections: sections.map((s) => ({
      id: s.id,
      category: s.category,
      order: s.order,
    })),
    source: {
      type: "url",
      url: sourceUrl,
      scrapedAt: now,
    },
    pageInfo: {
      totalSections: sections.length,
    },
    freeformKeywords: ["complete landing page", "full page", domain],
    createdAt: now,
    status: "stable",
  };

  return yaml.dump(metadata, { lineWidth: -1, quotingType: '"' });
}

/**
 * Section 컴포넌트의 카테고리 정보 읽기
 */
function readSectionCategory(sectionId: string): string {
  const metaPath = path.join(
    process.cwd(),
    `src/components/registry/${sectionId}/metadata.yaml`
  );

  if (fs.existsSync(metaPath)) {
    try {
      const content = fs.readFileSync(metaPath, "utf-8");
      const meta = yaml.load(content) as { category?: string };
      return meta.category || "other";
    } catch {
      return "other";
    }
  }

  return "other";
}

/**
 * Page 컴포넌트 생성
 */
export async function generatePageComponent(
  options: GeneratePageOptions
): Promise<void> {
  const { name, sections, sourceUrl, scrapedDir, title } = options;

  console.log(`\n[Generating Page Component] ${name}`);
  console.log(`[Sections] ${sections.length} sections`);

  // 각 section의 카테고리 정보 수집
  const sectionInfos: SectionInfo[] = sections.map((id, index) => ({
    id,
    category: readSectionCategory(id),
    order: index,
  }));

  // Page 컴포넌트 디렉토리 생성
  const pageDir = path.join(
    process.cwd(),
    `src/components/registry/pages/${name}`
  );
  fs.mkdirSync(pageDir, { recursive: true });

  // index.tsx 생성
  const indexContent = generatePageIndexTsx(name, sections);
  fs.writeFileSync(path.join(pageDir, "index.tsx"), indexContent);

  // metadata.yaml 생성
  const metadataContent = generatePageMetadata(
    name,
    sectionInfos,
    sourceUrl,
    scrapedDir,
    title
  );
  fs.writeFileSync(path.join(pageDir, "metadata.yaml"), metadataContent);

  console.log(`\n[Success] Page component created at: ${pageDir}`);
  console.log(`  - index.tsx`);
  console.log(`  - metadata.yaml`);
  console.log(`\nSections included:`);
  sectionInfos.forEach((s) => {
    console.log(`  ${s.order}. ${s.id} (${s.category})`);
  });
}

// CLI
async function main() {
  const args = process.argv.slice(2);

  const nameIdx = args.indexOf("--name");
  const sectionsIdx = args.indexOf("--sections");
  const urlIdx = args.indexOf("--source-url");
  const dirIdx = args.indexOf("--scraped-dir");
  const titleIdx = args.indexOf("--title");

  if (nameIdx === -1 || sectionsIdx === -1) {
    console.error(
      "Usage: npx tsx scripts/generate-page-component.ts \\\n" +
        "  --name <page-name> \\\n" +
        "  --sections <id1,id2,...> \\\n" +
        "  --source-url <url> \\\n" +
        "  [--scraped-dir <dir>] \\\n" +
        "  [--title <title>]"
    );
    console.error("\nOptions:");
    console.error("  --name        Page component name (kebab-case, required)");
    console.error(
      "  --sections    Comma-separated section IDs in order (required)"
    );
    console.error("  --source-url  Original URL (required)");
    console.error("  --scraped-dir Path to scraped directory (optional)");
    console.error("  --title       Page title (optional)");
    process.exit(1);
  }

  const name = args[nameIdx + 1];
  const sections = args[sectionsIdx + 1].split(",").filter(Boolean);
  const sourceUrl = args[urlIdx + 1] || "";
  const scrapedDir = dirIdx !== -1 ? args[dirIdx + 1] : undefined;
  const title = titleIdx !== -1 ? args[titleIdx + 1] : undefined;

  if (sections.length === 0) {
    console.error("Error: At least one section ID is required");
    process.exit(1);
  }

  await generatePageComponent({
    name,
    sections,
    sourceUrl,
    scrapedDir,
    title,
  });
}

main().catch(console.error);
