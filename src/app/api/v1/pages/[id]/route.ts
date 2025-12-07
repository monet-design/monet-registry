import { NextRequest, NextResponse } from "next/server";
import { pageRegistryService } from "@/app/api/_common/services";
import {
  getPreviewImageUrl,
  getPagePreviewImageUrl,
  pageNotFoundError,
  findSimilarComponentIds,
} from "@/app/api/_common/utils";
import type {
  GetPageDetailsResponse,
  ErrorResponse,
  PageSectionItem,
  SimilarPage,
} from "@/app/api/_common/types";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id: pageId } = await params;
    const searchParams = request.nextUrl.searchParams;

    const includeSections = searchParams.get("include_sections") !== "false";
    const includeSimilar = searchParams.get("include_similar") !== "false";

    const page = await pageRegistryService.getPage(pageId);

    if (!page) {
      const allPageIds = await pageRegistryService.getAllPageIds();
      const similarIds = findSimilarComponentIds(pageId, allPageIds);
      return NextResponse.json(pageNotFoundError(pageId, similarIds), {
        status: 404,
      });
    }

    // Build sections array
    let sections: PageSectionItem[] = [];
    if (includeSections) {
      sections = await Promise.all(
        page.sections.map(async (sectionRef) => {
          const sectionDetails = await pageRegistryService.getSectionDetails(
            sectionRef.id
          );

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
    }

    // Find similar pages
    let similar_pages: SimilarPage[] | undefined;
    if (includeSimilar) {
      const similarIds = await pageRegistryService.findSimilarPages(pageId);
      similar_pages = await Promise.all(
        similarIds.map(async (id) => {
          const similarPage = await pageRegistryService.getPage(id);
          return {
            id,
            name: id,
            title: similarPage?.title,
            sections_count: similarPage?.pageInfo.totalSections || 0,
            match_reason: "Similar section composition",
          };
        })
      );
    }

    const categoriesUsed = [...new Set(page.sections.map((s) => s.category))];

    const response: GetPageDetailsResponse = {
      success: true,
      page: {
        id: page.id,
        name: page.name,
        title: page.title,
        images: {
          preview: getPagePreviewImageUrl(page.id),
        },
        tags: page.tags,
        keywords: page.freeformKeywords,
        source: page.source,
        component_path: page.componentPath,
        status: page.status,
        created_at: page.createdAt,
      },
      sections,
      page_info: {
        total_sections: page.pageInfo.totalSections,
        categories_used: categoriesUsed,
      },
      similar_pages,
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
