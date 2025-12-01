"use client";

import { Play, ChevronDown } from "lucide-react";
import "./font.css";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const IMAGES = {
  background: {
    path: "/landingfolio-hero/hero-29/bread-basket.jpg",
    alt: "Artisan bread basket",
    prompt: `Professional photography of artisan bread basket.
Style: Natural daylight photography, rustic aesthetic, warm tones
Layout: Overhead shot of woven basket filled with various breads
Composition: Multiple bread loaves, rustic setting, natural textures
Color palette: Warm browns, golden crusts, natural basket tones
Mood: Artisanal, fresh, inviting, homemade quality
Technical: High resolution, sharp focus, warm color temperature`,
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

interface LandingfolioHero29Props {
  logoText?: string;
  logoAccent?: string;
  navItems?: NavItem[];
  headlineTop?: string;
  headlineBottom?: string;
  description?: string;
  ctaPrimaryText?: string;
  ctaSecondaryText?: string;
  backgroundImage?: string;
  onCtaPrimaryClick?: () => void;
  onCtaSecondaryClick?: () => void;
  onScrollClick?: () => void;
}

// Default values
const defaultNavItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contacts", href: "#contacts" },
];

// Wheat Icon for Logo
function WheatIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
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
export default function LandingfolioHero29({
  logoText = "Baker",
  logoAccent = "STREET",
  navItems = defaultNavItems,
  headlineTop = "Master",
  headlineBottom = "Bread making",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu penatibus pellentesque dolor consequat ligula egestas massa gravida. Porttitor venenatis enim praesent.",
  ctaPrimaryText = "Get started",
  ctaSecondaryText = "Watch trailer",
  backgroundImage = IMAGES.background.path,
  onCtaPrimaryClick,
  onCtaSecondaryClick,
  onScrollClick,
}: LandingfolioHero29Props) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={IMAGES.background.alt}
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <div className="flex items-center justify-between px-6 lg:px-12 xl:px-20 py-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <WheatIcon className="w-6 h-6 text-white" />
            <div className="flex items-baseline">
              <span className="font-instrument-serif text-white text-xl italic">
                {logoText}
              </span>
              <span className="text-white text-sm font-medium tracking-wider ml-0.5">
                {logoAccent}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/90 hover:text-white transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
          {/* Headline */}
          <div className="text-center mb-6">
            <h1 className="font-instrument-serif text-white text-5xl md:text-6xl lg:text-7xl tracking-tight">
              {headlineTop}
            </h1>
            <h1 className="font-instrument-serif text-white text-5xl md:text-6xl lg:text-7xl italic tracking-tight mt-1">
              {headlineBottom}
            </h1>
          </div>

          {/* Description */}
          <p className="text-white/80 text-sm md:text-base leading-relaxed text-center max-w-lg mb-10">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Primary Button */}
            <button
              onClick={onCtaPrimaryClick}
              className="px-8 py-3.5 bg-white text-gray-900 text-sm font-medium rounded-full hover:bg-gray-100 transition-colors min-w-[160px]"
            >
              {ctaPrimaryText}
            </button>

            {/* Secondary Button */}
            <button
              onClick={onCtaSecondaryClick}
              className="flex items-center gap-3 px-8 py-3.5 bg-black/80 text-white text-sm font-medium rounded-full border border-white/80 hover:bg-black hover:border-white transition-all min-w-[160px] justify-center"
            >
              <Play className="w-4 h-4 fill-current" />
              {ctaSecondaryText}
            </button>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="flex justify-center pb-8">
          <button
            onClick={onScrollClick}
            className="w-12 h-12 rounded-full bg-black/80 border border-white/60 flex items-center justify-center hover:bg-black hover:border-white transition-all"
          >
            <ChevronDown className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
