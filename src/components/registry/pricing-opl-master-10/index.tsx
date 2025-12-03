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
    cardBackground: "#111111",
    cardBorder: "#222222",
    textPrimary: "#ffffff",
    textSecondary: "#888888",
    textMuted: "#666666",
    pink: "#FF00FF",
    pinkHover: "#E600E6",
    lime: "#CCFF00",
    limeHover: "#B8E600",
    checkGreen: "#00CC66",
    checkYellow: "#FFCC00",
  },
  dark: {
    background: "#000000",
    cardBackground: "#111111",
    cardBorder: "#222222",
    textPrimary: "#ffffff",
    textSecondary: "#888888",
    textMuted: "#666666",
    pink: "#FF00FF",
    pinkHover: "#E600E6",
    lime: "#CCFF00",
    limeHover: "#B8E600",
    checkGreen: "#00CC66",
    checkYellow: "#FFCC00",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  title: "Choose what works for you",
  subtitle:
    "Whether you design alone or with a team, we have a plan that fits your needs,\nincluding custom design systems.",
  plans: [
    {
      id: "free",
      name: "atomize",
      badge: "PLUS",
      badgeColor: "pink" as const,
      target: "For Beginners and Students",
      price: "Free",
      features: [
        { text: "200+ Styles", included: true },
        { text: "Figma Variables", included: true },
        { text: "Example Screens [2]", included: true },
        { text: "FREE future updates", included: true },
        { text: "Dark mode", included: false },
        { text: "Web3 Components", included: false },
      ],
      buttonText: "Download now!",
      buttonVariant: "pink" as const,
    },
    {
      id: "pro",
      name: "atomize",
      badge: "PRO",
      badgeColor: "pink" as const,
      target: "For Design Professionals and Design Teams",
      price: "$49",
      features: [
        { text: "200+ Styles", included: true },
        { text: "Figma Variables", included: true },
        { text: "Example Screens [All]", included: true },
        { text: "FREE future updates", included: true },
        { text: "Dark mode", included: true },
        { text: "Web3 Components", included: true },
      ],
      buttonText: "Buy now",
      buttonVariant: "pink" as const,
      footerLink: "Preview in Figma",
      highlighted: true,
    },
    {
      id: "enterprise",
      name: "custom",
      badge: null,
      badgeColor: null,
      customTitle: "Get a custom Design System\nfor your project.",
      price: "$1999",
      features: [
        { text: "Brand Integration", included: true },
        { text: "Custom Design Tokens", included: true },
        { text: "Style Guide", included: true },
        { text: "Product specific component library", included: true },
      ],
      buttonText: "Place order!",
      buttonVariant: "lime" as const,
      footerText: "Delivery time could be 7-10 working days",
    },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, X, ExternalLink } from "lucide-react";

interface Feature {
  text: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  badge?: string | null;
  badgeColor?: "pink" | "lime" | null;
  target?: string;
  customTitle?: string;
  price: string;
  features: Feature[];
  buttonText: string;
  buttonVariant: "pink" | "lime";
  footerLink?: string;
  footerText?: string;
  highlighted?: boolean;
}

interface PricingOplMaster10Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  plans?: Plan[];
}

// Atomize logo component
function AtomizeLogo({ color = "#FF00FF" }: { color?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="6" fill={color} />
      <path
        d="M7 17L12 7L17 17"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 14H15"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Custom logo for enterprise plan
function CustomLogo({ color = "#CCFF00" }: { color?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="6" fill={color} />
      <path
        d="M7 17L12 7L17 17"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 14H15"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function PricingOplMaster10({
  mode = "dark",
  title = DEFAULT_CONTENT.title,
  subtitle = DEFAULT_CONTENT.subtitle,
  plans = DEFAULT_CONTENT.plans,
}: PricingOplMaster10Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-20 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl font-serif mb-4"
            style={{ color: colors.textPrimary }}
          >
            {title}
          </h2>
          <p
            className="text-sm md:text-base whitespace-pre-line"
            style={{ color: colors.textSecondary }}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className="w-full max-w-[320px] rounded-2xl p-6"
              style={{
                backgroundColor: colors.cardBackground,
                border: `1px solid ${colors.cardBorder}`,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Card Header */}
              <div className="mb-4">
                {plan.name === "custom" ? (
                  <>
                    <div className="mb-3">
                      <CustomLogo color={colors.lime} />
                    </div>
                    <p
                      className="text-lg font-medium whitespace-pre-line leading-tight"
                      style={{ color: colors.textPrimary }}
                    >
                      {plan.customTitle}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-2 mb-1">
                      <AtomizeLogo
                        color={
                          plan.badgeColor === "lime" ? colors.lime : colors.pink
                        }
                      />
                      <span
                        className="text-xl font-medium"
                        style={{ color: colors.textPrimary }}
                      >
                        {plan.name}
                      </span>
                      {plan.badge && (
                        <span
                          className="px-2 py-0.5 text-xs font-semibold rounded"
                          style={{
                            backgroundColor:
                              plan.badgeColor === "lime"
                                ? colors.lime
                                : colors.pink,
                            color: "#000000",
                          }}
                        >
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    {plan.target && (
                      <p
                        className="text-xs"
                        style={{ color: colors.textMuted }}
                      >
                        {plan.target}
                      </p>
                    )}
                  </>
                )}
              </div>

              {/* Price */}
              <div className="mb-6">
                <span
                  className="text-4xl font-bold"
                  style={{ color: colors.textPrimary }}
                >
                  {plan.price}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    {feature.included ? (
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor:
                            plan.name === "custom"
                              ? colors.lime
                              : plan.highlighted
                              ? colors.checkYellow
                              : colors.checkGreen,
                        }}
                      >
                        <Check size={10} color="#000000" strokeWidth={3} />
                      </div>
                    ) : (
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: colors.textMuted }}
                      >
                        <X size={10} color="#000000" strokeWidth={3} />
                      </div>
                    )}
                    <span
                      className="text-sm"
                      style={{
                        color: feature.included
                          ? colors.textPrimary
                          : colors.textMuted,
                        textDecoration: feature.included
                          ? "none"
                          : "line-through",
                      }}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <motion.button
                className="w-full py-3 rounded-full text-sm font-medium transition-all"
                style={
                  plan.buttonVariant === "lime"
                    ? {
                        backgroundColor: "transparent",
                        border: `2px solid ${colors.lime}`,
                        color: colors.lime,
                      }
                    : {
                        backgroundColor: colors.pink,
                        color: "#000000",
                      }
                }
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.buttonText}
              </motion.button>

              {/* Footer */}
              {plan.footerLink && (
                <div className="mt-4 text-center">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-xs"
                    style={{ color: colors.textSecondary }}
                  >
                    <ExternalLink size={12} />
                    {plan.footerLink}
                  </a>
                </div>
              )}
              {plan.footerText && (
                <p
                  className="mt-4 text-center text-xs"
                  style={{ color: colors.textMuted }}
                >
                  {plan.footerText}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
