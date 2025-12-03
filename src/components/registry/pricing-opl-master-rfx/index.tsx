"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F5F5F5",
    cardBg: "#FFFFFF",
    darkCardBg: "#0A0A0A",
    textPrimary: "#000000",
    textSecondary: "#666666",
    textMuted: "#888888",
    textOnDark: "#FFFFFF",
    textMutedOnDark: "#AAAAAA",
    accent: "#DC2626",
    accentHover: "#B91C1C",
    toggleBg: "#E5E5E5",
    toggleActive: "#DC2626",
    border: "#E5E5E5",
    checkColor: "#666666",
  },
  dark: {
    background: "#0A0A0A",
    cardBg: "#1A1A1A",
    darkCardBg: "#0A0A0A",
    textPrimary: "#FFFFFF",
    textSecondary: "#AAAAAA",
    textMuted: "#888888",
    textOnDark: "#FFFFFF",
    textMutedOnDark: "#AAAAAA",
    accent: "#DC2626",
    accentHover: "#EF4444",
    toggleBg: "#333333",
    toggleActive: "#DC2626",
    border: "#333333",
    checkColor: "#AAAAAA",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  badge: "Compare RFX pricing plans",
  header: {
    title: "Choose club or athlete plans",
    subtitle: "Choose the plan that fits your athletic journey and tailored to your goals.",
  },
  toggle: {
    yearly: "Yearly",
    monthly: "Monthly",
  },
  explorePlan: {
    title: "Explore for free",
    description: "Download the app and explore the features and benefits RFX has to offer — with no signup or billing while you try it out.",
    googlePlayText: "Google Play",
    appStoreText: "App Store",
  },
  clubPlan: {
    badge: "For Clubs",
    name: "Club Plan",
    price: "Free",
    description: "Promote your club and athletes for free on RFX, with full analytics. Add a paid subscription to create your own custom branded version of the platform.",
    features: [
      "Free for clubs to invite their players",
      "Advanced analytics dashboard",
      "Video highlight integration",
    ],
    buttonText: "Get Started",
    bottomText: "Custom branded app from $499.99 /yr",
  },
  athletePlan: {
    badge: "Most Popular",
    name: "Athletes",
    price: "$249.99",
    pricePeriod: "billed annually",
    description: "Say goodbye to college recruitment headaches. Put yourself in front of coaches nationwide, get instant feedback and find the right fit for your skills.",
    features: [
      "Build a professional athlete profile",
      "Connect with colleges and coaches",
      "Focus in on the right programs",
      "View feedback and track your progress",
    ],
    buttonText: "Get Started",
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import { Check, ChevronRight } from "lucide-react";

interface ExplorePlanContent {
  title: string;
  description: string;
  googlePlayText: string;
  appStoreText: string;
}

interface ClubPlanContent {
  badge: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  bottomText: string;
}

interface AthletePlanContent {
  badge: string;
  name: string;
  price: string;
  pricePeriod: string;
  description: string;
  features: string[];
  buttonText: string;
}

interface HeaderContent {
  title: string;
  subtitle: string;
}

interface ToggleContent {
  yearly: string;
  monthly: string;
}

interface PricingOplMasterRfxProps {
  mode?: "light" | "dark";
  badge?: string;
  header?: HeaderContent;
  toggle?: ToggleContent;
  explorePlan?: ExplorePlanContent;
  clubPlan?: ClubPlanContent;
  athletePlan?: AthletePlanContent;
  defaultBillingPeriod?: "yearly" | "monthly";
  onGetStartedClick?: (plan: string) => void;
  onAppStoreClick?: () => void;
  onGooglePlayClick?: () => void;
}

export default function PricingOplMasterRfx({
  mode = "light",
  badge = DEFAULT_CONTENT.badge,
  header = DEFAULT_CONTENT.header,
  toggle = DEFAULT_CONTENT.toggle,
  explorePlan = DEFAULT_CONTENT.explorePlan,
  clubPlan = DEFAULT_CONTENT.clubPlan,
  athletePlan = DEFAULT_CONTENT.athletePlan,
  defaultBillingPeriod = "yearly",
  onGetStartedClick,
  onAppStoreClick,
  onGooglePlayClick,
}: PricingOplMasterRfxProps) {
  const colors = COLORS[mode];
  const [billingPeriod, setBillingPeriod] = useState<"yearly" | "monthly">(defaultBillingPeriod);

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');

        .font-sans {
          font-family: 'Inter', system-ui, sans-serif;
        }

        .font-serif {
          font-family: 'Playfair Display', Georgia, serif;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              backgroundColor: colors.accent + "15",
              color: colors.accent,
              border: `1px solid ${colors.accent}40`,
            }}
          >
            <ChevronRight className="w-4 h-4" />
            {badge}
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4"
            style={{ color: colors.textPrimary }}
          >
            {header.title}
          </h1>
          <p
            className="font-sans text-sm md:text-base max-w-lg mx-auto"
            style={{ color: colors.textSecondary }}
          >
            {header.subtitle}
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div
            className="inline-flex p-1 rounded-full"
            style={{ backgroundColor: colors.toggleBg }}
          >
            <button
              onClick={() => setBillingPeriod("yearly")}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                backgroundColor: billingPeriod === "yearly" ? colors.toggleActive : "transparent",
                color: billingPeriod === "yearly" ? "#FFFFFF" : colors.textSecondary,
              }}
            >
              {toggle.yearly}
            </button>
            <button
              onClick={() => setBillingPeriod("monthly")}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                backgroundColor: billingPeriod === "monthly" ? colors.toggleActive : "transparent",
                color: billingPeriod === "monthly" ? "#FFFFFF" : colors.textSecondary,
              }}
            >
              {toggle.monthly}
            </button>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Explore Card */}
          <motion.div
            className="rounded-2xl p-6 md:p-8 flex flex-col overflow-hidden relative"
            style={{ backgroundColor: colors.darkCardBg }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Phone Mockup */}
            <div className="relative flex-1 flex items-center justify-center mb-6 min-h-[280px]">
              <div className="relative w-48 h-auto">
                {/* Phone Frame */}
                <div
                  className="relative rounded-3xl overflow-hidden border-4 shadow-2xl"
                  style={{
                    borderColor: "#333333",
                    backgroundColor: "#1A1A1A",
                  }}
                >
                  {/* Phone Screen */}
                  <div className="aspect-[9/19] relative bg-black flex flex-col">
                    {/* Status Bar */}
                    <div className="h-6 bg-black flex items-center justify-between px-4">
                      <span className="text-white text-xs">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="flex-1 px-3 py-2">
                      <div className="text-white text-xs mb-1">Choose your Role</div>
                      <div className="space-y-2">
                        <div className="rounded-lg p-2 bg-gray-800">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gray-600"></div>
                            <div>
                              <div className="text-white text-xs font-medium">Athlete</div>
                              <div className="text-gray-400 text-[10px]">I'm signing up as an individual athlete</div>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg p-2 bg-gray-800">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gray-600"></div>
                            <div>
                              <div className="text-white text-xs font-medium">Club Admin</div>
                              <div className="text-gray-400 text-[10px]">Sign up club, manage teams, invite athletes</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="w-full mt-3 py-2 rounded-lg text-white text-xs font-medium"
                        style={{ backgroundColor: colors.accent }}
                      >
                        Continue
                      </button>
                      <p className="text-gray-500 text-[8px] text-center mt-2">
                        If your organization has already added you, ask admin for your sign-up info
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center">
              <h3
                className="font-sans text-xl md:text-2xl font-semibold mb-3"
                style={{ color: colors.textOnDark }}
              >
                {explorePlan.title}
              </h3>
              <p
                className="font-sans text-sm mb-6 leading-relaxed"
                style={{ color: colors.textMutedOnDark }}
              >
                {explorePlan.description}
              </p>

              {/* Store Buttons */}
              <div className="flex justify-center gap-3">
                <motion.button
                  onClick={onGooglePlayClick}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-colors"
                  style={{ borderColor: "#444444" }}
                  whileHover={{ backgroundColor: "#222222" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill={colors.textOnDark}>
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <span className="text-sm font-medium" style={{ color: colors.textOnDark }}>
                    {explorePlan.googlePlayText}
                  </span>
                </motion.button>
                <motion.button
                  onClick={onAppStoreClick}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-colors"
                  style={{ borderColor: "#444444" }}
                  whileHover={{ backgroundColor: "#222222" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill={colors.textOnDark}>
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                  </svg>
                  <span className="text-sm font-medium" style={{ color: colors.textOnDark }}>
                    {explorePlan.appStoreText}
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Club Plan Card */}
          <motion.div
            className="rounded-2xl p-6 md:p-8 flex flex-col border"
            style={{
              backgroundColor: colors.cardBg,
              borderColor: colors.border,
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Badge */}
            <div className="mb-4">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  color: colors.textSecondary,
                  borderColor: colors.border,
                }}
              >
                {clubPlan.badge}
              </span>
            </div>

            {/* Plan Name */}
            <h3
              className="font-sans text-2xl md:text-3xl font-semibold mb-1"
              style={{ color: colors.textPrimary }}
            >
              {clubPlan.name}
            </h3>

            {/* Price */}
            <div className="mb-4">
              <span
                className="font-sans text-xl font-medium"
                style={{ color: colors.textSecondary }}
              >
                {clubPlan.price}
              </span>
            </div>

            {/* Description */}
            <p
              className="font-sans text-sm mb-6 leading-relaxed"
              style={{ color: colors.textSecondary }}
            >
              {clubPlan.description}
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-6 flex-1">
              {clubPlan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: colors.checkColor }}
                  />
                  <span
                    className="font-sans text-sm"
                    style={{ color: colors.textSecondary }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <motion.button
              onClick={() => onGetStartedClick?.("club")}
              className="w-full py-3 rounded-lg text-sm font-medium transition-colors duration-200 mb-4"
              style={{
                backgroundColor: colors.accent,
                color: "#FFFFFF",
              }}
              whileHover={{ backgroundColor: colors.accentHover }}
              whileTap={{ scale: 0.98 }}
            >
              {clubPlan.buttonText}
            </motion.button>

            {/* Bottom Text */}
            <div
              className="text-center py-3 rounded-lg border"
              style={{
                borderColor: colors.border,
                color: colors.textSecondary,
              }}
            >
              <span className="font-sans text-sm">{clubPlan.bottomText}</span>
            </div>
          </motion.div>

          {/* Athletes Plan Card */}
          <motion.div
            className="rounded-2xl p-6 md:p-8 flex flex-col relative overflow-hidden"
            style={{
              backgroundColor: colors.darkCardBg,
              boxShadow: `0 0 0 1px ${colors.accent}40, 0 0 40px ${colors.accent}20`,
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Gradient Border Effect */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: `linear-gradient(180deg, ${colors.accent}30 0%, transparent 50%, ${colors.accent}20 100%)`,
                padding: "1px",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />

            {/* Red glow at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
              style={{
                background: `linear-gradient(to top, ${colors.accent}30, transparent)`,
              }}
            />

            {/* Badge */}
            <div className="mb-4 relative z-10">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  color: colors.accent,
                  borderColor: colors.accent,
                }}
              >
                {athletePlan.badge}
              </span>
            </div>

            {/* Plan Name */}
            <h3
              className="font-sans text-2xl md:text-3xl font-semibold mb-1 relative z-10"
              style={{ color: colors.textOnDark }}
            >
              {athletePlan.name}
            </h3>

            {/* Price */}
            <div className="mb-4 flex items-baseline gap-2 relative z-10">
              <span
                className="font-sans text-3xl md:text-4xl font-bold"
                style={{ color: colors.textOnDark }}
              >
                {athletePlan.price}
              </span>
              <span
                className="font-sans text-xs"
                style={{ color: colors.textMutedOnDark }}
              >
                {athletePlan.pricePeriod}
              </span>
            </div>

            {/* Description */}
            <p
              className="font-sans text-sm mb-6 leading-relaxed relative z-10"
              style={{ color: colors.textMutedOnDark }}
            >
              {athletePlan.description}
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-6 flex-1 relative z-10">
              {athletePlan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: colors.textMutedOnDark }}
                  />
                  <span
                    className="font-sans text-sm"
                    style={{ color: colors.textMutedOnDark }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <motion.button
              onClick={() => onGetStartedClick?.("athlete")}
              className="w-full py-3 rounded-lg text-sm font-medium transition-colors duration-200 relative z-10"
              style={{
                backgroundColor: colors.accent,
                color: "#FFFFFF",
              }}
              whileHover={{ backgroundColor: colors.accentHover }}
              whileTap={{ scale: 0.98 }}
            >
              {athletePlan.buttonText}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
