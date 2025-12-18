import { describe, it, expect, beforeAll } from "vitest";
import { apiGet } from "../helpers/api-client";

interface PageSectionItem {
  id: string;
  name: string;
  category: string;
  order: number;
  preview_image: string;
  details?: {
    name: string;
    tags: {
      functional?: string[];
      style?: string[];
      layout?: string[];
      industry?: string[];
    };
    keywords?: string[];
    component_path: string;
  };
}

interface GetPageSectionsResponse {
  success: boolean;
  page_id: string;
  total_sections: number;
  sections: PageSectionItem[];
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

describe("GET /api/v1/pages/[id]/sections", () => {
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

  describe("Sections List", () => {
    it("should return sections for valid page id", async () => {
      if (!validPageId) return;

      const { status, data } = await apiGet<GetPageSectionsResponse>(
        `/api/v1/pages/${validPageId}/sections`
      );

      expect(status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.page_id).toBe(validPageId);
      expect(Array.isArray(data.sections)).toBe(true);
    });

    it("should include total_sections count", async () => {
      if (!validPageId) return;

      const { data } = await apiGet<GetPageSectionsResponse>(
        `/api/v1/pages/${validPageId}/sections`
      );

      expect(typeof data.total_sections).toBe("number");
      expect(data.total_sections).toBe(data.sections.length);
    });

    it("should have proper section structure", async () => {
      if (!validPageId) return;

      const { data } = await apiGet<GetPageSectionsResponse>(
        `/api/v1/pages/${validPageId}/sections`
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

    it("should return sections in order", async () => {
      if (!validPageId) return;

      const { data } = await apiGet<GetPageSectionsResponse>(
        `/api/v1/pages/${validPageId}/sections`
      );

      if (data.sections.length > 1) {
        for (let i = 1; i < data.sections.length; i++) {
          expect(data.sections[i].order).toBeGreaterThanOrEqual(
            data.sections[i - 1].order
          );
        }
      }
    });
  });

  describe("Include Details", () => {
    it("should exclude details by default", async () => {
      if (!validPageId) return;

      const { data } = await apiGet<GetPageSectionsResponse>(
        `/api/v1/pages/${validPageId}/sections`
      );

      if (data.sections.length > 0) {
        // details should be undefined by default
        expect(data.sections[0].details).toBeUndefined();
      }
    });

    it("should include details when include_details=true", async () => {
      if (!validPageId) return;

      const { data } = await apiGet<GetPageSectionsResponse>(
        `/api/v1/pages/${validPageId}/sections`,
        { include_details: "true" }
      );

      if (data.sections.length > 0) {
        const section = data.sections[0];
        expect(section.details).toBeDefined();
        expect(section.details?.name).toBeDefined();
        expect(section.details?.component_path).toBeDefined();
      }
    });
  });

  describe("Category Filter", () => {
    it("should filter sections by category", async () => {
      if (!validPageId) return;

      // First get all sections to find a valid category
      const { data: allSections } = await apiGet<GetPageSectionsResponse>(
        `/api/v1/pages/${validPageId}/sections`
      );

      if (allSections.sections.length > 0) {
        const testCategory = allSections.sections[0].category;

        const { data: filteredSections } =
          await apiGet<GetPageSectionsResponse>(
            `/api/v1/pages/${validPageId}/sections`,
            { category: testCategory }
          );

        expect(filteredSections.success).toBe(true);
        // All sections should match the category
        for (const section of filteredSections.sections) {
          expect(section.category).toBe(testCategory);
        }
      }
    });

    it("should return empty array for non-matching category", async () => {
      if (!validPageId) return;

      const { data } = await apiGet<GetPageSectionsResponse>(
        `/api/v1/pages/${validPageId}/sections`,
        { category: "nonexistent-category-xyz" }
      );

      expect(data.success).toBe(true);
      expect(data.sections).toEqual([]);
      expect(data.total_sections).toBe(0);
    });
  });

  describe("Cache Control", () => {
    it("should have Cache-Control header", async () => {
      if (!validPageId) return;

      const { headers } = await apiGet<GetPageSectionsResponse>(
        `/api/v1/pages/${validPageId}/sections`
      );

      const cacheControl = headers.get("cache-control");
      expect(cacheControl).toBeDefined();
      expect(cacheControl).toContain("s-maxage");
    });
  });

  describe("Error Handling", () => {
    it("should return 404 for non-existent page id", async () => {
      const { status, data } = await apiGet<ErrorResponse>(
        "/api/v1/pages/nonexistent-page-xyz-123/sections"
      );

      expect(status).toBe(404);
      expect(data.success).toBe(false);
      expect(data.error.code).toBe("PAGE_NOT_FOUND");
    });

    it("should include recovery suggestions for 404", async () => {
      const { data } = await apiGet<ErrorResponse>(
        "/api/v1/pages/nonexistent-id/sections"
      );

      expect(data.recovery).toBeDefined();
      expect(data.recovery?.suggestions).toBeDefined();
    });
  });
});
