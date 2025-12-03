"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#2B3A4F",
  cardDark: "#374357",
  cardLight: "#F4F5F7",
  accent: "#4C6EF5",
  accentHover: "#3B5DE7",
  toggleBg: "rgba(255, 255, 255, 0.1)",
  toggleActive: "rgba(255, 255, 255, 0.2)",
  badgeBg: "rgba(255, 255, 255, 0.15)",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import { Check, Tag, Twitter, Github } from "lucide-react";

interface PricingOplScreenshot27Props {
  personalTitle?: string;
  personalMonthlyPrice?: number;
  personalOriginalPrice?: number;
  personalYearlyPrice?: number;
  personalYearlyOriginalPrice?: number;
  personalDescription?: string;
  personalFeatures?: string[];
  personalSaveBadge?: string;
  teamsTitle?: string;
  teamsDescription?: string;
  teamsFeatures?: string[];
  brandLogos?: {
    name: string;
    icon: React.ReactNode;
  }[];
  socialProofText?: string;
  onBuyNow?: () => void;
  onTryForFree?: () => void;
  onGetQuote?: () => void;
  onContactUs?: () => void;
}

// Netflix logo component
const NetflixLogo = () => (
  <svg viewBox="0 0 111 30" className="h-4" fill="currentColor">
    <path d="M105.06 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0H99.5l3.062 8.062L105.594 0h4.812l-5.344 14.28zM90.02 0h-4.5v27.656c1.5.094 3.062.188 4.5.375V0zm-8.592 25.563c-1.14-.188-2.28-.313-3.438-.438-.562 2.813-3.719 2.563-4.437 1.219-.75-1.375-1.063-3.062-1.063-4.563V0h-4.5v21.188c0 3.562.563 7.063 3.75 8.531 3.375 1.563 7.969.938 9.688-4.156zm-32.093 0l.002 4.125c1.529.077 3.156.218 4.687.311V25.562h4.001V21.25h-4.001V7.75h4.001v-4.5h-4.001V0h-4.687v3.25h-4.095v4.5h4.095v13.563h-.002zm-10.97-19.313v4.5H34.68v25.125c1.219.094 2.407.188 3.531.281V10.75h3.719v-4.5h-3.719V0h-4.5v6.25h-3.625zM27.656 26.938C26.344 19.062 18.406 20.438 13.25 18.594c0-2.156.031-4.313.031-6.469 2.875-.531 6.031.344 7.313 2.875.625-1.281 1.281-2.563 1.906-3.844-1.625-1.719-3.812-3.094-6.531-3.094-6 0-7.281 4.938-7.281 10.063V30c3.781.281 7.5.563 11.25.938V17.812c1.094.188 2.063.719 2.375 1.75.531 1.938.594 4.031.813 6.031 1.5.156 3.031.281 4.531.313v.031zm-11.594-2.75v5.281c-1.344-.062-2.688-.156-4.031-.219v-5.75c1.344.25 2.719.469 4.031.688z" />
  </svg>
);

// Snapchat logo component
const SnapchatLogo = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.03-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.509 0-.904.074-1.274.149-.18.029-.359.06-.494.06-.3 0-.494-.149-.555-.42-.061-.18-.105-.375-.149-.57-.046-.194-.091-.479-.165-.57-1.857-.284-2.906-.702-3.131-1.271-.03-.075-.045-.149-.045-.225-.015-.239.165-.464.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-.809-.329-1.228-.719-1.228-1.153-.015-.36.285-.69.72-.854.149-.06.314-.09.494-.09.12 0 .3.015.449.104.374.165.723.254 1.003.286.152 0 .285-.029.4-.074-.013-.19-.028-.384-.042-.59l-.003-.057c-.104-1.628-.23-3.654.299-4.847C7.846 1.069 11.217.793 12.206.793" />
  </svg>
);

