"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#5B5B5B",
  cardBackground: "#232323",
  bottomBarBackground: "#2E2E2E",
  titleText: "#E5E5E5",
  planNameText: "#FFFFFF",
  subtitleText: "#888888",
  priceText: "#FFFFFF",
  dividerLine: "#444444",
  annualText: "#888888",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface PricingPlan {
  name: string;
  rolesDescription: string;
  price: number;
  annualPrice: number;
  currency?: string;
}

interface PricingFlockHomeProps {
  title?: string;
  plans?: PricingPlan[];
  bronzeDescription?: string;
  bronzeLabel?: string;
}

const defaultPlans: PricingPlan[] = [
  {
    name: "Silver",
    rolesDescription: "2-5 roles per month",
    price: 50,
    annualPrice: 500,
    currency: "£",
  },
  {
    name: "Gold",
    rolesDescription: "6-10 roles per month",
    price: 100,
    annualPrice: 1000,
    currency: "£",
  },
  {
    name: "Platinum",
    rolesDescription: "11+ roles per month",
    price: 150,
    annualPrice: 1500,
    currency: "£",
  },
];

function PricingCard({
  plan,
  delay = 0,
}: {
  plan: PricingPlan;
  delay?: number;
}) {
  const currency = plan.currency || "£";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col rounded-sm p-6"
      style={{ backgroundColor: COLORS.cardBackground }}
    >
      {/* Plan Name */}
      <h3
        className="text-center text-lg font-light tracking-wide"
        style={{ color: COLORS.planNameText }}
      >
        {plan.name}
      </h3>

      {/* Roles Description */}
      <p
        className="mt-1 text-center text-xs"
        style={{ color: COLORS.subtitleText }}
      >
        {plan.rolesDescription}
      </p>

      {/* Price */}
      <div className="mt-6 flex items-end justify-center">
        <span
          className="self-start text-xs"
          style={{ color: COLORS.subtitleText }}
        >
          {currency}
        </span>
        <span
          className="text-5xl font-light leading-none tracking-tight"
          style={{ color: COLORS.priceText }}
        >
          {plan.price}
        </span>
        <span
          className="mb-1 ml-0.5 text-sm font-light"
          style={{ color: COLORS.subtitleText }}
        >
          PM
        </span>
      </div>

      {/* Divider */}
      <div
        className="mx-auto mt-6 w-full max-w-[140px] border-t"
        style={{ borderColor: COLORS.dividerLine }}
      />

      {/* Annual Price */}
      <p
        className="mt-4 text-center text-xs uppercase tracking-wider"
        style={{ color: COLORS.annualText }}
      >
        {currency}
        {plan.annualPrice} PER ANNUM
      </p>
    </motion.div>
  );
}

export default function PricingFlockHome({
  title = "Pricing Plans",
  plans = defaultPlans,
  bronzeDescription = "1 role per month",
  bronzeLabel = "Free for life",
}: PricingFlockHomeProps) {
  return (
    <section
      className="relative w-full px-6 py-10 md:px-12 md:py-16"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="mx-auto max-w-4xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-xl font-light tracking-wide md:text-2xl"
          style={{ color: COLORS.titleText }}
        >
          {title}
        </motion.h2>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} delay={0.1 + index * 0.1} />
          ))}
        </div>

        {/* Bronze Free Tier Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 flex items-center justify-center gap-3 rounded-sm px-6 py-4"
          style={{ backgroundColor: COLORS.bottomBarBackground }}
        >
          <span
            className="text-lg font-light tracking-wide"
            style={{ color: COLORS.planNameText }}
          >
            Bronze
          </span>
          <span className="text-xs" style={{ color: COLORS.subtitleText }}>
            {bronzeDescription}
          </span>
          <span
            className="text-lg font-light tracking-wide"
            style={{ color: COLORS.planNameText }}
          >
            {bronzeLabel}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
