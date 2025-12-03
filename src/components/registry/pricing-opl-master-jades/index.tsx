"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#22c55e", // 녹색 (버튼, 아이콘)
    accentHover: "#16a34a",
    background: "#000000",
    cardBackground: "#0d0d0d",
    cardBorder: "#1a1a1a",
    textPrimary: "#ffffff",
    textSecondary: "#9ca3af",
    textMuted: "#6b7280",
    badgeBg: "#14532d",
    badgeText: "#22c55e",
  },
  dark: {
    accent: "#22c55e",
    accentHover: "#16a34a",
    background: "#000000",
    cardBackground: "#0d0d0d",
    cardBorder: "#1a1a1a",
    textPrimary: "#ffffff",
    textSecondary: "#9ca3af",
    textMuted: "#6b7280",
    badgeBg: "#14532d",
    badgeText: "#22c55e",
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
import { Check, Layers, Zap } from "lucide-react";

// Types
interface PlanFeature {
  text: string;
  highlighted?: boolean;
}

interface PricingPlan {
  icon: "layers" | "zap";
  title: string;
  badge?: string;
  description: string;
  price: string;
  originalPrice?: string;
  priceLabel: string;
  features: PlanFeature[];
  ctaText: string;
  ctaVariant: "primary" | "outline";
  secondaryCta?: string;
}

interface PricingOplMasterJadesProps {
  mode?: "light" | "dark";
  heading?: string;
  plans?: PricingPlan[];
  customSection?: {
    title: string;
    description: string;
    ctaText: string;
  };
}

// Default data
const defaultPlans: PricingPlan[] = [
  {
    icon: "layers",
    title: "Product Design",
    description:
      "Perfect for startups who need to build their MVP\nor improve/elevate existing product.",
    price: "$3,995/m",
    priceLabel: "Every Step of the Way",
    features: [
      { text: "Sr.Product Designer+Design lead" },
      { text: "1-2 Requests at a time, Complexity-Based" },
      { text: "Average 48-Hour Delivery or Less" },
      { text: "A-sync communication + Weekly calls" },
      { text: "Unlimited Design Potential", highlighted: true },
      { text: "Ongoing Revisions & Refinement" },
      { text: "Priority support, Always" },
      { text: "Pause or Cancel anytime" },
    ],
    ctaText: "Get Started",
    ctaVariant: "primary",
    secondaryCta: "Limited availability",
  },
  {
    icon: "zap",
    title: "Brand Sprint",
    badge: "10-Day Turnaround",
    description:
      "Perfect for early-stage ventures ready to launch\nand get to the market fast.",
    price: "$5,499",
    originalPrice: "$8,999",
    priceLabel: "One-Time Investment",
    features: [
      { text: "10 Days to a World-Class Brand" },
      { text: "Effortless End-to-End Process" },
      { text: "Visualize with a Moodboard" },
      { text: "x2 Distinctive Logo Designs" },
      { text: "Typography & Color System" },
      { text: "Full Social Media Suite (LN, X, PH, FB)" },
      { text: "Homepage Design" },
      { text: "Exclusive Brand Book" },
    ],
    ctaText: "Get Started",
    ctaVariant: "primary",
    secondaryCta: "How it works?",
  },
];

const defaultCustomSection = {
  title: "Custom",
  description:
    "For projects that require a specialized touch, we extend a\nbespoke array of technical and creative services.",
  ctaText: "Get a Quote",
};

// Icon Component
function PlanIcon({
  type,
  colors,
}: {
  type: "layers" | "zap";
  colors: (typeof COLORS)["light"];
}) {
  const IconComponent = type === "layers" ? Layers : Zap;

  return (
    <div
      className="flex h-10 w-10 items-center justify-center rounded-lg"
      style={{ backgroundColor: colors.cardBorder }}
    >
      <IconComponent
        className="h-5 w-5"
        style={{ color: colors.accent }}
        strokeWidth={1.5}
      />
    </div>
  );
}

// Check Icon Component
function CheckIcon({ colors }: { colors: (typeof COLORS)["light"] }) {
  return (
    <div
      className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full"
      style={{ backgroundColor: `${colors.accent}20` }}
    >
      <Check
        className="h-2.5 w-2.5"
        style={{ color: colors.accent }}
        strokeWidth={3}
      />
    </div>
  );
}

// Badge Component
function Badge({
  text,
  colors,
}: {
  text: string;
  colors: (typeof COLORS)["light"];
}) {
  return (
    <span
      className="rounded px-2 py-0.5 text-[10px] font-medium"
      style={{
        backgroundColor: colors.badgeBg,
        color: colors.badgeText,
      }}
    >
      {text}
    </span>
  );
}

// Plan Card Component
function PlanCard({
  plan,
  colors,
  index,
}: {
  plan: PricingPlan;
  colors: (typeof COLORS)["light"];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex flex-col rounded-2xl border p-6 sm:p-8"
      style={{
        backgroundColor: colors.cardBackground,
        borderColor: colors.cardBorder,
      }}
    >
      {/* Header */}
      <div className="mb-4">
        <PlanIcon type={plan.icon} colors={colors} />
      </div>

      {/* Title with Badge */}
      <div className="mb-3 flex items-center gap-3">
        <h3
          className="text-lg font-semibold"
          style={{ color: colors.textPrimary }}
        >
          {plan.title}
        </h3>
        {plan.badge && <Badge text={plan.badge} colors={colors} />}
      </div>

      {/* Description */}
      <p
        className="mb-6 whitespace-pre-line text-sm leading-relaxed"
        style={{ color: colors.textSecondary }}
      >
        {plan.description}
      </p>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span
            className="text-3xl font-bold"
            style={{ color: colors.textPrimary }}
          >
            {plan.price}
          </span>
          {plan.originalPrice && (
            <span
              className="text-lg line-through"
              style={{ color: colors.textMuted }}
            >
              {plan.originalPrice}
            </span>
          )}
        </div>
        <p className="mt-1 text-xs" style={{ color: colors.textMuted }}>
          {plan.priceLabel}
        </p>
      </div>

      {/* Features */}
      <ul className="mb-8 flex-1 space-y-3">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <CheckIcon colors={colors} />
            <span
              className="text-sm"
              style={{ color: colors.textSecondary }}
            >
              {feature.text}
              {feature.highlighted && (
                <span className="ml-1 text-xs" style={{ color: colors.textMuted }}>
                  *
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Buttons */}
      <div className="flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-full px-6 py-2.5 text-sm font-medium transition-colors"
          style={
            plan.ctaVariant === "primary"
              ? {
                  backgroundColor: colors.accent,
                  color: "#000000",
                }
              : {
                  backgroundColor: "transparent",
                  color: colors.textPrimary,
                  border: `1px solid ${colors.cardBorder}`,
                }
          }
        >
          {plan.ctaText}
        </motion.button>
        {plan.secondaryCta && (
          plan.secondaryCta === "Limited availability" ? (
            <span
              className="text-xs"
              style={{ color: colors.textMuted }}
            >
              {plan.secondaryCta}
            </span>
          ) : (
            <button
              className="rounded-full border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
              style={{
                borderColor: colors.cardBorder,
                color: colors.textSecondary,
              }}
            >
              {plan.secondaryCta}
            </button>
          )
        )}
      </div>
    </motion.div>
  );
}

// Custom Section Component
function CustomSection({
  data,
  colors,
}: {
  data: typeof defaultCustomSection;
  colors: (typeof COLORS)["light"];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-6 flex flex-col items-start justify-between gap-6 rounded-2xl border p-6 sm:flex-row sm:items-center sm:p-8"
      style={{
        backgroundColor: colors.cardBackground,
        borderColor: colors.cardBorder,
      }}
    >
      <div>
        <h3
          className="mb-2 text-lg font-semibold"
          style={{ color: colors.textPrimary }}
        >
          {data.title}
        </h3>
        <p
          className="whitespace-pre-line text-sm leading-relaxed"
          style={{ color: colors.textSecondary }}
        >
          {data.description.split("services.")[0]}
          <span className="underline underline-offset-2">services</span>.
        </p>
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex-shrink-0 rounded-full border px-6 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
        style={{
          borderColor: colors.cardBorder,
          color: colors.textPrimary,
        }}
      >
        {data.ctaText}
      </motion.button>
    </motion.div>
  );
}

// Main Component
export default function PricingOplMasterJades({
  mode = "dark",
  heading = "Pricing",
  plans = defaultPlans,
  customSection = defaultCustomSection,
}: PricingOplMasterJadesProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 text-sm font-medium tracking-wide"
          style={{ color: colors.textMuted }}
        >
          {heading}
        </motion.p>

        {/* Pricing Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} colors={colors} index={index} />
          ))}
        </div>

        {/* Custom Section */}
        <CustomSection data={customSection} colors={colors} />
      </div>
    </section>
  );
}
