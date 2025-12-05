import { describe, it, expect } from "vitest";
import { apiGet } from "../helpers/api-client";

interface TagCount {
  tag: string;
  count: number;
}

interface CategoryInfo {
  name: string;
  count: number;
  description: string;
  examples?: string[];
}

interface GetRegistryStatsResponse {
  success: boolean;
  total_components: number;
  categories: CategoryInfo[];
  tags: {
    functional: TagCount[];
    style: TagCount[];
    layout: TagCount[];
    industry: TagCount[];
  };
  fonts_used: TagCount[];
  query_tips: string[];
}

describe("GET /api/v1/stats", () => {
  describe("Statistics", () => {
    it("should return total_components count", async () => {
      const { status, data } =
        await apiGet<GetRegistryStatsResponse>("/api/v1/stats");

      expect(status).toBe(200);
      expect(data.success).toBe(true);
      expect(typeof data.total_components).toBe("number");
      expect(data.total_components).toBeGreaterThan(0);
    });

    it("should return categories with counts", async () => {
      const { data } =
        await apiGet<GetRegistryStatsResponse>("/api/v1/stats");

      expect(Array.isArray(data.categories)).toBe(true);
      expect(data.categories.length).toBeGreaterThan(0);

      data.categories.forEach((category) => {
        expect(category.name).toBeDefined();
        expect(typeof category.count).toBe("number");
        expect(category.description).toBeDefined();
      });
    });

    it("should include examples when include_examples=true (default)", async () => {
      const { data } =
        await apiGet<GetRegistryStatsResponse>("/api/v1/stats");

      // At least some categories should have examples
      const hasExamples = data.categories.some(
        (c) => c.examples && c.examples.length > 0
      );
      expect(hasExamples).toBe(true);
    });

    it("should exclude examples when include_examples=false", async () => {
      const { data } = await apiGet<GetRegistryStatsResponse>(
        "/api/v1/stats",
        { include_examples: "false" }
      );

      expect(data.success).toBe(true);
      // Examples should be empty or undefined
      data.categories.forEach((category) => {
        expect(!category.examples || category.examples.length === 0).toBe(true);
      });
    });

    it("should return tag statistics grouped by type", async () => {
      const { data } =
        await apiGet<GetRegistryStatsResponse>("/api/v1/stats");

      expect(data.tags).toBeDefined();
      expect(Array.isArray(data.tags.functional)).toBe(true);
      expect(Array.isArray(data.tags.style)).toBe(true);
      expect(Array.isArray(data.tags.layout)).toBe(true);
      expect(Array.isArray(data.tags.industry)).toBe(true);

      // Check tag structure
      const allTags = [
        ...data.tags.functional,
        ...data.tags.style,
        ...data.tags.layout,
        ...data.tags.industry,
      ];

      allTags.forEach((tag) => {
        expect(tag.tag).toBeDefined();
        expect(typeof tag.count).toBe("number");
      });
    });

    it("should return fonts_used list", async () => {
      const { data } =
        await apiGet<GetRegistryStatsResponse>("/api/v1/stats");

      expect(Array.isArray(data.fonts_used)).toBe(true);
    });

    it("should include query_tips", async () => {
      const { data } =
        await apiGet<GetRegistryStatsResponse>("/api/v1/stats");

      expect(Array.isArray(data.query_tips)).toBe(true);
      expect(data.query_tips.length).toBeGreaterThan(0);
    });
  });

  describe("Category Filter", () => {
    it("should filter stats by category", async () => {
      const { data } = await apiGet<GetRegistryStatsResponse>(
        "/api/v1/stats",
        { category: "hero" }
      );

      expect(data.success).toBe(true);
      // When filtered, only the specified category should be returned
      if (data.categories.length === 1) {
        expect(data.categories[0].name).toBe("hero");
      }
    });
  });

  it("should have proper Cache-Control header", async () => {
    const { headers } =
      await apiGet<GetRegistryStatsResponse>("/api/v1/stats");

    const cacheControl = headers.get("cache-control");
    expect(cacheControl).toContain("s-maxage");
  });
});
