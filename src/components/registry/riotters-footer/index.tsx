"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#FFFFFF",
  text: "#000000",
  textMuted: "#666666",
  accent: "#00F5D4", // 민트/시안 밑줄 색상
  buttonBg: "#000000",
  buttonText: "#FFFFFF",
  buttonAccent: "#00F5D4",
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

interface SocialLink {
  label: string;
  href: string;
}

interface CompanyInfo {
  name: string;
  address: string[];
  vatNumber: string;
}

interface RiottersFooterProps {
  companyInfo?: CompanyInfo;
  servicesColumn?: FooterColumn;
  pagesColumn?: FooterColumn;
  ctaHeading?: string;
  ctaHighlight?: string;
  ctaHeadingEnd?: string;
  ctaButtonText?: string;
  ctaButtonHref?: string;
  copyrightYear?: string;
  copyrightText?: string;
  legalLinks?: FooterLink[];
  socialLinks?: SocialLink[];
  largeLogo?: string;
}

const defaultCompanyInfo: CompanyInfo = {
  name: "Riotterssp. z o.o.",
  address: [
    "Krolowej Korony Polskiej 24/315,",
    "70-486 Szczecin, Poland",
  ],
  vatNumber: "NIP/VAT-UE: PL8522656985",
};

const defaultServicesColumn: FooterColumn = {
  links: [
    { label: "Product Design", href: "#" },
    { label: "UX Design", href: "#" },
    { label: "Branding", href: "#" },
    { label: "Motion Design", href: "#" },
    { label: "Marketing Design", href: "#" },
    { label: "Payload Development", href: "#" },
    { label: "Low/No-code Development", href: "#" },
    { label: "HubSpot Development", href: "#" },
    { label: "Software Development", href: "#" },
  ],
};

const defaultPagesColumn: FooterColumn = {
  links: [
    { label: "Homepage", href: "#" },
    { label: "Services", href: "#" },
    { label: "About", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Process", href: "#" },
    { label: "Toolbox", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

const defaultLegalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Cookies Policy", href: "#" },
];

const defaultSocialLinks: SocialLink[] = [
  { label: "Dribbble", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Clutch", href: "#" },
];

export default function RiottersFooter({
  companyInfo = defaultCompanyInfo,
  servicesColumn = defaultServicesColumn,
  pagesColumn = defaultPagesColumn,
  ctaHeading = "Use our ",
  ctaHighlight = "imagination to accelleratte",
  ctaHeadingEnd = " your brand, product or technology.",
  ctaButtonText = "Let's Accelleratte",
  ctaButtonHref = "#",
  copyrightYear = "2024",
  copyrightText = "Riotters",
  legalLinks = defaultLegalLinks,
  socialLinks = defaultSocialLinks,
  largeLogo = "riotters",
}: RiottersFooterProps) {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p
              className="text-sm font-medium"
              style={{ color: COLORS.text }}
            >
              {companyInfo.name}
            </p>
            {companyInfo.address.map((line, index) => (
              <p
                key={index}
                className="text-sm"
                style={{ color: COLORS.text }}
              >
                {line}
              </p>
            ))}
            <p
              className="mt-4 text-sm"
              style={{ color: COLORS.text }}
            >
              {companyInfo.vatNumber}
            </p>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ul className="space-y-1">
              {servicesColumn.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm transition-opacity hover:opacity-60"
                    style={{ color: COLORS.text }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pages Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ul className="space-y-1">
              {pagesColumn.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm transition-opacity hover:opacity-60"
                    style={{ color: COLORS.text }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:max-w-xs"
          >
            <p
              className="text-lg font-medium leading-tight"
              style={{ color: COLORS.text }}
            >
              {ctaHeading}
              <span
                className="relative inline"
              >
                <span className="relative z-10">{ctaHighlight}</span>
                <span
                  className="absolute bottom-0 left-0 h-[3px] w-full"
                  style={{ backgroundColor: COLORS.accent }}
                />
              </span>
              {ctaHeadingEnd}
            </p>
            <a
              href={ctaButtonHref}
              className="mt-6 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all hover:bg-black hover:text-white"
              style={{
                borderColor: COLORS.text,
                color: COLORS.text,
              }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: COLORS.accent }}
              />
              {ctaButtonText}
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-16 flex flex-col items-start justify-between gap-4 border-t pt-6 md:flex-row md:items-center"
          style={{ borderColor: "#E5E5E5" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Copyright & Legal */}
          <div className="flex flex-wrap items-center gap-1 text-sm" style={{ color: COLORS.text }}>
            <span>&copy; {copyrightText} {copyrightYear}. All rights reserved</span>
            {legalLinks.map((link, index) => (
              <span key={index} className="flex items-center">
                <span className="mx-2">&bull;</span>
                <a
                  href={link.href}
                  className="transition-opacity hover:opacity-60"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-1 text-sm" style={{ color: COLORS.text }}>
            {socialLinks.map((link, index) => (
              <span key={index} className="flex items-center">
                {index > 0 && <span className="mx-2">&bull;</span>}
                <a
                  href={link.href}
                  className="transition-opacity hover:opacity-60"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Large Logo */}
      <motion.div
        className="relative w-full overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div
          className="select-none whitespace-nowrap text-center font-black uppercase leading-none tracking-tighter"
          style={{
            color: COLORS.text,
            fontSize: "clamp(80px, 18vw, 280px)",
            lineHeight: 0.85,
            marginBottom: "-0.1em",
          }}
        >
          {largeLogo}
        </div>
      </motion.div>
    </footer>
  );
}
