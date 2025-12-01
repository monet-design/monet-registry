"use client";

import { motion } from "motion/react";
import { Menu, Play } from "lucide-react";

// Types
interface NavItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface RivianR2HeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  modelTabs?: NavItem[];
  activeModel?: string;
  rightNavItems?: NavItem[];
  heroLetter?: string;
  heroNumber?: string;
  videoPreviewImage?: string;
  playButtonText?: string;
  comingText?: string;
  comingYear?: string;
  priceLabel?: string;
  price?: string;
  ctaText?: string;
  onPlayClick?: () => void;
  onReserveClick?: () => void;
}

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Rivian Logo SVG
function RivianLogo({ className = "h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="13"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="14"
        fontWeight="500"
        letterSpacing="0.15em"
      >
        RIVIAN
      </text>
    </svg>
  );
}

// Model Tab Component
function ModelTab({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick?: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-4 py-1.5 text-sm font-medium transition-colors rounded-full ${
        isActive
          ? "bg-[#1A1A1A] text-white"
          : "text-[#1A1A1A] hover:bg-[#1A1A1A]/5"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {label}
    </motion.button>
  );
}

// Default Props
const defaultModelTabs: NavItem[] = [
  { label: "R1T", isActive: false },
  { label: "R1S", isActive: false },
  { label: "R2", isActive: true },
  { label: "R3", isActive: false },
];

const defaultRightNavItems: NavItem[] = [
  { label: "Demo Drive", href: "#" },
  { label: "Sign In", href: "#" },
];

// Main Component
export default function RivianR2Hero({
  mode = "light",
  logoText = "RIVIAN",
  modelTabs = defaultModelTabs,
  rightNavItems = defaultRightNavItems,
  heroLetter = "R",
  heroNumber = "2",
  videoPreviewImage = "/registry/rivian-r2-hero/video-preview.jpg",
  playButtonText = "Play",
  comingText = "Coming",
  comingYear = "2026",
  priceLabel = "Starting at",
  price = "$45,000",
  ctaText = "Reserve",
  onPlayClick,
  onReserveClick,
}: RivianR2HeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#E7E6DD] overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between px-6 py-4 sm:px-8 lg:px-10"
      >
        {/* Left Nav - Menu & Model Tabs */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button className="text-[#1A1A1A] hover:opacity-70 transition-opacity">
            <Menu size={20} strokeWidth={1.5} />
          </button>
          <div className="hidden sm:flex items-center gap-1">
            {modelTabs.map((tab, index) => (
              <ModelTab
                key={index}
                label={tab.label}
                isActive={tab.isActive || false}
              />
            ))}
          </div>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <span className="text-[#1A1A1A] text-sm sm:text-base font-medium tracking-[0.2em]">
            {logoText}
          </span>
        </div>

        {/* Right Nav */}
        <div className="flex items-center gap-4 sm:gap-6">
          {rightNavItems.map((item, index) => (
            <a
              key={index}
              href={item.href || "#"}
              className="text-[#1A1A1A] text-sm font-medium hover:opacity-70 transition-opacity hidden sm:block"
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative flex items-center justify-center min-h-[calc(100vh-120px)]">
        {/* Large Background Letter - Left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 sm:-translate-x-1/4 select-none pointer-events-none"
        >
          <span
            className="text-[300px] sm:text-[400px] lg:text-[500px] font-bold text-[#1A1A1A]/90 leading-none"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            {heroLetter}
          </span>
        </motion.div>

        {/* Large Background Number - Right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 sm:translate-x-1/4 select-none pointer-events-none"
        >
          <span
            className="text-[300px] sm:text-[400px] lg:text-[500px] font-bold text-[#1A1A1A]/90 leading-none"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            {heroNumber}
          </span>
        </motion.div>

        {/* Video Preview Container - Stadium Shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10 w-[85%] sm:w-[65%] md:w-[55%] lg:w-[50%] aspect-[16/9] max-w-2xl"
        >
          {/* Stadium-shaped video container */}
          <div
            className="relative w-full h-full overflow-hidden shadow-2xl"
            style={{ borderRadius: "9999px / 50%" }}
          >
            <img
              src={videoPreviewImage}
              alt="Vehicle Preview"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better play button visibility */}
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Play Button */}
          <motion.button
            onClick={onPlayClick}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-x-8 sm:translate-x-12 lg:translate-x-16 w-16 h-16 sm:w-20 sm:h-20 bg-[#ECA107] rounded-full flex items-center justify-center gap-1.5 shadow-lg hover:bg-[#D99206] transition-colors"
          >
            <Play
              size={16}
              fill="#1A1A1A"
              className="text-[#1A1A1A] ml-0.5"
              strokeWidth={0}
            />
            <span className="text-[#1A1A1A] text-sm font-medium">
              {playButtonText}
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-0 right-0 px-6 sm:px-8 lg:px-10 flex items-end justify-between"
      >
        {/* Coming Soon & Price */}
        <div className="flex gap-8 sm:gap-12">
          <div className="flex flex-col">
            <span className="text-[#1A1A1A] text-sm sm:text-base font-medium">
              {comingText}
            </span>
            <span className="text-[#1A1A1A] text-sm sm:text-base font-medium">
              {comingYear}
              <sup className="text-xs ml-0.5">1</sup>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#1A1A1A] text-sm sm:text-base font-medium">
              {priceLabel}
            </span>
            <span className="text-[#1A1A1A] text-sm sm:text-base font-medium">
              {price}
              <sup className="text-xs ml-0.5">2</sup>
            </span>
          </div>
        </div>

        {/* Reserve Button */}
        <motion.button
          onClick={onReserveClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#1A1A1A] text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-full text-sm font-medium hover:bg-[#2A2A2A] transition-colors"
        >
          {ctaText}
        </motion.button>
      </motion.div>
    </section>
  );
}
