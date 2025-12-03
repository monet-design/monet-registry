"use client";

import { motion } from "motion/react";
import { Pencil } from "lucide-react";
import Image from "next/image";
import "./font.css";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#F4F3EF",       // 브랜드 베이지 배경색
    variantBlue: "#4B4B9E",      // 블루 색상 변형
    variantOlive: "#5C6B3A",     // 올리브 색상 변형
    variantBlack: "#1E1E2E",     // 블랙 색상 변형
  },
  dark: {
    background: "#1A1A1A",
    variantBlue: "#6B6BC0",
    variantOlive: "#7A8B5A",
    variantBlack: "#2E2E3E",
  },
} as const;

const IMAGES = {
  pattern: {
    path: "/registry/rarity-feature-card/geometric-pattern.png",
    alt: "Geometric pattern",
    prompt: `Abstract geometric pattern with interconnected nodes and lines.
Style: Minimalist, technical, network-like structure
Layout: Centered, symmetrical arrangement
Composition: Multiple circular nodes connected by straight lines forming a web
Color palette: Monochromatic, neutral tones
Mood: Technical, precise, mathematical
Technical: Vector-style graphics, clean lines, transparent background friendly`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface ColorVariant {
  name: string;
  color: string;
  isActive?: boolean;
}

interface RarityFeatureCardProps {
  mode?: "light" | "dark";
  title?: {
    prefix?: string;
    highlight1?: string;
    middle?: string;
    highlight2?: string;
  };
  rarityLabel?: string;
  variantName?: string;
  description?: React.ReactNode;
  colorVariants?: ColorVariant[];
  patternImage?: string;
  cardLabels?: {
    left?: string;
    right?: string;
  };
}

export default function RarityFeatureCard({
  mode = "light",
  title = {
    prefix: "Rarity for the",
    highlight1: "early",
    middle: "and the",
    highlight2: "lucky.",
  },
  rarityLabel = "1 in 1,000",
  variantName = "Black",
  description = (
    <>
      The unicorn <em>pfpid</em>. Every pfpid that&apos;s minted has a 1 in
      <br />
      1,000 chance of inheriting the special edition <em>Black</em> variant.
      <br />
      Looks rare.
    </>
  ),
  colorVariants = [
    { name: "Blue", color: COLORS.light.variantBlue, isActive: false },
    { name: "Olive", color: COLORS.light.variantOlive, isActive: false },
    { name: "Black", color: COLORS.light.variantBlack, isActive: true },
  ],
  patternImage = IMAGES.pattern.path,
  cardLabels = {
    left: "PFPID",
    right: "10",
  },
}: RarityFeatureCardProps) {
  const colors = COLORS[mode];
  return (
    <section
      className="flex min-h-[600px] w-full flex-col items-center justify-center px-6 py-16"
      style={{ backgroundColor: colors.background }}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-playfair mb-12 text-center text-3xl leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
      >
        {title.prefix}
        <br />
        <em className="font-playfair italic">{title.highlight1}</em> {title.middle}
        <br />
        <em className="font-playfair italic">{title.highlight2}</em>
      </motion.h2>

      {/* Card with background effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative mb-10 isolate"
      >
        {/* Background blur effect */}
        <div
          className="absolute -inset-16 z-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 100% at center, rgba(30, 30, 30, 0.5) 0%, rgba(80, 80, 80, 0.25) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Main Card */}
        <div
          className="relative z-10 overflow-hidden rounded-lg border border-gray-600/30"
          style={{
            backgroundColor: "rgba(45, 45, 45, 0.95)",
            width: "280px",
            height: "180px",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Card Header */}
          <div className="flex items-center justify-between border-b border-gray-500/30 px-3 py-2">
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-medium tracking-widest text-gray-300">
                {cardLabels.left}
              </span>
              <span className="text-[10px] font-medium text-gray-400">
                {cardLabels.right}
              </span>
            </div>
            <button className="rounded p-1 text-gray-400 transition-colors hover:bg-gray-700/50 hover:text-gray-200">
              <Pencil size={12} />
            </button>
          </div>

          {/* Corner dots */}
          <div className="absolute bottom-3 left-3 h-1 w-1 rounded-full bg-gray-500/40" />
          <div className="absolute right-3 top-12 h-1 w-1 rounded-full bg-gray-500/40" />

          {/* Geometric Pattern */}
          <div className="flex h-[calc(100%-36px)] items-center justify-center">
            <div className="relative h-20 w-20 opacity-50">
              <Image
                src={patternImage}
                alt={IMAGES.pattern.alt}
                fill
                className="object-contain"
                style={{ filter: "brightness(0.8) sepia(0.2)" }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Rarity Label */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="font-playfair mb-2 text-sm italic text-gray-500"
      >
        {rarityLabel}
      </motion.p>

      {/* Variant Name */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="font-playfair mb-3 text-2xl font-medium text-gray-900"
      >
        {variantName}
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-6 max-w-sm text-center text-xs leading-relaxed text-gray-600"
      >
        {description}
      </motion.p>

      {/* Color Variants */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="flex items-center gap-3"
      >
        {colorVariants.map((variant) => (
          <button
            key={variant.name}
            className={`h-4 w-4 rounded-full transition-all hover:scale-110 ${
              variant.isActive
                ? "ring-2 ring-gray-400 ring-offset-2"
                : ""
            }`}
            style={{
              backgroundColor: variant.color,
              "--tw-ring-offset-color": "#F4F3EF",
            } as React.CSSProperties}
            title={variant.name}
            aria-label={`Select ${variant.name} variant`}
          />
        ))}
      </motion.div>
    </section>
  );
}
