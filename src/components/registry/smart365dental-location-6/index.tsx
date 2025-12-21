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
    accent: "#1BBAC5",          // 청록색/시안
    accentHover: "#17A3AD",     // 청록색 호버
    // 필요한 경우 추가 브랜드 컬러 정의
  },
  dark: {
    accent: "#1BBAC5",
    accentHover: "#17A3AD",
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
    path: "/registry/smart365dental-location-6/background.png",
    alt: "손으로 터치하는 배경 이미지",
    prompt: `A soft, minimalist background image showing a hand reaching or touching, photographed from the side with natural lighting. The image should have a very light, almost white treatment with low contrast and high exposure, creating an ethereal, clean aesthetic suitable for a dental clinic website. The hand should be positioned naturally, suggesting care and precision. Professional photography style, very light and airy, minimal shadows.`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface Smart365dentalLocation6Props {
  mode?: "light" | "dark";
  title?: string;
  branchName?: string;
  address?: {
    line1?: string;
    line2?: string;
    building?: string;
    buildingNote?: string;
  };
  detailsLabel?: string;
}

export default function Smart365dentalLocation6({
  mode = "light",
  title = "진료시간 및 기본정보",
  branchName = "창원중동점",
  address = {
    line1: "경남 창원시 의창구",
    line2: "중동중앙로 83,",
    building: "디세븐파크3층",
    buildingNote: "(다이소 건물)",
  },
  detailsLabel = "자세한보기 클릭!!",
  ...props
}: Smart365dentalLocation6Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full overflow-hidden bg-gray-50 py-16 dark:bg-gray-900 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-40">
        <Image
          src={IMAGES.background.path}
          alt={IMAGES.background.alt}
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          {/* Title */}
          <h2 className="mb-12 text-2xl font-bold text-gray-900 dark:text-gray-50 sm:text-3xl md:text-4xl">
            {title}
          </h2>

          {/* Branch Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div
              className="rounded-full px-8 py-3 text-base font-medium text-white shadow-sm sm:text-lg"
              style={{ backgroundColor: colors.accent }}
            >
              {branchName}
            </div>
          </motion.div>

          {/* Address Information */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <p className="text-base text-gray-700 dark:text-gray-300 sm:text-lg">
              {address.line1}
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300 sm:text-lg">
              {address.line2}
            </p>
            <p className="text-base sm:text-lg">
              <span
                className="font-semibold"
                style={{ color: colors.accent }}
              >
                {address.building}
              </span>
              <span className="ml-1 text-gray-500 dark:text-gray-400">
                {address.buildingNote}
              </span>
            </p>
          </motion.div>

          {/* Details Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {detailsLabel}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
