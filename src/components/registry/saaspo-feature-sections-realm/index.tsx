"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
interface ColorScheme {
  card1Bg: string;
  card2Bg: string;
  card3Bg: string;
  chartBar: string;
  chartBarLight: string;
}

const COLORS: Record<"light" | "dark", ColorScheme> = {
  light: {
    card1Bg: "#D8EEE9",
    card2Bg: "#E8E0D4",
    card3Bg: "#E8E4F0",
    chartBar: "#B8B4E8",
    chartBarLight: "#D8D4F0",
  },
  dark: {
    card1Bg: "#1a3330",
    card2Bg: "#2d2620",
    card3Bg: "#262030",
    chartBar: "#6B66A8",
    chartBarLight: "#4A4678",
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, ChevronDown } from "lucide-react";

interface FeatureCard {
  title: string;
  description: string;
  illustration: "technical" | "rfp" | "revenue";
}

interface SaaspoFeatureSectionsRealmProps {
  mode?: "light" | "dark";
  badge?: string;
  headline?: string;
  features?: FeatureCard[];
}

// App icon components for the first card
function NotionIcon() {
  return (
    <div className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center">
      <div className="w-6 h-6 bg-black rounded text-white text-xs font-bold flex items-center justify-center">
        N
      </div>
    </div>
  );
}

function ZendeskIcon() {
  return (
    <div className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#03363D">
        <path d="M11 3v18l-8-9 8-9zm2 0l8 9-8 9V3z" />
      </svg>
    </div>
  );
}

function SalesforceIcon() {
  return (
    <div className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#00A1E0">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    </div>
  );
}

function GenericAppIcon({ color }: { color: string }) {
  return (
    <div
      className="w-10 h-10 rounded-lg shadow-md"
      style={{ backgroundColor: color }}
    />
  );
}

function RealmLogo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    </div>
  );
}

function GoogleSheetsIcon() {
  return (
    <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <rect width="24" height="24" rx="2" fill="#0F9D58" />
        <rect x="5" y="5" width="14" height="14" rx="1" fill="white" />
        <rect x="7" y="8" width="4" height="2" fill="#0F9D58" />
        <rect x="7" y="11" width="4" height="2" fill="#0F9D58" />
        <rect x="7" y="14" width="4" height="2" fill="#0F9D58" />
        <rect x="13" y="8" width="4" height="2" fill="#0F9D58" />
        <rect x="13" y="11" width="4" height="2" fill="#0F9D58" />
        <rect x="13" y="14" width="4" height="2" fill="#0F9D58" />
      </svg>
    </div>
  );
}

// Technical Questions Illustration
function TechnicalIllustration({ colors }: { colors: ColorScheme }) {
  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden p-6"
      style={{ backgroundColor: colors.card1Bg }}
    >
      {/* Search bar */}
      <div className="absolute top-6 left-6 right-6">
        <div className="bg-white rounded-full px-4 py-2.5 shadow-sm flex items-center gap-2 max-w-[220px]">
          <div className="flex items-center gap-1">
            <RealmLogo />
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </div>
          <span className="text-sm text-gray-700">What&apos;s our uptime SLA</span>
        </div>
      </div>

      {/* Bracket line */}
      <div className="absolute left-8 top-20 w-px h-20 bg-gray-400 opacity-50" />
      <div className="absolute left-8 top-20 w-4 h-px bg-gray-400 opacity-50" />
      <div className="absolute left-8 top-40 w-4 h-px bg-gray-400 opacity-50" />

      {/* App icons floating */}
      <div className="absolute bottom-8 left-8 right-8 h-32 flex items-end justify-center gap-2">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="transform -rotate-6"
        >
          <NotionIcon />
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="transform rotate-3 -mt-4"
        >
          <ZendeskIcon />
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="transform -rotate-3"
        >
          <GenericAppIcon color="#FF5722" />
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="transform rotate-6 -mt-6"
        >
          <SalesforceIcon />
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="transform -rotate-2"
        >
          <GenericAppIcon color="#4CAF50" />
        </motion.div>
      </div>
    </div>
  );
}

