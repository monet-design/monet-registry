"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
interface ColorScheme {
  background: string;
  cardBackground: string;
  coralAccent: string;
  coralLight: string;
  greenTag: string;
  greenTagText: string;
  orangeTag: string;
  orangeTagText: string;
  blueTag: string;
  blueTagText: string;
  grayTag: string;
  grayTagText: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
}

const COLORS: Record<"light" | "dark", ColorScheme> = {
  light: {
    background: "#f7f7f7",
    cardBackground: "#ffffff",
    coralAccent: "#F26B4E",
    coralLight: "#FEF3F0",
    greenTag: "#D1FAE5",
    greenTagText: "#065F46",
    orangeTag: "#FED7AA",
    orangeTagText: "#9A3412",
    blueTag: "#DBEAFE",
    blueTagText: "#1E40AF",
    grayTag: "#F3F4F6",
    grayTagText: "#374151",
    textPrimary: "#111827",
    textSecondary: "#6B7280",
    textMuted: "#9CA3AF",
  },
  dark: {
    background: "#111827",
    cardBackground: "#1F2937",
    coralAccent: "#F26B4E",
    coralLight: "#3F2D28",
    greenTag: "#064E3B",
    greenTagText: "#A7F3D0",
    orangeTag: "#7C2D12",
    orangeTagText: "#FED7AA",
    blueTag: "#1E3A8A",
    blueTagText: "#BFDBFE",
    grayTag: "#374151",
    grayTagText: "#D1D5DB",
    textPrimary: "#F9FAFB",
    textSecondary: "#9CA3AF",
    textMuted: "#6B7280",
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Sparkles, TrendingUp } from "lucide-react";

interface SaaspoFeatureSectionsHarmonicProps {
  mode?: "light" | "dark";
  subtitle?: string;
  title?: string;
  description?: string;
}

// Tag component for search filters
function SearchTag({
  children,
  variant = "gray",
  colors,
}: {
  children: React.ReactNode;
  variant?: "green" | "orange" | "blue" | "gray";
  colors: ColorScheme;
}) {
  const variantStyles = {
    green: { bg: colors.greenTag, text: colors.greenTagText },
    orange: { bg: colors.orangeTag, text: colors.orangeTagText },
    blue: { bg: colors.blueTag, text: colors.blueTagText },
    gray: { bg: colors.grayTag, text: colors.grayTagText },
  };

  const style = variantStyles[variant];

  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {children}
    </span>
  );
}

// Company card for AI matching section
function CompanyBadge({
  name,
  relevance,
  icon,
  isHighlight = false,
  colors,
}: {
  name: string;
  relevance: number;
  icon: React.ReactNode;
  isHighlight?: boolean;
  colors: ColorScheme;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-full"
        style={{ backgroundColor: colors.cardBackground }}
      >
        {icon}
      </div>
      <span
        className="text-xs font-medium"
        style={{ color: colors.textPrimary }}
      >
        {name}
      </span>
      <span
        className="text-xs"
        style={{ color: isHighlight ? colors.coralAccent : colors.textMuted }}
      >
        {isHighlight ? "+" : "*"} {relevance}% relevant
      </span>
    </div>
  );
}

