"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#0D4D40",
    accent: "#00A47C",
  },
  dark: {
    background: "#0A3D33",
    accent: "#00C896",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface WhattimeCta9Props {
  mode?: "light" | "dark";
  title?: string;
  description?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

export default function WhattimeCta9({
  mode = "light",
  title = "팀을 위한 온라인 예약 서비스",
  description = "되는 시간으로 예약페이지를 만들고, 간편하게 일정 조율을 해보세요.",
  primaryCtaText = "7일 무료 시작하기",
  secondaryCtaText = "도입 문의하기",
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: WhattimeCta9Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 sm:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-gray-300 mb-8 max-w-xl mx-auto"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onPrimaryCtaClick}
            className="rounded-lg border border-white/30 bg-transparent px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            {primaryCtaText}
          </button>
          <button
            onClick={onSecondaryCtaClick}
            className="rounded-lg bg-white px-6 py-3 text-sm font-medium transition-colors hover:bg-gray-100"
            style={{ color: colors.background }}
          >
            {secondaryCtaText}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
