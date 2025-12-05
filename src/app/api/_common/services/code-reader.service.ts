/**
 * Code Reader Service
 * 컴포넌트 소스코드 읽기 및 분석
 */

import "server-only";
import { unstable_cache } from "next/cache";
import fs from "fs/promises";
import path from "path";
import type { ComponentCode, CodeInfo } from "../types";

const COMPONENTS_DIR = path.join(process.cwd(), "src/components/registry");

class CodeReaderService {
  /**
   * Read component source code with caching
   */
  async readComponentCode(componentId: string): Promise<ComponentCode> {
    const getCachedCode = unstable_cache(
      async (id: string): Promise<ComponentCode> => {
        const componentPath = path.join(COMPONENTS_DIR, id, "index.tsx");
        const code = await fs.readFile(componentPath, "utf-8");
        const info = this.analyzeCode(code);
        const dependencies = this.extractDependencies(code);

        return {
          code,
          info,
          dependencies,
        };
      },
      ["component-code", componentId],
      { revalidate: 3600 }
    );

    return getCachedCode(componentId);
  }

  /**
   * Analyze component code to extract metadata
   */
  analyzeCode(code: string): CodeInfo {
    const lines = code.split("\n");
    const hasClientDirective =
      code.includes('"use client"') || code.includes("'use client'");

    // Export 추출
    const exports: string[] = [];
    const exportDefaultMatch = code.match(
      /export\s+default\s+function\s+(\w+)/
    );
    if (exportDefaultMatch) {
      exports.push("default");
    }
    const namedExports = code.matchAll(
      /export\s+(?:const|function|interface|type)\s+(\w+)/g
    );
    for (const match of namedExports) {
      exports.push(match[1]);
    }

    // Import 추출
    const imports: { package: string; items: string[] }[] = [];
    const importMatches = code.matchAll(
      /import\s+(?:{([^}]+)}|(\w+))\s+from\s+["']([^"']+)["']/g
    );
    for (const match of importMatches) {
      const items = match[1]
        ? match[1].split(",").map((s) => s.trim().split(" as ")[0])
        : match[2]
          ? [match[2]]
          : [];
      imports.push({
        package: match[3],
        items: items.filter(Boolean),
      });
    }

    return {
      line_count: lines.length,
      has_client_directive: hasClientDirective,
      exports,
      imports,
    };
  }

  /**
   * Extract dependencies from code
   */
  private extractDependencies(code: string): {
    npm: string[];
    internal: string[];
  } {
    const npm: Set<string> = new Set();
    const internal: Set<string> = new Set();

    const importMatches = code.matchAll(/from\s+["']([^"']+)["']/g);

    for (const match of importMatches) {
      const pkg = match[1];

      if (
        pkg.startsWith("@/") ||
        pkg.startsWith("./") ||
        pkg.startsWith("../")
      ) {
        internal.add(pkg);
      } else if (pkg.startsWith("@")) {
        // Scoped package (e.g., @radix-ui/react-dialog)
        const scopedPkg = pkg.split("/").slice(0, 2).join("/");
        npm.add(scopedPkg);
      } else if (!pkg.startsWith("react") && !pkg.startsWith("next")) {
        // External package (exclude react/next as they're assumed)
        const pkgName = pkg.split("/")[0];
        npm.add(pkgName);
      }
    }

    return {
      npm: Array.from(npm),
      internal: Array.from(internal),
    };
  }

  /**
   * Check if component exists
   */
  async componentExists(componentId: string): Promise<boolean> {
    const componentPath = path.join(COMPONENTS_DIR, componentId, "index.tsx");
    try {
      await fs.access(componentPath);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Get integration guide for a component
   */
  getIntegrationGuide(
    componentId: string,
    componentName: string
  ): { import_statement: string; basic_usage: string } {
    return {
      import_statement: `import ${componentName} from "@/components/registry/${componentId}"`,
      basic_usage: `<${componentName} />`,
    };
  }
}

// 싱글톤 인스턴스
export const codeReaderService = new CodeReaderService();
