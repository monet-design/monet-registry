import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    root: "./tests",
    setupFiles: ["./setup.ts"],
    testTimeout: 15000,
    hookTimeout: 30000,
    sequence: { concurrent: false },
  },
});
