"use client";

import { motion } from "motion/react";
import Image from "next/image";

// Font import for Instrument Serif (italic serif for headline)
const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
`;

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface ClayStoryHeroProps {
  mode?: "light" | "dark";
  /** Label text above the headline (e.g., "SPOTLIGHT") */
  label?: string;
  /** Date or secondary label (e.g., "JULY 2022") */
  date?: string;
  /** Main headline text */
  headline?: string;
  /** Description paragraph text */
  description?: string;
  /** Portrait image URL */
  portraitImage?: string;
  /** Alt text for portrait image */
  portraitAlt?: string;
}

export default function ClayStoryHero({
  label = "SPOTLIGHT",
  date = "JULY 2022",
  headline = "Mackey Saturday",
  description = "Mackey Saturday—Founder & CEO of renowned eponymous design studio—is well known for designing timeless visual identities for evolving brands including Instagram, Unsplash & Oculus.",
  portraitImage = "/registry/clay-story-hero/portrait.png",
  portraitAlt = "Portrait of featured person",
}: ClayStoryHeroProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: fontStyle }} />
      <section className="relative w-full min-h-screen bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-20 pb-16">
          {/* Content container */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0 lg:max-w-md xl:max-w-lg pt-4"
            >
              {/* Label and date */}
              <div className="flex items-center gap-2 mb-6">
                <span
                  className="text-xs tracking-[0.2em] text-gray-400"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {label}
                </span>
                <span className="text-gray-600">-</span>
                <span
                  className="text-xs tracking-[0.2em] text-gray-400"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {date}
                </span>
              </div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.1]"
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontStyle: "italic",
                }}
              >
                {headline}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {description}
              </motion.p>
            </motion.div>

            {/* Right side - Portrait image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-2xl aspect-[4/3] lg:aspect-auto lg:h-[500px] xl:h-[550px]">
                <Image
                  src={portraitImage}
                  alt={portraitAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
