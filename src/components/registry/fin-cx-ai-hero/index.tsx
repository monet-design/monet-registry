"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import "./font.css";

// Types
interface NavItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
}

interface FinCxAiHeroProps {
  logoIcon?: React.ReactNode;
  navItems?: NavItem[];
  rightNavItems?: { label: string; href?: string }[];
  primaryCtaText?: string;
  tagline?: string;
  headline?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  backgroundImage?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

// Default Snowflake Logo Icon
function SnowflakeLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="6" r="1.5" />
      <circle cx="12" cy="18" r="1.5" />
      <circle cx="6" cy="9" r="1.5" />
      <circle cx="18" cy="9" r="1.5" />
      <circle cx="6" cy="15" r="1.5" />
      <circle cx="18" cy="15" r="1.5" />
      <circle cx="8" cy="5" r="1" />
      <circle cx="16" cy="5" r="1" />
      <circle cx="4" cy="12" r="1" />
      <circle cx="20" cy="12" r="1" />
      <circle cx="8" cy="19" r="1" />
      <circle cx="16" cy="19" r="1" />
    </svg>
  );
}

// Header Navigation Component
function Header({
  logoIcon,
  navItems,
  rightNavItems,
  primaryCtaText,
}: {
  logoIcon: React.ReactNode;
  navItems: NavItem[];
  rightNavItems: { label: string; href?: string }[];
  primaryCtaText: string;
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white"
    >
      <div className="mx-auto flex items-center justify-between px-6 py-4">
        {/* Left - Logo and Nav */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1">
            {logoIcon}
            <ChevronDown className="w-3 h-3 text-black" />
          </a>

          {/* Nav Items */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href || "#"}
                className="flex items-center gap-1 text-[14px] text-black hover:text-black/70 transition-colors"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="w-3 h-3" />
                )}
              </a>
            ))}
          </nav>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-5">
          {rightNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href || "#"}
              className="hidden text-[14px] text-black hover:text-black/70 transition-colors sm:block"
            >
              {item.label}
            </a>
          ))}
          <button className="rounded-md bg-black px-4 py-2 text-[14px] font-medium text-white transition-colors hover:bg-black/80">
            {primaryCtaText}
          </button>
        </div>
      </div>
    </motion.header>
  );
}

// Hero Content Component
function HeroContent({
  tagline,
  headline,
  primaryButtonText,
  secondaryButtonText,
  logoIcon,
  onPrimaryClick,
  onSecondaryClick,
}: {
  tagline: string;
  headline: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  logoIcon: React.ReactNode;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}) {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
      {/* Logo Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6"
      >
        {logoIcon}
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-black/80"
      >
        {tagline}
      </motion.p>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-10 max-w-4xl font-instrument-serif text-5xl font-normal italic leading-[1.1] text-black sm:text-6xl md:text-7xl lg:text-[5.5rem]"
      >
        {headline.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i < headline.split("\n").length - 1 && <br />}
          </span>
        ))}
      </motion.h1>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        <button
          onClick={onPrimaryClick}
          className="rounded-md bg-black px-5 py-3 text-[14px] font-medium text-white transition-all hover:bg-black/80"
        >
          {primaryButtonText}
        </button>
        <button
          onClick={onSecondaryClick}
          className="rounded-md border border-black bg-transparent px-5 py-3 text-[14px] font-medium text-black transition-all hover:bg-black/5"
        >
          {secondaryButtonText}
        </button>
      </motion.div>
    </div>
  );
}

// Main Component
export default function FinCxAiHero({
  logoIcon = <SnowflakeLogo className="w-6 h-6 text-black" />,
  navItems = [
    { label: "Home" },
    { label: "Product", hasDropdown: true },
    { label: "AI Technology", hasDropdown: true },
    { label: "Solutions", hasDropdown: true },
    { label: "Customers" },
    { label: "Resources", hasDropdown: true },
    { label: "Pricing" },
  ],
  rightNavItems = [
    { label: "Contact sales" },
    { label: "Sign in" },
    { label: "View demo" },
  ],
  primaryCtaText = "Start free trial",
  tagline = "THE AI MODELS PURPOSE-BUILT FOR CUSTOMER SERVICE",
  headline = "Meet the\nfin-cx suite of models",
  primaryButtonText = "Start free trial",
  secondaryButtonText = "View demo",
  backgroundImage = "/registry/fin-cx-ai-hero/hero-background.jpg",
  onPrimaryClick,
  onSecondaryClick,
}: FinCxAiHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#d4d4b8]">
      {/* Header */}
      <Header
        logoIcon={logoIcon}
        navItems={navItems}
        rightNavItems={rightNavItems}
        primaryCtaText={primaryCtaText}
      />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <Image
            src={backgroundImage}
            alt="Abstract 3D art background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center">
        <HeroContent
          tagline={tagline}
          headline={headline}
          primaryButtonText={primaryButtonText}
          secondaryButtonText={secondaryButtonText}
          logoIcon={<SnowflakeLogo className="w-10 h-10 text-black" />}
          onPrimaryClick={onPrimaryClick}
          onSecondaryClick={onSecondaryClick}
        />
      </div>
    </section>
  );
}
