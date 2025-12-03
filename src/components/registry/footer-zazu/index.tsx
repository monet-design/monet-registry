"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#44445A",
  text: "#FFFFFF",
  textMuted: "#9999AA",
  textSubtle: "#AAAABC",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface FooterLink {
  label: string;
  href: string;
  underline?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterZazuProps {
  companyName?: string;
  companyAddress?: string[];
  columns?: FooterColumn[];
  legalText?: string;
  copyrightText?: string;
}

// Zazu Logo Component
function ZazuLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Abstract arrow/star shape logo */}
      <path
        d="M40 10L50 30H70L54 44L60 70L40 54L20 70L26 44L10 30H30L40 10Z"
        fill="currentColor"
      />
      <path
        d="M40 25L35 35H25L32 41L29 52L40 45L51 52L48 41L55 35H45L40 25Z"
        fill="#44445A"
      />
    </svg>
  );
}

const defaultColumns: FooterColumn[] = [
  {
    title: "Solutions",
    links: [
      { label: "Business account", href: "#" },
      { label: "Digital incorporation", href: "#" },
      { label: "Invoice management", href: "#" },
      { label: "Expense management", href: "#" },
      { label: "Bookkeeping & cash flow", href: "#" },
    ],
  },
  {
    title: "Zazu",
    links: [
      { label: "Enterprise", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Use", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Legal Notice", href: "#" },
    ],
  },
];

const defaultAddress = [
  "Zazu SA (Pty) Ltd.",
  "Darter Studios, Darter Road",
  "Gardens, Cape Town, 800 - South Africa",
];

export default function FooterZazu({
  companyName = "Zazu",
  companyAddress = defaultAddress,
  columns = defaultColumns,
  legalText = "Banking services provided by a South African bank and regulated by the South African Reserve Bank. Zazu web and mobile applications are properties of Zazu GmbH and Zazu SA (PTY) Ltd., a company registered with the CIPC with registration number: K2024396003",
  copyrightText = "Copyright 2024. Zazu. All rights reserved.",
}: FooterZazuProps) {
  return (
    <footer
      className="relative w-full py-16 px-8 md:px-16 lg:px-24"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-24"
        >
          {/* Left Section - Logo and Address */}
          <div className="flex-shrink-0 lg:w-1/4">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <ZazuLogo className="w-16 h-16 text-white" />
            </motion.div>

            {/* Address */}
            <div className="space-y-1">
              {companyAddress.map((line, index) => (
                <p
                  key={index}
                  className="text-sm"
                  style={{
                    color: COLORS.text,
                    textDecoration: index > 0 ? "underline" : "none",
                    textUnderlineOffset: "3px",
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Right Section - Link Columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16">
            {columns.map((column, columnIndex) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
              >
                {/* Column Title */}
                <h3
                  className="text-sm font-normal mb-6"
                  style={{ color: COLORS.textMuted }}
                >
                  {column.title}
                </h3>

                {/* Links */}
                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm transition-opacity hover:opacity-80"
                        style={{ color: COLORS.text }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section - Legal and Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 flex flex-col lg:flex-row justify-between gap-6"
        >
          {/* Legal Text */}
          <p
            className="text-xs max-w-3xl leading-relaxed"
            style={{ color: COLORS.textSubtle }}
          >
            {legalText}
          </p>

          {/* Copyright */}
          <p
            className="text-xs whitespace-nowrap"
            style={{ color: COLORS.textSubtle }}
          >
            {copyrightText}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
