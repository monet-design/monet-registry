"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#0a0a0a",
    cardBg: "#181818",
    textPrimary: "#FFFFFF",
    textSecondary: "#A0A0A0",
    textMuted: "#6B6B6B",
    accent: "#F43F5E",
    accentHover: "#E11D48",
  },
  dark: {
    background: "#0a0a0a",
    cardBg: "#181818",
    textPrimary: "#FFFFFF",
    textSecondary: "#A0A0A0",
    textMuted: "#6B6B6B",
    accent: "#F43F5E",
    accentHover: "#E11D48",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  header: {
    title: "Pricing",
  },
  plans: [
    {
      id: "free",
      name: "Figma Basics Bootcamp",
      description: "Learn Figma essentials in just 50 minutes!",
      price: "FREE",
      pricePrefix: null,
      priceSubtext: "Instant access",
      features: [
        "Figma UI walkthrough",
        "Creating basic UI elements",
        "Using Auto Layout",
        "Creating a component",
        "Sharing your work",
      ],
      buttonText: "Enroll now",
      footerText: "Learn Figma basics in 50 minutes",
    },
    {
      id: "premium",
      name: "UX & UI Design Bootcamp",
      description: "Learn essential UX & UI design skills",
      price: "799",
      pricePrefix: "$",
      priceSubtext: "One time payment",
      features: [
        "Figma Basics Bootcamp course",
        "UX design course",
        "UI design course",
        "60 minute 1 to 1 session with instructor",
        "Quickstart UX & UI templates",
        "Landing Page Playbook",
        "Directory of free resources",
        "Certificate of completion",
      ],
      buttonText: "Enroll now",
      footerText: "Zero Risk 100% Money Back Guarantee",
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
  description: string;
  price: string;
  pricePrefix: string | null;
  priceSubtext: string;
  features: string[];
  buttonText: string;
  footerText: string;
}

interface HeaderContent {
  title: string;
}

interface PricingOplScreenshot4Props {
  mode?: "light" | "dark";
  header?: HeaderContent;
  plans?: Plan[];
  onPlanClick?: (planId: string) => void;
}

export default function PricingOplScreenshot4({
  mode = "light",
  header = DEFAULT_CONTENT.header,
  plans = DEFAULT_CONTENT.plans,
  onPlanClick,
}: PricingOplScreenshot4Props) {
  const colors = COLORS[mode];

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

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className="font-sans text-2xl md:text-3xl font-semibold"
            style={{ color: colors.textPrimary }}
          >
            {header.title}
          </h1>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className="rounded-2xl p-6 md:p-8 flex flex-col"
              style={{ backgroundColor: colors.cardBg }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Plan Name */}
              <h3
                className="font-sans text-lg md:text-xl font-semibold mb-1"
                style={{ color: colors.textPrimary }}
              >
                {plan.name}
              </h3>

              {/* Description */}
              <p
                className="font-sans text-sm mb-6"
                style={{ color: colors.textSecondary }}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-1">
                {plan.pricePrefix && (
                  <span
                    className="font-sans text-base font-medium align-top"
                    style={{ color: colors.textPrimary }}
                  >
                    {plan.pricePrefix}
                  </span>
                )}
                <span
                  className="font-sans text-4xl md:text-5xl font-bold"
                  style={{ color: colors.textPrimary }}
                >
                  {plan.price}
                </span>
              </div>

              {/* Price Subtext */}
              <p
                className="font-sans text-xs mb-6"
                style={{ color: colors.textMuted }}
              >
                {plan.priceSubtext}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2.5">
                    <Check
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: colors.accent }}
                      strokeWidth={2.5}
                    />
                    <span
                      className="font-sans text-sm"
                      style={{ color: colors.textSecondary }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <motion.button
                onClick={() => onPlanClick?.(plan.id)}
                className="font-sans text-sm font-medium px-6 py-2.5 rounded-full transition-colors duration-200 w-fit"
                style={{
                  backgroundColor: colors.accent,
                  color: colors.textPrimary,
                }}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: colors.accentHover,
                }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.buttonText}
              </motion.button>

              {/* Footer Text */}
              <p
                className="font-sans text-xs mt-4 text-center"
                style={{ color: colors.textMuted }}
              >
                {plan.footerText}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
