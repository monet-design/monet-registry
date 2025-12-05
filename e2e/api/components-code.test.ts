import { describe, it, expect, beforeAll } from "vitest";
import { apiGet } from "../helpers/api-client";

interface CodeInfo {
  line_count: number;
  has_client_directive: boolean;
  exports: string[];
  imports: {
    package: string;
    items: string[];
  }[];
}

interface GetComponentCodeResponse {
  success: boolean;
  component_id: string;
  code: string;
  code_info: CodeInfo;
  dependencies: {
    npm: string[];
    internal: string[];
  };
  integration_guide: {
    import_statement: string;
    basic_usage: string;
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

describe("GET /api/v1/components/[id]/code", () => {
  let validComponentId: string;

  beforeAll(async () => {
    const { data } = await apiGet<ListComponentsResponse>("/api/v1/components", {
      limit: "1",
    });
    if (data.components.length > 0) {
      validComponentId = data.components[0].id;
    }
  });

  describe("Code Retrieval", () => {
    it("should return component code for valid id", async () => {
      if (!validComponentId) return;

      const { status, data } = await apiGet<GetComponentCodeResponse>(
        `/api/v1/components/${validComponentId}/code`
      );

      expect(status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.component_id).toBe(validComponentId);
      expect(typeof data.code).toBe("string");
      expect(data.code.length).toBeGreaterThan(0);
    });

    it("should include code_info with line_count", async () => {
      if (!validComponentId) return;

      const { data } = await apiGet<GetComponentCodeResponse>(
        `/api/v1/components/${validComponentId}/code`
      );

      expect(data.code_info).toBeDefined();
      expect(typeof data.code_info.line_count).toBe("number");
      expect(data.code_info.line_count).toBeGreaterThan(0);
    });

    it("should include has_client_directive flag", async () => {
      if (!validComponentId) return;

      const { data } = await apiGet<GetComponentCodeResponse>(
        `/api/v1/components/${validComponentId}/code`
      );

      expect(typeof data.code_info.has_client_directive).toBe("boolean");
    });

    it("should include exports array", async () => {
      if (!validComponentId) return;

      const { data } = await apiGet<GetComponentCodeResponse>(
        `/api/v1/components/${validComponentId}/code`
      );

      expect(Array.isArray(data.code_info.exports)).toBe(true);
    });

    it("should include dependencies (npm and internal)", async () => {
      if (!validComponentId) return;

      const { data } = await apiGet<GetComponentCodeResponse>(
        `/api/v1/components/${validComponentId}/code`
      );

      expect(data.dependencies).toBeDefined();
      expect(Array.isArray(data.dependencies.npm)).toBe(true);
      expect(Array.isArray(data.dependencies.internal)).toBe(true);
    });

    it("should include integration_guide", async () => {
      if (!validComponentId) return;

      const { data } = await apiGet<GetComponentCodeResponse>(
        `/api/v1/components/${validComponentId}/code`
      );

      expect(data.integration_guide).toBeDefined();
      expect(typeof data.integration_guide.import_statement).toBe("string");
      expect(typeof data.integration_guide.basic_usage).toBe("string");
    });

    it("should have proper Cache-Control header", async () => {
      if (!validComponentId) return;

      const { headers } = await apiGet<GetComponentCodeResponse>(
        `/api/v1/components/${validComponentId}/code`
      );

      const cacheControl = headers.get("cache-control");
      expect(cacheControl).toContain("immutable");
    });
  });

  describe("Error Handling", () => {
    it("should return 404 for non-existent component id", async () => {
      const { status, data } = await apiGet<ErrorResponse>(
        "/api/v1/components/nonexistent-component-xyz/code"
      );

      expect(status).toBe(404);
      expect(data.success).toBe(false);
      expect(data.error.code).toBe("COMPONENT_NOT_FOUND");
    });
  });
});
