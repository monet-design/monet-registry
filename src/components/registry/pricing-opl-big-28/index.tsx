"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    // Primary 액센트 (버튼, 링크 등)
    accent: "#22C55E", // Green
    accentHover: "#16A34A", // Green hover
    // 텍스트 색상
    textMuted: "#6B7280", // Gray-500
    textDark: "#1F2937", // Gray-800
    border: "#E5E7EB", // Gray-200
  },
  dark: {
    accent: "#4ADE80",
    accentHover: "#22C55E",
    textMuted: "#9CA3AF",
    textDark: "#F9FAFB",
    border: "#374151",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {} as const;

// ============================================================================
// DEFAULT CONTENT
// ============================================================================

const DEFAULT_CONTENT = {
  badge: "Pricing",
  title: "Choose the plan that works best for you. If you're happy, so are we.",
  subtitle: "Pause or cancel your subscription at any time, with no hidden fees.",
  plans: [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description:
        "Use Hedge whenever you want for as long as you wish, with up to two simultaneous transfers. Enjoy for free what others charge you for.",
      isActive: false,
    },
    {
      name: "Subscription",
      price: "$15",
      period: "per month",
      description:
        "More footage than you can handle? A subscription brings you the full Hedge, with unlimited simultaneous and automatic transfers.",
      isActive: true,
    },
  ],
  ctaButton: "Get a license",
  footerText: "Prefer a yearly license?",
  footerLink: "Drop us an email.",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface PlanData {
  name: string;
  price: string;
  period: string;
  description: string;
  isActive?: boolean;
}

interface PricingOplBig28Props {
  mode?: "light" | "dark";
  badge?: string;
  title?: string;
  subtitle?: string;
  plans?: PlanData[];
  ctaButton?: string;
  footerText?: string;
  footerLink?: string;
  onCtaClick?: () => void;
  onFooterLinkClick?: () => void;
}

export default function PricingOplBig28({
  mode = "light",
  badge = DEFAULT_CONTENT.badge,
  title = DEFAULT_CONTENT.title,
  subtitle = DEFAULT_CONTENT.subtitle,
  plans = DEFAULT_CONTENT.plans,
  ctaButton = DEFAULT_CONTENT.ctaButton,
  footerText = DEFAULT_CONTENT.footerText,
  footerLink = DEFAULT_CONTENT.footerLink,
  onCtaClick,
  onFooterLinkClick,
}: PricingOplBig28Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className={`relative w-full py-20 px-6 ${
        isDark ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        {/* Badge with lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: colors.border }}
          />
          <span
            className="text-sm tracking-wide"
            style={{ color: colors.textMuted }}
          >
            {badge}
          </span>
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: colors.border }}
          />
        </motion.div>

        {/* Title and Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2
            className="text-2xl md:text-3xl font-normal leading-relaxed mb-2"
            style={{ color: colors.textDark }}
          >
            {title}
          </h2>
          <p
            className="text-lg md:text-xl font-normal"
            style={{ color: colors.textDark }}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12"
        >
          {plans.map((plan, index) => (
            <div key={index} className="text-center">
              {/* Plan Name with Underline */}
              <div className="mb-6">
                <span
                  className="text-sm tracking-wide pb-2 border-b-2"
                  style={{
                    color: plan.isActive ? colors.accent : colors.textMuted,
                    borderColor: plan.isActive ? colors.accent : colors.border,
                  }}
                >
                  {plan.name}
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span
                  className="text-5xl md:text-6xl font-light"
                  style={{ color: colors.textDark }}
                >
                  {plan.price}
                </span>
                <p
                  className="text-sm mt-1 italic"
                  style={{ color: colors.textMuted }}
                >
                  {plan.period}
                </p>
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed max-w-[280px] mx-auto"
                style={{ color: colors.textMuted }}
              >
                {plan.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <button
            onClick={onCtaClick}
            className="px-8 py-3 text-sm font-medium rounded-md border-2 transition-colors duration-200"
            style={{
              color: colors.accent,
              borderColor: colors.accent,
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.accent;
              e.currentTarget.style.color = isDark ? "#1F2937" : "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = colors.accent;
            }}
          >
            {ctaButton}
          </button>
        </motion.div>

        {/* Footer Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <span className="text-sm" style={{ color: colors.textMuted }}>
            {footerText}{" "}
          </span>
          <button
            onClick={onFooterLinkClick}
            className="text-sm underline underline-offset-2 transition-colors duration-200"
            style={{ color: colors.textMuted }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = colors.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = colors.textMuted;
            }}
          >
            {footerLink}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
