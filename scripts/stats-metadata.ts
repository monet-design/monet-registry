import * as fs from "fs";
import * as path from "path";
import { parseArgs } from "util";

/**
 * 컴포넌트 메타데이터 통계 CLI
 *
 * 사용 예시:
 *   pnpm metadata:stats                 # 전체 통계
 *   pnpm metadata:stats --category      # 카테고리별 분포
 *   pnpm metadata:stats --tags          # 태그별 분포
 *   pnpm metadata:stats --fonts         # 폰트 사용 현황
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
  fontFamily: string[];
  status: string;
}

function loadRegistry(): Record<string, RegistryEntry> {
  const registryPath = path.join(process.cwd(), "dist/registry.json");

  if (!fs.existsSync(registryPath)) {
    console.error("Error: dist/registry.json not found.");
    console.error("Run 'pnpm metadata:build' first.");
    process.exit(1);
  }

  return JSON.parse(fs.readFileSync(registryPath, "utf-8"));
}

function printBarChart(
  data: [string, number][],
  options: { maxWidth?: number; showPercent?: boolean; total?: number } = {}
): void {
  const { maxWidth = 30, showPercent = false, total } = options;
  const max = Math.max(...data.map(([, v]) => v));

  for (const [label, value] of data) {
    const barLength = Math.round((value / max) * maxWidth);
    const bar = "█".repeat(barLength);
    const paddedLabel = label.padEnd(16);

    if (showPercent && total) {
      const percent = Math.round((value / total) * 100);
      console.log(`  ${paddedLabel} ${bar} ${value} (${percent}%)`);
    } else {
      console.log(`  ${paddedLabel} ${bar} ${value}`);
    }
  }
}

function countByKey<T extends string>(
  items: T[]
): [string, number][] {
  const counts: Record<string, number> = {};

  for (const item of items) {
    counts[item] = (counts[item] || 0) + 1;
  }

  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
}

function printCategoryStats(entries: RegistryEntry[]): void {
  console.log("\n=== Category Distribution ===\n");

  const categories = entries.map((e) => e.category);
  const distribution = countByKey(categories);

  printBarChart(distribution, { showPercent: true, total: entries.length });
}

function printTagStats(entries: RegistryEntry[]): void {
  // Style tags
  console.log("\n=== Style Tags ===\n");
  const styleTags = entries.flatMap((e) => e.tags.style);
  const styleDistribution = countByKey(styleTags).slice(0, 10);
  printBarChart(styleDistribution);

  // Layout tags
  console.log("\n=== Layout Tags ===\n");
  const layoutTags = entries.flatMap((e) => e.tags.layout);
  const layoutDistribution = countByKey(layoutTags).slice(0, 10);
  printBarChart(layoutDistribution);

  // Functional tags
  console.log("\n=== Functional Tags ===\n");
  const functionalTags = entries.flatMap((e) => e.tags.functional);
  const functionalDistribution = countByKey(functionalTags).slice(0, 10);
  printBarChart(functionalDistribution);

  // Industry tags
  console.log("\n=== Industry Tags ===\n");
  const industryTags = entries.flatMap((e) => e.tags.industry);
  const industryDistribution = countByKey(industryTags).slice(0, 10);
  printBarChart(industryDistribution);
}

function printFontStats(entries: RegistryEntry[]): void {
  console.log("\n=== Font Usage ===\n");

  const fonts = entries.flatMap((e) => e.fontFamily);
  const fontDistribution = countByKey(fonts).slice(0, 15);

  printBarChart(fontDistribution);
}

function printOverview(entries: RegistryEntry[]): void {
  console.log("\n╔══════════════════════════════════════════╗");
  console.log("║     Component Registry Statistics        ║");
  console.log("╚══════════════════════════════════════════╝\n");

  console.log(`  Total Components: ${entries.length}`);

  // 카테고리 수
  const categories = new Set(entries.map((e) => e.category));
  console.log(`  Categories: ${categories.size}`);

  // 태그 수
  const allTags = new Set([
    ...entries.flatMap((e) => e.tags.style),
    ...entries.flatMap((e) => e.tags.layout),
    ...entries.flatMap((e) => e.tags.functional),
    ...entries.flatMap((e) => e.tags.industry),
  ]);
  console.log(`  Unique Tags: ${allTags.size}`);

  // 폰트 수
  const fonts = new Set(entries.flatMap((e) => e.fontFamily));
  console.log(`  Unique Fonts: ${fonts.size}`);

  // 상태별 분포
  const statusCounts = countByKey(entries.map((e) => e.status));
  console.log("\n  Status:");
  for (const [status, count] of statusCounts) {
    console.log(`    ${status}: ${count}`);
  }
}

function printHelp(): void {
  console.log(`
Usage: pnpm metadata:stats [options]

Options:
  --category, -c    Show category distribution
  --tags, -t        Show tag distribution (style, layout, functional, industry)
  --fonts, -f       Show font usage statistics
  --all, -a         Show all statistics (default if no option)
  --help, -h        Show this help message

Examples:
  pnpm metadata:stats
  pnpm metadata:stats --category
  pnpm metadata:stats --tags
  pnpm metadata:stats --fonts
  pnpm metadata:stats --all
`);
}

function main(): void {
  const { values } = parseArgs({
    options: {
      category: { type: "boolean", short: "c" },
      tags: { type: "boolean", short: "t" },
      fonts: { type: "boolean", short: "f" },
      all: { type: "boolean", short: "a" },
      help: { type: "boolean", short: "h" },
    },
  });

  if (values.help) {
    printHelp();
    return;
  }

  const registry = loadRegistry();
  const entries = Object.values(registry);

  // 특정 옵션이 없으면 전체 통계
  const showAll = values.all || (!values.category && !values.tags && !values.fonts);

  printOverview(entries);

  if (showAll || values.category) {
    printCategoryStats(entries);
  }

  if (showAll || values.tags) {
    printTagStats(entries);
  }

  if (showAll || values.fonts) {
    printFontStats(entries);
  }

  console.log("");
}

main();
