"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#FFFFFF",
    text: "#1F2937",
    textMuted: "#6B7280",
    accent: "#6C47FF",
    accentHover: "#5639CC",
  },
  dark: {
    background: "#000000",
    text: "#FFFFFF",
    textMuted: "#A1A1AA",
    accent: "#6C47FF",
    accentHover: "#8466FF",
  },
} as const;

/**
 * 네비게이션 콘텐츠
 */
const CONTENT = {
  logo: {
    text: "clerk",
    href: "/",
  },
  navItems: [
    { label: "Products", href: "#products" },
    { label: "Features", href: "#features" },
    { label: "Docs", href: "#docs" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "#changelog" },
    { label: "Company", href: "#company" },
  ],
  cta: {
    text: "Get started",
    href: "#get-started",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

// Clerk Logo SVG
function ClerkLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 77 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.447 18.639c2.627 0 4.595-1.252 5.472-3.322l-2.548-1.058c-.439 1.136-1.564 1.877-2.924 1.877-2.042 0-3.442-1.525-3.442-3.636 0-2.111 1.4-3.636 3.442-3.636 1.36 0 2.485.741 2.924 1.877l2.548-1.058c-.877-2.07-2.845-3.322-5.472-3.322-3.716 0-6.303 2.62-6.303 6.139 0 3.519 2.587 6.139 6.303 6.139zM34.344 18.365h2.783V5.234h-2.783v13.131zM45.762 15.628c-.4.624-1.202 1.019-2.126 1.019-1.478 0-2.524-1.058-2.68-2.62h7.516c.039-.312.078-.702.078-1.097 0-3.127-2.203-5.57-5.424-5.57-3.181 0-5.462 2.443-5.462 5.726 0 3.362 2.32 5.726 5.697 5.726 2.281 0 4.017-1.097 4.869-2.816l-2.468-.368zm-2.51-5.999c1.399 0 2.32.858 2.554 2.268h-5.228c.313-1.449 1.282-2.268 2.674-2.268zM52.332 18.365h2.783v-5.414c0-1.994 1.165-2.933 2.486-2.933.469 0 .977.078 1.399.234V7.345c-.352-.078-.665-.117-1.056-.117-1.165 0-2.281.702-2.829 1.799V7.634h-2.783v10.731zM62.21 18.365h2.783v-5.063l4.596 5.063h3.533l-5.267-5.609 4.947-4.922h-3.494l-4.315 4.454V5.234H62.21v13.131z"
        fill="currentColor"
      />
      <path
        d="M13.95 10.283a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0Z"
        fill="currentColor"
      />
      <path
        d="M16.527 1.796a.915.915 0 0 0-1.137-.613l-2.997.917a.916.916 0 0 0-.564 1.176c.525 1.368.813 2.85.813 4.399a11.51 11.51 0 0 1-.813 4.272.915.915 0 0 0 .564 1.175l2.997.917a.915.915 0 0 0 1.137-.613 17.03 17.03 0 0 0 0-11.63Z"
        fill="currentColor"
      />
      <path
        d="M10.617 17.575a5.95 5.95 0 0 1-5.484-3.663l-2.997.917a.916.916 0 0 0-.427 1.437 10.6 10.6 0 0 0 7.65 4.307c.632.05 1.125-.443 1.125-1.078v-3.133a5.96 5.96 0 0 1-.867.564 5.962 5.962 0 0 1 1 .649Z"
        fill="currentColor"
        fillOpacity=".5"
      />
      <path
        d="M1.71 4.299A.916.916 0 0 1 2.136 5.737l2.997.917a5.95 5.95 0 0 1 5.484-3.663c.298 0 .59.02.876.058L10.617.083c0-.635-.493-1.128-1.125-1.078a10.6 10.6 0 0 0-7.782 5.294Z"
        fill="currentColor"
        fillOpacity=".5"
      />
    </svg>
  );
}

interface ClerkComHeader0Props {
  mode?: "light" | "dark";
}

export default function ClerkComHeader0({
  mode = "dark",
}: ClerkComHeader0Props) {
  const colors = COLORS[mode];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isDark = mode === "dark";

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.a
          href={CONTENT.logo.href}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center"
          style={{ color: colors.text }}
        >
          <ClerkLogo className="h-6 w-auto" />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-1">
          {CONTENT.navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              className="px-4 py-2 text-sm font-medium transition-colors duration-200"
              style={{ color: colors.textMuted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.text)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = colors.textMuted)
              }
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="hidden lg:block"
        >
          <a
            href={CONTENT.cta.href}
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-all duration-200"
            style={{
              backgroundColor: colors.accent,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = colors.accentHover)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = colors.accent)
            }
          >
            {CONTENT.cta.text}
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden rounded-md p-2 transition-colors"
          style={{ color: colors.text }}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden border-t"
          style={{
            backgroundColor: colors.background,
            borderColor: isDark ? "#27272A" : "#E5E7EB",
          }}
        >
          <nav className="flex flex-col px-4 py-4 space-y-1">
            {CONTENT.navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-sm font-medium rounded-md transition-colors"
                style={{ color: colors.textMuted }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href={CONTENT.cta.href}
                className="block w-full text-center rounded-md px-4 py-3 text-sm font-medium text-white transition-all duration-200"
                style={{ backgroundColor: colors.accent }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {CONTENT.cta.text}
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
