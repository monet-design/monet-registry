import * as fs from "fs";
import * as path from "path";
import yaml from "js-yaml";
import { z } from "zod/v4";
import {
  ComponentCategory,
  ComponentStatus,
  FunctionalTags,
  StyleTags,
  LayoutTags,
  IndustryTags,
} from "../src/types/categories";

/**
 * 메타데이터 검증 스크립트
 */

// Zod 스키마 (더 관대한 버전 - 유효성 검사용)
const MetadataSchema = z.object({
  schemaVersion: z.literal("2.0"),
  name: z.string().regex(/^[a-zA-Z0-9-]+$/),
  category: z.enum(ComponentCategory),

  images: z.object({
    preview: z.string().min(1),
    thumbnail: z.string().optional(),
  }),

  title: z.string().optional(),

  description: z
    .object({
      short: z.string(),
      detailed: z.string().optional(),
    })
    .optional(),

  tags: z
    .object({
      functional: z.array(z.string()).optional(),
      style: z.array(z.string()).optional(),
      layout: z.array(z.string()).optional(),
      industry: z.array(z.string()).optional(),
    })
    .optional(),

  freeformKeywords: z.array(z.string()).optional(),
  useCases: z.array(z.string()).optional(),
  fontFamily: z.array(z.string()).optional(),
  dependencies: z.array(z.string()).optional(),

  source: z
    .object({
      name: z.string(),
      url: z.string().optional(),
    })
    .optional(),

  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  status: z.enum(ComponentStatus).optional(),
});

interface ValidationResult {
  valid: boolean;
  component: string;
  errors: string[];
  warnings: string[];
}

function validateMetadataFile(filePath: string): ValidationResult {
  const componentName = path.basename(path.dirname(filePath));
  const result: ValidationResult = {
    valid: true,
    component: componentName,
    errors: [],
    warnings: [],
  };

  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const data = yaml.load(content) as Record<string, unknown>;

    // Zod 검증
    const parseResult = MetadataSchema.safeParse(data);
    if (!parseResult.success) {
      result.valid = false;
      parseResult.error.issues.forEach((issue) => {
        result.errors.push(`${issue.path.join(".")}: ${issue.message}`);
      });
      return result;
    }

    const metadata = parseResult.data;

    // 추가 검증: name이 폴더명과 일치하는지
    if (metadata.name.toLowerCase() !== componentName.toLowerCase()) {
      result.warnings.push(
        `name "${metadata.name}" does not match folder name "${componentName}"`
      );
    }

    // 태그 검증: 정의된 enum에 포함되는지
    if (metadata.tags) {
      if (metadata.tags.functional) {
        const invalidFunctional = metadata.tags.functional.filter(
          (t) => !(FunctionalTags as readonly string[]).includes(t)
        );
        if (invalidFunctional.length > 0) {
          result.warnings.push(
            `Unknown functional tags: ${invalidFunctional.join(", ")}`
          );
        }
      }

      if (metadata.tags.style) {
        const invalidStyle = metadata.tags.style.filter(
          (t) => !(StyleTags as readonly string[]).includes(t)
        );
        if (invalidStyle.length > 0) {
          result.warnings.push(`Unknown style tags: ${invalidStyle.join(", ")}`);
        }
      }

      if (metadata.tags.layout) {
        const invalidLayout = metadata.tags.layout.filter(
          (t) => !(LayoutTags as readonly string[]).includes(t)
        );
        if (invalidLayout.length > 0) {
          result.warnings.push(
            `Unknown layout tags: ${invalidLayout.join(", ")}`
          );
        }
      }

      if (metadata.tags.industry) {
        const invalidIndustry = metadata.tags.industry.filter(
          (t) => !(IndustryTags as readonly string[]).includes(t)
        );
        if (invalidIndustry.length > 0) {
          result.warnings.push(
            `Unknown industry tags: ${invalidIndustry.join(", ")}`
          );
        }
      }
    }

    // 이미지 경로 검증 (절대 경로 경고)
    if (metadata.images.preview.startsWith("/Users/")) {
      result.warnings.push(
        `preview image uses absolute path: ${metadata.images.preview}`
      );
    }
  } catch (e) {
    result.valid = false;
    result.errors.push(`Failed to parse YAML: ${(e as Error).message}`);
  }

  return result;
}

async function main() {
  const registryDir = path.join(process.cwd(), "src/components/registry");

  const componentDirs = fs
    .readdirSync(registryDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  let valid = 0;
  let invalid = 0;
  let missing = 0;
  const allResults: ValidationResult[] = [];
  const nameSet = new Set<string>();
  const duplicates: string[] = [];

  for (const componentName of componentDirs) {
    const metadataPath = path.join(
      registryDir,
      componentName,
      "metadata.yaml"
    );

    if (!fs.existsSync(metadataPath)) {
      missing++;
      continue;
    }

    const result = validateMetadataFile(metadataPath);
    allResults.push(result);

    if (result.valid) {
      valid++;
    } else {
      invalid++;
    }

    // 중복 이름 체크
    const yamlContent = fs.readFileSync(metadataPath, "utf-8");
    const data = yaml.load(yamlContent) as { name?: string };
    if (data.name) {
      if (nameSet.has(data.name.toLowerCase())) {
        duplicates.push(data.name);
      }
      nameSet.add(data.name.toLowerCase());
    }
  }

  // 결과 출력
  console.log("\n=== Validation Results ===\n");

  // 에러 출력
  const withErrors = allResults.filter((r) => r.errors.length > 0);
  if (withErrors.length > 0) {
    console.log("ERRORS:");
    for (const result of withErrors) {
      console.log(`  [${result.component}]`);
      result.errors.forEach((e) => console.log(`    - ${e}`));
    }
    console.log("");
  }

  // 경고 출력 (처음 10개만)
  const withWarnings = allResults.filter((r) => r.warnings.length > 0);
  if (withWarnings.length > 0) {
    console.log(`WARNINGS (showing first 10 of ${withWarnings.length}):`);
    for (const result of withWarnings.slice(0, 10)) {
      console.log(`  [${result.component}]`);
      result.warnings.forEach((w) => console.log(`    - ${w}`));
    }
    console.log("");
  }

  // 중복 이름 경고
  if (duplicates.length > 0) {
    console.log("DUPLICATE NAMES:");
    duplicates.forEach((d) => console.log(`  - ${d}`));
    console.log("");
  }

  // 요약
  console.log("--- Summary ---");
  console.log(`Valid: ${valid}`);
  console.log(`Invalid: ${invalid}`);
  console.log(`Missing metadata.yaml: ${missing}`);
  console.log(`Total components: ${componentDirs.length}`);
  console.log(`Duplicates: ${duplicates.length}`);

  // 카테고리별 통계
  const categoryStats: Record<string, number> = {};
  for (const result of allResults) {
    if (result.valid) {
      const metadataPath = path.join(
        registryDir,
        result.component,
        "metadata.yaml"
      );
      const yamlContent = fs.readFileSync(metadataPath, "utf-8");
      const data = yaml.load(yamlContent) as { category?: string };
      if (data.category) {
        categoryStats[data.category] = (categoryStats[data.category] || 0) + 1;
      }
    }
  }

  console.log("\n--- Category Distribution ---");
  Object.entries(categoryStats)
    .sort((a, b) => b[1] - a[1])
    .forEach(([category, count]) => {
      console.log(`  ${category}: ${count}`);
    });

  // 실패 시 exit code 1
  if (invalid > 0) {
    process.exit(1);
  }
}

main().catch(console.error);
