"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    background: "rgba(255, 255, 255, 0.8)",
    border: "rgba(0, 0, 0, 0.1)",
    text: "#000000",
    navText: "#374151", // gray-700
    navTextHover: "#000000",
    buttonBg: "#000000",
    buttonText: "#FFFFFF",
    buttonHover: "#1f2937", // gray-800
  },
  dark: {
    background: "rgba(10, 10, 10, 0.8)",
    border: "rgba(255, 255, 255, 0.1)",
    text: "#FFFFFF",
    navText: "#9CA3AF",
    navTextHover: "#FFFFFF",
    buttonBg: "#FFFFFF",
    buttonText: "#000000",
    buttonHover: "#E5E5E5",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

interface DeepconAiHeader0Props {
  mode?: "light" | "dark";
  logoSrc?: string;
  logoAlt?: string;
  navItems?: NavItem[];
  signInLabel?: string;
  signInHref?: string;
}

export default function DeepconAiHeader0({
  mode = "light",
  logoSrc = "/registry/deepcon-ai-header-0/logo.svg",
  logoAlt = "Deepcon Logo",
  navItems = [
    { label: "Docs", href: "https://docs.deepcon.ai", external: true },
    { label: "Playground", href: "#playground" },
    { label: "Pricing", href: "#pricing" },
  ],
  signInLabel = "Sign In",
  signInHref = "#signin",
}: DeepconAiHeader0Props) {
  const colors = COLORS[mode];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor: colors.background,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <div className="mx-auto flex max-w-[976px] items-center justify-between px-6 py-3">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-2 py-1 transition-opacity duration-200 hover:opacity-80"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <img
            alt={logoAlt}
            width={24}
            height={24}
            className={`h-6 w-auto ${mode === "dark" ? "invert" : ""}`}
            src={logoSrc}
          />
        </motion.a>

        {/* Navigation - center positioned */}
        <motion.nav
          className="hidden md:flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="px-3 py-1.5 text-sm transition-colors duration-200"
              style={{ color: colors.navText }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = colors.navTextHover)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = colors.navText)
              }
            >
              {item.label}
            </a>
          ))}
        </motion.nav>

        {/* Sign In Button - Desktop */}
        <motion.div
          className="hidden md:flex items-center gap-2"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <a
            href={signInHref}
            className="rounded-md px-4 py-1.5 text-sm font-medium transition-colors duration-200"
            style={{
              backgroundColor: colors.buttonBg,
              color: colors.buttonText,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = colors.buttonHover)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = colors.buttonBg)
            }
          >
            {signInLabel}
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 transition-colors"
          style={{ color: colors.navText }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = colors.navTextHover)
          }
          onMouseLeave={(e) => (e.currentTarget.style.color = colors.navText)}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
            style={{
              backgroundColor: mode === "light" ? "#FFFFFF" : "#0A0A0A",
              borderTop: `1px solid ${colors.border}`,
            }}
          >
            <nav className="flex flex-col px-6 py-4 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="px-3 py-2 text-sm transition-colors duration-200"
                  style={{ color: colors.navText }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={signInHref}
                className="mt-2 rounded-md px-4 py-2 text-sm font-medium text-center transition-colors duration-200"
                style={{
                  backgroundColor: colors.buttonBg,
                  color: colors.buttonText,
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {signInLabel}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
