/**
 * Page Registry Service
 * 페이지 레지스트리 데이터 관리
 */

import "server-only";
import { unstable_cache } from "next/cache";
import fs from "fs/promises";
import path from "path";
import type {
  PageRegistryEntry,
  ListPagesOptions,
  RegistryEntry,
} from "../types";

const PAGE_REGISTRY_PATH = path.join(
  process.cwd(),
  "public/generated/page-registry.json"
);
const PAGE_INDEX_PATH = path.join(
  process.cwd(),
  "public/generated/page-index.json"
);
const SECTION_TO_PAGE_PATH = path.join(
  process.cwd(),
  "public/generated/section-to-page.json"
);
const REGISTRY_PATH = path.join(
  process.cwd(),
  "public/generated/registry.json"
);

export type PageIndex = Record<string, string[]>;
export type SectionToPageIndex = Record<string, string>;

/**
 * Load page registry data with 1-hour cache
 */
const loadPageRegistry = unstable_cache(
  async (): Promise<Record<string, PageRegistryEntry>> => {
    try {
      const content = await fs.readFile(PAGE_REGISTRY_PATH, "utf-8");
      return JSON.parse(content);
    } catch {
      return {};
    }
  },
  ["page-registry-data"],
  { revalidate: 3600 }
);

/**
 * Load page index with 1-hour cache
 */
const loadPageIndex = unstable_cache(
  async (): Promise<PageIndex> => {
    try {
      const content = await fs.readFile(PAGE_INDEX_PATH, "utf-8");
      return JSON.parse(content);
    } catch {
      return {};
    }
  },
  ["page-index"],
  { revalidate: 3600 }
);

/**
 * Load section-to-page index with 1-hour cache
 */
const loadSectionToPageIndex = unstable_cache(
  async (): Promise<SectionToPageIndex> => {
    try {
      const content = await fs.readFile(SECTION_TO_PAGE_PATH, "utf-8");
      return JSON.parse(content);
    } catch {
      return {};
    }
  },
  ["section-to-page-index"],
  { revalidate: 3600 }
);

/**
 * Load component registry (for section details)
 */
const loadRegistry = unstable_cache(
  async (): Promise<Record<string, RegistryEntry>> => {
    try {
      const content = await fs.readFile(REGISTRY_PATH, "utf-8");
      return JSON.parse(content);
    } catch {
      return {};
    }
  },
  ["registry-data"],
  { revalidate: 3600 }
);

class PageRegistryService {
  /**
   * Get the complete page registry
   */
  async getPageRegistry(): Promise<Record<string, PageRegistryEntry>> {
    return loadPageRegistry();
  }

  /**
   * Get a specific page by ID
   */
  async getPage(id: string): Promise<PageRegistryEntry | undefined> {
    const registry = await loadPageRegistry();
    return registry[id];
  }

  /**
   * Get all pages as an array
   */
  async getAllPages(): Promise<PageRegistryEntry[]> {
    const registry = await loadPageRegistry();
    return Object.values(registry);
  }

  /**
   * Get all page IDs
   */
  async getAllPageIds(): Promise<string[]> {
    const registry = await loadPageRegistry();
    return Object.keys(registry);
  }

  /**
   * Get the page index (page -> sections mapping)
   */
  async getPageIndex(): Promise<PageIndex> {
    return loadPageIndex();
  }

  /**
   * Get the section-to-page mapping
   */
  async getSectionToPageIndex(): Promise<SectionToPageIndex> {
    return loadSectionToPageIndex();
  }

  /**
   * Get parent page info for a section
   */
  async getParentPage(
    sectionId: string
  ): Promise<{ pageId: string; page: PageRegistryEntry; order: number } | null> {
    const sectionToPage = await loadSectionToPageIndex();
    const pageId = sectionToPage[sectionId];

    if (!pageId) return null;

    const page = await this.getPage(pageId);
    if (!page) return null;

    const sectionRef = page.sections.find((s) => s.id === sectionId);
    const order = sectionRef?.order ?? -1;

    return { pageId, page, order };
  }

