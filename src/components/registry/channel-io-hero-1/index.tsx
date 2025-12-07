"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    accent: "#7B68EE",
    accentHover: "#6B5ADB",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  dark: {
    accent: "#9D8FFF",
    accentHover: "#8B7DFF",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
} as const;

const IMAGES = {
  heroBg: {
    path: "/registry/channel-io-hero-1/hero-bg.webp",
    alt: "AI 고객 상담 데모 화면",
    prompt:
      "Abstract colorful gradient background with soft purple, pink and blue colors, fluid organic shapes, modern tech aesthetic",
  },
} as const;

const VIDEO = {
  src: "https://cdn.channel.io/cht-homepage/assets/v1.30.6/public/images/alf-customer/alf-v2-hero-ko.mp4",
  poster: "/registry/channel-io-hero-1/hero-bg.webp",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ChannelIoHero1Props {
  mode?: "light" | "dark";
}

export default function ChannelIoHero1({
  mode = "light",
}: ChannelIoHero1Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full overflow-hidden px-2">
      <div className="w-full bg-linear-to-b from-white via-blue-400 to-black rounded-b-4xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 ">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              고객 상담의 미래는 AI 입니다
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 max-w-2xl font-bold mx-auto mb-8">
              올인원 AI 메신저 채널톡과 함께 준비하세요.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 text-lg font-bold text-white rounded-xl transition-all hover:scale-105 bg-black"
            >
              무료로 시작하기
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Video/Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                poster={VIDEO.poster}
              >
                <source src={VIDEO.src} type="video/mp4" />
              </video>
            </div>

            {/* Decorative gradient blur */}
            <div
              className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[120%] h-40 blur-3xl opacity-30"
              style={{ background: colors.gradient }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
