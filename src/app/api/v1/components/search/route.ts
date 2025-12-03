import { NextRequest, NextResponse } from "next/server";
import { searchComponents } from "@/lib/api/services/search";
import type {
  SearchComponentsResponse,
  ErrorResponse,
} from "@/lib/api/types";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query") || "";
    const category = searchParams.get("category") || undefined;
    const limit = Math.min(parseInt(searchParams.get("limit") || "10"), 50);

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

    const result = await searchComponents({
      query,
      category,
      tags: hasAnyTags ? tags : undefined,
      limit,
    });

    const response: SearchComponentsResponse = {
      success: true,
      query,
      total: result.total,
      elapsed_ms: result.elapsed,
      results: result.hits.map((hit) => {
        const doc = hit.document;
        return {
          id: doc.id,
          name: doc.name,
          category: doc.category,
          preview_image: doc.previewImage,
          tags: {
            functional: doc.functionalTags,
            style: doc.styleTags,
            layout: doc.layoutTags,
            industry: doc.industryTags,
          },
          keywords: doc.freeformKeywords,
        };
      }),
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
