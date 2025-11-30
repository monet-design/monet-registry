/**
 * 테스트 셋업 - Express 앱 초기화
 */

import express, { type Express } from "express";
import { beforeAll, afterAll } from "vitest";
import { registryService } from "../src/services/registry.js";
import { searchEngine } from "../src/services/search-engine.js";
import { authMiddleware } from "../src/middleware/auth.js";
import apiRouter from "../src/routes/index.js";

// 테스트용 API Key
export const TEST_API_KEY = "test-api-key";

let app: Express | null = null;
let initialized = false;

/**
 * Express 앱 생성 및 초기화
 */
export async function createTestApp(): Promise<Express> {
  if (app && initialized) {
    return app;
  }

  // 환경 변수 설정
  process.env.API_KEY = TEST_API_KEY;

  // 서비스 초기화
  if (!registryService.isInitialized()) {
    await registryService.initialize();
  }
  if (!searchEngine.isInitialized()) {
    await searchEngine.initialize();
  }

  app = express();
  app.use(express.json());
  app.use(authMiddleware);

  // API 라우터 등록
  app.use("/api/v1", apiRouter);

  // 헬스체크 엔드포인트
  app.get("/health", (_req, res) => {
    res.json({
      status: "ok",
      version: "1.0.0",
      initialized: registryService.isInitialized() && searchEngine.isInitialized(),
      component_count: registryService.getTotalCount(),
      active_sessions: 0,
    });
  });

  initialized = true;
  return app;
}

/**
 * 테스트용 앱 반환
 */
export function getApp(): Express {
  if (!app) {
    throw new Error("Test app not initialized. Call createTestApp() first.");
  }
  return app;
}

// 전역 셋업
beforeAll(async () => {
  await createTestApp();
}, 30000);

// 전역 정리
afterAll(() => {
  app = null;
  initialized = false;
});
