"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#F8F9FA",
  logoGreen: "#2D5A41",
  buttonBg: "#0D3B4A",
  buttonHover: "#0A2F3A",
  textPrimary: "#1A1A1A",
  textSecondary: "#6B7280",
  linkHover: "#2D5A41",
  comingSoonBg: "#ECFDF5",
  comingSoonText: "#059669",
  hipaaNavy: "#1E3A5F",
  hipaaGold: "#D4A853",
} as const;

/**
 * 네비게이션 링크 데이터
 */
const DEFAULT_NAV_LINKS = {
  column1: [
    { label: "AI Coordinator", href: "#" },
    { label: "AI PRM", href: "#" },
    { label: "Our Team", href: "#" },
  ],
  column2: [
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#", comingSoon: true },
  ],
};

const DEFAULT_LEGAL_LINKS = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Linkedin } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
  comingSoon?: boolean;
}

interface GroveFooterProps {
  companyName?: string;
  address?: {
    line1: string;
    line2: string;
  };
  email?: string;
  navLinksColumn1?: NavLink[];
  navLinksColumn2?: NavLink[];
  legalLinks?: { label: string; href: string }[];
  copyrightYear?: number;
  copyrightCompany?: string;
  disclaimer?: string;
  linkedinHref?: string;
  demoButtonText?: string;
  demoButtonHref?: string;
  showHipaaBadge?: boolean;
}

// Grove Logo Component
const GroveLogo = ({ color = COLORS.logoGreen }: { color?: string }) => (
  <div className="flex items-center gap-2">
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C8 2 5 5 5 9C5 11 6 13 8 14.5C8 17 9.5 19 12 20C14.5 19 16 17 16 14.5C18 13 19 11 19 9C19 5 16 2 12 2Z"
        fill={color}
      />
      <path
        d="M9 8C9 8 10 10 12 10C14 10 15 8 15 8"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
    <span
      className="text-xl font-semibold tracking-tight"
      style={{ color }}
    >
      grove
    </span>
  </div>
);

// HIPAA Badge Component
const HipaaBadge = () => (
  <div className="relative w-16 h-16">
    {/* Outer gold ring */}
    <div
      className="absolute inset-0 rounded-full"
      style={{
        border: `3px solid ${COLORS.hipaaGold}`,
        background: COLORS.hipaaNavy,
      }}
    />
    {/* Inner content */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <span className="text-[10px] font-bold text-white tracking-wide">
        HIPAA
      </span>
      <span className="text-[6px] text-white/80 mt-0.5">Secured by</span>
      <span className="text-[7px] font-semibold text-amber-400">Delve</span>
    </div>
  </div>
);

// Coming Soon Badge
const ComingSoonBadge = () => (
  <span
    className="ml-2 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded"
    style={{
      backgroundColor: COLORS.comingSoonBg,
      color: COLORS.comingSoonText,
    }}
  >
    Coming Soon
  </span>
);

export default function GroveFooter({
  companyName = "grove",
  address = {
    line1: "San Francisco, CA 94104",
    line2: "United States",
  },
  email = "support@grovetrials.com",
  navLinksColumn1 = DEFAULT_NAV_LINKS.column1,
  navLinksColumn2 = DEFAULT_NAV_LINKS.column2,
  legalLinks = DEFAULT_LEGAL_LINKS,
  copyrightYear = 2024,
  copyrightCompany = "Grove AI Inc.",
  disclaimer = "Names and images on this website do not represent real individuals.",
  linkedinHref = "#",
  demoButtonText = "Book a Demo",
  demoButtonHref = "#",
  showHipaaBadge = true,
}: GroveFooterProps) {
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
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <footer
      className="relative w-full py-12 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: COLORS.background }}
    >
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Header Row - Logo and CTA Button */}
        <motion.div
          className="flex items-center justify-between mb-12"
          variants={itemVariants}
        >
          <GroveLogo />
          <motion.a
            href={demoButtonHref}
            className="px-5 py-2.5 text-sm font-medium text-white rounded-lg transition-colors"
            style={{ backgroundColor: COLORS.buttonBg }}
            whileHover={{
              backgroundColor: COLORS.buttonHover,
              scale: 1.02,
            }}
            whileTap={{ scale: 0.98 }}
          >
            {demoButtonText}
          </motion.a>
        </motion.div>

        {/* Main Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          {/* Contact Info */}
          <motion.div
            className="md:col-span-3 space-y-4"
            variants={itemVariants}
          >
            <div className="space-y-1">
              <p
                className="text-sm"
                style={{ color: COLORS.textPrimary }}
              >
                {address.line1}
              </p>
              <p
                className="text-sm"
                style={{ color: COLORS.textPrimary }}
              >
                {address.line2}
              </p>
            </div>
            <a
              href={`mailto:${email}`}
              className="text-sm block transition-colors hover:underline"
              style={{ color: COLORS.textPrimary }}
            >
              {email}
            </a>
          </motion.div>

          {/* Navigation Links Column 1 */}
          <motion.div
            className="md:col-span-2"
            variants={itemVariants}
          >
            <ul className="space-y-3">
              {navLinksColumn1.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:underline inline-flex items-center"
                    style={{ color: COLORS.textPrimary }}
                  >
                    {link.label}
                    {link.comingSoon && <ComingSoonBadge />}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Navigation Links Column 2 */}
          <motion.div
            className="md:col-span-2"
            variants={itemVariants}
          >
            <ul className="space-y-3">
              {navLinksColumn2.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:underline inline-flex items-center"
                    style={{ color: COLORS.textPrimary }}
                  >
                    {link.label}
                    {link.comingSoon && <ComingSoonBadge />}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-3" />

          {/* HIPAA Badge */}
          {showHipaaBadge && (
            <motion.div
              className="md:col-span-2 flex justify-start md:justify-end"
              variants={itemVariants}
            >
              <HipaaBadge />
            </motion.div>
          )}
        </div>

        {/* Social Links */}
        <motion.div className="mb-12" variants={itemVariants}>
          <a
            href={linkedinHref}
            className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
            style={{ color: COLORS.textPrimary }}
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
            <span>Linkedin</span>
          </a>
        </motion.div>

        {/* Bottom Row - Copyright and Legal */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-6 border-t border-gray-200"
          variants={itemVariants}
        >
          {/* Copyright and Disclaimer */}
          <div className="space-y-1">
            <p
              className="text-xs"
              style={{ color: COLORS.textSecondary }}
            >
              &copy; {copyrightYear} {copyrightCompany} All rights reserved.
            </p>
            <p
              className="text-xs"
              style={{ color: COLORS.textSecondary }}
            >
              {disclaimer}
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-xs transition-colors hover:underline"
                style={{ color: COLORS.textSecondary }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
