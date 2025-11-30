"use client";

import { motion } from "motion/react";
import { ChevronDown, Download } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface SketchPrototypeHeroProps {
  navItems?: NavItem[];
  signInText?: string;
  ctaButtonText?: string;
  headlinePart1?: string;
  headlineAccent?: string;
  headlinePart2?: string;
  headlinePart3?: string;
  description?: string;
  descriptionHighlight?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  bottomNote?: string;
  onSignIn?: () => void;
  onGetStarted?: () => void;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

// Sketch Diamond Logo
function SketchLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16 2L6 9L16 30L26 9L16 2Z"
        fill="#FDB300"
      />
      <path
        d="M16 2L6 9H26L16 2Z"
        fill="#EA6C00"
      />
      <path
        d="M6 9L16 30L16 2L6 9Z"
        fill="#FDAD00"
      />
      <path
        d="M26 9L16 30L16 2L26 9Z"
        fill="#FDD231"
      />
      <path
        d="M16 2L2 10L6 9L16 2Z"
        fill="#FDAD00"
      />
      <path
        d="M16 2L30 10L26 9L16 2Z"
        fill="#FDAD00"
      />
      <path
        d="M2 10L16 30L6 9L2 10Z"
        fill="#FEEEB7"
      />
      <path
        d="M30 10L16 30L26 9L30 10Z"
        fill="#FDD231"
      />
    </svg>
  );
}

// Decorative corner shape with gradient
function CornerDecoration() {
  return (
    <svg
      className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="cornerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#64CDBD" />
          <stop offset="100%" stopColor="#C4B5FD" />
        </linearGradient>
      </defs>
      <path
        d="M300 0 L300 180 Q300 220 260 220 L180 220 Q140 220 140 180 L140 100 Q140 60 180 60 L220 60 Q260 60 260 20 L260 0 Z"
        fill="none"
        stroke="url(#cornerGradient)"
        strokeWidth="4"
      />
    </svg>
  );
}

// Bottom wave decoration
function BottomWave() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[80px] overflow-hidden">
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 80 L0 40 Q360 -20 720 40 Q1080 100 1440 40 L1440 80 Z"
          fill="#4DD4C4"
        />
      </svg>
    </div>
  );
}

const defaultNavItems: NavItem[] = [
  { label: "Product", href: "#", hasDropdown: true },
  { label: "Learn", href: "#", hasDropdown: true },
  { label: "Pricing", href: "#", hasDropdown: false },
  { label: "Help", href: "#", hasDropdown: true },
];

export default function SketchPrototypeHero({
  navItems = defaultNavItems,
  signInText = "Sign In",
  ctaButtonText = "Get started",
  headlinePart1 = "Build great",
  headlineAccent = "prototypes",
  headlinePart2 = "Share them",
  headlinePart3 = "anywhere",
  description = "Bring your ideas to life and test them with a swipe, tap, hover or press — ",
  descriptionHighlight = "all in Sketch.",
  primaryButtonText = "Get started for free",
  secondaryButtonText = "Learn more",
  bottomNote = "No need for tools like",
  onSignIn,
  onGetStarted,
  onPrimaryClick,
  onSecondaryClick,
}: SketchPrototypeHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#FAFAFA] overflow-hidden">
      {/* Corner Decoration */}
      <CornerDecoration />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16"
      >
        {/* Logo and Nav Items */}
        <div className="flex items-center gap-10">
          <SketchLogo className="w-7 h-7" />

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 text-sm font-medium text-[#1A1A1A] hover:text-[#64CDBD] transition-colors"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="w-4 h-4 text-[#9C9C9C]" />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={onSignIn}
            className="text-sm font-medium text-[#1A1A1A] hover:text-[#64CDBD] transition-colors"
          >
            {signInText}
          </button>
          <button
            onClick={onGetStarted}
            className="flex items-center gap-2 rounded-full bg-[#111111] px-4 py-2 text-sm font-medium text-white hover:bg-[#333333] transition-colors"
          >
            {ctaButtonText}
            <Download className="w-4 h-4" />
          </button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-32 sm:px-10 lg:px-16 lg:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-[#111111]">
              {headlinePart1}
              <br />
              <span className="text-[#4DD4C4]">{headlineAccent}</span>
              <br />
              {headlinePart2}
              <br />
              {headlinePart3}
            </h1>
          </motion.div>

          {/* Right - Description and CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:pt-8"
          >
            <p className="text-lg text-[#666666] leading-relaxed max-w-md">
              {description}
              <span className="underline decoration-[#4DD4C4] decoration-2 underline-offset-2 font-medium text-[#111111]">
                {descriptionHighlight}
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <button
                onClick={onPrimaryClick}
                className="rounded-lg bg-[#111111] px-6 py-3 text-sm font-semibold text-white hover:bg-[#333333] transition-colors"
              >
                {primaryButtonText}
              </button>
              <button
                onClick={onSecondaryClick}
                className="rounded-lg border border-[#D1D1D1] bg-white px-6 py-3 text-sm font-semibold text-[#111111] hover:bg-[#F5F5F5] transition-colors"
              >
                {secondaryButtonText}
              </button>
            </div>

            {/* Bottom Note */}
            <div className="flex items-center gap-3 mt-8">
              <span className="text-sm text-[#9C9C9C] italic">{bottomNote}</span>
              {/* Placeholder tool logos */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-[#9C9C9C] line-through">Figma</span>
                <span className="text-sm font-semibold text-[#9C9C9C] italic line-through">Marvel</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <BottomWave />
    </section>
  );
}
