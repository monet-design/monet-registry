import * as fs from "fs";
import * as path from "path";
import { create, insert, search } from "@orama/orama";
import type { Orama } from "@orama/orama";

/**
 * 자연어 쿼리로 컴포넌트 검색 CLI
 *
 * 사용 예시:
 *   pnpm metadata:query "dark theme hero for fintech"
 *   pnpm metadata:query "minimal pricing table with toggle"
 *   pnpm metadata:query "testimonial slider carousel"
 */

interface RegistryEntry {
  id: string;
  name: string;
  category: string;
  images: { preview: string };
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
}

// 카테고리 키워드 매핑
const categoryKeywords: Record<string, string[]> = {
  hero: ["hero", "landing", "header section", "above fold"],
  stats: ["stats", "statistics", "metrics", "numbers", "counter"],
  testimonial: ["testimonial", "review", "feedback", "quote", "social proof"],
  feature: ["feature", "features", "showcase", "benefits"],
  pricing: ["pricing", "price", "plan", "subscription", "tier"],
  cta: ["cta", "call to action", "signup", "get started"],
  contact: ["contact", "form", "get in touch", "reach out"],
  faq: ["faq", "question", "answer", "help"],
  "how-it-works": ["how it works", "process", "steps", "workflow"],
  biography: ["bio", "biography", "about", "portfolio", "profile"],
  "before-after": ["before", "after", "comparison", "versus"],
};

// 스타일 태그 키워드 매핑
const styleKeywords: Record<string, string[]> = {
  "dark-theme": ["dark", "dark theme", "dark mode", "black"],
  "light-theme": ["light", "light theme", "white", "bright"],
  minimal: ["minimal", "minimalist", "clean", "simple"],
  modern: ["modern", "contemporary"],
  gradient: ["gradient"],
  glassmorphism: ["glass", "glassmorphism", "blur"],
  neon: ["neon", "glow"],
  serif: ["serif", "elegant", "classic"],
};

// 레이아웃 태그 키워드 매핑
const layoutKeywords: Record<string, string[]> = {
  centered: ["centered", "center"],
  "two-column": ["two column", "split", "side by side"],
  "three-column": ["three column", "3 column"],
  "card-grid": ["card", "grid", "cards"],
  bento: ["bento"],
};

// 기능 태그 키워드 매핑
const functionalKeywords: Record<string, string[]> = {
  carousel: ["carousel", "slider"],
  tabs: ["tabs", "tab"],
  accordion: ["accordion", "expandable", "collapse"],
  toggle: ["toggle", "switch"],
  "email-capture": ["email", "newsletter", "subscribe", "waitlist"],
  animation: ["animated", "animation", "motion"],
};

// 산업 태그 키워드 매핑
const industryKeywords: Record<string, string[]> = {
  saas: ["saas", "software", "app"],
  fintech: ["fintech", "finance", "financial", "banking"],
  "e-commerce": ["ecommerce", "shop", "store", "product"],
  healthcare: ["health", "medical", "wellness"],
  education: ["education", "course", "learning", "school"],
  portfolio: ["portfolio", "personal", "freelance"],
};

function extractFromQuery(
  query: string,
  mappings: Record<string, string[]>
): string[] {
  const normalizedQuery = query.toLowerCase();
  const matches: string[] = [];

  for (const [tag, keywords] of Object.entries(mappings)) {
    for (const kw of keywords) {
      if (normalizedQuery.includes(kw)) {
        matches.push(tag);
        break;
      }
    }
  }

  return matches;
}

function parseNaturalQuery(query: string) {
  return {
    categories: extractFromQuery(query, categoryKeywords),
    styles: extractFromQuery(query, styleKeywords),
    layouts: extractFromQuery(query, layoutKeywords),
    functionals: extractFromQuery(query, functionalKeywords),
    industries: extractFromQuery(query, industryKeywords),
  };
}

async function loadAndIndexRegistry(): Promise<{
  db: Orama<any>;
  entries: RegistryEntry[];
}> {
  const registryPath = path.join(process.cwd(), "dist/registry.json");

  if (!fs.existsSync(registryPath)) {
    console.error("Error: dist/registry.json not found.");
    console.error("Run 'pnpm metadata:build' first.");
    process.exit(1);
  }

  const registry: Record<string, RegistryEntry> = JSON.parse(
    fs.readFileSync(registryPath, "utf-8")
  );
  const entries = Object.values(registry);

  // Orama 인덱스 생성
  const db = await create({
    schema: {
      id: "string",
      name: "string",
      category: "string",
      searchableText: "string",
      functionalTags: "string[]",
      styleTags: "string[]",
      layoutTags: "string[]",
      industryTags: "string[]",
    } as const,
  });

  // 문서 삽입
  for (const entry of entries) {
    await insert(db, {
      id: entry.id,
      name: entry.name,
      category: entry.category,
      searchableText: entry.searchableText,
      functionalTags: entry.tags.functional,
      styleTags: entry.tags.style,
      layoutTags: entry.tags.layout,
      industryTags: entry.tags.industry,
    });
  }

  return { db, entries };
}

