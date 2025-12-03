"use client";

import "./font.css";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#EBE6DE",
    cardBackground: "#F6F4F0",
    accent: "#F05F48",
    accentHover: "#E54D36",
    textPrimary: "#1F2937",
    textSecondary: "#6B7280",
    textMuted: "#9CA3AF",
    checkActive: "#374151",
    checkInactive: "#D1D5DB",
  },
  dark: {
    background: "#1F2937",
    cardBackground: "#374151",
    accent: "#F05F48",
    accentHover: "#E54D36",
    textPrimary: "#F9FAFB",
    textSecondary: "#D1D5DB",
    textMuted: "#9CA3AF",
    checkActive: "#E5E7EB",
    checkInactive: "#6B7280",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, Minus, Mail, DollarSign } from "lucide-react";

interface FeatureItem {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  buttonText: string;
  buttonVariant: "outline" | "filled";
  features: FeatureItem[];
}

interface BottomCard {
  title: string;
  description: string;
  buttonText: string;
  icon: "mail" | "dollar";
}

interface PricingOplMasterProps {
  mode?: "light" | "dark";
  label?: string;
  title?: string;
  plans?: PricingPlan[];
  bottomCards?: BottomCard[];
  onPlanClick?: (planName: string) => void;
  onBottomCardClick?: (title: string) => void;
}

const defaultPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    description: "The free version of GriddyIcons, with 100 high-quality icons.",
    buttonText: "Download Free",
    buttonVariant: "outline",
    features: [
      { text: "Free for commercial use", included: true },
      { text: "100 icons", included: true },
      { text: "SVG library included", included: true },
      { text: "Figma components", included: true },
      { text: "Framer components", included: false },
      { text: "IconJar file format", included: false },
      { text: "Free lifetime updates", included: false },
      { text: "Ability to request icons", included: false },
    ],
  },
  {
    name: "Solo",
    price: "$79",
    description: "A single license for solo designers, developers, and freelancers.",
    buttonText: "Buy Now",
    buttonVariant: "filled",
    features: [
      { text: "Single user license", included: true },
      { text: "600+ icons and growing", included: true },
      { text: "SVG library included", included: true },
      { text: "Figma components", included: true },
      { text: "Framer components", included: true },
      { text: "IconJar file format", included: true },
      { text: "Free lifetime updates", included: true },
      { text: "Ability to request icons", included: true },
      { text: "Priority requests", included: false },
    ],
  },
  {
    name: "Team",
    price: "$149",
    description: "Perfect for design teams, agencies, and startups. Up to 8 users.",
    buttonText: "Buy Now",
    buttonVariant: "filled",
    features: [
      { text: "Up to 8 users license", included: true },
      { text: "600+ icons and growing", included: true },
      { text: "SVG library included", included: true },
      { text: "Figma components", included: true },
      { text: "Framer components", included: true },
      { text: "IconJar file format", included: true },
      { text: "Free lifetime updates", included: true },
      { text: "Ability to request icons", included: true },
      { text: "Priority requests", included: true },
    ],
  },
];

const defaultBottomCards: BottomCard[] = [
  {
    title: "Needs more users license?",
    description:
      "Is your organization or enterprise requiring over 8 user licenses? Get in touch with us, and we'll provide a custom quote.",
    buttonText: "Contact us",
    icon: "mail",
  },
  {
    title: "Earn up to $29.80 on each sale!",
    description:
      "All you have to do is recommend us using your affiliate link on your website, blog, and social media.",
    buttonText: "Become Affiliate",
    icon: "dollar",
  },
];

export default function PricingOplMaster({
  mode = "light",
  label = "PRICING",
  title = "One-time payment, unlimited\nusage, lifetime updates",
  plans = defaultPlans,
  bottomCards = defaultBottomCards,
  onPlanClick,
  onBottomCardClick,
}: PricingOplMasterProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 px-4 md:px-8"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-6"
        >
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: colors.accent }}
          />
          <span
            className="text-xs font-medium tracking-widest"
            style={{ color: colors.textSecondary }}
          >
            {label}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-[42px] leading-tight mb-12"
          style={{
            color: colors.textPrimary,
            fontFamily: "'Instrument Serif', 'Times New Roman', serif",
            whiteSpace: "pre-line",
          }}
        >
          {title}
        </motion.h2>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="rounded-2xl p-6"
              style={{ backgroundColor: colors.cardBackground }}
            >
              {/* Plan Header */}
              <div className="flex items-center justify-between mb-3">
                <h3
                  className="text-lg font-medium"
                  style={{ color: colors.textPrimary }}
                >
                  {plan.name}
                </h3>
                <span
                  className="text-2xl font-semibold"
                  style={{ color: colors.accent }}
                >
                  {plan.price}
                </span>
              </div>

              {/* Description */}
              <p
                className="text-sm mb-5 leading-relaxed"
                style={{ color: colors.textSecondary }}
              >
                {plan.description}
              </p>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onPlanClick?.(plan.name)}
                className="w-full py-3 px-4 rounded-full text-sm font-medium transition-colors mb-6"
                style={
                  plan.buttonVariant === "filled"
                    ? {
                        backgroundColor: colors.accent,
                        color: "#FFFFFF",
                      }
                    : {
                        backgroundColor: "transparent",
                        color: colors.accent,
                        border: `1.5px solid ${colors.accent}`,
                      }
                }
                onMouseEnter={(e) => {
                  if (plan.buttonVariant === "filled") {
                    e.currentTarget.style.backgroundColor = colors.accentHover;
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.buttonVariant === "filled") {
                    e.currentTarget.style.backgroundColor = colors.accent;
                  }
                }}
              >
                {plan.buttonText}
              </motion.button>

              {/* Features List */}
              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center gap-3"
                    style={{
                      color: feature.included
                        ? colors.textPrimary
                        : colors.textMuted,
                    }}
                  >
                    {feature.included ? (
                      <Check
                        size={16}
                        strokeWidth={2}
                        style={{ color: colors.checkActive }}
                      />
                    ) : (
                      <Minus
                        size={16}
                        strokeWidth={2}
                        style={{ color: colors.checkInactive }}
                      />
                    )}
                    <span className="text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bottomCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="rounded-2xl p-6 flex items-start gap-4"
              style={{ backgroundColor: colors.cardBackground }}
            >
              <div className="flex-1">
                {/* Card Title */}
                <h3
                  className="text-lg font-medium mb-2"
                  style={{ color: colors.textPrimary }}
                >
                  {card.title}
                </h3>

                {/* Card Description */}
                <p
                  className="text-sm mb-4 leading-relaxed"
                  style={{ color: colors.textSecondary }}
                >
                  {card.description}
                </p>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onBottomCardClick?.(card.title)}
                  className="py-2.5 px-5 rounded-full text-sm font-medium transition-colors"
                  style={{
                    backgroundColor: "transparent",
                    color: colors.textPrimary,
                    border: `1.5px solid ${colors.textPrimary}`,
                  }}
                >
                  {card.buttonText}
                </motion.button>
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  border: `1.5px solid ${colors.textPrimary}`,
                }}
              >
                {card.icon === "mail" ? (
                  <Mail size={20} style={{ color: colors.textPrimary }} />
                ) : (
                  <DollarSign size={20} style={{ color: colors.textPrimary }} />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
