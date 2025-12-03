"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#FFFFFF",
    cardBackground: "#FFFFFF",
    cardBorder: "#E5E5E5",
    textPrimary: "#1A1A1A",
    textSecondary: "#6B6B6B",
    textMuted: "#9A9A9A",
    buttonBg: "#1A1A1A",
    buttonText: "#FFFFFF",
    buttonOutlineBorder: "#D4D4D4",
    buttonOutlineText: "#1A1A1A",
    checkIcon: "#9A9A9A",
  },
  dark: {
    background: "#0A0A0A",
    cardBackground: "#141414",
    cardBorder: "#262626",
    textPrimary: "#FAFAFA",
    textSecondary: "#A3A3A3",
    textMuted: "#737373",
    buttonBg: "#FAFAFA",
    buttonText: "#0A0A0A",
    buttonOutlineBorder: "#404040",
    buttonOutlineText: "#FAFAFA",
    checkIcon: "#737373",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  title: "Frictionless software\ndevelopment starts here.",
  subtitle:
    "Sign up in 30 seconds and get your first request completed within 48 hours.",
  billingOptions: ["Monthly", "Quarterly", "Yearly"],
  plan: {
    badge: "Most popular",
    name: "Monthly",
    price: "$4,900",
    period: "per\nmonth",
    buttonText: "Subscribe",
    featuresTitle: "This includes:",
    features: [
      "Unlimited requests",
      "Unlimited revisions",
      "Unlimited projects",
      "Unlimited users",
      "Pause or cancel anytime",
    ],
  },
  cta: {
    text: "Book a short demo and learn how our platform works.",
    buttonText: "BOOK A CALL",
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

interface PlanConfig {
  badge?: string;
  name: string;
  price: string;
  period?: string;
  buttonText: string;
  featuresTitle?: string;
  features: string[];
}

interface CtaConfig {
  text: string;
  buttonText: string;
}

interface PricingOplMaster12Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  billingOptions?: string[];
  plan?: PlanConfig;
  cta?: CtaConfig;
  onSubscribe?: () => void;
  onBookCall?: () => void;
}

export default function PricingOplMaster12({
  mode = "light",
  title = DEFAULT_CONTENT.title,
  subtitle = DEFAULT_CONTENT.subtitle,
  billingOptions = DEFAULT_CONTENT.billingOptions,
  plan = DEFAULT_CONTENT.plan,
  cta = DEFAULT_CONTENT.cta,
  onSubscribe,
  onBookCall,
}: PricingOplMaster12Props) {
  const colors = COLORS[mode];
  const [selectedBilling, setSelectedBilling] = useState(billingOptions[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-3xl md:text-4xl font-serif italic leading-tight mb-4 whitespace-pre-line"
            style={{ color: colors.textPrimary }}
          >
            {title}
          </h1>
          <p
            className="text-sm md:text-base"
            style={{ color: colors.textSecondary }}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Billing Selector */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors"
              style={{ color: colors.textPrimary }}
            >
              {selectedBilling}
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isDropdownOpen && (
              <motion.div
                className="absolute top-full left-0 right-0 mt-1 rounded-lg shadow-lg overflow-hidden z-10"
                style={{
                  backgroundColor: colors.cardBackground,
                  border: `1px solid ${colors.cardBorder}`,
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {billingOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedBilling(option);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-sm text-left transition-colors hover:bg-black/5"
                    style={{
                      color:
                        option === selectedBilling
                          ? colors.textPrimary
                          : colors.textSecondary,
                    }}
                  >
                    {option}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          className="max-w-xs mx-auto rounded-xl p-6"
          style={{
            backgroundColor: colors.cardBackground,
            border: `1px solid ${colors.cardBorder}`,
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Badge */}
          {plan.badge && (
            <p
              className="text-xs mb-2"
              style={{ color: colors.textMuted }}
            >
              {plan.badge}
            </p>
          )}

          {/* Plan Name */}
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: colors.textPrimary }}
          >
            {plan.name}
          </h3>

          {/* Price */}
          <div className="flex items-baseline gap-1 mb-5">
            <span
              className="text-4xl font-bold tracking-tight"
              style={{ color: colors.textPrimary }}
            >
              {plan.price}
            </span>
            {plan.period && (
              <span
                className="text-xs whitespace-pre-line leading-tight"
                style={{ color: colors.textMuted }}
              >
                {plan.period}
              </span>
            )}
          </div>

          {/* Subscribe Button */}
          <motion.button
            onClick={onSubscribe}
            className="w-full py-2.5 rounded-md text-sm font-medium transition-all mb-6"
            style={{
              backgroundColor: colors.buttonBg,
              color: colors.buttonText,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {plan.buttonText}
          </motion.button>

          {/* Features */}
          {plan.featuresTitle && (
            <p
              className="text-xs mb-3"
              style={{ color: colors.textMuted }}
            >
              {plan.featuresTitle}
            </p>
          )}
          <ul className="space-y-2.5">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: colors.checkIcon }}
                >
                  <Check size={10} color="#FFFFFF" strokeWidth={3} />
                </div>
                <span
                  className="text-sm"
                  style={{ color: colors.textSecondary }}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p
            className="text-sm mb-4"
            style={{ color: colors.textPrimary }}
          >
            {cta.text}
          </p>
          <motion.button
            onClick={onBookCall}
            className="px-6 py-2.5 rounded-md text-xs font-medium tracking-wider transition-all"
            style={{
              backgroundColor: "transparent",
              color: colors.buttonOutlineText,
              border: `1px solid ${colors.buttonOutlineBorder}`,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {cta.buttonText}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
