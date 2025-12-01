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
    // 브랜드 액센트 (테라코타/브라운 톤)
    accent: "#A67457",            // 마커, 뱃지 도트
    // Day 버튼
    buttonDay1Bg: "#DEB591",      // Day 1 버튼 배경
    buttonDay1Text: "#574138",    // Day 1 버튼 텍스트
    buttonDay2Bg: "#50392D",      // Day 30 버튼 배경 (다크 브라운)
    // 배경 그라데이션
    gradientWarm: "#FDF9F8",      // 우측 웜톤 그라데이션
  },
  dark: {
    accent: "#C88B6A",
    buttonDay1Bg: "#8B6B4A",
    buttonDay1Text: "#FDF9F8",
    buttonDay2Bg: "#3D2A20",
    gradientWarm: "#1a1a1a",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  faceComparison: {
    path: "/registry/glow-guide/face-comparison.png",
    alt: "Face comparison before and after",
    prompt: `Before/after skincare comparison portrait photo.
Style: Professional beauty/skincare photography, studio quality, soft diffused lighting
Layout: Split image with vertical white line divider in center, symmetrical composition
Composition:
- Single female face, frontal view, slight smile
- Left side: "before" showing subtle skin imperfections (slight redness, uneven tone)
- Right side: "after" showing clearer, more radiant skin
- Face fills most of the frame, cropped at shoulders
Subject: Young woman (20s-30s), natural makeup, brown hair pulled back
Background: Clean neutral gray/white gradient
Color palette: Natural skin tones, soft warm lighting, neutral background
Mood: Clean, clinical yet approachable, beauty/wellness focused
Technical: High resolution, sharp focus on facial features, 9:19 aspect ratio for mobile mockup`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface GlowGuideProps {
  mode?: "light" | "dark";
  badge?: string;
  headline?: string;
  subheadline?: string;
  faceImage?: string;
  day1Label?: string;
  day2Label?: string;
}

function Badge({ text, colors }: { text: string; colors: (typeof COLORS)["light"] | (typeof COLORS)["dark"] }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: colors.accent }}
      />
      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-900">
        {text}
      </span>
    </div>
  );
}

function IPhoneMockup({
  faceImage,
  day1Label,
  day2Label,
  colors,
}: {
  faceImage: string;
  day1Label: string;
  day2Label: string;
  colors: (typeof COLORS)["light"] | (typeof COLORS)["dark"];
}) {
  return (
    <div className="relative">
      {/* iPhone Frame */}
      <div className="relative mx-auto w-[260px] overflow-hidden rounded-[40px] border-[10px] border-gray-900 bg-gray-900 shadow-2xl sm:w-[280px]">
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-2 z-20 h-[22px] w-[80px] -translate-x-1/2 rounded-full bg-gray-900" />

        {/* Screen Content */}
        <div className="relative aspect-[9/19] overflow-hidden rounded-[30px] bg-white">
          {/* Face Image with Split Effect */}
          <div className="relative h-full w-full">
            <Image
              src={faceImage}
              alt={IMAGES.faceComparison.alt}
              fill
              className="object-cover object-top"
              priority
            />

            {/* Vertical Center Line */}
            <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-white/40" />

            {/* Face Markers */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="absolute left-[38%] top-[32%] h-3 w-3 rounded-full border-2 border-white shadow-lg"
              style={{ backgroundColor: colors.accent }}
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.3 }}
              className="absolute right-[38%] top-[32%] h-3 w-3 rounded-full border-2 border-white shadow-lg"
              style={{ backgroundColor: colors.accent }}
            />
          </div>

          {/* Day Labels */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 px-4">
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="rounded-full px-4 py-2 text-xs font-medium shadow-md"
              style={{
                backgroundColor: colors.buttonDay1Bg,
                color: colors.buttonDay1Text,
              }}
            >
              {day1Label}
            </motion.button>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="rounded-full px-4 py-2 text-xs font-medium text-white shadow-md"
              style={{ backgroundColor: colors.buttonDay2Bg }}
            >
              {day2Label}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GlowGuide({
  mode = "light",
  badge = "SMARTER BEAUTY DECISIONS START HERE",
  headline = "See real progress.\nOne photo at a time.",
  subheadline = "Snap, mark up, and compare your\nprogress over time.",
  faceImage = IMAGES.faceComparison.path,
  day1Label = "Day 1",
  day2Label = "Day 30",
}: GlowGuideProps) {
  const colors = COLORS[mode];
  const headlineLines = headline.split("\n");
  const subheadlineLines = subheadline.split("\n");

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      {/* Subtle warm gradient on right side */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2"
        style={{
          background: `linear-gradient(to left, ${colors.gradientWarm}, transparent)`,
        }}
      />
      <div className="relative mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-16">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <Badge text={badge} colors={colors} />

            <h1 className="mt-6 text-[32px] font-semibold leading-[1.15] tracking-tight text-gray-900 sm:text-[40px] lg:text-[48px]">
              {headlineLines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < headlineLines.length - 1 && <br />}
                </span>
              ))}
            </h1>

            <p className="mt-4 text-sm italic leading-relaxed text-gray-500 sm:text-base">
              {subheadlineLines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < subheadlineLines.length - 1 && <br />}
                </span>
              ))}
            </p>
          </motion.div>

          {/* Right: iPhone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <IPhoneMockup
              faceImage={faceImage}
              day1Label={day1Label}
              day2Label={day2Label}
              colors={colors}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
