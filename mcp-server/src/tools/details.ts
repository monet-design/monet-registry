/**
 * get_component_details 도구
 */

import { z } from "zod";
import { registryService } from "../services/registry.js";
import { componentNotFoundError, findSimilarComponentIds } from "../utils/errors.js";
import type { GetComponentDetailsResponse, ErrorResponse, SimilarComponent } from "../types/responses.js";

export const getComponentDetailsSchema = {
  name: "get_component_details",
  description: `Get detailed metadata for a specific component.

USE THIS TOOL WHEN:
- Need full information about a component before using it
- Want to check dependencies and font requirements
- Looking for usage context and similar components

Returns: Complete component metadata including tags, fonts, dependencies`,
  inputSchema: {
    type: "object" as const,
    properties: {
      component_id: {
        type: "string",
        description: "Component ID (e.g., 'hero-1', 'stats-10')",
      },
      include_similar: {
        type: "boolean",
        description: "Include similar component recommendations (default: true)",
      },
    },
    required: ["component_id"],
  },
};

const inputValidator = z.object({
  component_id: z.string().min(1),
  include_similar: z.boolean().optional().default(true),
});

export async function handleGetComponentDetails(
  args: unknown
): Promise<GetComponentDetailsResponse | ErrorResponse> {
  const parsed = inputValidator.safeParse(args);

  if (!parsed.success) {
    return {
      success: false,
      error: {
        code: "INVALID_INPUT",
        message: "component_id is required",
      },
    };
  }

  const { component_id, include_similar } = parsed.data;

  const component = registryService.getComponent(component_id);
  if (!component) {
    const allIds = registryService.getAllComponents().map((c) => c.id);
    const similarIds = findSimilarComponentIds(component_id, allIds);
    return componentNotFoundError(component_id, similarIds);
  }

  // 유사 컴포넌트 찾기
  let similar_components: SimilarComponent[] | undefined;
  if (include_similar) {
    const similarIds = registryService.findSimilarIds(component_id, 5);
    similar_components = similarIds.map((id) => {
      const similar = registryService.getComponent(id);
      return {
        id,
        name: similar?.name || id,
        category: similar?.category || component.category,
        match_reason: `Same category (${component.category}) with similar styling`,
      };
    });
  }

  // Usage hints 생성
  const usage_hints = generateUsageHints(component);

  return {
    success: true,
    component: {
      id: component.id,
      name: component.name,
      category: component.category,
      title: component.title,
      description: component.description
        ? {
            short: component.description.short || "",
            detailed: component.description.detailed,
          }
        : undefined,
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

function generateUsageHints(component: { category: string; tags: { style: string[]; industry: string[] } }): {
  best_for: string[];
  not_recommended_for: string[];
} {
  const best_for: string[] = [];
  const not_recommended_for: string[] = [];

  // Category-based hints
  const categoryHints: Record<string, { best: string[]; not: string[] }> = {
    hero: {
      best: ["Landing pages", "Above-the-fold sections", "Product introductions"],
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
      best: ["Showcasing metrics", "Company achievements", "Data visualization"],
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

  // Style-based hints
  if (component.tags.style.includes("dark-theme")) {
    best_for.push("Modern tech products", "Creative agencies");
  }
  if (component.tags.style.includes("minimal")) {
    best_for.push("Clean, professional look", "Content-focused pages");
  }

  // Industry-based hints
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
