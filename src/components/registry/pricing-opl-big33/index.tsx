"use client";

// ============================================================================
// CUSTOMIZATION - Modify these values to customize the component
// ============================================================================

/**
 * Custom colors (brand colors)
 * - Price colors vary by tier
 * - CTA button: green accent
 */
const COLORS = {
  light: {
    // Price colors for each tier
    tier1Price: "#8CA3A6", // Muted teal/gray
    tier2Price: "#333333", // Dark gray/black
    tier3Price: "#1ABC9C", // Teal/turquoise (highlighted)
    tier4Price: "#E05A47", // Coral/red
    tier5Price: "#333333", // Dark gray/black
    // CTA button
    ctaBackground: "#4CAF50",
    ctaBackgroundHover: "#45A049",
    ctaText: "#FFFFFF",
    // Divider
    divider: "#E5E5E5",
    // Text colors
    labelText: "#999999",
  },
  dark: {
    tier1Price: "#A0B8BB",
    tier2Price: "#E0E0E0",
    tier3Price: "#2ED8B6",
    tier4Price: "#FF6B5B",
    tier5Price: "#E0E0E0",
    ctaBackground: "#66BB6A",
    ctaBackgroundHover: "#81C784",
    ctaText: "#FFFFFF",
    divider: "#444444",
    labelText: "#888888",
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
  price: string;
  period: string;
  contentBins: string;
  users: string;
  storage: string;
}

interface PricingOplBig33Props {
  mode?: "light" | "dark";
  tiers?: PricingTier[];
  ctaText?: string;
  ctaButtonText?: string;
  brandName?: string;
  onCtaClick?: () => void;
}

// Default pricing tiers based on the image
const defaultTiers: PricingTier[] = [
  {
    price: "$9",
    period: "/mo",
    contentBins: "2 Content Bins",
    users: "1 Users",
    storage: "1.0 GB Storage",
  },
  {
    price: "$29",
    period: "/mo",
    contentBins: "6 Content Bins",
    users: "5 Users",
    storage: "3.0 GB Storage",
  },
  {
    price: "$59",
    period: "/mo",
    contentBins: "12 Content Bins",
    users: "8 Users",
    storage: "6.0 GB Storage",
  },
  {
    price: "$99",
    period: "/mo",
    contentBins: "20 Content Bins",
    users: "12 Users",
    storage: "12.0 GB Storage",
  },
  {
    price: "$149",
    period: "/mo",
    contentBins: "30 Content Bins",
    users: "30 Users",
    storage: "20.0 GB Storage",
  },
];

// Color scheme type
type ColorScheme = (typeof COLORS)["light"] | (typeof COLORS)["dark"];

// Get price color based on tier index
function getPriceColor(index: number, colors: ColorScheme): string {
  const priceColors = [
    colors.tier1Price,
    colors.tier2Price,
    colors.tier3Price,
    colors.tier4Price,
    colors.tier5Price,
  ];
  return priceColors[index] || colors.tier2Price;
}

// Pricing Tier Column Component
function PricingTierColumn({
  tier,
  index,
  colors,
  isLast,
}: {
  tier: PricingTier;
  index: number;
  colors: ColorScheme;
  isLast: boolean;
}) {
  const priceColor = getPriceColor(index, colors);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="flex flex-1 flex-col items-center px-4 py-6 sm:px-6"
      style={{
        borderRight: isLast ? "none" : `1px solid ${colors.divider}`,
      }}
    >
      {/* Price */}
      <div className="mb-4 flex items-baseline">
        <span
          className="text-2xl font-normal sm:text-3xl"
          style={{ color: priceColor }}
        >
          {tier.price}
        </span>
        <span
          className="text-sm font-normal sm:text-base"
          style={{ color: priceColor }}
        >
          {tier.period}
        </span>
      </div>

      {/* Details */}
      <div className="flex flex-col items-center space-y-1 text-center">
        <span
          className="text-xs sm:text-sm"
          style={{ color: colors.labelText }}
        >
          {tier.contentBins}
        </span>
        <span
          className="text-xs sm:text-sm"
          style={{ color: colors.labelText }}
        >
          {tier.users}
        </span>
        <span
          className="text-xs sm:text-sm"
          style={{ color: colors.labelText }}
        >
          {tier.storage}
        </span>
      </div>
    </motion.div>
  );
}

// Main Component
export default function PricingOplBig33({
  mode = "light",
  tiers = defaultTiers,
  ctaText = "Try Osmek Free Today",
  ctaButtonText = "GET STARTED",
  brandName = "Osmek",
  onCtaClick,
}: PricingOplBig33Props) {
  const colors = COLORS[mode];

  return (
    <section
      className={`relative w-full ${
        mode === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Pricing Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`overflow-hidden rounded-lg border ${
            mode === "dark"
              ? "border-gray-700 bg-gray-800"
              : "border-gray-200 bg-white"
          }`}
        >
          {/* Tiers Row */}
          <div className="flex flex-col sm:flex-row">
            {tiers.map((tier, index) => (
              <PricingTierColumn
                key={index}
                tier={tier}
                index={index}
                colors={colors}
                isLast={index === tiers.length - 1}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-2"
        >
          <span
            className={`text-sm ${
              mode === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {ctaText} -
          </span>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onCtaClick}
            className="rounded px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-200"
            style={{
              backgroundColor: colors.ctaBackground,
              color: colors.ctaText,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.ctaBackgroundHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.ctaBackground;
            }}
          >
            {ctaButtonText}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
