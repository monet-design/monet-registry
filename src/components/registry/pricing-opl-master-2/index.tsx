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
    textPrimary: "#F5F5F0", // Cream/off-white for titles
    textSecondary: "#E8E8E3", // Light cream for prices
    textMuted: "#A8A8A3", // Muted text for features
    buttonBg: "#454543",
    buttonText: "#989691",
    buttonHoverBg: "#555553",
  },
  dark: {
    background: "#000000",
    textPrimary: "#F5F5F0",
    textSecondary: "#E8E8E3",
    textMuted: "#A8A8A3",
    buttonBg: "#454543",
    buttonText: "#989691",
    buttonHoverBg: "#555553",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  freePlan: {
    title: "Free",
    price: "$0",
    features: [
      "13 free illustrations",
      "SVG format files",
      "PNG format files",
      "Mention required",
    ],
    buttonText: "Get the illustrations for free",
  },
  proPlan: {
    title: "Pro",
    price: "$80",
    period: "each year",
    features: [
      "Unlimited access",
      "No mention required",
      "New content weekly",
      "PNG format files",
      "SVG format files",
      "Premium support",
    ],
    buttonText: "Soon",
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface PlanContent {
  title: string;
  price: string;
  period?: string;
  features: string[];
  buttonText: string;
}

interface PricingOplMaster2Props {
  mode?: "light" | "dark";
  freePlan?: PlanContent;
  proPlan?: PlanContent;
  onFreeClick?: () => void;
  onProClick?: () => void;
}

export default function PricingOplMaster2({
  mode = "dark",
  freePlan = DEFAULT_CONTENT.freePlan,
  proPlan = DEFAULT_CONTENT.proPlan,
  onFreeClick,
  onProClick,
}: PricingOplMaster2Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');

        .serif-italic {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Free Plan */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Title */}
            <h2
              className="serif-italic text-4xl md:text-5xl font-medium mb-4"
              style={{ color: colors.textPrimary }}
            >
              {freePlan.title}
            </h2>

            {/* Price */}
            <div
              className="serif-italic text-6xl md:text-7xl font-medium mb-8"
              style={{ color: colors.textSecondary }}
            >
              {freePlan.price}
            </div>

            {/* Features */}
            <ul className="space-y-1 mb-8">
              {freePlan.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-sm"
                  style={{ color: colors.textMuted }}
                >
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <motion.button
              onClick={onFreeClick}
              className="px-6 py-3 text-sm transition-colors duration-200"
              style={{
                backgroundColor: colors.buttonBg,
                color: colors.buttonText,
                borderRadius: "4px",
              }}
              whileHover={{
                backgroundColor: colors.buttonHoverBg,
              }}
              whileTap={{ scale: 0.98 }}
            >
              {freePlan.buttonText}
            </motion.button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Title */}
            <h2
              className="serif-italic text-4xl md:text-5xl font-medium mb-4"
              style={{ color: colors.textPrimary }}
            >
              {proPlan.title}
            </h2>

            {/* Price */}
            <div
              className="serif-italic text-6xl md:text-7xl font-medium"
              style={{ color: colors.textSecondary }}
            >
              {proPlan.price}
            </div>

            {/* Period */}
            {proPlan.period && (
              <div
                className="serif-italic text-lg mb-6"
                style={{ color: colors.textSecondary }}
              >
                {proPlan.period}
              </div>
            )}

            {/* Features */}
            <ul className="space-y-1 mb-8">
              {proPlan.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-sm"
                  style={{ color: colors.textMuted }}
                >
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <motion.button
              onClick={onProClick}
              className="px-6 py-3 text-sm transition-colors duration-200"
              style={{
                backgroundColor: colors.buttonBg,
                color: colors.buttonText,
                borderRadius: "4px",
              }}
              whileHover={{
                backgroundColor: colors.buttonHoverBg,
              }}
              whileTap={{ scale: 0.98 }}
            >
              {proPlan.buttonText}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
