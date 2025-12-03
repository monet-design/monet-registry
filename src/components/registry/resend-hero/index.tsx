"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#000000",          // 블랙 배경
    badge: "#18191B",               // 다크 그레이 배경
    badgeBorder: "#3E4044",         // 미드 그레이 보더
  },
} as const;

const IMAGES = {
  cube: {
    path: "/registry/resend-hero/cube.png",
    alt: "3D wireframe cube illustration",
    prompt: `3D wireframe cube with geometric grid pattern.
Style: Minimalist 3D rendering, technical illustration, sci-fi aesthetic
Layout: Centered isometric cube with visible wireframe structure
Composition: Semi-transparent cube showing internal grid lines and structure
Color palette: Black background with white/light gray wireframe lines
Elements: Geometric grid, wireframe edges, isometric perspective
Mood: Technical, modern, developer-focused, clean
Technical: Transparent PNG, high contrast, minimalist 3D wireframe`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface ResendHeroProps {
  mode?: "light";
  logoText?: string;
  navItems?: NavItem[];
  badgeText?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  description?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  signInText?: string;
  getStartedText?: string;
  backerText?: string;
  backerName?: string;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

// Logo SVG Component
function ResendLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 4h10c3.866 0 7 3.134 7 7s-3.134 7-7 7H3V4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 11h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 11l7 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Y Combinator Logo
function YCLogo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex h-5 w-5 items-center justify-center rounded bg-[#F26522] ${className}`}
    >
      <span className="text-xs font-bold text-white">Y</span>
    </div>
  );
}

// Default navigation items
const defaultNavItems: NavItem[] = [
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Customers", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Enterprise", href: "#" },
  { label: "Changelog", href: "#" },
  { label: "Docs", href: "#" },
];

// Header Component
function Header({
  logoText,
  navItems,
  signInText,
  getStartedText,
}: {
  logoText: string;
  navItems: NavItem[];
  signInText: string;
  getStartedText: string;
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between px-6 py-4 lg:px-12"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <ResendLogo className="h-5 w-5 text-white" />
        <span className="text-[15px] font-medium text-white">{logoText}</span>
      </div>

      {/* Navigation */}
      <nav className="hidden items-center gap-6 lg:flex">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-[13px] text-[#737373] transition-colors hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4">
        <button className="hidden text-[13px] text-white transition-colors hover:text-[#a0a0a0] sm:block">
          {signInText}
        </button>
        <button className="flex items-center gap-1 rounded-lg bg-white px-3.5 py-1.5 text-[13px] font-medium text-black transition-colors hover:bg-[#e0e0e0]">
          {getStartedText}
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </motion.header>
  );
}

// Main Component
export default function ResendHero({
  mode = "light",
  logoText = "Resend",
  navItems = defaultNavItems,
  badgeText = "Resend raises $3M seed round",
  headlineLine1 = "Email for",
  headlineLine2 = "developers",
  description = "The best API to reach humans instead of spam folders.\nBuild, test, and deliver transactional emails at scale.",
  primaryCtaText = "Get Started",
  secondaryCtaText = "Documentation",
  signInText = "Sign in",
  getStartedText = "Get Started",
  backerText = "Backed by",
  backerName = "Combinator",
  onPrimaryCtaClick = () => {},
  onSecondaryCtaClick = () => {},
}: ResendHeroProps) {
  const colors = COLORS[mode];

  return (
    <section className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: colors.background }}>
      {/* Header */}
      <Header
        logoText={logoText}
        navItems={navItems}
        signInText={signInText}
        getStartedText={getStartedText}
      />

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-16 lg:px-12 lg:pt-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* Left Content */}
          <div className="relative z-10 max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 transition-colors hover:border-[#505358]"
                style={{ borderColor: colors.badgeBorder, backgroundColor: colors.badge }}
              >
                <span className="text-[13px] text-[#C4C4C4]">{badgeText}</span>
                <ChevronRight className="h-3.5 w-3.5 text-[#737373]" />
              </a>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 text-[3.5rem] font-light leading-[1.1] tracking-tight text-white sm:text-[4.5rem] lg:text-[5.5rem]"
            >
              {headlineLine1}
              <br />
              {headlineLine2}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 whitespace-pre-line text-base leading-relaxed text-[#737373]"
            >
              {description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onPrimaryCtaClick}
                className="flex items-center gap-1.5 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[#e0e0e0]"
              >
                {primaryCtaText}
                <ChevronRight className="h-4 w-4" />
              </button>
              <button
                onClick={onSecondaryCtaClick}
                className="flex items-center gap-1.5 text-sm text-white transition-colors hover:text-[#a0a0a0]"
              >
                {secondaryCtaText}
                <ChevronRight className="h-4 w-4" />
              </button>
            </motion.div>
          </div>

          {/* Right Content - 3D Cube */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-12 lg:mt-0 lg:w-1/2"
          >
            <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg">
              <Image
                src={IMAGES.cube.path}
                alt={IMAGES.cube.alt}
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Backed By Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 flex items-center justify-center gap-2 pb-12 lg:mt-32"
        >
          <span className="text-[13px] text-[#454545]">{backerText}</span>
          <YCLogo />
          <span className="text-[13px] font-medium text-white">
            {backerName}
          </span>
        </motion.div>
      </div>

      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
    </section>
  );
}
