"use client";

import { motion } from "motion/react";
import { Globe, ChevronDown, Star } from "lucide-react";
import Image from "next/image";

interface KotaCountriesHeroProps {
  mode?: "customization" | "default";
  /** Top banner text */
  bannerText?: string;
  /** Badge label text */
  badgeText?: string;
  /** Main headline - use \n for line breaks */
  headline?: string;
  /** First dropdown placeholder */
  firstDropdownPlaceholder?: string;
  /** Second dropdown placeholder */
  secondDropdownPlaceholder?: string;
  /** Logo text */
  logoText?: string;
  /** Navigation items */
  navItems?: Array<{ label: string; hasDropdown?: boolean }>;
  /** CTA button text */
  ctaButtonText?: string;
  /** Login button text */
  loginText?: string;
  /** Banner link text */
  bannerLinkText?: string;
  /** Globe illustration path */
  globeImagePath?: string;
}

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

export default function KotaCountriesHero({
  mode = "default",
  bannerText = "Kota's 5-star customer reviews",
  badgeText = "COUNTRY AVAILABILITY",
  headline = "Browse our available\nbenefits in 30+\ncountries",
  firstDropdownPlaceholder = "Pick a country",
  secondDropdownPlaceholder = "Pick a benefit",
  logoText = "Kota",
  navItems = [
    { label: "Products", hasDropdown: true },
    { label: "Customers", hasDropdown: false },
    { label: "Country Availability", hasDropdown: false },
    { label: "Resources", hasDropdown: true },
    { label: "Pricing", hasDropdown: false },
  ],
  ctaButtonText = "See a demo",
  loginText = "Login",
  bannerLinkText = "have earned us 24 G2 badges. Book a demo to see why",
  globeImagePath = "/registry/kota-countries-hero/globe-illustration.png",
}: KotaCountriesHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#1C5552]">
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-[#3D3D3D] py-2.5 text-center"
      >
        <p className="text-sm text-white">
          {bannerText}{" "}
          <Star className="inline-block h-4 w-4 fill-yellow-400 text-yellow-400 mx-0.5" />{" "}
          <span className="text-white/90">
            {bannerLinkText}{" "}
            <span className="inline-block ml-1">&rarr;</span>
          </span>
        </p>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center justify-between px-8 py-4 lg:px-16"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <KotaLogo />
          <span className="text-xl font-semibold text-white">{logoText}</span>
        </div>

        {/* Nav Items */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-1 text-sm text-white/90 hover:text-white transition-colors"
            >
              {item.label}
              {item.hasDropdown && (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-sm text-white/90 hover:text-white transition-colors">
            {loginText}
          </button>
          <button className="rounded-full bg-[#F5F5DC] px-5 py-2.5 text-sm font-medium text-[#1C5552] hover:bg-[#EEEED2] transition-colors">
            {ctaButtonText}
          </button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative px-8 py-16 lg:px-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wider text-white/80">
                {badgeText}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl xl:text-6xl"
              style={{ whiteSpace: "pre-line" }}
            >
              {headline}
            </motion.h1>

            {/* Dropdowns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              {/* First Dropdown */}
              <button className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-white/70 hover:bg-white/15 transition-colors min-w-[180px]">
                <Globe className="h-5 w-5 text-white/60" />
                <span className="flex-1 text-left text-sm">
                  {firstDropdownPlaceholder}
                </span>
                <ChevronDown className="h-4 w-4 text-white/60" />
              </button>

              {/* Second Dropdown */}
              <button className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-white/70 hover:bg-white/15 transition-colors min-w-[180px]">
                <GridIcon className="h-5 w-5 text-white/60" />
                <span className="flex-1 text-left text-sm">
                  {secondDropdownPlaceholder}
                </span>
                <ChevronDown className="h-4 w-4 text-white/60" />
              </button>
            </motion.div>
          </div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[400px]">
              <Image
                src={globeImagePath}
                alt="Globe illustration"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Kota Logo Component
function KotaLogo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 14C4 8.48 8.48 4 14 4C19.52 4 24 8.48 24 14"
        stroke="#F5F5DC"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M8 14C8 10.69 10.69 8 14 8C17.31 8 20 10.69 20 14"
        stroke="#F5F5DC"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="14" cy="14" r="2" fill="#F5F5DC" />
    </svg>
  );
}

// Grid Icon Component
function GridIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="5" cy="5" r="2" fill="currentColor" />
      <circle cx="10" cy="5" r="2" fill="currentColor" />
      <circle cx="15" cy="5" r="2" fill="currentColor" />
      <circle cx="5" cy="10" r="2" fill="currentColor" />
      <circle cx="10" cy="10" r="2" fill="currentColor" />
      <circle cx="15" cy="10" r="2" fill="currentColor" />
      <circle cx="5" cy="15" r="2" fill="currentColor" />
      <circle cx="10" cy="15" r="2" fill="currentColor" />
      <circle cx="15" cy="15" r="2" fill="currentColor" />
    </svg>
  );
}
