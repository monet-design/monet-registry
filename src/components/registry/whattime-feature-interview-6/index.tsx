"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#00A47C",
    accentLight: "#E6F7F2",
  },
  dark: {
    accent: "#00C896",
    accentLight: "#0D3D2D",
  },
} as const;

const IMAGES = {
  dashboard: {
    path: "/scraped/whattime-co-kr-2025-12-14/images/image-81.png",
    alt: "일정 조율 대시보드",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface WhattimeFeatureInterview6Props {
  mode?: "light" | "dark";
  subtitle?: string;
  title?: string;
  highlightedText?: string;
  description?: string;
}

export default function WhattimeFeatureInterview6({
  mode = "light",
  subtitle = "면접 기능",
  title = "일정 조율",
  highlightedText = "시간 단축",
  description = "여러 번 주고받는 일정 조율 과정을 한 번에 해결해 드립니다.\n언제 되는지 묻지 않아도 캘린들리 보다 쉽고 빠르게 일정 예약 잡을 수 있습니다.",
}: WhattimeFeatureInterview6Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full bg-white py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title} <span style={{ color: colors.accent }}>{highlightedText}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto whitespace-pre-line">
            {description}
          </p>
        </motion.div>

        {/* Dashboard Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-5xl"
        >
          <Image
            src={IMAGES.dashboard.path}
            alt={IMAGES.dashboard.alt}
            width={1848}
            height={892}
            className="w-full h-auto rounded-xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
