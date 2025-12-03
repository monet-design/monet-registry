"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#2D3D2F",
    cardBg: "#F5F2ED",
    textPrimary: "#1A1A1A",
    textSecondary: "#4A4A4A",
    textMuted: "#6B6B6B",
    accentGreen: "#2D3D2F",
    checkGreen: "#4A7C59",
    buttonBg: "#2D3D2F",
    buttonText: "#FFFFFF",
    buttonOutlineBg: "transparent",
    buttonOutlineBorder: "#2D3D2F",
    buttonOutlineText: "#2D3D2F",
    headingColor: "#FFFFFF",
  },
  dark: {
    background: "#1A2A1C",
    cardBg: "#2A3A2C",
    textPrimary: "#F5F2ED",
    textSecondary: "#C4C4C4",
    textMuted: "#9A9A9A",
    accentGreen: "#4A7C59",
    checkGreen: "#6B9B7A",
    buttonBg: "#F5F2ED",
    buttonText: "#1A1A1A",
    buttonOutlineBg: "transparent",
    buttonOutlineBorder: "#F5F2ED",
    buttonOutlineText: "#F5F2ED",
    headingColor: "#F5F2ED",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  header: {
    title: "Get a world-class YouTube",
    titleLine2: "team starting at",
    price: "$4,999/mo",
  },
  starterPlan: {
    name: "Starter",
    price: "$4,999/mo",
    subtitle: "Get 20 editing hours per week",
    description:
      "Get access to one of our editors for 20 hours per week. One video request at a time.",
    features: [
      { text: "Video Editing", type: "check" as const },
      { text: "Expert YouTube Producer", type: "check" as const },
      { text: "Slack Access", type: "check" as const },
      { text: "No Contracts", type: "check" as const },
      { text: "Pause or Cancel Anytime", type: "check" as const },
    ],
    footerNote: "Additional services available a la carte.",
    buttonText: "Join the Waitlist",
  },
  creatorPlan: {
    name: "Creator",
    price: "$10,000/mo",
    subtitle: "Get up to 6 videos per month",
    description:
      "Work with our entire YouTube team to create up to 6 videos per month. Go from idea generation, to support with your script, to editing, and then packaging.",
    features: [
      { text: "Dedicated Video Editor", type: "plus" as const },
      { text: "Animation", type: "plus" as const },
      { text: "Script Support", type: "plus" as const },
      { text: "Perfect Packaging Process", type: "plus" as const },
      { text: "Thumbnail Design", type: "plus" as const },
      { text: "Titles", type: "plus" as const },
      { text: "Packaging", type: "plus" as const },
      { text: "Expert YouTube Producer", type: "check" as const },
      { text: "Pause or Cancel Anytime", type: "check" as const },
    ],
    buttonText: "Join the Waitlist",
  },
  studioPlan: {
    name: "The Studio",
    price: "Starts at $14,000/mo",
    subtitle: "Get your own YouTube team",
    description:
      'No gimmicks here. We\'ll build you an entire YouTube team that\'s expertly managed by us. This is the ultimate "done for you" service available for YouTube.',
    features: [
      { text: "Youtube Growth Strategy", type: "plus" as const },
      { text: "Weekly Consulting Calls", type: "plus" as const },
      { text: "Full-time Video Editors", type: "plus" as const },
      { text: "Script Writing", type: "check" as const },
      { text: "Perfect Packaging Process", type: "plus" as const },
      { text: "Thumbnail Design", type: "check" as const },
      { text: "Titles", type: "check" as const },
      { text: "Packaging", type: "check" as const },
      { text: "24/7 Support", type: "check" as const },
      { text: "Expert YouTube Producer", type: "check" as const },
    ],
    buttonText: "Get Started",
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, Plus } from "lucide-react";

interface Feature {
  text: string;
  type: "check" | "plus";
}

interface PlanContent {
  name: string;
  price: string;
  subtitle: string;
  description: string;
  features: Feature[];
  buttonText: string;
  footerNote?: string;
}

interface HeaderContent {
  title: string;
  titleLine2: string;
  price: string;
}

interface PricingOplMasterHeyProps {
  mode?: "light" | "dark";
  header?: HeaderContent;
  starterPlan?: PlanContent;
  creatorPlan?: PlanContent;
  studioPlan?: PlanContent;
  onStarterClick?: () => void;
  onCreatorClick?: () => void;
  onStudioClick?: () => void;
}

// Team Illustration SVG Component
function TeamIllustration() {
  return (
    <svg
      viewBox="0 0 280 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Person at laptop */}
      <g>
        {/* Desk/Laptop */}
        <rect
          x="20"
          y="100"
          width="80"
          height="50"
          rx="4"
          stroke="#2D3D2F"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="30"
          y="80"
          width="60"
          height="40"
          rx="2"
          stroke="#2D3D2F"
          strokeWidth="2"
          fill="none"
        />
        {/* Person sitting */}
        <circle cx="60" cy="55" r="12" stroke="#2D3D2F" strokeWidth="2" fill="none" />
        <path
          d="M60 67 L60 85 M45 75 L60 72 L75 75"
          stroke="#2D3D2F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* Person standing with clipboard */}
      <g>
        <circle cx="160" cy="40" r="12" stroke="#2D3D2F" strokeWidth="2" fill="none" />
        <path
          d="M160 52 L160 100 M160 65 L145 80 M160 65 L175 55"
          stroke="#2D3D2F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M160 100 L150 140 M160 100 L170 140" stroke="#2D3D2F" strokeWidth="2" strokeLinecap="round" />
        {/* Clipboard */}
        <rect
          x="170"
          y="48"
          width="20"
          height="28"
          rx="2"
          stroke="#2D3D2F"
          strokeWidth="2"
          fill="none"
        />
        <line x1="174" y1="56" x2="186" y2="56" stroke="#2D3D2F" strokeWidth="1.5" />
        <line x1="174" y1="62" x2="186" y2="62" stroke="#2D3D2F" strokeWidth="1.5" />
        <line x1="174" y1="68" x2="182" y2="68" stroke="#2D3D2F" strokeWidth="1.5" />
      </g>

      {/* Person sitting on ground */}
      <g>
        <circle cx="230" cy="95" r="12" stroke="#2D3D2F" strokeWidth="2" fill="none" />
        <path
          d="M230 107 L230 130 M215 115 L230 112 L245 120"
          stroke="#2D3D2F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M230 130 L210 150 M230 130 L250 145" stroke="#2D3D2F" strokeWidth="2" strokeLinecap="round" />
        {/* Small device */}
        <rect
          x="240"
          y="115"
          width="18"
          height="12"
          rx="2"
          stroke="#2D3D2F"
          strokeWidth="2"
          fill="none"
        />
      </g>

      {/* Decorative elements */}
      {/* Small plant */}
      <g>
        <path
          d="M265 150 L265 165 M260 158 Q265 150 270 158"
          stroke="#2D3D2F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <ellipse cx="265" cy="168" rx="6" ry="4" stroke="#2D3D2F" strokeWidth="2" fill="none" />
      </g>

      {/* Small floating elements */}
      <circle cx="100" cy="30" r="3" fill="#2D3D2F" opacity="0.3" />
      <circle cx="200" cy="20" r="2" fill="#2D3D2F" opacity="0.3" />
      <circle cx="250" cy="60" r="2.5" fill="#2D3D2F" opacity="0.3" />

      {/* Video play icon */}
      <g>
        <circle cx="130" cy="50" r="8" stroke="#2D3D2F" strokeWidth="1.5" fill="none" />
        <path d="M128 46 L134 50 L128 54 Z" fill="#2D3D2F" />
      </g>
    </svg>
  );
}

export default function PricingOplMasterHey({
  mode = "light",
  header = DEFAULT_CONTENT.header,
  starterPlan = DEFAULT_CONTENT.starterPlan,
  creatorPlan = DEFAULT_CONTENT.creatorPlan,
  studioPlan = DEFAULT_CONTENT.studioPlan,
  onStarterClick,
  onCreatorClick,
  onStudioClick,
}: PricingOplMasterHeyProps) {
  const colors = COLORS[mode];

  const FeatureItem = ({
    feature,
    checkColor,
  }: {
    feature: Feature;
    checkColor: string;
  }) => (
    <li className="flex items-start gap-2 text-sm">
      {feature.type === "check" ? (
        <Check
          className="w-4 h-4 mt-0.5 flex-shrink-0"
          style={{ color: checkColor }}
        />
      ) : (
        <Plus
          className="w-4 h-4 mt-0.5 flex-shrink-0"
          style={{ color: colors.accentGreen }}
        />
      )}
      <span style={{ color: colors.textSecondary }}>{feature.text}</span>
    </li>
  );

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4"
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

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className="font-serif-display text-3xl md:text-4xl lg:text-5xl mb-2"
            style={{ color: colors.headingColor }}
          >
            {header.title}
          </h1>
          <h2
            className="font-serif-display text-3xl md:text-4xl lg:text-5xl"
            style={{ color: colors.headingColor }}
          >
            {header.titleLine2}{" "}
            <span className="line-through decoration-2">{header.price}</span>
          </h2>
        </motion.div>

        {/* Top Row - Starter and Creator */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Starter Plan Card */}
          <motion.div
            className="rounded-xl p-6"
            style={{ backgroundColor: colors.cardBg }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex justify-between items-start mb-4">
              <h3
                className="font-serif-display text-2xl md:text-3xl"
                style={{ color: colors.textPrimary }}
              >
                {starterPlan.name}
              </h3>
              <span
                className="font-sans text-base font-medium"
                style={{ color: colors.textPrimary }}
              >
                {starterPlan.price}
              </span>
            </div>

            <h4
              className="font-sans text-base font-semibold mb-2"
              style={{ color: colors.textPrimary }}
            >
              {starterPlan.subtitle}
            </h4>

            <p
              className="font-sans text-sm mb-6"
              style={{ color: colors.textSecondary }}
            >
              {starterPlan.description}
            </p>

            <ul className="space-y-2 mb-6">
              {starterPlan.features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  feature={feature}
                  checkColor={colors.checkGreen}
                />
              ))}
            </ul>

            {starterPlan.footerNote && (
              <p
                className="font-sans text-xs mb-6"
                style={{ color: colors.textMuted }}
              >
                {starterPlan.footerNote}
              </p>
            )}

            <motion.button
              onClick={onStarterClick}
              className="w-full py-3 rounded-full font-sans text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: colors.buttonBg,
                color: colors.buttonText,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {starterPlan.buttonText}
            </motion.button>
          </motion.div>

          {/* Creator Plan Card */}
          <motion.div
            className="rounded-xl p-6"
            style={{ backgroundColor: colors.cardBg }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-between items-start mb-4">
              <h3
                className="font-serif-display text-2xl md:text-3xl"
                style={{ color: colors.textPrimary }}
              >
                {creatorPlan.name}
              </h3>
              <span
                className="font-sans text-base font-medium"
                style={{ color: colors.textPrimary }}
              >
                {creatorPlan.price}
              </span>
            </div>

            <h4
              className="font-sans text-base font-semibold mb-2"
              style={{ color: colors.textPrimary }}
            >
              {creatorPlan.subtitle}
            </h4>

            <p
              className="font-sans text-sm mb-6"
              style={{ color: colors.textSecondary }}
            >
              {creatorPlan.description}
            </p>

            <ul className="space-y-2 mb-6">
              {creatorPlan.features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  feature={feature}
                  checkColor={colors.checkGreen}
                />
              ))}
            </ul>

            <motion.button
              onClick={onCreatorClick}
              className="w-full py-3 rounded-full font-sans text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: colors.buttonBg,
                color: colors.buttonText,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {creatorPlan.buttonText}
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Row - The Studio */}
        <motion.div
          className="rounded-xl p-6 md:p-8"
          style={{ backgroundColor: colors.cardBg }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Left Content */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3
                  className="font-serif-display text-2xl md:text-3xl"
                  style={{ color: colors.textPrimary }}
                >
                  {studioPlan.name}
                </h3>
                <span
                  className="font-sans text-base font-medium md:hidden"
                  style={{ color: colors.textPrimary }}
                >
                  {studioPlan.price}
                </span>
              </div>

              <h4
                className="font-sans text-base font-semibold mb-2"
                style={{ color: colors.textPrimary }}
              >
                {studioPlan.subtitle}
              </h4>

              <p
                className="font-sans text-sm mb-6"
                style={{ color: colors.textSecondary }}
              >
                {studioPlan.description}
              </p>

              {/* Features in 2 columns */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                {studioPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm">
                    {feature.type === "check" ? (
                      <Check
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: colors.checkGreen }}
                      />
                    ) : (
                      <Plus
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: colors.accentGreen }}
                      />
                    )}
                    <span style={{ color: colors.textSecondary }}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <motion.button
                onClick={onStudioClick}
                className="px-8 py-3 rounded-full font-sans text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: colors.buttonBg,
                  color: colors.buttonText,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {studioPlan.buttonText}
              </motion.button>
            </div>

            {/* Right Illustration */}
            <div className="flex flex-col items-end justify-between">
              <span
                className="font-sans text-base font-medium hidden md:block"
                style={{ color: colors.textPrimary }}
              >
                {studioPlan.price}
              </span>
              <div className="w-full max-w-xs md:max-w-sm">
                <TeamIllustration />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
