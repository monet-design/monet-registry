"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#ffffff",
    sectionTitle: "#9A9A9A",
    text: "#333333",
    link: "#E85A24",
  },
  dark: {
    background: "#1a1a1a",
    sectionTitle: "#B0B0B0",
    text: "#e0e0e0",
    link: "#FF7A4A",
  },
} as const;

const IMAGES = {
  profile: {
    path: "https://picsum.photos/seed/fedorshkliarau/400/400",
    alt: "Author profile photo",
    prompt: `Professional portfolio author portrait photo, square format.
Style: Clean, minimal, artistic professional aesthetic
Composition: Portrait headshot or upper body shot, neutral background
Treatment: Applied grayscale filter for artistic effect
Mood: Professional, thoughtful, creative
Technical: High quality, square 1:1 aspect ratio, will be displayed with grayscale filter`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

interface PortfolioFinalFinal2023Props {
  mode?: "light" | "dark";
  sectionTitle?: string;
  authorName?: string;
  profileImage?: string;
  yearsOfExperience?: number;
  profession?: string;
  portfolioLinkText?: string;
  portfolioLinkHref?: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
  companies?: string[];
}

export default function PortfolioFinalFinal2023({
  mode = "light",
  sectionTitle = "About the author",
  authorName = "Fedor Shkliarau",
  profileImage = IMAGES.profile.path,
  yearsOfExperience = 11,
  profession = "product designer",
  portfolioLinkText = "portfolio",
  portfolioLinkHref = "#",
  paragraph1,
  paragraph2,
  paragraph3,
  companies = ["Twitter", "AmEx", "adidas", "HSBC", "Mercedes-Benz", "Blinkist", "IKEA"],
}: PortfolioFinalFinal2023Props) {
  const defaultParagraph1 = `${authorName} is a ${profession} with ${yearsOfExperience} years of industry experience.`;

  const defaultParagraph2Parts = {
    before: "Every new version of his ",
    after: " has helped achieve different goals: landing an internship, a full-time job, and in the last 3 years, getting clients for his consulting business.",
  };

  const defaultParagraph3 = `He has worked with companies like ${companies.join(", ")}.`;

  const colors = COLORS[mode];

  return (
    <section
      className="w-full px-6 py-16 sm:px-8 lg:px-12"
      style={{ fontFamily: "'Inter', sans-serif", backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          {/* Left Column - Title and Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 md:w-[200px] shrink-0"
          >
            {/* Section Title */}
            <h2
              className="text-2xl md:text-[26px] tracking-[-0.01em]"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
                color: colors.sectionTitle,
              }}
            >
              {sectionTitle}
            </h2>

            {/* Profile Image */}
            <div className="w-full max-w-[180px] aspect-square overflow-hidden">
              <Image
                src={profileImage}
                alt={authorName}
                width={180}
                height={180}
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 space-y-5"
          >
            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-[15px] leading-[1.6] tracking-[-0.01em]"
              style={{ color: colors.text }}
            >
              {paragraph1 || defaultParagraph1}
            </motion.p>

            {/* Paragraph 2 - with portfolio link */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-[15px] leading-[1.6] tracking-[-0.01em]"
              style={{ color: colors.text }}
            >
              {paragraph2 || (
                <>
                  {defaultParagraph2Parts.before}
                  <a
                    href={portfolioLinkHref}
                    className="hover:opacity-80 transition-opacity"
                    style={{ color: colors.link }}
                  >
                    {portfolioLinkText}
                  </a>
                  {defaultParagraph2Parts.after}
                </>
              )}
            </motion.p>

            {/* Paragraph 3 */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-[15px] leading-[1.6] tracking-[-0.01em]"
              style={{ color: colors.text }}
            >
              {paragraph3 || defaultParagraph3}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
