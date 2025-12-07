"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    buttonBg: "#d4e8eb", // 연한 청록색/민트
    buttonText: "#374151", // 어두운 회색
    buttonHover: "#c1dce0",
    labelText: "#6b7280", // 회색
    titleText: "#1f2937", // 거의 검정
    divider: "#e5e7eb", // 밝은 회색
  },
  dark: {
    buttonBg: "#2d4a4e",
    buttonText: "#e5e7eb",
    buttonHover: "#3d5a5e",
    labelText: "#9ca3af",
    titleText: "#f9fafb",
    divider: "#374151",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  background: {
    path: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1600&h=1000&fit=crop",
    alt: "Soft blue sky with clouds background",
    prompt: `Soft, dreamy cloud background with blue and white tones. Ethereal, serene, peaceful sky.`,
  },
  team: {
    path: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&h=600&fit=crop",
    alt: "Team members on a ski lift in snowy mountains",
    prompt: `Team photo of people on a ski lift chair, snowy mountain background, wearing ski gear.`,
  },
} as const;

/**
 * 콘텐츠
 */
const CONTENT = {
  sectionLabel: "Team overview",
  title: "Aker team",
  buttonText: "Aker Team",
  buttonHref: "/team",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface TeamAkerHomeProps {
  mode?: "light" | "dark";
  sectionLabel?: string;
  title?: string;
  buttonText?: string;
  buttonHref?: string;
  teamImageSrc?: string;
  backgroundImageSrc?: string;
  onButtonClick?: () => void;
}

export default function TeamAkerHome({
  mode = "light",
  sectionLabel = CONTENT.sectionLabel,
  title = CONTENT.title,
  buttonText = CONTENT.buttonText,
  buttonHref = CONTENT.buttonHref,
  teamImageSrc = IMAGES.team.path,
  backgroundImageSrc = IMAGES.background.path,
  onButtonClick,
}: TeamAkerHomeProps) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImageSrc}
          alt="Cloud background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability in dark mode */}
        {mode === "dark" && (
          <div className="absolute inset-0 bg-gray-900/60" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-12 md:px-12 lg:px-20">
        {/* Top divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-px mb-6 origin-left"
          style={{ backgroundColor: colors.divider }}
        />

        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm font-normal mb-2"
          style={{ color: colors.labelText }}
        >
          {sectionLabel}
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight"
          style={{ color: colors.titleText }}
        >
          {title}
        </motion.h2>

        {/* Circular Team Image - Centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center justify-center mt-16 md:mt-24 lg:mt-32"
        >
          {/* Circular Image Container */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
            <Image
              src={teamImageSrc}
              alt={IMAGES.team.alt}
              fill
              className="object-cover"
            />
          </div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-6"
          >
            <a
              href={buttonHref}
              onClick={(e) => {
                if (onButtonClick) {
                  e.preventDefault();
                  onButtonClick();
                }
              }}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:gap-3"
              style={{
                backgroundColor: colors.buttonBg,
                color: colors.buttonText,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.buttonHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.buttonBg;
              }}
            >
              {buttonText}
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/50">
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
