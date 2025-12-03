"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F5F5F5",
    cardBg: "#FFFFFF",
    textPrimary: "#1A1A1A",
    textSecondary: "#6B7280",
    toggleBg: "#E5E7EB",
    toggleActiveBg: "#FFFFFF",
    accentPurple: "#7B25C5",
    accentPurpleHover: "#9350CD",
    buttonText: "#FFFFFF",
  },
  dark: {
    background: "#0A0A0A",
    cardBg: "#1B1B1B",
    textPrimary: "#FFFFFF",
    textSecondary: "#6B7280",
    toggleBg: "#303030",
    toggleActiveBg: "#1B1B1B",
    accentPurple: "#7B25C5",
    accentPurpleHover: "#9350CD",
    buttonText: "#FFFFFF",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  header: {
    title: "One plan, all in.",
    subtitle: "Simple, affordable pricing.",
  },
  toggle: {
    monthly: "Monthly",
    annually: "Annually",
    annuallySavings: "Save 2 months",
  },
  pricing: {
    monthly: {
      price: "$6",
      period: "Billed Monthly",
    },
    annually: {
      price: "$60",
      period: "Billed Annually",
    },
  },
  cta: {
    buttonText: "Start your 7 day free trial",
    disclaimer: "Your first payment will be taken after your",
    disclaimerBold: "7 day trial",
    disclaimerEnd: ".",
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";

interface HeaderContent {
  title: string;
  subtitle: string;
}

interface ToggleContent {
  monthly: string;
  annually: string;
  annuallySavings: string;
}

interface PriceDetail {
  price: string;
  period: string;
}

interface PricingContent {
  monthly: PriceDetail;
  annually: PriceDetail;
}

interface CTAContent {
  buttonText: string;
  disclaimer: string;
  disclaimerBold: string;
  disclaimerEnd: string;
}

interface PricingOplMaster3Props {
  mode?: "light" | "dark";
  header?: HeaderContent;
  toggle?: ToggleContent;
  pricing?: PricingContent;
  cta?: CTAContent;
  onCtaClick?: () => void;
}

export default function PricingOplMaster3({
  mode = "dark",
  header = DEFAULT_CONTENT.header,
  toggle = DEFAULT_CONTENT.toggle,
  pricing = DEFAULT_CONTENT.pricing,
  cta = DEFAULT_CONTENT.cta,
  onCtaClick,
}: PricingOplMaster3Props) {
  const colors = COLORS[mode];
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("monthly");

  const currentPricing = billingPeriod === "monthly" ? pricing.monthly : pricing.annually;

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .font-heading {
          font-family: 'Inter', system-ui, sans-serif;
        }
      `}</style>

      <div className="max-w-md mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className="font-heading text-2xl md:text-3xl font-bold mb-2"
            style={{ color: colors.textPrimary }}
          >
            {header.title}
          </h1>
          <p
            className="text-sm"
            style={{ color: colors.textSecondary }}
          >
            {header.subtitle}
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          className="rounded-2xl p-6 md:p-8"
          style={{ backgroundColor: colors.cardBg }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Toggle */}
          <div
            className="flex rounded-lg p-1 mb-8"
            style={{ backgroundColor: colors.toggleBg }}
          >
            <button
              onClick={() => setBillingPeriod("monthly")}
              className="flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: billingPeriod === "monthly" ? colors.toggleActiveBg : "transparent",
                color: billingPeriod === "monthly" ? colors.textPrimary : colors.textSecondary,
              }}
            >
              {toggle.monthly}
            </button>
            <button
              onClick={() => setBillingPeriod("annually")}
              className="flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 flex flex-col items-center"
              style={{
                backgroundColor: billingPeriod === "annually" ? colors.toggleActiveBg : "transparent",
                color: billingPeriod === "annually" ? colors.textPrimary : colors.textSecondary,
              }}
            >
              <span>{toggle.annually}</span>
              <span
                className="text-xs font-normal"
                style={{ color: colors.textSecondary }}
              >
                {toggle.annuallySavings}
              </span>
            </button>
          </div>

          {/* Price */}
          <motion.div
            className="text-center mb-2"
            key={billingPeriod}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <span
              className="font-heading text-5xl md:text-6xl font-bold"
              style={{ color: colors.textPrimary }}
            >
              {currentPricing.price}
            </span>
          </motion.div>

          {/* Billing Period */}
          <p
            className="text-center text-sm mb-6"
            style={{ color: colors.textSecondary }}
          >
            {currentPricing.period}
          </p>

          {/* CTA Button */}
          <motion.button
            onClick={onCtaClick}
            className="w-full py-3 rounded-lg text-sm font-medium transition-all duration-200"
            style={{
              background: `linear-gradient(180deg, ${colors.accentPurpleHover} 0%, ${colors.accentPurple} 100%)`,
              color: colors.buttonText,
            }}
            whileHover={{ scale: 1.02, opacity: 0.95 }}
            whileTap={{ scale: 0.98 }}
          >
            {cta.buttonText}
          </motion.button>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          className="text-center text-xs mt-6"
          style={{ color: colors.textSecondary }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {cta.disclaimer}{" "}
          <span className="font-bold" style={{ color: colors.textPrimary }}>
            {cta.disclaimerBold}
          </span>
          {cta.disclaimerEnd}
        </motion.p>
      </div>
    </section>
  );
}
