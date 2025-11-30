"use client";

import { motion } from "motion/react";
import "./font.css";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface CapeHeroSectionProps {
  logoText?: string;
  navItems?: NavItem[];
  ctaText?: string;
  headline?: string;
  backgroundImage?: string;
  onCtaClick?: () => void;
  onNavClick?: (href: string) => void;
}

// Default navigation items
const defaultNavItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "FAQs", href: "#faqs" },
  { label: "Blog", href: "#blog" },
  { label: "Careers", href: "#careers" },
  { label: "Commitment to Privacy", href: "#privacy" },
];

// Default background image (mountain landscape with blurred person)
const defaultBackgroundImage =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2940&auto=format&fit=crop";

export default function CapeHeroSection({
  logoText = "Cape",
  navItems = defaultNavItems,
  ctaText = "REQUEST EARLY ACCESS",
  headline = "Switch to Cape,\nAmerica's privacy-first\nmobile carrier.",
  backgroundImage = defaultBackgroundImage,
  onCtaClick,
  onNavClick,
}: CapeHeroSectionProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-20 mx-4 mt-4 sm:mx-6 sm:mt-6"
      >
        <div className="mx-auto max-w-6xl rounded-xl bg-white/95 backdrop-blur-sm px-5 py-3 shadow-sm sm:px-6 sm:py-3.5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <span className="font-instrument-serif text-xl font-normal text-[#1A1A1A] sm:text-2xl">
                {logoText}
              </span>
            </div>

            {/* Navigation Links - Hidden on mobile */}
            <div className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => onNavClick?.(item.href)}
                  className="text-[15px] text-[#1A1A1A] transition-colors hover:text-[#666]"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={onCtaClick}
              className="rounded-md bg-[#B8B4F0] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#1A1A1A] transition-all hover:bg-[#A8A4E0] sm:px-5 sm:py-2.5"
            >
              {ctaText}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-120px)] items-end px-6 pb-16 sm:px-12 sm:pb-20 lg:px-20 lg:pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-instrument-serif max-w-2xl whitespace-pre-line text-3xl italic font-normal leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-[56px]"
        >
          {headline}
        </motion.h1>
      </div>
    </section>
  );
}
