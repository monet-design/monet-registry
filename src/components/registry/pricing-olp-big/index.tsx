"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    // Plan header colors
    smallHeader: "#888888",
    mediumHeader: "#5BAFAF",
    largeHeader: "#E2652F",
    // Title accent (teal)
    titleAccent: "#5BAFAF",
    // Checkmark color
    checkmark: "#5BAFAF",
    // Button
    buttonBg: "#E2652F",
    buttonHover: "#C95525",
    // Table
    tableBorder: "#E5E7EB",
    tableRowEven: "#FAFAFA",
  },
  dark: {
    smallHeader: "#9CA3AF",
    mediumHeader: "#5BAFAF",
    largeHeader: "#E2652F",
    titleAccent: "#5BAFAF",
    checkmark: "#5BAFAF",
    buttonBg: "#E2652F",
    buttonHover: "#C95525",
    tableBorder: "#374151",
    tableRowEven: "#1F2937",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, ChevronRight } from "lucide-react";

interface Feature {
  name: string;
  small: boolean;
  medium: boolean;
  large: boolean;
}

interface PricingOlpBigProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  smallPrice?: string;
  mediumPrice?: string;
  largePrice?: string;
  features?: Feature[];
  buttonText?: string;
  onPlanClick?: (plan: "small" | "medium" | "large") => void;
}

const defaultFeatures: Feature[] = [
  { name: "Handcrafted Design", small: true, medium: true, large: true },
  { name: "Responsive Web Design (RWD)", small: true, medium: true, large: true },
  { name: "Interactive", small: true, medium: true, large: true },
  { name: "Easy Navigation", small: true, medium: true, large: true },
  { name: "Call to Action (CTA)", small: true, medium: true, large: true },
  { name: "Content Management System (CMS)", small: false, medium: true, large: true },
  { name: "Search Engine Optimization (SEO)", small: false, medium: true, large: true },
  { name: "Contact Form", small: false, medium: true, large: true },
  { name: "Security", small: false, medium: true, large: true },
  { name: "Backups", small: false, medium: true, large: true },
  { name: "Photo Gallery", small: false, medium: false, large: true },
  { name: "Google Maps", small: false, medium: true, large: true },
  { name: "Google Analytics", small: false, medium: false, large: true },
  { name: "Newsletter Sign-up", small: false, medium: true, large: true },
  { name: "Social Media Integration", small: false, medium: false, large: true },
  { name: "Testimonials", small: false, medium: false, large: true },
  { name: "Frequently Asked Questions (FAQ)", small: false, medium: true, large: true },
  { name: "Surveys", small: false, medium: false, large: true },
];

export default function PricingOlpBig({
  mode = "light",
  title = "Pricing",
  subtitle = "To help maximize your investment, Minisites offer three different packages to choose from, depending on the features required.",
  smallPrice = "$2,450",
  mediumPrice = "$2,750",
  largePrice = "$2,950",
  features = defaultFeatures,
  buttonText = "START NOW",
  onPlanClick,
}: PricingOlpBigProps) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  const plans = [
    { key: "small" as const, name: "SMALL", price: smallPrice, color: colors.smallHeader },
    { key: "medium" as const, name: "MEDIUM", price: mediumPrice, color: colors.mediumHeader },
    { key: "large" as const, name: "LARGE", price: largePrice, color: colors.largeHeader },
  ];

  const formatPrice = (price: string) => {
    const match = price.match(/^\$?([\d,]+)(\.?\d*)$/);
    if (match) {
      return {
        dollars: match[1],
        cents: match[2] || ".00",
      };
    }
    return { dollars: price, cents: "" };
  };

  return (
    <section
      className={`relative w-full py-16 px-4 ${
        isDark ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-normal italic text-center mb-4"
          style={{ color: colors.titleAccent }}
        >
          {title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-sm italic text-center mb-10 max-w-2xl mx-auto ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {subtitle}
        </motion.p>

        {/* Pricing Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full overflow-x-auto"
        >
          <table className="w-full border-collapse">
            {/* Header Row */}
            <thead>
              <tr>
                <th className="w-1/4"></th>
                {plans.map((plan, index) => (
                  <th
                    key={plan.key}
                    className="w-1/4 px-4 py-4 text-center"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      {/* Plan Name Tab */}
                      <div
                        className="py-2 px-6 rounded-t-sm text-white text-xs font-bold tracking-wider"
                        style={{ backgroundColor: plan.color }}
                      >
                        {plan.name}
                      </div>
                      {/* Price */}
                      <div className="py-4" style={{ color: plan.color }}>
                        <span className="text-sm align-top">$</span>
                        <span className="text-3xl font-light">
                          {formatPrice(plan.price).dollars.replace("$", "")}
                        </span>
                        <span className="text-sm align-top">
                          {formatPrice(plan.price).cents.replace(".", "")}
                        </span>
                      </div>
                    </motion.div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Feature Rows */}
            <tbody>
              {features.map((feature, index) => (
                <motion.tr
                  key={feature.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.02 }}
                  className={`border-t ${
                    isDark ? "border-gray-800" : "border-gray-100"
                  } ${
                    index % 2 === 1
                      ? isDark
                        ? "bg-gray-900/50"
                        : "bg-gray-50/50"
                      : ""
                  }`}
                >
                  {/* Feature Name */}
                  <td
                    className={`py-2.5 px-4 text-right text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {feature.name}
                    <span
                      className={`ml-1 inline-flex items-center justify-center w-3.5 h-3.5 rounded-full text-[10px] ${
                        isDark
                          ? "bg-gray-700 text-gray-400"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      ?
                    </span>
                  </td>
                  {/* Small */}
                  <td className="py-2.5 px-4 text-center">
                    {feature.small && (
                      <Check
                        className="w-5 h-5 mx-auto"
                        style={{ color: colors.checkmark }}
                        strokeWidth={2.5}
                      />
                    )}
                  </td>
                  {/* Medium */}
                  <td className="py-2.5 px-4 text-center">
                    {feature.medium && (
                      <Check
                        className="w-5 h-5 mx-auto"
                        style={{ color: colors.checkmark }}
                        strokeWidth={2.5}
                      />
                    )}
                  </td>
                  {/* Large */}
                  <td className="py-2.5 px-4 text-center">
                    {feature.large && (
                      <Check
                        className="w-5 h-5 mx-auto"
                        style={{ color: colors.checkmark }}
                        strokeWidth={2.5}
                      />
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>

            {/* Button Row */}
            <tfoot>
              <tr>
                <td></td>
                {plans.map((plan, index) => (
                  <td key={plan.key} className="py-6 px-4 text-center">
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onPlanClick?.(plan.key)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider text-white transition-colors"
                      style={{ backgroundColor: colors.buttonBg }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = colors.buttonHover;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = colors.buttonBg;
                      }}
                    >
                      {buttonText}
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
