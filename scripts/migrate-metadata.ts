import * as fs from "fs";
import * as path from "path";
import yaml from "js-yaml";

/**
 * 레거시 const.ts를 metadata.yaml로 마이그레이션하는 스크립트
 */

// 카테고리 추론용 키워드 매핑 (우선순위 순서대로 체크)
// 더 구체적인 카테고리를 먼저 배치
const categoryPriority: Array<[string, string[]]> = [
  // 가장 구체적인 카테고리들 먼저
  ["pricing", ["pricing", "pricing table", "pricing cards", "subscription", "plans", "tier"]],
  ["testimonial", ["testimonial", "testimonials", "review", "reviews", "social proof", "quotes", "feedback", "customer feedback"]],
  ["stats", ["stats", "statistics", "metrics", "numbers", "counter", "data"]],
  ["contact", ["contact", "contact form", "contact us", "get in touch"]],
  ["faq", ["faq", "frequently asked questions", "questions", "q&a"]],
  ["how-it-works", ["how it works", "process", "steps", "workflow", "guide", "tutorial"]],
  ["biography", ["biography", "bio", "about me", "portfolio", "personal", "designer", "developer profile"]],
  ["before-after", ["before after", "before-after", "comparison", "vs", "versus"]],
  ["cta", ["cta", "call to action", "get started", "sign up section"]],
  ["team", ["team", "team members", "our team", "staff"]],
  ["logo-cloud", ["logo cloud", "logos", "clients", "partners", "trusted by"]],
  ["newsletter", ["newsletter", "subscribe", "email subscribe"]],
  ["header", ["header", "navigation", "navbar", "nav"]],
  ["footer", ["footer", "site footer"]],
  ["gallery", ["gallery", "image gallery", "photo gallery"]],
  ["showcase", ["showcase", "product showcase", "demo", "preview"]],
  // feature는 hero보다 먼저 (더 구체적)
  ["feature", ["feature", "features", "feature showcase", "product features", "feature tabs", "feature carousel"]],
  // hero는 마지막 (가장 일반적)
  ["hero", ["hero", "hero section", "landing page hero", "lead capture", "waitlist"]],
];

const categoryKeywords: Record<string, string[]> = Object.fromEntries(categoryPriority);

// 기능 태그 매핑
const functionalTagKeywords: Record<string, string[]> = {
  carousel: ["carousel", "card slider"],
  slider: ["slider"],
  tabs: ["tabs", "tab"],
  accordion: ["accordion", "expandable"],
  modal: ["modal", "popup", "dialog"],
  toggle: ["toggle", "switch", "billing toggle"],
  counter: ["counter", "counting"],
  animation: ["animation", "animated", "motion"],
  "hover-effect": ["hover effect", "hover"],
  "email-capture": ["email capture", "email input", "waitlist", "join waitlist"],
  "lead-capture": ["lead capture", "lead gen", "lead generation"],
  newsletter: ["newsletter", "subscribe"],
  "contact-form": ["contact form"],
  video: ["video", "youtube", "vimeo"],
};

// 스타일 태그 매핑
const styleTagKeywords: Record<string, string[]> = {
  "dark-theme": [
    "dark theme",
    "dark mode",
    "dark background",
    "black background",
    "navy",
  ],
  "light-theme": [
    "light theme",
    "light mode",
    "white background",
    "cream background",
    "beige",
  ],
  minimal: ["minimal", "minimalist", "clean design", "simple"],
  modern: ["modern", "contemporary"],
  elegant: ["elegant", "luxury", "premium"],
  playful: ["playful", "fun", "colorful"],
  gradient: ["gradient"],
  glassmorphism: ["glass", "glassmorphism", "blur"],
  glow: ["glow", "glow effect", "neon glow"],
  neon: ["neon"],
  serif: ["serif", "serif italic", "playfair", "instrument serif"],
};

