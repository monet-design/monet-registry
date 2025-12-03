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
    cardBackground: "#F9FAFB",
    textPrimary: "#111827",
    textSecondary: "#6B7280",
    textMuted: "#9CA3AF",
    freeAccent: "#3B82F6",
    freeAccentHover: "#2563EB",
    businessAccent: "#22C55E",
    businessAccentHover: "#16A34A",
    agencyAccent: "#EF4444",
    agencyAccentHover: "#DC2626",
    toggleBg: "#E5E7EB",
    toggleActive: "#22C55E",
    badgeBg: "#FEF3C7",
    badgeBorder: "#F59E0B",
    badgeText: "#92400E",
  },
  dark: {
    background: "#111827",
    cardBackground: "#1F2937",
    textPrimary: "#F9FAFB",
    textSecondary: "#9CA3AF",
    textMuted: "#6B7280",
    freeAccent: "#60A5FA",
    freeAccentHover: "#3B82F6",
    businessAccent: "#4ADE80",
    businessAccentHover: "#22C55E",
    agencyAccent: "#F87171",
    agencyAccentHover: "#EF4444",
    toggleBg: "#374151",
    toggleActive: "#22C55E",
    badgeBg: "#422006",
    badgeBorder: "#F59E0B",
    badgeText: "#FCD34D",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  title: "Pricing",
  toggle: {
    annual: "Annual",
    monthly: "Monthly",
  },
  plans: [
    {
      id: "free",
      name: "Free",
      variant: "free" as const,
      features: [
        "Limited Slides",
        "Limited Settings",
        "Limited Effects",
        "No Support",
        "No Credit Card needed",
      ],
      monthlyPrice: 0,
      annualPrice: 0,
      buttonText: "Try for Free",
    },
    {
      id: "business",
      name: "Business",
      variant: "business" as const,
      features: [
        "20 Exports per Month",
        "Unlimited Projects",
        "Unlimited Pages",
        "Project Management",
        "Support and Updates",
      ],
      monthlyPrice: 21,
      annualPrice: 249,
      annualSavings: 99,
      buttonText: "Add to Cart",
    },
    {
      id: "agency",
      name: "Agency",
      variant: "agency" as const,
      features: [
        "Unlimited Exports",
        "Unlimited Projects",
        "Unlimited Pages",
        "Project Management",
        "Support and Updates",
      ],
      monthlyPrice: 29,
      annualPrice: 349,
      annualSavings: 119,
      buttonText: "Add to Cart",
    },
  ],
  badge: {
    label: "Product Hunt",
    text: "#2 Product of the Month",
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import { Check, Trophy } from "lucide-react";

interface Plan {
  id: string;
  name: string;
  variant: "free" | "business" | "agency";
  features: string[];
  monthlyPrice: number;
  annualPrice: number;
  annualSavings?: number;
  buttonText: string;
}

interface BadgeContent {
  label: string;
  text: string;
}

interface PricingOplMasterSlidesProps {
  mode?: "light" | "dark";
  title?: string;
  plans?: Plan[];
  badge?: BadgeContent;
  defaultBillingPeriod?: "monthly" | "annual";
  onPlanSelect?: (planId: string) => void;
}

export default function PricingOplMasterSlides({
  mode = "light",
  title = DEFAULT_CONTENT.title,
  plans = DEFAULT_CONTENT.plans,
  badge = DEFAULT_CONTENT.badge,
  defaultBillingPeriod = "annual",
  onPlanSelect,
}: PricingOplMasterSlidesProps) {
  const colors = COLORS[mode];
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(defaultBillingPeriod);

  const getAccentColor = (variant: Plan["variant"]) => {
    switch (variant) {
      case "free":
        return colors.freeAccent;
      case "business":
        return colors.businessAccent;
      case "agency":
        return colors.agencyAccent;
    }
  };

  const getAccentHoverColor = (variant: Plan["variant"]) => {
    switch (variant) {
      case "free":
        return colors.freeAccentHover;
      case "business":
        return colors.businessAccentHover;
      case "agency":
        return colors.agencyAccentHover;
    }
  };

  return (
    <section
      className="relative w-full py-16 md:py-20 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: colors.textPrimary }}
          >
            {title}
          </h1>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3">
            <span
              className="text-sm font-medium"
              style={{ color: billingPeriod === "annual" ? colors.textPrimary : colors.textSecondary }}
            >
              {DEFAULT_CONTENT.toggle.annual}
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === "annual" ? "monthly" : "annual")}
              className="relative w-12 h-6 rounded-full transition-colors duration-200"
              style={{ backgroundColor: colors.toggleActive }}
              aria-label="Toggle billing period"
            >
              <motion.div
                className="absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm"
                animate={{ left: billingPeriod === "annual" ? "4px" : "28px" }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span
              className="text-sm font-medium"
              style={{ color: billingPeriod === "monthly" ? colors.textPrimary : colors.textSecondary }}
            >
              {DEFAULT_CONTENT.toggle.monthly}
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className="rounded-xl p-6"
              style={{ backgroundColor: colors.cardBackground }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Plan Name */}
              <h3
                className="text-lg font-semibold mb-4"
                style={{ color: colors.textPrimary }}
              >
                {plan.name}
              </h3>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check
                      size={16}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: getAccentColor(plan.variant) }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: colors.textSecondary }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="mb-2">
                <span
                  className="text-sm align-top"
                  style={{ color: colors.textSecondary }}
                >
                  $
                </span>
                <span
                  className="text-4xl font-semibold italic"
                  style={{ color: colors.textPrimary }}
                >
                  {billingPeriod === "monthly" ? plan.monthlyPrice : plan.monthlyPrice}
                </span>
                {plan.monthlyPrice > 0 && (
                  <span
                    className="text-sm ml-1"
                    style={{ color: colors.textSecondary }}
                  >
                    / per month
                  </span>
                )}
              </div>

              {/* Annual billing info */}
              {plan.annualSavings && billingPeriod === "annual" && (
                <p
                  className="text-xs mb-4"
                  style={{ color: colors.textMuted }}
                >
                  ${plan.annualPrice} billed annually. Save ${plan.annualSavings}.
                </p>
              )}
              {plan.monthlyPrice === 0 && (
                <p
                  className="text-xs mb-4"
                  style={{ color: colors.textMuted }}
                >
                  No credit card needed.
                </p>
              )}
              {!plan.annualSavings && plan.monthlyPrice > 0 && (
                <div className="h-4 mb-4" />
              )}

              {/* Button */}
              <motion.button
                onClick={() => onPlanSelect?.(plan.id)}
                className="w-full py-3 rounded-lg text-sm font-medium text-white transition-colors duration-200"
                style={{ backgroundColor: getAccentColor(plan.variant) }}
                whileHover={{ backgroundColor: getAccentHoverColor(plan.variant) }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Product Hunt Badge */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
            style={{
              backgroundColor: colors.badgeBg,
              borderColor: colors.badgeBorder,
            }}
          >
            <Trophy
              size={18}
              style={{ color: colors.badgeBorder }}
            />
            <div className="flex flex-col">
              <span
                className="text-[10px] font-medium uppercase tracking-wide"
                style={{ color: colors.badgeText }}
              >
                {badge.label}
              </span>
              <span
                className="text-xs font-semibold"
                style={{ color: colors.badgeText }}
              >
                {badge.text}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
