"use client";

import { motion } from "motion/react";

const CONTENT = {
  headline: "Simple pricing",
  subheadline: "Start for free, upgrade when you need more.",
  plans: [
    {
      name: "Cap Free",
      price: "$0",
      period: "forever",
      description: "Everything you need to get started with screen recording.",
      features: [
        "Unlimited local recordings",
        "Basic editing tools",
        "Share via link",
        "macOS & Windows apps",
        "Community support",
      ],
      cta: { label: "Download Free", href: "/download" },
      highlight: false,
    },
    {
      name: "Cap Pro",
      price: "$9",
      period: "/month",
      description: "For power users and teams who need more.",
      features: [
        "Everything in Free",
        "Unlimited cloud storage",
        "Custom S3 bucket support",
        "AI-powered features",
        "Priority support",
        "Team collaboration",
        "Custom branding",
        "Analytics & insights",
      ],
      cta: { label: "Upgrade to Pro", href: "/pricing" },
      highlight: true,
    },
    {
      name: "Cap Commercial",
      price: "Custom",
      period: "",
      description: "For organizations with specific requirements.",
      features: [
        "Everything in Pro",
        "Self-hosted option",
        "SSO / SAML",
        "Custom contracts",
        "Dedicated support",
        "SLA guarantees",
      ],
      cta: { label: "Contact Sales", href: "/contact" },
      highlight: false,
    },
  ],
} as const;

interface CapSoPricing5Props {
  mode?: "light" | "dark";
}

export default function CapSoPricing5({ mode = "light" }: CapSoPricing5Props) {
  return (
    <section className="w-full py-[150px] lg:py-[200px] bg-[#F2F2F2]">
      <div className="w-full max-w-[1200px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-gray-900 mb-3">{CONTENT.headline}</h2>
          <p className="text-lg text-gray-500">{CONTENT.subheadline}</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONTENT.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-2xl border ${
                plan.highlight
                  ? "bg-gray-900 border-gray-800 text-white"
                  : "bg-white border-gray-200 text-gray-900"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-medium mb-2 ${
                    plan.highlight ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-bold ${
                      plan.highlight ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={`text-base ${
                        plan.highlight ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
                <p
                  className={`mt-3 text-sm ${
                    plan.highlight ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.highlight ? "text-blue-400" : "text-blue-600"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={`text-sm ${
                        plan.highlight ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.cta.href}
                className={`w-full py-3 px-6 rounded-full text-center font-medium transition-colors ${
                  plan.highlight
                    ? "bg-white text-gray-900 hover:bg-gray-100"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {plan.cta.label}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
