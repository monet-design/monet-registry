/**
 * MCP Server 엔트리포인트
 */

import express from "express";
import { randomUUID } from "crypto";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { createMcpServer } from "./server.js";
import { authMiddleware } from "./middleware/auth.js";
import { registryService } from "./services/registry.js";
import { searchEngine } from "./services/search-engine.js";
import apiRouter from "./routes/index.js";

const PORT = parseInt(process.env.PORT || "3001", 10);

async function main() {
  // 서비스 초기화
  console.log("Initializing services...");
  await registryService.initialize();
  await searchEngine.initialize();
  console.log("Services initialized successfully");

  const app = express();
  app.use(express.json());

  // 인증 미들웨어
  app.use(authMiddleware);

  // MCP Server 인스턴스
  const mcpServer = createMcpServer();

  // 세션 저장소 (메모리)
  const transports = new Map<string, StreamableHTTPServerTransport>();

  // MCP 엔드포인트 (POST)
  app.post("/mcp", async (req, res) => {
    try {
      // 세션 ID 확인 또는 생성
      let sessionId = req.headers["mcp-session-id"] as string;
      let transport = sessionId ? transports.get(sessionId) : undefined;

      if (!transport) {
        // 새 세션 생성
        sessionId = randomUUID();
        transport = new StreamableHTTPServerTransport({
          sessionIdGenerator: () => sessionId,
          onsessioninitialized: (id) => {
            console.log(`Session initialized: ${id}`);
          },
        });

        transports.set(sessionId, transport);

        // 연결
        await mcpServer.connect(transport);
        console.log(`New MCP session: ${sessionId}`);
      }

      // 세션 ID를 응답 헤더에 포함
      res.setHeader("mcp-session-id", sessionId);

      // 요청 처리
      await transport.handleRequest(req, res, req.body);
    } catch (error) {
      console.error("MCP request error:", error);
      if (!res.headersSent) {
        res.status(500).json({
          jsonrpc: "2.0",
          error: {
            code: -32603,
            message: error instanceof Error ? error.message : "Internal error",
          },
          id: null,
        });
      }
    }
  });

  // SSE 엔드포인트 (GET) - 구 버전 호환용
  app.get("/mcp", async (req, res) => {
    const sessionId = req.headers["mcp-session-id"] as string;
    const transport = sessionId ? transports.get(sessionId) : undefined;

    if (!transport) {
      res.status(400).json({
        error: "No active session. Send POST request first.",
      });
      return;
    }

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("mcp-session-id", sessionId);

    // SSE 연결 유지
    req.on("close", () => {
      console.log(`SSE connection closed: ${sessionId}`);
    });
  });

  // DELETE 엔드포인트 - 세션 종료
  app.delete("/mcp", async (req, res) => {
    const sessionId = req.headers["mcp-session-id"] as string;

    if (sessionId && transports.has(sessionId)) {
      const transport = transports.get(sessionId)!;
      await transport.close();
      transports.delete(sessionId);
      console.log(`Session closed: ${sessionId}`);
      res.status(200).json({ success: true, message: "Session closed" });
    } else {
      res.status(404).json({ error: "Session not found" });
    }
  });

  // HTTP REST API 엔드포인트
  app.use("/api/v1", apiRouter);

  // 헬스체크 엔드포인트
  app.get("/health", (req, res) => {
    res.json({
      status: "ok",
      version: "1.0.0",
      initialized: registryService.isInitialized() && searchEngine.isInitialized(),
      component_count: registryService.getTotalCount(),
      active_sessions: transports.size,
    });
  });

  // 서버 시작
  app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════════════════╗
║       Landing Components Server                             ║
╠════════════════════════════════════════════════════════════╣
║  Status:     Running                                        ║
║  Port:       ${PORT}                                            ║
║  Components: ${String(registryService.getTotalCount()).padEnd(4)}                                        ║
╠════════════════════════════════════════════════════════════╣
║  MCP Endpoint:  http://localhost:${PORT}/mcp                    ║
║  REST API:      http://localhost:${PORT}/api/v1                 ║
║  Health:        http://localhost:${PORT}/health                 ║
╚════════════════════════════════════════════════════════════╝

MCP Tools:
  - search_components
  - get_component_code
  - get_component_details
  - list_categories
  - get_registry_stats

REST API Endpoints:
  - GET /api/v1/components/search?query=...
  - GET /api/v1/components/:id
  - GET /api/v1/components/:id/code
  - GET /api/v1/categories
  - GET /api/v1/stats
    `);
  });
}

main().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
