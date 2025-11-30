/**
 * 컴포넌트 코드 읽기 서비스
 */

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { LRUCache } from "lru-cache";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface CodeInfo {
  line_count: number;
  has_client_directive: boolean;
  exports: string[];
  imports: {
    package: string;
    items: string[];
  }[];
}

export interface ComponentCode {
  code: string;
  info: CodeInfo;
  dependencies: {
    npm: string[];
    internal: string[];
  };
}

class CodeReaderService {
  private cache: LRUCache<string, ComponentCode>;
  private componentsPath: string;

  constructor() {
    this.cache = new LRUCache<string, ComponentCode>({
      max: 50,
      ttl: 1000 * 60 * 30, // 30분
    });

    this.componentsPath =
      process.env.COMPONENTS_PATH ||
      path.join(__dirname, "../../../src/components/registry");
  }

  async readComponentCode(componentId: string): Promise<ComponentCode | null> {
    // 캐시 확인
    const cached = this.cache.get(componentId);
    if (cached) {
      return cached;
    }

    const codePath = path.join(this.componentsPath, componentId, "index.tsx");

    try {
      const code = await fs.promises.readFile(codePath, "utf-8");
      const info = this.analyzeCode(code);
      const dependencies = this.extractDependencies(code);

      const result: ComponentCode = {
        code,
        info,
        dependencies,
      };

      this.cache.set(componentId, result);
      return result;
    } catch (error) {
      console.error(`Failed to read component ${componentId}:`, error);
      return null;
    }
  }

  private analyzeCode(code: string): CodeInfo {
    const lines = code.split("\n");
    const hasClientDirective = code.includes('"use client"') || code.includes("'use client'");

    // Export 추출
    const exports: string[] = [];
    const exportDefaultMatch = code.match(/export\s+default\s+function\s+(\w+)/);
    if (exportDefaultMatch) {
      exports.push("default");
    }
    const namedExports = code.matchAll(/export\s+(?:const|function|interface|type)\s+(\w+)/g);
    for (const match of namedExports) {
      exports.push(match[1]);
    }

    // Import 추출
    const imports: { package: string; items: string[] }[] = [];
    const importMatches = code.matchAll(/import\s+(?:{([^}]+)}|(\w+))\s+from\s+["']([^"']+)["']/g);
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

  private extractDependencies(code: string): { npm: string[]; internal: string[] } {
    const npm: Set<string> = new Set();
    const internal: Set<string> = new Set();

    const importMatches = code.matchAll(/from\s+["']([^"']+)["']/g);

    for (const match of importMatches) {
      const pkg = match[1];

      if (pkg.startsWith("@/") || pkg.startsWith("./") || pkg.startsWith("../")) {
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

  componentExists(componentId: string): boolean {
    const codePath = path.join(this.componentsPath, componentId, "index.tsx");
    return fs.existsSync(codePath);
  }

  getIntegrationGuide(componentId: string, componentName: string): { import_statement: string; basic_usage: string } {
    return {
      import_statement: `import ${componentName} from "@/components/registry/${componentId}"`,
      basic_usage: `<${componentName} />`,
    };
  }
}

export const codeReaderService = new CodeReaderService();
