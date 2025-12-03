"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#1a1a1a",
    titleWhite: "#FFFFFF",
    subtitleGray: "#7B7B7B",
    accent: "#6C4FF6",
    accentLight: "#E8E0FF",
    accentText: "#6C4FF6",
    cardWhiteBg: "#FFFFFF",
    cardWhiteText: "#000000",
    cardWhiteSecondary: "#666666",
    cardPurpleBg: "#6C4FF6",
    cardPurpleText: "#FFFFFF",
    cardPurpleSecondary: "#E0D6FF",
    toggleBg: "#000000",
    toggleActiveBg: "#FFFFFF",
    toggleActiveText: "#000000",
    toggleInactiveText: "#FFFFFF",
    badgeDarkBg: "#1a1a1a",
    badgeDarkText: "#FFFFFF",
    badgeLightBg: "#E8E0FF",
    badgeLightText: "#6C4FF6",
    buttonPurpleBg: "#6C4FF6",
    buttonPurpleText: "#FFFFFF",
    buttonWhiteBg: "#FFFFFF",
    buttonWhiteText: "#6C4FF6",
    linkUnderline: "#FFFFFF",
    featurePrefix: "#6C4FF6",
  },
  dark: {
    background: "#1a1a1a",
    titleWhite: "#FFFFFF",
    subtitleGray: "#7B7B7B",
    accent: "#6C4FF6",
    accentLight: "#E8E0FF",
    accentText: "#6C4FF6",
    cardWhiteBg: "#FFFFFF",
    cardWhiteText: "#000000",
    cardWhiteSecondary: "#666666",
    cardPurpleBg: "#6C4FF6",
    cardPurpleText: "#FFFFFF",
    cardPurpleSecondary: "#E0D6FF",
    toggleBg: "#000000",
    toggleActiveBg: "#FFFFFF",
    toggleActiveText: "#000000",
    toggleInactiveText: "#FFFFFF",
    badgeDarkBg: "#1a1a1a",
    badgeDarkText: "#FFFFFF",
    badgeLightBg: "#E8E0FF",
    badgeLightText: "#6C4FF6",
    buttonPurpleBg: "#6C4FF6",
    buttonPurpleText: "#FFFFFF",
    buttonWhiteBg: "#FFFFFF",
    buttonWhiteText: "#6C4FF6",
    linkUnderline: "#FFFFFF",
    featurePrefix: "#6C4FF6",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  header: {
    titlePart1: "The design wizard you've",
    titlePart2: "been ",
    titleItalic: "wishing for",
    subtitle: "(No wand required)",
  },
  toggleOptions: ["ONGOING", "ONE TIME"] as const,
  plans: {
    ongoing: [
      {
        id: "dedicated-designer",
        badge: "Dedicated Designer",
        badgeIcon: "wand" as const,
        price: "$1999",
        period: "/month",
        description:
          "For startups or small teams looking for reliable design support without the overhead of a full-time hire.",
        ctaText: "Start Today",
        linkText: "Book an intro call",
        features: [
          "Dedicated senior designer",
          "Hands on design for small or clearly scoped projects",
          "Guidance for teams",
          "Private Slack channel",
          "Kanban for project tracking",
          "Weekly check-ins",
        ],
        variant: "light" as const,
      },
      {
        id: "design-partner",
        badge: "Design Partner",
        badgeIcon: "sparkles" as const,
        price: "$3999",
        period: "/month",
        description:
          "For teams that need a hands-on design partner fully embedded in your product, brand, & strategy.",
        ctaText: "Start Today",
        linkText: "Book an intro call",
        features: [
          "Dedicated senior designer",
          "Hands on design from raw ideas to refined UI and reusable components",
          "Ongoing design, product strategy, & design system management",
          "Private Slack channel",
          "Kanban for project tracking",
          "Weekly check-ins",
        ],
        variant: "purple" as const,
      },
    ],
    oneTime: [
      {
        id: "starter-project",
        badge: "Starter Project",
        badgeIcon: "wand" as const,
        price: "$2999",
        period: "",
        description:
          "Perfect for a single, well-defined project like a landing page redesign or brand refresh.",
        ctaText: "Get Started",
        linkText: "Book an intro call",
        features: [
          "Single project scope",
          "2-week delivery timeline",
          "2 revision rounds included",
          "Final source files",
          "Handoff documentation",
        ],
        variant: "light" as const,
      },
      {
        id: "full-project",
        badge: "Full Project",
        badgeIcon: "sparkles" as const,
        price: "$7999",
        period: "",
        description:
          "Comprehensive design work for product launches, rebrandings, or complete website overhauls.",
        ctaText: "Get Started",
        linkText: "Book an intro call",
        features: [
          "Unlimited project scope",
          "4-week delivery timeline",
          "Unlimited revisions",
          "Final source files",
          "Design system components",
          "Developer handoff support",
        ],
        variant: "purple" as const,
      },
    ],
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import { Wand2, Sparkles } from "lucide-react";

interface PlanContent {
  id: string;
  badge: string;
  badgeIcon: "wand" | "sparkles";
  price: string;
  period: string;
  description: string;
  ctaText: string;
  linkText: string;
  features: string[];
  variant: "light" | "purple";
}

interface HeaderContent {
  titlePart1: string;
  titlePart2: string;
  titleItalic: string;
  subtitle: string;
}

interface PricingOplMasterUimagicProps {
  mode?: "light" | "dark";
  header?: HeaderContent;
  ongoingPlans?: PlanContent[];
  oneTimePlans?: PlanContent[];
  defaultTab?: "ongoing" | "oneTime";
  onPlanClick?: (planId: string) => void;
  onLinkClick?: (planId: string) => void;
}

export default function PricingOplMasterUimagic({
  mode = "dark",
  header = DEFAULT_CONTENT.header,
  ongoingPlans = DEFAULT_CONTENT.plans.ongoing,
  oneTimePlans = DEFAULT_CONTENT.plans.oneTime,
  defaultTab = "ongoing",
  onPlanClick,
  onLinkClick,
}: PricingOplMasterUimagicProps) {
  const colors = COLORS[mode];
  const [activeTab, setActiveTab] = useState<"ongoing" | "oneTime">(defaultTab);

  const currentPlans = activeTab === "ongoing" ? ongoingPlans : oneTimePlans;

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4"
      style={{
        backgroundColor: colors.background,
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600;700&display=swap');
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Title */}
          <h1
            className="text-3xl md:text-4xl lg:text-5xl mb-3"
            style={{
              fontFamily: "'DM Serif Display', serif",
              color: colors.titleWhite,
            }}
          >
            {header.titlePart1}
            <br />
            {header.titlePart2}
            <span
              style={{
                fontStyle: "italic",
              }}
            >
              {header.titleItalic}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-base md:text-lg"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: colors.subtitleGray,
            }}
          >
            {header.subtitle}
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div
            className="inline-flex rounded-full p-1"
            style={{
              backgroundColor: colors.toggleBg,
            }}
          >
            {DEFAULT_CONTENT.toggleOptions.map((option, index) => {
              const isActive =
                (index === 0 && activeTab === "ongoing") ||
                (index === 1 && activeTab === "oneTime");

              return (
                <motion.button
                  key={option}
                  onClick={() =>
                    setActiveTab(index === 0 ? "ongoing" : "oneTime")
                  }
                  className="px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-colors duration-200"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    backgroundColor: isActive
                      ? colors.toggleActiveBg
                      : "transparent",
                    color: isActive
                      ? colors.toggleActiveText
                      : colors.toggleInactiveText,
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {option}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className="rounded-2xl p-6 md:p-8 flex flex-col"
              style={{
                backgroundColor:
                  plan.variant === "light"
                    ? colors.cardWhiteBg
                    : colors.cardPurpleBg,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              {/* Badge */}
              <div className="mb-5">
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    backgroundColor:
                      plan.variant === "light"
                        ? colors.badgeDarkBg
                        : colors.badgeLightBg,
                    color:
                      plan.variant === "light"
                        ? colors.badgeDarkText
                        : colors.badgeLightText,
                  }}
                >
                  {plan.badgeIcon === "wand" ? (
                    <Wand2 className="w-3.5 h-3.5" />
                  ) : (
                    <Sparkles className="w-3.5 h-3.5" />
                  )}
                  {plan.badge}
                </span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <span
                  className="text-3xl md:text-4xl font-bold"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color:
                      plan.variant === "light"
                        ? colors.cardWhiteText
                        : colors.cardPurpleText,
                  }}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span
                    className="text-3xl md:text-4xl font-bold"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color:
                        plan.variant === "light"
                          ? colors.cardWhiteText
                          : colors.cardPurpleText,
                    }}
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-6"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color:
                    plan.variant === "light"
                      ? colors.cardWhiteSecondary
                      : colors.cardPurpleSecondary,
                }}
              >
                {plan.description}
              </p>

              {/* CTA Button */}
              <motion.button
                onClick={() => onPlanClick?.(plan.id)}
                className="w-full py-3 rounded-full text-sm font-semibold mb-3 transition-opacity duration-200 hover:opacity-90"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor:
                    plan.variant === "light"
                      ? colors.buttonPurpleBg
                      : colors.buttonWhiteBg,
                  color:
                    plan.variant === "light"
                      ? colors.buttonPurpleText
                      : colors.buttonWhiteText,
                }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {plan.ctaText}
              </motion.button>

              {/* Link */}
              <button
                onClick={() => onLinkClick?.(plan.id)}
                className="text-sm font-medium mb-6 transition-opacity duration-200 hover:opacity-80"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color:
                    plan.variant === "light"
                      ? colors.cardWhiteText
                      : colors.cardPurpleText,
                  textDecoration:
                    plan.variant === "purple" ? "underline" : "none",
                }}
              >
                {plan.linkText}
              </button>

              {/* Features */}
              <ul className="space-y-2.5 mt-auto">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start text-sm leading-relaxed"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color:
                        plan.variant === "light"
                          ? colors.cardWhiteSecondary
                          : colors.cardPurpleSecondary,
                    }}
                  >
                    <span
                      className="mr-2 flex-shrink-0"
                      style={{
                        color:
                          plan.variant === "light"
                            ? colors.cardWhiteSecondary
                            : colors.featurePrefix,
                      }}
                    >
                      —
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
