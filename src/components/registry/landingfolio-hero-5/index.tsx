"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    // Card gradient colors
    cardGradientFrom: "#FFD700", // Gold
    cardGradientMid: "#FFC107", // Amber
    cardGradientTo: "#FF9800", // Orange
    cardChipBg: "#E5A800", // Darker gold
    // Accent colors
    accent: "#F97316", // Orange accent for decorative elements
  },
  dark: {
    cardGradientFrom: "#FFD700",
    cardGradientMid: "#FFC107",
    cardGradientTo: "#FF9800",
    cardChipBg: "#E5A800",
    accent: "#F97316",
  },
} as const;

const IMAGES = {
  woman: {
    path: "/registry/landingfolio-hero-5/woman.png",
    alt: "Happy developer with credit card",
    prompt: `Professional portrait of a young woman holding a credit card.
Style: Clean, bright, professional photography with white/light background
Layout: Full body or 3/4 shot, centered composition, PNG with transparency
Composition: Confident pose, holding credit card, professional attire
Color palette: Clean, bright, natural skin tones
Mood: Happy, confident, successful, approachable
Technical: High resolution, PNG transparency, professional lighting`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Types
interface NavItem {
  label: string;
  href: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface LandingfolioHero5Props {
  mode?: "light" | "dark";
  logoText?: string;
  navItems?: NavItem[];
  headline?: string;
  description?: string;
  inputPlaceholder?: string;
  ctaText?: string;
  signInText?: string;
  createAccountText?: string;
  stats?: StatItem[];
  cardholderName?: string;
  cardCompanyName?: string;
  onSubmit?: (email: string) => void;
}

// Decorative SVG Components
function WavyLines() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 20C20 20 20 40 30 40C40 40 40 20 50 20C60 20 60 40 70 40"
        stroke="#1D2939"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M10 35C20 35 20 55 30 55C40 55 40 35 50 35C60 35 60 55 70 55"
        stroke="#1D2939"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M10 50C20 50 20 70 30 70C40 70 40 50 50 50C60 50 60 70 70 70"
        stroke="#1D2939"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

function OrangeWavy({ color = "#F97316" }: { color?: string }) {
  return (
    <svg
      width="50"
      height="30"
      viewBox="0 0 50 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 15C15 5 25 25 35 15C45 5 45 15 45 15"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function BlackTilde() {
  return (
    <svg
      width="40"
      height="20"
      viewBox="0 0 40 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 10C10 5 15 15 20 10C25 5 30 15 35 10"
        stroke="#1D2939"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// Credit Card Component
function CreditCard({
  cardholderName = "ESTHER HOWARD",
  companyName = "RJ DEVELOPMENT INC",
  colors,
}: {
  cardholderName?: string;
  companyName?: string;
  colors: typeof COLORS.light;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -5 }}
      animate={{ opacity: 1, y: 0, rotate: -5 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="absolute -bottom-4 left-0 z-10 w-[260px] md:left-auto md:right-4 md:w-[280px]"
    >
      <div className="rounded-2xl bg-gradient-to-br from-white via-[#F5E6F5] to-[#E8C8E8] p-5 shadow-xl">
        {/* Card Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium tracking-widest text-[#1D2939]">
              /RAREBLOCKS
            </span>
          </div>
        </div>

        {/* Chip */}
        <div className="mt-6">
          <div
            className="flex h-10 w-12 items-center justify-center rounded-md"
            style={{
              background: `linear-gradient(to bottom right, ${colors.cardGradientFrom}, ${colors.cardGradientMid}, ${colors.cardGradientTo})`,
            }}
          >
            <div className="grid grid-cols-2 gap-0.5">
              <div className="h-3 w-4 rounded-sm" style={{ backgroundColor: colors.cardChipBg }} />
              <div className="h-3 w-4 rounded-sm" style={{ backgroundColor: colors.cardChipBg }} />
              <div className="h-3 w-4 rounded-sm" style={{ backgroundColor: colors.cardChipBg }} />
              <div className="h-3 w-4 rounded-sm" style={{ backgroundColor: colors.cardChipBg }} />
            </div>
          </div>
        </div>

        {/* Card Info */}
        <div className="mt-8 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold tracking-wide text-[#1D2939]">
              {cardholderName}
            </p>
            <p className="mt-0.5 text-[10px] tracking-wide text-[#4B5563]">
              {companyName}
            </p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold italic tracking-tight text-[#1A1F71]">
              VISA
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Stat Divider
function StatDivider() {
  return (
    <div className="flex flex-col gap-1">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-3 w-[2px] bg-[#D1D5DB]" />
      ))}
    </div>
  );
}

// Default Data
const defaultNavItems: NavItem[] = [
  { label: "Solutions", href: "#" },
  { label: "Industries", href: "#" },
  { label: "Fees", href: "#" },
  { label: "About Rareblocks", href: "#" },
];

const defaultStats: StatItem[] = [
  { value: "2943", label: "Cards\nDelivered" },
  { value: "$1M+", label: "Transaction\nCompleted" },
];

// Main Component
export default function LandingfolioHero5({
  mode = "light",
  logoText = "RAREBLOCKS",
  navItems = defaultNavItems,
  headline = "A special credit\ncard made for\nDevelopers.",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.",
  inputPlaceholder = "Enter email address",
  ctaText = "Get Free Card",
  signInText = "Sign in",
  createAccountText = "Create free account",
  stats = defaultStats,
  cardholderName = "ESTHER HOWARD",
  cardCompanyName = "RJ DEVELOPMENT INC",
  onSubmit,
}: LandingfolioHero5Props) {
  const [email, setEmail] = useState("");
  const colors = COLORS[mode];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F9FAFC]">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16"
      >
        {/* Logo */}
        <div className="flex items-center gap-1">
          <span className="text-[10px] text-[#1D2939]">/</span>
          <span className="text-sm font-semibold tracking-[0.2em] text-[#1D2939]">
            {logoText}
          </span>
        </div>

        {/* Nav Items - Hidden on mobile */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[#1D2939] transition-colors hover:text-[#4B5563]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden text-sm text-[#1D2939] transition-colors hover:text-[#4B5563] sm:block"
          >
            {signInText}
          </a>
          <a
            href="#"
            className="rounded-full bg-[#1D2939] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#374151]"
          >
            {createAccountText}
          </a>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pt-12 sm:px-10 md:grid-cols-2 md:gap-12 md:px-16 md:pt-16">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="whitespace-pre-line text-4xl font-medium italic leading-tight text-[#111827] sm:text-5xl lg:text-[56px]"
          >
            {headline}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 max-w-md text-base leading-relaxed text-[#6B7280]"
          >
            {description}
          </motion.p>

          {/* Email Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="mt-8 flex max-w-md items-center rounded-full border border-[#E5E7EB] bg-white p-1.5 shadow-sm"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={inputPlaceholder}
              className="flex-1 bg-transparent px-4 py-2 text-sm text-[#1D2939] placeholder:text-[#9CA3AF] focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-[#1D2939] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#374151]"
            >
              {ctaText}
            </button>
          </motion.form>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex items-center gap-6"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex items-center gap-6">
                {index > 0 && <StatDivider />}
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold text-[#1D2939] sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="whitespace-pre-line text-xs leading-tight text-[#6B7280]">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Content - Image Section */}
        <div className="relative min-h-[500px]">
          {/* Decorative Elements - positioned relative to image container */}
          <div className="absolute -left-4 top-0 z-20">
            <WavyLines />
          </div>
          <div className="absolute right-20 top-0 z-20">
            <OrangeWavy color={colors.accent} />
          </div>
          <div className="absolute -right-4 top-20 z-20">
            <BlackTilde />
          </div>

          {/* Woman Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative ml-auto h-[450px] w-full max-w-[380px] md:h-[520px] md:max-w-[400px]"
          >
            <Image
              src={IMAGES.woman.path}
              alt={IMAGES.woman.alt}
              fill
              className="rounded-lg object-cover object-top"
              priority
            />
          </motion.div>

          {/* Credit Card */}
          <CreditCard
            cardholderName={cardholderName}
            companyName={cardCompanyName}
            colors={colors}
          />
        </div>
      </div>
    </section>
  );
}
