"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    bg: "#F5F5F0", // Sand
    text: "#1C1917", // Charcoal
    textMuted: "rgba(28, 25, 23, 0.8)",
    accent: "#D2886F", // Clay
    accentHover: "rgba(210, 136, 111, 0.9)",
    border: "rgba(28, 25, 23, 0.1)",
    stone: "#E8E6E1",
    ctaBg: "#1C1917",
    ctaText: "#F5F5F0",
  },
  dark: {
    bg: "#1C1917",
    text: "#F5F5F0",
    textMuted: "rgba(245, 245, 240, 0.8)",
    accent: "#D2886F",
    accentHover: "rgba(210, 136, 111, 0.9)",
    border: "rgba(245, 245, 240, 0.1)",
    stone: "#2D2926",
    ctaBg: "#F5F5F0",
    ctaText: "#1C1917",
  },
} as const;

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/#pricing-section" },
  { label: "FAQ", href: "/#faq-section" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

interface LoadfastStoreHeaderProps {
  mode?: "light" | "dark";
}

// LoadFast Logo Icon
function LoadFastIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="32" height="32" rx="6" fill="#D2886F" />
      <path
        d="M8 12L16 8L24 12V20L16 24L8 20V12Z"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      <path d="M16 8V24" stroke="white" strokeWidth="2" />
      <path d="M8 12L16 16L24 12" stroke="white" strokeWidth="2" />
      <circle cx="16" cy="16" r="3" fill="white" />
    </svg>
  );
}

export default function LoadfastStoreHeader({
  mode = "light",
}: LoadfastStoreHeaderProps) {
  const colors = COLORS[mode];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{
        backgroundColor: colors.bg,
        borderColor: colors.border,
      }}
    >
      <nav
        className="container flex items-center justify-between px-6 py-4 mx-auto"
        aria-label="Global"
      >
        {/* Left Side - Logo and Nav */}
        <div className="flex items-center gap-12">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 shrink-0"
            title="LoadFast homepage"
          >
            <LoadFastIcon className="w-8 h-8" />
            <span
              className="font-serif font-bold text-xl tracking-tight"
              style={{ color: colors.text }}
            >
              LoadFast
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors"
                style={{ color: colors.textMuted }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = colors.text)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = colors.textMuted)
                }
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md transition-colors"
          style={{ color: colors.text }}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open main menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="text-sm font-medium px-4 py-2 transition-colors"
            style={{ color: colors.text }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = colors.textMuted)
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = colors.text)}
          >
            Log in
          </button>
          <motion.button
            className="text-sm font-medium px-4 py-2 rounded-md transition-colors"
            style={{
              backgroundColor: colors.ctaBg,
              color: colors.ctaText,
            }}
            whileHover={{ opacity: 0.9 }}
            whileTap={{ scale: 0.98 }}
          >
            Get LoadFast
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 md:hidden"
              style={{ backgroundColor: "rgba(28, 25, 23, 0.2)" }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-out Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-xs shadow-2xl md:hidden"
              style={{ backgroundColor: colors.bg }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div
                  className="flex items-center justify-between px-6 py-5 border-b"
                  style={{ borderColor: colors.border }}
                >
                  <span
                    className="font-serif font-bold text-xl"
                    style={{ color: colors.text }}
                  >
                    LoadFast
                  </span>
                  <button
                    className="p-2 rounded-md transition-colors"
                    style={{ color: colors.text }}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 px-6 py-8 overflow-y-auto">
                  <nav className="flex flex-col space-y-4">
                    {NAV_ITEMS.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-lg font-medium transition-colors"
                        style={{ color: colors.text }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Footer CTA */}
                <div
                  className="px-6 py-6 border-t"
                  style={{ borderColor: colors.border }}
                >
                  <div className="flex flex-col space-y-3">
                    <button
                      className="w-full px-4 py-3 text-center font-medium rounded-md transition-colors"
                      style={{
                        backgroundColor: colors.accent,
                        color: "#ffffff",
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get LoadFast
                    </button>
                    <button
                      className="w-full px-4 py-3 text-center font-medium rounded-md transition-colors"
                      style={{
                        backgroundColor: colors.stone,
                        color: colors.text,
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Log in
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
