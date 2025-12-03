"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F5A623",
    textPrimary: "#1A1A1A",
    textSecondary: "#1A1A1A",
    buttonBg: "#1A1A1A",
    buttonText: "#FFFFFF",
    buttonHoverBg: "#333333",
  },
  dark: {
    background: "#B07516",
    textPrimary: "#F8FAFC",
    textSecondary: "#E2E8F0",
    buttonBg: "#F8FAFC",
    buttonText: "#1A1A1A",
    buttonHoverBg: "#E2E8F0",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  header: {
    eyebrow: "Get started",
    title: "Subscription plans",
    subtitle:
      "Is it a subscription or retainer? Yes. You can call it how you like, but we are providing a service\nat a low monthly rate.",
  },
  tiers: [
    {
      name: "TIER 1",
      price: "$4995",
      period: "/m",
      billingInfo: "Billed monthly",
      features: [
        "Unlimited requests, delivered one at a time.",
        "Quick turnaround",
        "Pause or cancel anytime",
      ],
      buttonText: "Select plan",
    },
    {
      name: "TIER 2",
      price: "$4495",
      period: "/m",
      billingInfo: "Billed quarterly",
      features: [
        "Best for larger quantities of work.",
        "Same benefits as Tier 1",
        "Discounted rate over Tier 1",
      ],
      buttonText: "Select plan",
    },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface TierContent {
  name: string;
  price: string;
  period: string;
  billingInfo: string;
  features: string[];
  buttonText: string;
}

interface HeaderContent {
  eyebrow: string;
  title: string;
  subtitle: string;
}

interface PricingOplMasterGoodProps {
  mode?: "light" | "dark";
  header?: HeaderContent;
  tiers?: TierContent[];
  onSelectPlan?: (tierIndex: number) => void;
}

export default function PricingOplMasterGood({
  mode = "light",
  header = DEFAULT_CONTENT.header,
  tiers = DEFAULT_CONTENT.tiers,
  onSelectPlan,
}: PricingOplMasterGoodProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap");

        .font-heading {
          font-family: "Inter", system-ui, sans-serif;
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Eyebrow */}
          <p
            className="font-heading text-sm md:text-base font-medium mb-4"
            style={{ color: colors.textSecondary }}
          >
            {header.eyebrow}
          </p>

          {/* Title */}
          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: colors.textPrimary }}
          >
            {header.title}
          </h1>

          {/* Subtitle */}
          <p
            className="font-heading text-sm md:text-base whitespace-pre-line max-w-2xl mx-auto"
            style={{ color: colors.textSecondary }}
          >
            {header.subtitle}
          </p>
        </motion.div>

        {/* Tiers */}
        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-16 lg:gap-24">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Tier Name */}
              <h3
                className="font-heading text-sm font-bold tracking-wider mb-2"
                style={{ color: colors.textPrimary }}
              >
                {tier.name}
              </h3>

              {/* Price */}
              <div className="mb-2">
                <span
                  className="font-heading text-4xl md:text-5xl font-bold"
                  style={{ color: colors.textPrimary }}
                >
                  {tier.price}
                </span>
                <span
                  className="font-heading text-2xl md:text-3xl font-bold"
                  style={{ color: colors.textPrimary }}
                >
                  {tier.period}
                </span>
              </div>

              {/* Billing Info */}
              <p
                className="font-heading text-xs font-bold mb-3"
                style={{ color: colors.textPrimary }}
              >
                {tier.billingInfo}
              </p>

              {/* Features */}
              <ul className="mb-6 space-y-0.5">
                {tier.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="font-heading text-xs"
                    style={{ color: colors.textSecondary }}
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <motion.button
                onClick={() => onSelectPlan?.(index)}
                className="px-6 py-2.5 text-sm font-medium transition-colors duration-200"
                style={{
                  backgroundColor: colors.buttonBg,
                  color: colors.buttonText,
                  borderRadius: "4px",
                }}
                whileHover={{
                  backgroundColor: colors.buttonHoverBg,
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
              >
                {tier.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
