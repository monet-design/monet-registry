"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#0f1629",
    headingText: "#FFFFFF",
    linkText: "#9BA3B5",
    mutedText: "#6B7280",
    socialIconBg: "#4B5B7A",
    socialIconColor: "#FFFFFF",
    divider: "#1F2937",
    languageButtonBg: "#1E293B",
    languageButtonBorder: "#374151",
  },
  dark: {
    background: "#0f1629",
    headingText: "#FFFFFF",
    linkText: "#9BA3B5",
    mutedText: "#6B7280",
    socialIconBg: "#4B5B7A",
    socialIconColor: "#FFFFFF",
    divider: "#1F2937",
    languageButtonBg: "#1E293B",
    languageButtonBorder: "#374151",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

// Social Icons
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// Galileo Logo Component
const GalileoLogo = ({ color }: { color: string }) => (
  <svg
    width="120"
    height="32"
    viewBox="0 0 120 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Circle with mountain icon */}
    <circle cx="16" cy="16" r="14" stroke={color} strokeWidth="2" fill="none" />
    <path
      d="M8 22L16 10L24 22H8Z"
      fill={color}
      opacity="0.3"
    />
    <path
      d="M12 22L18 13L24 22H12Z"
      fill={color}
      opacity="0.6"
    />
    {/* galileo text */}
    <text
      x="38"
      y="21"
      fontFamily="Inter, sans-serif"
      fontSize="18"
      fontWeight="500"
      fill={color}
    >
      galileo
    </text>
  </svg>
);

// Navigation data
const navigationColumns = [
  {
    title: "Solutions",
    links: [
      { label: "Digital & Neobanking", href: "#" },
      { label: "B2B Payments", href: "#" },
      { label: "Growth & Activation", href: "#" },
      { label: "Cryptocurrency", href: "#" },
      { label: "Embedded Finance", href: "#" },
      { label: "Investing", href: "#" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Cards", href: "#" },
      { label: "Deposits", href: "#" },
      { label: "Payments & Transfers", href: "#" },
      { label: "Credit & Lending", href: "#" },
      { label: "Data & Analytics", href: "#" },
      { label: "Risk & Compliance", href: "#" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Cloud Infrastructure", href: "#" },
      { label: "API Technology", href: "#" },
      { label: "Banking Core", href: "#" },
      { label: "Trusted Partners", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "API Documentation", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Recipes", href: "#" },
      { label: "Change Log", href: "#" },
      { label: "Sandbox", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Customer Service", href: "#" },
      { label: "Program Management", href: "#" },
      { label: "Disputes Operations", href: "#" },
      { label: "Fraud Operations", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Clients", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Events", href: "#" },
      { label: "Newsroom", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy Choices", href: "#" },
  { label: "Privacy Disclosure", href: "#" },
  { label: "Politica de Privacidad", href: "#" },
  { label: "California Residents", href: "#" },
];

const socialLinks = [
  { icon: TwitterIcon, label: "Twitter", href: "#" },
  { icon: YouTubeIcon, label: "YouTube", href: "#" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "#" },
];

interface FooterGalileoProps {
  mode?: "light" | "dark";
  companyName?: string;
  copyrightYear?: string;
}

export default function FooterGalileo({
  mode = "dark",
  companyName = "Galileo Financial Technologies, LLC",
  copyrightYear = "2023",
}: FooterGalileoProps) {
  const colors = COLORS[mode];

  return (
    <footer
      className="relative w-full"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column - Brand & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            {/* Logo */}
            <div className="mb-4">
              <GalileoLogo color={colors.headingText} />
            </div>

            {/* Company Name & Copyright */}
            <p
              className="mb-1 text-sm font-medium"
              style={{ color: colors.headingText }}
            >
              {companyName}
            </p>
            <p
              className="mb-4 text-sm"
              style={{ color: colors.linkText }}
            >
              LLC {copyrightYear}
            </p>

            {/* Small legal text */}
            <p
              className="mb-8 text-xs leading-relaxed"
              style={{ color: colors.mutedText }}
            >
              Galileo Financial Technologies, LLC is a technology
              company, not a bank. Galileo partners with Sutton Bank,
              member FDIC, and other banks to provide banking services.
            </p>

            {/* Follow Section */}
            <p
              className="mb-3 text-sm font-medium"
              style={{ color: colors.headingText }}
            >
              Follow Galileo
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full transition-opacity hover:opacity-80"
                  style={{
                    backgroundColor: colors.socialIconBg,
                    color: colors.socialIconColor,
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-10 lg:grid-cols-6"
          >
            {navigationColumns.map((column, colIdx) => (
              <div key={colIdx}>
                <h3
                  className="mb-4 text-sm font-semibold"
                  style={{ color: colors.headingText }}
                >
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors hover:opacity-80"
                        style={{ color: colors.linkText }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section - Legal Links & Language */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 flex flex-col items-start justify-between gap-6 border-t pt-8 sm:flex-row sm:items-center"
          style={{ borderColor: colors.divider }}
        >
          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-sm underline transition-opacity hover:opacity-80"
                style={{ color: colors.linkText }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Language Selector */}
          <button
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-opacity hover:opacity-80"
            style={{
              backgroundColor: colors.languageButtonBg,
              borderColor: colors.languageButtonBorder,
              borderWidth: 1,
              color: colors.headingText,
            }}
          >
            En
            <ChevronDown className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
