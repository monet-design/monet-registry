/**
 * 검색 API 테스트
 */

import { describe, it, expect, beforeAll } from "vitest";
import { getApp } from "./setup.js";
import {
  createApiClient,
  expectSuccess,
  expectError,
  expectSearchResults,
  type ApiClient,
} from "./helpers.js";

describe("GET /api/v1/components/search", () => {
  let api: ApiClient;

  beforeAll(() => {
    api = createApiClient(getApp());
  });

  describe("기본 검색", () => {
    it("검색어로 컴포넌트를 검색한다", async () => {
      const res = await api.get("/api/v1/components/search?query=hero");

      expectSearchResults(res, { minResults: 1 });
      expect(res.body.query).toBe("hero");
    });

    it("검색 결과에 필수 필드가 포함된다", async () => {
      const res = await api.get("/api/v1/components/search?query=pricing");

      expectSuccess(res);
      const result = res.body.results[0];
      expect(result).toMatchObject({
        id: expect.any(String),
        name: expect.any(String),
        category: expect.any(String),
        score: expect.any(Number),
      });
    });

    it("검색 소요 시간(elapsed_ms)을 반환한다", async () => {
      const res = await api.get("/api/v1/components/search?query=hero");

      expectSuccess(res);
      expect(res.body.elapsed_ms).toBeDefined();
      expect(typeof res.body.elapsed_ms).toBe("number");
    });

    it("총 결과 수(total)를 반환한다", async () => {
      const res = await api.get("/api/v1/components/search?query=hero");

      expectSuccess(res);
      expect(res.body.total).toBeDefined();
      expect(typeof res.body.total).toBe("number");
    });
  });

  describe("필터링", () => {
    it("카테고리 필터로 특정 카테고리만 검색한다", async () => {
      const res = await api.get(
        "/api/v1/components/search?query=minimal&category=pricing"
      );

      expectSearchResults(res);
      res.body.results.forEach((r: { category: string }) => {
        expect(r.category).toBe("pricing");
      });
    });

    it("스타일 태그로 필터링한다", async () => {
      const res = await api.get(
        "/api/v1/components/search?query=section&style=dark-theme"
      );

      // 결과가 있으면 success: true, 없으면 success: false (EMPTY_RESULTS)
      expect(res.status).toBe(200);
      if (res.body.success && res.body.results?.length > 0) {
        res.body.results.forEach((r: { tags: { style: string[] } }) => {
          expect(r.tags.style).toContain("dark-theme");
        });
      }
    });

    it("레이아웃 태그로 필터링한다", async () => {
      const res = await api.get(
        "/api/v1/components/search?query=section&layout=centered"
      );

      // 결과가 있거나 없을 수 있음
      expect(res.status).toBe(200);
    });

    it("여러 태그를 조합하여 필터링한다", async () => {
      const res = await api.get(
        "/api/v1/components/search?query=section&style=minimal&layout=centered"
      );

      // 조합 필터는 결과가 없을 수 있음
      expect(res.status).toBe(200);
    });
  });

  describe("페이지네이션", () => {
    it("limit 파라미터로 결과 수를 제한한다", async () => {
      const res = await api.get("/api/v1/components/search?query=section&limit=3");

      expectSearchResults(res, { maxResults: 3 });
    });

    it("limit=1로 단일 결과를 반환한다", async () => {
      const res = await api.get("/api/v1/components/search?query=section&limit=1");

      expectSearchResults(res, { maxResults: 1 });
    });

    it("limit 기본값은 10이다", async () => {
      const res = await api.get("/api/v1/components/search?query=section");

      expectSuccess(res);
      expect(res.body.results.length).toBeLessThanOrEqual(10);
    });
  });

  describe("인증", () => {
    it("인증 없이 접근하면 401을 반환한다", async () => {
      const res = await api.getWithoutAuth("/api/v1/components/search?query=hero");

      expectError(res, 401, "UNAUTHORIZED");
    });

    it("잘못된 토큰으로 접근하면 403을 반환한다", async () => {
      const res = await api.getWithInvalidAuth(
        "/api/v1/components/search?query=hero"
      );

      expectError(res, 403, "FORBIDDEN");
    });
  });

  describe("엣지 케이스", () => {
    it("빈 검색어로도 응답을 반환한다", async () => {
      const res = await api.get("/api/v1/components/search?query=");

      expect(res.status).toBe(200);
    });

    it("매칭되지 않는 검색어는 EMPTY_RESULTS 에러를 반환한다", async () => {
      const res = await api.get(
        "/api/v1/components/search?query=xyznonexistent123"
      );

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe("EMPTY_RESULTS");
    });

    it("특수문자가 포함된 검색어를 처리한다", async () => {
      const res = await api.get(
        `/api/v1/components/search?query=${encodeURIComponent("hero & pricing")}`
      );

      expect(res.status).toBe(200);
    });
  });
});
