import { NextRequest, NextResponse } from "next/server";
import { pageSearchService } from "@/app/api/_common/services";
import { getPagePreviewImageUrl } from "@/app/api/_common/utils";
import type { SearchPagesResponse, ErrorResponse } from "@/app/api/_common/types";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const query = searchParams.get("query") || "";
    const language = searchParams.get("language") || undefined;
    const limit = Math.min(
      Math.max(parseInt(searchParams.get("limit") || "10"), 1),
      50
    );
    const offset = Math.max(parseInt(searchParams.get("offset") || "0"), 0);

    // Section count filters
    const minSections = searchParams.get("min_sections")
      ? parseInt(searchParams.get("min_sections")!)
      : undefined;
    const maxSections = searchParams.get("max_sections")
      ? parseInt(searchParams.get("max_sections")!)
      : undefined;

    const { results, total, elapsed } = await pageSearchService.search({
      text: query,
      language,
      minSections,
      maxSections,
      offset,
      limit,
    });

    const response: SearchPagesResponse = {
      success: true,
      query,
      total,
      offset,
      limit,
      hasNext: offset + results.length < total,
      elapsed_ms: Math.round(elapsed * 100) / 100,
      results: results.map((r) => ({
        id: r.id,
        name: r.name,
        title: r.title,
        preview_image: getPagePreviewImageUrl(r.id),
        sections_count: r.sectionsCount,
        keywords: r.keywords,
      })),
    };

    return NextResponse.json(response, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    const errorResponse: ErrorResponse = {
      success: false,
      error: {
        code: "SEARCH_ERROR",
        message: error instanceof Error ? error.message : "Unknown error",
      },
    };
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
