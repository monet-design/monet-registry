/**
 * Registry 데이터 로딩 및 관리
 */

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
    short?: string;
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

export type CategoryIndex = Record<string, string[]>;
export type TagIndex = {
  functional: Record<string, string[]>;
  style: Record<string, string[]>;
  layout: Record<string, string[]>;
  industry: Record<string, string[]>;
};

class RegistryService {
  private registry: Map<string, RegistryEntry> = new Map();
  private categoryIndex: CategoryIndex = {};
  private tagIndex: TagIndex = {
    functional: {},
    style: {},
    layout: {},
    industry: {},
  };
  private initialized = false;

  async initialize(): Promise<void> {
    if (this.initialized) return;

    const registryPath =
      process.env.REGISTRY_PATH ||
      path.join(__dirname, "../../../dist/registry.json");
    const categoryIndexPath =
      process.env.CATEGORY_INDEX_PATH ||
      path.join(__dirname, "../../../dist/category-index.json");
    const tagIndexPath =
      process.env.TAG_INDEX_PATH ||
      path.join(__dirname, "../../../dist/tag-index.json");

    try {
      const [registryData, categoryData, tagData] = await Promise.all([
        fs.promises.readFile(registryPath, "utf-8"),
        fs.promises.readFile(categoryIndexPath, "utf-8"),
        fs.promises.readFile(tagIndexPath, "utf-8"),
      ]);

      const registryJson = JSON.parse(registryData) as Record<string, RegistryEntry>;
      this.categoryIndex = JSON.parse(categoryData);
      this.tagIndex = JSON.parse(tagData);

      for (const [id, entry] of Object.entries(registryJson)) {
        this.registry.set(id, entry);
      }

      this.initialized = true;
      console.log(`Registry loaded: ${this.registry.size} components`);
    } catch (error) {
      console.error("Failed to load registry:", error);
      throw error;
    }
  }

  getComponent(id: string): RegistryEntry | undefined {
    return this.registry.get(id);
  }

  getAllComponents(): RegistryEntry[] {
    return Array.from(this.registry.values());
  }

  getComponentsByCategory(category: string): string[] {
    return this.categoryIndex[category] || [];
  }

  getCategoryIndex(): CategoryIndex {
    return this.categoryIndex;
  }

  getTagIndex(): TagIndex {
    return this.tagIndex;
  }

  getTotalCount(): number {
    return this.registry.size;
  }

  isInitialized(): boolean {
    return this.initialized;
  }

  findSimilarIds(componentId: string, limit = 5): string[] {
    const component = this.registry.get(componentId);
    if (!component) return [];

    const candidates: { id: string; score: number }[] = [];
    const sameCategory = this.categoryIndex[component.category] || [];

    for (const id of sameCategory) {
      if (id === componentId) continue;
      const candidate = this.registry.get(id);
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
}

export const registryService = new RegistryService();
