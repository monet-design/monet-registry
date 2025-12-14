"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    // Primary accent (buttons)
    accent: "#111111",
    accentHover: "#333333",
    // Text colors
    textPrimary: "#111111",
    textSecondary: "#4c4c4c",
    textMuted: "#808080",
    // Card colors
    cardBg: "#FFFFFF",
    featureBg: "#E8E4E2",
    // Discount badge
    discountBg: "#0E122E",
    discountBorder: "#161C44",
    discountText: "#CCD7FF",
    // Gradient colors for middle card accent
    gradientStart: "#FF2F2F",
    gradientMid1: "#EF7B16",
    gradientMid2: "#8A43E1",
    gradientEnd: "#D511FD",
    // Toggle
    toggleBg: "#111111",
    toggleKnob: "#FFFFFF",
    // Feature tick colors
    tickGreen: "#22C55E",
    tickOrange: "#F97316",
    tickPurple: "#A855F7",
  },
  dark: {
    accent: "#FFFFFF",
    accentHover: "#E5E5E5",
    textPrimary: "#FFFFFF",
    textSecondary: "#A3A3A3",
    textMuted: "#737373",
    cardBg: "#1A1A1A",
    featureBg: "#262626",
    discountBg: "#0E122E",
    discountBorder: "#161C44",
    discountText: "#CCD7FF",
    gradientStart: "#FF2F2F",
    gradientMid1: "#EF7B16",
    gradientMid2: "#8A43E1",
    gradientEnd: "#D511FD",
    toggleBg: "#FFFFFF",
    toggleKnob: "#111111",
    tickGreen: "#22C55E",
    tickOrange: "#F97316",
    tickPurple: "#A855F7",
  },
} as const;

/**
 * Default content
 */
const DEFAULT_CONTENT = {
  badge: "이용 요금",
  heading: "가장 합리적인 요금제.",
  subheading: "당신의 비즈니스 성장에 맞춰, 유연하고 투명한 플랜을 선택하세요",
  toggleLabels: {
    monthly: "월별 결제",
    annual: "연간 결제",
  },
  plans: [
    {
      id: "starter",
      name: "스타터",
      description: "이제 막 '후커블'과 함께 상세페이지 제작을\n시작하는 셀러",
      discount: "10% 할인중",
      price: "39,000원",
      period: "/ 월",
      buttonText: "무료로 시작하기",
      iconColor: "red" as const,
      isHighlighted: false,
      features: [
        "상세페이지 '2회' 생성 가능",
        "'GIF' 자동 생성 AI",
        "고객 댓글 분석 AI",
        "사진 첨부 및 분석 AI",
        "후커블 AI와 대화하며 무제한 수정",
      ],
    },
    {
      id: "growth",
      name: "그로스",
      description: "여러 제품으로 비즈니스를 '성장'시키는 셀러",
      discount: "20% 할인중",
      price: "69,000원",
      period: "/ 월",
      buttonText: "무료 시작하기",
      iconColor: "orange" as const,
      isHighlighted: true,
      features: ["상세페이지 '4회' 생성 가능", "스타터 플랜의 모든 기능"],
    },
    {
      id: "pro",
      name: "프로",
      description: "비즈니스를 본격적으로 '확장' 하는 전문 셀러",
      discount: "30% 할인중",
      price: "149,000원",
      period: "/ 월",
      buttonText: "무료 시작하기",
      iconColor: "purple" as const,
      isHighlighted: false,
      features: [
        "상세페이지 '10회' 생성 가능",
        "'피그마'에서 편집하기 가능",
        "'추가' 생성 횟수 구매 가능",
        "그로스 플랜의 모든 기능",
      ],
    },
  ],
  footer: {
    creditCard: "신용카드 등록 없이",
    freeCredit: "첫 가입 시, 무료 1회 생성권 지급",
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { CreditCard, Calendar, Check } from "lucide-react";

// Font import
const fontUrl =
  "https://fonts.googleapis.com/css2?family=Rethink+Sans:wght@400;500;600;700&display=swap";

// Plan icons as SVG components
const StarterIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 14L34 34M34 14L14 34"
      stroke="#FF4B6E"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);

const GrowthIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="8" fill="#FF8F3F" />
    <circle cx="32" cy="16" r="8" fill="#FFB366" />
    <circle cx="24" cy="30" r="8" fill="#FFCC80" />
  </svg>
);

const ProIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 4L27.5 17.5H41L30 26L34 40L24 31L14 40L18 26L7 17.5H20.5L24 4Z"
      fill="#B388FF"
      stroke="#7C4DFF"
      strokeWidth="2"
    />
  </svg>
);

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  discount: string;
  price: string;
  period: string;
  buttonText: string;
  iconColor: "red" | "orange" | "purple";
  isHighlighted: boolean;
  features: string[];
}

interface HookableAiPricing5Props {
  mode?: "light" | "dark";
  badge?: string;
  heading?: string;
  subheading?: string;
  toggleLabels?: {
    monthly: string;
    annual: string;
  };
  plans?: PricingPlan[];
  footer?: {
    creditCard: string;
    freeCredit: string;
  };
  onPlanSelect?: (planId: string) => void;
}

