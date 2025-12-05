import { NextResponse } from "next/server";
import { registryService } from "@/app/api/_common/services";
import { CATEGORY_DESCRIPTIONS } from "@/app/api/_common/utils";
import type { ListCategoriesResponse, ErrorResponse } from "@/app/api/_common/types";

export async function GET() {
  try {
    const categoryIndex = await registryService.getCategoryIndex();

    const categories = Object.entries(categoryIndex).map(([name, ids]) => ({
      name,
      count: ids.length,
      description: CATEGORY_DESCRIPTIONS[name] || "",
    }));

    const response: ListCategoriesResponse = {
      success: true,
      categories,
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
