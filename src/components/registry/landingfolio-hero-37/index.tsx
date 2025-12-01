"use client";

import { motion } from "motion/react";
import { Play, Search } from "lucide-react";
import Image from "next/image";
import "./font.css";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const IMAGES = {
  hero: {
    path: "/landingfolio-hero/hero-37/bread-stack.jpg",
    alt: "Artisan sourdough bread stack",
    prompt: `Professional photography of artisan sourdough bread stack.
Style: Food photography, dramatic lighting, rustic aesthetic
Layout: Stacked bread loaves, vertical composition
Composition: Multiple loaves showing texture and crust detail
Color palette: Golden brown crusts, warm tones, dramatic shadows
Mood: Artisanal, premium, handcrafted
Technical: High resolution, sharp focus, dramatic side lighting`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Types
interface NavItem {
  label: string;
  href: string;
}

interface LandingfolioHero37Props {
  logoText?: string;
  logoAccent?: string;
  navItems?: NavItem[];
  tagline?: string;
  headlineItalic?: string;
  headlineNormal?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
}

// Default values
const defaultNavItems: NavItem[] = [
  { label: "About", href: "#" },
  { label: "Courses", href: "#" },
  { label: "Pricing", href: "#" },
];

// Wheat Icon Component - matching the original design
function WheatIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central stem */}
      <path
        d="M12 23V6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Top grain */}
      <ellipse
        cx="12"
        cy="3"
        rx="2"
        ry="3"
        fill="currentColor"
      />
      {/* Left side grains */}
      <ellipse
        cx="9"
        cy="8"
        rx="1.8"
        ry="2.8"
        transform="rotate(-40 9 8)"
        fill="currentColor"
      />
      <ellipse
        cx="9"
        cy="14"
        rx="1.8"
        ry="2.8"
        transform="rotate(-40 9 14)"
        fill="currentColor"
      />
      {/* Right side grains */}
      <ellipse
        cx="15"
        cy="11"
        rx="1.8"
        ry="2.8"
        transform="rotate(40 15 11)"
        fill="currentColor"
      />
      <ellipse
        cx="15"
        cy="17"
        rx="1.8"
        ry="2.8"
        transform="rotate(40 15 17)"
        fill="currentColor"
      />
    </svg>
  );
}

// Main Component
export default function LandingfolioHero37({
  logoText = "Baker",
  logoAccent = "STREET",
  navItems = defaultNavItems,
  tagline = "Master the basics of baking",
  headlineItalic = "Knead",
  headlineNormal = "like a pro",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu penatibus pellentesque dolor consequat ligula egestas massa gravida. Porttitor venenatis enim praesent.",
  primaryButtonText = "Get started",
  secondaryButtonText = "Watch trailer",
  onPrimaryClick,
  onSecondaryClick,
  imageSrc = IMAGES.hero.path,
  imageAlt = IMAGES.hero.alt,
}: LandingfolioHero37Props) {
  return (
    <section className="w-full min-h-screen bg-black overflow-hidden relative">
      {/* Main Grid Layout */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left - Image Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[50vh] lg:h-full order-1 lg:order-1"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            priority
          />
          {/* Logo - positioned over image */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 right-0 z-10 px-8 lg:px-12 py-6"
          >
            <div className="flex items-center gap-2">
              <WheatIcon className="w-5 h-5 text-white" />
              <span className="text-white text-lg tracking-tight">
                <span className="font-instrument-serif italic">{logoText}</span>
                <span className="font-semibold tracking-wider">{logoAccent}</span>
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right - Content Section */}
        <div className="relative order-2 lg:order-2 flex flex-col min-h-[50vh] lg:min-h-screen">
          {/* Navigation - Right side only */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="px-8 lg:px-16 py-6"
          >
            <div className="flex items-center justify-between">
              {/* Nav Links */}
              <div className="flex items-center gap-8 lg:gap-10">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-white text-sm font-normal hover:text-white/70 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Search Icon */}
              <button className="p-2 text-white hover:text-white/70 transition-colors ml-auto">
                <Search size={20} strokeWidth={1.5} />
              </button>
            </div>
          </motion.nav>

          {/* Content */}
          <div className="flex-1 flex items-center px-8 lg:px-16 pb-12 lg:pb-0">
            <div className="max-w-xl">
              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-[#9CA3AF] text-base mb-8"
              >
                {tagline}
              </motion.p>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-8"
              >
                <span className="block text-white text-6xl md:text-7xl lg:text-8xl font-instrument-serif italic leading-[1.05]">
                  {headlineItalic}
                </span>
                <span className="block text-white text-6xl md:text-7xl lg:text-8xl font-instrument-serif leading-[1.05]">
                  {headlineNormal}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-[#9CA3AF] text-base leading-relaxed mb-12 max-w-md"
              >
                {description}
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap items-center gap-5"
              >
                {/* Primary Button */}
                <button
                  onClick={onPrimaryClick}
                  className="px-10 py-4 bg-transparent border border-white text-white text-sm font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300"
                >
                  {primaryButtonText}
                </button>

                {/* Secondary Button */}
                <button
                  onClick={onSecondaryClick}
                  className="px-10 py-4 bg-transparent border border-white text-white text-sm font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3"
                >
                  <Play size={14} fill="currentColor" />
                  {secondaryButtonText}
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
