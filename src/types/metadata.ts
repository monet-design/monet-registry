import { z } from "zod/v4";
import {
  ComponentCategory,
  ComponentStatus,
  FunctionalTags,
  StyleTags,
  LayoutTags,
  IndustryTags,
} from "./categories";

/**
 * 컴포넌트 메타데이터 Zod 스키마 v2.0
 */
export const MetadataSchema = z.object({
  // 필수 필드
  schemaVersion: z.literal("2.0"),
  name: z
    .string()
    .regex(/^[a-z0-9-]+$/, "name은 kebab-case 형식이어야 합니다"),
  category: z.enum(ComponentCategory),

  images: z.object({
    preview: z.string().min(1, "preview 이미지 경로는 필수입니다"),
    thumbnail: z.string().optional(),
  }),

  // 선택 필드
  title: z.string().optional(),

  description: z
    .object({
      short: z.string().max(150, "short description은 150자 이내여야 합니다"),
      detailed: z.string().optional(),
    })
    .optional(),

  tags: z
    .object({
      functional: z.array(z.enum(FunctionalTags)).optional(),
      style: z.array(z.enum(StyleTags)).optional(),
      layout: z.array(z.enum(LayoutTags)).optional(),
      industry: z.array(z.enum(IndustryTags)).optional(),
    })
    .optional(),

  // 자유 형식 키워드 (enum에 없는 것들)
  freeformKeywords: z.array(z.string()).optional(),

  useCases: z.array(z.string()).optional(),

  fontFamily: z.array(z.string()).optional(),

  dependencies: z.array(z.string()).optional(),

  source: z
    .object({
      name: z.string(),
      url: z.string().url().optional(),
    })
    .optional(),

  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),

  status: z.enum(ComponentStatus).default("stable"),
  language: z.enum(["en", "ko"]).default("en"),
});

export type ComponentMetadata = z.infer<typeof MetadataSchema>;

/**
 * 레거시 메타데이터 스키마 (기존 const.ts 형식)
 */
export const LegacyMetadataSchema = z.object({
  imagePath: z.string(),
  name: z.string(),
  keywords: z.array(z.string()),
  fontFamily: z.array(z.string()),
});

export type LegacyMetadata = z.infer<typeof LegacyMetadataSchema>;

/**
 * 레거시 메타데이터를 새 형식으로 변환할 때 사용하는 부분 스키마
 * (마이그레이션 스크립트에서 사용)
 */
export const PartialMetadataSchema = MetadataSchema.partial().extend({
  schemaVersion: z.literal("2.0"),
  name: z.string(),
  category: z.enum(ComponentCategory),
  images: z.object({
    preview: z.string(),
    thumbnail: z.string().optional(),
  }),
});

export type PartialMetadata = z.infer<typeof PartialMetadataSchema>;

/**
 * Source 정보 스키마 (URL 스크래핑 시 사용)
 */
export const SourceSchema = z.object({
  type: z.enum(["url", "image", "manual"]),
  url: z.string().url().optional(),
  scrapedAt: z.string().optional(),
  sectionIndex: z.number().optional(),
  pageTitle: z.string().optional(),
});

export type Source = z.infer<typeof SourceSchema>;

/**
 * Section 메타데이터 확장 스키마 (URL 스크래핑 시 추가 필드)
 */
export const SectionMetadataSchema = MetadataSchema.extend({
  parentPage: z.string().optional(), // 부모 page 컴포넌트 ID
  source: SourceSchema.optional(),
});

export type SectionMetadata = z.infer<typeof SectionMetadataSchema>;

/**
 * Page 메타데이터 스키마 (전체 페이지 컴포넌트용)
 */
export const PageMetadataSchema = z.object({
  schemaVersion: z.literal("2.0"),
  name: z
    .string()
    .regex(/^[a-z0-9-]+$/, "name은 kebab-case 형식이어야 합니다"),
  category: z.literal("page"),

  images: z.object({
    preview: z.string().min(1, "preview 이미지 경로는 필수입니다"),
    thumbnail: z.string().optional(),
  }),

  title: z.string().optional(),

  description: z
    .object({
      short: z.string().max(150, "short description은 150자 이내여야 합니다"),
      detailed: z.string().optional(),
    })
    .optional(),

  // Page 전용: 포함된 섹션들
  sections: z.array(
    z.object({
      id: z.string(),
      category: z.string(),
      order: z.number(),
    })
  ),

  // Source 정보 (필수)
  source: SourceSchema,

  // 페이지 정보
  pageInfo: z
    .object({
      totalSections: z.number(),
      estimatedHeight: z.number().optional(),
      primaryColors: z.array(z.string()).optional(),
      typography: z
        .object({
          headingFont: z.string().optional(),
          bodyFont: z.string().optional(),
        })
        .optional(),
    })
    .optional(),

  // 공통 필드
  tags: z
    .object({
      style: z.array(z.enum(StyleTags)).optional(),
      industry: z.array(z.enum(IndustryTags)).optional(),
    })
    .optional(),

  freeformKeywords: z.array(z.string()).optional(),
  fontFamily: z.array(z.string()).optional(),

  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  status: z.enum(ComponentStatus).default("stable"),
  language: z.enum(["en", "ko"]).default("en"),
});

export type PageMetadata = z.infer<typeof PageMetadataSchema>;
