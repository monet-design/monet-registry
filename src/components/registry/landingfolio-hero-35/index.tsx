"use client";

import { motion } from "motion/react";
import { Play } from "lucide-react";
import "./font.css";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const IMAGES = {
  bread: {
    path: "/landingfolio-hero/hero-35/bread.png",
    alt: "Artisan sourdough bread cross-section",
    prompt: `Professional product photography of artisan sourdough bread cross-section.
Style: Clean product shot, professional lighting, transparent background
Layout: Side view showing interior texture and crust
Composition: Half loaf revealing air pockets, crusty exterior
Color palette: Golden brown crust, cream interior, natural tones
Mood: Artisanal, fresh, high-quality, authentic
Technical: High resolution, sharp focus, PNG with transparency`,
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

interface LandingfolioHero35Props {
  logoText?: string;
  logoAccent?: string;
  navItems?: NavItem[];
  tagline?: string;
  headlineTop?: string;
  headlineBottom?: string;
  description?: string;
  pricingText?: string;
  ctaPrimaryText?: string;
  ctaSecondaryText?: string;
  breadImage?: string;
  onCtaPrimaryClick?: () => void;
  onCtaSecondaryClick?: () => void;
  onSignUpClick?: () => void;
}

// Default values
const defaultNavItems: NavItem[] = [{ label: "Courses", href: "#courses" }];

// Wheat Icon for Logo
function WheatIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 22L12 12M12 12L7 7M12 12L17 7M12 12L12 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 7C7 7 5 5 5 3C5 3 7 3 7 5C7 5 9 3 9 3C9 5 7 7 7 7Z"
        fill="currentColor"
      />
      <path
        d="M17 7C17 7 15 5 15 3C15 3 17 3 17 5C17 5 19 3 19 3C19 5 17 7 17 7Z"
        fill="currentColor"
      />
      <path
        d="M12 7C12 7 10 5 10 3C10 3 12 3 12 5C12 5 14 3 14 3C14 5 12 7 12 7Z"
        fill="currentColor"
      />
      <path
        d="M12 2C12 2 10 0 10 -2C10 -2 12 -2 12 0C12 0 14 -2 14 -2C14 0 12 2 12 2Z"
        fill="currentColor"
        transform="translate(0, 5)"
      />
    </svg>
  );
}

// Main Component
export default function LandingfolioHero35({
  logoText = "Baker",
  logoAccent = "STREET",
  navItems = defaultNavItems,
  tagline = "Master the basics of baking",
  headlineTop = "The road to the",
  headlineBottom = "perfect loaf",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu penatibus pellentesque dolor consequat ligula egestas massa gravida. Porttitor venenatis enim praesent.",
  pricingText = "Starting at $9.99/month",
  ctaPrimaryText = "Get started",
  ctaSecondaryText = "Watch trailer",
  breadImage = IMAGES.bread.path,
  onCtaPrimaryClick,
  onCtaSecondaryClick,
  onSignUpClick,
}: LandingfolioHero35Props) {
  return (
    <section className="relative w-full min-h-screen flex flex-col bg-black">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between px-6 lg:px-12 xl:px-20 py-6"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <WheatIcon className="w-5 h-5 text-white" />
            <div className="flex items-baseline">
              <span className="font-instrument-serif text-white text-lg italic">
                {logoText}
              </span>
              <span className="text-white text-xs font-medium tracking-wider ml-0.5">
                {logoAccent}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/90 hover:text-white transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <button
              onClick={onSignUpClick}
              className="px-5 py-2 bg-transparent text-white text-sm font-medium rounded-full border border-white/60 hover:border-white hover:bg-white/10 transition-all"
            >
              Sign Up
            </button>
          </div>
        </motion.header>

        {/* Hero Content - Two Column Layout */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-12 xl:px-20 py-8 lg:py-0">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center max-w-xl">
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-400 text-sm md:text-base mb-4"
            >
              {tagline}
            </motion.p>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mb-6"
            >
              <h1 className="font-instrument-serif text-white text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
                {headlineTop}
              </h1>
              <h1 className="font-instrument-serif text-white text-4xl md:text-5xl lg:text-6xl italic tracking-tight leading-[1.1] mt-1">
                {headlineBottom}
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md"
            >
              {description}
            </motion.p>
          </div>

          {/* Right Column - Bread Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center justify-center lg:justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Bread Image with Reflection */}
              <div className="relative">
                <img
                  src={breadImage}
                  alt={IMAGES.bread.alt}
                  className="w-full h-auto object-contain relative z-10"
                />
                {/* Reflection Effect */}
                <div className="relative h-40 overflow-hidden mt-[-2px]">
                  <img
                    src={breadImage}
                    alt=""
                    className="w-full h-auto object-contain absolute top-0 left-0"
                    style={{
                      transform: "scaleY(-1)",
                      opacity: 0.5,
                      maskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 40%, transparent 80%)",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 40%, transparent 80%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Pricing Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="bg-white px-6 lg:px-12 xl:px-20 py-5"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Pricing Text */}
          <p className="text-gray-900 text-base font-medium">{pricingText}</p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            {/* Primary Button */}
            <button
              onClick={onCtaPrimaryClick}
              className="px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              {ctaPrimaryText}
            </button>

            {/* Secondary Button */}
            <button
              onClick={onCtaSecondaryClick}
              className="flex items-center gap-2 px-6 py-3 bg-transparent text-gray-900 text-sm font-medium rounded-full border border-gray-400 hover:border-gray-500 hover:bg-gray-50 transition-all"
            >
              <Play className="w-4 h-4 fill-current" />
              {ctaSecondaryText}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
