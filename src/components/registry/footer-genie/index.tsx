"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  background: "#0A0A0B",
  headingWhite: "#FFFFFF",
  headingGray: "#6B6B6B",
  descriptionText: "#9CA3AF",
  ctaButtonBg: "#F97316",
  ctaButtonText: "#FFFFFF",
  navLinkText: "#D1D5DB",
  copyrightText: "#6B7280",
  logoAccent: "#F97316",
  starColor: "#FFFFFF",
  starGold: "#D4A574",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Twitter, Linkedin, ArrowRight } from "lucide-react";
import "./font.css";

// Sparkle/Star component for decorations
const Sparkle = ({
  size = 4,
  color = COLORS.starColor,
  style,
  className = "",
}: {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}) => (
  <motion.div
    className={`absolute ${className}`}
    style={style}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: Math.random() * 0.5 }}
  >
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  </motion.div>
);

interface FooterGenieProps {
  heading?: {
    line1?: string;
    line2?: string;
  };
  description?: {
    line1?: string;
    line2?: string;
  };
  ctaButton?: {
    text?: string;
    href?: string;
  };
  logo?: {
    text?: string;
  };
  navLinks?: Array<{
    label: string;
    href: string;
  }>;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
  };
  copyright?: string;
}

export default function FooterGenie({
  heading = {
    line1: "Experience the magic.",
    line2: "Take Genie for a test drive.",
  },
  description = {
    line1: "Book a demo and let us show you how you can change the way you",
    line2: "manage your e-commerce business, forever.",
  },
  ctaButton = {
    text: "Get early access",
    href: "#",
  },
  logo = {
    text: "Genie",
  },
  navLinks = [
    { label: "Benefits", href: "#" },
    { label: "Features", href: "#" },
    { label: "Resources", href: "#" },
    { label: "FAQs", href: "#" },
  ],
  socialLinks = {
    twitter: "#",
    linkedin: "#",
  },
  copyright = "Genie Internet Technologies LTD 2023",
}: FooterGenieProps) {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Sparkle decorations */}
      <Sparkle size={8} color={COLORS.starGold} style={{ top: "8%", left: "5%" }} />
      <Sparkle size={4} color={COLORS.starColor} style={{ top: "12%", left: "8%" }} />
      <Sparkle size={6} color={COLORS.starGold} style={{ top: "25%", left: "12%" }} />
      <Sparkle size={3} color={COLORS.starColor} style={{ top: "35%", left: "3%" }} />
      <Sparkle size={5} color={COLORS.starColor} style={{ top: "18%", right: "15%" }} />
      <Sparkle size={4} color={COLORS.starColor} style={{ top: "8%", right: "8%" }} />
      <Sparkle size={7} color={COLORS.starGold} style={{ top: "30%", right: "5%" }} />
      <Sparkle size={3} color={COLORS.starColor} style={{ top: "45%", right: "12%" }} />
      <Sparkle size={5} color={COLORS.starGold} style={{ top: "60%", left: "18%" }} />
      <Sparkle size={4} color={COLORS.starColor} style={{ top: "55%", right: "20%" }} />

      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center md:mb-28"
        >
          {/* Heading */}
          <h2 className="mb-6 font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
            <span
              className="block italic"
              style={{
                color: COLORS.headingWhite,
                fontFamily: "'Instrument Serif', 'Playfair Display', Georgia, serif",
              }}
            >
              {heading.line1}
            </span>
            <span
              className="block italic"
              style={{
                color: COLORS.headingGray,
                fontFamily: "'Instrument Serif', 'Playfair Display', Georgia, serif",
              }}
            >
              {heading.line2}
            </span>
          </h2>

          {/* Description */}
          <p
            className="mx-auto mb-8 max-w-xl text-sm leading-relaxed md:text-base"
            style={{ color: COLORS.descriptionText }}
          >
            {description.line1}
            <br />
            {description.line2}
          </p>

          {/* CTA Button */}
          <motion.a
            href={ctaButton.href}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:shadow-lg"
            style={{
              backgroundColor: COLORS.ctaButtonBg,
              color: COLORS.ctaButtonText,
            }}
          >
            {ctaButton.text}
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>

        {/* Footer Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-6 border-t border-white/10 pt-8 md:flex-row md:justify-between"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* Genie Icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12"
                stroke={COLORS.logoAccent}
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M15 9L22 2"
                stroke={COLORS.logoAccent}
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <span
              className="text-lg font-medium"
              style={{ color: COLORS.headingWhite }}
            >
              {logo.text}
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm transition-opacity hover:opacity-70"
                style={{ color: COLORS.navLinkText }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                className="transition-opacity hover:opacity-70"
                style={{ color: COLORS.navLinkText }}
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                className="transition-opacity hover:opacity-70"
                style={{ color: COLORS.navLinkText }}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center text-xs"
          style={{ color: COLORS.copyrightText }}
        >
          {copyright}
        </motion.p>
      </div>

    </footer>
  );
}
