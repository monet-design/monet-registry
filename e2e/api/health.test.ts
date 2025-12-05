import { describe, it, expect } from "vitest";
import { apiGet } from "../helpers/api-client";

interface HealthResponse {
  status: string;
  version: string;
  initialized: boolean;
  component_count: number;
}

describe("GET /api/health", () => {
  it("should return health status with all required fields", async () => {
    const { status, data } = await apiGet<HealthResponse>("/api/health");

    expect(status).toBe(200);
    expect(data.status).toBe("ok");
    expect(data.version).toBe("1.0.0");
    expect(data.initialized).toBe(true);
    expect(typeof data.component_count).toBe("number");
  });

  it("should have component_count >= 0", async () => {
    const { data } = await apiGet<HealthResponse>("/api/health");

    expect(data.component_count).toBeGreaterThanOrEqual(0);
  });

  it("should have correct Content-Type header", async () => {
    const { headers } = await apiGet<HealthResponse>("/api/health");

    expect(headers.get("content-type")).toContain("application/json");
  });
});
