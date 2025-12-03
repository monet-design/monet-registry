"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    payrollBg: "#FEF7DD",
    payrollCheck: "#B9B49B",
    payrollTitle: "#6B5D3C",
    hrBg: "#FAE9DC",
    hrCheck: "#B5A598",
    hrTitle: "#8B6B52",
    toggleActive: "#C8C7E5",
    toggleInactive: "#E8E8F0",
    ctaButton: "#6EC3C8",
    ctaButtonHover: "#5BB3B8",
  },
  dark: {
    payrollBg: "#3D3A2E",
    payrollCheck: "#B9B49B",
    payrollTitle: "#E8E2C8",
    hrBg: "#3D3530",
    hrCheck: "#B5A598",
    hrTitle: "#E8D5C8",
    toggleActive: "#5A5880",
    toggleInactive: "#3D3D50",
    ctaButton: "#6EC3C8",
    ctaButtonHover: "#5BB3B8",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

interface FeatureItem {
  text: string;
}

interface PlanFeatures {
  title: string;
  features: FeatureItem[];
}

interface PricingOplBig18Props {
  mode?: "light" | "dark";
  headline?: string;
  payrollFeatures?: PlanFeatures;
  hrFeatures?: PlanFeatures;
  price?: string;
  priceSubtext?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  onToggle?: (isYearly: boolean) => void;
}

export default function PricingOplBig18({
  mode = "light",
  headline = "Simple pricing for payroll and HR management tool",
  payrollFeatures = {
    title: "Payroll",
    features: [
      { text: "Employee on- and offboarding" },
      { text: "Fullservice for payroll" },
      { text: "Tax and social security reporting" },
      { text: "Detailed wage records" },
    ],
  },
  hrFeatures = {
    title: "HR Software",
    features: [
      { text: "Automatic onboarding process" },
      { text: "Employment contract manager" },
      { text: "Employee accounts" },
      { text: "Document management system" },
      { text: "API for external software providers and\ncompany intranet" },
    ],
  },
  price = "13 Euro",
  priceSubtext = "per employee per month",
  ctaText = "Start now!",
  onCtaClick,
  onToggle,
}: PricingOplBig18Props) {
  const colors = COLORS[mode];
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = (yearly: boolean) => {
    setIsYearly(yearly);
    onToggle?.(yearly);
  };

  const isDark = mode === "dark";

  return (
    <section
      className={`relative min-h-screen w-full overflow-hidden py-16 px-4 ${
        isDark ? "bg-gray-950" : "bg-white"
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large circle left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`absolute left-[5%] top-[35%] w-40 h-40 rounded-full ${
            isDark ? "bg-gray-800/30" : "bg-gray-200/50"
          }`}
        />
        {/* Large circle right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`absolute right-[8%] top-[45%] w-32 h-32 rounded-full ${
            isDark ? "bg-gray-800/30" : "bg-gray-200/50"
          }`}
        />
        {/* Small triangles */}
        <motion.div
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`absolute right-[15%] top-[15%] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] ${
            isDark ? "border-b-gray-600" : "border-b-gray-400"
          }`}
        />
        <motion.div
          initial={{ opacity: 0, rotate: 20 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`absolute left-[12%] top-[20%] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] ${
            isDark ? "border-b-gray-700" : "border-b-gray-300"
          }`}
        />
        <motion.div
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`absolute right-[20%] bottom-[25%] w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[12px] ${
            isDark ? "border-b-gray-600" : "border-b-gray-400"
          }`}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-center text-2xl md:text-3xl font-semibold italic mb-8 ${
            isDark ? "text-gray-100" : "text-gray-800"
          }`}
        >
          {headline}
        </motion.h1>

        {/* Toggle buttons */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div
            className={`inline-flex rounded-full p-1 ${
              isDark ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <button
              onClick={() => handleToggle(false)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                !isYearly
                  ? `text-gray-700`
                  : isDark
                  ? "text-gray-400 hover:text-gray-300"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              style={{
                backgroundColor: !isYearly ? colors.toggleActive : "transparent",
              }}
            >
              monthly
            </button>
            <button
              onClick={() => handleToggle(true)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                isYearly
                  ? `text-gray-700`
                  : isDark
                  ? "text-gray-400 hover:text-gray-300"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              style={{
                backgroundColor: isYearly ? colors.toggleActive : "transparent",
              }}
            >
              yearly
            </button>
          </div>
        </motion.div>

        {/* Feature cards container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-0 rounded-xl overflow-hidden shadow-lg mb-6"
        >
          {/* Payroll card */}
          <div
            className="flex-1 p-6 md:p-8"
            style={{ backgroundColor: colors.payrollBg }}
          >
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: colors.payrollTitle }}
            >
              {payrollFeatures.title}
            </h3>
            <ul className="space-y-3">
              {payrollFeatures.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: colors.payrollCheck }}
                  />
                  <span
                    className={`text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {feature.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* HR Software card */}
          <div
            className="flex-1 p-6 md:p-8"
            style={{ backgroundColor: colors.hrBg }}
          >
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: colors.hrTitle }}
            >
              {hrFeatures.title}
            </h3>
            <ul className="space-y-3">
              {hrFeatures.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: colors.hrCheck }}
                  />
                  <span
                    className={`text-sm whitespace-pre-line ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {feature.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Price card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`max-w-xs mx-auto rounded-xl shadow-lg overflow-hidden ${
            isDark ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="p-6 text-center">
            <div
              className={`text-2xl font-bold mb-1 ${
                isDark ? "text-gray-100" : "text-gray-800"
              }`}
            >
              {price}
            </div>
            <div
              className={`text-sm mb-5 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {priceSubtext}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCtaClick}
              className="w-full py-3 px-6 rounded-lg text-white font-medium transition-colors duration-300"
              style={{ backgroundColor: colors.ctaButton }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = colors.ctaButtonHover)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = colors.ctaButton)
              }
            >
              {ctaText}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
