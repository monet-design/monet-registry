"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#FBF6F1",
    cardBg: "#FFFFFF",
    textPrimary: "#1A1A1A",
    textSecondary: "#4A4A4A",
    textMuted: "#7A7A7A",
    accentBrown: "#C4956A",
    accentText: "#C4956A",
    buttonPrimary: "#C4956A",
    buttonPrimaryText: "#FFFFFF",
    buttonSecondary: "#555555",
    buttonSecondaryText: "#FFFFFF",
    progressBar: "#C4956A",
    progressTrack: "#E5E0DB",
    strikethrough: "#7A7A7A",
  },
  dark: {
    background: "#1A1612",
    cardBg: "#2A2420",
    textPrimary: "#F5F2ED",
    textSecondary: "#C4C4C4",
    textMuted: "#9A9A9A",
    accentBrown: "#D4A57A",
    accentText: "#D4A57A",
    buttonPrimary: "#D4A57A",
    buttonPrimaryText: "#1A1612",
    buttonSecondary: "#3A3A3A",
    buttonSecondaryText: "#F5F2ED",
    progressBar: "#D4A57A",
    progressTrack: "#3A3630",
    strikethrough: "#9A9A9A",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  header: {
    title: "Launch pricing",
    emoji: "🎉",
    subtitle: "One launch, two different deals",
  },
  progress: {
    label: "Only 93 more launch deals left!",
    total: 100,
    remaining: 93,
  },
  launchPlan: {
    name: "Launch plan",
    price: "$70/year",
    originalPrice: "$100/year",
    discount: "Save 30% forever",
    description: "All features at a discount, forever.",
    buttonText: "Sign up",
  },
  lifetimePlan: {
    name: "Lifetime access",
    price: "$160",
    priceSubtext: "one-time payment",
    highlight: "Unbeatable value",
    description: "All features with lifetime access.",
    buttonText: "Sign up",
  },
  footer: {
    dealNote: "Only 100 deals are available. When they're gone, they're gone forever.",
    regularNote: "Regular plans are also available with a 7-day free trial —",
    regularPriceMonthly: "$12/month",
    regularPriceYearly: "$100/year",
  },
  comingSoon: {
    title: "Coming soon to your ilo account",
    features: [
      {
        title: "Account switching",
        description: "Log in to multiple Twitter accounts in ilo and quickly switch between them.",
      },
      {
        title: "Instant insights when tweets perform well",
        description: "Get alerted when a tweet takes off, and compare engagement with other tweets.",
      },
      {
        title: "Engagement benchmarks",
        description: "Compare your data against others with similar follower counts.",
      },
    ],
    moreText: "And more...",
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface LaunchPlanContent {
  name: string;
  price: string;
  originalPrice: string;
  discount: string;
  description: string;
  buttonText: string;
}

interface LifetimePlanContent {
  name: string;
  price: string;
  priceSubtext: string;
  highlight: string;
  description: string;
  buttonText: string;
}

interface ProgressContent {
  label: string;
  total: number;
  remaining: number;
}

interface HeaderContent {
  title: string;
  emoji: string;
  subtitle: string;
}

interface FooterContent {
  dealNote: string;
  regularNote: string;
  regularPriceMonthly: string;
  regularPriceYearly: string;
}

interface ComingSoonFeature {
  title: string;
  description: string;
}

interface ComingSoonContent {
  title: string;
  features: ComingSoonFeature[];
  moreText: string;
}

interface PricingOplMasterIloProps {
  mode?: "light" | "dark";
  header?: HeaderContent;
  progress?: ProgressContent;
  launchPlan?: LaunchPlanContent;
  lifetimePlan?: LifetimePlanContent;
  footer?: FooterContent;
  comingSoon?: ComingSoonContent;
  onLaunchPlanClick?: () => void;
  onLifetimePlanClick?: () => void;
}

export default function PricingOplMasterIlo({
  mode = "light",
  header = DEFAULT_CONTENT.header,
  progress = DEFAULT_CONTENT.progress,
  launchPlan = DEFAULT_CONTENT.launchPlan,
  lifetimePlan = DEFAULT_CONTENT.lifetimePlan,
  footer = DEFAULT_CONTENT.footer,
  comingSoon = DEFAULT_CONTENT.comingSoon,
  onLaunchPlanClick,
  onLifetimePlanClick,
}: PricingOplMasterIloProps) {
  const colors = COLORS[mode];
  const progressPercentage = ((progress.total - progress.remaining) / progress.total) * 100;

  return (
    <section
      className="relative w-full py-12 md:py-20 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

        .font-serif-display {
          font-family: "DM Serif Display", Georgia, serif;
        }

        .font-sans {
          font-family: "Inter", system-ui, sans-serif;
        }
      `}</style>

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className="font-serif-display text-3xl md:text-4xl font-normal mb-2"
            style={{ color: colors.textPrimary }}
          >
            {header.title} {header.emoji}
          </h1>
          <p
            className="font-sans text-base"
            style={{ color: colors.textSecondary }}
          >
            {header.subtitle}
          </p>
        </motion.div>

        {/* Progress Bar Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p
            className="font-sans text-sm font-semibold text-center mb-3"
            style={{ color: colors.textPrimary }}
          >
            {progress.label}
          </p>
          <div className="flex items-center gap-3">
            <span
              className="font-sans text-sm"
              style={{ color: colors.textMuted }}
            >
              {progress.total}
            </span>
            <div
              className="flex-1 h-2 rounded-full overflow-hidden"
              style={{ backgroundColor: colors.progressTrack }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: colors.progressBar }}
                initial={{ width: 0 }}
                whileInView={{ width: `${progressPercentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              />
            </div>
            <span
              className="font-sans text-sm"
              style={{ color: colors.accentText }}
            >
              0
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Launch Plan Card */}
          <motion.div
            className="rounded-2xl p-6 shadow-sm"
            style={{ backgroundColor: colors.cardBg }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3
              className="font-serif-display text-2xl text-center mb-4"
              style={{ color: colors.textPrimary }}
            >
              {launchPlan.name}
            </h3>

            <div className="text-center mb-1">
              <span
                className="font-sans text-xl font-medium"
                style={{ color: colors.textPrimary }}
              >
                {launchPlan.price}
              </span>
            </div>

            <div className="text-center mb-3">
              <span
                className="font-sans text-base line-through"
                style={{ color: colors.strikethrough }}
              >
                {launchPlan.originalPrice}
              </span>
            </div>

            <p
              className="font-sans text-sm text-center mb-4 italic"
              style={{ color: colors.accentText }}
            >
              {launchPlan.discount}
            </p>

            <p
              className="font-sans text-sm text-center mb-6"
              style={{ color: colors.textSecondary }}
            >
              {launchPlan.description}
            </p>

            <motion.button
              onClick={onLaunchPlanClick}
              className="w-full py-3 rounded-lg font-sans text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: colors.buttonPrimary,
                color: colors.buttonPrimaryText,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {launchPlan.buttonText}
            </motion.button>
          </motion.div>

          {/* Lifetime Plan Card */}
          <motion.div
            className="rounded-2xl p-6 shadow-sm"
            style={{ backgroundColor: colors.cardBg }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3
              className="font-serif-display text-2xl text-center mb-4"
              style={{ color: colors.textPrimary }}
            >
              {lifetimePlan.name}
            </h3>

            <div className="text-center mb-1">
              <span
                className="font-sans text-xl font-medium"
                style={{ color: colors.textPrimary }}
              >
                {lifetimePlan.price}
              </span>
            </div>

            <div className="text-center mb-3">
              <span
                className="font-sans text-sm"
                style={{ color: colors.textMuted }}
              >
                {lifetimePlan.priceSubtext}
              </span>
            </div>

            <p
              className="font-sans text-sm text-center mb-4 italic"
              style={{ color: colors.accentText }}
            >
              {lifetimePlan.highlight}
            </p>

            <p
              className="font-sans text-sm text-center mb-6"
              style={{ color: colors.textSecondary }}
            >
              {lifetimePlan.description}
            </p>

            <motion.button
              onClick={onLifetimePlanClick}
              className="w-full py-3 rounded-lg font-sans text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: colors.buttonSecondary,
                color: colors.buttonSecondaryText,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {lifetimePlan.buttonText}
            </motion.button>
          </motion.div>
        </div>

        {/* Footer Notes */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p
            className="font-sans text-sm mb-2"
            style={{ color: colors.textSecondary }}
          >
            {footer.dealNote}
          </p>
          <p
            className="font-sans text-sm"
            style={{ color: colors.textSecondary }}
          >
            {footer.regularNote}{" "}
            <span
              className="font-semibold"
              style={{ color: colors.textPrimary }}
            >
              {footer.regularPriceMonthly}
            </span>{" "}
            or{" "}
            <span
              className="font-semibold"
              style={{ color: colors.textPrimary }}
            >
              {footer.regularPriceYearly}
            </span>
          </p>
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2
            className="font-serif-display text-xl md:text-2xl mb-8"
            style={{ color: colors.textPrimary }}
          >
            {comingSoon.title}
          </h2>

          <div className="space-y-6">
            {comingSoon.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <h4
                  className="font-sans text-sm font-semibold mb-1"
                  style={{ color: colors.textPrimary }}
                >
                  {feature.title}
                </h4>
                <p
                  className="font-sans text-sm"
                  style={{ color: colors.textSecondary }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <p
            className="font-sans text-sm mt-6"
            style={{ color: colors.textSecondary }}
          >
            {comingSoon.moreText}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
