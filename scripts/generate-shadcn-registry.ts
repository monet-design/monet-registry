import * as fs from "fs";
import * as path from "path";
import yaml from "js-yaml";

/**
 * metadata.yaml 파일들을 읽어서 shadcn registry.json 생성
 * shadcn CLI가 빌드할 수 있는 형식으로 변환
 */

interface MetadataYaml {
  schemaVersion: string;
  name: string;
  category: string;
  images: {
    preview: string;
    thumbnail?: string;
  };
  title?: string;
  description?: {
    short: string;
    detailed?: string;
  };
  tags?: {
    functional?: string[];
    style?: string[];
    layout?: string[];
    industry?: string[];
  };
  freeformKeywords?: string[];
  fontFamily?: string[];
  createdAt?: string;
  status?: string;
}

interface ShadcnRegistryItem {
  name: string;
  type: "registry:block";
  title: string;
  description: string;
  dependencies: string[];
  registryDependencies: string[];
  files: {
    path: string;
    type: "registry:component";
  }[];
}

interface ShadcnRegistry {
  $schema: string;
  name: string;
  homepage: string;
  items: ShadcnRegistryItem[];
}

// 제외할 패키지 목록
const EXCLUDED_PACKAGES = new Set([
  "react",
  "react-dom",
  "next",
  "next/image",
  "next/link",
  "next/navigation",
  "next/font",
  "next/font/google",
]);

// 로컬 경로 패턴 (제외 대상)
const LOCAL_PATH_PATTERNS = [
  /^@\/lib\//,
  /^@\/hooks\//,
  /^@\/types\//,
  /^@\/config\//,
  /^@\/styles\//,
  /^\.\//,
  /^\.\.\//,
];

// shadcn/ui 컴포넌트 경로 패턴
const SHADCN_UI_PATTERN = /^@\/components\/ui\/(.+)$/;

/**
 * 컴포넌트 파일에서 import 문을 파싱하여 dependencies 추출
 */
function extractDependencies(code: string): {
  dependencies: string[];
  registryDependencies: string[];
} {
  const dependencies = new Set<string>();
  const registryDependencies = new Set<string>();

  // import 문 정규식: import ... from "package"
  const importRegex =
    /import\s+(?:(?:\{[^}]*\}|\*\s+as\s+\w+|\w+)(?:\s*,\s*(?:\{[^}]*\}|\*\s+as\s+\w+|\w+))*\s+from\s+)?['"]([^'"]+)['"]/g;

  let match;
  while ((match = importRegex.exec(code)) !== null) {
    const importPath = match[1];

    // 제외 패키지 체크
    if (EXCLUDED_PACKAGES.has(importPath)) {
      continue;
    }

    // 로컬 경로 체크
    if (LOCAL_PATH_PATTERNS.some((pattern) => pattern.test(importPath))) {
      continue;
    }

    // shadcn/ui 컴포넌트 체크
    const shadcnMatch = importPath.match(SHADCN_UI_PATTERN);
    if (shadcnMatch) {
      registryDependencies.add(shadcnMatch[1]);
      continue;
    }

    // npm 패키지 이름 추출 (scoped 패키지 지원)
    let packageName: string;
    if (importPath.startsWith("@")) {
      // @scope/package 또는 @scope/package/subpath
      const parts = importPath.split("/");
      packageName = parts.slice(0, 2).join("/");
    } else {
      // package 또는 package/subpath
      packageName = importPath.split("/")[0];
    }

    dependencies.add(packageName);
  }

  return {
    dependencies: Array.from(dependencies).sort(),
    registryDependencies: Array.from(registryDependencies).sort(),
  };
}

/**
 * 카테고리 이름을 Title Case로 변환
 */
function toTitleCase(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

async function main() {
  const registryDir = path.join(process.cwd(), "src/components/registry");
  const outputPath = path.join(process.cwd(), "registry.json");

  const componentDirs = fs
    .readdirSync(registryDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const items: ShadcnRegistryItem[] = [];
  let processed = 0;
  let skipped = 0;

  for (const componentId of componentDirs) {
    const componentDir = path.join(registryDir, componentId);
    const metadataPath = path.join(componentDir, "metadata.yaml");
    const indexPath = path.join(componentDir, "index.tsx");

    // metadata.yaml과 index.tsx 둘 다 필요
    if (!fs.existsSync(metadataPath) || !fs.existsSync(indexPath)) {
      skipped++;
      continue;
    }

    try {
      // metadata.yaml 읽기
      const metadataContent = fs.readFileSync(metadataPath, "utf-8");
      const metadata = yaml.load(metadataContent) as MetadataYaml;

      // index.tsx 읽어서 dependencies 추출
      const code = fs.readFileSync(indexPath, "utf-8");
      const { dependencies, registryDependencies } = extractDependencies(code);

      // shadcn registry item 생성
      const item: ShadcnRegistryItem = {
        name: componentId,
        type: "registry:block",
        title: metadata.title || toTitleCase(componentId),
        description:
          metadata.description?.short ||
          `${toTitleCase(metadata.category)} component`,
        dependencies,
        registryDependencies,
        files: [
          {
            path: `src/components/registry/${componentId}/index.tsx`,
            type: "registry:component",
          },
        ],
      };

      items.push(item);
      processed++;
    } catch (e) {
      console.error(`Failed to process ${componentId}:`, e);
      skipped++;
    }
  }

  // shadcn registry.json 생성
  const registry: ShadcnRegistry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "monet",
    homepage: "https://monet.design",
    items,
  };

  fs.writeFileSync(outputPath, JSON.stringify(registry, null, 2));

  console.log("\n=== Shadcn Registry Generation Complete ===\n");
  console.log(`Processed: ${processed}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`\nOutput: ${outputPath}`);
  console.log(`\nNext step: Run 'pnpm shadcn build' to generate public/r/*.json files`);
}

main().catch(console.error);
