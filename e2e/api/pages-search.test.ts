import { describe, it, expect } from "vitest";
import { apiGet } from "../helpers/api-client";

interface SearchResultItem {
  id: string;
  name: string;
  title?: string;
  preview_image: string;
  sections_count: number;
  keywords?: string[];
}

interface SearchPagesResponse {
  success: boolean;
  query: string;
  total: number;
  offset: number;
  limit: number;
  hasNext: boolean;
  elapsed_ms: number;
  results: SearchResultItem[];
}

interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
  };
}

describe("GET /api/v1/pages/search", () => {
  describe("Search Query", () => {
    it("should return search results for valid query", async () => {
      const { status, data } = await apiGet<SearchPagesResponse>(
        "/api/v1/pages/search",
        { query: "landing" }
      );

      expect(status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.query).toBe("landing");
      expect(Array.isArray(data.results)).toBe(true);
    });

    it("should return empty array when no matches found", async () => {
      const { status, data } = await apiGet<SearchPagesResponse>(
        "/api/v1/pages/search",
        { query: "xyznonexistent123456" }
      );

      expect(status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.results).toEqual([]);
      expect(data.total).toBe(0);
    });

    it("should include elapsed_ms in response", async () => {
      const { data } = await apiGet<SearchPagesResponse>(
        "/api/v1/pages/search",
        { query: "page" }
      );

      expect(data.elapsed_ms).toBeDefined();
      expect(typeof data.elapsed_ms).toBe("number");
      expect(data.elapsed_ms).toBeGreaterThanOrEqual(0);
    });
  });

  describe("Search Result Structure", () => {
    it("should have proper result structure", async () => {
      const { data } = await apiGet<SearchPagesResponse>(
        "/api/v1/pages/search",
        { query: "landing" }
      );

      if (data.results.length > 0) {
        const result = data.results[0];
        expect(result.id).toBeDefined();
        expect(result.name).toBeDefined();
        expect(result.preview_image).toBeDefined();
        expect(typeof result.sections_count).toBe("number");
      }
    });

    it("should include all response metadata", async () => {
      const { data } = await apiGet<SearchPagesResponse>(
        "/api/v1/pages/search",
        { query: "test", limit: "5" }
      );

      expect(data.query).toBeDefined();
      expect(typeof data.total).toBe("number");
      expect(typeof data.offset).toBe("number");
      expect(typeof data.limit).toBe("number");
      expect(typeof data.hasNext).toBe("boolean");
    });
  });

  describe("Pagination", () => {
    it("should respect limit parameter", async () => {
      const { data } = await apiGet<SearchPagesResponse>(
        "/api/v1/pages/search",
        { query: "landing", limit: "2" }
      );

      expect(data.limit).toBe(2);
      expect(data.results.length).toBeLessThanOrEqual(2);
    });

    it("should respect offset parameter", async () => {
      const { data: firstPage } = await apiGet<SearchPagesResponse>(
        "/api/v1/pages/search",
        { query: "landing", limit: "1", offset: "0" }
      );

      const { data: secondPage } = await apiGet<SearchPagesResponse>(
        "/api/v1/pages/search",
        { query: "landing", limit: "1", offset: "1" }
      );

      expect(firstPage.offset).toBe(0);
      expect(secondPage.offset).toBe(1);

      // If there are multiple results, they should be different
      if (firstPage.results.length > 0 && secondPage.results.length > 0) {
        expect(firstPage.results[0].id).not.toBe(secondPage.results[0].id);
      }
    });

    it("should calculate hasNext correctly", async () => {
      const { data } = await apiGet<SearchPagesResponse>(
        "/api/v1/pages/search",
        { query: "landing", limit: "1" }
      );

      if (data.total > 1) {
        expect(data.hasNext).toBe(true);
      } else {
        expect(data.hasNext).toBe(false);
      }
    });

    it("should enforce maximum limit of 50", async () => {
      const { data } = await apiGet<SearchPagesResponse>(
        "/api/v1/pages/search",
        { query: "page", limit: "100" }
      );

      expect(data.limit).toBe(50);
    });
  });

  describe("Filters", () => {
    it("should filter by language", async () => {
      const { data } = await apiGet<SearchPagesResponse>(
        "/api/v1/pages/search",
        { query: "", language: "ko" }
      );

      expect(data.success).toBe(true);
      expect(Array.isArray(data.results)).toBe(true);
    });

    it("should filter by min_sections", async () => {
      const { data } = await apiGet<SearchPagesResponse>(
        "/api/v1/pages/search",
        { query: "", min_sections: "5" }
      );

      expect(data.success).toBe(true);
      // All results should have at least 5 sections
      for (const result of data.results) {
        expect(result.sections_count).toBeGreaterThanOrEqual(5);
      }
    });

    it("should filter by max_sections", async () => {
      const { data } = await apiGet<SearchPagesResponse>(
        "/api/v1/pages/search",
        { query: "", max_sections: "10" }
      );

      expect(data.success).toBe(true);
      // All results should have at most 10 sections
      for (const result of data.results) {
        expect(result.sections_count).toBeLessThanOrEqual(10);
      }
    });
  });

  describe("Cache Control", () => {
    it("should have Cache-Control header", async () => {
      const { headers } = await apiGet<SearchPagesResponse>(
        "/api/v1/pages/search",
        { query: "test" }
      );

      const cacheControl = headers.get("cache-control");
      expect(cacheControl).toBeDefined();
      expect(cacheControl).toContain("s-maxage");
    });
  });
});