function printResults(
  results: Array<{ id: string; name: string; category: string; score: number }>,
  registry: Record<string, RegistryEntry>,
  parsed: ReturnType<typeof parseNaturalQuery>
): void {
  if (results.length === 0) {
    console.log("\nNo components found matching your query.\n");
    return;
  }

  // 파싱된 조건 출력
  const conditions: string[] = [];
  if (parsed.categories.length) conditions.push(`category: ${parsed.categories.join(", ")}`);
  if (parsed.styles.length) conditions.push(`style: ${parsed.styles.join(", ")}`);
  if (parsed.layouts.length) conditions.push(`layout: ${parsed.layouts.join(", ")}`);
  if (parsed.functionals.length) conditions.push(`functional: ${parsed.functionals.join(", ")}`);
  if (parsed.industries.length) conditions.push(`industry: ${parsed.industries.join(", ")}`);

  console.log("\n=== Query Analysis ===");
  if (conditions.length) {
    console.log(`  Detected: ${conditions.join(" | ")}`);
  } else {
    console.log("  No specific filters detected, using full-text search");
  }

  console.log(`\n=== Results (${results.length}) ===\n`);

  for (const result of results) {
    const entry = registry[result.id];
    const score = Math.round(result.score * 100) / 100;

    const tags = [
      ...entry.tags.style.slice(0, 2),
      ...entry.tags.layout.slice(0, 1),
    ].join(", ");

    console.log(`  ${result.name} (score: ${score})`);
    console.log(`    Category: ${result.category}`);
    if (tags) {
      console.log(`    Tags: ${tags}`);
    }
    console.log(`    Path: ${entry.componentPath}`);
    console.log("");
  }
}

function printHelp(): void {
  console.log(`
Usage: pnpm metadata:query "<natural language query>"

The query parser automatically extracts:
  - Categories: hero, pricing, testimonial, contact, etc.
  - Style tags: dark, minimal, modern, gradient, etc.
  - Layout tags: centered, two-column, card grid, etc.
  - Functional tags: carousel, tabs, toggle, etc.
  - Industry tags: saas, fintech, portfolio, etc.

Examples:
  pnpm metadata:query "dark theme hero for fintech"
  pnpm metadata:query "minimal pricing table with toggle"
  pnpm metadata:query "testimonial carousel with cards"
  pnpm metadata:query "centered contact form"
`);
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0] === "--help" || args[0] === "-h") {
    printHelp();
    return;
  }

  const query = args.join(" ");
  console.log(`\nSearching for: "${query}"`);

  // 자연어 파싱
  const parsed = parseNaturalQuery(query);

  // 레지스트리 로드 및 인덱싱
  const { db, entries } = await loadAndIndexRegistry();

  // 필터 조건 구성 (느슨하게 - 카테고리만 필수 필터로 사용)
  const where: Record<string, unknown> = {};

  if (parsed.categories.length) {
    where.category = parsed.categories[0]; // 첫 번째 카테고리만 사용
  }

  // 먼저 필터 + 검색 시도
  let searchResult = await search(db, {
    term: query,
    properties: ["searchableText", "name", "category"],
    limit: 15,
    where: Object.keys(where).length > 0 ? where : undefined,
  });

  // 결과가 없으면 필터 없이 텍스트 검색만
  if (searchResult.hits.length === 0 && Object.keys(where).length > 0) {
    console.log("  (Relaxing filters for broader search...)");
    searchResult = await search(db, {
      term: query,
      properties: ["searchableText", "name", "category"],
      limit: 15,
    });
  }

  const results = searchResult.hits.map((hit) => ({
    id: hit.document.id as string,
    name: hit.document.name as string,
    category: hit.document.category as string,
    score: hit.score,
  }));

  // 레지스트리를 Record 형태로 변환
  const registryMap: Record<string, RegistryEntry> = {};
  for (const entry of entries) {
    registryMap[entry.id] = entry;
  }

  printResults(results, registryMap, parsed);
}

main().catch(console.error);
