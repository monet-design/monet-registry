"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 텍스트 콘텐츠
 */
const CONTENT = {
  brandName: "deepcon",
  links: [
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
    { label: "Contact", href: "#" },
  ],
  copyright: "© 2025 Deepcon. All rights reserved.",
} as const;

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    background: "#FFFFFF",
    borderTop: "rgba(0, 0, 0, 0.1)",
    logoText: "#1F2937",
    linkText: "#4B5563",
    linkHover: "#111827",
    copyright: "#6B7280",
  },
  dark: {
    background: "#0A0A0A",
    borderTop: "rgba(255, 255, 255, 0.1)",
    logoText: "#F9FAFB",
    linkText: "#9CA3AF",
    linkHover: "#F9FAFB",
    copyright: "#6B7280",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

// Deepcon Logo Icon Component
function DeepconIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="8" cy="10" r="2.5" fill="white" />
      <circle cx="16" cy="10" r="2.5" fill="white" />
    </svg>
  );
}

interface DeepconAiFooter3Props {
  mode?: "light" | "dark";
  brandName?: string;
  links?: Array<{ label: string; href: string }>;
  copyright?: string;
}

export default function DeepconAiFooter3({
  mode = "light",
  brandName = CONTENT.brandName,
  links = CONTENT.links as unknown as Array<{ label: string; href: string }>,
  copyright = CONTENT.copyright,
}: DeepconAiFooter3Props) {
  const colors = COLORS[mode];

  return (
    <footer
      className="w-full py-12 sm:py-16 px-4 sm:px-8"
      style={{
        backgroundColor: colors.background,
        borderTop: `1px solid ${colors.borderTop}`,
      }}
    >
      <div className="container mx-auto max-w-[976px]">
        <motion.div
          className="flex flex-col items-center gap-6 sm:gap-8 px-4 sm:px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 py-1"
          >
            <DeepconIcon
              className="h-6 w-6"
            />
            <span
              className="text-xl font-bold"
              style={{ color: colors.logoText }}
            >
              {brandName}
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm">
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="font-medium transition-colors duration-200"
                style={{ color: colors.linkText }}
                whileHover={{ color: colors.linkHover }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Copyright */}
          <p
            className="text-sm"
            style={{ color: colors.copyright }}
          >
            {copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
