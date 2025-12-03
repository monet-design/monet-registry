"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#FEFBEC",
  accent: "#014633",
  textPrimary: "#014633",
  textMuted: "#6B7280",
  inputBorder: "#D1D5DB",
  bottomBackground: "#EDF2F0",
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Linkedin, Facebook, Instagram, ArrowRight, Calendar } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface PartnerLogo {
  name: string;
  logo: React.ReactNode;
}

interface FooterFlectoProps {
  logoIcon?: React.ReactNode;
  newsletterTitle?: string;
  newsletterPlaceholder?: string;
  ctaButtonText?: string;
  ctaButtonHref?: string;
  navLinks?: FooterLink[];
  legalLinks?: FooterLink[];
  partners?: PartnerLogo[];
  madeByText?: string;
  linkedinUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  threadsUrl?: string;
}

// Flecto Logo SVG
function FlectoLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="0" y="0" width="16" height="16" rx="3" fill={COLORS.accent} />
      <rect x="20" y="0" width="16" height="16" rx="3" fill={COLORS.accent} />
      <rect x="0" y="20" width="16" height="16" rx="3" fill={COLORS.accent} />
      <rect x="20" y="20" width="16" height="16" rx="8" fill={COLORS.accent} />
      <rect x="0" y="40" width="16" height="8" rx="3" fill={COLORS.accent} />
    </svg>
  );
}

// Techstars Logo
function TechstarsLogo({ className }: { className?: string }) {
  return (
    <span className={className} style={{ fontWeight: 700, fontSize: 14, color: COLORS.textPrimary }}>
      techstars<span style={{ color: "#2DD4BF" }}>_</span>
    </span>
  );
}

// Ubermorgen Logo
function UbermorgenLogo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke={COLORS.textPrimary} strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" fill={COLORS.textPrimary} />
      </svg>
      <span style={{ fontWeight: 500, fontSize: 12, color: COLORS.textPrimary, textTransform: "uppercase", letterSpacing: "0.05em" }}>
        Ubermorgen
      </span>
    </div>
  );
}

// Maze Logo
function MazeLogo({ className }: { className?: string }) {
  return (
    <span className={className} style={{ fontWeight: 700, fontSize: 16, color: COLORS.textPrimary }}>
      maze
      <span style={{ color: "#FF6B6B" }}>~~~</span>
    </span>
  );
}

// Threads/Circle Icon
function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const defaultNavLinks: FooterLink[] = [
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact Sales", href: "#" },
  { label: "Support / Feedback", href: "#" },
];

const defaultLegalLinks: FooterLink[] = [
  { label: "Privacy & Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

export default function FooterFlecto({
  logoIcon,
  newsletterTitle = "Subscribe to our newsletter\nto stay in touch with our\nlatest news",
  newsletterPlaceholder = "Start Here",
  ctaButtonText = "Book a Demo",
  ctaButtonHref = "#",
  navLinks = defaultNavLinks,
  legalLinks = defaultLegalLinks,
  madeByText = "Made by Buro",
  linkedinUrl = "#",
  facebookUrl = "#",
  instagramUrl = "#",
  threadsUrl = "#",
}: FooterFlectoProps) {
  return (
    <footer
      className="w-full"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-8">
          {/* Left Section - Logo, Newsletter, Partners */}
          <div className="flex flex-col gap-8 lg:max-w-md">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {logoIcon || <FlectoLogo className="h-12 w-10" />}
            </motion.div>

            {/* Newsletter Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <h2
                className="text-xl md:text-2xl font-medium leading-snug whitespace-pre-line"
                style={{ color: COLORS.textPrimary }}
              >
                {newsletterTitle}
              </h2>

              {/* Email Input */}
              <div className="flex items-center gap-2 pb-2 border-b" style={{ borderColor: COLORS.inputBorder }}>
                <input
                  type="email"
                  placeholder={newsletterPlaceholder}
                  className="flex-1 bg-transparent text-base outline-none placeholder:text-gray-400"
                  style={{ color: COLORS.textPrimary }}
                />
                <button
                  className="p-1 transition-opacity hover:opacity-70"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-5 w-5" style={{ color: COLORS.textMuted }} />
                </button>
              </div>
            </motion.div>

            {/* Partners Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-3"
            >
              <p className="text-xs" style={{ color: COLORS.textMuted }}>
                Proudly backed by
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                <TechstarsLogo />
                <UbermorgenLogo />
                <MazeLogo />
              </div>
            </motion.div>
          </div>

          {/* Right Section - CTA Button and Navigation */}
          <div className="flex flex-col gap-8">
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <a
                href={ctaButtonHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: COLORS.accent,
                  color: COLORS.background,
                }}
              >
                <Calendar className="h-4 w-4" />
                {ctaButtonText}
              </a>
            </motion.div>

            {/* Navigation Links */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-3"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-opacity hover:opacity-70"
                  style={{ color: COLORS.textPrimary }}
                >
                  {link.label}
                </a>
              ))}
            </motion.nav>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-2"
            >
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-opacity hover:opacity-70"
                  style={{ color: COLORS.textPrimary }}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Section - Social Icons and Made By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={linkedinUrl}
              className="flex items-center justify-center w-10 h-10 rounded-full border transition-opacity hover:opacity-70"
              style={{ borderColor: COLORS.textPrimary, color: COLORS.textPrimary }}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={facebookUrl}
              className="flex items-center justify-center w-10 h-10 rounded-full border transition-opacity hover:opacity-70"
              style={{ borderColor: COLORS.textPrimary, color: COLORS.textPrimary }}
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={instagramUrl}
              className="flex items-center justify-center w-10 h-10 rounded-full border transition-opacity hover:opacity-70"
              style={{ borderColor: COLORS.textPrimary, color: COLORS.textPrimary }}
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={threadsUrl}
              className="flex items-center justify-center w-10 h-10 rounded-full border transition-opacity hover:opacity-70"
              style={{ borderColor: COLORS.textPrimary, color: COLORS.textPrimary }}
              aria-label="Threads"
            >
              <ThreadsIcon className="h-4 w-4" />
            </a>
          </div>

          {/* Made By */}
          <div
            className="px-6 py-3 rounded-lg text-sm"
            style={{ backgroundColor: COLORS.bottomBackground, color: COLORS.textPrimary }}
          >
            {madeByText}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
