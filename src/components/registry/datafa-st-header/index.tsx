"use client";

// ============================================================================
// CUSTOMIZATION - Modify these values to adjust for your project
// ============================================================================

/**
 * Custom colors (brand colors)
 */
const COLORS = {
  light: {
    background: "#FFFFFF",
    backgroundMobile: "#F5F5F5",
    border: "rgba(0, 0, 0, 0.05)",
    textPrimary: "#1A1A1A",
    textSecondary: "#6B7280",
  },
  dark: {
    background: "#1A1A1A",
    backgroundMobile: "#242424",
    border: "rgba(255, 255, 255, 0.05)",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
  },
} as const;

/**
 * Navigation links
 */
const NAV_LINKS = [
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Reviews", href: "#reviews" },
];

/**
 * Image assets
 */
const IMAGES = {
  logo: {
    path: "/registry/datafa-st-header/logo.png",
    alt: "DataFast logo",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

interface DatafaStHeaderProps {
  mode?: "light" | "dark";
  brandName?: string;
  logoSrc?: string;
  navLinks?: { label: string; href: string }[];
  loginText?: string;
  loginHref?: string;
}

export default function DatafaStHeader({
  mode = "dark",
  brandName = "DataFast",
  logoSrc = IMAGES.logo.path,
  navLinks = NAV_LINKS,
  loginText = "Log in",
  loginHref = "/dashboard",
}: DatafaStHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const colors = COLORS[mode];

  return (
    <header
      className="border-b"
      style={{
        backgroundColor: colors.background,
        borderColor: colors.border,
      }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-4 px-4 xl:px-0"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a
            className="flex shrink-0 items-center gap-2"
            title={`${brandName} homepage`}
            href="/"
          >
            <Image
              src={logoSrc}
              alt={`${brandName} logo`}
              width={32}
              height={32}
              className="w-8"
            />
            <span
              className="text-lg font-extrabold"
              style={{ color: colors.textPrimary }}
            >
              {brandName}
            </span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu
              className="h-6 w-6"
              style={{ color: colors.textPrimary }}
            />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              title={link.label}
              className="transition-opacity hover:opacity-70"
              style={{ color: colors.textPrimary }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop login button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href={loginHref}
            className="rounded-lg border px-4 py-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{
              color: colors.textPrimary,
              borderColor: colors.border,
            }}
          >
            {loginText}
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[99998] bg-black/50"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-y-0 right-0 z-[99999] w-full overflow-y-auto px-8 py-4 sm:max-w-sm sm:ring-1 sm:ring-neutral/10"
              style={{ backgroundColor: colors.backgroundMobile }}
            >
              {/* Mobile menu header */}
              <div className="flex items-center justify-between">
                <a
                  className="flex shrink-0 items-center gap-2"
                  title={`${brandName} homepage`}
                  href="/"
                >
                  <Image
                    src={logoSrc}
                    alt={`${brandName} logo`}
                    width={32}
                    height={32}
                    className="w-8"
                  />
                  <span
                    className="text-lg font-extrabold"
                    style={{ color: colors.textPrimary }}
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
                  <X
                    className="h-6 w-6"
                    style={{ color: colors.textPrimary }}
                  />
                </button>
              </div>

              {/* Mobile menu content */}
              <div className="mt-6 flow-root">
                <div
                  className="mb-4 border-b py-4"
                  style={{ borderColor: colors.border }}
                >
                  <div className="flex flex-col items-start gap-y-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        title={link.label}
                        className="transition-opacity hover:opacity-70"
                        style={{ color: colors.textPrimary }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col">
                  <a
                    href={loginHref}
                    className="rounded-lg border px-4 py-2 text-center text-sm font-medium transition-opacity hover:opacity-70"
                    style={{
                      color: colors.textPrimary,
                      borderColor: colors.border,
                    }}
                  >
                    {loginText}
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
