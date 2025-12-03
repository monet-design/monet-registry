"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#000000",
    accent: "#BA5E15",
    accentLight: "#D06A1B",
    textGray: "#555555",
    textWhite: "#FFFFFF",
    cardBg: "#0A0A0A",
    buttonWhiteBg: "#FFFFFF",
    buttonWhiteText: "#000000",
    buttonOrangeBg: "#BA5E15",
    buttonOrangeText: "#000000",
  },
  dark: {
    background: "#000000",
    accent: "#BA5E15",
    accentLight: "#D06A1B",
    textGray: "#555555",
    textWhite: "#FFFFFF",
    cardBg: "#0A0A0A",
    buttonWhiteBg: "#FFFFFF",
    buttonWhiteText: "#000000",
    buttonOrangeBg: "#BA5E15",
    buttonOrangeText: "#000000",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  header: {
    tagline: "ENHANCE VISUALS, SAVE TIME, STAY AHEAD",
  },
  leftCard: {
    title: "GLASS SET",
    features: [
      "5120X2880PX RESOLUTION",
      "STYLISH MATERIAL",
      "SEAMLESS LOOP",
      "DARK AND LIGHT COLORS",
      "OPTIMISED FOR WEB",
      "20 VIDEOS IN MP4 FORMAT",
      "20 PNG IMAGES",
    ],
    buttonText: "PURCHASE, $58",
  },
  rightCard: {
    eyebrow: "PRO ACCESS",
    title: "GET ACCESS TO\nHUGE LIBRARY OF\n3D ASSETS &\nMOCKUPS. 5000+\nITEMS.",
    buttonText: "TRY, $18/MONTH",
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

interface LeftCardContent {
  title: string;
  features: string[];
  buttonText: string;
}

interface RightCardContent {
  eyebrow: string;
  title: string;
  buttonText: string;
}

interface PricingOplMasterGlassProps {
  mode?: "light" | "dark";
  tagline?: string;
  leftCard?: LeftCardContent;
  rightCard?: RightCardContent;
  onPurchase?: () => void;
  onTryPro?: () => void;
}

export default function PricingOplMasterGlass({
  mode = "dark",
  tagline = DEFAULT_CONTENT.header.tagline,
  leftCard = DEFAULT_CONTENT.leftCard,
  rightCard = DEFAULT_CONTENT.rightCard,
  onPurchase,
  onTryPro,
}: PricingOplMasterGlassProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-12 md:py-16 px-4 min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: colors.background }}
    >
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap");

        .font-heading {
          font-family: "Inter", system-ui, sans-serif;
        }
      `}</style>

      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p
            className="font-heading text-xs md:text-sm font-medium tracking-[0.2em]"
            style={{ color: colors.textGray }}
          >
            {tagline}
          </p>
        </motion.div>

        {/* Arrow */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ArrowDown className="w-4 h-4" style={{ color: colors.textGray }} />
        </motion.div>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch">
          {/* Left Card - Glass Set */}
          <motion.div
            className="relative overflow-hidden rounded-xl p-6 flex-1 max-w-sm"
            style={{ backgroundColor: colors.cardBg }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Glass Effect Image */}
            <div className="relative w-full h-32 mb-6 rounded-lg overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background: `
                    radial-gradient(ellipse 80% 60% at 50% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 60%),
                    radial-gradient(ellipse 60% 50% at 70% 30%, rgba(186, 94, 21, 0.6) 0%, transparent 50%),
                    radial-gradient(ellipse 100% 80% at 30% 60%, rgba(59, 130, 246, 0.3) 0%, transparent 70%),
                    linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%)
                  `,
                }}
              />
              {/* Glass reflection line */}
              <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), rgba(186,94,21,0.5), transparent)",
                }}
              />
            </div>

            {/* Title */}
            <h3
              className="font-heading text-xl md:text-2xl font-bold tracking-wider mb-4"
              style={{ color: colors.accent }}
            >
              {leftCard.title}
            </h3>

            {/* Features List */}
            <ul className="space-y-1 mb-6">
              {leftCard.features.map((feature, index) => (
                <li
                  key={index}
                  className="font-heading text-[10px] md:text-xs flex items-start gap-2"
                  style={{ color: colors.textWhite }}
                >
                  <span style={{ color: colors.accent }}>+</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Purchase Button */}
            <motion.button
              onClick={onPurchase}
              className="w-full py-3 px-6 rounded-full font-heading text-xs font-semibold tracking-wider transition-all duration-200"
              style={{
                backgroundColor: colors.buttonWhiteBg,
                color: colors.buttonWhiteText,
              }}
              whileHover={{ scale: 1.02, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
            >
              {leftCard.buttonText}
            </motion.button>
          </motion.div>

          {/* Right Card - Pro Access */}
          <motion.div
            className="relative overflow-hidden rounded-xl p-6 flex-1 max-w-sm"
            style={{
              backgroundColor: colors.cardBg,
              boxShadow: `0 0 30px rgba(186, 94, 21, 0.3), inset 0 0 0 1px rgba(186, 94, 21, 0.5)`,
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Eyebrow */}
            <p
              className="font-heading text-[10px] md:text-xs font-medium tracking-wider mb-4"
              style={{ color: colors.accent }}
            >
              {rightCard.eyebrow}
            </p>

            {/* Title */}
            <h3
              className="font-heading text-2xl md:text-3xl font-black leading-tight whitespace-pre-line mb-auto"
              style={{ color: colors.accent }}
            >
              {rightCard.title}
            </h3>

            {/* Spacer */}
            <div className="flex-grow min-h-16" />

            {/* Try Button */}
            <motion.button
              onClick={onTryPro}
              className="w-full py-3 px-6 rounded-full font-heading text-xs font-semibold tracking-wider transition-all duration-200 mt-8"
              style={{
                backgroundColor: colors.buttonOrangeBg,
                color: colors.buttonOrangeText,
              }}
              whileHover={{ scale: 1.02, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
            >
              {rightCard.buttonText}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
