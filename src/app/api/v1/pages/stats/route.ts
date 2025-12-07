import { NextResponse } from "next/server";
import { pageRegistryService } from "@/app/api/_common/services";
import { PAGE_QUERY_TIPS } from "@/app/api/_common/utils";
import type { GetPagesStatsResponse, ErrorResponse } from "@/app/api/_common/types";

export async function GET() {
  try {
    const stats = await pageRegistryService.getStats();

    const response: GetPagesStatsResponse = {
      success: true,
      total_pages: stats.totalPages,
      total_sections_across_pages: stats.totalSections,
      average_sections_per_page: stats.avgSectionsPerPage,
      section_categories: stats.sectionCategories,
      sources: stats.sources,
      query_tips: PAGE_QUERY_TIPS,
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
