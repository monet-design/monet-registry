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
    accent: "#E00502", // F1 레드
    accentHover: "#C00402", // F1 레드 호버
    // 카드 헤더 배경
    headerDark: "#232326",
    headerDarkGradientEnd: "#38393E",
    // 배경
    pageBackground: "#F8F4F1",
  },
  dark: {
    accent: "#E00502",
    accentHover: "#C00402",
    headerDark: "#232326",
    headerDarkGradientEnd: "#38393E",
    pageBackground: "#1A1A1A",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import { Check, ChevronDown, ChevronRight, Video, Play } from "lucide-react";

// F1 로고 SVG 컴포넌트
function F1Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 20"
      className={className}
      fill="currentColor"
    >
      <path d="M0 0h10v4H4v4h6v4H4v8H0V0zm12 0h10v4h-6v4h6v4h-6v8h-4V0zm14 0h4v16h6v4h-10V0z" />
    </svg>
  );
}

// Feature 항목 타입
interface FeatureItem {
  text: string;
  icon: "check" | "star" | "video";
}

// Feature 섹션 타입
interface FeatureSection {
  title: string;
  features: FeatureItem[];
}

// 플랜 타입
interface Plan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  monthlyPrice?: string;
  isPrimary: boolean;
  ctaText: string;
  featureSections: FeatureSection[];
  liveTiming: string;
}

interface PricingFormula1Props {
  mode?: "light" | "dark";
  title?: string;
  plans?: Plan[];
  billingPeriod?: "annual" | "monthly";
  onBillingChange?: (period: "annual" | "monthly") => void;
  footnotes?: string[];
}

// 기본 플랜 데이터
const defaultPlans: Plan[] = [
  {
    id: "tv-pro",
    name: "TV Pro",
    tagline: "Watch all F1 races live",
    price: "$44.99",
    period: "PER YEAR",
    monthlyPrice: "$4.49",
    isPrimary: true,
    ctaText: "SUBSCRIBE",
    featureSections: [
      {
        title: "Watch live",
        features: [
          { text: "Live stream every track session for all GPs", icon: "star" },
          { text: "Access all driver onboard cameras & team radios", icon: "star" },
          { text: "Live stream F1, F2, F3 and Porsche Supercup", icon: "star" },
        ],
      },
      {
        title: "Watch F1 on demand*",
        features: [
          { text: "Full Race replays and highlights", icon: "check" },
          { text: "On demand access to all F1 onboard cameras", icon: "check" },
          { text: "Watch all F1, F2, F3, Porsche Supercup replays", icon: "check" },
          { text: "F1's historic race archive", icon: "check" },
        ],
      },
    ],
    liveTiming: "Full access to all live timing features",
  },
  {
    id: "tv-access",
    name: "TV Access",
    tagline: "Watch all the races replays",
    price: "$26.99",
    period: "PER YEAR",
    monthlyPrice: "$2.99",
    isPrimary: false,
    ctaText: "SUBSCRIBE",
    featureSections: [
      {
        title: "Watch F1 on demand*",
        features: [
          { text: "Full Race replays and highlights", icon: "check" },
          { text: "On demand access to all F1 onboard cameras", icon: "check" },
          { text: "Watch all F1, F2, F3, Porsche Supercup replays", icon: "check" },
          { text: "F1's historic race archive", icon: "check" },
        ],
      },
    ],
    liveTiming: "Full access to all live timing features",
  },
];

const defaultFootnotes = [
  "*Replay availability varies. See global coverage plan.",
  "†Available on the F1 App as part of your subscription plan",
  "Plan selected must be associated with your resident country and the country you are in at time of subscribing.",
];

// 기능 아이콘 컴포넌트
function FeatureIcon({ type, isPrimary }: { type: "check" | "star" | "video"; isPrimary: boolean }) {
  if (type === "star") {
    return (
      <span
        className="flex h-4 w-4 items-center justify-center rounded-sm text-white text-xs font-bold"
        style={{ backgroundColor: COLORS.light.accent }}
      >
        ★
      </span>
    );
  }
  return (
    <Check
      className="h-4 w-4"
      style={{ color: isPrimary ? COLORS.light.accent : "#666" }}
      strokeWidth={2}
    />
  );
}

