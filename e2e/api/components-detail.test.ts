import { describe, it, expect, beforeAll } from "vitest";
import { apiGet } from "../helpers/api-client";

interface ComponentMetadata {
  id: string;
  name: string;
  category: string;
  title?: string;
  description?: {
    short: string;
    detailed?: string;
  };
  images: {
    preview: string;
    thumbnail?: string;
  };
  tags: {
    functional: string[];
    style: string[];
    layout: string[];
    industry: string[];
  };
  keywords: string[];
  fonts: string[];
  component_path: string;
  status: string;
  created_at?: string;
}

interface SimilarComponent {
  id: string;
  name: string;
  category: string;
  match_reason: string;
}

interface GetComponentDetailsResponse {
  success: boolean;
  component: ComponentMetadata;
  similar_components?: SimilarComponent[];
  usage_hints: {
    best_for: string[];
    not_recommended_for: string[];
  };
}

interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
  };
}

interface ListComponentsResponse {
  success: boolean;
  components: { id: string }[];
}

describe("GET /api/v1/components/[id]", () => {
  let validComponentId: string;

  beforeAll(async () => {
    // Get a valid component ID from the list
    const { data } = await apiGet<ListComponentsResponse>("/api/v1/components", {
      limit: "1",
    });
    if (data.components.length > 0) {
      validComponentId = data.components[0].id;
    }
  });

  describe("Component Details", () => {
    it("should return component details for valid id", async () => {
      if (!validComponentId) return;

      const { status, data } = await apiGet<GetComponentDetailsResponse>(
        `/api/v1/components/${validComponentId}`
      );

      expect(status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.component).toBeDefined();
      expect(data.component.id).toBe(validComponentId);
    });

    it("should include all required metadata fields", async () => {
      if (!validComponentId) return;

      const { data } = await apiGet<GetComponentDetailsResponse>(
        `/api/v1/components/${validComponentId}`
      );

      const component = data.component;
      expect(component.id).toBeDefined();
      expect(component.name).toBeDefined();
      expect(component.category).toBeDefined();
      expect(component.images).toBeDefined();
      expect(component.tags).toBeDefined();
      expect(component.component_path).toBeDefined();
      expect(component.status).toBeDefined();
    });

    it("should include similar_components by default", async () => {
      if (!validComponentId) return;

      const { data } = await apiGet<GetComponentDetailsResponse>(
        `/api/v1/components/${validComponentId}`
      );

      expect(data.similar_components).toBeDefined();
      expect(Array.isArray(data.similar_components)).toBe(true);
    });

    it("should exclude similar_components when include_similar=false", async () => {
      if (!validComponentId) return;

      const { data } = await apiGet<GetComponentDetailsResponse>(
        `/api/v1/components/${validComponentId}`,
        { include_similar: "false" }
      );

      expect(data.success).toBe(true);
      // similar_components should be empty or undefined
      expect(
        !data.similar_components || data.similar_components.length === 0
      ).toBe(true);
    });

    it("should include usage_hints", async () => {
      if (!validComponentId) return;

      const { data } = await apiGet<GetComponentDetailsResponse>(
        `/api/v1/components/${validComponentId}`
      );

      expect(data.usage_hints).toBeDefined();
      expect(Array.isArray(data.usage_hints.best_for)).toBe(true);
      expect(Array.isArray(data.usage_hints.not_recommended_for)).toBe(true);
    });
  });

  describe("Error Handling", () => {
    it("should return 404 for non-existent component id", async () => {
      const { status, data } = await apiGet<ErrorResponse>(
        "/api/v1/components/nonexistent-component-xyz-123"
      );

      expect(status).toBe(404);
      expect(data.success).toBe(false);
      expect(data.error.code).toBe("COMPONENT_NOT_FOUND");
    });

    it("should return proper error structure for 404", async () => {
      const { data } = await apiGet<ErrorResponse>(
        "/api/v1/components/nonexistent-id"
      );

      expect(data.success).toBe(false);
      expect(data.error).toBeDefined();
      expect(data.error.code).toBeDefined();
      expect(data.error.message).toBeDefined();
    });
  });
});
