"use client";

import { motion } from "motion/react";
import "./font.css";

// Types
interface SoundEthicsAboutHeroProps {
  logoText?: string;
  menuText?: string;
  headline?: string;
  subheadline?: string;
  backgroundImage?: string;
  onMenuClick?: () => void;
}

// Sound Ethics Logo Icon - horizontal lines
function SoundEthicsLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="4" width="20" height="2" fill="currentColor" />
      <rect x="2" y="8" width="16" height="2" fill="currentColor" />
      <rect x="2" y="12" width="20" height="2" fill="currentColor" />
      <rect x="2" y="16" width="12" height="2" fill="currentColor" />
      <rect x="2" y="20" width="20" height="2" fill="currentColor" />
    </svg>
  );
}

// Main Component
export default function SoundEthicsAboutHero({
  logoText = "SOUND\nETHICS",
  menuText = "MENU",
  headline = "OUR STORY",
  subheadline = "Advocating For Artists' Rights & New Standards For Ethical AI",
  backgroundImage = "/registry/sound-ethics-about-hero/bg.jpg",
  onMenuClick,
}: SoundEthicsAboutHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Grayscale */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={backgroundImage}
          alt="Music studio background"
          className="h-full w-full object-cover grayscale"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Header Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-20 flex items-start justify-between px-6 py-6 sm:px-10 lg:px-16"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <SoundEthicsLogo className="h-8 w-8 text-[#D7FE64]" />
          <span className="whitespace-pre-line text-xs font-bold uppercase leading-tight tracking-wider text-[#D7FE64]">
            {logoText}
          </span>
        </div>

        {/* Menu Button */}
        <button
          onClick={onMenuClick}
          className="flex items-center gap-2 text-[#D7FE64] transition-opacity hover:opacity-80"
        >
          <span className="text-sm font-medium tracking-wider">{menuText}</span>
        </button>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-120px)] flex-col items-center justify-center px-4">
        {/* Giant Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-oswald text-center text-[15vw] font-bold uppercase leading-[0.9] tracking-tight text-[#D7FE64] sm:text-[14vw] md:text-[13vw] lg:text-[12vw]"
        >
          {headline}
        </motion.h1>

        {/* QR Codes - decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-20"
        >
          <div className="h-12 w-12 rounded border border-[#D7FE64]/40 bg-[#D7FE64]/10 sm:h-16 sm:w-16" />
          <div className="h-12 w-12 rounded border border-[#D7FE64]/40 bg-[#D7FE64]/10 sm:h-16 sm:w-16" />
        </motion.div>
      </div>

      {/* Subheadline at Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute bottom-8 left-0 right-0 z-10 px-4 text-center sm:bottom-12"
      >
        <p className="mx-auto max-w-2xl text-sm font-light tracking-wide text-white/90 sm:text-base">
          {subheadline}
        </p>
      </motion.div>
    </section>
  );
}
