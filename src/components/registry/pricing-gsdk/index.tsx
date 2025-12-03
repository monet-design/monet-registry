"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#FFFFFF",
  accent: "#F5A623",
  accentHover: "#E09515",
  titleText: "#333333",
  subtitleText: "#999999",
  featureText: "#666666",
  plusFeatureText: "#F5A623",
  cardBackground: "#F8F8F8",
  borderColor: "#F5A623",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface PricingFeature {
  text: string;
  isPlus?: boolean;
}

interface PricingPlan {
  title: string;
  price: number;
  currency?: string;
  features: PricingFeature[];
  isPrimary?: boolean;
  buttonText?: string;
}

interface PricingGsdkProps {
  headline?: string;
  subheadline?: string;
  plans?: PricingPlan[];
  paymentMethods?: string[];
  paymentMethodsLabel?: string;
}

const defaultPlans: PricingPlan[] = [
  {
    title: "For Coders",
    price: 39,
    currency: "$",
    features: [
      { text: "HTML/CSS/JS Files" },
      { text: "SASS and LESS Files" },
      { text: "All components" },
      { text: "Responsive Design" },
      { text: "Documentation" },
      { text: "New Icons Font" },
    ],
    isPrimary: false,
    buttonText: "Buy now!",
  },
  {
    title: "For Professional Front-Enders",
    price: 69,
    currency: "$",
    features: [
      { text: "SASS/LESS Files" },
      { text: "All Components" },
      { text: "Responsive Design" },
      { text: "Documentation" },
      { text: "New Icons Font" },
      { text: "+ Photoshop PSD Files", isPlus: true },
      { text: "+ All Components on Layers", isPlus: true },
      { text: "+ Swatch Colors & Gradients", isPlus: true },
    ],
    isPrimary: true,
    buttonText: "Buy now!",
  },
];

function PricingCard({
  plan,
  delay = 0,
}: {
  plan: PricingPlan;
  delay?: number;
}) {
  const currency = plan.currency || "$";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center px-6 py-8 md:px-10"
      style={{
        backgroundColor: plan.isPrimary ? COLORS.cardBackground : "transparent",
      }}
    >
      {/* Plan Title with Price */}
      <h3
        className="text-center text-base font-semibold md:text-lg"
        style={{ color: COLORS.titleText }}
      >
        {plan.title} - {currency}
        {plan.price}
      </h3>

      {/* Features List */}
      <ul className="mt-6 space-y-2 text-center">
        {plan.features.map((feature, index) => (
          <li
            key={index}
            className="text-sm"
            style={{
              color: feature.isPlus ? COLORS.plusFeatureText : COLORS.featureText,
            }}
          >
            {feature.text}
          </li>
        ))}
      </ul>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-8 cursor-pointer rounded px-10 py-2.5 text-sm font-medium transition-colors"
        style={
          plan.isPrimary
            ? {
                backgroundColor: COLORS.accent,
                color: "#FFFFFF",
              }
            : {
                backgroundColor: "transparent",
                border: `1px solid ${COLORS.borderColor}`,
                color: COLORS.accent,
              }
        }
        onMouseEnter={(e) => {
          if (plan.isPrimary) {
            e.currentTarget.style.backgroundColor = COLORS.accentHover;
          }
        }}
        onMouseLeave={(e) => {
          if (plan.isPrimary) {
            e.currentTarget.style.backgroundColor = COLORS.accent;
          }
        }}
      >
        {plan.buttonText}
      </motion.button>
    </motion.div>
  );
}

function PaymentIcon({ type }: { type: string }) {
  const iconStyles =
    "h-6 w-10 flex items-center justify-center rounded text-xs font-bold";

  switch (type.toLowerCase()) {
    case "paypal":
      return (
        <div className={iconStyles} style={{ backgroundColor: "#003087", color: "#FFFFFF" }}>
          <span className="text-[10px]">PayPal</span>
        </div>
      );
    case "visa":
      return (
        <div className={iconStyles} style={{ backgroundColor: "#1A1F71", color: "#FFFFFF" }}>
          <span className="text-[10px]">VISA</span>
        </div>
      );
    case "mastercard":
      return (
        <div className={iconStyles} style={{ backgroundColor: "#EB001B", color: "#FFFFFF" }}>
          <span className="text-[10px]">MC</span>
        </div>
      );
    case "amex":
      return (
        <div className={iconStyles} style={{ backgroundColor: "#006FCF", color: "#FFFFFF" }}>
          <span className="text-[10px]">AMEX</span>
        </div>
      );
    default:
      return (
        <div className={iconStyles} style={{ backgroundColor: "#666666", color: "#FFFFFF" }}>
          <span className="text-[10px]">{type.slice(0, 4)}</span>
        </div>
      );
  }
}

export default function PricingGsdk({
  headline = "Get started with Get Shit Done Pro Kit!",
  subheadline = "Forever updates and premium support on all packages.",
  plans = defaultPlans,
  paymentMethods = ["paypal", "visa", "mastercard", "amex"],
  paymentMethodsLabel = "Payment methods:",
}: PricingGsdkProps) {
  return (
    <section
      className="relative w-full px-4 py-12 md:px-8 md:py-16"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2
            className="text-2xl font-semibold md:text-3xl"
            style={{ color: COLORS.titleText }}
          >
            {headline}
          </h2>
          <p
            className="mt-2 text-sm md:text-base"
            style={{ color: COLORS.subtitleText }}
          >
            {subheadline}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
          {plans.map((plan, index) => (
            <PricingCard key={plan.title} plan={plan} delay={0.1 + index * 0.1} />
          ))}
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <span className="text-sm" style={{ color: COLORS.featureText }}>
            {paymentMethodsLabel}
          </span>
          <div className="flex gap-2">
            {paymentMethods.map((method) => (
              <PaymentIcon key={method} type={method} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
