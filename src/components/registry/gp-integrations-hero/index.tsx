"use client";

import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Search, Phone, Menu } from "lucide-react";

interface GpIntegrationsHeroProps {
  /** Badge text above the heading */
  badge?: string;
  /** Main heading with bold style */
  headingBold?: string;
  /** Italic portion of the heading */
  headingItalic?: string;
  /** Description paragraph */
  description?: string;
  /** Primary CTA button text */
  primaryCtaText?: string;
  /** Secondary CTA button text */
  secondaryCtaText?: string;
  /** Top announcement bar text */
  announcementText?: string;
  /** Phone number display */
  phoneNumber?: string;
  /** Handler for primary CTA click */
  onPrimaryCtaClick?: () => void;
  /** Handler for secondary CTA click */
  onSecondaryCtaClick?: () => void;
}

// Logo component for G-P
function GPLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Abstract globe-like icon */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="2" />
        <ellipse
          cx="16"
          cy="16"
          rx="6"
          ry="12"
          stroke="white"
          strokeWidth="2"
        />
        <path d="M4 16H28" stroke="white" strokeWidth="2" />
        <path d="M8 8C11 10 21 10 24 8" stroke="white" strokeWidth="2" />
        <path d="M8 24C11 22 21 22 24 24" stroke="white" strokeWidth="2" />
      </svg>
      <span className="text-white font-semibold text-xl tracking-tight">
        G-P
      </span>
    </div>
  );
}

// Navigation item component
function NavItem({
  children,
  hasDropdown = false,
}: {
  children: React.ReactNode;
  hasDropdown?: boolean;
}) {
  return (
    <button className="flex items-center gap-1 text-white text-sm font-medium hover:opacity-80 transition-opacity">
      {children}
      {hasDropdown && <ChevronDown className="w-4 h-4" />}
    </button>
  );
}

export default function GpIntegrationsHero({
  badge = "INTEGRATIONS",
  headingBold = "Bring your workforce data\ntogether,",
  headingItalic = "all in one place.",
  description = "Simplify your hiring, onboarding, and payroll processes for your global teams by syncing\ninformation across best-in-class platforms for recruitment, payroll, benefits, and more.",
  primaryCtaText = "Book a demo",
  secondaryCtaText = "Explore G-P Meridian Suite",
  announcementText = "Grow Smarter. Go Further. Don't miss our latest product updates and enhancements.",
  phoneNumber = "+1(888)-855-5328",
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: GpIntegrationsHeroProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background with gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0046FF 0%, #0046FF 60%, #00D4AA 85%, #7FFF00 100%)",
        }}
      />

      {/* Top Announcement Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
        style={{ backgroundColor: "#00FFD4" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-center gap-2">
            <span className="text-[#003366] text-sm font-medium">
              {announcementText}
            </span>
            <button className="flex items-center gap-1 text-[#003366] text-sm font-semibold hover:underline">
              Learn more
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Secondary Nav Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-10 border-b border-white/10"
        style={{ backgroundColor: "#0046FF" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-end gap-6 text-sm">
            <span className="text-white/80">{phoneNumber}</span>
            <button className="text-white/80 hover:text-white transition-colors">
              Contact Us
            </button>
            <button className="text-white/80 hover:text-white transition-colors">
              Sign In
            </button>
            <div className="flex items-center gap-1">
              <span className="text-white">English</span>
              <ChevronDown className="w-4 h-4 text-white" />
            </div>
            <Search className="w-4 h-4 text-white cursor-pointer hover:opacity-80" />
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10"
        style={{ backgroundColor: "#0046FF" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Nav Items */}
            <div className="flex items-center gap-8">
              <GPLogo />
              <div className="hidden md:flex items-center gap-6">
                <NavItem hasDropdown>Solutions</NavItem>
                <NavItem hasDropdown>Products</NavItem>
                <NavItem hasDropdown>Global Guidance</NavItem>
                <NavItem hasDropdown>Customers</NavItem>
                <NavItem hasDropdown>Partners</NavItem>
                <NavItem hasDropdown>Resources</NavItem>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden md:block px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
                style={{
                  backgroundColor: "#FF4D6A",
                  color: "white",
                }}
              >
                Request a proposal
              </motion.button>
              <button className="md:hidden text-white">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span
              className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-6"
              style={{ color: "#00FFD4" }}
            >
              {badge}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
          >
            <span className="font-bold whitespace-pre-line">{headingBold}</span>{" "}
            <span className="italic font-normal">{headingItalic}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/80 text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed whitespace-pre-line"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onPrimaryCtaClick}
              className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-all"
              style={{
                backgroundColor: "#00FFD4",
                color: "#003366",
              }}
            >
              <ArrowRight className="w-4 h-4" />
              {primaryCtaText}
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onSecondaryCtaClick}
              className="px-6 py-3.5 rounded-full text-sm font-semibold bg-white transition-all"
              style={{
                color: "#003366",
              }}
            >
              {secondaryCtaText}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade (for visual continuity) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/10 to-transparent" />
    </section>
  );
}
