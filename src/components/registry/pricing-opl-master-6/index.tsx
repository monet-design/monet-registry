"use client";

// ============================================================================
// CUSTOMIZATION - Modify these values to customize the component
// ============================================================================

/**
 * Custom colors (brand colors)
 * - grayscale text uses Tailwind semantic colors
 * - only brand-specific colors are defined here
 */
const COLORS = {
  light: {
    background: "#0E1122",
    cardBackground: "#141728",
    cardBorder: "#1E2138",
    accent: "#2158D4",
    accentHover: "#2B6BE8",
    headingText: "#FFFFFF",
    titleText: "#FFFFFF",
    descriptionText: "#8B8D98",
    priceText: "#FFFFFF",
    priceSubText: "#6B6D7A",
    checkColor: "#6B6D7A",
    featureText: "#9CA0AB",
    buttonText: "#FFFFFF",
  },
  dark: {
    background: "#0E1122",
    cardBackground: "#141728",
    cardBorder: "#1E2138",
    accent: "#2158D4",
    accentHover: "#2B6BE8",
    headingText: "#FFFFFF",
    titleText: "#FFFFFF",
    descriptionText: "#8B8D98",
    priceText: "#FFFFFF",
    priceSubText: "#6B6D7A",
    checkColor: "#6B6D7A",
    featureText: "#9CA0AB",
    buttonText: "#FFFFFF",
  },
} as const;

/**
 * Default content
 */
const DEFAULT_CONTENT = {
  heading: "Simple, transparent pricing.",
  plans: [
    {
      id: "unlimited",
      icon: "diamond" as const,
      title: "Unlimited UX",
      description: "When you need guaranteed access to our\ndesign team, on-demand.",
      features: [
        "Unlimited UX design",
        "Unlimited prototypes",
        "Unlimited revisions",
        "Pause or cancel anytime",
      ],
      price: "4,800",
      currency: "\u00A3",
      period: "/ month",
      priceNote: "ex. VAT",
      buttonText: "Get started",
    },
    {
      id: "oneoff",
      icon: "polygon" as const,
      title: "One-off project",
      description: "For projects with a fixed budget, timeline\nand scope.",
      features: [
        "We'll work out the scope together",
        "Design and optional development",
        "Clear milestones",
        "Regular updates and check-ins",
      ],
      price: "15k-\u00A375k",
      currency: "\u00A3",
      period: "",
      priceNote: "ex. VAT",
      buttonText: "Get started",
    },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check } from "lucide-react";

// Diamond Icon Component
function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main diamond shape with gradient facets */}
      <defs>
        <linearGradient id="diamondGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8C5D6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#6B7A8C" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="diamondGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8FA3B8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#4A5568" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="diamondGrad3" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#D1DAE5" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#7B8CA0" stopOpacity="0.75" />
        </linearGradient>
      </defs>
      {/* Top left facet */}
      <path d="M24 4L8 16L24 24V4Z" fill="url(#diamondGrad1)" />
      {/* Top right facet */}
      <path d="M24 4L40 16L24 24V4Z" fill="url(#diamondGrad3)" />
      {/* Bottom left facet */}
      <path d="M8 16L24 24L24 44L8 16Z" fill="url(#diamondGrad2)" />
      {/* Bottom right facet */}
      <path d="M40 16L24 24L24 44L40 16Z" fill="url(#diamondGrad1)" />
      {/* Edge highlights */}
      <path d="M24 4L8 16" stroke="#E2E8F0" strokeWidth="0.5" strokeOpacity="0.5" />
      <path d="M24 4L40 16" stroke="#E2E8F0" strokeWidth="0.5" strokeOpacity="0.5" />
      <path d="M24 24L24 44" stroke="#94A3B8" strokeWidth="0.5" strokeOpacity="0.3" />
    </svg>
  );
}

// Polygon Icon Component (abstract colorful shape)
function PolygonIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="polyGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#818CF8" />
        </linearGradient>
        <linearGradient id="polyGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#C084FC" />
        </linearGradient>
        <linearGradient id="polyGrad3" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#E879F9" />
        </linearGradient>
        <linearGradient id="polyGrad4" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
      {/* Abstract folded paper / origami shape */}
      <path d="M12 8L24 4L36 12L24 20L12 8Z" fill="url(#polyGrad4)" />
      <path d="M36 12L44 24L32 36L24 20L36 12Z" fill="url(#polyGrad1)" />
      <path d="M24 20L32 36L20 44L12 32L24 20Z" fill="url(#polyGrad2)" />
      <path d="M12 8L24 20L12 32L4 20L12 8Z" fill="url(#polyGrad3)" />
      {/* Subtle inner highlights */}
      <path d="M24 20L24 4" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.3" />
      <path d="M24 20L36 12" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.2" />
    </svg>
  );
}

interface PricingPlan {
  id: string;
  icon: "diamond" | "polygon";
  title: string;
  description: string;
  features: string[];
  price: string;
  currency: string;
  period: string;
  priceNote: string;
  buttonText: string;
}

interface PricingOplMaster6Props {
  mode?: "light" | "dark";
  heading?: string;
  plans?: PricingPlan[];
  onPlanSelect?: (planId: string) => void;
}

export default function PricingOplMaster6({
  mode = "dark",
  heading = DEFAULT_CONTENT.heading,
  plans = DEFAULT_CONTENT.plans,
  onPlanSelect,
}: PricingOplMaster6Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 px-4 sm:py-20 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-normal leading-tight mb-12 md:mb-16"
          style={{
            color: colors.headingText,
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontStyle: "italic",
          }}
        >
          {heading}
        </motion.h2>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full max-w-[360px] md:max-w-[340px] rounded-2xl p-6 md:p-8 flex flex-col"
              style={{
                backgroundColor: colors.cardBackground,
                border: `1px solid ${colors.cardBorder}`,
              }}
            >
              {/* Icon */}
              <div className="mb-5">
                {plan.icon === "diamond" ? (
                  <DiamondIcon className="w-10 h-10 md:w-12 md:h-12" />
                ) : (
                  <PolygonIcon className="w-10 h-10 md:w-12 md:h-12" />
                )}
              </div>

              {/* Plan Title */}
              <h3
                className="text-xl md:text-2xl font-semibold mb-2"
                style={{ color: colors.titleText }}
              >
                {plan.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed whitespace-pre-line mb-6"
                style={{ color: colors.descriptionText }}
              >
                {plan.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: colors.checkColor }}
                      strokeWidth={2}
                    />
                    <span
                      className="text-sm"
                      style={{ color: colors.featureText }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Price and CTA */}
              <div className="mt-auto">
                {/* Price */}
                <div className="flex items-baseline gap-2 mb-1">
                  <span
                    className="text-2xl md:text-3xl font-semibold"
                    style={{ color: colors.priceText }}
                  >
                    {plan.currency}{plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className="text-sm"
                      style={{ color: colors.priceSubText }}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
                <p
                  className="text-xs mb-5"
                  style={{ color: colors.priceSubText }}
                >
                  {plan.priceNote}
                </p>

                {/* CTA Button */}
                <button
                  onClick={() => onPlanSelect?.(plan.id)}
                  className="w-full py-3 px-6 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-90"
                  style={{
                    backgroundColor: colors.accent,
                    color: colors.buttonText,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.accentHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colors.accent;
                  }}
                >
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Font import for Instrument Serif */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&display=swap');
      `}</style>
    </section>
  );
}
