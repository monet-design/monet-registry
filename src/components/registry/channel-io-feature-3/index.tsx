"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    accent: "#7B68EE",
    accentLight: "rgba(123, 104, 238, 0.1)",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  dark: {
    accent: "#9D8FFF",
    accentLight: "rgba(157, 143, 255, 0.2)",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
} as const;

const IMAGES = {
  cardBg: {
    path: "/registry/channel-io-feature-3/card-bg.png",
    alt: "AI 기능 카드 배경",
    prompt:
      "Soft purple gradient card with rounded corners, modern UI design, subtle shadow",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

interface ChannelIoFeature3Props {
  mode?: "light" | "dark";
}

export default function ChannelIoFeature3({
  mode = "light",
}: ChannelIoFeature3Props) {
  const colors = COLORS[mode];

  return (
    <section className="w-full bg-white py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            반복되는 문의는{" "}
            <span style={{ color: colors.accent }}>AI로 해결</span>하고
            <br />
            중요한 일에 집중하세요
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
