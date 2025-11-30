"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  originalMonthlyPrice?: number;
  originalYearlyPrice?: number;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
}

interface RysaPricingProps {
  title?: string;
  subtitle?: string;
  plans?: PricingPlan[];
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaButtonText?: string;
  onCtaClick?: () => void;
}

const defaultPlans: PricingPlan[] = [
  {
    id: "free",
    name: "TRY RYSA",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Get a feel for your wardrobe's potential.",
    features: [
      { text: "Upload up to 15 items" },
      { text: "Create looks manually" },
      { text: "Access pay-as-you-go personal stylist services" },
    ],
  },
  {
    id: "stylist",
    name: "STYLIST ACCESS",
    monthlyPrice: 18.79,
    yearlyPrice: 14.99,
    originalMonthlyPrice: 24.99,
    originalYearlyPrice: 19.99,
    description: "Get automated daily looks and real human support.",
    features: [
      { text: "Unlimited wardrobe storage" },
      { text: "1 human stylist look review per month" },
      { text: "Automatic daily looks based on weather, mood, or Google Calendar" },
      { text: "Wishlist based on real wardrobe needs" },
      { text: "Priority access to personal stylist services" },
    ],
    isPopular: true,
  },
  {
    id: "wardrobe",
    name: "WARDROBE +",
    monthlyPrice: 1.49,
    yearlyPrice: 0.99,
    originalMonthlyPrice: 1.99,
    originalYearlyPrice: 1.49,
    description: "Organize your entire wardrobe and build looks with no limits.",
    features: [
      { text: "Unlimited wardrobe storage" },
      { text: "Create looks manually" },
      { text: "Access pay-as-you-go personal stylist services" },
    ],
  },
];

function DollarPattern({ side }: { side: "left" | "right" }) {
  const lines = [
    ["$", "$$$$"],
    ["$$$$", "$$$$"],
    ["$", "$$$$", "$$$$"],
    ["$$$$", "$$$$"],
    ["$$$$"],
  ];

  return (
    <div
      className={cn(
        "hidden select-none text-xs font-medium tracking-tight text-gray-300 md:block",
        side === "left" ? "text-right" : "text-left"
      )}
    >
      {lines.map((line, i) => (
        <div key={i} className="leading-5">
          {side === "left"
            ? line.join(" ")
            : line
                .slice()
                .reverse()
                .join(" ")}
        </div>
      ))}
    </div>
  );
}

function PricingCard({
  plan,
  isYearly,
  delay = 0,
}: {
  plan: PricingPlan;
  isYearly: boolean;
  delay?: number;
}) {
  const currentPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const originalPrice = isYearly
    ? plan.originalYearlyPrice
    : plan.originalMonthlyPrice;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={cn(
        "relative flex flex-col rounded-lg border bg-white p-6",
        plan.isPopular ? "border-gray-300" : "border-gray-200"
      )}
    >
      {/* Header with name and badge */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[11px] font-medium tracking-wide text-gray-500">
          {plan.name}
        </span>
        {plan.isPopular && (
          <span className="rounded bg-black px-2 py-0.5 text-[10px] font-medium tracking-wide text-white">
            POPULAR
          </span>
        )}
      </div>

      {/* Price */}
      <div className="mb-3 flex items-baseline gap-1.5">
        <span className="text-3xl font-semibold tracking-tight text-gray-900">
          ${currentPrice === 0 ? "0" : currentPrice.toFixed(2)}
        </span>
        {currentPrice > 0 && (
          <span className="text-sm text-gray-500">/mo</span>
        )}
        {originalPrice && (
          <span className="ml-1 text-sm text-gray-400 line-through">
            ${originalPrice.toFixed(2)}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="mb-5 text-sm leading-relaxed text-gray-600">
        {plan.description}
      </p>

      {/* Features */}
      <ul className="flex flex-col gap-3">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
            <span className="text-sm leading-snug text-gray-600">
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function RysaPricing({
  title = "Join the Early Member list and save 25%",
  subtitle = "By pre-signing, you secure transparent, discounted pricing before public launch. This limited offer gives you full access to Rysa's personalized styling system at a rate designed to reward early adopters.",
  plans = defaultPlans,
  ctaTitle = "Become an Early Access Member",
  ctaSubtitle = "Get on the waitlist today and lock in 25% off before launch. Limited spots. No commitments, just first access.",
  ctaButtonText = "Unlock Personalized Styling",
  onCtaClick,
}: RysaPricingProps) {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className="w-full bg-white px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-500">
            {subtitle}
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-8 flex items-center gap-1"
        >
          <button
            onClick={() => setIsYearly(false)}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
              !isYearly
                ? "bg-gray-100 text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={cn(
              "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
              isYearly
                ? "bg-gray-100 text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            )}
          >
            Yearly{" "}
            <span className="rounded bg-gray-200 px-1.5 py-0.5 text-[10px] font-medium text-gray-600">
              Best value
            </span>
          </button>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mb-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              isYearly={isYearly}
              delay={0.15 + index * 0.1}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative flex items-center justify-center gap-8 rounded-lg border border-gray-100 bg-gray-50/50 px-6 py-10 md:px-12"
        >
          {/* Left Dollar Pattern */}
          <DollarPattern side="left" />

          {/* Center Content */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">
              {ctaTitle}
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-500">
              {ctaSubtitle}
            </p>
            <button
              onClick={onCtaClick}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-100"
            >
              <Plus className="h-4 w-4" />
              {ctaButtonText}
            </button>
          </div>

          {/* Right Dollar Pattern */}
          <DollarPattern side="right" />
        </motion.div>
      </div>
    </section>
  );
}
