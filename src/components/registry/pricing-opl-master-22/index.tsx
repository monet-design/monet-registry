"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#0A0A0A",
    cardBackground: "transparent",
    cardBorder: "#212121",
    textPrimary: "#FFFFFF",
    textSecondary: "rgba(255, 255, 255, 0.5)",
    textMuted: "rgba(255, 255, 255, 0.4)",
    accent: "#6D3DDC",
    accentHover: "#7B4DE8",
  },
  dark: {
    background: "#0A0A0A",
    cardBackground: "transparent",
    cardBorder: "#212121",
    textPrimary: "#FFFFFF",
    textSecondary: "rgba(255, 255, 255, 0.5)",
    textMuted: "rgba(255, 255, 255, 0.4)",
    accent: "#6D3DDC",
    accentHover: "#7B4DE8",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  title: "Start with a 14 day free trial",
  subtitle: "Build your site in minutes. No card required.",
  cardLabel: "Simple Pricing",
  price: "$15",
  priceUnit: "a month",
  billingNote: "billed annually or $20/mo billed monthly",
  buttonText: "Get started free",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface PricingOplMaster22Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  cardLabel?: string;
  price?: string;
  priceUnit?: string;
  billingNote?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function PricingOplMaster22({
  mode = "dark",
  title = DEFAULT_CONTENT.title,
  subtitle = DEFAULT_CONTENT.subtitle,
  cardLabel = DEFAULT_CONTENT.cardLabel,
  price = DEFAULT_CONTENT.price,
  priceUnit = DEFAULT_CONTENT.priceUnit,
  billingNote = DEFAULT_CONTENT.billingNote,
  buttonText = DEFAULT_CONTENT.buttonText,
  onButtonClick,
}: PricingOplMaster22Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-20 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl font-medium mb-3 tracking-tight"
            style={{ color: colors.textPrimary }}
          >
            {title}
          </h2>
          <p
            className="text-sm md:text-base"
            style={{ color: colors.textSecondary }}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          className="rounded-xl p-6 md:p-8"
          style={{
            border: `1px solid ${colors.cardBorder}`,
            backgroundColor: colors.cardBackground,
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Card Label */}
          <div className="text-center mb-6">
            <span
              className="text-sm font-medium"
              style={{ color: colors.textSecondary }}
            >
              {cardLabel}
            </span>
          </div>

          {/* Divider */}
          <div
            className="w-full h-px mb-6"
            style={{ backgroundColor: colors.cardBorder }}
          />

          {/* Price */}
          <div className="text-center mb-2">
            <span
              className="text-4xl md:text-5xl font-medium tracking-tight"
              style={{ color: colors.textPrimary }}
            >
              {price}
            </span>
            <span
              className="text-4xl md:text-5xl font-medium tracking-tight ml-2"
              style={{ color: colors.textPrimary }}
            >
              {priceUnit}
            </span>
          </div>

          {/* Billing Note */}
          <div className="text-center mb-8">
            <span
              className="text-xs md:text-sm"
              style={{ color: colors.textMuted }}
            >
              {billingNote}
            </span>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <motion.button
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium text-white transition-all"
              style={{ backgroundColor: colors.accent }}
              whileHover={{
                backgroundColor: colors.accentHover,
                scale: 1.02
              }}
              whileTap={{ scale: 0.98 }}
              onClick={onButtonClick}
            >
              {buttonText}
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
