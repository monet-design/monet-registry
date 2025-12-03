import "server-only";
import { create, insert, search as oramaSearch } from "@orama/orama";
import type { Orama } from "@orama/orama";
import { getAllComponents } from "./registry";

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
} as const;

let searchDB: Orama<typeof SEARCH_SCHEMA> | null = null;

/**
 * Initialize the Orama search engine
 */
async function initializeSearchEngine() {
  if (searchDB) return searchDB;

  searchDB = await create({ schema: SEARCH_SCHEMA });
  const components = await getAllComponents();

  for (const component of components) {
    await insert(searchDB, {
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
      previewImage: component.images.preview,
      createdAt: component.createdAt || "",
      status: component.status,
    });
  }

  console.log(
    `Search engine initialized: ${components.length} documents indexed`
  );

  return searchDB;
}

/**
 * Search options
 */
export interface SearchOptions {
  query?: string;
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

/**
 * Search components
 */
export async function searchComponents(options: SearchOptions) {
  const db = await initializeSearchEngine();
  const startTime = performance.now();

  // Build where clause for filters
  const where: Record<string, any> = {};

  if (options.category) {
    where.category = options.category;
  }

  if (options.tags?.functional?.length) {
    where.functionalTags = { containsAll: options.tags.functional };
  }

  if (options.tags?.style?.length) {
    where.styleTags = { containsAll: options.tags.style };
  }

  if (options.tags?.layout?.length) {
    where.layoutTags = { containsAll: options.tags.layout };
  }

  if (options.tags?.industry?.length) {
    where.industryTags = { containsAll: options.tags.industry };
  }

  const result = await oramaSearch(db, {
    term: options.query || "",
    properties: ["searchableText", "name", "category"],
    limit: options.limit || 20,
    offset: options.offset || 0,
    where: Object.keys(where).length > 0 ? where : undefined,
  });

  const elapsed = performance.now() - startTime;

  return {
    hits: result.hits,
    total: result.count,
    elapsed,
  };
}
