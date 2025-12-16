"use client";

// ============================================================================
// CUSTOMIZATION - Edit these values to customize the component for your project
// ============================================================================

const COLORS = {
  light: {
    background: "#F5F0E8",
    text: "#1a1a1a",
  },
  dark: {
    background: "#1a1a1a",
    text: "#F5F0E8",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface AntlerCoFeature1Props {
  mode?: "light" | "dark";
}

export default function AntlerCoFeature1({
  mode = "light",
}: AntlerCoFeature1Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-20 md:py-28 lg:py-32"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-light"
            style={{ color: colors.text }}
          >
            We believe Antler is the best place on the planet for people to launch{" "}
            <em className="italic">category-defining companies.</em>
          </p>
          <p
            className="mt-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-light"
            style={{ color: colors.text }}
          >
            We&apos;re not here to chase trends — we&apos;re here to support founders to
            dedicate themselves to the most{" "}
            <em className="italic">meaningful work of their lives.</em>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
