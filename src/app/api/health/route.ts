import { NextResponse } from "next/server";
import { getAllComponents } from "@/lib/api/services/registry";

export async function GET() {
  try {
    const components = await getAllComponents();

    return NextResponse.json({
      status: "ok",
      version: "1.0.0",
      initialized: true,
      component_count: components.length,
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
