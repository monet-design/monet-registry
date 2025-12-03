import { NextRequest, NextResponse } from "next/server";
import {
  getAllComponents,
  getCategoryIndex,
  getTagIndex,
} from "@/lib/api/services/registry";
import type { GetRegistryStatsResponse, ErrorResponse } from "@/lib/api/types";

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  hero: "Hero sections for landing pages",
  stats: "Statistics and metrics displays",
  testimonial: "Customer testimonials and reviews",
  feature: "Product features and benefits",
  pricing: "Pricing tables and plans",
  cta: "Call-to-action sections",
  contact: "Contact forms and information",
  faq: "Frequently asked questions",
  "how-it-works": "Process explanations",
  biography: "Personal or company bios",
  "before-after": "Before and after comparisons",
  showcase: "Product or project showcases",
  header: "Navigation headers",
  footer: "Page footers",
  gallery: "Image galleries",
  team: "Team member displays",
  "logo-cloud": "Partner and client logos",
  newsletter: "Newsletter subscription forms",
  waitlist: "Waitlist signup forms",
  other: "Other components",
};

export async function GET(request: NextRequest) {
  try {
    const includeExamples =
      request.nextUrl.searchParams.get("include_examples") !== "false";

    const [components, categoryIndex, tagIndex] = await Promise.all([
      getAllComponents(),
      getCategoryIndex(),
      getTagIndex(),
    ]);

    // Build category stats
    const categories = Object.entries(categoryIndex).map(([name, ids]) => ({
      name,
      count: ids.length,
      description: CATEGORY_DESCRIPTIONS[name] || "",
      examples: includeExamples ? ids.slice(0, 3) : undefined,
    }));

    // Build tag stats
    const buildTagCounts = (tagMap: Record<string, string[]>) =>
      Object.entries(tagMap)
        .map(([tag, ids]) => ({ tag, count: ids.length }))
        .sort((a, b) => b.count - a.count);

    // Count fonts
    const fontCounts = new Map<string, number>();
    components.forEach((comp) => {
      comp.fontFamily.forEach((font) => {
        fontCounts.set(font, (fontCounts.get(font) || 0) + 1);
      });
    });

    const response: GetRegistryStatsResponse = {
      success: true,
      total_components: components.length,
      categories,
      tags: {
        functional: buildTagCounts(tagIndex.functional),
        style: buildTagCounts(tagIndex.style),
        layout: buildTagCounts(tagIndex.layout),
        industry: buildTagCounts(tagIndex.industry),
      },
      fonts_used: Array.from(fontCounts.entries())
        .map(([tag, count]) => ({ tag, count }))
        .sort((a, b) => b.count - a.count),
      query_tips: [
        "Use natural language queries like 'modern pricing table'",
        "Combine categories with tags for precise results",
        "Try industry-specific searches like 'saas hero'",
      ],
    };

    return NextResponse.json(response, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
      },
    });
  } catch (error) {
    const errorResponse: ErrorResponse = {
      success: false,
      error: {
        code: "INTERNAL_ERROR",
        message: error instanceof Error ? error.message : "Unknown error",
      },
    };
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
