"use client";

import { motion } from "motion/react";
import { ChevronDown, Download } from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  hasDropdown?: boolean;
}

interface SketchColorVariablesHeroProps {
  announcementText?: string;
  announcementLinkText?: string;
  navItems?: NavItem[];
  featureLabel?: string;
  headline?: string;
  highlightText?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  handwrittenText?: string;
  rgbValue?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

function SketchLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 1.5L2 6.5L12 11.5L22 6.5L12 1.5Z" />
      <path d="M2 12L12 17L22 12" />
      <path d="M2 17.5L12 22.5L22 17.5" />
    </svg>
  );
}

function ColorPickerIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/registry/sketch-color-variables-hero/color-picker-icon.png"
        alt="Color picker"
        width={120}
        height={120}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

function HandDrawnArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M8 32C12 28 20 20 28 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 8L28 12L24 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const defaultNavItems: NavItem[] = [
  { label: "Product", hasDropdown: true },
  { label: "Learn", hasDropdown: true },
  { label: "Pricing", hasDropdown: false },
  { label: "Help", hasDropdown: true },
];

export default function SketchColorVariablesHero({
  announcementText = "New: Smart Animate",
  announcementLinkText = "Learn more",
  navItems = defaultNavItems,
  featureLabel = "FEATURE",
  headline = "Keep your color\npalette in sync with",
  highlightText = "Color Variables",
  description = "Create reusable color palettes that sync across your designs, keep colors consistent and make document-wide changes faster.",
  primaryButtonText = "Try Sketch for free",
  secondaryButtonText = "Read the docs",
  handwrittenText = "Choose color",
  rgbValue = "RGB (254, 165, 171)",
  onPrimaryClick,
  onSecondaryClick,
}: SketchColorVariablesHeroProps) {
  return (
    <section className="relative w-full bg-[#FAFAFA] overflow-hidden">
      {/* Announcement Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full bg-[#1A1A1C] py-2.5 px-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-white">
            <span className="font-semibold">{announcementText}</span>
            <span className="text-white/60">—</span>
            <span className="text-white/80">Bring movement to your prototypes.</span>
            <button className="font-semibold underline underline-offset-2 hover:text-white/90 transition-colors">
              {announcementLinkText}
            </button>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            {/* Thumbnail images placeholder */}
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-12 h-8 rounded-md bg-gradient-to-br from-purple-600 to-blue-600 border border-white/20"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="w-full py-4 px-4 bg-white border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <SketchLogo className="w-6 h-6 text-[#1A1A1C]" />
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className="flex items-center gap-1 text-sm text-[#1A1A1C] hover:text-gray-600 transition-colors"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm text-[#1A1A1C] hover:text-gray-600 transition-colors">
              Sign In
            </button>
            <button className="flex items-center gap-2 bg-[#1A1A1C] text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-[#333] transition-colors">
              Get started
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div
              className="relative rounded-[20px] overflow-hidden aspect-square max-w-[420px] mx-auto"
              style={{
                background: "linear-gradient(180deg, #FEA5AB 0%, #E9859F 100%)",
              }}
            >
              {/* Pink circle background for icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[55%] rounded-full bg-[#F5B6CD]/60" />

              {/* Color Picker Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%]">
                <ColorPickerIcon className="w-full h-full" />
              </div>

              {/* RGB Value Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg px-4 py-2.5"
              >
                <span className="text-sm font-medium text-[#1A1A1C]">
                  {rgbValue}
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col"
          >
            {/* Feature Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="inline-flex items-center self-start bg-[#E5E5E5] text-[#1A1A1C] text-[11px] font-semibold tracking-wider px-3 py-1.5 rounded-full mb-6"
            >
              {featureLabel}
            </motion.span>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1C] leading-[1.15] mb-2">
              {headline.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < headline.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h1>

            {/* Highlighted Text */}
            <h2
              className="text-4xl lg:text-5xl font-bold leading-[1.15] mb-6 italic"
              style={{
                background: "linear-gradient(90deg, #FA6B8C 0%, #F5B6CD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {highlightText}
            </h2>

            {/* Description */}
            <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-md">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onPrimaryClick}
                className="bg-[#1A1A1C] text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#333] transition-colors"
              >
                {primaryButtonText}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onSecondaryClick}
                className="bg-white text-[#1A1A1C] text-sm font-medium px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                {secondaryButtonText}
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Handwritten annotation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-center gap-2 mt-12 pt-8 border-t border-gray-200"
        >
          <HandDrawnArrow className="text-[#F5B6CD] rotate-[-20deg]" />
          <span
            className="text-xl italic"
            style={{
              fontFamily: "'Caveat', cursive",
              color: "#F5B6CD",
            }}
          >
            {handwrittenText}
          </span>
        </motion.div>
      </div>

      {/* Google Font for handwritten text */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap');
      `}</style>
    </section>
  );
}
