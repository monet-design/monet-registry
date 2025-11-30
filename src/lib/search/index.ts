import { create, insert, search, count } from "@orama/orama";
import type { Orama } from "@orama/orama";
import type {
  ComponentSearchDocument,
  SearchQuery,
  SearchResult,
  SearchResponse,
} from "./types";

/**
 * Orama 검색 엔진 인스턴스
 */
let db: Orama<any> | null = null;

/**
 * 검색 엔진 초기화
 */
export async function initSearchEngine(): Promise<void> {
  db = await create({
    schema: {
      id: "string",
      name: "string",
      category: "string",
      searchableText: "string",
      functionalTags: "string[]",
      styleTags: "string[]",
      layoutTags: "string[]",
      industryTags: "string[]",
      freeformKeywords: "string[]",
      fontFamily: "string[]",
      previewImage: "string",
      createdAt: "string",
      status: "string",
    } as const,
  });
}

/**
 * 문서 추가
 */
export async function addDocument(doc: ComponentSearchDocument): Promise<void> {
  if (!db) {
    await initSearchEngine();
  }
  await insert(db!, doc);
}

/**
 * 여러 문서 일괄 추가
 */
export async function addDocuments(
  docs: ComponentSearchDocument[]
): Promise<void> {
  if (!db) {
    await initSearchEngine();
  }
  for (const doc of docs) {
    await insert(db!, doc);
  }
}

/**
 * 컴포넌트 검색
 */
export async function searchComponents(
  query: SearchQuery
): Promise<SearchResponse> {
  if (!db) {
    throw new Error("Search engine not initialized");
  }

  const startTime = performance.now();

  // 필터 조건 구성
  const where: Record<string, unknown> = {};

  if (query.category) {
    where.category = query.category;
  }

  if (query.tags?.functional?.length) {
    where.functionalTags = { containsAll: query.tags.functional };
  }

  if (query.tags?.style?.length) {
    where.styleTags = { containsAll: query.tags.style };
  }

  if (query.tags?.layout?.length) {
    where.layoutTags = { containsAll: query.tags.layout };
  }

  if (query.tags?.industry?.length) {
    where.industryTags = { containsAll: query.tags.industry };
  }

  const searchResult = await search(db, {
    term: query.text || "",
    properties: ["searchableText", "name", "category"],
    limit: query.limit || 20,
    offset: query.offset || 0,
    where: Object.keys(where).length > 0 ? where : undefined,
  });

  const elapsed = performance.now() - startTime;

  const results: SearchResult[] = searchResult.hits.map((hit) => ({
    id: String(hit.document.id),
    name: hit.document.name,
    category: hit.document.category,
    previewImage: hit.document.previewImage,
    score: hit.score,
  }));

  return {
    results,
    total: searchResult.count,
    elapsed,
  };
}

/**
 * 카테고리별 컴포넌트 조회
 */
export async function getByCategory(category: string): Promise<SearchResponse> {
  return searchComponents({ category, limit: 100 });
}

/**
 * 태그로 컴포넌트 필터링
 */
export async function filterByTags(tags: {
  functional?: string[];
  style?: string[];
  layout?: string[];
  industry?: string[];
}): Promise<SearchResponse> {
  return searchComponents({ tags, limit: 100 });
}

/**
 * 유사 컴포넌트 찾기
 */
export async function findSimilar(
  componentId: string,
  limit = 5
): Promise<SearchResponse> {
  if (!db) {
    throw new Error("Search engine not initialized");
  }

  // 먼저 해당 컴포넌트 찾기
  const sourceResult = await search(db, {
    term: componentId,
    properties: ["id"],
    limit: 1,
  });

  if (sourceResult.hits.length === 0) {
    return { results: [], total: 0, elapsed: 0 };
  }

  const source = sourceResult.hits[0].document;

  // 같은 카테고리 + 비슷한 태그를 가진 컴포넌트 검색
  const similarResult = await searchComponents({
    category: source.category,
    tags: {
      style: source.styleTags.slice(0, 2),
    },
    limit: limit + 1, // 자기 자신 제외용
  });

  // 자기 자신 제외
  const results = similarResult.results.filter((r) => r.id !== componentId);

  return {
    results: results.slice(0, limit),
    total: results.length,
    elapsed: similarResult.elapsed,
  };
}

/**
 * 전체 문서 수 조회
 */
export async function getTotalCount(): Promise<number> {
  if (!db) {
    return 0;
  }
  return await count(db);
}

/**
 * 검색 엔진 상태 확인
 */
export function isInitialized(): boolean {
  return db !== null;
}

export type { ComponentSearchDocument, SearchQuery, SearchResult, SearchResponse };
