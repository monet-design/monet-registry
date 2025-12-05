import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    include: ["e2e/**/*.test.ts"],
    testTimeout: 30000,
    hookTimeout: 60000,
    globalSetup: "./e2e/setup.ts",
    env: {
      API_BASE_URL: "http://localhost:4413",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