// 레이아웃 태그 매핑
const layoutTagKeywords: Record<string, string[]> = {
  centered: ["centered", "center aligned", "centered layout"],
  "two-column": ["two column", "two-column", "split", "split layout"],
  "three-column": ["three column", "three-column", "three cards"],
  "four-column": ["four column", "four-column", "4 column"],
  "card-grid": ["card grid", "grid", "cards"],
  bento: ["bento", "bento grid"],
  stack: ["stack", "stacked"],
  inline: ["inline", "inline layout", "horizontal"],
  "full-width": ["full width", "full-width"],
};

// 산업 태그 매핑
const industryTagKeywords: Record<string, string[]> = {
  saas: ["saas", "software", "app", "platform"],
  fintech: ["fintech", "financial", "finance", "banking", "accounting", "bookkeeping"],
  "e-commerce": ["e-commerce", "ecommerce", "shop", "store", "product"],
  healthcare: ["healthcare", "health", "medical", "wellness"],
  education: ["education", "course", "learning", "students", "teachers"],
  creative: ["creative", "design", "designer", "agency"],
  portfolio: ["portfolio", "personal", "freelance", "freelancer"],
  startup: ["startup", "early access"],
  food: ["food", "beverage", "restaurant", "nutrition", "protein"],
  fashion: ["fashion", "clothing", "wardrobe", "styling"],
  ai: ["ai", "ai-powered", "artificial intelligence", "machine learning"],
  crypto: ["crypto", "blockchain", "web3"],
};

function inferCategory(keywords: string[]): string {
  const normalizedKeywords = keywords.map((k) => k.toLowerCase());

  // 우선순위 배열 순서대로 체크
  for (const [category, categoryKws] of categoryPriority) {
    for (const kw of categoryKws) {
      if (normalizedKeywords.some((nk) => nk.includes(kw) || kw.includes(nk))) {
        return category;
      }
    }
  }

  return "other";
}

function extractTags(
  keywords: string[],
  mapping: Record<string, string[]>
): string[] {
  const normalizedKeywords = keywords.map((k) => k.toLowerCase());
  const foundTags: Set<string> = new Set();

  for (const [tag, tagKeywords] of Object.entries(mapping)) {
    for (const kw of tagKeywords) {
      if (normalizedKeywords.some((nk) => nk.includes(kw) || kw.includes(nk))) {
        foundTags.add(tag);
        break;
      }
    }
  }

  return Array.from(foundTags);
}

function extractFreeformKeywords(
  keywords: string[],
  usedKeywords: Set<string>
): string[] {
  return keywords.filter((k) => !usedKeywords.has(k.toLowerCase())).slice(0, 10);
}

interface LegacyMetadata {
  imagePath: string;
  name: string;
  keywords: string[];
  fontFamily: string[];
}

