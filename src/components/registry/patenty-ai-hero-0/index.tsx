"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    background: "#000000",
    backgroundSecondary: "#0a0a0a",
    primaryButton: "#FFFFFF",
    primaryButtonText: "#171717",
    primaryButtonHover: "#F5F5F5",
    secondaryButton: "#262626",
    secondaryButtonText: "#FFFFFF",
    secondaryButtonHover: "#404040",
    textPrimary: "#FFFFFF",
    textSecondary: "#A3A3A3",
    divider: "#262626",
  },
  dark: {
    background: "#000000",
    backgroundSecondary: "#0a0a0a",
    primaryButton: "#FFFFFF",
    primaryButtonText: "#171717",
    primaryButtonHover: "#F5F5F5",
    secondaryButton: "#262626",
    secondaryButtonText: "#FFFFFF",
    secondaryButtonHover: "#404040",
    textPrimary: "#FFFFFF",
    textSecondary: "#A3A3A3",
    divider: "#262626",
  },
} as const;

/**
 * 콘텐츠 설정
 */
const CONTENT = {
  title: {
    line1: "AI와 협업하는",
    line2: "특허 워크스페이스",
  },
  subtitle:
    "명세서 작성부터 OA대응까지, AI와의 협업을 통해 변리사 전문성을 증폭시키세요",
  primaryButton: {
    text: "무료크레딧으로 시작하기",
    href: "/ko/login",
  },
  secondaryButton: {
    text: "데모 보기",
  },
  stats: [
    { value: "296", label: "변리사" },
    { value: "1598", label: "특허 문서" },
    { value: "5", label: "지원 국가" },
    { value: "70%", label: "시간 절약" },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface PatentyAiHero0Props {
  mode?: "light" | "dark";
  title?: {
    line1?: string;
    line2?: string;
  };
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  onSecondaryButtonClick?: () => void;
  stats?: Array<{ value: string; label: string }>;
}

export default function PatentyAiHero0({
  mode = "dark",
  title = CONTENT.title,
  subtitle = CONTENT.subtitle,
  primaryButtonText = CONTENT.primaryButton.text,
  primaryButtonHref = CONTENT.primaryButton.href,
  secondaryButtonText = CONTENT.secondaryButton.text,
  onSecondaryButtonClick,
  stats = CONTENT.stats as unknown as Array<{ value: string; label: string }>,
}: PatentyAiHero0Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="py-12 sm:py-20 lg:py-28 px-4"
      style={{
        background: `linear-gradient(to bottom, ${colors.background}, ${colors.backgroundSecondary})`,
      }}
      role="region"
      aria-label="메인 히어로 섹션"
    >
      <div className="container mx-auto text-center">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8 tracking-tight leading-[1.1]"
            style={{ color: colors.textPrimary }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span>{title.line1}</span>
            <br />
            <span className="relative inline-block">
              {title.line2}
              <motion.span
                className="absolute bottom-0 left-0 h-[3px]"
                style={{
                  background:
                    "linear-gradient(to right, white, #a3a3a3, transparent)",
                }}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl mb-10 sm:mb-12 leading-relaxed max-w-2xl mx-auto"
            style={{ color: colors.textSecondary }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {subtitle}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <a
              href={primaryButtonHref}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold tracking-tight rounded-md text-base sm:text-lg px-8 sm:px-10 py-4 transition-all duration-300 hover:shadow-xl hover:scale-105"
              style={{
                backgroundColor: colors.primaryButton,
                color: colors.primaryButtonText,
              }}
            >
              {primaryButtonText}
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
            </a>
            <button
              onClick={onSecondaryButtonClick}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold tracking-tight rounded-md text-base sm:text-lg px-8 sm:px-10 py-4 transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: colors.secondaryButton,
                color: colors.secondaryButtonText,
              }}
            >
              {secondaryButtonText}
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center relative">
                <div
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 tracking-tight"
                  style={{ color: colors.textPrimary }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm sm:text-base"
                  style={{ color: colors.textSecondary }}
                >
                  {stat.label}
                </div>
                {/* Divider - except for last item */}
                {index < stats.length - 1 && (
                  <div
                    className="hidden sm:block absolute top-1/2 -right-6 lg:-right-8 w-px h-12 -translate-y-1/2"
                    style={{ backgroundColor: colors.divider }}
                  />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