// Meta logo component
const MetaLogo = () => (
  <svg viewBox="0 0 100 20" className="h-4" fill="currentColor">
    <path d="M6.07 18.77c-1.37 0-2.47-.31-3.3-.93-.83-.62-1.37-1.48-1.62-2.58-.14-.61-.21-1.36-.21-2.25V1.23h3.13v11.7c0 .7.05 1.25.15 1.66.16.66.54 1.14 1.14 1.44.35.18.78.27 1.29.27l-.58 2.47zm13.9-7.89c0 1.8-.33 3.24-1 4.31-.89 1.44-2.24 2.16-4.04 2.16-1.8 0-3.15-.72-4.04-2.16-.67-1.07-1-2.51-1-4.31 0-1.8.33-3.24 1-4.31.89-1.44 2.24-2.16 4.04-2.16 1.8 0 3.15.72 4.04 2.16.67 1.07 1 2.51 1 4.31zm-3.13 0c0-1.17-.13-2.08-.38-2.74-.34-.9-.9-1.35-1.67-1.35s-1.33.45-1.67 1.35c-.25.66-.38 1.57-.38 2.74 0 1.17.13 2.08.38 2.74.34.9.9 1.35 1.67 1.35s1.33-.45 1.67-1.35c.25-.66.38-1.57.38-2.74zm16.09 3.66c0 2.31-.49 3.98-1.46 5.01-.97 1.03-2.46 1.55-4.47 1.55-2.01 0-3.5-.52-4.47-1.55-.97-1.03-1.46-2.7-1.46-5.01V4.6h3.13v9.94c0 1.31.2 2.25.59 2.82.39.57 1.08.86 2.07.86s1.68-.29 2.07-.86c.39-.57.59-1.51.59-2.82V4.6h3.13v9.94h-.72zm4.32 3.93V4.6h3.13v2.26c.36-.84.82-1.46 1.38-1.86.56-.4 1.22-.6 1.98-.6.76 0 1.43.2 2.01.6.58.4 1.01.96 1.29 1.68.36-.84.82-1.46 1.38-1.86.56-.4 1.22-.6 1.98-.6 1.31 0 2.28.45 2.91 1.35.63.9.95 2.24.95 4.02v8.88h-3.13v-8.56c0-.94-.13-1.62-.38-2.04-.25-.42-.67-.63-1.26-.63s-1.05.24-1.38.72c-.33.48-.5 1.14-.5 1.98v8.53h-3.13v-8.56c0-.94-.13-1.62-.38-2.04-.25-.42-.67-.63-1.26-.63s-1.05.24-1.38.72c-.33.48-.5 1.14-.5 1.98v8.53h-3.71zm25.02.18c-1.81 0-3.19-.67-4.14-2.01-.95-1.34-1.43-3.04-1.43-5.1 0-1.7.39-3.16 1.17-4.38.93-1.44 2.24-2.16 3.93-2.16 1.69 0 2.95.69 3.78 2.07V1.23h3.13v17.24h-3.13v-1.86c-.83 1.38-2.12 2.07-3.87 2.07l.56-.21zm.96-2.64c.84 0 1.48-.38 1.91-1.14.43-.76.65-1.69.65-2.79 0-1.1-.22-2.03-.65-2.79-.43-.76-1.07-1.14-1.91-1.14s-1.48.38-1.91 1.14c-.43.76-.65 1.69-.65 2.79 0 1.1.22 2.03.65 2.79.43.76 1.07 1.14 1.91 1.14zm15.87 2.64c-1.81 0-3.19-.67-4.14-2.01-.95-1.34-1.43-3.04-1.43-5.1 0-1.7.39-3.16 1.17-4.38.93-1.44 2.24-2.16 3.93-2.16 1.69 0 2.95.69 3.78 2.07V4.6h3.13v13.87h-3.13v-1.86c-.83 1.38-2.12 2.07-3.87 2.07l.56-.21zm.96-2.64c.84 0 1.48-.38 1.91-1.14.43-.76.65-1.69.65-2.79 0-1.1-.22-2.03-.65-2.79-.43-.76-1.07-1.14-1.91-1.14s-1.48.38-1.91 1.14c-.43.76-.65 1.69-.65 2.79 0 1.1.22 2.03.65 2.79.43.76 1.07 1.14 1.91 1.14z" />
  </svg>
);