function parseConstTs(content: string): LegacyMetadata | null {
  try {
    // imagePath 추출
    const imagePathMatch = content.match(/imagePath:\s*["']([^"']+)["']/);
    const imagePath = imagePathMatch ? imagePathMatch[1] : "";

    // name 추출
    const nameMatch = content.match(/name:\s*["']([^"']+)["']/);
    const name = nameMatch ? nameMatch[1] : "";

    // keywords 추출
    const keywordsMatch = content.match(/keywords:\s*\[([\s\S]*?)\]/);
    let keywords: string[] = [];
    if (keywordsMatch) {
      const keywordsStr = keywordsMatch[1];
      keywords = keywordsStr
        .split(",")
        .map((k) => k.trim().replace(/["']/g, ""))
        .filter((k) => k.length > 0);
    }

    // fontFamily 추출
    const fontFamilyMatch = content.match(/fontFamily:\s*\[([\s\S]*?)\]/);
    let fontFamily: string[] = [];
    if (fontFamilyMatch) {
      const fontFamilyStr = fontFamilyMatch[1];
      fontFamily = fontFamilyStr
        .split(",")
        .map((f) => f.trim().replace(/["']/g, ""))
        .filter((f) => f.length > 0);
    }

    return { imagePath, name, keywords, fontFamily };
  } catch (e) {
    console.error("Failed to parse const.ts:", e);
    return null;
  }
}

function migrateMetadata(legacy: LegacyMetadata): object {
  const category = inferCategory(legacy.keywords);
  const functionalTags = extractTags(legacy.keywords, functionalTagKeywords);
  const styleTags = extractTags(legacy.keywords, styleTagKeywords);
  const layoutTags = extractTags(legacy.keywords, layoutTagKeywords);
  const industryTags = extractTags(legacy.keywords, industryTagKeywords);

  // 사용된 키워드 수집
  const usedKeywords = new Set<string>();
  [...Object.values(categoryKeywords).flat()].forEach((k) =>
    usedKeywords.add(k.toLowerCase())
  );
  [...Object.values(functionalTagKeywords).flat()].forEach((k) =>
    usedKeywords.add(k.toLowerCase())
  );
  [...Object.values(styleTagKeywords).flat()].forEach((k) =>
    usedKeywords.add(k.toLowerCase())
  );
  [...Object.values(layoutTagKeywords).flat()].forEach((k) =>
    usedKeywords.add(k.toLowerCase())
  );
  [...Object.values(industryTagKeywords).flat()].forEach((k) =>
    usedKeywords.add(k.toLowerCase())
  );

  const freeformKeywords = extractFreeformKeywords(legacy.keywords, usedKeywords);

  const metadata: Record<string, unknown> = {
    schemaVersion: "2.0",
    name: legacy.name,
    category,
    images: {
      preview: legacy.imagePath,
    },
  };

  // 태그 추가 (비어있지 않은 경우만)
  const tags: Record<string, string[]> = {};
  if (functionalTags.length > 0) tags.functional = functionalTags;
  if (styleTags.length > 0) tags.style = styleTags;
  if (layoutTags.length > 0) tags.layout = layoutTags;
  if (industryTags.length > 0) tags.industry = industryTags;

  if (Object.keys(tags).length > 0) {
    metadata.tags = tags;
  }

  // 자유 형식 키워드 추가
  if (freeformKeywords.length > 0) {
    metadata.freeformKeywords = freeformKeywords;
  }

  // 폰트 패밀리 추가
  if (legacy.fontFamily.length > 0) {
    metadata.fontFamily = legacy.fontFamily;
  }

  // 생성일 추가
  metadata.createdAt = new Date().toISOString().split("T")[0];
  metadata.status = "stable";

  return metadata;
}

async function main() {
  const registryDir = path.join(
    process.cwd(),
    "src/components/registry"
  );

  // const.ts 파일들 찾기
  const componentDirs = fs
    .readdirSync(registryDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  let migrated = 0;
  let skipped = 0;
  let failed = 0;

  for (const componentName of componentDirs) {
    const componentDir = path.join(registryDir, componentName);
    const constTsPath = path.join(componentDir, "const.ts");
    const metadataYamlPath = path.join(componentDir, "metadata.yaml");

    // const.ts가 없으면 스킵
    if (!fs.existsSync(constTsPath)) {
      skipped++;
      continue;
    }

    // 이미 metadata.yaml이 있으면 스킵
    if (fs.existsSync(metadataYamlPath)) {
      console.log(`[SKIP] ${componentName}: metadata.yaml already exists`);
      skipped++;
      continue;
    }

    try {
      const constTsContent = fs.readFileSync(constTsPath, "utf-8");
      const legacy = parseConstTs(constTsContent);

      if (!legacy) {
        console.error(`[FAIL] ${componentName}: Failed to parse const.ts`);
        failed++;
        continue;
      }

      const newMetadata = migrateMetadata(legacy);
      const yamlContent = yaml.dump(newMetadata, {
        indent: 2,
        lineWidth: 120,
        quotingType: '"',
        forceQuotes: false,
      });

      fs.writeFileSync(metadataYamlPath, yamlContent);
      console.log(`[OK] ${componentName}`);
      migrated++;
    } catch (e) {
      console.error(`[FAIL] ${componentName}:`, e);
      failed++;
    }
  }

  console.log("\n--- Migration Summary ---");
  console.log(`Migrated: ${migrated}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Failed: ${failed}`);
  console.log(`Total: ${componentDirs.length}`);
}

main().catch(console.error);
