"use client";

import "./font.css";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#15161A",
    cardBackground: "#F5F3EE",
    accent: "#C9A052", // Gold/orange accent color
    accentGreen: "#6B8E6B", // Green checkmark
    accentRed: "#C97052", // Red/orange checkmark
    textPrimary: "#1F2937",
    textSecondary: "#6B7280",
    textMuted: "#9CA3AF",
    buttonBackground: "#1F2023",
    buttonText: "#F5F3EE",
    linkText: "#C9A052",
  },
  dark: {
    background: "#15161A",
    cardBackground: "#F5F3EE",
    accent: "#C9A052",
    accentGreen: "#6B8E6B",
    accentRed: "#C97052",
    textPrimary: "#1F2937",
    textSecondary: "#6B7280",
    textMuted: "#9CA3AF",
    buttonBackground: "#1F2023",
    buttonText: "#F5F3EE",
    linkText: "#C9A052",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

// Camera Aperture Icon Component
function ApertureIcon({ color = "#C9A052" }: { color?: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle
        cx="24"
        cy="24"
        r="20"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      {/* Inner aperture blades */}
      <path
        d="M24 8 L28 18 L24 16 L20 18 Z"
        fill={color}
        transform="rotate(0, 24, 24)"
      />
      <path
        d="M24 8 L28 18 L24 16 L20 18 Z"
        fill={color}
        transform="rotate(60, 24, 24)"
      />
      <path
        d="M24 8 L28 18 L24 16 L20 18 Z"
        fill={color}
        transform="rotate(120, 24, 24)"
      />
      <path
        d="M24 8 L28 18 L24 16 L20 18 Z"
        fill={color}
        transform="rotate(180, 24, 24)"
      />
      <path
        d="M24 8 L28 18 L24 16 L20 18 Z"
        fill={color}
        transform="rotate(240, 24, 24)"
      />
      <path
        d="M24 8 L28 18 L24 16 L20 18 Z"
        fill={color}
        transform="rotate(300, 24, 24)"
      />
      {/* Center circle */}
      <circle cx="24" cy="24" r="6" stroke={color} strokeWidth="1.5" fill="none" />
    </svg>
  );
}

// Check Icon Component
function CheckIcon({ color }: { color: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="7" stroke={color} strokeWidth="1.5" fill="none" />
      <path
        d="M5 8 L7 10 L11 6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

interface Feature {
  text: string;
  highlight?: string;
  link?: string;
  checkColor: "green" | "gold" | "red";
}

interface PricingPlan {
  title: string;
  price: string;
  priceLabel: string;
  subtitle: string;
  features: Feature[];
  buttonText: string;
}

interface PricingOplScreenshot2Props {
  mode?: "light" | "dark";
  label?: string;
  headline?: string;
  plans?: PricingPlan[];
  footerText?: string;
  onPlanClick?: (planTitle: string) => void;
}

const defaultPlans: PricingPlan[] = [
  {
    title: "Hosting & maintenance",
    price: "$1290",
    priceLabel: "one time",
    subtitle: "+$90 MONTHLY",
    features: [
      { text: "Up to 5000 photos", checkColor: "green" },
      { text: "Secure hosting with backups included", checkColor: "green" },
      { text: "Automatic", highlight: " system updates", checkColor: "green" },
      { text: "Website at custom domain like ", link: "https://www.example.com", checkColor: "gold" },
      { text: "Optional help with all the ", highlight: "setup for $990", checkColor: "red" },
    ],
    buttonText: "Request today",
  },
  {
    title: "Host it by yourself",
    price: "$1590",
    priceLabel: "one time",
    subtitle: "NO OTHER PAYMENTS",
    features: [
      { text: "Number of uploaded pictures limited only by your server", checkColor: "green" },
      { text: "Host it on your server by yourself", checkColor: "green" },
      { text: "Manual", highlight: " system updates", checkColor: "gold" },
      { text: "Website at custom domain like ", link: "https://www.example.com", checkColor: "gold" },
      { text: "Optional help with all the ", highlight: "setup for $990", checkColor: "red" },
    ],
    buttonText: "Request today",
  },
];

export default function PricingOplScreenshot2({
  mode = "dark",
  label = "- BETTERSHOTZ PLANS -",
  headline = "Choose the best plan for you",
  plans = defaultPlans,
  footerText = "Create your professional website quickly without any struggles. Just select one of our beautiful designs, change predefined texts, upload your photos and that's it. You are all set to show your portfolio to the world.",
  onPlanClick,
}: PricingOplScreenshot2Props) {
  const colors = COLORS[mode];

  const getCheckColor = (colorType: Feature["checkColor"]) => {
    switch (colorType) {
      case "green":
        return colors.accentGreen;
      case "gold":
        return colors.accent;
      case "red":
        return colors.accentRed;
    }
  };

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs tracking-[0.25em] mb-4"
          style={{ color: colors.textMuted }}
        >
          {label}
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl md:text-3xl lg:text-4xl text-center mb-12 md:mb-16 font-light italic"
          style={{
            color: colors.cardBackground,
            fontFamily: "'Playfair Display', 'Times New Roman', serif",
          }}
        >
          {headline}
        </motion.h2>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="rounded-xl overflow-hidden"
              style={{ backgroundColor: colors.cardBackground }}
            >
              <div className="p-6 md:p-8">
                {/* Aperture Icon */}
                <div className="flex justify-center mb-4">
                  <ApertureIcon color={colors.accent} />
                </div>

                {/* Plan Title */}
                <h3
                  className="text-center text-base md:text-lg font-light italic mb-2"
                  style={{
                    color: colors.accent,
                    fontFamily: "'Playfair Display', 'Times New Roman', serif",
                  }}
                >
                  {plan.title}
                </h3>

                {/* Price */}
                <div className="text-center mb-1">
                  <span
                    className="text-2xl md:text-3xl font-light italic"
                    style={{
                      color: colors.textPrimary,
                      fontFamily: "'Playfair Display', 'Times New Roman', serif",
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="text-lg md:text-xl font-light italic ml-1"
                    style={{
                      color: colors.textPrimary,
                      fontFamily: "'Playfair Display', 'Times New Roman', serif",
                    }}
                  >
                    {plan.priceLabel}
                  </span>
                </div>

                {/* Subtitle */}
                <p
                  className="text-center text-xs tracking-[0.15em] mb-6"
                  style={{ color: colors.textMuted }}
                >
                  {plan.subtitle}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0">
                        <CheckIcon color={getCheckColor(feature.checkColor)} />
                      </span>
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: colors.textSecondary }}
                      >
                        {feature.text}
                        {feature.highlight && (
                          <span style={{ color: colors.textPrimary }}>
                            {feature.highlight}
                          </span>
                        )}
                        {feature.link && (
                          <a
                            href={feature.link}
                            className="underline"
                            style={{ color: colors.linkText }}
                          >
                            {feature.link}
                          </a>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onPlanClick?.(plan.title)}
                  className="w-full py-3.5 px-6 rounded-lg flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: colors.buttonBackground,
                    color: colors.buttonText,
                  }}
                >
                  <span className="text-sm tracking-wide">{plan.buttonText}</span>
                  <ChevronRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Text */}
        {footerText && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center text-xs mt-10 md:mt-12 max-w-3xl mx-auto leading-relaxed"
            style={{ color: colors.textMuted }}
          >
            {footerText}
          </motion.p>
        )}
      </div>
    </section>
  );
}
