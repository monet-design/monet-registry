"use client";

import "./font.css";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#19141a",
    text: "#ffffff",
    textMuted: "#9ca3af",
    buttonPrimary: "#ffffff",
    buttonPrimaryText: "#19141a",
    buttonSecondary: "transparent",
    buttonSecondaryBorder: "rgba(255, 255, 255, 0.3)",
  },
  dark: {
    background: "#19141a",
    text: "#ffffff",
    textMuted: "#9ca3af",
    buttonPrimary: "#ffffff",
    buttonPrimaryText: "#19141a",
    buttonSecondary: "transparent",
    buttonSecondaryBorder: "rgba(255, 255, 255, 0.3)",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

// Types
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface LogoItem {
  name: string;
  href?: string;
}

interface FinAiHeroProps {
  mode?: "light" | "dark";
  navItems?: NavItem[];
  rightNavItems?: { label: string; href: string }[];
  headline?: string;
  subheadlines?: string[];
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  logos?: LogoItem[];
}

// Fin AI Spark Logo (8-pointed star)
function SparkLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16 0L18.5 13.5L32 16L18.5 18.5L16 32L13.5 18.5L0 16L13.5 13.5L16 0Z"
        fill="currentColor"
      />
      <path
        d="M16 6L17.5 14.5L26 16L17.5 17.5L16 26L14.5 17.5L6 16L14.5 14.5L16 6Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "Product", href: "#", hasDropdown: true },
  { label: "AI Technology", href: "#", hasDropdown: true },
  { label: "Customers", href: "#" },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Pricing", href: "#" },
];

const defaultRightNavItems = [
  { label: "Contact sales", href: "#" },
  { label: "Sign in", href: "#" },
  { label: "View demo", href: "#" },
];

const defaultLogos: LogoItem[] = [
  { name: "Amplitude" },
  { name: "Synthesia" },
  { name: "LaunchDarkly" },
  { name: "Coda" },
  { name: "Shutterstock" },
  { name: "Lovable" },
];

// Gradient background with glow effect
function GlowBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base dark gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #19141a 0%, #1e1820 30%, #2d2028 60%, #19141a 100%)",
        }}
      />

      {/* Central glow effect */}
      <div
        className="absolute left-1/2 top-[60%] -translate-x-1/2 w-[120%] h-[60%]"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(255, 140, 100, 0.15) 0%, rgba(180, 100, 120, 0.08) 40%, transparent 70%)",
        }}
      />

      {/* Secondary glow */}
      <div
        className="absolute left-1/2 top-[70%] -translate-x-1/2 w-[80%] h-[40%]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200, 120, 100, 0.1) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}

export default function FinAiHero({
  mode = "dark",
  navItems = defaultNavItems,
  rightNavItems = defaultRightNavItems,
  headline = "The #1 AI Agent\nfor customer service",
  subheadlines = [
    "#1 IN PERFORMANCE BENCHMARKS",
    "#1 IN COMPETITIVE BAKE-OFFS",
    "#1 RANKING ON G2",
  ],
  primaryCta = { text: "Start free trial", href: "#" },
  secondaryCta = { text: "View demo", href: "#" },
  logos = defaultLogos,
}: FinAiHeroProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Background */}
      <GlowBackground />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        {/* Left: Logo + Nav Items */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <SparkLogo className="w-6 h-6 text-white" />
            <ChevronDown className="w-4 h-4 text-white/60" />
          </a>

          {/* Separator */}
          <div className="hidden lg:block w-px h-5 bg-white/20" />

          {/* Nav Items */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Right Nav Items */}
        <div className="flex items-center gap-6">
          {rightNavItems.slice(0, -1).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hidden sm:block text-sm text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={rightNavItems[rightNavItems.length - 1]?.href || "#"}
            className="text-sm text-white bg-white/10 hover:bg-white/15 px-4 py-2 rounded-full transition-colors"
          >
            {rightNavItems[rightNavItems.length - 1]?.label || "Start free trial"}
          </a>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 pt-16 pb-8 sm:pt-24 lg:pt-28">
        {/* Spark Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <SparkLogo className="w-12 h-12 sm:w-14 sm:h-14 text-white" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic leading-[1.1] tracking-tight mb-8"
          style={{
            color: colors.text,
            fontFamily: "'Instrument Serif', Georgia, serif",
          }}
        >
          {headline.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < headline.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.h1>

        {/* Subheadlines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-10"
        >
          {subheadlines.map((text, i) => (
            <span
              key={i}
              className="text-xs sm:text-sm tracking-[0.2em] uppercase"
              style={{ color: colors.textMuted }}
            >
              {text}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href={primaryCta.href}
            className="px-6 py-3 text-sm font-medium rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{
              backgroundColor: colors.buttonPrimary,
              color: colors.buttonPrimaryText,
            }}
          >
            {primaryCta.text}
          </a>
          <a
            href={secondaryCta.href}
            className="px-6 py-3 text-sm font-medium rounded-full border transition-all duration-200 hover:bg-white/5"
            style={{
              backgroundColor: colors.buttonSecondary,
              color: colors.text,
              borderColor: colors.buttonSecondaryBorder,
            }}
          >
            {secondaryCta.text}
          </a>
        </motion.div>

        {/* Logo Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-4xl mx-auto overflow-hidden"
        >
          <div className="flex items-center justify-center gap-8 sm:gap-12 lg:gap-16 flex-wrap">
            {logos.map((logo, i) => (
              <span
                key={i}
                className="text-base sm:text-lg font-medium tracking-wide whitespace-nowrap"
                style={{
                  color: i % 2 === 0 ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.7)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {logo.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
