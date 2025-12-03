/**
 * HTTP API 라우터 통합
 */

import { Router } from "express";
import componentsRouter from "./components.js";
import { categoriesRouter, statsRouter } from "./registry.js";

const router = Router();

// 컴포넌트 관련 API
router.use("/components", componentsRouter);

// 카테고리 목록
router.use("/categories", categoriesRouter);

// 통계
router.use("/stats", statsRouter);

export default router;
