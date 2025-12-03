"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    // Primary 액센트 (로고)
    accent: "#0B05A5",
    background: "#FFFFFF",
    text: "#000000",
    inputBorder: "#000000",
    divider: "#E5E5E5",
    muted: "#666666",
  },
  dark: {
    accent: "#6366F1",
    background: "#0A0A0A",
    text: "#FFFFFF",
    inputBorder: "#FFFFFF",
    divider: "#333333",
    muted: "#888888",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import "./font.css";
import { motion } from "motion/react";
import { useState } from "react";

// Navigation data
const FOOTER_LINKS = {
  shop: {
    title: "Shop",
    links: [
      { label: "The Diaper", href: "#" },
      { label: "The Pant", href: "#" },
      { label: "The Wipe", href: "#" },
      { label: "The Newborn Gift", href: "#" },
    ],
  },
  about: {
    title: "About",
    links: [
      { label: "Ambassador Program", href: "#" },
      { label: "About Us", href: "#" },
      { label: "Safety Reports", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Retail", href: "#" },
      { label: "Refer a friend", href: "#" },
      { label: "Impact", href: "#" },
      { label: "Coterie Council", href: "#" },
    ],
  },
  help: {
    title: "Help",
    links: [
      { label: "Contact", href: "#" },
      { label: "Help & FAQs", href: "#" },
      { label: "Sizing 101", href: "#" },
    ],
  },
  social: {
    title: "Social",
    links: [
      { label: "Instagram", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Facebook", href: "#" },
    ],
  },
};

interface FooterCoterieProps {
  mode?: "light" | "dark";
  brandName?: string;
  newsletterTitle?: string;
  copyrightText?: string;
  shopLinks?: { label: string; href: string }[];
  aboutLinks?: { label: string; href: string }[];
  helpLinks?: { label: string; href: string }[];
  socialLinks?: { label: string; href: string }[];
  legalLinks?: { label: string; href: string }[];
  onNewsletterSubmit?: (email: string) => void;
}

export default function FooterCoterie({
  mode = "light",
  brandName = "Coterie",
  newsletterTitle = "Expert advice, updates, and\nsurprises for your inbox",
  copyrightText = "2023 Coterie Baby, Inc.",
  shopLinks = FOOTER_LINKS.shop.links,
  aboutLinks = FOOTER_LINKS.about.links,
  helpLinks = FOOTER_LINKS.help.links,
  socialLinks = FOOTER_LINKS.social.links,
  legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  onNewsletterSubmit,
}: FooterCoterieProps) {
  const colors = COLORS[mode];
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onNewsletterSubmit && email) {
      onNewsletterSubmit(email);
      setEmail("");
    }
  };

  return (
    <footer
      className="relative w-full"
      style={{ backgroundColor: colors.background }}
    >
      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Top Section - Newsletter and Navigation */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left - Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <h2
              className="font-dm-serif text-3xl leading-tight tracking-tight md:text-4xl"
              style={{ color: colors.text }}
            >
              {newsletterTitle.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < newsletterTitle.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h2>

            <form onSubmit={handleSubmit} className="mt-8">
              <div
                className="flex items-center overflow-hidden rounded-full border"
                style={{ borderColor: colors.inputBorder }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent px-5 py-3 text-sm outline-none placeholder:text-gray-400"
                  style={{ color: colors.text }}
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-sm font-medium transition-opacity hover:opacity-70"
                  style={{ color: colors.text }}
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right - Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {/* Shop */}
            <div>
              <h3
                className="text-sm font-medium"
                style={{ color: colors.text }}
              >
                Shop
              </h3>
              <ul className="mt-4 space-y-3">
                {shopLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-opacity hover:opacity-70"
                      style={{ color: colors.text }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h3
                className="text-sm font-medium"
                style={{ color: colors.text }}
              >
                About
              </h3>
              <ul className="mt-4 space-y-3">
                {aboutLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-opacity hover:opacity-70"
                      style={{ color: colors.text }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3
                className="text-sm font-medium"
                style={{ color: colors.text }}
              >
                Help
              </h3>
              <ul className="mt-4 space-y-3">
                {helpLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-opacity hover:opacity-70"
                      style={{ color: colors.text }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3
                className="text-sm font-medium"
                style={{ color: colors.text }}
              >
                Social
              </h3>
              <ul className="mt-4 space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-opacity hover:opacity-70"
                      style={{ color: colors.text }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className="my-12 h-px w-full"
          style={{ backgroundColor: colors.divider }}
        />

        {/* Large Brand Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center py-8"
        >
          <span
            className="font-dm-serif text-6xl font-normal tracking-tight md:text-7xl lg:text-8xl"
            style={{ color: colors.accent }}
          >
            {brandName}
          </span>
        </motion.div>

        {/* Divider */}
        <div
          className="my-8 h-px w-full"
          style={{ backgroundColor: colors.divider }}
        />

        {/* Bottom - Copyright and Legal Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <p className="text-xs" style={{ color: colors.muted }}>
            &copy; {copyrightText}
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs transition-opacity hover:opacity-70"
                style={{ color: colors.muted }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
