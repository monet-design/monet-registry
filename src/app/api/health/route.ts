import { NextResponse } from "next/server";
import { registryService } from "@/app/api/_common/services";

export async function GET() {
  try {
    const componentCount = await registryService.getTotalCount();

    return NextResponse.json({
      status: "ok",
      version: "1.0.0",
      initialized: true,
      component_count: componentCount,
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        version: "1.0.0",
        initialized: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 503 }
    );
  }
}
