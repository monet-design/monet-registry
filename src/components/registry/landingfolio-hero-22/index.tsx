"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Wallet } from "lucide-react";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface LandingfolioHero22Props {
  mode?: "customization" | "default";
  logoText?: string;
  navItems?: NavItem[];
  tryForFreeText?: string;
  headline?: string;
  subheadline?: string;
  ctaButtonText?: string;
  appAvailableText?: string;
  onCtaClick?: () => void;
  onTryForFreeClick?: () => void;
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Resources", href: "#resources" },
  { label: "Pricing", href: "#pricing" },
];

// Decorative dashed lines component
function DashedDecoration() {
  return (
    <svg
      className="absolute right-0 top-1/2 -translate-y-1/2 w-[120px] h-[200px] opacity-60"
      viewBox="0 0 120 200"
      fill="none"
    >
      {/* Multiple curved dashed lines */}
      <path
        d="M10 10 Q 60 50, 110 30"
        stroke="#1a1a1a"
        strokeWidth="2"
        strokeDasharray="6 6"
        fill="none"
      />
      <path
        d="M5 40 Q 55 80, 105 60"
        stroke="#1a1a1a"
        strokeWidth="2"
        strokeDasharray="6 6"
        fill="none"
      />
      <path
        d="M0 70 Q 50 110, 100 90"
        stroke="#1a1a1a"
        strokeWidth="2"
        strokeDasharray="6 6"
        fill="none"
      />
      <path
        d="M5 100 Q 55 140, 105 120"
        stroke="#1a1a1a"
        strokeWidth="2"
        strokeDasharray="6 6"
        fill="none"
      />
      <path
        d="M10 130 Q 60 170, 110 150"
        stroke="#1a1a1a"
        strokeWidth="2"
        strokeDasharray="6 6"
        fill="none"
      />
      <path
        d="M15 160 Q 65 200, 115 180"
        stroke="#1a1a1a"
        strokeWidth="2"
        strokeDasharray="6 6"
        fill="none"
      />
    </svg>
  );
}

// App Store Button Component
function AppStoreButton() {
  return (
    <a
      href="#"
      className="flex items-center gap-2 px-4 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <div className="flex flex-col">
        <span className="text-[10px] leading-tight opacity-80">
          DOWNLOAD ON THE
        </span>
        <span className="text-sm font-semibold leading-tight">App Store</span>
      </div>
    </a>
  );
}

// Google Play Button Component
function GooglePlayButton() {
  return (
    <a
      href="#"
      className="flex items-center gap-2 px-4 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
      </svg>
      <div className="flex flex-col">
        <span className="text-[10px] leading-tight opacity-80">GET IT ON</span>
        <span className="text-sm font-semibold leading-tight">Google Play</span>
      </div>
    </a>
  );
}

// Main Component
// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

export default function LandingfolioHero22({
  mode = "default",
  logoText = "Postcrafts",
  navItems = defaultNavItems,
  tryForFreeText = "Try for free",
  headline = "Take control\non your daily\nexpenses",
  subheadline = "Our A.I helps you to predict your expenses based on your previous activity and shares how you should manage you money.",
  ctaButtonText = "Get started for free",
  appAvailableText = "App available on",
  onCtaClick,
  onTryForFreeClick,
}: LandingfolioHero22Props) {
  const headlineLines = headline.split("\n");

  return (
    <section className="relative w-full min-h-screen bg-[#DCFBEC] overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-5 lg:px-12"
      >
        {/* Logo */}
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#86EFAB] rounded-lg flex items-center justify-center">
              <Wallet className="w-5 h-5 text-black" />
            </div>
            <span className="text-lg font-semibold text-gray-900">
              {logoText}
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <button
          onClick={onTryForFreeClick}
          className="px-5 py-2.5 bg-transparent text-gray-900 text-sm font-medium rounded-lg border border-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
        >
          {tryForFreeText}
        </button>
      </motion.nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-6 lg:px-12 pt-8 lg:pt-16 pb-12 max-w-7xl mx-auto">
        {/* Left Side - Phone Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative w-full lg:w-1/2 flex justify-center lg:justify-start mb-12 lg:mb-0"
        >
          {/* Yellow semi-circle decoration */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[200px] h-[400px] bg-[#F4C430] rounded-r-full opacity-90" />

          {/* Phone Image */}
          <div className="relative z-10">
            <Image
              src="/landingfolio-hero/hero-22/hand-phone.png"
              alt="Hand holding phone with expense tracking app"
              width={450}
              height={600}
              className="object-contain"
              priority
            />

            {/* Dashed decoration lines */}
            <DashedDecoration />
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full lg:w-1/2 lg:pl-12 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            {headlineLines.map((line, index) => (
              <span key={index}>
                {line}
                {index < headlineLines.length - 1 && <br />}
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-gray-800 mb-8 max-w-lg">
            {subheadline}
          </p>

          {/* CTA Button */}
          <motion.button
            onClick={onCtaClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-[#6EE7B6] text-gray-900 text-base font-semibold rounded-lg hover:bg-[#5DD4A3] transition-colors mb-16"
          >
            {ctaButtonText}
          </motion.button>

          {/* Divider */}
          <div className="w-full max-w-md border-t border-gray-300 mb-8" />

          {/* App Download Section */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-sm text-gray-700">{appAvailableText}</span>
            <div className="flex items-center gap-3">
              <AppStoreButton />
              <GooglePlayButton />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
