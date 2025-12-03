"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#010101",
    headerText: "#f3f3f3",
    linkText: "#8f8f8f",
    legalText: "#555555",
    socialIcon: "#5a5a5a",
    dropdownBg: "#1e1e1e",
    dropdownBorder: "#333333",
    dropdownText: "#cccccc",
    divider: "#1a1a1a",
  },
  dark: {
    background: "#010101",
    headerText: "#f3f3f3",
    linkText: "#8f8f8f",
    legalText: "#555555",
    socialIcon: "#5a5a5a",
    dropdownBg: "#1e1e1e",
    dropdownBorder: "#333333",
    dropdownText: "#cccccc",
    divider: "#1a1a1a",
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
import { Globe, ChevronDown, Instagram, Twitter, Github } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface MollieFooterProps {
  mode?: "light" | "dark";
  companyName?: string;
  columns?: FooterColumn[];
  legalLinks?: FooterLink[];
  socialLinks?: {
    instagram?: string;
    medium?: string;
    twitter?: string;
    github?: string;
  };
  currentLanguage?: string;
  languages?: string[];
  copyrightYear?: number;
}

// Medium icon (not available in lucide-react)
const MediumIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

const defaultColumns: FooterColumn[] = [
  {
    title: "Mollie",
    links: [
      { label: "Support", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Agency partners", href: "#" },
      { label: "SaaS and ecommerce partners", href: "#" },
      { label: "Paid with Mollie?", href: "#" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Online payments", href: "#" },
      { label: "In-person payments", href: "#" },
      { label: "Recurring payments", href: "#" },
      { label: "Checkout", href: "#" },
      { label: "Acceptance & Risk", href: "#" },
      { label: "Payment Links", href: "#" },
      { label: "Capital", href: "#" },
      { label: "Connect for Platforms", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Libraries", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Status", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "About us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "News", href: "#" },
      { label: "Success stories", href: "#" },
      { label: "Growth", href: "#" },
      { label: "Papers", href: "#" },
      { label: "Mollie Resources", href: "#" },
      { label: "Product updates", href: "#" },
    ],
  },
];

const defaultLegalLinks: FooterLink[] = [
  { label: "User Agreement", href: "#" },
  { label: "Privacy Statement", href: "#" },
  { label: "Responsible Disclosure", href: "#" },
  { label: "Whistleblower Policy", href: "#" },
  { label: "Impressum", href: "#" },
  { label: "Cookie Settings", href: "#" },
];

export default function MollieFooter({
  mode = "dark",
  companyName = "Mollie B.V.",
  columns = defaultColumns,
  legalLinks = defaultLegalLinks,
  socialLinks = {
    instagram: "#",
    medium: "#",
    twitter: "#",
    github: "#",
  },
  currentLanguage = "English",
  languages = ["English", "Dutch", "German", "French"],
  copyrightYear = 2024,
}: MollieFooterProps) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <footer
      className="w-full"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <motion.div
          className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Navigation Columns */}
          {columns.map((column, index) => (
            <motion.div key={column.title} variants={itemVariants}>
              <h3
                className="mb-6 text-sm font-medium"
                style={{ color: colors.headerText }}
              >
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200 hover:opacity-80"
                      style={{ color: colors.linkText }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Language Selector Column */}
          <motion.div variants={itemVariants}>
            <h3
              className="mb-6 text-sm font-medium"
              style={{ color: colors.headerText }}
            >
              Location and language
            </h3>
            <div className="relative">
              <button
                className="flex w-full items-center justify-between gap-2 rounded-md border px-3 py-2 text-sm transition-colors duration-200 hover:border-opacity-60"
                style={{
                  backgroundColor: colors.dropdownBg,
                  borderColor: colors.dropdownBorder,
                  color: colors.dropdownText,
                }}
              >
                <span className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  {currentLanguage}
                </span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="my-12 h-px w-full"
          style={{ backgroundColor: colors.divider }}
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col items-center justify-between gap-6 md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Copyright and Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs md:justify-start">
            <span style={{ color: colors.legalText }}>
              &copy; {copyrightYear} {companyName}
            </span>
            {legalLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-200 hover:opacity-80"
                style={{ color: colors.legalText }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                className="transition-colors duration-200 hover:opacity-80"
                style={{ color: colors.socialIcon }}
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            )}
            {socialLinks.medium && (
              <a
                href={socialLinks.medium}
                className="transition-colors duration-200 hover:opacity-80"
                style={{ color: colors.socialIcon }}
                aria-label="Medium"
              >
                <MediumIcon className="h-5 w-5" />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                className="transition-colors duration-200 hover:opacity-80"
                style={{ color: colors.socialIcon }}
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                className="transition-colors duration-200 hover:opacity-80"
                style={{ color: colors.socialIcon }}
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
