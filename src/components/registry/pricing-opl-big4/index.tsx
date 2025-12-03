"use client";

// ============================================================================
// CUSTOMIZATION - Modify these values to customize the component
// ============================================================================

/**
 * Custom Colors (Brand Colors)
 */
const COLORS = {
  light: {
    background: "#FFCC01", // Bright yellow
    tableBackground: "#FFFFFF",
    headerOne: "#FFCC01", // Yellow for "One" column (same as bg, no header box)
    headerUnlimited: "#01B5D0", // Cyan for "Unlimited" header
    headerTailorMade: "#FE5A42", // Coral/red for "Tailor Made" header
    buttonCoral: "#F97169", // Coral button
    buttonCyan: "#01B5D0", // Cyan button
    textDark: "#333333",
    textGray: "#666666",
    textLight: "#999999",
    rowEven: "#F3F3F3",
    rowOdd: "#FFFFFF",
    titleColor: "#333333",
  },
  dark: {
    background: "#1A1A00",
    tableBackground: "#1F1F1F",
    headerOne: "#3D3D00",
    headerUnlimited: "#015A68",
    headerTailorMade: "#7F2D21",
    buttonCoral: "#7C3B35",
    buttonCyan: "#015A68",
    textDark: "#E5E5E5",
    textGray: "#AAAAAA",
    textLight: "#777777",
    rowEven: "#2A2A2A",
    rowOdd: "#1F1F1F",
    titleColor: "#E5E5E5",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { CircleDollarSign } from "lucide-react";

type FeatureValue = string | "X" | "";

interface Feature {
  category?: string;
  name: string;
  one: FeatureValue;
  unlimited: FeatureValue;
  tailorMade: FeatureValue;
}

interface PricingOplBig4Props {
  mode?: "light" | "dark";
  title?: string;
  features?: Feature[];
  planNames?: {
    one: string;
    unlimited: string;
    tailorMade: string;
  };
  buttonText?: string;
  onGetQuote?: (plan: "one" | "unlimited" | "tailorMade") => void;
}

const defaultFeatures: Feature[] = [
  // Basic features
  { name: "Number of Campaigns", one: "1", unlimited: "Unlimited", tailorMade: "1 or unlimited" },
  { name: "Number of Participants", one: "Unlimited", unlimited: "Unlimited", tailorMade: "Unlimited" },
  { name: "Number of Pages", one: "Max 2", unlimited: "Unlimited", tailorMade: "Unlimited" },
  { name: "Number of fans on page", one: "Unlimited", unlimited: "Unlimited", tailorMade: "Unlimited" },
  // Design & Tech
  { category: "Design & Tech", name: "Custom design in brand look & feel", one: "X", unlimited: "X", tailorMade: "X" },
  { name: "Mobile optimized", one: "Tablets & smartphones", unlimited: "Tablets & smartphones", tailorMade: "Tablets & smartphones" },
  { name: "Like gate", one: "X", unlimited: "X", tailorMade: "X" },
  { name: "Multilanguage", one: "X", unlimited: "X", tailorMade: "X" },
  { name: "Capture Optin & CRM data", one: "X", unlimited: "X", tailorMade: "X" },
  { name: "Schedule campaign", one: "X", unlimited: "X", tailorMade: "X" },
  { name: "Start & end date", one: "X", unlimited: "X", tailorMade: "X" },
  { name: "Multiple contest at same time", one: "", unlimited: "X", tailorMade: "Optional" },
  // Management
  { category: "Management", name: "Content management system", one: "", unlimited: "X", tailorMade: "Optional" },
  { name: "Strategic advice", one: "X", unlimited: "X", tailorMade: "X" },
  // Hosting & Support
  { category: "Hosting & Support", name: "HTTPS Hosting", one: "X", unlimited: "X", tailorMade: "X" },
  { name: "Technical support", one: "X", unlimited: "X", tailorMade: "X" },
  { name: "Support Facebook changes", one: "X", unlimited: "X", tailorMade: "X" },
  { name: "White label (no socialapp branding)", one: "X", unlimited: "X", tailorMade: "X" },
  { name: "Tailor made flow & concept", one: "", unlimited: "", tailorMade: "X" },
  { name: "Full custom development", one: "", unlimited: "", tailorMade: "X" },
];

const defaultPlanNames = {
  one: "One",
  unlimited: "Unlimited",
  tailorMade: "Tailor Made",
};

export default function PricingOplBig4({
  mode = "light",
  title = "Pricing plan",
  features = defaultFeatures,
  planNames = defaultPlanNames,
  buttonText = "GET YOUR QUOTE",
  onGetQuote,
}: PricingOplBig4Props) {
  const colors = COLORS[mode];

  const renderValue = (value: FeatureValue) => {
    if (value === "X") {
      return (
        <span className="text-sm font-medium" style={{ color: colors.textDark }}>
          X
        </span>
      );
    }
    if (value === "") {
      return <span className="text-gray-300">-</span>;
    }
    return (
      <span className="text-xs" style={{ color: colors.textGray }}>
        {value}
      </span>
    );
  };

  return (
    <section
      className="relative w-full py-12 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <CircleDollarSign className="w-6 h-6" style={{ color: colors.titleColor }} />
          <h2
            className="text-2xl md:text-3xl font-light"
            style={{
              color: colors.titleColor,
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            {title}
          </h2>
        </motion.div>

        {/* Pricing Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-lg overflow-hidden shadow-xl"
          style={{ backgroundColor: colors.tableBackground }}
        >
          {/* Table Header */}
          <div className="grid grid-cols-4">
            {/* Empty cell for feature names */}
            <div className="p-3" />

            {/* One Column Header */}
            <div
              className="p-4 text-center"
              style={{ backgroundColor: colors.tableBackground }}
            >
              <span
                className="text-sm font-semibold"
                style={{ color: colors.textDark }}
              >
                {planNames.one}
              </span>
            </div>

            {/* Unlimited Column Header */}
            <div
              className="p-4 text-center"
              style={{ backgroundColor: colors.headerUnlimited }}
            >
              <span className="text-sm font-semibold text-white">
                {planNames.unlimited}
              </span>
            </div>

            {/* Tailor Made Column Header */}
            <div
              className="p-4 text-center"
              style={{ backgroundColor: colors.headerTailorMade }}
            >
              <span className="text-sm font-semibold text-white">
                {planNames.tailorMade}
              </span>
            </div>
          </div>

          {/* Table Body */}
          <div>
            {features.map((feature, index) => (
              <div key={index}>
                {/* Category Header */}
                {feature.category && (
                  <div
                    className="grid grid-cols-4 border-t"
                    style={{ borderColor: "#E5E5E5" }}
                  >
                    <div className="col-span-4 py-2 px-4">
                      <span
                        className="text-xs font-semibold uppercase tracking-wide"
                        style={{ color: colors.textLight }}
                      >
                        {feature.category}
                      </span>
                    </div>
                  </div>
                )}

                {/* Feature Row */}
                <div
                  className="grid grid-cols-4 border-t"
                  style={{
                    borderColor: "#E5E5E5",
                    backgroundColor: index % 2 === 0 ? colors.rowOdd : colors.rowEven,
                  }}
                >
                  {/* Feature Name */}
                  <div className="p-3 flex items-center">
                    <span
                      className="text-xs"
                      style={{ color: colors.textGray }}
                    >
                      {feature.name}
                    </span>
                  </div>

                  {/* One Value */}
                  <div className="p-3 flex items-center justify-center text-center">
                    {renderValue(feature.one)}
                  </div>

                  {/* Unlimited Value */}
                  <div className="p-3 flex items-center justify-center text-center">
                    {renderValue(feature.unlimited)}
                  </div>

                  {/* Tailor Made Value */}
                  <div className="p-3 flex items-center justify-center text-center">
                    {renderValue(feature.tailorMade)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons Row */}
          <div
            className="grid grid-cols-4 border-t py-4"
            style={{ borderColor: "#E5E5E5" }}
          >
            {/* Empty cell */}
            <div className="p-3" />

            {/* One Button */}
            <div className="p-3 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onGetQuote?.("one")}
                className="px-4 py-2 text-xs font-semibold text-white rounded-sm uppercase tracking-wide"
                style={{ backgroundColor: colors.buttonCoral }}
              >
                {buttonText}
              </motion.button>
            </div>

            {/* Unlimited Button */}
            <div className="p-3 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onGetQuote?.("unlimited")}
                className="px-4 py-2 text-xs font-semibold text-white rounded-sm uppercase tracking-wide"
                style={{ backgroundColor: colors.buttonCyan }}
              >
                {buttonText}
              </motion.button>
            </div>

            {/* Tailor Made Button */}
            <div className="p-3 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onGetQuote?.("tailorMade")}
                className="px-4 py-2 text-xs font-semibold text-white rounded-sm uppercase tracking-wide"
                style={{ backgroundColor: colors.buttonCoral }}
              >
                {buttonText}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
