"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    // Primary 액센트 (버튼, 링크 등)
    accent: "#6386F9",
    accentHover: "#4A6FE8",
  },
  dark: {
    accent: "#6386F9",
    accentHover: "#7A9AFF",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface PlanFeature {
  text: string;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: PlanFeature[];
  buttonText: string;
  isPrimary?: boolean;
}

interface PricingOplBig13Props {
  mode?: "light" | "dark";
  title?: string;
  plans?: PricingPlan[];
  onPlanClick?: (planName: string) => void;
}

const defaultPlans: PricingPlan[] = [
  {
    name: "Freelancer",
    price: "$25",
    period: "monthly",
    features: [
      { text: "1 user" },
      { text: "14 day free trial" },
      { text: "Unlimited links" },
      { text: "Unlimited commenting" },
      { text: "Unlimited guests" },
    ],
    buttonText: "Create account",
    isPrimary: true,
  },
  {
    name: "Agency",
    price: "$20",
    period: "per user monthly",
    features: [
      { text: "2 users minimum" },
      { text: "Unlimited links" },
      { text: "Unlimited commenting" },
      { text: "Unlimited guests" },
      { text: "Export to Trello & more" },
    ],
    buttonText: "Contact us",
    isPrimary: false,
  },
];

export default function PricingOplBig13({
  mode = "light",
  title = "Pricing",
  plans = defaultPlans,
  onPlanClick,
}: PricingOplBig13Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className={`relative w-full py-16 px-4 ${
        isDark ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-2xl font-semibold text-center mb-12 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </motion.h2>

        {/* Pricing Cards Container */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center w-full md:w-auto md:min-w-[200px]"
            >
              {/* Plan Name */}
              <h3
                className="text-base font-normal mb-2"
                style={{ color: colors.accent }}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div
                className="text-4xl font-light mb-1"
                style={{ color: colors.accent }}
              >
                {plan.price}
              </div>

              {/* Period */}
              <p
                className={`text-sm mb-6 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {plan.period}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {feature.text}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onPlanClick?.(plan.name)}
                className={`px-6 py-2.5 text-sm font-medium rounded-sm transition-colors ${
                  plan.isPrimary
                    ? "text-white"
                    : isDark
                    ? "bg-transparent text-gray-300"
                    : "bg-white text-gray-700"
                }`}
                style={
                  plan.isPrimary
                    ? { backgroundColor: colors.accent }
                    : {
                        border: `1px solid ${colors.accent}`,
                        color: colors.accent,
                      }
                }
                onMouseEnter={(e) => {
                  if (plan.isPrimary) {
                    e.currentTarget.style.backgroundColor = colors.accentHover;
                  } else {
                    e.currentTarget.style.backgroundColor = colors.accent;
                    e.currentTarget.style.color = "#FFFFFF";
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.isPrimary) {
                    e.currentTarget.style.backgroundColor = colors.accent;
                  } else {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = colors.accent;
                  }
                }}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
