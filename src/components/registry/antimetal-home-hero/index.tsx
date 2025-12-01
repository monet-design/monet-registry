"use client";

import { motion } from "motion/react";
import Image from "next/image";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Types
interface NavItem {
  label: string;
  href: string;
}

interface AntimetalHomeHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  signInText?: string;
  navItems?: NavItem[];
  dashboardImage?: string;
  onBookDemo?: () => void;
}

// Logo Icon Component - 4 dots pattern with connecting lines
function LogoIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="5" cy="5" r="2" fill="#111827" />
      <circle cx="15" cy="5" r="2" fill="#111827" />
      <circle cx="5" cy="15" r="2" fill="#111827" />
      <circle cx="15" cy="15" r="2" fill="#111827" />
      <line x1="7" y1="5" x2="13" y2="5" stroke="#111827" strokeWidth="1.5" />
      <line x1="5" y1="7" x2="5" y2="13" stroke="#111827" strokeWidth="1.5" />
    </svg>
  );
}

// Sparkle/Magic Icon for CTA button
function SparkleIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 1L8.2 5.8L13 7L8.2 8.2L7 13L5.8 8.2L1 7L5.8 5.8L7 1Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Dotted Grid Background Pattern with decorative elements
function DottedGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #E8F1FA 0%, #F0F6FB 50%, #F8FAFC 100%)"
        }}
      />

      {/* Dotted grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="antimetal-dotted-grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="#CBD5E1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#antimetal-dotted-grid)" />
      </svg>

      {/* Decorative circles - top left */}
      <div className="absolute top-24 left-[12%] w-3 h-3 rounded-full border-2 border-dashed border-gray-300/60" />
      <div className="absolute top-36 left-[8%] w-2 h-2 rounded-full border border-dashed border-gray-300/50" />

      {/* Decorative circles - top right */}
      <div className="absolute top-20 right-[15%] w-4 h-4 rounded-full border-2 border-dashed border-gray-300/60" />
      <div className="absolute top-32 right-[10%] w-2.5 h-2.5 rounded-full border border-dashed border-gray-300/50" />

      {/* Solid decorative circles */}
      <div className="absolute top-28 left-[20%] w-2 h-2 rounded-full bg-gray-300/40" />
      <div className="absolute top-40 right-[22%] w-1.5 h-1.5 rounded-full bg-gray-300/40" />

      {/* Corner dotted lines - top left */}
      <svg className="absolute top-12 left-12 w-20 h-20 opacity-40" viewBox="0 0 80 80">
        <path
          d="M0 40 L40 40 L40 0"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <circle cx="40" cy="40" r="3" fill="none" stroke="#94A3B8" strokeWidth="1" />
      </svg>

      {/* Corner dotted lines - top right */}
      <svg className="absolute top-12 right-12 w-20 h-20 opacity-40" viewBox="0 0 80 80">
        <path
          d="M80 40 L40 40 L40 0"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <circle cx="40" cy="40" r="3" fill="none" stroke="#94A3B8" strokeWidth="1" />
      </svg>
    </div>
  );
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Enterprise", href: "#enterprise" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
  { label: "FAQ", href: "#faq" },
];

// Main Component
export default function AntimetalHomeHero({
  mode = "light",
  logoText = "Antimetal",
  headline = "Save time &\nmoney on AWS",
  subheadline = "Savings, visibility, and infrastructure guardrails.\nOne automated platform.",
  ctaText = "Book a demo",
  signInText = "Sign in",
  navItems = defaultNavItems,
  dashboardImage = "/registry/antimetal-home-hero/dashboard.png",
  onBookDemo,
}: AntimetalHomeHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Pattern */}
      <DottedGridBackground />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <LogoIcon />
          <span className="text-sm font-medium text-[#111827]">{logoText}</span>
        </div>

        {/* Center Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[#6B7280] hover:text-[#111827] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Sign In */}
        <a
          href="#signin"
          className="text-sm text-[#6B7280] hover:text-[#111827] transition-colors"
        >
          {signInText}
        </a>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-12 pb-8 sm:px-8 sm:pt-16 lg:pt-20 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0A0A0A] whitespace-pre-line leading-[1.1]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-5 max-w-lg text-base sm:text-lg text-[#6B7280] whitespace-pre-line leading-relaxed"
        >
          {subheadline}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8"
        >
          <button
            onClick={onBookDemo}
            className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#111827] text-white text-sm font-medium rounded-full hover:bg-[#1F2937] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-md">
              <SparkleIcon />
            </span>
            {ctaText}
          </button>
        </motion.div>
      </div>

      {/* Dashboard Preview */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8 pb-16"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/60 bg-white">
          <Image
            src={dashboardImage}
            alt="AWS Cost Management Dashboard"
            width={1200}
            height={675}
            className="w-full h-auto"
            priority
          />
        </div>
      </motion.div>

      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
    </section>
  );
}
