import { describe, it, expect } from "vitest";
import { apiGet } from "../helpers/api-client";

interface FilterOption {
  value: string;
  label: string;
  count: number;
}

interface GetFiltersResponse {
  success: boolean;
  categories: FilterOption[];
  tags: {
    functional: FilterOption[];
    style: FilterOption[];
    layout: FilterOption[];
    industry: FilterOption[];
  };
  status: FilterOption[];
}

describe("GET /api/v1/filters", () => {
  it("should return all filter options", async () => {
    const { status, data } =
      await apiGet<GetFiltersResponse>("/api/v1/filters");

    expect(status).toBe(200);
    expect(data.success).toBe(true);
  });

  it("should include categories with value/label/count", async () => {
    const { data } = await apiGet<GetFiltersResponse>("/api/v1/filters");

    expect(Array.isArray(data.categories)).toBe(true);
    expect(data.categories.length).toBeGreaterThan(0);

    data.categories.forEach((category) => {
      expect(category.value).toBeDefined();
      expect(category.label).toBeDefined();
      expect(typeof category.count).toBe("number");
    });
  });

  it("should include tags grouped by type", async () => {
    const { data } = await apiGet<GetFiltersResponse>("/api/v1/filters");

    expect(data.tags).toBeDefined();
    expect(Array.isArray(data.tags.functional)).toBe(true);
    expect(Array.isArray(data.tags.style)).toBe(true);
    expect(Array.isArray(data.tags.layout)).toBe(true);
    expect(Array.isArray(data.tags.industry)).toBe(true);
  });

  it("should include status options", async () => {
    const { data } = await apiGet<GetFiltersResponse>("/api/v1/filters");

    expect(Array.isArray(data.status)).toBe(true);
    expect(data.status.length).toBeGreaterThan(0);

    data.status.forEach((statusOption) => {
      expect(statusOption.value).toBeDefined();
      expect(statusOption.label).toBeDefined();
      expect(typeof statusOption.count).toBe("number");
    });
  });

  it("should have valid filter option structure", async () => {
    const { data } = await apiGet<GetFiltersResponse>("/api/v1/filters");

    // Check tag filter structure
    const allTags = [
      ...data.tags.functional,
      ...data.tags.style,
      ...data.tags.layout,
      ...data.tags.industry,
    ];

    allTags.forEach((tag) => {
      expect(typeof tag.value).toBe("string");
      expect(typeof tag.label).toBe("string");
      expect(typeof tag.count).toBe("number");
      expect(tag.count).toBeGreaterThanOrEqual(0);
    });
  });

  it("should have proper Cache-Control header", async () => {
    const { headers } = await apiGet<GetFiltersResponse>("/api/v1/filters");

    const cacheControl = headers.get("cache-control");
    expect(cacheControl).toContain("s-maxage");
  });
});
