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
    accent: "#0063FF",
    accentHover: "#0050CC",
  },
  dark: {
    accent: "#3B82F6",
    accentHover: "#2563EB",
  },
} as const;

/**
 * 기본 플랜 데이터
 */
const DEFAULT_PLANS = [
  {
    name: "Starter",
    projects: "5 projects",
    trial: "",
    price: "FREE",
    priceUnit: "",
    featured: true,
  },
  {
    name: "Startup",
    projects: "10 projects",
    trial: "14 day free trial",
    price: "$10.00",
    priceUnit: "/mo",
    featured: false,
  },
  {
    name: "Company",
    projects: "25 projects",
    trial: "14 day free trial",
    price: "$20.00",
    priceUnit: "/mo",
    featured: false,
  },
  {
    name: "Enterprise",
    projects: "50 projects",
    trial: "14 day free trial",
    price: "$35.00",
    priceUnit: "/mo",
    featured: false,
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface Plan {
  name: string;
  projects: string;
  trial: string;
  price: string;
  priceUnit: string;
  featured: boolean;
}

interface PricingOplBigProps {
  mode?: "light" | "dark";
  plans?: Plan[];
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function PricingOplBig({
  mode = "light",
  plans = DEFAULT_PLANS,
  buttonText = "Get started",
  onButtonClick,
}: PricingOplBigProps) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className={`relative w-full py-12 px-4 ${
        isDark ? "bg-gray-950" : "bg-white"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl"
      >
        {/* Pricing Table Container */}
        <div
          className={`rounded-xl overflow-hidden border ${
            isDark ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"
          }`}
        >
          {/* Plans Row */}
          <div className="grid grid-cols-4">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`p-6 ${
                  plan.featured
                    ? ""
                    : index < plans.length - 1
                    ? isDark
                      ? "border-r border-gray-800"
                      : "border-r border-gray-100"
                    : ""
                }`}
                style={
                  plan.featured
                    ? { backgroundColor: colors.accent }
                    : undefined
                }
              >
                {/* Plan Name */}
                <h3
                  className={`text-base font-medium ${
                    plan.featured
                      ? "text-white"
                      : isDark
                      ? "text-white"
                      : ""
                  }`}
                  style={
                    !plan.featured ? { color: colors.accent } : undefined
                  }
                >
                  {plan.name}
                </h3>

                {/* Projects */}
                <p
                  className={`text-sm mt-1 ${
                    plan.featured
                      ? "text-blue-100"
                      : isDark
                      ? "text-gray-400"
                      : "text-gray-500"
                  }`}
                >
                  {plan.projects}
                </p>

                {/* Trial */}
                {plan.trial && (
                  <p
                    className={`text-xs mt-0.5 ${
                      plan.featured
                        ? "text-blue-200"
                        : isDark
                        ? "text-gray-500"
                        : "text-gray-400"
                    }`}
                  >
                    {plan.trial}
                  </p>
                )}

                {/* Price */}
                <p
                  className={`text-lg font-semibold mt-4 ${
                    plan.featured
                      ? "text-white"
                      : isDark
                      ? "text-white"
                      : ""
                  }`}
                  style={
                    !plan.featured ? { color: colors.accent } : undefined
                  }
                >
                  {plan.price}
                  {plan.priceUnit && (
                    <span
                      className={`text-sm font-normal ${
                        plan.featured
                          ? "text-blue-100"
                          : isDark
                          ? "text-gray-400"
                          : "text-gray-500"
                      }`}
                    >
                      {plan.priceUnit}
                    </span>
                  )}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Button Row */}
          <div
            className={`px-6 py-4 flex justify-center ${
              isDark ? "border-t border-gray-800" : "border-t border-gray-100"
            }`}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onButtonClick}
              className="px-8 py-2.5 rounded-full text-white text-sm font-medium transition-colors"
              style={{
                backgroundColor: colors.accent,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.accentHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.accent;
              }}
            >
              {buttonText}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
