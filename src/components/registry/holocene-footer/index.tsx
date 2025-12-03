"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#ffffff",
    text: "#1a1a1a",
    textSecondary: "#6b7280",
    border: "#e5e7eb",
    accent: "#ea580c",
  },
  dark: {
    background: "#0a0a0a",
    text: "#ffffff",
    textSecondary: "#9ca3af",
    border: "#27272a",
    accent: "#f97316",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

// Types
interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface LegalLink {
  label: string;
  href: string;
}

interface HoloceneFooterProps {
  mode?: "light" | "dark";
  logoText?: string;
  tagline?: string;
  columns?: FooterColumn[];
  companyName?: string;
  year?: number;
  legalLinks?: LegalLink[];
}

// Default data
const defaultColumns: FooterColumn[] = [
  {
    title: "Challenges",
    links: [
      { label: "Raw Material Inventory", href: "/challenges/raw-material" },
      { label: "Supplier Reliability", href: "/challenges/supplier" },
      { label: "Plant Utilization", href: "/challenges/plant" },
      { label: "Direct Material Costs", href: "/challenges/costs" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "EPOCH", href: "/solutions/epoch" },
      { label: "ERA", href: "/solutions/era" },
      { label: "EON", href: "/solutions/eon" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Why Holocene", href: "/why-holocene" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "LinkedIn", href: "https://linkedin.com", external: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resource Hub", href: "/resources" },
      { label: "Blog", href: "/blog" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Videos", href: "/videos" },
    ],
  },
];

const defaultLegalLinks: LegalLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Legal Notice", href: "/legal" },
];

// Holocene Logo Component
function HoloceneLogo({ color }: { color: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill={color} />
      <path
        d="M12 20C12 15.5817 15.5817 12 20 12V28C15.5817 28 12 24.4183 12 20Z"
        fill="#0a0a0a"
      />
    </svg>
  );
}

// Footer Link Component
function FooterLinkItem({
  link,
  mode,
}: {
  link: FooterLink;
  mode: "light" | "dark";
}) {
  const colors = COLORS[mode];

  return (
    <li
      className="border-b py-3"
      style={{ borderColor: colors.border }}
    >
      <a
        href={link.href}
        target={link.external ? "_blank" : undefined}
        rel={link.external ? "noopener noreferrer" : undefined}
        className="inline-flex items-center gap-1.5 text-sm transition-colors duration-200 hover:opacity-70"
        style={{ color: colors.textSecondary }}
      >
        {link.label}
        {link.external && <ExternalLink size={12} />}
      </a>
    </li>
  );
}

// Main Component
export default function HoloceneFooter({
  mode = "dark",
  logoText = "Holocene",
  tagline = "Embrace Evolution in Action.",
  columns = defaultColumns,
  companyName = "Holocene",
  year = 2025,
  legalLinks = defaultLegalLinks,
}: HoloceneFooterProps) {
  const colors = COLORS[mode];

  return (
    <footer
      className="relative w-full px-8 pb-8 pt-16 md:px-16 lg:px-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Main Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Logo Section */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <HoloceneLogo color={colors.accent} />
              <span
                className="text-2xl font-semibold"
                style={{ color: colors.text }}
              >
                {logoText}
              </span>
            </div>
            <p
              className="mt-6 text-sm"
              style={{ color: colors.textSecondary }}
            >
              {tagline}
            </p>
          </motion.div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-9">
            {columns.map((column, columnIndex) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
              >
                <h3
                  className="mb-4 text-sm font-medium"
                  style={{ color: colors.text }}
                >
                  {column.title}
                </h3>
                <ul>
                  {column.links.map((link) => (
                    <FooterLinkItem key={link.label} link={link} mode={mode} />
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-24 flex flex-col items-start justify-between gap-4 border-t pt-8 md:flex-row md:items-center"
          style={{ borderColor: colors.border }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Copyright */}
          <p
            className="text-sm"
            style={{ color: colors.textSecondary }}
          >
            &copy; {year} {companyName}. All rights reserved.
          </p>

          {/* Legal Links */}
          <nav className="flex flex-wrap items-center gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm transition-colors duration-200 hover:opacity-70"
                style={{ color: colors.textSecondary }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </motion.div>
      </div>
    </footer>
  );
}
