"use client";

import { motion } from "motion/react";
import { ChevronDown, Calendar } from "lucide-react";
import "./font.css";

// Types
interface FlectoAboutHeroProps {
  logo?: {
    text?: string;
  };
  navItems?: Array<{
    label: string;
    active?: boolean;
  }>;
  missionLabel?: string;
  missionText?: string;
  visionLabel?: string;
  visionText?: string;
  bookDemoText?: string;
  loginText?: string;
  languageCode?: string;
  backgroundImageUrl?: string;
  onBookDemoClick?: () => void;
  onLoginClick?: () => void;
}

// Flecto Logo Icon (pixel-art style stacked blocks)
function FlectoLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top row - 2 blocks */}
      <rect x="4" y="2" width="8" height="8" rx="1" fill="#4ADE80" />
      <rect x="14" y="2" width="8" height="8" rx="1" fill="#4ADE80" />
      {/* Middle row - 2 blocks */}
      <rect x="4" y="12" width="8" height="8" rx="1" fill="#4ADE80" />
      <rect x="14" y="12" width="8" height="8" rx="1" fill="#4ADE80" />
      {/* Bottom row - 1 block */}
      <rect x="4" y="22" width="8" height="8" rx="1" fill="#4ADE80" />
    </svg>
  );
}

// Navigation Component
function Navigation({
  logo,
  navItems,
  bookDemoText,
  loginText,
  languageCode,
  onBookDemoClick,
  onLoginClick,
}: {
  logo: { text?: string };
  navItems: Array<{ label: string; active?: boolean }>;
  bookDemoText: string;
  loginText: string;
  languageCode: string;
  onBookDemoClick?: () => void;
  onLoginClick?: () => void;
}) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between px-6 py-4 lg:px-12"
    >
      {/* Left: Logo and Nav Items */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FlectoLogo className="w-7 h-7" />
          <span className="font-inter text-xl font-semibold text-white">
            {logo.text}
          </span>
        </div>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`font-inter text-sm transition-colors ${
                item.active
                  ? "text-white border-b border-white"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Right: Language, Book Demo, Login */}
      <div className="flex items-center gap-3">
        {/* Language Selector */}
        <button className="hidden sm:flex items-center gap-1 px-3 py-2 bg-white/10 rounded-full text-white text-sm font-inter hover:bg-white/20 transition-colors">
          {languageCode}
          <ChevronDown className="w-4 h-4" />
        </button>

        {/* Book a Demo */}
        <button
          onClick={onBookDemoClick}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-[#0f4f42] text-sm font-medium font-inter hover:bg-white/90 transition-colors"
        >
          <Calendar className="w-4 h-4" />
          {bookDemoText}
        </button>

        {/* Login */}
        <button
          onClick={onLoginClick}
          className="px-5 py-2 bg-[#4ADE80] rounded-full text-[#0a3d32] text-sm font-medium font-inter hover:bg-[#5bf5a6] transition-colors"
        >
          {loginText}
        </button>
      </div>
    </motion.nav>
  );
}

// Mission Card Component
function MissionCard({
  label,
  text,
  delay = 0,
}: {
  label: string;
  text: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      className="relative"
    >
      {/* Mission Label Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="absolute -top-5 left-1/2 -translate-x-1/2 z-10"
      >
        <span className="inline-block px-8 py-3 bg-white rounded-full text-[#0a3d32] text-sm font-medium font-inter shadow-lg">
          {label}
        </span>
      </motion.div>

      {/* Card Content */}
      <div className="bg-[#0a3d32]/90 backdrop-blur-sm rounded-3xl p-8 pt-12 lg:p-12 lg:pt-16 max-w-md">
        <p className="font-instrument-serif text-2xl lg:text-3xl text-white italic leading-snug">
          {text}
        </p>
      </div>
    </motion.div>
  );
}

// Vision Card Component
function VisionCard({
  label,
  text,
  delay = 0,
}: {
  label: string;
  text: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      className="relative"
    >
      {/* Vision Label Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="absolute -top-5 left-1/2 -translate-x-1/2 z-10"
      >
        <span className="inline-block px-8 py-3 bg-[#4ADE80] rounded-full text-[#0a3d32] text-sm font-medium font-inter shadow-lg">
          {label}
        </span>
      </motion.div>

      {/* Card Content */}
      <div className="bg-[#4ADE80] rounded-3xl p-8 pt-12 lg:p-12 lg:pt-16 max-w-md">
        <p className="font-instrument-serif text-2xl lg:text-3xl text-[#0a3d32] italic leading-snug">
          {text}
        </p>
      </div>
    </motion.div>
  );
}

// Background Image Overlay
function BackgroundImageOverlay({ imageUrl }: { imageUrl?: string }) {
  if (!imageUrl) {
    return (
      <>
        {/* Decorative placeholder with leaf-like patterns */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Top right leaf image area */}
          <div
            className="absolute top-0 right-0 w-3/4 h-3/4"
            style={{
              background: `
                radial-gradient(ellipse at 70% 30%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 40%)
              `,
            }}
          />
          {/* Bottom left leaf image area */}
          <div
            className="absolute bottom-0 left-0 w-2/3 h-2/3"
            style={{
              background: `
                radial-gradient(ellipse at 30% 70%, rgba(34, 197, 94, 0.12) 0%, transparent 50%),
                radial-gradient(ellipse at 20% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 40%)
              `,
            }}
          />
        </div>
      </>
    );
  }

  return (
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${imageUrl})`,
        opacity: 0.6,
      }}
    />
  );
}

// Main Component
export default function FlectoAboutHero({
  logo = { text: "Flecto" },
  navItems = [
    { label: "About", active: true },
    { label: "Market", active: false },
  ],
  missionLabel = "Mission",
  missionText = "We support a new generation of people and businesses in redefining consumer habits...",
  visionLabel = "Vision",
  visionText = "by reimagining ownership for a sustainable future.",
  bookDemoText = "Book a Demo",
  loginText = "Login",
  languageCode = "EN",
  backgroundImageUrl,
  onBookDemoClick,
  onLoginClick,
}: FlectoAboutHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#0f4f42] overflow-hidden font-inter">
      {/* Background Layer */}
      <BackgroundImageOverlay imageUrl={backgroundImageUrl} />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-[#0f4f42]/40" />

      {/* Content Layer */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navigation
          logo={logo}
          navItems={navItems}
          bookDemoText={bookDemoText}
          loginText={loginText}
          languageCode={languageCode}
          onBookDemoClick={onBookDemoClick}
          onLoginClick={onLoginClick}
        />

        {/* Hero Content */}
        <div className="relative px-6 lg:px-12 pt-8 lg:pt-16 pb-16 lg:pb-24 min-h-[calc(100vh-80px)]">
          {/* Cards Container - Asymmetric Layout */}
          <div className="relative max-w-6xl mx-auto">
            {/* Mission Card - Top Left */}
            <div className="relative z-20 lg:absolute lg:top-0 lg:left-0 mb-32 lg:mb-0">
              <MissionCard label={missionLabel} text={missionText} delay={0.3} />
            </div>

            {/* Vision Card - Bottom Right */}
            <div className="relative z-10 lg:absolute lg:bottom-0 lg:right-0 lg:top-auto lg:translate-y-[60%]">
              <VisionCard label={visionLabel} text={visionText} delay={0.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
