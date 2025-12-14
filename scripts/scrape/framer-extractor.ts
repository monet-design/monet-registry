/**
 * Framer 사이트 감지 및 데이터 추출 모듈
 *
 * 커스텀 도메인에서도 동작하도록 HTML 내부 속성 기반으로 Framer 사이트를 감지하고,
 * data-framer-* 속성에서 레이어 정보와 애니메이션 패턴을 추출합니다.
 */

import type { Page } from "puppeteer";
import type {
  FramerElementInfo,
  FramerAnimationPattern,
  FramerInfo,
} from "./types";

/**
 * Framer 사이트 감지
 * 커스텀 도메인에서도 동작하도록 HTML 내부 속성 기반 감지
 */
export async function isFramerSite(page: Page): Promise<boolean> {
  return await page.evaluate(() => {
    // 1. Framer 스크립트 확인
    const hasFramerScript =
      document.querySelector('script[src*="framer.com"]') !== null ||
      document.querySelector('script[src*="framerusercontent.com"]') !== null;

    // 2. Generator 메타 태그 확인
    const generator = document.querySelector('meta[name="generator"]');
    const hasFramerMeta =
      generator?.getAttribute("content")?.includes("Framer") ?? false;

    // 3. data-framer-* 속성 확인 (가장 확실한 방법)
    const hasFramerAttributes =
      document.querySelector("[data-framer-name]") !== null ||
      document.querySelector("[data-framer-appear-id]") !== null ||
      document.querySelector("[data-framer-component-type]") !== null;

    // 4. Framer 스타일시트 확인
    let hasFramerStyles = false;
    try {
      hasFramerStyles = Array.from(document.styleSheets).some(
        (sheet) =>
          sheet.href?.includes("framer") ||
          sheet.href?.includes("framerusercontent")
      );
    } catch {
      // CORS로 인해 스타일시트 접근 불가능한 경우 무시
    }

    // 5. Framer CSS 변수 확인
    const hasFramerCssVars =
      getComputedStyle(document.documentElement).getPropertyValue(
        "--framer-aspect-ratio-supported"
      ) !== "";

    return (
      hasFramerScript ||
      hasFramerMeta ||
      hasFramerAttributes ||
      hasFramerStyles ||
      hasFramerCssVars
    );
  });
}

/**
 * data-framer-* 속성 추출
 */
export async function extractFramerElements(
  page: Page
): Promise<FramerElementInfo[]> {
  return await page.evaluate(() => {
    const elements: FramerElementInfo[] = [];
    const framerElements = document.querySelectorAll(
      "[data-framer-name], [data-framer-appear-id], [data-framer-component-type]"
    );

    framerElements.forEach((el, idx) => {
      const computed = getComputedStyle(el);
      const framerName = el.getAttribute("data-framer-name");
      const framerAppearId = el.getAttribute("data-framer-appear-id");

      // 고유 선택자 생성
      let selector = `[data-framer-appear-id="${framerAppearId}"]`;
      if (!framerAppearId) {
        selector = framerName
          ? `[data-framer-name="${framerName}"]`
          : `framer-el-${idx}`;
      }

      elements.push({
        selector,
        framerName: framerName || undefined,
        framerAppearId: framerAppearId || undefined,
        framerComponentType:
          el.getAttribute("data-framer-component-type") || undefined,
        initialTransform:
          computed.transform !== "none" ? computed.transform : undefined,
        initialOpacity: computed.opacity !== "1" ? computed.opacity : undefined,
        transition:
          computed.transition !== "all 0s ease 0s"
            ? computed.transition
            : undefined,
        animation:
          computed.animationName !== "none" ? computed.animation : undefined,
      });
    });

    return elements;
  });
}

/**
 * 애니메이션 패턴 분석
 */
export function analyzeAnimationPatterns(
  elements: FramerElementInfo[]
): FramerAnimationPattern[] {
  const patterns: FramerAnimationPattern[] = [];

  for (const el of elements) {
    if (!el.initialTransform && !el.initialOpacity) continue;

    const pattern = detectPattern(el);
    if (pattern) {
      patterns.push({
        ...pattern,
        target: el.framerName || el.selector,
      });
    }
  }

  return patterns;
}

