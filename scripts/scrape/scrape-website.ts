#!/usr/bin/env npx tsx
/**
 * 웹사이트 스크래핑 스크립트
 *
 * 사용 예시:
 *   npx tsx scripts/scrape/scrape-website.ts --url "https://example.com"
 *   npx tsx scripts/scrape/scrape-website.ts --url "https://example.com" --output-dir "./scraped/test"
 */

import puppeteer, { Page } from "puppeteer";
import * as fs from "fs";
import * as path from "path";
import { analyzeDOM } from "./html-analyzer";
import type {
  ScrapeOptions,
  ScrapeResult,
  DOMNode,
  DOMSection,
  ImageInfo,
  FontInfo,
  VideoInfo,
} from "./types";

const DEFAULT_VIEWPORT = { width: 1440, height: 900 };
const DEFAULT_MAX_HEIGHT = 5400; // 뷰포트 높이의 6배
const DEFAULT_WAIT_TIME = 3000;

/**
 * URL에서 도메인 추출 및 정리
 */
function extractDomain(url: string): string {
  try {
    const hostname = new URL(url).hostname;
    return hostname.replace(/^www\./, "").replace(/\./g, "-");
  } catch {
    return "unknown";
  }
}

/**
 * URL에서 파일 확장자 추출
 */
function getExtensionFromUrl(url: string): string {
  try {
    const pathname = new URL(url).pathname;
    const ext = path.extname(pathname).toLowerCase();
    return ext || ".png"; // 기본값
  } catch {
    return ".png";
  }
}

/**
 * 이미지 URL을 절대 경로로 변환
 */
function resolveUrl(baseUrl: string, relativeUrl: string): string {
  try {
    return new URL(relativeUrl, baseUrl).href;
  } catch {
    return relativeUrl;
  }
}

/**
 * 파일 다운로드
 */
async function downloadFile(
  url: string,
  outputPath: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      },
    });

    if (!response.ok) {
      return { success: false, error: `HTTP ${response.status}` };
    }

    const buffer = await response.arrayBuffer();
    fs.writeFileSync(outputPath, Buffer.from(buffer));
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

/**
 * 페이지에서 이미지 URL 추출
 */
async function extractImages(
  page: Page,
  baseUrl: string,
  sections: DOMSection[]
): Promise<Omit<ImageInfo, "localPath" | "downloaded" | "error">[]> {
  const rawImages = await page.evaluate(() => {
    const images: Array<{
      src: string;
      type: "img" | "background" | "svg";
      alt?: string;
      width?: number;
      height?: number;
      top: number;
    }> = [];

    // 1. <img> 태그
    document.querySelectorAll("img").forEach((img) => {
      const src = img.src || img.dataset.src || img.dataset.lazySrc;
      if (src && !src.startsWith("data:")) {
        const rect = img.getBoundingClientRect();
        images.push({
          src,
          type: "img",
          alt: img.alt || undefined,
          width: img.naturalWidth || img.width || undefined,
          height: img.naturalHeight || img.height || undefined,
          top: rect.top + window.scrollY,
        });
      }
    });

    // 2. <svg> 태그 (외부 소스)
    document.querySelectorAll("svg use, svg image").forEach((el) => {
      const href =
        el.getAttribute("href") ||
        el.getAttribute("xlink:href") ||
        (el as SVGImageElement).href?.baseVal;
      if (href && !href.startsWith("#") && !href.startsWith("data:")) {
        const rect = el.getBoundingClientRect();
        images.push({
          src: href,
          type: "svg",
          top: rect.top + window.scrollY,
        });
      }
    });

    // 3. CSS background-image
    const allElements = document.querySelectorAll("*");
    allElements.forEach((el) => {
      const style = window.getComputedStyle(el);
      const bgImage = style.backgroundImage;
      if (bgImage && bgImage !== "none") {
        const urlMatch = bgImage.match(/url\(["']?([^"')]+)["']?\)/);
        if (urlMatch && urlMatch[1] && !urlMatch[1].startsWith("data:")) {
          const rect = el.getBoundingClientRect();
          images.push({
            src: urlMatch[1],
            type: "background",
            top: rect.top + window.scrollY,
          });
        }
      }
    });

    // 4. <picture> 소스
    document.querySelectorAll("picture source").forEach((source) => {
      const srcset = source.getAttribute("srcset");
      if (srcset) {
        // srcset에서 첫 번째 URL 추출
        const firstUrl = srcset.split(",")[0].trim().split(" ")[0];
        if (firstUrl && !firstUrl.startsWith("data:")) {
          const rect = source.parentElement?.getBoundingClientRect();
          images.push({
            src: firstUrl,
            type: "img",
            top: (rect?.top || 0) + window.scrollY,
          });
        }
      }
    });

    return images;
  });

  // 중복 제거 및 절대 URL로 변환
  const uniqueUrls = new Set<string>();
  const result: Omit<ImageInfo, "localPath" | "downloaded" | "error">[] = [];

  for (const img of rawImages) {
    const absoluteUrl = resolveUrl(baseUrl, img.src);
    if (uniqueUrls.has(absoluteUrl)) continue;
    uniqueUrls.add(absoluteUrl);

    // 이미지가 속한 섹션 찾기
    let sectionIndex = -1;
    for (const section of sections) {
      if (
        img.top >= section.rect.top &&
        img.top < section.rect.top + section.rect.height
      ) {
        sectionIndex = section.index;
        break;
      }
    }

    result.push({
      originalUrl: absoluteUrl,
      type: img.type,
      sectionIndex,
      alt: img.alt,
      width: img.width,
      height: img.height,
    });
  }

  return result;
}

