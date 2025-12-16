"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    accent: "#0099FF",
    accentHover: "#0088EE",
    primary: "#000000",
    primaryHover: "#1a1a1a",
  },
  dark: {
    accent: "#0099FF",
    accentHover: "#33AAFF",
    primary: "#FFFFFF",
    primaryHover: "#E5E5E5",
  },
} as const;

const CONTENT = {
  badge: "트래킷 신규 기능 확인",
  headline: "엔터프라이즈를 위한 커스텀 영업 CRM",
  subheadline: "예측 가능한 매출, 반복 가능한 성장",
  description:
    "트래킷은 영업 데이터를 자동으로 수집하고 정리해 매출 흐름을 예측하고, 조직이 체계적으로 성장할 수 있도록 돕습니다. 지금 시작하세요.",
  primaryCta: "무료로 시작하기",
  secondaryCta: "문의하기",
  primaryCtaLink: "https://app.trackit.so/",
  secondaryCtaLink: "/contact",
  videoUrl:
    "https://framerusercontent.com/assets/ltJy5CdXtSefMJVvy8RGhP65KGE.mp4",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface TrackitSoHero0Props {
  mode?: "light" | "dark";
}

export default function TrackitSoHero0({
  mode = "light",
}: TrackitSoHero0Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className={`relative w-full overflow-hidden ${
        isDark ? "bg-gray-950" : "bg-white"
      }`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(0,153,255,0.15) 0%, rgba(153,102,255,0.1) 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-24 pb-16">
        {/* Header content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left side - Headlines */}
          <div className="flex-1 space-y-6">
            {/* Badge */}
            <motion.a
              href="https://community.trackit.so/changelog"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${
                isDark
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              } transition-colors`}
            >
              <span
                className="w-4 h-4 rounded-full"
                style={{
                  background:
                    "linear-gradient(97deg, #FF4747 0%, #E39400 18%, #00AD09 38%, #0097FE 58%, #9966FF 77%, #F347FF 100%)",
                }}
              />
              {CONTENT.badge}
            </motion.a>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {CONTENT.headline}
            </motion.h1>
          </div>

          {/* Right side - Description and CTAs */}
          <div className="flex-1 space-y-6 lg:pt-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-xl md:text-2xl font-semibold ${
                isDark ? "text-gray-200" : "text-gray-800"
              }`}
            >
              {CONTENT.subheadline}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`text-base md:text-lg leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {CONTENT.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href={CONTENT.primaryCtaLink}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium text-white transition-all hover:scale-[1.02] shadow-lg"
                style={{ backgroundColor: colors.primary }}
              >
                {CONTENT.primaryCta}
              </a>
              <a
                href={CONTENT.secondaryCtaLink}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium text-white transition-all hover:scale-[1.02] shadow-lg"
                style={{ backgroundColor: colors.accent }}
              >
                {CONTENT.secondaryCta}
              </a>
            </motion.div>
          </div>
        </div>

        {/* Video/Dashboard showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 relative"
        >
          {/* Decorative rings behind */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[600px] rounded-full border border-gray-200/30 dark:border-gray-700/30" />
            <div className="absolute w-[450px] h-[450px] rounded-full border border-gray-200/40 dark:border-gray-700/40" />
            <div className="absolute w-[300px] h-[300px] rounded-full border border-gray-200/50 dark:border-gray-700/50" />
          </div>

          {/* Video container */}
          <div
            className={`relative rounded-2xl overflow-hidden shadow-2xl ${
              isDark ? "bg-gray-800/60" : "bg-gray-100/60"
            } backdrop-blur-sm`}
          >
            <video
              src={CONTENT.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-2xl"
              style={{ maxHeight: "600px", objectFit: "cover" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
