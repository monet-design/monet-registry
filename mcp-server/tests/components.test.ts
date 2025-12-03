/**
 * 컴포넌트 상세/코드 API 테스트
 */

import { describe, it, expect, beforeAll } from "vitest";
import { getApp } from "./setup.js";
import {
  createApiClient,
  expectSuccess,
  expectError,
  expectComponentDetails,
  expectCodeResponse,
  type ApiClient,
} from "./helpers.js";

describe("GET /api/v1/components/:id", () => {
  let api: ApiClient;
  let validComponentId: string;

  beforeAll(async () => {
    api = createApiClient(getApp());

    // 유효한 컴포넌트 ID 가져오기
    const searchRes = await api.get("/api/v1/components/search?query=hero&limit=1");
    if (searchRes.body.results?.length > 0) {
      validComponentId = searchRes.body.results[0].id;
    }
  });

  describe("컴포넌트 상세 조회", () => {
    it("유효한 ID로 컴포넌트 상세 정보를 반환한다", async () => {
      const res = await api.get(`/api/v1/components/${validComponentId}`);

      expectComponentDetails(res);
      expect(res.body.component.id).toBe(validComponentId);
    });

    it("컴포넌트 메타데이터를 포함한다", async () => {
      const res = await api.get(`/api/v1/components/${validComponentId}`);

      expectSuccess(res);
      expect(res.body.component).toMatchObject({
        id: expect.any(String),
        name: expect.any(String),
        category: expect.any(String),
      });
    });

    it("태그 정보를 포함한다", async () => {
      const res = await api.get(`/api/v1/components/${validComponentId}`);

      expectSuccess(res);
      expect(res.body.component.tags).toBeDefined();
    });
  });

  describe("유사 컴포넌트", () => {
    it("include_similar=true이면 유사 컴포넌트를 포함한다", async () => {
      const res = await api.get(
        `/api/v1/components/${validComponentId}?include_similar=true`
      );

      expectSuccess(res);
      expect(res.body.similar_components).toBeDefined();
    });

    it("include_similar=false이면 유사 컴포넌트를 제외한다", async () => {
      const res = await api.get(
        `/api/v1/components/${validComponentId}?include_similar=false`
      );

      expectSuccess(res);
      expect(res.body.similar_components).toBeUndefined();
    });

    it("기본적으로 유사 컴포넌트를 포함한다", async () => {
      const res = await api.get(`/api/v1/components/${validComponentId}`);

      expectSuccess(res);
      expect(res.body.similar_components).toBeDefined();
    });
  });

  describe("에러 처리", () => {
    it("존재하지 않는 ID는 에러를 반환한다", async () => {
      const res = await api.get("/api/v1/components/nonexistent-999");

      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe("COMPONENT_NOT_FOUND");
    });

    it("존재하지 않는 ID에 유사 컴포넌트를 제안한다", async () => {
      const res = await api.get("/api/v1/components/hero-999");

      expect(res.body.success).toBe(false);
      expect(res.body.recovery).toBeDefined();
      expect(res.body.recovery.similar_ids).toBeDefined();
    });
  });

  describe("인증", () => {
    it("인증 없이 접근하면 401을 반환한다", async () => {
      const res = await api.getWithoutAuth(`/api/v1/components/${validComponentId}`);

      expectError(res, 401, "UNAUTHORIZED");
    });
  });
});

describe("GET /api/v1/components/:id/code", () => {
  let api: ApiClient;
  let validComponentId: string;

  beforeAll(async () => {
    api = createApiClient(getApp());

    // 유효한 컴포넌트 ID 가져오기
    const searchRes = await api.get("/api/v1/components/search?query=hero&limit=1");
    if (searchRes.body.results?.length > 0) {
      validComponentId = searchRes.body.results[0].id;
    }
  });

  describe("소스 코드 조회", () => {
    it("컴포넌트 TSX 코드를 반환한다", async () => {
      const res = await api.get(`/api/v1/components/${validComponentId}/code`);

      expectCodeResponse(res);
      expect(res.body.code).toContain("export");
    });

    it("코드 메타데이터를 포함한다", async () => {
      const res = await api.get(`/api/v1/components/${validComponentId}/code`);

      expectSuccess(res);
      expect(res.body.code_info).toMatchObject({
        line_count: expect.any(Number),
        has_client_directive: expect.any(Boolean),
      });
    });

    it("의존성 정보를 포함한다", async () => {
      const res = await api.get(`/api/v1/components/${validComponentId}/code`);

      expectSuccess(res);
      expect(res.body.dependencies).toBeDefined();
    });

    it("통합 가이드를 포함한다", async () => {
      const res = await api.get(`/api/v1/components/${validComponentId}/code`);

      expectSuccess(res);
      expect(res.body.integration_guide).toBeDefined();
    });
  });

  describe("에러 처리", () => {
    it("존재하지 않는 ID는 에러를 반환한다", async () => {
      const res = await api.get("/api/v1/components/nonexistent-999/code");

      expect(res.body.success).toBe(false);
    });
  });

  describe("인증", () => {
    it("인증 없이 접근하면 401을 반환한다", async () => {
      const res = await api.getWithoutAuth(
        `/api/v1/components/${validComponentId}/code`
      );

      expectError(res, 401, "UNAUTHORIZED");
    });
  });
});
