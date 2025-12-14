"use client";

const COLORS = {
  light: {
    accent: "#1C1917",
    clay: "#D2886F",
    sand: "#F5F5F0",
    stone: "#E8E6E1",
  },
  dark: {
    accent: "#F5F5F0",
    clay: "#D2886F",
    sand: "#1C1917",
    stone: "#292524",
  },
} as const;

import { motion } from "motion/react";
import { Shield } from "lucide-react";

interface LoadfastStorePricing7Props {
  mode?: "light" | "dark";
}

export default function LoadfastStorePricing7({
  mode = "light",
}: LoadfastStorePricing7Props) {
  const colors = COLORS[mode];

  const packages = [
    {
      label: "CORE",
      name: "LoadFast Extension + Mac App",
      description: "Unlimited snippets, works everywhere",
      value: "$497",
      isClay: true,
    },
    {
      label: "BONUS 1",
      name: "Real-Time Cloud Sync",
      description: "All devices, instant sync",
      value: "$197",
    },
    {
      label: "BONUS 2",
      name: "Professional Template Library",
      description: "Growing library for sales, support, healthcare",
      value: "$297",
    },
    {
      label: "BONUS 3",
      name: "One-Click Competitor Import",
      description: "Migrate from TextExpander in 30 seconds",
      value: "$97",
    },
    {
      label: "BONUS 4",
      name: "Priority Support Forever",
      description: "Direct access, 24-hour response",
      value: "$497",
    },
    {
      label: "BONUS 5",
      name: "Lifetime Updates",
      description: "Every new feature, forever",
      value: "$997",
    },
    {
      label: "BONUS 6",
      name: "Quick Start Guide",
      description: "Be productive in 5 minutes",
      value: "$97",
    },
  ];

  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: colors.sand }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="font-serif font-normal text-3xl lg:text-4xl tracking-tight mb-4"
            style={{ color: colors.accent }}
          >
            The LoadFast Lifetime Package
          </h2>
          <p
            className="text-base lg:text-lg"
            style={{ color: `${colors.accent}99` }}
          >
            Everything you need to become the fastest responder on your team
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <div
            className="rounded-lg overflow-hidden border"
            style={{
              backgroundColor: "white",
              borderColor: `${colors.accent}1A`,
            }}
          >
            {/* Total Value Header */}
            <div
              className="px-6 py-4 text-center"
              style={{ backgroundColor: colors.accent }}
            >
              <p
                className="text-sm uppercase tracking-wide"
                style={{ color: `${colors.sand}B3` }}
              >
                Total Value
              </p>
              <p
                className="text-3xl font-serif font-bold"
                style={{ color: colors.sand }}
              >
                $2,679
              </p>
            </div>

            {/* Package Items */}
            <div className="p-6 space-y-4">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`flex items-start justify-between gap-4 ${
                    index === 0 ? "pb-4 border-b" : ""
                  }`}
                  style={{ borderColor: `${colors.accent}1A` }}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: pkg.isClay
                            ? colors.clay
                            : colors.stone,
                          color: pkg.isClay ? "white" : `${colors.accent}B3`,
                        }}
                      >
                        {pkg.label}
                      </span>
                      <span
                        className="font-medium text-sm"
                        style={{ color: colors.accent }}
                      >
                        {pkg.name}
                      </span>
                    </div>
                    <p
                      className="text-xs mt-1"
                      style={{ color: `${colors.accent}99` }}
                    >
                      {pkg.description}
                    </p>
                  </div>
                  <span
                    className="text-sm whitespace-nowrap"
                    style={{ color: `${colors.accent}80` }}
                  >
                    {pkg.value} value
                  </span>
                </div>
              ))}
            </div>

            {/* Dashed Divider */}
            <div
              className="mx-6 border-t-2 border-dashed"
              style={{ borderColor: `${colors.accent}33` }}
            />

            {/* Price Section */}
            <div className="p-6 text-center">
              <div className="mb-2">
                <span
                  className="text-sm uppercase tracking-wide"
                  style={{ color: `${colors.accent}80` }}
                >
                  Introductory Price
                </span>
              </div>
              <div className="flex items-baseline justify-center gap-3 mb-2">
                <span
                  className="text-xl line-through"
                  style={{ color: `${colors.accent}66` }}
                >
                  $197
                </span>
                <span
                  className="text-5xl font-serif font-bold"
                  style={{ color: colors.accent }}
                >
                  $100
                </span>
                <span
                  className="text-sm"
                  style={{ color: `${colors.accent}99` }}
                >
                  one-time
                </span>
              </div>
              <p
                className="text-sm mb-6"
                style={{ color: `${colors.accent}99` }}
              >
                Regular price will be $197
              </p>

              <button
                className="w-full px-4 py-2.5 rounded-md font-semibold transition-colors"
                style={{
                  backgroundColor: colors.clay,
                  color: colors.sand,
                }}
              >
                Get LoadFast
              </button>

              <div
                className="mt-6 flex items-center justify-center gap-2 text-sm"
                style={{ color: `${colors.accent}B3` }}
              >
                <Shield className="w-5 h-5" style={{ color: colors.clay }} />
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center text-sm"
            style={{ color: `${colors.accent}99` }}
          >
            Join 250+ professionals already saving hours every week
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
