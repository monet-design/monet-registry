"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#272A32",
    sectionTitle: "#71747B",
    linkText: "#FFFFFF",
    linkHover: "#9CA3AF",
    tagline: "#FFFFFF",
    mutedText: "#71747B",
    languageSelector: "#43474E",
    languageSelectorBorder: "#545860",
    badge: "#3D81EE",
    badgeText: "#FFFFFF",
    divider: "#3A3D45",
  },
  dark: {
    background: "#272A32",
    sectionTitle: "#71747B",
    linkText: "#FFFFFF",
    linkHover: "#9CA3AF",
    tagline: "#FFFFFF",
    mutedText: "#71747B",
    languageSelector: "#43474E",
    languageSelectorBorder: "#545860",
    badge: "#3D81EE",
    badgeText: "#FFFFFF",
    divider: "#3A3D45",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ChevronDown, Facebook, Instagram, Youtube, Linkedin, Rss } from "lucide-react";

// X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Glassdoor icon component
const GlassdoorIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.14 2H6.86C6.38 2 6 2.38 6 2.86v18.28c0 .48.38.86.86.86h10.28c.48 0 .86-.38.86-.86V2.86c0-.48-.38-.86-.86-.86zM8 20V4h8v16H8z" />
  </svg>
);

interface FooterLink {
  label: string;
  href?: string;
  badge?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterCheckoutProps {
  mode?: "light" | "dark";
  logo?: React.ReactNode;
  companyName?: string;
  tagline?: string;
  sections?: FooterSection[];
  legalLinks?: FooterLink[];
  policyLinks?: FooterLink[];
  complianceLinks?: FooterLink[];
  disclaimer?: string;
  copyrightYear?: string;
  showLanguageSelector?: boolean;
  currentLanguage?: string;
}

const defaultSections: FooterSection[] = [
  {
    title: "PRODUCTS",
    links: [
      { label: "Accept Online" },
      { label: "Payouts" },
      { label: "Issuing" },
      { label: "Payment Integrations" },
      { label: "Integrated Platforms" },
      { label: "Payment methods" },
      { label: "Payment processing" },
      { label: "Fraud protection" },
      { label: "Authentication" },
      { label: "Intelligent acceptance" },
      { label: "Identity verification" },
      { label: "International coverage" },
      { label: "Real Time Account Updater" },
      { label: "Network Tokens" },
      { label: "Pricing" },
    ],
  },
  {
    title: "SOLUTIONS",
    links: [
      { label: "eCommerce" },
      { label: "FinTech" },
      { label: "Gaming" },
      { label: "Crypto" },
      { label: "Marketplace" },
      { label: "Payment facilitators" },
      { label: "International Coverage" },
      { label: "Our Partners" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "Our mission" },
      { label: "Our customers" },
      { label: "Leadership" },
      { label: "Newsroom" },
      { label: "Contact us" },
      { label: "Life at Checkout.com" },
      { label: "Open positions", badge: "HIRING" },
      { label: "Diversity & inclusion" },
      { label: "Carbon Offsetting" },
    ],
  },
];

const defaultDevSection: FooterSection = {
  title: "DEVELOPERS",
  links: [
    { label: "Documentation" },
    { label: "API reference" },
    { label: "Test account" },
  ],
};

const defaultResourcesSection: FooterSection = {
  title: "RESOURCES",
  links: [
    { label: "Blog" },
    { label: "Case studies" },
    { label: "Support" },
  ],
};

const defaultLegalLinks: FooterLink[] = [
  { label: "Terms & policies" },
  { label: "Privacy policy" },
  { label: "Regulatory" },
  { label: "Cookies Settings" },
  { label: "Disclaimer" },
];

const defaultComplianceLinks: FooterLink[] = [
  { label: "Modern slavery statement" },
  { label: "Supplier code of conduct" },
  { label: "Accessibility statement" },
];

export default function FooterCheckout({
  mode = "dark",
  logo,
  companyName = "Checkout.com",
  tagline = "Make your payments systems faster.\nSmarter. More adaptive.",
  sections = defaultSections,
  legalLinks = defaultLegalLinks,
  complianceLinks = defaultComplianceLinks,
  disclaimer = "Checkout.com or its affiliates provide services under a license or registration in various jurisdictions. Money transmission services in the U.S. provided by Checkout US Inc. (NMLS # 1791692). For details please visit our Regulatory page.",
  copyrightYear = "2024",
  showLanguageSelector = true,
  currentLanguage = "Global (English)",
}: FooterCheckoutProps) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  const DefaultLogo = () => (
    <div className="flex items-center gap-2">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
        <path
          d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.08 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z"
          fill="currentColor"
        />
      </svg>
      <span className="text-lg font-medium text-white">{companyName}</span>
    </div>
  );

