"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#0A0A0A",
    cardDark: "#151515",
    cardLight: "#FFFFFF",
    textPrimary: "#FFFFFF",
    textSecondary: "#A0A0A0",
    textMuted: "#707070",
    textDark: "#1A1A1A",
    textDarkSecondary: "#505050",
    accent: "#34D399",
    accentHover: "#2EC48A",
    buttonDark: "#FFFFFF",
    buttonDarkText: "#0A0A0A",
    badgeBorder: "#303030",
  },
  dark: {
    background: "#0A0A0A",
    cardDark: "#151515",
    cardLight: "#FFFFFF",
    textPrimary: "#FFFFFF",
    textSecondary: "#A0A0A0",
    textMuted: "#707070",
    textDark: "#1A1A1A",
    textDarkSecondary: "#505050",
    accent: "#34D399",
    accentHover: "#2EC48A",
    buttonDark: "#FFFFFF",
    buttonDarkText: "#0A0A0A",
    badgeBorder: "#303030",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  badge: "New: Growth Packages",
  title: "Introducing monthly social\ngrowth packages.",
  subtitle:
    "Introducing tailored packages to boost your investor pitches, in addition to our bespoke services. Customize further with a la carte options.",
  plans: [
    {
      name: "Essentials",
      price: "$850",
      period: "/Month",
      description:
        "For small businesses or startups looking to establish an online footprint with foundational strategies and consistent content.",
      buttonText: "Get Started",
      highlighted: false,
      features: [
        "Initial consultation",
        "Custom social media profile setup and optimization (1 platform)",
        "SEO-focused bios, keywords, and profile images",
        "Competitive analysis and content audit",
        "Weekly content calendar",
        "4 curated/related posts per week (16 per month)",
        "8 original static posts per month",
        "Hashtag and keyword research for improved reach",
        "Weekly insights & reporting",
      ],
    },
    {
      name: "Growth",
      price: "$1,999",
      period: "/Month",
      description:
        "For growing companies looking to expand their social media presence, increase engagement, and plan content strategically.",
      buttonText: "Get Started",
      highlighted: true,
      features: [
        "Initial consultation",
        "Custom social media profile setup and optimization (2 platforms)",
        "SEO-focused bios, keywords, and profile images",
        "Competitive analysis",
        "Weekly content calendar",
        "4 curated/related posts per platform, weekly (32 per month)",
        "10 original static posts per month",
        "4 carousel posts per month",
        "4 short-form videos per month (up to 30 seconds each)",
      ],
    },
    {
      name: "Premium",
      price: "$3,999",
      period: "/Month",
      description:
        "For those aiming to dominate their social media with data-driven strategies. For maximum engagement and sustained growth.",
      buttonText: "Get Started",
      highlighted: false,
      isPremium: true,
      features: [
        "Initial consultation",
        "Custom social media profile setup and optimization (3 platforms)",
        "In-depth competitive analysis and audience research",
        "Weekly content calendar development",
        "Monthly strategy revisions based on performance and new trends",
        "4 curated/related posts per platform, weekly (48 per month)",
        "12 original static posts per month",
        "6 carousel posts per month",
        "6 short-form video posts per month (up to 30 seconds each)",
      ],
    },
  ],
  seeMoreText: "See More",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  buttonText: string;
  highlighted: boolean;
  isPremium?: boolean;
  features: string[];
}

interface PricingOplMasterNvgtProps {
  mode?: "light" | "dark";
  badge?: string;
  title?: string;
  subtitle?: string;
  plans?: Plan[];
  seeMoreText?: string;
  onPlanClick?: (planName: string) => void;
  onSeeMoreClick?: (planName: string) => void;
}

export default function PricingOplMasterNvgt({
  mode = "dark",
  badge = DEFAULT_CONTENT.badge,
  title = DEFAULT_CONTENT.title,
  subtitle = DEFAULT_CONTENT.subtitle,
  plans = DEFAULT_CONTENT.plans,
  seeMoreText = DEFAULT_CONTENT.seeMoreText,
  onPlanClick,
  onSeeMoreClick,
}: PricingOplMasterNvgtProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
      `}</style>

      <div className="max-w-6xl mx-auto" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        {/* Badge */}
        <motion.div
          className="flex justify-start mb-8"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
            style={{
              border: `1px solid ${colors.badgeBorder}`,
              color: colors.textPrimary,
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: colors.accent }}
            />
            {badge}
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-normal italic mb-4"
          style={{ color: colors.textPrimary }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-sm md:text-base max-w-3xl mb-12"
          style={{ color: colors.textSecondary }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="rounded-2xl p-6 flex flex-col"
              style={{
                backgroundColor: plan.highlighted
                  ? colors.cardLight
                  : colors.cardDark,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              {/* Plan Name */}
              <p
                className="text-xs uppercase tracking-wider mb-2"
                style={{
                  color: plan.highlighted
                    ? colors.textDarkSecondary
                    : colors.textSecondary,
                }}
              >
                {plan.name}
              </p>

              {/* Price */}
              <div className="mb-4">
                <span
                  className="text-3xl md:text-4xl font-semibold"
                  style={{
                    color: plan.highlighted
                      ? colors.textDark
                      : colors.textPrimary,
                  }}
                >
                  {plan.price}
                </span>
                <span
                  className="text-lg"
                  style={{
                    color: plan.highlighted
                      ? colors.textDarkSecondary
                      : colors.textSecondary,
                  }}
                >
                  {plan.period}
                </span>
              </div>

              {/* Description */}
              <p
                className="text-sm mb-6 leading-relaxed"
                style={{
                  color: plan.highlighted
                    ? colors.textDarkSecondary
                    : colors.textSecondary,
                }}
              >
                {plan.description}
              </p>

              {/* Button */}
              <motion.button
                onClick={() => onPlanClick?.(plan.name)}
                className="w-full py-3 rounded-full text-sm font-medium mb-6 transition-all duration-200"
                style={{
                  backgroundColor: plan.highlighted
                    ? colors.accent
                    : colors.buttonDark,
                  color: plan.highlighted
                    ? colors.textPrimary
                    : colors.buttonDarkText,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.buttonText}
              </motion.button>

              {/* Includes Label */}
              <p
                className="text-xs font-medium mb-4"
                style={{
                  color: plan.highlighted
                    ? colors.textDark
                    : colors.textPrimary,
                }}
              >
                Includes:
              </p>

              {/* Features */}
              <div className="flex-1 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-2">
                    <Check
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{
                        color: plan.isPremium
                          ? colors.accent
                          : plan.highlighted
                          ? colors.textDarkSecondary
                          : colors.textSecondary,
                      }}
                    />
                    <span
                      className="text-xs leading-relaxed"
                      style={{
                        color: plan.highlighted
                          ? colors.textDarkSecondary
                          : colors.textSecondary,
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* See More Link */}
              <motion.button
                onClick={() => onSeeMoreClick?.(plan.name)}
                className="mt-6 text-sm font-medium text-center"
                style={{
                  color: plan.highlighted ? colors.accent : colors.accent,
                }}
                whileHover={{ opacity: 0.8 }}
              >
                {seeMoreText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
