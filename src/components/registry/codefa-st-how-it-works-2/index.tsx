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
    accent: "#a7f3d0", // 민트 그린 하이라이트
    accentHover: "#6ee7b7", // 민트 그린 호버
    buttonBg: "#d1fae5", // 버튼 배경
    buttonText: "#065f46", // 버튼 텍스트
    warningText: "#dc2626", // 빨간색 경고 텍스트
  },
  dark: {
    accent: "#a7f3d0",
    accentHover: "#6ee7b7",
    buttonBg: "#d1fae5",
    buttonText: "#065f46",
    warningText: "#ef4444",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Ban, Check } from "lucide-react";

interface FlywheelStep {
  emoji: string;
  label: string;
}

interface CodefaStHowItWorks2Props {
  mode?: "light" | "dark";
  warningText?: string;
  title?: string;
  highlightedWord?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  footnote?: string;
  steps?: FlywheelStep[];
}

export default function CodefaStHowItWorks2({
  mode = "light",
  warningText = 'Instead of watching 100 hours of "JavaScript Basics" videos...',
  title = "Start a learning",
  highlightedWord = "flywheel",
  description = "Code like an entrepreneur — build your idea in 14 days to get real-world feedback and keep learning as you go.",
  ctaText = "Get instant access",
  ctaHref = "#",
  footnote = "No experience needed",
  steps = [
    { emoji: "📖", label: "Learn what you need" },
    { emoji: "⚡", label: "Build features" },
    { emoji: "🚀", label: "Launch" },
    { emoji: "💡", label: "Get feedback" },
  ],
}: CodefaStHowItWorks2Props) {
  const colors = COLORS[mode];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const flywheelVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative w-full bg-white py-16 lg:py-24">
      <motion.div
        className="max-w-4xl mx-auto px-6 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Warning text */}
        <motion.div
          className="flex items-center gap-2 mb-12"
          variants={itemVariants}
        >
          <Ban
            className="w-5 h-5 flex-shrink-0"
            style={{ color: colors.warningText }}
          />
          <p
            className="text-lg italic"
            style={{ color: colors.warningText }}
          >
            {warningText}
          </p>
        </motion.div>

        {/* Flywheel diagram */}
        <motion.div
          className="relative w-full max-w-md aspect-square mb-12"
          variants={flywheelVariants}
        >
          {/* Step positions in flywheel - top, right, bottom, left */}
          {steps.map((step, index) => {
            // Position each step in a circular pattern
            const positions = [
              { top: "0%", left: "50%", transform: "translate(-50%, 0)" }, // top
              { top: "50%", right: "0%", transform: "translate(0, -50%)" }, // right
              { bottom: "0%", left: "50%", transform: "translate(-50%, 0)" }, // bottom
              { top: "50%", left: "0%", transform: "translate(0, -50%)" }, // left
            ];

            const arrowPositions = [
              { top: "20%", right: "15%", rotate: "45deg" }, // top-right arrow
              { bottom: "20%", right: "15%", rotate: "135deg" }, // bottom-right arrow
              { bottom: "20%", left: "15%", rotate: "225deg" }, // bottom-left arrow
              { top: "20%", left: "15%", rotate: "315deg" }, // top-left arrow
            ];

            return (
              <motion.div
                key={index}
                className="absolute flex flex-col items-center gap-2"
                style={positions[index]}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.4 }}
              >
                <span className="text-4xl md:text-5xl">{step.emoji}</span>
                <span className="text-sm md:text-base font-semibold text-gray-900 text-center whitespace-nowrap">
                  {step.label}
                </span>
              </motion.div>
            );
          })}

          {/* Curved arrows between steps */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Top-right curved arrow */}
            <motion.path
              d="M110 35 Q 145 35, 160 70"
              stroke="#374151"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            <motion.polygon
              points="158,75 165,68 155,65"
              fill="#374151"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            />

            {/* Right-bottom curved arrow */}
            <motion.path
              d="M165 130 Q 165 165, 130 175"
              stroke="#374151"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65, duration: 0.5 }}
            />
            <motion.polygon
              points="125,173 130,182 135,170"
              fill="#374151"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.15 }}
            />

            {/* Bottom-left curved arrow */}
            <motion.path
              d="M70 175 Q 35 165, 35 130"
              stroke="#374151"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
            />
            <motion.polygon
              points="33,125 27,133 40,132"
              fill="#374151"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3 }}
            />

            {/* Left-top curved arrow */}
            <motion.path
              d="M35 70 Q 35 35, 70 30"
              stroke="#374151"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.95, duration: 0.5 }}
            />
            <motion.polygon
              points="75,28 67,22 65,35"
              fill="#374151"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.45 }}
            />
          </svg>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 text-center mb-6"
          variants={itemVariants}
        >
          {title}{" "}
          <span className="relative inline-block">
            <span className="relative z-10">{highlightedWord}</span>
            <span
              className="absolute bottom-1 md:bottom-2 left-0 right-0 h-3 md:h-4 -mx-1"
              style={{ backgroundColor: colors.accent }}
            />
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mb-8 leading-relaxed"
          variants={itemVariants}
        >
          {description}
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: colors.buttonBg,
              color: colors.buttonText,
            }}
          >
            {ctaText}
          </a>
        </motion.div>

        {/* Footnote */}
        <motion.div
          className="flex items-center gap-2 mt-6"
          variants={itemVariants}
        >
          <Check className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-500">{footnote}</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
