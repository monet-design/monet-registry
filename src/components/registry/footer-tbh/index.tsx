"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#1d1d1d",
  accent: "#e67e3c",
  textPrimary: "#ffffff",
  textSecondary: "#9ca3af",
  divider: "#3a3a3a",
} as const;

/**
 * 콘텐츠 설정
 */
const CONTENT = {
  logo: {
    text: "tbh",
  },
  tagline: {
    highlight: "Reinventing",
    rest: "mental health for\na new generation",
  },
  navigation: {
    products: {
      title: "Products",
      links: [
        { label: "For K12", href: "#" },
        { label: "For Higher Ed", href: "#" },
        { label: "For Children", href: "#" },
        { label: "For Parents", href: "#" },
        { label: "For Enterprise", href: "#" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { label: "About us", href: "#", comingSoon: true },
        { label: "Careers", href: "#", comingSoon: true },
        { label: "Press Kit", href: "#", comingSoon: true },
        { label: "Blog", href: "#", comingSoon: true },
      ],
    },
    social: {
      title: "Follow us",
      links: [
        { label: "Instagram", href: "#", icon: "instagram" },
        { label: "TikTok", href: "#", icon: "tiktok" },
      ],
    },
  },
  privacy: {
    title: "We respect your privacy.",
    badges: [
      "SOC2 Compliant",
      "Activity Monitoring",
      "Data Encryption",
    ],
  },
  crisis: {
    message: "If you or someone you know is experiencing an emergency\nor crisis and needs immediate help, call 911 or go to the\nnearest emergency room.",
    contacts: [
      {
        label: "Suicide Prevention Lifeline",
        value: "+1 (800) 273-8255 24/7",
      },
      {
        label: "Crisis Text Line",
        value: "Text HOME to 741741 24/7",
      },
    ],
  },
  copyright: "2023 Mindset Labs, Inc.",
  legalLinks: [
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Contact us", href: "#" },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import "./font.css";
import { motion } from "motion/react";
import { Instagram, Check, Shield } from "lucide-react";

// TikTok icon component since lucide-react doesn't have it
const TikTokIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

// Smile icon for logo
const SmileIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    className={className}
  >
    <rect width="32" height="32" rx="8" fill={COLORS.accent} />
    <circle cx="11" cy="13" r="2" fill="#1d1d1d" />
    <circle cx="21" cy="13" r="2" fill="#1d1d1d" />
    <path
      d="M10 19c0 3.5 3 6 6 6s6-2.5 6-6"
      stroke="#1d1d1d"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

// Shield with smile icon
const ShieldSmileIcon = ({ className }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <Shield className="w-16 h-16" style={{ color: COLORS.accent }} strokeWidth={1.5} />
    <div className="absolute inset-0 flex items-center justify-center pt-1">
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill={COLORS.accent}>
        <circle cx="9" cy="10" r="1.5" fill="#1d1d1d" />
        <circle cx="15" cy="10" r="1.5" fill="#1d1d1d" />
        <path
          d="M8 14c0 2 2 4 4 4s4-2 4-4"
          stroke="#1d1d1d"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  </div>
);

interface FooterTbhProps {
  companyName?: string;
  copyrightYear?: string;
}

export default function FooterTbh({
  companyName = "Mindset Labs, Inc.",
  copyrightYear = "2023",
}: FooterTbhProps) {
  return (
    <footer
      className="relative w-full"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 pt-16 pb-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-16"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <SmileIcon className="w-8 h-8" />
            <span
              className="text-2xl font-bold"
              style={{
                color: COLORS.textPrimary,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {CONTENT.logo.text}
            </span>
          </div>

          {/* Tagline */}
          <div className="lg:text-left">
            <h2 className="text-3xl lg:text-4xl leading-tight">
              <span
                style={{
                  fontFamily: "'Caveat', cursive",
                  color: COLORS.textPrimary,
                  fontSize: "1.15em",
                }}
              >
                {CONTENT.tagline.highlight}
              </span>{" "}
              <span
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontStyle: "italic",
                  color: COLORS.textPrimary,
                }}
              >
                {CONTENT.tagline.rest.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < CONTENT.tagline.rest.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Navigation Columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20"
        >
          {/* Products Column */}
          <div>
            <h3
              className="text-lg font-semibold mb-6"
              style={{
                color: COLORS.textPrimary,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {CONTENT.navigation.products.title}
            </h3>
            <ul className="space-y-3">
              {CONTENT.navigation.products.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:opacity-80"
                    style={{
                      color: COLORS.textPrimary,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3
              className="text-lg font-semibold mb-6"
              style={{
                color: COLORS.textPrimary,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {CONTENT.navigation.company.title}
            </h3>
            <ul className="space-y-3">
              {CONTENT.navigation.company.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:opacity-80"
                    style={{
                      color: COLORS.textPrimary,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {link.label}
                    {link.comingSoon && (
                      <span
                        className="ml-1"
                        style={{ color: COLORS.textSecondary }}
                      >
                        (Coming soon)
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h3
              className="text-lg font-semibold mb-6"
              style={{
                color: COLORS.textPrimary,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {CONTENT.navigation.social.title}
            </h3>
            <ul className="space-y-3">
              {CONTENT.navigation.social.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-3 text-sm transition-colors hover:opacity-80"
                    style={{
                      color: COLORS.textPrimary,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "#2a2a2a" }}
                    >
                      {link.icon === "instagram" ? (
                        <Instagram className="w-4 h-4" />
                      ) : (
                        <TikTokIcon />
                      )}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div
          className="w-full h-px mb-12"
          style={{ backgroundColor: COLORS.divider }}
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12"
        >
          {/* Privacy Section */}
          <div>
            <p
              className="text-sm mb-6"
              style={{
                color: COLORS.textSecondary,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {CONTENT.privacy.title}
            </p>
            <div className="flex items-start gap-6">
              <ShieldSmileIcon className="flex-shrink-0" />
              <ul className="space-y-2">
                {CONTENT.privacy.badges.map((badge) => (
                  <li
                    key={badge}
                    className="flex items-center gap-2 text-sm"
                    style={{
                      color: COLORS.textPrimary,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <Check
                      className="w-4 h-4"
                      style={{ color: COLORS.accent }}
                    />
                    {badge}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Crisis Section */}
          <div>
            <p
              className="text-sm mb-6 leading-relaxed"
              style={{
                color: COLORS.textSecondary,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {CONTENT.crisis.message.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < CONTENT.crisis.message.split("\n").length - 1 && <br />}
                </span>
              ))}
            </p>
            <div className="flex flex-wrap gap-8">
              {CONTENT.crisis.contacts.map((contact) => (
                <div key={contact.label}>
                  <p
                    className="text-xs mb-1"
                    style={{
                      color: COLORS.textSecondary,
                      fontFamily: "'Inter', sans-serif",
                      textDecoration: "underline",
                    }}
                  >
                    {contact.label}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{
                      color: COLORS.textPrimary,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {contact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8"
          style={{ borderTop: `1px solid ${COLORS.divider}` }}
        >
          <p
            className="text-sm"
            style={{
              color: COLORS.textSecondary,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            &copy; {copyrightYear} {companyName}
          </p>
          <div className="flex items-center gap-4">
            {CONTENT.legalLinks.map((link, index) => (
              <span key={link.label} className="flex items-center gap-4">
                <a
                  href={link.href}
                  className="text-sm transition-colors hover:opacity-80"
                  style={{
                    color: COLORS.textSecondary,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {link.label}
                </a>
                {index < CONTENT.legalLinks.length - 1 && (
                  <span style={{ color: COLORS.textSecondary }}>|</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
