"use client";

import { motion } from "motion/react";
import { Zap } from "lucide-react";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Types
interface NavItem {
  label: string;
  href: string;
}

interface LandingfolioHero15Props {
  mode?: "light" | "dark";
  logoText?: string;
  navItems?: NavItem[];
  tryForFreeText?: string;
  headline?: string;
  headlineAccent?: string;
  description?: string;
  emailPlaceholder?: string;
  ctaButtonText?: string;
  bottomText?: string;
  statNumber?: string;
  statText?: string;
  circularBadgeText?: string;
  heroImageSrc?: string;
  heroImageAlt?: string;
  onTryForFreeClick?: () => void;
  onEmailSubmit?: (email: string) => void;
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Resources", href: "#resources" },
  { label: "Pricing", href: "#pricing" },
];

// Circular Text Badge Component
function CircularTextBadge({ text = "MAKE REMOTE LIFE EASY" }: { text?: string }) {
  const characters = text.split("");
  const totalChars = characters.length;
  const anglePerChar = 360 / totalChars;

  return (
    <div className="relative w-28 h-28">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <path
            id="circlePath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text className="text-[10px] fill-gray-700 tracking-[0.25em]">
          <textPath href="#circlePath" startOffset="0%">
            {characters.map((char, i) => (
              <tspan key={i}>{char}</tspan>
            ))}
          </textPath>
        </text>
      </svg>
      {/* Center dot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-800 rounded-full" />
    </div>
  );
}

// Decorative Curved Lines
function DecorativeCurves() {
  return (
    <svg
      className="absolute bottom-8 right-8 w-64 h-32 opacity-60"
      viewBox="0 0 256 128"
      fill="none"
    >
      <path
        d="M20 100 Q80 20, 140 60 Q200 100, 256 40"
        stroke="#E8D5C4"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M0 110 Q60 30, 120 70 Q180 110, 240 50"
        stroke="#F67D28"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

// Main Component
export default function LandingfolioHero15({
  mode = "light",
  logoText = "Postcrafts",
  navItems = defaultNavItems,
  tryForFreeText = "Try for free",
  headline = "Get it done.",
  headlineAccent = "Fast, Easy.",
  description = "We help you to make your remote work life easier. Build a distraction free working experience.",
  emailPlaceholder = "Enter email to get started",
  ctaButtonText = "Try 14 days free",
  bottomText = "Instant access . No credit card required",
  statNumber = "395",
  statText = "Professionals have organized their desk via PostCra",
  circularBadgeText = "MAKE REMOTE LIFE EASY ",
  heroImageSrc = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
  heroImageAlt = "Professional working on laptop",
  onTryForFreeClick,
  onEmailSubmit,
}: LandingfolioHero15Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    onEmailSubmit?.(email);
  };

  return (
    <section className="w-full min-h-screen bg-[#FEFBEA] overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Image Section */}
        <div className="relative w-full lg:w-[45%] min-h-[400px] lg:min-h-screen">
          {/* Hero Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroImageSrc})`,
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Logo - Positioned on the image */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-6 left-6 z-20"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#F67D28] rounded flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-white rounded-sm" />
              </div>
              <span className="text-gray-900 font-semibold text-lg tracking-tight">
                {logoText}
              </span>
            </div>
          </motion.div>

          {/* Statistics Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute bottom-8 left-6 z-20"
          >
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-5 h-5 text-[#F67D28] fill-[#F67D28]" />
              <span className="text-white text-5xl font-light tracking-tight">
                {statNumber}
              </span>
            </div>
            <p className="text-white/90 text-sm max-w-[200px] leading-relaxed">
              {statText}
            </p>
          </motion.div>
        </div>

        {/* Right Content Section */}
        <div className="relative flex-1 flex flex-col">
          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-end gap-6 lg:gap-10 px-6 lg:px-12 py-6"
          >
            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-gray-700 hover:text-gray-900 transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Try for free button */}
            <button
              onClick={onTryForFreeClick}
              className="px-5 py-2.5 bg-[#F67D28] text-white text-sm font-medium rounded-full hover:bg-[#E06D1F] transition-colors"
            >
              {tryForFreeText}
            </button>
          </motion.nav>

          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center px-6 lg:px-12 xl:px-20 pb-12 lg:pb-0">
            {/* Circular Badge */}
            <motion.div
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-8"
            >
              <CircularTextBadge text={circularBadgeText} />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6"
            >
              {headline}
              <br />
              {headlineAccent}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-md mb-10"
            >
              {description}
            </motion.p>

            {/* Email Form */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              onSubmit={handleSubmit}
              className="flex items-center gap-2 bg-white rounded-full p-1.5 pl-6 max-w-md shadow-sm border border-gray-100 mb-4"
            >
              <input
                type="email"
                name="email"
                placeholder={emailPlaceholder}
                className="flex-1 bg-transparent text-sm text-gray-700 placeholder:text-gray-400 outline-none min-w-0"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#F67D28] text-white text-sm font-medium rounded-full hover:bg-[#E06D1F] transition-colors whitespace-nowrap"
              >
                {ctaButtonText}
              </button>
            </motion.form>

            {/* Bottom Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-gray-500 text-sm"
            >
              {bottomText}
            </motion.p>
          </div>

          {/* Decorative Curves */}
          <DecorativeCurves />
        </div>
      </div>
    </section>
  );
}
