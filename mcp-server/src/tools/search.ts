/**
 * search_components 도구
 */

import { z } from "zod";
import { searchEngine } from "../services/search-engine.js";
import { emptyResultsError } from "../utils/errors.js";
import type { SearchComponentsResponse, ErrorResponse } from "../types/responses.js";

export const searchComponentsSchema = {
  name: "search_components",
  description: `Search for landing page UI components using natural language or structured filters.

USE THIS TOOL WHEN:
- User asks for specific UI components (e.g., "hero section with gradient")
- Need to find components matching certain criteria
- Looking for inspiration or alternatives

EXAMPLES:
- "minimal hero section for SaaS"
- "dark theme pricing table with toggle"
- "testimonial carousel with avatars"

AVAILABLE CATEGORIES: hero, stats, testimonial, feature, pricing, cta, contact, faq, how-it-works, biography, before-after, showcase, header, footer, gallery, team, logo-cloud, newsletter

STYLE TAGS: dark-theme, light-theme, minimal, modern, retro, elegant, playful, corporate, bold, gradient, glassmorphism, neumorphism, glow, neon, pastel

LAYOUT TAGS: single-column, two-column, three-column, centered, split-layout, card-grid, masonry, bento, full-width

Returns: List of matching components with relevance scores`,
  inputSchema: {
    type: "object" as const,
    properties: {
      query: {
        type: "string",
        description: "Natural language search query (e.g., 'hero section dark theme for SaaS')",
      },
      filters: {
        type: "object",
        description: "Optional structured filters",
        properties: {
          category: {
            type: "string",
            description: "Filter by category (e.g., hero, stats, pricing)",
          },
          tags: {
            type: "object",
            properties: {
              functional: {
                type: "array",
                items: { type: "string" },
                description: "Functional tags (e.g., carousel, tabs, animation)",
              },
              style: {
                type: "array",
                items: { type: "string" },
                description: "Style tags (e.g., dark-theme, minimal, gradient)",
              },
              layout: {
                type: "array",
                items: { type: "string" },
                description: "Layout tags (e.g., two-column, centered, bento)",
              },
              industry: {
                type: "array",
                items: { type: "string" },
                description: "Industry tags (e.g., saas, fintech, e-commerce)",
              },
            },
          },
        },
      },
      limit: {
        type: "number",
        description: "Maximum number of results (default: 10, max: 50)",
      },
    },
    required: ["query"],
  },
};

const inputValidator = z.object({
  query: z.string(),
  filters: z
    .object({
      category: z.string().optional(),
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
  limit: z.number().min(1).max(50).optional(),
});

export async function handleSearchComponents(
  args: unknown
): Promise<SearchComponentsResponse | ErrorResponse> {
  const parsed = inputValidator.safeParse(args);

  if (!parsed.success) {
    return {
      success: false,
      error: {
        code: "INVALID_INPUT",
        message: parsed.error.message,
      },
    };
  }

  const { query, filters, limit = 10 } = parsed.data;

  try {
    const result = await searchEngine.search({
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
      elapsed_ms: Math.round(result.elapsed * 100) / 100,
      results: result.results.map((r) => ({
        id: r.id,
        name: r.name,
        category: r.category,
        preview_image: r.previewImage,
        tags: r.tags,
        keywords: r.keywords,
      })),
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: "SEARCH_ERROR",
        message: error instanceof Error ? error.message : "Unknown search error",
      },
    };
  }
}
