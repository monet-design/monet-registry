"use client";

import { motion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";

// Types
interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface MoxionHeroProps {
  logoText?: string;
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  navItems?: NavItem[];
  backgroundImage?: string;
  onCtaClick?: () => void;
  onScrollClick?: () => void;
}

// Logo Component
function MoxionLogo({ text = "MOXION" }: { text?: string }) {
  return (
    <div className="flex items-center">
      <span
        className="text-sm font-bold tracking-[0.15em] text-[#1a1a1a]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {text}
      </span>
    </div>
  );
}

// Navigation Component
function Navigation({
  items,
  ctaText,
  onCtaClick,
}: {
  items: NavItem[];
  ctaText: string;
  onCtaClick?: () => void;
}) {
  return (
    <div className="flex items-center gap-8">
      {/* Nav Links */}
      <nav className="hidden items-center gap-6 md:flex">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`text-sm text-[#1a1a1a] transition-colors hover:text-[#0D0D12] ${
              item.isActive ? "border-b border-[#1a1a1a]" : ""
            }`}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* CTA Button */}
      <button
        onClick={onCtaClick}
        className="flex items-center gap-2 rounded-full bg-[#0D0D12] px-4 py-2 text-sm text-white transition-all hover:bg-[#2a2a2a]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <ArrowRight size={16} />
        <span>{ctaText}</span>
      </button>
    </div>
  );
}

// Scroll Down Arrow Component
function ScrollDownArrow({ onClick }: { onClick?: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-white text-white transition-colors hover:bg-white/10"
      aria-label="Scroll down"
    >
      <ArrowDown size={24} strokeWidth={2} />
    </motion.button>
  );
}

// Default navigation items
const defaultNavItems: NavItem[] = [
  { label: "Home", href: "#", isActive: true },
  { label: "Technology", href: "#technology" },
  { label: "Industries", href: "#industries" },
  { label: "Mission", href: "#mission" },
  { label: "Careers", href: "#careers" },
];

// Main Component
export default function MoxionHero({
  logoText = "MOXION",
  headline = "Good Energy.\nRadical Power.",
  subheadline = "Zero-emission power. Delivered.",
  ctaText = "Contact",
  navItems = defaultNavItems,
  backgroundImage = "/registry/moxion-hero/hero-bg.jpg",
  onCtaClick,
  onScrollClick,
}: MoxionHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between px-6 py-5 sm:px-8 lg:px-12"
        >
          {/* Logo */}
          <MoxionLogo text={logoText} />

          {/* Navigation */}
          <Navigation items={navItems} ctaText={ctaText} onCtaClick={onCtaClick} />
        </motion.header>

        {/* Main Content */}
        <div className="flex flex-1 flex-col justify-between px-6 pb-8 sm:px-8 lg:px-12">
          {/* Headline */}
          <div className="mt-8 lg:mt-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-2xl text-5xl font-black italic leading-[1.05] tracking-tight text-[#1a1a1a] sm:text-6xl lg:text-7xl xl:text-8xl"
              style={{
                fontFamily: "Inter, sans-serif",
                fontStyle: "italic",
              }}
            >
              {headline.split("\n").map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </motion.h1>
          </div>

          {/* Bottom Section */}
          <div className="flex items-end justify-between">
            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="max-w-md text-base font-medium text-white sm:text-lg"
              style={{
                fontFamily: "Inter, sans-serif",
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              }}
            >
              {subheadline}
            </motion.p>

            {/* Scroll Down Arrow */}
            <ScrollDownArrow onClick={onScrollClick} />
          </div>
        </div>
      </div>
    </section>
  );
}
