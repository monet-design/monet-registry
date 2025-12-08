"use client";

// ============================================================================
// CUSTOMIZATION - Modify these values to adjust for your project
// ============================================================================

/**
 * Custom colors (brand colors)
 */
const COLORS = {
  light: {
    accent: "#E07B39", // Orange CTA button
    accentHover: "#C96A2E",
    background: "#1A1A1A",
    cardBg: "#242424",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
  },
  dark: {
    accent: "#E07B39",
    accentHover: "#C96A2E",
    background: "#1A1A1A",
    cardBg: "#242424",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
  },
} as const;

/**
 * Image assets
 */
const IMAGES = {
  avatars: [
    { path: "/api/placeholder/50/50", alt: "User 1" },
    { path: "/api/placeholder/50/50", alt: "User 2" },
    { path: "/api/placeholder/50/50", alt: "User 3" },
    { path: "/api/placeholder/50/50", alt: "User 4" },
    { path: "/api/placeholder/50/50", alt: "User 5" },
    { path: "/api/placeholder/50/50", alt: "User 6" },
    { path: "/api/placeholder/50/50", alt: "User 7" },
    { path: "/api/placeholder/50/50", alt: "User 8" },
  ],
  dashboard: {
    path: "/api/placeholder/1200/800",
    alt: "DataFast Analytics Dashboard",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, Globe } from "lucide-react";

interface DatafaStHero0Props {
  mode?: "light" | "dark";
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  trialText?: string;
  userCount?: string;
}

export default function DatafaStHero0({
  mode = "dark",
  headline = "Revenue-first analytics",
  subheadline = "Discover which marketing channels bring customers so you can grow your business, fast.",
  ctaText = "Add my website",
  ctaHref = "#",
  trialText = "14-day free trial. No card required",
  userCount = "10,546",
}: DatafaStHero0Props) {
  const colors = COLORS[mode];

  // Sample dashboard data
  const metrics = [
    { label: "Visitors", value: "19.7k", change: "-5.4%", positive: false },
    { label: "Revenue", value: "$27.6k", change: "+33.9%", positive: true },
    { label: "Conversion rate", value: "0.56%", change: "+34.8%", positive: true },
    { label: "Revenue/visitor", value: "$1.41", change: "+41.5%", positive: true },
    { label: "Bounce rate", value: "83%", change: "-0.9%", positive: true },
    { label: "Session time", value: "2m 45s", change: "+3.5%", positive: true },
    { label: "Visitors now", value: "7", change: "", positive: true },
  ];

  const referrers = [
    { name: "X", visitors: "7.6k", color: "#E07B39" },
    { name: "Direct/None", visitors: "3.3k", color: "#6B7280" },
    { name: "Google", visitors: "2.5k", color: "#8B7355" },
    { name: "marclou.com", visitors: "2k", color: "#4B5563" },
  ];

  const countries = [
    { name: "United States", flag: "US", visitors: "4.8k" },
    { name: "France", flag: "FR", visitors: "1.3k" },
    { name: "United Kingdom", flag: "UK", visitors: "1.2k" },
    { name: "Germany", flag: "DE", visitors: "851" },
  ];

  return (
    <section
      className="relative w-full overflow-hidden py-12 lg:py-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Hero Content */}
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl"
            style={{ color: colors.textPrimary }}
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mb-8 max-w-xl text-lg md:text-xl"
            style={{ color: colors.textSecondary }}
          >
            {subheadline}
          </motion.p>

          {/* CTA Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 flex flex-col items-center gap-2"
          >
            <div className="flex items-center overflow-hidden rounded-lg border border-gray-700">
              <div className="flex items-center bg-gray-800 px-3 py-3">
                <Globe className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="website.com"
                className="w-48 bg-gray-800 px-3 py-3 text-white placeholder-gray-500 outline-none"
              />
            </div>
            <a
              href={ctaHref}
              className="flex w-64 items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: colors.accent }}
            >
              {ctaText}
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="text-sm" style={{ color: colors.textSecondary }}>
              {trialText}
            </p>
          </motion.div>

          {/* User Avatars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12 flex flex-col items-center gap-2"
          >
            <div className="flex -space-x-3">
              {IMAGES.avatars.map((avatar, i) => (
                <div
                  key={i}
                  className="h-9 w-9 overflow-hidden rounded-full border-2 border-gray-800 bg-gray-600"
                >
                  <div className="h-full w-full bg-gradient-to-br from-gray-400 to-gray-600" />
                </div>
              ))}
            </div>
            <p className="text-base" style={{ color: colors.textSecondary }}>
              Loved by <span className="font-medium text-white">{userCount}</span> users
            </p>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-6xl"
          >
            <div
              className="overflow-hidden rounded-2xl border border-gray-700/50 p-1.5"
              style={{ backgroundColor: "rgba(38, 38, 38, 0.5)" }}
            >
              {/* Browser Chrome */}
              <div
                className="overflow-hidden rounded-xl"
                style={{ backgroundColor: colors.cardBg }}
              >
                {/* Browser Header */}
                <div className="flex items-center border-b border-gray-700/50 bg-gray-900 px-4 py-2">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 text-center text-sm">
                    <span className="text-gray-500">https://datafa.st/</span>
                    <span className="text-white">codefa.st</span>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-4">
                  {/* Dashboard Header */}
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex items-center gap-2 rounded-lg bg-gray-800 px-3 py-1.5">
                      <span className="text-sm font-medium text-white">codefa.st</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span>Last 30 days</span>
                      <span>Daily</span>
                    </div>
                  </div>

                  {/* Metrics Row */}
                  <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-7">
                    {metrics.map((metric, i) => (
                      <div key={i} className="text-left">
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          {metric.label === "Visitors" && (
                            <span className="h-2 w-2 rounded bg-blue-500" />
                          )}
                          {metric.label === "Revenue" && (
                            <span className="h-2 w-2 rounded bg-orange-500" />
                          )}
                          {metric.label}
                        </div>
                        <div className="text-xl font-bold text-white">{metric.value}</div>
                        {metric.change && (
                          <div
                            className={`text-xs ${
                              metric.positive ? "text-green-400" : "text-red-400"
                            }`}
                          >
                            {metric.change}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Chart Placeholder */}
                  <div className="mb-6 h-48 rounded-lg bg-gray-800/50">
                    <svg className="h-full w-full" viewBox="0 0 800 200" preserveAspectRatio="none">
                      {/* Bar chart simulation */}
                      {Array.from({ length: 30 }).map((_, i) => {
                        const height = 40 + Math.random() * 120;
                        return (
                          <rect
                            key={i}
                            x={10 + i * 26}
                            y={200 - height}
                            width="20"
                            height={height}
                            fill="#E07B39"
                            opacity="0.8"
                            rx="2"
                          />
                        );
                      })}
                      {/* Line overlay */}
                      <path
                        d="M 10 150 Q 100 120 200 140 T 400 100 T 600 80 T 790 60"
                        fill="none"
                        stroke="#60A5FA"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>

                  {/* Bottom Tables */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* Referrers */}
                    <div className="rounded-lg bg-gray-800/50 p-3">
                      <div className="mb-2 flex gap-4 text-xs text-gray-400">
                        <span className="font-medium text-white">Channel</span>
                        <span>Referrer</span>
                        <span>Campaign</span>
                        <span>Keyword</span>
                      </div>
                      {referrers.map((ref, i) => (
                        <div key={i} className="flex items-center justify-between py-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-white">{ref.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div
                              className="h-2 rounded"
                              style={{
                                width: `${(parseInt(ref.visitors) / 7.6) * 100}px`,
                                backgroundColor: ref.color,
                              }}
                            />
                            <span className="text-sm text-gray-400">{ref.visitors}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Countries */}
                    <div className="rounded-lg bg-gray-800/50 p-3">
                      <div className="mb-2 flex gap-4 text-xs text-gray-400">
                        <span>Map</span>
                        <span className="font-medium text-white">Country</span>
                        <span>Region</span>
                        <span>City</span>
                      </div>
                      {countries.map((country, i) => (
                        <div key={i} className="flex items-center justify-between py-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{country.flag === "US" ? "🇺🇸" : country.flag === "FR" ? "🇫🇷" : country.flag === "UK" ? "🇬🇧" : "🇩🇪"}</span>
                            <span className="text-sm text-white">{country.name}</span>
                          </div>
                          <span className="text-sm text-gray-400">{country.visitors}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Demo Label */}
            <div className="mt-4 flex justify-center">
              <span className="text-sm italic text-gray-500">
                Try this (people are addicted)
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
