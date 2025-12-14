"use client";

import { motion } from "motion/react";
import Image from "next/image";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    textPrimary: "#FFFFFF",
    textSecondary: "rgba(255, 255, 255, 0.8)",
    overlay: "rgba(0, 0, 0, 0.4)",
  },
  dark: {
    textPrimary: "#FFFFFF",
    textSecondary: "rgba(255, 255, 255, 0.8)",
    overlay: "rgba(0, 0, 0, 0.6)",
  },
} as const;

const IMAGES = {
  background: {
    path: "/scraped/payhere-in-2025-12-14/images/image-50.jpg",
    alt: "팝업 현장에서 카드단말기로 결제하는 모습",
    prompt: "Close-up of hand using wireless payment terminal at popup event, receipt printing, warm ambient lighting",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface PayhereInFeature2Props {
  mode?: "light" | "dark";
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  onLearnMore?: () => void;
}

export default function PayhereInFeature2({
  mode = "light",
  backgroundImage = IMAGES.background.path,
  title = "배달·팝업·박람회에서\n무선으로 자유롭게",
  subtitle = "블랙핑크 굿즈 스토어",
  onLearnMore,
}: PayhereInFeature2Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full h-screen min-h-[500px] lg:min-h-[700px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="무선 결제 단말기 사용 현장"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${colors.overlay} 0%, transparent 40%, transparent 60%, ${colors.overlay} 100%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-center"
        >
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 lg:mb-6 whitespace-pre-line"
            style={{ color: colors.textPrimary }}
          >
            {title}
          </h2>
          <p
            className="text-lg md:text-xl lg:text-2xl"
            style={{ color: colors.textSecondary }}
          >
            {subtitle}
          </p>
        </motion.div>
      </div>

      {/* Bottom CTA buttons - fixed at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/60 to-transparent p-6 lg:hidden">
        <div className="flex gap-3 max-w-lg mx-auto">
          <button
            className="flex-1 py-3 px-4 rounded-full border-2 border-white text-white font-medium text-sm hover:bg-white/10 transition-colors"
          >
            단말기 필요하시면, 빠른 상담
          </button>
          <button
            onClick={onLearnMore}
            className="flex-1 py-3 px-4 rounded-full bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors"
          >
            네이버 플레이스 연동 단말기
          </button>
        </div>
      </div>

      {/* Side navigation dots */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-3">
        <button className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/50 transition-colors" />
        <button className="w-3 h-3 rounded-full bg-white hover:bg-white/80 transition-colors" />
        <button className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/50 transition-colors" />
      </div>
    </section>
  );
}
