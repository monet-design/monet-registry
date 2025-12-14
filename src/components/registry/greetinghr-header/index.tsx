"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#1890ff", // 그리팅 블루
    accentHover: "#1478d4",
    text: "#171717",
    textMuted: "#525252",
  },
  dark: {
    accent: "#1890ff",
    accentHover: "#3ba0ff",
    text: "#fafafa",
    textMuted: "#a3a3a3",
  },
} as const;

/**
 * 네비게이션 메뉴 데이터
 */
const NAV_ITEMS = [
  { label: "왜 그리팅인가", href: "#why", hasDropdown: false },
  { label: "제품", href: "#products", hasDropdown: true },
  { label: "솔루션", href: "#solutions", hasDropdown: true },
  { label: "고객 사례", href: "#customers", hasDropdown: true },
  { label: "가격", href: "#pricing", hasDropdown: false },
  { label: "유용한 자료", href: "#resources", hasDropdown: true },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Greeting Logo Image Path
const LOGO_IMAGE = "/registry/greetinghr-header/logo.png";

interface GreetinghrHeaderProps {
  mode?: "light" | "dark";
  logoText?: string;
  loginText?: string;
  ctaText?: string;
  navItems?: typeof NAV_ITEMS;
  onLogin?: () => void;
  onCtaClick?: () => void;
}

export default function GreetinghrHeader({
  mode = "light",
  logoText = "Greeting",
  loginText = "로그인",
  ctaText = "도입 문의",
  navItems = NAV_ITEMS,
  onLogin,
  onCtaClick,
}: GreetinghrHeaderProps) {
  const colors = COLORS[mode];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur-sm",
        mode === "light"
          ? "bg-white/95 border-gray-100"
          : "bg-gray-950/95 border-gray-800"
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={LOGO_IMAGE}
            alt="Greeting Logo"
            className="h-7 w-7 rounded-md"
          />
          <span
            className="text-lg font-semibold"
            style={{ color: colors.text }}
          >
            {logoText}
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() =>
                item.hasDropdown && handleDropdownEnter(item.label)
              }
              onMouseLeave={handleDropdownLeave}
            >
              <a
                href={item.href}
                className={cn(
                  "inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  mode === "light"
                    ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                )}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      activeDropdown === item.label && "rotate-180"
                    )}
                  />
                )}
              </a>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {item.hasDropdown && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className={cn(
                      "absolute left-0 top-full mt-1 w-48 rounded-lg border shadow-lg py-2",
                      mode === "light"
                        ? "bg-white border-gray-200"
                        : "bg-gray-900 border-gray-700"
                    )}
                  >
                    {/* Placeholder dropdown items */}
                    {[1, 2, 3].map((i) => (
                      <a
                        key={i}
                        href="#"
                        className={cn(
                          "block px-4 py-2 text-sm transition-colors",
                          mode === "light"
                            ? "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                            : "text-gray-300 hover:bg-gray-800 hover:text-white"
                        )}
                      >
                        {item.label} 항목 {i}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Login Link */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onLogin?.();
            }}
            className={cn(
              "hidden sm:inline-flex text-sm font-medium transition-colors",
              mode === "light"
                ? "text-gray-700 hover:text-gray-900"
                : "text-gray-300 hover:text-white"
            )}
          >
            {loginText}
          </a>

          {/* CTA Button */}
          <motion.button
            onClick={onCtaClick}
            className="hidden sm:inline-flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
            style={{ backgroundColor: colors.accent }}
            whileHover={{ backgroundColor: colors.accentHover }}
            whileTap={{ scale: 0.98 }}
          >
            {ctaText}
            <ArrowRight className="h-4 w-4" />
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-md transition-colors",
              mode === "light"
                ? "text-gray-700 hover:bg-gray-100"
                : "text-gray-300 hover:bg-gray-800"
            )}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
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
            transition={{ duration: 0.2 }}
            className={cn(
              "lg:hidden border-t overflow-hidden",
              mode === "light"
                ? "bg-white border-gray-100"
                : "bg-gray-950 border-gray-800"
            )}
          >
            <nav className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between px-3 py-3 text-sm font-medium rounded-md transition-colors",
                    mode === "light"
                      ? "text-gray-700 hover:bg-gray-100"
                      : "text-gray-300 hover:bg-gray-800"
                  )}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onLogin?.();
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "block px-3 py-2 text-sm font-medium",
                    mode === "light" ? "text-gray-700" : "text-gray-300"
                  )}
                >
                  {loginText}
                </a>
                <button
                  onClick={() => {
                    onCtaClick?.();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-1 rounded-lg px-4 py-2.5 text-sm font-medium text-white"
                  style={{ backgroundColor: colors.accent }}
                >
                  {ctaText}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
