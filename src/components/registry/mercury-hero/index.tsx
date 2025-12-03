"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-slate-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    // 배경 그라데이션
    gradientFrom: "#D4D6EA",    // 라벤더 시작
    gradientTo: "#C8CAE0",      // 라벤더 끝
    // Primary 버튼/액센트
    accent: "#5C72D1",          // 퍼플 블루
    accentHover: "#4B61C0",     // 퍼플 블루 호버
    // 보더/입력 필드
    border: "#B8BAD4",          // 라이트 퍼플 보더
  },
  dark: {
    gradientFrom: "#1e1e2e",
    gradientTo: "#2a2a3e",
    accent: "#7B8FE0",
    accentHover: "#6A7ED0",
    border: "#4a4a6a",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  dashboard: {
    path: "/registry/mercury-hero/dashboard.png",
    alt: "Mercury Banking Dashboard",
    prompt: `Fintech banking dashboard UI mockup with 3D isometric perspective.
Style: Clean, minimal, modern SaaS/fintech aesthetic with glassmorphism effect
Layout: Multiple floating UI cards arranged in 3D space - main dashboard center, sidebar left, credit card and charts right
Composition:
- Main card: Balance display ($1,972.345) with upward trending line chart in purple
- Left sidebar: Navigation menu (Home, Accounts, Cards, Analytics, Settings) with account list
- Right side: Credit/debit card mockup with Mastercard logo, donut chart widgets
Color palette: White/light gray cards, soft purple (#5C72D1) accents, light lavender background
Elements: Transaction history, balance charts, navigation icons, card details
Mood: Professional, trustworthy, modern banking, clean fintech UI
Technical: Transparent PNG with soft shadows, 3D floating effect`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import "./font.css";

// Types
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface TrustLogo {
  name: string;
  width?: number;
}

interface MercuryHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  headline?: string;
  subheadline?: string;
  inputPlaceholder?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  disclaimerText?: string;
  trustBadgeText?: string;
  navItems?: NavItem[];
  trustLogos?: TrustLogo[];
  dashboardImage?: string;
  onEmailSubmit?: (email: string) => void;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

// Mercury Logo SVG
function MercuryLogo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-slate-900"
    >
      <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="14" cy="14" r="4" fill="currentColor" />
    </svg>
  );
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Product", href: "#", hasDropdown: true },
  { label: "About", href: "#", hasDropdown: true },
  { label: "Community", href: "#", hasDropdown: true },
  { label: "Industries", href: "#", hasDropdown: true },
];

// Default trust logos
const defaultTrustLogos: TrustLogo[] = [
  { name: "Trust & Will", width: 70 },
  { name: "wren", width: 80 },
  { name: "Linear", width: 80 },
  { name: "LMNT", width: 50 },
  { name: "Sprig", width: 60 },
  { name: "Phantom", width: 90 },
  { name: "On Deck", width: 80 },
  { name: "Lendtable", width: 90 },
];

