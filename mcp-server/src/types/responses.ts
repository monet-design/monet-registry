/**
 * MCP Tool 응답 타입 정의
 */

export interface SearchComponentsResponse {
  success: true;
  query: string;
  total: number;
  elapsed_ms: number;
  results: ComponentSearchResult[];
  suggestions?: {
    related_categories: string[];
    related_tags: string[];
    example_queries: string[];
  };
}

export interface ComponentSearchResult {
  id: string;
  name: string;
  category: string;
  preview_image: string;
  tags: {
    functional: string[];
    style: string[];
    layout: string[];
    industry: string[];
  };
  keywords: string[];
}

export interface GetComponentCodeResponse {
  success: true;
  component_id: string;
  code: string;
  code_info: {
    line_count: number;
    has_client_directive: boolean;
    exports: string[];
    imports: {
      package: string;
      items: string[];
    }[];
  };
  dependencies: {
    npm: string[];
    internal: string[];
  };
  integration_guide: {
    import_statement: string;
    basic_usage: string;
  };
}

export interface GetComponentDetailsResponse {
  success: true;
  component: ComponentMetadata;
  similar_components?: SimilarComponent[];
  usage_hints: {
    best_for: string[];
    not_recommended_for: string[];
  };
}

export interface ComponentMetadata {
  id: string;
  name: string;
  category: string;
  title?: string;
  description?: {
    short: string;
    detailed?: string;
  };
  images: {
    preview: string;
    thumbnail?: string;
  };
  tags: {
    functional: string[];
    style: string[];
    layout: string[];
    industry: string[];
  };
  keywords: string[];
  fonts: string[];
  dependencies?: string[];
  component_path: string;
  status: string;
  created_at?: string;
}

export interface SimilarComponent {
  id: string;
  name: string;
  category: string;
  match_reason: string;
}

export interface ListCategoriesResponse {
  success: true;
  categories: CategoryInfo[];
}

export interface CategoryInfo {
  name: string;
  count: number;
  description: string;
}

export interface GetRegistryStatsResponse {
  success: true;
  total_components: number;
  categories: CategoryInfo[];
  tags: {
    functional: TagCount[];
    style: TagCount[];
    layout: TagCount[];
    industry: TagCount[];
  };
  fonts_used: TagCount[];
  query_tips: string[];
}

export interface TagCount {
  tag: string;
  count: number;
}

export interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
  };
  recovery?: {
    suggestions?: string[];
    similar_ids?: string[];
  };
}
