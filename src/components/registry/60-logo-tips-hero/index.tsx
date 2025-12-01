"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#EBEBEB",
    accent: "#EF6C35",
    heading: "#1a1a1a",
    description: "#4a4a4a",
    iconText: "#2f2f2f",
    featureDescription: "#5a5a5a",
  },
  dark: {
    background: "#1a1a1a",
    accent: "#FF7A45",
    heading: "#ffffff",
    description: "#b4b4b4",
    iconText: "#e0e0e0",
    featureDescription: "#a0a0a0",
  },
} as const;

const IMAGES = {
  bookCover: {
    path: "/beautiful-sections/60-logo-tips-hero/book-cover.png",
    alt: "60 Tips for Logo Design Book Cover",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  User,
  Search,
  PenTool,
  Sparkles,
  Palette,
  Type,
  FlaskConical,
  Star,
} from "lucide-react";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  hasBonus?: boolean;
}

interface LogoTipsHeroProps {
  mode?: "light" | "dark";
  authorName?: string;
  bookNumber?: string;
  bookSubtitle?: string;
  bookImageSrc?: string;
  mainTitle?: string;
  highlightedTitle?: string;
  description?: React.ReactNode;
  features?: FeatureItem[];
}

const defaultFeatures: FeatureItem[] = [
  {
    icon: <User className="w-10 h-10" />,
    title: "PREPARING",
    description:
      "Understanding the purpose of a logo to set yourself for success",
  },
  {
    icon: <Search className="w-10 h-10" />,
    title: "RESEARCHING",
    description:
      "Learning the right stuff about the brand to ensure a successful process",
  },
  {
    icon: <PenTool className="w-10 h-10" />,
    title: "SKETCHING",
    description:
      "Coming up with ideas and finding relevant concepts and associations",
  },
  {
    icon: <Sparkles className="w-10 h-10" />,
    title: "POLISHING",
    description:
      "Cleaning, simplifying, and polishing a sketch to a pixel-perfect logo",
  },
  {
    icon: <Palette className="w-10 h-10" />,
    title: "CHARACTERIZING",
    description:
      "Matching the right colors, shapes, and weights to add personality to the logo",
  },
  {
    icon: <Type className="w-10 h-10" />,
    title: "LETTERING",
    description:
      "Choosing and customizing a wordmark that matches the logo and the brand",
    hasBonus: true,
  },
  {
    icon: <FlaskConical className="w-10 h-10" />,
    title: "TESTING",
    description:
      "Making sure everything looks neat in all contexts and sizes",
  },
  {
    icon: <Star className="w-10 h-10" />,
    title: "PRESENTING",
    description:
      "Showcasing the logo in all its glory in a way clients can't reject",
  },
];

export default function LogoTipsHero({
  mode = "light",
  authorName = "GAL SHIR",
  bookNumber = "60",
  bookSubtitle = "Tips for Logo Design",
  bookImageSrc = IMAGES.bookCover.path,
  mainTitle = "Start creating logos that sell",
  highlightedTitle = "60 Tips for Logo Design",
  description,
  features = defaultFeatures,
}: LogoTipsHeroProps) {
  const colors = COLORS[mode];
  const defaultDescription = (
    <>
      <strong>{highlightedTitle}</strong> is a practical guide to creating logos
      that
      <br className="hidden sm:inline" />
      win clients. From first sketch to final presentation, it walks you
      <br className="hidden sm:inline" />
      through every step of the process.
    </>
  );

  return (
    <section
      className="w-full py-16 md:py-24 px-4"
      style={{ backgroundColor: colors.background, fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Book Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center mb-12 md:mb-16"
        >
          <div className="relative">
            <Image
              src={bookImageSrc}
              alt={`${bookNumber} ${bookSubtitle} by ${authorName}`}
              width={280}
              height={373}
              className="drop-shadow-2xl"
            />
            {/* NEW Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5, type: "spring" }}
              className="absolute -top-2 -right-4 md:-right-6 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-semibold shadow-lg"
              style={{ backgroundColor: colors.accent }}
            >
              NEW
            </motion.div>
          </div>
        </motion.div>

        {/* Main Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: colors.heading }}>
            {mainTitle}
          </h1>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: colors.description }}>
            {description || defaultDescription}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-3" style={{ color: colors.iconText }}>{feature.icon}</div>

              {/* Title with optional bonus badge */}
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xs md:text-sm font-bold tracking-wider" style={{ color: colors.iconText }}>
                  {feature.title}
                </h3>
                {feature.hasBonus && (
                  <span
                    className="text-[10px] font-bold text-white px-2 py-0.5 rounded"
                    style={{ backgroundColor: colors.accent }}
                  >
                    BONUS
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs md:text-sm leading-relaxed max-w-[200px]" style={{ color: colors.featureDescription }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
