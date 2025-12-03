"use client";

import { motion } from "motion/react";
import { Menu } from "lucide-react";
import "./font.css";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface NavItem {
  label: string;
  href: string;
}

interface CaseStudyHeroProps {
  mode?: "light" | "dark";
  /** Logo text displayed in the header */
  logoText?: string;
  /** Navigation items */
  navItems?: NavItem[];
  /** Category label displayed above the title (e.g., "LATEST CASE STUDY") */
  categoryLabel?: string;
  /** Main headline title */
  title?: string;
  /** Description text below the title */
  description?: string;
  /** CTA button text */
  ctaText?: string;
  /** Background image URL */
  backgroundImage?: string;
  /** Callback when CTA button is clicked */
  onCtaClick?: () => void;
  /** Callback when nav item is clicked */
  onNavClick?: (href: string) => void;
  /** Callback when menu button is clicked */
  onMenuClick?: () => void;
}

export default function CaseStudyHero({
  logoText = "Few and Far",
  navItems = [
    { label: "About us", href: "/about" },
    { label: "Our Work", href: "/work" },
  ],
  categoryLabel = "LATEST CASE STUDY",
  title = "Supporting healthier minds to over half a million\npeople across Bradford & Craven",
  description = "A rejuvenated, accessible and inclusive platform to\nensure mental health support for the people of\nBradford, Airedale, Wharfedale and Craven.",
  ctaText = "See the results",
  backgroundImage = "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1920&q=80",
  onCtaClick,
  onNavClick,
  onMenuClick,
}: CaseStudyHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Case study background"
          className="h-full w-full object-cover"
        />
        {/* Subtle gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16"
      >
        {/* Logo */}
        <div className="flex items-center gap-1">
          <span className="text-base font-medium tracking-tight text-white sm:text-lg">
            {logoText.split(" ").slice(0, -1).join(" ")}
          </span>
          <span className="text-base font-medium tracking-[0.2em] text-white sm:text-lg">
            {" "}
            {logoText.split(" ").slice(-1)}
          </span>
          <span className="ml-0.5 text-[10px] text-white/80">*</span>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center gap-6 sm:gap-8">
          {/* Nav Links - Hidden on mobile */}
          <div className="hidden items-center gap-6 sm:flex sm:gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => onNavClick?.(item.href)}
                className="text-sm text-white/90 transition-colors hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Menu Button */}
          <button
            onClick={onMenuClick}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-transform hover:scale-105"
          >
            <Menu className="h-4 w-4 text-black" strokeWidth={2.5} />
          </button>
        </div>
      </motion.nav>

      {/* Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-80px)] flex-col justify-end px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
        <div className="max-w-3xl">
          {/* Category Label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 block text-[10px] font-medium uppercase tracking-[0.15em] text-white/70 sm:text-xs"
          >
            {categoryLabel}
          </motion.span>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-instrument-serif mb-5 whitespace-pre-line text-3xl font-normal leading-[1.15] tracking-tight text-white sm:text-4xl md:text-[42px] lg:text-5xl"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 whitespace-pre-line text-sm leading-relaxed text-white/75 sm:text-base"
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={onCtaClick}
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:scale-105 hover:shadow-lg"
          >
            {ctaText}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
