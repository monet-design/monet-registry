/**
 * 에러 처리 유틸리티
 */

import type { ErrorResponse } from "../types";

export const ERROR_CODES = {
  COMPONENT_NOT_FOUND: "COMPONENT_NOT_FOUND",
  INVALID_CATEGORY: "INVALID_CATEGORY",
  INVALID_TAG: "INVALID_TAG",
  EMPTY_RESULTS: "EMPTY_RESULTS",
  SEARCH_ERROR: "SEARCH_ERROR",
  CODE_READ_ERROR: "CODE_READ_ERROR",
  NOT_INITIALIZED: "NOT_INITIALIZED",
  INVALID_INPUT: "INVALID_INPUT",
  INTERNAL_ERROR: "INTERNAL_ERROR",
} as const;

export type ErrorCode = (typeof ERROR_CODES)[keyof typeof ERROR_CODES];

export function createErrorResponse(
  code: ErrorCode,
  message: string,
  recovery?: {
    suggestions: string[];
    similar_ids?: string[];
  }
): ErrorResponse {
  return {
    success: false,
    error: {
      code,
      message,
    },
    recovery,
  };
}

export function componentNotFoundError(
  componentId: string,
  similarIds?: string[]
): ErrorResponse {
  return createErrorResponse(
    ERROR_CODES.COMPONENT_NOT_FOUND,
    `Component '${componentId}' not found`,
    {
      suggestions: [
        "Check the component ID spelling",
        "Use search_components to find valid component IDs",
      ],
      similar_ids: similarIds,
    }
  );
}

export function emptyResultsError(query: string): ErrorResponse {
  return createErrorResponse(
    ERROR_CODES.EMPTY_RESULTS,
    `No components match your criteria: "${query}"`,
    {
      suggestions: [
        "Try broader search terms",
        "Remove some filter constraints",
        "Use get_registry_stats to see available categories and tags",
      ],
    }
  );
}

export function internalError(message: string): ErrorResponse {
  return createErrorResponse(ERROR_CODES.INTERNAL_ERROR, message);
}

// Fuzzy matching for component IDs
export function findSimilarComponentIds(
  input: string,
  allIds: string[],
  threshold = 0.4
): string[] {
  const results: { id: string; score: number }[] = [];

  for (const id of allIds) {
    const score = calculateSimilarity(input.toLowerCase(), id.toLowerCase());
    if (score >= threshold) {
      results.push({ id, score });
    }
  }

  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((r) => r.id);
}

function calculateSimilarity(a: string, b: string): number {
  if (a === b) return 1;
  if (a.length === 0 || b.length === 0) return 0;

  if (b.includes(a) || a.includes(b)) {
    return 0.7;
  }

  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  const maxLen = Math.max(a.length, b.length);
  return 1 - matrix[b.length][a.length] / maxLen;
}
