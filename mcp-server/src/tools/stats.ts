/**
 * get_registry_stats 도구
 */

import { z } from "zod";
import { registryService } from "../services/registry.js";
import type { GetRegistryStatsResponse } from "../types/responses.js";

export const getRegistryStatsSchema = {
  name: "get_registry_stats",
  description: `Get registry statistics and available options.

USE THIS TOOL WHEN:
- Starting a new project and need overview
- Want to know available categories/tags
- Need to understand the component taxonomy

Returns: Statistics, available categories, tags, and their counts`,
  inputSchema: {
    type: "object" as const,
    properties: {
      include_examples: {
        type: "boolean",
        description: "Include example components for each category (default: true)",
      },
    },
  },
};

const inputValidator = z.object({
  include_examples: z.boolean().optional().default(true),
});

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  hero: "Above-the-fold landing sections with headlines and CTAs",
  stats: "Statistics and metrics display sections",
  testimonial: "Customer reviews, quotes, and social proof",
  feature: "Feature highlights and product capabilities",
  pricing: "Pricing tables, plans, and comparison",
  cta: "Call-to-action sections and conversion blocks",
  contact: "Contact forms and communication sections",
  faq: "Frequently asked questions and accordions",
  "how-it-works": "Process steps and workflow explanations",
  biography: "Personal bios and about sections",
  "before-after": "Comparison sliders and transformation showcases",
  showcase: "Product showcases and demos",
  header: "Navigation headers and top bars",
  footer: "Page footers with links and info",
  gallery: "Image galleries and portfolios",
  team: "Team member displays",
  "logo-cloud": "Client logos and partner displays",
  newsletter: "Email signup and subscription forms",
  other: "Miscellaneous components",
};

export async function handleGetRegistryStats(
  args: unknown
): Promise<GetRegistryStatsResponse> {
  const parsed = inputValidator.safeParse(args || {});
  const { include_examples } = parsed.success ? parsed.data : { include_examples: true };

  const categoryIndex = registryService.getCategoryIndex();
  const tagIndex = registryService.getTagIndex();

  // 카테고리별 통계
  const categories = Object.entries(categoryIndex)
    .map(([name, ids]) => ({
      name,
      count: ids.length,
      description: CATEGORY_DESCRIPTIONS[name] || `${name} components`,
      ...(include_examples && ids.length > 0 ? { examples: ids.slice(0, 3) } : {}),
    }))
    .sort((a, b) => b.count - a.count);

  // 태그별 통계
  const countTags = (index: Record<string, string[]>) =>
    Object.entries(index)
      .map(([tag, ids]) => ({ tag, count: ids.length }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 15); // Top 15 tags

  // 폰트 통계
  const fontCounts = new Map<string, number>();
  for (const component of registryService.getAllComponents()) {
    for (const font of component.fontFamily) {
      fontCounts.set(font, (fontCounts.get(font) || 0) + 1);
    }
  }
  const fonts_used = Array.from(fontCounts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  return {
    success: true,
    total_components: registryService.getTotalCount(),
    categories,
    tags: {
      functional: countTags(tagIndex.functional),
      style: countTags(tagIndex.style),
      layout: countTags(tagIndex.layout),
      industry: countTags(tagIndex.industry),
    },
    fonts_used,
    query_tips: [
      "Be specific: 'dark theme hero for SaaS' works better than just 'hero'",
      "Combine category + style: 'minimal pricing with toggle'",
      "Use industry context: 'fintech testimonial carousel'",
      "Filter by layout: 'two-column feature section'",
      "Try style combinations: 'gradient glassmorphism stats'",
    ],
  };
}
