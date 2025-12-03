"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#000000",
    contentBackground: "#ffffff",
    cardBackground: "#ffffff",
    highlightedCardBackground: "#F5F5F7",
    textPrimary: "#1A1A1A",
    textSecondary: "#6B6B6B",
    textMuted: "#999999",
    accent: "#2563EB",
    accentHover: "#1D4ED8",
    border: "#E5E5E5",
    checkColor: "#1A1A1A",
    labelBackground: "#EFF6FF",
    labelText: "#2563EB",
    linkColor: "#2563EB",
  },
  dark: {
    background: "#000000",
    contentBackground: "#111111",
    cardBackground: "#1A1A1A",
    highlightedCardBackground: "#222222",
    textPrimary: "#ffffff",
    textSecondary: "#999999",
    textMuted: "#666666",
    accent: "#3B82F6",
    accentHover: "#2563EB",
    border: "#333333",
    checkColor: "#ffffff",
    labelBackground: "#1E3A5F",
    labelText: "#3B82F6",
    linkColor: "#3B82F6",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  label: "LICENSES",
  title: "Get Universal UI Kit (Web)",
  subtitle: "Projects require different types of licenses. Choose your one.",
  plans: [
    {
      id: "commercial",
      name: "Commercial (Single user)",
      description: "Best for freelancers, single designers, indie developers or solopreneurs.",
      features: [
        "Single user",
        "Personal or commercial projects",
        "Business social media accounts",
        "Physical or digital advertisements for local market",
      ],
      price: "$59",
      buttonText: "GET THIS",
      buttonVariant: "outline" as const,
      highlighted: false,
    },
    {
      id: "extended",
      name: "Extended (Unlimited users)",
      description: "Best for startups, teams, business or enterprise organisations.",
      features: [
        "Unlimited users",
        "Personal or commercial projects",
        "Business social media accounts",
        "Physical or digital advertisements for local, national and global markets",
        "Native apps, web apps or games",
      ],
      price: "$177",
      priceNote: "Best price if you need unlimited flexibility.",
      buttonText: "GET THIS",
      buttonVariant: "filled" as const,
      highlighted: true,
    },
  ],
  safetyNote: "Safety payments provided by Gumroad.",
  notReadyText: "Not ready to purchase?",
  previewLinkText: "the preview",
  previewLinkSuffix: " of the full version.",
  infoSection: {
    info: [
      { label: "Compatible with", value: "Figma" },
      { label: "Version", value: "1.0" },
      { label: "Release", value: "Oct 26, 2021" },
      { label: "Last update", value: "Oct 26, 2021" },
    ],
    features: [
      "All shapes are vector based",
      "Easy to change (Support Figma's Variants)",
      "Easy to change color and font",
    ],
    updates: {
      title: "Version 1.0 (Oct 26, 2021)",
      description: "Released the first version of the product",
    },
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, Shield } from "lucide-react";

interface Plan {
  id: string;
  name: string;
  description: string;
  features: string[];
  price: string;
  priceNote?: string;
  buttonText: string;
  buttonVariant: "outline" | "filled";
  highlighted: boolean;
}

interface InfoItem {
  label: string;
  value: string;
}

interface InfoSection {
  info: InfoItem[];
  features: string[];
  updates: {
    title: string;
    description: string;
  };
}

interface PricingOplMasterUniversalProps {
  mode?: "light" | "dark";
  label?: string;
  title?: string;
  subtitle?: string;
  plans?: Plan[];
  safetyNote?: string;
  notReadyText?: string;
  previewLinkText?: string;
  previewLinkSuffix?: string;
  infoSection?: InfoSection;
}

export default function PricingOplMasterUniversal({
  mode = "light",
  label = DEFAULT_CONTENT.label,
  title = DEFAULT_CONTENT.title,
  subtitle = DEFAULT_CONTENT.subtitle,
  plans = DEFAULT_CONTENT.plans,
  safetyNote = DEFAULT_CONTENT.safetyNote,
  notReadyText = DEFAULT_CONTENT.notReadyText,
  previewLinkText = DEFAULT_CONTENT.previewLinkText,
  previewLinkSuffix = DEFAULT_CONTENT.previewLinkSuffix,
  infoSection = DEFAULT_CONTENT.infoSection,
}: PricingOplMasterUniversalProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <motion.div
        className="max-w-4xl mx-auto rounded-2xl overflow-hidden"
        style={{ backgroundColor: colors.contentBackground }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header Section */}
        <div className="text-center pt-10 pb-6 px-6">
          <motion.span
            className="inline-block px-3 py-1 text-xs font-semibold tracking-wider rounded mb-4"
            style={{
              backgroundColor: colors.labelBackground,
              color: colors.labelText,
            }}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {label}
          </motion.span>
          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-2"
            style={{ color: colors.textPrimary }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-sm"
            style={{ color: colors.textSecondary }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="px-6 pb-6">
          <div className="grid md:grid-cols-2 gap-4">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                className="rounded-xl p-6"
                style={{
                  backgroundColor: plan.highlighted
                    ? colors.highlightedCardBackground
                    : colors.cardBackground,
                  border: plan.highlighted
                    ? "none"
                    : `1px solid ${colors.border}`,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                {/* Plan Header */}
                <h3
                  className="text-lg font-semibold mb-1"
                  style={{ color: colors.textPrimary }}
                >
                  {plan.name}
                </h3>
                <p
                  className="text-xs mb-4"
                  style={{ color: colors.textSecondary }}
                >
                  {plan.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check
                        size={16}
                        strokeWidth={2}
                        style={{ color: colors.checkColor }}
                        className="mt-0.5 flex-shrink-0"
                      />
                      <span
                        className="text-sm"
                        style={{ color: colors.textPrimary }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-4">
                  <span
                    className="text-3xl font-bold"
                    style={{ color: colors.textPrimary }}
                  >
                    {plan.price}
                  </span>
                  {plan.priceNote && (
                    <p
                      className="text-xs mt-1"
                      style={{ color: colors.textSecondary }}
                    >
                      {plan.priceNote}
                    </p>
                  )}
                </div>

                {/* Button */}
                <motion.button
                  className="w-full py-3 rounded-lg text-sm font-semibold tracking-wider transition-all"
                  style={
                    plan.buttonVariant === "filled"
                      ? {
                          backgroundColor: colors.accent,
                          color: "#ffffff",
                        }
                      : {
                          backgroundColor: "transparent",
                          border: `1px solid ${colors.textPrimary}`,
                          color: colors.textPrimary,
                        }
                  }
                  whileHover={{
                    scale: 1.02,
                    backgroundColor:
                      plan.buttonVariant === "filled"
                        ? colors.accentHover
                        : undefined,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.buttonText}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Safety Note */}
        <motion.div
          className="text-center pb-4 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <div
            className="flex items-center justify-center gap-2 text-xs"
            style={{ color: colors.textSecondary }}
          >
            <Shield size={14} />
            <span>{safetyNote}</span>
          </div>
        </motion.div>

        {/* Preview Link */}
        <motion.div
          className="text-center pb-8 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <p
            className="text-xs mb-1"
            style={{ color: colors.textSecondary }}
          >
            {notReadyText}
          </p>
          <p className="text-xs">
            <span style={{ color: colors.textSecondary }}>View </span>
            <a
              href="#"
              className="underline"
              style={{ color: colors.linkColor }}
            >
              {previewLinkText}
            </a>
            <span style={{ color: colors.textSecondary }}>
              {previewLinkSuffix}
            </span>
          </p>
        </motion.div>

        {/* Divider */}
        <div
          className="h-px mx-6"
          style={{ backgroundColor: colors.border }}
        />

        {/* Info Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          {/* Info Column */}
          <div>
            <h4
              className="text-sm font-semibold mb-3"
              style={{ color: colors.textPrimary }}
            >
              Info
            </h4>
            <dl className="space-y-2">
              {infoSection.info.map((item, index) => (
                <div key={index} className="flex justify-between text-xs">
                  <dt style={{ color: colors.textSecondary }}>{item.label}</dt>
                  <dd style={{ color: colors.textPrimary }}>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Features Column */}
          <div>
            <h4
              className="text-sm font-semibold mb-3"
              style={{ color: colors.textPrimary }}
            >
              Features
            </h4>
            <ul className="space-y-2">
              {infoSection.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check
                    size={14}
                    strokeWidth={2}
                    style={{ color: colors.checkColor }}
                    className="mt-0.5 flex-shrink-0"
                  />
                  <span
                    className="text-xs"
                    style={{ color: colors.textSecondary }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Updates Column */}
          <div>
            <h4
              className="text-sm font-semibold mb-3"
              style={{ color: colors.textPrimary }}
            >
              Updates
            </h4>
            <p
              className="text-xs font-medium mb-1"
              style={{ color: colors.textSecondary }}
            >
              {infoSection.updates.title}
            </p>
            <p className="text-xs" style={{ color: colors.textSecondary }}>
              {infoSection.updates.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
