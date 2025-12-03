"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#0D1117",
    cardBg: "#121A21",
    cardBorder: "rgba(74, 227, 181, 0.1)",
    textPrimary: "#FFFFFF",
    textSecondary: "#8B9AAE",
    accent: "#4AE3B5",
    accentHover: "#3FD4A8",
    badgeBg: "rgba(74, 227, 181, 0.15)",
    badgeText: "#4AE3B5",
  },
  dark: {
    background: "#0D1117",
    cardBg: "#121A21",
    cardBorder: "rgba(74, 227, 181, 0.1)",
    textPrimary: "#FFFFFF",
    textSecondary: "#8B9AAE",
    accent: "#4AE3B5",
    accentHover: "#3FD4A8",
    badgeBg: "rgba(74, 227, 181, 0.15)",
    badgeText: "#4AE3B5",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  badge: "PRICING",
  title: "One-time payment,",
  subtitle: "no subscription",
  tip: "TIP: Ask your place of work about your education budget!",
  plans: [
    {
      name: "Personal",
      price: "$299",
      features: [
        { icon: "star", text: "Exclusive examples" },
        { icon: "diamond", text: "Premium components" },
        { icon: "clock", text: "Early access" },
        { icon: "discord", text: "Private Discord & GitHub" },
        { icon: "refresh", text: "Free lifetime updates" },
      ],
      buttonText: "Get instant access",
      buttonVariant: "primary" as const,
    },
    {
      name: "Team",
      price: "$1,499",
      features: [
        { icon: "star", text: "Exclusive examples" },
        { icon: "diamond", text: "Premium components" },
        { icon: "clock", text: "Early access" },
        { icon: "discord", text: "Private Discord & GitHub" },
        { icon: "refresh", text: "Free lifetime updates" },
        { icon: "users", text: "Motion+ for 10 team members" },
      ],
      buttonText: "Power up your team",
      buttonVariant: "secondary" as const,
    },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Star, Clock, Users, RefreshCw } from "lucide-react";

// Custom icons for features
function FeatureIcon({
  icon,
  color,
}: {
  icon: string;
  color: string;
}) {
  const iconProps = { className: "w-4 h-4", style: { color } };

  switch (icon) {
    case "star":
      return <Star {...iconProps} />;
    case "diamond":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 12l10 10 10-10L12 2z" />
        </svg>
      );
    case "clock":
      return <Clock {...iconProps} />;
    case "discord":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={color}
        >
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      );
    case "refresh":
      return <RefreshCw {...iconProps} />;
    case "users":
      return <Users {...iconProps} />;
    default:
      return <Star {...iconProps} />;
  }
}

interface Feature {
  icon: string;
  text: string;
}

interface Plan {
  name: string;
  price: string;
  features: Feature[];
  buttonText: string;
  buttonVariant: "primary" | "secondary";
}

interface PricingOplMasterMotionProps {
  mode?: "light" | "dark";
  badge?: string;
  title?: string;
  subtitle?: string;
  tip?: string;
  plans?: Plan[];
  onPlanClick?: (planName: string) => void;
}

export default function PricingOplMasterMotion({
  mode = "dark",
  badge = DEFAULT_CONTENT.badge,
  title = DEFAULT_CONTENT.title,
  subtitle = DEFAULT_CONTENT.subtitle,
  tip = DEFAULT_CONTENT.tip,
  plans = DEFAULT_CONTENT.plans,
  onPlanClick,
}: PricingOplMasterMotionProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block mb-6"
          >
            <span
              className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase"
              style={{
                backgroundColor: colors.badgeBg,
                color: colors.badgeText,
              }}
            >
              {badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight"
            style={{ color: colors.textPrimary }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {title}
            <br />
            {subtitle}
          </motion.h1>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 md:mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="rounded-2xl p-6 md:p-8"
              style={{
                backgroundColor: colors.cardBg,
                border: `1px solid ${colors.cardBorder}`,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              {/* Plan Name */}
              <p
                className="text-sm font-medium mb-2"
                style={{ color: colors.textSecondary }}
              >
                {plan.name}
              </p>

              {/* Price */}
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: colors.textPrimary }}
              >
                {plan.price}
              </h2>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <motion.li
                    key={fIndex}
                    className="flex items-center gap-3 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + fIndex * 0.05 }}
                  >
                    <FeatureIcon icon={feature.icon} color={colors.accent} />
                    <span style={{ color: colors.textSecondary }}>
                      {feature.text}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Button */}
              <motion.button
                onClick={() => onPlanClick?.(plan.name)}
                className="w-full py-3 px-6 rounded-full text-sm font-medium transition-all duration-300"
                style={
                  plan.buttonVariant === "primary"
                    ? {
                        backgroundColor: colors.accent,
                        color: colors.background,
                      }
                    : {
                        backgroundColor: "transparent",
                        color: colors.textPrimary,
                        border: `1px solid ${colors.textSecondary}`,
                      }
                }
                whileHover={{
                  scale: 1.02,
                  backgroundColor:
                    plan.buttonVariant === "primary"
                      ? colors.accentHover
                      : "rgba(255,255,255,0.05)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Tip Section */}
        <motion.p
          className="text-center text-xs md:text-sm"
          style={{ color: colors.textSecondary }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span style={{ color: colors.accent }}>TIP:</span>{" "}
          {tip.replace("TIP: ", "")}
        </motion.p>
      </div>
    </section>
  );
}
