import { NextResponse } from "next/server";
import { registryService } from "@/app/api/_common/services";

export async function GET() {
  try {
    const allComponents = await registryService.getAllComponents();
    const count = allComponents.length;

    // shields.io endpoint format
    // https://shields.io/badges/endpoint-badge
    return NextResponse.json(
      {
        schemaVersion: 1,
        label: "Components",
        message: String(count),
        color: "orange",
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        schemaVersion: 1,
        label: "Components",
        message: "error",
        color: "red",
        isError: true,
      },
      { status: 500 }
    );
  }
}
