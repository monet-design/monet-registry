"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#F97316",
    accentHover: "#EA580C",
    background: "#FDF6EE",
  },
  dark: {
    accent: "#FB923C",
    accentHover: "#F97316",
    background: "#1C1917",
  },
} as const;

const CONTENT = {
  title: "재무 AI 어시스턴트, 볼타",
  subtitle: "세금계산서부터 미수금까지, 반복 업무는 AI가 대신합니다.",
  primaryCta: "재무 AI 체험하기",
  secondaryCta: "문의하기",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface BoltaIoHero1Props {
  mode?: "light" | "dark";
}

export default function BoltaIoHero1({ mode = "light" }: BoltaIoHero1Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full pb-12 lg:pb-24">
      <div
        className="relative w-full pt-16 lg:pt-24"
        style={{ backgroundColor: colors.background }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Content */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              {CONTENT.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600 mb-10 md:mb-20"
            >
              {CONTENT.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#contact"
                className="px-4 py-2 rounded-lg text-gray-700 bg-white transition-colors font-medium"
              >
                {CONTENT.secondaryCta}
              </a>
              <motion.a
                href="#demo"
                className="px-4 py-2 rounded-lg text-white font-medium"
                style={{ backgroundColor: colors.accent }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {CONTENT.primaryCta}
              </motion.a>
            </motion.div>
          </div>

          <motion.video
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mx-auto w-full max-w-5xl border rounded-xl z-10"
            src="/registry/bolta-io-hero-1/bolta.mp4"
            autoPlay
            loop
            muted
          ></motion.video>
        </div>
      </div>

      <div className="w-full bg-white h-12 -mt-12 lg:h-24 lg:-mt-24 z-0 relative" />
    </section>
  );
}
