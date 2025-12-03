"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#0a0a0a",
    cardBackground: "#161616",
    textPrimary: "#ffffff",
    textSecondary: "#9a9a9a",
    textMuted: "#666666",
    gold: "#c9a227",
    goldBadge: "#d4a847",
    buttonYellow: "#d4a847",
    buttonYellowHover: "#c9a227",
    toggleBackground: "#1a1a1a",
    toggleActive: "#2a2a2a",
    greenBadge: "#22c55e",
    border: "#333333",
  },
  dark: {
    background: "#0a0a0a",
    cardBackground: "#161616",
    textPrimary: "#ffffff",
    textSecondary: "#9a9a9a",
    textMuted: "#666666",
    gold: "#c9a227",
    goldBadge: "#d4a847",
    buttonYellow: "#d4a847",
    buttonYellowHover: "#c9a227",
    toggleBackground: "#1a1a1a",
    toggleActive: "#2a2a2a",
    greenBadge: "#22c55e",
    border: "#333333",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  title: "Build credibility and drive growth",
  saveBadgeText: "SAVE 15%",
  plans: [
    {
      id: "basic",
      name: "Basic",
      price: "$166.67",
      priceUnit: "/ month",
      billingNote: "$2,000 billed annually",
      buttonText: "Apply now",
      buttonVariant: "outline" as const,
      headerNote: "All Premium+ benefits plus:",
      features: [
        "Gold checkmark",
        "$2,500 free ad credit yearly*",
        "Careers page with unlimited jobs",
        "Standard analytics",
        "Priority support",
        "Radar Basic",
      ],
    },
    {
      id: "fullAccess",
      name: "Full Access",
      badge: "Most Popular",
      price: "$833.33",
      priceUnit: "/ month",
      billingNote: "$10,000 billed annually",
      buttonText: "Apply now",
      buttonVariant: "filled" as const,
      headerNote: "Everything in Basic plus:",
      features: [
        "Affiliate your employees",
        "$12,000 free ad credit yearly *",
        "Access priority handles",
        "Impersonation defense",
        "Advanced analytics",
        "VIP support",
        "Radar Pro",
      ],
      footerNote:
        "Each additional affiliated account is $600 per month per seat and all benefits are subject to limitations. Learn more",
      highlighted: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Custom",
      priceSubtext: "Inquire to learn more",
      buttonText: "Learn more",
      buttonVariant: "outline" as const,
      headerNote: "Everything in Full Access plus:",
      features: [
        "Affiliate packages",
        "Advanced account protection",
        "Highest tool rate limits",
        "Dedicated support team",
        "People Search",
        "Early access to new features",
      ],
    },
  ],
  footnotes: [
    "*Limited time ad credit offer, subject to terms. Learn more",
    "All plans are subject to applicable taxes and fees. Learn more",
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

interface Feature {
  text: string;
}

interface Plan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  priceUnit?: string;
  priceSubtext?: string;
  billingNote?: string;
  buttonText: string;
  buttonVariant: "outline" | "filled";
  headerNote: string;
  features: string[];
  footerNote?: string;
  highlighted?: boolean;
}

interface PricingOplMasterPremiumBusinessProps {
  mode?: "light" | "dark";
  title?: string;
  saveBadgeText?: string;
  plans?: Plan[];
  footnotes?: string[];
}

// Gold checkmark icon component
function GoldCheckmark({ color = "#c9a227" }: { color?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" fill={color} />
      <path
        d="M8 12L11 15L16 9"
        stroke="#0a0a0a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingOplMasterPremiumBusiness({
  mode = "dark",
  title = DEFAULT_CONTENT.title,
  saveBadgeText = DEFAULT_CONTENT.saveBadgeText,
  plans = DEFAULT_CONTENT.plans,
  footnotes = DEFAULT_CONTENT.footnotes,
}: PricingOplMasterPremiumBusinessProps) {
  const colors = COLORS[mode];
  const [billingPeriod, setBillingPeriod] = useState<"annually" | "monthly">(
    "annually"
  );

  return (
    <section
      className="relative w-full py-16 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{ color: colors.textPrimary }}
          >
            {title}
          </h2>

          {/* Billing Toggle */}
          <div
            className="inline-flex items-center rounded-full p-1"
            style={{ backgroundColor: colors.toggleBackground }}
          >
            <button
              className="relative flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all"
              style={{
                backgroundColor:
                  billingPeriod === "annually"
                    ? colors.toggleActive
                    : "transparent",
                color: colors.textPrimary,
              }}
              onClick={() => setBillingPeriod("annually")}
            >
              Annually
              {billingPeriod === "annually" && (
                <span
                  className="px-2 py-0.5 text-[10px] font-semibold rounded-full"
                  style={{
                    backgroundColor: colors.greenBadge,
                    color: "#000000",
                  }}
                >
                  {saveBadgeText}
                </span>
              )}
            </button>
            <button
              className="px-4 py-2 text-sm font-medium rounded-full transition-all"
              style={{
                backgroundColor:
                  billingPeriod === "monthly"
                    ? colors.toggleActive
                    : "transparent",
                color: colors.textSecondary,
              }}
              onClick={() => setBillingPeriod("monthly")}
            >
              Monthly
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className="relative rounded-2xl p-6"
              style={{
                backgroundColor: colors.cardBackground,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Card Header */}
              <div className="flex items-center gap-2 mb-4">
                <GoldCheckmark color={colors.gold} />
                <span
                  className="text-lg font-semibold"
                  style={{ color: colors.textPrimary }}
                >
                  {plan.name}
                </span>
                {plan.badge && (
                  <span
                    className="px-2 py-0.5 text-[10px] font-semibold rounded"
                    style={{
                      backgroundColor: colors.goldBadge,
                      color: "#000000",
                    }}
                  >
                    {plan.badge}
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="mb-1">
                <span
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: colors.textPrimary }}
                >
                  {plan.price}
                </span>
                {plan.priceUnit && (
                  <span
                    className="text-sm ml-1"
                    style={{ color: colors.textSecondary }}
                  >
                    {plan.priceUnit}
                  </span>
                )}
              </div>

              {/* Billing Note or Price Subtext */}
              {plan.billingNote && (
                <p
                  className="text-sm mb-4"
                  style={{ color: colors.textSecondary }}
                >
                  {plan.billingNote}
                </p>
              )}
              {plan.priceSubtext && (
                <p
                  className="text-sm mb-4"
                  style={{ color: colors.textSecondary }}
                >
                  {plan.priceSubtext}
                </p>
              )}

              {/* Button */}
              <motion.button
                className="w-full py-3 rounded-full text-sm font-medium transition-all mb-6"
                style={
                  plan.buttonVariant === "filled"
                    ? {
                        backgroundColor: colors.buttonYellow,
                        color: "#000000",
                      }
                    : {
                        backgroundColor: "transparent",
                        border: `1px solid ${colors.border}`,
                        color: colors.textPrimary,
                      }
                }
                whileHover={{
                  scale: 1.02,
                  backgroundColor:
                    plan.buttonVariant === "filled"
                      ? colors.buttonYellowHover
                      : "rgba(255, 255, 255, 0.05)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.buttonText}
              </motion.button>

              {/* Header Note */}
              <p
                className="text-sm mb-4"
                style={{ color: colors.textSecondary }}
              >
                {plan.headerNote}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check
                      size={16}
                      style={{ color: colors.textSecondary, marginTop: 2 }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: colors.textSecondary }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Footer Note */}
              {plan.footerNote && (
                <p
                  className="mt-6 text-[10px] leading-relaxed"
                  style={{ color: colors.textMuted }}
                >
                  {plan.footerNote}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footnotes */}
        <div className="text-center space-y-1">
          {footnotes.map((note, index) => (
            <p
              key={index}
              className="text-xs"
              style={{ color: colors.textMuted }}
            >
              {note.includes("Learn more") ? (
                <>
                  {note.replace(" Learn more", "")}{" "}
                  <a
                    href="#"
                    className="font-semibold underline"
                    style={{ color: colors.textPrimary }}
                  >
                    Learn more
                  </a>
                </>
              ) : (
                note
              )}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
