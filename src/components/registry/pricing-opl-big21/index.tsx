"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#E7E8EC",
  cardBackground: "#2E2F31",
  cardHeaderText: "#959699",
  cardPriceText: "#FFFFFF",
  cardFeatureText: "#FFFFFF",
  buttonDefault: "#51624A",
  buttonDefaultText: "#FFFFFF",
  buttonHighlight: "#9EC389",
  buttonHighlightText: "#2E2F31",
  bodyText: "#6B6C6F",
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

// Types
interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isHighlighted?: boolean;
}

interface PricingOplBig21Props {
  mode?: "light" | "dark";
  headerText?: string;
  footerText?: string;
  footerSubText?: string;
  plans?: PricingPlan[];
  onOrderPlan?: (planId: string) => void;
}

// Default plans based on the image
const defaultPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: "$0",
    period: "per month",
    features: ["1 team", "Unlimited users", "5 GB of storage"],
    isHighlighted: false,
  },
  {
    id: "premium",
    name: "Premium",
    price: "$55",
    period: "per month",
    features: ["6 teams", "Unlimited users", "60 GB of storage"],
    isHighlighted: true,
  },
  {
    id: "gold",
    name: "Gold",
    price: "$99",
    period: "per month",
    features: ["Unlimited teams", "Unlimited users", "1 TB of storage"],
    isHighlighted: false,
  },
];

// Pricing Card Component
function PricingCard({
  plan,
  index,
  onOrderPlan,
}: {
  plan: PricingPlan;
  index: number;
  onOrderPlan?: (planId: string) => void;
}) {
  const isHighlighted = plan.isHighlighted;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col rounded-lg ${isHighlighted ? "-mt-4" : ""}`}
      style={{
        backgroundColor: COLORS.cardBackground,
        width: "180px",
      }}
    >
      {/* Plan Name Header */}
      <div
        className="py-3 text-center"
        style={{
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <span
          className="text-sm font-medium tracking-wide"
          style={{ color: COLORS.cardHeaderText }}
        >
          {plan.name}
        </span>
      </div>

      {/* Price Section */}
      <div className="flex flex-col items-center px-4 py-6">
        <span
          className="text-5xl font-bold tracking-tight"
          style={{ color: COLORS.cardPriceText }}
        >
          {plan.price}
        </span>
        <span
          className="mt-1 text-sm font-medium"
          style={{ color: COLORS.cardHeaderText }}
        >
          {plan.period}
        </span>
      </div>

      {/* Features List */}
      <div className="flex flex-col items-center gap-2 px-4 pb-4">
        {plan.features.map((feature, featureIndex) => (
          <span
            key={featureIndex}
            className="text-xs"
            style={{ color: COLORS.cardFeatureText }}
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Order Button */}
      <div className="px-4 pb-6 pt-2">
        <button
          onClick={() => onOrderPlan?.(plan.id)}
          className="w-full cursor-pointer rounded py-2 text-xs font-semibold uppercase tracking-wider transition-opacity hover:opacity-90"
          style={{
            backgroundColor: isHighlighted
              ? COLORS.buttonHighlight
              : COLORS.buttonDefault,
            color: isHighlighted
              ? COLORS.buttonHighlightText
              : COLORS.buttonDefaultText,
          }}
        >
          Order Plan
        </button>
      </div>
    </motion.div>
  );
}

export default function PricingOplBig21({
  headerText = "Take a look into Loomideck subscription plans. Choose the one which fits your organization (don't worry, you will be able to upgrade, downgrade or cancel it anytime).",
  footerText = "Loomideck subscription is recurring, your card will be charged each month according to your chosen subscription plan until you unsubscribe",
  footerSubText = "(you can do it anytime).",
  plans = defaultPlans,
  onOrderPlan,
}: PricingOplBig21Props) {
  return (
    <section
      className="relative w-full px-4 py-12 sm:py-16 lg:py-20"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="mx-auto max-w-3xl">
        {/* Header Text */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-sm leading-relaxed"
          style={{ color: COLORS.bodyText }}
        >
          {headerText}
        </motion.p>

        {/* Pricing Cards */}
        <div className="flex flex-wrap items-end justify-center gap-4">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              index={index}
              onOrderPlan={onOrderPlan}
            />
          ))}
        </div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p
            className="text-xs leading-relaxed"
            style={{ color: COLORS.bodyText }}
          >
            {footerText}
          </p>
          <p
            className="text-xs leading-relaxed"
            style={{ color: COLORS.bodyText }}
          >
            {footerSubText}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
