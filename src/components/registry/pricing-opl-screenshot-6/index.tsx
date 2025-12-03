"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F5F7FA",
    cardBg: "#FFFFFF",
    textPrimary: "#1A1D26",
    textSecondary: "#6B7280",
    accent: "#0EA5AA",
    accentHover: "#0D9599",
    success: "#10B981",
    muted: "#9CA3AF",
    divider: "#E5E7EB",
    progressBg: "#E5E7EB",
    progressFill: "#0EA5AA",
  },
  dark: {
    background: "#111827",
    cardBg: "#1F2937",
    textPrimary: "#F9FAFB",
    textSecondary: "#9CA3AF",
    accent: "#14B8B8",
    accentHover: "#17A7A7",
    success: "#34D399",
    muted: "#6B7280",
    divider: "#374151",
    progressBg: "#374151",
    progressFill: "#14B8B8",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  header: {
    titlePrefix: "Simple,",
    titleHighlight: "usage-based",
    titleSuffix: "pricing",
    subtitle: "Start for free, no credit card required. Upgrade anytime.",
  },
  plans: [
    {
      id: "free",
      name: "Free",
      description: "For startups & side projects",
      price: "$0",
      period: "Monthly",
      usageLabel: "Up to 1K link clicks/mo",
      usageProgress: null,
      features: [
        { text: "Free custom domains", active: true, hasInfo: true },
        { text: "Unlimited branded links", active: true, hasInfo: false },
        { text: "5 projects", active: true, hasInfo: false },
        { text: "Root domain redirect", active: false, hasInfo: true },
        { text: "Password-protected links", active: false, hasInfo: false },
        { text: "OG Image Proxy", active: false, hasInfo: true },
        { text: "SSO/SAML", active: false, hasInfo: false },
      ],
      buttonText: "Start for free",
      buttonVariant: "dark" as const,
      popular: false,
    },
    {
      id: "pro",
      name: "Pro",
      description: "For larger teams with increased usage",
      price: "$9",
      period: "Monthly",
      usageLabel: "Up to 10K link clicks/mo",
      usageProgress: 0.15,
      features: [
        { text: "Free custom domains", active: true, hasInfo: true },
        { text: "Unlimited branded links", active: true, hasInfo: false },
        { text: "Unlimited projects", active: true, hasInfo: false },
        { text: "Root domain redirect", active: true, hasInfo: true },
        { text: "Password-protected links", active: true, hasInfo: false },
        { text: "OG Image Proxy", active: true, hasInfo: true },
        { text: "SSO/SAML", active: false, hasInfo: false },
      ],
      buttonText: "Get started",
      buttonVariant: "accent" as const,
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "For businesses with custom needs",
      price: "Custom",
      period: "Monthly",
      usageLabel: "Unlimited link clicks",
      usageProgress: null,
      features: [
        { text: "Free custom domains", active: true, hasInfo: true },
        { text: "Unlimited branded links", active: true, hasInfo: false },
        { text: "Unlimited projects", active: true, hasInfo: false },
        { text: "Root domain redirect", active: true, hasInfo: true },
        { text: "Password-protected links", active: true, hasInfo: false },
        { text: "OG Image Proxy", active: true, hasInfo: true },
        { text: "SSO/SAML", active: true, hasInfo: false },
      ],
      buttonText: "Contact us",
      buttonVariant: "outline" as const,
      popular: false,
    },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, HelpCircle } from "lucide-react";

interface Feature {
  text: string;
  active: boolean;
  hasInfo?: boolean;
}

interface Plan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  usageLabel: string;
  usageProgress: number | null;
  features: Feature[];
  buttonText: string;
  buttonVariant: "dark" | "accent" | "outline";
  popular: boolean;
}

interface HeaderContent {
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  subtitle: string;
}

interface PricingOplScreenshot6Props {
  mode?: "light" | "dark";
  header?: HeaderContent;
  plans?: Plan[];
  onPlanClick?: (planId: string) => void;
}

