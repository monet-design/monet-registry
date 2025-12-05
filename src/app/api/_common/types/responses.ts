/**
 * API/MCP 공통 응답 타입 정의
 */

// Registry Entry (컴포넌트 메타데이터)
export interface RegistryEntry {
  id: string;
  name: string;
  category: string;
  images: {
    preview: string;
    thumbnail?: string;
  };
  title?: string;
  description?: {
    short: string;
    detailed?: string;
  };
  tags: {
    functional: string[];
    style: string[];
    layout: string[];
    industry: string[];
  };
  freeformKeywords: string[];
  searchableText: string;
  fontFamily: string[];
  componentPath: string;
  createdAt?: string;
  status: string;
}

// Pagination metadata
export interface PaginationMeta {
  total: number;
  offset: number;
  limit: number;
  hasNext: boolean;
}

// Error Response
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

// Search Components Response
export interface SearchComponentsResponse {
  success: true;
  query: string;
  total: number;
  offset: number;
  limit: number;
  hasNext: boolean;
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

// List Components Response
export interface ListComponentsResponse {
  success: true;
  pagination: PaginationMeta;
  components: ComponentListItem[];
}

export interface ComponentListItem {
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
  status: string;
  created_at?: string;
}

// Get Component Code Response
export interface GetComponentCodeResponse {
  success: true;
  component_id: string;
  code: string;
  code_info: CodeInfo;
  dependencies: {
    npm: string[];
    internal: string[];
  };
  integration_guide: {
    import_statement: string;
    basic_usage: string;
  };
}

export interface CodeInfo {
  line_count: number;
  has_client_directive: boolean;
  exports: string[];
  imports: {
    package: string;
    items: string[];
  }[];
}

// Get Component Details Response
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

// List Categories Response
export interface ListCategoriesResponse {
  success: true;
  categories: CategoryInfo[];
}

export interface CategoryInfo {
  name: string;
  count: number;
  description: string;
  examples?: string[];
}

// Get Registry Stats Response
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

// Get Filters Response
export interface GetFiltersResponse {
  success: true;
  categories: FilterOption[];
  tags: {
    functional: FilterOption[];
    style: FilterOption[];
    layout: FilterOption[];
    industry: FilterOption[];
  };
  status: FilterOption[];
}

export interface FilterOption {
  value: string;
  label: string;
  count: number;
}

// Service internal types
export interface ListComponentsOptions {
  category?: string;
  status?: string;
  tags?: {
    functional?: string[];
    style?: string[];
    layout?: string[];
    industry?: string[];
  };
  offset?: number;
  limit?: number;
}

export interface SearchQuery {
  text?: string;
  category?: string;
  tags?: {
    functional?: string[];
    style?: string[];
    layout?: string[];
    industry?: string[];
  };
  offset?: number;
  limit?: number;
}

export interface SearchResult {
  id: string;
  name: string;
  category: string;
  previewImage: string;
  tags: {
    functional: string[];
    style: string[];
    layout: string[];
    industry: string[];
  };
  keywords: string[];
}

export interface SearchResponse {
  results: SearchResult[];
  total: number;
  elapsed: number;
}

export interface ComponentCode {
  code: string;
  info: CodeInfo;
  dependencies: {
    npm: string[];
    internal: string[];
  };
}
