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
