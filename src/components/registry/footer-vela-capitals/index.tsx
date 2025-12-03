"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F55A42",
    textPrimary: "#FFF5E6",
    textSecondary: "#FFF5E6",
    largeTextColor: "#E04D38",
    linkUnderline: "#FFF5E6",
  },
  dark: {
    background: "#F55A42",
    textPrimary: "#FFF5E6",
    textSecondary: "#FFF5E6",
    largeTextColor: "#E04D38",
    linkUnderline: "#FFF5E6",
  },
} as const;

/**
 * 네비게이션 링크
 */
const NAV_LINKS = [
  { number: "01", label: "About", href: "#about" },
  { number: "02", label: "Values", href: "#values" },
  { number: "03", label: "Products", href: "#products" },
  { number: "04", label: "Target Markets", href: "#target-markets" },
] as const;

/**
 * 본사 주소
 */
const HEADQUARTER = {
  title: "Headquarter",
  lines: [
    "Office No. 42",
    "Level 42, Emirates Towers",
    "Sheikh Zayed Road",
    "Dubai",
    "United Arab Emirates",
  ],
} as const;

/**
 * 법적 주소
 */
const LEGAL_ADDRESS = {
  title: "Legal address",
  lines: [
    "Office No. 1809 – 1812",
    "Bayswater Bay By Omniyat",
    "Business Bay",
    "Dubai",
    "United Arab Emirates",
  ],
} as const;

/**
 * 연락처
 */
const CONTACT = {
  title: "General Enquiries",
  email: "email@velacapitals.com",
  phone: "+971 4 3132 002",
} as const;

/**
 * 대형 장식 텍스트
 */
const LARGE_TEXT = "Transactions";

/**
 * 저작권 정보
 */
const COPYRIGHT = {
  year: 2024,
  company: "Vela Capitals Limited",
  websiteBy: "DigiComm",
  websiteByLink: "#",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface FooterVelaCapitalsProps {
  mode?: "light" | "dark";
  navLinks?: typeof NAV_LINKS;
  headquarter?: typeof HEADQUARTER;
  legalAddress?: typeof LEGAL_ADDRESS;
  contact?: typeof CONTACT;
  largeText?: string;
  copyright?: typeof COPYRIGHT;
}

export default function FooterVelaCapitals({
  mode = "light",
  navLinks = NAV_LINKS,
  headquarter = HEADQUARTER,
  legalAddress = LEGAL_ADDRESS,
  contact = CONTACT,
  largeText = LARGE_TEXT,
  copyright = COPYRIGHT,
}: FooterVelaCapitalsProps) {
  const colors = COLORS[mode];

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
        {/* Navigation Links */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8"
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={link.number}
              href={link.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block"
            >
              <div
                className="mb-3 h-px w-full"
                style={{ backgroundColor: colors.textPrimary }}
              />
              <span
                className="font-sans text-sm tracking-wide"
                style={{ color: colors.textPrimary }}
              >
                <span className="opacity-80">({link.number})</span>{" "}
                <span className="font-medium">{link.label}</span>
              </span>
            </motion.a>
          ))}
        </motion.nav>

        {/* Address and Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-20 grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-16"
        >
          {/* Headquarter */}
          <div>
            <h3
              className="mb-4 font-sans text-lg font-medium"
              style={{ color: colors.textPrimary }}
            >
              {headquarter.title}
            </h3>
            <address
              className="not-italic font-sans text-sm leading-relaxed"
              style={{ color: colors.textSecondary }}
            >
              {headquarter.lines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headquarter.lines.length - 1 && <br />}
                </span>
              ))}
            </address>
          </div>

          {/* Legal Address */}
          <div>
            <h3
              className="mb-4 font-sans text-lg font-medium"
              style={{ color: colors.textPrimary }}
            >
              {legalAddress.title}
            </h3>
            <address
              className="not-italic font-sans text-sm leading-relaxed"
              style={{ color: colors.textSecondary }}
            >
              {legalAddress.lines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < legalAddress.lines.length - 1 && <br />}
                </span>
              ))}
            </address>
          </div>

          {/* General Enquiries */}
          <div>
            <h3
              className="mb-4 font-sans text-lg font-medium"
              style={{ color: colors.textPrimary }}
            >
              {contact.title}
            </h3>
            <div
              className="font-sans text-sm leading-relaxed"
              style={{ color: colors.textSecondary }}
            >
              <a
                href={`mailto:${contact.email}`}
                className="block underline underline-offset-2 transition-opacity hover:opacity-80"
                style={{ color: colors.textSecondary }}
              >
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="mt-1 block underline underline-offset-2 transition-opacity hover:opacity-80"
                style={{ color: colors.textSecondary }}
              >
                {contact.phone}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Large Decorative Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mb-16 overflow-hidden"
        >
          <div
            className="whitespace-nowrap font-sans text-[12vw] font-bold leading-none tracking-tight lg:text-[10vw]"
            style={{ color: colors.largeTextColor }}
          >
            {largeText}
          </div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-start justify-between gap-4 border-t pt-6 sm:flex-row sm:items-center"
          style={{ borderColor: `${colors.textPrimary}20` }}
        >
          <p
            className="font-sans text-xs"
            style={{ color: colors.textSecondary }}
          >
            &copy; Copyright {copyright.year} {copyright.company}.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            All rights reserved.
          </p>
          <p
            className="font-sans text-xs"
            style={{ color: colors.textSecondary }}
          >
            Website by{" "}
            <a
              href={copyright.websiteByLink}
              className="underline underline-offset-2 transition-opacity hover:opacity-80"
              style={{ color: colors.textSecondary }}
            >
              {copyright.websiteBy}
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
