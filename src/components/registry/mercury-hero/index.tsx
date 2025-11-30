"use client";

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
    >
      <circle cx="14" cy="14" r="12" stroke="#1a1a2e" strokeWidth="1.5" fill="none" />
      <circle cx="14" cy="14" r="8" stroke="#1a1a2e" strokeWidth="1.5" fill="none" />
      <circle cx="14" cy="14" r="4" fill="#1a1a2e" />
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
  dashboardImage = "/registry/mercury-hero/dashboard.png",
  onEmailSubmit,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: MercuryHeroProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onEmailSubmit?.(email);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#D4D6EA] to-[#C8CAE0]">
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
          <span className="text-sm font-semibold tracking-wider text-[#1a1a2e]">
            {logoText}
          </span>
        </div>

        {/* Center Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 px-4 py-2 text-sm text-[#1a1a2e]/80 transition-colors hover:text-[#1a1a2e]"
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
            className="hidden text-sm text-[#1a1a2e]/80 transition-colors hover:text-[#1a1a2e] sm:block"
          >
            Log In
          </a>
          <button
            onClick={onPrimaryCtaClick}
            className="rounded-full bg-[#5C72D1] px-5 py-2 text-sm font-medium text-white transition-all hover:bg-[#4B61C0] hover:shadow-lg"
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
              className="font-serif text-4xl font-normal italic leading-[1.1] tracking-tight text-[#1a1a2e] sm:text-5xl md:text-6xl lg:text-[4.5rem]"
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
              className="mt-6 max-w-md text-base leading-relaxed text-[#1a1a2e]/70"
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
                className="h-12 flex-1 rounded-lg border border-[#B8BAD4] bg-white/60 px-4 text-sm text-[#1a1a2e] placeholder:text-[#1a1a2e]/40 backdrop-blur-sm focus:border-[#5C72D1] focus:outline-none focus:ring-2 focus:ring-[#5C72D1]/20 sm:max-w-[220px]"
              />
              <button
                type="submit"
                onClick={onPrimaryCtaClick}
                className="h-12 rounded-lg bg-[#5C72D1] px-6 text-sm font-medium text-white transition-all hover:bg-[#4B61C0] hover:shadow-lg"
              >
                {primaryCtaText}
              </button>
              <button
                type="button"
                onClick={onSecondaryCtaClick}
                className="h-12 rounded-lg border border-[#B8BAD4] bg-white/40 px-6 text-sm font-medium text-[#1a1a2e] backdrop-blur-sm transition-all hover:bg-white/60"
              >
                {secondaryCtaText}
              </button>
            </motion.form>

            {/* Disclaimer */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 max-w-md text-xs leading-relaxed text-[#1a1a2e]/50"
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
        <p className="text-sm text-[#1a1a2e]/60">{trustBadgeText}</p>

        {/* Logo Cloud */}
        <div className="mt-6 flex flex-wrap items-center gap-8 opacity-60 grayscale lg:gap-12">
          {trustLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center text-sm font-medium text-[#1a1a2e]/70"
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
