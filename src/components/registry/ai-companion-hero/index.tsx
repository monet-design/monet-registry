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
    accent: "#3B82F6",          // 블루
    accentHover: "#2563EB",     // 블루 호버
    // 필요한 경우 추가 브랜드 컬러 정의
  },
  dark: {
    accent: "#60A5FA",
    accentHover: "#3B82F6",
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
  //   path: "/registry/ai-companion-hero/hero.jpg",
  //   alt: "Hero image description",
  //   prompt: `Detailed image generation prompt...`,
  // },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface AiCompanionHeroProps {
  mode?: "light" | "dark";
  // TODO: Define additional props
}

export default function AiCompanionHero({
  mode = "light",
  ...props
}: AiCompanionHeroProps) {
  const colors = COLORS[mode];

  return (
    <section className="relative min-h-screen w-full bg-white dark:bg-gray-950">
      {/* TODO: Implement ai-companion-hero component */}
      {/* 색상 사용 예시: */}
      {/* <button style={{ backgroundColor: colors.accent }}> */}
      {/* 또는 Tailwind: <div className="bg-gray-100 dark:bg-gray-900"> */}
    </section>
  );
}
