"use client";

// ============================================================================
// CUSTOMIZATION - Edit these values to customize the component for your project
// ============================================================================

const COLORS = {
  light: {
    background: "#1E3A3A",
    text: "#ffffff",
    textMuted: "rgba(255, 255, 255, 0.7)",
    accent: "#E85C4A",
    accentHover: "#D14836",
  },
  dark: {
    background: "#1E3A3A",
    text: "#ffffff",
    textMuted: "rgba(255, 255, 255, 0.7)",
    accent: "#E85C4A",
    accentHover: "#D14836",
  },
} as const;

const IMAGES = {
  investors: {
    path: "/scraped/antler-co-2025-12-15/images/image-23.avif",
    alt: "Investors at Antler event",
    prompt: "Two professional investors seated at a panel discussion, corporate event setting, branded backdrop with Deel and Nscale logos",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface AntlerCoFeature4Props {
  mode?: "light" | "dark";
}

export default function AntlerCoFeature4({
  mode = "light",
}: AntlerCoFeature4Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6"
              style={{ color: colors.text }}
            >
              Partner with the world&apos;s{" "}
              <em className="italic">most active AI investor</em>
            </h2>
            <p
              className="text-base md:text-lg mb-8 max-w-lg"
              style={{ color: colors.textMuted }}
            >
              Investing at inception-stage means entering at lower valuations with
              higher return potential. We spend hundreds of hours with founders
              assessing their skills.
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

          {/* Image */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={IMAGES.investors.path}
                alt={IMAGES.investors.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
