import { NextResponse } from "next/server";
import { registryService } from "@/app/api/_common/services";
import type { GetFiltersResponse, ErrorResponse } from "@/app/api/_common/types";

// Human-readable labels for categories
const CATEGORY_LABELS: Record<string, string> = {
  hero: "Hero",
  stats: "Stats",
  testimonial: "Testimonial",
  "feature-showcase": "Feature & Showcase",
  pricing: "Pricing",
  cta: "Call to Action",
  contact: "Contact",
  faq: "FAQ",
  "how-it-works": "How It Works",
  biography: "Biography",
  "before-after": "Before & After",
  header: "Header",
  footer: "Footer",
  gallery: "Gallery",
  team: "Team",
  "logo-cloud": "Logo Cloud",
  newsletter: "Newsletter",
  waitlist: "Waitlist",
  other: "Other",
};

const STATUS_LABELS: Record<string, string> = {
  draft: "Draft",
  stable: "Stable",
  deprecated: "Deprecated",
};

// Convert kebab-case to Title Case
function toTitleCase(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function GET() {
  try {
    const [categoryIndex, tagIndex, components] = await Promise.all([
      registryService.getCategoryIndex(),
      registryService.getTagIndex(),
      registryService.getAllComponents(),
    ]);

    // Build category options
    const categories = Object.entries(categoryIndex)
      .map(([value, ids]) => ({
        value,
        label: CATEGORY_LABELS[value] || toTitleCase(value),
        count: ids.length,
      }))
      .sort((a, b) => b.count - a.count);

    // Build tag options
    const buildTagOptions = (tagMap: Record<string, string[]>) =>
      Object.entries(tagMap)
        .map(([value, ids]) => ({
          value,
          label: toTitleCase(value),
          count: ids.length,
        }))
        .sort((a, b) => b.count - a.count);

    // Build status options
    const statusCounts = new Map<string, number>();
    components.forEach((c) => {
      statusCounts.set(c.status, (statusCounts.get(c.status) || 0) + 1);
    });

    const status = Array.from(statusCounts.entries())
      .map(([value, count]) => ({
        value,
        label: STATUS_LABELS[value] || toTitleCase(value),
        count,
      }))
      .sort((a, b) => b.count - a.count);

    const response: GetFiltersResponse = {
      success: true,
      categories,
      tags: {
        functional: buildTagOptions(tagIndex.functional),
        style: buildTagOptions(tagIndex.style),
        layout: buildTagOptions(tagIndex.layout),
        industry: buildTagOptions(tagIndex.industry),
      },
      status,
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
