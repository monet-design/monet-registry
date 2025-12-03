"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    // 배경
    background: "#E4E6E5",
    cardBg: "#FFFFFF",
    // 제목 색상 (진한 청록색)
    titleColor: "#0A5A7C",
    // Primary 액센트 (버튼)
    accent: "#0570B2",
    accentHover: "#045A8D",
    // 녹색 (특징 텍스트)
    green: "#4CA578",
    // 노란색 배지
    badgeYellow: "#F5A623",
    badgeYellowBg: "#FDF4E3",
    // 주황색 버튼
    orange: "#EEA46D",
    orangeHover: "#E08F54",
    // 텍스트
    textPrimary: "#1F2937",
    textSecondary: "#6B7280",
    textMuted: "#9CA3AF",
    // 인기 배지
    popularBadgeBg: "#E8F5E9",
    popularBadgeText: "#2E7D32",
  },
  dark: {
    background: "#1A1A1A",
    cardBg: "#2D2D2D",
    titleColor: "#7DD3FC",
    accent: "#38BDF8",
    accentHover: "#0EA5E9",
    green: "#6EE7A0",
    badgeYellow: "#FBBF24",
    badgeYellowBg: "#422006",
    orange: "#FB923C",
    orangeHover: "#F97316",
    textPrimary: "#F9FAFB",
    textSecondary: "#D1D5DB",
    textMuted: "#9CA3AF",
    popularBadgeBg: "#14532D",
    popularBadgeText: "#86EFAC",
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

// Types
interface PricingFeature {
  text: string;
  highlighted?: boolean;
}

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  currency: string;
  period: string;
  buttonText: string;
  features: PricingFeature[];
  isPopular?: boolean;
}

interface SideSection {
  badgeText: string;
  badgeSubtext: string;
  title: string;
  description: string[];
  buttonText: string;
}

interface PricingOplBig6Props {
  mode?: "light" | "dark";
  title?: string;
  plans?: PricingPlan[];
  sideSection?: SideSection;
  onPlanClick?: (planId: string) => void;
  onSideButtonClick?: () => void;
}

// Default plans based on the image (Polish language)
const defaultPlans: PricingPlan[] = [
  {
    id: "mini",
    name: "MINI",
    price: "9",
    currency: "zł",
    period: "miesięcznie",
    buttonText: "Wypróbuj za darmo",
    features: [
      { text: "1 użytkownik", highlighted: true },
      { text: "20 dokumentów", highlighted: true },
      { text: "Dostęp przez internet\ni aplikację mobilną" },
      { text: "Eksport do CSV i PDF" },
      { text: "Eksport do księgowości online" },
    ],
  },
  {
    id: "plus",
    name: "PLUS",
    price: "29",
    currency: "zł",
    period: "miesięcznie",
    buttonText: "Wypróbuj za darmo",
    isPopular: true,
    features: [
      { text: "3 użytkowników", highlighted: true },
      { text: "50 dokumentów", highlighted: true },
      { text: "Dostęp przez internet\ni aplikację mobilną" },
      { text: "Raporty i analizy" },
      { text: "Eksport do CSV i PDF" },
      { text: "Eksport do księgowości online" },
    ],
  },
  {
    id: "multi",
    name: "MULTI",
    price: "89",
    currency: "zł",
    period: "miesięcznie",
    buttonText: "Wypróbuj za darmo",
    features: [
      { text: "10 użytkowników", highlighted: true },
      { text: "200 dokumentów", highlighted: true },
      { text: "Dostęp przez internet\ni aplikację mobilną" },
      { text: "Raporty i analizy" },
      { text: "Eksport do CSV i PDF" },
      { text: "Eksport do księgowości online" },
    ],
  },
];

const defaultSideSection: SideSection = {
  badgeText: "14 dni za darmo",
  badgeSubtext: "Wypróbuj bez podawania\nkarty kredytowej",
  title: "Masz większe\npotrzeby?",
  description: [
    "używasz\nniestandardowego\nsystemu księgowego,",
    "obsługujesz wiele firm",
    "lub prowadzisz\nbiuro rachunkowe",
  ],
  buttonText: "Dowiedz się więcej",
};

// Color type
type ColorScheme = (typeof COLORS)["light"] | (typeof COLORS)["dark"];

