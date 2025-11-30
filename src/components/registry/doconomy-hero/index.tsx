"use client";

import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface DoconomyHeroProps {
  logoText?: string;
  navItems?: NavItem[];
  ctaButtonText?: string;
  headline?: string;
  description?: string;
  aboutButtonText?: string;
  backgroundImage?: string;
  onAboutClick?: () => void;
  onBookDemoClick?: () => void;
}

export default function DoconomyHero({
  logoText = "Doconomy",
  navItems = [
    { label: "SOLUTIONS", href: "#", hasDropdown: true },
    { label: "PRODUCTS", href: "#" },
    { label: "EXPERTISE", href: "#" },
    { label: "RESOURCES", href: "#" },
    { label: "ABOUT", href: "#" },
  ],
  ctaButtonText = "BOOK DEMO",
  headline = "EVERY\nTRANSACTION\nCOUNTS",
  description = "Doconomy partners with financial institutions to drive positive impact on a global scale by offering innovative banking tools supported by human-centric design, behavioral science and superior data.",
  aboutButtonText = "ABOUT US",
  backgroundImage = "/registry/doconomy-hero/background.jpg",
  onAboutClick,
  onBookDemoClick,
}: DoconomyHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Aerial city view"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-20 flex items-center justify-between px-6 md:px-12 py-5"
      >
        {/* Logo */}
        <div className="text-white text-lg font-medium tracking-wide">
          {logoText}
        </div>

        {/* Navigation Items - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-white text-xs tracking-widest hover:opacity-80 transition-opacity flex items-center gap-1"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
            </a>
          ))}
        </div>

        {/* Right Side - CTA & Menu */}
        <div className="flex items-center gap-6">
          <button
            onClick={onBookDemoClick}
            className="hidden md:block text-white text-xs tracking-widest hover:opacity-80 transition-opacity"
          >
            {ctaButtonText}
          </button>
          <button className="text-white hover:opacity-80 transition-opacity">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 px-6 md:px-12 pt-16 md:pt-24">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight whitespace-pre-line"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontStretch: "condensed",
            letterSpacing: "-0.02em",
          }}
        >
          {headline}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-white text-sm md:text-base leading-relaxed max-w-lg mt-8 md:mt-12"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {description}
        </motion.p>

        {/* About Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-8 flex items-center gap-3"
        >
          <span
            className="text-white text-xs tracking-widest"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {aboutButtonText}
          </span>
          <button
            onClick={onAboutClick}
            className="w-9 h-9 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
