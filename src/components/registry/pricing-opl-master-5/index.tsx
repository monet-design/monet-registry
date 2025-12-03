"use client";

// ============================================================================
// CUSTOMIZATION - Modify these values to customize the component
// ============================================================================

/**
 * Custom colors (brand colors)
 * - grayscale text uses Tailwind semantic colors (text-gray-900, etc.)
 * - only brand-specific colors are defined here
 */
const COLORS = {
  light: {
    accent: "#3AA3ED",
    accentHover: "#2B8FD9",
    priceText: "#3AA3ED",
  },
  dark: {
    accent: "#60A5FA",
    accentHover: "#3B82F6",
    priceText: "#60A5FA",
  },
} as const;

/**
 * Image assets
 */
const IMAGES = {
  singleLicense: {
    path: "/registry/pricing-opl-master-5/single-license.png",
    alt: "Single license illustration with laptop and character",
  },
  teamLicense: {
    path: "/registry/pricing-opl-master-5/team-license.png",
    alt: "Team license illustration with multiple characters collaborating",
  },
} as const;

/**
 * Default content
 */
const DEFAULT_CONTENT = {
  heading: "Start creating awesome mesh\ngradients in minutes",
  plans: [
    {
      id: "single",
      title: "Single license",
      price: "$9.99",
      priceLabel: "for",
      description: "A single license for a\nsingle device.",
      buttonText: "I want a single license",
      variant: "filled" as const,
      image: IMAGES.singleLicense,
    },
    {
      id: "team",
      title: "Team license",
      price: "$39.99",
      priceLabel: "for",
      description: "A shared license for the\nteam, no matter how big it is.",
      buttonText: "Get a team license",
      variant: "outlined" as const,
      image: IMAGES.teamLicense,
    },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface PricingPlan {
  id: string;
  title: string;
  price: string;
  priceLabel: string;
  description: string;
  buttonText: string;
  variant: "filled" | "outlined";
  image: {
    path: string;
    alt: string;
  };
}

interface PricingOplMaster5Props {
  mode?: "light" | "dark";
  heading?: string;
  plans?: PricingPlan[];
  onPlanSelect?: (planId: string) => void;
}

export default function PricingOplMaster5({
  mode = "light",
  heading = DEFAULT_CONTENT.heading,
  plans = DEFAULT_CONTENT.plans,
  onPlanSelect,
}: PricingOplMaster5Props) {
  const colors = COLORS[mode];

  return (
    <section
      className={`relative w-full py-16 px-4 sm:py-20 md:py-24 ${
        mode === "dark" ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-center text-2xl sm:text-3xl md:text-4xl font-bold leading-tight whitespace-pre-line mb-12 md:mb-16 ${
            mode === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          {heading}
        </motion.h2>

        {/* Pricing Cards */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`w-full max-w-[280px] rounded-2xl p-6 pb-8 ${
                mode === "dark"
                  ? "bg-gray-900 shadow-xl shadow-black/20"
                  : "bg-white shadow-lg shadow-gray-200/60"
              }`}
            >
              {/* Illustration */}
              <div className="relative h-24 w-full mb-4">
                <Image
                  src={plan.image.path}
                  alt={plan.image.alt}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Plan Title */}
              <h3
                className={`text-xl font-bold mb-2 ${
                  mode === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.title}
              </h3>

              {/* Price */}
              <p
                className="text-base mb-4"
                style={{ color: colors.priceText }}
              >
                {plan.priceLabel} {plan.price}
              </p>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed whitespace-pre-line mb-6 ${
                  mode === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {plan.description}
              </p>

              {/* CTA Button */}
              <button
                onClick={() => onPlanSelect?.(plan.id)}
                className={`w-full py-3 px-6 rounded-full text-sm font-medium transition-all duration-200 ${
                  plan.variant === "filled"
                    ? "text-white hover:opacity-90"
                    : "bg-transparent border-2 hover:bg-opacity-10"
                }`}
                style={
                  plan.variant === "filled"
                    ? { backgroundColor: colors.accent }
                    : {
                        borderColor: colors.accent,
                        color: colors.accent,
                      }
                }
                onMouseEnter={(e) => {
                  if (plan.variant === "filled") {
                    e.currentTarget.style.backgroundColor = colors.accentHover;
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.variant === "filled") {
                    e.currentTarget.style.backgroundColor = colors.accent;
                  }
                }}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
