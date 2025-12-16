"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";

const COLORS = {
  light: {
    accent: "#E54B4B",
    accentHover: "#D13D3D",
    bg: "#ffffff",
    text: "#1a1a1a",
    textMuted: "#666666",
  },
  dark: {
    accent: "#E54B4B",
    accentHover: "#D13D3D",
    bg: "#1a1a1a",
    text: "#ffffff",
    textMuted: "#a0a0a0",
  },
} as const;

const NAV_ITEMS = [
  {
    label: "Locations",
    hasDropdown: true,
    items: [
      { label: "Asia Pacific", href: "#" },
      { label: "Europe", href: "#" },
      { label: "US, Canada & Brazil", href: "#" },
      { label: "Middle East & Africa", href: "#" },
    ],
  },
  {
    label: "Portfolio",
    hasDropdown: true,
    items: [
      { label: "Portfolio Directory", href: "#" },
      { label: "Founder Stories", href: "#" },
    ],
  },
  { label: "Investors", href: "#" },
  { label: "Insights", href: "#" },
  { label: "About", href: "#" },
  { label: "Residency", href: "#" },
];

interface AntlerCoHeader0Props {
  mode?: "light" | "dark";
}

export default function AntlerCoHeader0({
  mode = "light",
}: AntlerCoHeader0Props) {
  const colors = COLORS[mode];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-sm border-b"
      style={{
        backgroundColor: mode === "light" ? "rgba(255,255,255,0.95)" : "rgba(26,26,26,0.95)",
        borderColor: mode === "light" ? "#e5e5e5" : "#333333",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 0L28 28H0L14 0Z"
                fill={colors.accent}
              />
              <path
                d="M14 8L20 22H8L14 8Z"
                fill={mode === "light" ? "#ffffff" : "#1a1a1a"}
              />
            </svg>
            <span
              className="text-lg font-semibold tracking-wide"
              style={{ color: colors.text }}
            >
              NTLER
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href || "#"}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors"
                  style={{ color: colors.textMuted }}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </a>
                {item.hasDropdown && item.items && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-1 min-w-[200px] rounded-lg shadow-lg py-2"
                        style={{
                          backgroundColor: colors.bg,
                          border: `1px solid ${mode === "light" ? "#e5e5e5" : "#333333"}`,
                        }}
                      >
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                            style={{ color: colors.text }}
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className="px-5 py-2 text-sm font-medium text-white rounded-full flex items-center gap-1 transition-colors"
              style={{ backgroundColor: colors.accent }}
            >
              Apply
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: colors.text }}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{
              backgroundColor: colors.bg,
              borderTop: `1px solid ${mode === "light" ? "#e5e5e5" : "#333333"}`,
            }}
          >
            <div className="px-4 py-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href || "#"}
                    className="flex items-center justify-between px-4 py-2 text-sm font-medium"
                    style={{ color: colors.text }}
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                  </a>
                  {item.hasDropdown && item.items && (
                    <div className="pl-4 space-y-1">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm"
                          style={{ color: colors.textMuted }}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <a
                  href="#"
                  className="block w-full text-center px-5 py-2 text-sm font-medium text-white rounded-full"
                  style={{ backgroundColor: colors.accent }}
                >
                  Apply
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
