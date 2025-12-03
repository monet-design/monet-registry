"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    // 시안 액센트 컬러
    accent: "#00D4FF",
    accentHover: "#00BFEA",
    // 배경색
    lightBg: "#F5F7F9",
    darkBg: "#0D1B2A",
    // 카드 배경
    macCardBg: "#0F1C2E",
    macCardBorder: "#00D4FF",
    iosCardBg: "#162236",
    iosCardBorder: "#1E3A5F",
  },
  dark: {
    accent: "#00D4FF",
    accentHover: "#00BFEA",
    lightBg: "#1A1A1A",
    darkBg: "#0D1B2A",
    macCardBg: "#0F1C2E",
    macCardBorder: "#00D4FF",
    iosCardBg: "#162236",
    iosCardBorder: "#1E3A5F",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, Apple } from "lucide-react";

// Timemator App Icon Component
function AppIcon({ variant = "mac" }: { variant?: "mac" | "ios" }) {
  const bgColor = variant === "mac" ? "#0F1C2E" : "#162236";

  return (
    <div
      className="w-20 h-20 rounded-2xl flex items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer ring with gradient */}
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="url(#cyanGradient)"
          strokeWidth="3"
          fill="none"
        />
        {/* Inner circle */}
        <circle
          cx="24"
          cy="24"
          r="8"
          fill="#0A1929"
          stroke="#00D4FF"
          strokeWidth="2"
        />
        {/* Center dot */}
        <circle cx="24" cy="24" r="3" fill="#00D4FF" />
        {/* Clock hand */}
        <line
          x1="24"
          y1="24"
          x2="24"
          y2="12"
          stroke="#00D4FF"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Curved arc at top */}
        <path
          d="M 14 10 Q 24 6 34 10"
          stroke="#00D4FF"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <defs>
          <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#00A0CC" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Feature Check Item
function FeatureCheckItem({
  children,
  accentColor,
}: {
  children: React.ReactNode;
  accentColor: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-5 h-5 rounded-full flex items-center justify-center"
        style={{ backgroundColor: `${accentColor}20` }}
      >
        <Check
          className="w-3 h-3"
          style={{ color: accentColor }}
          strokeWidth={3}
        />
      </div>
      <span className="text-sm text-gray-300">{children}</span>
    </div>
  );
}

// App Store Button
function AppStoreButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-2 px-4 py-2 bg-black rounded-lg border border-gray-700 hover:border-gray-500 transition-colors"
    >
      <Apple className="w-5 h-5 text-white" fill="white" />
      <div className="text-left">
        <div className="text-[10px] text-gray-400 leading-none">Download on the</div>
        <div className="text-sm font-semibold text-white leading-tight">App Store</div>
      </div>
    </motion.button>
  );
}

// Setapp Button
function SetappButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-2 px-4 py-2 bg-black rounded-lg border border-gray-700 hover:border-gray-500 transition-colors"
    >
      <div className="w-5 h-5 flex items-center justify-center">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
          <rect x="4" y="4" width="16" height="16" rx="4" fill="#7B68EE" />
          <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">S</text>
        </svg>
      </div>
      <div className="text-left">
        <div className="text-[10px] text-gray-400 leading-none">Available on</div>
        <div className="text-sm font-semibold text-white leading-tight">SETAPP</div>
      </div>
    </motion.button>
  );
}

interface PricingOplScreenshot17Props {
  mode?: "light" | "dark";
  title?: string;
  macProductName?: string;
  macProductSubtitle?: string;
  macFeatures?: string[];
  macPrice?: string;
  macPriceLabel?: string;
  macCtaText?: string;
  iosProductName?: string;
  iosProductSubtitle?: string;
  iosPrice?: string;
  iosPriceLabel?: string;
  studentDiscountText?: string;
  basicText?: string;
  disclaimerText?: string;
  onMacCtaClick?: () => void;
}

