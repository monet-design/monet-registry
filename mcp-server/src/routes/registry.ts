/**
 * 레지스트리 관련 HTTP API 라우터
 */

import { Router, type Request, type Response } from "express";
import { handleListCategories, handleGetRegistryStats } from "../tools/index.js";

const router = Router();

/**
 * GET /api/v1/categories
 * 카테고리 목록
 */
router.get("/", async (_req: Request, res: Response) => {
  try {
    const result = await handleListCategories();
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

export const categoriesRouter = router;

/**
 * Stats Router
 */
const statsRouter = Router();

/**
 * GET /api/v1/stats
 * 레지스트리 통계
 *
 * Query Parameters:
 * - include_examples: 예시 컴포넌트 포함 여부 (기본값 true)
 */
statsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const includeExamples = req.query.include_examples !== "false";

    const result = await handleGetRegistryStats({
      include_examples: includeExamples,
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

export { statsRouter };
export default router;
