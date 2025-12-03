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
    background: "#012d33",
    text: "#ffffff",
    textMuted: "#9ca3af",
    border: "#ffffff20",
    borderLight: "#ffffff15",
  },
  dark: {
    background: "#012d33",
    text: "#ffffff",
    textMuted: "#9ca3af",
    border: "#ffffff20",
    borderLight: "#ffffff15",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface NavLink {
  label: string;
  href: string;
}

interface LegalLink {
  label: string;
  href: string;
}

interface RbbeconFooterProps {
  mode?: "light" | "dark";
  logo?: string;
  navLinks?: NavLink[];
  legalLinks?: LegalLink[];
  copyright?: string;
}

const defaultNavLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experts", href: "#experts" },
  { label: "Experience", href: "#experience" },
  { label: "Careers", href: "#careers" },
  { label: "News", href: "#news" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

const defaultLegalLinks: LegalLink[] = [
  { label: "Disclaimer", href: "#disclaimer" },
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Modern slavery statement", href: "#modern-slavery" },
];

export default function RbbeconFooter({
  mode = "light",
  logo = "RBB",
  navLinks = defaultNavLinks,
  legalLinks = defaultLegalLinks,
  copyright = "RBB Economics 2002-2023",
}: RbbeconFooterProps) {
  const colors = COLORS[mode];

  return (
    <footer
      className="relative w-full"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-8 mb-12 lg:mb-0"
          >
            <span
              className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight"
              style={{ color: colors.text }}
            >
              {logo}
            </span>
            {/* Vertical Divider */}
            <div
              className="hidden lg:block h-64 w-px"
              style={{ backgroundColor: colors.border }}
            />
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 max-w-md"
          >
            <ul className="space-y-0">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="group block py-3 transition-colors duration-200"
                    style={{
                      borderBottom: `1px solid ${colors.borderLight}`,
                    }}
                  >
                    <span
                      className="text-base font-normal group-hover:opacity-70 transition-opacity duration-200"
                      style={{ color: colors.text }}
                    >
                      {link.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          style={{ borderTop: `1px solid ${colors.borderLight}` }}
        >
          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-2">
            {legalLinks.map((link, index) => (
              <span key={link.label} className="flex items-center">
                <a
                  href={link.href}
                  className="text-sm hover:opacity-70 transition-opacity duration-200"
                  style={{ color: colors.textMuted }}
                >
                  {link.label}
                </a>
                {index < legalLinks.length - 1 && (
                  <span
                    className="mx-2 text-sm"
                    style={{ color: colors.textMuted }}
                  >
                    |
                  </span>
                )}
              </span>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm" style={{ color: colors.textMuted }}>
            &copy; {copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
