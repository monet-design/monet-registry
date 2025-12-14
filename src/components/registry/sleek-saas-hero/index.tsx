"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    accent: "#FF6154", // Product Hunt style orange-red
    accentHover: "#E5574B",
    dark: "#1A1A1A",
    darkHover: "#2A2A2A",
  },
  dark: {
    accent: "#FF6154",
    accentHover: "#FF7A70",
    dark: "#FFFFFF",
    darkHover: "#E5E5E5",
  },
} as const;

/**
 * 텍스트 콘텐츠
 */
const CONTENT = {
  badge: "Trending Today",
  headline: {
    line1: "The next big thing",
    line2Prefix: "is launching",
    line2Accent: "here.",
  },
  subheadline:
    "Discover the best new products in tech, everyday. Join a community of makers and early adopters sharing the future.",
  primaryButton: "Start Exploring",
  secondaryButton: "Browse Categories",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface SleekSaasHeroProps {
  mode?: "light" | "dark";
  badgeText?: string;
  headlineLine1?: string;
  headlineLine2Prefix?: string;
  headlineLine2Accent?: string;
  subheadline?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function SleekSaasHero({
  mode = "light",
  badgeText = CONTENT.badge,
  headlineLine1 = CONTENT.headline.line1,
  headlineLine2Prefix = CONTENT.headline.line2Prefix,
  headlineLine2Accent = CONTENT.headline.line2Accent,
  subheadline = CONTENT.subheadline,
  primaryButtonText = CONTENT.primaryButton,
  secondaryButtonText = CONTENT.secondaryButton,
  onPrimaryClick,
  onSecondaryClick,
}: SleekSaasHeroProps) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      className={`relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden ${
        isDark ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col items-center text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className={`mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full shadow-sm ${
              isDark
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: colors.accent }}
            />
            <span
              className={`text-xs font-medium uppercase tracking-wide ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {badgeText}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className={`text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-8 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {headlineLine1}
            <br />
            <span
              className={`font-serif italic ${
                isDark ? "text-gray-500" : "text-gray-400"
              }`}
            >
              {headlineLine2Prefix}
            </span>{" "}
            <span className="relative inline-block" style={{ color: colors.accent }}>
              {headlineLine2Accent}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 opacity-30"
                style={{ color: colors.accent }}
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className={`text-lg md:text-xl max-w-2xl mb-10 leading-relaxed ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {subheadline}
          </motion.p>

          {/* Hero Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={onPrimaryClick}
              className="px-8 py-4 rounded-full font-medium text-lg transition-colors flex items-center justify-center gap-2 text-white"
              style={{ backgroundColor: colors.dark }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.darkHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.dark;
              }}
            >
              {primaryButtonText}
              <ArrowUpRight className="w-5 h-5" />
            </button>
            <button
              onClick={onSecondaryClick}
              className={`px-8 py-4 rounded-full font-medium text-lg border transition-colors ${
                isDark
                  ? "border-gray-700 bg-gray-800 hover:bg-gray-700 text-white"
                  : "border-gray-200 bg-white hover:bg-gray-50 text-gray-900"
              }`}
            >
              {secondaryButtonText}
            </button>
          </motion.div>
        </motion.div>

        {/* Floating Abstract Element (Background) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl -z-10 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${colors.accent}15 0%, transparent 70%)`,
          }}
        />
      </div>
    </section>
  );
}
