"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#1a1a1a",
    text: "#ffffff",
    textMuted: "#717171",
    border: "#333333",
    socialBg: "#ffffff",
    socialIcon: "#000000",
  },
  dark: {
    background: "#1a1a1a",
    text: "#ffffff",
    textMuted: "#717171",
    border: "#333333",
    socialBg: "#ffffff",
    socialIcon: "#000000",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Linkedin, Instagram, Twitter, Youtube, Globe } from "lucide-react";

// Types
interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface RivianStyleFooterProps {
  mode?: "light" | "dark";
  productLinks?: FooterLink[];
  mainLinks?: FooterLink[];
  educationLinks?: FooterLink[];
  companyLinks?: FooterLink[];
  resourcesLinks?: FooterLink[];
  socialLinks?: SocialLink[];
  legalLinks?: FooterLink[];
  companyName?: string;
  year?: number;
  region?: string;
}

// Default data
const defaultProductLinks: FooterLink[] = [
  { label: "R1T", href: "/r1t" },
  { label: "R1S", href: "/r1s" },
  { label: "R2", href: "/r2" },
];

const defaultMainLinks: FooterLink[] = [
  { label: "Spaces", href: "/spaces" },
  { label: "Gear Shop", href: "/gear-shop" },
  { label: "Our Company", href: "/company" },
  { label: "Stories", href: "/stories" },
  { label: "Fleet", href: "/fleet" },
];

const defaultEducationLinks: FooterLink[] = [
  { label: "Purchasing", href: "/purchasing" },
  { label: "Charging", href: "/charging" },
  { label: "Insurance", href: "/insurance" },
  { label: "Service", href: "/service" },
];

const defaultCompanyLinks: FooterLink[] = [
  { label: "Sustainability", href: "/sustainability" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Investors", href: "/investors" },
  { label: "Forever", href: "/forever" },
];

const defaultResourcesLinks: FooterLink[] = [
  { label: "Support", href: "/support" },
];

const defaultSocialLinks: SocialLink[] = [
  { icon: <Linkedin size={18} />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <Instagram size={18} />, href: "https://instagram.com", label: "Instagram" },
  { icon: <Twitter size={18} />, href: "https://twitter.com", label: "Twitter" },
  { icon: <Youtube size={18} />, href: "https://youtube.com", label: "YouTube" },
];

const defaultLegalLinks: FooterLink[] = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Cookies", href: "/cookies" },
  { label: "Legal", href: "/legal" },
  { label: "Recalls", href: "/recalls" },
  { label: "Accessibility", href: "/accessibility" },
];

// Link Component
function FooterLinkItem({
  link,
  colors,
  isProduct = false,
}: {
  link: FooterLink;
  colors: typeof COLORS.light;
  isProduct?: boolean;
}) {
  return (
    <motion.a
      href={link.href}
      className="block transition-opacity hover:opacity-70"
      style={{
        color: colors.text,
        fontSize: isProduct ? "24px" : "14px",
        fontWeight: isProduct ? 400 : 400,
        lineHeight: isProduct ? "1.6" : "2",
      }}
      whileHover={{ x: 2 }}
      transition={{ duration: 0.2 }}
    >
      {link.label}
    </motion.a>
  );
}

// Column with Title
function FooterColumnWithTitle({
  title,
  links,
  colors,
}: {
  title: string;
  links: FooterLink[];
  colors: typeof COLORS.light;
}) {
  return (
    <div>
      <h4
        className="mb-3 text-sm"
        style={{ color: colors.textMuted }}
      >
        {title}
      </h4>
      <ul className="space-y-0">
        {links.map((link) => (
          <li key={link.label}>
            <FooterLinkItem link={link} colors={colors} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// Social Icon Button
function SocialIconButton({
  social,
  colors,
}: {
  social: SocialLink;
  colors: typeof COLORS.light;
}) {
  return (
    <motion.a
      href={social.href}
      aria-label={social.label}
      className="flex h-9 w-9 items-center justify-center rounded-md transition-opacity hover:opacity-80"
      style={{
        backgroundColor: colors.socialBg,
        color: colors.socialIcon,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {social.icon}
    </motion.a>
  );
}

// Privacy Choice Icon (checkmark style)
function PrivacyChoiceIcon() {
  return (
    <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="12" rx="6" fill="#1E90FF"/>
      <circle cx="18" cy="6" r="4" fill="white"/>
      <path d="M7 6L8.5 7.5L11 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function RivianStyleFooter({
  mode = "dark",
  productLinks = defaultProductLinks,
  mainLinks = defaultMainLinks,
  educationLinks = defaultEducationLinks,
  companyLinks = defaultCompanyLinks,
  resourcesLinks = defaultResourcesLinks,
  socialLinks = defaultSocialLinks,
  legalLinks = defaultLegalLinks,
  companyName = "Rivian",
  year = new Date().getFullYear(),
  region = "US",
}: RivianStyleFooterProps) {
  const colors = COLORS[mode];

  return (
    <footer
      className="w-full px-6 py-12 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Main Navigation Grid */}
        <motion.div
          className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Product Links (Large Text) */}
          <div>
            <ul className="space-y-1">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <FooterLinkItem link={link} colors={colors} isProduct />
                </li>
              ))}
            </ul>
          </div>

          {/* Main Links */}
          <div>
            <ul className="space-y-0">
              {mainLinks.map((link) => (
                <li key={link.label}>
                  <FooterLinkItem link={link} colors={colors} />
                </li>
              ))}
            </ul>
          </div>

          {/* Education Column */}
          <FooterColumnWithTitle
            title="Education"
            links={educationLinks}
            colors={colors}
          />

          {/* Company Column */}
          <FooterColumnWithTitle
            title="Company"
            links={companyLinks}
            colors={colors}
          />

          {/* Resources Column */}
          <FooterColumnWithTitle
            title="Resources"
            links={resourcesLinks}
            colors={colors}
          />
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col items-start justify-between gap-6 border-t pt-8 md:flex-row md:items-center"
          style={{ borderColor: colors.border }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Left Section */}
          <div className="flex flex-wrap items-center gap-6">
            {/* Region Selector */}
            <button
              className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
              style={{ color: colors.text }}
            >
              <span>{region}</span>
              <Globe size={16} />
            </button>

            {/* Copyright */}
            <span className="text-sm" style={{ color: colors.text }}>
              © {year} {companyName}. All Rights Reserved.
            </span>

            {/* Legal Links */}
            <nav className="flex flex-wrap items-center gap-4">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-opacity hover:opacity-70"
                  style={{ color: colors.text }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Privacy Choices */}
            <a
              href="/privacy-choices"
              className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
              style={{ color: colors.text }}
            >
              <PrivacyChoiceIcon />
              <span>Your privacy choices</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <SocialIconButton key={social.label} social={social} colors={colors} />
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
