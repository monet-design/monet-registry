"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#273932",
  logoText: "#FFFFFF",
  headingText: "#FFFFFF",
  linkText: "rgba(255, 255, 255, 0.75)",
  mutedText: "rgba(255, 255, 255, 0.5)",
  buttonBackground: "#B4D94F",
  buttonText: "#1A1A1A",
  socialIconBg: "rgba(255, 255, 255, 0.1)",
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import "./font.css";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterInsurelyProps {
  logoText?: string;
  addressLine1?: string;
  addressLine2?: string;
  contactButtonText?: string;
  contactButtonHref?: string;
  columns?: FooterColumn[];
  copyrightText?: string;
  linkedinUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
}

const defaultColumns: FooterColumn[] = [
  {
    title: "Industry",
    links: [
      { label: "Insurance", href: "#" },
      { label: "Banking & personal finance", href: "#" },
    ],
  },
  {
    title: "Use cases",
    links: [
      { label: "Insurance Overview", href: "#" },
      { label: "Compare & Switch", href: "#" },
      { label: "Pension Overview", href: "#" },
      { label: "Pension Transfer", href: "#" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Pension Data Aggregation", href: "#" },
      { label: "Sales Support Tool", href: "#" },
      { label: "Digital Insurance Sales", href: "#" },
      { label: "Pension Data Aggregation", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#" },
      { label: "Press", href: "#" },
      { label: "Career", href: "#" },
      { label: "Glossary", href: "#" },
      { label: "What is open insurance", href: "#" },
      { label: "What is open finance", href: "#" },
      { label: "Open insurance blog", href: "#" },
      { label: "Contact us", href: "#" },
      { label: "Privacy policy (swe)", href: "#" },
    ],
  },
];

const defaultCopyrightText =
  "Copyright © 2023. All rights reserved. Insurely is provided by Insurely AB. Organization number: 559103-5646. Insurely AB is registered Insurance Intermediaries with the Swedish Companies Registration Office and comply under the Swedish Financial Supervision Authority.";

export default function FooterInsurely({
  logoText = "Insurely",
  addressLine1 = "Sveavägen 9",
  addressLine2 = "111 57 Stockholm, Sweden",
  contactButtonText = "Get in touch",
  contactButtonHref = "#",
  columns = defaultColumns,
  copyrightText = defaultCopyrightText,
  linkedinUrl = "#",
  facebookUrl = "#",
  instagramUrl = "#",
}: FooterInsurelyProps) {
  return (
    <footer
      className="w-full"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-8">
          {/* Left Section - Logo and Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 lg:min-w-[200px]"
          >
            {/* Logo */}
            <h2
              className="text-3xl font-normal tracking-tight"
              style={{
                color: COLORS.logoText,
                fontFamily: "'Instrument Serif', Georgia, serif",
              }}
            >
              {logoText}
            </h2>

            {/* Address */}
            <div
              className="text-sm leading-relaxed"
              style={{ color: COLORS.linkText }}
            >
              <p>{addressLine1}</p>
              <p>{addressLine2}</p>
            </div>

            {/* Contact Button */}
            <motion.a
              href={contactButtonHref}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium w-fit transition-all"
              style={{
                backgroundColor: COLORS.buttonBackground,
                color: COLORS.buttonText,
              }}
            >
              {contactButtonText}
            </motion.a>
          </motion.div>

          {/* Right Section - Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 flex-1 lg:max-w-4xl">
            {columns.map((column, columnIndex) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
                className="flex flex-col gap-4"
              >
                <h3
                  className="text-sm font-semibold"
                  style={{ color: COLORS.headingText }}
                >
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((link, linkIndex) => (
                    <li key={`${link.label}-${linkIndex}`}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors hover:text-white"
                        style={{ color: COLORS.linkText }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          {/* Copyright Text */}
          <p
            className="text-xs leading-relaxed max-w-3xl"
            style={{ color: COLORS.mutedText }}
          >
            {copyrightText}
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={linkedinUrl}
              className="flex items-center justify-center w-10 h-10 rounded-md transition-all hover:opacity-80"
              style={{ backgroundColor: COLORS.socialIconBg }}
              aria-label="LinkedIn"
            >
              <Linkedin
                className="h-5 w-5"
                style={{ color: COLORS.logoText }}
              />
            </a>
            <a
              href={facebookUrl}
              className="flex items-center justify-center w-10 h-10 rounded-md transition-all hover:opacity-80"
              style={{ backgroundColor: COLORS.socialIconBg }}
              aria-label="Facebook"
            >
              <Facebook
                className="h-5 w-5"
                style={{ color: COLORS.logoText }}
              />
            </a>
            <a
              href={instagramUrl}
              className="flex items-center justify-center w-10 h-10 rounded-md transition-all hover:opacity-80"
              style={{ backgroundColor: COLORS.socialIconBg }}
              aria-label="Instagram"
            >
              <Instagram
                className="h-5 w-5"
                style={{ color: COLORS.logoText }}
              />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
