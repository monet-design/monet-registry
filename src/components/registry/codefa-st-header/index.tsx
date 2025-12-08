"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "rgba(255, 255, 255, 0.5)",
    text: "#1F2937",
    textMuted: "#6B7280",
    promoBg: "#FFFBF8",
    promoBorder: "rgb(17, 41, 16)",
    promoText: "rgb(29, 67, 26)",
    primaryBg: "#F97316",
    primaryText: "#FFFFFF",
  },
  dark: {
    background: "rgba(26, 26, 26, 0.5)",
    text: "#FFFFFF",
    textMuted: "rgba(255, 255, 255, 0.7)",
    promoBg: "rgba(17, 41, 16, 0.3)",
    promoBorder: "rgb(74, 222, 128)",
    promoText: "rgb(134, 239, 172)",
    primaryBg: "#F97316",
    primaryText: "#FFFFFF",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Code } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
  title?: string;
}

interface CodefaStHeaderProps {
  mode?: "light" | "dark";
  brandName?: string;
  promoText?: string;
  promoCode?: string;
  promoDiscount?: string;
  navLinks?: NavLink[];
  ctaText?: string;
  ctaHref?: string;
  showSignIn?: boolean;
}

const defaultNavLinks: NavLink[] = [
  { label: "Reviews", href: "#testimonials", title: "Reviews" },
  { label: "Pricing", href: "#pricing", title: "Pricing" },
  { label: "FAQ", href: "#faq", title: "FAQ" },
];

export default function CodefaStHeader({
  mode = "light",
  brandName = "CodeFast",
  promoText = "-43% off with code",
  promoCode = "CHRISTMAS",
  promoDiscount,
  navLinks = defaultNavLinks,
  ctaText = "Get CodeFast",
  ctaHref = "#pricing",
  showSignIn = true,
}: CodefaStHeaderProps) {
  const colors = COLORS[mode];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="w-full z-50 backdrop-blur"
      style={{ backgroundColor: colors.background }}
    >
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="container flex items-center justify-between px-8 py-4 mx-auto"
        aria-label="Global"
      >
        {/* Left: Logo + Promo Badge */}
        <div className="flex lg:flex-1 items-center gap-4">
          <a
            href="/"
            className="flex items-center gap-2 shrink-0 cursor-pointer"
            title={`${brandName} homepage`}
          >
            <Code
              className="size-8"
              style={{ color: mode === "light" ? "#1F2937" : "#FFFFFF" }}
            />
            <span
              className="font-extrabold text-lg"
              style={{ color: colors.text }}
            >
              {brandName}
            </span>
          </a>

          {/* Promo Badge - Desktop only */}
          {promoCode && (
            <a
              href="#pricing"
              className="hidden xl:block text-xs border rounded-full px-3 py-1"
              style={{
                color: colors.promoText,
                borderColor: colors.promoBorder,
                backgroundColor: colors.promoBg,
              }}
            >
              {promoText}{" "}
              <span className="font-semibold font-mono tracking-tight select-all">
                {promoCode} 🎄
              </span>
            </a>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="size-6" style={{ color: colors.text }} />
          </button>
        </div>

        {/* Center: Navigation Links - Desktop only */}
        <div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              title={link.title}
              className="hover:opacity-80 transition-opacity"
              style={{ color: colors.textMuted }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: CTA Buttons - Desktop only */}
        <div className="hidden lg:flex lg:justify-end lg:flex-1">
          <div className="flex flex-row-reverse items-center gap-4">
            <a
              href={ctaHref}
              className="btn px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
              style={{
                backgroundColor: colors.primaryBg,
                color: colors.primaryText,
              }}
            >
              {ctaText}
            </a>
            {showSignIn && (
              <button
                className="btn px-4 py-2 rounded-lg text-sm font-medium border transition-all hover:opacity-80"
                style={{
                  borderColor: colors.textMuted,
                  color: colors.text,
                  backgroundColor: "transparent",
                }}
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 z-[60] w-full px-8 py-4 overflow-y-auto sm:max-w-sm sm:ring-1 sm:ring-base-content"
            style={{
              backgroundColor: mode === "light" ? "#FFFFFF" : "#1a1a1a",
            }}
          >
            {/* Mobile menu header */}
            <div className="flex items-center justify-between">
              <a
                href="/"
                className="flex items-center gap-2 shrink-0"
                title={`${brandName} homepage`}
              >
                <Code
                  className="size-8"
                  style={{ color: mode === "light" ? "#1F2937" : "#FFFFFF" }}
                />
                <span
                  className="font-extrabold text-lg"
                  style={{ color: colors.text }}
                >
                  {brandName}
                </span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="size-6" style={{ color: colors.text }} />
              </button>
            </div>

            {/* Mobile menu content */}
            <div className="flow-root mt-6">
              <div className="py-4">
                <div className="flex flex-col gap-y-4 items-start">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      title={link.title}
                      className="hover:opacity-80 transition-opacity"
                      style={{ color: colors.textMuted }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile CTA buttons */}
              <div className="flex flex-col gap-4 py-4">
                <a
                  href={ctaHref}
                  className="btn px-4 py-3 rounded-lg text-sm font-medium text-center transition-all"
                  style={{
                    backgroundColor: colors.primaryBg,
                    color: colors.primaryText,
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {ctaText}
                </a>
                {showSignIn && (
                  <button
                    className="btn px-4 py-3 rounded-lg text-sm font-medium border text-center transition-all"
                    style={{
                      borderColor: colors.textMuted,
                      color: colors.text,
                      backgroundColor: "transparent",
                    }}
                  >
                    Sign in
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
