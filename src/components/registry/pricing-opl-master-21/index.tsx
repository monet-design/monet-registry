"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#736EF4",
    accentHover: "#5B56E0",
    badge: "#6AD09E",
    cardBg: "#F5F5F5",
    premiumBg: "#EFEDFE",
  },
  dark: {
    accent: "#8B87F7",
    accentHover: "#736EF4",
    badge: "#7EDAB0",
    cardBg: "#2A2A2E",
    premiumBg: "#2D2B4A",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Sparkles, Star, Plus } from "lucide-react";

// Starburst Badge Component
function StarburstBadge({
  children,
  color,
  rotation = -15
}: {
  children: React.ReactNode;
  color: string;
  rotation?: number;
}) {
  const points = 16;
  const outerRadius = 50;
  const innerRadius = 38;

  const pathData = Array.from({ length: points * 2 }, (_, i) => {
    const angle = (i * Math.PI) / points - Math.PI / 2;
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ') + ' Z';

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: 90,
        height: 90,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
      >
        <path d={pathData} fill={color} />
      </svg>
      <span
        className="relative z-10 text-white text-[11px] font-semibold text-center leading-tight"
        style={{ transform: `rotate(${-rotation + 5}deg)` }}
      >
        {children}
      </span>
    </div>
  );
}

// Feature Item Component
function FeatureItem({
  icon: Icon,
  children,
  accentColor,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
  accentColor: string;
}) {
  return (
    <div className="flex items-start gap-2">
      <Icon
        className="w-4 h-4 flex-shrink-0 mt-0.5"
        style={{ color: accentColor }}
        strokeWidth={2.5}
      />
      <span className="text-sm text-gray-700 dark:text-gray-300 leading-snug">
        {children}
      </span>
    </div>
  );
}

interface PricingOplMaster21Props {
  mode?: "light" | "dark";
  title?: string;
  freePlanName?: string;
  freeFeatures?: string;
  premiumFeatures?: string[];
  ctaText?: string;
  badgeText?: string;
  onCtaClick?: () => void;
}

export default function PricingOplMaster21({
  mode = "light",
  title = "Pricing",
  freePlanName = "Free",
  freeFeatures = "Connect banks,\norganize transactions,\nassign categories.",
  premiumFeatures = [
    "Unlimited transaction\nexports for life",
    "early access to 3vit",
    "if not satisfied—refund\nwith no questions asked",
  ],
  ctaText = "Get lifetime $39",
  badgeText = "Limited\ntime offer",
  onCtaClick,
}: PricingOplMaster21Props) {
  const colors = COLORS[mode];

  const featureIcons = [Sparkles, Star, Plus];

  return (
    <section className="relative w-full bg-white dark:bg-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-serif italic text-gray-900 dark:text-white tracking-tight"
          >
            {title}
          </motion.h2>

          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative flex-1 w-full max-w-sm"
          >
            {/* Badge */}
            <div className="absolute -left-6 top-12 z-10">
              <StarburstBadge color={colors.badge} rotation={-15}>
                {badgeText}
              </StarburstBadge>
            </div>

            {/* Card */}
            <div className="overflow-hidden rounded-2xl shadow-lg">
              {/* Free Section */}
              <div
                className="p-5 pb-4"
                style={{ backgroundColor: colors.cardBg }}
              >
                <div className="flex items-start gap-6">
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    {freePlanName}
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                    {freeFeatures}
                  </p>
                </div>
              </div>

              {/* Premium Section */}
              <div
                className="p-5 pt-4 space-y-3"
                style={{ backgroundColor: colors.premiumBg }}
              >
                {premiumFeatures.map((feature, index) => (
                  <FeatureItem
                    key={index}
                    icon={featureIcons[index % featureIcons.length]}
                    accentColor={colors.accent}
                  >
                    <span className="whitespace-pre-line">{feature}</span>
                  </FeatureItem>
                ))}

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onCtaClick}
                  className="w-full mt-4 py-3.5 px-6 rounded-xl text-white font-medium text-lg transition-colors"
                  style={{ backgroundColor: colors.accent }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.accentHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colors.accent;
                  }}
                >
                  {ctaText}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
