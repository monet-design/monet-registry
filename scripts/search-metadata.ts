import * as fs from "fs";
import * as path from "path";
import { parseArgs } from "util";

/**
 * 컴포넌트 메타데이터 검색 CLI
 *
 * 사용 예시:
 *   pnpm metadata:search "hero"
 *   pnpm metadata:search --category hero
 *   pnpm metadata:search --style dark-theme --layout centered
 *   pnpm metadata:search "pricing" --category pricing --limit 5
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

function loadRegistry(): Record<string, RegistryEntry> {
  const registryPath = path.join(
    process.cwd(),
    "public/generated/registry.json"
  );

  if (!fs.existsSync(registryPath)) {
    console.error("Error: public/generated/registry.json not found.");
    console.error("Run 'pnpm metadata:build' first.");
    process.exit(1);
  }

  return JSON.parse(fs.readFileSync(registryPath, "utf-8"));
}

function matchesFilter(
  entry: RegistryEntry,
  filters: {
    category?: string;
    style?: string;
    layout?: string;
    industry?: string;
    functional?: string;
  }
): boolean {
  if (filters.category && entry.category !== filters.category) {
    return false;
  }

  if (filters.style && !entry.tags.style.includes(filters.style)) {
    return false;
  }

  if (filters.layout && !entry.tags.layout.includes(filters.layout)) {
    return false;
  }

  if (filters.industry && !entry.tags.industry.includes(filters.industry)) {
    return false;
  }

  if (filters.functional && !entry.tags.functional.includes(filters.functional)) {
    return false;
  }

  return true;
}

function matchesQuery(entry: RegistryEntry, query: string): boolean {
  if (!query) return true;

  const normalizedQuery = query.toLowerCase();
  return entry.searchableText.includes(normalizedQuery);
}

function printResults(results: RegistryEntry[], query?: string): void {
  if (results.length === 0) {
    console.log("\nNo components found matching your criteria.\n");
    return;
  }

  console.log(`\n=== Search Results (${results.length}) ===\n`);

  for (const entry of results) {
    const tags = [
      ...entry.tags.style.slice(0, 2),
      ...entry.tags.layout.slice(0, 1),
      ...entry.tags.industry.slice(0, 1),
    ].join(", ");

    console.log(`  ${entry.name}`);
    console.log(`    Category: ${entry.category}`);
    if (tags) {
      console.log(`    Tags: ${tags}`);
    }
    console.log(`    Path: ${entry.componentPath}`);
    console.log("");
  }
}

function printHelp(): void {
  console.log(`
Usage: pnpm metadata:search [query] [options]

Arguments:
  query                    Text to search in component names and keywords

Options:
  -c, --category <name>    Filter by category (hero, stats, testimonial, etc.)
  -s, --style <tag>        Filter by style tag (dark-theme, minimal, etc.)
  -l, --layout <tag>       Filter by layout tag (centered, two-column, etc.)
  -i, --industry <tag>     Filter by industry tag (saas, fintech, etc.)
  -f, --functional <tag>   Filter by functional tag (carousel, tabs, etc.)
  -n, --limit <number>     Limit results (default: 20)
  -h, --help               Show this help message

Examples:
  pnpm metadata:search "hero"
  pnpm metadata:search --category pricing
  pnpm metadata:search --style dark-theme --layout centered
  pnpm metadata:search "fintech" --category hero --limit 5
`);
}

function main(): void {
  const { values, positionals } = parseArgs({
    options: {
      category: { type: "string", short: "c" },
      style: { type: "string", short: "s" },
      layout: { type: "string", short: "l" },
      industry: { type: "string", short: "i" },
      functional: { type: "string", short: "f" },
      limit: { type: "string", short: "n", default: "20" },
      help: { type: "boolean", short: "h" },
    },
    allowPositionals: true,
  });

  if (values.help) {
    printHelp();
    return;
  }

  const query = positionals.join(" ");
  const limit = parseInt(values.limit || "20", 10);

  const registry = loadRegistry();
  const entries = Object.values(registry);

  // 필터링
  let results = entries.filter((entry) => {
    if (!matchesFilter(entry, {
      category: values.category,
      style: values.style,
      layout: values.layout,
      industry: values.industry,
      functional: values.functional,
    })) {
      return false;
    }

    if (!matchesQuery(entry, query)) {
      return false;
    }

    return true;
  });

  // 정렬: 쿼리가 있으면 이름 매칭 우선
  if (query) {
    const normalizedQuery = query.toLowerCase();
    results.sort((a, b) => {
      const aNameMatch = a.name.toLowerCase().includes(normalizedQuery) ? 0 : 1;
      const bNameMatch = b.name.toLowerCase().includes(normalizedQuery) ? 0 : 1;
      return aNameMatch - bNameMatch;
    });
  }

  // 제한
  results = results.slice(0, limit);

  printResults(results, query);
}

main();
