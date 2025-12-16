"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";

const COLORS = {
  light: {
    accent: "#1a1a1a",
    bg: "#ffffff",
    text: "#1a1a1a",
    textMuted: "#666666",
  },
  dark: {
    accent: "#ffffff",
    bg: "#1a1a1a",
    text: "#ffffff",
    textMuted: "#a0a0a0",
  },
} as const;

const NAV_ITEMS = [
  { label: "주요기능", href: "#", hasDropdown: true },
  { label: "가격 안내", href: "#" },
  { label: "자료", href: "#", hasDropdown: true },
  { label: "블로그", href: "#" },
];

interface TrackitSoHeader0Props {
  mode?: "light" | "dark";
}

export default function TrackitSoHeader0({
  mode = "light",
}: TrackitSoHeader0Props) {
  const colors = COLORS[mode];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-sm"
      style={{
        backgroundColor: mode === "light" ? "rgba(255,255,255,0.95)" : "rgba(26,26,26,0.95)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12L11 14L15 10"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span
              className="text-lg font-semibold"
              style={{ color: colors.text }}
            >
              Trackit
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: colors.textMuted }}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="h-4 w-4" />
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
              로그인
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors"
              style={{ backgroundColor: colors.accent }}
            >
              무료로 시작하기
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
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
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
                  로그인
                </a>
                <a
                  href="#"
                  className="block w-full text-center px-4 py-2 text-sm font-medium text-white rounded-lg"
                  style={{ backgroundColor: colors.accent }}
                >
                  무료로 시작하기
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
