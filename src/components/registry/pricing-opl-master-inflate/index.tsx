"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#141414",
    cardPurpleBg: "linear-gradient(145deg, #D4B8E8 0%, #C9A0DC 50%, #B794D4 100%)",
    cardPurpleShadow: "rgba(180, 160, 200, 0.3)",
    cardWhiteBg: "#FFFFFF",
    buttonPurple: "#A78BBF",
    buttonPurpleHover: "#9575AA",
    buttonWhite: "#FFFFFF",
    buttonWhiteBorder: "#1A1A1A",
    textDark: "#1A1A1A",
    textLight: "#FFFFFF",
    textMuted: "#666666",
    demoBg: "#1E1E1E",
    demoBorder: "#333333",
    accentPurple: "#B794D4",
  },
  dark: {
    background: "#141414",
    cardPurpleBg: "linear-gradient(145deg, #D4B8E8 0%, #C9A0DC 50%, #B794D4 100%)",
    cardPurpleShadow: "rgba(180, 160, 200, 0.3)",
    cardWhiteBg: "#FFFFFF",
    buttonPurple: "#A78BBF",
    buttonPurpleHover: "#9575AA",
    buttonWhite: "#FFFFFF",
    buttonWhiteBorder: "#1A1A1A",
    textDark: "#1A1A1A",
    textLight: "#FFFFFF",
    textMuted: "#666666",
    demoBg: "#1E1E1E",
    demoBorder: "#333333",
    accentPurple: "#B794D4",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  headline: "DESIGN WITH SPEED\nAND QUALITY",
  fullSetCard: {
    title: "FULL SET",
    features: [
      "30 Illustrations",
      "Inflatable trending style",
      "Stylish materials",
      "Blender source file",
      "Figma file",
      "PNG files",
    ],
    buttonText: "PURCHASE, $32",
    price: "$32",
  },
  proAccessCard: {
    label: "Pro Access",
    title: "GET ACCESS TO\nHUGE LIBRARY\nOF 3D\nILLUSTRATIONS\n& MOCKUPS.\n1000+ ASSETS\nAND REGULAR\nRELEASES",
    buttonText: "TRY, $10/MONTH",
    price: "$10/MONTH",
  },
  demo: {
    label: "DEMO",
    text: "Not sure about Inflatable set ? Give it a free try!",
    buttonText: "DOWNLOAD",
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

// 3D Torus SVG Component
function TorusIllustration() {
  return (
    <svg
      viewBox="0 0 200 180"
      className="w-full h-auto max-w-[200px]"
      style={{ filter: "drop-shadow(0 20px 40px rgba(150, 100, 180, 0.4))" }}
    >
      <defs>
        <linearGradient id="torusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4B8E8" />
          <stop offset="30%" stopColor="#C9A0DC" />
          <stop offset="70%" stopColor="#B794D4" />
          <stop offset="100%" stopColor="#9B7BB8" />
        </linearGradient>
        <linearGradient id="torusHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8D4F0" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#C9A0DC" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="torusShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9B7BB8" stopOpacity="0" />
          <stop offset="100%" stopColor="#7A5F99" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {/* Main torus body */}
      <ellipse
        cx="100"
        cy="90"
        rx="80"
        ry="50"
        fill="url(#torusGradient)"
      />
      {/* Inner hole */}
      <ellipse
        cx="100"
        cy="85"
        rx="35"
        ry="22"
        fill="#C5A0D8"
      />
      {/* Top highlight */}
      <ellipse
        cx="100"
        cy="70"
        rx="70"
        ry="35"
        fill="url(#torusHighlight)"
        opacity="0.5"
      />
      {/* Bottom shadow */}
      <ellipse
        cx="100"
        cy="110"
        rx="75"
        ry="40"
        fill="url(#torusShadow)"
        opacity="0.4"
      />
      {/* 3D depth effect - front curve */}
      <path
        d="M 25 90 Q 100 140 175 90"
        fill="none"
        stroke="#9B7BB8"
        strokeWidth="3"
        opacity="0.3"
      />
      {/* Highlight reflection */}
      <ellipse
        cx="70"
        cy="65"
        rx="20"
        ry="12"
        fill="#F0E6F6"
        opacity="0.6"
      />
    </svg>
  );
}

interface PricingOplMasterInflateProps {
  mode?: "light" | "dark";
  headline?: string;
  fullSetCard?: typeof DEFAULT_CONTENT.fullSetCard;
  proAccessCard?: typeof DEFAULT_CONTENT.proAccessCard;
  demo?: typeof DEFAULT_CONTENT.demo;
  onPurchaseClick?: () => void;
  onProAccessClick?: () => void;
  onDemoClick?: () => void;
}

export default function PricingOplMasterInflate({
  mode = "dark",
  headline = DEFAULT_CONTENT.headline,
  fullSetCard = DEFAULT_CONTENT.fullSetCard,
  proAccessCard = DEFAULT_CONTENT.proAccessCard,
  demo = DEFAULT_CONTENT.demo,
  onPurchaseClick,
  onProAccessClick,
  onDemoClick,
}: PricingOplMasterInflateProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <motion.h1
          className="text-center text-3xl md:text-4xl font-light tracking-wider mb-12 whitespace-pre-line"
          style={{ color: colors.textLight }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {headline}
        </motion.h1>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch mb-8">
          {/* Full Set Card (Purple) */}
          <motion.div
            className="relative w-full md:w-[320px] rounded-2xl p-6 overflow-hidden"
            style={{
              background: colors.cardPurpleBg,
              boxShadow: `0 20px 60px ${colors.cardPurpleShadow}`,
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Title */}
            <h2
              className="text-2xl md:text-3xl font-light tracking-wide mb-6"
              style={{ color: colors.textDark }}
            >
              {fullSetCard.title}
            </h2>

            {/* Features List */}
            <ul className="space-y-2 mb-6">
              {fullSetCard.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: colors.textDark }}
                >
                  <span
                    className="text-lg"
                    style={{ color: colors.textDark, opacity: 0.7 }}
                  >
                    *
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* 3D Illustration */}
            <div className="flex justify-center mb-6">
              <TorusIllustration />
            </div>

            {/* Purchase Button */}
            <motion.button
              className="w-full py-3 rounded-full text-sm font-medium tracking-wider transition-all"
              style={{
                backgroundColor: colors.buttonPurple,
                color: colors.textLight,
              }}
              whileHover={{
                backgroundColor: colors.buttonPurpleHover,
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              onClick={onPurchaseClick}
            >
              {fullSetCard.buttonText}
            </motion.button>
          </motion.div>

          {/* Pro Access Card (White) */}
          <motion.div
            className="w-full md:w-[320px] rounded-2xl p-6"
            style={{
              backgroundColor: colors.cardWhiteBg,
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Label */}
            <p
              className="text-xs mb-4 tracking-wide"
              style={{ color: colors.textMuted }}
            >
              {proAccessCard.label}
            </p>

            {/* Title */}
            <h2
              className="text-xl md:text-2xl font-bold leading-tight mb-8 whitespace-pre-line"
              style={{ color: colors.textDark }}
            >
              {proAccessCard.title}
            </h2>

            {/* Try Button */}
            <motion.button
              className="w-full py-3 rounded-full text-sm font-medium tracking-wider transition-all border"
              style={{
                backgroundColor: colors.buttonWhite,
                borderColor: colors.buttonWhiteBorder,
                color: colors.textDark,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onProAccessClick}
            >
              {proAccessCard.buttonText}
            </motion.button>
          </motion.div>
        </div>

        {/* Demo Section */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl px-6 py-4"
          style={{
            backgroundColor: colors.demoBg,
            border: `1px solid ${colors.demoBorder}`,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Demo Label */}
          <span
            className="text-sm font-semibold tracking-wider"
            style={{ color: colors.textLight }}
          >
            {demo.label}
          </span>

          {/* Demo Text */}
          <p
            className="text-sm text-center sm:text-left flex-1"
            style={{ color: colors.textMuted }}
          >
            {demo.text}
          </p>

          {/* Download Button */}
          <motion.button
            className="px-6 py-2 rounded-md text-xs font-medium tracking-wider transition-all border"
            style={{
              backgroundColor: "transparent",
              borderColor: colors.textMuted,
              color: colors.textLight,
            }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              scale: 1.02,
            }}
            whileTap={{ scale: 0.98 }}
            onClick={onDemoClick}
          >
            {demo.buttonText}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
