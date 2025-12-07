/**
 * Page Search Service
 * Orama 기반 페이지 검색 엔진
 */

import "server-only";
import { create, insert, search as oramaSearch } from "@orama/orama";
import type { Orama } from "@orama/orama";
import { pageRegistryService } from "./page-registry.service";
import type { SearchPagesQuery } from "../types";

const PAGE_SEARCH_SCHEMA = {
  id: "string",
  name: "string",
  title: "string",
  searchableText: "string",
  freeformKeywords: "string[]",
  sectionsCount: "number",
  sectionCategories: "string[]",
  sourceUrl: "string",
  createdAt: "string",
  status: "string",
  language: "string",
} as const;

type OramaDB = Orama<typeof PAGE_SEARCH_SCHEMA>;

export interface PageSearchResult {
  id: string;
  name: string;
  title: string;
  sectionsCount: number;
  keywords: string[];
}

export interface PageSearchResponse {
  results: PageSearchResult[];
  total: number;
  elapsed: number;
}

class PageSearchService {
  private db: OramaDB | null = null;
  private initialized = false;
  private initPromise: Promise<void> | null = null;

  /**
   * Initialize the page search engine
   */
  async initialize(): Promise<void> {
    if (this.initialized) return;
    if (this.initPromise) return this.initPromise;

    this.initPromise = this.doInitialize();
    return this.initPromise;
  }

  private async doInitialize(): Promise<void> {
    this.db = await create({ schema: PAGE_SEARCH_SCHEMA });
    const pages = await pageRegistryService.getAllPages();

    for (const page of pages) {
      await insert(this.db, {
        id: page.id,
        name: page.name,
        title: page.title || "",
        searchableText: page.searchableText,
        freeformKeywords: page.freeformKeywords,
        sectionsCount: page.pageInfo.totalSections,
        sectionCategories: page.sections.map((s) => s.category),
        sourceUrl: page.source?.url || "",
        createdAt: page.createdAt || "",
        status: page.status,
        language: page.language,
      });
    }

    this.initialized = true;
    console.log(
      `Page search engine initialized: ${pages.length} pages indexed`
    );
  }

  /**
   * Search pages
   */
  async search(query: SearchPagesQuery): Promise<PageSearchResponse> {
    await this.initialize();

    if (!this.db) {
      throw new Error("Page search engine not initialized");
    }

    const startTime = performance.now();

    // Build where clause for filters
    const where: Record<string, unknown> = {};

    if (query.language) {
      where.language = query.language;
    }

    if (query.minSections !== undefined) {
      where.sectionsCount = { gte: query.minSections };
    }

    if (query.maxSections !== undefined) {
      if (where.sectionsCount) {
        where.sectionsCount = {
          ...(where.sectionsCount as object),
          lte: query.maxSections,
        };
      } else {
        where.sectionsCount = { lte: query.maxSections };
      }
    }

    const result = await oramaSearch(this.db, {
      term: query.text || "",
      properties: ["searchableText", "name", "title", "sourceUrl"],
      limit: query.limit || 10,
      offset: query.offset || 0,
      where: Object.keys(where).length > 0 ? where : undefined,
    });

    const elapsed = performance.now() - startTime;

    const results: PageSearchResult[] = result.hits.map((hit) => ({
      id: hit.document.id,
      name: hit.document.name,
      title: hit.document.title,
      sectionsCount: hit.document.sectionsCount as number,
      keywords: hit.document.freeformKeywords as string[],
    }));

    return {
      results,
      total: result.count,
      elapsed,
    };
  }

  /**
   * Check if search engine is initialized
   */
  isInitialized(): boolean {
    return this.initialized;
  }
}

// 싱글톤 인스턴스
export const pageSearchService = new PageSearchService();
