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
    background: "#FFFFFF",
    cardBackground: "#FFFFFF",
    border: "#F3F4F6",
    divider: "#F3F4F6",
  },
  dark: {
    background: "#0A0A0A",
    cardBackground: "#141414",
    border: "#262626",
    divider: "#262626",
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

interface Feature {
  text: string;
}

interface PricingOplMaster26Props {
  mode?: "light" | "dark";
  sectionTitle?: string;
  sectionTitleHighlight?: string;
  planName?: string;
  price?: string;
  pricePeriod?: string;
  description?: string;
  pauseText?: string;
  featuresTitle?: string;
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  { text: "5 days a week" },
  { text: "1 design lead" },
  { text: "One request at a time" },
  { text: "Unlimited design" },
  { text: "Dedicated slack channel" },
  { text: "Unlimited revisions" },
];

export default function PricingOplMaster26({
  mode = "light",
  sectionTitle = "Our",
  sectionTitleHighlight = "packages",
  planName = "Monthly",
  price = "$6K",
  pricePeriod = "/mo",
  description = "Design services from a lead designer with 10 years experience. Ideal for an ongoing need for design and a desire for product growth.",
  pauseText = "Pause or cancel anytime",
  featuresTitle = "What you get",
  features = defaultFeatures,
}: PricingOplMaster26Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className="relative w-full py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-xl">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-2xl sm:text-3xl"
        >
          <span
            className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
          >
            {sectionTitle}
          </span>{" "}
          <span className={isDark ? "text-gray-500" : "text-gray-400"}>
            {sectionTitleHighlight}
          </span>
        </motion.h2>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border p-6 sm:p-8"
          style={{
            backgroundColor: colors.cardBackground,
            borderColor: colors.border,
            boxShadow: isDark
              ? "0 1px 3px 0 rgba(0, 0, 0, 0.3)"
              : "0 1px 3px 0 rgba(0, 0, 0, 0.05)",
          }}
        >
          {/* Plan Header */}
          <div className="flex items-center justify-between mb-4">
            <h3
              className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {planName}
            </h3>
            <div className="flex items-baseline">
              <span
                className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
              >
                {price}
              </span>
              <span
                className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
              >
                {pricePeriod}
              </span>
            </div>
          </div>

          {/* Description */}
          <p
            className={`text-sm leading-relaxed mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            {description}
          </p>

          {/* Pause Text */}
          <p
            className={`text-xs mb-6 ${isDark ? "text-gray-500" : "text-gray-400"}`}
          >
            {pauseText}
          </p>

          {/* Divider */}
          <div
            className="w-full h-px mb-6"
            style={{ backgroundColor: colors.divider }}
          />

          {/* Features Section */}
          <div>
            <h4
              className={`text-sm font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {featuresTitle}
            </h4>
            <ul className="space-y-2.5">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                >
                  {feature.text}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
