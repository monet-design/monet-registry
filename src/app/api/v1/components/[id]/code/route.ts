import { NextRequest, NextResponse } from "next/server";
import { getComponent } from "@/lib/api/services/registry";
import {
  readComponentCode,
  analyzeCode,
} from "@/lib/api/services/code-reader";
import type {
  GetComponentCodeResponse,
  ErrorResponse,
} from "@/lib/api/types";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: componentId } = await params;

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

    let code = await readComponentCode(componentId);
    // Remove font.css import statement (handled separately in production)
    code = code.replace(/import\s*["']\.\/font\.css["']\s*;?\s*\n?/g, "");
    const analysis = analyzeCode(code);

    const response: GetComponentCodeResponse = {
      success: true,
      component_id: componentId,
      code,
      code_info: {
        line_count: analysis.line_count,
        has_client_directive: analysis.has_client_directive,
        exports: analysis.exports,
        imports: analysis.imports,
      },
      dependencies: analysis.dependencies,
      integration_guide: {
        import_statement: `import { ${analysis.exports[0] || component.name} } from "${component.componentPath}"`,
        basic_usage: `<${analysis.exports[0] || component.name} />`,
      },
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
