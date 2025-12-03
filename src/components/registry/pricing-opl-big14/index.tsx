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
    // Primary 액센트 (코랄/살몬 색상)
    accent: "#FC7C5E",
    accentHover: "#E86B4F",
    // Featured 카드 배경
    featuredBg: "#FE726D",
    featuredBgHover: "#F05D58",
    // 카드 상단 라인
    topLine: "#C9B948",
    // 버튼 배경 (featured 카드 버튼)
    buttonBg: "#FFDEDD",
  },
  dark: {
    accent: "#FC7C5E",
    accentHover: "#FF9A82",
    featuredBg: "#FE726D",
    featuredBgHover: "#FF8A86",
    topLine: "#C9B948",
    buttonBg: "#4A2525",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface PlanFeature {
  label: string;
  value: string;
}

interface PricingPlan {
  name: string;
  price: number;
  unit: string;
  features: PlanFeature[];
  buttonText: string;
  isFeatured?: boolean;
}

interface PricingOplBig14Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  plans?: PricingPlan[];
  onPlanClick?: (planName: string) => void;
}

const defaultPlans: PricingPlan[] = [
  {
    name: "Startup",
    price: 9,
    unit: "$/month",
    features: [
      { label: "5", value: "projects" },
      { label: "Unlimited", value: "servers" },
      { label: "Unlimited", value: "deployments" },
      { label: "7 day", value: "free trial" },
    ],
    buttonText: "Get Started",
    isFeatured: false,
  },
  {
    name: "Agency",
    price: 19,
    unit: "$/month",
    features: [
      { label: "15", value: "projects" },
      { label: "Unlimited", value: "servers" },
      { label: "Unlimited", value: "deployments" },
      { label: "7 day", value: "free trial" },
    ],
    buttonText: "Get Started",
    isFeatured: true,
  },
  {
    name: "Enterprise",
    price: 39,
    unit: "$/month",
    features: [
      { label: "45", value: "projects" },
      { label: "Unlimited", value: "servers" },
      { label: "Unlimited", value: "deployments" },
      { label: "7 day", value: "free trial" },
    ],
    buttonText: "Get Started",
    isFeatured: false,
  },
];

export default function PricingOplBig14({
  mode = "light",
  title = "Simple Pricing",
  subtitle = "No fixed contracts. Cancel any time. 16% discount with annual plan.",
  plans = defaultPlans,
  onPlanClick,
}: PricingOplBig14Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className={`relative w-full py-16 md:py-24 px-4 ${
        isDark ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-2xl md:text-3xl font-bold mb-3 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-sm ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-0">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col w-full md:w-56 ${
                plan.isFeatured
                  ? "md:-mt-4 md:z-10"
                  : ""
              }`}
            >
              {/* Card */}
              <div
                className={`relative flex flex-col h-full rounded-sm overflow-hidden ${
                  plan.isFeatured
                    ? ""
                    : isDark
                    ? "bg-gray-900 border border-gray-800"
                    : "bg-white border border-gray-200"
                }`}
                style={
                  plan.isFeatured
                    ? { backgroundColor: colors.featuredBg }
                    : undefined
                }
              >
                {/* Top accent line for non-featured cards */}
                {!plan.isFeatured && (
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ backgroundColor: colors.topLine }}
                  />
                )}

                {/* Card Content */}
                <div className={`flex flex-col flex-1 px-6 py-8 ${plan.isFeatured ? "pt-6" : "pt-8"}`}>
                  {/* Plan Name (only for featured) */}
                  {plan.isFeatured && (
                    <div className="text-center mb-4">
                      <span className="text-white text-sm font-medium">
                        {plan.name}
                      </span>
                    </div>
                  )}

                  {/* Price */}
                  <div className="text-center mb-2">
                    <span
                      className={`text-5xl font-light ${
                        plan.isFeatured
                          ? "text-white"
                          : ""
                      }`}
                      style={
                        !plan.isFeatured
                          ? { color: colors.accent }
                          : undefined
                      }
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-base ml-1 ${
                        plan.isFeatured
                          ? "text-white/80"
                          : ""
                      }`}
                      style={
                        !plan.isFeatured
                          ? { color: colors.accent }
                          : undefined
                      }
                    >
                      {plan.unit}
                    </span>
                  </div>

                  {/* Plan Name (for non-featured) */}
                  {!plan.isFeatured && (
                    <div className="text-center mb-6">
                      <span
                        className={`text-base font-semibold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {plan.name}
                      </span>
                    </div>
                  )}

                  {/* Spacer for featured card */}
                  {plan.isFeatured && <div className="mb-6" />}

                  {/* Features */}
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`text-sm text-center ${
                          plan.isFeatured
                            ? "text-white/90"
                            : isDark
                            ? "text-gray-300"
                            : "text-gray-600"
                        }`}
                      >
                        <span
                          className={`font-medium ${
                            plan.isFeatured
                              ? "text-white"
                              : isDark
                              ? "text-white"
                              : "text-gray-900"
                          }`}
                        >
                          {feature.label}
                        </span>{" "}
                        {feature.value}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="mt-8 text-center">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onPlanClick?.(plan.name)}
                      className={`px-6 py-2 text-sm rounded-full transition-colors border ${
                        plan.isFeatured
                          ? "border-white/30"
                          : ""
                      }`}
                      style={
                        plan.isFeatured
                          ? {
                              backgroundColor: colors.buttonBg,
                              color: colors.accent,
                              borderColor: "transparent",
                            }
                          : {
                              backgroundColor: "transparent",
                              color: colors.accent,
                              borderColor: colors.accent,
                            }
                      }
                      onMouseEnter={(e) => {
                        if (plan.isFeatured) {
                          e.currentTarget.style.backgroundColor = "#FFFFFF";
                        } else {
                          e.currentTarget.style.backgroundColor = colors.accent;
                          e.currentTarget.style.color = "#FFFFFF";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (plan.isFeatured) {
                          e.currentTarget.style.backgroundColor = colors.buttonBg;
                        } else {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = colors.accent;
                        }
                      }}
                    >
                      {plan.buttonText}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
