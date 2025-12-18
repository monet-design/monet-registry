import { describe, it, expect } from "vitest";
import { apiGet } from "../helpers/api-client";
import * as fs from "fs";
import * as path from "path";
import yaml from "js-yaml";

interface PageItem {
  id: string;
  name: string;
  title?: string;
  page_type?: string;
  preview_image?: string;
  sections_count: number;
  section_categories?: string[];
  status: string;
  source?: {
    type: string;
    url?: string;
  };
  created_at?: string;
  language?: string;
}

interface ListPagesResponse {
  success: boolean;
  pagination: {
    total: number;
    offset: number;
    limit: number;
    hasNext: boolean;
  };
  pages: PageItem[];
}

interface MetadataYaml {
  draft?: boolean;
  [key: string]: unknown;
}

function countNonDraftPagesFromMetadata(): number {
  const pagesDir = path.join(process.cwd(), "src/components/pages");

  if (!fs.existsSync(pagesDir)) {
    return 0;
  }

  const pageFolders = fs
    .readdirSync(pagesDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  let count = 0;
  for (const folder of pageFolders) {
    const metadataPath = path.join(pagesDir, folder, "metadata.yaml");
    if (fs.existsSync(metadataPath)) {
      try {
        const content = fs.readFileSync(metadataPath, "utf-8");
        const metadata = yaml.load(content) as MetadataYaml;
        if (metadata.draft !== true) {
          count++;
        }
      } catch {
        // Skip invalid metadata files
      }
    }
  }

  return count;
}

describe("GET /api/v1/pages", () => {
  describe("Basic Response", () => {
    it("should return pages from the correct location (src/components/pages)", async () => {
      const { status, data } = await apiGet<ListPagesResponse>(
        "/api/v1/pages",
        {
          limit: "1",
        }
      );

      expect(status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.pagination).toBeDefined();
    });

    it("should return the same count as non-draft pages in metadata", async () => {
      const { data } = await apiGet<ListPagesResponse>("/api/v1/pages", {
        limit: "1",
      });

      const apiTotal = data.pagination.total;
      const metadataCount = countNonDraftPagesFromMetadata();

      expect(apiTotal).toBe(metadataCount);
      expect(apiTotal).toBeGreaterThan(0);
    });

    it("should have valid page data structure", async () => {
      const { data } = await apiGet<ListPagesResponse>("/api/v1/pages", {
        limit: "5",
      });

      expect(data.pages.length).toBeGreaterThan(0);

      for (const page of data.pages) {
        expect(page.id).toBeDefined();
        expect(typeof page.id).toBe("string");
        expect(page.name).toBeDefined();
        expect(typeof page.sections_count).toBe("number");
        expect(page.sections_count).toBeGreaterThan(0);
      }
    });

    it("should return all pages when fetching with high limit", async () => {
      const { data } = await apiGet<ListPagesResponse>("/api/v1/pages", {
        limit: "50",
      });

      const metadataCount = countNonDraftPagesFromMetadata();

      expect(data.pages.length).toBe(Math.min(metadataCount, 50));
      expect(data.pagination.total).toBe(metadataCount);
    });
  });

  describe("Pagination", () => {
    it("should respect limit parameter", async () => {
      const { data } = await apiGet<ListPagesResponse>("/api/v1/pages", {
        limit: "3",
      });

      expect(data.pagination.limit).toBe(3);
      expect(data.pages.length).toBeLessThanOrEqual(3);
    });

    it("should respect offset parameter", async () => {
      const { data: firstPage } = await apiGet<ListPagesResponse>(
        "/api/v1/pages",
        {
          limit: "1",
          offset: "0",
        }
      );

      const { data: secondPage } = await apiGet<ListPagesResponse>(
        "/api/v1/pages",
        {
          limit: "1",
          offset: "1",
        }
      );

      expect(firstPage.pagination.offset).toBe(0);
      expect(secondPage.pagination.offset).toBe(1);

      if (firstPage.pages.length > 0 && secondPage.pages.length > 0) {
        expect(firstPage.pages[0].id).not.toBe(secondPage.pages[0].id);
      }
    });

    it("should calculate hasNext correctly", async () => {
      const { data } = await apiGet<ListPagesResponse>("/api/v1/pages", {
        limit: "1",
      });

      if (data.pagination.total > 1) {
        expect(data.pagination.hasNext).toBe(true);
      } else {
        expect(data.pagination.hasNext).toBe(false);
      }
    });

    it("should enforce maximum limit of 50", async () => {
      const { data } = await apiGet<ListPagesResponse>("/api/v1/pages", {
        limit: "100",
      });

      expect(data.pagination.limit).toBe(50);
    });
  });

  describe("Filtering", () => {
    it("should filter by status", async () => {
      const { data } = await apiGet<ListPagesResponse>("/api/v1/pages", {
        status: "stable",
      });

      expect(data.success).toBe(true);
      for (const page of data.pages) {
        expect(page.status).toBe("stable");
      }
    });

    it("should filter by language", async () => {
      const { data } = await apiGet<ListPagesResponse>("/api/v1/pages", {
        language: "ko",
      });

      expect(data.success).toBe(true);
      for (const page of data.pages) {
        expect(page.language).toBe("ko");
      }
    });

    it("should return empty array for non-matching filter", async () => {
      const { data } = await apiGet<ListPagesResponse>("/api/v1/pages", {
        status: "nonexistent-status-xyz",
      });

      expect(data.success).toBe(true);
      expect(data.pages).toEqual([]);
      expect(data.pagination.total).toBe(0);
    });
  });

  describe("Sorting", () => {
    it("should sort by created_at desc by default", async () => {
      const { data } = await apiGet<ListPagesResponse>("/api/v1/pages", {
        limit: "5",
      });

      if (data.pages.length > 1) {
        for (let i = 1; i < data.pages.length; i++) {
          const prev = data.pages[i - 1].created_at;
          const curr = data.pages[i].created_at;
          if (prev && curr) {
            expect(new Date(prev).getTime()).toBeGreaterThanOrEqual(
              new Date(curr).getTime()
            );
          }
        }
      }
    });

    it("should sort by sections_count when specified", async () => {
      const { data } = await apiGet<ListPagesResponse>("/api/v1/pages", {
        sort_by: "sections_count",
        sort_order: "desc",
        limit: "5",
      });

      expect(data.success).toBe(true);
      if (data.pages.length > 1) {
        for (let i = 1; i < data.pages.length; i++) {
          expect(data.pages[i - 1].sections_count).toBeGreaterThanOrEqual(
            data.pages[i].sections_count
          );
        }
      }
    });

    it("should respect sort_order asc", async () => {
      const { data } = await apiGet<ListPagesResponse>("/api/v1/pages", {
        sort_by: "sections_count",
        sort_order: "asc",
        limit: "5",
      });

      expect(data.success).toBe(true);
      if (data.pages.length > 1) {
        for (let i = 1; i < data.pages.length; i++) {
          expect(data.pages[i - 1].sections_count).toBeLessThanOrEqual(
            data.pages[i].sections_count
          );
        }
      }
    });
  });

  describe("Response Fields", () => {
    it("should include preview_image for each page", async () => {
      const { data } = await apiGet<ListPagesResponse>("/api/v1/pages", {
        limit: "5",
      });

      for (const page of data.pages) {
        expect(page.preview_image).toBeDefined();
        expect(typeof page.preview_image).toBe("string");
      }
    });

    it("should include section_categories array", async () => {
      const { data } = await apiGet<ListPagesResponse>("/api/v1/pages", {
        limit: "5",
      });

      for (const page of data.pages) {
        expect(Array.isArray(page.section_categories)).toBe(true);
      }
    });
  });

  describe("Cache Control", () => {
    it("should have Cache-Control header", async () => {
      const { headers } = await apiGet<ListPagesResponse>("/api/v1/pages", {
        limit: "1",
      });

      const cacheControl = headers.get("cache-control");
      expect(cacheControl).toBeDefined();
      expect(cacheControl).toContain("s-maxage");
    });
  });
});
