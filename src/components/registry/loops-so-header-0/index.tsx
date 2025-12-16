"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Menu, X } from "lucide-react";

const COLORS = {
  light: {
    accent: "#E85D04",
    bg: "#ffffff",
    text: "#1a1a1a",
    textMuted: "#666666",
  },
  dark: {
    accent: "#E85D04",
    bg: "#1a1a1a",
    text: "#ffffff",
    textMuted: "#a0a0a0",
  },
} as const;

const NAV_ITEMS = [
  { label: "Docs", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Guides", href: "#", hasChevron: true },
];

interface LoopsSoHeader0Props {
  mode?: "light" | "dark";
}

export default function LoopsSoHeader0({
  mode = "light",
}: LoopsSoHeader0Props) {
  const colors = COLORS[mode];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: colors.accent }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="3" fill="none" />
              </svg>
            </div>
            <span
              className="text-xl font-semibold"
              style={{ color: colors.text }}
            >
              Loops
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: colors.textMuted }}
              >
                {item.label}
                {item.hasChevron && (
                  <ChevronRight className="h-4 w-4" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium rounded-lg border transition-colors hover:bg-gray-50"
              style={{
                color: colors.text,
                borderColor: mode === "light" ? "#e5e5e5" : "#333333",
              }}
            >
              Log in
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors"
              style={{ backgroundColor: "#1a1a1a" }}
            >
              Start
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
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-2 text-sm font-medium"
                  style={{ color: colors.text }}
                >
                  {item.label}
                  {item.hasChevron && <ChevronRight className="h-4 w-4" />}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <a
                  href="#"
                  className="block w-full text-center px-4 py-2 text-sm font-medium rounded-lg border"
                  style={{
                    color: colors.text,
                    borderColor: mode === "light" ? "#e5e5e5" : "#333333",
                  }}
                >
                  Log in
                </a>
                <a
                  href="#"
                  className="block w-full text-center px-4 py-2 text-sm font-medium text-white rounded-lg"
                  style={{ backgroundColor: "#1a1a1a" }}
                >
                  Start
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
