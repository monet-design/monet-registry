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
import { useState } from "react";
import { Check, X } from "lucide-react";

interface LoadfastStoreComparison4Props {
  mode?: "light" | "dark";
}

export default function LoadfastStoreComparison4({
  mode = "light",
}: LoadfastStoreComparison4Props) {
  const colors = COLORS[mode];
  const [selectedYears, setSelectedYears] = useState(5);

  const yearOptions = [1, 3, 5, 10];

  const products = [
    {
      name: "LoadFast",
      subtitle: "(That's us!)",
      price: "$100",
      priceLabel: "One-time",
      isOurs: true,
      badge: "BEST VALUE",
      features: [
        { text: "Unlimited snippets", included: true },
        { text: "Lifetime updates included", included: true },
        { text: "No subscription required", included: true },
        { text: "All features included", included: true },
      ],
    },
    {
      name: "TextExpander",
      subtitle: "(Competitor)",
      price: "$40",
      priceLabel: "Per year",
      isOurs: false,
      features: [
        { text: "Limited to paid plan only", included: false },
        { text: "Recurring charges every year", included: false },
        { text: "Price increases over time", included: false },
        { text: "Feature restrictions", included: false },
      ],
    },
    {
      name: "Text Blaze",
      subtitle: "(Competitor)",
      price: "$2.99",
      priceLabel: "Per month",
      isOurs: false,
      features: [
        { text: "Only 20 snippets free", included: false },
        { text: "Monthly subscription required", included: false },
        { text: "Character limits (25K)", included: false },
        { text: "Chrome-focused only", included: false },
      ],
    },
  ];

  const calculateCost = (product: typeof products[0]) => {
    if (product.isOurs) return 100;
    if (product.name === "TextExpander") return 40 * selectedYears;
    if (product.name === "Text Blaze") return 2.99 * 12 * selectedYears;
    return 0;
  };

  const savings = Math.round(
    calculateCost(products[1]) - calculateCost(products[0])
  );

  return (
    <section
      className="py-16 lg:py-24"
      style={{ backgroundColor: colors.sand }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2
            className="font-serif font-normal text-3xl lg:text-4xl tracking-tight mb-4"
            style={{ color: colors.accent }}
          >
            LoadFast vs Competitors
          </h2>
          <p
            className="text-base lg:text-lg max-w-2xl mx-auto"
            style={{ color: `${colors.accent}99` }}
          >
            See how LoadFast compares to other text expander tools. While
            competitors charge recurring fees, LoadFast gives you everything for{" "}
            <span style={{ color: colors.clay }}>$100 once, forever</span>
          </p>
          <p
            className="text-sm mt-2"
            style={{ color: `${colors.accent}66` }}
          >
            Compare different products, not pricing tiers
          </p>
        </motion.div>

        {/* Year Selector */}
        <div className="flex justify-center mb-8">
          <div
            className="inline-flex rounded-lg p-1"
            style={{ backgroundColor: colors.stone }}
          >
            {yearOptions.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYears(year)}
                className="px-4 py-2 rounded-md text-sm font-medium transition-colors"
                style={{
                  backgroundColor:
                    selectedYears === year ? colors.accent : "transparent",
                  color:
                    selectedYears === year ? colors.sand : colors.accent,
                }}
              >
                {year} Year{year > 1 ? "s" : ""}
              </button>
            ))}
          </div>
        </div>

        {/* Savings Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10 p-4 rounded-lg"
          style={{ backgroundColor: colors.stone }}
        >
          <p style={{ color: colors.accent }}>
            <span className="font-medium">LoadFast vs Competitors:</span> Save{" "}
            <span className="font-bold" style={{ color: colors.clay }}>
              ${savings}
            </span>{" "}
            over {selectedYears} years
          </p>
          <p className="text-sm" style={{ color: `${colors.accent}99` }}>
            That's up to 50% savings compared to subscription competitors
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-lg overflow-hidden border-2 ${
                product.isOurs ? "relative" : ""
              }`}
              style={{
                borderColor: product.isOurs
                  ? colors.accent
                  : `${colors.accent}1A`,
                backgroundColor: "white",
              }}
            >
              {/* Badge */}
              <div className="p-4">
                <div className="flex flex-col gap-1 mb-4">
                  <span
                    className="text-xs font-medium px-2 py-1 rounded w-fit"
                    style={{
                      backgroundColor: product.isOurs
                        ? colors.accent
                        : colors.stone,
                      color: product.isOurs
                        ? colors.sand
                        : `${colors.accent}99`,
                    }}
                  >
                    {product.isOurs ? "OUR PRODUCT" : "COMPETITOR"}
                  </span>
                  {product.badge && (
                    <span
                      className="text-xs font-medium px-2 py-1 rounded w-fit"
                      style={{
                        backgroundColor: colors.clay,
                        color: "white",
                      }}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>

                <h3
                  className="text-xl font-medium"
                  style={{ color: colors.accent }}
                >
                  {product.name}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: `${colors.accent}99` }}
                >
                  {product.subtitle}
                </p>

                <div className="mt-4 mb-2">
                  <span
                    className="text-3xl font-bold"
                    style={{ color: colors.accent }}
                  >
                    {product.price}
                  </span>
                  <span
                    className="text-sm ml-1"
                    style={{ color: `${colors.accent}99` }}
                  >
                    {product.priceLabel}
                  </span>
                </div>

                <div
                  className="p-3 rounded-md mb-4"
                  style={{ backgroundColor: colors.stone }}
                >
                  <p
                    className="text-sm"
                    style={{ color: `${colors.accent}99` }}
                  >
                    {selectedYears}-year cost:
                  </p>
                  <p
                    className="text-xl font-bold"
                    style={{ color: colors.accent }}
                  >
                    ${Math.round(calculateCost(product))}
                  </p>
                </div>

                <ul className="space-y-3">
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      {feature.included ? (
                        <Check
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          style={{ color: colors.clay }}
                        />
                      ) : (
                        <X
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          style={{ color: `${colors.accent}40` }}
                        />
                      )}
                      <span
                        className="text-sm"
                        style={{
                          color: feature.included
                            ? colors.accent
                            : `${colors.accent}99`,
                        }}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {product.isOurs && (
                  <button
                    className="w-full mt-6 px-4 py-2.5 rounded-md font-medium transition-colors"
                    style={{
                      backgroundColor: colors.accent,
                      color: colors.sand,
                    }}
                  >
                    Get LoadFast Now
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p style={{ color: `${colors.accent}CC` }}>
            <span className="font-medium">Unlike our competitors:</span> No
            hidden fees. No subscriptions. No price increases.{" "}
            <span style={{ color: colors.clay }}>
              Just $100 once, forever.
            </span>
          </p>
          <p
            className="text-sm mt-2"
            style={{ color: `${colors.accent}80` }}
          >
            Introductory price (regular $197) • 30-day money-back guarantee
          </p>
        </motion.div>
      </div>
    </section>
  );
}
