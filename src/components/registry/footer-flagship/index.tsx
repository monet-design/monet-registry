"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#16003E",
  accent: "#7C49F7",
  accentHover: "#9B6BFF",
  border: "#2A1854",
  textMuted: "#A8A0B8",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Linkedin } from "lucide-react";

interface FooterFlagshipProps {
  tagline?: string;
  ctaText?: string;
  ctaHref?: string;
  logo?: {
    text: string;
    href?: string;
  };
  navLinks?: {
    label: string;
    href: string;
  }[];
  legalLinks?: {
    label: string;
    href: string;
  }[];
  copyright?: string;
  socialLinks?: {
    type: "linkedin" | "twitter" | "facebook" | "instagram";
    href: string;
  }[];
}

export default function FooterFlagship({
  tagline = "Ready to unleash the potential\nof your stores?",
  ctaText = "Get in touch.",
  ctaHref = "#contact",
  logo = {
    text: "Flagship",
    href: "/",
  },
  navLinks = [
    { label: "How it works", href: "#how-it-works" },
    { label: "Stories", href: "#stories" },
    { label: "About", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Contact us", href: "#contact" },
  ],
  legalLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Use", href: "#terms" },
  ],
  copyright = "2025 Flagship. All rights reserved.",
  socialLinks = [{ type: "linkedin", href: "#linkedin" }],
}: FooterFlagshipProps) {
  return (
    <footer
      className="relative w-full"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Left: CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg"
          >
            <h2
              className="font-serif text-3xl leading-tight text-white md:text-4xl lg:text-[40px]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {tagline.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < tagline.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h2>
            <a
              href={ctaHref}
              className="mt-2 inline-block font-serif text-3xl italic transition-colors hover:opacity-80 md:text-4xl lg:text-[40px]"
              style={{
                color: COLORS.accent,
                fontFamily: "'Instrument Serif', serif",
              }}
            >
              {ctaText}
            </a>
          </motion.div>

          {/* Right: Navigation and Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col-reverse gap-10 sm:flex-row sm:gap-20 lg:gap-24"
          >
            {/* Navigation Links */}
            <nav className="flex flex-col gap-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-white transition-colors hover:opacity-70"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Logo */}
            <a
              href={logo.href}
              className="flex items-center gap-2 text-white"
            >
              <LogoIcon />
              <span className="text-lg font-medium">{logo.text}</span>
            </a>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 border-t pt-6"
          style={{ borderColor: COLORS.border }}
        >
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            {/* Copyright and Legal Links */}
            <div className="flex flex-wrap items-center gap-4 text-xs" style={{ color: COLORS.textMuted }}>
              <span>&copy; {copyright}</span>
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="underline transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-white transition-colors hover:opacity-70"
                  aria-label={social.type}
                >
                  {social.type === "linkedin" && <Linkedin className="h-5 w-5" />}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Font Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
        rel="stylesheet"
      />
    </footer>
  );
}

// Custom Logo Icon Component
function LogoIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="2"
        width="24"
        height="24"
        rx="6"
        fill={COLORS.accent}
      />
      <circle cx="9" cy="9" r="3" fill="white" />
      <circle cx="19" cy="9" r="3" fill="white" fillOpacity="0.5" />
      <circle cx="9" cy="19" r="3" fill="white" fillOpacity="0.5" />
      <circle cx="19" cy="19" r="3" fill="white" fillOpacity="0.5" />
    </svg>
  );
}
