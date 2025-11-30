/**
 * 헬스체크 API 테스트
 */

import { describe, it, expect, beforeAll } from "vitest";
import { getApp } from "./setup.js";
import { createApiClient, type ApiClient } from "./helpers.js";

describe("GET /health", () => {
  let api: ApiClient;

  beforeAll(() => {
    api = createApiClient(getApp());
  });

  it("서버가 정상 동작 중이면 status: ok를 반환한다", async () => {
    const res = await api.getWithoutAuth("/health");

    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
  });

  it("인증 없이도 접근 가능하다", async () => {
    const res = await api.getWithoutAuth("/health");

    expect(res.status).toBe(200);
  });

  it("필수 필드를 모두 포함한다", async () => {
    const res = await api.getWithoutAuth("/health");

    expect(res.body).toMatchObject({
      status: "ok",
      version: expect.any(String),
      initialized: expect.any(Boolean),
      component_count: expect.any(Number),
      active_sessions: expect.any(Number),
    });
  });

  it("초기화 상태가 true이다", async () => {
    const res = await api.getWithoutAuth("/health");

    expect(res.body.initialized).toBe(true);
  });

  it("컴포넌트 수가 0보다 크다", async () => {
    const res = await api.getWithoutAuth("/health");

    expect(res.body.component_count).toBeGreaterThan(0);
  });
});
