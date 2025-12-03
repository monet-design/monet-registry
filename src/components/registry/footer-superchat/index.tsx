"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#020210",
  accent: "#3CC2F3",
  textPrimary: "#FFFFFF",
  textSecondary: "#9090A0",
  textMuted: "#6B6B7B",
  border: "#1A1A2E",
} as const;

/**
 * 네비게이션 링크 데이터
 */
const PRODUCT_LINKS = [
  { label: "WhatsApp Business", href: "#" },
  { label: "WhatsApp Newsletter", href: "#" },
  { label: "Automations", href: "#" },
  { label: "Integrations", href: "#" },
  { label: "Universal inbox", href: "#" },
  { label: "Webchat", href: "#" },
  { label: "Team Chat", href: "#" },
  { label: "Reviews", href: "#" },
  { label: "Mobile app", href: "#" },
  { label: "Desktop app", href: "#" },
] as const;

const COMPANY_LINKS = [
  { label: "About us", href: "#" },
  { label: "Prices", href: "#" },
  { label: "Career", href: "#", badge: "We are hiring!" },
  { label: "Contact", href: "#" },
  { label: "Affiliate program", href: "#" },
  { label: "Press", href: "#" },
  { label: "System status", href: "#" },
] as const;

const RESOURCES_LINKS = [
  { label: "Blog", href: "#" },
  { label: "Success Stories", href: "#" },
  { label: "Superchat comparison", href: "#" },
  { label: "Free tools", href: "#" },
  { label: "Free eBooks", href: "#" },
  { label: "Messaging Report 2023", href: "#" },
] as const;

const LEGAL_LINKS = [
  { label: "Imprint", href: "#" },
  { label: "Data privacy", href: "#" },
  { label: "Terms of Use", href: "#" },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Linkedin, Instagram, Facebook, Youtube, Phone, Mail, Globe, ChevronDown } from "lucide-react";

// X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Superchat Logo component
const SuperchatLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    className={className}
  >
    <path
      d="M8 28L20 20L32 28L20 36L8 28Z"
      fill={COLORS.accent}
      fillOpacity="0.6"
    />
    <path
      d="M8 20L20 12L32 20L20 28L8 20Z"
      fill={COLORS.accent}
      fillOpacity="0.8"
    />
    <path
      d="M8 12L20 4L32 12L20 20L8 12Z"
      fill={COLORS.accent}
    />
  </svg>
);

interface FooterSuperchatProps {
  companyName?: string;
  tagline?: string;
  phone?: string;
  email?: string;
  copyright?: string;
  location?: string;
  productLinks?: typeof PRODUCT_LINKS;
  companyLinks?: typeof COMPANY_LINKS;
  resourcesLinks?: typeof RESOURCES_LINKS;
  legalLinks?: typeof LEGAL_LINKS;
}

export default function FooterSuperchat({
  companyName = "Superchat",
  tagline = "Superchat - The name\nsays it all",
  phone = "+44 1224 051727",
  email = "hello@superchat.com",
  copyright = "2024 SuperX GmbH",
  location = "Berlin",
  productLinks = PRODUCT_LINKS,
  companyLinks = COMPANY_LINKS,
  resourcesLinks = RESOURCES_LINKS,
  legalLinks = LEGAL_LINKS,
}: FooterSuperchatProps) {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: XIcon, href: "#", label: "X (Twitter)" },
  ];

  return (
    <footer
      className="relative w-full"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column - Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            {/* Logo */}
            <div className="mb-6">
              <SuperchatLogo className="h-12 w-12" />
            </div>

            {/* Tagline */}
            <p
              className="mb-8 whitespace-pre-line text-sm font-medium"
              style={{ color: COLORS.textSecondary }}
            >
              {tagline}
            </p>

            {/* Social Icons */}
            <div className="mb-8 flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="transition-colors hover:opacity-80"
                  style={{ color: COLORS.textSecondary }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sm transition-colors hover:opacity-80"
                style={{ color: COLORS.textSecondary }}
              >
                <Phone className="h-4 w-4" />
                <span>{phone}</span>
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-sm transition-colors hover:opacity-80"
                style={{ color: COLORS.textSecondary }}
              >
                <Mail className="h-4 w-4" />
                <span>{email}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Columns - Navigation */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-8">
            {/* Product Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3
                className="mb-6 text-sm font-semibold"
                style={{ color: COLORS.textMuted }}
              >
                Product
              </h3>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:opacity-80"
                      style={{ color: COLORS.textSecondary }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3
                className="mb-6 text-sm font-semibold"
                style={{ color: COLORS.textMuted }}
              >
                Company
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label} className="flex items-center gap-2">
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:opacity-80"
                      style={{ color: COLORS.textSecondary }}
                    >
                      {link.label}
                    </a>
                    {"badge" in link && link.badge && (
                      <span
                        className="rounded-full px-2 py-0.5 text-xs font-medium"
                        style={{
                          backgroundColor: COLORS.accent,
                          color: COLORS.background,
                        }}
                      >
                        {link.badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3
                className="mb-6 text-sm font-semibold"
                style={{ color: COLORS.textMuted }}
              >
                Resources
              </h3>
              <ul className="space-y-3">
                {resourcesLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:opacity-80"
                      style={{ color: COLORS.textSecondary }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t"
        style={{ borderColor: COLORS.border }}
      >
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* Left Side - Language & Copyright */}
            <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: COLORS.textSecondary }}>
              {/* Language Selector */}
              <button className="flex items-center gap-1 transition-colors hover:opacity-80">
                <Globe className="h-4 w-4" />
                <span>English</span>
                <ChevronDown className="h-3 w-3" />
              </button>

              {/* Copyright */}
              <span>&copy; {copyright}</span>

              {/* Legal Links */}
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:opacity-80"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right Side - Made with love */}
            <div
              className="text-sm"
              style={{ color: COLORS.textSecondary }}
            >
              Made with <span style={{ color: COLORS.accent }}>&#9825;</span> in {location}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
