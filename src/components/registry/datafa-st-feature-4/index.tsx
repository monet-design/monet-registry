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
    labelColor: "#E07B39",
  },
  dark: {
    background: "#1A1A1A",
    cardBg: "#242424",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
    labelColor: "#E07B39",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Play } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  hasVideo?: boolean;
}

interface DatafaStFeature4Props {
  mode?: "light" | "dark";
  label?: string;
  headline?: string;
  features?: Feature[];
  releaseInfo?: {
    date: string;
    title: string;
    description: string;
    videoLabel?: string;
    changelogLink?: string;
  };
}

const defaultFeatures: Feature[] = [
  {
    title: "Web analytics",
    description: "Get meaningful insights like Google Analytics, but 10x simpler-focused only on what drives growth, not vanity metrics.",
    linkText: "See live demo",
    linkHref: "#",
    hasVideo: true,
  },
  {
    title: "Revenue attribution",
    description: "Discover marketing channels drive PAYING customers, customer segments with the highest LTV, and patterns that directly influence purchase decisions.",
    linkText: "See live demo",
    linkHref: "#",
    hasVideo: true,
  },
  {
    title: "Goals, funnels, journeys",
    description: "Set custom goals like signups or lead magnet downloads, and see the full journey each visitor takes from first click to conversion-so you know exactly what drives results.",
    hasVideo: true,
  },
  {
    title: "Live visitor intelligence",
    description: "Watch visitors in real time, see who's likely to buy, and use the API to act instantly. It's as useful as it is addictive.",
    linkText: "See live demo",
    linkHref: "#",
    hasVideo: true,
  },
];

const defaultRelease = {
  date: "Oct 6, 2025 - Last release",
  title: "Color schemes & cross-domain tracking",
  description: "Change your dashboard colors, track visitors across domains, and 2 security features.",
  videoLabel: "Watch Video",
  changelogLink: "All changelogs",
};

export default function DatafaStFeature4({
  mode = "dark",
  label = "FEATURES",
  headline = "Analytics that bring customers, not confusion",
  features = defaultFeatures,
  releaseInfo = defaultRelease,
}: DatafaStFeature4Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-block text-sm font-medium tracking-wider"
            style={{ color: colors.labelColor }}
          >
            {label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold md:text-5xl"
            style={{ color: colors.textPrimary }}
          >
            {headline}
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="rounded-xl border border-gray-700/50 p-6"
              style={{ backgroundColor: colors.cardBg }}
            >
              {/* Feature Header */}
              <h3
                className="mb-2 text-xl font-semibold"
                style={{ color: colors.textPrimary }}
              >
                {feature.title}
              </h3>
              <p
                className="mb-4 text-sm leading-relaxed"
                style={{ color: colors.textSecondary }}
              >
                {feature.description}
                {feature.linkText && (
                  <a
                    href={feature.linkHref}
                    className="ml-1 font-medium"
                    style={{ color: colors.accent }}
                  >
                    {feature.linkText}
                  </a>
                )}
              </p>

              {/* Video Preview */}
              {feature.hasVideo && (
                <div className="relative h-48 overflow-hidden rounded-lg bg-gray-800">
                  <div className="flex h-full items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/50 backdrop-blur">
                      <Play className="h-6 w-6 text-white" fill="white" />
                    </div>
                  </div>
                  {/* Fake dashboard overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Release Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <span className="mb-2 text-sm" style={{ color: colors.accent }}>
            {releaseInfo.date}
          </span>
          <h4
            className="mb-2 text-lg font-semibold"
            style={{ color: colors.textPrimary }}
          >
            {releaseInfo.title}
          </h4>
          <p
            className="mb-4 max-w-md text-sm"
            style={{ color: colors.textSecondary }}
          >
            {releaseInfo.description}
          </p>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 rounded-lg border border-gray-600 px-4 py-2 text-sm text-white transition-colors hover:bg-gray-800">
              <Play className="h-4 w-4" />
              {releaseInfo.videoLabel}
            </button>
          </div>
          <a
            href="#"
            className="mt-2 text-sm"
            style={{ color: colors.textSecondary }}
          >
            {releaseInfo.changelogLink}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