// RFP Automation Illustration
function RfpIllustration({ colors }: { colors: ColorScheme }) {
  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden"
      style={{ backgroundColor: colors.card2Bg }}
    >
      {/* Table header */}
      <div className="absolute top-0 left-0 right-0 bg-[#D4C8B8] px-4 py-3 flex items-center">
        <div className="flex-1 text-center">
          <span className="text-sm font-medium text-gray-700">RFP Questions</span>
        </div>
        <div className="flex-1 text-center">
          <span className="text-sm font-medium text-gray-700">Answers</span>
        </div>
      </div>

      {/* Google Sheets icon floating */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 z-10"
      >
        <GoogleSheetsIcon />
      </motion.div>

      {/* Table rows */}
      <div className="absolute top-16 left-4 right-4 space-y-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex gap-4">
            <div className="flex-1 h-3 bg-[#C8BCA8] rounded-full opacity-60" />
            <div className="flex-1 h-3 bg-[#C8BCA8] rounded-full opacity-40" />
          </div>
        ))}
      </div>

      {/* Auto filling badge */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-lg px-3 py-2 shadow-sm flex items-center gap-2"
      >
        <RealmLogo />
        <span className="text-xs text-gray-600">Auto filling...</span>
      </motion.div>

      {/* More table rows at bottom */}
      <div className="absolute bottom-8 left-4 right-4 space-y-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-4">
            <div className="flex-1 h-3 bg-[#C8BCA8] rounded-full opacity-50" />
            <div className="flex-1 h-3 bg-[#C8BCA8] rounded-full opacity-30" />
          </div>
        ))}
      </div>
    </div>
  );
}

// Revenue Chart Illustration
function RevenueIllustration({ colors }: { colors: ColorScheme }) {
  const barHeights = [35, 45, 55, 70, 50, 80, 95];

  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden p-6"
      style={{ backgroundColor: colors.card3Bg }}
    >
      {/* $28K label */}
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute top-6 right-6 bg-white rounded-lg px-3 py-2 shadow-sm"
      >
        <span className="text-lg font-bold text-gray-900">$28K</span>
        <span className="text-xs text-gray-500 ml-1">&#8599;</span>
      </motion.div>

      {/* Deals closed badge */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute top-16 right-6 bg-white rounded-lg px-3 py-2 shadow-sm flex items-center gap-2"
      >
        <Check className="w-4 h-4 text-gray-600" />
        <span className="text-sm text-gray-700">Deals closed</span>
      </motion.div>

      {/* Bar chart */}
      <div className="absolute bottom-6 left-6 right-6 h-32 flex items-end gap-2">
        {barHeights.map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${height}%` }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
            className="flex-1 rounded-t-md"
            style={{
              backgroundColor: i === barHeights.length - 1 ? colors.chartBar : colors.chartBarLight,
            }}
          />
        ))}
      </div>

      {/* Trend line */}
      <svg className="absolute bottom-6 left-6 right-6 h-32 pointer-events-none" preserveAspectRatio="none">
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          d="M 10 100 Q 50 80, 100 70 T 200 40 T 300 20"
          fill="none"
          stroke="#9CA3AF"
          strokeWidth="2"
          strokeDasharray="4,4"
        />
      </svg>
    </div>
  );
}

function FeatureCardComponent({
  card,
  colors,
  index,
}: {
  card: FeatureCard;
  colors: ColorScheme;
  index: number;
}) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col"
    >
      {/* Illustration */}
      <div className="aspect-[4/3] mb-6">
        {card.illustration === "technical" && <TechnicalIllustration colors={colors} />}
        {card.illustration === "rfp" && <RfpIllustration colors={colors} />}
        {card.illustration === "revenue" && <RevenueIllustration colors={colors} />}
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3 leading-tight">
        {card.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {card.description}
      </p>
    </motion.div>
  );
}

export default function SaaspoFeatureSectionsRealm({
  mode = "light",
  badge = "USE CASES",
  headline = "A 24/7 Solutions Engineer",
  features = [
    {
      title: "Rapid answers to technical and product questions",
      description:
        "Empower your customer-facing teams with 24/7 guidance on product features, technical details, use cases, and more.",
      illustration: "technical",
    },
    {
      title: "Automate RFPs and other questionnaires",
      description:
        "Recycle winning bids and accelerate your RFx process with high-quality AI-powered responses.",
      illustration: "rfp",
    },
    {
      title: "Instant revenue enablement",
      description:
        "Turn documentation you already have into technical expertise across your pre- and post-sales teams. Drive better outcomes today.",
      illustration: "revenue",
    },
  ],
}: SaaspoFeatureSectionsRealmProps) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full py-20 md:py-28 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-full">
            {badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-center text-gray-900 dark:text-white mb-16 md:mb-20"
        >
          {headline}
        </motion.h2>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {features.map((card, index) => (
            <FeatureCardComponent
              key={index}
              card={card}
              colors={colors}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
