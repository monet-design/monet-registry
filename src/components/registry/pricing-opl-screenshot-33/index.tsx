"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#1a1815",
    cardBg: "#1a1815",
    accent: "#b5a066",
    accentHover: "#c9b576",
    textPrimary: "#ffffff",
    textSecondary: "#888888",
    textMuted: "#666666",
    border: "#333333",
  },
  dark: {
    background: "#1a1815",
    cardBg: "#1a1815",
    accent: "#b5a066",
    accentHover: "#c9b576",
    textPrimary: "#ffffff",
    textSecondary: "#888888",
    textMuted: "#666666",
    border: "#333333",
  },
} as const;

/**
 * 컨텐츠 데이터
 */
const CONTENT = {
  title: "MEMBERSHIP LEVELS",
  subtitle: "Choose a plan that fits your needs.",
  plans: [
    {
      id: "monthly",
      name: "MONTHLY",
      description: "Flexibility at Your Fingertips.\nPause or cancel anytime.",
      price: "$1499.99",
      period: "/MO",
      subtext: "Pause or cancel anytime",
      highlighted: false,
      features: [
        "Unlimited requests",
        "Unlimited brands",
        "Unlimited users",
        "Unlimited assets",
        "Pause or cancel anytime",
      ],
    },
    {
      id: "quarterly",
      name: "QUARTERLY",
      description: "Save 10%",
      price: "$1349.99",
      period: "/MO",
      subtext: "Paid quarterly",
      highlighted: false,
      features: [
        "Unlimited requests",
        "Unlimited brands",
        "Unlimited users",
        "Unlimited assets",
      ],
    },
    {
      id: "yearly",
      name: "YEARLY",
      description: "Save 20%",
      price: "$1199.99",
      period: "/MO",
      subtext: "Paid annually",
      highlighted: true,
      features: [
        "Unlimited requests",
        "Unlimited brands",
        "Unlimited users",
        "Unlimited assets",
      ],
    },
  ],
  scheduleCall: {
    title: "SCHEDULE A CALL",
    description:
      "Get your answers. Schedule a call\nand learn more about how this all\nworks and how it helps you.",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Video } from "lucide-react";

interface PlanCardProps {
  plan: (typeof CONTENT.plans)[number];
  colors: (typeof COLORS)["light"];
  index: number;
}

function PlanCard({ plan, colors, index }: PlanCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col"
    >
      {/* Plan Name */}
      <h3
        className="text-sm font-semibold tracking-wider mb-1"
        style={{ color: plan.highlighted ? colors.accent : colors.textPrimary }}
      >
        {plan.name}
      </h3>

      {/* Description */}
      <p
        className="text-xs whitespace-pre-line mb-6 min-h-[32px]"
        style={{ color: colors.textSecondary }}
      >
        {plan.description}
      </p>

      {/* Price */}
      <div className="mb-1">
        <span
          className="text-2xl font-bold"
          style={{ color: colors.textPrimary }}
        >
          {plan.price}
        </span>
        <span className="text-lg font-bold" style={{ color: colors.textPrimary }}>
          {plan.period}
        </span>
      </div>

      {/* Subtext */}
      <p className="text-xs mb-6" style={{ color: colors.textSecondary }}>
        {plan.subtext}
      </p>

      {/* Get Started Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-2.5 rounded-full text-sm font-medium mb-3 transition-colors"
        style={{
          backgroundColor: colors.accent,
          color: colors.background,
        }}
      >
        Get Started
      </motion.button>

      {/* Book a Call Link */}
      <button
        className="text-xs font-semibold tracking-wider underline underline-offset-4 mb-8"
        style={{ color: colors.accent }}
      >
        BOOK A CALL
      </button>

      {/* Includes Section */}
      <div>
        <p
          className="text-xs font-semibold tracking-wide mb-3"
          style={{ color: colors.textPrimary }}
        >
          INCLUDES
        </p>
        <ul className="space-y-2">
          {plan.features.map((feature, idx) => (
            <li
              key={idx}
              className="text-xs flex items-start gap-2"
              style={{ color: colors.textSecondary }}
            >
              <span style={{ color: colors.textMuted }}>•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

interface ScheduleCallCardProps {
  colors: (typeof COLORS)["light"];
}

function ScheduleCallCard({ colors }: ScheduleCallCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex flex-col"
    >
      {/* Video Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
        style={{ backgroundColor: colors.textMuted }}
      >
        <Video size={28} style={{ color: colors.textSecondary }} />
      </div>

      {/* Title */}
      <h3
        className="text-sm font-semibold tracking-wider mb-3"
        style={{ color: colors.textPrimary }}
      >
        {CONTENT.scheduleCall.title}
      </h3>

      {/* Description */}
      <p
        className="text-xs whitespace-pre-line mb-6 leading-relaxed"
        style={{ color: colors.textSecondary }}
      >
        {CONTENT.scheduleCall.description}
      </p>

      {/* Book a Call Link */}
      <button
        className="text-xs font-semibold tracking-wider underline underline-offset-4 text-left"
        style={{ color: colors.accent }}
      >
        BOOK A CALL
      </button>
    </motion.div>
  );
}

interface PricingOplScreenshot33Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
}

export default function PricingOplScreenshot33({
  mode = "dark",
  title = CONTENT.title,
  subtitle = CONTENT.subtitle,
}: PricingOplScreenshot33Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-2xl md:text-3xl font-light tracking-[0.3em] mb-3"
            style={{ color: colors.textPrimary }}
          >
            {title}
          </h2>
          <p className="text-sm" style={{ color: colors.textSecondary }}>
            {subtitle}
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {CONTENT.plans.map((plan, index) => (
            <PlanCard key={plan.id} plan={plan} colors={colors} index={index} />
          ))}
          <ScheduleCallCard colors={colors} />
        </div>
      </div>
    </section>
  );
}
