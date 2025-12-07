/**
 * Registry Service
 * 컴포넌트 레지스트리 데이터 관리
 */

import "server-only";
import { unstable_cache } from "next/cache";
import fs from "fs/promises";
import path from "path";
import type { RegistryEntry, ListComponentsOptions } from "../types";

const REGISTRY_PATH = path.join(
  process.cwd(),
  "public/generated/registry.json"
);
const CATEGORY_INDEX_PATH = path.join(
  process.cwd(),
  "public/generated/category-index.json"
);
const TAG_INDEX_PATH = path.join(
  process.cwd(),
  "public/generated/tag-index.json"
);

export type CategoryIndex = Record<string, string[]>;
export type TagIndex = {
  functional: Record<string, string[]>;
  style: Record<string, string[]>;
  layout: Record<string, string[]>;
  industry: Record<string, string[]>;
};

/**
 * Load registry data with 1-hour cache
 */
const loadRegistry = unstable_cache(
  async (): Promise<Record<string, RegistryEntry>> => {
    const content = await fs.readFile(REGISTRY_PATH, "utf-8");
    return JSON.parse(content);
  },
  ["registry-data"],
  { revalidate: 3600 }
);

/**
 * Load category index with 1-hour cache
 */
const loadCategoryIndex = unstable_cache(
  async (): Promise<CategoryIndex> => {
    const content = await fs.readFile(CATEGORY_INDEX_PATH, "utf-8");
    return JSON.parse(content);
  },
  ["category-index"],
  { revalidate: 3600 }
);

/**
 * Load tag index with 1-hour cache
 */
const loadTagIndex = unstable_cache(
  async (): Promise<TagIndex> => {
    const content = await fs.readFile(TAG_INDEX_PATH, "utf-8");
    return JSON.parse(content);
  },
  ["tag-index"],
  { revalidate: 3600 }
);

class RegistryService {
  /**
   * Get the complete registry
   */
  async getRegistry(): Promise<Record<string, RegistryEntry>> {
    return loadRegistry();
  }

  /**
   * Get a specific component by ID
   */
  async getComponent(id: string): Promise<RegistryEntry | undefined> {
    const registry = await loadRegistry();
    return registry[id];
  }

  /**
   * Get all components as an array
   */
  async getAllComponents(): Promise<RegistryEntry[]> {
    const registry = await loadRegistry();
    return Object.values(registry);
  }

  /**
   * Get all component IDs
   */
  async getAllComponentIds(): Promise<string[]> {
    const registry = await loadRegistry();
    return Object.keys(registry);
  }

  /**
   * Get the category index
   */
  async getCategoryIndex(): Promise<CategoryIndex> {
    return loadCategoryIndex();
  }

  /**
   * Get the tag index
   */
  async getTagIndex(): Promise<TagIndex> {
    return loadTagIndex();
  }

  /**
   * Get total component count
   */
  async getTotalCount(): Promise<number> {
    const registry = await loadRegistry();
    return Object.keys(registry).length;
  }

  /**
   * List components with filtering and pagination
   */
  async listComponents(
    options: ListComponentsOptions = {}
  ): Promise<{ components: RegistryEntry[]; total: number }> {
    const { category, status, language, tags, offset = 0, limit = 20 } = options;

    let components = await this.getAllComponents();

    // Apply category filter
    if (category) {
      components = components.filter((c) => c.category === category);
    }

    // Apply status filter
    if (status) {
      components = components.filter((c) => c.status === status);
    }

    // Apply language filter
    if (language) {
      components = components.filter((c) => c.language === language);
    }

    // Apply tag filters (AND logic - component must have all specified tags)
    if (tags?.functional?.length) {
      components = components.filter((c) =>
        tags.functional!.every((t) => c.tags.functional.includes(t))
      );
    }

    if (tags?.style?.length) {
      components = components.filter((c) =>
        tags.style!.every((t) => c.tags.style.includes(t))
      );
    }

    if (tags?.layout?.length) {
      components = components.filter((c) =>
        tags.layout!.every((t) => c.tags.layout.includes(t))
      );
    }

    if (tags?.industry?.length) {
      components = components.filter((c) =>
        tags.industry!.every((t) => c.tags.industry.includes(t))
      );
    }

    const total = components.length;

    // Sort by createdAt (newest first)
    components.sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA;
    });

    // Apply pagination
    const paginated = components.slice(offset, offset + limit);

    return { components: paginated, total };
  }

  /**
   * Find similar component IDs based on category and tags
   */
  async findSimilarIds(componentId: string, limit = 5): Promise<string[]> {
    const registry = await loadRegistry();
    const categoryIndex = await loadCategoryIndex();
    const component = registry[componentId];

    if (!component) return [];

    const candidates: { id: string; score: number }[] = [];
    const sameCategory = categoryIndex[component.category] || [];

    for (const id of sameCategory) {
      if (id === componentId) continue;
      const candidate = registry[id];
      if (!candidate) continue;

      let score = 0;
      const styleTags = new Set(component.tags.style);
      for (const tag of candidate.tags.style) {
        if (styleTags.has(tag)) score += 2;
      }

      const layoutTags = new Set(component.tags.layout);
      for (const tag of candidate.tags.layout) {
        if (layoutTags.has(tag)) score += 1;
      }

      candidates.push({ id, score });
    }

    candidates.sort((a, b) => b.score - a.score);
    return candidates.slice(0, limit).map((c) => c.id);
  }

  /**
   * Check if registry is loaded
   */
  async isInitialized(): Promise<boolean> {
    try {
      const registry = await loadRegistry();
      return Object.keys(registry).length > 0;
    } catch {
      return false;
    }
  }
}

// 싱글톤 인스턴스
export const registryService = new RegistryService();
