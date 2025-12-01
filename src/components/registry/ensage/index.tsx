"use client";

import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface Paragraph {
  boldText: string;
  normalText: string;
}

interface EnsageProps {
  mode?: "light" | "dark";
  sectionLabel?: string;
  headline?: string;
  paragraphs?: Paragraph[];
  profileImage?: string;
  profileImageAlt?: string;
}

const defaultParagraphs: Paragraph[] = [
  {
    boldText: "For nearly two decades,",
    normalText:
      " Zlatko had designed meaningful brands, intuitive products, and engaging digital experiences for companies around the globe. From startups with visionary ideas to industry-leading organizations, Zlatko's approach remains the same: thoughtful, meticulous, and deeply collaborative.",
  },
  {
    boldText: "Ensage is intentionally boutique",
    normalText:
      "—just Zlatko, a handful of select projects each year, and his undivided attention to every detail. He believe exceptional products emerge from deep understanding, clear communication, and careful iteration. This mindful approach allows him to dive fully into each project, ensuring designs that resonate profoundly with the client's audience and achieve their strategic goals.",
  },
  {
    boldText: "Zlatko's focus is primarily on product design,",
    normalText:
      " creating digital experiences that balance beauty, functionality, and business outcomes. Branding, UX/UI, and strategic consulting naturally weave into his practice, ensuring each piece harmoniously supports the whole.",
  },
  {
    boldText: "When you partner with Ensage,",
    normalText:
      " you collaborate directly with Zlatko—from kickoff through completion. No middle managers, no layers of bureaucracy. Just dedicated, purposeful design crafted with care and intention.",
  },
];

export default function Ensage({
  mode = "light",
  sectionLabel = "ABOUT ZLATKO",
  headline = "Old-schooler. Dinosaur.\nEighteen years in the\nmaking.",
  paragraphs = defaultParagraphs,
  profileImage = "https://picsum.photos/seed/ensage-profile/400/500",
  profileImageAlt = "Profile photo",
}: EnsageProps) {
  return (
    <section className="w-full bg-[#022A32] px-6 py-16 sm:px-8 md:py-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Header and Image */}
          <div className="flex flex-col">
            {/* Section Label */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white/60"
            >
              {sectionLabel}
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="instrument-serif mb-8 whitespace-pre-line text-[2.25rem] font-normal leading-[1.15] tracking-tight text-white sm:text-[2.75rem] lg:text-[3rem]"
            >
              {headline}
            </motion.h1>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative aspect-[4/5] w-full max-w-[300px] overflow-hidden rounded-lg"
            >
              <Image
                src={profileImage}
                alt={profileImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </motion.div>
          </div>

          {/* Right Side - Body Text */}
          <div className="flex flex-col justify-start">
            <div className="space-y-5">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 * (index + 1) }}
                  className="text-[13px] leading-[1.75] text-white/85 sm:text-[14px]"
                >
                  <span className="font-semibold text-white">
                    {paragraph.boldText}
                  </span>
                  {paragraph.normalText}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
