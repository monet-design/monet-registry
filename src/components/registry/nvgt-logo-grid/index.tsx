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
    background: "#1F2937",     // 다크 배경
    accent: "#FFFFFF",         // 화이트 강조
  },
  dark: {
    background: "#111827",
    accent: "#FFFFFF",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  // 예시:
  // hero: {
  //   path: "/registry/nvgt-logo-grid/hero.jpg",
  //   alt: "Hero image description",
  //   prompt: `Detailed image generation prompt...`,
  // },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface LogoItem {
  name: string;
  image: string;
  imageAlt?: string;
  logoPosition?: "top-left" | "center" | "bottom-left" | "bottom-center";
  logoStyle?: "bold" | "normal" | "uppercase";
}

interface NvgtLogoGridProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  highlightText?: string;
  logos?: LogoItem[];
}

const defaultLogos: LogoItem[] = [
  {
    name: "",
    image: "https://images.unsplash.com/photo-1542223616-9de9adb5e3e8?w=400&h=400&fit=crop",
    imageAlt: "Golden Gate Bridge",
    logoPosition: "center",
  },
  {
    name: "Square",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
    imageAlt: "Square POS System",
    logoPosition: "bottom-left",
    logoStyle: "bold",
  },
  {
    name: "weebly",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    imageAlt: "Bicycle maintenance",
    logoPosition: "bottom-left",
    logoStyle: "normal",
  },
  {
    name: "TREK",
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400&h=400&fit=crop",
    imageAlt: "Mountain bike on trail",
    logoPosition: "bottom-center",
    logoStyle: "uppercase",
  },
  {
    name: "Zorro",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=400&fit=crop",
    imageAlt: "Abstract red design",
    logoPosition: "bottom-center",
    logoStyle: "normal",
  },
  {
    name: "BonGoodle",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    imageAlt: "Colorful illustration",
    logoPosition: "bottom-left",
    logoStyle: "bold",
  },
  {
    name: "INTRICATELY",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=400&fit=crop",
    imageAlt: "Pastel clouds",
    logoPosition: "center",
    logoStyle: "uppercase",
  },
  {
    name: "TREATS",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    imageAlt: "Fashion lifestyle",
    logoPosition: "center",
    logoStyle: "uppercase",
  },
  {
    name: "Citrus Insight",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop",
    imageAlt: "Business meeting",
    logoPosition: "center",
    logoStyle: "normal",
  },
];

export default function NvgtLogoGrid({
  mode = "light",
  title = "Trusted by industry leaders",
  subtitle = "We've partnered with companies of all sizes to help them grow, scale, and land",
  highlightText = "$300M+",
  logos = defaultLogos,
}: NvgtLogoGridProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-20 px-6"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-4xl font-bold text-white md:text-5xl"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto max-w-2xl text-base text-gray-400 md:text-lg"
          >
            {subtitle}{" "}
            <span className="font-bold text-white">{highlightText}</span> in
            acquisitions.
          </motion.p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {logos.map((logo, index) => {
            const positionClasses = {
              "top-left": "items-start justify-start p-6",
              center: "items-center justify-center p-6",
              "bottom-left": "items-end justify-start p-6",
              "bottom-center": "items-end justify-center p-6",
            };

            const styleClasses = {
              bold: "font-bold",
              normal: "font-normal",
              uppercase: "font-bold uppercase tracking-wide",
            };

            return (
              <motion.div
                key={`${logo.name}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                whileHover={{ scale: 1.05 }}
                className="group relative aspect-square overflow-hidden rounded-2xl"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${logo.image})`,
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/30" />

                {/* Logo/Text Overlay */}
                {logo.name && (
                  <div
                    className={`relative flex h-full ${
                      positionClasses[logo.logoPosition || "center"]
                    }`}
                  >
                    <span
                      className={`text-xl text-white drop-shadow-lg md:text-2xl ${
                        styleClasses[logo.logoStyle || "bold"]
                      }`}
                    >
                      {logo.name}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
