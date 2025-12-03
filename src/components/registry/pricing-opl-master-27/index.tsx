"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "linear-gradient(180deg, #F3FCF7 0%, #FFFFFF 100%)",
    accent: "#269956",
    accentHover: "#1E7A45",
    greenCardBg: "#269956",
    greenCardBgHover: "#1E7A45",
    cardBg: "#FFFFFF",
    cardBorder: "#E5E7EB",
    badgeBg: "#FDE68A",
    badgeText: "#92400E",
  },
  dark: {
    background: "linear-gradient(180deg, #0D1F15 0%, #0A0A0A 100%)",
    accent: "#34D399",
    accentHover: "#10B981",
    greenCardBg: "#166534",
    greenCardBgHover: "#15803D",
    cardBg: "#1F2937",
    cardBorder: "#374151",
    badgeBg: "#FDE68A",
    badgeText: "#92400E",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

interface Feature {
  text: string;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  buttonText: string;
  description: string;
  secondaryDescription?: string;
  badge?: string;
  icon?: React.ReactNode;
  highlighted?: boolean;
}

interface PricingOplMaster27Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  features?: Feature[];
  plans?: PricingPlan[];
}

const defaultFeatures: Feature[] = [
  { text: "UNLIMITED PAGES" },
  { text: "FREE HTTPS" },
  { text: "UNLIMITED FORM ENTRIES" },
  { text: "FREE SUB-DOMAIN" },
  { text: "UNLIMITED DATA" },
  { text: "24/7 SUPPORT" },
];

const TrophyIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 21H16M12 17V21M6.8 17H17.2C17.6 17 17.9 16.7 17.9 16.3C17.9 13.5 15.2 11.3 12 11.3C8.8 11.3 6.1 13.5 6.1 16.3C6.1 16.7 6.4 17 6.8 17Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 4H19C20.1 4 21 4.9 21 6C21 7.7 19.7 9 18 9H17M7 4H5C3.9 4 3 4.9 3 6C3 7.7 4.3 9 6 9H7M7 3H17V9C17 11.8 14.8 14 12 14C9.2 14 7 11.8 7 9V3Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const defaultPlans: PricingPlan[] = [
  {
    name: "Starter Plan",
    price: "Free",
    period: "",
    buttonText: "Upload for Free",
    description: "Free static.app domain included.",
    secondaryDescription: "No credit card",
    highlighted: true,
  },
  {
    name: "Yearly Plan",
    price: "$9",
    period: "/month",
    buttonText: "Proceed Annually",
    description: "Billed $108 per website annually.",
    secondaryDescription: "$36 cheaper to this way.",
    badge: "SAVE 25%",
    icon: <TrophyIcon />,
    highlighted: false,
  },
  {
    name: "Monthly Plan",
    price: "$12",
    period: "/month",
    buttonText: "Proceed Monthly",
    description: "Billed $12 per website monthly.",
    secondaryDescription: "Total is $144 per year.",
    highlighted: false,
  },
];

export default function PricingOplMaster27({
  mode = "light",
  title = "Purchase",
  subtitle = "Start using static.app as a hosting for your\nwebsites today to get the best features to buck\nratio on the market.",
  features = defaultFeatures,
  plans = defaultPlans,
}: PricingOplMaster27Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className="relative w-full py-16 px-4 sm:px-6 lg:px-8"
      style={{ background: colors.background }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="mb-12 flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          {/* Title and Subtitle */}
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-4xl sm:text-5xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-sm leading-relaxed whitespace-pre-line ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {subtitle}
            </motion.p>
          </div>

          {/* Features Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-x-8 gap-y-2"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: colors.accent }}
                />
                <span
                  className={`text-xs font-medium tracking-wide ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {feature.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className={`relative rounded-2xl p-6 flex flex-col ${
                plan.highlighted
                  ? "text-white"
                  : isDark
                    ? "border border-gray-700"
                    : "border border-gray-200"
              }`}
              style={{
                backgroundColor: plan.highlighted
                  ? colors.greenCardBg
                  : colors.cardBg,
              }}
            >
              {/* Plan Header */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-sm font-medium ${
                    plan.highlighted
                      ? "text-white/80"
                      : isDark
                        ? "text-gray-400"
                        : "text-gray-500"
                  }`}
                >
                  {plan.name}
                </span>
                <div className="flex items-center gap-2">
                  {plan.icon && (
                    <span style={{ color: "#D4A012" }}>{plan.icon}</span>
                  )}
                  {plan.badge && (
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: colors.badgeBg,
                        color: colors.badgeText,
                      }}
                    >
                      {plan.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span
                  className={`text-4xl font-bold ${
                    plan.highlighted
                      ? "text-white"
                      : isDark
                        ? "text-white"
                        : "text-gray-900"
                  }`}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span
                    className={`text-base ${
                      plan.highlighted
                        ? "text-white/70"
                        : isDark
                          ? "text-gray-400"
                          : "text-gray-500"
                    }`}
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-4 rounded-full text-sm font-medium flex items-center justify-center gap-2 mb-6 transition-colors ${
                  plan.highlighted
                    ? "bg-white text-gray-900 hover:bg-gray-100"
                    : "text-white"
                }`}
                style={
                  !plan.highlighted
                    ? {
                        backgroundColor: colors.accent,
                      }
                    : undefined
                }
              >
                {plan.buttonText}
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              {/* Description */}
              <div className="mt-auto">
                <p
                  className={`text-xs ${
                    plan.highlighted
                      ? "text-white/80"
                      : isDark
                        ? "text-gray-400"
                        : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>
                {plan.secondaryDescription && (
                  <p
                    className={`text-xs mt-0.5 ${
                      plan.highlighted
                        ? "text-white/60"
                        : isDark
                          ? "text-gray-500"
                          : "text-gray-400"
                    }`}
                  >
                    {plan.secondaryDescription}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
