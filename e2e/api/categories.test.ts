import { describe, it, expect } from "vitest";
import { apiGet } from "../helpers/api-client";

interface CategoryInfo {
  name: string;
  count: number;
  description: string;
  examples?: string[];
}

interface ListCategoriesResponse {
  success: boolean;
  categories: CategoryInfo[];
}

describe("GET /api/v1/categories", () => {
  it("should return list of categories", async () => {
    const { status, data } =
      await apiGet<ListCategoriesResponse>("/api/v1/categories");

    expect(status).toBe(200);
    expect(data.success).toBe(true);
    expect(Array.isArray(data.categories)).toBe(true);
  });

  it("should return non-empty categories array", async () => {
    const { data } =
      await apiGet<ListCategoriesResponse>("/api/v1/categories");

    expect(data.categories.length).toBeGreaterThan(0);
  });

  it("should include count for each category", async () => {
    const { data } =
      await apiGet<ListCategoriesResponse>("/api/v1/categories");

    data.categories.forEach((category) => {
      expect(typeof category.count).toBe("number");
      expect(category.count).toBeGreaterThanOrEqual(0);
    });
  });

  it("should include description for each category", async () => {
    const { data } =
      await apiGet<ListCategoriesResponse>("/api/v1/categories");

    data.categories.forEach((category) => {
      expect(typeof category.description).toBe("string");
    });
  });

  it("should have unique category names", async () => {
    const { data } =
      await apiGet<ListCategoriesResponse>("/api/v1/categories");

    const names = data.categories.map((c) => c.name);
    const uniqueNames = new Set(names);
    expect(uniqueNames.size).toBe(names.length);
  });

  it("should have proper Cache-Control header", async () => {
    const { headers } =
      await apiGet<ListCategoriesResponse>("/api/v1/categories");

    const cacheControl = headers.get("cache-control");
    expect(cacheControl).toContain("s-maxage");
  });

  it("should include expected categories", async () => {
    const { data } =
      await apiGet<ListCategoriesResponse>("/api/v1/categories");

    const categoryNames = data.categories.map((c) => c.name);
    // Check for some common categories
    const expectedCategories = ["hero", "pricing", "testimonial"];
    expectedCategories.forEach((expected) => {
      expect(categoryNames).toContain(expected);
    });
  });
});
