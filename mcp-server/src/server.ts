/**
 * MCP Server 설정
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import {
  handleSearchComponents,
  handleGetComponentCode,
  handleGetComponentDetails,
  handleListCategories,
  handleGetRegistryStats,
} from "./tools/index.js";

export function createMcpServer(): McpServer {
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

AVAILABLE CATEGORIES: hero, stats, testimonial, feature, pricing, cta, contact, faq, how-it-works, biography, before-after, showcase

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
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
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
      component_id: z.string().describe("Component ID (e.g., 'hero-1', 'stats-10')"),
    },
    async (args) => {
      const result = await handleGetComponentCode(args);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
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
      include_similar: z.boolean().optional().describe("Include similar components (default: true)"),
    },
    async (args) => {
      const result = await handleGetComponentDetails(args);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
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
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
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
      include_examples: z.boolean().optional().describe("Include example components (default: true)"),
    },
    async (args) => {
      const result = await handleGetRegistryStats(args);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    }
  );

  return server;
}
