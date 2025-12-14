"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    navBg: "rgba(255, 255, 255, 0.95)",
    navBorder: "rgba(0, 0, 0, 0.06)",
    text: "#111827",
    textMuted: "#6B7280",
    buttonPrimaryBg: "#111827",
    buttonPrimaryText: "#FFFFFF",
    buttonSecondaryBg: "#FFFFFF",
    buttonSecondaryBorder: "#E5E7EB",
    buttonSecondaryText: "#111827",
  },
  dark: {
    navBg: "rgba(17, 24, 39, 0.95)",
    navBorder: "rgba(255, 255, 255, 0.1)",
    text: "#F9FAFB",
    textMuted: "#9CA3AF",
    buttonPrimaryBg: "#FFFFFF",
    buttonPrimaryText: "#111827",
    buttonSecondaryBg: "transparent",
    buttonSecondaryBorder: "rgba(255, 255, 255, 0.2)",
    buttonSecondaryText: "#F9FAFB",
  },
} as const;

/**
 * 네비게이션 링크
 */
const NAV_LINKS = [
  { label: "홈", href: "/" },
  { label: "주요 기능", href: "#features" },
  { label: "이용 요금", href: "#pricing" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

interface HookableAiHeaderProps {
  mode?: "light" | "dark";
  brandName?: string;
  navLinks?: { label: string; href: string }[];
  startButtonText?: string;
  startButtonHref?: string;
  contactButtonText?: string;
  contactButtonHref?: string;
}

/**
 * 로고 이미지 URL
 */
const LOGO_URL = "https://framerusercontent.com/images/1lhePy9pB3aSlE36AYNjGLtRM8U.png";

export default function HookableAiHeader({
  mode = "light",
  brandName = "Hookable",
  navLinks = NAV_LINKS,
  startButtonText = "지금 시작",
  startButtonHref = "#start",
  contactButtonText = "문의하기",
  contactButtonHref = "#contact",
}: HookableAiHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const colors = COLORS[mode];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <motion.nav
        initial={{ y: -20, opacity: 0, scale: 0.95 }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
          maxWidth: isScrolled ? "48rem" : "72rem",
          backgroundColor: isScrolled ? colors.navBg : "transparent",
          borderRadius: isScrolled ? "9999px" : "16px",
          boxShadow: isScrolled ? "0 4px 20px -4px rgb(0 0 0 / 0.1)" : "none",
          paddingLeft: isScrolled ? "16px" : "24px",
          paddingRight: isScrolled ? "16px" : "24px",
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 1,
        }}
        className="mx-auto flex items-center justify-between py-2.5 backdrop-blur-md"
        style={{
          border: isScrolled ? `1px solid ${colors.navBorder}` : "1px solid transparent",
        }}
        aria-label="Global"
      >
        {/* Logo */}
        <a
          className="flex shrink-0 items-center"
          title={`${brandName} 홈페이지`}
          href="/"
        >
          <img
            src={LOGO_URL}
            alt={brandName}
            className={`h-6 w-auto object-contain ${mode === "dark" ? "brightness-0 invert" : ""}`}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: colors.text }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <motion.a
            href={startButtonHref}
            className="rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
            style={{
              backgroundColor: colors.buttonSecondaryBg,
              border: `1px solid ${colors.buttonSecondaryBorder}`,
              color: colors.buttonSecondaryText,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {startButtonText}
          </motion.a>
          <motion.a
            href={contactButtonHref}
            className="rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
            style={{
              backgroundColor: colors.buttonPrimaryBg,
              color: colors.buttonPrimaryText,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {contactButtonText}
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-full p-2 transition-colors"
          style={{ color: colors.text }}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="메뉴 열기"
        >
          <Menu className="h-5 w-5" />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[99998] bg-black/30 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-y-0 right-0 z-[99999] w-full max-w-sm overflow-y-auto px-6 py-6"
              style={{
                backgroundColor: mode === "light" ? "#FFFFFF" : "#111827",
              }}
            >
              {/* Mobile menu header */}
              <div className="flex items-center justify-between">
                <a
                  className="flex shrink-0 items-center"
                  title={`${brandName} 홈페이지`}
                  href="/"
                >
                  <img
                    src={LOGO_URL}
                    alt={brandName}
                    className={`h-6 w-auto object-contain ${mode === "dark" ? "brightness-0 invert" : ""}`}
                  />
                </a>
                <button
                  type="button"
                  className="rounded-full p-2"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="메뉴 닫기"
                >
                  <X className="h-5 w-5" style={{ color: colors.text }} />
                </button>
              </div>

              {/* Mobile menu content */}
              <div className="mt-8 flow-root">
                <div
                  className="border-b pb-6"
                  style={{ borderColor: colors.navBorder }}
                >
                  <div className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium transition-opacity hover:opacity-70"
                        style={{ color: colors.text }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA Buttons */}
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={startButtonHref}
                    className="rounded-full px-4 py-3 text-center text-sm font-medium transition-colors"
                    style={{
                      backgroundColor: colors.buttonSecondaryBg,
                      border: `1px solid ${colors.buttonSecondaryBorder}`,
                      color: colors.buttonSecondaryText,
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {startButtonText}
                  </a>
                  <a
                    href={contactButtonHref}
                    className="rounded-full px-4 py-3 text-center text-sm font-medium transition-colors"
                    style={{
                      backgroundColor: colors.buttonPrimaryBg,
                      color: colors.buttonPrimaryText,
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {contactButtonText}
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
