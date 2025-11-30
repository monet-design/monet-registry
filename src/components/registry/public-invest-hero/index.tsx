"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import "./font.css";

// Types
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface MediaLogo {
  name: string;
  width: number;
}

interface PublicInvestHeroProps {
  logoText?: string;
  headline?: string;
  description?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  navItems?: NavItem[];
  signInText?: string;
  getStartedText?: string;
  countryCode?: string;
  asSeenInText?: string;
  mediaLogos?: MediaLogo[];
  stockName?: string;
  stockPrice?: string;
  stockChange?: string;
  stockChangePercent?: string;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

// Logo Component
function PublicLogo({ text = "public" }: { text?: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-2.5 w-2.5 rounded-full bg-[#2141B6]" />
      <span className="text-base font-medium text-[#1A1A1A]">{text}</span>
    </div>
  );
}

// Stock Card Component (for phone mockup)
function StockCard({
  stockName = "StandFindr",
  stockPrice = "$51.55",
  stockChange = "$1.26",
  stockChangePercent = "2.35%",
}: {
  stockName?: string;
  stockPrice?: string;
  stockChange?: string;
  stockChangePercent?: string;
}) {
  return (
    <div className="flex flex-col rounded-[36px] bg-white p-6 shadow-xl w-[280px]">
      {/* Stock Header */}
      <div className="flex items-center gap-2 mb-2">
        <div className="flex -space-x-1">
          <div className="h-6 w-6 rounded-full bg-yellow-400" />
          <div className="h-6 w-6 rounded-full bg-yellow-500" />
        </div>
        <span className="text-sm font-medium text-gray-800">{stockName}</span>
      </div>

      {/* Price */}
      <div className="text-3xl font-semibold text-[#1A1A1A] mb-1">
        {stockPrice}
      </div>

      {/* Today's change */}
      <div className="flex items-center gap-2 text-sm mb-6">
        <span className="text-gray-500">Today</span>
        <span className="text-green-500">
          ↑ {stockChange} ({stockChangePercent})
        </span>
      </div>

      {/* Chart */}
      <div className="h-20 w-full mb-4">
        <svg
          viewBox="0 0 200 60"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 50 Q20 45 40 48 T80 35 T120 40 T160 25 T200 30"
            fill="none"
            stroke="#22C55E"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Time Range Buttons */}
      <div className="flex items-center gap-2">
        <button className="h-7 w-7 rounded-full bg-green-500 text-[10px] font-medium text-white">
          1D
        </button>
        <button className="text-[10px] font-medium text-gray-400 px-2">
          1W
        </button>
        <button className="text-[10px] font-medium text-gray-400 px-2">
          1M
        </button>
        <button className="text-[10px] font-medium text-gray-400 px-2">
          3M
        </button>
        <button className="text-[10px] font-medium text-gray-400 px-2">
          1Y
        </button>
        <button className="text-[10px] font-medium text-gray-400 px-2">
          All
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 my-4" />

      {/* About Section */}
      <div className="text-sm font-medium text-gray-800">About</div>
    </div>
  );
}

// Media Logo placeholder
function MediaLogoItem({ name, width }: { name: string; width: number }) {
  const logos: Record<string, React.ReactNode> = {
    "FAST COMPANY": (
      <span
        className="font-semibold tracking-wider text-gray-400"
        style={{ fontFamily: "sans-serif" }}
      >
        FAST<span className="text-gray-400">C</span>MPANY
      </span>
    ),
    FORTUNE: (
      <span className="font-bold tracking-wide text-gray-400">FORTUNE</span>
    ),
    "THE WALL STREET JO": (
      <span className="font-serif text-gray-400">THE WALL STREET JO</span>
    ),
    Forbes: <span className="font-serif italic text-gray-400">Forbes</span>,
  };

  return (
    <div
      className="flex items-center justify-center text-sm"
      style={{ width: `${width}px` }}
    >
      {logos[name] || <span className="text-gray-400">{name}</span>}
    </div>
  );
}

// Default data
const defaultNavItems: NavItem[] = [
  { label: "Invest", href: "#" },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Company", href: "#", hasDropdown: true },
  { label: "Premium", href: "#" },
  { label: "Alpha", href: "#" },
];

const defaultMediaLogos: MediaLogo[] = [
  { name: "FAST COMPANY", width: 120 },
  { name: "FORTUNE", width: 80 },
  { name: "THE WALL STREET JO", width: 140 },
  { name: "Forbes", width: 60 },
];

// Main Component
export default function PublicInvestHero({
  logoText = "public",
  headline = "Invest in\nstocks",
  description = "Build your portfolio with access to over 9,000 equities, and get the market insights you need to execute your investing strategies.",
  primaryCtaText = "Sign Up",
  secondaryCtaText = "Explore Stocks",
  navItems = defaultNavItems,
  signInText = "Sign In",
  getStartedText = "Get Started",
  countryCode = "US",
  asSeenInText = "As seen in",
  mediaLogos = defaultMediaLogos,
  stockName = "StandFindr",
  stockPrice = "$51.55",
  stockChange = "$1.26",
  stockChangePercent = "2.35%",
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: PublicInvestHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 flex items-center justify-between px-6 py-4 sm:px-8 lg:px-16"
      >
        {/* Logo */}
        <PublicLogo text={logoText} />

        {/* Center Nav Items */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-sm text-[#1A1A1A] hover:text-[#2141B6] transition-colors"
            >
              {item.label}
              {item.hasDropdown && (
                <ChevronDown size={14} className="text-gray-400" />
              )}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Country Selector */}
          <div className="hidden sm:flex items-center gap-1.5 text-sm text-[#1A1A1A]">
            <span className="text-base">🇺🇸</span>
            <span>{countryCode}</span>
            <ChevronDown size={14} className="text-gray-400" />
          </div>

          {/* Sign In */}
          <button className="text-sm text-[#1A1A1A] hover:text-[#2141B6] transition-colors">
            {signInText}
          </button>

          {/* Get Started */}
          <button className="rounded-full bg-[#2141B6] px-5 py-2 text-sm font-medium text-white hover:bg-[#1a3491] transition-colors">
            {getStartedText}
          </button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 sm:px-8 lg:px-16 lg:py-0 lg:max-w-[55%]">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-instrument-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#1A1A1A] leading-[1.1] whitespace-pre-line"
          >
            {headline}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 max-w-md text-base text-[#6B6B6B] leading-relaxed"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={onPrimaryCtaClick}
              className="rounded-full bg-[#2141B6] px-8 py-3.5 text-sm font-medium text-white hover:bg-[#1a3491] transition-colors"
            >
              {primaryCtaText}
            </button>
            <button
              onClick={onSecondaryCtaClick}
              className="rounded-full border border-[#D5D5D5] bg-white px-8 py-3.5 text-sm font-medium text-[#1A1A1A] hover:bg-gray-50 transition-colors"
            >
              {secondaryCtaText}
            </button>
          </motion.div>

          {/* As Seen In */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16"
          >
            <p className="text-xs text-gray-400 mb-4">{asSeenInText}</p>
            <div className="flex flex-wrap items-center gap-6">
              {mediaLogos.map((logo) => (
                <MediaLogoItem
                  key={logo.name}
                  name={logo.name}
                  width={logo.width}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Content - Holographic Background + Phone */}
        <div className="relative flex-1 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[50%]">
          {/* Holographic Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src="/registry/public-invest-hero/holographic-bg.png"
              alt="Holographic background"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative z-10 flex items-center justify-center h-full py-12 lg:py-0"
          >
            <div className="relative">
              <StockCard
                stockName={stockName}
                stockPrice={stockPrice}
                stockChange={stockChange}
                stockChangePercent={stockChangePercent}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
