"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
interface ColorScheme {
  accent: string;
  accentLight: string;
  chartFill: string;
  chartPattern: string;
  border: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  background: string;
}

const COLORS: { light: ColorScheme; dark: ColorScheme } = {
  light: {
    accent: "#cb3600", // Cloudflare orange
    accentLight: "#f97316", // Lighter orange for patterns
    chartFill: "#fef3e8", // Very light orange for chart background
    chartPattern: "#fdba74", // Orange for dotted pattern
    border: "#e5e7eb", // Gray border
    textPrimary: "#1f2937", // Dark gray for headings
    textSecondary: "#6b7280", // Medium gray for body text
    textMuted: "#9ca3af", // Light gray for labels
    background: "#ffffff",
  },
  dark: {
    accent: "#f97316",
    accentLight: "#fb923c",
    chartFill: "#431407",
    chartPattern: "#c2410c",
    border: "#374151",
    textPrimary: "#f9fafb",
    textSecondary: "#d1d5db",
    textMuted: "#9ca3af",
    background: "#111827",
  },
};

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface SaaspoFeatureSectionsCloudflareAgentsProps {
  mode?: "light" | "dark";
  sectionNumber?: string;
  sectionLabel?: string;
  title?: string;
  description?: string;
  chartTopLabel?: string;
  chartBottomLabel?: string;
  bottomTitle?: string;
  cpuTimeDescription?: string;
  websocketTitle?: string;
  websocketDescription?: string;
}

export default function SaaspoFeatureSectionsCloudflareAgents({
  mode = "light",
  sectionNumber = "02",
  sectionLabel = "Low Cost",
  title = "Scale up.\nOr down.",
  description = "Inference is hard to predict and spiky in nature, unlike training. GPU utilization is, on average, only 20-40% — with one-third of organizations utilizing less than 15%.\n\nWorkers AI allows customers to save by only paying for usage. No guessing or committing to hardware that goes unused.",
  chartTopLabel = "What you pay for\non a hyperscaler",
  chartBottomLabel = "What you pay for\non Cloudflare",
  bottomTitle = "Only pay for\nwhat you use.",
  cpuTimeDescription = "With Cloudflare Workers, you only pay for CPU time, or the time actually spent executing a task, as opposed to wall time, time waiting on I/O. When it comes to agents, your agent can often be blocked on external resources outside of your control, whether a slow API, an LLM or a human in the loop.",
  websocketTitle = "WebSocket Hibernation",
  websocketDescription = "Many agents rely on WebSockets for communication, which require long-running connections. With WebSocket hibernation built into Durable Objects, when there's no activity, the Durable Object can shut down, while still maintaining the connection, resulting in cost-savings for you.",
}: SaaspoFeatureSectionsCloudflareAgentsProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top Section - GPU Utilization Chart */}
        <div
          className="rounded-xl border p-8 lg:p-12"
          style={{ borderColor: colors.border }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Section Label */}
              <p
                className="text-sm font-medium mb-6"
                style={{ color: colors.accent }}
              >
                {sectionNumber} | {sectionLabel}
              </p>

              {/* Title */}
              <h2
                className="text-4xl lg:text-5xl xl:text-6xl font-serif italic mb-8"
                style={{ color: colors.accent }}
              >
                {title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < title.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </h2>

              {/* Description */}
              <div className="space-y-4">
                {description.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm lg:text-base leading-relaxed"
                    style={{ color: colors.textSecondary }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Chart */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <GpuUtilizationChart
                colors={colors}
                topLabel={chartTopLabel}
                bottomLabel={chartBottomLabel}
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Section - CPU Time vs Wall Time */}
        <div
          className="mt-6 rounded-xl border p-8 lg:p-12"
          style={{ borderColor: colors.border }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left - Timeline Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Diamond Icon */}
              <div className="mb-8">
                <DiamondIcon color={colors.accent} />
              </div>

              {/* CPU Time Chart */}
              <CpuTimeChart colors={colors} />
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Title */}
              <h3
                className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-8"
                style={{ color: colors.textPrimary }}
              >
                {bottomTitle.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < bottomTitle.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </h3>

              {/* Wall Clock Time Section */}
              <div className="mb-8">
                <h4
                  className="text-sm font-semibold mb-3"
                  style={{ color: colors.textPrimary }}
                >
                  Wall Clock Time vs. CPU Time
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: colors.textSecondary }}
                >
                  {cpuTimeDescription.split("CPU time").map((part, i, arr) =>
                    i < arr.length - 1 ? (
                      <span key={i}>
                        {part}
                        <span
                          className="underline decoration-dotted underline-offset-2"
                          style={{ color: colors.accent }}
                        >
                          CPU time
                        </span>
                      </span>
                    ) : (
                      part
                        .split("wall time")
                        .map((subpart, j, subarr) =>
                          j < subarr.length - 1 ? (
                            <span key={`${i}-${j}`}>
                              {subpart}
                              <span
                                className="underline decoration-dotted underline-offset-2"
                                style={{ color: colors.accent }}
                              >
                                wall time
                              </span>
                            </span>
                          ) : (
                            <span key={`${i}-${j}`}>{subpart}</span>
                          )
                        )
                    )
                  )}
                </p>
              </div>

              {/* WebSocket Hibernation Section */}
              <div>
                <h4
                  className="text-sm font-semibold mb-3"
                  style={{ color: colors.textPrimary }}
                >
                  {websocketTitle}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: colors.textSecondary }}
                >
                  {websocketDescription}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// GPU Utilization Chart Component
