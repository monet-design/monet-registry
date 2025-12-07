/**
 * MCP HTTP Endpoint
 * Model Context Protocol을 Next.js App Router에서 제공
 */

import { NextRequest, NextResponse } from "next/server";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { randomUUID } from "crypto";
import { z } from "zod";
import {
  registryService,
  searchService,
  codeReaderService,
} from "../_common/services";
import {
  componentNotFoundError,
  emptyResultsError,
  findSimilarComponentIds,
  getPreviewImageUrl,
  CATEGORY_DESCRIPTIONS,
  QUERY_TIPS,
} from "../_common/utils";
import type {
  SearchComponentsResponse,
  GetComponentCodeResponse,
  GetComponentDetailsResponse,
  ListCategoriesResponse,
  GetRegistryStatsResponse,
  ErrorResponse,
  SimilarComponent,
  RegistryEntry,
} from "../_common/types";

// 세션 저장소 (메모리)
const sessions = new Map<string, StreamableHTTPServerTransport>();

// MCP 서버 인스턴스
let mcpServer: McpServer | null = null;

/**
 * MCP 서버 생성
 */
function createMcpServer(): McpServer {
  const server = new McpServer({
    name: "landing-components-registry",
    version: "1.0.0",
  });

  // search_components
  server.tool(
    "search_components",
    `Search for landing page UI components using natural language or structured filters.

USE THIS TOOL WHEN:
- User asks for specific UI components (e.g., "hero section with gradient")
- Need to find components matching certain criteria
- Looking for inspiration or alternatives

EXAMPLES:
- "minimal hero section for SaaS"
- "dark theme pricing table with toggle"
- "testimonial carousel with avatars"

AVAILABLE CATEGORIES: hero, stats, testimonial, feature, pricing, cta, contact, faq, how-it-works, biography, before-after, showcase, header, footer, gallery, team, logo-cloud, newsletter

Returns: List of matching components with relevance scores`,
    {
      query: z.string().describe("Natural language search query"),
      filters: z
        .object({
          category: z.string().optional().describe("Filter by category"),
          tags: z
            .object({
              functional: z.array(z.string()).optional(),
              style: z.array(z.string()).optional(),
              layout: z.array(z.string()).optional(),
              industry: z.array(z.string()).optional(),
            })
            .optional(),
        })
        .optional(),
      limit: z.number().optional().describe("Max results (default: 10)"),
    },
    async (args) => {
      const result = await handleSearchComponents(args);
      return {
        content: [
          { type: "text" as const, text: JSON.stringify(result, null, 2) },
        ],
      };
    }
  );

  // get_component_code
  server.tool(
    "get_component_code",
    `Get the actual React/TypeScript code for a component.

USE THIS TOOL WHEN:
- Ready to implement/integrate a component
- Need to understand component structure
- Want to customize or extend a component

Returns: Complete component source code with integration guide`,
    {
      component_id: z
        .string()
        .describe("Component ID (e.g., 'hero-1', 'stats-10')"),
    },
    async (args) => {
      const result = await handleGetComponentCode(args);
      return {
        content: [
          { type: "text" as const, text: JSON.stringify(result, null, 2) },
        ],
      };
    }
  );

  // get_component_details
  server.tool(
    "get_component_details",
    `Get detailed metadata for a specific component.

USE THIS TOOL WHEN:
- Need full information about a component before using it
- Want to check dependencies and font requirements
- Looking for usage context and similar components

Returns: Complete component metadata including tags, fonts, dependencies`,
    {
      component_id: z.string().describe("Component ID"),
      include_similar: z
        .boolean()
        .optional()
        .describe("Include similar components (default: true)"),
    },
    async (args) => {
      const result = await handleGetComponentDetails(args);
      return {
        content: [
          { type: "text" as const, text: JSON.stringify(result, null, 2) },
        ],
      };
    }
  );

  // list_categories
  server.tool(
    "list_categories",
    `List all available component categories with their counts.

USE THIS TOOL WHEN:
- Want to explore what's available
- Need to see all categories before searching
- Getting an overview of the component registry

Returns: List of categories with component counts`,
    {},
    async () => {
      const result = await handleListCategories();
      return {
        content: [
          { type: "text" as const, text: JSON.stringify(result, null, 2) },
        ],
      };
    }
  );

  // get_registry_stats
  server.tool(
    "get_registry_stats",
    `Get registry statistics and available options.

USE THIS TOOL WHEN:
- Starting a new project and need overview
- Want to know available categories/tags
- Need to understand the component taxonomy

Returns: Statistics, available categories, tags, and their counts`,
    {
      include_examples: z
        .boolean()
        .optional()
        .describe("Include example components (default: true)"),
    },
    async (args) => {
      const result = await handleGetRegistryStats(args);
      return {
        content: [
          { type: "text" as const, text: JSON.stringify(result, null, 2) },
        ],
      };
    }
  );

  return server;
}

