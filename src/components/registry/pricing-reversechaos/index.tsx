"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#000000",
    headerText: "#FFFFFF",
    cardBeige: "#E8DED0",
    cardText: "#000000",
    cardTextSecondary: "#4A4A4A",
  },
  dark: {
    background: "#000000",
    headerText: "#FFFFFF",
    cardBeige: "#E8DED0",
    cardText: "#000000",
    cardTextSecondary: "#4A4A4A",
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
import "./font.css";

// Types
interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  priceNote: string;
  includeLink?: boolean;
  ctaText: string;
  variant: "beige" | "gradient-pink" | "gradient-border";
}

interface PricingReversechaosProps {
  mode?: "light" | "dark";
  headerText?: string;
  plans?: PricingPlan[];
  onCtaClick?: (planId: string) => void;
  onIncludedClick?: (planId: string) => void;
}

// Default plans based on the image
const defaultPlans: PricingPlan[] = [
  {
    id: "design",
    name: "Design",
    description: "For startups with on-going design needs.",
    price: "£4,800/m",
    priceNote: "No minimum commitment",
    includeLink: true,
    ctaText: "Book a 30min call",
    variant: "beige",
  },
  {
    id: "framer-webflow",
    name: "Framer/Webflow",
    description: "For design & front-end development.",
    price: "£7,600/m",
    priceNote: "No minimum commitment",
    includeLink: true,
    ctaText: "Book a 30min call",
    variant: "gradient-pink",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "More features, requests and expanded benefits for higher demand businesses.",
    price: "£20,000 +",
    priceNote: "No minimum commitment",
    includeLink: true,
    ctaText: "Book an exploration call",
    variant: "gradient-border",
  },
];

const defaultHeaderText =
  "Setting expectations is important. We work on a subscription basis, like a SaaS. These are our plans:";

// Pricing Card Component
function PricingCard({
  plan,
  index,
  onCtaClick,
  onIncludedClick,
}: {
  plan: PricingPlan;
  index: number;
  onCtaClick?: (planId: string) => void;
  onIncludedClick?: (planId: string) => void;
}) {
  const getCardStyles = () => {
    switch (plan.variant) {
      case "beige":
        return {
          background: "#E8DED0",
          border: "none",
        };
      case "gradient-pink":
        return {
          background:
            "linear-gradient(135deg, #F5E6E0 0%, #E8D4E8 25%, #D4E0F0 50%, #E0F0E8 75%, #F0F0E0 100%)",
          border: "none",
        };
      case "gradient-border":
        return {
          background:
            "linear-gradient(135deg, #E8E0F0 0%, #D8E8F0 25%, #E0F8F0 50%, #F0F0E0 75%, #F8E8E0 100%)",
          border: "2px solid rgba(255, 255, 255, 0.6)",
        };
      default:
        return {
          background: "#E8DED0",
          border: "none",
        };
    }
  };

  const styles = getCardStyles();
  const isFilledButton = plan.variant === "gradient-pink" || plan.variant === "gradient-border";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex h-full min-h-[280px] flex-col rounded-2xl p-6"
      style={{
        background: styles.background,
        border: styles.border,
      }}
    >
      {/* Plan Name - Serif font */}
      <h3 className="pricing-reversechaos-serif text-2xl font-normal italic text-black">
        {plan.name}
      </h3>

      {/* Description */}
      <p className="mt-2 text-xs leading-relaxed text-gray-700">{plan.description}</p>

      {/* Price */}
      <div className="mt-4">
        <span className="text-3xl font-light tracking-tight text-black">{plan.price}</span>
      </div>

      {/* Price Note */}
      <p className="mt-1 text-[10px] text-gray-600">{plan.priceNote}</p>

      {/* Spacer */}
      <div className="flex-1" />

      {/* What's included link */}
      {plan.includeLink && (
        <button
          onClick={() => onIncludedClick?.(plan.id)}
          className="mt-4 text-center text-xs text-gray-700 underline decoration-gray-400 underline-offset-2 transition-colors hover:text-black"
        >
          what&apos;s included?
        </button>
      )}

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onCtaClick?.(plan.id)}
        className={`mt-3 w-full rounded-full px-4 py-2.5 text-xs font-medium transition-all ${
          isFilledButton
            ? "bg-black text-white hover:bg-gray-800"
            : "border border-black bg-transparent text-black hover:bg-black/5"
        }`}
      >
        {plan.ctaText}
      </motion.button>
    </motion.div>
  );
}

// Main Component
export default function PricingReversechaos({
  mode = "light",
  headerText = defaultHeaderText,
  plans = defaultPlans,
  onCtaClick,
  onIncludedClick,
}: PricingReversechaosProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-4xl">
        {/* Header Text */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-base font-light leading-relaxed tracking-wide sm:text-lg"
          style={{ color: colors.headerText }}
        >
          {headerText}
        </motion.p>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              index={index}
              onCtaClick={onCtaClick}
              onIncludedClick={onIncludedClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
