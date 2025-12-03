"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#6D4CF0",
    accentHover: "#5B3DD9",
    background: "#000000",
    cardBg: "#FFFFFF",
    textPrimary: "#000000",
    textSecondary: "#666666",
    border: "#E5E5E5",
    inputBg: "#F5F5F5",
    sliderDot: "#6D4CF0",
  },
  dark: {
    accent: "#6D4CF0",
    accentHover: "#5B3DD9",
    background: "#000000",
    cardBg: "#FFFFFF",
    textPrimary: "#000000",
    textSecondary: "#666666",
    border: "#E5E5E5",
    inputBg: "#F5F5F5",
    sliderDot: "#6D4CF0",
  },
} as const;

/**
 * 콘텐츠 데이터
 */
const CONTENT = {
  headline: "Simple and fair pricing",
  subheadline: "Buy now and save 50% with early bird pricing",
  plans: {
    free: {
      title: "Free",
      features: [
        "Unlimited usage for 7 days",
        "After trial limited to Figma files with\n100 text layers or less",
      ],
      buttonText: "Try SPELLL",
      emailPlaceholder: "Your email address",
    },
    monthly: {
      title: "Monthly",
      price: "$10",
      period: "/month",
      features: [
        "7-day money back guarantee",
        "Unlimited usage",
        "License for 1 user",
        "Fast and premium support",
      ],
      sliderLabel: "Get a license for 1 user",
      buttonText: "Buy SPELLL",
      emailPlaceholder: "Your email address",
    },
    oneTime: {
      title: "One time payment",
      price: "$72",
      subtitle: "Pay once and use it forever",
      features: [
        "14-day money back guarantee",
        "Unlimited usage",
        "License for 1 user",
        "Fast and premium support",
      ],
      sliderLabel: "Get a license for 1 user",
      buttonText: "Buy SPELLL",
      emailPlaceholder: "Your email address",
    },
    yearly: {
      title: "Yearly",
      price: "$4",
      period: "/month",
      billing: "billed as $48/year",
      features: [
        "14-day money back guarantee",
        "Unlimited usage",
        "License for 1 user",
        "Fast and premium support",
      ],
      sliderLabel: "Get a license for 1 user",
      buttonText: "Buy SPELLL",
      emailPlaceholder: "Your email address",
    },
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface PricingOplMaster24Props {
  mode?: "light" | "dark";
  headline?: string;
  subheadline?: string;
}

// Slider component with dot
function SliderWithLabel({
  label,
  colors,
}: {
  label: string;
  colors: typeof COLORS.light;
}) {
  return (
    <div className="mb-3">
      <div className="relative h-1 w-full rounded-full mb-2" style={{ backgroundColor: colors.border }}>
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: colors.sliderDot }}
        />
      </div>
      <p className="text-xs" style={{ color: colors.textSecondary }}>
        {label}
      </p>
    </div>
  );
}

// Email input component
function EmailInput({
  placeholder,
  colors,
}: {
  placeholder: string;
  colors: typeof COLORS.light;
}) {
  return (
    <div className="w-full mb-3">
      <input
        type="email"
        placeholder={placeholder}
        className="w-full bg-transparent border-b py-2 text-sm outline-none placeholder:text-gray-400"
        style={{
          borderColor: colors.border,
          color: colors.textPrimary,
        }}
      />
    </div>
  );
}

// Feature list component
function FeatureList({
  features,
  colors,
}: {
  features: readonly string[];
  colors: typeof COLORS.light;
}) {
  return (
    <ul className="space-y-2 mb-6">
      {features.map((feature, index) => (
        <li
          key={index}
          className="flex items-start gap-2 text-sm"
          style={{ color: colors.textSecondary }}
        >
          <span className="mt-1 text-xs">•</span>
          <span className="whitespace-pre-line">{feature}</span>
        </li>
      ))}
    </ul>
  );
}

// Free plan card
function FreePlanCard({ colors }: { colors: typeof COLORS.light }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-xl p-6 flex flex-col h-full"
      style={{ backgroundColor: colors.cardBg }}
    >
      <h3
        className="text-base font-normal mb-4"
        style={{ color: colors.textPrimary }}
      >
        {CONTENT.plans.free.title}
      </h3>
      <FeatureList features={CONTENT.plans.free.features} colors={colors} />
      <div className="mt-auto">
        <EmailInput
          placeholder={CONTENT.plans.free.emailPlaceholder}
          colors={colors}
        />
        <button
          className="w-full py-3 rounded-lg text-sm font-medium border transition-colors hover:bg-gray-50"
          style={{
            borderColor: colors.textPrimary,
            color: colors.textPrimary,
          }}
        >
          {CONTENT.plans.free.buttonText}
        </button>
      </div>
    </motion.div>
  );
}

