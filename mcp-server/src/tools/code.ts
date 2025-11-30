/**
 * get_component_code 도구
 */

import { z } from "zod";
import { registryService } from "../services/registry.js";
import { codeReaderService } from "../services/code-reader.js";
import { componentNotFoundError, findSimilarComponentIds } from "../utils/errors.js";
import type { GetComponentCodeResponse, ErrorResponse } from "../types/responses.js";

export const getComponentCodeSchema = {
  name: "get_component_code",
  description: `Get the actual React/TypeScript code for a component.

USE THIS TOOL WHEN:
- Ready to implement/integrate a component
- Need to understand component structure
- Want to customize or extend a component

IMPORTANT:
- Returns raw TSX code ready to use
- Includes prop interface definitions
- Shows required dependencies

Returns: Complete component source code with integration guide`,
  inputSchema: {
    type: "object" as const,
    properties: {
      component_id: {
        type: "string",
        description: "Component ID (e.g., 'hero-1', 'stats-10', '8px-studio')",
      },
    },
    required: ["component_id"],
  },
};

const inputValidator = z.object({
  component_id: z.string().min(1),
});

export async function handleGetComponentCode(
  args: unknown
): Promise<GetComponentCodeResponse | ErrorResponse> {
  const parsed = inputValidator.safeParse(args);

  if (!parsed.success) {
    return {
      success: false,
      error: {
        code: "INVALID_INPUT",
        message: "component_id is required",
      },
    };
  }

  const { component_id } = parsed.data;

  // 컴포넌트 존재 확인
  const component = registryService.getComponent(component_id);
  if (!component) {
    const allIds = registryService.getAllComponents().map((c) => c.id);
    const similarIds = findSimilarComponentIds(component_id, allIds);
    return componentNotFoundError(component_id, similarIds);
  }

  // 코드 읽기
  const codeResult = await codeReaderService.readComponentCode(component_id);
  if (!codeResult) {
    return {
      success: false,
      error: {
        code: "CODE_READ_ERROR",
        message: `Failed to read code for component '${component_id}'`,
      },
    };
  }

  // 컴포넌트 이름 추출 (Pascal Case 변환)
  const componentName = component_id
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

  const guide = codeReaderService.getIntegrationGuide(component_id, componentName);

  return {
    success: true,
    component_id,
    code: codeResult.code,
    code_info: {
      line_count: codeResult.info.line_count,
      has_client_directive: codeResult.info.has_client_directive,
      exports: codeResult.info.exports,
      imports: codeResult.info.imports,
    },
    dependencies: codeResult.dependencies,
    integration_guide: guide,
  };
}
