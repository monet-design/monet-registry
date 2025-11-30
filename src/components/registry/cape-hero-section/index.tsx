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
  subheadline?: string;
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
  { label: "Privacy", href: "#privacy" },
];

// Default background image (mountain landscape)
const defaultBackgroundImage =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2940&auto=format&fit=crop";

export default function CapeHeroSection({
  logoText = "Cape",
  navItems = defaultNavItems,
  ctaText = "Request Early Access",
  headline = "Switch to Cape,\nAmerica's privacy-first\nmobile carrier.",
  subheadline = "Your data belongs to you. Experience mobile service that respects your privacy.",
  backgroundImage = defaultBackgroundImage,
  onCtaClick,
  onNavClick,
}: CapeHeroSectionProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {/* Multi-layer gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      </motion.div>

      {/* Floating particles/grain texture overlay */}
      <div className="pointer-events-none absolute inset-0 z-[5] opacity-[0.03]"
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
      />

      {/* Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-20 px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-white/10 bg-white/[0.08] px-5 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:px-7 sm:py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-400 to-indigo-500 shadow-lg shadow-violet-500/25">
                  <span className="font-instrument-serif text-sm font-medium text-white">C</span>
                </div>
                <span className="font-instrument-serif text-xl font-normal tracking-tight text-white sm:text-2xl">
                  {logoText}
                </span>
              </motion.div>

              {/* Navigation Links - Hidden on mobile */}
              <div className="hidden items-center gap-1 lg:flex">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    onClick={() => onNavClick?.(item.href)}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    className="group relative rounded-lg px-4 py-2 text-[14px] font-medium text-white/70 transition-all duration-300 hover:text-white"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className="absolute inset-0 rounded-lg bg-white/0 transition-all duration-300 group-hover:bg-white/10" />
                  </motion.button>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={onCtaClick}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-wider text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 sm:px-6 sm:py-3"
              >
                <span className="relative z-10">{ctaText}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-indigo-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 lg:hidden"
              >
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-120px)] flex-col justify-end px-6 pb-24 sm:px-12 sm:pb-28 lg:px-20 lg:pb-32">
        <div className="mx-auto w-full max-w-6xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Now accepting early access requests
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-instrument-serif max-w-3xl whitespace-pre-line text-4xl font-normal italic leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
          >
            {headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-6 max-w-xl text-base font-normal leading-relaxed text-white/60 sm:text-lg md:mt-8"
          >
            {subheadline}
          </motion.p>

          {/* Bottom CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={onCtaClick}
              className="group relative overflow-hidden rounded-xl bg-white px-7 py-4 text-[13px] font-semibold uppercase tracking-wider text-[#0a0a0a] transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <button className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-[13px] font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Demo
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">Scroll</span>
            <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="h-2 w-1 rounded-full bg-white/50"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[5] h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
