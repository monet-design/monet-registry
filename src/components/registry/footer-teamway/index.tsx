"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#F5F3EF",
    textPrimary: "#000000",
    textSecondary: "#666666",
  },
  dark: {
    background: "#1a1a18",
    textPrimary: "#FFFFFF",
    textSecondary: "#999999",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import {
  Twitter,
  Linkedin,
  Youtube,
  FileText,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

// Discord icon component (not available in lucide-react)
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

// Teamway Logo component
const TeamwayLogo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  arrowType: "right" | "upRight";
}

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterTeamwayProps {
  mode?: "light" | "dark";
  headline?: string;
  socialLinks?: SocialLink[];
  columns?: FooterColumn[];
  legalLinks?: FooterLink[];
  logoText?: string;
}

const defaultSocialLinks: SocialLink[] = [
  {
    name: "Articles",
    href: "#",
    icon: <FileText className="w-5 h-5" />,
    arrowType: "right",
  },
  {
    name: "Twitter",
    href: "#",
    icon: <Twitter className="w-5 h-5" />,
    arrowType: "upRight",
  },
  {
    name: "Discord",
    href: "#",
    icon: <DiscordIcon className="w-5 h-5" />,
    arrowType: "upRight",
  },
  {
    name: "Whitepaper",
    href: "#",
    icon: <FileText className="w-5 h-5" />,
    arrowType: "right",
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: <Linkedin className="w-5 h-5" />,
    arrowType: "upRight",
  },
  {
    name: "YouTube",
    href: "#",
    icon: <Youtube className="w-5 h-5" />,
    arrowType: "upRight",
  },
];

const defaultColumns: FooterColumn[] = [
  {
    title: "Companies",
    links: [
      { label: "Why Teamway?", href: "#" },
      { label: "Professions", href: "#" },
      { label: "How we compare", href: "#" },
      { label: "The process", href: "#" },
    ],
  },
  {
    title: "Talent",
    links: [
      { label: "Why Teamway?", href: "#" },
      { label: "How we compare", href: "#" },
      { label: "Application process", href: "#" },
      { label: "Frequently asked", href: "#" },
    ],
  },
  {
    title: "Society",
    links: [
      { label: "The new work era", href: "#" },
      { label: "TMW Token", href: "#" },
      { label: "Roles", href: "#" },
      { label: "Whitepaper", href: "#" },
    ],
  },
  {
    title: "General",
    links: [
      { label: "About", href: "#" },
      { label: "Articles", href: "#" },
      { label: "F.A.Q.", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

const defaultLegalLinks: FooterLink[] = [
  { label: "Code of Conduct", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Declaration", href: "#" },
];

export default function FooterTeamway({
  mode = "light",
  headline = "Leading the next era of work.",
  socialLinks = defaultSocialLinks,
  columns = defaultColumns,
  legalLinks = defaultLegalLinks,
  logoText = "Teamway",
}: FooterTeamwayProps) {
  const colors = COLORS[mode];

  return (
    <footer
      className="w-full py-16 px-8 md:px-16 lg:px-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-normal mb-16 tracking-tight"
          style={{ color: colors.textPrimary }}
        >
          {headline}
        </motion.h2>

        {/* Social Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-6 mb-16 pb-16 border-b"
          style={{ borderColor: mode === "light" ? "#e0ddd8" : "#333333" }}
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex items-center justify-between py-2 group transition-opacity hover:opacity-70"
            >
              <div className="flex items-center gap-3">
                <span style={{ color: colors.textPrimary }}>{link.icon}</span>
                <span
                  className="text-base font-medium"
                  style={{ color: colors.textPrimary }}
                >
                  {link.name}
                </span>
              </div>
              {link.arrowType === "right" ? (
                <ArrowRight
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  style={{ color: colors.textPrimary }}
                />
              ) : (
                <ArrowUpRight
                  className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: colors.textPrimary }}
                />
              )}
            </a>
          ))}
        </motion.div>

        {/* Navigation Columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {columns.map((column, columnIndex) => (
            <div key={columnIndex}>
              <h3
                className="text-base font-medium mb-4"
                style={{ color: colors.textPrimary }}
              >
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm transition-opacity hover:opacity-70"
                      style={{ color: colors.textSecondary }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom Section: Logo and Legal Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: colors.textPrimary }}
            >
              <path
                d="M12 2L2 7l10 5 10-5-10-5z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17l10 5 10-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12l10 5 10-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="text-lg font-semibold"
              style={{ color: colors.textPrimary }}
            >
              {logoText}
            </span>
          </div>

          {/* Separator */}
          <div
            className="hidden md:block w-px h-6"
            style={{ backgroundColor: mode === "light" ? "#cccccc" : "#444444" }}
          />

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-6">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm transition-opacity hover:opacity-70"
                style={{ color: colors.textSecondary }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
