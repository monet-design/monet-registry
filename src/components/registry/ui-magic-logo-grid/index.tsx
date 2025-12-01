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
    accent: "#FF6B35",          // 오렌지 (하이라이트)
    accentHover: "#E85A2A",
  },
  dark: {
    accent: "#FF6B35",
    accentHover: "#FF8259",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  // 로고 타일에 사용될 이미지들
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface LogoCard {
  id: string;
  type: "image" | "text";
  bgColor: string;
  bgImage?: string;
  logo?: string;
  logoColor?: string;
  textColor?: string;
}

const DEFAULT_LOGOS: LogoCard[] = [
  {
    id: "golden-gate",
    type: "image",
    bgColor: "#1a5f7a",
    bgImage: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop",
  },
  {
    id: "square",
    type: "image",
    bgColor: "#8b6d4f",
    bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
    logo: "Square",
    logoColor: "#000000",
  },
  {
    id: "weebly",
    type: "image",
    bgColor: "#654321",
    bgImage: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop",
    logo: "weebly",
    logoColor: "#ffffff",
  },
  {
    id: "trek",
    type: "image",
    bgColor: "#4a6b5c",
    bgImage: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400&h=400&fit=crop",
    logo: "TREK",
    logoColor: "#ffffff",
  },
  {
    id: "torro",
    type: "image",
    bgColor: "#c41e3a",
    bgImage: "https://images.unsplash.com/photo-1611195974226-ef28dccf40d4?w=400&h=400&fit=crop",
  },
  {
    id: "zongodle",
    type: "text",
    bgColor: "#00ff88",
    logo: "Zongodle",
    logoColor: "#000000",
    textColor: "#ff00ff",
  },
  {
    id: "intricately",
    type: "image",
    bgColor: "#a8b5c8",
    bgImage: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=400&h=400&fit=crop",
    logo: "INTRICATELY",
    logoColor: "#ffffff",
  },
  {
    id: "treats",
    type: "image",
    bgColor: "#3d2817",
    bgImage: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    logo: "TREATS",
    logoColor: "#ffffff",
  },
  {
    id: "citrus",
    type: "image",
    bgColor: "#666666",
    bgImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    logo: "Citrus Insight",
    logoColor: "#ffffff",
  },
];

interface UiMagicLogoGridProps {
  mode?: "light" | "dark";
  heading?: string;
  subheading?: string;
  highlightText?: string;
  logos?: LogoCard[];
}

export default function UiMagicLogoGrid({
  mode = "dark",
  heading = "Trusted by industry leaders",
  subheading = "We've partnered with companies of all sizes to help them grow, scale, and land",
  highlightText = "$300M+",
  logos = DEFAULT_LOGOS,
}: UiMagicLogoGridProps) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className={`relative w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ${
        isDark ? "bg-[#1a1a1f]" : "bg-gray-50"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`mx-auto max-w-2xl text-base sm:text-lg ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {subheading}{" "}
            <span style={{ color: colors.accent }} className="font-semibold">
              {highlightText}
            </span>{" "}
            in acquisitions.
          </motion.p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {logos.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.05 }}
              className="group relative aspect-square overflow-hidden rounded-2xl"
              style={{ backgroundColor: card.bgColor }}
            >
              {/* Background Image */}
              {card.bgImage && (
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${card.bgImage})`,
                    opacity: 0.8
                  }}
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />

              {/* Logo/Text */}
              {card.logo && (
                <div className="relative flex h-full items-center justify-center p-6">
                  {card.type === "text" && card.id === "zongodle" ? (
                    // Special styling for Zongodle
                    <div className="text-center">
                      <div className="mb-2 text-4xl">🎮</div>
                      <div
                        className="text-xl font-black"
                        style={{ color: card.logoColor }}
                      >
                        {card.logo}
                      </div>
                    </div>
                  ) : (
                    <div
                      className="text-center text-2xl font-bold drop-shadow-lg sm:text-3xl"
                      style={{ color: card.logoColor || "#ffffff" }}
                    >
                      {card.id === "square" && (
                        <div className="mb-2 flex items-center justify-center">
                          <div className="h-8 w-8 rounded-lg bg-white" />
                        </div>
                      )}
                      {card.logo}
                    </div>
                  )}
                </div>
              )}

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
