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
    // Primary 액센트 (민트/터콰이즈)
    accent: "#7BEBDB",
    accentHover: "#5DDECB",
    // 리본 배경
    ribbon: "#9E9E9E",
    // 제목 민트 색상
    titleAccent: "#5DDECB",
  },
  dark: {
    accent: "#7BEBDB",
    accentHover: "#9EF3E7",
    ribbon: "#6B6B6B",
    titleAccent: "#7BEBDB",
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
  ribbonLabel: string;
  price: string;
  priceDecimal?: string;
  period: string;
  features: PlanFeature[];
  buttonText: string;
  isPro?: boolean;
}

interface PricingOplBig25Props {
  mode?: "light" | "dark";
  titleLine1?: string;
  titleLine2?: string;
  plans?: PricingPlan[];
  onPlanClick?: (planName: string) => void;
}

const defaultPlans: PricingPlan[] = [
  {
    name: "Free",
    ribbonLabel: "BASIC PLAN",
    price: "FREE",
    period: "for ever",
    features: [
      { text: "Popular fonts list" },
      { text: "10 bookmarks" },
      { text: "1 font pairing and example / font" },
    ],
    buttonText: "Sign up for free",
    isPro: false,
  },
  {
    name: "Pro",
    ribbonLabel: "PRO PLAN",
    price: "$1",
    priceDecimal: ".5",
    period: "per month",
    features: [
      { text: "Popular fonts list" },
      { text: "Unlimited bookmarks" },
      { text: "All font pairing for every fonts" },
      { text: 'All "in use" exemple for every fonts' },
      { text: "A lifetime of gratitude" },
    ],
    buttonText: "Subscribe now",
    isPro: true,
  },
];

export default function PricingOplBig25({
  mode = "light",
  titleLine1 = "COOL, DON'T YOU THINK?",
  titleLine2 = "TRY IT NOW!",
  plans = defaultPlans,
  onPlanClick,
}: PricingOplBig25Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className={`relative w-full py-16 px-4 ${
        isDark ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            className="text-2xl md:text-3xl font-bold tracking-wide"
            style={{ color: colors.titleAccent }}
          >
            {titleLine1}
          </h2>
          <h2
            className={`text-2xl md:text-3xl font-bold tracking-wide ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {titleLine2}
          </h2>
        </motion.div>

        {/* Pricing Cards Container */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex flex-col w-full md:w-[280px] rounded-2xl overflow-hidden shadow-lg ${
                plan.isPro ? "" : isDark ? "bg-gray-900" : "bg-white"
              }`}
              style={
                plan.isPro
                  ? { backgroundColor: colors.accent }
                  : undefined
              }
            >
              {/* Diagonal Ribbon */}
              <div
                className="absolute top-0 right-0 w-[140px] h-[140px] overflow-hidden pointer-events-none"
                style={{ zIndex: 10 }}
              >
                <div
                  className="absolute top-[28px] right-[-35px] w-[170px] text-center text-[10px] font-semibold tracking-wider py-1.5 transform rotate-45"
                  style={{
                    backgroundColor: colors.ribbon,
                    color: "#FFFFFF",
                  }}
                >
                  {plan.ribbonLabel}
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col items-center text-center px-6 pt-12 pb-8 flex-1">
                {/* Price */}
                <div className="mb-1">
                  <span
                    className={`text-5xl font-bold ${
                      plan.isPro
                        ? "text-white"
                        : isDark
                        ? "text-white"
                        : "text-gray-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.priceDecimal && (
                    <span
                      className={`text-2xl font-bold ${
                        plan.isPro
                          ? "text-white"
                          : isDark
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {plan.priceDecimal}
                    </span>
                  )}
                </div>

                {/* Period */}
                <p
                  className={`text-sm mb-8 ${
                    plan.isPro
                      ? "text-white/80"
                      : isDark
                      ? "text-gray-400"
                      : "text-gray-500"
                  }`}
                >
                  {plan.period}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={`text-sm ${
                        plan.isPro
                          ? "text-white/90"
                          : isDark
                          ? "text-gray-300"
                          : "text-gray-600"
                      }`}
                    >
                      {feature.text}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onPlanClick?.(plan.name)}
                  className={`w-full max-w-[180px] px-6 py-3 text-sm font-medium rounded-full transition-all duration-200 ${
                    plan.isPro
                      ? "bg-white/20 text-white border border-white/30 hover:bg-white/30"
                      : "text-white"
                  }`}
                  style={
                    !plan.isPro
                      ? {
                          backgroundColor: colors.accent,
                        }
                      : undefined
                  }
                  onMouseEnter={(e) => {
                    if (!plan.isPro) {
                      e.currentTarget.style.backgroundColor =
                        colors.accentHover;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.isPro) {
                      e.currentTarget.style.backgroundColor = colors.accent;
                    }
                  }}
                >
                  {plan.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
