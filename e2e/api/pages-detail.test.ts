import { describe, it, expect, beforeAll } from "vitest";
import { apiGet } from "../helpers/api-client";

interface PageMetadata {
  id: string;
  name: string;
  title?: string;
  images: {
    preview: string;
  };
  tags?: {
    functional?: string[];
    style?: string[];
    layout?: string[];
    industry?: string[];
  };
  keywords?: string[];
  source?: string;
  component_path: string;
  status: string;
  created_at?: string;
  language?: string;
}

interface PageSectionItem {
  id: string;
  name: string;
  category: string;
  order: number;
  preview_image: string;
  details?: {
    name: string;
    tags: object;
    keywords?: string[];
    component_path: string;
  };
}

interface SimilarPage {
  id: string;
  name: string;
  title?: string;
  sections_count: number;
  match_reason: string;
}

interface GetPageDetailsResponse {
  success: boolean;
  page: PageMetadata;
  sections: PageSectionItem[];
  page_info: {
    total_sections: number;
    categories_used: string[];
  };
  similar_pages?: SimilarPage[];
}

interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
  };
  recovery?: {
    suggestions: string[];
    similar_ids?: string[];
  };
}

interface ListPagesResponse {
  success: boolean;
  pages: { id: string }[];
}

describe("GET /api/v1/pages/[id]", () => {
  let validPageId: string;

  beforeAll(async () => {
    // Get a valid page ID from the list
    const { data } = await apiGet<ListPagesResponse>("/api/v1/pages", {
      limit: "1",
    });
    if (data.pages.length > 0) {
      validPageId = data.pages[0].id;
    }
  });

  describe("Page Details", () => {
    it("should return page details for valid id", async () => {
      if (!validPageId) return;

      const { status, data } = await apiGet<GetPageDetailsResponse>(
        `/api/v1/pages/${validPageId}`
      );

      expect(status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.page).toBeDefined();
      expect(data.page.id).toBe(validPageId);
    });

    it("should include all required metadata fields", async () => {
      if (!validPageId) return;

      const { data } = await apiGet<GetPageDetailsResponse>(
        `/api/v1/pages/${validPageId}`
      );

      const page = data.page;
      expect(page.id).toBeDefined();
      expect(page.name).toBeDefined();
      expect(page.images).toBeDefined();
      expect(page.images.preview).toBeDefined();
      expect(page.component_path).toBeDefined();
      expect(page.status).toBeDefined();
    });

    it("should include sections by default", async () => {
      if (!validPageId) return;

      const { data } = await apiGet<GetPageDetailsResponse>(
        `/api/v1/pages/${validPageId}`
      );

      expect(data.sections).toBeDefined();
      expect(Array.isArray(data.sections)).toBe(true);
    });

    it("should exclude sections when include_sections=false", async () => {
      if (!validPageId) return;

      const { data } = await apiGet<GetPageDetailsResponse>(
        `/api/v1/pages/${validPageId}`,
        { include_sections: "false" }
      );

      expect(data.success).toBe(true);
      // sections should be empty when excluded
      expect(data.sections.length).toBe(0);
    });

    it("should include similar_pages by default", async () => {
      if (!validPageId) return;

      const { data } = await apiGet<GetPageDetailsResponse>(
        `/api/v1/pages/${validPageId}`
      );

      expect(data.similar_pages).toBeDefined();
      expect(Array.isArray(data.similar_pages)).toBe(true);
    });

    it("should exclude similar_pages when include_similar=false", async () => {
      if (!validPageId) return;

      const { data } = await apiGet<GetPageDetailsResponse>(
        `/api/v1/pages/${validPageId}`,
        { include_similar: "false" }
      );

      expect(data.success).toBe(true);
      // similar_pages should be undefined when excluded
      expect(data.similar_pages).toBeUndefined();
    });

    it("should include page_info with section metadata", async () => {
      if (!validPageId) return;

      const { data } = await apiGet<GetPageDetailsResponse>(
        `/api/v1/pages/${validPageId}`
      );

      expect(data.page_info).toBeDefined();
      expect(typeof data.page_info.total_sections).toBe("number");
      expect(data.page_info.total_sections).toBeGreaterThan(0);
      expect(Array.isArray(data.page_info.categories_used)).toBe(true);
    });

    it("should have proper section structure", async () => {
      if (!validPageId) return;

      const { data } = await apiGet<GetPageDetailsResponse>(
        `/api/v1/pages/${validPageId}`
      );

      if (data.sections.length > 0) {
        const section = data.sections[0];
        expect(section.id).toBeDefined();
        expect(section.name).toBeDefined();
        expect(section.category).toBeDefined();
        expect(typeof section.order).toBe("number");
        expect(section.preview_image).toBeDefined();
      }
    });
  });

  describe("Cache Control", () => {
    it("should have Cache-Control header", async () => {
      if (!validPageId) return;

      const { headers } = await apiGet<GetPageDetailsResponse>(
        `/api/v1/pages/${validPageId}`
      );

      const cacheControl = headers.get("cache-control");
      expect(cacheControl).toBeDefined();
      expect(cacheControl).toContain("s-maxage");
    });
  });

  describe("Error Handling", () => {
    it("should return 404 for non-existent page id", async () => {
      const { status, data } = await apiGet<ErrorResponse>(
        "/api/v1/pages/nonexistent-page-xyz-123"
      );

      expect(status).toBe(404);
      expect(data.success).toBe(false);
      expect(data.error.code).toBe("PAGE_NOT_FOUND");
    });

    it("should return proper error structure for 404", async () => {
      const { data } = await apiGet<ErrorResponse>(
        "/api/v1/pages/nonexistent-id"
      );

      expect(data.success).toBe(false);
      expect(data.error).toBeDefined();
      expect(data.error.code).toBeDefined();
      expect(data.error.message).toBeDefined();
    });

    it("should include recovery suggestions with similar_ids for 404", async () => {
      const { data } = await apiGet<ErrorResponse>(
        "/api/v1/pages/nonexistent-id"
      );

      expect(data.recovery).toBeDefined();
      expect(data.recovery?.suggestions).toBeDefined();
      expect(Array.isArray(data.recovery?.suggestions)).toBe(true);
    });
  });
});
