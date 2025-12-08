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
    accent: "#171717",
    accentHover: "#262626",
    success: "#10b981",
  },
  dark: {
    accent: "#FAFAFA",
    accentHover: "#E5E5E5",
    success: "#34d399",
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
import { Users, Eye } from "lucide-react";

interface LanorxComFeature3Props {
  mode?: "light" | "dark";
}

export default function LanorxComFeature3({
  mode = "light",
}: LanorxComFeature3Props) {
  const isDark = mode === "dark";

  // Line chart path for Variant A
  const variantAPath = "M0,60 C20,55 40,50 60,52 C80,54 100,45 120,40 C140,35 160,38 180,32 C200,26 220,20 240,15 C260,10 280,12 300,8";

  // Line chart path for Variant B
  const variantBPath = "M0,50 C30,45 60,40 90,35 C120,30 150,28 180,22 C210,16 240,12 270,8 C300,4 330,2 360,0";

  // Performance trends line chart paths
  const viewsPath = "M0,80 L50,75 L100,70 L150,55 L200,50 L250,40 L300,35 L350,30";
  const ctaClicksPath = "M0,90 L50,85 L100,78 L150,70 L200,65 L250,55 L300,50 L350,45";

  return (
    <section
      className={`py-24 md:py-36 relative ${
        isDark
          ? "bg-gradient-to-b from-neutral-900 to-neutral-950"
          : "bg-gradient-to-b from-white to-neutral-50"
      }`}
    >
      <div className="max-w-5xl container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={`text-xs font-light uppercase tracking-wide mb-6 ${
                isDark ? "text-neutral-500" : "text-neutral-500"
              }`}
            >
              A/B TESTING & ANALYTICS
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-3xl md:text-4xl font-light tracking-tight mb-4 ${
              isDark ? "text-white" : "text-neutral-900"
            }`}
          >
            Find your 40%+ converting headline
          </motion.h2>
        </div>

        {/* A/B Test Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          {/* Variant A */}
          <div
            className={`p-6 rounded-2xl border relative overflow-hidden ${
              isDark
                ? "bg-neutral-900 border-neutral-800"
                : "bg-white border-neutral-200"
            }`}
          >
            <div
              className={`text-xs font-light mb-1 ${
                isDark ? "text-neutral-600" : "text-neutral-400"
              }`}
            >
              Wizard
            </div>
            <div
              className={`text-xs font-light mb-2 ${
                isDark ? "text-neutral-500" : "text-neutral-500"
              }`}
            >
              Custom homepage headline
            </div>
            <div className="flex items-center justify-end mb-2">
              <span
                className={`text-xs font-light ${
                  isDark ? "text-neutral-500" : "text-neutral-400"
                }`}
              >
                50% traffic
              </span>
            </div>
            <div
              className={`text-xs font-light mb-2 ${
                isDark ? "text-neutral-500" : "text-neutral-500"
              }`}
            >
              Variant A (Control)
            </div>
            <div
              className={`p-3 rounded-lg mb-4 ${
                isDark ? "bg-neutral-800" : "bg-neutral-100"
              }`}
            >
              <p
                className={`text-sm font-normal ${
                  isDark ? "text-white" : "text-neutral-900"
                }`}
              >
                &quot;Launch your waitlist fast&quot;
              </p>
            </div>
            <div
              className={`text-4xl font-light ${
                isDark ? "text-white" : "text-neutral-900"
              }`}
            >
              18.7%
            </div>
            <div
              className={`text-sm font-light mb-4 ${
                isDark ? "text-neutral-500" : "text-neutral-500"
              }`}
            >
              Conversion rate
            </div>
            {/* Line Chart */}
            <div className="h-16 w-full">
              <svg
                viewBox="0 0 300 70"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  d={variantAPath}
                  fill="none"
                  stroke={isDark ? "#525252" : "#a3a3a3"}
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

          {/* Variant B */}
          <div
            className={`p-6 rounded-2xl border-2 relative overflow-hidden ${
              isDark
                ? "bg-neutral-900 border-neutral-600"
                : "bg-white border-neutral-400"
            }`}
          >
            <div
              className={`text-xs font-light mb-4 ${
                isDark ? "text-neutral-500" : "text-neutral-500"
              }`}
            >
              Variant B
            </div>
            <div
              className={`p-3 rounded-lg mb-4 ${
                isDark ? "bg-neutral-800" : "bg-neutral-100"
              }`}
            >
              <p
                className={`text-sm font-normal ${
                  isDark ? "text-white" : "text-neutral-900"
                }`}
              >
                &quot;Validate demand before you build&quot;
              </p>
            </div>
            <div className="flex items-baseline gap-2">
              <span
                className={`text-4xl font-light ${
                  isDark ? "text-white" : "text-neutral-900"
                }`}
              >
                25.3%
              </span>
              <span className="text-emerald-500 text-sm font-medium">+35%</span>
            </div>
            <div
              className={`text-sm font-light mb-4 ${
                isDark ? "text-neutral-500" : "text-neutral-500"
              }`}
            >
              Conversion rate
            </div>
            {/* Line Chart */}
            <div className="h-16 w-full">
              <svg
                viewBox="0 0 360 60"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  d={variantBPath}
                  fill="none"
                  stroke={isDark ? "#a3a3a3" : "#525252"}
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          <div
            className={`p-6 rounded-2xl border ${
              isDark
                ? "bg-neutral-900 border-neutral-800"
                : "bg-white border-neutral-200"
            }`}
          >
            <div
              className={`text-sm font-light mb-2 ${
                isDark ? "text-neutral-500" : "text-neutral-400"
              }`}
            >
              Conversions
            </div>
            <div
              className={`text-3xl font-light ${
                isDark ? "text-neutral-400" : "text-neutral-400"
              }`}
            >
              631
            </div>
          </div>
          <div
            className={`p-6 rounded-2xl border ${
              isDark
                ? "bg-neutral-900 border-neutral-800"
                : "bg-white border-neutral-200"
            }`}
          >
            <div
              className={`text-sm font-light mb-2 ${
                isDark ? "text-neutral-500" : "text-neutral-400"
              }`}
            >
              Confidence
            </div>
            <div
              className={`text-3xl font-light ${
                isDark ? "text-neutral-400" : "text-neutral-400"
              }`}
            >
              98%
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-base font-light leading-relaxed mb-12 ${
            isDark ? "text-neutral-500" : "text-neutral-500"
          }`}
        >
          A/B test headlines, copy, and CTAs. Optimize your messaging with real
          conversion data and maximize signups.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* A/B Test Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`p-6 rounded-2xl border ${
              isDark
                ? "bg-neutral-900 border-neutral-800"
                : "bg-white border-neutral-200"
            }`}
          >
            <div
              className={`p-4 rounded-lg mb-6 ${
                isDark ? "bg-neutral-800" : "bg-neutral-50"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-sm font-medium ${
                    isDark ? "text-white" : "text-neutral-900"
                  }`}
                >
                  Active Experiments
                </span>
                <span
                  className={`px-3 py-1 text-xs rounded-full ${
                    isDark
                      ? "bg-neutral-700 text-neutral-300"
                      : "bg-neutral-200 text-neutral-700"
                  }`}
                >
                  + New Test
                </span>
              </div>
              <div className="space-y-3">
                {/* Homepage headline experiment */}
                <div
                  className={`p-3 rounded-lg ${
                    isDark ? "bg-neutral-900" : "bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-sm font-medium ${
                        isDark ? "text-white" : "text-neutral-900"
                      }`}
                    >
                      Homepage headline
                    </span>
                    <span
                      className={`text-xs ${
                        isDark ? "text-neutral-500" : "text-neutral-400"
                      }`}
                    >
                      running
                    </span>
                  </div>
                  <div
                    className={`text-xs mb-2 ${
                      isDark ? "text-neutral-500" : "text-neutral-400"
                    }`}
                  >
                    2 variants
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs ${
                        isDark ? "text-neutral-500" : "text-neutral-400"
                      }`}
                    >
                      Confidence level
                    </span>
                    <div
                      className={`flex-1 h-1.5 rounded-full ${
                        isDark ? "bg-neutral-700" : "bg-neutral-200"
                      }`}
                    >
                      <div
                        className={`h-1.5 rounded-full w-[98%] ${
                          isDark ? "bg-blue-500" : "bg-blue-500"
                        }`}
                      ></div>
                    </div>
                    <span
                      className={`text-xs ${
                        isDark ? "text-neutral-400" : "text-neutral-500"
                      }`}
                    >
                      98%
                    </span>
                  </div>
                </div>
                {/* CTA button color experiment */}
                <div
                  className={`p-3 rounded-lg ${
                    isDark ? "bg-neutral-900" : "bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-sm font-medium ${
                        isDark ? "text-white" : "text-neutral-900"
                      }`}
                    >
                      CTA button color
                    </span>
                    <span
                      className={`text-xs ${
                        isDark ? "text-neutral-500" : "text-neutral-400"
                      }`}
                    >
                      running
                    </span>
                  </div>
                  <div
                    className={`text-xs mb-2 ${
                      isDark ? "text-neutral-500" : "text-neutral-400"
                    }`}
                  >
                    3 variants
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs ${
                        isDark ? "text-neutral-500" : "text-neutral-400"
                      }`}
                    >
                      Confidence level
                    </span>
                    <div
                      className={`flex-1 h-1.5 rounded-full ${
                        isDark ? "bg-neutral-700" : "bg-neutral-200"
                      }`}
                    >
                      <div
                        className={`h-1.5 rounded-full w-[45%] ${
                          isDark ? "bg-neutral-500" : "bg-neutral-400"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3
              className={`text-lg font-medium mb-2 ${
                isDark ? "text-white" : "text-neutral-900"
              }`}
            >
              A/B test your messaging
            </h3>
            <p
              className={`text-sm font-light leading-relaxed ${
                isDark ? "text-neutral-500" : "text-neutral-500"
              }`}
            >
              Test headlines, descriptions, and CTAs simultaneously. Find which
              message drives highest conversion rates.
            </p>
          </motion.div>

          {/* Analytics Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`p-6 rounded-2xl border ${
              isDark
                ? "bg-neutral-900 border-neutral-800"
                : "bg-white border-neutral-200"
            }`}
          >
            <div
              className={`p-4 rounded-lg mb-6 ${
                isDark ? "bg-neutral-800" : "bg-neutral-50"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-sm font-medium ${
                    isDark ? "text-white" : "text-neutral-900"
                  }`}
                >
                  Live Activity
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span
                    className={`text-xs ${
                      isDark ? "text-neutral-500" : "text-neutral-400"
                    }`}
                  >
                    34 active now
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div
                  className={`border-r ${
                    isDark ? "border-neutral-700" : "border-neutral-200"
                  }`}
                >
                  <div
                    className={`text-xs mb-1 ${
                      isDark ? "text-neutral-500" : "text-neutral-400"
                    }`}
                  >
                    Visitors
                  </div>
                  <div
                    className={`text-lg font-medium ${
                      isDark ? "text-white" : "text-neutral-900"
                    }`}
                  >
                    127{" "}
                    <span className="text-xs font-normal text-emerald-500">
                      +12
                    </span>
                  </div>
                </div>
                <div
                  className={`border-r ${
                    isDark ? "border-neutral-700" : "border-neutral-200"
                  }`}
                >
                  <div
                    className={`text-xs mb-1 ${
                      isDark ? "text-neutral-500" : "text-neutral-400"
                    }`}
                  >
                    Signups
                  </div>
                  <div
                    className={`text-lg font-medium ${
                      isDark ? "text-white" : "text-neutral-900"
                    }`}
                  >
                    23{" "}
                    <span className="text-xs font-normal text-emerald-500">
                      +5
                    </span>
                  </div>
                </div>
                <div>
                  <div
                    className={`text-xs mb-1 ${
                      isDark ? "text-neutral-500" : "text-neutral-400"
                    }`}
                  >
                    Conv. Rate
                  </div>
                  <div
                    className={`text-lg font-medium ${
                      isDark ? "text-white" : "text-neutral-900"
                    }`}
                  >
                    18.1%{" "}
                    <span className="text-xs font-normal text-emerald-500">
                      +2.3%
                    </span>
                  </div>
                </div>
              </div>
              {/* Recent Activity */}
              <div
                className={`pt-3 border-t ${
                  isDark ? "border-neutral-700" : "border-neutral-200"
                }`}
              >
                <div
                  className={`text-xs mb-2 ${
                    isDark ? "text-neutral-500" : "text-neutral-400"
                  }`}
                >
                  Recent activity
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users
                      className={`w-4 h-4 ${
                        isDark ? "text-neutral-500" : "text-neutral-400"
                      }`}
                    />
                    <span
                      className={`text-xs ${
                        isDark ? "text-neutral-400" : "text-neutral-600"
                      }`}
                    >
                      sarah@example.com
                    </span>
                    <span
                      className={`text-xs ${
                        isDark ? "text-neutral-600" : "text-neutral-400"
                      }`}
                    >
                      2s ago
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye
                      className={`w-4 h-4 ${
                        isDark ? "text-neutral-500" : "text-neutral-400"
                      }`}
                    />
                    <span
                      className={`text-xs ${
                        isDark ? "text-neutral-400" : "text-neutral-600"
                      }`}
                    >
                      Viewed /pricing
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <h3
              className={`text-lg font-medium mb-2 ${
                isDark ? "text-white" : "text-neutral-900"
              }`}
            >
              Real-time analytics dashboard
            </h3>
            <p
              className={`text-sm font-light leading-relaxed ${
                isDark ? "text-neutral-500" : "text-neutral-500"
              }`}
            >
              Track conversion rates, traffic sources, and user behavior in
              real-time. Make data-driven decisions.
            </p>
          </motion.div>
        </div>

        {/* Analytics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`p-8 rounded-2xl border ${
            isDark
              ? "bg-neutral-900 border-neutral-800"
              : "bg-white border-neutral-200"
          }`}
        >
          <h3
            className={`text-2xl font-light mb-2 ${
              isDark ? "text-white" : "text-neutral-900"
            }`}
          >
            Complete analytics for MicroSaaS validation
          </h3>
          <p
            className={`text-base font-light mb-8 ${
              isDark ? "text-neutral-500" : "text-neutral-500"
            }`}
          >
            Every metric you need to get your first 100 signups and optimize
            messaging.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                { name: "Performance Trends", active: true },
                { name: "Device Performance", active: false },
                { name: "CTA Click Rates", active: false },
                { name: "Traffic Sources", active: false },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      item.active
                        ? "bg-emerald-500"
                        : isDark
                          ? "bg-neutral-600"
                          : "bg-neutral-300"
                    }`}
                  ></div>
                  <span
                    className={`text-sm font-light ${
                      item.active
                        ? isDark
                          ? "text-white"
                          : "text-neutral-900"
                        : isDark
                          ? "text-neutral-500"
                          : "text-neutral-500"
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <h4
                className={`text-lg font-medium mb-2 ${
                  isDark ? "text-white" : "text-neutral-900"
                }`}
              >
                Track your daily metrics
              </h4>
              <p
                className={`text-sm font-light mb-6 ${
                  isDark ? "text-neutral-500" : "text-neutral-500"
                }`}
              >
                Monitor Views, CTA clicks, and Submits over time. Identify
                patterns and optimize for peak performance days.
              </p>

              {/* Line Chart Preview */}
              <div
                className={`p-4 rounded-lg ${
                  isDark ? "bg-neutral-800" : "bg-neutral-50"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span
                      className={`text-sm font-medium ${
                        isDark ? "text-white" : "text-neutral-900"
                      }`}
                    >
                      Performance Trends
                    </span>
                    <div
                      className={`text-xs ${
                        isDark ? "text-neutral-500" : "text-neutral-400"
                      }`}
                    >
                      Last 7 days
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span
                      className={`px-2 py-1 text-xs rounded ${
                        isDark
                          ? "bg-neutral-700 text-neutral-300"
                          : "bg-neutral-900 text-white"
                      }`}
                    >
                      7d
                    </span>
                    <span
                      className={`px-2 py-1 text-xs rounded ${
                        isDark
                          ? "bg-neutral-900 text-neutral-500"
                          : "bg-neutral-200 text-neutral-600"
                      }`}
                    >
                      30d
                    </span>
                  </div>
                </div>
                {/* Line chart */}
                <div className="h-28 w-full relative mb-2">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-neutral-400 pr-2">
                    <span>100</span>
                    <span>75</span>
                    <span>50</span>
                    <span>25</span>
                    <span>0</span>
                  </div>
                  <div className="ml-6 h-full">
                    <svg
                      viewBox="0 0 350 100"
                      className="w-full h-full"
                      preserveAspectRatio="none"
                    >
                      {/* Grid lines */}
                      <line
                        x1="0"
                        y1="25"
                        x2="350"
                        y2="25"
                        stroke={isDark ? "#404040" : "#e5e5e5"}
                        strokeWidth="1"
                      />
                      <line
                        x1="0"
                        y1="50"
                        x2="350"
                        y2="50"
                        stroke={isDark ? "#404040" : "#e5e5e5"}
                        strokeWidth="1"
                      />
                      <line
                        x1="0"
                        y1="75"
                        x2="350"
                        y2="75"
                        stroke={isDark ? "#404040" : "#e5e5e5"}
                        strokeWidth="1"
                      />
                      {/* Views line (top line) */}
                      <path
                        d="M0,30 C30,25 60,20 90,22 C120,24 150,18 180,15 C210,12 240,8 270,10 C300,12 330,6 350,8"
                        fill="none"
                        stroke={isDark ? "#a3a3a3" : "#737373"}
                        strokeWidth="2"
                      />
                      {/* CTA Clicks line (bottom line) */}
                      <path
                        d="M0,60 C30,58 60,55 90,52 C120,49 150,48 180,45 C210,42 240,38 270,40 C300,42 330,35 350,38"
                        fill="none"
                        stroke={isDark ? "#525252" : "#a3a3a3"}
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
                {/* X-axis labels */}
                <div className="ml-6 flex justify-between text-[10px] text-neutral-400">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        isDark ? "bg-neutral-400" : "bg-neutral-700"
                      }`}
                    ></div>
                    <span
                      className={`text-xs ${
                        isDark ? "text-neutral-400" : "text-neutral-600"
                      }`}
                    >
                      Views
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        isDark ? "bg-neutral-600" : "bg-neutral-400"
                      }`}
                    ></div>
                    <span
                      className={`text-xs ${
                        isDark ? "text-neutral-400" : "text-neutral-600"
                      }`}
                    >
                      CTA Clicks
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
