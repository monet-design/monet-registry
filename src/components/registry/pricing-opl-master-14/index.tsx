"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#CF5EAC",
    accentHover: "#B84A97",
    pinkBg: "#FFE0F8",
    pinkBgLight: "#FEE0F8",
    grayBg: "#F4F4F8",
  },
  dark: {
    accent: "#E07BC5",
    accentHover: "#CF5EAC",
    pinkBg: "#3D2A38",
    pinkBgLight: "#2D1D28",
    grayBg: "#1F1F23",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, ShieldCheck, Lock, CreditCard, Calendar, Cloud, Globe, Server, Zap, Headphones } from "lucide-react";

interface PlanFeature {
  text: string;
  highlighted?: boolean;
  hasInfo?: boolean;
}

interface PricingPlan {
  name: string;
  activations: string;
  activationCount: string;
  discount?: string;
  price: number;
  originalPrice?: number;
  period: string;
  features: PlanFeature[];
  isPopular?: boolean;
  buttonFilled?: boolean;
}

interface CloudFeature {
  icon: React.ReactNode;
  text: string;
  highlight?: boolean;
}

interface GuaranteeItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface PricingOplMaster14Props {
  mode?: "light" | "dark";
  headline?: string;
  discountText?: string;
  cloudTitle?: string;
  cloudSubtitle?: string;
  cloudDescription?: string;
  cloudDiscount?: string;
  cloudPrice?: number;
  cloudOriginalPrice?: number;
  cloudFeatures?: CloudFeature[];
  pluginSectionTitle?: string;
  pluginSectionSubtitle?: string;
  plans?: PricingPlan[];
  guarantees?: GuaranteeItem[];
  upgradeText?: string;
  upgradeLinkText?: string;
  disclaimerText?: string;
  onBuyNow?: (planName: string) => void;
  onUpgradeClick?: () => void;
}

const defaultCloudFeatures: CloudFeature[] = [
  { icon: <Server className="w-4 h-4" />, text: "Hosting by GCP" },
  { icon: <Globe className="w-4 h-4" />, text: "CDN by Cloudflare" },
  { icon: <ShieldCheck className="w-4 h-4" />, text: "Free SSL Certificate" },
  { icon: <Zap className="w-4 h-4" />, text: "Elementor Pro" },
  { icon: <Globe className="w-4 h-4" />, text: "Custom Domain Connection" },
  { icon: <Headphones className="w-4 h-4" />, text: "Premium Support", highlight: true },
  { icon: <Cloud className="w-4 h-4" />, text: "WordPress Pre-Installed" },
  { icon: <Server className="w-4 h-4" />, text: "Ample Storage & Bandwidth" },
];

const defaultPlans: PricingPlan[] = [
  {
    name: "ESSENTIAL PLAN",
    activations: "WEBSITE ACTIVATION",
    activationCount: "1 PRO",
    price: 49,
    period: "Year",
    features: [
      { text: "All Pro Features" },
      { text: "Premium Support" },
      { text: "Website Kits" },
    ],
  },
  {
    name: "ADVANCED PLAN",
    activations: "WEBSITE ACTIVATIONS",
    activationCount: "3 PRO",
    discount: "10% OFF",
    price: 89,
    originalPrice: 99,
    period: "Year",
    features: [
      { text: "All Pro Features" },
      { text: "Premium Support" },
      { text: "Website Kits" },
    ],
  },
  {
    name: "EXPERT PLAN",
    activations: "WEBSITE ACTIVATIONS",
    activationCount: "25 PRO",
    discount: "20% OFF",
    price: 159,
    originalPrice: 199,
    period: "Year",
    isPopular: true,
    buttonFilled: true,
    features: [
      { text: "All Pro Features" },
      { text: "Premium Support" },
      { text: "Expert Website Kits", highlighted: true, hasInfo: true },
      { text: "Elementor Expert Profile", highlighted: true, hasInfo: true },
    ],
  },
  {
    name: "AGENCY PLAN",
    activations: "WEBSITE ACTIVATIONS",
    activationCount: "1000 PRO",
    discount: "60% OFF",
    price: 399,
    originalPrice: 999,
    period: "Year",
    features: [
      { text: "All Pro Features" },
      { text: "VIP Support", highlighted: true, hasInfo: true },
      { text: "Expert Website Kits", highlighted: true, hasInfo: true },
      { text: "Elementor Expert Profile", highlighted: true, hasInfo: true },
    ],
  },
];