export default function PricingOplScreenshot27({
  personalTitle = "Personal",
  personalMonthlyPrice = 9,
  personalOriginalPrice = 12,
  personalYearlyPrice = 89,
  personalYearlyOriginalPrice = 119,
  personalDescription = "1 license, unlimited use.",
  personalFeatures = [
    "Unlimited prototypes",
    "Over 100 API methods",
    "All future updates",
  ],
  personalSaveBadge = "Save 25% for a limited time",
  teamsTitle = "Teams",
  teamsDescription = "Unlimited team use.",
  teamsFeatures = ["Everything in Personal", "Bulk team licences"],
  socialProofText = "Prototyper is used by designers on these teams:",
  onBuyNow,
  onTryForFree,
  onGetQuote,
  onContactUs,
}: PricingOplScreenshot27Props) {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const currentPrice =
    billingPeriod === "monthly" ? personalMonthlyPrice : personalYearlyPrice;
  const originalPrice =
    billingPeriod === "monthly"
      ? personalOriginalPrice
      : personalYearlyOriginalPrice;
  const periodLabel = billingPeriod === "monthly" ? "per month" : "per year";

  return (
    <section
      className="relative min-h-screen w-full py-16 px-4 md:px-8"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center justify-center gap-3"
        >
          <Tag className="h-6 w-6 text-white" />
          <h2 className="text-2xl font-semibold text-white">Pricing</h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-4">
          {/* Personal Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full max-w-sm rounded-2xl p-6 md:p-8"
            style={{ backgroundColor: COLORS.cardDark }}
          >
            <h3 className="mb-4 text-lg font-semibold text-white">
              {personalTitle}
            </h3>

            {/* Billing Toggle */}
            <div
              className="mb-6 inline-flex rounded-full p-1"
              style={{ backgroundColor: COLORS.toggleBg }}
            >
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  billingPeriod === "monthly"
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-300"
                }`}
                style={{
                  backgroundColor:
                    billingPeriod === "monthly"
                      ? COLORS.toggleActive
                      : "transparent",
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  billingPeriod === "yearly"
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-300"
                }`}
                style={{
                  backgroundColor:
                    billingPeriod === "yearly"
                      ? COLORS.toggleActive
                      : "transparent",
                }}
              >
                Yearly
              </button>
            </div>

            {/* Price */}
            <div className="mb-3 flex items-baseline gap-2">
              <span className="text-gray-400 line-through text-lg">
                ${originalPrice}
              </span>
              <span className="text-3xl font-bold text-white">
                ${currentPrice}
              </span>
              <span className="text-sm text-gray-400 italic">{periodLabel}</span>
            </div>

            {/* Save Badge */}
            <div
              className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-medium text-white"
              style={{ backgroundColor: COLORS.badgeBg }}
            >
              {personalSaveBadge}
            </div>

            {/* Description */}
            <p className="mb-6 text-sm text-gray-400">{personalDescription}</p>

            {/* Features */}
            <ul className="mb-8 space-y-3">
              {personalFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 text-sm text-white"
                >
                  <Check className="h-4 w-4 flex-shrink-0 text-white" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            {/* Buttons */}
            <button
              onClick={onBuyNow}
              className="mb-3 w-full rounded-lg py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: COLORS.accent }}
            >
              Buy now
            </button>
            <button
              onClick={onTryForFree}
              className="w-full py-2 text-sm font-medium text-gray-300 transition-all hover:text-white"
            >
              Try for free
            </button>
          </motion.div>

          {/* Teams Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-sm rounded-2xl p-6 md:p-8 md:mt-16"
            style={{ backgroundColor: COLORS.cardLight }}
          >
            <p className="mb-1 text-sm text-gray-500">{teamsTitle}</p>
            <h3 className="mb-2 text-3xl font-bold text-gray-900">Custom</h3>
            <p className="mb-6 text-sm text-gray-500">{teamsDescription}</p>

            {/* Features */}
            <ul className="mb-8 space-y-3">
              {teamsFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-sm text-gray-700"
                >
                  <Check className="h-4 w-4 flex-shrink-0 text-gray-700" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            {/* Buttons */}
            <button
              onClick={onGetQuote}
              className="mb-3 w-full rounded-lg py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: COLORS.accent }}
            >
              Get a quote
            </button>
            <button
              onClick={onContactUs}
              className="w-full py-2 text-sm font-medium text-gray-600 transition-all hover:text-gray-900"
            >
              Contact us
            </button>
          </motion.div>
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-sm text-gray-400">{socialProofText}</p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400">
            <Twitter className="h-5 w-5" />
            <NetflixLogo />
            <SnapchatLogo />
            <Github className="h-5 w-5" />
            <MetaLogo />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
