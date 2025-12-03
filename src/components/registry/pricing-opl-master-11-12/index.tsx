"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#FFFFFF",
    cardBackground: "#FFFFFF",
    cardBorder: "#E5E7EB",
    textPrimary: "#1F2937",
    textSecondary: "#6B7280",
    textMuted: "#9CA3AF",
    highlight: "#E8DEFF",
    purple: "#9681F7",
    purpleHover: "#7C5CF5",
    dark: "#3F3F46",
    darkHover: "#27272A",
    checkColor: "#6B7280",
    tagSketch: "#F59E0B",
    tagFig: "#A855F7",
    tagXd: "#EC4899",
  },
  dark: {
    background: "#111111",
    cardBackground: "#1F1F1F",
    cardBorder: "#333333",
    textPrimary: "#FFFFFF",
    textSecondary: "#A1A1AA",
    textMuted: "#71717A",
    highlight: "#3B2D5C",
    purple: "#9681F7",
    purpleHover: "#7C5CF5",
    dark: "#E4E4E7",
    darkHover: "#F4F4F5",
    checkColor: "#A1A1AA",
    tagSketch: "#F59E0B",
    tagFig: "#A855F7",
    tagXd: "#EC4899",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  title: {
    highlighted: "Finely-tuned",
    rest: "for\nindividuals and teams",
  },
  plans: [
    {
      id: "tiny",
      name: "Tiny",
      price: "$29",
      features: [
        { text: "Tiny Flowkit library" },
        { text: ".sketch", tags: [".sketch", ".fig", ".xd"] },
        { text: "Unlimited projects" },
        { text: "1 license" },
      ],
      buttonText: "Buy",
      buttonVariant: "outline" as const,
      footerLink: "Preview file",
    },
    {
      id: "pro",
      name: "Pro",
      price: "$49",
      features: [
        { text: "Full Flowkit library" },
        { text: ".sketch", tags: [".sketch", ".fig", ".xd"] },
        { text: "Figma plugin access" },
        { text: "1 year of updates" },
        { text: "Unlimited projects" },
        { text: "1 license" },
      ],
      buttonText: "Buy",
      buttonVariant: "purple" as const,
      footerLink: "Preview file",
      highlighted: true,
    },
    {
      id: "team",
      name: "Team",
      price: "$199",
      features: [
        { text: "Full Flowkit library" },
        { text: ".sketch", tags: [".sketch", ".fig", ".xd"] },
        { text: "Figma plugin access" },
        { text: "1 year of updates" },
        { text: "Unlimited projects" },
        { text: "5 licenses" },
      ],
      buttonText: "Buy",
      buttonVariant: "dark" as const,
      footerLink: "Need more than 5?",
    },
  ],
  footerNote:
    "Upon purchase you'll receive a link to download your .zip file containing\n.sketch, .fig, and .xd files—as well as your Figma plugin license key.",
  educationalDiscount: "Student or Teacher? Get an educational discount.",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, GraduationCap } from "lucide-react";

interface Feature {
  text: string;
  tags?: string[];
}

interface Plan {
  id: string;
  name: string;
  price: string;
  features: Feature[];
  buttonText: string;
  buttonVariant: "outline" | "purple" | "dark";
  footerLink?: string;
  highlighted?: boolean;
}

interface PricingOplMaster1112Props {
  mode?: "light" | "dark";
  title?: {
    highlighted: string;
    rest: string;
  };
  plans?: Plan[];
  footerNote?: string;
  educationalDiscount?: string;
}

// File format tag component
function FormatTag({
  format,
  colors,
}: {
  format: string;
  colors: (typeof COLORS)["light"] | (typeof COLORS)["dark"];
}) {
  const getTagColor = () => {
    switch (format) {
      case ".sketch":
        return colors.tagSketch;
      case ".fig":
        return colors.tagFig;
      case ".xd":
        return colors.tagXd;
      default:
        return colors.textMuted;
    }
  };

  return (
    <span
      className="px-1.5 py-0.5 text-xs rounded font-medium"
      style={{
        backgroundColor: `${getTagColor()}15`,
        color: getTagColor(),
      }}
    >
      {format}
    </span>
  );
}

export default function PricingOplMaster1112({
  mode = "light",
  title = DEFAULT_CONTENT.title,
  plans = DEFAULT_CONTENT.plans,
  footerNote = DEFAULT_CONTENT.footerNote,
  educationalDiscount = DEFAULT_CONTENT.educationalDiscount,
}: PricingOplMaster1112Props) {
  const colors = COLORS[mode];

  const getButtonStyle = (variant: "outline" | "purple" | "dark") => {
    switch (variant) {
      case "outline":
        return {
          backgroundColor: "transparent",
          border: `1px solid ${colors.cardBorder}`,
          color: colors.textPrimary,
        };
      case "purple":
        return {
          backgroundColor: colors.purple,
          border: "none",
          color: "#FFFFFF",
        };
      case "dark":
        return {
          backgroundColor: colors.dark,
          border: "none",
          color: "#FFFFFF",
        };
    }
  };

  return (
    <section
      className="relative w-full py-20 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight"
            style={{ color: colors.textPrimary }}
          >
            <span
              className="px-2 py-1 rounded-md"
              style={{ backgroundColor: colors.highlight }}
            >
              {title.highlighted}
            </span>{" "}
            <span className="whitespace-pre-line">{title.rest}</span>
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className="rounded-2xl p-6 flex flex-col"
              style={{
                backgroundColor: colors.cardBackground,
                border: `1px solid ${colors.cardBorder}`,
                boxShadow:
                  mode === "light"
                    ? "0 4px 20px rgba(0, 0, 0, 0.05)"
                    : "none",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Plan Name */}
              <div className="mb-4">
                <h3
                  className="text-sm font-medium"
                  style={{ color: colors.textSecondary }}
                >
                  {plan.name}
                </h3>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span
                  className="text-4xl font-bold"
                  style={{
                    color:
                      plan.id === "team" ? colors.purple : colors.textPrimary,
                  }}
                >
                  {plan.price}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check
                      size={16}
                      style={{ color: colors.checkColor }}
                      className="mt-0.5 flex-shrink-0"
                    />
                    {feature.tags ? (
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {feature.tags.map((tag, tagIndex) => (
                          <FormatTag key={tagIndex} format={tag} colors={colors} />
                        ))}
                      </div>
                    ) : (
                      <span
                        className="text-sm"
                        style={{ color: colors.textSecondary }}
                      >
                        {feature.text}
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <motion.button
                className="w-full py-3 rounded-full text-sm font-medium transition-all"
                style={getButtonStyle(plan.buttonVariant)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.buttonText}
              </motion.button>

              {/* Footer Link */}
              {plan.footerLink && (
                <div className="mt-4 text-center">
                  <a
                    href="#"
                    className="text-xs underline hover:no-underline"
                    style={{ color: colors.textMuted }}
                  >
                    {plan.footerLink}
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p
            className="text-xs whitespace-pre-line"
            style={{ color: colors.textMuted }}
          >
            {footerNote}
          </p>
          <p className="flex items-center justify-center gap-2">
            <GraduationCap
              size={16}
              style={{ color: colors.textMuted }}
            />
            <a
              href="#"
              className="text-xs underline hover:no-underline"
              style={{ color: colors.textMuted }}
            >
              {educationalDiscount}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