function detectPattern(
  el: FramerElementInfo
): Omit<FramerAnimationPattern, "target"> | null {
  const initial: Record<string, number | string> = {};
  const animate: Record<string, number | string> = {};

  // Opacity 분석
  if (el.initialOpacity && parseFloat(el.initialOpacity) < 1) {
    initial.opacity = parseFloat(el.initialOpacity);
    animate.opacity = 1;
  }

  // Transform 분석
  if (el.initialTransform) {
    const translateY = el.initialTransform.match(/translateY\(([^)]+)\)/);
    const translateX = el.initialTransform.match(/translateX\(([^)]+)\)/);
    const scale = el.initialTransform.match(/scale\(([^)]+)\)/);

    if (translateY) {
      initial.y = parseFloat(translateY[1]);
      animate.y = 0;
    }
    if (translateX) {
      initial.x = parseFloat(translateX[1]);
      animate.x = 0;
    }
    if (scale) {
      initial.scale = parseFloat(scale[1]);
      animate.scale = 1;
    }
  }

  if (Object.keys(initial).length === 0) return null;

  // 패턴 타입 결정
  let type: FramerAnimationPattern["type"] = "fade-in";
  if ("y" in initial && "opacity" in initial) type = "fade-up";
  else if ("x" in initial) type = "slide-in";
  else if ("scale" in initial) type = "scale-in";

  // Transition 파싱
  const transition = parseTransition(el.transition);

  return { type, initial, animate, transition };
}

function parseTransition(
  transitionStr?: string
): FramerAnimationPattern["transition"] {
  if (!transitionStr) {
    return { duration: 0.5, ease: "easeOut" };
  }

  // "opacity 0.3s ease-out 0.1s" 형식 파싱
  const parts = transitionStr.split(" ");
  return {
    duration: parseFloat(parts[1]) || 0.5,
    ease: parts[2]?.replace(/-/g, "") || "easeOut",
    delay: parts[3] ? parseFloat(parts[3]) : undefined,
  };
}

/**
 * Framer CSS 변수 추출
 */
export async function extractFramerCssVariables(
  page: Page
): Promise<Record<string, string>> {
  return await page.evaluate(() => {
    const variables: Record<string, string> = {};
    const computed = getComputedStyle(document.documentElement);

    // 주요 Framer CSS 변수들
    const framerVarNames = [
      "--framer-aspect-ratio-supported",
      "--framer-link-text-color",
      "--framer-link-text-decoration",
      "--framer-paragraph-spacing",
    ];

    for (const name of framerVarNames) {
      const value = computed.getPropertyValue(name).trim();
      if (value) {
        variables[name] = value;
      }
    }

    return variables;
  });
}

/**
 * Framer 레이어명 → 카테고리 매핑
 */
export function inferCategoryFromFramerName(framerName: string): string | null {
  const nameMap: Record<string, string> = {
    hero: "hero",
    navigation: "header",
    nav: "header",
    navbar: "header",
    header: "header",
    footer: "footer",
    pricing: "pricing",
    feature: "feature",
    features: "feature",
    testimonial: "testimonial",
    testimonials: "testimonial",
    faq: "faq",
    cta: "cta",
    contact: "contact",
    stats: "stats",
    logos: "logo-cloud",
    partners: "logo-cloud",
    clients: "logo-cloud",
    team: "team",
    about: "biography",
    "how-it-works": "how-it-works",
    process: "how-it-works",
    steps: "how-it-works",
  };

  const lowerName = framerName.toLowerCase();
  for (const [key, category] of Object.entries(nameMap)) {
    if (lowerName.includes(key)) {
      return category;
    }
  }

  return null;
}

/**
 * 전체 Framer 데이터 추출
 */
export async function extractFramerSiteData(page: Page): Promise<FramerInfo> {
  const isFramer = await isFramerSite(page);

  if (!isFramer) {
    return {
      isFramerSite: false,
      elements: [],
      animations: [],
      cssVariables: {},
    };
  }

  const elements = await extractFramerElements(page);
  const animations = analyzeAnimationPatterns(elements);
  const cssVariables = await extractFramerCssVariables(page);

  return {
    isFramerSite: true,
    elements,
    animations,
    cssVariables,
  };
}