  /**
   * Get section component details from registry
   */
  async getSectionDetails(sectionId: string): Promise<RegistryEntry | undefined> {
    const registry = await loadRegistry();
    return registry[sectionId];
  }

  /**
   * Get total page count
   */
  async getTotalCount(): Promise<number> {
    const registry = await loadPageRegistry();
    return Object.keys(registry).length;
  }

  /**
   * List pages with filtering and pagination
   */
  async listPages(
    options: ListPagesOptions = {}
  ): Promise<{ pages: PageRegistryEntry[]; total: number }> {
    const {
      status,
      sortBy = "created_at",
      sortOrder = "desc",
      offset = 0,
      limit = 20,
    } = options;

    let pages = await this.getAllPages();

    // Apply status filter
    if (status) {
      pages = pages.filter((p) => p.status === status);
    }

    const total = pages.length;

    // Sort
    pages.sort((a, b) => {
      let comparison = 0;

      if (sortBy === "created_at") {
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        comparison = dateA - dateB;
      } else if (sortBy === "sections_count") {
        comparison = a.pageInfo.totalSections - b.pageInfo.totalSections;
      }

      return sortOrder === "desc" ? -comparison : comparison;
    });

    // Apply pagination
    const paginated = pages.slice(offset, offset + limit);

    return { pages: paginated, total };
  }

  /**
   * Find similar pages based on section composition
   */
  async findSimilarPages(pageId: string, limit = 3): Promise<string[]> {
    const registry = await loadPageRegistry();
    const page = registry[pageId];

    if (!page) return [];

    const pageCategories = new Set(page.sections.map((s) => s.category));
    const candidates: { id: string; score: number }[] = [];

    for (const [id, candidate] of Object.entries(registry)) {
      if (id === pageId) continue;

      let score = 0;
      const candidateCategories = new Set(
        candidate.sections.map((s) => s.category)
      );

      // Score based on overlapping section categories
      for (const cat of candidateCategories) {
        if (pageCategories.has(cat)) score += 1;
      }

      // Bonus for similar section count
      const sizeDiff = Math.abs(
        page.pageInfo.totalSections - candidate.pageInfo.totalSections
      );
      if (sizeDiff <= 2) score += 1;

      if (score > 0) {
        candidates.push({ id, score });
      }
    }

    candidates.sort((a, b) => b.score - a.score);
    return candidates.slice(0, limit).map((c) => c.id);
  }

  /**
   * Get statistics about pages
   */
  async getStats(): Promise<{
    totalPages: number;
    totalSections: number;
    avgSectionsPerPage: number;
    sectionCategories: { category: string; count: number }[];
    sources: { url: number; manual: number };
  }> {
    const pages = await this.getAllPages();
    const totalPages = pages.length;

    if (totalPages === 0) {
      return {
        totalPages: 0,
        totalSections: 0,
        avgSectionsPerPage: 0,
        sectionCategories: [],
        sources: { url: 0, manual: 0 },
      };
    }

    const totalSections = pages.reduce(
      (sum, p) => sum + p.pageInfo.totalSections,
      0
    );
    const avgSectionsPerPage = Math.round((totalSections / totalPages) * 10) / 10;

    // Count section categories
    const categoryMap = new Map<string, number>();
    for (const page of pages) {
      for (const section of page.sections) {
        const count = categoryMap.get(section.category) || 0;
        categoryMap.set(section.category, count + 1);
      }
    }

    const sectionCategories = Array.from(categoryMap.entries())
      .map(([category, count]) => ({ category, count }))
      .sort((a, b) => b.count - a.count);

    // Count sources
    const sources = { url: 0, manual: 0 };
    for (const page of pages) {
      if (page.source?.type === "url") {
        sources.url++;
      } else {
        sources.manual++;
      }
    }

    return {
      totalPages,
      totalSections,
      avgSectionsPerPage,
      sectionCategories,
      sources,
    };
  }

  /**
   * Check if page registry is loaded
   */
  async isInitialized(): Promise<boolean> {
    try {
      const registry = await loadPageRegistry();
      return Object.keys(registry).length > 0;
    } catch {
      return false;
    }
  }
}

// 싱글톤 인스턴스
export const pageRegistryService = new PageRegistryService();
