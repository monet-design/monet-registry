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
    // Primary 액센트 (하이라이트, 도트 등)
    accent: "#1ADCDA",
    accentHover: "#15C7C5",
    background: "#ffffff",
    text: "#000000",
  },
  dark: {
    accent: "#1ADCDA",
    accentHover: "#15C7C5",
    background: "#0a0a0a",
    text: "#ffffff",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  teamPhoto: {
    path: "/registry/team-riotters-home/team-photo.jpg",
    alt: "Team members collaborating in a modern office setting",
    prompt: `Team of three professionals working together in a modern dark office. One person in a plaid shirt sitting, one in a black shirt at a computer, and one standing in a white t-shirt. Professional, collaborative atmosphere with computer monitors and office equipment visible.`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface TeamRiottersHomeProps {
  mode?: "light" | "dark";
  headline?: {
    prefix?: string;
    highlighted?: string;
    suffix?: string;
  };
  buttonText?: string;
  teamPhotoSrc?: string;
  teamPhotoAlt?: string;
  onButtonClick?: () => void;
}

export default function TeamRiottersHome({
  mode = "light",
  headline = {
    prefix: "We're a ",
    highlighted: "team of design folks",
    suffix: " and tech geeks passionate about the transformative power of design.",
  },
  buttonText = "Meet your Future Team",
  teamPhotoSrc = IMAGES.teamPhoto.path,
  teamPhotoAlt = IMAGES.teamPhoto.alt,
  onButtonClick,
}: TeamRiottersHomeProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-12 md:py-16 lg:py-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-instrument-serif text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-tight lg:leading-tight tracking-tight mb-6"
          style={{ color: colors.text }}
        >
          {headline.prefix}
          <span
            className="italic px-1 md:px-2"
            style={{ backgroundColor: colors.accent }}
          >
            {headline.highlighted}
          </span>
          {headline.suffix}
        </motion.h2>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          onClick={onButtonClick}
          className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 mb-10 md:mb-12"
          style={{
            backgroundColor: colors.text,
            color: colors.background,
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: colors.accent }}
          />
          {buttonText}
        </motion.button>

        {/* Team Photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/9] overflow-hidden rounded-lg"
        >
          <Image
            src={teamPhotoSrc}
            alt={teamPhotoAlt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          />
        </motion.div>
      </div>

      {/* Font import for Instrument Serif */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');

        .font-instrument-serif {
          font-family: 'Instrument Serif', serif;
        }
      `}</style>
    </section>
  );
}
