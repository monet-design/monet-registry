"use client";

import { motion } from "motion/react";
import { ChevronDown, Download } from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface SketchHomeHeroProps {
  logoText?: string;
  headline?: string;
  description?: string;
  ctaText?: string;
  ctaSubtext?: string;
  signInText?: string;
  getStartedText?: string;
  navItems?: NavItem[];
  bannerImage?: string;
  bannerTitle?: string;
  bannerDescription?: string;
  bannerLinkText?: string;
  appScreenshot?: string;
  onCtaClick?: () => void;
  onSignInClick?: () => void;
  onGetStartedClick?: () => void;
  mode?: "light" | "dark";
}

const CUSTOMIZATION = {};

// Diamond Logo SVG
function DiamondLogo({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 2L22 12L12 22L2 12L12 2Z"
        fill="#1A1A1A"
        stroke="#1A1A1A"
        strokeWidth="1.5"
      />
      <path
        d="M12 6L18 12L12 18L6 12L12 6Z"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
    </svg>
  );
}

const defaultNavItems: NavItem[] = [
  { label: "Product", href: "#", hasDropdown: true },
  { label: "Learn", href: "#", hasDropdown: true },
  { label: "Pricing", href: "#" },
  { label: "Help", href: "#", hasDropdown: true },
];

export default function SketchHomeHero({
  logoText = "Sketch",
  headline = "Designers,\nwelcome home.",
  description = "Sketch puts the focus back on you and your work. We're not a do-everything product. We're a toolkit made by designers, for designers.",
  ctaText = "Get started for free",
  ctaSubtext = "Requires macOS Ventura (13.0.0) or newer.",
  signInText = "Sign In",
  getStartedText = "Get started",
  navItems = defaultNavItems,
  bannerImage = "/registry/sketch-home-hero/banner-preview.jpg",
  bannerTitle = "New in Sketch: Smart Animate",
  bannerDescription = "Bring movement to your prototypes with Smart Animate, easily swap Libraries and more in our latest update.",
  bannerLinkText = "Find out more",
  appScreenshot = "/registry/sketch-home-hero/app-screenshot.jpg",
  onCtaClick,
  onSignInClick,
  onGetStartedClick,
  mode = "light",
}: SketchHomeHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#F5E8F0] via-[#F8F0F5] to-white">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        {/* Left: Logo + Nav Items */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <DiamondLogo />
          </a>

          {/* Nav Items */}
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 text-sm font-medium text-[#1A1A1A] transition-colors hover:text-[#666]"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="h-3.5 w-3.5 text-[#999]" />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Sign In + Get Started */}
        <div className="flex items-center gap-3">
          <button
            onClick={onSignInClick}
            className="text-sm font-medium text-[#1A1A1A] transition-colors hover:text-[#666]"
          >
            {signInText}
          </button>
          <button
            onClick={onGetStartedClick}
            className="flex items-center gap-2 rounded-full bg-[#1A1A1A] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#333]"
          >
            {getStartedText}
            <Download className="h-4 w-4" />
          </button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="mx-auto max-w-7xl px-6 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">
        {/* Two Column Layout */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h1
              className="text-4xl font-bold leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {headline.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < headline.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h1>
          </motion.div>

          {/* Right Column: Description + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="max-w-md text-base leading-relaxed text-[#666] lg:text-lg">
              {description}
            </p>

            <div className="mt-6">
              <button
                onClick={onCtaClick}
                className="flex items-center gap-2 rounded-full bg-[#1A1A1A] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#333]"
              >
                {ctaText}
                <Download className="h-4 w-4" />
              </button>
              <p className="mt-3 text-xs text-[#999]">{ctaSubtext}</p>
            </div>
          </motion.div>
        </div>

        {/* Announcement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <div className="flex items-center gap-4 overflow-hidden rounded-xl border border-[#E5E0E5] bg-white p-2 shadow-sm sm:gap-6 sm:p-3">
            {/* Banner Image */}
            <div className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-lg sm:h-24 sm:w-32">
              <Image
                src={bannerImage}
                alt="Feature preview"
                fill
                className="object-cover"
              />
            </div>

            {/* Banner Content */}
            <div className="flex-1 py-1">
              <h3 className="text-sm font-semibold text-[#1A1A1A] sm:text-base">
                {bannerTitle}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-[#666] sm:text-sm">
                {bannerDescription}{" "}
                <a
                  href="#"
                  className="font-medium text-[#1A1A1A] underline underline-offset-2 hover:text-[#666]"
                >
                  {bannerLinkText}
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* App Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative mx-auto mt-12 max-w-6xl sm:mt-16"
        >
          <div className="overflow-hidden rounded-t-xl border border-b-0 border-[#E0E0E0] bg-white shadow-2xl">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 border-b border-[#E5E5E5] bg-[#FAFAFA] px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <div className="h-3 w-3 rounded-full bg-[#28C840]" />
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={appScreenshot}
                alt="App screenshot"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fade out gradient at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
