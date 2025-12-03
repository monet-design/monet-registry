"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#161616",
  textPrimary: "#FFFFFF",
  textSecondary: "#9CA3AF",
  textMuted: "#6B7280",
  accent: "#3D8C6B",
} as const;

/**
 * 기본 콘텐츠 데이터
 */
const DEFAULT_CONTENT = {
  logo: {
    text: "S1",
    href: "/",
  },
  tagline: "A better way to take your LLMs online.",
  copyright: "Nen Labs · Inc. 2025.",
  legalLinks: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  systemStatus: {
    label: "All Systems Operational",
    href: "/status",
    isOperational: true,
  },
  platformLinks: {
    title: "Platform",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "Status", href: "/status" },
      { label: "Careers (We're Hiring!)", href: "/careers" },
    ],
  },
  communityLinks: {
    title: "Join the Community",
    links: [
      { label: "X / Twitter", href: "https://twitter.com" },
      { label: "GitHub", href: "https://github.com" },
      { label: "Discord", href: "https://discord.com" },
    ],
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface LinkItem {
  label: string;
  href: string;
}

interface LinkSection {
  title: string;
  links: LinkItem[];
}

interface SystemStatus {
  label: string;
  href: string;
  isOperational: boolean;
}

interface FooterSteelProps {
  logo?: {
    text?: string;
    href?: string;
  };
  tagline?: string;
  copyright?: string;
  legalLinks?: LinkItem[];
  systemStatus?: SystemStatus;
  platformLinks?: LinkSection;
  communityLinks?: LinkSection;
}

function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="currentColor"
      className={className}
    >
      <path d="M6 0L12 6L6 12L0 6L6 0Z" />
    </svg>
  );
}

function Logo({ text = "S1", href = "/" }: { text?: string; href?: string }) {
  return (
    <a href={href} className="inline-block">
      <div
        className="flex items-center justify-center w-10 h-10 rounded-lg"
        style={{ backgroundColor: "#2A2A2A" }}
      >
        <span
          className="text-lg font-bold tracking-tight"
          style={{ color: COLORS.textPrimary }}
        >
          {text}
        </span>
      </div>
    </a>
  );
}

export default function FooterSteel({
  logo = DEFAULT_CONTENT.logo,
  tagline = DEFAULT_CONTENT.tagline,
  copyright = DEFAULT_CONTENT.copyright,
  legalLinks = DEFAULT_CONTENT.legalLinks as unknown as LinkItem[],
  systemStatus = DEFAULT_CONTENT.systemStatus as unknown as SystemStatus,
  platformLinks = DEFAULT_CONTENT.platformLinks as unknown as LinkSection,
  communityLinks = DEFAULT_CONTENT.communityLinks as unknown as LinkSection,
}: FooterSteelProps) {
  return (
    <footer
      className="w-full py-12 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: COLORS.background }}
    >
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column - Logo, Tagline, Copyright, Legal, Status */}
          <div className="md:col-span-5 lg:col-span-4 space-y-4">
            <Logo text={logo.text} href={logo.href} />

            <p
              className="text-sm"
              style={{ color: COLORS.textPrimary }}
            >
              {tagline}
            </p>

            <p
              className="text-sm"
              style={{ color: COLORS.textMuted }}
            >
              {copyright}
            </p>

            <div className="flex items-center gap-2 text-sm">
              {legalLinks.map((link, index) => (
                <span key={link.label} className="flex items-center gap-2">
                  <a
                    href={link.href}
                    className="hover:underline transition-colors"
                    style={{ color: COLORS.textSecondary }}
                  >
                    {link.label}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span style={{ color: COLORS.textMuted }}>·</span>
                  )}
                </span>
              ))}
            </div>

            <a
              href={systemStatus.href}
              className="inline-flex items-center gap-2 text-sm hover:opacity-80 transition-opacity mt-4"
              style={{ color: COLORS.accent }}
            >
              <DiamondIcon className="w-3 h-3" />
              <span>{systemStatus.label}</span>
            </a>
          </div>

          {/* Middle Column - Platform Links */}
          <div className="md:col-span-3 lg:col-span-4">
            <h3
              className="text-sm font-medium mb-4"
              style={{ color: COLORS.textPrimary }}
            >
              {platformLinks.title}
            </h3>
            <ul className="space-y-3">
              {platformLinks.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:opacity-80 transition-opacity"
                    style={{ color: COLORS.textSecondary }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Community Links */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3
              className="text-sm font-medium mb-4"
              style={{ color: COLORS.textPrimary }}
            >
              {communityLinks.title}
            </h3>
            <ul className="space-y-3">
              {communityLinks.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:opacity-80 transition-opacity"
                    style={{ color: COLORS.textSecondary }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
