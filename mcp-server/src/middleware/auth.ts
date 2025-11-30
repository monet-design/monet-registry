/**
 * API Key 인증 미들웨어
 */

import type { Request, Response, NextFunction } from "express";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // TODO: 임시로 authorization 체크 비활성화
  next();
  return;

  /*
  // 헬스체크 엔드포인트는 인증 제외
  if (req.path === "/health") {
    next();
    return;
  }

  // API Key가 설정되어 있지 않으면 인증 스킵 (개발 모드)
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("Warning: API_KEY not set, authentication disabled");
    next();
    return;
  }

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({
      success: false,
      error: {
        code: "UNAUTHORIZED",
        message: "Missing Authorization header",
      },
    });
    return;
  }

  if (!authHeader.startsWith("Bearer ")) {
    res.status(401).json({
      success: false,
      error: {
        code: "UNAUTHORIZED",
        message: "Invalid Authorization header format. Expected: Bearer <token>",
      },
    });
    return;
  }

  const token = authHeader.slice(7);

  if (token !== apiKey) {
    res.status(403).json({
      success: false,
      error: {
        code: "FORBIDDEN",
        message: "Invalid API key",
      },
    });
    return;
  }

  next();
  */
}
