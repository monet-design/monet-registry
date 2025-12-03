/**
 * MCP Tool 입력 스키마 타입 정의
 */

export interface SearchComponentsInput {
  query: string;
  filters?: {
    category?: string;
    tags?: {
      functional?: string[];
      style?: string[];
      layout?: string[];
      industry?: string[];
    };
  };
  limit?: number;
}

export interface GetComponentCodeInput {
  component_id: string;
}

export interface GetComponentDetailsInput {
  component_id: string;
  include_similar?: boolean;
}

export interface ListCategoriesInput {
  // No input required
}

export interface GetRegistryStatsInput {
  include_examples?: boolean;
}
