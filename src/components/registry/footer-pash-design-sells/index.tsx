"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#FF5500",
    text: "#000000",
    mutedText: "rgba(0, 0, 0, 0.35)",
    buttonBg: "#FFFFFF",
    buttonText: "#000000",
  },
  dark: {
    background: "#1A1A1A",
    text: "#FFFFFF",
    mutedText: "rgba(255, 255, 255, 0.35)",
    buttonBg: "#333333",
    buttonText: "#FFFFFF",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion, type Variants } from "motion/react";
import "./font.css";
import "./styles.css";

interface NavLink {
  label: string;
  href: string;
  muted?: boolean;
}

interface SocialLink {
  label: string;
  href: string;
}

interface FooterPashDesignSellsProps {
  mode?: "light" | "dark";
  logo?: string;
  navLinks?: NavLink[];
  socialLinks?: SocialLink[];
  tagline?: string;
  copyright?: string;
  marqueeText?: string;
}

export default function FooterPashDesignSells({
  mode = "light",
  logo = "PT\u00AE",
  navLinks = [
    { label: "WORKS", href: "#" },
    { label: "ABOUT", href: "#" },
    { label: "ARTICLES", href: "#", muted: true },
    { label: "CONTACTS", href: "#" },
  ],
  socialLinks = [
    { label: "Awwwards", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "Behance", href: "#" },
    { label: "Linkedin", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Email", href: "#" },
  ],
  tagline = "I love working with passionate\npeople and brands",
  copyright = "\u00A9 Pash with love 2023",
  marqueeText = "#DESIGNSELLS",
}: FooterPashDesignSellsProps) {
  const colors = COLORS[mode];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const marqueeVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
      },
    },
  };

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Main Content */}
      <motion.div
        className="px-6 md:px-12 lg:px-16 pt-16 pb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Three Column Layout */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
            {/* Left - Logo */}
            <motion.div variants={itemVariants} className="flex-shrink-0">
              <a
                href="#"
                className="text-2xl md:text-3xl font-bold tracking-tight transition-opacity hover:opacity-70"
                style={{
                  color: colors.text,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {logo}
              </a>
            </motion.div>

            {/* Center - Navigation */}
            <motion.nav
              variants={itemVariants}
              className="flex flex-col items-start lg:items-center gap-3"
            >
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-lg md:text-xl font-semibold tracking-wide transition-opacity hover:opacity-70"
                  style={{
                    color: link.muted ? colors.mutedText : colors.text,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </motion.nav>

            {/* Right - Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-start lg:items-end gap-2"
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="px-4 py-1.5 rounded-full text-sm font-medium transition-all hover:scale-105"
                  style={{
                    backgroundColor: colors.buttonBg,
                    color: colors.buttonText,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Bottom Section - Tagline & Copyright */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-16"
          >
            <p
              className="text-sm whitespace-pre-line leading-relaxed"
              style={{
                color: colors.text,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {tagline}
            </p>
            <p
              className="text-sm"
              style={{
                color: colors.text,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {copyright}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Marquee Section */}
      <motion.div
        className="relative w-full overflow-hidden py-4 border-t"
        style={{ borderColor: "rgba(0,0,0,0.1)" }}
        variants={marqueeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="marqueeContainer">
          <div className="marqueeTrack">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="marqueeContent" aria-hidden={i > 0}>
                <span
                  className="marqueeTextSerif"
                  style={{ color: colors.text }}
                >
                  {marqueeText}
                </span>
                <span
                  className="marqueeTextSans"
                  style={{ color: colors.text }}
                >
                  {marqueeText}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
