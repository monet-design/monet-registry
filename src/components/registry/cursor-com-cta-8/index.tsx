"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    bg: "#FFFFFF",
    text: "#1F1F1F",
    buttonBg: "#1F1F1F",
    buttonText: "#FFFFFF",
  },
  dark: {
    bg: "#1A1A1A",
    text: "#FFFFFF",
    buttonBg: "#FFFFFF",
    buttonText: "#1A1A1A",
  },
} as const;

// ============================================================================

import { motion } from "motion/react";
import { Download } from "lucide-react";

interface CursorComCta8Props {
  mode?: "light" | "dark";
}

export default function CursorComCta8({
  mode = "dark",
}: CursorComCta8Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full px-6 py-20 lg:px-12 lg:py-32"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="mx-auto max-w-7xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl"
          style={{ color: colors.text }}
        >
          Try Cursor now.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-medium transition-colors"
            style={{
              backgroundColor: colors.buttonBg,
              color: colors.buttonText,
            }}
          >
            Download for macOS
            <Download className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
