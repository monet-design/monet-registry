"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#0a0a0a",
  text: {
    primary: "#ffffff",
    secondary: "rgb(222, 216, 211)",
    muted: "rgb(128, 128, 128)",
  },
  button: {
    bg: "#ffffff",
    text: "rgb(30, 30, 30)",
  },
  badge: {
    border: "rgba(255, 255, 255, 0.1)",
  },
  featureBorder: "rgba(255, 255, 255, 0.1)",
  tags: {
    red: "rgb(255, 47, 47)",
    blue: "rgb(94, 106, 210)",
    yellow: "rgb(242, 190, 0)",
    purple: "rgb(138, 67, 225)",
    green: "rgb(93, 201, 131)",
    pink: "rgb(213, 17, 253)",
  },
  tagBg: "rgb(30, 30, 30)",
} as const;

/**
 * 컨텐츠 데이터
 */
const CONTENT = {
  badge: "후커블 한눈에 보기",
  heading: "나만을 위한",
  headingLine2: "상세페이지 전문팀.",
  description:
    "기획자, 디자이너, 카피라이터로 구성된 나만의 전문가 AI 팀을 간편하게 구독하세요",
  ctaButton: "지금 시작하기",
  ctaUrl: "https://app.hookable.ai",
  dividerText: "잠깐! 더 있어요.",
} as const;

const FEATURES = [
  {
    icon: "folder",
    title: "피그마로 내보내기",
    description: "디테일은 Figma에서 자유롭게",
  },
  {
    icon: "user-plus",
    title: "이미지 생성 프롬프트",
    description: "DALL.E, Midjourney 등에 바로 붙여넣을 수 있는 프롬프트 제공",
  },
  {
    icon: "timer",
    title: "완벽한 모바일 최적화",
    description: "모바일 시대에 맞는 반응형\n디자인",
  },
  {
    icon: "tag",
    title: "데이터 분석",
    description: "어떤 부분이 고객의 눈길을 끌었는지 확인하는 대시보드",
  },
] as const;

