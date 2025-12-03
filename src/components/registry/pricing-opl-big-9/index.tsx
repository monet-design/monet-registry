"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    // Primary 액센트 (버튼)
    accent: "#65D8A7",
    accentHover: "#4FC894",
    // Early Bird 텍스트 & 타이머 테두리
    earlyBird: "#E85A5A",
    // TEAM 라벨
    teamLabel: "#9B7ED9",
    // 배경
    background: "#FAFBFF",
  },
  dark: {
    accent: "#65D8A7",
    accentHover: "#4FC894",
    earlyBird: "#F87171",
    teamLabel: "#A78BFA",
    background: "#0F172A",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import "./font.css";

/**
 * 피처 아이템 타입
 */
interface FeatureItem {
  label: string;
  value: string;
}

/**
 * 가격 플랜 데이터 타입
 */
interface PricingPlan {
  id: string;
  name: string;
  price: string | number;
  originalPrice?: string | number;
  period?: string;
  features: FeatureItem[];
  buttonText: string;
  isHighlighted?: boolean;
  footnote?: string;
}

/**
 * 로고 타입
 */
interface Logo {
  name: string;
}

/**
 * 기본 가격 플랜 데이터
 */
const DEFAULT_PLANS: PricingPlan[] = [
  {
    id: "pro",
    name: "PRO",
    price: 9,
    period: "/mo",
    features: [
      { label: "01", value: "Designer" },
      { label: "Unlimited", value: "Projects" },
      { label: "Integrations", value: "Copy editors" },
      { label: "Unlimited", value: "Slack, JIRA, Trello" },
    ],
    buttonText: "GET STARTED FREE",
    footnote: "*15 days free trial. No Credit card required.",
  },
  {
    id: "team",
    name: "TEAM",
    price: 39,
    originalPrice: 59,
    period: "/mo",
    features: [
      { label: "05", value: "Designers" },
      { label: "Unlimited", value: "Projects (Websites)" },
      { label: "Unlimited", value: "Copy editors" },
      { label: "Integrations", value: "Slack, JIRA, Trello" },
      { label: "Unlimited", value: "Versioning control" },
      { label: "Team Dashboard", value: "Manage team members" },
    ],
    buttonText: "GET STARTED FREE",
    isHighlighted: true,
    footnote: "*15 days free trial. No Credit card required.",
  },
  {
    id: "enterprise",
    name: "ENTERPRISE",
    price: "LET'S TALK",
    features: [
      { label: "10+", value: "Designers" },
      { label: "Unlimited", value: "Projects (Websites)" },
      { label: "Unlimited", value: "Copy editors" },
      { label: "Integrations", value: "Slack, JIRA, Trello" },
      { label: "Unlimited", value: "Versioning control" },
      { label: "Team Dashboard", value: "Manage team" },
      { label: "Priority Support", value: "On-call & Email" },
      { label: "Customer development", value: "To suit your workflow" },
    ],
    buttonText: "GET IN TOUCH",
  },
];

/**
 * 기본 로고 데이터
 */
const DEFAULT_LOGOS: Logo[] = [
  { name: "accenture" },
  { name: "GMO INTERNET GROUP" },
  { name: "Cigna" },
  { name: "freshworks" },
  { name: "Paytm" },
  { name: "Vertz" },
];

/**
 * 타이머 기본값 (시간, 분, 초)
 */
interface TimerData {
  hours: number;
  minutes: number;
  seconds: number;
}

const DEFAULT_TIMER: TimerData = {
  hours: 0,
  minutes: 15,
  seconds: 55,
};

interface PricingOplBig9Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  earlyBirdText?: string;
  initialTimer?: TimerData;
  plans?: PricingPlan[];
  logos?: Logo[];
  onPlanSelect?: (planId: string) => void;
}

/**
 * 카운트다운 타이머 컴포넌트
 */
