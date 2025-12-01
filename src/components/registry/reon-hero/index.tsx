"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#FDF6ED",
    accent: "#E67491",
  },
  dark: {
    background: "#1A1A1A",
    accent: "#F08AA8",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Globe } from "lucide-react";

interface NavItem {
  label: string;
  href?: string;
}

interface ReonHeroProps {
  mode?: "light" | "dark";
  logo?: React.ReactNode;
  navItems?: NavItem[];
  tagline?: string;
  headline?: string;
  highlightedLabel?: string;
  backgroundColor?: string;
  accentColor?: string;
  onNavClick?: (label: string) => void;
}

function ReonLogo({ color = "#E67491" }: { color?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4V24H8V16H12L18 24H23L16.5 15.5C19.5 14.5 21 12 21 9C21 5 18 4 14 4H4ZM8 7H13C16 7 17 8 17 10C17 12 16 13 13 13H8V7Z"
        fill={color}
      />
    </svg>
  );
}

function DownArrow({ color = "#E67491" }: { color?: string }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 3L5 6L8 3"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const defaultNavItems: NavItem[] = [
  { label: "Services" },
  { label: "Industries" },
  { label: "Work" },
  { label: "Insights" },
  { label: "About us" },
  { label: "Contact" },
];

export default function ReonHero({
  mode = "light",
  logo,
  navItems = defaultNavItems,
  tagline = "Reon is an international\ntechnology consultancy",
  headline = "Innovating, designing,\nand building digital\nsolutions for established\nindustry players",
  highlightedLabel = "HIGHLIGHTED",
  backgroundColor,
  accentColor,
  onNavClick,
}: ReonHeroProps) {
  const colors = COLORS[mode];
  const finalBackgroundColor = backgroundColor || colors.background;
  const finalAccentColor = accentColor || colors.accent;
  return (
    <section
      className="relative min-h-[700px] w-full overflow-hidden"
      style={{ backgroundColor: finalBackgroundColor }}
    >
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full px-6 py-5 sm:px-10 lg:px-16"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            {logo || <ReonLogo color={finalAccentColor} />}
          </div>

          {/* Nav Items */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                onClick={() => onNavClick?.(item.label)}
                className="text-sm font-normal transition-opacity hover:opacity-70"
                style={{ color: finalAccentColor }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Globe Icon */}
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="transition-opacity hover:opacity-70"
            style={{ color: finalAccentColor }}
          >
            <Globe className="h-5 w-5" />
          </motion.button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 pt-16 sm:px-10 sm:pt-24 lg:px-16 lg:pt-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
          {/* Left Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-start gap-2 lg:mt-8 lg:w-48 lg:flex-shrink-0"
          >
            <DownArrow color={finalAccentColor} />
            <p className="whitespace-pre-line text-xs leading-relaxed text-neutral-700">
              {tagline}
            </p>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-instrument-serif max-w-4xl whitespace-pre-line text-4xl font-normal italic leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ color: finalAccentColor }}
          >
            {headline}
          </motion.h1>
        </div>
      </div>

      {/* Highlighted Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-32 left-6 sm:bottom-40 sm:left-10 lg:left-16"
      >
        <div className="flex items-center gap-2">
          <DownArrow color={finalAccentColor} />
          <span
            className="text-[10px] font-medium uppercase tracking-[0.15em]"
            style={{ color: finalAccentColor }}
          >
            {highlightedLabel}
          </span>
        </div>
      </motion.div>

      {/* Bottom Image Preview Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden sm:h-32"
      >
        <div className="relative mx-auto h-full max-w-5xl px-6 sm:px-10 lg:px-16">
          {/* Decorative image placeholder */}
          <div
            className="absolute left-1/2 top-0 h-full w-[90%] -translate-x-1/2 overflow-hidden rounded-t-xl"
            style={{
              background: `linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)`,
            }}
          >
            <div className="absolute inset-0 flex items-end justify-center">
              <div className="h-16 w-full bg-gradient-to-t from-white/30 to-transparent" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');

        .font-instrument-serif {
          font-family: 'Instrument Serif', serif;
        }
      `}</style>
    </section>
  );
}
