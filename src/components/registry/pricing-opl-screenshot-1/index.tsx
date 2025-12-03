"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#5B4A63",
    cardBg: "#322A3A",
    textPrimary: "#FFFFFF",
    textSecondary: "#A39AAD",
    accentOrange: "#D96B4D",
    accentOrangeHover: "#C25E42",
    divider: "rgba(255, 255, 255, 0.15)",
    outlineButton: "rgba(255, 255, 255, 0.8)",
  },
  dark: {
    background: "#3D3447",
    cardBg: "#252030",
    textPrimary: "#FFFFFF",
    textSecondary: "#9B8FA8",
    accentOrange: "#E07856",
    accentOrangeHover: "#D06846",
    divider: "rgba(255, 255, 255, 0.12)",
    outlineButton: "rgba(255, 255, 255, 0.7)",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  header: {
    title: "Membership plans.",
    subtitle: "All-inclusive benefits at your convenience.",
  },
  plans: [
    {
      id: "monthly",
      name: "Monthly.",
      description: "No commitment.",
      price: "$3,000",
      period: "Paid monthly",
      buttonText: "Get Started",
      buttonVariant: "filled" as const,
    },
    {
      id: "quarterly",
      name: "Quarterly.",
      description: "Save $500 per month.",
      price: "$2,500",
      period: "Paid quarterly",
      buttonText: "Get Started",
      buttonVariant: "filled" as const,
    },
    {
      id: "book-call",
      name: "Book a call.",
      description: "Not sure if we're right\nfor each other? Learn\nmore about us.",
      price: null,
      period: null,
      buttonText: "Book a Call",
      buttonVariant: "outline" as const,
    },
  ],
  includedFeatures: {
    title: "Included in every plan.",
    features: ["Unlimited requests", "Unlimited brands", "Unlimited users"],
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface Plan {
  id: string;
  name: string;
  description: string;
  price: string | null;
  period: string | null;
  buttonText: string;
  buttonVariant: "filled" | "outline";
}

interface HeaderContent {
  title: string;
  subtitle: string;
}

interface IncludedFeaturesContent {
  title: string;
  features: string[];
}

interface PricingOplScreenshot1Props {
  mode?: "light" | "dark";
  header?: HeaderContent;
  plans?: Plan[];
  includedFeatures?: IncludedFeaturesContent;
  onPlanClick?: (planId: string) => void;
}

export default function PricingOplScreenshot1({
  mode = "light",
  header = DEFAULT_CONTENT.header,
  plans = DEFAULT_CONTENT.plans,
  includedFeatures = DEFAULT_CONTENT.includedFeatures,
  onPlanClick,
}: PricingOplScreenshot1Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&display=swap");

        .font-serif-heading {
          font-family: "Playfair Display", Georgia, serif;
        }

        .font-sans {
          font-family: "Inter", system-ui, sans-serif;
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className="font-serif-heading text-3xl md:text-4xl lg:text-5xl font-semibold italic mb-3"
            style={{ color: colors.textPrimary }}
          >
            {header.title}
          </h1>
          <p
            className="font-sans text-sm md:text-base"
            style={{ color: colors.textSecondary }}
          >
            {header.subtitle}
          </p>
        </motion.div>

        {/* Pricing Card Container */}
        <motion.div
          className="rounded-2xl overflow-hidden mb-10"
          style={{ backgroundColor: colors.cardBg }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className="relative px-6 md:px-8 py-8 md:py-10 flex flex-col"
              >
                {/* Vertical Divider (show between columns on md+) */}
                {index > 0 && (
                  <div
                    className="hidden md:block absolute left-0 top-8 bottom-8 w-px"
                    style={{ backgroundColor: colors.divider }}
                  />
                )}
                {/* Horizontal Divider (show between rows on mobile) */}
                {index > 0 && (
                  <div
                    className="md:hidden absolute top-0 left-6 right-6 h-px"
                    style={{ backgroundColor: colors.divider }}
                  />
                )}

                {/* Plan Name */}
                <h3
                  className="font-serif-heading text-xl md:text-2xl font-semibold italic mb-2"
                  style={{ color: colors.textPrimary }}
                >
                  {plan.name}
                </h3>

                {/* Description */}
                <p
                  className="font-sans text-sm whitespace-pre-line mb-6 flex-grow"
                  style={{ color: colors.textSecondary }}
                >
                  {plan.description}
                </p>

                {/* Price */}
                {plan.price && (
                  <div className="mb-1">
                    <span
                      className="font-sans text-3xl md:text-4xl font-bold"
                      style={{ color: colors.textPrimary }}
                    >
                      {plan.price}
                    </span>
                  </div>
                )}

                {/* Period */}
                {plan.period && (
                  <p
                    className="font-sans text-xs mb-6"
                    style={{ color: colors.textSecondary }}
                  >
                    {plan.period}
                  </p>
                )}

                {/* Spacer for Book a call card to align button */}
                {!plan.price && <div className="flex-grow" />}

                {/* Button */}
                <motion.button
                  onClick={() => onPlanClick?.(plan.id)}
                  className={`font-sans text-sm font-medium px-6 py-2.5 rounded-md transition-colors duration-200 ${
                    plan.buttonVariant === "outline"
                      ? "bg-transparent border"
                      : ""
                  }`}
                  style={
                    plan.buttonVariant === "filled"
                      ? {
                          backgroundColor: colors.accentOrange,
                          color: colors.textPrimary,
                        }
                      : {
                          borderColor: colors.outlineButton,
                          color: colors.textPrimary,
                        }
                  }
                  whileHover={{
                    scale: 1.02,
                    backgroundColor:
                      plan.buttonVariant === "filled"
                        ? colors.accentOrangeHover
                        : "rgba(255, 255, 255, 0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.buttonText}
                </motion.button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Included Features */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4
            className="font-sans text-sm md:text-base font-semibold mb-3"
            style={{ color: colors.textPrimary }}
          >
            {includedFeatures.title}
          </h4>
          <ul className="space-y-1">
            {includedFeatures.features.map((feature, index) => (
              <li
                key={index}
                className="font-sans text-sm"
                style={{ color: colors.textSecondary }}
              >
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
