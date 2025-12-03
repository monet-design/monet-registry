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
    // Primary 액센트 (버튼, 링크 등)
    accent: "#DEC710",
    accentHover: "#C7B00E",
    accentText: "#121212",
    // 배경 및 텍스트
    background: "#121212",
    text: "#FFFFFF",
    textMuted: "#A0A0A0",
    // Secondary 버튼
    secondary: "transparent",
    secondaryBorder: "#555555",
    secondaryText: "#FFFFFF",
  },
  dark: {
    accent: "#DEC710",
    accentHover: "#C7B00E",
    accentText: "#121212",
    background: "#121212",
    text: "#FFFFFF",
    textMuted: "#A0A0A0",
    secondary: "transparent",
    secondaryBorder: "#555555",
    secondaryText: "#FFFFFF",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  background: {
    path: "/registry/footer-steel-cta/background.png",
    alt: "Industrial background image",
    prompt: `Industrial construction site or factory scene in grayscale with heavy machinery and structural elements. Dark gray industrial background with subtle grain texture and noise effect. High contrast black and white tones with halftone effect.`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

// S1 Logo Component
function SteelLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 8C0 3.58172 3.58172 0 8 0H36C40.4183 0 44 3.58172 44 8V12H8C3.58172 12 0 8.41828 0 4V8Z"
        fill="white"
      />
      <path
        d="M0 24C0 19.5817 3.58172 16 8 16H36C40.4183 16 44 19.5817 44 24V28C44 32.4183 40.4183 36 36 36H0V24Z"
        fill="white"
      />
      <path
        d="M48 0H56C58.2091 0 60 1.79086 60 4V32C60 34.2091 58.2091 36 56 36H48V0Z"
        fill="white"
      />
    </svg>
  );
}

interface FooterSteelCtaProps {
  mode?: "light" | "dark";
  logo?: React.ReactNode;
  heading?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function FooterSteelCta({
  mode = "dark",
  logo,
  heading = "Ready to\nBuild with Steel?",
  primaryButtonText = "Start For Free",
  primaryButtonHref = "#",
  secondaryButtonText = "Documentation",
  secondaryButtonHref = "#",
  onPrimaryClick,
  onSecondaryClick,
}: FooterSteelCtaProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url(${IMAGES.background.path})`,
            backgroundPosition: "right center",
          }}
        />
        {/* Gradient overlay for better text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${colors.background} 0%, ${colors.background}CC 40%, transparent 100%)`,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            {/* Logo */}
            <div>
              {logo || <SteelLogo className="h-8 w-auto" />}
            </div>

            {/* Heading */}
            <h2
              className="whitespace-pre-line text-4xl font-normal leading-tight tracking-tight md:text-5xl"
              style={{ color: colors.text }}
            >
              {heading}
            </h2>
          </motion.div>

          {/* Right Content - Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            {/* Primary Button */}
            <motion.a
              href={primaryButtonHref}
              onClick={onPrimaryClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors"
              style={{
                backgroundColor: colors.accent,
                color: colors.accentText,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.accentHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.accent;
              }}
            >
              {primaryButtonText}
            </motion.a>

            {/* Secondary Button */}
            <motion.a
              href={secondaryButtonHref}
              onClick={onSecondaryClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center border px-6 py-3 text-sm font-medium transition-colors"
              style={{
                backgroundColor: colors.secondary,
                borderColor: colors.secondaryBorder,
                color: colors.secondaryText,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = colors.text;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = colors.secondaryBorder;
              }}
            >
              {secondaryButtonText}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
