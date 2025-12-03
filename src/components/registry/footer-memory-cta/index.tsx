"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#1C2B3A",
  textPrimary: "#FFFFFF",
  textSecondary: "#A3B3C2",
  pink: "#F5C5D5",
  pinkSpring: "#3D2D2D",
  mint: "#A8D8D8",
  mintDots: "#1C2B3A",
  yellow: "#FFC832",
  orange: "#EF6434",
  blue: "#2B7DE9",
  borderLight: "#3A4A5A",
  // Decorative icon colors
  iconNavy: "#1C2B3A",
  iconOrange: "#EF6434",
  iconYellow: "#FFC832",
  iconGreen: "#4CAF50",
  iconBlue: "#2196F3",
  iconPink: "#E91E63",
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Twitter, Linkedin } from "lucide-react";
import { useEffect } from "react";

interface NavLink {
  label: string;
  href: string;
}

interface FooterMemoryCtaProps {
  heading?: string;
  navLinks?: NavLink[];
  logo?: React.ReactNode;
  companyName?: string;
  copyrightYear?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  privacyUrl?: string;
  termsUrl?: string;
}

// Decorative Sticker Icons (Left Side)
const DecorativeStickerIcons = () => (
  <div className="relative w-full h-full">
    {/* M Icon - Navy */}
    <motion.div
      initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
      whileInView={{ opacity: 1, rotate: -10, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="absolute -left-8 top-4"
    >
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <rect x="4" y="4" width="64" height="64" rx="16" fill={COLORS.iconNavy} stroke="#FFFFFF" strokeWidth="3" />
        <path
          d="M20 50 L20 22 L28 22 L36 40 L44 22 L52 22 L52 50"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </motion.div>

    {/* Orange Chart Icon */}
    <motion.div
      initial={{ opacity: 0, rotate: 10, scale: 0.8 }}
      whileInView={{ opacity: 1, rotate: 5, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="absolute left-12 top-16"
    >
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="4" y="4" width="56" height="56" rx="14" fill={COLORS.iconOrange} stroke="#FFFFFF" strokeWidth="3" />
        <path
          d="M16 44 L24 32 L32 38 L48 22"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M40 22 L48 22 L48 30" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.div>

    {/* Yellow Face Icon */}
    <motion.div
      initial={{ opacity: 0, rotate: -5, scale: 0.8 }}
      whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="absolute -left-4 top-36"
    >
      <svg width="68" height="68" viewBox="0 0 68 68" fill="none">
        <rect x="4" y="4" width="60" height="60" rx="15" fill={COLORS.iconYellow} stroke="#FFFFFF" strokeWidth="3" />
        <circle cx="24" cy="28" r="4" fill={COLORS.iconNavy} />
        <circle cx="44" cy="28" r="4" fill={COLORS.iconNavy} />
        <path d="M22 42 Q34 52, 46 42" stroke={COLORS.iconNavy} strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
    </motion.div>

    {/* Blue Wavy Lines Icon */}
    <motion.div
      initial={{ opacity: 0, rotate: 15, scale: 0.8 }}
      whileInView={{ opacity: 1, rotate: 10, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
      className="absolute left-16 top-48"
    >
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <rect x="4" y="4" width="52" height="52" rx="13" fill={COLORS.iconBlue} stroke="#FFFFFF" strokeWidth="3" />
        <path d="M14 22 Q20 16, 26 22 T38 22 T50 22" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M14 32 Q20 26, 26 32 T38 32 T50 32" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M14 42 Q20 36, 26 42 T38 42 T50 42" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
    </motion.div>

    {/* Green O Icon */}
    <motion.div
      initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
      whileInView={{ opacity: 1, rotate: -5, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true }}
      className="absolute -left-6 top-64"
    >
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <rect x="4" y="4" width="48" height="48" rx="12" fill={COLORS.iconGreen} stroke="#FFFFFF" strokeWidth="3" />
        <circle cx="28" cy="28" r="12" stroke="#FFFFFF" strokeWidth="3" fill="none" />
      </svg>
    </motion.div>

    {/* Small M Icon - Navy (bottom) */}
    <motion.div
      initial={{ opacity: 0, rotate: 5, scale: 0.8 }}
      whileInView={{ opacity: 1, rotate: 8, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      viewport={{ once: true }}
      className="absolute left-8 top-80"
    >
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <rect x="3" y="3" width="46" height="46" rx="11" fill={COLORS.iconNavy} stroke="#FFFFFF" strokeWidth="2" />
        <path
          d="M14 38 L14 14 L20 14 L26 28 L32 14 L38 14 L38 38"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </motion.div>
  </div>
);

// Spring Icon SVG
const SpringIcon = () => (
  <svg width="80" height="24" viewBox="0 0 80 24" fill="none">
    <path
      d="M4 12 Q10 4, 16 12 T28 12 T40 12 T52 12 T64 12 T76 12"
      stroke={COLORS.pinkSpring}
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

// Chart Icon SVG
const ChartIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <circle cx="22" cy="22" r="20" stroke={COLORS.textPrimary} strokeWidth="2" fill="none" />
    <path
      d="M12 28 L18 22 L24 26 L32 16"
      stroke={COLORS.textPrimary}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path d="M28 16 L32 16 L32 20" stroke={COLORS.textPrimary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Speech Bubble Icon SVG
const SpeechBubbleIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <circle cx="22" cy="22" r="20" fill={COLORS.yellow} />
    <ellipse cx="22" cy="19" rx="12" ry="9" fill={COLORS.background} />
    <path d="M16 26 L14 32 L20 27" fill={COLORS.background} />
  </svg>
);

// Lightning Icon SVG
const LightningIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <circle cx="22" cy="22" r="20" fill={COLORS.orange} />
    <path
      d="M25 8 L17 22 L22 22 L19 36 L27 22 L22 22 L25 8Z"
      fill={COLORS.textPrimary}
    />
  </svg>
);

// Diamond Arrow Icon SVG
const DiamondArrowIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <rect x="22" y="2" width="28" height="28" rx="4" transform="rotate(45 22 22)" fill={COLORS.yellow} />
    <path d="M22 12 L22 32 M22 12 L15 19 M22 12 L29 19" stroke={COLORS.orange} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Four Point Star Icon SVG
const FourPointStarIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="22" fill={COLORS.blue} />
    <path
      d="M24 6 L27 20 L42 24 L27 28 L24 42 L21 28 L6 24 L21 20 Z"
      fill={COLORS.textPrimary}
    />
  </svg>
);

// Arrow Right Icon SVG
const ArrowRightIcon = () => (
  <svg width="120" height="48" viewBox="0 0 120 48" fill="none">
    <rect x="1" y="1" width="118" height="46" rx="23" stroke={COLORS.textPrimary} strokeWidth="2" fill="none" />
    <path
      d="M30 24 L85 24 M72 16 L85 24 L72 32"
      stroke={COLORS.textPrimary}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Memory Logo Icon
const MemoryLogo = ({ companyName }: { companyName: string }) => (
  <div className="flex items-center gap-2">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill={COLORS.textPrimary} />
      <path
        d="M8 24 L8 8 L12 8 L16 18 L20 8 L24 8 L24 24"
        stroke={COLORS.background}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
    <span className="text-xl font-medium" style={{ color: COLORS.textPrimary }}>
      {companyName}
    </span>
  </div>
);

export default function FooterMemoryCta({
  navLinks = [
    { label: "For Retailers", href: "#" },
    { label: "For Brands", href: "#" },
    { label: "Clients", href: "#" },
    { label: "Blog", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
  ],
  logo,
  companyName = "memory",
  copyrightYear = "2023",
  twitterUrl = "#",
  linkedinUrl = "#",
  privacyUrl = "#",
  termsUrl = "#",
}: FooterMemoryCtaProps) {
  // Load Instrument Serif font
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* CTA Section */}
      <div className="relative px-6 md:px-12 lg:px-20 pt-16 pb-20">
        <div className="max-w-7xl mx-auto relative">
          {/* Decorative Icons - Left Side */}
          <div className="absolute left-0 top-0 w-32 md:w-48 lg:w-64 h-96 pointer-events-none hidden md:block">
            <DecorativeStickerIcons />
          </div>

          {/* Center CTA Content */}
          <div className="flex flex-col items-center justify-center text-center relative z-10">
            {/* Top Row Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              {/* Pink Pill with Spring */}
              <div
                className="flex items-center justify-center px-6 py-3 rounded-full"
                style={{ backgroundColor: COLORS.pink }}
              >
                <SpringIcon />
              </div>
              {/* Chart Icon */}
              <ChartIcon />
              {/* Speech Bubble */}
              <SpeechBubbleIcon />
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-8"
              style={{
                color: COLORS.textPrimary,
                fontFamily: "'Instrument Serif', serif",
              }}
            >
              <span className="block">Ready to make</span>
              <span className="block">shopper-based</span>
              <span className="inline-flex flex-wrap items-center justify-center gap-x-3">
                <span>decisions</span>
                <span className="inline-flex items-center gap-2">
                  <LightningIcon />
                  <DiamondArrowIcon />
                </span>
              </span>
            </motion.h2>

            {/* Bottom Row Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              {/* Mint Pill with Dots */}
              <div
                className="flex items-center justify-center px-8 py-4 rounded-full"
                style={{ backgroundColor: COLORS.mint }}
              >
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS.mintDots }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS.mintDots }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS.mintDots }} />
                </div>
              </div>
              {/* Four Point Star */}
              <FourPointStarIcon />
              {/* Arrow Right */}
              <ArrowRightIcon />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="border-t" style={{ borderColor: COLORS.borderLight }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {logo || <MemoryLogo companyName={companyName} />}
            </motion.div>

            {/* Navigation Links */}
            <motion.nav
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
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

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <a
                href={twitterUrl}
                className="transition-opacity hover:opacity-70"
                aria-label="Twitter"
              >
                <Twitter size={20} style={{ color: COLORS.textPrimary }} />
              </a>
              <a
                href={linkedinUrl}
                className="transition-opacity hover:opacity-70"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} style={{ color: COLORS.textPrimary }} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t" style={{ borderColor: COLORS.borderLight }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              style={{ color: COLORS.textSecondary }}
            >
              {`\u00A9${companyName.charAt(0).toUpperCase() + companyName.slice(1)} ${copyrightYear}`}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <a
                href={privacyUrl}
                className="transition-opacity hover:opacity-70"
                style={{ color: COLORS.textSecondary }}
              >
                Privacy Policy
              </a>
              <a
                href={termsUrl}
                className="transition-opacity hover:opacity-70"
                style={{ color: COLORS.textSecondary }}
              >
                Terms of Service
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
