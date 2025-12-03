"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#1A3B2F",
    text: "#F5F5F0",
    textMuted: "#E8E8E3",
  },
  dark: {
    background: "#1A3B2F",
    text: "#F5F5F0",
    textMuted: "#E8E8E3",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import "./font.css";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

interface LinkItem {
  label: string;
  href: string;
}

interface FooterThatOriginalProps {
  mode?: "light" | "dark";
  brandName?: string;
  column1Links?: LinkItem[];
  column2Links?: LinkItem[];
  column3Links?: LinkItem[];
  column4Links?: LinkItem[];
  copyrightText?: string;
  copyrightYear?: string;
  socialLink?: {
    label: string;
    href: string;
  };
  thankYouText?: string;
  showWhatsApp?: boolean;
  whatsAppHref?: string;
}

export default function FooterThatOriginal({
  mode = "dark",
  brandName = "THAT ORIGINAL",
  column1Links = [
    { label: "A PROPOS", href: "#" },
    { label: "MATIERES", href: "#" },
    { label: "CONTACT", href: "#" },
  ],
  column2Links = [
    { label: "GUIDE DES TAILLES", href: "#" },
    { label: "NOS TIPS MATIERES", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  column3Links = [
    { label: "07 85 24 41 96", href: "tel:+33785244196" },
    { label: "CONTACT@THAT-ORIGINAL.COM", href: "mailto:CONTACT@THAT-ORIGINAL.COM" },
  ],
  column4Links = [
    { label: "CGV", href: "#" },
    { label: "POLITIQUE DE CONFIDENTIALITE", href: "#" },
  ],
  copyrightText = "THAT ORIGINAL",
  copyrightYear = "2023",
  socialLink = { label: "INSTAGRAM", href: "#" },
  thankYouText = "MERCI BEAUCOUP",
  showWhatsApp = true,
  whatsAppHref = "#",
}: FooterThatOriginalProps) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  const brandVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.2 },
    },
  };

  return (
    <footer
      className="relative w-full py-10 md:py-14 lg:py-16 px-6 md:px-10 lg:px-16"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Navigation Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-8 mb-16 md:mb-24 lg:mb-32"
        >
          {/* Column 1 */}
          <motion.nav variants={itemVariants} className="space-y-3">
            {column1Links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-[10px] md:text-xs tracking-[0.1em] uppercase nav-text font-light hover:opacity-70 transition-opacity"
                style={{ color: colors.text }}
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Column 2 */}
          <motion.nav variants={itemVariants} className="space-y-3">
            {column2Links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-[10px] md:text-xs tracking-[0.1em] uppercase nav-text font-light hover:opacity-70 transition-opacity"
                style={{ color: colors.text }}
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Column 3 */}
          <motion.nav variants={itemVariants} className="space-y-3">
            {column3Links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-[10px] md:text-xs tracking-[0.1em] uppercase nav-text font-light hover:opacity-70 transition-opacity"
                style={{ color: colors.text }}
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Column 4 */}
          <motion.nav variants={itemVariants} className="space-y-3">
            {column4Links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-[10px] md:text-xs tracking-[0.1em] uppercase nav-text font-light hover:opacity-70 transition-opacity text-right md:text-right"
                style={{ color: colors.text }}
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        </motion.div>

        {/* Large Brand Name */}
        <motion.div
          variants={brandVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 md:mb-24 lg:mb-32"
        >
          <h2
            className="brand-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-normal tracking-wide text-center leading-none"
            style={{ color: colors.text }}
          >
            {brandName}
          </h2>
        </motion.div>

        {/* Bottom Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          {/* Copyright */}
          <p
            className="text-[10px] md:text-xs tracking-[0.1em] uppercase nav-text font-light"
            style={{ color: colors.text }}
          >
            &copy; {copyrightText} {copyrightYear}
          </p>

          {/* Social Link */}
          <a
            href={socialLink.href}
            className="text-[10px] md:text-xs tracking-[0.1em] uppercase nav-text font-light hover:opacity-70 transition-opacity"
            style={{ color: colors.text }}
          >
            {socialLink.label}
          </a>

          {/* Thank You + WhatsApp */}
          <div className="flex items-center gap-3">
            <span
              className="text-[10px] md:text-xs tracking-[0.1em] uppercase nav-text font-light"
              style={{ color: colors.text }}
            >
              {thankYouText}
            </span>
            {showWhatsApp && (
              <motion.a
                href={whatsAppHref}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-8 h-8 rounded-full border transition-opacity hover:opacity-70"
                style={{
                  borderColor: colors.text,
                  color: colors.text
                }}
              >
                <MessageCircle size={16} />
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
