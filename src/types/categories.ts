/**
 * 컴포넌트 카테고리 및 태그 정의
 */

// 1차 카테고리 (단일 필수)
export const ComponentCategory = [
  "hero",
  "stats",
  "testimonial",
  "feature",
  "pricing",
  "cta",
  "contact",
  "faq",
  "how-it-works",
  "biography",
  "before-after",
  "feature-showcase",
  "header",
  "footer",
  "gallery",
  "team",
  "logo-cloud",
  "newsletter",
  "waitlist",
  "page", // Full page component (collection of sections)
  "other",
] as const;

export type ComponentCategory = (typeof ComponentCategory)[number];

// 기능 태그 (인터랙션/동작)
export const FunctionalTags = [
  "carousel",
  "slider",
  "tabs",
  "accordion",
  "modal",
  "dropdown",
  "toggle",
  "counter",
  "progress",
  "animation",
  "hover-effect",
  "scroll-animation",
  "auto-play",
  "email-capture",
  "lead-capture",
  "newsletter",
  "contact-form",
  "search",
  "filter",
  "pagination",
  "infinite-scroll",
  "drag-drop",
  "video",
  "audio",
  "map",
] as const;

export type FunctionalTag = (typeof FunctionalTags)[number];

// 스타일 태그 (시각적 스타일)
export const StyleTags = [
  "dark-theme",
  "light-theme",
  "minimal",
  "modern",
  "retro",
  "elegant",
  "playful",
  "corporate",
  "bold",
  "gradient",
  "glassmorphism",
  "neumorphism",
  "glow",
  "shadow",
  "blur",
  "monochrome",
  "colorful",
  "neon",
  "pastel",
  "serif",
  "sans-serif",
  "handwritten",
] as const;

export type StyleTag = (typeof StyleTags)[number];

// 레이아웃 태그 (구조/배치)
export const LayoutTags = [
  "single-column",
  "two-column",
  "three-column",
  "four-column",
  "centered",
  "left-aligned",
  "right-aligned",
  "split-layout",
  "card-grid",
  "masonry",
  "bento",
  "stack",
  "inline",
  "full-width",
  "contained",
  "asymmetric",
  "responsive",
  "mobile-first",
] as const;

export type LayoutTag = (typeof LayoutTags)[number];

// 산업/용도 태그
export const IndustryTags = [
  "saas",
  "fintech",
  "e-commerce",
  "healthcare",
  "education",
  "creative",
  "portfolio",
  "agency",
  "startup",
  "enterprise",
  "personal",
  "blog",
  "news",
  "social",
  "gaming",
  "real-estate",
  "travel",
  "food",
  "fashion",
  "music",
  "ai",
  "crypto",
  "nft",
] as const;

export type IndustryTag = (typeof IndustryTags)[number];

// 컴포넌트 상태
export const ComponentStatus = ["draft", "stable", "deprecated"] as const;

export type ComponentStatus = (typeof ComponentStatus)[number];
