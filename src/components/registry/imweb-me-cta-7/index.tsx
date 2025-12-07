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
    // Button 색상 (거의 검정)
    button: "#1F1F1F",
    buttonHover: "#333333",
    buttonText: "#FFFFFF",
    // 배경
    background: "#FFFFFF",
  },
  dark: {
    button: "#FFFFFF",
    buttonHover: "#E5E5E5",
    buttonText: "#1F1F1F",
    background: "#111111",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface ImwebMeCta7Props {
  mode?: "light" | "dark";
  title?: string;
  titleLine2?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function ImwebMeCta7({
  mode = "light",
  title = "시작이 쉬워서 성장이 쉬운",
  titleLine2 = "아임웹과 함께하세요",
  buttonText = "지금 무료로 시작하기",
  onButtonClick,
}: ImwebMeCta7Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-24 md:py-32"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-4xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`text-3xl font-bold leading-tight md:text-4xl lg:text-[40px] ${
            mode === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          {title}
          <br />
          {titleLine2}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-8"
        >
          <button
            onClick={onButtonClick}
            className="inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-base font-medium transition-colors duration-200 hover:opacity-90"
            style={{
              backgroundColor: colors.button,
              color: colors.buttonText,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.buttonHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.button;
            }}
          >
            {buttonText}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
