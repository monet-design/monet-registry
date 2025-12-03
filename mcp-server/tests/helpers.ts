/**
 * 테스트 헬퍼 - API 클라이언트 및 assertion 유틸리티
 */

import request, { type Response } from "supertest";
import type { Express } from "express";
import { expect } from "vitest";
import { TEST_API_KEY } from "./setup.js";

/**
 * API 클라이언트 생성
 */
export function createApiClient(app: Express) {
  return {
    /**
     * 인증된 GET 요청
     */
    get: (path: string) =>
      request(app).get(path).set("Authorization", `Bearer ${TEST_API_KEY}`),

    /**
     * 인증 없는 GET 요청
     */
    getWithoutAuth: (path: string) => request(app).get(path),

    /**
     * 잘못된 토큰으로 GET 요청
     */
    getWithInvalidAuth: (path: string) =>
      request(app).get(path).set("Authorization", "Bearer invalid-token"),
  };
}

export type ApiClient = ReturnType<typeof createApiClient>;

/**
 * 성공 응답 검증
 */
export function expectSuccess(res: Response): void {
  expect(res.status).toBe(200);
  expect(res.body.success).toBe(true);
}

/**
 * 에러 응답 검증
 */
export function expectError(
  res: Response,
  statusCode: number,
  errorCode?: string
): void {
  expect(res.status).toBe(statusCode);
  expect(res.body.success).toBe(false);
  expect(res.body.error).toBeDefined();
  if (errorCode) {
    expect(res.body.error.code).toBe(errorCode);
  }
}

/**
 * 검색 결과 검증
 */
export function expectSearchResults(
  res: Response,
  options?: { minResults?: number; maxResults?: number }
): void {
  expectSuccess(res);
  expect(res.body.results).toBeDefined();
  expect(Array.isArray(res.body.results)).toBe(true);

  if (options?.minResults !== undefined) {
    expect(res.body.results.length).toBeGreaterThanOrEqual(options.minResults);
  }
  if (options?.maxResults !== undefined) {
    expect(res.body.results.length).toBeLessThanOrEqual(options.maxResults);
  }
}

/**
 * 컴포넌트 상세 정보 검증
 */
export function expectComponentDetails(res: Response): void {
  expectSuccess(res);
  expect(res.body.component).toBeDefined();
  expect(res.body.component.id).toBeDefined();
  expect(res.body.component.name).toBeDefined();
  expect(res.body.component.category).toBeDefined();
}

/**
 * 코드 응답 검증
 */
export function expectCodeResponse(res: Response): void {
  expectSuccess(res);
  expect(res.body.code).toBeDefined();
  expect(typeof res.body.code).toBe("string");
  expect(res.body.code.length).toBeGreaterThan(0);
  expect(res.body.code_info).toBeDefined();
}
