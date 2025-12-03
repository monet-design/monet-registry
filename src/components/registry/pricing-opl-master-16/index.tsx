"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F8F4F1",
    accent: "#E98E84",
    accentHover: "#D97970",
    cardBackground: "#FFFFFF",
    titleText: "#E98E84",
    headingText: "#4A4A4A",
    bodyText: "#6B6B6B",
    mutedText: "#9A9A9A",
    outlineBorder: "#F6E6E2",
  },
  dark: {
    background: "#1C1917",
    accent: "#E98E84",
    accentHover: "#F5A49A",
    cardBackground: "#292524",
    titleText: "#E98E84",
    headingText: "#F5F5F4",
    bodyText: "#A8A29E",
    mutedText: "#78716C",
    outlineBorder: "#44403C",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import "./font.css";

interface PricingPlan {
  title: string;
  description: string;
  price: string;
  priceNote?: string;
  variant: "primary" | "outline";
}

interface PricingOplMaster16Props {
  mode?: "light" | "dark";
  sectionTitle?: string;
  plans?: PricingPlan[];
  footerLink?: {
    text: string;
    href: string;
  };
}

const defaultPlans: PricingPlan[] = [
  {
    title: "The Handy\nFonts Pack",
    description:
      "Includes royalty-free use of the fonts in an unlimited number of personal or commercial projects",
    price: "$29",
    priceNote: "Price excluding any sales tax",
    variant: "primary",
  },
  {
    title: "The Handy\nFonts Club",
    description:
      "Immediate access to existing fonts and any new fonts \u2014 one new font arriving every month",
    price: "$79/year",
    priceNote: "Price excluding any sales tax",
    variant: "outline",
  },
];

// Pointing hand emoji component
function PointingHand({ direction }: { direction: "left" | "right" }) {
  return (
    <span
      className="inline-block text-lg"
      style={{
        transform: direction === "left" ? "scaleX(-1)" : "none",
      }}
    >
      {direction === "left" ? "\u{1F449}" : "\u{1F448}"}
    </span>
  );
}

type ColorScheme = {
  background: string;
  accent: string;
  accentHover: string;
  cardBackground: string;
  titleText: string;
  headingText: string;
  bodyText: string;
  mutedText: string;
  outlineBorder: string;
};

// Pricing Card Component
function PricingCard({
  plan,
  colors,
  index,
}: {
  plan: PricingPlan;
  colors: ColorScheme;
  index: number;
}) {
  const isPrimary = plan.variant === "primary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex w-full max-w-[280px] flex-col rounded-lg p-6 shadow-sm"
      style={{
        backgroundColor: colors.cardBackground,
      }}
    >
      {/* Card Title */}
      <h3
        className="pricing-opl-master-16-serif mb-4 text-2xl italic leading-tight"
        style={{ color: colors.headingText }}
      >
        {plan.title.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i < plan.title.split("\n").length - 1 && <br />}
          </span>
        ))}
      </h3>

      {/* Description */}
      <p
        className="mb-6 flex-1 text-sm leading-relaxed"
        style={{ color: colors.bodyText }}
      >
        {plan.description}
      </p>

      {/* Price Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mb-3 w-full rounded-full py-3 text-sm font-medium transition-colors"
        style={
          isPrimary
            ? {
                backgroundColor: colors.accent,
                color: "#FFFFFF",
              }
            : {
                backgroundColor: "transparent",
                color: colors.accent,
                border: `1px solid ${colors.outlineBorder}`,
              }
        }
      >
        {plan.price}
      </motion.button>

      {/* Price Note */}
      {plan.priceNote && (
        <p
          className="text-center text-xs"
          style={{ color: colors.mutedText }}
        >
          {plan.priceNote}
        </p>
      )}
    </motion.div>
  );
}

export default function PricingOplMaster16({
  mode = "light",
  sectionTitle = "Buy the fonts",
  plans = defaultPlans,
  footerLink = {
    text: "or purchase fonts individually",
    href: "#",
  },
}: PricingOplMaster16Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full px-4 py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-3xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-center justify-center gap-2"
        >
          <PointingHand direction="left" />
          <h2
            className="pricing-opl-master-16-serif text-lg italic tracking-wide"
            style={{ color: colors.titleText }}
          >
            {sectionTitle}
          </h2>
          <PointingHand direction="right" />
        </motion.div>

        {/* Pricing Cards */}
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              colors={colors}
              index={index}
            />
          ))}
        </div>

        {/* Footer Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href={footerLink.href}
            className="text-sm underline transition-colors hover:opacity-80"
            style={{ color: colors.accent }}
          >
            {footerLink.text}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
