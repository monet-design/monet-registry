import { NextRequest, NextResponse } from "next/server";
import { registryService, codeReaderService } from "@/app/api/_common/services";
import type {
  GetComponentCodeResponse,
  ErrorResponse,
} from "@/app/api/_common/types";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: componentId } = await params;

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

    const codeResult = await codeReaderService.readComponentCode(componentId);
    // Remove font.css import statement (handled separately in production)
    const code = codeResult.code.replace(/import\s*["']\.\/font\.css["']\s*;?\s*\n?/g, "");

    const response: GetComponentCodeResponse = {
      success: true,
      component_id: componentId,
      code,
      code_info: codeResult.info,
      dependencies: codeResult.dependencies,
      integration_guide: codeReaderService.getIntegrationGuide(
        componentId,
        codeResult.info.exports[0] || component.name
      ),
    };

    return NextResponse.json(response, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, immutable",
      },
    });
  } catch (error) {
    const errorResponse: ErrorResponse = {
      success: false,
      error: {
        code: "CODE_READ_ERROR",
        message:
          error instanceof Error ? error.message : "Failed to read component code",
      },
    };
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
