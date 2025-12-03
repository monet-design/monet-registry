/**
 * 통계 API 테스트
 */

import { describe, it, expect, beforeAll } from "vitest";
import { getApp } from "./setup.js";
import {
  createApiClient,
  expectSuccess,
  expectError,
  type ApiClient,
} from "./helpers.js";

describe("GET /api/v1/stats", () => {
  let api: ApiClient;

  beforeAll(() => {
    api = createApiClient(getApp());
  });

  describe("통계 정보", () => {
    it("레지스트리 통계를 반환한다", async () => {
      const res = await api.get("/api/v1/stats");

      expectSuccess(res);
    });

    it("총 컴포넌트 수를 반환한다", async () => {
      const res = await api.get("/api/v1/stats");

      expectSuccess(res);
      expect(res.body.total_components).toBeDefined();
      expect(typeof res.body.total_components).toBe("number");
      expect(res.body.total_components).toBeGreaterThan(0);
    });

    it("카테고리별 통계를 반환한다", async () => {
      const res = await api.get("/api/v1/stats");

      expectSuccess(res);
      expect(res.body.categories).toBeDefined();
      expect(Array.isArray(res.body.categories)).toBe(true);
    });

    it("태그별 통계를 반환한다", async () => {
      const res = await api.get("/api/v1/stats");

      expectSuccess(res);
      expect(res.body.tags).toBeDefined();
      expect(res.body.tags.functional).toBeDefined();
      expect(res.body.tags.style).toBeDefined();
      expect(res.body.tags.layout).toBeDefined();
      expect(res.body.tags.industry).toBeDefined();
    });

    it("검색 팁을 제공한다", async () => {
      const res = await api.get("/api/v1/stats");

      expectSuccess(res);
      expect(res.body.query_tips).toBeDefined();
      expect(Array.isArray(res.body.query_tips)).toBe(true);
    });
  });

  describe("예시 컴포넌트", () => {
    it("include_examples=true이면 예시 컴포넌트를 포함한다", async () => {
      const res = await api.get("/api/v1/stats?include_examples=true");

      expectSuccess(res);
      // 카테고리에 examples가 포함되어야 함
      const hasExamples = res.body.categories.some(
        (cat: { examples?: string[] }) => cat.examples && cat.examples.length > 0
      );
      expect(hasExamples).toBe(true);
    });

    it("include_examples=false이면 예시 컴포넌트를 제외한다", async () => {
      const res = await api.get("/api/v1/stats?include_examples=false");

      expectSuccess(res);
      // 카테고리에 examples가 없거나 비어있어야 함
      const allWithoutExamples = res.body.categories.every(
        (cat: { examples?: string[] }) => !cat.examples || cat.examples.length === 0
      );
      expect(allWithoutExamples).toBe(true);
    });

    it("기본값으로 예시 컴포넌트를 포함한다", async () => {
      const res = await api.get("/api/v1/stats");

      expectSuccess(res);
      const hasExamples = res.body.categories.some(
        (cat: { examples?: string[] }) => cat.examples && cat.examples.length > 0
      );
      expect(hasExamples).toBe(true);
    });
  });

  describe("태그 통계 상세", () => {
    it("각 태그에 tag와 count가 포함된다", async () => {
      const res = await api.get("/api/v1/stats");

      expectSuccess(res);
      const styleTags = res.body.tags.style;
      if (styleTags.length > 0) {
        expect(styleTags[0]).toMatchObject({
          tag: expect.any(String),
          count: expect.any(Number),
        });
      }
    });

    it("태그는 사용 빈도순으로 정렬된다", async () => {
      const res = await api.get("/api/v1/stats");

      expectSuccess(res);
      const styleTags = res.body.tags.style;
      if (styleTags.length > 1) {
        const counts = styleTags.map((t: { count: number }) => t.count);
        const sorted = [...counts].sort((a, b) => b - a);
        expect(counts).toEqual(sorted);
      }
    });
  });

  describe("인증", () => {
    it("인증 없이 접근하면 401을 반환한다", async () => {
      const res = await api.getWithoutAuth("/api/v1/stats");

      expectError(res, 401, "UNAUTHORIZED");
    });

    it("잘못된 토큰으로 접근하면 403을 반환한다", async () => {
      const res = await api.getWithInvalidAuth("/api/v1/stats");

      expectError(res, 403, "FORBIDDEN");
    });
  });
});
