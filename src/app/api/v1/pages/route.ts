import { NextRequest, NextResponse } from "next/server";
import { pageRegistryService } from "@/app/api/_common/services";
import { getPagePreviewImageUrl } from "@/app/api/_common/utils";
import type { ListPagesResponse, ErrorResponse } from "@/app/api/_common/types";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    // Pagination
    const limit = Math.min(
      Math.max(parseInt(searchParams.get("limit") || "20"), 1),
      50
    );
    const offset = Math.max(parseInt(searchParams.get("offset") || "0"), 0);

    // Filters
    const status = searchParams.get("status") || undefined;
    const language = searchParams.get("language") || undefined;

    // Sorting
    const sortBy = searchParams.get("sort_by") as
      | "created_at"
      | "sections_count"
      | undefined;
    const sortOrder = searchParams.get("sort_order") as
      | "asc"
      | "desc"
      | undefined;

    const { pages, total } = await pageRegistryService.listPages({
      status,
      language,
      sortBy: sortBy || "created_at",
      sortOrder: sortOrder || "desc",
      offset,
      limit,
    });

    const response: ListPagesResponse = {
      success: true,
      pagination: {
        total,
        offset,
        limit,
        hasNext: offset + pages.length < total,
      },
      pages: pages.map((p) => ({
        id: p.id,
        name: p.name,
        title: p.title,
        preview_image: getPagePreviewImageUrl(p.id),
        sections_count: p.pageInfo.totalSections,
        section_categories: [...new Set(p.sections.map((s) => s.category))],
        status: p.status,
        source: p.source
          ? {
              type: p.source.type,
              url: p.source.url,
            }
          : undefined,
        created_at: p.createdAt,
        language: p.language,
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
        code: "INTERNAL_ERROR",
        message: error instanceof Error ? error.message : "Unknown error",
      },
    };
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
