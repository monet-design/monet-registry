"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "rgba(255, 255, 255, 0.95)",
    border: "rgba(55, 65, 81, 0.6)", // gray-700/60
    text: "#1F2937",
    navText: "#D1D5DB", // gray-300
    navTextHover: "#FFFFFF",
    buttonBg: "transparent",
    buttonHoverBg: "rgba(55, 65, 81, 0.5)", // gray-800/50
  },
  dark: {
    background: "rgba(0, 0, 0, 0.95)",
    border: "rgba(55, 65, 81, 0.6)", // gray-700/60
    text: "#FFFFFF",
    navText: "#D1D5DB", // gray-300
    navTextHover: "#FFFFFF",
    buttonBg: "transparent",
    buttonHoverBg: "rgba(55, 65, 81, 0.5)", // gray-800/50
  },
} as const;

/**
 * 네비게이션 콘텐츠
 */
const CONTENT = {
  logo: {
    src: "/registry/patenty-ai-header-0/logo.png",
    alt: "Patenty 로고",
    href: "/",
  },
  navItems: [
    { label: "블로그", href: "#blog" },
    { label: "소개", href: "#about" },
    { label: "요금제", href: "#pricing" },
    { label: "가이드", href: "#guide" },
  ],
  language: {
    current: "한국어",
    emoji: "🇰🇷",
    options: [
      { code: "ko", label: "한국어", emoji: "🇰🇷" },
      { code: "en", label: "English", emoji: "🇺🇸" },
    ] as const,
  },
  login: {
    text: "로그인",
    href: "#login",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";

interface PatentyAiHeader0Props {
  mode?: "light" | "dark";
  logoSrc?: string;
  logoAlt?: string;
  navItems?: Array<{ label: string; href: string }>;
  loginText?: string;
  loginHref?: string;
}

export default function PatentyAiHeader0({
  mode = "dark",
  logoSrc = CONTENT.logo.src,
  logoAlt = CONTENT.logo.alt,
  navItems = [...CONTENT.navItems],
  loginText = CONTENT.login.text,
  loginHref = CONTENT.login.href,
}: PatentyAiHeader0Props) {
  const colors = COLORS[mode];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<{
    code: string;
    label: string;
    emoji: string;
  }>(CONTENT.language.options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 드롭다운 외부 클릭 감지
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setLanguageDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-sm"
      style={{
        backgroundColor: colors.background,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left side: Logo + Nav */}
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <motion.a
              href={CONTENT.logo.href}
              className="flex items-center space-x-2"
              aria-label="홈페이지로 이동"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img
                alt={logoAlt}
                width={140}
                height={43}
                className="h-[36px] w-auto"
                src={logoSrc}
              />
            </motion.a>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center space-x-8"
              role="navigation"
              aria-label="메인 네비게이션"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  className="font-medium transition-colors duration-200"
                  style={{ color: colors.navText }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = colors.navTextHover)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = colors.navText)
                  }
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Right side: Language & Login */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center space-x-2 sm:space-x-4"
          >
            {/* Language Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="flex items-center gap-2 px-3 h-9 rounded-md text-sm font-semibold transition-all duration-200"
                style={{ color: colors.navText }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.navTextHover;
                  e.currentTarget.style.backgroundColor = colors.buttonHoverBg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.navText;
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">{selectedLanguage.label}</span>
                <span className="sm:hidden">{selectedLanguage.emoji}</span>
              </button>

              <AnimatePresence>
                {languageDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg border overflow-hidden"
                    style={{
                      backgroundColor: mode === "dark" ? "#18181B" : "#FFFFFF",
                      borderColor: colors.border,
                    }}
                  >
                    {CONTENT.language.options.map((option) => (
                      <button
                        key={option.code}
                        onClick={() => {
                          setSelectedLanguage(option);
                          setLanguageDropdownOpen(false);
                        }}
                        className="flex items-center gap-2 w-full px-4 py-3 text-sm font-medium transition-colors duration-200 text-left"
                        style={{
                          color:
                            selectedLanguage.code === option.code
                              ? colors.navTextHover
                              : colors.navText,
                          backgroundColor:
                            selectedLanguage.code === option.code
                              ? colors.buttonHoverBg
                              : "transparent",
                        }}
                        onMouseEnter={(e) => {
                          if (selectedLanguage.code !== option.code) {
                            e.currentTarget.style.backgroundColor =
                              colors.buttonHoverBg;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (selectedLanguage.code !== option.code) {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                          }
                        }}
                      >
                        <span>{option.emoji}</span>
                        <span>{option.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Login Link - Desktop */}
            <div className="hidden sm:flex items-center space-x-2">
              <a
                href={loginHref}
                className="px-3 h-9 flex items-center text-sm font-semibold rounded-md transition-all duration-200"
                style={{ color: colors.navText }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.navTextHover;
                  e.currentTarget.style.backgroundColor = colors.buttonHoverBg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.navText;
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {loginText}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden rounded-md p-2 transition-colors"
              style={{ color: colors.navText }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = colors.navTextHover)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = colors.navText)
              }
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t overflow-hidden"
            style={{
              backgroundColor: mode === "dark" ? "#000000" : "#FFFFFF",
              borderColor: colors.border,
            }}
          >
            <nav className="flex flex-col px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium rounded-md transition-colors"
                  style={{ color: colors.navText }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              {/* Mobile Language Selector */}
              <div
                className="pt-4 border-t"
                style={{ borderColor: colors.border }}
              >
                <div className="flex items-center gap-2 px-4 py-3">
                  <span className="text-xl">{selectedLanguage.emoji}</span>
                  <select
                    value={selectedLanguage.code}
                    onChange={(e) => {
                      const option = CONTENT.language.options.find(
                        (o) => o.code === e.target.value
                      );
                      if (option) setSelectedLanguage(option);
                    }}
                    className="bg-transparent text-sm font-medium outline-none cursor-pointer"
                    style={{ color: colors.navText }}
                  >
                    {CONTENT.language.options.map((option) => (
                      <option
                        key={option.code}
                        value={option.code}
                        style={{ color: "#000" }}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Mobile Login */}
              <div className="pt-2">
                <a
                  href={loginHref}
                  className="block px-4 py-3 text-sm font-medium rounded-md transition-colors text-center"
                  style={{ color: colors.navTextHover }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {loginText}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
