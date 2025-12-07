"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#F97316", // Orange
    accentHover: "#EA580C",
  },
  dark: {
    accent: "#FB923C",
    accentHover: "#F97316",
  },
} as const;

const NAV_ITEMS = [
  { label: "주요 기능", href: "#features", hasDropdown: true },
  { label: "API 연동", href: "#api" },
  { label: "가격 안내", href: "#pricing" },
  { label: "블로그", href: "#blog" },
  { label: "고객 사례", href: "#cases" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";

interface BoltaIoHeader0Props {
  mode?: "light" | "dark";
}

export default function BoltaIoHeader0({ mode = "light" }: BoltaIoHeader0Props) {
  const colors = COLORS[mode];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[68px] items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8L16 4L24 8L16 12L8 8Z"
                fill={colors.accent}
              />
              <path
                d="M8 8V20L16 24V12L8 8Z"
                fill={colors.accent}
                opacity="0.8"
              />
              <path
                d="M24 8V20L16 24V12L24 8Z"
                fill={colors.accent}
                opacity="0.6"
              />
            </svg>
            <span className="text-xl font-bold text-gray-900">Bolta</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
                {item.hasDropdown && (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </a>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            <a
              href="/login"
              className="hidden md:block text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              로그인
            </a>
            <motion.a
              href="/signup"
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: colors.accent }}
              whileHover={{ backgroundColor: colors.accentHover }}
              whileTap={{ scale: 0.98 }}
            >
              무료로 시작하기
            </motion.a>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-gray-100"
          >
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  {item.label}
                </a>
              ))}
              <a href="/login" className="text-sm text-gray-600 hover:text-gray-900">
                로그인
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}
