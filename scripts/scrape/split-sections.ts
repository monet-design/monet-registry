#!/usr/bin/env npx tsx
/**
 * 전체 페이지 스크린샷을 섹션별로 분할하는 스크립트
 *
 * 사용 예시:
 *   npx tsx scripts/scrape/split-sections.ts --input "public/scraped/domain/full-page.png" --output "public/scraped/domain/sections" --splits "0,100,500,1000"
 */

import * as fs from "fs";
import * as path from "path";
import sharp from "sharp";

interface SplitOptions {
  inputPath: string;
  outputDir: string;
  splits: number[]; // Y 좌표 배열 (섹션 시작점들)
}

function parseArgs(): SplitOptions {
  const args = process.argv.slice(2);
  let inputPath = "";
  let outputDir = "";
  let splits: number[] = [];

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case "--input":
        inputPath = args[++i];
        break;
      case "--output":
        outputDir = args[++i];
        break;
      case "--splits":
        splits = args[++i].split(",").map((s) => parseInt(s.trim(), 10));
        break;
    }
  }

  if (!inputPath || !outputDir || splits.length === 0) {
    console.error("Usage: npx tsx split-sections.ts --input <path> --output <dir> --splits <y1,y2,y3,...>");
    process.exit(1);
  }

  return { inputPath, outputDir, splits };
}

async function splitSections(options: SplitOptions): Promise<void> {
  const { inputPath, outputDir, splits } = options;

  // 입력 파일 확인
  if (!fs.existsSync(inputPath)) {
    console.error(`Input file not found: ${inputPath}`);
    process.exit(1);
  }

  // 출력 디렉토리 생성
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 이미지 메타데이터 읽기
  const metadata = await sharp(inputPath).metadata();
  const imageWidth = metadata.width || 1440;
  const imageHeight = metadata.height || 0;

  console.log(`[Info] Image size: ${imageWidth}x${imageHeight}`);
  console.log(`[Info] Split points: ${splits.join(", ")}`);

  // 섹션별로 분할
  for (let i = 0; i < splits.length; i++) {
    const top = splits[i];
    const bottom = i < splits.length - 1 ? splits[i + 1] : imageHeight;
    const height = bottom - top;

    if (height <= 0) {
      console.warn(`[Warning] Skipping section ${i}: invalid height (${height})`);
      continue;
    }

    const outputPath = path.join(outputDir, `section-${i}.png`);

    try {
      await sharp(inputPath)
        .extract({ left: 0, top, width: imageWidth, height })
        .toFile(outputPath);

      console.log(`[Success] Section ${i}: ${outputPath} (${imageWidth}x${height})`);
    } catch (error) {
      console.error(`[Error] Failed to extract section ${i}:`, error);
    }
  }

  console.log(`\n[Done] Split ${splits.length} sections to ${outputDir}`);
}

// 실행
const options = parseArgs();
splitSections(options).catch(console.error);
