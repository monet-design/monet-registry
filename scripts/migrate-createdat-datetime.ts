import * as fs from "fs";
import * as path from "path";
import yaml from "js-yaml";

/**
 * 기존 metadata.yaml 파일들의 createdAt 필드를 datetime 형식으로 마이그레이션
 *
 * 변환: "2025-11-30" → "2025-11-30T00:00:00Z"
 *
 * 사용법:
 *   pnpm tsx scripts/migrate-createdat-datetime.ts           # 실제 실행
 *   pnpm tsx scripts/migrate-createdat-datetime.ts --dry-run # 미리보기
 */

const DATE_ONLY_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const DATETIME_REGEX = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;

function convertToDatetime(dateStr: string): string {
  if (DATETIME_REGEX.test(dateStr)) {
    // 이미 datetime 형식
    return dateStr;
  }
  if (DATE_ONLY_REGEX.test(dateStr)) {
    // 날짜만 있는 경우 T00:00:00Z 추가
    return `${dateStr}T00:00:00Z`;
  }
  // 알 수 없는 형식은 그대로 반환
  return dateStr;
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");

  if (dryRun) {
    console.log("🔍 DRY RUN 모드 - 실제 파일은 변경되지 않습니다.\n");
  }

  const registryDir = path.join(process.cwd(), "src/components/registry");

  const componentDirs = fs
    .readdirSync(registryDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  let migrated = 0;
  let skipped = 0;
  let noCreatedAt = 0;
  let alreadyDatetime = 0;
  let missing = 0;

  for (const componentName of componentDirs) {
    const metadataPath = path.join(registryDir, componentName, "metadata.yaml");

    if (!fs.existsSync(metadataPath)) {
      missing++;
      continue;
    }

    try {
      const content = fs.readFileSync(metadataPath, "utf-8");
      const data = yaml.load(content) as Record<string, unknown>;

      if (!data.createdAt) {
        noCreatedAt++;
        continue;
      }

      const currentValue = String(data.createdAt);

      if (DATETIME_REGEX.test(currentValue)) {
        alreadyDatetime++;
        continue;
      }

      if (!DATE_ONLY_REGEX.test(currentValue)) {
        console.log(`[WARN] ${componentName}: 알 수 없는 형식 "${currentValue}"`);
        skipped++;
        continue;
      }

      const newValue = convertToDatetime(currentValue);
      data.createdAt = newValue;

      if (dryRun) {
        console.log(`[DRY] ${componentName}: "${currentValue}" → "${newValue}"`);
      } else {
        const yamlContent = yaml.dump(data, {
          indent: 2,
          lineWidth: 120,
          quotingType: '"',
          forceQuotes: false,
        });
        fs.writeFileSync(metadataPath, yamlContent);
        console.log(`[OK] ${componentName}: "${currentValue}" → "${newValue}"`);
      }

      migrated++;
    } catch (e) {
      console.error(`[FAIL] ${componentName}:`, e);
      skipped++;
    }
  }

  console.log("\n--- Migration Summary ---");
  console.log(`Migrated: ${migrated}`);
  console.log(`Already datetime: ${alreadyDatetime}`);
  console.log(`No createdAt field: ${noCreatedAt}`);
  console.log(`Skipped (error/unknown): ${skipped}`);
  console.log(`Missing metadata.yaml: ${missing}`);
  console.log(`Total components: ${componentDirs.length}`);

  if (dryRun && migrated > 0) {
    console.log("\n⚠️  --dry-run 없이 다시 실행하면 위 변경사항이 적용됩니다.");
  }
}

main().catch(console.error);
