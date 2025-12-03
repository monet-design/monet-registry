"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F5F3EF",
    cardBg: "#FFFFFF",
    highlightCardBg: "#1E2A5C",
    textPrimary: "#1A1A2E",
    textSecondary: "#5A5A6E",
    textOnDark: "#FFFFFF",
    textSecondaryOnDark: "#C5C8D4",
    priceColor: "#2D3A8C",
    badgeOrange: "#F07928",
    toggleActive: "#1E2A5C",
    toggleInactive: "#FFFFFF",
    toggleText: "#5A5A6E",
    toggleActiveText: "#FFFFFF",
    buttonBorder: "#D0D0D8",
    checkColor: "#2D3A8C",
  },
  dark: {
    background: "#1A1A2E",
    cardBg: "#252542",
    highlightCardBg: "#3B4A8C",
    textPrimary: "#FFFFFF",
    textSecondary: "#A0A0B0",
    textOnDark: "#FFFFFF",
    textSecondaryOnDark: "#C5C8D4",
    priceColor: "#7B8FE0",
    badgeOrange: "#F07928",
    toggleActive: "#3B4A8C",
    toggleInactive: "#2A2A4A",
    toggleText: "#A0A0B0",
    toggleActiveText: "#FFFFFF",
    buttonBorder: "#4A4A6A",
    checkColor: "#7B8FE0",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  header: {
    title: "Pricing Plans",
    subtitle: "Only pay for what you need with scaling plans you can grow with.",
    saveText: "Save 20% by paying annually",
  },
  toggleLabels: {
    annual: "Annual",
    monthly: "Monthly",
  },
  plans: [
    {
      id: "starter",
      name: "Starter",
      price: { annual: "Free", monthly: "Free" },
      description: "5.95% per funding advance",
      features: [
        "Up to 10 claims",
        "5GB of photo storage",
        "Includes 3 users",
      ],
      buttonText: "Get Started",
      isHighlighted: false,
      badge: null,
    },
    {
      id: "growth",
      name: "Growth",
      price: { annual: "$159", monthly: "$199" },
      period: "/month",
      description: "5.50% per funding advance",
      features: [
        "Up to 50 claims",
        "25GB of photo storage",
        "Includes 10 users",
      ],
      buttonText: "Get Started",
      isHighlighted: true,
      badge: "Most Popular",
    },
    {
      id: "professional",
      name: "Professional",
      price: { annual: "$239", monthly: "$299" },
      period: "/month",
      description: "4.95% per funding advance",
      features: [
        "Unlimited Claims",
        "Unlimited storage",
        "Unlimited Users",
      ],
      buttonText: "Get Started",
      isHighlighted: false,
      badge: null,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: { annual: "Custom", monthly: "Custom" },
      description: "Call for volume discounts",
      features: [
        "Unlimited Claims",
        "Cloud Hosting",
        "Dedicated Support",
      ],
      buttonText: "Get Started",
      isHighlighted: false,
      badge: null,
    },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

interface Plan {
  id: string;
  name: string;
  price: { annual: string; monthly: string };
  period?: string;
  description: string;
  features: string[];
  buttonText: string;
  isHighlighted: boolean;
  badge: string | null;
}

interface HeaderContent {
  title: string;
  subtitle: string;
  saveText: string;
}

interface ToggleLabels {
  annual: string;
  monthly: string;
}

interface PricingOplScreenshotProps {
  mode?: "light" | "dark";
  header?: HeaderContent;
  toggleLabels?: ToggleLabels;
  plans?: Plan[];
  defaultBillingCycle?: "annual" | "monthly";
  onPlanClick?: (planId: string) => void;
}

export default function PricingOplScreenshot({
  mode = "light",
  header = DEFAULT_CONTENT.header,
  toggleLabels = DEFAULT_CONTENT.toggleLabels,
  plans = DEFAULT_CONTENT.plans,
  defaultBillingCycle = "annual",
  onPlanClick,
}: PricingOplScreenshotProps) {
  const colors = COLORS[mode];
  const [billingCycle, setBillingCycle] = useState<"annual" | "monthly">(defaultBillingCycle);

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4"
      style={{ backgroundColor: colors.background, fontFamily: "'Inter', var(--font-geist-sans), system-ui, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
            style={{ color: colors.textPrimary }}
          >
            {header.title}
          </h1>
          <p
            className="text-sm md:text-base mb-6"
            style={{ color: colors.textSecondary }}
          >
            {header.subtitle}
          </p>

          {/* Save text */}
          <p
            className="text-xs md:text-sm mb-3"
            style={{ color: colors.textSecondary }}
          >
            {header.saveText}
          </p>

          {/* Toggle */}
          <div
            className="inline-flex items-center rounded-full p-1 gap-0"
            style={{
              backgroundColor: colors.toggleInactive,
              border: `1px solid ${colors.buttonBorder}`
            }}
          >
            <button
              onClick={() => setBillingCycle("annual")}
              className="text-sm font-medium px-5 py-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: billingCycle === "annual" ? colors.toggleActive : "transparent",
                color: billingCycle === "annual" ? colors.toggleActiveText : colors.toggleText,
              }}
            >
              {toggleLabels.annual}
            </button>
            <button
              onClick={() => setBillingCycle("monthly")}
              className="text-sm font-medium px-5 py-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: billingCycle === "monthly" ? colors.toggleActive : "transparent",
                color: billingCycle === "monthly" ? colors.toggleActiveText : colors.toggleText,
              }}
            >
              {toggleLabels.monthly}
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className="relative rounded-2xl p-6 flex flex-col"
              style={{
                backgroundColor: plan.isHighlighted ? colors.highlightCardBg : colors.cardBg,
                boxShadow: plan.isHighlighted
                  ? "0 8px 30px rgba(30, 42, 92, 0.15)"
                  : "0 2px 10px rgba(0, 0, 0, 0.05)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute -top-3 right-4 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: colors.badgeOrange,
                    color: "#FFFFFF",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan Name */}
              <h3
                className="text-lg font-semibold mb-4"
                style={{
                  color: plan.isHighlighted ? colors.textOnDark : colors.textPrimary,
                }}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-1 flex items-baseline">
                <span
                  className="text-3xl md:text-4xl font-bold"
                  style={{
                    color: plan.isHighlighted ? colors.textOnDark : colors.priceColor,
                  }}
                >
                  {plan.price[billingCycle]}
                </span>
                {plan.period && (
                  <span
                    className="text-sm ml-0.5"
                    style={{
                      color: plan.isHighlighted ? colors.textSecondaryOnDark : colors.textSecondary,
                    }}
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              {/* Description */}
              <p
                className="text-xs mb-6"
                style={{
                  color: plan.isHighlighted ? colors.textSecondaryOnDark : colors.textSecondary,
                }}
              >
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{
                        color: plan.isHighlighted ? colors.textOnDark : colors.checkColor,
                      }}
                    />
                    <span
                      className="text-sm"
                      style={{
                        color: plan.isHighlighted ? colors.textOnDark : colors.textPrimary,
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <motion.button
                onClick={() => onPlanClick?.(plan.id)}
                className="text-sm font-medium w-full py-2.5 rounded-lg transition-all duration-200"
                style={
                  plan.isHighlighted
                    ? {
                        backgroundColor: colors.cardBg,
                        color: colors.highlightCardBg,
                      }
                    : {
                        backgroundColor: "transparent",
                        color: colors.textPrimary,
                        border: `1px solid ${colors.buttonBorder}`,
                      }
                }
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
