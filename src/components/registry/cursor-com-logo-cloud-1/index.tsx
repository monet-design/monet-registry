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
    border: "#E5E5E5",
  },
  dark: {
    bg: "#0A0A0A",
    cardBg: "#1A1A1A",
    text: "#E4E4E4",
    textSecondary: "#9CA3AF",
    border: "#2A2A2A",
  },
} as const;

const LOGOS = [
  {
    name: "Stripe",
    lightSrc: "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/logos/stripe-logo.svg",
    darkSrc: "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/misc/asset-beae7a1f5d7eb381a872.svg",
  },
  {
    name: "OpenAI",
    lightSrc: "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/logos/openai-logo.svg",
    darkSrc: "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/misc/asset-53062f7690ae5b0cdbed.svg",
  },
  {
    name: "Linear",
    lightSrc: "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/logos/linear-logo.svg",
    darkSrc: "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/misc/asset-eb9e0a5931092d4db1dd.svg",
  },
  {
    name: "Datadog",
    lightSrc: "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/logos/datadog-logo.svg",
    darkSrc: "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/misc/asset-da55192921531e5fd2ba.svg",
  },
  {
    name: "NVIDIA",
    lightSrc: "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/logos/nvidia-logo.svg",
    darkSrc: "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/misc/asset-e3678011b17782740f98.svg",
  },
  {
    name: "Figma",
    lightSrc: "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/logos/figma-logo.svg",
    darkSrc: "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/misc/asset-105275382af564c3ab7c.svg",
  },
  {
    name: "Ramp",
    lightSrc: "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/logos/ramp-logo.svg",
    darkSrc: "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/misc/asset-cf60827b1c3f341d19ef.svg",
  },
  {
    name: "Adobe",
    lightSrc: "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/logos/adobe-logo.svg",
    darkSrc: "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/misc/asset-37d2d1a1edcce15ca38c.svg",
  },
] as const;

// ============================================================================

import { motion } from "motion/react";

interface CursorComLogoCloud1Props {
  mode?: "light" | "dark";
}

export default function CursorComLogoCloud1({
  mode = "dark",
}: CursorComLogoCloud1Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className="w-full pb-4 pt-0"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="container mx-auto px-4 text-center md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm"
          style={{ color: colors.textSecondary }}
        >
          Trusted every day by millions of professional developers.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-4 gap-2 md:grid-cols-8"
        >
          {LOGOS.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative flex items-center justify-center"
            >
              <div
                className="flex h-16 w-full items-center justify-center rounded-md px-3 sm:h-[4.5rem] md:h-[6.25rem]"
                style={{
                  backgroundColor: colors.cardBg,
                  border: `1px solid ${colors.border}`,
                }}
              >
                {/* Light mode logo */}
                <img
                  src={logo.lightSrc}
                  alt={logo.name}
                  loading="lazy"
                  width={200}
                  height={100}
                  className="h-8 w-auto object-contain sm:h-9 md:h-10"
                  style={{ display: isDark ? "none" : "block" }}
                />
                {/* Dark mode logo */}
                <img
                  src={logo.darkSrc}
                  alt={logo.name}
                  loading="lazy"
                  width={200}
                  height={100}
                  className="h-8 w-auto object-contain sm:h-9 md:h-10"
                  style={{ display: isDark ? "block" : "none" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
