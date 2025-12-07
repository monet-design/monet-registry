"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#FFFFFF",
    accent: "#7C3AED",
    accentHover: "#6D28D9",
    textPrimary: "#111827",
    textSecondary: "#6B7280",
  },
  dark: {
    background: "#0A0A0F",
    accent: "#7C3AED",
    accentHover: "#6D28D9",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
  },
} as const;

/**
 * 컨텐츠
 */
const CONTENT = {
  title: {
    line1: "More than authentication,",
    line2: "Complete User Management",
  },
  subtitle:
    "Need more than sign-in? Clerk gives you full-stack auth and user management — so you can launch faster, scale smarter, and focus on building your business.",
  cta: {
    primary: "Get started free",
    docs: "Read docs",
    demo: "See demo",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

interface ClerkComHero1Props {
  mode?: "light" | "dark";
  title?: {
    line1: string;
    line2: string;
  };
  subtitle?: string;
  ctaPrimary?: string;
  ctaDocs?: string;
  ctaDemo?: string;
  onPrimaryClick?: () => void;
  onDocsClick?: () => void;
  onDemoClick?: () => void;
}

export default function ClerkComHero1({
  mode = "dark",
  title = CONTENT.title,
  subtitle = CONTENT.subtitle,
  ctaPrimary = CONTENT.cta.primary,
  ctaDocs = CONTENT.cta.docs,
  ctaDemo = CONTENT.cta.demo,
  onPrimaryClick,
  onDocsClick,
  onDemoClick,
}: ClerkComHero1Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className="relative w-full overflow-hidden py-24 md:py-32 lg:py-40"
      style={{ backgroundColor: colors.background }}
    >
      {/* Background gradient effects */}
      {isDark && (
        <div className="pointer-events-none absolute inset-0">
          {/* Subtle radial gradient */}
          <div
            className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)",
            }}
          />
        </div>
      )}

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Hero Content */}
        <div className="text-center">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
            style={{ color: colors.textPrimary }}
          >
            {title.line1}
            <br />
            {title.line2}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-base md:text-lg"
            style={{ color: colors.textSecondary }}
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            {/* Primary Button */}
            <button
              onClick={onPrimaryClick}
              className="group flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-lg"
              style={{
                backgroundColor: colors.accent,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.accentHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.accent;
              }}
            >
              {ctaPrimary}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>

            {/* Secondary Links */}
            <div className="flex items-center gap-4">
              {/* Read docs */}
              <button
                onClick={onDocsClick}
                className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: colors.textSecondary }}
              >
                {ctaDocs}
                <ArrowRight size={14} />
              </button>

              {/* Divider */}
              <span
                className="text-sm"
                style={{ color: isDark ? "#374151" : "#D1D5DB" }}
              >
                |
              </span>

              {/* See demo */}
              <button
                onClick={onDemoClick}
                className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: colors.textSecondary }}
              >
                <Play size={14} fill="currentColor" />
                {ctaDemo}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
