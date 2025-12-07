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
    name?: string;
    type?: string;
    url?: string;
    scrapedAt?: string;
    sectionIndex?: number;
  };
  parentPage?: string;
  createdAt?: string;
  updatedAt?: string;
  status?: string;
}

interface PageMetadataYaml extends MetadataYaml {
  sections: Array<{
    id: string;
    category: string;
    order: number;
  }>;
  pageInfo?: {
    totalSections: number;
    estimatedHeight?: number;
    primaryColors?: string[];
    typography?: {
      headingFont?: string;
      bodyFont?: string;
    };
  };
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
  parentPage?: string;
  source?: {
    type?: string;
    url?: string;
    scrapedAt?: string;
    sectionIndex?: number;
  };
  createdAt?: string;
  status: string;
}

interface PageRegistryEntry extends RegistryEntry {
  sections: Array<{
    id: string;
    category: string;
    order: number;
  }>;
  pageInfo?: {
    totalSections: number;
    estimatedHeight?: number;
    primaryColors?: string[];
  };
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
  const outputDir = path.join(process.cwd(), "public/generated");

  // public/generated 디렉토리 생성
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
        parentPage: metadata.parentPage,
        source: metadata.source
          ? {
              type: metadata.source.type,
              url: metadata.source.url,
              scrapedAt: metadata.source.scrapedAt,
              sectionIndex: metadata.source.sectionIndex,
            }
          : undefined,
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
  const categoryIndexUnsorted: Record<string, string[]> = {};
  for (const [id, entry] of Object.entries(registry)) {
    if (!categoryIndexUnsorted[entry.category]) {
      categoryIndexUnsorted[entry.category] = [];
    }
    categoryIndexUnsorted[entry.category].push(id);
  }

  // 컴포넌트 수가 많은 순서로 정렬
  const categoryIndex: Record<string, string[]> = {};
  const sortedCategories = Object.entries(categoryIndexUnsorted)
    .sort((a, b) => b[1].length - a[1].length)
    .map(([key]) => key);

  for (const category of sortedCategories) {
    categoryIndex[category] = categoryIndexUnsorted[category];
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

  // ========================================
  // Page 컴포넌트 처리
  // ========================================
  const pagesDir = path.join(registryDir, "pages");
  const pageRegistry: Record<string, PageRegistryEntry> = {};
  let pagesProcessed = 0;

  if (fs.existsSync(pagesDir)) {
    const pageDirs = fs
      .readdirSync(pagesDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    for (const pageName of pageDirs) {
      const metadataPath = path.join(pagesDir, pageName, "metadata.yaml");

      if (!fs.existsSync(metadataPath)) {
        continue;
      }

      try {
        const content = fs.readFileSync(metadataPath, "utf-8");
        const metadata = yaml.load(content) as PageMetadataYaml;

        const entry: PageRegistryEntry = {
          id: pageName,
          name: metadata.name,
          category: "page",
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
          componentPath: `@/components/registry/pages/${pageName}`,
          source: metadata.source
            ? {
                type: metadata.source.type,
                url: metadata.source.url,
                scrapedAt: metadata.source.scrapedAt,
              }
            : undefined,
          createdAt: metadata.createdAt,
          status: metadata.status || "stable",
          sections: metadata.sections || [],
          pageInfo: metadata.pageInfo,
        };

        pageRegistry[pageName] = entry;
        pagesProcessed++;
      } catch (e) {
        console.error(`Failed to process page ${pageName}:`, e);
      }
    }
  }

  // page-registry.json 저장
  const pageRegistryPath = path.join(outputDir, "page-registry.json");
  fs.writeFileSync(pageRegistryPath, JSON.stringify(pageRegistry, null, 2));

  // page-index.json 생성 (page → sections 매핑)
  const pageIndex: Record<string, string[]> = {};
  for (const [pageId, page] of Object.entries(pageRegistry)) {
    pageIndex[pageId] = page.sections.map((s) => s.id);
  }
  const pageIndexPath = path.join(outputDir, "page-index.json");
  fs.writeFileSync(pageIndexPath, JSON.stringify(pageIndex, null, 2));

  // section-to-page.json 생성 (section → page 역참조)
  const sectionToPage: Record<string, string> = {};
  for (const [pageId, page] of Object.entries(pageRegistry)) {
    for (const section of page.sections) {
      sectionToPage[section.id] = pageId;
    }
  }
  const sectionToPagePath = path.join(outputDir, "section-to-page.json");
  fs.writeFileSync(sectionToPagePath, JSON.stringify(sectionToPage, null, 2));

  console.log("\n=== Registry Generation Complete ===\n");
  console.log(`Sections processed: ${processed}`);
  console.log(`Sections skipped: ${skipped}`);
  console.log(`Pages processed: ${pagesProcessed}`);
  console.log(`\nOutput files:`);
  console.log(`  - ${registryPath}`);
  console.log(`  - ${categoryIndexPath}`);
  console.log(`  - ${tagIndexPath}`);
  console.log(`  - ${pageRegistryPath}`);
  console.log(`  - ${pageIndexPath}`);
  console.log(`  - ${sectionToPagePath}`);
  console.log(`\nCategories: ${Object.keys(categoryIndex).length}`);
  console.log(`Functional tags: ${Object.keys(tagIndex.functional).length}`);
  console.log(`Style tags: ${Object.keys(tagIndex.style).length}`);
  console.log(`Layout tags: ${Object.keys(tagIndex.layout).length}`);
  console.log(`Industry tags: ${Object.keys(tagIndex.industry).length}`);
}

main().catch(console.error);
