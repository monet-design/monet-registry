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
    // 다크 배경 CTA 섹션
    background: "#0f0f0f",
    backgroundGradient: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)",
    textPrimary: "#ffffff",
    textSecondary: "#9ca3af",
    buttonPrimary: "#ffffff",
    buttonPrimaryText: "#000000",
    buttonSecondary: "transparent",
    buttonSecondaryBorder: "#ffffff",
    buttonSecondaryText: "#ffffff",
  },
  dark: {
    background: "#0f0f0f",
    backgroundGradient: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)",
    textPrimary: "#ffffff",
    textSecondary: "#9ca3af",
    buttonPrimary: "#ffffff",
    buttonPrimaryText: "#000000",
    buttonSecondary: "transparent",
    buttonSecondaryBorder: "#ffffff",
    buttonSecondaryText: "#ffffff",
  },
} as const;

/**
 * CTA 텍스트 콘텐츠
 */
const CONTENT = {
  title: "Start building smarter agents today",
  subtitle:
    "Join thousands of developers using Deepcon to give their coding agents the most accurate context available",
  primaryButton: {
    text: "Get Started Free",
    href: "#",
  },
  secondaryButton: {
    text: "View Documentation",
    href: "#",
  },
  stats: [
    { value: "99.9%", label: "Uptime" },
    { value: "5000+", label: "Developers" },
    { value: "1M+", label: "Context queries/month" },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface DeepconAiCta2Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  stats?: Array<{ value: string; label: string }>;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function DeepconAiCta2({
  mode = "light",
  title = CONTENT.title,
  subtitle = CONTENT.subtitle,
  primaryButtonText = CONTENT.primaryButton.text,
  primaryButtonHref = CONTENT.primaryButton.href,
  secondaryButtonText = CONTENT.secondaryButton.text,
  secondaryButtonHref = CONTENT.secondaryButton.href,
  stats = CONTENT.stats as unknown as Array<{ value: string; label: string }>,
  onPrimaryClick,
  onSecondaryClick,
}: DeepconAiCta2Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8"
      style={{ background: colors.backgroundGradient }}
    >
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header Content */}
        <div className="text-center mb-10 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold italic mb-5 sm:mb-6"
            style={{ color: colors.textPrimary }}
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: colors.textSecondary }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 sm:mb-20"
        >
          <a
            href={primaryButtonHref}
            onClick={(e) => {
              if (onPrimaryClick) {
                e.preventDefault();
                onPrimaryClick();
              }
            }}
            className="group relative px-8 py-3.5 text-base font-medium transition-all duration-200 hover:opacity-90 min-w-[200px] text-center"
            style={{
              backgroundColor: colors.buttonPrimary,
              color: colors.buttonPrimaryText,
            }}
          >
            {primaryButtonText}
          </a>
          <a
            href={secondaryButtonHref}
            onClick={(e) => {
              if (onSecondaryClick) {
                e.preventDefault();
                onSecondaryClick();
              }
            }}
            className="group relative px-8 py-3.5 text-base font-medium transition-all duration-200 hover:bg-white/10 min-w-[200px] text-center border"
            style={{
              backgroundColor: colors.buttonSecondary,
              borderColor: colors.buttonSecondaryBorder,
              color: colors.buttonSecondaryText,
            }}
          >
            {secondaryButtonText}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
              className="text-center"
            >
              <div
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
