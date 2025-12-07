/**
 * 공통 상수 정의
 */

const REGISTRY_BASE_URL = `https://${process.env.MY_HOST}`;

// URL Helpers
export function getPreviewImageUrl(componentId: string): string {
  return `${REGISTRY_BASE_URL}/registry/preview/${componentId}.png`;
}

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
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
  waitlist: "Waitlist signup forms and early access sections",
  other: "Miscellaneous components",
};

export const CACHE_TTL = {
  REGISTRY: 3600, // 1 hour
  SEARCH: 300, // 5 minutes
  CODE: 3600, // 1 hour
} as const;

export const PAGINATION = {
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 50,
  DEFAULT_OFFSET: 0,
} as const;

export const QUERY_TIPS = [
  "Use natural language: 'hero with video background'",
  "Filter by category: category=hero",
  "Filter by style tags: style=minimal,dark",
  "Combine multiple filters for precise results",
  "Use freeform keywords for specific features",
];

// Page API helpers
export function getPagePreviewImageUrl(pageId: string): string {
  return `${REGISTRY_BASE_URL}/registry/preview/pages/${pageId}.png`;
}

export const PAGE_QUERY_TIPS = [
  "Search for pages by source URL or title",
  "Filter pages by minimum section count: min_sections=3",
  "View all sections of a page with /pages/{id}/sections",
  "Get detailed section info with include_details=true",
];
