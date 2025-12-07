import { NextRequest, NextResponse } from "next/server";
import { pageRegistryService } from "@/app/api/_common/services";
import {
  getPreviewImageUrl,
  pageNotFoundError,
  findSimilarComponentIds,
} from "@/app/api/_common/utils";
import type {
  GetPageSectionsResponse,
  ErrorResponse,
  PageSectionItem,
} from "@/app/api/_common/types";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id: pageId } = await params;
    const searchParams = request.nextUrl.searchParams;

    const includeDetails = searchParams.get("include_details") === "true";
    const categoryFilter = searchParams.get("category") || undefined;

    const page = await pageRegistryService.getPage(pageId);

    if (!page) {
      const allPageIds = await pageRegistryService.getAllPageIds();
      const similarIds = findSimilarComponentIds(pageId, allPageIds);
      return NextResponse.json(pageNotFoundError(pageId, similarIds), {
        status: 404,
      });
    }

    // Filter sections by category if specified
    let sectionRefs = page.sections;
    if (categoryFilter) {
      sectionRefs = sectionRefs.filter((s) => s.category === categoryFilter);
    }

    // Build sections array
    const sections: PageSectionItem[] = await Promise.all(
      sectionRefs.map(async (sectionRef) => {
        const sectionDetails = includeDetails
          ? await pageRegistryService.getSectionDetails(sectionRef.id)
          : undefined;

        return {
          id: sectionRef.id,
          name: sectionRef.id,
          category: sectionRef.category,
          order: sectionRef.order,
          preview_image: getPreviewImageUrl(sectionRef.id),
          details: sectionDetails
            ? {
                name: sectionDetails.name,
                tags: sectionDetails.tags,
                keywords: sectionDetails.freeformKeywords,
                component_path: sectionDetails.componentPath,
              }
            : undefined,
        };
      })
    );

    const response: GetPageSectionsResponse = {
      success: true,
      page_id: pageId,
      total_sections: sections.length,
      sections,
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
