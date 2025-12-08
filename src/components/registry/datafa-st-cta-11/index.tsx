"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#1A1A1A",
    cardBg: "#242424",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
  },
  dark: {
    background: "#1A1A1A",
    cardBg: "#242424",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface DatafaStCta11Props {
  mode?: "light" | "dark";
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  userCount?: string;
}

export default function DatafaStCta11({
  mode = "dark",
  headline = "Find revenue hiding in your traffic",
  subheadline = "Discover which marketing channels bring customers so you can grow your business, fast.",
  ctaText = "Start a 14-day free trial",
  ctaHref = "#",
  userCount = "10,546",
}: DatafaStCta11Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-gray-700/50 p-10 text-center md:p-16"
          style={{ backgroundColor: colors.cardBg }}
        >
          {/* Headline */}
          <h2
            className="mb-4 text-3xl font-bold md:text-4xl"
            style={{ color: colors.textPrimary }}
          >
            {headline}
          </h2>

          {/* Subheadline */}
          <p
            className="mx-auto mb-8 max-w-lg text-lg"
            style={{ color: colors.textSecondary }}
          >
            {subheadline}
          </p>

          {/* CTA Button */}
          <a
            href={ctaHref}
            className="mb-6 inline-flex items-center justify-center rounded-lg px-8 py-4 font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: colors.accent }}
          >
            {ctaText}
          </a>

          {/* User Avatars */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex -space-x-3">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="h-9 w-9 overflow-hidden rounded-full border-2 border-gray-800 bg-gray-600"
                >
                  <div className="h-full w-full bg-gradient-to-br from-gray-400 to-gray-600" />
                </div>
              ))}
            </div>
            <p className="text-base" style={{ color: colors.textSecondary }}>
              Loved by <span className="font-medium text-white">{userCount}</span>{" "}
              users
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
