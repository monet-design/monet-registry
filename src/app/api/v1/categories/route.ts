import { NextResponse } from "next/server";
import { getCategoryIndex } from "@/lib/api/services/registry";
import type { ListCategoriesResponse, ErrorResponse } from "@/lib/api/types";

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  hero: "Hero sections for landing pages",
  stats: "Statistics and metrics displays",
  testimonial: "Customer testimonials and reviews",
  "feature-showcase": "Product features, benefits, and showcases",
  pricing: "Pricing tables and plans",
  cta: "Call-to-action sections",
  contact: "Contact forms and information",
  faq: "Frequently asked questions",
  "how-it-works": "Process explanations",
  biography: "Personal or company bios",
  "before-after": "Before and after comparisons",
  header: "Navigation headers",
  footer: "Page footers",
  gallery: "Image galleries",
  team: "Team member displays",
  "logo-cloud": "Partner and client logos",
  newsletter: "Newsletter subscription forms",
  waitlist: "Waitlist signup forms",
  other: "Other components",
};

export async function GET() {
  try {
    const categoryIndex = await getCategoryIndex();

    const categories = Object.entries(categoryIndex).map(([name, ids]) => ({
      name,
      count: ids.length,
      description: CATEGORY_DESCRIPTIONS[name] || "",
    }));

    const response: ListCategoriesResponse = {
      success: true,
      categories,
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
