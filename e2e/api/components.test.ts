import { describe, it, expect } from "vitest";
import { apiGet } from "../helpers/api-client";

interface ComponentListItem {
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
  status: string;
  created_at?: string;
}

interface ListComponentsResponse {
  success: boolean;
  pagination: {
    total: number;
    offset: number;
    limit: number;
    hasNext: boolean;
  };
  components: ComponentListItem[];
}

describe("GET /api/v1/components", () => {
  describe("Pagination", () => {
    it("should return default pagination (limit=20, offset=0)", async () => {
      const { status, data } =
        await apiGet<ListComponentsResponse>("/api/v1/components");

      expect(status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.pagination.offset).toBe(0);
      expect(data.pagination.limit).toBe(20);
    });

    it("should respect custom limit parameter", async () => {
      const { data } = await apiGet<ListComponentsResponse>(
        "/api/v1/components",
        { limit: "5" }
      );

      expect(data.pagination.limit).toBe(5);
      expect(data.components.length).toBeLessThanOrEqual(5);
    });

    it("should respect custom offset parameter", async () => {
      const { data } = await apiGet<ListComponentsResponse>(
        "/api/v1/components",
        { offset: "10" }
      );

      expect(data.pagination.offset).toBe(10);
    });

    it("should cap limit at 50", async () => {
      const { data } = await apiGet<ListComponentsResponse>(
        "/api/v1/components",
        { limit: "100" }
      );

      expect(data.pagination.limit).toBeLessThanOrEqual(50);
    });

    it("should calculate hasNext correctly", async () => {
      const { data } = await apiGet<ListComponentsResponse>(
        "/api/v1/components",
        { limit: "1" }
      );

      if (data.pagination.total > 1) {
        expect(data.pagination.hasNext).toBe(true);
      }
    });
  });

  describe("Filtering", () => {
    it("should filter by category", async () => {
      const { data } = await apiGet<ListComponentsResponse>(
        "/api/v1/components",
        { category: "hero" }
      );

      expect(data.success).toBe(true);
      if (data.components.length > 0) {
        data.components.forEach((component) => {
          expect(component.category).toBe("hero");
        });
      }
    });

    it("should filter by status", async () => {
      const { data } = await apiGet<ListComponentsResponse>(
        "/api/v1/components",
        { status: "stable" }
      );

      expect(data.success).toBe(true);
      if (data.components.length > 0) {
        data.components.forEach((component) => {
          expect(component.status).toBe("stable");
        });
      }
    });

    it("should filter by style tags (comma-separated)", async () => {
      const { data } = await apiGet<ListComponentsResponse>(
        "/api/v1/components",
        { style: "minimal" }
      );

      expect(data.success).toBe(true);
    });

    it("should combine multiple filters", async () => {
      const { data } = await apiGet<ListComponentsResponse>(
        "/api/v1/components",
        { category: "hero", status: "stable" }
      );

      expect(data.success).toBe(true);
      if (data.components.length > 0) {
        data.components.forEach((component) => {
          expect(component.category).toBe("hero");
          expect(component.status).toBe("stable");
        });
      }
    });
  });

  describe("Response Structure", () => {
    it("should return success=true", async () => {
      const { data } =
        await apiGet<ListComponentsResponse>("/api/v1/components");

      expect(data.success).toBe(true);
    });

    it("should include pagination metadata", async () => {
      const { data } =
        await apiGet<ListComponentsResponse>("/api/v1/components");

      expect(data.pagination).toBeDefined();
      expect(typeof data.pagination.total).toBe("number");
      expect(typeof data.pagination.offset).toBe("number");
      expect(typeof data.pagination.limit).toBe("number");
      expect(typeof data.pagination.hasNext).toBe("boolean");
    });

    it("should include component array with required fields", async () => {
      const { data } = await apiGet<ListComponentsResponse>(
        "/api/v1/components",
        { limit: "1" }
      );

      expect(Array.isArray(data.components)).toBe(true);
      if (data.components.length > 0) {
        const component = data.components[0];
        expect(component.id).toBeDefined();
        expect(component.name).toBeDefined();
        expect(component.category).toBeDefined();
        expect(component.preview_image).toBeDefined();
        expect(component.tags).toBeDefined();
        expect(component.status).toBeDefined();
      }
    });
  });

  describe("Error Handling", () => {
    it("should return empty array for non-existent category", async () => {
      const { data } = await apiGet<ListComponentsResponse>(
        "/api/v1/components",
        { category: "nonexistent-category-xyz" }
      );

      expect(data.success).toBe(true);
      expect(data.components).toHaveLength(0);
    });
  });
});
