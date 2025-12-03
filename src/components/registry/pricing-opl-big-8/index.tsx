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
    // Primary 액센트 (버튼, 링크 등) - 청록색/틸
    accent: "#3CC9C3",
    accentHover: "#2EB8B2",
    // 커스텀 카드 배경
    customCardBg: "#F7F8FC",
    // X 표시 색상
    unavailable: "#E57373",
  },
  dark: {
    accent: "#4DD9D3",
    accentHover: "#3CC9C3",
    customCardBg: "#1F2937",
    unavailable: "#EF5350",
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
import { X, Check } from "lucide-react";

/**
 * Feature item with value or boolean availability
 */
interface FeatureItem {
  name: string;
  value?: string | number;
  available?: boolean;
}

/**
 * 가격 플랜 데이터 타입
 */
interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency?: string;
  period?: string;
  features: FeatureItem[];
  buttonText?: string;
}

/**
 * 커스텀 플랜 데이터 타입
 */
interface CustomPlan {
  title: string;
  description: string;
  email: string;
  linkText: string;
}

/**
 * 기본 가격 플랜 데이터
 */
const DEFAULT_PLANS: PricingPlan[] = [
  {
    id: "gratis",
    name: "Gratis",
    price: 0,
    currency: "€",
    period: "per maand",
    features: [
      { name: "Projecten", value: 1 },
      { name: "(Web)designers", value: 1 },
      { name: "Updates", available: false },
    ],
    buttonText: "Begin nu gratis",
  },
  {
    id: "starter",
    name: "Starter",
    price: 15,
    currency: "€",
    period: "per maand",
    features: [
      { name: "Projecten", value: 5 },
      { name: "(Web)designers", value: 2 },
      { name: "Updates", available: true },
    ],
    buttonText: "Begin nu gratis",
  },
  {
    id: "pro",
    name: "Pro",
    price: 25,
    currency: "€",
    period: "per maand",
    features: [
      { name: "Projecten", value: "onbeperkt" },
      { name: "(Web)designers", value: 5 },
      { name: "Updates", available: true },
    ],
    buttonText: "Begin nu gratis",
  },
];

const DEFAULT_CUSTOM_PLAN: CustomPlan = {
  title: "Pakket op maat?",
  description: "Stuur dan een e-mail naar",
  email: "hallo@showwwcase.nl",
  linkText: "en samen maken we een pakket op maat.",
};

interface PricingOplBig8Props {
  mode?: "light" | "dark";
  plans?: PricingPlan[];
  customPlan?: CustomPlan;
  footerText?: string;
  onPlanSelect?: (planId: string) => void;
  onEmailClick?: (email: string) => void;
}

export default function PricingOplBig8({
  mode = "light",
  plans = DEFAULT_PLANS,
  customPlan = DEFAULT_CUSTOM_PLAN,
  footerText = "Gratis blijft gratis. Bedragen zijn excl. btw. Een betaald pakket is per maand opzegbaar.",
  onPlanSelect,
  onEmailClick,
}: PricingOplBig8Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className={`relative w-full py-12 md:py-16 ${
        isDark ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-2">
          {/* Regular Plans */}
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`flex flex-col rounded-sm border ${
                isDark
                  ? "border-gray-700 bg-gray-900"
                  : "border-gray-200 bg-white"
              }`}
            >
              {/* Header */}
              <div className="flex flex-col items-center px-4 pt-6 pb-4">
                {/* Plan Name */}
                <h3
                  className={`text-lg font-normal ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {plan.name}
                </h3>

                {/* Price */}
                <div
                  className={`mt-2 flex items-start ${
                    isDark ? "text-gray-200" : "text-gray-500"
                  }`}
                >
                  <span className="text-3xl font-light">
                    {plan.currency}
                    {plan.price}
                  </span>
                </div>

                {/* Period */}
                <p
                  className={`mt-1 text-xs ${
                    isDark ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  {plan.period}
                </p>
              </div>

              {/* Divider */}
              <div
                className={`mx-4 border-t ${
                  isDark ? "border-gray-700" : "border-gray-200"
                }`}
              />

              {/* Features */}
              <div className="flex-1 px-4 py-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center justify-between text-sm"
                    >
                      <span
                        className={isDark ? "text-gray-400" : "text-gray-500"}
                      >
                        {feature.name}
                      </span>
                      {feature.available !== undefined ? (
                        feature.available ? (
                          <Check
                            size={16}
                            style={{ color: colors.accent }}
                            strokeWidth={2.5}
                          />
                        ) : (
                          <X
                            size={16}
                            style={{ color: colors.unavailable }}
                            strokeWidth={2.5}
                          />
                        )
                      ) : (
                        <span
                          className={
                            isDark ? "text-gray-300" : "text-gray-600"
                          }
                        >
                          {feature.value}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="px-4 pb-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onPlanSelect?.(plan.id)}
                  style={{ backgroundColor: colors.accent }}
                  className="w-full rounded px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  {plan.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}

          {/* Custom Plan Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: plans.length * 0.1 }}
            style={{ backgroundColor: isDark ? colors.customCardBg : colors.customCardBg }}
            className={`flex flex-col items-center justify-center rounded-sm px-6 py-8 text-center ${
              isDark ? "border border-gray-700" : ""
            }`}
          >
            <h3
              className={`text-lg font-normal ${
                isDark ? "text-gray-200" : "text-gray-600"
              }`}
            >
              {customPlan.title}
            </h3>
            <p
              className={`mt-4 text-sm leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {customPlan.description}
              <br />
              <button
                onClick={() => onEmailClick?.(customPlan.email)}
                style={{ color: colors.accent }}
                className="underline decoration-1 underline-offset-2 transition-opacity hover:opacity-80"
              >
                {customPlan.email}
              </button>{" "}
              {customPlan.linkText}
            </p>
          </motion.div>
        </div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          style={{ color: colors.accent }}
          className="mt-6 text-center text-xs"
        >
          {footerText}
        </motion.p>
      </div>
    </section>
  );
}
