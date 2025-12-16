/**
 * 캐시 태그 상수 정의
 * On-Demand Revalidation에서 사용
 */
export const CACHE_TAGS = {
  // 컴포넌트 관련
  REGISTRY: "registry-data",
  CATEGORY_INDEX: "category-index",
  TAG_INDEX: "tag-index",

  // 페이지 관련
  PAGE_REGISTRY: "page-registry-data",
  PAGE_INDEX: "page-index",
  SECTION_TO_PAGE: "section-to-page-index",
} as const;

// 모든 태그를 한번에 무효화할 때 사용
export const ALL_CACHE_TAGS = Object.values(CACHE_TAGS);

// 그룹별 태그
export const COMPONENT_CACHE_TAGS = [
  CACHE_TAGS.REGISTRY,
  CACHE_TAGS.CATEGORY_INDEX,
  CACHE_TAGS.TAG_INDEX,
] as const;

export const PAGE_CACHE_TAGS = [
  CACHE_TAGS.PAGE_REGISTRY,
  CACHE_TAGS.PAGE_INDEX,
  CACHE_TAGS.SECTION_TO_PAGE,
] as const;
