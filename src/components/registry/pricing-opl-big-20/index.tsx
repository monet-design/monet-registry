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
    accent: "#4087F3",
    accentHover: "#2D6FDB",
    // 데코레이션 색상
    decorationStart: "#4087F3",
    decorationEnd: "#9DD0F5",
  },
  dark: {
    accent: "#60A5FA",
    accentHover: "#3B82F6",
    decorationStart: "#3B82F6",
    decorationEnd: "#60A5FA",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface PlanFeature {
  text: string;
  isHighlighted?: boolean;
}

interface PricingPlan {
  name: string;
  price?: string;
  period?: string;
  description?: string;
  features: PlanFeature[];
  buttonText: string;
}

interface PricingOplBig20Props {
  mode?: "light" | "dark";
  title?: string;
  plans?: PricingPlan[];
  footerText?: string;
  showSlackIntegration?: boolean;
  onPlanClick?: (planName: string) => void;
}

const defaultPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    period: "/m",
    features: [
      { text: "3GB storage", isHighlighted: true },
      { text: "3 projects", isHighlighted: true },
      { text: "5 contributors", isHighlighted: true },
    ],
    buttonText: "Get Free Account",
  },
  {
    name: "Pro",
    price: "$12",
    period: "/m",
    features: [
      { text: "Team account", isHighlighted: true },
      { text: "Unlimited storage", isHighlighted: true },
      { text: "Unlimited projects", isHighlighted: true },
      { text: "2 contributors", isHighlighted: false },
      { text: "+$6 for each additional contributor", isHighlighted: true },
      { text: "Unlimited viewers", isHighlighted: true },
    ],
    buttonText: "Get Pro Account",
  },
  {
    name: "Enterprise",
    description: "Get in touch for more info about our\nEnterprise options.",
    features: [],
    buttonText: "Contact Us",
  },
];

// Slack icon component
function SlackIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function PricingOplBig20({
  mode = "light",
  title = "Pricing",
  plans = defaultPlans,
  footerText = "All plans include integration with",
  showSlackIntegration = true,
  onPlanClick,
}: PricingOplBig20Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className={`relative w-full py-16 px-6 overflow-hidden ${
        isDark ? "bg-gray-950" : "bg-white"
      }`}
    >
      {/* Decorative gradient circle in top right */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-60 blur-sm"
        style={{
          background: `linear-gradient(135deg, ${colors.decorationStart} 0%, ${colors.decorationEnd} 100%)`,
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold mb-12"
          style={{ color: colors.accent }}
        >
          {title}
        </motion.h2>

        {/* Pricing Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-lg p-6 ${
                isDark
                  ? "bg-gray-900 shadow-xl shadow-black/20"
                  : "bg-white shadow-lg shadow-gray-200/60"
              }`}
            >
              {/* Plan Header */}
              <div className="flex items-baseline justify-between mb-4">
                <h3
                  className={`text-lg font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                {plan.price && (
                  <div className="flex items-baseline">
                    <span
                      className={`text-2xl font-light ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span
                        className={`text-sm ${
                          isDark ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Description (for Enterprise) */}
              {plan.description && (
                <p
                  className={`text-sm mb-6 whitespace-pre-line ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>
              )}

              {/* Features List */}
              {plan.features.length > 0 && (
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={`text-sm ${
                        feature.isHighlighted
                          ? ""
                          : isDark
                          ? "text-gray-400"
                          : "text-gray-500"
                      }`}
                      style={
                        feature.isHighlighted ? { color: colors.accent } : {}
                      }
                    >
                      {feature.text}
                    </li>
                  ))}
                </ul>
              )}

              {/* Spacer to push button to bottom */}
              <div className="flex-grow" />

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onPlanClick?.(plan.name)}
                className="w-full py-2.5 text-sm font-medium rounded-md text-white transition-colors"
                style={{ backgroundColor: colors.accent }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.accentHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = colors.accent;
                }}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Footer with Slack integration */}
        {showSlackIntegration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-2"
          >
            <span
              className={`text-sm ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {footerText}
            </span>
            <div className="flex items-center gap-1.5">
              <SlackIcon
                className={`w-4 h-4 ${isDark ? "text-white" : "text-gray-900"}`}
              />
              <span
                className={`text-sm font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                slack
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
