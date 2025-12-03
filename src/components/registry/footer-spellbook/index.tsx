"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#13171A",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    inputBg: "#222629",
    inputBorder: "#3A3F42",
    watermark: "#1E2226",
  },
  dark: {
    background: "#13171A",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    inputBg: "#222629",
    inputBorder: "#3A3F42",
    watermark: "#1E2226",
  },
} as const;

/**
 * Diamond Logo 색상
 */
const DIAMOND_COLORS = {
  orange: "#FF6B35",
  yellow: "#FFD700",
  green: "#3CB371",
  blue: "#1E90FF",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, Linkedin, Youtube } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterSpellbookProps {
  mode?: "light" | "dark";
  companyName?: string;
  description?: string;
  columns?: FooterColumn[];
  newsletterTitle?: string;
  newsletterPlaceholder?: string;
  copyrightYear?: number;
  legalLinks?: FooterLink[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    youtube?: string;
  };
}

// Diamond Logo Component
function DiamondLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top triangle - Orange/Red */}
      <polygon points="50,5 70,35 30,35" fill={DIAMOND_COLORS.orange} />
      {/* Left triangle - Yellow */}
      <polygon points="30,35 50,35 25,70" fill={DIAMOND_COLORS.yellow} />
      {/* Right triangle - Green */}
      <polygon points="70,35 75,70 50,35" fill={DIAMOND_COLORS.green} />
      {/* Bottom triangle - Blue */}
      <polygon points="25,70 50,95 75,70" fill={DIAMOND_COLORS.blue} />
      {/* Center polygon */}
      <polygon points="30,35 70,35 75,70 50,95 25,70" fill="url(#centerGradient)" fillOpacity="0.3" />
      <defs>
        <linearGradient id="centerGradient" x1="50" y1="35" x2="50" y2="95">
          <stop offset="0%" stopColor={DIAMOND_COLORS.yellow} />
          <stop offset="100%" stopColor={DIAMOND_COLORS.blue} />
        </linearGradient>
      </defs>
    </svg>
  );
}

// X (Twitter) Icon Component
function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Stylized Spellbook Logo Component
function SpellbookWatermark({ color }: { color: string }) {
  return (
    <div className="flex items-center justify-center gap-4 select-none pointer-events-none">
      <span
        className="text-[120px] md:text-[180px] lg:text-[220px] font-bold tracking-tight leading-none"
        style={{ color }}
      >
        Spellbook
      </span>
    </div>
  );
}

// Stylized S Logo
function SLogo({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-[300px] md:w-[400px] lg:w-[500px] h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M160 60C160 35 140 20 110 20C80 20 50 35 50 65C50 95 75 105 110 115C145 125 170 140 170 175C170 210 140 230 100 230C60 230 30 210 30 170"
        stroke={color}
        strokeWidth="35"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function FooterSpellbook({
  mode = "dark",
  companyName = "Spellbook",
  description = "Spellbook is the most complete AI suite for commercial lawyers, trusted by more than 2,600 law firms and in-house teams worldwide.",
  columns = [
    {
      title: "Product",
      links: [
        { label: "Review", href: "#" },
        { label: "Draft", href: "#" },
        { label: "Ask", href: "#" },
        { label: "Benchmarks", href: "#" },
        { label: "Associate", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "Customer Stories", href: "#" },
        { label: "Clause Library", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Security & Compliance", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
  ],
  newsletterTitle = "Get the latest updates from Spellbook",
  newsletterPlaceholder = "Email address",
  copyrightYear = 2024,
  legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  socialLinks = {
    linkedin: "#",
    twitter: "#",
    youtube: "#",
  },
}: FooterSpellbookProps) {
  const colors = COLORS[mode];

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Description */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p
              className="text-base leading-relaxed max-w-sm"
              style={{ color: colors.textPrimary }}
            >
              {description}
            </p>
          </motion.div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {columns.map((column, index) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3
                  className="text-sm font-semibold mb-4"
                  style={{ color: colors.textPrimary }}
                >
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors hover:text-white"
                        style={{ color: colors.textSecondary }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="lg:col-span-4">
            <p
              className="text-base font-medium"
              style={{ color: colors.textPrimary }}
            >
              {newsletterTitle}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="flex">
              <input
                type="email"
                placeholder={newsletterPlaceholder}
                className="flex-1 px-4 py-3 text-sm rounded-l-md border-0 outline-none focus:ring-2 focus:ring-white/20"
                style={{
                  backgroundColor: colors.inputBg,
                  color: colors.textPrimary,
                }}
              />
              <button
                className="px-6 py-3 text-sm font-medium rounded-r-md flex items-center gap-2 transition-colors hover:bg-gray-700"
                style={{
                  backgroundColor: colors.inputBg,
                  color: colors.textPrimary,
                }}
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-3 flex items-center justify-start lg:justify-end gap-3">
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-black" />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110"
                aria-label="X (Twitter)"
              >
                <XIcon className="w-5 h-5 text-black" />
              </a>
            )}
            {socialLinks.youtube && (
              <a
                href={socialLinks.youtube}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-black" />
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Watermark Section */}
      <div className="relative h-[250px] md:h-[350px] lg:h-[400px] mt-8 overflow-hidden">
        {/* Diamond Logo */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-0 z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <DiamondLogo className="w-16 h-16 md:w-20 md:h-20" />
        </motion.div>

        {/* Large Watermark Text and S Logo */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative flex items-center">
            <SpellbookWatermark color={colors.watermark} />
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/3">
              <SLogo color={colors.watermark} />
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 py-6 z-30">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-sm"
              style={{ color: colors.textSecondary }}
            >
              &copy; {copyrightYear} {companyName}
            </p>

            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: colors.textSecondary }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
