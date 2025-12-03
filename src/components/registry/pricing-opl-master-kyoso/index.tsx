"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F5F5F5",
    cardBg: "#FFFFFF",
    textPrimary: "#1A1A1A",
    textSecondary: "#6B7280",
    badgeGreen: "#10B981",
    badgeGreenText: "#FFFFFF",
    badgeGray: "#9CA3AF",
    badgeGrayBorder: "#D1D5DB",
    buttonPrimaryBg: "#1A1A1A",
    buttonPrimaryText: "#FFFFFF",
    buttonOutlineBg: "#FFFFFF",
    buttonOutlineBorder: "#1A1A1A",
    buttonOutlineText: "#1A1A1A",
  },
  dark: {
    background: "#0F172A",
    cardBg: "#1E293B",
    textPrimary: "#F8FAFC",
    textSecondary: "#94A3B8",
    badgeGreen: "#10B981",
    badgeGreenText: "#FFFFFF",
    badgeGray: "#64748B",
    badgeGrayBorder: "#475569",
    buttonPrimaryBg: "#F8FAFC",
    buttonPrimaryText: "#0F172A",
    buttonOutlineBg: "transparent",
    buttonOutlineBorder: "#F8FAFC",
    buttonOutlineText: "#F8FAFC",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  teamWorkspace: {
    path: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop&crop=faces",
    alt: "Team collaborating in a modern workspace with laptops",
    prompt: `Modern office workspace with people sitting on curved coral/orange sofas,
    using laptops in a collaborative setting with wooden panel walls`,
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  header: {
    label: "Pricing",
    title: "For all teams",
    subtitle: "Accessible for all type of the content creators and businesses.",
  },
  plans: [
    {
      id: "custom",
      badge: "Accepting requests",
      badgeType: "green" as const,
      title: "Custom pricing for the creative teams",
      description:
        "For brand teams making premium and ambitious content for global audiences.",
      buttonText: "Book an intro",
      buttonVariant: "outline" as const,
    },
    {
      id: "free-starter",
      badge: "Soon",
      badgeType: "gray" as const,
      title: "Free & Starter",
      description:
        "For small teams, creators, and influencers working on the recurring projects.",
      buttonText: "Join waitlist",
      buttonVariant: "primary" as const,
    },
    {
      id: "education",
      badge: "Accepting requests",
      badgeType: "green" as const,
      title: "Kyoso for Education & Research",
      description:
        "For universities, think-tanks, and local education initiatives.",
      buttonText: "Book an intro",
      buttonVariant: "outline" as const,
    },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import "./font.css";

interface PlanContent {
  id: string;
  badge: string;
  badgeType: "green" | "gray";
  title: string;
  description: string;
  buttonText: string;
  buttonVariant: "primary" | "outline";
}

interface HeaderContent {
  label: string;
  title: string;
  subtitle: string;
}

interface PricingOplMasterKyosoProps {
  mode?: "light" | "dark";
  header?: HeaderContent;
  plans?: PlanContent[];
  teamImage?: string;
  onPlanClick?: (planId: string) => void;
}

export default function PricingOplMasterKyoso({
  mode = "light",
  header = DEFAULT_CONTENT.header,
  plans = DEFAULT_CONTENT.plans,
  teamImage = IMAGES.teamWorkspace.path,
  onPlanClick,
}: PricingOplMasterKyosoProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4"
      style={{
        backgroundColor: colors.background,
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Label */}
          <p
            className="text-sm font-normal mb-3"
            style={{ color: colors.textSecondary }}
          >
            {header.label}
          </p>

          {/* Title */}
          <h1
            className="instrument-serif-italic text-4xl md:text-5xl mb-3"
            style={{ color: colors.textPrimary }}
          >
            {header.title}
          </h1>

          {/* Subtitle */}
          <p
            className="text-sm max-w-md mx-auto"
            style={{ color: colors.textSecondary }}
          >
            {header.subtitle}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Plan Card - Custom Pricing */}
          {plans[0] && (
            <motion.div
              className="rounded-2xl p-6 md:p-8"
              style={{ backgroundColor: colors.cardBg }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Badge */}
              <div
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium mb-6"
                style={{
                  backgroundColor:
                    plans[0].badgeType === "green"
                      ? colors.badgeGreen
                      : "transparent",
                  color:
                    plans[0].badgeType === "green"
                      ? colors.badgeGreenText
                      : colors.badgeGray,
                  border:
                    plans[0].badgeType === "gray"
                      ? `1px solid ${colors.badgeGrayBorder}`
                      : "none",
                }}
              >
                {plans[0].badge}
              </div>

              {/* Title */}
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: colors.textPrimary }}
              >
                {plans[0].title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: colors.textSecondary }}
              >
                {plans[0].description}
              </p>

              {/* Button */}
              <motion.button
                onClick={() => onPlanClick?.(plans[0].id)}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                style={{
                  backgroundColor:
                    plans[0].buttonVariant === "primary"
                      ? colors.buttonPrimaryBg
                      : colors.buttonOutlineBg,
                  color:
                    plans[0].buttonVariant === "primary"
                      ? colors.buttonPrimaryText
                      : colors.buttonOutlineText,
                  border:
                    plans[0].buttonVariant === "outline"
                      ? `1px solid ${colors.buttonOutlineBorder}`
                      : "none",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plans[0].buttonText}
              </motion.button>
            </motion.div>
          )}

          {/* Second Plan Card - Free & Starter */}
          {plans[1] && (
            <motion.div
              className="rounded-2xl p-6 md:p-8"
              style={{ backgroundColor: colors.cardBg }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Badge */}
              <div
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium mb-6"
                style={{
                  backgroundColor:
                    plans[1].badgeType === "green"
                      ? colors.badgeGreen
                      : "transparent",
                  color:
                    plans[1].badgeType === "green"
                      ? colors.badgeGreenText
                      : colors.badgeGray,
                  border:
                    plans[1].badgeType === "gray"
                      ? `1px solid ${colors.badgeGrayBorder}`
                      : "none",
                }}
              >
                {plans[1].badge}
              </div>

              {/* Title */}
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: colors.textPrimary }}
              >
                {plans[1].title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: colors.textSecondary }}
              >
                {plans[1].description}
              </p>

              {/* Button */}
              <motion.button
                onClick={() => onPlanClick?.(plans[1].id)}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                style={{
                  backgroundColor:
                    plans[1].buttonVariant === "primary"
                      ? colors.buttonPrimaryBg
                      : colors.buttonOutlineBg,
                  color:
                    plans[1].buttonVariant === "primary"
                      ? colors.buttonPrimaryText
                      : colors.buttonOutlineText,
                  border:
                    plans[1].buttonVariant === "outline"
                      ? `1px solid ${colors.buttonOutlineBorder}`
                      : "none",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plans[1].buttonText}
              </motion.button>
            </motion.div>
          )}

          {/* Third Plan Card - Education */}
          {plans[2] && (
            <motion.div
              className="rounded-2xl p-6 md:p-8"
              style={{ backgroundColor: colors.cardBg }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Badge */}
              <div
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium mb-6"
                style={{
                  backgroundColor:
                    plans[2].badgeType === "green"
                      ? colors.badgeGreen
                      : "transparent",
                  color:
                    plans[2].badgeType === "green"
                      ? colors.badgeGreenText
                      : colors.badgeGray,
                  border:
                    plans[2].badgeType === "gray"
                      ? `1px solid ${colors.badgeGrayBorder}`
                      : "none",
                }}
              >
                {plans[2].badge}
              </div>

              {/* Title */}
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: colors.textPrimary }}
              >
                {plans[2].title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: colors.textSecondary }}
              >
                {plans[2].description}
              </p>

              {/* Button */}
              <motion.button
                onClick={() => onPlanClick?.(plans[2].id)}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                style={{
                  backgroundColor:
                    plans[2].buttonVariant === "primary"
                      ? colors.buttonPrimaryBg
                      : colors.buttonOutlineBg,
                  color:
                    plans[2].buttonVariant === "primary"
                      ? colors.buttonPrimaryText
                      : colors.buttonOutlineText,
                  border:
                    plans[2].buttonVariant === "outline"
                      ? `1px solid ${colors.buttonOutlineBorder}`
                      : "none",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plans[2].buttonText}
              </motion.button>
            </motion.div>
          )}

          {/* Image Card */}
          <motion.div
            className="rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img
              src={teamImage}
              alt={IMAGES.teamWorkspace.alt}
              className="w-full h-full object-cover"
              style={{ minHeight: "250px" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
