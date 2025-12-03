"use client";

// ============================================================================
// CUSTOMIZATION - Modify these values to customize the component
// ============================================================================

/**
 * Custom colors (brand colors)
 * - Gradient background: teal to blue diagonal
 * - Button border: teal accent
 */
const COLORS = {
  light: {
    gradientFrom: "#89BFC6",
    gradientTo: "#5286BC",
    buttonBorder: "#7EB8C2",
    buttonBorderHover: "#5BA3B0",
    buttonText: "#5A9AA8",
    buttonTextHover: "#4A8A98",
  },
  dark: {
    gradientFrom: "#5A8A92",
    gradientTo: "#3A5A7A",
    buttonBorder: "#6AA8B2",
    buttonBorderHover: "#7AB8C2",
    buttonText: "#7AB8C2",
    buttonTextHover: "#8AC8D2",
  },
} as const;

/**
 * Image assets - none required for this component
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

// Types
interface PricingTier {
  name: string;
  features: string[];
  price: string;
  currency: string;
  period: string;
  buttonText: string;
}

interface PricingOplBig22Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  tiers?: PricingTier[];
}

// Default pricing tiers based on the image
const defaultTiers: PricingTier[] = [
  {
    name: "Bronze",
    features: [
      "bis 10 Konten",
      "50GB Speicher",
      "E-Mail Backup",
      "Outlook Plugin",
      "Web Access",
    ],
    price: "60",
    currency: "\u20AC",
    period: "Monat",
    buttonText: "ANFRAGEN",
  },
  {
    name: "Silber",
    features: [
      "bis 20 Konten",
      "100GB Speicher",
      "E-Mail Backup",
      "Outlook Plugin",
      "Web Access",
    ],
    price: "110",
    currency: "\u20AC",
    period: "Monat",
    buttonText: "ANFRAGEN",
  },
  {
    name: "Gold",
    features: [
      "bis 50 Konten",
      "250GB Speicher",
      "E-Mail Backup",
      "Outlook Plugin",
      "Web Access",
    ],
    price: "230",
    currency: "\u20AC",
    period: "Monat",
    buttonText: "ANFRAGEN",
  },
  {
    name: "Platin",
    features: [
      "bis 100 Konten",
      "500GB Speicher",
      "E-Mail Backup",
      "Outlook Plugin",
      "Web Access",
    ],
    price: "350",
    currency: "\u20AC",
    period: "Monat",
    buttonText: "ANFRAGEN",
  },
];

// Color type
type ColorScheme = {
  gradientFrom: string;
  gradientTo: string;
  buttonBorder: string;
  buttonBorderHover: string;
  buttonText: string;
  buttonTextHover: string;
};

// Pricing Card Component
function PricingCard({
  tier,
  colors,
  index,
}: {
  tier: PricingTier;
  colors: ColorScheme;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex w-full max-w-[200px] flex-col rounded-lg bg-white px-6 py-8 shadow-lg"
    >
      {/* Tier Name */}
      <h3 className="mb-6 text-center text-base font-semibold text-gray-800">
        {tier.name}
      </h3>

      {/* Features List */}
      <ul className="mb-6 flex-1 space-y-3">
        {tier.features.map((feature, idx) => (
          <li
            key={idx}
            className="text-center text-xs text-gray-500"
          >
            {feature}
          </li>
        ))}
      </ul>

      {/* Price */}
      <div className="mb-5 text-center">
        <span className="text-xl font-bold text-gray-800">
          {tier.price}
          {tier.currency}
        </span>
        <span className="ml-1 text-sm font-normal text-gray-600">
          / {tier.period}
        </span>
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full rounded-full border-2 bg-transparent px-4 py-2 text-xs font-semibold tracking-wider transition-colors duration-200"
        style={{
          borderColor: colors.buttonBorder,
          color: colors.buttonText,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = colors.buttonBorderHover;
          e.currentTarget.style.color = colors.buttonTextHover;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = colors.buttonBorder;
          e.currentTarget.style.color = colors.buttonText;
        }}
      >
        {tier.buttonText}
      </motion.button>
    </motion.div>
  );
}

// Main Component
export default function PricingOplBig22({
  mode = "light",
  title = "Preise und Kosten",
  subtitle = "Wahlen Sie aus unseren Mailarchiv Paketen. Sollten Sie sich dort nicht\nwiederfinden, erstellen wir Ihnen gerne ein individuelles Angebot.",
  tiers = defaultTiers,
}: PricingOplBig22Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{
        background: `linear-gradient(135deg, ${colors.gradientFrom} 0%, ${colors.gradientTo} 100%)`,
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 sm:text-3xl">
            {title}
          </h2>
          <p className="mx-auto max-w-xl whitespace-pre-line text-sm text-gray-600">
            {subtitle}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="flex flex-wrap items-stretch justify-center gap-5">
          {tiers.map((tier, index) => (
            <PricingCard
              key={tier.name}
              tier={tier}
              colors={colors}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
