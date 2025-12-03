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
    // Primary 액센트 (버튼, 가격 텍스트)
    accent: "#E44DA1",
    accentHover: "#D13D91",
    // Background
    background: "#F7F7F7",
    // Divider
    divider: "#E3E6E8",
  },
  dark: {
    accent: "#F06BB3",
    accentHover: "#E44DA1",
    background: "#1A1A1A",
    divider: "#374151",
  },
} as const;

/**
 * 이미지 에셋
 * - 이 컴포넌트는 이미지 에셋이 필요하지 않습니다
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface PricingPlan {
  title: string;
  price: string;
  priceLabel?: string;
}

interface PricingOplMaster25Props {
  mode?: "light" | "dark";
  freePlan?: PricingPlan;
  paidPlan?: PricingPlan;
  buttonText?: string;
  disclaimer?: string;
  onButtonClick?: () => void;
}

export default function PricingOplMaster25({
  mode = "light",
  freePlan = {
    title: "Teams of up to 3 members",
    price: "FREE",
  },
  paidPlan = {
    title: "Teams of more than 3 members*",
    price: "$4",
    priceLabel: "per add-on member\nper month",
  },
  buttonText = "Start for free",
  disclaimer = "*Price shown is for 1 additional person. For example, if you have 4 members\nin your team, you need to pay $4 per month; for 5 members — $8 per month.",
  onButtonClick,
}: PricingOplMaster25Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className="relative w-full py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Pricing Options Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-0"
        >
          {/* Free Plan */}
          <div className="flex flex-col items-center px-8 sm:px-12 lg:px-16">
            <p
              className={`mb-2 text-sm font-normal ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {freePlan.title}
            </p>
            <span
              className="text-4xl font-bold tracking-tight sm:text-5xl"
              style={{ color: colors.accent }}
            >
              {freePlan.price}
            </span>
          </div>

          {/* Divider */}
          <div
            className="hidden h-20 w-px sm:block"
            style={{ backgroundColor: colors.divider }}
          />
          <div
            className="block h-px w-32 sm:hidden"
            style={{ backgroundColor: colors.divider }}
          />

          {/* Paid Plan */}
          <div className="flex flex-col items-center px-8 sm:px-12 lg:px-16">
            <p
              className={`mb-2 text-sm font-normal ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {paidPlan.title}
            </p>
            <div className="flex items-baseline gap-2">
              <span
                className="text-4xl font-bold tracking-tight sm:text-5xl"
                style={{ color: colors.accent }}
              >
                {paidPlan.price}
              </span>
              {paidPlan.priceLabel && (
                <span
                  className={`whitespace-pre-line text-xs leading-tight ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {paidPlan.priceLabel}
                </span>
              )}
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onButtonClick}
            className="rounded-full px-8 py-3 text-sm font-medium text-white shadow-md transition-colors duration-200"
            style={{ backgroundColor: colors.accent }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.accentHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.accent;
            }}
          >
            {buttonText}
          </motion.button>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`mt-8 whitespace-pre-line text-center text-xs leading-relaxed ${
            isDark ? "text-gray-500" : "text-gray-500"
          }`}
        >
          {disclaimer}
        </motion.p>
      </div>
    </section>
  );
}