// Monthly plan card
function MonthlyPlanCard({ colors }: { colors: typeof COLORS.light }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-xl p-6 flex flex-col h-full"
      style={{ backgroundColor: colors.cardBg }}
    >
      <h3
        className="text-base font-normal mb-1"
        style={{ color: colors.textSecondary }}
      >
        {CONTENT.plans.monthly.title}
      </h3>
      <div className="mb-4">
        <span
          className="text-3xl font-semibold"
          style={{ color: colors.textPrimary }}
        >
          {CONTENT.plans.monthly.price}
        </span>
        <span
          className="text-lg"
          style={{ color: colors.textPrimary }}
        >
          {CONTENT.plans.monthly.period}
        </span>
      </div>
      <FeatureList features={CONTENT.plans.monthly.features} colors={colors} />
      <div className="mt-auto">
        <SliderWithLabel
          label={CONTENT.plans.monthly.sliderLabel}
          colors={colors}
        />
        <EmailInput
          placeholder={CONTENT.plans.monthly.emailPlaceholder}
          colors={colors}
        />
        <button
          className="w-full py-3 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: colors.accent }}
        >
          {CONTENT.plans.monthly.buttonText}
        </button>
      </div>
    </motion.div>
  );
}

// One time payment card
function OneTimePlanCard({ colors }: { colors: typeof COLORS.light }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="rounded-xl p-6 flex flex-col h-full"
      style={{ backgroundColor: colors.cardBg }}
    >
      <h3
        className="text-base font-normal mb-1"
        style={{ color: colors.textSecondary }}
      >
        {CONTENT.plans.oneTime.title}
      </h3>
      <div className="mb-1">
        <span
          className="text-3xl font-semibold"
          style={{ color: colors.textPrimary }}
        >
          {CONTENT.plans.oneTime.price}
        </span>
      </div>
      <p
        className="text-xs mb-4"
        style={{ color: colors.textSecondary }}
      >
        {CONTENT.plans.oneTime.subtitle}
      </p>
      <FeatureList features={CONTENT.plans.oneTime.features} colors={colors} />
      <div className="mt-auto">
        <SliderWithLabel
          label={CONTENT.plans.oneTime.sliderLabel}
          colors={colors}
        />
        <EmailInput
          placeholder={CONTENT.plans.oneTime.emailPlaceholder}
          colors={colors}
        />
        <button
          className="w-full py-3 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: colors.accent }}
        >
          {CONTENT.plans.oneTime.buttonText}
        </button>
      </div>
    </motion.div>
  );
}

// Yearly plan card
function YearlyPlanCard({ colors }: { colors: typeof COLORS.light }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="rounded-xl p-6 flex flex-col h-full"
      style={{ backgroundColor: colors.cardBg }}
    >
      <h3
        className="text-base font-normal mb-1"
        style={{ color: colors.textSecondary }}
      >
        {CONTENT.plans.yearly.title}
      </h3>
      <div className="mb-0">
        <span
          className="text-3xl font-semibold"
          style={{ color: colors.textPrimary }}
        >
          {CONTENT.plans.yearly.price}
        </span>
        <span
          className="text-lg"
          style={{ color: colors.textPrimary }}
        >
          {CONTENT.plans.yearly.period}
        </span>
      </div>
      <p
        className="text-xs mb-4"
        style={{ color: colors.textSecondary }}
      >
        {CONTENT.plans.yearly.billing}
      </p>
      <FeatureList features={CONTENT.plans.yearly.features} colors={colors} />
      <div className="mt-auto">
        <SliderWithLabel
          label={CONTENT.plans.yearly.sliderLabel}
          colors={colors}
        />
        <EmailInput
          placeholder={CONTENT.plans.yearly.emailPlaceholder}
          colors={colors}
        />
        <button
          className="w-full py-3 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: colors.accent }}
        >
          {CONTENT.plans.yearly.buttonText}
        </button>
      </div>
    </motion.div>
  );
}

export default function PricingOplMaster24({
  mode = "light",
  headline = CONTENT.headline,
  subheadline = CONTENT.subheadline,
}: PricingOplMaster24Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {headline}
          </h2>
          <p className="text-sm text-gray-400">{subheadline}</p>
        </motion.div>

        {/* Pricing Cards Grid - Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <FreePlanCard colors={colors} />
          <MonthlyPlanCard colors={colors} />
          <OneTimePlanCard colors={colors} />
        </div>

        {/* Pricing Cards Grid - Bottom Row (Yearly centered) */}
        <div className="flex justify-center">
          <div className="w-full md:w-1/3">
            <YearlyPlanCard colors={colors} />
          </div>
        </div>
      </div>
    </section>
  );
}
