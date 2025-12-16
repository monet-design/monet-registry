"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

interface ColorScheme {
  background: string;
  cardBackground: string;
  cardBorder: string;
  accent: string;
  accentLight: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  tagBg: string;
  tagText: string;
  chartPurple: string;
  chartPurpleLight: string;
  chartGreen: string;
  chartGreenGradient: string;
}

const COLORS: Record<"light" | "dark", ColorScheme> = {
  light: {
    background: "#FFFFFF",
    cardBackground: "#FFFFFF",
    cardBorder: "#E5E7EB",
    accent: "#22C55E",
    accentLight: "#DCFCE7",
    textPrimary: "#111827",
    textSecondary: "#6B7280",
    textMuted: "#9CA3AF",
    tagBg: "#F3F4F6",
    tagText: "#374151",
    chartPurple: "#A78BFA",
    chartPurpleLight: "#C4B5FD",
    chartGreen: "#22C55E",
    chartGreenGradient: "rgba(34, 197, 94, 0.2)",
  },
  dark: {
    background: "#111827",
    cardBackground: "#1F2937",
    cardBorder: "#374151",
    accent: "#22C55E",
    accentLight: "#064E3B",
    textPrimary: "#F9FAFB",
    textSecondary: "#9CA3AF",
    textMuted: "#6B7280",
    tagBg: "#374151",
    tagText: "#D1D5DB",
    chartPurple: "#A78BFA",
    chartPurpleLight: "#C4B5FD",
    chartGreen: "#22C55E",
    chartGreenGradient: "rgba(34, 197, 94, 0.3)",
  },
};

const FEATURE_LIST = [
  { col: 1, text: "Customize rules and tags" },
  { col: 1, text: "Choose your lists" },
  { col: 1, text: "Fine-tune sensitivity levels" },
  { col: 1, text: "Use pre-determined responses" },
  { col: 1, text: "Only see results for data deltas" },
  { col: 2, text: "Eliminate duplicative alerts" },
  { col: 2, text: "Aggregate alerts at the entity level" },
  { col: 2, text: "Track key metrics across your team" },
  { col: 2, text: "Test in a sandbox environment first" },
  { col: 2, text: "Control access & roles" },
] as const;

const KEYBOARD_SHORTCUTS = [
  { key: "Y", action: "Select 'Ye" },
  { key: "N", action: "Select 'No" },
  { key: "1", action: "Select 1st" },
  { key: "9", action: "Select 9th" },
  { key: ">", action: "Move to n" },
  { key: "<", action: "Back to p" },
  { key: "esc", action: "Exit matc" },
  { key: "enter", action: "Submit m" },
] as const;

const FORM_TAGS: Array<{ label: string; removable?: boolean; addable?: boolean }> = [
  { label: "Names", removable: true },
  { label: "Title", removable: true },
  { label: "SDN type", addable: true },
  { label: "Address(es)", addable: true },
  { label: "Nationality", addable: true },
  { label: "Citizenship", addable: true },
  { label: "Place of birth", addable: true },
];

const SIDEBAR_ITEMS = [
  { label: "Indefinitely", checked: false, hasRed: true },
  { label: "Indefinitely", checked: false, hasRed: false },
  { label: "Indefinitely", checked: false, hasRed: true },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, X, Plus, ChevronDown } from "lucide-react";

interface SaaspoFeatureSectionsSandbarProps {
  mode?: "light" | "dark";
  label?: string;
  title?: string;
  subtitle?: string;
}

