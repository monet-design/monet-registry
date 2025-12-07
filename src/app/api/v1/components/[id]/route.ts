import { NextRequest, NextResponse } from "next/server";
import {
  registryService,
  searchService,
  pageRegistryService,
} from "@/app/api/_common/services";
import type {
  GetComponentDetailsResponse,
  ErrorResponse,
  ParentPageInfo,
} from "@/app/api/_common/types";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: componentId } = await params;
    const includeSimilar =
      request.nextUrl.searchParams.get("include_similar") !== "false";

    const component = await registryService.getComponent(componentId);

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

    // Find parent page info
    let parentPage: ParentPageInfo | undefined;
    const parentInfo = await pageRegistryService.getParentPage(componentId);
    if (parentInfo) {
      parentPage = {
        id: parentInfo.pageId,
        name: parentInfo.page.name,
        title: parentInfo.page.title,
        order_in_page: parentInfo.order,
      };
    }

    // Find similar components
    let similarComponents = [];
    if (includeSimilar) {
      const similarResult = await searchService.search({
        category: component.category,
        tags: {
          style: component.tags.style.slice(0, 2),
        },
        limit: 6,
      });

      similarComponents = similarResult.results
        .filter((r) => r.id !== componentId)
        .slice(0, 5)
        .map((r) => ({
          id: r.id,
          name: r.name,
          category: r.category,
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
        language: component.language,
      },
      parent_page: parentPage,
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
