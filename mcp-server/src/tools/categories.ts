/**
 * list_categories 도구
 */

import { registryService } from "../services/registry.js";
import type { ListCategoriesResponse } from "../types/responses.js";

export const listCategoriesSchema = {
  name: "list_categories",
  description: `List all available component categories with their counts.

USE THIS TOOL WHEN:
- Want to explore what's available
- Need to see all categories before searching
- Getting an overview of the component registry

Returns: List of categories with component counts and descriptions`,
  inputSchema: {
    type: "object" as const,
    properties: {},
    required: [],
  },
};

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

export async function handleListCategories(): Promise<ListCategoriesResponse> {
  const categoryIndex = registryService.getCategoryIndex();

  const categories = Object.entries(categoryIndex)
    .map(([name, ids]) => ({
      name,
      count: ids.length,
      description: CATEGORY_DESCRIPTIONS[name] || `${name} components`,
    }))
    .sort((a, b) => b.count - a.count);

  return {
    success: true,
    categories,
  };
}
