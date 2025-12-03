"use client";

// ============================================================================
// CUSTOMIZATION - Modify these values to customize the component
// ============================================================================

/**
 * Custom colors (brand colors)
 * - Grayscale text uses Tailwind semantic colors (text-gray-900 etc.)
 * - Only brand-specific colors defined here
 */
const COLORS = {
  light: {
    // Coral button color
    buttonBg: "#DC7061",
    buttonBgHover: "#C85A4D",
    // Blue/teal price text
    priceText: "#5BA4BE",
    // Decoration line colors
    decoLine1: "#F7DED8", // coral/pink
    decoLine2: "#B8DDE8", // teal
    decoLine3: "#A8D5E2", // teal darker
    // Card background
    cardBg: "#FBFAF8",
    // Link color
    link: "#B8937A",
  },
  dark: {
    buttonBg: "#E07868",
    buttonBgHover: "#F08878",
    priceText: "#7BC4DE",
    decoLine1: "#D7AEA8",
    decoLine2: "#88ADC8",
    decoLine3: "#78A5B2",
    cardBg: "#1F1F1F",
    link: "#D8B39A",
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
  noteCount: number;
  originalPrice: number;
  discountedPrice: number;
  pricePerNote: string;
  buttonText: string;
}

interface PricingOplBig55Props {
  mode?: "light" | "dark";
  title?: string;
  description?: string;
  supportEmail?: string;
  tiers?: PricingTier[];
}

// Default pricing tiers based on the image
const defaultTiers: PricingTier[] = [
  {
    noteCount: 5,
    originalPrice: 5,
    discountedPrice: 25,
    pricePerNote: "$5 per note",
    buttonText: "SEND TODAY",
  },
  {
    noteCount: 10,
    originalPrice: 47,
    discountedPrice: 47,
    pricePerNote: "$4.70 per note",
    buttonText: "SEND TODAY",
  },
  {
    noteCount: 50,
    originalPrice: 460,
    discountedPrice: 230,
    pricePerNote: "$4.60 per note",
    buttonText: "SEND TODAY",
  },
  {
    noteCount: 100,
    originalPrice: 440,
    discountedPrice: 440,
    pricePerNote: "$4.40 per note",
    buttonText: "SEND TODAY",
  },
];

// Color type
type ColorScheme = {
  buttonBg: string;
  buttonBgHover: string;
  priceText: string;
  decoLine1: string;
  decoLine2: string;
  decoLine3: string;
  cardBg: string;
  link: string;
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex w-full max-w-[160px] flex-col items-center rounded-sm px-5 py-6 shadow-sm sm:max-w-[180px]"
      style={{ backgroundColor: colors.cardBg }}
    >
      {/* Note Count */}
      <h3 className="mb-1 text-center text-sm font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
        {tier.noteCount} NOTES
      </h3>

      {/* "for" text */}
      <span className="mb-3 text-xs text-gray-500 dark:text-gray-400">for</span>

      {/* Original Price (strikethrough) */}
      <div className="mb-1 flex items-center text-sm text-gray-400 line-through dark:text-gray-500">
        <span className="text-xs">$</span>
        <span>{tier.originalPrice}</span>
      </div>

      {/* Discounted Price */}
      <div className="mb-2 flex items-baseline">
        <span
          className="text-xl font-light"
          style={{ color: colors.priceText }}
        >
          $
        </span>
        <span
          className="text-5xl font-light tracking-tight"
          style={{ color: colors.priceText }}
        >
          {tier.discountedPrice}
        </span>
      </div>

      {/* Per Note Price */}
      <span className="mb-5 text-xs text-gray-500 dark:text-gray-400">
        {tier.pricePerNote}
      </span>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full rounded-full px-4 py-2 text-xs font-semibold tracking-wider text-white transition-colors duration-200"
        style={{ backgroundColor: colors.buttonBg }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = colors.buttonBgHover;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = colors.buttonBg;
        }}
      >
        {tier.buttonText}
      </motion.button>
    </motion.div>
  );
}

// Decoration Lines Component
function DecorationLines({
  colors,
}: {
  colors: ColorScheme;
}) {
  return (
    <div className="mb-6 flex items-center justify-center gap-1">
      <div
        className="h-[3px] w-5 rounded-full"
        style={{ backgroundColor: colors.decoLine1 }}
      />
      <div
        className="h-[3px] w-5 rounded-full"
        style={{ backgroundColor: colors.decoLine2 }}
      />
      <div
        className="h-[3px] w-5 rounded-full"
        style={{ backgroundColor: colors.decoLine3 }}
      />
    </div>
  );
}

// Main Component
export default function PricingOplBig55({
  mode = "light",
  title = "PRICING",
  description = "We offer a variety of note packages to get you started. The more notes you buy, the lower cost average per note. All of these note packages include our basic note - a 6\" x 4\" card placed in a horizontal kraft envelope with up to 50 words per note. If you're looking for orders larger than 1000 or including additional items, please e-mail us at",
  supportEmail = "support@thankbot.com",
  tiers = defaultTiers,
}: PricingOplBig55Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className={`relative w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 ${
        isDark ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          {/* Title */}
          <h2
            className={`mb-2 font-serif text-3xl font-normal tracking-wide sm:text-4xl ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            {title}
          </h2>

          {/* Decoration Lines */}
          <DecorationLines colors={colors} />

          {/* Description */}
          <p
            className={`mx-auto max-w-2xl text-sm leading-relaxed ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {description}{" "}
            <a
              href={`mailto:${supportEmail}`}
              className="underline transition-colors hover:opacity-80"
              style={{ color: colors.link }}
            >
              {supportEmail}
            </a>{" "}
            for custom pricing.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="flex flex-wrap items-stretch justify-center gap-4 sm:gap-5">
          {tiers.map((tier, index) => (
            <PricingCard
              key={tier.noteCount}
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