// Main Component
export default function MercuryHero({
  mode = "light",
  logoText = "MERCURY",
  headline = "Banking for\nwhat you're building",
  subheadline = "Startups of all sizes rely on Mercury as they create the next great companies. Apply in 10 minutes to try business banking as it should be.",
  inputPlaceholder = "Enter your email",
  primaryCtaText = "Open Account",
  secondaryCtaText = "Contact Sales",
  disclaimerText = "Mercury is a financial technology company, not a bank. Banking services provided by Choice Financial Group and Evolve Bank & Trust\u00AE; Members FDIC.",
  trustBadgeText = "100K+ venture-backed and bootstrapped startups build with Mercury.",
  navItems = defaultNavItems,
  trustLogos = defaultTrustLogos,
  dashboardImage = IMAGES.dashboard.path,
  onEmailSubmit,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: MercuryHeroProps) {
  const [email, setEmail] = useState("");
  const colors = COLORS[mode];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onEmailSubmit?.(email);
  };

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${colors.gradientFrom}, ${colors.gradientTo})`,
      }}
    >
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-4 sm:px-10 lg:px-16"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <MercuryLogo />
          <span className="text-sm font-semibold tracking-wider text-slate-900">
            {logoText}
          </span>
        </div>

        {/* Center Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 px-4 py-2 text-sm text-slate-700 transition-colors hover:text-slate-900"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown size={14} />}
            </a>
          ))}
        </div>

        {/* Right Navigation */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden text-sm text-slate-700 transition-colors hover:text-slate-900 sm:block"
          >
            Log In
          </a>
          <button
            onClick={onPrimaryCtaClick}
            className="rounded-full px-5 py-2 text-sm font-medium text-white transition-all hover:shadow-lg"
            style={{ backgroundColor: colors.accent }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = colors.accentHover)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = colors.accent)}
          >
            {primaryCtaText}
          </button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-12 sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-serif text-4xl font-normal italic leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[4.5rem]"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              {headline.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headline.split("\n").length - 1 && <br />}
                </span>
              ))}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 max-w-md text-base leading-relaxed text-slate-600"
            >
              {subheadline}
            </motion.p>

            {/* Email Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={inputPlaceholder}
                className="h-12 flex-1 rounded-lg bg-white/60 px-4 text-sm text-slate-900 placeholder:text-slate-400 backdrop-blur-sm focus:outline-none focus:ring-2 sm:max-w-[220px]"
                style={{
                  borderColor: colors.border,
                  borderWidth: "1px",
                }}
              />
              <button
                type="submit"
                onClick={onPrimaryCtaClick}
                className="h-12 rounded-lg px-6 text-sm font-medium text-white transition-all hover:shadow-lg"
                style={{ backgroundColor: colors.accent }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = colors.accentHover)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = colors.accent)}
              >
                {primaryCtaText}
              </button>
              <button
                type="button"
                onClick={onSecondaryCtaClick}
                className="h-12 rounded-lg bg-white/40 px-6 text-sm font-medium text-slate-900 backdrop-blur-sm transition-all hover:bg-white/60"
                style={{ borderColor: colors.border, borderWidth: "1px" }}
              >
                {secondaryCtaText}
              </button>
            </motion.form>

            {/* Disclaimer */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 max-w-md text-xs leading-relaxed text-slate-500"
            >
              {disclaimerText}
            </motion.p>
          </div>

          {/* Right Column - Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-xl lg:max-w-none">
              <Image
                src={dashboardImage}
                alt="Mercury Banking Dashboard"
                width={700}
                height={500}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mx-auto max-w-7xl px-6 pt-16 pb-12 sm:px-10 lg:px-16"
      >
        {/* Trust Badge Text */}
        <p className="text-sm text-slate-500">{trustBadgeText}</p>

        {/* Logo Cloud */}
        <div className="mt-6 flex flex-wrap items-center gap-8 opacity-60 grayscale lg:gap-12">
          {trustLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center text-sm font-medium text-slate-600"
              style={{ minWidth: logo.width }}
            >
              {logo.name === "Trust & Will" && (
                <span className="font-serif text-base italic">trust<br />&amp;will</span>
              )}
              {logo.name === "wren" && (
                <span className="flex items-center gap-1">
                  <span className="text-lg">~</span>
                  <span className="text-base font-medium">wren</span>
                </span>
              )}
              {logo.name === "Linear" && (
                <span className="flex items-center gap-1.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M0.5 8.5L7.5 15.5L15.5 7.5L8.5 0.5L0.5 8.5Z" />
                  </svg>
                  <span className="text-base font-medium">Linear</span>
                </span>
              )}
              {logo.name === "LMNT" && (
                <span className="font-mono text-xs tracking-wider">LMNT</span>
              )}
              {logo.name === "Sprig" && (
                <span className="text-base font-medium tracking-wide">Sprig</span>
              )}
              {logo.name === "Phantom" && (
                <span className="flex items-center gap-1.5">
                  <div className="h-4 w-4 rounded-full bg-current opacity-60" />
                  <span className="text-base font-medium">Phantom</span>
                </span>
              )}
              {logo.name === "On Deck" && (
                <span className="flex items-center gap-1.5">
                  <div className="h-4 w-4 rounded-full border-2 border-current" />
                  <span className="text-base font-medium">On Deck</span>
                </span>
              )}
              {logo.name === "Lendtable" && (
                <span className="flex items-center gap-1.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <rect x="2" y="2" width="4" height="4" />
                    <rect x="8" y="2" width="4" height="4" />
                    <rect x="2" y="8" width="4" height="4" />
                    <rect x="8" y="8" width="4" height="4" />
                  </svg>
                  <span className="text-base font-medium">Lendtable</span>
                </span>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