// Pricing card component
function PricingCard({
  plan,
  colors,
  index,
  onPlanClick,
}: {
  plan: PricingPlan;
  colors: ColorScheme;
  index: number;
  onPlanClick?: (planId: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col rounded-lg bg-white shadow-sm"
      style={{ backgroundColor: colors.cardBg }}
    >
      {/* Popular badge */}
      {plan.isPopular && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm px-3 py-1 text-[10px] font-medium uppercase tracking-wide"
          style={{
            backgroundColor: colors.popularBadgeBg,
            color: colors.popularBadgeText,
          }}
        >
          NAJPOPULARNIEJSZY
        </div>
      )}

      <div className="flex flex-col items-center p-6 pt-8">
        {/* Price */}
        <div className="mb-1 flex items-baseline">
          <span
            className="text-4xl font-bold"
            style={{ color: colors.accent }}
          >
            {plan.price}
          </span>
          <span
            className="ml-1 text-lg font-bold"
            style={{ color: colors.accent }}
          >
            {plan.currency}
          </span>
        </div>

        {/* Period */}
        <p
          className="mb-2 text-xs"
          style={{ color: colors.textMuted }}
        >
          {plan.period}
        </p>

        {/* Plan name */}
        <h3
          className="mb-4 text-sm font-bold tracking-wide"
          style={{ color: colors.accent }}
        >
          {plan.name}
        </h3>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onPlanClick?.(plan.id)}
          className="mb-6 w-full rounded-full px-4 py-2 text-xs font-medium text-white transition-colors"
          style={{ backgroundColor: colors.accent }}
        >
          {plan.buttonText}
        </motion.button>

        {/* Features */}
        <div className="w-full space-y-3 text-left">
          {plan.features.map((feature, idx) => (
            <p
              key={idx}
              className="text-xs leading-relaxed whitespace-pre-line"
              style={{
                color: feature.highlighted
                  ? colors.green
                  : colors.textSecondary,
                fontWeight: feature.highlighted ? 600 : 400,
              }}
            >
              {feature.text}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Side section component
function SideSectionComponent({
  sideSection,
  colors,
  onSideButtonClick,
}: {
  sideSection: SideSection;
  colors: ColorScheme;
  onSideButtonClick?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex flex-col items-center lg:items-start"
    >
      {/* Free trial badge */}
      <div
        className="mb-6 rounded-lg border-2 border-dashed px-6 py-4 text-center"
        style={{
          borderColor: colors.badgeYellow,
          backgroundColor: colors.badgeYellowBg,
        }}
      >
        <p
          className="text-base font-bold"
          style={{ color: colors.badgeYellow }}
        >
          {sideSection.badgeText}
        </p>
        <p
          className="mt-1 text-[10px] leading-relaxed whitespace-pre-line"
          style={{ color: colors.textSecondary }}
        >
          {sideSection.badgeSubtext}
        </p>
      </div>

      {/* More needs section */}
      <div className="text-center lg:text-left">
        <h3
          className="mb-4 text-lg font-bold leading-tight whitespace-pre-line"
          style={{ color: colors.textPrimary }}
        >
          {sideSection.title}
        </h3>

        <div className="mb-4 space-y-2">
          {sideSection.description.map((desc, idx) => (
            <p
              key={idx}
              className="text-xs leading-relaxed whitespace-pre-line"
              style={{ color: colors.textSecondary }}
            >
              {desc}
            </p>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onSideButtonClick}
          className="rounded-full px-6 py-2 text-xs font-medium text-white transition-colors"
          style={{ backgroundColor: colors.orange }}
        >
          {sideSection.buttonText}
        </motion.button>
      </div>
    </motion.div>
  );
}

// Main Component
export default function PricingOplBig6({
  mode = "light",
  title = "Wybierz plan dopasowany do Twojego biznesu",
  plans = defaultPlans,
  sideSection = defaultSideSection,
  onPlanClick,
  onSideButtonClick,
}: PricingOplBig6Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 text-center text-2xl font-bold sm:text-3xl lg:text-4xl"
          style={{ color: colors.titleColor }}
        >
          {title}
        </motion.h2>

        {/* Main content grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Pricing cards */}
          <div className="col-span-1 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-3">
            {plans.map((plan, index) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                colors={colors}
                index={index}
                onPlanClick={onPlanClick}
              />
            ))}
          </div>

          {/* Side section */}
          <div className="col-span-1 flex items-start justify-center lg:justify-start">
            <SideSectionComponent
              sideSection={sideSection}
              colors={colors}
              onSideButtonClick={onSideButtonClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
