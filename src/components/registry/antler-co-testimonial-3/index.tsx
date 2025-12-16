"use client";

// ============================================================================
// CUSTOMIZATION - Edit these values to customize the component for your project
// ============================================================================

const COLORS = {
  light: {
    background: "#F5F0E8",
    text: "#1a1a1a",
    textMuted: "#6b7280",
  },
  dark: {
    background: "#1a1a1a",
    text: "#f5f5f5",
    textMuted: "#9ca3af",
  },
} as const;

const IMAGES = {
  logo: {
    path: "/scraped/antler-co-2025-12-15/images/image-22.avif",
    alt: "Airalo logo",
    prompt: "Airalo company logo, colorful gradient bars forming a chart pattern",
  },
  avatar: {
    path: "/scraped/antler-co-2025-12-15/images/image-23.avif",
    alt: "Bahadir Ozdemir portrait",
    prompt: "Professional headshot of a male founder, bald with beard, confident expression, red background",
  },
} as const;

const TESTIMONIAL = {
  quote: "Joining Antler wasn't just about funding; it was about surrounding ourselves with people who see potential, take risks, and build. There's a big chance it could change your life, and I would do it all over again if I could.",
  author: "Bahadir Ozdemir",
  title: "Founder of Airalo",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface AntlerCoTestimonial3Props {
  mode?: "light" | "dark";
}

export default function AntlerCoTestimonial3({
  mode = "light",
}: AntlerCoTestimonial3Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Company Logo */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={IMAGES.logo.path}
            alt={IMAGES.logo.alt}
            className="h-8 md:h-10 mx-auto"
          />
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed"
            style={{ color: colors.text }}
          >
            <span className="font-medium">
              Joining Antler wasn&apos;t just about funding;
            </span>{" "}
            it was about surrounding ourselves with people who see potential, take
            risks, and build. There&apos;s a big chance it could change your life, and I
            would do it all over again if I could.
          </p>
        </motion.blockquote>

        {/* Author */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden bg-red-500">
            <img
              src={IMAGES.avatar.path}
              alt={IMAGES.avatar.alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <p
              className="font-medium text-base md:text-lg"
              style={{ color: colors.text }}
            >
              {TESTIMONIAL.author}
            </p>
            <p
              className="text-sm md:text-base"
              style={{ color: colors.textMuted }}
            >
              {TESTIMONIAL.title}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
