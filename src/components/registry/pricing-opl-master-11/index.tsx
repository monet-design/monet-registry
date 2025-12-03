"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
interface ColorScheme {
  freeAccent: string;
  freeAccentHover: string;
  freeCardBg: string;
  paidAccent: string;
  paidAccentHover: string;
  paidCardBg: string;
  blueShape: string;
  orangeShape: string;
  lightBlueShape: string;
  lightOrangeShape: string;
}

const COLORS: { light: ColorScheme; dark: ColorScheme } = {
  light: {
    // Free plan colors
    freeAccent: "#2563EB",
    freeAccentHover: "#1D4ED8",
    freeCardBg: "#E6EFFF",
    // Paid plan colors
    paidAccent: "#D97706",
    paidAccentHover: "#B45309",
    paidCardBg: "#FEF0E5",
    // Decorative shapes
    blueShape: "#3B82F6",
    orangeShape: "#F59E0B",
    lightBlueShape: "#93C5FD",
    lightOrangeShape: "#FCD34D",
  },
  dark: {
    freeAccent: "#60A5FA",
    freeAccentHover: "#3B82F6",
    freeCardBg: "#1E3A5F",
    paidAccent: "#FBBF24",
    paidAccentHover: "#F59E0B",
    paidCardBg: "#3D2E1E",
    blueShape: "#60A5FA",
    orangeShape: "#FBBF24",
    lightBlueShape: "#3B82F6",
    lightOrangeShape: "#F59E0B",
  },
};

/**
 * 이미지 에셋
 * - 이 컴포넌트는 CSS로 장식 요소를 생성하므로 별도 이미지 불필요
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, ChevronRight } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  priceUnit?: string;
  description: string;
  features: string[];
  buttonText: string;
  variant: "free" | "paid";
}

interface PricingOplMaster11Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  plans?: PricingPlan[];
  onGetStarted?: (planName: string) => void;
}

const defaultPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "Free",
    description: "Perfect to start collecting feedback for your app",
    features: ["25 total feedback submissions"],
    buttonText: "Get started",
    variant: "free",
  },
  {
    name: "Pro",
    price: "$10",
    priceUnit: "/month",
    description: "Suited for all apps and pages, from small to large",
    features: ["Unlimited feedback submissions"],
    buttonText: "Get started",
    variant: "paid",
  },
];

function PricingCard({
  plan,
  colors,
  onGetStarted,
  index,
}: {
  plan: PricingPlan;
  colors: ColorScheme;
  onGetStarted?: (planName: string) => void;
  index: number;
}) {
  const isFree = plan.variant === "free";
  const cardBg = isFree ? colors.freeCardBg : colors.paidCardBg;
  const accentColor = isFree ? colors.freeAccent : colors.paidAccent;
  const accentHoverColor = isFree ? colors.freeAccentHover : colors.paidAccentHover;
  const shapeColor1 = isFree ? colors.blueShape : colors.orangeShape;
  const shapeColor2 = isFree ? colors.lightBlueShape : colors.lightOrangeShape;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative overflow-hidden rounded-2xl"
      style={{ backgroundColor: cardBg }}
    >
      {/* Decorative shapes */}
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-60" style={{ backgroundColor: shapeColor1 }} />
      <div className="absolute -right-4 top-12 h-16 w-16 rounded-full opacity-40" style={{ backgroundColor: shapeColor2 }} />
      <div className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full opacity-30" style={{ backgroundColor: shapeColor1 }} />

      <div className="relative z-10 p-6 sm:p-8">
        {/* Price */}
        <div className="mb-3">
          <span
            className="text-3xl font-bold sm:text-4xl"
            style={{ color: accentColor }}
          >
            {plan.price}
          </span>
          {plan.priceUnit && (
            <span className="text-base text-gray-500" style={{ color: accentColor }}>
              {plan.priceUnit}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="mb-4 text-sm text-gray-600">{plan.description}</p>

        {/* Features */}
        <ul className="mb-6 space-y-2">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
              <Check className="h-4 w-4 flex-shrink-0" style={{ color: accentColor }} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onGetStarted?.(plan.name)}
          className="inline-flex items-center gap-1 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-colors"
          style={{ backgroundColor: accentColor }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = accentHoverColor;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = accentColor;
          }}
        >
          {plan.buttonText}
          <ChevronRight className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function PricingOplMaster11({
  mode = "light",
  title = "Pricing",
  subtitle = "Simple widget, even simpler pricing.",
  plans = defaultPlans,
  onGetStarted,
}: PricingOplMaster11Props) {
  const colors = COLORS[mode];

  return (
    <section
      className={`relative w-full py-16 sm:py-20 lg:py-24 ${
        mode === "dark" ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-3xl font-bold tracking-tight sm:text-4xl ${
              mode === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`mt-3 text-base ${
              mode === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              colors={colors}
              onGetStarted={onGetStarted}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
