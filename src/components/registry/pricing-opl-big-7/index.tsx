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
    accent: "#5587EE",
    accentHover: "#4070DD",
  },
  dark: {
    accent: "#60A5FA",
    accentHover: "#3B82F6",
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

/**
 * 가격 플랜 데이터 타입
 */
interface PricingPlan {
  id: string;
  name: string;
  emoji: string;
  price: number;
  period?: string;
  features: string[];
  footnote?: string;
}

/**
 * 기본 가격 플랜 데이터
 */
const DEFAULT_PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "FREE",
    emoji: "🐣",
    price: 0,
    features: [
      "5 active project",
      "2 active time tracking projects",
      "Desktop Windows, Mac Apps",
    ],
    footnote: "Try for free, forever!",
  },
  {
    id: "monthly",
    name: "MONTHLY",
    emoji: "🦊",
    price: 9.99,
    features: [
      "Unlimited project",
      "Unlimited time tracking projects",
      "Finance Reports",
      "Desktop Windows, Mac Apps",
      "24/7 Support",
    ],
  },
  {
    id: "yearly",
    name: "YEARLY",
    emoji: "🦄",
    price: 89.25,
    features: [
      "Unlimited project",
      "Unlimited time tracking projects",
      "Finance Reports",
      "Desktop Windows, Mac Apps",
      "24/7 Support",
    ],
  },
];

interface PricingOplBig7Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  plans?: PricingPlan[];
  buttonText?: string;
  onPlanSelect?: (planId: string) => void;
}

export default function PricingOplBig7({
  mode = "light",
  title = "Find the plan that's right for you",
  subtitle = "Get started for free. No credit card required!",
  plans = DEFAULT_PLANS,
  buttonText = "GET STARTED",
  onPlanSelect,
}: PricingOplBig7Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className={`relative w-full py-16 md:py-24 ${
        isDark ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:mb-16"
        >
          <h2
            className={`text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
          </h2>
          <p
            className={`mt-3 text-sm sm:text-base ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              {/* Emoji Icon */}
              <div className="mb-2 text-3xl md:text-4xl">{plan.emoji}</div>

              {/* Plan Name */}
              <span
                className={`mb-1 text-xs font-medium tracking-widest ${
                  isDark ? "text-gray-500" : "text-gray-400"
                }`}
              >
                {plan.name}
              </span>

              {/* Price */}
              <div
                className={`mb-4 text-3xl font-medium md:text-4xl ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                <span className="text-2xl md:text-3xl">$</span>{" "}
                {plan.price === 0 ? "0" : plan.price.toFixed(2)}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onPlanSelect?.(plan.id)}
                style={{ backgroundColor: colors.accent }}
                className="mb-6 w-full max-w-[180px] rounded-lg px-6 py-3 text-xs font-semibold tracking-wider text-white transition-colors hover:opacity-90"
              >
                {buttonText}
              </motion.button>

              {/* Features List */}
              <ul className="space-y-2 text-center">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`text-xs ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Footnote */}
              {plan.footnote && (
                <p
                  className={`mt-4 text-xs ${
                    isDark ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  {plan.footnote}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
