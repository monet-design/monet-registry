"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#E4AB1D",
    cardBg: "#111111",
    textPrimary: "#FFFFFF",
    textAccent: "#E4AB1D",
    buttonBg: "#E4AB1D",
    buttonText: "#111111",
  },
  dark: {
    background: "#111111",
    cardBg: "#1A1A1A",
    textPrimary: "#FFFFFF",
    textAccent: "#E4AB1D",
    buttonBg: "#E4AB1D",
    buttonText: "#111111",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  appScreenshot: {
    path: "/registry/pricing-opl-sixtep-screen/app-screenshot.jpg",
    alt: "Hand holding smartphone displaying a timer game app with yellow interface",
    prompt: `
      <is_transparent_background>false</is_transparent_background>
      <summary>A hand holding an iPhone displaying a yellow timer game app</summary>
      <mood>Modern, sleek, gaming, professional photography style</mood>
      <background_summary>Dark, moody background with blurred plant leaves creating depth and bokeh effect</background_summary>
      <primary_element>A human right hand holding a modern smartphone (iPhone) tilted slightly toward camera. The phone screen shows a bright yellow timer app interface with "01:31" as the main display, bar chart indicators, and game statistics. The phone has a golden/beige case.</primary_element>
      <etc_element>Soft ambient lighting highlighting the phone screen and hand, with natural shadows</etc_element>
    `,
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  freePlan: {
    title: "FREE TO PLAY",
    subtitle: "DAILY GAME",
  },
  proPlan: {
    title: "$3.99 FOR PRO",
    features: ["UNLIMITED GAMES", "STATS + BADGES", "MULTIPLE GAME COLORS"],
  },
  cta: {
    text: "to the app store",
    emoji: "🍌",
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface FreePlanContent {
  title: string;
  subtitle: string;
}

interface ProPlanContent {
  title: string;
  features: string[];
}

interface CtaContent {
  text: string;
  emoji: string;
}

interface PricingOplSixtepScreenProps {
  mode?: "light" | "dark";
  freePlan?: FreePlanContent;
  proPlan?: ProPlanContent;
  cta?: CtaContent;
  appScreenshotSrc?: string;
  onCtaClick?: () => void;
}

export default function PricingOplSixtepScreen({
  mode = "light",
  freePlan = DEFAULT_CONTENT.freePlan,
  proPlan = DEFAULT_CONTENT.proPlan,
  cta = DEFAULT_CONTENT.cta,
  appScreenshotSrc = IMAGES.appScreenshot.path,
  onCtaClick,
}: PricingOplSixtepScreenProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-12 md:py-20 px-4 md:px-8"
      style={{ backgroundColor: colors.background }}
    >
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap");

        .font-display {
          font-family: "Space Grotesk", system-ui, sans-serif;
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12">
          {/* Left Side - Free Plan */}
          <motion.div
            className="text-center md:text-left flex-shrink-0 order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="font-display text-xl md:text-2xl lg:text-3xl font-bold tracking-wider mb-1 md:mb-2"
              style={{ color: colors.textPrimary }}
            >
              {freePlan.title}
            </h2>
            <p
              className="font-display text-xs md:text-sm tracking-widest uppercase"
              style={{ color: colors.textAccent }}
            >
              {freePlan.subtitle}
            </p>
          </motion.div>

          {/* Center - App Screenshot Card */}
          <motion.div
            className="relative order-1 md:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="rounded-3xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: colors.cardBg }}
            >
              <div className="relative w-[280px] h-[180px] sm:w-[340px] sm:h-[220px] md:w-[400px] md:h-[260px] lg:w-[480px] lg:h-[300px]">
                <Image
                  src={appScreenshotSrc}
                  alt={IMAGES.appScreenshot.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Pro Plan */}
          <motion.div
            className="text-center md:text-right flex-shrink-0 order-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="font-display text-xl md:text-2xl lg:text-3xl font-bold tracking-wider mb-1 md:mb-2"
              style={{ color: colors.textPrimary }}
            >
              {proPlan.title}
            </h2>
            <ul className="space-y-0.5">
              {proPlan.features.map((feature, index) => (
                <li
                  key={index}
                  className="font-display text-xs md:text-sm tracking-widest uppercase"
                  style={{ color: colors.textAccent }}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-10 md:mt-14 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button
            onClick={onCtaClick}
            className="font-display text-sm md:text-base font-medium px-8 py-3 rounded-full flex items-center gap-3 transition-all duration-200"
            style={{
              backgroundColor: colors.buttonBg,
              color: colors.buttonText,
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{cta.emoji}</span>
            <span>{cta.text}</span>
            <span>{cta.emoji}</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
