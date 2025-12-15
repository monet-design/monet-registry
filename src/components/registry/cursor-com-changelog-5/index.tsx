"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    bg: "#FFFFFF",
    cardBg: "#F5F5F5",
    text: "#1F1F1F",
    textSecondary: "#6B7280",
    accent: "#F97316",
    border: "#E5E5E5",
  },
  dark: {
    bg: "#1A1A1A",
    cardBg: "#262626",
    text: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#F97316",
    border: "#333333",
  },
} as const;

const CHANGELOG_ITEMS = [
  {
    version: "2.2",
    date: "Dec 10, 2025",
    description: "Debug Mode, Plan Mode Improvements, Multi-Agent Judging, and Pinned Chats",
  },
  {
    version: "2.1",
    date: "Nov 21, 2025",
    description: "Improved Plan Mode, AI Code Review in Editor, and Instant Grep",
  },
  {
    version: "2.0",
    date: "Oct 29, 2025",
    description: "New Coding Model and Agent Interface",
  },
  {
    version: "1.7",
    date: "Sep 29, 2025",
    description: "Browser Controls, Plan Mode, and Hooks",
  },
] as const;

// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface CursorComChangelog5Props {
  mode?: "light" | "dark";
}

export default function CursorComChangelog5({
  mode = "dark",
}: CursorComChangelog5Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full px-6 py-16 lg:px-12 lg:py-20"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-2xl font-medium md:text-3xl"
          style={{ color: colors.text }}
        >
          Changelog
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CHANGELOG_ITEMS.map((item, index) => (
            <motion.div
              key={item.version}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl p-5"
              style={{
                backgroundColor: colors.cardBg,
                border: `1px solid ${colors.border}`,
              }}
            >
              <div className="mb-3 flex items-center gap-3">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: mode === "dark" ? "#333" : "#E5E5E5",
                    color: colors.text,
                  }}
                >
                  {item.version}
                </span>
                <span
                  className="text-sm"
                  style={{ color: colors.textSecondary }}
                >
                  {item.date}
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: colors.text }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <a
            href="/changelog"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: colors.accent }}
          >
            See what&apos;s new in Cursor
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