  return (
    <footer
      className="relative w-full"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Top Section - Logo, Tagline, Language Selector */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="flex flex-col gap-8 pb-12 lg:flex-row lg:items-start lg:justify-between"
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="flex-shrink-0">
            {logo || <DefaultLogo />}
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="max-w-md text-base leading-relaxed whitespace-pre-line lg:text-lg"
            style={{ color: colors.tagline }}
          >
            {tagline}
          </motion.p>

          {/* Language Selector */}
          {showLanguageSelector && (
            <motion.div variants={itemVariants} className="flex-shrink-0">
              <div className="flex flex-col gap-1">
                <span
                  className="text-xs font-medium tracking-wider uppercase"
                  style={{ color: colors.sectionTitle }}
                >
                  Language
                </span>
                <button
                  className="flex items-center gap-3 rounded-md px-4 py-2.5 transition-colors hover:opacity-90"
                  style={{
                    backgroundColor: colors.languageSelector,
                    border: `1px solid ${colors.languageSelectorBorder}`,
                  }}
                >
                  {/* Flag placeholder */}
                  <span className="text-lg">🇬🇧</span>
                  <span className="text-sm text-white">{currentLanguage}</span>
                  <ChevronDown className="h-4 w-4 text-white" />
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Middle Section - Links Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-2 gap-x-8 gap-y-12 border-t py-12 md:grid-cols-3 lg:grid-cols-5"
          style={{ borderColor: colors.divider }}
        >
          {/* Products Column */}
          <motion.div variants={itemVariants}>
            <h3
              className="mb-4 text-xs font-medium tracking-[0.2em] uppercase"
              style={{ color: colors.sectionTitle }}
            >
              {sections[0]?.title || "PRODUCTS"}
            </h3>
            <ul className="space-y-3">
              {(sections[0]?.links || []).map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href || "#"}
                    className="text-sm transition-colors hover:opacity-70"
                    style={{ color: colors.linkText }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions Column */}
          <motion.div variants={itemVariants}>
            <h3
              className="mb-4 text-xs font-medium tracking-[0.2em] uppercase"
              style={{ color: colors.sectionTitle }}
            >
              {sections[1]?.title || "SOLUTIONS"}
            </h3>
            <ul className="space-y-3">
              {(sections[1]?.links || []).map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href || "#"}
                    className="text-sm transition-colors hover:opacity-70"
                    style={{ color: colors.linkText }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div variants={itemVariants}>
            <h3
              className="mb-4 text-xs font-medium tracking-[0.2em] uppercase"
              style={{ color: colors.sectionTitle }}
            >
              {sections[2]?.title || "COMPANY"}
            </h3>
            <ul className="space-y-3">
              {(sections[2]?.links || []).map((link, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <a
                    href={link.href || "#"}
                    className="text-sm transition-colors hover:opacity-70"
                    style={{ color: colors.linkText }}
                  >
                    {link.label}
                  </a>
                  {link.badge && (
                    <span
                      className="rounded px-1.5 py-0.5 text-[10px] font-semibold tracking-wider"
                      style={{
                        backgroundColor: colors.badge,
                        color: colors.badgeText,
                      }}
                    >
                      {link.badge}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Developers & Resources Column */}
          <motion.div variants={itemVariants} className="col-span-2 md:col-span-1 lg:col-span-2">
            <div className="grid grid-cols-2 gap-8">
              {/* Developers */}
              <div>
                <h3
                  className="mb-4 text-xs font-medium tracking-[0.2em] uppercase"
                  style={{ color: colors.sectionTitle }}
                >
                  {defaultDevSection.title}
                </h3>
                <ul className="space-y-3">
                  {defaultDevSection.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.href || "#"}
                        className="text-sm transition-colors hover:opacity-70"
                        style={{ color: colors.linkText }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3
                  className="mb-4 text-xs font-medium tracking-[0.2em] uppercase"
                  style={{ color: colors.sectionTitle }}
                >
                  {defaultResourcesSection.title}
                </h3>
                <ul className="space-y-3">
                  {defaultResourcesSection.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.href || "#"}
                        className="text-sm transition-colors hover:opacity-70"
                        style={{ color: colors.linkText }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section - Copyright, Legal Links, Social Icons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="border-t pt-8"
          style={{ borderColor: colors.divider }}
        >
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Copyright & Disclaimer */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-sm font-medium" style={{ color: colors.linkText }}>
                &copy; {copyrightYear} {companyName}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: colors.mutedText }}>
                {disclaimer.split("Regulatory page").map((part, idx, arr) => (
                  <span key={idx}>
                    {part}
                    {idx < arr.length - 1 && (
                      <a
                        href="#"
                        className="underline transition-colors hover:opacity-70"
                        style={{ color: colors.mutedText }}
                      >
                        Regulatory page
                      </a>
                    )}
                  </span>
                ))}
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="#"
                  className="transition-colors hover:opacity-70"
                  style={{ color: colors.mutedText }}
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="transition-colors hover:opacity-70"
                  style={{ color: colors.mutedText }}
                  aria-label="X (Twitter)"
                >
                  <XIcon className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="transition-colors hover:opacity-70"
                  style={{ color: colors.mutedText }}
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="transition-colors hover:opacity-70"
                  style={{ color: colors.mutedText }}
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="transition-colors hover:opacity-70"
                  style={{ color: colors.mutedText }}
                  aria-label="Glassdoor"
                >
                  <GlassdoorIcon className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="transition-colors hover:opacity-70"
                  style={{ color: colors.mutedText }}
                  aria-label="RSS"
                >
                  <Rss className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="transition-colors hover:opacity-70"
                  style={{ color: colors.mutedText }}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </motion.div>

            {/* Legal Links */}
            <motion.div variants={itemVariants}>
              <ul className="space-y-2">
                {legalLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href || "#"}
                      className="text-sm transition-colors hover:opacity-70"
                      style={{ color: colors.linkText }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Compliance Links */}
            <motion.div variants={itemVariants}>
              <ul className="space-y-2">
                {complianceLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href || "#"}
                      className="text-sm transition-colors hover:opacity-70"
                      style={{ color: colors.linkText }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
