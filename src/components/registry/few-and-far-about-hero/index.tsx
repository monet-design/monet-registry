"use client";

import { motion } from "motion/react";
import { Menu } from "lucide-react";
import "./font.css";

interface NavItem {
  label: string;
  href: string;
}

interface FewAndFarAboutHeroProps {
  logoText?: string;
  navItems?: NavItem[];
  sectionLabel?: string;
  missionText?: string;
  highlightedText?: string;
  backgroundImage?: string;
  onMenuClick?: () => void;
  onNavClick?: (href: string) => void;
}

export default function FewAndFarAboutHero({
  logoText = "Few and   Far",
  navItems = [
    { label: "About us", href: "/about" },
    { label: "Our Work", href: "/work" },
  ],
  sectionLabel = "ABOUT US",
  missionText = "We work with charities to increase impact, tell\ninspiring stories and remove stigma. Their causes\n{highlight} and will help others to make our world a\nbetter place.",
  highlightedText = "helped us",
  backgroundImage = "/registry/few-and-far-about-hero/background.jpg",
  onMenuClick,
  onNavClick,
}: FewAndFarAboutHeroProps) {
  // Parse mission text to insert highlighted portion
  const renderMissionText = () => {
    const parts = missionText.split("{highlight}");
    return (
      <>
        {parts[0]}
        <span
          className="italic"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {highlightedText}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between px-8 py-6 sm:px-12 lg:px-16"
        >
          {/* Logo */}
          <div className="flex items-center">
            <span
              className="text-white text-base sm:text-lg font-normal tracking-wide"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {logoText}
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6 sm:gap-8">
            {/* Nav Links - Hidden on mobile */}
            <div className="hidden sm:flex items-center gap-6 sm:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick?.(item.href);
                  }}
                  className="text-white text-sm font-normal transition-opacity hover:opacity-70"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Menu Button */}
            <button
              onClick={onMenuClick}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D9D9D9] transition-colors hover:bg-white"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5 text-[#1A1A1A]" strokeWidth={2} />
            </button>
          </nav>
        </motion.header>

        {/* Spacer to push content to bottom */}
        <div className="flex-1" />

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-8 pb-16 sm:px-12 sm:pb-20 lg:px-16 lg:pb-24"
        >
          {/* Section Label */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-6 block text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {sectionLabel}
          </motion.span>

          {/* Mission Statement */}
          <h1
            className="max-w-2xl text-2xl sm:text-3xl md:text-4xl font-normal leading-snug text-white whitespace-pre-line"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {renderMissionText()}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
