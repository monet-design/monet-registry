/**
 * 사용자 시나리오 기반 E2E 테스트
 */

import { describe, it, expect, beforeAll } from "vitest";
import { getApp } from "./setup.js";
import {
  createApiClient,
  expectSuccess,
  expectSearchResults,
  expectComponentDetails,
  expectCodeResponse,
  type ApiClient,
} from "./helpers.js";

describe("Scenario 1: 검색 → 상세 → 코드 플로우", () => {
  let api: ApiClient;

  beforeAll(() => {
    api = createApiClient(getApp());
  });

  it("검색 결과로 상세 조회 후 코드를 가져온다", async () => {
    // 1. 검색
    const searchRes = await api.get("/api/v1/components/search?query=hero&limit=1");
    expectSearchResults(searchRes, { minResults: 1 });
    const componentId = searchRes.body.results[0].id;

    // 2. 상세 조회
    const detailRes = await api.get(`/api/v1/components/${componentId}`);
    expectComponentDetails(detailRes);
    expect(detailRes.body.component.id).toBe(componentId);

    // 3. 코드 조회
    const codeRes = await api.get(`/api/v1/components/${componentId}/code`);
    expectCodeResponse(codeRes);
    expect(codeRes.body.component_id).toBe(componentId);
  });

  it("상세 조회에서 유사 컴포넌트를 활용한다", async () => {
    // 1. 검색으로 첫 번째 컴포넌트 찾기
    const searchRes = await api.get("/api/v1/components/search?query=pricing&limit=1");
    expectSearchResults(searchRes, { minResults: 1 });
    const componentId = searchRes.body.results[0].id;

    // 2. 상세 조회 (유사 컴포넌트 포함)
    const detailRes = await api.get(`/api/v1/components/${componentId}?include_similar=true`);
    expectSuccess(detailRes);

    // 3. 유사 컴포넌트가 있으면 해당 컴포넌트도 조회
    if (detailRes.body.similar_components?.length > 0) {
      const similarId = detailRes.body.similar_components[0].id;
      const similarRes = await api.get(`/api/v1/components/${similarId}`);
      expectComponentDetails(similarRes);
    }
  });

  it("검색 결과 없을 때 EMPTY_RESULTS 에러를 반환한다", async () => {
    const searchRes = await api.get(
      "/api/v1/components/search?query=xyznonexistent123abc"
    );

    expect(searchRes.status).toBe(200);
    expect(searchRes.body.success).toBe(false);
    expect(searchRes.body.error.code).toBe("EMPTY_RESULTS");
  });
});

describe("Scenario 2: 카테고리 기반 탐색", () => {
  let api: ApiClient;

  beforeAll(() => {
    api = createApiClient(getApp());
  });

  it("카테고리 목록 조회 후 특정 카테고리 검색", async () => {
    // 1. 카테고리 목록 조회
    const categoriesRes = await api.get("/api/v1/categories");
    expectSuccess(categoriesRes);
    expect(categoriesRes.body.categories.length).toBeGreaterThan(0);

    // 2. 첫 번째 카테고리로 검색
    const category = categoriesRes.body.categories[0].name;
    const searchRes = await api.get(
      `/api/v1/components/search?query=&category=${category}`
    );

    expectSuccess(searchRes);
    // 모든 결과가 해당 카테고리인지 확인
    searchRes.body.results.forEach((r: { category: string }) => {
      expect(r.category).toBe(category);
    });
  });

  it("카테고리 + 태그 조합 필터", async () => {
    // pricing 카테고리에서 minimal 스타일 검색
    const res = await api.get(
      "/api/v1/components/search?query=&category=pricing&style=minimal"
    );

    expect(res.status).toBe(200);
    // 결과가 있으면 모두 pricing 카테고리여야 함
    if (res.body.success && res.body.results?.length > 0) {
      res.body.results.forEach((r: { category: string }) => {
        expect(r.category).toBe("pricing");
      });
    }
  });
});