const defaultGuarantees: GuaranteeItem[] = [
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Money Back Guarantee",
    description: "Try Elementor for 30 days, zero strings attached.",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "SSL Secure Payment",
    description: "Your information is protected by 256-bit SSL encryption.",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Accepted Payment Methods",
    description: "We accept all major credit cards and PayPal.",
  },
];

export default function PricingOplMaster14({
  mode = "light",
  headline = "Don't Miss Out on the Fun! Get Up to 60% Off",
  discountText = "30% OFF",
  cloudTitle = "Elementor Cloud Website",
  cloudSubtitle = "WP builder + built-in hosting. One website, one fixed price. 30 days money-back guarantee.",
  cloudDescription = "Everything you need is built-in:",
  cloudDiscount = "30% OFF",
  cloudPrice = 69,
  cloudOriginalPrice = 99,
  cloudFeatures = defaultCloudFeatures,
  pluginSectionTitle = "Or Explore Elementor Plugin Plans*",
  pluginSectionSubtitle = "*Please note: plugin plans do not include hosting",
  plans = defaultPlans,
  guarantees = defaultGuarantees,
  upgradeText = "Already have Elementor Pro?",
  upgradeLinkText = "Check out our Upgrade offers",
  disclaimerText = "The above prices do not include applicable taxes based on your billing address. The final price will be displayed on the checkout page, before the payment is completed.",
  onBuyNow,
  onUpgradeClick,
}: PricingOplMaster14Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section className={`relative w-full py-12 px-4 ${isDark ? "bg-gray-950" : "bg-white"}`}>
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-3xl md:text-4xl font-bold text-center mb-8 ${isDark ? "text-white" : "text-gray-900"}`}
        >
          {headline}
        </motion.h1>

        {/* Cloud Website Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-lg p-6 mb-10 relative overflow-hidden"
          style={{ backgroundColor: colors.pinkBg }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-white/80 flex items-center justify-center">
                  <Cloud className="w-6 h-6" style={{ color: colors.accent }} />
                </div>
                <div>
                  <h2 className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                    {cloudTitle}
                  </h2>
                  <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    {cloudSubtitle}
                  </p>
                </div>
              </div>

              <p className={`text-sm font-medium mt-4 mb-3 ${isDark ? "text-gray-200" : "text-gray-700"}`}>
                {cloudDescription}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {cloudFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: colors.accent }} />
                    <span
                      className={`text-xs ${
                        feature.highlight
                          ? isDark
                            ? "text-pink-300 font-medium"
                            : "text-pink-600 font-medium"
                          : isDark
                          ? "text-gray-300"
                          : "text-gray-600"
                      }`}
                    >
                      {feature.text}
                      {feature.highlight && (
                        <span className="inline-block w-3 h-3 rounded-full bg-pink-200 text-pink-600 text-[8px] ml-1 text-center leading-3">?</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-3">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: colors.accent }}
              >
                {cloudDiscount}
              </span>
              <div className="text-right">
                <div className="flex items-baseline gap-1">
                  <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>USD</span>
                  <span className={`text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                    {cloudPrice}
                  </span>
                  <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>/ Year</span>
                </div>
                {cloudOriginalPrice && (
                  <span className={`text-sm line-through ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                    {cloudOriginalPrice}USD
                  </span>
                )}
              </div>
              <button
                onClick={() => onBuyNow?.("Cloud Website")}
                className="px-6 py-2 rounded-md text-sm font-medium transition-all hover:scale-105"
                style={{ backgroundColor: colors.accent, color: "white" }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* Plugin Plans Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className={`text-2xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
            {pluginSectionTitle}
          </h2>
          <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            {pluginSectionSubtitle}
          </p>
        </motion.div>

        {/* Pricing Plans Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mb-10 border rounded-lg overflow-hidden"
          style={{ borderColor: isDark ? "#374151" : "#E5E7EB" }}
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col ${
                index < plans.length - 1 ? "border-r" : ""
              }`}
              style={{
                borderColor: isDark ? "#374151" : "#E5E7EB",
                backgroundColor: plan.isPopular
                  ? colors.pinkBg
                  : isDark
                  ? colors.grayBg
                  : colors.grayBg,
              }}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div
                  className="absolute top-0 left-0 right-0 text-center py-1 text-xs font-bold text-white"
                  style={{ backgroundColor: colors.accent }}
                >
                  POPULAR
                </div>
              )}

              {/* Plan Header */}
              <div
                className={`px-4 py-3 text-center border-b ${plan.isPopular ? "mt-6" : ""}`}
                style={{ borderColor: isDark ? "#374151" : "#E5E7EB" }}
              >
                <h3
                  className={`text-xs font-bold tracking-wide ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {plan.name}
                </h3>
              </div>

              {/* Plan Content */}
              <div className="flex-1 p-4 flex flex-col">
                {/* Activation Count */}
                <div className="text-center mb-4">
                  <p
                    className="text-2xl font-bold"
                    style={{ color: colors.accent }}
                  >
                    {plan.activationCount}
                  </p>
                  <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                    {plan.activations}
                  </p>
                </div>

                {/* Discount Badge */}
                {plan.discount && (
                  <div className="text-center mb-3">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: plan.isPopular
                          ? "rgba(207, 94, 172, 0.2)"
                          : isDark
                          ? "rgba(207, 94, 172, 0.3)"
                          : "rgba(207, 94, 172, 0.15)",
                        color: colors.accent,
                      }}
                    >
                      {plan.discount}
                    </span>
                  </div>
                )}

                {/* Price */}
                <div className="text-center mb-4">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>USD</span>
                    <span className={`text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                      / {plan.period}
                    </span>
                  </div>
                  {plan.originalPrice && (
                    <span className={`text-sm line-through ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                      {plan.originalPrice}USD
                    </span>
                  )}
                </div>

                {/* Buy Button */}
                <button
                  onClick={() => onBuyNow?.(plan.name)}
                  className={`w-full py-2 rounded-md text-sm font-medium transition-all hover:scale-105 mb-4 ${
                    plan.buttonFilled
                      ? "text-white"
                      : isDark
                      ? "bg-transparent border text-white"
                      : "bg-transparent border text-gray-900"
                  }`}
                  style={{
                    backgroundColor: plan.buttonFilled ? colors.accent : "transparent",
                    borderColor: plan.buttonFilled ? colors.accent : isDark ? "#6B7280" : "#D1D5DB",
                  }}
                >
                  Buy Now
                </button>

                {/* Features */}
                <div className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <Check
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: feature.highlighted ? colors.accent : isDark ? "#9CA3AF" : "#6B7280" }}
                      />
                      <span
                        className={`text-xs ${
                          feature.highlighted
                            ? "font-medium"
                            : ""
                        }`}
                        style={{
                          color: feature.highlighted
                            ? colors.accent
                            : isDark
                            ? "#D1D5DB"
                            : "#4B5563",
                        }}
                      >
                        {feature.text}
                        {feature.hasInfo && (
                          <span
                            className="inline-flex items-center justify-center w-3 h-3 rounded-full text-[8px] ml-1"
                            style={{
                              backgroundColor: `${colors.accent}30`,
                              color: colors.accent,
                            }}
                          >
                            ?
                          </span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Upgrade Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6"
        >
          <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            {upgradeText}{" "}
            <button
              onClick={onUpgradeClick}
              className="underline font-medium hover:opacity-80 transition-opacity"
              style={{ color: colors.accent }}
            >
              {upgradeLinkText}
            </button>
          </p>
          <p className={`text-xs mt-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
            {disclaimerText}
          </p>
        </motion.div>

        {/* Guarantees Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`border-t pt-8 ${isDark ? "border-gray-800" : "border-gray-200"}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 ${isDark ? "text-gray-400" : "text-gray-500"}`}
                >
                  {guarantee.icon}
                </div>
                <div>
                  <h4 className={`text-sm font-semibold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                    {guarantee.title}
                  </h4>
                  <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                    {guarantee.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
