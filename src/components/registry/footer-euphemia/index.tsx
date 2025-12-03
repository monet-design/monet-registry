"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F5F5F5",
    text: "#1E1E1E",
    textMuted: "#6B6B6B",
    cardBackground: "#1E1E1E",
    cardText: "#FFFFFF",
  },
  dark: {
    background: "#1E1E1E",
    text: "#FFFFFF",
    textMuted: "#A0A0A0",
    cardBackground: "#FFFFFF",
    cardText: "#1E1E1E",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import "./font.css";

interface FooterEuphemiaProps {
  mode?: "light" | "dark";
  brandName?: string;
  tagline?: string;
  ctaText?: string;
  ctaIcon?: React.ReactNode;
  legalLinks?: Array<{
    label: string;
    href: string;
  }>;
  socialLinks?: Array<{
    label: string;
    href: string;
  }>;
  flagIcons?: React.ReactNode[];
}

// Default refresh icon for CTA card
function RefreshIcon({ color }: { color: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C15.3019 3 18.1885 4.77814 19.7545 7.42909"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M21 3V7.5H16.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Flag icons
function FlagIcons() {
  return (
    <div className="flex items-center gap-1.5">
      {/* Spain flag */}
      <div className="w-5 h-3.5 rounded-[2px] overflow-hidden flex flex-col">
        <div className="h-[25%] bg-[#AA151B]" />
        <div className="h-[50%] bg-[#F1BF00]" />
        <div className="h-[25%] bg-[#AA151B]" />
      </div>
      {/* Argentina flag */}
      <div className="w-5 h-3.5 rounded-[2px] overflow-hidden flex flex-col">
        <div className="h-1/3 bg-[#74ACDF]" />
        <div className="h-1/3 bg-white flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#F6B40E]" />
        </div>
        <div className="h-1/3 bg-[#74ACDF]" />
      </div>
      {/* Germany flag */}
      <div className="w-5 h-3.5 rounded-[2px] overflow-hidden flex flex-col">
        <div className="h-1/3 bg-black" />
        <div className="h-1/3 bg-[#DD0000]" />
        <div className="h-1/3 bg-[#FFCC00]" />
      </div>
      {/* USA flag simplified */}
      <div className="w-5 h-3.5 rounded-[2px] overflow-hidden bg-[#B22234] relative">
        <div className="absolute top-0 left-0 w-2 h-2 bg-[#3C3B6E] flex items-center justify-center">
          <div className="w-0.5 h-0.5 bg-white rounded-full" />
        </div>
        <div className="absolute top-[14%] left-2 right-0 h-[10%] bg-white" />
        <div className="absolute top-[38%] left-2 right-0 h-[10%] bg-white" />
        <div className="absolute top-[62%] left-0 right-0 h-[10%] bg-white" />
        <div className="absolute top-[86%] left-0 right-0 h-[10%] bg-white" />
      </div>
    </div>
  );
}

export default function FooterEuphemia({
  mode = "dark",
  brandName = "Euphemia",
  tagline = "Euphemia supports founders from a range of diverse backgrounds who have not\nhad equal access to opportunity.",
  ctaText = "Make\nAwesome",
  ctaIcon,
  legalLinks = [
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Contact", href: "#" },
  ],
  socialLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Facebook", href: "#" },
  ],
}: FooterEuphemiaProps) {
  const colors = COLORS[mode];

  return (
    <footer
      className="relative w-full py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16 md:mb-24"
        >
          {/* Tagline */}
          <p
            className="text-sm md:text-base leading-relaxed max-w-lg whitespace-pre-line"
            style={{ color: colors.text }}
          >
            {tagline}
          </p>

          {/* CTA Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-4 px-6 py-4 rounded-lg cursor-pointer"
            style={{ backgroundColor: colors.cardBackground }}
          >
            <span
              className="text-lg md:text-xl font-medium leading-tight whitespace-pre-line"
              style={{ color: colors.cardText }}
            >
              {ctaText}
            </span>
            {ctaIcon || <RefreshIcon color={colors.cardText} />}
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10"
        >
          {/* Brand Name - Large Serif Italic */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-normal italic"
            style={{
              color: colors.text,
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            {brandName}
          </motion.h2>

          {/* Center - Flags and Legal Links */}
          <div className="flex flex-col gap-4">
            <FlagIcons />
            <nav className="flex flex-col gap-2">
              {legalLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="text-sm transition-opacity hover:opacity-70"
                  style={{ color: colors.text }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Right - Social Links */}
          <nav className="flex flex-col gap-2">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                className="text-sm transition-opacity hover:opacity-70"
                style={{ color: colors.text }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      </div>
    </footer>
  );
}
