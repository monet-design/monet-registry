"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#0A0A0F",
    cardBg: "#18181B",
    cardBorder: "rgba(255,255,255,0.08)",
    textPrimary: "#FFFFFF",
    textSecondary: "rgba(255,255,255,0.6)",
    textMuted: "rgba(255,255,255,0.4)",
    accentPurple: "#8B5CF6",
    accentCyan: "#06B6D4",
    accentMint: "#4ADE80",
    labelGradientFrom: "#8B5CF6",
    labelGradientTo: "#06B6D4",
    ctaGradientFrom: "#06B6D4",
    ctaGradientTo: "#4ADE80",
    badgeGradientFrom: "#8B5CF6",
    badgeGradientTo: "#A855F7",
    lightButtonBg: "#F4F4F5",
    lightButtonText: "#18181B",
    strikethrough: "rgba(255,255,255,0.4)",
  },
  dark: {
    background: "#0A0A0F",
    cardBg: "#18181B",
    cardBorder: "rgba(255,255,255,0.08)",
    textPrimary: "#FFFFFF",
    textSecondary: "rgba(255,255,255,0.6)",
    textMuted: "rgba(255,255,255,0.4)",
    accentPurple: "#8B5CF6",
    accentCyan: "#06B6D4",
    accentMint: "#4ADE80",
    labelGradientFrom: "#8B5CF6",
    labelGradientTo: "#06B6D4",
    ctaGradientFrom: "#06B6D4",
    ctaGradientTo: "#4ADE80",
    badgeGradientFrom: "#8B5CF6",
    badgeGradientTo: "#A855F7",
    lightButtonBg: "#F4F4F5",
    lightButtonText: "#18181B",
    strikethrough: "rgba(255,255,255,0.4)",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  header: {
    label: "PRICING",
    title: "One simple price:",
    titleLine2: "all kinds of design",
  },
  mainPlan: {
    badge: {
      line1: "Limited",
      line2: "50% off",
    },
    name: "Design Subscription",
    originalPrice: "$1,995/m",
    price: "$995/m*",
    description: "*$995 for the first month, $1,995 thereafter. Use code\n'LAUNCH1000' at checkout.",
    ctaText: "Get Started",
    featuresTitle: "Whats included:",
    features: [
      "Unlimited requests (1x active task at a time)",
      "Unlimited revisions",
      "Unlimited brands",
      "Pause or cancel anytime",
      "72 hour average turnaround time",
    ],
  },
  bookCallCard: {
    title: "Book a call",
    description: "Learn more about how DesignTap works\nand how it can benefit you.",
    ctaText: "Book a call",
  },
  referCard: {
    title: "Refer & earn",
    description: "Earn 5% monthly recurring commissions for\neach paying customer you refer.",
    ctaText: "Join now",
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check } from "lucide-react";

interface MainPlanContent {
  badge: {
    line1: string;
    line2: string;
  };
  name: string;
  originalPrice: string;
  price: string;
  description: string;
  ctaText: string;
  featuresTitle: string;
  features: string[];
}

interface SideCardContent {
  title: string;
  description: string;
  ctaText: string;
}

interface HeaderContent {
  label: string;
  title: string;
  titleLine2: string;
}

interface PricingOplMasterDtProps {
  mode?: "light" | "dark";
  header?: HeaderContent;
  mainPlan?: MainPlanContent;
  bookCallCard?: SideCardContent;
  referCard?: SideCardContent;
  onGetStartedClick?: () => void;
  onBookCallClick?: () => void;
  onReferClick?: () => void;
}

export default function PricingOplMasterDt({
  mode = "light",
  header = DEFAULT_CONTENT.header,
  mainPlan = DEFAULT_CONTENT.mainPlan,
  bookCallCard = DEFAULT_CONTENT.bookCallCard,
  referCard = DEFAULT_CONTENT.referCard,
  onGetStartedClick,
  onBookCallClick,
  onReferClick,
}: PricingOplMasterDtProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');

        .font-sans {
          font-family: 'Inter', system-ui, sans-serif;
        }

        .font-serif-italic {
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: italic;
        }

        .wave-pattern {
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 60px,
              rgba(255,255,255,0.02) 60px,
              rgba(255,255,255,0.02) 61px
            );
          mask-image: radial-gradient(ellipse at center, black, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at center, black, transparent 70%);
        }

        .gradient-text {
          background: linear-gradient(90deg, ${colors.labelGradientFrom}, ${colors.labelGradientTo});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-gradient {
          background: linear-gradient(135deg, ${colors.ctaGradientFrom}, ${colors.ctaGradientTo});
        }

        .badge-gradient {
          background: linear-gradient(135deg, ${colors.badgeGradientFrom}, ${colors.badgeGradientTo});
        }
      `}</style>

      {/* Wave Pattern Background */}
      <div className="wave-pattern" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Label */}
          <p className="gradient-text font-sans text-sm font-semibold tracking-widest uppercase mb-4">
            {header.label}
          </p>

          {/* Title */}
          <h1
            className="font-serif-italic text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ color: colors.textPrimary }}
          >
            {header.title}
            <br />
            {header.titleLine2}
          </h1>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Main Pricing Card */}
          <motion.div
            className="lg:col-span-7 relative rounded-2xl p-6 md:p-8"
            style={{
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.cardBorder}`,
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Badge */}
            <div
              className="badge-gradient absolute -left-3 top-8 px-4 py-2 rounded-lg text-white text-xs font-bold shadow-lg"
              style={{
                transform: "rotate(-12deg)",
                transformOrigin: "center center",
              }}
            >
              <div className="text-center leading-tight">
                <div className="italic">{mainPlan.badge.line1}</div>
                <div>{mainPlan.badge.line2}</div>
              </div>
            </div>

            {/* Plan Name */}
            <h3
              className="font-sans text-lg font-semibold mb-4 ml-8 lg:ml-0"
              style={{ color: colors.textPrimary }}
            >
              {mainPlan.name}
            </h3>

            {/* Price Section */}
            <div className="mb-1">
              <span
                className="font-sans text-xl line-through mr-3"
                style={{ color: colors.strikethrough }}
              >
                {mainPlan.originalPrice}
              </span>
            </div>
            <div className="mb-2">
              <span
                className="font-sans text-4xl md:text-5xl font-bold"
                style={{ color: colors.textPrimary }}
              >
                {mainPlan.price}
              </span>
            </div>

            {/* Description */}
            <p
              className="font-sans text-xs whitespace-pre-line mb-6"
              style={{ color: colors.textMuted }}
            >
              {mainPlan.description}
            </p>

            {/* CTA Button */}
            <motion.button
              onClick={onGetStartedClick}
              className="cta-gradient w-full md:w-auto px-8 py-3 rounded-full text-sm font-semibold text-black transition-all duration-200 mb-8"
              whileHover={{ scale: 1.02, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
            >
              {mainPlan.ctaText}
            </motion.button>

            {/* Features */}
            <p
              className="font-sans text-sm font-medium mb-4"
              style={{ color: colors.textSecondary }}
            >
              {mainPlan.featuresTitle}
            </p>

            <ul className="space-y-3">
              {mainPlan.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3"
                >
                  <Check
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: colors.textSecondary }}
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
          </motion.div>

          {/* Right Side Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Book a Call Card */}
            <motion.div
              className="rounded-2xl p-6"
              style={{
                backgroundColor: colors.cardBg,
                border: `1px solid ${colors.cardBorder}`,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3
                className="font-sans text-xl font-semibold mb-2"
                style={{ color: colors.textPrimary }}
              >
                {bookCallCard.title}
              </h3>
              <p
                className="font-sans text-sm whitespace-pre-line mb-6"
                style={{ color: colors.textSecondary }}
              >
                {bookCallCard.description}
              </p>
              <motion.button
                onClick={onBookCallClick}
                className="w-full py-3 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: colors.lightButtonBg,
                  color: colors.lightButtonText,
                }}
                whileHover={{ scale: 1.02, opacity: 0.9 }}
                whileTap={{ scale: 0.98 }}
              >
                {bookCallCard.ctaText}
              </motion.button>
            </motion.div>

            {/* Refer & Earn Card */}
            <motion.div
              className="rounded-2xl p-6 flex-1"
              style={{
                backgroundColor: colors.cardBg,
                border: `1px solid ${colors.cardBorder}`,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3
                className="font-sans text-xl font-semibold mb-2"
                style={{ color: colors.textPrimary }}
              >
                {referCard.title}
              </h3>
              <p
                className="font-sans text-sm whitespace-pre-line mb-6"
                style={{ color: colors.textSecondary }}
              >
                {referCard.description}
              </p>
              <motion.button
                onClick={onReferClick}
                className="cta-gradient w-full py-3 rounded-full text-sm font-semibold text-black transition-all duration-200"
                whileHover={{ scale: 1.02, opacity: 0.9 }}
                whileTap={{ scale: 0.98 }}
              >
                {referCard.ctaText}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
