"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 텍스트 콘텐츠
 */
const CONTENT = {
  heading: "지금 바로 시작하세요",
  description: "베타 무료크레딧을 통해 Patenty의 주요 기능을 경험해보세요.",
  buttonText: "무료크레딧으로 시작하기",
  buttonHref: "/ko/login",
} as const;

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#000000",
  headingText: "#FFFFFF",
  descriptionText: "#D4D4D4", // neutral-300
  buttonBg: "#FFFFFF",
  buttonText: "#171717", // neutral-900
  buttonHoverBg: "#F5F5F5", // neutral-100
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface PatentyAiCta5Props {
  mode?: "light" | "dark";
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
}

export default function PatentyAiCta5({
  mode = "dark",
  heading = CONTENT.heading,
  description = CONTENT.description,
  buttonText = CONTENT.buttonText,
  buttonHref = CONTENT.buttonHref,
  onButtonClick,
}: PatentyAiCta5Props) {
  return (
    <section
      className="relative py-20 sm:py-32 lg:py-40 px-4 overflow-hidden"
      style={{ backgroundColor: COLORS.background }}
      role="region"
      aria-label="행동 유도 섹션"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/30 to-transparent pointer-events-none" />

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1]"
            style={{ color: COLORS.headingText }}
          >
            {heading}
          </h2>

          {/* Description */}
          <p
            className="text-xl sm:text-2xl lg:text-3xl mb-12 leading-relaxed max-w-4xl mx-auto"
            style={{ color: COLORS.descriptionText }}
          >
            {description}
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={buttonHref}
              onClick={onButtonClick}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold tracking-tight rounded-md text-base sm:text-lg px-8 sm:px-10 py-4 transition-all duration-300 hover:shadow-2xl"
              style={{
                backgroundColor: COLORS.buttonBg,
                color: COLORS.buttonText,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {buttonText}
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" aria-hidden="true" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
