"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#f8fafc",
    cardBackground: "#ffffff",
    cardBorder: "#e2e8f0",
    text: "#0f172a",
    textMuted: "#64748b",
    textSecondary: "#94a3b8",
    accent: "#c78454",
    accentHover: "#b5743f",
    green: "#36a370",
    border: "#e2e8f0",
    statusGreen: "#22c55e",
  },
  dark: {
    background: "#020711",
    cardBackground: "#0d1219",
    cardBorder: "#1e2733",
    text: "#f8fafc",
    textMuted: "#94a3b8",
    textSecondary: "#64748b",
    accent: "#c78454",
    accentHover: "#d89565",
    green: "#36a370",
    border: "#1e2733",
    statusGreen: "#22c55e",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import {
  Monitor,
  Sun,
  Moon,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

// X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Discord icon component
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

// YouTube icon component
const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// Sevalla Logo component
const SevallaLogo = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#c78454" />
    <path
      d="M7 12c0-2.5 2-4.5 5-4.5s5 2 5 4.5-2 4.5-5 4.5-5-2-5-4.5z"
      fill="white"
    />
  </svg>
);

// Check icon for badges
const CheckIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SecurityBadge {
  name: string;
  subtitle?: string;
}

interface SocialLink {
  icon: "x" | "discord" | "youtube";
  href: string;
  label: string;
}

interface SevallaFooterProps {
  mode?: "light" | "dark";
  logoIcon?: React.ReactNode;
  companyName?: string;
  tagline?: string;
  parentCompany?: {
    name: string;
    href: string;
  };
  securityBadges?: SecurityBadge[];
  securityMessage?: string;
  securityLinkText?: string;
  securityLinkHref?: string;
  columns?: FooterColumn[];
  socialLinks?: SocialLink[];
  copyrightYear?: string;
  copyrightCompany?: string;
  copyrightText?: string;
  statusMessage?: string;
  statusOperational?: boolean;
  showThemeToggle?: boolean;
}

const defaultSecurityBadges: SecurityBadge[] = [
  { name: "SOC II", subtitle: "Type 2" },
  { name: "ISO", subtitle: "27001" },
  { name: "GDPR" },
  { name: "CCPA" },
];

const defaultColumns: FooterColumn[] = [
  {
    title: "Products",
    links: [
      { label: "Application hosting", href: "#" },
      { label: "Database hosting", href: "#" },
      { label: "Static site hosting", href: "#" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "#", external: true },
      { label: "API docs", href: "#", external: true },
      { label: "Blog", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Status page", href: "#", external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#" },
      { label: "Startup program", href: "#" },
      { label: "Agency program", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Contact", href: "#", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "#", external: true },
      { label: "Terms of service", href: "#", external: true },
    ],
  },
];

const defaultSocialLinks: SocialLink[] = [
  { icon: "x", href: "#", label: "X (Twitter)" },
  { icon: "discord", href: "#", label: "Discord" },
  { icon: "youtube", href: "#", label: "YouTube" },
];

export default function SevallaFooter({
  mode = "dark",
  logoIcon,
  companyName = "Sevalla",
  tagline = "The intuitive platform and the perfect home for\nyour upcoming projects. Deploy applications,\ndatabases, and static sites effortlessly.",
  parentCompany = {
    name: "Kinsta",
    href: "#",
  },
  securityBadges = defaultSecurityBadges,
  securityMessage = "We take security and privacy seriously!",
  securityLinkText = "View our certifications",
  securityLinkHref = "#",
  columns = defaultColumns,
  socialLinks = defaultSocialLinks,
  copyrightYear = "2013 - 2024",
  copyrightCompany = "Kinsta, Inc.",
  copyrightText = "All rights reserved. Kinsta\u00ae and Sevalla\u00ae are registered trademarks.",
  statusMessage = "All Systems Operational",
  statusOperational = true,
  showThemeToggle = true,
}: SevallaFooterProps) {
  const colors = COLORS[mode];
  const [activeTheme, setActiveTheme] = useState<"system" | "light" | "dark">(
    "system"
  );

  const renderSocialIcon = (icon: SocialLink["icon"]) => {
    switch (icon) {
      case "x":
        return <XIcon className="w-5 h-5" />;
      case "discord":
        return <DiscordIcon className="w-5 h-5" />;
      case "youtube":
        return <YouTubeIcon className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <footer
      className="relative w-full"
      style={{ backgroundColor: colors.background }}
    >
      {/* Security Badges Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="px-6 md:px-12 lg:px-20 py-12"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Badges */}
          <div className="flex items-center gap-4">
            {securityBadges.map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center w-[72px] h-[72px] rounded-xl"
                style={{
                  backgroundColor: colors.cardBackground,
                  border: `1px solid ${colors.cardBorder}`,
                }}
              >
                <CheckIcon
                  className="w-5 h-5 mb-1"
                  style={{ color: colors.green }}
                />
                <span
                  className="text-xs font-semibold text-center"
                  style={{ color: colors.text }}
                >
                  {badge.name}
                </span>
                {badge.subtitle && (
                  <span
                    className="text-[10px] text-center"
                    style={{ color: colors.textMuted }}
                  >
                    {badge.subtitle}
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Security Message */}
          <div className="flex flex-col gap-1 text-center lg:text-left">
            <h3
              className="text-lg font-semibold"
              style={{ color: colors.text }}
            >
              {securityMessage}
            </h3>
            <a
              href={securityLinkHref}
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: colors.accent }}
            >
              {securityLinkText}
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div
        className="px-6 md:px-12 lg:px-20 py-12"
        style={{ borderTop: `1px solid ${colors.border}` }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row gap-12 lg:gap-16"
          >
            {/* Left Section - Logo, Tagline, Theme Toggle */}
            <div className="flex flex-col gap-6 lg:w-[320px]">
              {/* Logo */}
              <div className="flex items-center gap-2">
                {logoIcon || <SevallaLogo className="w-8 h-8" />}
                <span
                  className="text-2xl font-bold"
                  style={{ color: colors.text }}
                >
                  {companyName}
                </span>
              </div>

              {/* Tagline */}
              <p
                className="text-sm leading-relaxed whitespace-pre-line"
                style={{ color: colors.textMuted }}
              >
                {tagline}
              </p>

              {/* Parent Company */}
              <p className="text-sm" style={{ color: colors.textMuted }}>
                {companyName} is a{" "}
                <a
                  href={parentCompany.href}
                  className="font-medium transition-colors hover:opacity-80"
                  style={{ color: colors.accent }}
                >
                  {parentCompany.name}
                </a>{" "}
                product.
              </p>

              {/* Theme Toggle */}
              {showThemeToggle && (
                <div className="flex items-center gap-3 mt-4">
                  <span
                    className="text-sm font-medium"
                    style={{ color: colors.textMuted }}
                  >
                    Theme:
                  </span>
                  <div
                    className="flex items-center rounded-full p-1"
                    style={{
                      backgroundColor: colors.cardBackground,
                      border: `1px solid ${colors.cardBorder}`,
                    }}
                  >
                    <button
                      onClick={() => setActiveTheme("system")}
                      className={`p-2 rounded-full transition-colors ${
                        activeTheme === "system" ? "bg-white/10" : ""
                      }`}
                      style={{
                        color:
                          activeTheme === "system"
                            ? colors.text
                            : colors.textSecondary,
                      }}
                      aria-label="System theme"
                    >
                      <Monitor className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActiveTheme("light")}
                      className={`p-2 rounded-full transition-colors ${
                        activeTheme === "light" ? "bg-white/10" : ""
                      }`}
                      style={{
                        color:
                          activeTheme === "light"
                            ? colors.text
                            : colors.textSecondary,
                      }}
                      aria-label="Light theme"
                    >
                      <Sun className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActiveTheme("dark")}
                      className={`p-2 rounded-full transition-colors ${
                        activeTheme === "dark" ? "bg-white/10" : ""
                      }`}
                      style={{
                        color:
                          activeTheme === "dark"
                            ? colors.text
                            : colors.textSecondary,
                      }}
                      aria-label="Dark theme"
                    >
                      <Moon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 flex-1">
              {columns.map((column, colIndex) => (
                <motion.div
                  key={column.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: colIndex * 0.1 }}
                  className="flex flex-col gap-4"
                >
                  <h3
                    className="text-sm font-semibold"
                    style={{ color: colors.text }}
                  >
                    {column.title}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm transition-colors hover:opacity-70 inline-flex items-center gap-1"
                          style={{ color: colors.textMuted }}
                        >
                          {link.label}
                          {link.external && (
                            <ExternalLink className="w-3 h-3" />
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="px-6 md:px-12 lg:px-20 py-6"
        style={{ borderTop: `1px solid ${colors.border}` }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            {/* Copyright */}
            <p
              className="text-sm text-center md:text-left"
              style={{ color: colors.textSecondary }}
            >
              &copy; {copyrightYear} {copyrightCompany} {copyrightText}
            </p>

            {/* Right Section - Social Links & Status */}
            <div className="flex items-center gap-6">
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span
                  className="text-sm hidden sm:block"
                  style={{ color: colors.textMuted }}
                >
                  Follow us on:
                </span>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="transition-colors hover:opacity-70"
                      style={{ color: colors.text }}
                    >
                      {renderSocialIcon(social.icon)}
                    </a>
                  ))}
                </div>
              </div>

              {/* Status Indicator */}
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: colors.cardBackground,
                  border: `1px solid ${colors.cardBorder}`,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: statusOperational
                      ? colors.statusGreen
                      : "#EF4444",
                  }}
                />
                <span className="text-xs" style={{ color: colors.text }}>
                  {statusMessage}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
