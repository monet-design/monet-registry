import "server-only";
import { unstable_cache } from "next/cache";
import fs from "fs/promises";
import path from "path";
import type { RegistryEntry } from "../types";

const REGISTRY_PATH = path.join(process.cwd(), "dist/registry.json");
const CATEGORY_INDEX_PATH = path.join(
  process.cwd(),
  "dist/category-index.json"
);
const TAG_INDEX_PATH = path.join(process.cwd(), "dist/tag-index.json");

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
  async (): Promise<Record<string, string[]>> => {
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
  async (): Promise<{
    functional: Record<string, string[]>;
    style: Record<string, string[]>;
    layout: Record<string, string[]>;
    industry: Record<string, string[]>;
  }> => {
    const content = await fs.readFile(TAG_INDEX_PATH, "utf-8");
    return JSON.parse(content);
  },
  ["tag-index"],
  { revalidate: 3600 }
);

/**
 * Get the complete registry
 */
export async function getRegistry() {
  return loadRegistry();
}

/**
 * Get a specific component by ID
 */
export async function getComponent(
  id: string
): Promise<RegistryEntry | undefined> {
  const registry = await loadRegistry();
  return registry[id];
}

/**
 * Get all components as an array
 */
export async function getAllComponents(): Promise<RegistryEntry[]> {
  const registry = await loadRegistry();
  return Object.values(registry);
}

/**
 * Get the category index
 */
export async function getCategoryIndex() {
  return loadCategoryIndex();
}

/**
 * Get the tag index
 */
export async function getTagIndex() {
  return loadTagIndex();
}

/**
 * Options for listing components
 */
export interface ListComponentsOptions {
  category?: string;
  status?: string;
  tags?: {
    functional?: string[];
    style?: string[];
    layout?: string[];
    industry?: string[];
  };
  offset?: number;
  limit?: number;
}

/**
 * List components with filtering and pagination
 */
export async function listComponents(
  options: ListComponentsOptions = {}
): Promise<{ components: RegistryEntry[]; total: number }> {
  const { category, status, tags, offset = 0, limit = 20 } = options;

  let components = await getAllComponents();

  // Apply category filter
  if (category) {
    components = components.filter((c) => c.category === category);
  }

  // Apply status filter
  if (status) {
    components = components.filter((c) => c.status === status);
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
