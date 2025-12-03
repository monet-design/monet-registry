"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    pageBackground: "#F9F9FB",
    cardBackground: "#342E35",
    accent: "#F625B8",
    accentHover: "#E020A5",
    textPrimary: "#FFFFFF",
    textSecondary: "#9A959B",
    borderColor: "#6B656C",
  },
  dark: {
    pageBackground: "#1A1A1A",
    cardBackground: "#342E35",
    accent: "#F625B8",
    accentHover: "#E020A5",
    textPrimary: "#FFFFFF",
    textSecondary: "#9A959B",
    borderColor: "#6B656C",
  },
} as const;

/**
 * 컨텐츠 설정
 */
const DEFAULT_CONTENT = {
  cta: {
    title: "Ready to elevate your",
    titleHighlight: "data quality?",
    primaryButton: "Sign up for free",
    secondaryButton: "Try sandbox",
  },
  brand: {
    name: "avo",
    tagline: "Fixing data quality\nin product analytics",
  },
  columns: [
    {
      links: [
        { label: "About", href: "#" },
        { label: "Jobs", href: "#" },
        { label: "Docs", href: "#", external: true },
        { label: "Security", href: "#" },
      ],
    },
    {
      links: [
        { label: "Terms and conditions", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Cookie Policy", href: "#" },
      ],
    },
  ],
  contact: {
    title: "Let's chat!",
    email: "hi@avo.app",
  },
  socials: [
    { name: "facebook", href: "#" },
    { name: "twitter", href: "#" },
    { name: "linkedin", href: "#" },
    { name: "instagram", href: "#" },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, ExternalLink } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  links: FooterLink[];
}

interface SocialLink {
  name: string;
  href: string;
}

interface FooterAvoProps {
  mode?: "light" | "dark";
  ctaTitle?: string;
  ctaTitleHighlight?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  brandName?: string;
  brandTagline?: string;
  columns?: FooterColumn[];
  contactTitle?: string;
  contactEmail?: string;
  socials?: SocialLink[];
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

// Social icon component
function SocialIcon({ name }: { name: string }) {
  const iconClass = "w-4 h-4";

  switch (name) {
    case "facebook":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      );
    case "twitter":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );
    case "linkedin":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      );
    case "instagram":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      );
    default:
      return null;
  }
}

// Brand logo component
function BrandLogo({ className, color }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 32" fill={color || "currentColor"}>
      <path d="M10.5 8C7.5 8 5 10.5 5 13.5V24H9V18H12V24H16V13.5C16 10.5 13.5 8 10.5 8ZM12 14H9V12C9 11 10 10 10.5 10C11.5 10 12 11 12 12V14Z"/>
      <path d="M24 8L20 24H24L26 16L28 24H32L28 8H24Z"/>
      <path d="M42 8C38 8 35 11 35 16C35 21 38 24 42 24C46 24 49 21 49 16C49 11 46 8 42 8ZM42 20C40 20 39 18 39 16C39 14 40 12 42 12C44 12 45 14 45 16C45 18 44 20 42 20Z"/>
    </svg>
  );
}

export default function FooterAvo({
  mode = "light",
  ctaTitle = DEFAULT_CONTENT.cta.title,
  ctaTitleHighlight = DEFAULT_CONTENT.cta.titleHighlight,
  primaryButtonText = DEFAULT_CONTENT.cta.primaryButton,
  secondaryButtonText = DEFAULT_CONTENT.cta.secondaryButton,
  brandName = DEFAULT_CONTENT.brand.name,
  brandTagline = DEFAULT_CONTENT.brand.tagline,
  columns = DEFAULT_CONTENT.columns,
  contactTitle = DEFAULT_CONTENT.contact.title,
  contactEmail = DEFAULT_CONTENT.contact.email,
  socials = DEFAULT_CONTENT.socials,
  onPrimaryClick,
  onSecondaryClick,
}: FooterAvoProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-8 px-4 md:px-8"
      style={{ backgroundColor: colors.pageBackground }}
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500&display=swap');
        .serif-italic-avo {
          font-family: 'Playfair Display', serif;
          font-style: italic;
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto rounded-3xl overflow-hidden"
        style={{ backgroundColor: colors.cardBackground }}
      >
        {/* CTA Section */}
        <div className="px-8 md:px-16 py-12 md:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* CTA Title */}
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="serif-italic-avo text-3xl md:text-4xl lg:text-5xl leading-tight"
              style={{ color: colors.textPrimary }}
            >
              {ctaTitle}
              <br />
              {ctaTitleHighlight}
            </motion.h2>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={onPrimaryClick}
                className="px-6 py-3 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: colors.accent }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.accentHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = colors.accent;
                }}
              >
                {primaryButtonText}
              </button>
              <button
                onClick={onSecondaryClick}
                className="px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
                style={{
                  color: colors.textPrimary,
                  border: `1px solid ${colors.borderColor}`,
                  backgroundColor: "transparent",
                }}
              >
                {secondaryButtonText}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mx-8 md:mx-16 h-px"
          style={{ backgroundColor: colors.borderColor, opacity: 0.3 }}
        />

        {/* Footer Section */}
        <div className="px-8 md:px-16 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <BrandLogo
                className="h-8 w-auto"
                color={colors.textPrimary}
              />
              <p
                className="text-sm whitespace-pre-line leading-relaxed"
                style={{ color: colors.textSecondary }}
              >
                {brandTagline}
              </p>
            </motion.div>

            {/* Link Columns */}
            {columns.map((column, colIndex) => (
              <motion.div
                key={colIndex}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + colIndex * 0.05 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="block text-sm transition-colors duration-200 hover:opacity-80 flex items-center gap-1"
                    style={{ color: colors.textSecondary }}
                  >
                    {link.label}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                ))}
              </motion.div>
            ))}

            {/* Contact Column */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <p className="text-sm" style={{ color: colors.textSecondary }}>
                {contactTitle}
              </p>
              <a
                href={`mailto:${contactEmail}`}
                className="block text-sm font-medium transition-colors duration-200 hover:opacity-80"
                style={{ color: colors.textPrimary }}
              >
                {contactEmail}
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                      backgroundColor: colors.borderColor,
                      color: colors.cardBackground,
                    }}
                    aria-label={social.name}
                  >
                    <SocialIcon name={social.name} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