export default function SaaspoFeatureSectionsSandbar({
  mode = "light",
  label = "CONFIGURABLE SETUP",
  title = "Get started with building blocks\nfor screening, monitoring & case\nmanagement",
  subtitle = "Build the system you need to minimize risk with modular anti-money\nlaundering systems",
}: SaaspoFeatureSectionsSandbarProps) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - UI Mockups */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <DashboardMockup colors={colors} />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Label */}
            <motion.p
              className="mb-4 text-xs font-medium tracking-widest"
              style={{ color: colors.textSecondary }}
              variants={itemVariants}
            >
              {label}
            </motion.p>

            {/* Title */}
            <motion.h2
              className="mb-6 whitespace-pre-line text-3xl font-medium leading-tight md:text-4xl lg:text-[42px]"
              style={{ color: colors.textPrimary }}
              variants={itemVariants}
            >
              {title}
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="mb-10 whitespace-pre-line text-base leading-relaxed md:text-lg"
              style={{ color: colors.textSecondary }}
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>

            {/* Feature Checklist */}
            <motion.div
              className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2"
              variants={itemVariants}
            >
              {/* Column 1 */}
              <div className="flex flex-col gap-4">
                {FEATURE_LIST.filter((f) => f.col === 1).map((feature, index) => (
                  <FeatureItem key={index} text={feature.text} colors={colors} />
                ))}
              </div>
              {/* Column 2 */}
              <div className="flex flex-col gap-4">
                {FEATURE_LIST.filter((f) => f.col === 2).map((feature, index) => (
                  <FeatureItem key={index} text={feature.text} colors={colors} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Feature Item Component
function FeatureItem({
  text,
  colors,
}: {
  text: string;
  colors: ColorScheme;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded"
        style={{ backgroundColor: colors.accentLight }}
      >
        <Check className="h-3 w-3" style={{ color: colors.accent }} strokeWidth={3} />
      </div>
      <span className="text-sm" style={{ color: colors.textPrimary }}>
        {text}
      </span>
    </div>
  );
}

// Dashboard Mockup Component
function DashboardMockup({
  colors,
}: {
  colors: ColorScheme;
}) {
  return (
    <div className="relative min-h-[500px] md:min-h-[600px]">
      {/* Small Area Chart Card - Top Left */}
      <div
        className="absolute left-0 top-0 w-40 rounded-xl border p-3 shadow-lg"
        style={{
          backgroundColor: colors.cardBackground,
          borderColor: colors.cardBorder,
        }}
      >
        <div className="h-20 w-full">
          <svg viewBox="0 0 150 70" className="h-full w-full">
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={colors.chartGreen} stopOpacity="0.3" />
                <stop offset="100%" stopColor={colors.chartGreen} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 60 Q25 50 50 45 T100 35 T150 25 V70 H0 Z"
              fill="url(#areaGradient)"
            />
            <path
              d="M0 60 Q25 50 50 45 T100 35 T150 25"
              fill="none"
              stroke={colors.chartGreen}
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="mt-2 flex items-center justify-between text-[10px]">
          <span style={{ color: colors.textMuted }}>13</span>
          <span style={{ color: colors.textMuted }}>01/24</span>
        </div>
      </div>

      {/* Sidebar Items - Left */}
      <div
        className="absolute bottom-32 left-0 w-44 rounded-xl border shadow-lg"
        style={{
          backgroundColor: colors.cardBackground,
          borderColor: colors.cardBorder,
        }}
      >
        {SIDEBAR_ITEMS.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 border-b px-3 py-3 last:border-b-0"
            style={{ borderColor: colors.cardBorder }}
          >
            <div
              className="flex h-4 w-4 items-center justify-center rounded border"
              style={{ borderColor: colors.cardBorder }}
            >
              {item.hasRed && (
                <div className="h-2 w-2 rounded-sm" style={{ backgroundColor: "#EF4444" }} />
              )}
            </div>
            <span className="text-xs" style={{ color: colors.textPrimary }}>
              {item.label}
            </span>
          </div>
        ))}

        {/* Snooze button */}
        <div className="px-3 py-2">
          <div
            className="rounded px-3 py-1 text-xs text-white"
            style={{ backgroundColor: colors.accent }}
          >
            snooze
          </div>
        </div>

        {/* Attachments section */}
        <div className="border-t px-3 py-2" style={{ borderColor: colors.cardBorder }}>
          <p className="text-xs" style={{ color: colors.textSecondary }}>
            achments
          </p>
          <p className="mt-1 text-[10px]" style={{ color: colors.textMuted }}>
            from J.Morrison.pdf
          </p>
        </div>

        {/* Attach file and Review */}
        <div className="flex items-center justify-between border-t px-3 py-2" style={{ borderColor: colors.cardBorder }}>
          <div className="flex items-center gap-1">
            <div className="h-4 w-4 rounded" style={{ backgroundColor: colors.tagBg }} />
            <span className="text-[10px]" style={{ color: colors.textMuted }}>
              Attach file
            </span>
          </div>
        </div>
        <div className="px-3 pb-3">
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: colors.accent }} />
            <span className="text-xs font-medium" style={{ color: colors.accent }}>
              Review
            </span>
          </div>
        </div>
      </div>

      {/* Add New Response Form Card */}
      <div
        className="absolute left-28 top-16 w-52 rounded-xl border p-4 shadow-lg"
        style={{
          backgroundColor: colors.cardBackground,
          borderColor: colors.cardBorder,
        }}
      >
        <h4 className="mb-3 text-sm font-medium" style={{ color: colors.textPrimary }}>
          Add new response
        </h4>

        <div className="mb-3">
          <p className="mb-2 text-[10px]" style={{ color: colors.textMuted }}>
            Response name
          </p>
          <div className="flex flex-wrap gap-1">
            {FORM_TAGS.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="flex items-center gap-1 rounded px-2 py-1 text-[10px]"
                style={{ backgroundColor: colors.tagBg, color: colors.tagText }}
              >
                {tag.label}
                {tag.removable && <X className="h-2 w-2" />}
              </span>
            ))}
          </div>
          <div className="mt-1 flex flex-wrap gap-1">
            {FORM_TAGS.slice(2, 5).map((tag, index) => (
              <span
                key={index}
                className="flex items-center gap-1 rounded px-2 py-1 text-[10px]"
                style={{ backgroundColor: colors.tagBg, color: colors.tagText }}
              >
                {tag.label}
                {tag.addable && <Plus className="h-2 w-2" />}
              </span>
            ))}
          </div>
          <div className="mt-1 flex flex-wrap gap-1">
            {FORM_TAGS.slice(5).map((tag, index) => (
              <span
                key={index}
                className="flex items-center gap-1 rounded px-2 py-1 text-[10px]"
                style={{ backgroundColor: colors.tagBg, color: colors.tagText }}
              >
                {tag.label}
                {tag.addable && <Plus className="h-2 w-2" />}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <p className="mb-2 text-[10px]" style={{ color: colors.textMuted }}>
            Disposition
          </p>
          <div
            className="flex items-center justify-between rounded border px-2 py-1.5"
            style={{ borderColor: colors.cardBorder }}
          >
            <span className="text-[10px]" style={{ color: colors.textMuted }}></span>
            <ChevronDown className="h-3 w-3" style={{ color: colors.textMuted }} />
          </div>
        </div>

        <div className="mb-3">
          <p className="mb-2 text-[10px]" style={{ color: colors.textMuted }}>
            Reason
          </p>
          <div
            className="rounded border p-2"
            style={{ borderColor: colors.cardBorder }}
          >
            <p className="text-[10px]" style={{ color: colors.textPrimary }}>
              Name and title match by less than 80%.
            </p>
            <p className="mt-4 text-right text-[8px]" style={{ color: colors.textMuted }}>
              (48/500)
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            className="flex-1 rounded border py-1.5 text-xs"
            style={{ borderColor: colors.cardBorder, color: colors.textPrimary }}
          >
            Exit
          </button>
          <button
            className="flex-1 rounded py-1.5 text-xs text-white"
            style={{ backgroundColor: colors.textPrimary }}
          >
            Add
          </button>
        </div>
      </div>

      {/* Keyboard Shortcuts Card */}
      <div
        className="absolute right-4 top-16 w-36 rounded-xl border p-3 shadow-lg"
        style={{
          backgroundColor: colors.cardBackground,
          borderColor: colors.cardBorder,
        }}
      >
        <h4 className="mb-3 text-xs font-medium" style={{ color: colors.textPrimary }}>
          <span className="font-semibold">Keyboard</span>{" "}
          <span style={{ color: colors.textSecondary }}>shortcuts</span>
        </h4>

        <div className="flex flex-col gap-1.5">
          {KEYBOARD_SHORTCUTS.map((shortcut, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className="flex h-5 min-w-[24px] items-center justify-center rounded border px-1 text-[10px] font-medium"
                style={{ borderColor: colors.cardBorder, color: colors.textPrimary }}
              >
                {shortcut.key}
              </span>
              <span className="truncate text-[10px]" style={{ color: colors.textSecondary }}>
                {shortcut.action}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between border-t pt-3" style={{ borderColor: colors.cardBorder }}>
          <span className="text-[10px]" style={{ color: colors.textPrimary }}>
            One to many
          </span>
          <div
            className="flex h-4 w-8 items-center justify-end rounded-full px-0.5"
            style={{ backgroundColor: colors.accent }}
          >
            <div className="h-3 w-3 rounded-full bg-white" />
          </div>
        </div>
      </div>

      {/* QC'd Cases by Rating Bar Chart */}
      <div
        className="absolute bottom-0 left-28 right-0 rounded-xl border p-4 shadow-lg"
        style={{
          backgroundColor: colors.cardBackground,
          borderColor: colors.cardBorder,
        }}
      >
        <div className="mb-3 flex items-center justify-between">
          <h4 className="text-sm font-medium" style={{ color: colors.textPrimary }}>
            QC'd Cases by Rating
          </h4>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-[10px]" style={{ color: colors.textPrimary }}>
                A
              </span>
              <div
                className="h-2 w-2 rounded-sm"
                style={{ backgroundColor: colors.chartPurpleLight }}
              />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[10px]" style={{ color: colors.textPrimary }}>
                B
              </span>
              <div
                className="h-2 w-2 rounded-sm"
                style={{ backgroundColor: colors.chartPurple }}
              />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[10px]" style={{ color: colors.textPrimary }}>
                C
              </span>
              <div
                className="h-2 w-2 rounded-sm"
                style={{ backgroundColor: "#6366F1" }}
              />
            </div>
          </div>
        </div>

        <div className="relative h-32">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 flex h-full flex-col justify-between text-[10px]">
            <span style={{ color: colors.textMuted }}>1</span>
            <span style={{ color: colors.textMuted }}>0.75</span>
            <span style={{ color: colors.textMuted }}>0.5</span>
            <span style={{ color: colors.textMuted }}>0.25</span>
            <span style={{ color: colors.textMuted }}>0</span>
          </div>

          {/* Bar chart */}
          <div className="ml-8 flex h-full items-end justify-between gap-1">
            {generateBarData().map((bars, index) => (
              <div key={index} className="flex gap-0.5">
                {bars.map((height, barIndex) => (
                  <div
                    key={barIndex}
                    className="w-2 rounded-t"
                    style={{
                      height: `${height}%`,
                      backgroundColor:
                        barIndex === 0
                          ? colors.chartPurpleLight
                          : barIndex === 1
                          ? colors.chartPurple
                          : "#6366F1",
                    }}
                  />
                ))}
              </div>
            ))}

            {/* Highlighted bar with tooltip */}
            <div className="relative flex gap-0.5">
              <div
                className="w-2 rounded-t"
                style={{ height: "65%", backgroundColor: colors.chartPurpleLight }}
              />
              <div
                className="w-2 rounded-t"
                style={{ height: "90%", backgroundColor: colors.chartPurple }}
              />
              <div
                className="w-2 rounded-t"
                style={{ height: "50%", backgroundColor: "#6366F1" }}
              />
              {/* Tooltip */}
              <div
                className="absolute -top-8 left-1/2 -translate-x-1/2 rounded px-2 py-1 text-[10px] text-white"
                style={{ backgroundColor: "#374151" }}
              >
                <span className="font-semibold">0.7</span>
                <br />
                <span className="text-[8px]">12/12/2024</span>
              </div>
            </div>
          </div>

          {/* X-axis labels */}
          <div className="ml-8 mt-2 flex justify-between text-[10px]">
            <span style={{ color: colors.textMuted }}>07/24</span>
            <span style={{ color: colors.textMuted }}>08/24</span>
            <span style={{ color: colors.textMuted }}>09/24</span>
            <span style={{ color: colors.textMuted }}>10/24</span>
            <span style={{ color: colors.textMuted }}>11/24</span>
            <span style={{ color: colors.textMuted }}>12/24</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate random bar heights for the chart
function generateBarData(): number[][] {
  return [
    [40, 50, 30],
    [35, 45, 25],
    [45, 55, 35],
    [50, 60, 40],
    [55, 65, 45],
    [45, 70, 35],
    [60, 75, 50],
    [50, 65, 40],
    [55, 70, 45],
    [45, 60, 35],
    [50, 72, 42],
    [48, 68, 38],
    [52, 74, 44],
    [46, 66, 36],
  ];
}
