"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#FF6154", // Product Hunt style orange-red
    accentHover: "#E5574B",
    secondary: "#3B82F6", // Blue for secondary glow
    background: "#1A1A1A",
  },
  dark: {
    accent: "#FF6154",
    accentHover: "#FF7A70",
    secondary: "#3B82F6",
    background: "#0A0A0A",
  },
} as const;

/**
 * 텍스트 콘텐츠
 */
const CONTENT = {
  headlinePrefix: "Ready to",
  headlineAccent: "launch",
  headlineSuffix: "?",
  subheadline:
    "Join thousands of makers who launched their products to millions of users.",
  buttonText: "Submit Your Product",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface SleekSaasCtaProps {
  mode?: "light" | "dark";
  headlinePrefix?: string;
  headlineAccent?: string;
  headlineSuffix?: string;
  subheadline?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function SleekSaasCta({
  mode = "dark",
  headlinePrefix = CONTENT.headlinePrefix,
  headlineAccent = CONTENT.headlineAccent,
  headlineSuffix = CONTENT.headlineSuffix,
  subheadline = CONTENT.subheadline,
  buttonText = CONTENT.buttonText,
  onButtonClick,
}: SleekSaasCtaProps) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      className="py-32 px-4 text-white relative overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Background Glow Effects */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-20"
        style={{ backgroundColor: colors.accent }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[100px] opacity-10"
        style={{ backgroundColor: colors.secondary }}
      />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-7xl font-serif mb-6 leading-tight"
        >
          {headlinePrefix}{" "}
          <span className="italic" style={{ color: colors.accent }}>
            {headlineAccent}
          </span>
          {headlineSuffix}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-xl mb-10 max-w-xl mx-auto"
        >
          {subheadline}
        </motion.p>

        <motion.button
          variants={itemVariants}
          onClick={onButtonClick}
          className="px-10 py-5 rounded-full font-bold text-xl text-white shadow-2xl transition-transform hover:scale-105"
          style={{ backgroundColor: colors.accent }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          {buttonText}
        </motion.button>
      </motion.div>
    </section>
  );
}
