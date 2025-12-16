"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F5F3EE",
    cardBackground: "#FFFFFF",
    activeTab: "#000000",
    activeTabText: "#FFFFFF",
    inactiveTabText: "#6B7280",
    // Chart colors
    chartGreen: "#2D5A3D",
    chartLightGreen: "#7AB97A",
    chartPeach: "#E8B89D",
    chartRed: "#E85A4F",
    chartPink: "#E8849D",
    chartMagenta: "#D946B8",
    // Badge colors
    badgeGreen: "#DCFCE7",
    badgeGreenText: "#166534",
    badgeRed: "#FEE2E2",
    badgeRedText: "#DC2626",
  },
  dark: {
    background: "#1F1F1F",
    cardBackground: "#2A2A2A",
    activeTab: "#FFFFFF",
    activeTabText: "#000000",
    inactiveTabText: "#9CA3AF",
    chartGreen: "#4ADE80",
    chartLightGreen: "#86EFAC",
    chartPeach: "#FDBA74",
    chartRed: "#F87171",
    chartPink: "#F472B6",
    chartMagenta: "#E879F9",
    badgeGreen: "#166534",
    badgeGreenText: "#DCFCE7",
    badgeRed: "#991B1B",
    badgeRedText: "#FEE2E2",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useState } from "react";
import { Instrument_Serif } from "next/font/google";
import { ArrowUp, ArrowDown } from "lucide-react";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

interface Tab {
  id: string;
  label: string;
}