export default function PricingOplScreenshot6({
  mode = "light",
  header = DEFAULT_CONTENT.header,
  plans = DEFAULT_CONTENT.plans,
  onPlanClick,
}: PricingOplScreenshot6Props) {
  const colors = COLORS[mode];

  const getButtonStyles = (variant: "dark" | "accent" | "outline") => {
    switch (variant) {
      case "dark":
        return {
          backgroundColor: colors.textPrimary,
          color: mode === "light" ? "#FFFFFF" : "#111827",
          border: "none",
        };
      case "accent":
        return {
          backgroundColor: colors.accent,
          color: "#FFFFFF",
          border: "none",
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          color: colors.textPrimary,
          border: `1.5px solid ${colors.textPrimary}`,
        };
    }
  };

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

        .font-sans {
          font-family: "Inter", system-ui, sans-serif;
        }
      `}</style>

      <div className="max-w-5xl mx-auto font-sans">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            style={{ color: colors.textPrimary }}
          >
            {header.titlePrefix}{" "}
            <span style={{ color: colors.accent }}>{header.titleHighlight}</span>
            <br />
            {header.titleSuffix}
          </h1>
          <p
            className="text-sm md:text-base"
            style={{ color: colors.textSecondary }}
          >
            {header.subtitle}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className="relative rounded-2xl p-6 md:p-8 flex flex-col shadow-sm"
              style={{
                backgroundColor: colors.cardBg,
                boxShadow:
                  mode === "light"
                    ? "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)"
                    : "0 1px 3px rgba(0,0,0,0.3)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className="px-4 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: colors.accent }}
                  >
                    Popular
                  </span>
                </div>
              )}

              {/* Plan Name & Description */}
              <div className="mb-6">
                <h3
                  className="text-xl font-semibold mb-1"
                  style={{ color: colors.textPrimary }}
                >
                  {plan.name}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: colors.textSecondary }}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-1">
                <span
                  className="text-4xl md:text-5xl font-bold"
                  style={{ color: colors.textPrimary }}
                >
                  {plan.price}
                </span>
              </div>

              {/* Period */}
              <p
                className="text-sm mb-6"
                style={{ color: colors.textSecondary }}
              >
                {plan.period}
              </p>

              {/* Divider */}
              <div
                className="w-full h-px mb-6"
                style={{ backgroundColor: colors.divider }}
              />

              {/* Usage Info */}
              <div className="mb-6">
                <div className="flex items-center gap-1.5 mb-2">
                  {plan.usageProgress !== null && (
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: colors.accent }}
                    />
                  )}
                  <span
                    className="text-sm"
                    style={{ color: colors.textSecondary }}
                  >
                    {plan.usageLabel}
                  </span>
                  <HelpCircle
                    size={14}
                    style={{ color: colors.muted }}
                    className="ml-0.5"
                  />
                </div>

                {/* Progress Bar */}
                {plan.usageProgress !== null && (
                  <div
                    className="w-full h-1.5 rounded-full overflow-hidden"
                    style={{ backgroundColor: colors.progressBg }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${plan.usageProgress * 100}%`,
                        backgroundColor: colors.progressFill,
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2.5">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: feature.active
                          ? `${colors.success}20`
                          : `${colors.muted}15`,
                      }}
                    >
                      <Check
                        size={12}
                        strokeWidth={2.5}
                        style={{
                          color: feature.active ? colors.success : colors.muted,
                        }}
                      />
                    </div>
                    <span
                      className="text-sm"
                      style={{
                        color: feature.active
                          ? colors.textPrimary
                          : colors.muted,
                      }}
                    >
                      {feature.text}
                    </span>
                    {feature.hasInfo && (
                      <HelpCircle
                        size={14}
                        style={{ color: colors.muted }}
                        className="ml-0.5"
                      />
                    )}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                onClick={() => onPlanClick?.(plan.id)}
                className="w-full py-3 px-6 rounded-full text-sm font-medium transition-all duration-200"
                style={getButtonStyles(plan.buttonVariant)}
                whileHover={{ scale: 1.02 }}
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
