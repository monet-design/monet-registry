import { NextRequest, NextResponse } from "next/server";
import { registryService } from "@/app/api/_common/services";
import { getPreviewImageUrl } from "@/app/api/_common/utils";
import type {
  ListComponentsResponse,
  ErrorResponse,
} from "@/app/api/_common/types";

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
    const category = searchParams.get("category") || undefined;
    const status = searchParams.get("status") || undefined;

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

    const { components, total } = await registryService.listComponents({
      category,
      status,
      tags: hasAnyTags ? tags : undefined,
      offset,
      limit,
    });

    const response: ListComponentsResponse = {
      success: true,
      pagination: {
        total,
        offset,
        limit,
        hasNext: offset + components.length < total,
      },
      components: components.map((c) => ({
        id: c.id,
        name: c.name,
        category: c.category,
        preview_image: getPreviewImageUrl(c.id),
        tags: c.tags,
        status: c.status,
        created_at: c.createdAt,
        language: c.language,
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
