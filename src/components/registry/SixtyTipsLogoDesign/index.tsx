"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#ECECEC",
    titleText: "#5F5548",
    bodyText: "#888888",
    heartDots: "#C1C1C1",
  },
  dark: {
    background: "#1a1a1a",
    titleText: "#c4b5a3",
    bodyText: "#a8a8a8",
    heartDots: "#6a6a6a",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface SixtyTipsLogoDesignProps {
  mode?: "light" | "dark";
  avatarSrc?: string;
  authorName?: string;
  tagline?: string;
  description?: string;
  additionalText?: string;
}

function DottedHeart({ className, color }: { className?: string; color: string }) {
  return (
    <svg
      viewBox="0 0 64 56"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Create dotted heart pattern */}
      <g fill={color}>
        {/* Top left curve dots */}
        <circle cx="16" cy="12" r="1.5" />
        <circle cx="12" cy="16" r="1.5" />
        <circle cx="10" cy="22" r="1.5" />
        <circle cx="10" cy="28" r="1.5" />
        <circle cx="12" cy="34" r="1.5" />
        <circle cx="16" cy="38" r="1.5" />
        <circle cx="20" cy="8" r="1.5" />
        <circle cx="26" cy="6" r="1.5" />

        {/* Top right curve dots */}
        <circle cx="48" cy="12" r="1.5" />
        <circle cx="52" cy="16" r="1.5" />
        <circle cx="54" cy="22" r="1.5" />
        <circle cx="54" cy="28" r="1.5" />
        <circle cx="52" cy="34" r="1.5" />
        <circle cx="48" cy="38" r="1.5" />
        <circle cx="44" cy="8" r="1.5" />
        <circle cx="38" cy="6" r="1.5" />

        {/* Center top dip */}
        <circle cx="32" cy="10" r="1.5" />

        {/* Bottom V shape */}
        <circle cx="22" cy="42" r="1.5" />
        <circle cx="26" cy="46" r="1.5" />
        <circle cx="30" cy="50" r="1.5" />
        <circle cx="32" cy="52" r="1.5" />
        <circle cx="34" cy="50" r="1.5" />
        <circle cx="38" cy="46" r="1.5" />
        <circle cx="42" cy="42" r="1.5" />
      </g>
    </svg>
  );
}

export default function SixtyTipsLogoDesign({
  mode = "light",
  avatarSrc = "https://picsum.photos/seed/galshir/200/200",
  authorName = "Gal Shir",
  tagline = "is a brand design specialist creating logos since 2010",
  description = "Slow-cooked over a year, this book is a culmination of everything I've learned about logo design through my 15-year career. It's a hands-on guide created to help you become a successful logo designer and make a living doing a fulfilling and meaningful work. In it, you'll find step-by-step instructions, clear explanations, and plenty of examples. Whether you're just starting out or looking to sharpen your craft, this book will inspire, motivate, and provide you with everything you need to take your logo design skills to the next level.",
  additionalText = "In this book, you'll find step-by-step instructions, clear explanations, and plenty of examples. Whether you're just starting out or looking to sharpen your craft, this book will inspire, motivate, and provide you with everything you need to take your logo design skills to the next level.",
}: SixtyTipsLogoDesignProps) {
  const colors = COLORS[mode];

  return (
    <section className="w-full px-6 py-16 sm:px-8 lg:px-12" style={{ backgroundColor: colors.background }}>
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8 h-20 w-20 overflow-hidden rounded-full"
          >
            <Image
              src={avatarSrc}
              alt={authorName}
              fill
              className="object-cover"
              sizes="80px"
            />
          </motion.div>

          {/* Title / Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-lg font-medium tracking-tight sm:text-xl"
            style={{ color: colors.titleText }}
          >
            <span className="font-semibold">{authorName}</span> {tagline}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 text-xs leading-relaxed sm:text-sm"
            style={{ color: colors.bodyText }}
          >
            {description}
          </motion.p>

          {/* Additional Text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10 text-xs leading-relaxed sm:text-sm"
            style={{ color: colors.bodyText }}
          >
            {additionalText}
          </motion.p>

          {/* Dotted Heart Icon */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <DottedHeart className="h-12 w-14" color={colors.heartDots} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