interface MetricCard {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

interface BreakdownItem {
  label: string;
  percentage: string;
  value: string;
  color: string;
  isPositive?: boolean;
}

interface SaaspoFeatureSectionsParkerProps {
  mode?: "light" | "dark";
  title?: {
    line1: string;
    line2: string;
  };
  tabs?: Tab[];
  defaultActiveTab?: string;
  featureTitle?: string;
  featureDescription?: string;
  metrics?: MetricCard[];
  breakdownDate?: string;
  breakdownSummary?: {
    profitMargin: string;
    grossSales: string;
    netProfit: string;
  };
  breakdownItems?: BreakdownItem[];
}

export default function SaaspoFeatureSectionsParker({
  mode = "light",
  title = {
    line1: "Banks just store your cash.",
    line2: "Parker shows you how to make more.",
  },
  tabs = [
    { id: "contribution", label: "Contribution Margin" },
    { id: "profitability", label: "Product-level Profitability" },
    { id: "labeling", label: "AI Labeling" },
    { id: "ltv", label: "LTV Analysis" },
  ],
  defaultActiveTab = "contribution",
  featureTitle = "Real-time\ncontribution\nmargin.",
  featureDescription = "Our P&L dashboard gives you a real-time pulse on your margins and bottom line by consolidating your sales and expense data. Say goodbye to spreadsheets.",
  metrics = [
    { label: "Lifetime Value", value: "21%", change: "3%", isPositive: true },
    { label: "Customer Acquisition Cost", value: "$35.30", change: "4%", isPositive: false },
    { label: "Average Order Value", value: "$101.50", change: "3%", isPositive: true },
    { label: "Marketing Efficiency Ratio", value: "3.1", change: "3%", isPositive: true },
  ],
  breakdownDate = "Feb 27, 2024",
  breakdownSummary = {
    profitMargin: "18%",
    grossSales: "$15,678",
    netProfit: "$5,550",
  },
  breakdownItems = [
    { label: "Gross Sales", percentage: "100%", value: "$8,276", color: "chartGreen", isPositive: true },
    { label: "Discounts", percentage: "-8%", value: "-$876", color: "chartRed" },
    { label: "Refunds", percentage: "-6%", value: "-$471", color: "chartRed" },
    { label: "COGS", percentage: "-21%", value: "-$1,656", color: "chartRed" },
    { label: "Ads", percentage: "10%", value: "-$1,550", color: "chartPeach" },
    { label: "Merchant Fees", percentage: "3%", value: "-$165", color: "chartPink" },
    { label: "Net Profit", percentage: "62%", value: "$5,550", color: "chartGreen", isPositive: true },
  ],
}: SaaspoFeatureSectionsParkerProps) {
  const colors = COLORS[mode];
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            <span
              className={`${instrumentSerif.className} italic ${
                mode === "dark" ? "text-gray-200" : "text-gray-900"
              }`}
            >
              {title.line1}
            </span>
            <br />
            <span
              className={`font-bold ${
                mode === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {title.line2}
            </span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "shadow-md"
                  : "hover:bg-gray-200/50 dark:hover:bg-gray-700/50"
              }`}
              style={{
                backgroundColor:
                  activeTab === tab.id ? colors.activeTab : "transparent",
                color:
                  activeTab === tab.id
                    ? colors.activeTabText
                    : colors.inactiveTabText,
              }}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Feature Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              className={`text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 ${
                mode === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {featureTitle.split("\n").map((line, index) => (
                <span key={index}>
                  {index === 0 ? (
                    <span className={`${instrumentSerif.className}`}>{line}</span>
                  ) : (
                    <span className="font-bold">{line}</span>
                  )}
                  {index < featureTitle.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h3>
            <p
              className={`text-base md:text-lg max-w-md ${
                mode === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {featureDescription}
            </p>
          </motion.div>

          {/* Right - Dashboard UI */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Metric Cards Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  variants={itemVariants}
                  className="rounded-xl p-4 shadow-sm"
                  style={{ backgroundColor: colors.cardBackground }}
                >
                  <p
                    className={`text-xs mb-1 ${
                      mode === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {metric.label}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xl font-semibold ${
                        mode === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {metric.value}
                    </span>
                    <span
                      className="text-xs px-2 py-1 rounded-full flex items-center gap-0.5"
                      style={{
                        backgroundColor: metric.isPositive
                          ? colors.badgeGreen
                          : colors.badgeRed,
                        color: metric.isPositive
                          ? colors.badgeGreenText
                          : colors.badgeRedText,
                      }}
                    >
                      {metric.isPositive ? (
                        <ArrowUp className="w-3 h-3" />
                      ) : (
                        <ArrowDown className="w-3 h-3" />
                      )}
                      {metric.change}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Chart and Breakdown */}
            <div className="flex gap-3">
              {/* Stacked Bar Chart */}
              <motion.div
                variants={itemVariants}
                className="flex-1 rounded-xl p-4 shadow-sm"
                style={{ backgroundColor: colors.cardBackground }}
              >
                <div className="flex items-end justify-center gap-2 h-48">
                  {[
                    { heights: [30, 25, 15, 10, 8, 5] },
                    { heights: [35, 28, 18, 12, 10, 6] },
                    { heights: [40, 32, 20, 15, 12, 8] },
                    { heights: [32, 26, 16, 11, 9, 6] },
                  ].map((bar, barIndex) => (
                    <div key={barIndex} className="flex flex-col-reverse w-12">
                      {bar.heights.map((height, segmentIndex) => {
                        const colorKeys = [
                          "chartGreen",
                          "chartLightGreen",
                          "chartPeach",
                          "chartRed",
                          "chartPink",
                          "chartMagenta",
                        ] as const;
                        return (
                          <motion.div
                            key={segmentIndex}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.5,
                              delay: 0.3 + barIndex * 0.1,
                            }}
                            className="w-full rounded-sm"
                            style={{
                              backgroundColor:
                                colors[colorKeys[segmentIndex]],
                              minHeight: height > 0 ? "4px" : 0,
                            }}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Breakdown Table */}
              <motion.div
                variants={itemVariants}
                className="w-64 rounded-xl p-4 shadow-lg"
                style={{ backgroundColor: colors.cardBackground }}
              >
                <p
                  className={`text-sm font-semibold mb-3 ${
                    mode === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {breakdownDate}
                </p>

                {/* Summary Row */}
                <div
                  className={`grid grid-cols-3 gap-2 text-xs pb-3 border-b ${
                    mode === "dark" ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <div>
                    <p
                      className={
                        mode === "dark" ? "text-gray-400" : "text-gray-500"
                      }
                    >
                      Profit Margin
                    </p>
                    <p
                      className={`font-semibold ${
                        mode === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {breakdownSummary.profitMargin}
                    </p>
                  </div>
                  <div>
                    <p
                      className={
                        mode === "dark" ? "text-gray-400" : "text-gray-500"
                      }
                    >
                      Gross Sales
                    </p>
                    <p
                      className={`font-semibold ${
                        mode === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {breakdownSummary.grossSales}
                    </p>
                  </div>
                  <div>
                    <p
                      className={
                        mode === "dark" ? "text-gray-400" : "text-gray-500"
                      }
                    >
                      Net Profit
                    </p>
                    <p
                      className={`font-semibold ${
                        mode === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {breakdownSummary.netProfit}
                    </p>
                  </div>
                </div>

                {/* Breakdown Items */}
                <div className="mt-3 space-y-2">
                  {breakdownItems.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{
                            backgroundColor:
                              colors[item.color as keyof typeof colors] ||
                              item.color,
                          }}
                        />
                        <span
                          className={
                            mode === "dark" ? "text-gray-300" : "text-gray-700"
                          }
                        >
                          {item.label}
                        </span>
                      </div>
                      <div className="flex gap-4">
                        <span
                          style={{
                            color: item.isPositive
                              ? colors.chartGreen
                              : mode === "dark"
                              ? "#9CA3AF"
                              : "#6B7280",
                          }}
                        >
                          {item.percentage}
                        </span>
                        <span
                          className={`w-16 text-right ${
                            mode === "dark" ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {item.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
