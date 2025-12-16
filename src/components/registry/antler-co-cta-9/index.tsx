"use client";

// ============================================================================
// CUSTOMIZATION - Edit these values to customize the component for your project
// ============================================================================

const COLORS = {
  light: {
    background: "#F5F0E8",
    cardBg: "#B5443A",
    text: "#ffffff",
    textMuted: "rgba(255, 255, 255, 0.8)",
    buttonBg: "#1a1a1a",
    buttonHover: "#333333",
  },
  dark: {
    background: "#0a0a0a",
    cardBg: "#B5443A",
    text: "#ffffff",
    textMuted: "rgba(255, 255, 255, 0.8)",
    buttonBg: "#1a1a1a",
    buttonHover: "#333333",
  },
} as const;

const IMAGES = {
  community: {
    path: "/scraped/antler-co-2025-12-15/images/image-67.jpg",
    alt: "Antler community members collaborating",
    prompt: "Group of professionals collaborating around a laptop, diverse team, casual professional setting, natural lighting",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface AntlerCoCta9Props {
  mode?: "light" | "dark";
}

export default function AntlerCoCta9({
  mode = "light",
}: AntlerCoCta9Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="rounded-2xl overflow-hidden"
          style={{ backgroundColor: colors.cardBg }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Content */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-light mb-4"
                style={{ color: colors.text }}
              >
                Antler insights delivered to your inbox
              </h2>
              <p
                className="text-base md:text-lg mb-8"
                style={{ color: colors.textMuted }}
              >
                Get the latest news and views from Antler&apos;s global community.
              </p>
              <motion.a
                href="#newsletter"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-medium transition-colors w-fit"
                style={{ backgroundColor: colors.buttonBg }}
                whileHover={{ backgroundColor: colors.buttonHover }}
              >
                Sign up to our newsletter
              </motion.a>
            </div>

            {/* Image */}
            <div className="relative h-64 lg:h-auto">
              <div className="absolute inset-0 lg:inset-4 lg:right-8 lg:top-8 lg:bottom-8 rounded-xl overflow-hidden">
                <img
                  src={IMAGES.community.path}
                  alt={IMAGES.community.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
