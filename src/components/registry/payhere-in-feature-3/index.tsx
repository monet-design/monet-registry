"use client";

import { motion } from "motion/react";
import Image from "next/image";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    textPrimary: "#1A1A1A",
    textSecondary: "#6B7280",
    background: "#F8F9FA",
    overlay: "rgba(255, 255, 255, 0.5)",
  },
  dark: {
    textPrimary: "#F8FAFC",
    textSecondary: "#94A3B8",
    background: "#0F172A",
    overlay: "rgba(0, 0, 0, 0.3)",
  },
} as const;

const IMAGES = {
  background: {
    path: "/scraped/payhere-in-2025-12-14/images/image-51.jpg",
    alt: "카운터에서 고객이 결제하는 모습",
    prompt: "Modern kitchen counter with payment terminal and water faucet, clean minimalist interior design, bright ambient lighting",
  },
} as const;

const VIDEOS = {
  terminal: {
    url: "https://payhere.in/static/terminal-6de22df483dece0c605b16a6b7485290.mp4",
    poster: "/scraped/payhere-in-2025-12-14/videos/thumb-2.jpg",
  },
  terminalMax: {
    url: "https://payhere.in/static/terminalmax-1da7978a74785c0b0d59d63d677e28ac.mp4",
    poster: "",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface PayhereInFeature3Props {
  mode?: "light" | "dark";
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  showVideo?: boolean;
  videoUrl?: string;
  videoPoster?: string;
  onLearnMore?: () => void;
}

export default function PayhereInFeature3({
  mode = "light",
  backgroundImage = IMAGES.background.path,
  title = "카운터는 넓게\n고객과는 더 가깝게",
  subtitle = "카운터형 단말기에요",
  showVideo = false,
  videoUrl = VIDEOS.terminal.url,
  videoPoster = VIDEOS.terminal.poster,
  onLearnMore,
}: PayhereInFeature3Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full h-screen min-h-[500px] lg:min-h-[700px] max-h-[900px] overflow-hidden">
      {/* Background image or video */}
      <div className="absolute inset-0">
        {showVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={videoPoster}
            className="w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={backgroundImage}
            alt="카운터형 결제 단말기"
            fill
            className="object-cover"
            priority
          />
        )}
        {/* Light overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${colors.overlay} 0%, transparent 60%)`,
          }}
        />
      </div>

      {/* Content - positioned at top right */}
      <div className="relative z-10 h-full flex flex-col items-end justify-center px-6 lg:px-16 text-right">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
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

      {/* Bottom CTA buttons */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-white/80 to-transparent p-6 lg:hidden">
        <div className="flex gap-3 max-w-lg mx-auto">
          <button
            className="flex-1 py-3 px-4 rounded-full border-2 border-gray-900 text-gray-900 font-medium text-sm hover:bg-gray-100 transition-colors"
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
        <button className="w-3 h-3 rounded-full bg-gray-400/30 hover:bg-gray-400/50 transition-colors" />
        <button className="w-3 h-3 rounded-full bg-gray-400/30 hover:bg-gray-400/50 transition-colors" />
        <button className="w-3 h-3 rounded-full bg-gray-900 hover:bg-gray-700 transition-colors" />
      </div>

      {/* Floating help buttons */}
      <div className="absolute bottom-8 right-8 z-30 hidden lg:flex flex-col gap-3">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
        >
          <span className="text-xs font-medium text-gray-600">TOP</span>
        </motion.button>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="w-14 h-14 rounded-full bg-blue-600 shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </motion.button>
      </div>
    </section>
  );
}
