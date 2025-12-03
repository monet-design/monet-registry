"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#EFEEE7",
    accent: "#C2D719",
    accentHover: "#B0C510",
    newsCardBg: "#1a1a1a",
    newsIndicator: "#ef4444",
  },
  dark: {
    background: "#1a1a1a",
    accent: "#C2D719",
    accentHover: "#B0C510",
    newsCardBg: "#2a2a2a",
    newsIndicator: "#ef4444",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, ArrowDown, ChevronDown, Globe } from "lucide-react";

interface MoveAgencyHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  logoSubtext?: string;
  navItems?: { label: string; href: string; hasDropdown?: boolean }[];
  headline?: string;
  description?: string;
  newsIndicator?: {
    text: string;
    buttonText: string;
    href: string;
  };
  exploreText?: string;
  contactButtonText?: string;
  contactButtonHref?: string;
}

export default function MoveAgencyHero({
  logoText = "MOVE",
  logoSubtext = "MOBILE\nFIRST\nAGENCY",
  navItems = [
    { label: "Vision", href: "#" },
    { label: "Cases", href: "#" },
    { label: "Solutions", href: "#", hasDropdown: true },
    { label: "About Move", href: "#" },
    { label: "Updates", href: "#" },
    { label: "Work at Move", href: "#", hasDropdown: true },
  ],
  headline = "The future is here,\nand it's mobile\nfirst & beyond.",
  description = "Our mobile solutions make the lives of\nmillions of users around the world easier\nand more beautiful every day.",
  newsIndicator = {
    text: "Partou and Move enter\nmobile partnership",
    buttonText: "Read more",
    href: "#",
  },
  exploreText = "Explore",
  contactButtonText = "Contact",
  contactButtonHref = "#",
  mode = "light",
}: MoveAgencyHeroProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center justify-between px-8 py-6 lg:px-12"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span
            className="text-2xl font-black tracking-tight"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            {logoText}
          </span>
          <span
            className="text-[6px] leading-tight font-medium tracking-wider"
            style={{ whiteSpace: "pre-line" }}
          >
            {logoSubtext}
          </span>
        </div>

        {/* Nav Items */}
        <div className="hidden items-center gap-8 lg:flex">
          {/* Language Selector */}
          <button className="flex items-center gap-1 text-sm">
            <Globe className="h-4 w-4" />
            <span>EN</span>
            <ChevronDown className="h-3 w-3" />
          </button>

          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center gap-1 text-sm font-medium transition-opacity hover:opacity-70"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="h-3 w-3" />}
            </a>
          ))}

          {/* Contact Button */}
          <a
            href={contactButtonHref}
            className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-black transition-all hover:scale-105"
            style={{ backgroundColor: colors.accent }}
          >
            {contactButtonText}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative flex min-h-[calc(100vh-100px)] flex-col lg:flex-row">
        {/* Left Side - Abstract Lines */}
        <div className="relative flex-1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute inset-0"
          >
            <AbstractLines />
          </motion.div>

          {/* News Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-24 left-8 z-10 max-w-xs rounded-2xl p-6 lg:bottom-32 lg:left-12"
            style={{ backgroundColor: colors.newsCardBg }}
          >
            <div className="mb-3 flex items-start gap-2">
              <span
                className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                style={{ backgroundColor: colors.newsIndicator }}
              />
              <p
                className="text-sm font-medium leading-snug text-white"
                style={{ whiteSpace: "pre-line" }}
              >
                {newsIndicator.text}
              </p>
            </div>
            <a
              href={newsIndicator.href}
              className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-black transition-all hover:scale-105"
              style={{ backgroundColor: colors.accent }}
            >
              {newsIndicator.buttonText}
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-1 flex-col justify-center px-8 py-12 lg:px-16 lg:py-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-4xl leading-tight tracking-tight text-black md:text-5xl lg:text-6xl"
            style={{
              fontFamily: "'Instrument Serif', serif",
              whiteSpace: "pre-line",
            }}
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-md text-sm leading-relaxed text-neutral-600 md:text-base"
            style={{ whiteSpace: "pre-line" }}
          >
            {description}
          </motion.p>
        </div>

        {/* Explore Button - Bottom Center */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-sm font-medium tracking-wide text-neutral-600">
            {exploreText}
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="h-4 w-4 text-neutral-600" />
          </motion.div>
        </motion.div>
      </div>

      {/* Google Font for Instrument Serif */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Instrument+Serif&display=swap");
      `}</style>
    </section>
  );
}

// Abstract 3D Lines Component
function AbstractLines() {
  return (
    <svg
      viewBox="0 0 500 500"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Multiple lines creating perspective effect */}
      {[...Array(7)].map((_, i) => {
        const startX = 100 + i * 40;
        const startY = 50;
        const endX = 250 - i * 15;
        const endY = 450;
        const controlX1 = startX + 20;
        const controlY1 = 150;
        const controlX2 = endX - 30;
        const controlY2 = 350;

        return (
          <motion.path
            key={i}
            d={`M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`}
            fill="none"
            stroke="#1a1a1a"
            strokeWidth={1.5}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.2 + i * 0.1 }}
          />
        );
      })}
    </svg>
  );
}