// 가격 카드 컴포넌트
function PricingCard({
  plan,
  index,
  billingPeriod,
}: {
  plan: Plan;
  index: number;
  billingPeriod: "annual" | "monthly";
}) {
  const [isLiveTimingOpen, setIsLiveTimingOpen] = useState(false);
  const displayPrice = billingPeriod === "monthly" && plan.monthlyPrice ? plan.monthlyPrice : plan.price;
  const displayPeriod = billingPeriod === "monthly" ? "PER MONTH" : plan.period;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="flex w-full max-w-[360px] flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
    >
      {/* 카드 헤더 */}
      <div
        className="flex items-center gap-3 px-6 py-4"
        style={{
          background: plan.isPrimary
            ? `linear-gradient(135deg, ${COLORS.light.headerDarkGradientEnd} 0%, ${COLORS.light.headerDark} 100%)`
            : "#FFFFFF",
          borderBottom: plan.isPrimary ? "none" : "1px solid #E5E5E5",
        }}
      >
        {/* F1 로고 */}
        <div
          className="flex items-center justify-center rounded px-2 py-1"
          style={{ backgroundColor: COLORS.light.accent }}
        >
          <span className="text-sm font-bold text-white tracking-tight">F1</span>
        </div>
        <div>
          <h3
            className="text-lg font-semibold"
            style={{ color: plan.isPrimary ? "#FFFFFF" : "#1A1A1A" }}
          >
            {plan.name}
          </h3>
          <p
            className="text-sm"
            style={{ color: plan.isPrimary ? "rgba(255,255,255,0.8)" : "#666666" }}
          >
            {plan.tagline}
          </p>
        </div>
      </div>

      {/* 가격 섹션 */}
      <div className="px-6 py-5 text-center border-b border-gray-100">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-3xl font-bold text-gray-900">{displayPrice}</span>
        </div>
        <span className="text-xs font-medium tracking-wider text-gray-500">{displayPeriod}</span>
      </div>

      {/* 기능 섹션 */}
      <div className="flex-1 px-6 py-4">
        {plan.featureSections.map((section, sectionIdx) => (
          <div key={sectionIdx} className="mb-4">
            <h4 className="mb-2 text-sm font-semibold text-gray-900">{section.title}</h4>
            <ul className="space-y-2">
              {section.features.map((feature, featureIdx) => (
                <li key={featureIdx} className="flex items-start gap-2">
                  <span className="mt-0.5 flex-shrink-0">
                    <FeatureIcon type={feature.icon} isPrimary={plan.isPrimary} />
                  </span>
                  <span className="text-xs text-gray-600 leading-relaxed">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Live Timing 드롭다운 */}
        <div className="mt-4 border-t border-gray-100 pt-4">
          <button
            onClick={() => setIsLiveTimingOpen(!isLiveTimingOpen)}
            className="flex w-full items-center justify-between text-left"
          >
            <span className="text-sm font-semibold text-gray-900">
              Live timing <sup className="text-xs">†</sup>
            </span>
            <ChevronDown
              className={`h-4 w-4 text-gray-500 transition-transform ${
                isLiveTimingOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isLiveTimingOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2"
            >
              <div className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-500" strokeWidth={2} />
                <span className="text-xs text-gray-600">{plan.liveTiming}</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* CTA 버튼 */}
      <div className="px-6 pb-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-colors"
          style={{
            backgroundColor: plan.isPrimary ? COLORS.light.accent : "transparent",
            color: plan.isPrimary ? "#FFFFFF" : "#1A1A1A",
            border: plan.isPrimary ? "none" : "1px solid #E5E5E5",
          }}
        >
          {plan.ctaText}
          <ChevronRight className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}

// 빌링 토글 컴포넌트
function BillingToggle({
  billingPeriod,
  onChange,
}: {
  billingPeriod: "annual" | "monthly";
  onChange: (period: "annual" | "monthly") => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="flex items-center justify-center gap-3"
    >
      <span
        className={`text-sm font-medium ${
          billingPeriod === "annual" ? "text-gray-900" : "text-gray-500"
        }`}
      >
        Annual
      </span>
      <button
        onClick={() => onChange(billingPeriod === "annual" ? "monthly" : "annual")}
        className="relative h-6 w-11 rounded-full bg-gray-300 transition-colors"
        style={{
          backgroundColor: billingPeriod === "monthly" ? COLORS.light.accent : "#D1D5DB",
        }}
      >
        <motion.div
          className="absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm"
          initial={false}
          animate={{
            left: billingPeriod === "annual" ? "2px" : "calc(100% - 22px)",
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </button>
      <span
        className={`text-sm font-medium ${
          billingPeriod === "monthly" ? "text-gray-900" : "text-gray-500"
        }`}
      >
        Monthly
      </span>
    </motion.div>
  );
}

export default function PricingFormula1({
  mode = "light",
  title = "Choose your plan",
  plans = defaultPlans,
  billingPeriod: controlledBillingPeriod,
  onBillingChange,
  footnotes = defaultFootnotes,
}: PricingFormula1Props) {
  const [internalBillingPeriod, setInternalBillingPeriod] = useState<"annual" | "monthly">("annual");

  const billingPeriod = controlledBillingPeriod ?? internalBillingPeriod;
  const handleBillingChange = onBillingChange ?? setInternalBillingPeriod;

  return (
    <section
      className="relative w-full py-12 md:py-16"
      style={{ backgroundColor: COLORS.light.pageBackground }}
    >
      <div className="mx-auto max-w-5xl px-4">
        {/* 타이틀 */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-lg font-medium text-gray-600"
        >
          {title}
        </motion.h2>

        {/* 가격 카드들 */}
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:items-stretch">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              index={index}
              billingPeriod={billingPeriod}
            />
          ))}
        </div>

        {/* 빌링 토글 */}
        <div className="mt-8">
          <BillingToggle billingPeriod={billingPeriod} onChange={handleBillingChange} />
        </div>

        {/* 하단 안내 문구 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 space-y-1 text-center"
        >
          {footnotes.map((footnote, index) => (
            <p key={index} className="text-xs text-gray-500">
              {footnote.includes("See global coverage plan") ? (
                <>
                  {footnote.split("See global coverage plan")[0]}
                  <a
                    href="#"
                    className="underline hover:text-gray-700"
                    style={{ color: COLORS.light.accent }}
                  >
                    See global coverage plan.
                  </a>
                </>
              ) : (
                footnote
              )}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