export default function SaaspoFeatureSectionsHarmonic({
  mode = "light",
  subtitle = "Sourcing superpowers",
  title = "Discover hidden gems",
  description = "Our ever-growing database of 20M+ companies and 160M+ people ensures you're never missing an opportunity.",
}: SaaspoFeatureSectionsHarmonicProps) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      className="w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p
              className="mb-2 text-xl font-light md:text-2xl"
              style={{ color: colors.textSecondary }}
            >
              {subtitle}
            </p>
            <h2
              className="text-3xl font-bold md:text-4xl"
              style={{ color: colors.textPrimary }}
            >
              {title}
            </h2>
          </div>
          <p
            className="max-w-sm text-base lg:text-right"
            style={{ color: colors.textSecondary }}
          >
            {description}
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Card 1: Search Query Builder */}
          <motion.div
            className="overflow-hidden rounded-2xl p-6 md:p-8"
            style={{ backgroundColor: colors.cardBackground }}
            variants={itemVariants}
          >
            <div className="mb-8 min-h-[200px]">
              {/* Search interface mockup */}
              <div
                className="rounded-xl border p-4"
                style={{
                  borderColor:
                    mode === "light"
                      ? "rgba(0,0,0,0.08)"
                      : "rgba(255,255,255,0.1)",
                }}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-sm"
                    style={{ color: colors.textSecondary }}
                  >
                    Find
                  </span>
                  <SearchTag variant="green" colors={colors}>
                    Stealth
                  </SearchTag>
                  <SearchTag variant="orange" colors={colors}>
                    Pre-seed
                  </SearchTag>
                  <span
                    className="text-sm"
                    style={{ color: colors.textSecondary }}
                  >
                    companies with
                  </span>
                  <SearchTag variant="blue" colors={colors}>
                    Relevance {">"} 90%
                  </SearchTag>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span
                    className="text-sm"
                    style={{ color: colors.textSecondary }}
                  >
                    where
                  </span>
                  <SearchTag variant="orange" colors={colors}>
                    Web traffic
                  </SearchTag>
                  <SearchTag variant="blue" colors={colors}>
                    Over past 3 months
                  </SearchTag>
                  <span
                    className="text-sm"
                    style={{ color: colors.textSecondary }}
                  >
                    increased 200%
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span
                    className="text-sm"
                    style={{ color: colors.textSecondary }}
                  >
                    with
                  </span>
                  <SearchTag variant="green" colors={colors}>
                    Founders
                  </SearchTag>
                  <span
                    className="text-sm"
                    style={{ color: colors.textSecondary }}
                  >
                    who have a
                  </span>
                  <SearchTag variant="orange" colors={colors}>
                    Prior exit
                  </SearchTag>
                  <SearchTag variant="gray" colors={colors}>
                    Deep Technical Background
                  </SearchTag>
                </div>
              </div>
            </div>
            <p
              className="text-center text-lg font-medium"
              style={{ color: colors.textPrimary }}
            >
              Create, tune and save hyper-specific searches
            </p>
          </motion.div>

          {/* Card 2: Company Profile Card */}
          <motion.div
            className="relative overflow-hidden rounded-2xl"
            style={{ backgroundColor: colors.coralAccent }}
            variants={itemVariants}
          >
            {/* Diagonal lines pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 10px,
                  rgba(255,255,255,0.3) 10px,
                  rgba(255,255,255,0.3) 11px
                )`,
              }}
            />
            <div className="relative flex h-full flex-col p-6 md:p-8">
              <div className="mb-4 flex flex-1 items-center justify-center">
                {/* Company card mockup */}
                <div
                  className="w-full max-w-[200px] rounded-xl p-4 shadow-lg"
                  style={{ backgroundColor: colors.cardBackground }}
                >
                  <div className="mb-3 flex justify-end">
                    <span
                      className="rounded-full px-2 py-0.5 text-xs font-medium"
                      style={{
                        backgroundColor: colors.grayTag,
                        color: colors.textSecondary,
                      }}
                    >
                      YC W24
                    </span>
                  </div>
                  <div className="mb-3 flex justify-center">
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor:
                          mode === "light" ? "#F3F4F6" : "#374151",
                      }}
                    >
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={colors.textPrimary}
                        strokeWidth="2"
                      >
                        <rect x="3" y="3" width="7" height="7" rx="1" />
                        <rect x="14" y="3" width="7" height="7" rx="1" />
                        <rect x="3" y="14" width="7" height="7" rx="1" />
                        <rect x="14" y="14" width="7" height="7" rx="1" />
                      </svg>
                    </div>
                  </div>
                  <h4
                    className="mb-2 text-center text-lg font-semibold"
                    style={{ color: colors.textPrimary }}
                  >
                    Lantern
                  </h4>
                  <p
                    className="mb-3 text-center text-xs"
                    style={{ color: colors.textSecondary }}
                  >
                    The most powerful database for building AI applications
                  </p>
                  <div className="flex justify-center">
                    <span
                      className="rounded-full border px-2 py-0.5 text-xs"
                      style={{
                        borderColor:
                          mode === "light"
                            ? "rgba(0,0,0,0.15)"
                            : "rgba(255,255,255,0.2)",
                        color: colors.textSecondary,
                      }}
                    >
                      Artificial Intelligence
                    </span>
                  </div>
                </div>
              </div>
              <p className="mt-auto text-center text-lg font-medium text-white">
                Identify new promising companies
              </p>
            </div>
          </motion.div>

          {/* Card 3: AI Matching */}
          <motion.div
            className="overflow-hidden rounded-2xl p-6 md:p-8"
            style={{ backgroundColor: colors.cardBackground }}
            variants={itemVariants}
          >
            <div className="mb-8 min-h-[200px]">
              {/* AI matching visualization */}
              <div className="relative">
                {/* Curved lines background */}
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 400 200"
                  fill="none"
                >
                  <path
                    d="M0 150 Q100 100 200 120 T400 80"
                    stroke={colors.coralAccent}
                    strokeWidth="2"
                    strokeOpacity="0.3"
                    fill="none"
                  />
                  <path
                    d="M0 170 Q100 130 200 140 T400 100"
                    stroke={colors.coralAccent}
                    strokeWidth="1"
                    strokeOpacity="0.2"
                    fill="none"
                  />
                </svg>

                {/* Sparkle icon in center */}
                <div className="flex justify-center pb-8 pt-4">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg"
                    style={{ backgroundColor: colors.cardBackground }}
                  >
                    <Sparkles
                      className="h-8 w-8"
                      style={{ color: colors.coralAccent }}
                    />
                  </div>
                </div>

                {/* Company badges */}
                <div className="flex items-end justify-between px-4">
                  <CompanyBadge
                    name="BoldVoice"
                    relevance={72}
                    icon={
                      <span
                        className="text-xs font-bold"
                        style={{ color: colors.textPrimary }}
                      >
                        BV
                      </span>
                    }
                    colors={colors}
                  />
                  <CompanyBadge
                    name="Nash"
                    relevance={72}
                    icon={
                      <div
                        className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                        style={{ backgroundColor: "#F26B4E" }}
                      >
                        N
                      </div>
                    }
                    colors={colors}
                  />
                  <CompanyBadge
                    name="OmniAI"
                    relevance={92}
                    isHighlight
                    icon={
                      <span
                        className="text-xs font-bold"
                        style={{ color: colors.coralAccent }}
                      >
                        O
                      </span>
                    }
                    colors={colors}
                  />
                  <CompanyBadge
                    name="Rootly"
                    relevance={82}
                    isHighlight
                    icon={
                      <div
                        className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                        style={{ backgroundColor: "#059669" }}
                      >
                        R
                      </div>
                    }
                    colors={colors}
                  />
                </div>
              </div>
            </div>
            <p
              className="text-center text-lg font-medium"
              style={{ color: colors.textPrimary }}
            >
              Effortlessly find the needle in the haystack
            </p>
          </motion.div>

          {/* Card 4: Growth Chart */}
          <motion.div
            className="overflow-hidden rounded-2xl p-6 md:p-8"
            style={{ backgroundColor: colors.cardBackground }}
            variants={itemVariants}
          >
            <div className="mb-8 min-h-[200px]">
              {/* Stats dashboard mockup */}
              <div
                className="rounded-xl border p-4"
                style={{
                  borderColor:
                    mode === "light"
                      ? "rgba(0,0,0,0.08)"
                      : "rgba(255,255,255,0.1)",
                }}
              >
                {/* Top stats row */}
                <div className="mb-4 flex gap-4">
                  <div className="flex-1 border-l-2 border-green-500 pl-3">
                    <div className="flex items-baseline justify-between">
                      <span
                        className="text-xs"
                        style={{ color: colors.textSecondary }}
                      >
                        Headcount
                      </span>
                      <span
                        className="text-sm font-medium"
                        style={{ color: colors.textPrimary }}
                      >
                        1,186
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-xl font-bold text-green-500">
                        27%
                      </span>
                    </div>
                  </div>
                  <div
                    className="flex-1 border-l-2 pl-3"
                    style={{ borderColor: colors.coralAccent }}
                  >
                    <div className="flex items-baseline justify-between">
                      <span
                        className="text-xs"
                        style={{ color: colors.textSecondary }}
                      >
                        Total Funding
                      </span>
                      <span
                        className="text-xs"
                        style={{ color: colors.textMuted }}
                      >
                        USD
                      </span>
                    </div>
                    <span
                      className="text-xl font-bold"
                      style={{ color: colors.textPrimary }}
                    >
                      $1.68B
                    </span>
                  </div>
                </div>

                {/* Chart area */}
                <div className="relative h-24">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 flex h-full flex-col justify-between text-[10px]">
                    <span style={{ color: colors.textMuted }}>Headcount</span>
                    <span style={{ color: colors.textMuted }}>2000</span>
                    <span style={{ color: colors.textMuted }}>1000</span>
                    <span style={{ color: colors.textMuted }}>0</span>
                  </div>
                  <div className="absolute right-0 top-0 flex h-full flex-col justify-between text-right text-[10px]">
                    <span style={{ color: colors.textMuted }}>Funding</span>
                    <span style={{ color: colors.textMuted }}>$1B</span>
                    <span style={{ color: colors.textMuted }}>$500M</span>
                    <span style={{ color: colors.textMuted }}>0</span>
                  </div>

                  {/* Chart bars */}
                  <div className="absolute inset-x-12 bottom-0 flex h-16 items-end justify-around">
                    {[
                      { h1: 30, h2: 20 },
                      { h1: 35, h2: 25 },
                      { h1: 40, h2: 30 },
                      { h1: 45, h2: 35 },
                      { h1: 50, h2: 45 },
                      { h1: 60, h2: 55 },
                    ].map((bar, i) => (
                      <div key={i} className="flex gap-0.5">
                        <div
                          className="w-2 rounded-t"
                          style={{
                            height: `${bar.h1}%`,
                            backgroundColor: colors.coralAccent,
                          }}
                        />
                        <div
                          className="w-2 rounded-t"
                          style={{
                            height: `${bar.h2}%`,
                            backgroundColor:
                              mode === "light" ? "#D1D5DB" : "#4B5563",
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Line chart overlay */}
                  <svg
                    className="absolute inset-x-12 bottom-0 h-16"
                    viewBox="0 0 200 60"
                    preserveAspectRatio="none"
                  >
                    <polyline
                      points="0,50 40,45 80,40 120,35 160,25 200,15"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {[0, 40, 80, 120, 160, 200].map((x, i) => (
                      <circle
                        key={i}
                        cx={x}
                        cy={50 - i * 7}
                        r="3"
                        fill="#10B981"
                      />
                    ))}
                  </svg>
                </div>

                {/* X-axis labels */}
                <div className="mt-2 flex justify-around px-12 text-[10px]">
                  <span style={{ color: colors.textMuted }}>Jan 2021</span>
                  <span style={{ color: colors.textMuted }}>May 2022</span>
                  <span style={{ color: colors.textMuted }}>Oct 2023</span>
                </div>
              </div>
            </div>
            <p
              className="text-center text-lg font-medium"
              style={{ color: colors.textPrimary }}
            >
              Uncover fast growing companies
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
