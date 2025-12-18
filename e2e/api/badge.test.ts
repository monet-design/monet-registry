import { describe, it, expect } from "vitest";
import { apiGet } from "../helpers/api-client";

interface ShieldsIoBadgeResponse {
  schemaVersion: number;
  label: string;
  message: string;
  color: string;
  isError?: boolean;
}

describe("GET /api/v1/badge", () => {
  describe("Shields.io Badge Format", () => {
    it("should return shields.io compatible response", async () => {
      const { status, data } = await apiGet<ShieldsIoBadgeResponse>(
        "/api/v1/badge"
      );

      expect(status).toBe(200);
      expect(data.schemaVersion).toBe(1);
    });

    it("should have required shields.io fields", async () => {
      const { data } = await apiGet<ShieldsIoBadgeResponse>("/api/v1/badge");

      expect(data.label).toBeDefined();
      expect(data.message).toBeDefined();
      expect(data.color).toBeDefined();
    });

    it("should have 'Components' as label", async () => {
      const { data } = await apiGet<ShieldsIoBadgeResponse>("/api/v1/badge");

      expect(data.label).toBe("Components");
    });

    it("should have numeric message (component count)", async () => {
      const { data } = await apiGet<ShieldsIoBadgeResponse>("/api/v1/badge");

      const count = parseInt(data.message, 10);
      expect(isNaN(count)).toBe(false);
      expect(count).toBeGreaterThan(0);
    });

    it("should have valid color", async () => {
      const { data } = await apiGet<ShieldsIoBadgeResponse>("/api/v1/badge");

      // shields.io supports named colors and hex colors
      expect(data.color).toBeDefined();
      expect(typeof data.color).toBe("string");
      expect(data.color.length).toBeGreaterThan(0);
    });
  });

  describe("Public Access", () => {
    it("should be accessible without authentication", async () => {
      // This endpoint is explicitly in PUBLIC_PATHS in middleware
      const { status } = await apiGet<ShieldsIoBadgeResponse>("/api/v1/badge");

      expect(status).toBe(200);
    });
  });

  describe("Cache Control", () => {
    it("should have Cache-Control header", async () => {
      const { headers } = await apiGet<ShieldsIoBadgeResponse>("/api/v1/badge");

      const cacheControl = headers.get("cache-control");
      expect(cacheControl).toBeDefined();
      expect(cacheControl).toContain("s-maxage");
    });
  });
});
