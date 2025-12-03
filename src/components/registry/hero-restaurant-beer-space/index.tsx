"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {},  // 이 컴포넌트는 Tailwind semantic colors만 사용
  dark: {},
} as const;

const IMAGES = {
  background: {
    path: "/registry/hero-restaurant-beer-space/background.jpg",
    alt: "Restaurant interior",
    prompt: `Atmospheric restaurant and bar interior photograph.
Style: Natural, warm, inviting hospitality photography
Layout: Wide angle interior shot showing dining space and bar area
Composition: Wooden tables and chairs, industrial-style lighting, exposed brick or modern finishes
Color palette: Warm wood tones, ambient golden lighting, neutral walls, metallic accents
Elements: Bar counter, beer taps, dining tables, pendant lights, cozy seating areas
Mood: Welcoming, sophisticated, craft beer culture, casual dining atmosphere
Technical: High resolution, natural lighting mixed with ambient interior lights, slight vignette`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

// Types
interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface HeroRestaurantBeerSpaceProps {
  mode?: "light" | "dark";
  logoText?: string;
  navItems?: NavItem[];
  languageOptions?: string[];
  currentLanguage?: string;
  subtitle?: string;
  title?: string;
  address?: string;
  phone?: string;
  menuButtonText?: string;
  bookButtonText?: string;
  backgroundImage?: string;
  onMenuClick?: () => void;
  onBookClick?: () => void;
}

// Wheat Logo Icon
function WheatLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 32"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2v28M8 6c0 2 2 4 4 4s4-2 4-4M8 12c0 2 2 4 4 4s4-2 4-4M8 18c0 2 2 4 4 4s4-2 4-4M10 24c0 1.5 1 3 2 3s2-1.5 2-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Default navigation items
const defaultNavItems: NavItem[] = [
  { label: "Brewery", href: "#" },
  { label: "Restaurant", href: "#", isActive: true },
  { label: "MOVA BAR", href: "#" },
  { label: "Shop", href: "#" },
  { label: "Cooperation", href: "#" },
  { label: "Contacts", href: "#" },
];

// Main Component
export default function HeroRestaurantBeerSpace({
  mode = "light",
  logoText = "MOVA",
  navItems = defaultNavItems,
  languageOptions = ["Ukp", "Eng"],
  currentLanguage = "Eng",
  subtitle = "RESTAURANT",
  title = "BEER SPACE",
  address = "PRATSI AVENUE, 8, DNIPRO",
  phone = "+38 067 280 19 01",
  menuButtonText = "MENU",
  bookButtonText = "BOOK A TABLE",
  backgroundImage = IMAGES.background.path,
  onMenuClick,
  onBookClick,
}: HeroRestaurantBeerSpaceProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Restaurant interior"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between px-6 py-5 sm:px-10 lg:px-12"
        >
          {/* Logo */}
          <div className="flex items-center gap-1.5">
            <WheatLogo className="h-5 w-5 text-white" />
            <span className="text-sm font-medium tracking-wider text-white">
              {logoText}
            </span>
          </div>

          {/* Center Navigation */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-[13px] tracking-wide transition-colors ${
                  item.isActive
                    ? "text-white underline underline-offset-4"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Language Selector */}
          <div className="hidden items-center gap-2 text-[13px] text-white/80 sm:flex">
            {languageOptions.map((lang, index) => (
              <span key={lang} className="flex items-center">
                <button
                  className={`transition-colors ${
                    lang === currentLanguage
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {lang}
                </button>
                {index < languageOptions.length - 1 && (
                  <span className="ml-2 text-white/40">|</span>
                )}
              </span>
            ))}
          </div>
        </motion.nav>

        {/* Main Content */}
        <div className="flex flex-1 flex-col items-center justify-center px-6">
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-xs tracking-[0.3em] text-white/90"
          >
            {subtitle}
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-center font-serif text-5xl italic tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            {title}
          </motion.h1>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-end justify-between px-6 pb-8 sm:px-10 lg:px-12"
        >
          {/* Address & Phone */}
          <div className="flex flex-col gap-1 text-[11px] tracking-wider text-white/90 sm:flex-row sm:items-center sm:gap-4">
            <span>{address}</span>
            <span className="hidden sm:inline text-white/50">|</span>
            <span>{phone}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center">
            {/* Menu Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onMenuClick}
              className="flex h-24 w-24 items-center justify-center rounded-full border border-white/30 bg-white/90 text-xs font-medium tracking-wider text-neutral-900 backdrop-blur-sm transition-all hover:bg-white sm:h-28 sm:w-28"
            >
              {menuButtonText}
            </motion.button>

            {/* Book Button - slightly overlapping */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onBookClick}
              className="-ml-4 flex h-24 w-24 items-center justify-center rounded-full border border-white/30 bg-white/90 text-xs font-medium tracking-wider text-neutral-900 backdrop-blur-sm transition-all hover:bg-white sm:h-28 sm:w-28"
            >
              {bookButtonText}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Google Fonts for Playfair Display */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500;1,600&display=swap');
      `}</style>
    </section>
  );
}
