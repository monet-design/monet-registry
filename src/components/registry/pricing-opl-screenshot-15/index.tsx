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
    // Primary 액센트 (버튼, 체크 아이콘 등)
    accent: "#2563EB",
    accentHover: "#1D4ED8",
    // 배경색
    background: "#F5F5F5",
    cardBackground: "#FFFFFF",
  },
  dark: {
    accent: "#3B82F6",
    accentHover: "#60A5FA",
    background: "#0A0A0A",
    cardBackground: "#1A1A1A",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check } from "lucide-react";

interface PlanFeature {
  text: string;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  buttonText: string;
}

interface PricingOplScreenshot15Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  plans?: PricingPlan[];
  onPlanClick?: (planName: string) => void;
}

const defaultPlans: PricingPlan[] = [
  {
    name: "Single",
    price: "$49",
    description: "For freelance and single designers",
    features: [
      { text: "1400+ Components" },
      { text: "25+ Different Categories" },
      { text: "150+ Unique Outlined Icons" },
      { text: "Free Updates" },
    ],
    buttonText: "Buy single license",
  },
  {
    name: "Team",
    price: "$79",
    description: "Unlimited number of editors",
    features: [
      { text: "1400+ Components" },
      { text: "25+ Different Categories" },
      { text: "150+ Unique Outlined Icons" },
      { text: "Free Updates" },
    ],
    buttonText: "Buy team license",
  },
];

export default function PricingOplScreenshot15({
  mode = "light",
  title = "Ready to get it?",
  subtitle = "If you want to use our library, thats great!\nWe use a pricing approach that is both\nbasic and clear.",
  plans = defaultPlans,
  onPlanClick,
}: PricingOplScreenshot15Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className="relative w-full py-20 px-6"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 lg:w-[280px] lg:pt-8"
          >
            <h2
              className={`text-3xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {title}
            </h2>
            <p
              className={`text-sm leading-relaxed whitespace-pre-line ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {subtitle}
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="flex flex-col sm:flex-row gap-6 flex-1">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-1 p-8 rounded-2xl"
                style={{ backgroundColor: colors.cardBackground }}
              >
                {/* Plan Name */}
                <h3
                  className={`text-lg font-semibold mb-4 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>

                {/* Price */}
                <div
                  className={`text-5xl font-bold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.price}
                </div>

                {/* Description */}
                <p
                  className={`text-sm mb-8 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: colors.accent }}
                      >
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                      <span
                        className={`text-sm ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onPlanClick?.(plan.name)}
                  className="w-full py-3 px-6 text-sm font-medium text-white rounded-lg transition-colors"
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
        </div>
      </div>
    </section>
  );
}
