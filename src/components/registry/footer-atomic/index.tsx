"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#FFFFFF",
    text: "#6B7280",
    textMuted: "#9CA3AF",
    logoFill: "#6B7280",
  },
  dark: {
    background: "#0D0D0D",
    text: "#6B6B6B",
    textMuted: "#525252",
    logoFill: "#4A4A4A",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface FooterAtomicProps {
  mode?: "light" | "dark";
  logoElement?: React.ReactNode;
  links?: Array<{
    label: string;
    href: string;
  }>;
  credit?: {
    prefix?: string;
    name: string;
    href?: string;
  };
}

// Cross/Plus Logo Component
function CrossLogo({ color }: { color: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main cross shape with subtle gradient effect */}
      <rect x="14" y="0" width="12" height="14" fill={color} opacity="0.6" />
      <rect x="14" y="26" width="12" height="14" fill={color} opacity="0.8" />
      <rect x="0" y="14" width="14" height="12" fill={color} opacity="0.7" />
      <rect x="26" y="14" width="14" height="12" fill={color} opacity="0.5" />
      <rect x="14" y="14" width="12" height="12" fill={color} opacity="0.9" />
    </svg>
  );
}

export default function FooterAtomic({
  mode = "dark",
  logoElement,
  links = [
    { label: "Contact", href: "#contact" },
    { label: "Privacy & Cookie Policy", href: "#privacy" },
    { label: "Terms & Conditions", href: "#terms" },
  ],
  credit = {
    prefix: "Made with love by",
    name: "Andrea Montini",
    href: "#",
  },
}: FooterAtomicProps) {
  const colors = COLORS[mode];

  return (
    <footer
      className="w-full py-8 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.background }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          {logoElement || <CrossLogo color={colors.logoFill} />}
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="text-sm transition-opacity duration-200 hover:opacity-80"
              style={{ color: colors.text }}
              whileHover={{ scale: 1.02 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Credit */}
        <div className="flex-shrink-0 text-sm" style={{ color: colors.textMuted }}>
          {credit.prefix && <span>{credit.prefix} </span>}
          {credit.href ? (
            <a
              href={credit.href}
              className="transition-opacity duration-200 hover:opacity-80"
              style={{ color: colors.text }}
            >
              {credit.name}
            </a>
          ) : (
            <span style={{ color: colors.text }}>{credit.name}</span>
          )}
        </div>
      </motion.div>
    </footer>
  );
}
