"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#0D0D0D",
  cardDark: "#1A1A1A",
  cardBorder: "#2A2A2A",
  purple: "#7C3AED",
  purpleLight: "#8B5CF6",
  purpleDark: "#6D28D9",
  textMuted: "#9CA3AF",
  textSubtle: "#6B7280",
} as const;

/**
 * 텍스트 컨텐츠
 */
const CONTENT = {
  headline: "World class design is just a\nfew clicks away..",
  description:
    "All subscriptions include unlimited design requests, unlimited revisions, unlimited team members and unlimited brands. You can also pause or cancel all subscriptions at any time.",
  weeklyPlan: {
    badge: "MOST AFFORDABLE",
    title: "Weekly",
    price: "$1250",
    period: "PAID WEEKLY",
    description: "Perfect if you only need a few one off designs.",
    cta: "Get a weekly subscription",
  },
  monthlyPlan: {
    badge: "BEST VALUE",
    title: "Monthly",
    price: "$4000",
    period: "PAID MONTHLY",
    description: "Best if you have ongoing design needs.",
    cta: "Get a monthly subscription",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface PlanCardProps {
  badge: string;
  title: string;
  price: string;
  period: string;
  description: string;
  cta: string;
  featured?: boolean;
  onCtaClick?: () => void;
}

function PlanCard({
  badge,
  title,
  price,
  period,
  description,
  cta,
  featured = false,
  onCtaClick,
}: PlanCardProps) {
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative rounded-3xl p-8 md:p-10 flex flex-col items-center text-center"
        style={{
          background: `linear-gradient(135deg, ${COLORS.purple} 0%, ${COLORS.purpleLight} 50%, ${COLORS.purple} 100%)`,
        }}
      >
        <span
          className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider text-white mb-4"
          style={{ backgroundColor: COLORS.purpleLight }}
        >
          {badge}
        </span>
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <div className="text-5xl md:text-6xl font-bold text-white mb-2">
          {price}
        </div>
        <p
          className="text-xs tracking-widest mb-6"
          style={{ color: "rgba(255, 255, 255, 0.7)" }}
        >
          {period}
        </p>
        <p className="text-sm mb-8" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
          {description}
        </p>
        <button
          onClick={onCtaClick}
          className="w-full py-3 px-6 rounded-full bg-white text-gray-900 font-medium text-sm hover:bg-gray-100 transition-colors duration-300"
        >
          {cta}
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="relative rounded-3xl p-8 md:p-10 flex flex-col items-center text-center border"
      style={{
        backgroundColor: COLORS.cardDark,
        borderColor: COLORS.cardBorder,
      }}
    >
      <span
        className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider mb-4"
        style={{ backgroundColor: COLORS.cardBorder, color: COLORS.textMuted }}
      >
        {badge}
      </span>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <div className="text-5xl md:text-6xl font-bold text-white mb-2">
        {price}
      </div>
      <p
        className="text-xs tracking-widest mb-6"
        style={{ color: COLORS.textSubtle }}
      >
        {period}
      </p>
      <p className="text-sm mb-8" style={{ color: COLORS.textMuted }}>
        {description}
      </p>
      <button
        onClick={onCtaClick}
        className="w-full py-3 px-6 rounded-full bg-black text-white font-medium text-sm hover:bg-gray-900 transition-colors duration-300 border border-gray-800"
      >
        {cta}
      </button>
    </motion.div>
  );
}

function StripeIcon() {
  return (
    <svg viewBox="0 0 60 25" className="h-4" fill="white">
      <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.02 1.04-.06 1.48zm-3.67-3.14c0-1.33-.6-3.04-2.3-3.04-1.61 0-2.4 1.62-2.55 3.04h4.85zm-13.9 9.39c-1.15 0-2.12-.3-2.83-.78l-.03 5.95-4.02.85V6.2h3.56l.17 1.07c.73-.88 1.85-1.27 3.06-1.27 2.73 0 5.06 2.44 5.06 6.85 0 4.93-2.38 7.68-4.97 7.68zm-.8-11.06c-.73 0-1.28.23-1.73.75v5.27c.44.48.96.7 1.64.7 1.39 0 2.32-1.54 2.32-3.37 0-1.98-.9-3.35-2.23-3.35zm-8.24-5.9v2.51h2.45V9.9h-2.45v5.83c0 1.38.47 1.74 1.32 1.74.44 0 .79-.05 1.13-.13v3.58c-.63.2-1.47.34-2.53.34-2.48 0-3.94-1.49-3.94-4.07V9.9h-1.68V6.2h1.68V4.28l4.02-.72zm-8.67 2.15L24.3 20.1h-4.22l1.77-3.95-4.24-10H22l2.33 6.42 2.44-6.42h4.18zm-14.9 14.53c-4.42 0-7.21-3.3-7.21-7.54 0-4.24 2.79-7.5 7.21-7.5 4.42 0 7.2 3.26 7.2 7.5 0 4.24-2.78 7.54-7.2 7.54zm0-3.6c1.78 0 3.14-1.68 3.14-3.94 0-2.26-1.36-3.9-3.14-3.9-1.79 0-3.15 1.64-3.15 3.9 0 2.26 1.36 3.93 3.15 3.93z" />
    </svg>
  );
}

function VisaIcon() {
  return (
    <svg viewBox="0 0 50 16" className="h-6" fill="white">
      <path d="M19.13 15.03h-3.7l2.32-14.3h3.7l-2.32 14.3zm14.52-13.95c-.73-.29-1.88-.6-3.31-.6-3.65 0-6.22 1.94-6.24 4.72-.02 2.05 1.84 3.2 3.24 3.88 1.44.7 1.93 1.15 1.92 1.77-.01.96-1.15 1.4-2.21 1.4-1.48 0-2.27-.22-3.48-.75l-.48-.23-.52 3.2c.86.4 2.46.74 4.12.76 3.88 0 6.4-1.91 6.43-4.88.02-1.63-.97-2.87-3.1-3.89-1.29-.66-2.08-1.1-2.07-1.77 0-.6.67-1.23 2.11-1.23 1.2-.02 2.07.26 2.75.55l.33.16.5-3.09zm9.42-.35h-2.85c-.88 0-1.54.25-1.93 1.18l-5.47 13.12h3.87l.77-2.14h4.73l.45 2.14h3.42l-2.99-14.3zm-4.56 9.24c.31-.83 1.49-4.02 1.49-4.02-.02.04.31-.84.5-1.38l.25 1.25.87 4.15h-3.11zM14.5.73l-3.62 9.77-.39-1.98C9.62 5.89 7.08 3.09 4.25 1.7l3.31 12.57h3.9L18.4.73h-3.9z" />
      <path
        d="M7.32.73H1.06l-.06.37c4.63 1.18 7.7 4.04 8.97 7.47L8.6 1.93C8.41 1.01 7.77.77 7.32.73z"
        fill="#F1A020"
      />
    </svg>
  );
}

function MastercardIcon() {
  return (
    <svg viewBox="0 0 32 20" className="h-6">
      <circle cx="10" cy="10" r="10" fill="#EB001B" />
      <circle cx="22" cy="10" r="10" fill="#F79E1B" />
      <path
        d="M16 3.14c2.67 2.12 4.37 5.38 4.37 9.03s-1.7 6.9-4.37 9.02c-2.67-2.12-4.37-5.37-4.37-9.02s1.7-6.91 4.37-9.03z"
        fill="#FF5F00"
      />
    </svg>
  );
}

function AmexIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-6">
      <rect width="32" height="32" rx="4" fill="#016FD0" />
      <path
        d="M5 16h4l.5-1.2h1l.5 1.2h8v-.9l.7.9h4.1l.7-.9v.9H29v-6h-4.5l-.7.9-.7-.9H14.5l-1.1 2.4-1.1-2.4H8v.9l-.7-.9H4l-2 4.5v1.5H5zm1.6-4.5h2l2.3 4.9v-4.9h2.2l1.8 3.8 1.7-3.8h2.2v5.5h-1.4l-.02-4.3-2 4.3h-1.2l-2-4.3v4.3H9.5l-.5-1.2H6.6l-.5 1.2H4.5l2.1-5.5zm1.5 3l.9-2.2.9 2.2h-1.8zm11.5-3h1.5v5.5h-1.5v-5.5zm4.7 0h1.6l2.1 4v-4h1.5v5.5h-1.6l-2.1-4.1v4.1H24.3v-5.5z"
        fill="white"
      />
    </svg>
  );
}

