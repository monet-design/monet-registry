"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    priceBoxBg: "#585955",
    accent: "#E2BB41",
    accentHover: "#D4A82F",
  },
  dark: {
    priceBoxBg: "#3A3A38",
    accent: "#E2BB41",
    accentHover: "#D4A82F",
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
import { Check } from "lucide-react";

interface Feature {
  text: string;
}

interface PricingOplBig38Props {
  mode?: "light" | "dark";
  title?: string;
  description?: string;
  price?: string;
  features?: Feature[];
  ctaText?: string;
  onCtaClick?: () => void;
}

const defaultFeatures: Feature[] = [
  { text: "WordPress Theme Customization" },
  { text: "Content Setup" },
  { text: "Plugin Installation & Configuration" },
  { text: "Web Hosting Setup" },
];

export default function PricingOplBig38({
  mode = "light",
  title = "So how much does it cost?",
  description = "Often, a website's budget and timeline grows larger than expected. Our website-in-a-day process gives you a beautiful, uniquely customized website, at a price that won't break the bank.",
  price = "$999",
  features = defaultFeatures,
  ctaText = "Schedule your day",
  onCtaClick,
}: PricingOplBig38Props) {
  const colors = COLORS[mode];

  return (
    <section
      className={`relative w-full py-12 sm:py-16 lg:py-20 ${
        mode === "dark" ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`mb-4 text-center text-2xl font-bold tracking-tight sm:text-3xl ${
            mode === "dark" ? "text-white" : "text-gray-900"
          }`}
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`mx-auto mb-8 max-w-md text-center text-sm leading-relaxed ${
            mode === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {description}
        </motion.p>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`overflow-hidden rounded-lg border ${
            mode === "dark" ? "border-gray-800" : "border-gray-200"
          }`}
        >
          {/* Price Header */}
          <div
            className="flex items-center justify-center py-8"
            style={{ backgroundColor: colors.priceBoxBg }}
          >
            <span
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {price}
            </span>
          </div>

          {/* Features List */}
          <div
            className={`px-6 py-6 ${
              mode === "dark" ? "bg-gray-900" : "bg-white"
            }`}
          >
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Check
                    className="h-4 w-4 flex-shrink-0"
                    style={{ color: colors.accent }}
                    strokeWidth={3}
                  />
                  <span
                    className={`text-sm ${
                      mode === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {feature.text}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCtaClick}
              className="mt-8 w-full rounded-md py-3 text-sm font-semibold text-white transition-colors"
              style={{
                backgroundColor: colors.accent,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.accentHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.accent;
              }}
            >
              {ctaText}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