function GpuUtilizationChart({
  colors,
  topLabel,
  bottomLabel,
}: {
  colors: ColorScheme;
  topLabel: string;
  bottomLabel: string;
}) {
  return (
    <div className="relative w-full h-[300px] lg:h-[400px]">
      <svg
        viewBox="0 0 500 300"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Hyperscaler area - dashed pattern with volatile line */}
        <defs>
          <pattern
            id="dashedPattern"
            patternUnits="userSpaceOnUse"
            width="8"
            height="8"
          >
            <line
              x1="0"
              y1="4"
              x2="8"
              y2="4"
              stroke={colors.chartPattern}
              strokeWidth="1"
              strokeDasharray="2 2"
            />
          </pattern>
          <pattern
            id="dottedPattern"
            patternUnits="userSpaceOnUse"
            width="8"
            height="8"
          >
            <circle cx="4" cy="4" r="1" fill={colors.chartPattern} />
          </pattern>
        </defs>

        {/* Top volatile area (hyperscaler) */}
        <path
          d="M 0 80
             Q 30 60, 50 70
             Q 80 85, 100 50
             Q 120 20, 140 40
             Q 160 60, 180 30
             Q 200 10, 220 50
             Q 240 80, 260 40
             Q 280 10, 300 60
             Q 320 90, 340 50
             Q 360 20, 380 70
             Q 400 100, 420 60
             Q 440 30, 460 80
             Q 480 100, 500 70
             L 500 0 L 0 0 Z"
          fill="url(#dashedPattern)"
          opacity="0.6"
        />

        {/* Volatile top line */}
        <path
          d="M 0 80
             Q 30 60, 50 70
             Q 80 85, 100 50
             Q 120 20, 140 40
             Q 160 60, 180 30
             Q 200 10, 220 50
             Q 240 80, 260 40
             Q 280 10, 300 60
             Q 320 90, 340 50
             Q 360 20, 380 70
             Q 400 100, 420 60
             Q 440 30, 460 80
             Q 480 100, 500 70"
          fill="none"
          stroke={colors.accent}
          strokeWidth="2"
          strokeDasharray="6 4"
        />

        {/* Cloudflare area - smooth curve at bottom */}
        <path
          d="M 0 280
             Q 100 280, 150 250
             Q 200 200, 250 180
             Q 300 160, 350 200
             Q 400 250, 450 260
             Q 480 270, 500 280
             L 500 300 L 0 300 Z"
          fill="url(#dottedPattern)"
          opacity="0.8"
        />

        {/* Smooth bottom line */}
        <path
          d="M 0 280
             Q 100 280, 150 250
             Q 200 200, 250 180
             Q 300 160, 350 200
             Q 400 250, 450 260
             Q 480 270, 500 280"
          fill="none"
          stroke={colors.accent}
          strokeWidth="2"
        />
      </svg>

      {/* Top Label */}
      <div
        className="absolute top-4 right-4 text-right text-xs"
        style={{ color: colors.textMuted }}
      >
        {topLabel.split("\n").map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>

      {/* Bottom Label */}
      <div
        className="absolute bottom-8 right-4 text-right text-xs"
        style={{ color: colors.textMuted }}
      >
        {bottomLabel.split("\n").map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    </div>
  );
}

// Diamond Icon Component
function DiamondIcon({ color }: { color: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className="opacity-60"
    >
      {/* Outer diamond */}
      <path
        d="M 20 2 L 38 20 L 20 38 L 2 20 Z"
        fill="none"
        stroke={color}
        strokeWidth="1"
      />
      {/* Inner diamond */}
      <path
        d="M 20 10 L 30 20 L 20 30 L 10 20 Z"
        fill="none"
        stroke={color}
        strokeWidth="1"
      />
      {/* Small center diamond */}
      <circle cx="20" cy="20" r="2" fill={color} />
    </svg>
  );
}

// CPU Time Chart Component
function CpuTimeChart({ colors }: { colors: ColorScheme }) {
  return (
    <div className="space-y-6">
      {/* Legend */}
      <div className="flex items-center gap-6 text-xs">
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 border"
            style={{ borderColor: colors.accent }}
          />
          <span style={{ color: colors.textSecondary }}>CPU Time</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4"
            style={{ backgroundColor: colors.chartPattern, opacity: 0.5 }}
          />
          <span style={{ color: colors.textSecondary }}>Wall Time</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Time axis */}
        <div
          className="h-px w-full"
          style={{ backgroundColor: colors.border }}
        />

        {/* LLM Call Bar */}
        <div className="mt-4">
          <div className="text-xs mb-2" style={{ color: colors.textMuted }}>
            LLM Call
          </div>
          <div className="relative h-8 flex">
            {/* CPU time (small) */}
            <div
              className="h-full w-8 border-2"
              style={{ borderColor: colors.accent }}
            />
            {/* Wall time (large) */}
            <div
              className="h-full flex-1 max-w-[200px]"
              style={{ backgroundColor: colors.chartPattern, opacity: 0.3 }}
            />
          </div>
          <div className="flex justify-between text-xs mt-1">
            <span style={{ color: colors.textMuted }}>1ms</span>
            <span style={{ color: colors.textMuted }}>500ms</span>
          </div>
        </div>

        {/* API Call Bar */}
        <div className="mt-6">
          <div className="text-xs mb-2" style={{ color: colors.textMuted }}>
            API Call
          </div>
          <div className="relative h-8 flex">
            {/* CPU time (small) */}
            <div
              className="h-full w-6 border-2"
              style={{ borderColor: colors.accent }}
            />
            {/* Wall time (medium) */}
            <div
              className="h-full w-32"
              style={{ backgroundColor: colors.chartPattern, opacity: 0.3 }}
            />
          </div>
          <div className="flex justify-between text-xs mt-1 w-40">
            <span style={{ color: colors.textMuted }}>5ms</span>
            <span style={{ color: colors.textMuted }}>.75ms</span>
          </div>
        </div>

        {/* Time markers */}
        <div className="flex justify-between text-xs mt-4 pt-4 border-t" style={{ borderColor: colors.border }}>
          <span style={{ color: colors.textMuted }}>250ms</span>
        </div>
      </div>
    </div>
  );
}
