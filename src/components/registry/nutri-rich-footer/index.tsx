"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#2f3941",
    text: "#ffffff",
    textMuted: "#9ba6ad",
    sectionTitle: "#9ba6ad",
    inputBg: "#ffffff",
    inputText: "#6b7280",
    iconColor: "#ffffff",
    borderColor: "#4b5563",
  },
  dark: {
    background: "#2f3941",
    text: "#ffffff",
    textMuted: "#9ba6ad",
    sectionTitle: "#9ba6ad",
    inputBg: "#ffffff",
    inputText: "#6b7280",
    iconColor: "#ffffff",
    borderColor: "#4b5563",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, Facebook, Twitter, Instagram } from "lucide-react";
import { useState } from "react";
import "./font.css";

interface LinkItem {
  label: string;
  href: string;
}

interface NutriRichFooterProps {
  mode?: "light" | "dark";
  shopLinks?: LinkItem[];
  learnLinks?: LinkItem[];
  newsletterHeadline?: string;
  inputPlaceholder?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
  fdaDisclaimer?: string;
  copyrightText?: string;
  siteBy?: string;
  bottomLinks?: LinkItem[];
}

export default function NutriRichFooter({
  mode = "dark",
  shopLinks = [
    { label: "Specialty", href: "#" },
    { label: "Botanicals", href: "#" },
    { label: "Vitamins", href: "#" },
  ],
  learnLinks = [
    { label: "Ingredients", href: "#" },
    { label: "Quality", href: "#" },
    { label: "Digest", href: "#" },
    { label: "About", href: "#" },
    { label: "Help", href: "#" },
  ],
  newsletterHeadline = "Get unspammy deals and updates.",
  inputPlaceholder = "Your Email Address",
  socialLinks = {
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },
  fdaDisclaimer = "*These statements have not been evaluated by the FDA. These products are not intended to diagnose, treat, cure or prevent any disease.",
  copyrightText = "© 2023 Nutri-Rich. All Rights Reserved.",
  siteBy = "Site By Pointer.",
  bottomLinks = [
    { label: "TERMS OF SERVICE", href: "#" },
    { label: "PRIVACY POLICY", href: "#" },
  ],
}: NutriRichFooterProps) {
  const colors = COLORS[mode];
  const [email, setEmail] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer
      className="relative w-full py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
        >
          {/* Left Column: Navigation Links */}
          <motion.div variants={itemVariants} className="flex gap-16">
            {/* SHOP Section */}
            <div className="space-y-5">
              <h3
                className="text-xs font-normal tracking-[0.15em] uppercase"
                style={{ color: colors.sectionTitle }}
              >
                SHOP
              </h3>
              <nav className="space-y-3">
                {shopLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-base hover:opacity-80 transition-opacity"
                    style={{ color: colors.text }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* LEARN Section */}
            <div className="space-y-5">
              <h3
                className="text-xs font-normal tracking-[0.15em] uppercase"
                style={{ color: colors.sectionTitle }}
              >
                LEARN
              </h3>
              <nav className="space-y-3">
                {learnLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-base hover:opacity-80 transition-opacity"
                    style={{ color: colors.text }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Right Column: Newsletter */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            {/* Headline */}
            <h2
              className="headline-serif text-2xl md:text-3xl lg:text-4xl"
              style={{ color: colors.text }}
            >
              {newsletterHeadline}
            </h2>

            {/* Email Input */}
            <div className="relative max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={inputPlaceholder}
                className="w-full px-4 py-3 pr-12 text-sm bg-white border-0 focus:outline-none focus:ring-0"
                style={{ color: colors.inputText }}
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5 text-gray-800" />
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  className="hover:opacity-70 transition-opacity"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" style={{ color: colors.iconColor }} />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  className="hover:opacity-70 transition-opacity"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" style={{ color: colors.iconColor }} />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  className="hover:opacity-70 transition-opacity"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" style={{ color: colors.iconColor }} />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end"
        >
          {/* FDA Disclaimer */}
          <div
            className="p-4 border max-w-md"
            style={{ borderColor: colors.borderColor }}
          >
            <p
              className="text-xs leading-relaxed"
              style={{ color: colors.textMuted }}
            >
              {fdaDisclaimer}
            </p>
          </div>

          {/* Copyright & Links */}
          <div className="space-y-3 lg:text-right">
            <p
              className="text-sm"
              style={{ color: colors.textMuted }}
            >
              {copyrightText} {siteBy}
            </p>
            <div className="flex items-center gap-4 lg:justify-end">
              {bottomLinks.map((link, index) => (
                <span key={index} className="flex items-center gap-4">
                  {index > 0 && (
                    <span style={{ color: colors.textMuted }}>|</span>
                  )}
                  <a
                    href={link.href}
                    className="text-xs tracking-wide hover:opacity-80 transition-opacity"
                    style={{ color: colors.textMuted }}
                  >
                    {link.label}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
