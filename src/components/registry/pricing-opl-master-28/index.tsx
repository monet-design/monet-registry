"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    // Primary 액센트 (버튼, 링크 등)
    headingText: "#1E1B4B", // 진한 네이비/인디고
    cardGradientStart: "#D4D3F8", // 라벤더
    cardGradientEnd: "#C7CAF2", // 라벤더 어두운
    buttonBg: "#1E1B4B", // 네이비 버튼
    buttonText: "#FFFFFF",
    secondaryCardBg: "#F0F0F4", // 밝은 회색
    checkColor: "#7C7DB8", // 보라 계열 체크 색상
  },
  dark: {
    headingText: "#E2E2FF",
    cardGradientStart: "#3730A3",
    cardGradientEnd: "#312E81",
    buttonBg: "#E2E2FF",
    buttonText: "#1E1B4B",
    secondaryCardBg: "#2D2D3D",
    checkColor: "#A5B4FC",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

interface FeatureItem {
  text: string;
}

interface PricingOplMaster28Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  featuredLabel?: string;
  featuredPrice?: string;
  featuredFeatures?: FeatureItem[];
  featuredButtonText?: string;
  secondaryLabel?: string;
  secondaryPrice?: string;
  secondaryDescription?: string;
  onFeaturedClick?: () => void;
}

export default function PricingOplMaster28({
  mode = "light",
  title = "Join the Figma Academy\nbeta program",
  subtitle = "Receive lifetime access to all current and future lessons at a discounted rate in\nexchange for feedback to help improve the program.",
  featuredLabel = "LIMITED TIME",
  featuredPrice = "$99",
  featuredFeatures = [
    { text: "2 modules available immediately" },
    { text: "4 more modules released over the\nremainder of the year" },
    { text: "Lifetime access to all future lessons" },
  ],
  featuredButtonText = "Join Today",
  secondaryLabel = "LATER IN 2021",
  secondaryPrice = "$499",
  secondaryDescription = "Figma Academy will launch\npublicly after every module\nhas been released through\nthe beta program.",
  onFeaturedClick,
}: PricingOplMaster28Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className={`relative w-full py-16 md:py-24 px-4 md:px-8 ${
        isDark ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-4xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1
            className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mb-4"
            style={{ color: colors.headingText }}
          >
            {title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p
            className={`text-sm md:text-base leading-relaxed max-w-xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {subtitle.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < subtitle.split("\n").length - 1 && <br />}
              </span>
            ))}
          </p>
        </motion.div>

        {/* Pricing Cards Container */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-0">
          {/* Featured Card (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 w-full max-w-[320px] md:mr-[-40px]"
          >
            <div
              className="rounded-2xl p-6 md:p-8 shadow-xl"
              style={{
                background: `linear-gradient(180deg, ${colors.cardGradientStart} 0%, ${colors.cardGradientEnd} 100%)`,
              }}
            >
              {/* Inner White Card */}
              <div
                className={`rounded-xl p-6 ${
                  isDark ? "bg-gray-900/90" : "bg-white"
                }`}
              >
                {/* Label */}
                <p
                  className={`text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase mb-2 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {featuredLabel}
                </p>

                {/* Price */}
                <p
                  className="text-4xl md:text-5xl font-bold mb-6"
                  style={{ color: colors.headingText }}
                >
                  {featuredPrice}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {featuredFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Sparkles
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: colors.checkColor }}
                      />
                      <span
                        className={`text-xs md:text-sm leading-relaxed ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {feature.text.split("\n").map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < feature.text.split("\n").length - 1 && <br />}
                          </span>
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onFeaturedClick}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full text-sm font-medium transition-all duration-200"
                  style={{
                    backgroundColor: colors.buttonBg,
                    color: colors.buttonText,
                  }}
                >
                  {featuredButtonText}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Secondary Card (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-0 w-full max-w-[260px] mt-[-20px] md:mt-0"
          >
            <div
              className={`rounded-2xl p-6 md:p-8 ${
                isDark ? "bg-gray-800/50" : ""
              }`}
              style={{
                backgroundColor: isDark ? undefined : colors.secondaryCardBg,
              }}
            >
              {/* Label */}
              <p
                className={`text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase mb-2 ${
                  isDark ? "text-gray-500" : "text-gray-400"
                }`}
              >
                {secondaryLabel}
              </p>

              {/* Price */}
              <p
                className={`text-3xl md:text-4xl font-bold mb-4 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {secondaryPrice}
              </p>

              {/* Description */}
              <p
                className={`text-xs md:text-sm leading-relaxed ${
                  isDark ? "text-gray-500" : "text-gray-500"
                }`}
              >
                {secondaryDescription.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < secondaryDescription.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
