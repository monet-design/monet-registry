"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#e8e4de",
    heading: "#111827",
    text: "#6b7280",
    border: "#d1d5db",
  },
  dark: {
    background: "#1f2937",
    heading: "#f9fafb",
    text: "#9ca3af",
    border: "#374151",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface UserbandComFooter10Props {
  mode?: "light" | "dark";
}

const footerLinks = {
  features: [
    { label: "서포트 에이전트", href: "#" },
    { label: "피드백", href: "#" },
    { label: "체인지로그", href: "#" },
    { label: "문서", href: "#" },
  ],
  resources: [
    { label: "개인정보 처리방침", href: "#" },
    { label: "서비스 이용 약관", href: "#" },
  ],
};

export default function UserbandComFooter10({
  mode = "light",
}: UserbandComFooter10Props) {
  const colors = COLORS[mode];

  return (
    <footer
      className="relative w-full"
      style={{ backgroundColor: colors.background }}
    >
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="flex flex-col gap-8 md:flex-row md:gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo and Copyright */}
          <div className="space-y-4 flex-1">
            <a
              href="#"
              className="inline-block text-2xl font-bold"
              style={{ color: colors.heading }}
            >
              <span className="italic">u</span>serband
            </a>
            <p className="text-sm" style={{ color: colors.text }}>
              &copy; 2025 Userband. All rights reserved.
            </p>
          </div>

          {/* Features Links */}
          <div className="space-y-4 flex-shrink-0">
            <h4
              className="text-sm font-semibold"
              style={{ color: colors.heading }}
            >
              기능
            </h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.features.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="transition-colors hover:opacity-80"
                    style={{ color: colors.text }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-4 flex-shrink-0">
            <h4
              className="text-sm font-semibold"
              style={{ color: colors.heading }}
            >
              리소스
            </h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="transition-colors hover:opacity-80"
                    style={{ color: colors.text }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Language Selector */}
          <div className="space-y-4 flex-shrink-0">
            <h4
              className="text-sm font-semibold"
              style={{ color: colors.heading }}
            >
              언어
            </h4>
            <div
              className="flex items-center justify-between rounded-md border px-3 py-2 w-[140px]"
              style={{
                borderColor: colors.border,
                backgroundColor: colors.background,
              }}
            >
              <span className="text-sm" style={{ color: colors.heading }}>
                한국어
              </span>
              <svg
                className="w-4 h-4 opacity-50"
                fill="none"
                stroke={colors.text}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
