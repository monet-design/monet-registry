import * as fs from "fs";
import * as path from "path";
import yaml from "js-yaml";

/**
 * metadata.yaml 파일들을 읽어서 registry.json 생성
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
  useCases?: string[];
  fontFamily?: string[];
  dependencies?: string[];
  source?: {
    name: string;
    url?: string;
  };
  createdAt?: string;
  updatedAt?: string;
  status?: string;
}

interface RegistryEntry {
  id: string;
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
  tags: {
    functional: string[];
    style: string[];
    layout: string[];
    industry: string[];
  };
  freeformKeywords: string[];
  searchableText: string;
  fontFamily: string[];
  componentPath: string;
  createdAt?: string;
  status: string;
}

function buildSearchableText(metadata: MetadataYaml): string {
  const parts: string[] = [
    metadata.name,
    metadata.category,
    metadata.title || "",
    metadata.description?.short || "",
    metadata.description?.detailed || "",
    ...(metadata.tags?.functional || []),
    ...(metadata.tags?.style || []),
    ...(metadata.tags?.layout || []),
    ...(metadata.tags?.industry || []),
    ...(metadata.freeformKeywords || []),
    ...(metadata.useCases || []),
  ];

  return parts.filter(Boolean).join(" ").toLowerCase();
}

async function main() {
  const registryDir = path.join(process.cwd(), "src/components/registry");
  const outputDir = path.join(process.cwd(), "dist");

  // dist 디렉토리 생성
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const componentDirs = fs
    .readdirSync(registryDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const registry: Record<string, RegistryEntry> = {};
  const searchDocuments: RegistryEntry[] = [];
  let processed = 0;
  let skipped = 0;

  for (const componentName of componentDirs) {
    const metadataPath = path.join(
      registryDir,
      componentName,
      "metadata.yaml"
    );

    if (!fs.existsSync(metadataPath)) {
      skipped++;
      continue;
    }

    try {
      const content = fs.readFileSync(metadataPath, "utf-8");
      const metadata = yaml.load(content) as MetadataYaml;

      const entry: RegistryEntry = {
        id: componentName,
        name: metadata.name,
        category: metadata.category,
        images: metadata.images,
        title: metadata.title,
        description: metadata.description,
        tags: {
          functional: metadata.tags?.functional || [],
          style: metadata.tags?.style || [],
          layout: metadata.tags?.layout || [],
          industry: metadata.tags?.industry || [],
        },
        freeformKeywords: metadata.freeformKeywords || [],
        searchableText: buildSearchableText(metadata),
        fontFamily: metadata.fontFamily || [],
        componentPath: `@/components/registry/${componentName}`,
        createdAt: metadata.createdAt,
        status: metadata.status || "stable",
      };

      registry[componentName] = entry;
      searchDocuments.push(entry);
      processed++;
    } catch (e) {
      console.error(`Failed to process ${componentName}:`, e);
      skipped++;
    }
  }

  // registry.json 저장
  const registryPath = path.join(outputDir, "registry.json");
  fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2));

  // 카테고리별 인덱스 생성
  const categoryIndex: Record<string, string[]> = {};
  for (const [id, entry] of Object.entries(registry)) {
    if (!categoryIndex[entry.category]) {
      categoryIndex[entry.category] = [];
    }
    categoryIndex[entry.category].push(id);
  }

  const categoryIndexPath = path.join(outputDir, "category-index.json");
  fs.writeFileSync(categoryIndexPath, JSON.stringify(categoryIndex, null, 2));

  // 태그별 인덱스 생성
  const tagIndex: {
    functional: Record<string, string[]>;
    style: Record<string, string[]>;
    layout: Record<string, string[]>;
    industry: Record<string, string[]>;
  } = {
    functional: {},
    style: {},
    layout: {},
    industry: {},
  };

  for (const [id, entry] of Object.entries(registry)) {
    for (const tag of entry.tags.functional) {
      if (!tagIndex.functional[tag]) tagIndex.functional[tag] = [];
      tagIndex.functional[tag].push(id);
    }
    for (const tag of entry.tags.style) {
      if (!tagIndex.style[tag]) tagIndex.style[tag] = [];
      tagIndex.style[tag].push(id);
    }
    for (const tag of entry.tags.layout) {
      if (!tagIndex.layout[tag]) tagIndex.layout[tag] = [];
      tagIndex.layout[tag].push(id);
    }
    for (const tag of entry.tags.industry) {
      if (!tagIndex.industry[tag]) tagIndex.industry[tag] = [];
      tagIndex.industry[tag].push(id);
    }
  }

  const tagIndexPath = path.join(outputDir, "tag-index.json");
  fs.writeFileSync(tagIndexPath, JSON.stringify(tagIndex, null, 2));

  console.log("\n=== Registry Generation Complete ===\n");
  console.log(`Processed: ${processed}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`\nOutput files:`);
  console.log(`  - ${registryPath}`);
  console.log(`  - ${categoryIndexPath}`);
  console.log(`  - ${tagIndexPath}`);
  console.log(`\nCategories: ${Object.keys(categoryIndex).length}`);
  console.log(`Functional tags: ${Object.keys(tagIndex.functional).length}`);
  console.log(`Style tags: ${Object.keys(tagIndex.style).length}`);
  console.log(`Layout tags: ${Object.keys(tagIndex.layout).length}`);
  console.log(`Industry tags: ${Object.keys(tagIndex.industry).length}`);
}

main().catch(console.error);
