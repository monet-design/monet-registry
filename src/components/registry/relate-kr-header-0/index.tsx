"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

const COLORS = {
  light: {
    accent: "#3366FF",
    accentHover: "#2952CC",
  },
  dark: {
    accent: "#4D7AFF",
    accentHover: "#3366FF",
  },
} as const;

const NAV_ITEMS = [
  { label: "제품", href: "#", hasDropdown: true },
  { label: "가격", href: "#" },
  { label: "고객 사례", href: "#" },
  { label: "블로그", href: "#" },
  { label: "자료", href: "#", hasDropdown: true },
  { label: "직무교육", href: "#" },
];

interface RelateKrHeader0Props {
  mode?: "light" | "dark";
}

export default function RelateKrHeader0({
  mode = "light",
}: RelateKrHeader0Props) {
  const colors = COLORS[mode];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-lg"
              style={{ backgroundColor: colors.accent }}
            >
              <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-900">relate</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
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
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              로그인
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium rounded-full border-2 transition-colors"
              style={{
                borderColor: colors.accent,
                color: colors.accent
              }}
            >
              데모 신청하기
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-white rounded-full transition-colors"
              style={{ backgroundColor: colors.accent }}
            >
              무료로 시작하기
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white border-t border-gray-100 py-4"
        >
          <div className="space-y-2 px-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <a
                href="#"
                className="block w-full text-center px-4 py-2 text-sm font-medium rounded-full border-2"
                style={{ borderColor: colors.accent, color: colors.accent }}
              >
                데모 신청하기
              </a>
              <a
                href="#"
                className="block w-full text-center px-4 py-2 text-sm font-medium text-white rounded-full"
                style={{ backgroundColor: colors.accent }}
              >
                무료로 시작하기
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
