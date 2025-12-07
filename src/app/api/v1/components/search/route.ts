import { NextRequest, NextResponse } from "next/server";
import { searchService } from "@/app/api/_common/services";
import { getPreviewImageUrl } from "@/app/api/_common/utils";
import type {
  SearchComponentsResponse,
  ErrorResponse,
} from "@/app/api/_common/types";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query") || "";
    const category = searchParams.get("category") || undefined;
    const language = searchParams.get("language") || undefined;
    const limit = Math.min(
      Math.max(parseInt(searchParams.get("limit") || "10"), 1),
      50
    );
    const offset = Math.max(parseInt(searchParams.get("offset") || "0"), 0);

    // Parse comma-separated tags
    const parseTags = (value: string | null): string[] | undefined => {
      if (!value) return undefined;
      return value
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    };

    const tags = {
      functional: parseTags(searchParams.get("functional")),
      style: parseTags(searchParams.get("style")),
      layout: parseTags(searchParams.get("layout")),
      industry: parseTags(searchParams.get("industry")),
    };

    const hasAnyTags = Object.values(tags).some((v) => v && v.length > 0);

    const result = await searchService.search({
      text: query,
      category,
      language,
      tags: hasAnyTags ? tags : undefined,
      limit,
      offset,
    });

    const response: SearchComponentsResponse = {
      success: true,
      query,
      total: result.total,
      offset,
      limit,
      hasNext: offset + result.results.length < result.total,
      elapsed_ms: result.elapsed,
      results: result.results.map((r) => ({
        id: r.id,
        name: r.name,
        category: r.category,
        preview_image: getPreviewImageUrl(r.id),
        tags: r.tags,
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
        code: "INTERNAL_ERROR",
        message: error instanceof Error ? error.message : "Unknown error",
      },
    };
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
