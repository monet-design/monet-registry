"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    accent: "#7B68EE",
    accentHover: "#6B5ADB",
  },
  dark: {
    accent: "#9D8FFF",
    accentHover: "#8B7DFF",
  },
} as const;

const IMAGES = {
  background: {
    path: "/registry/channel-io-cta-6/cta-bg.webp",
    alt: "CTA 배경",
    prompt: "Beautiful gradient background with purple, blue, pink and orange colors, abstract fluid shapes, modern tech aesthetic",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ChannelIoCta6Props {
  mode?: "light" | "dark";
}

export default function ChannelIoCta6({
  mode = "light",
}: ChannelIoCta6Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${IMAGES.background.path})`,
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            채널톡과 함께 고객 경험을 혁신하세요.
            <br />
            무료로 시작할 수 있습니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              무료로 시작하기
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-full hover:bg-white/10 transition-all"
            >
              문의하기
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
