import { NextRequest, NextResponse } from "next/server";
import { getComponent } from "@/lib/api/services/registry";
import { searchComponents } from "@/lib/api/services/search";
import type {
  GetComponentDetailsResponse,
  ErrorResponse,
} from "@/lib/api/types";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: componentId } = await params;
    const includeSimilar =
      request.nextUrl.searchParams.get("include_similar") !== "false";

    const component = await getComponent(componentId);

    if (!component) {
      const errorResponse: ErrorResponse = {
        success: false,
        error: {
          code: "COMPONENT_NOT_FOUND",
          message: `Component with id '${componentId}' not found`,
        },
      };
      return NextResponse.json(errorResponse, { status: 404 });
    }

    // Find similar components
    let similarComponents = [];
    if (includeSimilar) {
      const similarResult = await searchComponents({
        category: component.category,
        tags: {
          style: component.tags.style.slice(0, 2),
        },
        limit: 6,
      });

      similarComponents = similarResult.hits
        .filter((hit) => hit.document.id !== componentId)
        .slice(0, 5)
        .map((hit) => ({
          id: hit.document.id,
          name: hit.document.name,
          category: hit.document.category,
          match_reason: `Similar ${component.category} component`,
        }));
    }

    const response: GetComponentDetailsResponse = {
      success: true,
      component: {
        id: component.id,
        name: component.name,
        category: component.category,
        title: component.title,
        description: component.description,
        images: component.images,
        tags: component.tags,
        keywords: component.freeformKeywords,
        fonts: component.fontFamily,
        component_path: component.componentPath,
        status: component.status,
        created_at: component.createdAt,
      },
      similar_components: similarComponents,
      usage_hints: {
        best_for: [],
        not_recommended_for: [],
      },
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
