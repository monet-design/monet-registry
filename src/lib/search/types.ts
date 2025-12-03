/**
 * 검색 시스템 타입 정의
 */

export interface ComponentSearchDocument {
  id: string;
  name: string;
  category: string;

  // 전문 검색용
  searchableText: string;

  // 필터링용 태그
  functionalTags: string[];
  styleTags: string[];
  layoutTags: string[];
  industryTags: string[];
  freeformKeywords: string[];

  // 메타정보
  fontFamily: string[];
  previewImage: string;
  createdAt: string;
  status: string;
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
  limit?: number;
  offset?: number;
}

export interface SearchResult {
  id: string;
  name: string;
  category: string;
  previewImage: string;
  score: number;
  highlights?: {
    field: string;
    snippet: string;
  }[];
}

export interface SearchResponse {
  results: SearchResult[];
  total: number;
  elapsed: number;
}
