"use client";

import "./font.css";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#3B549A", // Navy blue for buttons
    accentHover: "#2D4280",
    background: "linear-gradient(180deg, #F2FAF9 0%, #E8F4F5 100%)",
    cardGradient: "linear-gradient(180deg, #D8ECED 0%, #FFFFFF 40%)",
    divider: "#5B8A8F",
    textPrimary: "#2D3B5E",
    textSecondary: "#6B7280",
  },
  dark: {
    accent: "#5B7BC7",
    accentHover: "#4A6AB6",
    background: "linear-gradient(180deg, #1A2744 0%, #0F1629 100%)",
    cardGradient: "linear-gradient(180deg, #2A3F5F 0%, #1E293B 40%)",
    divider: "#5B8A8F",
    textPrimary: "#E5E7EB",
    textSecondary: "#9CA3AF",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

// Retainer Icon SVG Component
function RetainerIcon({ color = "#3B549A" }: { color?: string }) {
  return (
    <svg
      width="40"
      height="24"
      viewBox="0 0 40 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 16C4 16 6 20 20 20C34 20 36 16 36 16"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 12C6 12 8 8 20 8C32 8 34 12 34 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 14C8 10 12 6 20 6C28 6 32 10 32 14"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />
    </svg>
  );
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  badge?: string;
  retainerCount: number;
  description: string;
  frequency: string;
  pricePerSet: string;
  regularPrice: string;
  buttonText: string;
  isPopular?: boolean;
}

interface InfoItem {
  title: string;
  description: string;
}

interface PricingOplBig4Props {
  mode?: "light" | "dark";
  title?: string;
  infoItems?: InfoItem[];
  plans?: PricingPlan[];
  onPlanClick?: (planName: string) => void;
}

const defaultInfoItems: InfoItem[] = [
  {
    title: "ALL IN 7 DAYS",
    description: "Free Expedited Shipping to your Home or Office",
  },
  {
    title: "NO FOLLOW UP REQUIRED",
    description: "We keep track of you membership",
  },
];

const defaultPlans: PricingPlan[] = [
  {
    name: "Silver",
    price: "$99",
    period: "/year",
    badge: "A great place to start",
    retainerCount: 1,
    description: "1 Fresh Set of Retainers",
    frequency: "per year",
    pricePerSet: "$99/Set of Retainers",
    regularPrice: "Regularly $349",
    buttonText: "GET STARTED",
    isPopular: false,
  },
  {
    name: "Gold",
    price: "$149",
    period: "/year",
    badge: "Most Popular",
    retainerCount: 2,
    description: "1 Fresh Set of Retainers",
    frequency: "every 6 months",
    pricePerSet: "$74.50/Set of Retainers",
    regularPrice: "Regularly $698",
    buttonText: "GET STARTED",
    isPopular: true,
  },
  {
    name: "Platinum",
    price: "$199",
    period: "/year",
    badge: "Best Value",
    retainerCount: 3,
    description: "1 Fresh Set of Retainers",
    frequency: "every 4 months",
    pricePerSet: "$66.33/Set of Retainers",
    regularPrice: "Regularly $1,047",
    buttonText: "GET STARTED",
    isPopular: false,
  },
];

export default function PricingOplBig4({
  mode = "light",
  title = "Get Straight Teeth for Life",
  infoItems = defaultInfoItems,
  plans = defaultPlans,
  onPlanClick,
}: PricingOplBig4Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className="relative w-full py-16 px-4"
      style={{ background: colors.background }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-center mb-10 font-light italic"
          style={{
            color: colors.textPrimary,
            fontFamily: "'Instrument Serif', 'Times New Roman', serif",
          }}
        >
          {title}
        </motion.h2>

        {/* Info Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12"
        >
          {infoItems.map((item, index) => (
            <div key={index} className="text-center relative">
              {index === 0 && (
                <div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-0.5"
                  style={{ backgroundColor: colors.divider }}
                />
              )}
              {index === 1 && (
                <div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-0.5"
                  style={{ backgroundColor: colors.divider }}
                />
              )}
              <p
                className="text-xs font-semibold tracking-[0.2em] mb-1"
                style={{ color: colors.textPrimary }}
              >
                {item.title}
              </p>
              <p
                className="text-xs"
                style={{ color: colors.textSecondary }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden shadow-lg ${
                isDark ? "bg-slate-800" : "bg-white"
              }`}
              style={
                plan.isPopular
                  ? { background: colors.cardGradient }
                  : undefined
              }
            >
              <div className="p-6 pt-8 flex flex-col items-center text-center">
                {/* Plan Name */}
                <h3
                  className="text-xl font-light mb-2"
                  style={{
                    color: colors.textPrimary,
                    fontFamily: "'Instrument Serif', 'Times New Roman', serif",
                  }}
                >
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline mb-2">
                  <span
                    className="text-2xl line-through opacity-60"
                    style={{ color: colors.textSecondary }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: colors.textSecondary }}
                  >
                    {plan.period}
                  </span>
                </div>

                {/* Badge */}
                <div
                  className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-6"
                  style={{
                    backgroundColor: isDark
                      ? "rgba(91, 123, 199, 0.2)"
                      : "rgba(59, 84, 154, 0.1)",
                    color: colors.accent,
                  }}
                >
                  {plan.badge}
                </div>

                {/* Retainer Icons */}
                <div className="flex justify-center gap-2 mb-4">
                  {Array.from({ length: plan.retainerCount }).map((_, i) => (
                    <RetainerIcon key={i} color={colors.accent} />
                  ))}
                </div>

                {/* Description */}
                <p
                  className="text-sm mb-1"
                  style={{ color: colors.textPrimary }}
                >
                  {plan.description}
                </p>
                <p
                  className="text-sm mb-6"
                  style={{ color: colors.textSecondary }}
                >
                  {plan.frequency}
                </p>

                {/* Price per Set */}
                <p
                  className="text-sm mb-1"
                  style={{ color: colors.textPrimary }}
                >
                  {plan.pricePerSet}
                </p>
                <p
                  className="text-sm line-through mb-6"
                  style={{ color: colors.textSecondary }}
                >
                  {plan.regularPrice}
                </p>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onPlanClick?.(plan.name)}
                  className="w-full py-3 px-6 rounded-lg text-xs font-semibold tracking-[0.15em] text-white transition-colors"
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
