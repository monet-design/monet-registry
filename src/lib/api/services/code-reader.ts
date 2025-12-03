import "server-only";
import { unstable_cache } from "next/cache";
import fs from "fs/promises";
import path from "path";

const COMPONENTS_DIR = path.join(process.cwd(), "src/components/registry");

/**
 * Read component source code
 */
export async function readComponentCode(componentId: string): Promise<string> {
  const getCachedCode = unstable_cache(
    async (id: string) => {
      const componentPath = path.join(COMPONENTS_DIR, id, "index.tsx");
      return await fs.readFile(componentPath, "utf-8");
    },
    ["component-code", componentId],
    { revalidate: 3600 }
  );

  return getCachedCode(componentId);
}

/**
 * Analyze component code to extract metadata
 */
export function analyzeCode(code: string) {
  const lines = code.split("\n");
  const hasClientDirective = code.includes("use client");

  // Parse exports (simple regex-based)
  const exportMatches = code.matchAll(
    /export\s+(?:default\s+)?(?:function|const|class)\s+(\w+)/g
  );
  const exports = Array.from(exportMatches, (m) => m[1]);

  // Parse imports
  const importMatches = code.matchAll(
    /import\s+(?:{([^}]+)}|(\w+))\s+from\s+["']([^"']+)["']/g
  );
  const imports = Array.from(importMatches, (m) => ({
    package: m[3],
    items: m[1] ? m[1].split(",").map((s) => s.trim()) : [m[2]],
  }));

  // Separate npm and internal imports
  const npmPackages = imports
    .filter((imp) => !imp.package.startsWith(".") && !imp.package.startsWith("@/"))
    .map((imp) => imp.package);

  const internalImports = imports
    .filter((imp) => imp.package.startsWith(".") || imp.package.startsWith("@/"))
    .map((imp) => imp.package);

  return {
    line_count: lines.length,
    has_client_directive: hasClientDirective,
    exports,
    imports,
    dependencies: {
      npm: [...new Set(npmPackages)],
      internal: [...new Set(internalImports)],
    },
  };
}
