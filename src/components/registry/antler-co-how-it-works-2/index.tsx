"use client";

// ============================================================================
// CUSTOMIZATION - Edit these values to customize the component for your project
// ============================================================================

const COLORS = {
  light: {
    background: "#ffffff",
    text: "#1a1a1a",
    textMuted: "#6b7280",
  },
  dark: {
    background: "#0a0a0a",
    text: "#f5f5f5",
    textMuted: "#9ca3af",
  },
} as const;

const IMAGES = {
  residency: {
    path: "/scraped/antler-co-2025-12-15/images/image-17.avif",
    alt: "Founder working at laptop",
    prompt: "Entrepreneur working on laptop in modern co-working space, focused expression, natural lighting",
  },
  preSeed: {
    path: "/scraped/antler-co-2025-12-15/images/image-18.avif",
    alt: "Founder at Antler office",
    prompt: "Startup founder reviewing documents in professional office setting, collaborative environment",
  },
  expertise: {
    path: "/scraped/antler-co-2025-12-15/images/image-19.avif",
    alt: "VC coaching session",
    prompt: "Venture capital partner coaching startup founders, professional meeting room, engaged discussion",
  },
  scale: {
    path: "/scraped/antler-co-2025-12-15/images/image-20.avif",
    alt: "Founder speaking at event",
    prompt: "Startup founder speaking at networking event, cityscape background, confident pose",
  },
} as const;

const STEPS = [
  {
    image: IMAGES.residency,
    title: "Apply for Residency",
    description: "Work alongside exceptional people as you build your company from inception in 30+ locations across the world.",
  },
  {
    image: IMAGES.preSeed,
    title: "Pre-seed investment",
    description: "Successful founders secure their first check, and a clear funding path from pre-seed to Series C.",
  },
  {
    image: IMAGES.expertise,
    title: "Expertise & advice",
    description: "Leverage expertise and advice from Partners with deep experience at all stages of the company lifecycle.",
  },
  {
    image: IMAGES.scale,
    title: "Scale & grow",
    description: "Antler's vast network gives startups a strategic advantage, and access to a trusted global network of active investors.",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface AntlerCoHowItWorks2Props {
  mode?: "light" | "dark";
}

export default function AntlerCoHowItWorks2({
  mode = "light",
}: AntlerCoHowItWorks2Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-start md:justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight max-w-xl"
            style={{ color: colors.text }}
          >
            Step by step guide to{" "}
            <span className="italic">—Antler&apos;s methodology</span>
          </h2>
          <p
            className="text-base md:text-lg max-w-md"
            style={{ color: colors.textMuted }}
          >
            From applying to join a residency, to scaling a business — the Antler
            methodology is all about supporting exceptional founders from inception,
            with a clear funding path from pre-seed onwards.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-4 overflow-hidden rounded-xl">
                <img
                  src={step.image.path}
                  alt={step.image.alt}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3
                className="text-lg md:text-xl font-medium mb-2"
                style={{ color: colors.text }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm md:text-base"
                style={{ color: colors.textMuted }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