/**
 * 페이지에서 폰트 정보 추출
 */
async function extractFonts(
  page: Page,
  baseUrl: string
): Promise<Omit<FontInfo, "localPath" | "downloaded" | "error">[]> {
  const rawFonts = await page.evaluate(() => {
    const fonts: Array<{
      family: string;
      url?: string;
      source: "google-fonts" | "adobe-fonts" | "custom" | "system";
      weights: string[];
      styles: string[];
      format?: string;
    }> = [];

    const seenFamilies = new Set<string>();

    // 1. @font-face 규칙에서 추출
    for (let i = 0; i < document.styleSheets.length; i++) {
      const sheet = document.styleSheets[i];
      try {
        const rules = sheet.cssRules || sheet.rules;
        for (let j = 0; j < rules.length; j++) {
          const rule = rules[j];
          if (rule instanceof CSSFontFaceRule) {
            const family = rule.style
              .getPropertyValue("font-family")
              .replace(/['"]/g, "")
              .trim();
            const src = rule.style.getPropertyValue("src");
            const weight = rule.style.getPropertyValue("font-weight") || "400";
            const style =
              rule.style.getPropertyValue("font-style") || "normal";

            // URL 추출
            const urlMatch = src.match(/url\(["']?([^"')]+)["']?\)/);
            const formatMatch = src.match(/format\(["']?([^"')]+)["']?\)/);

            if (family && !seenFamilies.has(family)) {
              seenFamilies.add(family);

              let source: "google-fonts" | "adobe-fonts" | "custom" | "system" =
                "custom";
              const url = urlMatch?.[1];
              if (url) {
                if (url.includes("fonts.gstatic.com")) source = "google-fonts";
                else if (url.includes("use.typekit.net"))
                  source = "adobe-fonts";
              }

              fonts.push({
                family,
                url: url || undefined,
                source,
                weights: [weight],
                styles: [style],
                format: formatMatch?.[1],
              });
            } else if (family) {
              // 이미 존재하는 폰트에 weight/style 추가
              const existing = fonts.find((f) => f.family === family);
              if (existing) {
                if (!existing.weights.includes(weight))
                  existing.weights.push(weight);
                if (!existing.styles.includes(style))
                  existing.styles.push(style);
              }
            }
          }
        }
      } catch {
        // CORS 제한으로 접근 불가한 스타일시트 무시
      }
    }

    // 2. Google Fonts 링크에서 추출
    document.querySelectorAll('link[href*="fonts.googleapis.com"]').forEach((link) => {
      const href = link.getAttribute("href");
      if (href) {
        // family 파라미터 파싱
        const familyMatch = href.match(/family=([^&]+)/);
        if (familyMatch) {
          const families = familyMatch[1].split("|");
          for (const familyStr of families) {
            const [name, weights] = familyStr.split(":");
            const family = name.replace(/\+/g, " ");
            if (!seenFamilies.has(family)) {
              seenFamilies.add(family);
              fonts.push({
                family,
                url: href,
                source: "google-fonts",
                weights: weights ? weights.split(",") : ["400"],
                styles: ["normal"],
              });
            }
          }
        }
      }
    });

    // 3. Adobe Fonts (Typekit) 링크에서 추출
    document.querySelectorAll('link[href*="use.typekit.net"]').forEach((link) => {
      const href = link.getAttribute("href");
      if (href) {
        fonts.push({
          family: "Adobe Fonts Kit",
          url: href,
          source: "adobe-fonts",
          weights: ["400"],
          styles: ["normal"],
        });
      }
    });

    // 4. 사용 중인 시스템 폰트 감지
    const allElements = document.querySelectorAll("body, body *");
    const systemFonts = new Set<string>();
    allElements.forEach((el) => {
      const computed = window.getComputedStyle(el);
      const fontFamily = computed.fontFamily;
      if (fontFamily) {
        const families = fontFamily.split(",").map((f) => f.trim().replace(/['"]/g, ""));
        for (const family of families) {
          if (
            !seenFamilies.has(family) &&
            !systemFonts.has(family) &&
            !family.includes("var(")
          ) {
            systemFonts.add(family);
          }
        }
      }
    });

    // 시스템 폰트 추가 (일반적인 시스템 폰트 제외)
    const commonSystemFonts = [
      "serif",
      "sans-serif",
      "monospace",
      "cursive",
      "fantasy",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "Noto Sans",
      "Liberation Sans",
      "Helvetica",
    ];

    systemFonts.forEach((family) => {
      if (!commonSystemFonts.includes(family)) {
        fonts.push({
          family,
          source: "system",
          weights: ["400"],
          styles: ["normal"],
        });
      }
    });

    return fonts;
  });

  // URL을 절대 경로로 변환
  return rawFonts.map((font) => ({
    ...font,
    url: font.url ? resolveUrl(baseUrl, font.url) : undefined,
  }));
}

/**
 * YouTube video ID 추출
 */
function extractYouTubeVideoId(url: string): string | null {
  // youtube.com/embed/VIDEO_ID 형식
  const embedMatch = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) return embedMatch[1];

  // youtu.be/VIDEO_ID 형식
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return shortMatch[1];

  // youtube.com/watch?v=VIDEO_ID 형식
  const watchMatch = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch) return watchMatch[1];

  return null;
}

/**
 * 페이지에서 비디오 정보 추출
 */
async function extractVideos(
  page: Page,
  baseUrl: string,
  sections: DOMSection[]
): Promise<Omit<VideoInfo, "thumbnailPath" | "thumbnailDownloaded" | "error">[]> {
  const rawVideos = await page.evaluate(() => {
    const videos: Array<{
      src: string;
      platform: "youtube" | "html5";
      type: "iframe" | "video";
      embedCode?: string;
      posterUrl?: string;
      width?: number;
      height?: number;
      top: number;
    }> = [];

    // 1. YouTube iframe 추출
    document.querySelectorAll("iframe").forEach((iframe) => {
      const src = iframe.src || iframe.dataset.src;
      if (src && (src.includes("youtube.com/embed") || src.includes("youtu.be"))) {
        const rect = iframe.getBoundingClientRect();
        videos.push({
          src,
          platform: "youtube",
          type: "iframe",
          embedCode: iframe.outerHTML,
          width: iframe.width ? parseInt(iframe.width as unknown as string) : rect.width,
          height: iframe.height ? parseInt(iframe.height as unknown as string) : rect.height,
          top: rect.top + window.scrollY,
        });
      }
    });

    // 2. HTML5 video 태그 추출
    document.querySelectorAll("video").forEach((video) => {
      let src = video.src;

      // video에 직접 src가 없으면 source 태그에서 찾기
      if (!src) {
        const source = video.querySelector("source");
        if (source) {
          src = source.src || source.getAttribute("src") || "";
        }
      }

      if (src && !src.startsWith("data:")) {
        const rect = video.getBoundingClientRect();
        videos.push({
          src,
          platform: "html5",
          type: "video",
          posterUrl: video.poster || undefined,
          width: video.videoWidth || video.width || rect.width,
          height: video.videoHeight || video.height || rect.height,
          top: rect.top + window.scrollY,
        });
      }
    });

    return videos;
  });

  // 중복 제거 및 절대 URL로 변환
  const uniqueUrls = new Set<string>();
  const result: Omit<VideoInfo, "thumbnailPath" | "thumbnailDownloaded" | "error">[] = [];

  for (const video of rawVideos) {
    const absoluteUrl = resolveUrl(baseUrl, video.src);
    if (uniqueUrls.has(absoluteUrl)) continue;
    uniqueUrls.add(absoluteUrl);

    // 비디오가 속한 섹션 찾기
    let sectionIndex = -1;
    for (const section of sections) {
      if (
        video.top >= section.rect.top &&
        video.top < section.rect.top + section.rect.height
      ) {
        sectionIndex = section.index;
        break;
      }
    }

    // YouTube 썸네일 URL 생성
    let posterUrl = video.posterUrl ? resolveUrl(baseUrl, video.posterUrl) : undefined;
    let videoId: string | undefined;

    if (video.platform === "youtube") {
      videoId = extractYouTubeVideoId(absoluteUrl) || undefined;
      if (videoId && !posterUrl) {
        // YouTube 고품질 썸네일 URL
        posterUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      }
    }

    result.push({
      originalUrl: absoluteUrl,
      platform: video.platform,
      type: video.type,
      videoId,
      embedCode: video.embedCode,
      posterUrl,
      sectionIndex,
      width: video.width,
      height: video.height,
    });
  }

  return result;
}

/**
 * 비디오 썸네일 다운로드
 */
async function downloadVideoThumbnails(
  videos: Omit<VideoInfo, "thumbnailPath" | "thumbnailDownloaded" | "error">[],
  outputDir: string
): Promise<VideoInfo[]> {
  const videosDir = path.join(outputDir, "videos");
  fs.mkdirSync(videosDir, { recursive: true });

  const results: VideoInfo[] = [];

  for (let i = 0; i < videos.length; i++) {
    const video = videos[i];

    // 썸네일 URL이 없으면 스킵
    if (!video.posterUrl) {
      results.push({
        ...video,
        thumbnailDownloaded: false,
      } as VideoInfo);
      continue;
    }

    const ext = getExtensionFromUrl(video.posterUrl);
    const filename = `thumb-${i}${ext}`;
    const localPath = `videos/${filename}`;
    const fullPath = path.join(outputDir, localPath);

    const { success, error } = await downloadFile(video.posterUrl, fullPath);

    results.push({
      ...video,
      thumbnailPath: success ? localPath : undefined,
      thumbnailDownloaded: success,
      error,
    } as VideoInfo);

    if (success) {
      console.log(`    ✓ ${filename} (${video.platform})`);
    } else {
      console.log(`    ✗ ${filename}: ${error}`);
    }
  }

  return results;
}

/**
 * 이미지 다운로드
 */
async function downloadImages(
  images: Omit<ImageInfo, "localPath" | "downloaded" | "error">[],
  outputDir: string
): Promise<ImageInfo[]> {
  const imagesDir = path.join(outputDir, "images");
  fs.mkdirSync(imagesDir, { recursive: true });

  const results: ImageInfo[] = [];

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const ext = getExtensionFromUrl(img.originalUrl);
    const filename = `image-${i}${ext}`;
    const localPath = `images/${filename}`;
    const fullPath = path.join(outputDir, localPath);

    const { success, error } = await downloadFile(img.originalUrl, fullPath);

    results.push({
      ...img,
      localPath: success ? localPath : undefined,
      downloaded: success,
      error,
    } as ImageInfo);

    if (success) {
      console.log(`    ✓ ${filename}`);
    } else {
      console.log(`    ✗ ${filename}: ${error}`);
    }
  }

  return results;
}

/**
 * 폰트 다운로드 (웹폰트만)
 */
async function downloadFonts(
  fonts: Omit<FontInfo, "localPath" | "downloaded" | "error">[],
  outputDir: string
): Promise<FontInfo[]> {
  const fontsDir = path.join(outputDir, "fonts");
  fs.mkdirSync(fontsDir, { recursive: true });

  const results: FontInfo[] = [];

  for (const font of fonts) {
    // 시스템 폰트나 URL이 없는 경우 스킵
    if (font.source === "system" || !font.url) {
      results.push({
        ...font,
        downloaded: false,
      } as FontInfo);
      continue;
    }

    // Google Fonts나 Adobe Fonts는 CSS URL이므로 직접 다운로드하지 않음
    if (font.source === "google-fonts" || font.source === "adobe-fonts") {
      results.push({
        ...font,
        downloaded: false, // CSS 링크만 저장
      } as FontInfo);
      console.log(`    ℹ ${font.family} (${font.source} - CSS link saved)`);
      continue;
    }

    // 커스텀 폰트 파일 다운로드
    const ext = font.format
      ? `.${font.format}`
      : getExtensionFromUrl(font.url);
    const safeName = font.family.replace(/[^a-zA-Z0-9]/g, "-");
    const filename = `${safeName}${ext}`;
    const localPath = `fonts/${filename}`;
    const fullPath = path.join(outputDir, localPath);

    const { success, error } = await downloadFile(font.url, fullPath);

    results.push({
      ...font,
      localPath: success ? localPath : undefined,
      downloaded: success,
      error,
    } as FontInfo);

    if (success) {
      console.log(`    ✓ ${filename}`);
    } else {
      console.log(`    ✗ ${filename}: ${error}`);
    }
  }

  return results;
}

/**
 * 웹사이트 스크래핑 실행
 */
export async function scrapeWebsite(
  options: ScrapeOptions
): Promise<ScrapeResult> {
  const {
    url,
    maxHeight = DEFAULT_MAX_HEIGHT,
    waitTime = DEFAULT_WAIT_TIME,
    viewport = DEFAULT_VIEWPORT,
  } = options;

  // 도메인 추출 및 출력 디렉토리 생성
  const domain = extractDomain(url);
  const timestamp = new Date().toISOString().split("T")[0];
  const outputDir =
    options.outputDir ||
    path.join(process.cwd(), `public/scraped/${domain}-${timestamp}`);

  // 디렉토리 생성
  fs.mkdirSync(outputDir, { recursive: true });
  fs.mkdirSync(path.join(outputDir, "sections"), { recursive: true });

  console.log(`\n[Scraping] ${url}`);
  console.log(`[Output] ${outputDir}\n`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", `--window-size=${viewport.width},${viewport.height}`],
    defaultViewport: viewport,
  });

  try {
    const page = await browser.newPage();

    // 페이지 로드
    console.log("[1/8] Loading page...");
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
    await new Promise((r) => setTimeout(r, waitTime));

    // 페이지 타이틀 추출
    const pageTitle = await page.title();

    // 전체 페이지 높이 측정
    const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
    const captureHeight = Math.min(bodyHeight, maxHeight);

    console.log(`[2/8] Taking full page screenshot (height: ${captureHeight}px)...`);

    // 전체 페이지 스크린샷
    await page.setViewport({ width: viewport.width, height: captureHeight });
    await page.screenshot({
      path: path.join(outputDir, "full-page.png"),
      fullPage: true,
    });

    // HTML 추출
    console.log("[3/8] Extracting HTML...");
    const html = await page.content();
    fs.writeFileSync(path.join(outputDir, "page.html"), html);

    // Computed CSS 추출 (주요 요소들)
    console.log("[4/8] Extracting computed styles...");
    const styles = await page.evaluate(() => {
      const elements = document.querySelectorAll(
        "header, main, section, footer, nav, [class*='hero'], [class*='pricing'], [class*='footer']"
      );
      const stylesMap: Record<string, Record<string, string>> = {};

      elements.forEach((el) => {
        const computed = window.getComputedStyle(el);
        const tagName = el.tagName.toLowerCase();
        const id = (el as HTMLElement).id;
        const className = (el as HTMLElement).className;
        const selector =
          tagName +
          (id ? `#${id}` : "") +
          (className && typeof className === "string"
            ? `.${className.split(" ")[0]}`
            : "");

        stylesMap[selector] = {
          backgroundColor: computed.backgroundColor,
          color: computed.color,
          fontFamily: computed.fontFamily,
          fontSize: computed.fontSize,
          padding: computed.padding,
          margin: computed.margin,
        };
      });

      return stylesMap;
    });
    fs.writeFileSync(
      path.join(outputDir, "styles.json"),
      JSON.stringify(styles, null, 2)
    );

    // DOM 구조 분석
    console.log("[5/8] Analyzing DOM structure...");
    let domTree: DOMNode;
    try {
      // Use page.evaluate with string to avoid TypeScript compilation issues
      domTree = await page.evaluate(`
        (function() {
          function getElementInfo(el) {
            var rect = el.getBoundingClientRect();
            return {
              tag: el.tagName.toLowerCase(),
              id: el.id || null,
              className: typeof el.className === "string" ? el.className : null,
              rect: {
                top: rect.top + window.scrollY,
                left: rect.left,
                width: rect.width,
                height: rect.height
              },
              children: Array.from(el.children)
                .filter(function(c) { return c.getBoundingClientRect().height > 50; })
                .map(getElementInfo)
            };
          }
          return getElementInfo(document.body);
        })()
      `) as DOMNode;
    } catch (domError) {
      console.error("[5/8] DOM analysis error:", domError);
      throw domError;
    }
    fs.writeFileSync(
      path.join(outputDir, "dom-tree.json"),
      JSON.stringify(domTree, null, 2)
    );

    // 섹션 분할
    console.log("[5.5/8] Running section analysis...");
    let sections: DOMSection[];
    try {
      sections = analyzeDOM(domTree);
    } catch (analyzeError) {
      console.error("[5.5/8] Section analysis error:", analyzeError);
      throw analyzeError;
    }
    fs.writeFileSync(
      path.join(outputDir, "sections.json"),
      JSON.stringify(sections, null, 2)
    );

    console.log(`[6/8] Capturing ${sections.length} section screenshots...`);

    // 섹션별 스크린샷
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      console.log(
        `  - Section ${i}: ${section.category || "unknown"} (${Math.round(section.rect.height)}px)`
      );

      // 해당 섹션으로 스크롤
      await page.evaluate((top: number) => {
        window.scrollTo(0, top);
      }, section.rect.top);

      await new Promise((r) => setTimeout(r, 500));

      // 섹션 스크린샷
      try {
        await page.screenshot({
          path: path.join(outputDir, "sections", `section-${i}.png`),
          clip: {
            x: 0,
            y: section.rect.top,
            width: viewport.width,
            height: Math.ceil(section.rect.height),
          },
        });
      } catch (e) {
        console.warn(`    Warning: Failed to capture section ${i}`);
      }

      // 섹션 HTML snippet 저장
      const snippet = await page.evaluate((selector: string) => {
        const el = document.querySelector(selector);
        return el ? el.outerHTML : "";
      }, section.selector);

      if (snippet) {
        fs.writeFileSync(
          path.join(outputDir, "sections", `section-${i}.html`),
          snippet
        );
      }
    }

    // 이미지 추출 및 다운로드
    console.log("[7/8] Extracting and downloading images...");
    const rawImages = await extractImages(page, url, sections);
    console.log(`  Found ${rawImages.length} images`);
    const images = await downloadImages(rawImages, outputDir);
    fs.writeFileSync(
      path.join(outputDir, "images.json"),
      JSON.stringify(images, null, 2)
    );

    // 폰트 추출 및 다운로드
    console.log("[8/9] Extracting and downloading fonts...");
    const rawFonts = await extractFonts(page, url);
    console.log(`  Found ${rawFonts.length} fonts`);
    const fonts = await downloadFonts(rawFonts, outputDir);
    fs.writeFileSync(
      path.join(outputDir, "fonts.json"),
      JSON.stringify(fonts, null, 2)
    );

    // 비디오 추출 및 썸네일 다운로드
    console.log("[9/9] Extracting videos and downloading thumbnails...");
    const rawVideos = await extractVideos(page, url, sections);
    console.log(`  Found ${rawVideos.length} videos`);
    const videos = await downloadVideoThumbnails(rawVideos, outputDir);
    fs.writeFileSync(
      path.join(outputDir, "videos.json"),
      JSON.stringify(videos, null, 2)
    );

    await browser.close();

    // 통계 계산
    const imageStats = {
      total: images.length,
      downloaded: images.filter((i) => i.downloaded).length,
      failed: images.filter((i) => !i.downloaded).length,
    };
    const fontStats = {
      total: fonts.length,
      downloaded: fonts.filter((f) => f.downloaded).length,
      failed: fonts.filter((f) => !f.downloaded && f.source === "custom").length,
    };
    const videoStats = {
      total: videos.length,
      thumbnailsDownloaded: videos.filter((v) => v.thumbnailDownloaded).length,
      failed: videos.filter((v) => v.posterUrl && !v.thumbnailDownloaded).length,
    };

    const result: ScrapeResult = {
      success: true,
      outputDir,
      sections,
      images,
      fonts,
      videos,
      metadata: {
        url,
        domain,
        timestamp: new Date().toISOString(),
        pageTitle,
        totalHeight: bodyHeight,
        imageStats,
        fontStats,
        videoStats,
      },
    };

    // 메타데이터 저장
    fs.writeFileSync(
      path.join(outputDir, "metadata.json"),
      JSON.stringify(result.metadata, null, 2)
    );

    console.log(`\n[Success] Scraped ${sections.length} sections, ${imageStats.downloaded}/${imageStats.total} images, ${fontStats.total} fonts, ${videoStats.total} videos`);
    console.log(`[Output] ${outputDir}\n`);

    return result;
  } catch (error) {
    await browser.close();
    return {
      success: false,
      outputDir,
      sections: [],
      images: [],
      fonts: [],
      videos: [],
      metadata: {
        url,
        domain,
        timestamp: new Date().toISOString(),
        pageTitle: "",
        totalHeight: 0,
        imageStats: { total: 0, downloaded: 0, failed: 0 },
        fontStats: { total: 0, downloaded: 0, failed: 0 },
        videoStats: { total: 0, thumbnailsDownloaded: 0, failed: 0 },
      },
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

// CLI
async function main() {
  const args = process.argv.slice(2);

  const urlIndex = args.indexOf("--url");
  const outputIndex = args.indexOf("--output-dir");

  if (urlIndex === -1 || !args[urlIndex + 1]) {
    console.error(
      "Usage: npx tsx scripts/scrape/scrape-website.ts --url <URL> [--output-dir <DIR>]"
    );
    console.error("\nOptions:");
    console.error("  --url         Target URL to scrape (required)");
    console.error("  --output-dir  Custom output directory (optional)");
    process.exit(1);
  }

  const url = args[urlIndex + 1];
  const outputDir = outputIndex !== -1 ? args[outputIndex + 1] : undefined;

  const result = await scrapeWebsite({ url, outputDir });

  if (!result.success) {
    console.error(`\n[Error] Scraping failed: ${result.error}`);
    process.exit(1);
  }

  // 결과 출력
  console.log("Generated files:");
  console.log(`  - ${result.outputDir}/full-page.png`);
  console.log(`  - ${result.outputDir}/page.html`);
  console.log(`  - ${result.outputDir}/styles.json`);
  console.log(`  - ${result.outputDir}/dom-tree.json`);
  console.log(`  - ${result.outputDir}/sections.json`);
  console.log(`  - ${result.outputDir}/images.json`);
  console.log(`  - ${result.outputDir}/fonts.json`);
  console.log(`  - ${result.outputDir}/videos.json`);
  console.log(`  - ${result.outputDir}/metadata.json`);
  console.log(`  - ${result.outputDir}/sections/section-*.png`);
  console.log(`  - ${result.outputDir}/sections/section-*.html`);
  console.log(`  - ${result.outputDir}/images/*`);
  console.log(`  - ${result.outputDir}/fonts/*`);
  console.log(`  - ${result.outputDir}/videos/*`);
}

main().catch(console.error);
