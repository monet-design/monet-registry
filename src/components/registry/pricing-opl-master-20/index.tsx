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
    textPrimary: "#1A1A1A",
    textSecondary: "#666666",
    textMuted: "#888888",
    border: "#E5E5E5",
    green: "#0DE286",
    greenHover: "#0BC977",
    purple: "#830DFE",
    purpleHover: "#7009E0",
    badgeBg: "#1A1A1A",
    badgeText: "#FFFFFF",
    checkGreen: "#0DE286",
    checkPurple: "#830DFE",
  },
  dark: {
    background: "#0A0A0A",
    textPrimary: "#FFFFFF",
    textSecondary: "#A0A0A0",
    textMuted: "#666666",
    border: "#2A2A2A",
    green: "#0DE286",
    greenHover: "#0BC977",
    purple: "#830DFE",
    purpleHover: "#7009E0",
    badgeBg: "#FFFFFF",
    badgeText: "#1A1A1A",
    checkGreen: "#0DE286",
    checkPurple: "#830DFE",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  title: "Plans & Pricing",
  subtitle:
    "Top-notch quality and 15+ years of experience for less money\nthan hiring a single mid-level designer.",
  plans: [
    {
      id: "sprint",
      name: "Sprint",
      description: "Great way to taste our services with\na few small projects",
      price: "3,490",
      currency: "€",
      period: "/mo",
      buttonText: "Get Started",
      buttonVariant: "green" as const,
      pauseText: "Pause or cancel anytime.",
      guaranteeText: "7 days money-back guarantee",
      features: [
        "Two-week design sprint",
        "Unlimited requests & revisions",
        "up to 1 meeting per week",
        "Avg. 2-3 days delivery",
        "Dev ready Figma files",
        "Figma Prototypes",
        "Unlimited users",
        "Slack Collaboration",
        "Own project board",
      ],
    },
    {
      id: "flip",
      name: "Flip",
      badge: "MOST POPULAR",
      description:
        "Perfect for growing startups with\nongoing design support needs.",
      price: "4,490",
      currency: "€",
      period: "/mo",
      buttonText: "Get Started",
      buttonVariant: "purple" as const,
      pauseText: "Pause or cancel anytime.",
      guaranteeText: "7 days money-back guarantee",
      features: [
        "One request at a time",
        "Unlimited requests & revisions",
        "up to 1 meeting per week",
        "Avg. 2-3 days delivery",
        "Dev ready Figma files",
        "Figma Prototypes",
        "Unlimited users",
        "Slack Collaboration",
        "Own project board",
      ],
    },
    {
      id: "double-flip",
      name: "Double Flip",
      description:
        "Best for agencies focused on delivering\nonly the best for their clients",
      price: "7,490",
      currency: "€",
      period: "/mo",
      buttonText: "Get Started",
      buttonVariant: "green" as const,
      pauseText: "Pause or cancel anytime.",
      guaranteeText: "7 days money-back guarantee",
      features: [
        "Two requests at a time",
        "Unlimited requests & revisions",
        "Flexible weekly meetings",
        "Avg. 2-3 days delivery",
        "Dev ready Figma files",
        "Figma Prototypes",
        "Unlimited users",
        "Slack Collaboration",
        "Own project board",
      ],
    },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check } from "lucide-react";

interface Plan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  price: string;
  currency: string;
  period: string;
  buttonText: string;
  buttonVariant: "green" | "purple";
  pauseText: string;
  guaranteeText: string;
  features: string[];
}

interface PricingOplMaster20Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  plans?: Plan[];
}

export default function PricingOplMaster20({
  mode = "light",
  title = DEFAULT_CONTENT.title,
  subtitle = DEFAULT_CONTENT.subtitle,
  plans = DEFAULT_CONTENT.plans,
}: PricingOplMaster20Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-20 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: colors.textPrimary }}
          >
            {title}
          </h2>
          <p
            className="text-sm md:text-base whitespace-pre-line leading-relaxed"
            style={{ color: colors.textSecondary }}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row justify-center">
          {plans.map((plan, index) => {
            const isLast = index === plans.length - 1;
            const checkColor =
              plan.buttonVariant === "purple"
                ? colors.checkPurple
                : colors.checkGreen;

            return (
              <motion.div
                key={plan.id}
                className={`flex-1 px-6 py-8 ${
                  !isLast
                    ? "border-b lg:border-b-0 lg:border-r"
                    : ""
                }`}
                style={{
                  borderColor: colors.border,
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Plan Name and Badge */}
                <div className="flex items-center gap-2 mb-2">
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: colors.textPrimary }}
                  >
                    {plan.name}
                  </h3>
                  {plan.badge && (
                    <span
                      className="px-2 py-0.5 text-[10px] font-semibold rounded-full uppercase tracking-wide"
                      style={{
                        backgroundColor: colors.badgeBg,
                        color: colors.badgeText,
                      }}
                    >
                      {plan.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p
                  className="text-xs whitespace-pre-line mb-6 leading-relaxed"
                  style={{ color: colors.textMuted }}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-2">
                  <span
                    className="text-3xl md:text-4xl font-bold"
                    style={{ color: colors.textPrimary }}
                  >
                    {plan.currency} {plan.price}
                  </span>
                  <span
                    className="text-lg"
                    style={{ color: colors.textPrimary }}
                  >
                    {plan.period}
                  </span>
                </div>

                {/* Pause and Guarantee Text */}
                <p
                  className="text-xs mb-1"
                  style={{ color: colors.textMuted }}
                >
                  {plan.pauseText}
                </p>
                <p
                  className="text-xs mb-6"
                  style={{ color: colors.textMuted }}
                >
                  {plan.guaranteeText}
                </p>

                {/* Button */}
                <motion.button
                  className="w-full py-3 rounded-full text-sm font-medium mb-8 transition-colors"
                  style={{
                    backgroundColor:
                      plan.buttonVariant === "purple"
                        ? colors.purple
                        : colors.green,
                    color: "#FFFFFF",
                  }}
                  whileHover={{
                    backgroundColor:
                      plan.buttonVariant === "purple"
                        ? colors.purpleHover
                        : colors.greenHover,
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.buttonText}
                </motion.button>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2"
                    >
                      <Check
                        size={14}
                        style={{ color: checkColor, marginTop: 2 }}
                        strokeWidth={2.5}
                      />
                      <span
                        className="text-xs"
                        style={{ color: colors.textSecondary }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