describe("Scenario 3: 통계 기반 탐색", () => {
  let api: ApiClient;

  beforeAll(() => {
    api = createApiClient(getApp());
  });

  it("통계 조회 후 예시 컴포넌트로 상세 조회", async () => {
    // 1. 통계 조회
    const statsRes = await api.get("/api/v1/stats?include_examples=true");
    expectSuccess(statsRes);

    // 2. 예시 컴포넌트가 있는 카테고리 찾기
    const categoryWithExamples = statsRes.body.categories.find(
      (c: { examples?: string[] }) => c.examples && c.examples.length > 0
    );

    if (categoryWithExamples) {
      // 3. 예시 컴포넌트 상세 조회
      const exampleId = categoryWithExamples.examples[0];
      const detailRes = await api.get(`/api/v1/components/${exampleId}`);
      expectComponentDetails(detailRes);
    }
  });

  it("인기 태그로 검색", async () => {
    // 1. 통계에서 인기 태그 확인
    const statsRes = await api.get("/api/v1/stats");
    expectSuccess(statsRes);

    // 2. 가장 인기 있는 스타일 태그로 검색
    const topStyleTag = statsRes.body.tags.style[0];
    if (topStyleTag) {
      const searchRes = await api.get(
        `/api/v1/components/search?query=&style=${topStyleTag.tag}`
      );
      // 결과가 있거나 없을 수 있음
      expect(searchRes.status).toBe(200);
    }
  });
});

describe("Scenario 4: 에러 복구", () => {
  let api: ApiClient;

  beforeAll(() => {
    api = createApiClient(getApp());
  });

  it("오타 ID → 유사 ID 제안 → 재요청 성공", async () => {
    // 1. 잘못된 ID로 요청
    const errorRes = await api.get("/api/v1/components/hero-9999");
    expect(errorRes.body.success).toBe(false);
    expect(errorRes.body.recovery).toBeDefined();

    // 2. 유사 ID가 제안되면 해당 ID로 재요청
    if (errorRes.body.recovery?.similar_ids?.length > 0) {
      const suggestedId = errorRes.body.recovery.similar_ids[0];
      const retryRes = await api.get(`/api/v1/components/${suggestedId}`);
      expectComponentDetails(retryRes);
    }
  });

  it("코드 조회 시 잘못된 ID 처리", async () => {
    const res = await api.get("/api/v1/components/nonexistent-xyz/code");

    expect(res.body.success).toBe(false);
  });
});

describe("Scenario 5: 엣지 케이스", () => {
  let api: ApiClient;

  beforeAll(() => {
    api = createApiClient(getApp());
  });

  it("특수문자 포함 검색어를 처리한다", async () => {
    const queries = [
      "hero & pricing",
      "dark-theme",
      "hero/pricing",
      "hero+pricing",
    ];

    for (const query of queries) {
      const res = await api.get(
        `/api/v1/components/search?query=${encodeURIComponent(query)}`
      );
      expectSuccess(res);
    }
  });

  it("다중 태그 필터 (AND 조건)", async () => {
    const res = await api.get(
      "/api/v1/components/search?query=&style=minimal,dark-theme"
    );

    expect(res.status).toBe(200);
    // 결과가 있으면 모든 태그를 포함해야 함
    if (res.body.success && res.body.results?.length > 0) {
      res.body.results.forEach((r: { tags: { style: string[] } }) => {
        expect(r.tags.style).toContain("minimal");
        expect(r.tags.style).toContain("dark-theme");
      });
    }
  });

  it("limit 경계값 테스트", async () => {
    // limit=1
    const res1 = await api.get("/api/v1/components/search?query=section&limit=1");
    expectSuccess(res1);
    expect(res1.body.results.length).toBeLessThanOrEqual(1);

    // limit=50 (최대값)
    const res50 = await api.get("/api/v1/components/search?query=section&limit=50");
    expectSuccess(res50);
    expect(res50.body.results.length).toBeLessThanOrEqual(50);
  });

  it("전체 워크플로우: 통계 → 카테고리 선택 → 검색 → 상세 → 코드", async () => {
    // 1. 통계로 전체 현황 파악
    const statsRes = await api.get("/api/v1/stats");
    expectSuccess(statsRes);

    // 2. 가장 많은 컴포넌트를 가진 카테고리 선택
    const topCategory = statsRes.body.categories.reduce(
      (max: { count: number }, cat: { count: number }) =>
        cat.count > max.count ? cat : max,
      { count: 0, name: "" }
    );

    // 3. 해당 카테고리에서 검색
    const searchRes = await api.get(
      `/api/v1/components/search?query=&category=${topCategory.name}&limit=1`
    );
    expectSearchResults(searchRes, { minResults: 1 });

    // 4. 첫 번째 결과 상세 조회
    const componentId = searchRes.body.results[0].id;
    const detailRes = await api.get(`/api/v1/components/${componentId}`);
    expectComponentDetails(detailRes);

    // 5. 코드 조회
    const codeRes = await api.get(`/api/v1/components/${componentId}/code`);
    expectCodeResponse(codeRes);
  });
});
