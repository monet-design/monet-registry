"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import "./font.css";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    // Brand Primary
    accent: "#92D163",          // Primary green
    accentHover: "#82C153",     // Hover state
    secondaryButton: "#3E4C3F", // Secondary dark button
    secondaryButtonHover: "#4E5C4F",

    // Gradient for blob
    gradientStart: "#2D5A3D",
    gradientMid: "#1E4A2D",
    gradientEnd: "#1A3A25",
  },
} as const;

const IMAGES = {
  illustration: {
    path: "/registry/insurely-hero/illustration.png",
    alt: "Insurance data integration illustration",
    prompt: `3D illustration of insurance data integration concept.
Style: Clean, modern, professional 3D render
Layout: Central smartphone/device with floating UI elements
Composition: Light green and dark background, floating insurance cards/documents
Elements: Mobile device, UI cards, data visualization elements
Color palette: Green accent (#92D163), white, dark backgrounds
Mood: Professional, trustworthy, innovative
Technical: High resolution, smooth 3D render, transparent background compatible`,
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

interface PartnerLogo {
  name: string;
  logoElement: React.ReactNode;
}

interface InsurelyHeroProps {
  logo?: {
    text?: string;
    href?: string;
  };
  navItems?: NavItem[];
  headline?: string;
  subheadline?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  partnersTitle?: string;
  partners?: PartnerLogo[];
  illustrationSrc?: string;
}

// Default partner logos as SVG components
function SEBLogo() {
  return (
    <svg viewBox="0 0 80 32" className="h-6 w-auto" fill="#1A1A1A">
      <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold">
        S<tspan fill="#92D163">E</tspan>B
      </text>
    </svg>
  );
}

function AvanzaLogo() {
  return (
    <div className="flex items-center gap-1">
      <span className="text-lg font-bold tracking-tight text-[#1A1A1A]">AVANZA</span>
      <div className="flex gap-0.5">
        <div className="w-1 h-4 bg-[#00A651] rounded-sm" />
        <div className="w-1 h-5 bg-[#00A651] rounded-sm" />
        <div className="w-1 h-6 bg-[#00A651] rounded-sm" />
      </div>
    </div>
  );
}

function SoderbergLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-[#00A651] flex items-center justify-center">
        <span className="text-white text-xs font-bold">S</span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-xs font-semibold text-[#1A1A1A]">Soderberg</span>
        <span className="text-xs text-[#666]">&Partners</span>
      </div>
    </div>
  );
}

function NordnetLogo() {
  return (
    <div className="flex items-center gap-1">
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path d="M4 12L12 4L20 12L12 20L4 12Z" stroke="#1A1A1A" strokeWidth="2" />
      </svg>
      <span className="text-sm font-medium text-[#1A1A1A]">Nordnet</span>
    </div>
  );
}

function HDILogo() {
  return (
    <span className="text-2xl font-bold tracking-tight text-[#1A1A1A]">HDI</span>
  );
}

// Default navigation items
const defaultNavItems: NavItem[] = [
  { label: "Use Cases", href: "#", hasDropdown: true },
  { label: "Products", href: "#", hasDropdown: true },
  { label: "Docs", href: "#", hasDropdown: false },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Company", href: "#", hasDropdown: true },
];

// Default partner logos
const defaultPartners: PartnerLogo[] = [
  { name: "SEB", logoElement: <SEBLogo /> },
  { name: "Avanza", logoElement: <AvanzaLogo /> },
  { name: "Soderberg & Partners", logoElement: <SoderbergLogo /> },
  { name: "Nordnet", logoElement: <NordnetLogo /> },
  { name: "HDI", logoElement: <HDILogo /> },
];

// Insurely Logo Component
function InsurelyLogo({ text = "Insurely" }: { text?: string }) {
  return (
    <span className="text-xl font-semibold tracking-tight text-[#1A1A1A]">
      {text}
    </span>
  );
}

// Navigation Item Component
function NavItemComponent({ item }: { item: NavItem }) {
  return (
    <button className="flex items-center gap-1 text-sm text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors">
      {item.label}
      {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
    </button>
  );
}

// Blob Background SVG
function BlobBackground({ colors }: { colors: typeof COLORS.light }) {
  return (
    <svg
      viewBox="0 0 500 500"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.gradientStart} />
          <stop offset="50%" stopColor={colors.gradientMid} />
          <stop offset="100%" stopColor={colors.gradientEnd} />
        </linearGradient>
      </defs>
      <path
        d="M440,320 Q460,200 400,120 Q340,40 240,60 Q140,80 100,180 Q60,280 100,380 Q140,480 260,460 Q380,440 440,320 Z"
        fill="url(#blobGradient)"
      />
    </svg>
  );
}

// Main Component
export default function InsurelyHero({
  logo = { text: "Insurely", href: "#" },
  navItems = defaultNavItems,
  headline = "Real-time access to\ninsurance policy data.",
  subheadline = "Get real-time insights into policy details, coverage, and\nmore - directly from your customer's current insurance\nproviders. All through one single integration.",
  primaryButtonText = "Contact us",
  secondaryButtonText = "Try Insurely",
  onPrimaryClick,
  onSecondaryClick,
  partnersTitle = "Trusted by leading insurance providers and banks.",
  partners = defaultPartners,
  illustrationSrc = IMAGES.illustration.path,
}: InsurelyHeroProps) {
  const colors = COLORS.light;
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-4 sm:px-8 lg:px-16"
      >
        {/* Logo */}
        <a href={logo.href} className="flex items-center">
          <InsurelyLogo text={logo.text} />
        </a>

        {/* Nav Items - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavItemComponent key={item.label} item={item} />
          ))}
        </div>

        {/* Contact Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onPrimaryClick}
          style={{
            backgroundColor: colors.accent,
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.accentHover}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.accent}
          className="rounded-full px-5 py-2.5 text-sm font-medium text-gray-900 transition-colors"
        >
          {primaryButtonText}
        </motion.button>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-16 sm:px-8 sm:pt-16 lg:px-16 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight text-[#1A1A1A] leading-[1.1] whitespace-pre-line"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              {headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-base text-[#4A4A4A] leading-relaxed whitespace-pre-line max-w-lg"
            >
              {subheadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onPrimaryClick}
                style={{ backgroundColor: colors.accent }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.accentHover}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.accent}
                className="rounded-full px-6 py-3 text-sm font-medium text-gray-900 transition-all hover:shadow-md"
              >
                {primaryButtonText}
              </button>
              <button
                onClick={onSecondaryClick}
                style={{ backgroundColor: colors.secondaryButton }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.secondaryButtonHover}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.secondaryButton}
                className="rounded-full px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-md"
              >
                {secondaryButtonText}
              </button>
            </motion.div>
          </div>

          {/* Right Content - Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
              {/* Blob Background */}
              <BlobBackground colors={colors} />

              {/* Illustration */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <Image
                  src={illustrationSrc}
                  alt={IMAGES.illustration.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="border-t border-[#E5E5E5] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-16">
          {/* Partners Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-[#1A1A1A] mb-10"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            {partnersTitle}
          </motion.h2>

          {/* Partner Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              >
                {partner.logoElement}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
