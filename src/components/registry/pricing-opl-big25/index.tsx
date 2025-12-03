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
    // Primary 액센트 (핑크 - 강조된 플랜)
    accent: "#FB6393",
    accentHover: "#E95583",
    // CTA 버튼 (초록)
    ctaButton: "#85C981",
    ctaButtonHover: "#72B86E",
    // 원형 테두리
    circleBorder: "#DCDCDC",
    circleBackground: "#FFFFFF",
  },
  dark: {
    accent: "#FB6393",
    accentHover: "#FF7DA8",
    ctaButton: "#85C981",
    ctaButtonHover: "#98D494",
    circleBorder: "#404040",
    circleBackground: "#1F1F1F",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface PricingPlan {
  price: string;
  responses: string;
  isHighlighted?: boolean;
}

interface PricingOplBig25Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  plans?: PricingPlan[];
  ctaText?: string;
  onCtaClick?: () => void;
  onPlanSelect?: (plan: PricingPlan) => void;
}

const defaultPlans: PricingPlan[] = [
  {
    price: "Free",
    responses: "25 responses\nper month",
    isHighlighted: false,
  },
  {
    price: "$49",
    responses: "250 responses\nper month",
    isHighlighted: false,
  },
  {
    price: "$149",
    responses: "1 500\nresponses\nper month",
    isHighlighted: true,
  },
  {
    price: "$299",
    responses: "10 000\nresponses\nper month",
    isHighlighted: false,
  },
  {
    price: "$999",
    responses: "Unlimited\nresponses\nper month",
    isHighlighted: false,
  },
];

export default function PricingOplBig25({
  mode = "light",
  title = "Pricing",
  subtitle = "Get 2 months free with yearly billing.",
  plans = defaultPlans,
  ctaText = "GET STARTED FOR FREE",
  onCtaClick,
  onPlanSelect,
}: PricingOplBig25Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className={`relative w-full py-16 px-4 ${
        isDark ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2
            className={`text-2xl md:text-3xl font-medium mb-2 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Pricing Circles */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-10">
          {plans.map((plan, index) => {
            const isHighlighted = plan.isHighlighted;
            const circleSize = isHighlighted
              ? "w-28 h-28 md:w-32 md:h-32"
              : "w-20 h-20 md:w-24 md:h-24";

            return (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onPlanSelect?.(plan)}
                className={`${circleSize} rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${
                  isHighlighted ? "shadow-lg" : ""
                }`}
                style={{
                  backgroundColor: isHighlighted
                    ? colors.accent
                    : colors.circleBackground,
                  border: isHighlighted
                    ? "none"
                    : `2px solid ${colors.circleBorder}`,
                }}
              >
                <span
                  className={`font-semibold ${
                    isHighlighted
                      ? "text-white text-base md:text-lg"
                      : isDark
                      ? "text-white text-sm md:text-base"
                      : "text-gray-800 text-sm md:text-base"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-center leading-tight whitespace-pre-line ${
                    isHighlighted
                      ? "text-white/90 text-[9px] md:text-[10px]"
                      : isDark
                      ? "text-gray-400 text-[8px] md:text-[9px]"
                      : "text-gray-500 text-[8px] md:text-[9px]"
                  }`}
                >
                  {plan.responses}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onCtaClick}
            className="px-8 py-3 rounded-md text-white text-sm font-semibold tracking-wider uppercase transition-colors duration-200"
            style={{ backgroundColor: colors.ctaButton }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.ctaButtonHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.ctaButton;
            }}
          >
            {ctaText}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