/**
 * MCP 서버 가져오기 (싱글톤)
 */
async function getMcpServer(): Promise<McpServer> {
  if (!mcpServer) {
    mcpServer = createMcpServer();
  }
  return mcpServer;
}

// ============================================
// Tool Handlers
// ============================================

async function handleSearchComponents(args: {
  query: string;
  filters?: {
    category?: string;
    tags?: {
      functional?: string[];
      style?: string[];
      layout?: string[];
      industry?: string[];
    };
  };
  limit?: number;
}): Promise<SearchComponentsResponse | ErrorResponse> {
  const { query, filters, limit = 10 } = args;

  try {
    const result = await searchService.search({
      text: query,
      category: filters?.category,
      tags: filters?.tags,
      limit,
    });

    if (result.results.length === 0) {
      return emptyResultsError(query);
    }

    return {
      success: true,
      query,
      total: result.total,
      offset: 0,
      limit,
      hasNext: result.total > limit,
      elapsed_ms: Math.round(result.elapsed * 100) / 100,
      results: result.results.map((r) => ({
        id: r.id,
        name: r.name,
        category: r.category,
        preview_image: getPreviewImageUrl(r.id),
        tags: r.tags,
        keywords: r.keywords,
      })),
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: "SEARCH_ERROR",
        message:
          error instanceof Error ? error.message : "Unknown search error",
      },
    };
  }
}

async function handleGetComponentCode(args: {
  component_id: string;
}): Promise<GetComponentCodeResponse | ErrorResponse> {
  const { component_id } = args;

  const component = await registryService.getComponent(component_id);
  if (!component) {
    const allIds = await registryService.getAllComponentIds();
    const similarIds = findSimilarComponentIds(component_id, allIds);
    return componentNotFoundError(component_id, similarIds);
  }

  try {
    const codeResult = await codeReaderService.readComponentCode(component_id);

    const componentName = component_id
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("");

    const guide = codeReaderService.getIntegrationGuide(
      component_id,
      componentName
    );

    return {
      success: true,
      component_id,
      code: codeResult.code,
      code_info: codeResult.info,
      dependencies: codeResult.dependencies,
      integration_guide: guide,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: "CODE_READ_ERROR",
        message: `Failed to read code for component '${component_id}'`,
      },
    };
  }
}

async function handleGetComponentDetails(args: {
  component_id: string;
  include_similar?: boolean;
}): Promise<GetComponentDetailsResponse | ErrorResponse> {
  const { component_id, include_similar = true } = args;

  const component = await registryService.getComponent(component_id);
  if (!component) {
    const allIds = await registryService.getAllComponentIds();
    const similarIds = findSimilarComponentIds(component_id, allIds);
    return componentNotFoundError(component_id, similarIds);
  }

  let similar_components: SimilarComponent[] | undefined;
  if (include_similar) {
    const similarIds = await registryService.findSimilarIds(component_id, 5);
    similar_components = await Promise.all(
      similarIds.map(async (id) => {
        const similar = await registryService.getComponent(id);
        return {
          id,
          name: similar?.name || id,
          category: similar?.category || component.category,
          match_reason: `Same category (${component.category}) with similar styling`,
        };
      })
    );
  }

  const usage_hints = generateUsageHints(component);

  return {
    success: true,
    component: {
      id: component.id,
      name: component.name,
      category: component.category,
      title: component.title,
      description: component.description,
      images: component.images,
      tags: component.tags,
      keywords: component.freeformKeywords,
      fonts: component.fontFamily,
      component_path: component.componentPath,
      status: component.status,
      created_at: component.createdAt,
    },
    similar_components,
    usage_hints,
  };
}

async function handleListCategories(): Promise<ListCategoriesResponse> {
  const categoryIndex = await registryService.getCategoryIndex();

  const categories = Object.entries(categoryIndex)
    .map(([name, ids]) => ({
      name,
      count: ids.length,
      description: CATEGORY_DESCRIPTIONS[name] || `${name} components`,
    }))
    .sort((a, b) => b.count - a.count);

  return {
    success: true,
    categories,
  };
}

