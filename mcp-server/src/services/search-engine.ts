/**
 * Orama 검색 엔진 서비스
 */

import { create, insert, search, count, type Orama } from "@orama/orama";
import { registryService, type RegistryEntry } from "./registry.js";

interface SearchDocument {
  id: string;
  name: string;
  category: string;
  searchableText: string;
  functionalTags: string[];
  styleTags: string[];
  layoutTags: string[];
  industryTags: string[];
  freeformKeywords: string[];
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

const schema = {
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
} as const;

type OramaDB = Orama<typeof schema>;

class SearchEngine {
  private db: OramaDB | null = null;
  private initialized = false;

  async initialize(): Promise<void> {
    if (this.initialized) return;

    this.db = await create({ schema });

    const components = registryService.getAllComponents();

    for (const component of components) {
      await this.addDocument(component);
    }

    this.initialized = true;
    console.log(`Search engine initialized: ${components.length} documents indexed`);
  }

  private async addDocument(entry: RegistryEntry): Promise<void> {
    if (!this.db) return;

    const doc: SearchDocument = {
      id: entry.id,
      name: entry.name,
      category: entry.category,
      searchableText: entry.searchableText,
      functionalTags: entry.tags.functional,
      styleTags: entry.tags.style,
      layoutTags: entry.tags.layout,
      industryTags: entry.tags.industry,
      freeformKeywords: entry.freeformKeywords,
      fontFamily: entry.fontFamily,
      previewImage: entry.images.preview,
      createdAt: entry.createdAt || "",
      status: entry.status,
    };

    await insert(this.db, doc);
  }

  async search(query: SearchQuery): Promise<SearchResponse> {
    if (!this.db) {
      throw new Error("Search engine not initialized");
    }

    const startTime = performance.now();

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

    const searchResult = await search(this.db, {
      term: query.text || "",
      properties: ["searchableText", "name", "category"],
      limit: query.limit || 20,
      offset: query.offset || 0,
      where: Object.keys(where).length > 0 ? where : undefined,
    });

    const elapsed = performance.now() - startTime;

    const results: SearchResult[] = searchResult.hits.map((hit) => {
      const doc = hit.document;
      const entry = registryService.getComponent(doc.id);
      return {
        id: doc.id,
        name: doc.name,
        category: doc.category,
        previewImage: doc.previewImage,
        score: hit.score,
        tags: {
          functional: doc.functionalTags,
          style: doc.styleTags,
          layout: doc.layoutTags,
          industry: doc.industryTags,
        },
        keywords: entry?.freeformKeywords || [],
      };
    });

    return {
      results,
      total: searchResult.count,
      elapsed,
    };
  }

  async getTotalCount(): Promise<number> {
    if (!this.db) return 0;
    return await count(this.db);
  }

  isInitialized(): boolean {
    return this.initialized;
  }
}

export const searchEngine = new SearchEngine();
