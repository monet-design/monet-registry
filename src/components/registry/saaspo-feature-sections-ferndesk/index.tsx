"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#98c25f", // Green accent
    accentHover: "#7fa84a",
    title: "#282828",
    body: "#6b6b6b",
    border: "#e5e5e5",
    gridLine: "#e8e8e8",
    cardBg: "#ffffff",
  },
  dark: {
    accent: "#a8d26f",
    accentHover: "#98c25f",
    title: "#f5f5f5",
    body: "#a0a0a0",
    border: "#3a3a3a",
    gridLine: "#2a2a2a",
    cardBg: "#1a1a1a",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion, type Variants } from "motion/react";
import {
  ThumbsUp,
  ThumbsDown,
  ChevronRight,
  Globe,
  Settings,
  Folder,
  FileIcon,
  Home,
  Puzzle,
  HelpCircle,
} from "lucide-react";

interface FeatureItem {
  boldText: string;
  normalText: string;
}

interface SaaspoFeatureSectionsFerndeskProps {
  mode?: "light" | "dark";
  label?: string;
  title?: string;
  subtitle?: string;
  features?: FeatureItem[];
}

// Analytics Dashboard Mock Component
function AnalyticsDashboard() {
  return (
    <div className="rounded-lg bg-white p-4 shadow-lg w-[340px] h-[260px] overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Analytics</h4>
          <p className="text-[10px] text-gray-500">
            Monitor search performance and user feedback
          </p>
        </div>
        <div className="text-[10px] text-gray-500 border border-gray-200 rounded px-2 py-1">
          Past 30 Days
        </div>
      </div>

      <div className="flex gap-2 mb-3 text-[10px]">
        <span className="px-2 py-0.5 bg-gray-100 rounded text-gray-600">
          Overview
        </span>
        <span className="px-2 py-0.5 text-gray-500">Articles</span>
        <span className="px-2 py-0.5 text-gray-500">Searches</span>
        <span className="px-2 py-0.5 text-gray-500">Feedback</span>
      </div>

      <div className="flex gap-4 mb-4">
        <div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-[#98c25f] rounded-sm"></div>
            <span className="text-lg font-bold text-gray-900">805</span>
          </div>
          <p className="text-[9px] text-gray-500">Unique visitors</p>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-sm"></div>
            <span className="text-lg font-bold text-gray-900">1,600</span>
          </div>
          <p className="text-[9px] text-gray-500">Article views</p>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-sm"></div>
            <span className="text-lg font-bold text-gray-900">115</span>
          </div>
          <p className="text-[9px] text-gray-500">Searches</p>
        </div>
      </div>

      <div>
        <p className="text-[10px] text-gray-600 mb-2">Daily visits</p>
        <div className="flex items-end gap-[3px] h-[60px]">
          {[
            40, 35, 20, 60, 45, 30, 55, 70, 25, 50, 65, 40, 35, 80, 45, 30, 55,
            40, 35, 60, 45, 50, 35, 25, 40, 55, 30, 45, 35,
          ].map((height, i) => (
            <div
              key={i}
              className="w-[6px] bg-blue-400 rounded-t-sm"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Content Editor Mock Component
function ContentEditor() {
  const menuItems = [
    { icon: Home, label: "Getting started", indent: 0 },
    { icon: Globe, label: "Fern", indent: 0 },
    { icon: Settings, label: "Audits", indent: 0 },
    { icon: Puzzle, label: "Integrations", indent: 0 },
    { icon: HelpCircle, label: "Help Center", indent: 0, expanded: true },
    { icon: Globe, label: "Custom domains", indent: 1, expanded: true },
    {
      icon: FileIcon,
      label: "Connect a custom domain to your help center",
      indent: 2,
      highlighted: true,
    },
    { icon: Folder, label: "Custom sub-folders", indent: 2 },
    { icon: FileIcon, label: "How to customize your help center", indent: 2 },
    {
      icon: FileIcon,
      label: "Automatic Sitemap Generation for Your Help Ce...",
      indent: 2,
    },
  ];

  return (
    <div className="rounded-lg bg-white p-4 shadow-lg w-[340px] h-[260px] overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-gray-500 uppercase tracking-wide">
          CONTENT
        </span>
        <span className="text-gray-400">+</span>
      </div>

      <div className="space-y-0.5">
        {menuItems.map((item, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 py-1 text-[11px] ${
              item.highlighted
                ? "bg-blue-50 text-blue-700 rounded px-2 -mx-2"
                : "text-gray-600"
            }`}
            style={{ paddingLeft: `${item.indent * 12}px` }}
          >
            {item.expanded !== undefined && (
              <ChevronRight
                className={`w-3 h-3 text-gray-400 ${item.expanded ? "rotate-90" : ""}`}
              />
            )}
            <item.icon className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Feedback Form Mock Component
function FeedbackForm() {
  return (
    <div className="rounded-lg bg-white p-5 shadow-lg w-[280px] h-[200px]">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-700">Was this helpful?</span>
        <div className="flex gap-2">
          <ThumbsUp className="w-4 h-4 text-gray-400 cursor-pointer hover:text-green-500" />
          <ThumbsDown className="w-4 h-4 text-gray-400 cursor-pointer hover:text-red-500" />
        </div>
      </div>

      <div className="space-y-3">
        <div className="bg-gray-100 rounded-lg p-3">
          <p className="text-xs text-gray-600">
            It didn&apos;t have the instructions I need
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-3">
          <p className="text-xs text-gray-400">Your email (optional)</p>
        </div>

        <button className="w-full py-2 text-xs border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
          Submit Feedback
        </button>
      </div>
    </div>
  );
}

export default function SaaspoFeatureSectionsFerndesk({
  mode = "light",
  label = "OPTIMIZE",
  title = "Continuously improve your help center",
  subtitle = "Ferndesk gives you the tools you need to optimize your help center and improve customer satisfaction.",
  features = [
    {
      boldText: "Advanced analytics",
      normalText:
        "show you how your customers are using your help center, what articles are performing well, and where there's room for improvement.",
    },
    {
      boldText: "Our world-class editor",
      normalText:
        "helps you create and edit content faster than any other platform.",
    },
    {
      boldText: "Collect positive and negative feedback",
      normalText:
        "from your customers, and use them to improve your help center over time.",
    },
  ],
}: SaaspoFeatureSectionsFerndeskProps) {
  const colors = COLORS[mode];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative w-full py-8"
      style={{
        backgroundColor: mode === "dark" ? "#0f0f0f" : "#f8f8f8",
      }}
    >
      {/* Top Grid Lines */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <div className="relative h-full max-w-[1400px] mx-auto px-8">
          <div
            className="absolute inset-0 flex"
            style={{
              gap: "40px",
            }}
          >
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="h-full w-px"
                style={{ backgroundColor: colors.gridLine }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Card Container */}
      <motion.div
        className="max-w-[1200px] mx-auto px-8 pt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            backgroundColor: colors.cardBg,
            border: `1px solid ${colors.border}`,
          }}
        >
          {/* Header Section */}
          <div className="px-10 pt-10 pb-8">
            <motion.p
              className="text-sm font-semibold tracking-[0.2em] mb-4"
              style={{ color: colors.accent }}
              variants={itemVariants}
            >
              {label}
            </motion.p>

            <motion.h2
              className="text-3xl md:text-4xl font-medium mb-4"
              style={{ color: colors.title }}
              variants={itemVariants}
            >
              {title}
            </motion.h2>

            <motion.p
              className="text-base max-w-2xl"
              style={{ color: colors.body }}
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
          </div>

          {/* Features Section */}
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ borderTop: `1px solid ${colors.border}` }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-8"
                style={{
                  borderRight:
                    index < features.length - 1
                      ? `1px solid ${colors.border}`
                      : "none",
                }}
                variants={itemVariants}
              >
                <p className="text-sm leading-relaxed" style={{ color: colors.body }}>
                  <span
                    className="font-semibold"
                    style={{ color: colors.title }}
                  >
                    {feature.boldText}
                  </span>{" "}
                  {feature.normalText}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Screenshots Section with Nature Background */}
          <div className="relative h-[320px] overflow-hidden">
            {/* Nature Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-green-600" />

            {/* Stylized Clouds */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-32 h-16 bg-white/80 rounded-full blur-md" />
              <div className="absolute top-5 left-32 w-40 h-20 bg-white/70 rounded-full blur-lg" />
              <div className="absolute top-8 right-20 w-48 h-24 bg-white/80 rounded-full blur-md" />
              <div className="absolute top-20 right-40 w-36 h-18 bg-white/60 rounded-full blur-lg" />
              <div className="absolute top-16 left-1/2 w-44 h-22 bg-white/70 rounded-full blur-md" />
            </div>

            {/* Trees silhouette at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-green-800 to-transparent" />

            {/* UI Cards */}
            <motion.div
              className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 transform -rotate-2 shadow-2xl"
              initial={{ opacity: 0, x: -50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <AnalyticsDashboard />
            </motion.div>

            <motion.div
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 shadow-2xl z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ContentEditor />
            </motion.div>

            <motion.div
              className="absolute right-8 md:right-16 top-1/2 -translate-y-1/3 transform rotate-2 shadow-2xl"
              initial={{ opacity: 0, x: 50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <FeedbackForm />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Grid Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <div className="relative h-full max-w-[1400px] mx-auto px-8">
          <div
            className="absolute inset-0 flex"
            style={{
              gap: "40px",
            }}
          >
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="h-full w-px"
                style={{ backgroundColor: colors.gridLine }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
