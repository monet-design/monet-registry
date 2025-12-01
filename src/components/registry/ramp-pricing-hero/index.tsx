"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#EFEDE9",          // 라이트 베이지 배경
    accent: "#E4F425",              // 라임 옐로우 강조색 (CTA)
    accentHover: "#D4E420",         // 라임 옐로우 호버
    text: "#1A1A1A",                // 다크 텍스트
    border: "#D5D5D3",              // 보더색
  },
  dark: {
    background: "#2A2A28",
    accent: "#E4F425",
    accentHover: "#D4E420",
    text: "#F5F5F5",
    border: "#4A4A48",
  },
} as const;

const IMAGES = {
  hero: {
    path: "/registry/ramp-pricing-hero/hand-card.png",
    alt: "Ramp corporate card in hand",
    prompt: `Close-up photo of hand holding modern corporate payment card.
Style: Clean product photography, professional
Layout: Vertical or angled composition
Composition: Hand prominently displaying card details
Background: Neutral, clean gradient
Color palette: Card branding colors, professional look
Mood: Premium, trustworthy, modern
Technical: High resolution, sharp focus on card, commercial quality`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Types
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface RampPricingHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  headline?: string;
  description?: string;
  inputPlaceholder?: string;
  ctaText?: string;
  disclaimer?: string;
  signInText?: string;
  badgeValue?: string;
  badgeLabel?: string;
  navItems?: NavItem[];
  heroImage?: string;
  onSubmit?: (email: string) => void;
}

// Logo Component
function RampLogo({ text = "ramp" }: { text?: string }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-lg font-semibold text-[#1A1A1A]">{text}</span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 12L12 2M12 2H4M12 2V10"
          stroke="#1A1A1A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// Starburst Badge Component
function StarburstBadge({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const points = 16;
  const outerRadius = 50;
  const innerRadius = 42;

  const pathData = Array.from({ length: points * 2 }, (_, i) => {
    const angle = (i * Math.PI) / points - Math.PI / 2;
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    return `${i === 0 ? "M" : "L"} ${x} ${y}`;
  }).join(" ") + " Z";

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 0.6, duration: 0.6, type: "spring", stiffness: 200 }}
      className="relative h-[90px] w-[90px]"
    >
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full"
        style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
      >
        <path d={pathData} fill="#C1D01E" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-lg font-bold text-[#1A1A1A]">{value}</span>
        <span className="text-[9px] leading-tight text-center text-[#1A1A1A]/80 max-w-[50px]">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Products", href: "#", hasDropdown: true },
  { label: "Solutions", href: "#", hasDropdown: true },
  { label: "Customers", href: "#", hasDropdown: false },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Pricing", href: "#", hasDropdown: false },
];

// Main Component
export default function RampPricingHero({
  logoText = "ramp",
  headline = "Better than free",
  description = "Smart corporate cards and accounts payable combined with\nspend management software built to give you immediate time\nand money savings at no cost.",
  inputPlaceholder = "What's your work email?",
  ctaText = "Get started – for free",
  disclaimer = "No personal credit checks or founder guarantee.",
  signInText = "Sign in",
  badgeValue = "3.5%",
  badgeLabel = "average savings*",
  navItems = defaultNavItems,
  heroImage = "/registry/ramp-pricing-hero/hand-card.png",
  onSubmit,
}: RampPricingHeroProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#EFEDE9]">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-4 sm:px-10 lg:px-16"
      >
        {/* Logo */}
        <RampLogo text={logoText} />

        {/* Nav Items - Desktop */}
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-sm text-[#1A1A1A] transition-colors hover:text-[#1A1A1A]/70"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown size={14} strokeWidth={2} />}
            </a>
          ))}
        </div>

        {/* Sign In Button */}
        <button className="rounded-md border border-[#1A1A1A] bg-transparent px-4 py-1.5 text-sm font-medium text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A] hover:text-white">
          {signInText}
        </button>
      </motion.nav>

      {/* Main Content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pt-12 sm:px-10 lg:grid-cols-2 lg:gap-4 lg:px-16 lg:pt-20">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-serif text-4xl font-light tracking-tight text-[#1A1A1A] sm:text-5xl md:text-6xl"
          >
            {headline}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-sm leading-relaxed text-[#4A4A4A] whitespace-pre-line sm:text-base"
          >
            {description}
          </motion.p>

          {/* Email Input Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="mt-8 flex max-w-md flex-col gap-0 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={inputPlaceholder}
              className="flex-1 rounded-l-full rounded-r-full border border-[#D5D5D3] bg-white px-5 py-3 text-sm text-[#1A1A1A] placeholder:text-[#888888] focus:border-[#1A1A1A] focus:outline-none sm:rounded-r-none"
            />
            <button
              type="submit"
              className="mt-2 rounded-l-full rounded-r-full bg-[#E4F425] px-6 py-3 text-sm font-semibold text-[#1A1A1A] transition-all hover:bg-[#D4E420] sm:mt-0 sm:rounded-l-none"
            >
              {ctaText}
            </button>
          </motion.form>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-xs text-[#888888]"
          >
            {disclaimer}
          </motion.p>
        </div>

        {/* Right Column - Hero Image with Badge */}
        <div className="relative flex items-center justify-center lg:justify-end">
          {/* Hand holding card image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative"
          >
            <img
              src={heroImage}
              alt="Hand holding corporate card"
              className="h-auto w-full max-w-[400px] object-contain lg:max-w-[450px]"
            />

            {/* Starburst Badge */}
            <div className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/4 lg:right-[-20px]">
              <StarburstBadge value={badgeValue} label={badgeLabel} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
