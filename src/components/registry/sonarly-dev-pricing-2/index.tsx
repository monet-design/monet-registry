"use client";

import { useState } from "react";

// ============================================================================
// CUSTOMIZATION - Modify values in this section to customize for your project
// ============================================================================

const COLORS = {
  light: {
    cardBg: "#ffffff",
    cardBorder: "#e5e7eb",
    highlightBorder: "#000000",
    toggleBg: "#f3f4f6",
    toggleActive: "#ffffff",
  },
  dark: {
    cardBg: "#1f2937",
    cardBorder: "#374151",
    highlightBorder: "#ffffff",
    toggleBg: "#374151",
    toggleActive: "#4b5563",
  },
} as const;

const PRICING_DATA = {
  monthly: {
    developer: { price: "Free", period: "" },
    startup: { price: "$20", period: "/month" },
    enterprise: { price: "Custom", period: "" },
  },
  yearly: {
    developer: { price: "Free", period: "" },
    startup: { price: "$16", period: "/month" },
    enterprise: { price: "Custom", period: "" },
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface SonarlyDevPricing2Props {
  mode?: "light" | "dark";
}

export default function SonarlyDevPricing2({
  mode = "light",
}: SonarlyDevPricing2Props) {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const colors = COLORS[mode];
  const isDark = mode === "dark";
  const pricing = PRICING_DATA[billingPeriod];

  const plans = [
    {
      name: "Developer",
      subtitle: "For individuals and explorers getting started",
      price: pricing.developer.price,
      period: pricing.developer.period,
      cta: "Start for free",
      ctaStyle: "secondary",
      features: [
        "1,000 sessions/month",
        "20 bugs detected/month",
        "30 days data retention",
        "1 project",
      ],
    },
    {
      name: "Startup",
      subtitle: "For small teams finding product-market fit",
      price: pricing.startup.price,
      period: pricing.startup.period,
      cta: "Start 14-Day Free Trial",
      ctaStyle: "primary",
      highlighted: true,
      features: [
        "5,000 sessions/month",
        "100 bugs detected/month",
        "Unlimited data retention",
        "1 project",
        "Up to 3 collaborators",
        "Priority Support",
      ],
    },
    {
      name: "Enterprise",
      subtitle: "For teams scaling products at speed",
      price: pricing.enterprise.price,
      period: pricing.enterprise.period,
      cta: "Let's talk!",
      ctaStyle: "secondary",
      features: [
        "Custom sessions/month",
        "Custom bugs detected/month",
        "Unlimited data retention",
        "Unlimited projects",
        "Unlimited collaborators",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className={`w-full py-24 ${isDark ? "bg-gray-950" : "bg-white"}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2
            className={`mb-4 text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Choose your plan
          </h2>
          <p className={`mb-8 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Start free and scale as you grow. Sonarly adapts to your needs,
            <br />
            from solo developers to enterprise teams.
          </p>

          {/* Billing Toggle */}
          <div
            className="mx-auto inline-flex rounded-full p-1"
            style={{ backgroundColor: colors.toggleBg }}
          >
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                billingPeriod === "monthly"
                  ? isDark
                    ? "bg-gray-600 text-white"
                    : "bg-white text-gray-900 shadow-sm"
                  : isDark
                    ? "text-gray-400"
                    : "text-gray-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                billingPeriod === "yearly"
                  ? isDark
                    ? "bg-gray-600 text-white"
                    : "bg-white text-gray-900 shadow-sm"
                  : isDark
                    ? "text-gray-400"
                    : "text-gray-600"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-2xl border p-6 ${plan.highlighted ? "border-2" : ""}`}
              style={{
                backgroundColor: colors.cardBg,
                borderColor: plan.highlighted
                  ? colors.highlightBorder
                  : colors.cardBorder,
              }}
            >
              {/* Plan Header */}
              <div className="mb-6">
                <h3
                  className={`mb-1 text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
                >
                  {plan.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span
                  className={`text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span
                    className={`text-lg ${isDark ? "text-gray-400" : "text-gray-500"}`}
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              {/* CTA Button */}
              <button
                className={`mb-6 w-full rounded-full py-3 text-sm font-medium transition-colors ${
                  plan.ctaStyle === "primary"
                    ? isDark
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-black text-white hover:bg-gray-800"
                    : isDark
                      ? "border border-gray-600 text-white hover:bg-gray-800"
                      : "border border-gray-300 text-gray-900 hover:bg-gray-50"
                }`}
              >
                {plan.cta}
              </button>

              {/* Features */}
              <div className="flex-1">
                <p
                  className={`mb-4 text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  What&apos;s included:
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <svg
                        className={`mt-0.5 h-5 w-5 flex-shrink-0 ${isDark ? "text-gray-400" : "text-gray-400"}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
