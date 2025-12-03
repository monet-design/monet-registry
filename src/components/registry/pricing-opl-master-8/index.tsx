"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F5F3EA",
    textPrimary: "#1A1A1A",
    textMuted: "#A8A89D",
    accent: "#1D4739",
    accentText: "#FFFFFF",
    divider: "#1A1A1A",
  },
  dark: {
    background: "#1A1A1A",
    textPrimary: "#F5F3EA",
    textMuted: "#6B6B60",
    accent: "#4D8B7A",
    accentText: "#FFFFFF",
    divider: "#F5F3EA",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  title: "Our membership plans",
  subtitle:
    "In addition to our two primary memberships, we will also have\ncorporate, family, and under 21 offerings coming soon.",
  plans: [
    {
      id: "standard",
      name: "Standard",
      price: "$159",
      period: "/mo",
      founderPrice: "or $129 founder's rate",
      founderHighlight: "200 members",
      features: [
        { text: "Founders rate for the first 200 members", included: true },
        { text: "Access to private lockers", included: true },
        { text: "Club gatherings & special events", included: true },
        { text: "Lounge & co-working space", included: true },
        { text: "5 guest passes per month", included: false },
        { text: "Equipment and beverage discounts", included: false },
        { text: "Priority reservation times", included: false },
        { text: "$50 bar tab per month", included: false },
      ],
      buttonText: "Join the Waitlist",
    },
    {
      id: "premium",
      name: "Premium",
      price: "$299",
      period: "/mo",
      founderPrice: "or $269 founder's rate",
      founderHighlight: "50 members",
      features: [
        { text: "Founders rate for the first 50 members", included: true },
        { text: "Access to private lockers", included: true },
        { text: "Club gatherings & special events", included: true },
        { text: "Lounge & co-working space", included: true },
        { text: "5 guest passes per month", included: true },
        { text: "Equipment and beverage discounts", included: true },
        { text: "Priority reservation times", included: true },
        { text: "$50 bar tab per month", included: true },
      ],
      buttonText: "Join the Waitlist",
    },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check } from "lucide-react";
import "./font.css";

interface Feature {
  text: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  founderPrice: string;
  founderHighlight: string;
  features: Feature[];
  buttonText: string;
}

interface PricingOplMaster8Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  plans?: Plan[];
}

export default function PricingOplMaster8({
  mode = "light",
  title = DEFAULT_CONTENT.title,
  subtitle = DEFAULT_CONTENT.subtitle,
  plans = DEFAULT_CONTENT.plans,
}: PricingOplMaster8Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4 md:px-8"
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
            className="playfair-display-italic text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
            style={{ color: colors.textPrimary }}
          >
            {title}
          </h2>
          <p
            className="space-mono text-xs md:text-sm whitespace-pre-line leading-relaxed"
            style={{
              color: colors.textPrimary,
              opacity: 0.8,
            }}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className="flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Plan Name */}
              <h3
                className="space-mono text-base md:text-lg font-bold mb-2"
                style={{ color: colors.textPrimary }}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline mb-1">
                <span
                  className="instrument-serif-italic text-4xl md:text-5xl lg:text-6xl"
                  style={{ color: colors.textPrimary }}
                >
                  {plan.price}
                </span>
                <span
                  className="instrument-serif-italic text-xl md:text-2xl lg:text-3xl"
                  style={{ color: colors.textPrimary }}
                >
                  {plan.period}
                </span>
              </div>

              {/* Founder Price */}
              <p
                className="space-mono text-xs mb-6"
                style={{ color: colors.textMuted }}
              >
                {plan.founderPrice}
              </p>

              {/* Divider */}
              <div
                className="w-full h-px mb-6"
                style={{ backgroundColor: colors.divider }}
              />

              {/* Features List */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      className="mt-0.5 flex-shrink-0"
                      style={{
                        color: feature.included
                          ? colors.accent
                          : colors.textMuted,
                      }}
                    />
                    <span
                      className="space-mono text-xs md:text-sm leading-relaxed"
                      style={{
                        color: feature.included
                          ? colors.textPrimary
                          : colors.textMuted,
                      }}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <motion.button
                className="space-mono w-full py-3 md:py-4 text-xs md:text-sm tracking-wider transition-all"
                style={{
                  backgroundColor: colors.accent,
                  color: colors.accentText,
                }}
                whileHover={{ scale: 1.02, opacity: 0.9 }}
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
