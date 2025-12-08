"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#1A1A1A",
    cardBg: "#242424",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
    checkmark: "#10B981",
    crossmark: "#6B7280",
  },
  dark: {
    background: "#1A1A1A",
    cardBg: "#242424",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
    checkmark: "#10B981",
    crossmark: "#6B7280",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, X, ArrowRight } from "lucide-react";
import { useState } from "react";

interface PricingPlan {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: Array<{
    text: string;
    included: boolean;
    highlight?: boolean;
  }>;
  ctaText: string;
  ctaHref: string;
  popular?: boolean;
}

interface DatafaStPricing8Props {
  mode?: "light" | "dark";
  headline?: string;
  eventLabel?: string;
  plans?: PricingPlan[];
  userCount?: string;
}

const defaultPlans: PricingPlan[] = [
  {
    name: "STARTER",
    price: { monthly: 9, yearly: 7 },
    features: [
      { text: "10k monthly events", included: true, highlight: true },
      { text: "1 website", included: true },
      { text: "1 team member", included: true },
      { text: "3 years of data retention", included: true },
      { text: "Mentions and link attribution for X", included: false },
    ],
    ctaText: "Start 14-day free trial",
    ctaHref: "#",
  },
  {
    name: "GROWTH",
    price: { monthly: 19, yearly: 15 },
    features: [
      { text: "10k monthly events", included: true, highlight: true },
      { text: "30 websites", included: true },
      { text: "30 team members", included: true },
      { text: "5+ years of data retention", included: true },
      { text: "Mentions and link attribution for X", included: true, highlight: true },
    ],
    ctaText: "Start 14-day free trial",
    ctaHref: "#",
    popular: true,
  },
];

export default function DatafaStPricing8({
  mode = "dark",
  headline = "Traffic-based plans to match your growth",
  eventLabel = "Up to 10k monthly events",
  plans = defaultPlans,
  userCount = "10,546",
}: DatafaStPricing8Props) {
  const colors = COLORS[mode];
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-5xl px-4">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center text-3xl font-bold md:text-4xl"
          style={{ color: colors.textPrimary }}
        >
          {headline}
        </motion.h2>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between"
        >
          {/* Event Label */}
          <div className="rounded-full border border-gray-600 px-4 py-2 text-sm text-gray-300">
            {eventLabel}
          </div>

          {/* Slider placeholder */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">10k</span>
            <div className="h-1 w-32 rounded-full bg-gray-700">
              <div className="h-1 w-4 rounded-full bg-gray-500" />
            </div>
            <span className="text-xs text-gray-500">10M+</span>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-sm italic text-orange-400">2 months free</span>
            <div className="flex rounded-lg bg-gray-800 p-1">
              <button
                onClick={() => setIsYearly(false)}
                className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
                  !isYearly ? "bg-gray-700 text-white" : "text-gray-400"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
                  isYearly ? "bg-gray-700 text-white" : "text-gray-400"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="rounded-xl border border-gray-700/50 p-6"
              style={{ backgroundColor: colors.cardBg }}
            >
              {/* Plan Name */}
              <div
                className="mb-4 text-sm font-medium tracking-wider"
                style={{ color: colors.textSecondary }}
              >
                {plan.name}
              </div>

              {/* Price */}
              <div className="mb-6 flex items-baseline">
                <span
                  className="text-4xl font-bold"
                  style={{ color: colors.textPrimary }}
                >
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className="ml-1" style={{ color: colors.textSecondary }}>
                  /month
                </span>
              </div>

              {/* Features */}
              <ul className="mb-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {feature.included ? (
                      <Check
                        className="h-4 w-4"
                        style={{ color: colors.checkmark }}
                      />
                    ) : (
                      <X className="h-4 w-4" style={{ color: colors.crossmark }} />
                    )}
                    <span
                      className={feature.highlight ? "border-b border-dashed border-gray-500" : ""}
                      style={{
                        color: feature.included
                          ? colors.textPrimary
                          : colors.textSecondary,
                      }}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.ctaHref}
                className="mb-2 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: colors.accent }}
              >
                {plan.ctaText}
                <ArrowRight className="h-4 w-4" />
              </a>
              <p
                className="text-center text-sm"
                style={{ color: colors.textSecondary }}
              >
                $0.00 due today. No card required.
              </p>
            </motion.div>
          ))}
        </div>

        {/* User Count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex -space-x-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-9 w-9 overflow-hidden rounded-full border-2 border-gray-800 bg-gray-600"
              >
                <div className="h-full w-full bg-gradient-to-br from-gray-400 to-gray-600" />
              </div>
            ))}
          </div>
          <p className="text-base" style={{ color: colors.textSecondary }}>
            Loved by <span className="font-medium text-white">{userCount}</span>{" "}
            users
          </p>
        </motion.div>
      </div>
    </section>
  );
}
