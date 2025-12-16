import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import {
  ALL_CACHE_TAGS,
  COMPONENT_CACHE_TAGS,
  PAGE_CACHE_TAGS,
  CACHE_TAGS,
} from "@/app/api/_common/constants";

interface RevalidateRequest {
  target?: "all" | "components" | "pages" | string;
}

/**
 * On-Demand Revalidation API
 *
 * POST /api/v1/revalidate
 * Body: { "target": "all" | "components" | "pages" | specific-tag }
 *
 * Authentication: Basic Auth (handled by middleware)
 */
export async function POST(request: NextRequest) {
  try {
    const body: RevalidateRequest = await request.json().catch(() => ({}));
    const target = body.target || "all";

    let revalidatedTags: string[] = [];

    switch (target) {
      case "all":
        revalidatedTags = [...ALL_CACHE_TAGS];
        break;
      case "components":
        revalidatedTags = [...COMPONENT_CACHE_TAGS];
        break;
      case "pages":
        revalidatedTags = [...PAGE_CACHE_TAGS];
        break;
      default:
        // 개별 태그 지정
        if (
          Object.values(CACHE_TAGS).includes(
            target as (typeof CACHE_TAGS)[keyof typeof CACHE_TAGS]
          )
        ) {
          revalidatedTags = [target];
        } else {
          return NextResponse.json(
            {
              success: false,
              error: {
                code: "INVALID_TARGET",
                message: `Unknown target: ${target}`,
                valid_targets: ["all", "components", "pages", ...ALL_CACHE_TAGS],
              },
            },
            { status: 400 }
          );
        }
    }

    // 태그별 무효화 실행
    for (const tag of revalidatedTags) {
      revalidateTag(tag);
    }

    return NextResponse.json({
      success: true,
      revalidated: revalidatedTags,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "INTERNAL_ERROR",
          message: error instanceof Error ? error.message : "Unknown error",
        },
      },
      { status: 500 }
    );
  }
}
