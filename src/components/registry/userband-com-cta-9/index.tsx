"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#f5f5f0",
    cardBg: "#111827",
    heading: "#ffffff",
    text: "#9ca3af",
    buttonBg: "#ffffff",
    buttonText: "#111827",
  },
  dark: {
    background: "#1f2937",
    cardBg: "#111827",
    heading: "#ffffff",
    text: "#9ca3af",
    buttonBg: "#ffffff",
    buttonText: "#111827",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface UserbandComCta9Props {
  mode?: "light" | "dark";
}

export default function UserbandComCta9({
  mode = "light",
}: UserbandComCta9Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto rounded-3xl p-12 md:p-16 text-center"
          style={{ backgroundColor: colors.cardBg }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4"
            style={{ color: colors.heading }}
          >
            유저와 끈끈하게 연결되는 인프라를 경험하세요
          </h2>
          <p
            className="text-lg mb-8"
            style={{ color: colors.text }}
          >
            유저 중심 성장을 위한 올인원 서포트를 제공합니다
          </p>
          <motion.a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium rounded-md transition-colors"
            style={{
              backgroundColor: colors.buttonBg,
              color: colors.buttonText,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            시작하기
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
