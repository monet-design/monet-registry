"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    cardBackground: "#0F07FA",
    cardText: "#ffffff",
    cardTextSecondary: "rgba(255, 255, 255, 0.7)",
    buttonBackground: "#ffffff",
    buttonText: "#0F07FA",
    checkColor: "rgba(255, 255, 255, 0.5)",
    titleColor: "#1a1a6e",
    gradientFrom: "#E8F2FC",
    gradientTo: "#EED7DF",
  },
  dark: {
    cardBackground: "#0F07FA",
    cardText: "#ffffff",
    cardTextSecondary: "rgba(255, 255, 255, 0.7)",
    buttonBackground: "#ffffff",
    buttonText: "#0F07FA",
    checkColor: "rgba(255, 255, 255, 0.5)",
    titleColor: "#9898F3",
    gradientFrom: "#1a1a2e",
    gradientTo: "#2d1a2e",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  title: "Ready?",
  cardTitle: "One-time purchase",
  cardDescription: "Get instant lifetime access to the\nVariable Font Course",
  price: "129",
  currency: "\u20AC",
  originalPrice: "399",
  features: [
    "11 video lessons, including transcriptions",
    "3 bonus lessons",
    "Everything is covered, from designing the font\nto implementation on the web",
    "Learn in your own tempo",
    "World class instructor",
    "Unlimited access forever",
  ],
  buttonText: "JOIN NOW",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check } from "lucide-react";
import "./font.css";

interface PricingOplMaster7Props {
  mode?: "light" | "dark";
  title?: string;
  cardTitle?: string;
  cardDescription?: string;
  price?: string;
  currency?: string;
  originalPrice?: string;
  features?: string[];
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function PricingOplMaster7({
  mode = "light",
  title = DEFAULT_CONTENT.title,
  cardTitle = DEFAULT_CONTENT.cardTitle,
  cardDescription = DEFAULT_CONTENT.cardDescription,
  price = DEFAULT_CONTENT.price,
  currency = DEFAULT_CONTENT.currency,
  originalPrice = DEFAULT_CONTENT.originalPrice,
  features = DEFAULT_CONTENT.features,
  buttonText = DEFAULT_CONTENT.buttonText,
  onButtonClick,
}: PricingOplMaster7Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 px-4 min-h-[600px] flex flex-col items-center justify-center"
      style={{
        background: `linear-gradient(135deg, ${colors.gradientFrom} 0%, ${colors.gradientTo} 100%)`,
      }}
    >
      {/* Title - Ready? with outline text style */}
      <motion.h1
        className="instrument-serif-italic text-5xl md:text-7xl mb-12 text-center"
        style={{
          color: "transparent",
          WebkitTextStroke: `2px ${colors.titleColor}`,
        }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h1>

      {/* Pricing Card */}
      <motion.div
        className="w-full max-w-[360px] rounded-2xl p-8"
        style={{
          backgroundColor: colors.cardBackground,
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Card Title */}
        <h2
          className="instrument-serif-italic text-xl text-center mb-2"
          style={{
            color: colors.cardText,
          }}
        >
          {cardTitle}
        </h2>

        {/* Card Description */}
        <p
          className="text-xs text-center mb-6 whitespace-pre-line leading-relaxed"
          style={{ color: colors.cardTextSecondary }}
        >
          {cardDescription}
        </p>

        {/* Price */}
        <div className="text-center mb-1">
          <span
            className="text-5xl font-bold"
            style={{ color: colors.cardText }}
          >
            {currency}
            {price}
          </span>
        </div>

        {/* Original Price */}
        <p
          className="text-xs text-center mb-6"
          style={{ color: colors.cardTextSecondary }}
        >
          (Normal price {currency}
          {originalPrice})
        </p>

        {/* Features List */}
        <ul className="space-y-2 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check
                size={14}
                style={{ color: colors.checkColor }}
                className="mt-0.5 flex-shrink-0"
              />
              <span
                className="text-xs whitespace-pre-line leading-relaxed"
                style={{ color: colors.cardText }}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.button
          className="w-full py-3 rounded-full text-sm font-bold tracking-wide transition-all"
          style={{
            backgroundColor: colors.buttonBackground,
            color: colors.buttonText,
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onButtonClick}
        >
          {buttonText}
        </motion.button>
      </motion.div>
    </section>
  );
}