export default function PricingOplScreenshot17({
  mode = "light",
  title = "Stop wasting time on time tracking!",
  macProductName = "Timemator",
  macProductSubtitle = "for Mac",
  macFeatures = ["Use forever", "Activate on 2 devices"],
  macPrice = "$39",
  macPriceLabel = "one-time payment",
  macCtaText = "Buy now",
  iosProductName = "Timemator",
  iosProductSubtitle = "for iOS",
  iosPrice = "$7",
  iosPriceLabel = "one-time payment",
  studentDiscountText = "Get a student discount on Timemator",
  basicText = "Don't need Auto-tracking? Try Timemator Basic.",
  disclaimerText = "* Price may vary in your country.\nMac and iOS apps are sold separately.",
  onMacCtaClick,
}: PricingOplScreenshot17Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Light Background Section (Top) */}
      <div
        className="relative py-12 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.lightBg }}
      >
        {/* Accent Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 40 }}
          transition={{ duration: 0.5 }}
          className="h-1 mb-6 rounded-full mx-auto sm:mx-0 sm:ml-[calc(50%-380px)]"
          style={{ backgroundColor: colors.accent }}
        />

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center"
        >
          {title}
        </motion.h2>
      </div>

      {/* Dark Background Section (Bottom) */}
      <div
        className="relative py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.darkBg }}
      >
        <div className="mx-auto max-w-4xl">
          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Mac Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-2xl p-6 overflow-hidden"
              style={{
                backgroundColor: colors.macCardBg,
                border: `1px solid ${colors.macCardBorder}`,
                boxShadow: `0 0 30px ${colors.macCardBorder}30`,
              }}
            >
              {/* Card Content */}
              <div className="flex flex-col items-center text-center">
                {/* App Icon */}
                <AppIcon variant="mac" />

                {/* Product Name */}
                <h3 className="mt-4 text-2xl font-bold text-white">
                  {macProductName}
                </h3>
                <p
                  className="text-lg font-medium"
                  style={{ color: colors.accent }}
                >
                  {macProductSubtitle}
                </p>

                {/* Features */}
                <div className="mt-6 space-y-2">
                  {macFeatures.map((feature, index) => (
                    <FeatureCheckItem key={index} accentColor={colors.accent}>
                      {feature}
                    </FeatureCheckItem>
                  ))}
                </div>

                {/* Price */}
                <div className="mt-6">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: colors.accent }}
                  >
                    {macPrice}
                  </span>
                </div>
                <p
                  className="text-sm mt-1"
                  style={{ color: colors.accent }}
                >
                  {macPriceLabel}
                </p>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onMacCtaClick}
                  className="mt-6 w-full py-3 px-8 rounded-full font-semibold text-gray-900 transition-all"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  {macCtaText}
                </motion.button>

                {/* Setapp Badge */}
                <div className="mt-4">
                  <SetappButton />
                </div>
              </div>
            </motion.div>

            {/* iOS Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative rounded-2xl p-6 overflow-hidden"
              style={{
                backgroundColor: colors.iosCardBg,
                border: `1px solid ${colors.iosCardBorder}`,
              }}
            >
              {/* Card Content */}
              <div className="flex flex-col items-center text-center">
                {/* App Icon */}
                <AppIcon variant="ios" />

                {/* Product Name */}
                <h3 className="mt-4 text-2xl font-bold text-white">
                  {iosProductName}
                </h3>
                <p
                  className="text-lg font-medium"
                  style={{ color: colors.accent }}
                >
                  {iosProductSubtitle}
                </p>

                {/* Price */}
                <div className="mt-10">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: colors.accent }}
                  >
                    {iosPrice}
                  </span>
                  <span
                    className="text-xl font-bold align-top"
                    style={{ color: colors.accent }}
                  >
                    .99
                  </span>
                </div>
                <p
                  className="text-sm mt-1"
                  style={{ color: colors.accent }}
                >
                  {iosPriceLabel}
                </p>

                {/* App Store Badge */}
                <div className="mt-6">
                  <AppStoreButton />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          >
            {/* Left side links */}
            <div className="space-y-1">
              <p className="text-sm text-gray-400 flex items-center gap-2">
                <span style={{ color: colors.accent }}>%</span>
                <a
                  href="#"
                  className="hover:underline transition-colors"
                  style={{ color: colors.accent }}
                >
                  {studentDiscountText} →
                </a>
              </p>
              <p className="text-sm text-gray-400">
                {basicText.split("Timemator Basic")[0]}
                <a
                  href="#"
                  className="underline hover:no-underline transition-colors"
                  style={{ color: colors.accent }}
                >
                  Timemator Basic
                </a>
                .
              </p>
            </div>

            {/* Right side disclaimer */}
            <p className="text-xs text-gray-500 whitespace-pre-line text-left md:text-right">
              {disclaimerText}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
