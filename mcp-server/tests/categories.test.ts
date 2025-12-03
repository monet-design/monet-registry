/**
 * 카테고리 API 테스트
 */

import { describe, it, expect, beforeAll } from "vitest";
import { getApp } from "./setup.js";
import {
  createApiClient,
  expectSuccess,
  expectError,
  type ApiClient,
} from "./helpers.js";

describe("GET /api/v1/categories", () => {
  let api: ApiClient;

  beforeAll(() => {
    api = createApiClient(getApp());
  });

  describe("카테고리 목록", () => {
    it("카테고리 목록을 반환한다", async () => {
      const res = await api.get("/api/v1/categories");

      expectSuccess(res);
      expect(res.body.categories).toBeDefined();
      expect(Array.isArray(res.body.categories)).toBe(true);
      expect(res.body.categories.length).toBeGreaterThan(0);
    });

    it("각 카테고리에 name이 포함된다", async () => {
      const res = await api.get("/api/v1/categories");

      expectSuccess(res);
      res.body.categories.forEach((cat: { name: string }) => {
        expect(cat.name).toBeDefined();
        expect(typeof cat.name).toBe("string");
      });
    });

    it("각 카테고리에 count가 포함된다", async () => {
      const res = await api.get("/api/v1/categories");

      expectSuccess(res);
      res.body.categories.forEach((cat: { count: number }) => {
        expect(cat.count).toBeDefined();
        expect(typeof cat.count).toBe("number");
        expect(cat.count).toBeGreaterThanOrEqual(0);
      });
    });

    it("각 카테고리에 description이 포함된다", async () => {
      const res = await api.get("/api/v1/categories");

      expectSuccess(res);
      res.body.categories.forEach((cat: { description: string }) => {
        expect(cat.description).toBeDefined();
        expect(typeof cat.description).toBe("string");
      });
    });
  });

  describe("알려진 카테고리 확인", () => {
    it("pricing 카테고리가 존재한다", async () => {
      const res = await api.get("/api/v1/categories");

      expectSuccess(res);
      const pricing = res.body.categories.find(
        (c: { name: string }) => c.name === "pricing"
      );
      expect(pricing).toBeDefined();
    });

    it("hero 또는 feature 카테고리가 존재한다", async () => {
      const res = await api.get("/api/v1/categories");

      expectSuccess(res);
      const hasExpected = res.body.categories.some(
        (c: { name: string }) => c.name === "hero" || c.name === "feature"
      );
      expect(hasExpected).toBe(true);
    });
  });

  describe("인증", () => {
    it("인증 없이 접근하면 401을 반환한다", async () => {
      const res = await api.getWithoutAuth("/api/v1/categories");

      expectError(res, 401, "UNAUTHORIZED");
    });

    it("잘못된 토큰으로 접근하면 403을 반환한다", async () => {
      const res = await api.getWithInvalidAuth("/api/v1/categories");

      expectError(res, 403, "FORBIDDEN");
    });
  });
});
