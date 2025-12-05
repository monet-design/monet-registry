import { NextRequest, NextResponse } from "next/server";
import { registryService } from "@/app/api/_common/services";
import { CATEGORY_DESCRIPTIONS } from "@/app/api/_common/utils";
import type { GetRegistryStatsResponse, ErrorResponse } from "@/app/api/_common/types";

export async function GET(request: NextRequest) {
  try {
    const includeExamples =
      request.nextUrl.searchParams.get("include_examples") !== "false";
    const categoryFilter = request.nextUrl.searchParams.get("category");

    const [allComponents, categoryIndex, tagIndex] = await Promise.all([
      registryService.getAllComponents(),
      registryService.getCategoryIndex(),
      registryService.getTagIndex(),
    ]);

    // Filter components by category if specified
    const components = categoryFilter
      ? allComponents.filter((comp) => comp.category === categoryFilter)
      : allComponents;

    // Build category stats (filter if category specified)
    const filteredCategoryIndex = categoryFilter
      ? { [categoryFilter]: categoryIndex[categoryFilter] || [] }
      : categoryIndex;

    const categories = Object.entries(filteredCategoryIndex).map(
      ([name, ids]) => ({
        name,
        count: ids.length,
        description: CATEGORY_DESCRIPTIONS[name] || "",
        examples: includeExamples ? ids.slice(0, 3) : undefined,
      })
    );

    // Build tag stats from filtered components
    const componentIds = new Set(components.map((c) => c.id));

    const buildTagCounts = (tagMap: Record<string, string[]>) =>
      Object.entries(tagMap)
        .map(([tag, ids]) => ({
          tag,
          count: categoryFilter
            ? ids.filter((id) => componentIds.has(id)).length
            : ids.length,
        }))
        .filter((item) => item.count > 0)
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
