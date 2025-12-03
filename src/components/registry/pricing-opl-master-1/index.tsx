"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#EDF2F6",
    cardBg: "#FFFFFF",
    textPrimary: "#1A1A1A",
    textSecondary: "#6B7280",
    textMuted: "#9CA3AF",
    accentGreen: "#00C896",
    accentPink: "#E91E63",
    buttonBg: "#0F172A",
    buttonText: "#FFFFFF",
    buttonHoverBg: "#1E293B",
    linkColor: "#1A1A1A",
  },
  dark: {
    background: "#0F172A",
    cardBg: "#1E293B",
    textPrimary: "#F8FAFC",
    textSecondary: "#94A3B8",
    textMuted: "#64748B",
    accentGreen: "#34D399",
    accentPink: "#F472B6",
    buttonBg: "#F8FAFC",
    buttonText: "#0F172A",
    buttonHoverBg: "#E2E8F0",
    linkColor: "#F8FAFC",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  header: {
    title: "Simple Pricing. Cancel",
    titleAccent: "ANYTIME.",
    subtitle: "Choose a plan that works for you.",
  },
  mainPlan: {
    name: "Webflow Monthly",
    description: "For startups and small\nbusinesses.",
    price: "$2499",
    period: "/m",
    primaryButtonText: "Get Started",
    secondaryButtonText: "Book A Call",
    featuresTitle: "What's included:",
    features: [
      { text: "UNLIMITED WEBFLOW\nDEVELOPMENT", isHighlighted: true },
      { text: "UNLIMITED WEBFLOW\nDESIGN", isHighlighted: true },
      { text: "Unlimited revisions", isHighlighted: false },
      { text: "Access the raw Figma files", isHighlighted: false },
      { text: "Dedicated Support", isHighlighted: false },
      { text: "Cancel anytime", isHighlighted: false },
    ],
  },
  affiliatePlan: {
    title: "Become an",
    titleAccent: "AFFILIATE",
    description: "Share Flowjam and earn 25%\nfor every referral.",
    buttonText: "BECOME AFFILIATE",
  },
  callPlan: {
    title: "Have questions?",
    titleAccent: "BOOK A CALL",
    description: "Learn more about how Flowjam\nworks and how it can help you.",
    buttonText: "BOOK A CALL",
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Banknote } from "lucide-react";

interface Feature {
  text: string;
  isHighlighted: boolean;
}

interface MainPlanContent {
  name: string;
  description: string;
  price: string;
  period: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  featuresTitle: string;
  features: Feature[];
}

interface SidePlanContent {
  title: string;
  titleAccent: string;
  description: string;
  buttonText: string;
}

interface HeaderContent {
  title: string;
  titleAccent: string;
  subtitle: string;
}

interface PricingOplMaster1Props {
  mode?: "light" | "dark";
  header?: HeaderContent;
  mainPlan?: MainPlanContent;
  affiliatePlan?: SidePlanContent;
  callPlan?: SidePlanContent;
  icon?: React.ReactNode;
  onGetStartedClick?: () => void;
  onBookCallClick?: () => void;
  onAffiliateClick?: () => void;
}

export default function PricingOplMaster1({
  mode = "light",
  header = DEFAULT_CONTENT.header,
  mainPlan = DEFAULT_CONTENT.mainPlan,
  affiliatePlan = DEFAULT_CONTENT.affiliatePlan,
  callPlan = DEFAULT_CONTENT.callPlan,
  icon,
  onGetStartedClick,
  onBookCallClick,
  onAffiliateClick,
}: PricingOplMaster1Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&display=swap');

        .font-heading {
          font-family: 'Inter', system-ui, sans-serif;
        }

        .font-accent-italic {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
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
          {/* Money Icon */}
          <div className="flex justify-center mb-4">
            {icon || (
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: colors.accentGreen + "20" }}
              >
                <Banknote
                  className="w-7 h-7"
                  style={{ color: colors.accentGreen }}
                />
              </div>
            )}
          </div>

          {/* Title */}
          <h1
            className="font-heading text-3xl md:text-4xl font-extrabold mb-1"
            style={{ color: colors.textPrimary }}
          >
            {header.title}
          </h1>
          <h2
            className="font-accent-italic text-3xl md:text-4xl font-bold mb-4"
            style={{ color: colors.accentGreen }}
          >
            {header.titleAccent}
          </h2>

          {/* Subtitle */}
          <p
            className="text-base"
            style={{ color: colors.textSecondary }}
          >
            {header.subtitle}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Main Pricing Card */}
          <motion.div
            className="md:col-span-7 rounded-2xl p-6 md:p-8"
            style={{ backgroundColor: colors.cardBg }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Plan Name */}
            <h3
              className="font-heading text-xl font-bold mb-1"
              style={{ color: colors.textPrimary }}
            >
              {mainPlan.name}
            </h3>

            {/* Description */}
            <p
              className="text-sm whitespace-pre-line mb-6"
              style={{ color: colors.textSecondary }}
            >
              {mainPlan.description}
            </p>

            {/* Price */}
            <div className="mb-6">
              <span
                className="font-heading text-4xl md:text-5xl font-bold"
                style={{ color: colors.textPrimary }}
              >
                {mainPlan.price}
              </span>
              <span
                className="font-heading text-xl font-medium"
                style={{ color: colors.textPrimary }}
              >
                {mainPlan.period}
              </span>
            </div>

            {/* Primary Button */}
            <motion.button
              onClick={onGetStartedClick}
              className="w-auto px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 mb-3"
              style={{
                backgroundColor: colors.buttonBg,
                color: colors.buttonText,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {mainPlan.primaryButtonText}
            </motion.button>

            {/* Secondary Link */}
            <div className="mb-8">
              <button
                onClick={onBookCallClick}
                className="text-sm underline transition-opacity hover:opacity-70"
                style={{ color: colors.linkColor }}
              >
                {mainPlan.secondaryButtonText}
              </button>
            </div>

            {/* Divider */}
            <div
              className="w-full h-px mb-6"
              style={{ backgroundColor: colors.background }}
            />

            {/* Features */}
            <p
              className="text-sm font-medium mb-4"
              style={{ color: colors.textSecondary }}
            >
              {mainPlan.featuresTitle}
            </p>

            <ul className="space-y-2">
              {mainPlan.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-sm whitespace-pre-line"
                  style={{
                    color: feature.isHighlighted
                      ? colors.accentPink
                      : colors.textSecondary,
                    fontWeight: feature.isHighlighted ? 600 : 400,
                  }}
                >
                  <span className="mr-1">•</span>
                  {feature.text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side Cards */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {/* Affiliate Card */}
            <motion.div
              className="rounded-2xl p-6"
              style={{ backgroundColor: colors.cardBg }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3
                className="font-heading text-lg font-medium mb-0"
                style={{ color: colors.textPrimary }}
              >
                {affiliatePlan.title}
              </h3>
              <h4
                className="font-heading text-lg font-bold mb-2"
                style={{ color: colors.accentPink }}
              >
                {affiliatePlan.titleAccent}
              </h4>
              <p
                className="text-sm whitespace-pre-line mb-4"
                style={{ color: colors.textSecondary }}
              >
                {affiliatePlan.description}
              </p>
              <motion.button
                onClick={onAffiliateClick}
                className="px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors duration-200"
                style={{
                  backgroundColor: colors.buttonBg,
                  color: colors.buttonText,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {affiliatePlan.buttonText}
              </motion.button>
            </motion.div>

            {/* Book A Call Card */}
            <motion.div
              className="rounded-2xl p-6"
              style={{ backgroundColor: colors.cardBg }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3
                className="font-heading text-lg font-medium mb-0"
                style={{ color: colors.textPrimary }}
              >
                {callPlan.title}
              </h3>
              <h4
                className="font-heading text-lg font-bold mb-2"
                style={{ color: colors.accentPink }}
              >
                {callPlan.titleAccent}
              </h4>
              <p
                className="text-sm whitespace-pre-line mb-4"
                style={{ color: colors.textSecondary }}
              >
                {callPlan.description}
              </p>
              <motion.button
                onClick={onBookCallClick}
                className="px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors duration-200"
                style={{
                  backgroundColor: colors.buttonBg,
                  color: colors.buttonText,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {callPlan.buttonText}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