async function handleGetRegistryStats(args: {
  include_examples?: boolean;
}): Promise<GetRegistryStatsResponse> {
  const { include_examples = true } = args;

  const categoryIndex = await registryService.getCategoryIndex();
  const tagIndex = await registryService.getTagIndex();
  const allComponents = await registryService.getAllComponents();
  const totalCount = await registryService.getTotalCount();

  const categories = Object.entries(categoryIndex)
    .map(([name, ids]) => ({
      name,
      count: ids.length,
      description: CATEGORY_DESCRIPTIONS[name] || `${name} components`,
      ...(include_examples && ids.length > 0
        ? { examples: ids.slice(0, 3) }
        : {}),
    }))
    .sort((a, b) => b.count - a.count);

  const countTags = (index: Record<string, string[]>) =>
    Object.entries(index)
      .map(([tag, ids]) => ({ tag, count: ids.length }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 15);

  const fontCounts = new Map<string, number>();
  for (const component of allComponents) {
    for (const font of component.fontFamily) {
      fontCounts.set(font, (fontCounts.get(font) || 0) + 1);
    }
  }
  const fonts_used = Array.from(fontCounts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  return {
    success: true,
    total_components: totalCount,
    categories,
    tags: {
      functional: countTags(tagIndex.functional),
      style: countTags(tagIndex.style),
      layout: countTags(tagIndex.layout),
      industry: countTags(tagIndex.industry),
    },
    fonts_used,
    query_tips: QUERY_TIPS,
  };
}

function generateUsageHints(component: RegistryEntry): {
  best_for: string[];
  not_recommended_for: string[];
} {
  const best_for: string[] = [];
  const not_recommended_for: string[] = [];

  const categoryHints: Record<string, { best: string[]; not: string[] }> = {
    hero: {
      best: [
        "Landing pages",
        "Above-the-fold sections",
        "Product introductions",
      ],
      not: ["Internal dashboards", "Form-heavy pages"],
    },
    pricing: {
      best: ["SaaS products", "Service offerings", "Subscription plans"],
      not: ["Content-heavy pages", "Blogs"],
    },
    testimonial: {
      best: ["Building trust", "Social proof sections", "Case studies"],
      not: ["Technical documentation"],
    },
    stats: {
      best: [
        "Showcasing metrics",
        "Company achievements",
        "Data visualization",
      ],
      not: ["Creative portfolios"],
    },
    contact: {
      best: ["Lead generation", "Customer support pages", "Footer sections"],
      not: ["Transactional pages"],
    },
  };

  const hints = categoryHints[component.category];
  if (hints) {
    best_for.push(...hints.best);
    not_recommended_for.push(...hints.not);
  }

  if (component.tags.style.includes("dark-theme")) {
    best_for.push("Modern tech products", "Creative agencies");
  }
  if (component.tags.style.includes("minimal")) {
    best_for.push("Clean, professional look", "Content-focused pages");
  }

  if (component.tags.industry.includes("saas")) {
    best_for.push("Software-as-a-Service products");
  }
  if (component.tags.industry.includes("fintech")) {
    best_for.push("Financial technology products");
  }

  return {
    best_for: best_for.slice(0, 5),
    not_recommended_for: not_recommended_for.slice(0, 3),
  };
}

// ============================================
// HTTP Handlers
// ============================================

export async function POST(request: NextRequest) {
  try {
    const server = await getMcpServer();

    let sessionId = request.headers.get("mcp-session-id");
    let transport = sessionId ? sessions.get(sessionId) : undefined;

    if (!transport) {
      sessionId = randomUUID();
      transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: () => sessionId!,
        onsessioninitialized: (id) => {
          console.log(`MCP Session initialized: ${id}`);
        },
      });

      sessions.set(sessionId, transport);
      await server.connect(transport);
      console.log(`New MCP session: ${sessionId}`);
    }

    const body = await request.json();

    // Create a mock response object for the transport
    const responseChunks: string[] = [];
    const mockRes = {
      headersSent: false,
      setHeader: () => {},
      writeHead: () => {},
      write: (chunk: string) => {
        responseChunks.push(chunk);
        return true;
      },
      end: (data?: string) => {
        if (data) responseChunks.push(data);
      },
    };

    // Create a mock request object
    const mockReq = {
      method: "POST",
      headers: Object.fromEntries(request.headers.entries()),
      body,
    };

    await transport.handleRequest(
      mockReq as unknown as import("http").IncomingMessage,
      mockRes as unknown as import("http").ServerResponse,
      body
    );

    const responseBody = responseChunks.join("");

    return new NextResponse(responseBody, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "mcp-session-id": sessionId,
      },
    });
  } catch (error) {
    console.error("MCP request error:", error);
    return NextResponse.json(
      {
        jsonrpc: "2.0",
        error: {
          code: -32603,
          message: error instanceof Error ? error.message : "Internal error",
        },
        id: null,
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const sessionId = request.headers.get("mcp-session-id");

  if (!sessionId || !sessions.has(sessionId)) {
    return NextResponse.json(
      {
        error: "No active session. Send POST request first.",
      },
      { status: 400 }
    );
  }

  // SSE 스트리밍을 위한 응답
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "mcp-session-id": sessionId,
    },
  });
}

export async function DELETE(request: NextRequest) {
  const sessionId = request.headers.get("mcp-session-id");

  if (sessionId && sessions.has(sessionId)) {
    const transport = sessions.get(sessionId)!;
    await transport.close();
    sessions.delete(sessionId);
    console.log(`MCP Session closed: ${sessionId}`);
    return NextResponse.json({ success: true, message: "Session closed" });
  }

  return NextResponse.json({ error: "Session not found" }, { status: 404 });
}
