"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#0F172A",
    gridLine: "#1E293B",
    accent: "#8B5CF6",
    accentHover: "#7C3AED",
    textPrimary: "#FFFFFF",
    textSecondary: "#94A3B8",
    checkmark: "#8B5CF6",
  },
  dark: {
    background: "#0F172A",
    gridLine: "#1E293B",
    accent: "#8B5CF6",
    accentHover: "#7C3AED",
    textPrimary: "#FFFFFF",
    textSecondary: "#94A3B8",
    checkmark: "#8B5CF6",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  label: "Get access",
  title: "We like keeping things simple.",
  subtitle: "One plan one price.",
  price: "$15",
  priceUnit: "/month",
  features: [
    "Networked note-taking",
    "Offline sync",
    "Chrome and Safari web clipper",
    "End to end encryption",
    "Kindle highlights sync",
    "iOS app",
  ],
  buttonText: "Start your 14-day trial",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check } from "lucide-react";

interface PricingOplScreenshot14Props {
  mode?: "light" | "dark";
  label?: string;
  title?: string;
  subtitle?: string;
  price?: string;
  priceUnit?: string;
  features?: string[];
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function PricingOplScreenshot14({
  mode = "dark",
  label = DEFAULT_CONTENT.label,
  title = DEFAULT_CONTENT.title,
  subtitle = DEFAULT_CONTENT.subtitle,
  price = DEFAULT_CONTENT.price,
  priceUnit = DEFAULT_CONTENT.priceUnit,
  features = DEFAULT_CONTENT.features,
  buttonText = DEFAULT_CONTENT.buttonText,
  onButtonClick,
}: PricingOplScreenshot14Props) {
  const colors = COLORS[mode];

  // Split features into two columns
  const midIndex = Math.ceil(features.length / 2);
  const leftFeatures = features.slice(0, midIndex);
  const rightFeatures = features.slice(midIndex);

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${colors.gridLine} 1px, transparent 1px),
            linear-gradient(to bottom, ${colors.gridLine} 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.5,
        }}
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-14">
          {/* Label */}
          <motion.p
            className="text-sm font-medium mb-4 tracking-wide"
            style={{ color: colors.accent }}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {label}
          </motion.p>

          {/* Title */}
          <motion.h1
            className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight"
            style={{ color: colors.textPrimary }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {title}
            <br />
            {subtitle}
          </motion.h1>
        </div>

        {/* Pricing and Features Section */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 justify-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Price */}
          <div className="flex items-baseline">
            <span
              className="text-4xl md:text-5xl font-bold"
              style={{ color: colors.textPrimary }}
            >
              {price}
            </span>
            <span
              className="text-base md:text-lg ml-1"
              style={{ color: colors.textSecondary }}
            >
              {priceUnit}
            </span>
          </div>

          {/* Features Grid */}
          <div className="flex flex-col sm:flex-row gap-x-10 gap-y-2">
            {/* Left Column */}
            <ul className="space-y-2">
              {leftFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-2 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                >
                  <Check
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: colors.checkmark }}
                  />
                  <span style={{ color: colors.textSecondary }}>{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* Right Column */}
            <ul className="space-y-2">
              {rightFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-2 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.3 + (midIndex + index) * 0.05,
                  }}
                >
                  <Check
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: colors.checkmark }}
                  />
                  <span style={{ color: colors.textSecondary }}>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.button
            onClick={onButtonClick}
            className="px-8 py-3 rounded-full text-sm font-medium transition-colors duration-300"
            style={{
              backgroundColor: colors.accent,
              color: colors.textPrimary,
            }}
            whileHover={{
              backgroundColor: colors.accentHover,
              scale: 1.02,
            }}
            whileTap={{ scale: 0.98 }}
          >
            {buttonText}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
