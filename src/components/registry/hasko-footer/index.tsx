"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - 다크 그린 배경과 민트색 도트 패턴
 */
const COLORS = {
  background: "#162A27",
  textPrimary: "#FFFFFF",
  textSecondary: "rgba(255, 255, 255, 0.75)",
  dotColor: "rgba(127, 180, 170, 0.5)",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title?: string;
  links: FooterLink[];
}

interface HaskoFooterProps {
  logo?: React.ReactNode;
  companyName?: string;
  address?: {
    title?: string;
    lines: string[];
  };
  contact?: {
    title?: string;
    email?: string;
    phone?: string;
    socialLabel?: string;
    socialHref?: string;
  };
  linkColumns?: FooterColumn[];
  copyright?: string;
  privacyLink?: {
    label: string;
    href: string;
  };
}

// Dot Grid Pattern Component
function DotGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${COLORS.dotColor} 1.5px, transparent 1.5px)`,
          backgroundSize: "48px 48px",
          backgroundPosition: "24px 24px",
        }}
      />
    </div>
  );
}

export default function HaskoFooter({
  logo,
  companyName = "Hasko",
  address = {
    title: "ADRESS",
    lines: ["Hasko Invest AB", "Norrlandsgatan 10", "111 43 Stockholm"],
  },
  contact = {
    title: "KONTAKT",
    email: "info@haskoinvest.com",
    phone: "08 - 502 352 00",
    socialLabel: "Linkedin",
    socialHref: "#",
  },
  linkColumns = [
    {
      links: [
        { label: "10&20 vision", href: "#" },
        { label: "Bolagsutveckling", href: "#" },
        { label: "Vara bolag", href: "#" },
      ],
    },
    {
      links: [
        { label: "Team", href: "#" },
        { label: "Nyheter", href: "#" },
        { label: "Kontakt", href: "#" },
      ],
    },
  ],
  copyright = "Copyright (c) 2024 Hasko — Alla rattigheter forbehallna",
  privacyLink = {
    label: "Integritetspolicy",
    href: "#",
  },
}: HaskoFooterProps) {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Dot Grid Background */}
      <DotGrid />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-10 py-16 md:grid-cols-2 lg:grid-cols-6 lg:gap-8"
        >
          {/* Logo */}
          <div className="lg:col-span-2">
            {logo || (
              <svg
                viewBox="0 0 120 32"
                className="h-8 w-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text
                  x="0"
                  y="26"
                  fill={COLORS.textPrimary}
                  fontFamily="system-ui, -apple-system, sans-serif"
                  fontSize="28"
                  fontWeight="400"
                  letterSpacing="-0.02em"
                >
                  {companyName}
                </text>
              </svg>
            )}
          </div>

          {/* Address Column */}
          <div className="lg:col-span-1">
            {address.title && (
              <h3
                className="mb-4 text-xs font-semibold uppercase tracking-wider"
                style={{ color: COLORS.textPrimary }}
              >
                {address.title}
              </h3>
            )}
            <div className="space-y-1">
              {address.lines.map((line, index) => (
                <p
                  key={index}
                  className="text-sm"
                  style={{ color: COLORS.textSecondary }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-1">
            {contact.title && (
              <h3
                className="mb-4 text-xs font-semibold uppercase tracking-wider"
                style={{ color: COLORS.textPrimary }}
              >
                {contact.title}
              </h3>
            )}
            <div className="space-y-1">
              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="block text-sm transition-opacity hover:opacity-80"
                  style={{ color: COLORS.textSecondary }}
                >
                  {contact.email}
                </a>
              )}
              {contact.phone && (
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="block text-sm transition-opacity hover:opacity-80"
                  style={{ color: COLORS.textSecondary }}
                >
                  {contact.phone}
                </a>
              )}
              {contact.socialLabel && (
                <a
                  href={contact.socialHref}
                  className="block text-sm transition-opacity hover:opacity-80"
                  style={{ color: COLORS.textSecondary }}
                >
                  {contact.socialLabel}
                </a>
              )}
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {linkColumns.map((column, colIndex) => (
            <div key={colIndex} className="lg:col-span-1">
              {column.title && (
                <h3
                  className="mb-4 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: COLORS.textPrimary }}
                >
                  {column.title}
                </h3>
              )}
              <ul className="space-y-1">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm transition-opacity hover:opacity-80"
                      style={{ color: COLORS.textSecondary }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Spacer for dot pattern area */}
        <div className="h-64 md:h-80 lg:h-96" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pb-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start sm:gap-8">
            <p
              className="text-xs"
              style={{ color: COLORS.textSecondary }}
            >
              {copyright}
            </p>
            <a
              href={privacyLink.href}
              className="text-xs underline underline-offset-2 transition-opacity hover:opacity-80"
              style={{ color: COLORS.textSecondary }}
            >
              {privacyLink.label}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
