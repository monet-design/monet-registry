import { defineConfig } from "vitest/config";
import { loadEnv } from "vite";
import path from "path";

export default defineConfig(({ mode }) => {
  // Load .env.local to get API auth credentials
  const env = loadEnv(mode, process.cwd(), "");

  return {
    test: {
      include: ["e2e/**/*.test.ts"],
      testTimeout: 30000,
      hookTimeout: 60000,
      globalSetup: "./e2e/setup.ts",
      env: {
        API_BASE_URL: "http://localhost:4413",
        API_BASIC_AUTH_USER: env.API_BASIC_AUTH_USER || "",
        API_BASIC_AUTH_PASSWORD: env.API_BASIC_AUTH_PASSWORD || "",
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
