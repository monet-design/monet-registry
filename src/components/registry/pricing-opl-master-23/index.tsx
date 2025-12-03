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
    // 배경 라벤더 색상
    background: "#E6D4FA",
    // 카드 배경
    cardBackground: "#F8F4FC",
    // 버튼 (Pro)
    buttonPrimary: "#000000",
    buttonPrimaryText: "#FFFFFF",
    // 버튼 (Free) - 아웃라인
    buttonSecondary: "transparent",
    buttonSecondaryBorder: "#000000",
    buttonSecondaryText: "#000000",
    // 장식 요소 - 노란색
    decoration: "#FFE566",
  },
  dark: {
    background: "#2D1F3D",
    cardBackground: "#1F1528",
    buttonPrimary: "#FFFFFF",
    buttonPrimaryText: "#000000",
    buttonSecondary: "transparent",
    buttonSecondaryBorder: "#FFFFFF",
    buttonSecondaryText: "#FFFFFF",
    decoration: "#FFE566",
  },
} as const;

/**
 * 텍스트 콘텐츠
 */
const CONTENT = {
  title: "Affordable Plans",
  plans: [
    {
      name: "Free",
      description: "Works for most sites",
      price: "$0",
      period: "/mo",
      subtext: "Free forever",
      buttonText: "Get started",
      isPrimary: false,
      features: [
        { text: "Unlimited sites", available: true },
        { text: "Unlimited views", available: true },
        { text: "Sync every 24 hours", available: true },
        { text: "Customisable options", available: true },
        { text: "Whitelabel", available: false },
        { text: "Customer support", available: false },
      ],
    },
    {
      name: "Pro",
      description: "White-label and advanced features",
      price: "$4.20",
      period: "/mo",
      subtext: "or $48/year",
      buttonText: "Get started",
      isPrimary: true,
      features: [
        { text: "Unlimited sites", available: true },
        { text: "Unlimited views", available: true },
        { text: "Sync every 60 minutes", available: true },
        { text: "Advanced customisable options", available: true },
        { text: "Whitelabel", available: true },
        { text: "Customer support", available: true },
      ],
    },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check } from "lucide-react";

interface PricingOplMaster23Props {
  mode?: "light" | "dark";
  title?: string;
  plans?: typeof CONTENT.plans;
}

// Yellow decoration SVG component
function YellowDecoration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 100C20 100 30 60 60 50C90 40 100 20 100 20"
        stroke="#FFE566"
        strokeWidth="20"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function YellowDecorationRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M80 10C80 10 20 40 30 80C40 120 80 140 80 140"
        stroke="#FFE566"
        strokeWidth="18"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function PricingOplMaster23({
  mode = "light",
  title = CONTENT.title,
  plans = CONTENT.plans,
}: PricingOplMaster23Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className="relative w-full overflow-hidden py-16 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.background }}
    >
      {/* Decorative elements */}
      <YellowDecoration className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 -translate-x-4 translate-y-4" />
      <YellowDecorationRight className="absolute bottom-0 right-0 w-24 h-36 md:w-32 md:h-48 translate-x-2" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-10 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </motion.h2>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl p-6 md:p-8 border"
              style={{
                backgroundColor: colors.cardBackground,
                borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
              }}
            >
              {/* Plan Header */}
              <div className="mb-4">
                <h3
                  className={`text-lg font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Divider */}
              <div
                className="h-px w-full mb-6"
                style={{
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(0,0,0,0.1)",
                }}
              />

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span
                    className={`text-4xl md:text-5xl font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-lg ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`text-sm mt-1 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {plan.subtext}
                </p>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-full text-sm font-medium transition-colors ${
                  plan.isPrimary
                    ? ""
                    : "border"
                }`}
                style={
                  plan.isPrimary
                    ? {
                        backgroundColor: colors.buttonPrimary,
                        color: colors.buttonPrimaryText,
                      }
                    : {
                        backgroundColor: colors.buttonSecondary,
                        borderColor: colors.buttonSecondaryBorder,
                        color: colors.buttonSecondaryText,
                      }
                }
              >
                {plan.buttonText}
              </motion.button>

              {/* Features List */}
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`flex items-center gap-3 text-sm ${
                      feature.available
                        ? isDark
                          ? "text-gray-300"
                          : "text-gray-700"
                        : isDark
                        ? "text-gray-600 line-through"
                        : "text-gray-400 line-through"
                    }`}
                  >
                    <Check
                      className={`w-4 h-4 flex-shrink-0 ${
                        feature.available
                          ? isDark
                            ? "text-white"
                            : "text-gray-900"
                          : isDark
                          ? "text-gray-600"
                          : "text-gray-400"
                      }`}
                    />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
