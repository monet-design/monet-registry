/**
 * 스크래핑 관련 타입 정의
 */

export interface DOMNode {
  tag: string;
  id: string | null;
  className: string | null;
  rect: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
  children: DOMNode[];
}

export interface ImageInfo {
  /** 원본 URL (절대 경로) */
  originalUrl: string;
  /** 로컬 저장 경로 (outputDir 기준 상대 경로) */
  localPath: string;
  /** 이미지 타입 (img, background, svg) */
  type: "img" | "background" | "svg";
  /** 이미지가 속한 섹션 인덱스 (-1이면 전역) */
  sectionIndex: number;
  /** 이미지 alt 텍스트 (있는 경우) */
  alt?: string;
  /** 원본 너비 (추출 가능한 경우) */
  width?: number;
  /** 원본 높이 (추출 가능한 경우) */
  height?: number;
  /** 다운로드 성공 여부 */
  downloaded: boolean;
  /** 다운로드 실패 시 에러 메시지 */
  error?: string;
}

export interface FontInfo {
  /** 폰트 패밀리 이름 */
  family: string;
  /** 폰트 파일 URL (웹폰트인 경우) */
  url?: string;
  /** 로컬 저장 경로 (다운로드된 경우) */
  localPath?: string;
  /** 폰트 소스 타입 */
  source: "google-fonts" | "adobe-fonts" | "custom" | "system";
  /** 폰트 weight 목록 */
  weights: string[];
  /** 폰트 스타일 (normal, italic) */
  styles: string[];
  /** 폰트 포맷 (woff2, woff, ttf, otf) */
  format?: string;
  /** 다운로드 성공 여부 */
  downloaded: boolean;
  /** 다운로드 실패 시 에러 메시지 */
  error?: string;
}

export interface DOMSection {
  index: number;
  tag: string;
  selector: string;
  category: string | null; // 추론된 카테고리
  rect: {
    top: number;
    height: number;
  };
  confidence: number; // 분할 신뢰도 (0-1)
}

export interface ScrapeOptions {
  url: string;
  outputDir?: string;
  maxHeight?: number; // 최대 캡처 높이 (기본: 뷰포트 * 5)
  waitTime?: number; // 페이지 로드 후 대기 시간 (ms)
  viewport?: {
    width: number;
    height: number;
  };
}

export interface ScrapeResult {
  success: boolean;
  outputDir: string;
  sections: DOMSection[];
  images: ImageInfo[];
  fonts: FontInfo[];
  metadata: {
    url: string;
    domain: string;
    timestamp: string;
    pageTitle: string;
    totalHeight: number;
    imageStats: {
      total: number;
      downloaded: number;
      failed: number;
    };
    fontStats: {
      total: number;
      downloaded: number;
      failed: number;
    };
  };
  error?: string;
}

export interface SectionAdjustment {
  type: "merge" | "split" | "recategorize";
  indices: number[];
  newCategory?: string;
  splitAt?: number; // split인 경우, 분할 위치 (y좌표)
}

export interface ComputedStyles {
  [selector: string]: {
    backgroundColor: string;
    color: string;
    fontFamily: string;
    fontSize: string;
    padding: string;
    margin: string;
  };
}

// 카테고리 추론용 힌트
export const CATEGORY_HINTS: Record<string, string[]> = {
  header: ["header", "nav", "navigation", "navbar", "top-bar", "topbar"],
  hero: [
    "hero",
    "banner",
    "jumbotron",
    "splash",
    "intro",
    "landing",
    "masthead",
  ],
  feature: [
    "feature",
    "benefit",
    "service",
    "capability",
    "what-we-do",
    "services",
  ],
  pricing: ["pricing", "price", "plan", "subscription", "tier", "plans"],
  testimonial: [
    "testimonial",
    "review",
    "customer",
    "quote",
    "feedback",
    "reviews",
  ],
  cta: [
    "cta",
    "call-to-action",
    "get-started",
    "signup",
    "register",
    "action",
  ],
  footer: ["footer", "bottom", "copyright", "site-footer"],
  faq: ["faq", "question", "accordion", "faqs", "questions"],
  contact: ["contact", "reach", "form", "get-in-touch"],
  team: ["team", "people", "member", "staff", "about-us"],
  stats: ["stats", "statistic", "number", "metric", "counter", "numbers"],
  "logo-cloud": ["logo", "partner", "client", "brand", "trust", "logos"],
  "how-it-works": ["how-it-works", "process", "steps", "workflow"],
};

// 시맨틱 태그 우선순위
export const SEMANTIC_PRIORITY = [
  "header",
  "nav",
  "main",
  "section",
  "article",
  "aside",
  "footer",
];