const TAGS = [
  { label: "디자인 레퍼런스 입력", color: COLORS.tags.red },
  { label: "이미지 생성 프롬프트", color: COLORS.tags.blue },
  { label: "모바일 반응형", color: COLORS.tags.yellow },
  { label: "팀 단위 협업", color: COLORS.tags.purple },
  { label: "데이터 분석", color: COLORS.tags.green },
  { label: "클릭하여 수정", color: COLORS.tags.pink },
  { label: "피그마로 내보내기", color: COLORS.tags.red },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { FolderOpen, UserPlus, Timer, Tag } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface HookableAiFeature6Props {
  badge?: string;
  heading?: string;
  headingLine2?: string;
  description?: string;
  ctaButton?: string;
  ctaUrl?: string;
  features?: typeof FEATURES;
  tags?: typeof TAGS;
  dividerText?: string;
}

const iconMap = {
  folder: FolderOpen,
  "user-plus": UserPlus,
  timer: Timer,
  tag: Tag,
} as const;

// Marquee component for the tags
function MarqueeTags({ tags }: { tags: typeof TAGS }) {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const animate = () => {
      setOffset((prev) => {
        const newOffset = prev + 0.5;
        // Reset when we've scrolled through the first set
        if (newOffset >= 1072) {
          return 0;
        }
        return newOffset;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Duplicate tags for seamless loop
  const allTags = [...tags, ...tags, ...tags];

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 20%, rgb(0,0,0) 80%, rgba(0,0,0,0) 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 20%, rgb(0,0,0) 80%, rgba(0,0,0,0) 100%)",
      }}
    >
      <div
        className="flex gap-2.5"
        style={{
          transform: `translateX(-${offset}px)`,
          width: "max-content",
        }}
      >
        {allTags.map((tag, index) => (
          <div
            key={`tag-${index}`}
            className="flex items-center gap-2.5 px-3.5 py-3 rounded-[10px] shrink-0"
            style={{ backgroundColor: COLORS.tagBg }}
          >
            <div
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: tag.color }}
            />
            <span
              className="text-sm whitespace-nowrap"
              style={{ color: COLORS.text.primary }}
            >
              {tag.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Product Screenshot Placeholder
function ProductScreenshot() {
  return (
    <div className="relative w-full max-w-[760px] mx-auto aspect-[760/480] rounded-[10px] overflow-hidden">
      {/* Main editor background */}
      <div
        className="absolute inset-0 rounded-[10px]"
        style={{
          background:
            "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)",
        }}
      />

      {/* Editor content grid */}
      <div className="absolute inset-4 grid grid-cols-3 gap-3">
        {/* Left sidebar - Product preview */}
        <div className="bg-white/5 rounded-lg p-3 flex flex-col gap-2">
          <div className="text-xs text-white/40 mb-1">Preview</div>
          <div className="bg-white rounded-lg flex-1 flex flex-col items-center justify-center p-3">
            <div className="text-lg font-bold text-gray-800">
              알콜 <span className="text-rose-500">ZERO</span>
            </div>
            <div className="flex gap-2 mt-2">
              <div className="w-8 h-8 bg-amber-100 rounded-full" />
              <div className="w-8 h-8 bg-amber-200 rounded-full" />
            </div>
          </div>
          <div
            className="mt-2 flex items-center gap-2 px-3 py-2 rounded-lg text-white text-xs"
            style={{ backgroundColor: "#4F46E5" }}
          >
            <span className="font-medium">Figma로 내보내기</span>
            <svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        </div>

        {/* Center - Page layout */}
        <div className="bg-white/5 rounded-lg p-3 flex flex-col gap-2">
          <div className="text-xs text-white/40 mb-1">Layout</div>
          <div className="bg-white/10 rounded flex-1 flex flex-col items-center justify-center gap-2 p-2">
            <div className="w-full h-6 bg-white/20 rounded text-[10px] text-white/60 flex items-center justify-center">
              메인 카피 문구
            </div>
            <div className="w-3/4 h-12 bg-white/15 rounded" />
            <div className="w-1/2 h-4 bg-white/10 rounded" />
            <div className="w-2/3 h-4 bg-white/10 rounded" />
          </div>
        </div>

        {/* Right sidebar - Controls */}
        <div className="bg-white/5 rounded-lg p-3 flex flex-col gap-3">
          <div className="text-xs text-white/40">Editor</div>

          {/* Form inputs */}
          <div className="space-y-2">
            <div className="bg-white/10 rounded px-2 py-1.5 text-[10px] text-white/60 border border-emerald-500/50">
              구강스트레이 구취제거 유산균
            </div>
            <div className="bg-white/10 rounded px-2 py-1.5 text-[10px] text-white/40">
              상품 카테고리: 건강식품
            </div>
          </div>

          {/* Popup tooltip */}
          <div className="bg-emerald-600 rounded-lg p-2 text-[10px] text-white">
            <div className="flex items-center gap-1 mb-1">
              <span>입 속에 새로이 담아있는 일라스트 사진</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <span>Midjourney</span>
              <span className="text-[8px]">프롬프트 복사하기</span>
            </div>
          </div>

          {/* AI Button */}
          <div className="mt-auto bg-white/10 rounded-lg px-3 py-2 text-center text-xs text-white/80">
            AI 기획 시작
          </div>
        </div>
      </div>

      {/* Gradient overlays */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${COLORS.background}, transparent)`,
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, ${COLORS.background}80, transparent)`,
        }}
      />
    </div>
  );
}

export default function HookableAiFeature6({
  badge = CONTENT.badge,
  heading = CONTENT.heading,
  headingLine2 = CONTENT.headingLine2,
  description = CONTENT.description,
  ctaButton = CONTENT.ctaButton,
  ctaUrl = CONTENT.ctaUrl,
  features = FEATURES,
  tags = TAGS,
  dividerText = CONTENT.dividerText,
}: HookableAiFeature6Props) {
  return (
    <section
      className="relative w-full py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center mb-6"
          >
            <div
              className="px-4 py-2 rounded-full text-sm"
              style={{
                color: COLORS.text.primary,
                border: `1px solid ${COLORS.badge.border}`,
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
              }}
            >
              {badge}
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: COLORS.text.primary }}
          >
            {heading}
            <br />
            {headingLine2}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: COLORS.text.secondary }}
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href={ctaUrl}
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:opacity-90 hover:scale-105"
              style={{
                backgroundColor: COLORS.button.bg,
                color: COLORS.button.text,
              }}
            >
              {ctaButton}
            </a>
          </motion.div>
        </div>

        {/* Product Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <ProductScreenshot />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 rounded-xl overflow-hidden mb-12"
          style={{ border: `1px solid ${COLORS.featureBorder}` }}
        >
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            const isLast = index === features.length - 1;

            return (
              <div
                key={feature.title}
                className="p-6 relative"
                style={{
                  borderRight:
                    !isLast && index < 3
                      ? `1px solid ${COLORS.featureBorder}`
                      : "none",
                }}
              >
                {/* Mobile/Tablet dividers */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-px lg:hidden"
                  style={{
                    backgroundColor:
                      index < 3 ? COLORS.featureBorder : "transparent",
                  }}
                />

                <div className="flex flex-col gap-4">
                  <div
                    className="w-6 h-6"
                    style={{ color: COLORS.text.primary }}
                  >
                    {IconComponent && <IconComponent className="w-6 h-6" />}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3
                      className="text-base font-medium"
                      style={{ color: COLORS.text.primary }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-sm whitespace-pre-line"
                      style={{ color: COLORS.text.muted }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Divider with text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          {/* Left gradient line */}
          <div
            className="flex-1 h-px max-w-[200px]"
            style={{
              background: `linear-gradient(to right, transparent, ${COLORS.featureBorder})`,
            }}
          />

          {/* Center text container */}
          <div
            className="px-4 py-2 rounded-full text-sm whitespace-nowrap"
            style={{
              color: COLORS.text.primary,
              border: `1px solid ${COLORS.featureBorder}`,
            }}
          >
            {dividerText}
          </div>

          {/* Right gradient line */}
          <div
            className="flex-1 h-px max-w-[200px]"
            style={{
              background: `linear-gradient(to left, transparent, ${COLORS.featureBorder})`,
            }}
          />
        </motion.div>

        {/* Marquee Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <MarqueeTags tags={tags} />
        </motion.div>
      </div>
    </section>
  );
}
