"use client";

// ============================================================================
// CUSTOMIZATION - Edit these values to customize the component for your project
// ============================================================================

const COLORS = {
  light: {
    background: "#ffffff",
    text: "#1a1a1a",
    textMuted: "#6b7280",
    accent: "#E85C4A",
    accentHover: "#D14836",
  },
  dark: {
    background: "#0a0a0a",
    text: "#f5f5f5",
    textMuted: "#9ca3af",
    accent: "#E85C4A",
    accentHover: "#D14836",
  },
} as const;

const IMAGES = {
  elevate: {
    path: "/scraped/antler-co-2025-12-15/images/image-42.avif",
    alt: "Founders in discussion at Antler event",
    prompt: "Female founder explaining concept to diverse group of investors, professional setting, engaged conversation, dark background",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface AntlerCoFeature6Props {
  mode?: "light" | "dark";
}

export default function AntlerCoFeature6({
  mode = "light",
}: AntlerCoFeature6Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={IMAGES.elevate.path}
                alt={IMAGES.elevate.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6"
              style={{ color: colors.text }}
            >
              Antler Elevate, scale-up capital{" "}
              <em className="italic">from Series A</em>
            </h2>
            <p
              className="text-base md:text-lg mb-8 max-w-lg"
              style={{ color: colors.textMuted }}
            >
              Our emerging growth fund, Antler Elevate, provides scale-up capital
              from Series A onwards to propel the next generation of remarkable
              founders on their paths to greatness.
            </p>
            <motion.a
              href="#learn-more"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-colors"
              style={{ backgroundColor: colors.accent }}
              whileHover={{ backgroundColor: colors.accentHover }}
            >
              Learn more
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
