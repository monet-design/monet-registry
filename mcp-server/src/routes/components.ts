/**
 * 컴포넌트 관련 HTTP API 라우터
 */

import { Router, type Request, type Response } from "express";
import {
  handleSearchComponents,
  handleGetComponentCode,
  handleGetComponentDetails,
} from "../tools/index.js";

const router = Router();

/**
 * GET /api/v1/components/search
 * 컴포넌트 검색
 *
 * Query Parameters:
 * - query: 검색어 (필수)
 * - category: 카테고리 필터
 * - style: 스타일 태그 (쉼표 구분)
 * - layout: 레이아웃 태그 (쉼표 구분)
 * - functional: 기능 태그 (쉼표 구분)
 * - industry: 산업 태그 (쉼표 구분)
 * - limit: 결과 수 (기본값 10)
 */
router.get("/search", async (req: Request, res: Response) => {
  try {
    const query = (req.query.query as string) || "";
    const category = req.query.category as string | undefined;
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;

    // 태그 파싱 (쉼표 구분 문자열 → 배열)
    const parseTags = (value: unknown): string[] | undefined => {
      if (!value) return undefined;
      if (typeof value === "string") {
        return value.split(",").map((s) => s.trim()).filter(Boolean);
      }
      return undefined;
    };

    const tags = {
      style: parseTags(req.query.style),
      layout: parseTags(req.query.layout),
      functional: parseTags(req.query.functional),
      industry: parseTags(req.query.industry),
    };

    // 빈 태그 객체 처리
    const hasAnyTags = Object.values(tags).some((v) => v && v.length > 0);

    const result = await handleSearchComponents({
      query,
      filters: {
        category,
        tags: hasAnyTags ? tags : undefined,
      },
      limit,
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: "INTERNAL_ERROR",
        message: error instanceof Error ? error.message : "Unknown error",
      },
    });
  }
});

/**
 * GET /api/v1/components/:id
 * 컴포넌트 상세 정보
 *
 * Path Parameters:
 * - id: 컴포넌트 ID
 *
 * Query Parameters:
 * - include_similar: 유사 컴포넌트 포함 여부 (기본값 true)
 */
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const componentId = req.params.id;
    const includeSimilar = req.query.include_similar !== "false";

    const result = await handleGetComponentDetails({
      component_id: componentId,
      include_similar: includeSimilar,
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: "INTERNAL_ERROR",
        message: error instanceof Error ? error.message : "Unknown error",
      },
    });
  }
});

/**
 * GET /api/v1/components/:id/code
 * 컴포넌트 소스 코드
 *
 * Path Parameters:
 * - id: 컴포넌트 ID
 */
router.get("/:id/code", async (req: Request, res: Response) => {
  try {
    const componentId = req.params.id;

    const result = await handleGetComponentCode({
      component_id: componentId,
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: "INTERNAL_ERROR",
        message: error instanceof Error ? error.message : "Unknown error",
      },
    });
  }
});

export default router;
