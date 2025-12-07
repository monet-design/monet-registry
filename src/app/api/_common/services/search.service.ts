/**
 * Search Service
 * Orama 기반 전문 검색 엔진
 */

import "server-only";
import { create, insert, search as oramaSearch } from "@orama/orama";
import type { Orama } from "@orama/orama";
import { registryService } from "./registry.service";
import type { SearchQuery, SearchResponse, SearchResult } from "../types";
import { getPreviewImageUrl } from "../utils";

const SEARCH_SCHEMA = {
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
  language: "string",
} as const;

type OramaDB = Orama<typeof SEARCH_SCHEMA>;

class SearchService {
  private db: OramaDB | null = null;
  private initialized = false;
  private initPromise: Promise<void> | null = null;

  /**
   * Initialize the search engine
   */
  async initialize(): Promise<void> {
    if (this.initialized) return;
    if (this.initPromise) return this.initPromise;

    this.initPromise = this.doInitialize();
    return this.initPromise;
  }

  private async doInitialize(): Promise<void> {
    this.db = await create({ schema: SEARCH_SCHEMA });
    const components = await registryService.getAllComponents();

    for (const component of components) {
      await insert(this.db, {
        id: component.id,
        name: component.name,
        category: component.category,
        searchableText: component.searchableText,
        functionalTags: component.tags.functional,
        styleTags: component.tags.style,
        layoutTags: component.tags.layout,
        industryTags: component.tags.industry,
        freeformKeywords: component.freeformKeywords,
        fontFamily: component.fontFamily,
        previewImage: getPreviewImageUrl(component.id),
        createdAt: component.createdAt || "",
        status: component.status,
        language: component.language,
      });
    }

    this.initialized = true;
    console.log(
      `Search engine initialized: ${components.length} documents indexed`
    );
  }

  /**
   * Search components
   */
  async search(query: SearchQuery): Promise<SearchResponse> {
    await this.initialize();

    if (!this.db) {
      throw new Error("Search engine not initialized");
    }

    const startTime = performance.now();

    // Build where clause for filters
    const where: Record<string, unknown> = {};

    if (query.category) {
      where.category = query.category;
    }

    if (query.language) {
      where.language = query.language;
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

    const result = await oramaSearch(this.db, {
      term: query.text || "",
      properties: ["searchableText", "name", "category"],
      limit: query.limit || 20,
      offset: query.offset || 0,
      where: Object.keys(where).length > 0 ? where : undefined,
    });

    const elapsed = performance.now() - startTime;

    const results: SearchResult[] = result.hits.map((hit) => ({
      id: hit.document.id,
      name: hit.document.name,
      category: hit.document.category,
      previewImage: hit.document.previewImage,
      tags: {
        functional: hit.document.functionalTags as string[],
        style: hit.document.styleTags as string[],
        layout: hit.document.layoutTags as string[],
        industry: hit.document.industryTags as string[],
      },
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
export const searchService = new SearchService();