function CountdownTimer({
  initialTimer,
  earlyBirdColor,
  isDark,
}: {
  initialTimer: TimerData;
  earlyBirdColor: string;
  isDark: boolean;
}) {
  const [timer, setTimer] = useState(initialTimer);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div
      className="inline-flex items-center rounded-md border-2 px-3 py-1.5"
      style={{ borderColor: earlyBirdColor }}
    >
      <span
        className="mr-2 text-sm font-medium"
        style={{ color: earlyBirdColor }}
      >
        Time Left
      </span>
      <span
        className={`font-mono text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}
      >
        {formatNumber(timer.hours)}: {formatNumber(timer.minutes)}:{" "}
        {formatNumber(timer.seconds)}
      </span>
    </div>
  );
}

/**
 * 가격 카드 컴포넌트
 */
function PricingCard({
  plan,
  colors,
  isDark,
  onSelect,
  index,
}: {
  plan: PricingPlan;
  colors: (typeof COLORS)["light"] | (typeof COLORS)["dark"];
  isDark: boolean;
  onSelect?: (planId: string) => void;
  index: number;
}) {
  const isHighlighted = plan.isHighlighted;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col rounded-xl px-6 py-8 ${
        isHighlighted
          ? `${isDark ? "bg-gray-800" : "bg-white"} -translate-y-4 shadow-xl`
          : `${isDark ? "bg-gray-900" : "bg-white"} shadow-md`
      }`}
      style={{
        minHeight: isHighlighted ? "520px" : "460px",
      }}
    >
      {/* Plan Name */}
      <div className="mb-4 text-center">
        <span
          className="text-xs font-semibold tracking-[0.2em]"
          style={{
            color: isHighlighted
              ? colors.teamLabel
              : isDark
                ? "#9CA3AF"
                : "#6B7280",
          }}
        >
          {plan.name}
        </span>
      </div>

      {/* Price */}
      <div className="mb-6 text-center">
        {typeof plan.price === "number" ? (
          <div className="flex items-baseline justify-center">
            {plan.originalPrice && (
              <span
                className={`mr-2 text-lg line-through ${
                  isDark ? "text-gray-500" : "text-gray-400"
                }`}
              >
                ${plan.originalPrice}
              </span>
            )}
            <span
              className={`text-lg ${isDark ? "text-gray-400" : "text-gray-500"}`}
            >
              $
            </span>
            <span
              className={`text-5xl font-light ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {plan.price}
            </span>
            {plan.period && (
              <span
                className={`ml-1 text-sm ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {plan.period}
              </span>
            )}
          </div>
        ) : (
          <span
            className={`text-3xl font-medium tracking-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {plan.price}
          </span>
        )}
      </div>

      {/* Features */}
      <div className="mb-8 flex-1 space-y-3">
        {plan.features.map((feature, featureIndex) => (
          <div key={featureIndex} className="flex items-start text-sm">
            <span
              className={`w-28 shrink-0 font-medium ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {feature.label}
            </span>
            <span className={isDark ? "text-gray-400" : "text-gray-500"}>
              {feature.value}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onSelect?.(plan.id)}
        style={{ backgroundColor: colors.accent }}
        className="w-full rounded-full py-3 text-xs font-semibold tracking-wider text-white transition-all hover:opacity-90"
      >
        {plan.buttonText}
      </motion.button>

      {/* Footnote */}
      {plan.footnote && (
        <p
          className={`mt-3 text-center text-[10px] ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`}
        >
          {plan.footnote}
        </p>
      )}
    </motion.div>
  );
}

/**
 * 로고 클라우드 컴포넌트
 */
function LogoCloud({ logos, isDark }: { logos: Logo[]; isDark: boolean }) {
  return (
    <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12">
      {logos.map((logo, index) => (
        <motion.div
          key={logo.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
          className={`text-sm font-medium ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`}
        >
          {logo.name}
        </motion.div>
      ))}
    </div>
  );
}

export default function PricingOplBig9({
  mode = "light",
  title = "Affordable Pricing",
  subtitle = "Save upto $3000 worth of productive\nhours every month",
  earlyBirdText = "Early Bird Offer",
  initialTimer = DEFAULT_TIMER,
  plans = DEFAULT_PLANS,
  logos = DEFAULT_LOGOS,
  onPlanSelect,
}: PricingOplBig9Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h2
            className={`font-playfair text-3xl font-normal tracking-tight sm:text-4xl md:text-5xl ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
          </h2>
          <p
            className={`mt-4 whitespace-pre-line text-sm sm:text-base ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Early Bird Offer & Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 flex flex-col items-center gap-2"
        >
          {/* Handwritten text with arrow */}
          <div className="flex items-center gap-2">
            <span
              className="font-dancing text-lg italic"
              style={{
                color: colors.earlyBird,
              }}
            >
              {earlyBirdText}
            </span>
            {/* Simple arrow SVG */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              style={{ color: colors.earlyBird }}
              className="-rotate-45"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Countdown Timer */}
          <CountdownTimer
            initialTimer={initialTimer}
            earlyBirdColor={colors.earlyBird}
            isDark={isDark}
          />
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              colors={colors}
              isDark={isDark}
              onSelect={onPlanSelect}
              index={index}
            />
          ))}
        </div>

        {/* Logo Cloud */}
        <LogoCloud logos={logos} isDark={isDark} />
      </div>
    </section>
  );
}
