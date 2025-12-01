"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    accent: "#D0E890",
    accentHover: "#C0D880",
  },
  dark: {
    accent: "#D0E890",
    accentHover: "#C0D880",
  },
} as const;

const IMAGES = {
  background: {
    path: "/registry/mission-lab-hero/background.jpg",
    alt: "Mission background image showing community engagement",
    prompt: `Wide-angle photograph of diverse group of volunteers working together outdoors.
Style: Natural lighting, documentary photography, authentic candid moments
Layout: Wide horizontal composition showing multiple people engaged in community work
Composition: Volunteers in casual clothing working on community project, diverse ages and backgrounds
Background: Outdoor urban setting with green space, slightly blurred background
Color palette: Natural earth tones, green vegetation, warm skin tones, soft sunlight
Mood: Uplifting, community-driven, collaborative, hopeful, energetic
Technical: High resolution, slight depth of field, natural colors, 16:9 aspect ratio`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface MissionLabHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  navItems?: { label: string; href: string }[];
  ctaText?: string;
  ctaHref?: string;
  headline?: {
    line1: { words: string[] };
    line2: { words: string[] };
  };
  backgroundImage?: string;
}

export default function MissionLabHero({
  logoText = "Mission\nLab",
  navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "MAP", href: "#map" },
    { label: "MISSIONS", href: "#missions" },
    { label: "TOOLKIT", href: "#toolkit" },
  ],
  ctaText = "GET INVOLVED",
  ctaHref = "#get-involved",
  headline = {
    line1: { words: ["Join", "a", "Mission"] },
    line2: { words: ["Make", "a", "Change"] },
  },
  backgroundImage = IMAGES.background.path,
  mode = "light",
}: MissionLabHeroProps) {
  const colors = COLORS[mode];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex items-center justify-between px-6 py-5 md:px-10"
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <LogoIcon color={colors.accent} />
          <span
            className="text-sm font-medium leading-tight whitespace-pre-line"
            style={{ color: colors.accent }}
          >
            {logoText}
          </span>
        </a>

        {/* Nav Items */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-sm font-medium tracking-wide transition-opacity hover:opacity-80"
              style={{ color: colors.accent }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={ctaHref}
            className="rounded-full px-5 py-2 text-sm font-medium text-gray-900 transition-opacity hover:opacity-90"
            style={{ backgroundColor: colors.accent }}
          >
            {ctaText}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          style={{ backgroundColor: colors.accent }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-900"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-end px-6 pb-16 md:px-10 md:pb-24">
        <div className="flex flex-col gap-2">
          {/* Line 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-2"
          >
            {headline.line1.words.map((word, index) => (
              <PillWord key={index} word={word} color={colors.accent} delay={0.3 + index * 0.1} />
            ))}
          </motion.div>

          {/* Line 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-2"
          >
            {headline.line2.words.map((word, index) => (
              <PillWord key={index} word={word} color={colors.accent} delay={0.5 + index * 0.1} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PillWord({ word, color, delay }: { word: string; color: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="inline-block rounded-full border-2 px-4 py-1 text-5xl font-bold md:px-6 md:py-2 md:text-7xl lg:text-8xl"
      style={{
        color: color,
        borderColor: color,
      }}
    >
      {word}
    </motion.span>
  );
}

function LogoIcon({ color }: { color: string }) {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Three arched shapes representing buildings/missions */}
      <path
        d="M2 24V10C2 6.68629 4.68629 4 8 4V4C11.3137 4 14 6.68629 14 10V24"
        stroke={color}
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M10 24V6C10 3.79086 11.7909 2 14 2V2C16.2091 2 18 3.79086 18 6V24"
        stroke={color}
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M18 24V10C18 6.68629 20.6863 4 24 4V4C27.3137 4 30 6.68629 30 10V24"
        stroke={color}
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
}
