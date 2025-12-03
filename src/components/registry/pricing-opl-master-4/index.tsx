"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#5583F8",
    accentHover: "#4070E8",
    cardBorder: "#E5E5E5",
    darkCard: "#0A0A0A",
  },
  dark: {
    accent: "#5583F8",
    accentHover: "#4070E8",
    cardBorder: "#333333",
    darkCard: "#0A0A0A",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Diamond } from "lucide-react";

// Types
interface FeatureItem {
  text: string;
}

interface PricingPlan {
  badge?: string;
  title: string;
  features: FeatureItem[];
  price: string;
  buttonText: string;
  variant: "light" | "dark";
  icon?: React.ReactNode;
}

interface PricingOplMaster4Props {
  mode?: "light" | "dark";
  heading?: string;
  plans?: PricingPlan[];
}

// Default plans data
const defaultPlans: PricingPlan[] = [
  {
    badge: "Userpics pack",
    title: "Improve your design\nproject using free package\nof avatars",
    features: [
      { text: "100 vector avatars created in various styles" },
      { text: "For Commercial use" },
      { text: "SVG, PNG sources" },
      { text: "Compatible with Figma" },
    ],
    price: "Free",
    buttonText: "Download for free",
    variant: "light",
  },
  {
    icon: <Diamond className="h-5 w-5" strokeWidth={2} />,
    title: "Get one subscription to\ntake an advantage of all\nthe Craftwork possibilities.",
    features: [
      { text: "Create beautiful design with thousands vector illustrations" },
      { text: "Boost your workflow with great-quality UX/UI kits" },
      { text: "New assets available for you for free during a year" },
    ],
    price: "From $89/quarter",
    buttonText: "Explore All Access",
    variant: "dark",
  },
];

// Feature list item component
function FeatureListItem({
  text,
  variant,
}: {
  text: string;
  variant: "light" | "dark";
}) {
  return (
    <li className="flex items-start gap-2">
      <span
        className={`mt-[6px] h-[5px] w-[5px] flex-shrink-0 rounded-full ${
          variant === "light" ? "bg-black" : "bg-white"
        }`}
      />
      <span
        className={`text-[13px] leading-[1.5] ${
          variant === "light" ? "text-gray-700" : "text-gray-300"
        }`}
      >
        {text}
      </span>
    </li>
  );
}

// Pricing card component
function PricingCard({
  plan,
  colors,
  index,
}: {
  plan: PricingPlan;
  colors: (typeof COLORS)[keyof typeof COLORS];
  index: number;
}) {
  const isLight = plan.variant === "light";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`flex flex-col rounded-2xl p-6 sm:p-8 ${
        isLight
          ? "border border-gray-200 bg-white"
          : "bg-[#0A0A0A]"
      }`}
      style={{
        minHeight: "400px",
      }}
    >
      {/* Badge or Icon */}
      <div className="mb-4">
        {plan.badge && (
          <span className="text-[13px] font-medium text-gray-900">
            {plan.badge}
          </span>
        )}
        {plan.icon && (
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
            {plan.icon}
          </div>
        )}
      </div>

      {/* Title */}
      <h3
        className={`mb-6 text-[18px] font-bold leading-[1.35] sm:text-[20px] ${
          isLight ? "text-gray-900" : "text-white"
        }`}
        style={{ whiteSpace: "pre-line" }}
      >
        {plan.title}
      </h3>

      {/* Features */}
      <ul className="mb-6 flex flex-col gap-2">
        {plan.features.map((feature, idx) => (
          <FeatureListItem
            key={idx}
            text={feature.text}
            variant={plan.variant}
          />
        ))}
      </ul>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Price */}
      <p
        className={`mb-4 text-[20px] font-bold sm:text-[22px] ${
          isLight ? "text-gray-900" : "text-white"
        }`}
      >
        {plan.price}
      </p>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full rounded-full py-3 text-[14px] font-medium transition-colors ${
          isLight
            ? "text-white"
            : "bg-white text-black hover:bg-gray-100"
        }`}
        style={
          isLight
            ? { backgroundColor: colors.accent }
            : undefined
        }
        onMouseEnter={(e) => {
          if (isLight) {
            e.currentTarget.style.backgroundColor = colors.accentHover;
          }
        }}
        onMouseLeave={(e) => {
          if (isLight) {
            e.currentTarget.style.backgroundColor = colors.accent;
          }
        }}
      >
        {plan.buttonText}
      </motion.button>
    </motion.div>
  );
}

export default function PricingOplMaster4({
  mode = "light",
  heading = "Grab high-quality vector\nillustrations for free",
  plans = defaultPlans,
}: PricingOplMaster4Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-[24px] font-bold leading-[1.3] tracking-tight text-gray-900 sm:mb-12 sm:text-[28px] lg:text-[32px]"
          style={{ whiteSpace: "pre-line" }}
        >
          {heading}
        </motion.h2>

        {/* Pricing Cards Grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              colors={colors}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
