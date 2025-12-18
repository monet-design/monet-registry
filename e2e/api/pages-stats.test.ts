import { describe, it, expect } from "vitest";
import { apiGet } from "../helpers/api-client";

interface SectionCategory {
  category: string;
  count: number;
}

interface SourceStats {
  url: number;
  manual: number;
}

interface GetPagesStatsResponse {
  success: boolean;
  total_pages: number;
  total_sections_across_pages: number;
  average_sections_per_page: number;
  section_categories: SectionCategory[];
  sources: SourceStats;
  query_tips: string[];
}

describe("GET /api/v1/pages/stats", () => {
  describe("Basic Statistics", () => {
    it("should return page statistics", async () => {
      const { status, data } = await apiGet<GetPagesStatsResponse>(
        "/api/v1/pages/stats"
      );

      expect(status).toBe(200);
      expect(data.success).toBe(true);
    });

    it("should have total_pages greater than 0", async () => {
      const { data } = await apiGet<GetPagesStatsResponse>(
        "/api/v1/pages/stats"
      );

      expect(typeof data.total_pages).toBe("number");
      expect(data.total_pages).toBeGreaterThan(0);
    });

    it("should include total_sections_across_pages", async () => {
      const { data } = await apiGet<GetPagesStatsResponse>(
        "/api/v1/pages/stats"
      );

      expect(typeof data.total_sections_across_pages).toBe("number");
      expect(data.total_sections_across_pages).toBeGreaterThan(0);
    });

    it("should include average_sections_per_page", async () => {
      const { data } = await apiGet<GetPagesStatsResponse>(
        "/api/v1/pages/stats"
      );

      expect(typeof data.average_sections_per_page).toBe("number");
      expect(data.average_sections_per_page).toBeGreaterThan(0);
    });
  });

  describe("Section Categories", () => {
    it("should include section_categories array", async () => {
      const { data } = await apiGet<GetPagesStatsResponse>(
        "/api/v1/pages/stats"
      );

      expect(Array.isArray(data.section_categories)).toBe(true);
      expect(data.section_categories.length).toBeGreaterThan(0);
    });

    it("should have proper section_categories structure", async () => {
      const { data } = await apiGet<GetPagesStatsResponse>(
        "/api/v1/pages/stats"
      );

      for (const cat of data.section_categories) {
        expect(cat.category).toBeDefined();
        expect(typeof cat.category).toBe("string");
        expect(typeof cat.count).toBe("number");
        expect(cat.count).toBeGreaterThanOrEqual(0);
      }
    });

    it("should include common section categories", async () => {
      const { data } = await apiGet<GetPagesStatsResponse>(
        "/api/v1/pages/stats"
      );

      const categoryNames = data.section_categories.map((c) => c.category);

      // At least some common categories should exist
      const commonCategories = [
        "hero",
        "feature",
        "footer",
        "header",
        "pricing",
        "faq",
      ];
      const hasCommonCategory = commonCategories.some((cat) =>
        categoryNames.includes(cat)
      );
      expect(hasCommonCategory).toBe(true);
    });
  });

  describe("Sources Statistics", () => {
    it("should include sources object", async () => {
      const { data } = await apiGet<GetPagesStatsResponse>(
        "/api/v1/pages/stats"
      );

      expect(data.sources).toBeDefined();
      expect(typeof data.sources).toBe("object");
    });

    it("should have proper sources structure", async () => {
      const { data } = await apiGet<GetPagesStatsResponse>(
        "/api/v1/pages/stats"
      );

      expect(typeof data.sources.url).toBe("number");
      expect(typeof data.sources.manual).toBe("number");
      expect(data.sources.url).toBeGreaterThanOrEqual(0);
      expect(data.sources.manual).toBeGreaterThanOrEqual(0);
    });
  });

  describe("Query Tips", () => {
    it("should include query_tips array", async () => {
      const { data } = await apiGet<GetPagesStatsResponse>(
        "/api/v1/pages/stats"
      );

      expect(Array.isArray(data.query_tips)).toBe(true);
      expect(data.query_tips.length).toBeGreaterThan(0);
    });

    it("should have string query_tips", async () => {
      const { data } = await apiGet<GetPagesStatsResponse>(
        "/api/v1/pages/stats"
      );

      for (const tip of data.query_tips) {
        expect(typeof tip).toBe("string");
        expect(tip.length).toBeGreaterThan(0);
      }
    });
  });

  describe("Cache Control", () => {
    it("should have Cache-Control header", async () => {
      const { headers } = await apiGet<GetPagesStatsResponse>(
        "/api/v1/pages/stats"
      );

      const cacheControl = headers.get("cache-control");
      expect(cacheControl).toBeDefined();
      expect(cacheControl).toContain("s-maxage");
    });
  });
});