export default function HookableAiPricing5({
  mode = "light",
  badge = DEFAULT_CONTENT.badge,
  heading = DEFAULT_CONTENT.heading,
  subheading = DEFAULT_CONTENT.subheading,
  toggleLabels = DEFAULT_CONTENT.toggleLabels,
  plans = DEFAULT_CONTENT.plans,
  footer = DEFAULT_CONTENT.footer,
  onPlanSelect,
}: HookableAiPricing5Props) {
  const colors = COLORS[mode];
  const [isAnnual, setIsAnnual] = useState(false);

  // Load font
  useEffect(() => {
    const link = document.createElement("link");
    link.href = fontUrl;
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const getPlanIcon = (iconColor: "red" | "orange" | "purple") => {
    switch (iconColor) {
      case "red":
        return <StarterIcon />;
      case "orange":
        return <GrowthIcon />;
      case "purple":
        return <ProIcon />;
    }
  };

  const getTickColor = (iconColor: "red" | "orange" | "purple") => {
    switch (iconColor) {
      case "red":
        return colors.tickGreen;
      case "orange":
        return colors.tickGreen;
      case "purple":
        return colors.tickGreen;
    }
  };

  return (
    <section
      className="relative w-full py-16 px-4 sm:py-20 md:py-24"
      style={{
        backgroundColor: mode === "dark" ? "#0A0A0A" : "rgb(244, 242, 241)",
        fontFamily: '"Rethink Sans", sans-serif',
      }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span
            className="px-4 py-2 rounded-full text-sm font-medium shadow-sm"
            style={{
              backgroundColor: colors.cardBg,
              color: colors.textPrimary,
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
            }}
          >
            {badge}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          style={{ color: colors.textPrimary }}
        >
          {heading}
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-base sm:text-lg mb-10"
          style={{ color: colors.textSecondary }}
        >
          {subheading}
        </motion.p>

        {/* Toggle Switch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center items-center gap-4 mb-12"
        >
          <span
            className="text-base font-medium"
            style={{ color: colors.textPrimary }}
          >
            {toggleLabels.monthly}
          </span>

          {/* Toggle */}
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none"
            style={{ backgroundColor: colors.toggleBg }}
            aria-label="Toggle billing period"
          >
            <motion.div
              className="absolute top-1 w-5 h-5 rounded-full shadow-md"
              style={{ backgroundColor: colors.toggleKnob }}
              animate={{ left: isAnnual ? "calc(100% - 24px)" : "4px" }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
            {/* Gradient bar underneath when toggled */}
            {isAnnual && (
              <div
                className="absolute -bottom-1.5 left-0 right-0 h-1 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${colors.gradientStart}, ${colors.gradientMid1}, ${colors.gradientMid2}, ${colors.gradientEnd})`,
                }}
              />
            )}
          </button>

          <span
            className="text-base"
            style={{ color: isAnnual ? colors.textPrimary : colors.textMuted }}
          >
            {toggleLabels.annual}
          </span>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="relative rounded-[20px] overflow-hidden h-full"
            >
              {/* Main Card */}
              <div
                className="rounded-2xl shadow-lg h-full flex flex-col"
                style={{
                  backgroundColor: colors.cardBg,
                  boxShadow:
                    "0 1px 1px rgba(0, 0, 0, 0.2), 0 3px 8px rgba(0, 0, 0, 0.05)",
                }}
              >
                {/* Top Section (White) */}
                <div className="p-6 pb-8">
                  {/* Icon */}
                  <div className="mb-4">{getPlanIcon(plan.iconColor)}</div>

                  {/* Plan Name */}
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: colors.textPrimary }}
                  >
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm whitespace-pre-line mb-3 leading-relaxed"
                    style={{ color: colors.textSecondary }}
                  >
                    {plan.description}
                  </p>

                  {/* Discount Badge */}
                  <div
                    className="inline-block px-3 py-1.5 rounded-full text-sm font-medium mb-4"
                    style={{
                      backgroundColor: colors.discountBg,
                      border: `1px solid ${colors.discountBorder}`,
                      color: colors.discountText,
                    }}
                  >
                    {plan.discount}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-6">
                    <span
                      className="text-4xl font-bold"
                      style={{ color: colors.textPrimary }}
                    >
                      {plan.price}
                    </span>
                    <span
                      className="text-base"
                      style={{ color: colors.textSecondary }}
                    >
                      {plan.period}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => onPlanSelect?.(plan.id)}
                    className="w-full py-4 px-6 rounded-lg text-base font-medium transition-colors duration-200"
                    style={{
                      backgroundColor: colors.accent,
                      color: mode === "dark" ? "#000000" : "#FFFFFF",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        colors.accentHover;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = colors.accent;
                    }}
                  >
                    {plan.buttonText}
                  </button>
                </div>

                {/* Features Section (Beige/Gray) */}
                <div
                  className="px-6 py-6 flex-1 mb-1"
                  style={{ backgroundColor: colors.featureBg }}
                >
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <span
                          className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                          style={{
                            backgroundColor: getTickColor(plan.iconColor),
                          }}
                        >
                          <Check
                            className="w-3 h-3 text-white"
                            strokeWidth={3}
                          />
                        </span>
                        <span
                          className="text-base font-medium leading-relaxed"
                          style={{ color: "#1E1E1E" }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Accent Bar (Gradient for highlighted plan, solid for others) */}
              <div
                className="h-2 rounded-b-[20px] -mt-1"
                style={{
                  background: plan.isHighlighted
                    ? `linear-gradient(90deg, ${colors.gradientStart}, ${colors.gradientMid1}, ${colors.gradientMid2}, ${colors.gradientEnd})`
                    : "#DED8D3",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-6 text-base"
        >
          <div className="flex items-center gap-2">
            <CreditCard
              className="w-5 h-5"
              style={{ color: colors.textPrimary }}
            />
            <span style={{ color: colors.textPrimary }}>
              {footer.creditCard}
            </span>
          </div>

          <div
            className="w-1 h-1 rounded-full"
            style={{ backgroundColor: "#DED8D3" }}
          />

          <div className="flex items-center gap-2">
            <Calendar
              className="w-5 h-5"
              style={{ color: colors.textPrimary }}
            />
            <span style={{ color: colors.textPrimary }}>
              {footer.freeCredit}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
