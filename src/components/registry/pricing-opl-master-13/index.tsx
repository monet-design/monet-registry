"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#000000",
    cardBackground: "#14151A",
    cardBorder: "#27282D",
    textPrimary: "#ffffff",
    textSecondary: "#9CA3AF",
    textMuted: "#6B7280",
    accent: "#8B5CF6",
    accentHover: "#7C3AED",
    checkGreen: "#22C55E",
  },
  dark: {
    background: "#000000",
    cardBackground: "#14151A",
    cardBorder: "#27282D",
    textPrimary: "#ffffff",
    textSecondary: "#9CA3AF",
    textMuted: "#6B7280",
    accent: "#8B5CF6",
    accentHover: "#7C3AED",
    checkGreen: "#22C55E",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  title: "Pay once, use forever",
  subtitle:
    "Screen Studio is a one-time purchase. You get all the features in every plan.",
  plans: [
    {
      id: "standard",
      name: "Standard",
      price: "$89",
      description: "Pay-once license for you.",
      features: [
        { text: "1 macOS device", included: true },
        { text: "Pay once, use forever", included: true },
        { text: "All Screen Studio features", included: true },
        { text: "1 year of updates", included: true },
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      highlighted: false,
    },
    {
      id: "extended",
      name: "Extended",
      price: "$139",
      description: "Great for multi-devices setups &\nsmall teams.",
      features: [
        { text: "3 macOS devices", included: true },
        { text: "Pay once, use forever", included: true },
        { text: "All Screen Studio features", included: true },
        { text: "1 year of updates", included: true },
      ],
      buttonText: "Get Started",
      buttonVariant: "filled" as const,
      highlighted: true,
    },
    {
      id: "teams",
      name: "Teams",
      price: "Get in\ntouch",
      description: "Pay per seat for your team.",
      features: [
        { text: "Unlimited macOS devices", included: true },
        { text: "All Screen Studio features", included: true },
        { text: "App updates during the\nsubscription", included: true },
      ],
      buttonText: "Contact us",
      buttonVariant: "outline" as const,
      highlighted: false,
    },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check } from "lucide-react";

interface Feature {
  text: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: Feature[];
  buttonText: string;
  buttonVariant: "filled" | "outline";
  highlighted?: boolean;
}

interface PricingOplMaster13Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  plans?: Plan[];
}

export default function PricingOplMaster13({
  mode = "dark",
  title = DEFAULT_CONTENT.title,
  subtitle = DEFAULT_CONTENT.subtitle,
  plans = DEFAULT_CONTENT.plans,
}: PricingOplMaster13Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4"
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

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className="rounded-2xl p-6 flex flex-col"
              style={{
                backgroundColor: colors.cardBackground,
                border: `1px solid ${colors.cardBorder}`,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Plan Name */}
              <h3
                className="text-sm font-medium mb-4"
                style={{ color: colors.textSecondary }}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-2">
                <span
                  className="text-3xl md:text-4xl font-semibold whitespace-pre-line leading-tight"
                  style={{ color: colors.textPrimary }}
                >
                  {plan.price}
                </span>
              </div>

              {/* Description */}
              <p
                className="text-xs md:text-sm whitespace-pre-line mb-6"
                style={{ color: colors.textMuted }}
              >
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        backgroundColor: colors.checkGreen,
                      }}
                    >
                      <Check size={10} color="#000000" strokeWidth={3} />
                    </div>
                    <span
                      className="text-xs md:text-sm whitespace-pre-line leading-relaxed"
                      style={{ color: colors.textSecondary }}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <motion.button
                className="w-full py-3 rounded-lg text-sm font-medium transition-all"
                style={
                  plan.buttonVariant === "filled"
                    ? {
                        backgroundColor: colors.accent,
                        color: colors.textPrimary,
                      }
                    : {
                        backgroundColor: "transparent",
                        border: `1px solid ${colors.cardBorder}`,
                        color: colors.textPrimary,
                      }
                }
                whileHover={{
                  scale: 1.02,
                  backgroundColor:
                    plan.buttonVariant === "filled"
                      ? colors.accentHover
                      : "rgba(255,255,255,0.05)",
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
