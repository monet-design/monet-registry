import { describe, it, expect } from "vitest";
import { apiGet } from "../helpers/api-client";

interface SearchResult {
  id: string;
  name: string;
  category: string;
  preview_image: string;
  tags: {
    functional: string[];
    style: string[];
    layout: string[];
    industry: string[];
  };
  keywords: string[];
}

interface SearchComponentsResponse {
  success: boolean;
  query: string;
  total: number;
  offset: number;
  limit: number;
  hasNext: boolean;
  elapsed_ms: number;
  results: SearchResult[];
}

describe("GET /api/v1/components/search", () => {
  describe("Search Query", () => {
    it("should search by query text", async () => {
      const { status, data } = await apiGet<SearchComponentsResponse>(
        "/api/v1/components/search",
        { query: "hero" }
      );

      expect(status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.query).toBe("hero");
    });

    it("should return results with matching data", async () => {
      const { data } = await apiGet<SearchComponentsResponse>(
        "/api/v1/components/search",
        { query: "minimal" }
      );

      expect(data.success).toBe(true);
      expect(Array.isArray(data.results)).toBe(true);
    });

    it("should include elapsed_ms in response", async () => {
      const { data } = await apiGet<SearchComponentsResponse>(
        "/api/v1/components/search",
        { query: "hero" }
      );

      expect(typeof data.elapsed_ms).toBe("number");
      expect(data.elapsed_ms).toBeGreaterThanOrEqual(0);
    });
  });

  describe("Search with Filters", () => {
    it("should combine query with category filter", async () => {
      const { data } = await apiGet<SearchComponentsResponse>(
        "/api/v1/components/search",
        { query: "section", category: "hero" }
      );

      expect(data.success).toBe(true);
      if (data.results.length > 0) {
        data.results.forEach((result) => {
          expect(result.category).toBe("hero");
        });
      }
    });

    it("should apply pagination to search results", async () => {
      const { data } = await apiGet<SearchComponentsResponse>(
        "/api/v1/components/search",
        { query: "hero", limit: "5", offset: "0" }
      );

      expect(data.limit).toBe(5);
      expect(data.offset).toBe(0);
      expect(data.results.length).toBeLessThanOrEqual(5);
    });
  });

  describe("Response Structure", () => {
    it("should return search-specific fields", async () => {
      const { data } = await apiGet<SearchComponentsResponse>(
        "/api/v1/components/search",
        { query: "pricing" }
      );

      expect(data.success).toBe(true);
      expect(data.query).toBeDefined();
      expect(typeof data.total).toBe("number");
      expect(typeof data.elapsed_ms).toBe("number");
    });

    it("should include required fields in each result", async () => {
      const { data } = await apiGet<SearchComponentsResponse>(
        "/api/v1/components/search",
        { query: "hero", limit: "1" }
      );

      if (data.results.length > 0) {
        const result = data.results[0];
        expect(result.id).toBeDefined();
        expect(result.name).toBeDefined();
        expect(result.category).toBeDefined();
        expect(result.preview_image).toBeDefined();
        expect(result.tags).toBeDefined();
      }
    });
  });

  describe("Edge Cases", () => {
    it("should handle empty results gracefully", async () => {
      const { data } = await apiGet<SearchComponentsResponse>(
        "/api/v1/components/search",
        { query: "xyznonexistent123" }
      );

      expect(data.success).toBe(true);
      expect(data.results).toHaveLength(0);
      expect(data.total).toBe(0);
    });
  });
});