interface PricingOplScreenshot31Props {
  headline?: string;
  description?: string;
  weeklyPlan?: {
    badge?: string;
    title?: string;
    price?: string;
    period?: string;
    description?: string;
    cta?: string;
  };
  monthlyPlan?: {
    badge?: string;
    title?: string;
    price?: string;
    period?: string;
    description?: string;
    cta?: string;
  };
  onWeeklyClick?: () => void;
  onMonthlyClick?: () => void;
}

export default function PricingOplScreenshot31({
  headline = CONTENT.headline,
  description = CONTENT.description,
  weeklyPlan = CONTENT.weeklyPlan,
  monthlyPlan = CONTENT.monthlyPlan,
  onWeeklyClick,
  onMonthlyClick,
}: PricingOplScreenshot31Props) {
  const mergedWeekly = { ...CONTENT.weeklyPlan, ...weeklyPlan };
  const mergedMonthly = { ...CONTENT.monthlyPlan, ...monthlyPlan };

  return (
    <section
      className="relative w-full py-16 md:py-24 px-6"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 whitespace-pre-line leading-tight">
            {headline}
          </h2>
          <p
            className="text-sm md:text-base max-w-2xl leading-relaxed"
            style={{ color: COLORS.textMuted }}
          >
            {description}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <PlanCard
            badge={mergedWeekly.badge}
            title={mergedWeekly.title}
            price={mergedWeekly.price}
            period={mergedWeekly.period}
            description={mergedWeekly.description}
            cta={mergedWeekly.cta}
            onCtaClick={onWeeklyClick}
          />
          <PlanCard
            badge={mergedMonthly.badge}
            title={mergedMonthly.title}
            price={mergedMonthly.price}
            period={mergedMonthly.period}
            description={mergedMonthly.description}
            cta={mergedMonthly.cta}
            featured
            onCtaClick={onMonthlyClick}
          />
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded border border-gray-700 bg-black">
            <span className="text-xs text-gray-400">Powered by</span>
            <StripeIcon />
          </div>
          <div className="flex items-center gap-4">
            <VisaIcon />
            <MastercardIcon />
            <AmexIcon />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
