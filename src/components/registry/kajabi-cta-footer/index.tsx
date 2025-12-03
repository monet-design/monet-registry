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
  // 그라데이션 배경
  gradientFrom: "#2563EB", // 파란색 (왼쪽)
  gradientTo: "#6366F1", // 보라색 (오른쪽)
  // 버튼 텍스트 색상
  buttonText: "#2563EB", // 파란색
} as const;

/**
 * 텍스트 콘텐츠
 */
const CONTENT = {
  headingBold: "Creators Are Making",
  headingLight: "$5 Million Every Day On Kajabi",
  buttonText: "START FREE TRIAL",
  buttonHref: "#",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface KajabiCtaFooterProps {
  headingBold?: string;
  headingLight?: string;
  buttonText?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
}

export default function KajabiCtaFooter({
  headingBold = CONTENT.headingBold,
  headingLight = CONTENT.headingLight,
  buttonText = CONTENT.buttonText,
  buttonHref = CONTENT.buttonHref,
  onButtonClick,
}: KajabiCtaFooterProps) {
  return (
    <section
      className="relative w-full py-16 md:py-20 lg:py-24"
      style={{
        background: `linear-gradient(to right, ${COLORS.gradientFrom}, ${COLORS.gradientTo})`,
      }}
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <h2 className="text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
            <span className="font-bold italic">{headingBold}</span>
            <br />
            <span className="font-light italic">{headingLight}</span>
          </h2>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <a
            href={buttonHref}
            onClick={onButtonClick}
            className="inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ color: COLORS.buttonText }}
          >
            {buttonText}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
