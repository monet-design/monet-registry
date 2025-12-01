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
    background: "#FAFAFA",
    textPrimary: "#111111",
    logoGray: "#9CA3AF",
    logoDark: "#1F2937",
  },
  dark: {
    background: "#0A0A0A",
    textPrimary: "#F5F5F5",
    logoGray: "#6B7280",
    logoDark: "#E5E7EB",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {} as const;

/**
 * 컨텐츠 데이터
 */
const CONTENT = {
  heading: "Propel your product forwards with\nbeautiful product design",
  logos: [
    { name: "ING", text: "ING", color: "gray" },
    { name: "Gemeente Amsterdam", text: "Gemeente\nAmsterdam", color: "dark" },
    { name: "VGZ", text: "vgz", color: "dark" },
    { name: "A INSIGHTS", text: "A INSIGHTS", color: "gray" },
    { name: "papyr", text: "papyr", color: "gray" },
    { name: "EDGE", text: "EDGE\nTECHNOLOGIES", color: "gray" },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface ClayLogoCloudProps {
  mode?: "light" | "dark";
  heading?: string;
  logos?: Array<{
    name: string;
    text: string;
    color?: "gray" | "dark";
    logo?: React.ReactNode;
  }>;
}

export default function ClayLogoCloud({
  mode = "light",
  heading = CONTENT.heading,
  logos = [...CONTENT.logos],
}: ClayLogoCloudProps) {
  const colors = COLORS[mode];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
        rel="stylesheet"
      />
      <section
        className="relative w-full py-16 md:py-24"
        style={{ backgroundColor: colors.background }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl whitespace-pre-line text-center text-4xl font-normal leading-tight md:text-5xl lg:text-6xl"
            style={{
              color: colors.textPrimary,
              fontFamily: "'Instrument Serif', serif",
            }}
          >
            {heading}
          </motion.h2>

          {/* Logo Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6"
          >
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-center justify-center"
              >
                {logo.logo || (
                  <div className="flex items-center justify-center">
                    <span
                      className="whitespace-pre-line text-center text-sm font-medium uppercase tracking-wide md:text-base"
                      style={{
                        color:
                          logo.color === "dark"
                            ? colors.logoDark
                            : colors.logoGray,
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {logo.text}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
