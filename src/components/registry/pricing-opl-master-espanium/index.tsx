"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F5F5F5",
    accent: "#3366EE",
    accentHover: "#2255DD",
    textPrimary: "#1A1A1A",
    textSecondary: "#666666",
    textMuted: "#999999",
    border: "#E0E0E0",
    watermark: "#E8E8E8",
  },
  dark: {
    background: "#1A1A1A",
    accent: "#5588FF",
    accentHover: "#4477EE",
    textPrimary: "#F5F5F5",
    textSecondary: "#AAAAAA",
    textMuted: "#777777",
    border: "#333333",
    watermark: "#2A2A2A",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  watermarkText: "bienvenido",
  title: {
    prefix: "Choose a rate that is ",
    highlight: "convenient",
    middle: " for you",
    suffix: " and start your quick\nmove to Spain",
  },
  plans: [
    {
      id: "standart",
      name: "Standart",
      badge: "rate N1",
      description: [
        "By choosing this package, you will prepare your own documents according to guides, instructions and recommendations.",
        "We will always be in touch, make a final check of your documents, submit them online and track the status of the application.",
      ],
      pricing: {
        mainApplicant: {
          label: "for the main applicant",
          price: "550",
          currency: "EUR",
        },
        familyMember: {
          label: "per family member",
          price: "350",
          currency: "EUR",
        },
      },
      buttonText: "Request advice",
    },
    {
      id: "all-inclusive",
      name: "All inclusive",
      badge: "rate N2",
      description: [
        "We will do everything we can to save you time and make the process of obtaining residency as comfortable as possible.",
        "You will receive full guidance and support at all stages of the residency process - for your peace of mind, confidence and convenience.",
      ],
      pricing: {
        mainApplicant: {
          label: "for the main applicant",
          price: "1800",
          currency: "EUR",
        },
        familyMember: {
          label: "per family member",
          price: "800",
          currency: "EUR",
        },
      },
      buttonText: "Request advice",
    },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface PricingItem {
  label: string;
  price: string;
  currency: string;
}

interface Plan {
  id: string;
  name: string;
  badge: string;
  description: string[];
  pricing: {
    mainApplicant: PricingItem;
    familyMember: PricingItem;
  };
  buttonText: string;
}

interface TitleContent {
  prefix: string;
  highlight: string;
  middle: string;
  suffix: string;
}

interface PricingOplMasterEspaniumProps {
  mode?: "light" | "dark";
  watermarkText?: string;
  title?: TitleContent;
  plans?: Plan[];
  onRequestAdvice?: (planId: string) => void;
}

// Pointing hand icon component
function PointingHandIcon({ color = "#3366EE" }: { color?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block ml-1"
    >
      <path
        d="M14 8V6a2 2 0 0 0-4 0v8l-2.5-2.5a2 2 0 0 0-2.83 2.83l4.58 4.58A4 4 0 0 0 12.07 21H16a4 4 0 0 0 4-4v-5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function PricingOplMasterEspanium({
  mode = "light",
  watermarkText = DEFAULT_CONTENT.watermarkText,
  title = DEFAULT_CONTENT.title,
  plans = DEFAULT_CONTENT.plans,
  onRequestAdvice,
}: PricingOplMasterEspaniumProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Watermark */}
      <motion.div
        className="absolute top-4 left-0 right-0 text-center pointer-events-none select-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span
          className="text-[80px] md:text-[120px] lg:text-[160px] font-serif italic tracking-wide"
          style={{ color: colors.watermark }}
        >
          {watermarkText}
        </span>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Title */}
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-16"
          style={{ color: colors.textPrimary }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title.prefix}
          <span style={{ color: colors.accent }}>{title.highlight}</span>
          {title.middle}
          <PointingHandIcon color={colors.accent} />
          <span className="whitespace-pre-line">{title.suffix}</span>
        </motion.h1>

        {/* Plans */}
        <div className="space-y-0">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className="border-t py-10"
              style={{ borderColor: colors.border }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Plan Name & Badge */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h2
                      className="text-2xl md:text-3xl font-serif"
                      style={{ color: colors.textPrimary }}
                    >
                      {plan.name}
                    </h2>
                  </div>
                  <span
                    className="inline-block px-3 py-1 text-xs font-medium rounded-full text-white"
                    style={{ backgroundColor: colors.accent }}
                  >
                    {plan.badge}
                  </span>
                </div>

                {/* Description */}
                <div className="lg:col-span-5 space-y-4">
                  {plan.description.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-sm leading-relaxed"
                      style={{ color: colors.textSecondary }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Pricing & Button */}
                <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-4">
                  {/* Main Applicant */}
                  <div className="flex items-baseline gap-4">
                    <span
                      className="text-sm"
                      style={{ color: colors.textMuted }}
                    >
                      {plan.pricing.mainApplicant.label}
                    </span>
                    <span
                      className="text-2xl md:text-3xl font-bold"
                      style={{ color: colors.textPrimary }}
                    >
                      {plan.pricing.mainApplicant.price}
                      {plan.pricing.mainApplicant.currency}
                    </span>
                  </div>

                  {/* Family Member */}
                  <div className="flex items-baseline gap-4">
                    <span
                      className="text-sm"
                      style={{ color: colors.textMuted }}
                    >
                      {plan.pricing.familyMember.label}
                    </span>
                    <span
                      className="text-2xl md:text-3xl font-bold"
                      style={{ color: colors.textPrimary }}
                    >
                      {plan.pricing.familyMember.price}
                      {plan.pricing.familyMember.currency}
                    </span>
                  </div>

                  {/* Button */}
                  <motion.button
                    className="mt-4 px-6 py-2 text-sm font-medium rounded-full border transition-colors"
                    style={{
                      borderColor: colors.textSecondary,
                      color: colors.textSecondary,
                      backgroundColor: "transparent",
                    }}
                    whileHover={{
                      borderColor: colors.accent,
                      color: colors.accent,
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onRequestAdvice?.(plan.id)}
                  >
                    {plan.buttonText}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
