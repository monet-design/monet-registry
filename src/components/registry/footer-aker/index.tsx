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
    background: "#F6F6F6",
    textPrimary: "#1a1a1a",
    textSecondary: "#5E5E5E",
    textMuted: "#9a9a9a",
    iconFundamentals: "#557067",
    iconCreative: "#467781",
    iconCollective: "#CB8F68",
  },
  dark: {
    background: "#1a1a1a",
    textPrimary: "#F6F6F6",
    textSecondary: "#a0a0a0",
    textMuted: "#6a6a6a",
    iconFundamentals: "#6b8a80",
    iconCreative: "#5a919c",
    iconCollective: "#d9a882",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

// Navigation data structure
const NAV_DATA = {
  home: {
    title: "Home",
    links: [
      { label: "Locations", href: "#" },
      { label: "Criteria", href: "#" },
    ],
  },
  ourWork: {
    title: "Our work",
    items: [
      {
        icon: "fundamentals",
        label: "The Fundamentals",
        href: "#",
      },
      {
        icon: "creative",
        label: "The Creative",
        href: "#",
      },
      {
        icon: "collective",
        label: "The Collective",
        href: "#",
      },
    ],
  },
  about: {
    title: "About",
    links: [
      { label: "Story", href: "#" },
      { label: "Team", href: "#" },
    ],
  },
  careers: {
    title: "Careers",
    links: [
      { label: "Culture", href: "#" },
      { label: "Apply", href: "#" },
    ],
  },
  investorPortal: {
    title: "Investor Portal",
    href: "#",
  },
  contact: {
    title: "Contact",
    href: "#",
  },
};

// Icon components for "Our work" section
function FundamentalsIcon({ color }: { color: string }) {
  return (
    <div
      className="flex h-8 w-8 items-center justify-center rounded-md"
      style={{ backgroundColor: color }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 2L8 2L8 8L2 8L2 2Z" stroke="white" strokeWidth="1.5" />
        <path d="M8 8L14 8L14 14L8 14L8 8Z" stroke="white" strokeWidth="1.5" />
        <path d="M2 12L6 8" stroke="white" strokeWidth="1.5" />
        <path d="M10 6L14 2" stroke="white" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function CreativeIcon({ color }: { color: string }) {
  return (
    <div
      className="flex h-8 w-8 items-center justify-center rounded-md"
      style={{ backgroundColor: color }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="2" width="5" height="12" stroke="white" strokeWidth="1.5" />
        <rect x="9" y="2" width="5" height="12" stroke="white" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function CollectiveIcon({ color }: { color: string }) {
  return (
    <div
      className="flex h-8 w-8 items-center justify-center rounded-md"
      style={{ backgroundColor: color }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="5" stroke="white" strokeWidth="1.5" />
        <circle cx="8" cy="8" r="2" stroke="white" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

interface FooterAkerProps {
  mode?: "light" | "dark";
  companyName?: string;
  fiscalYear?: string;
  addresses?: string[];
  timezone?: string;
}

export default function FooterAker({
  mode = "light",
  companyName = "AKER",
  fiscalYear = "FY '© 2024",
  addresses = ["575 5th Ave, NY 10017", "1284 Beacon St, Brookline, MA 02446"],
  timezone = "NY: 15:26:32",
}: FooterAkerProps) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      className="relative w-full px-6 py-12 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.background }}
    >
      {/* Fiscal Year - Top Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute right-6 top-4 text-sm md:right-12 lg:right-20"
        style={{ color: colors.textMuted }}
      >
        {fiscalYear}
      </motion.div>

      {/* Navigation Grid */}
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6"
      >
        {/* Home Column */}
        <motion.div variants={itemVariants} className="space-y-3">
          <h3
            className="text-sm font-medium"
            style={{ color: colors.textPrimary }}
          >
            {NAV_DATA.home.title}
          </h3>
          <ul className="space-y-2">
            {NAV_DATA.home.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: colors.textSecondary }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Our Work Column */}
        <motion.div variants={itemVariants} className="col-span-1 space-y-3 md:col-span-1">
          <h3
            className="text-sm font-medium"
            style={{ color: colors.textPrimary }}
          >
            {NAV_DATA.ourWork.title}
          </h3>
          <ul className="space-y-3">
            {NAV_DATA.ourWork.items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 text-sm transition-colors hover:opacity-70"
                  style={{ color: colors.textSecondary }}
                >
                  {item.icon === "fundamentals" && (
                    <FundamentalsIcon color={colors.iconFundamentals} />
                  )}
                  {item.icon === "creative" && (
                    <CreativeIcon color={colors.iconCreative} />
                  )}
                  {item.icon === "collective" && (
                    <CollectiveIcon color={colors.iconCollective} />
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* About Column */}
        <motion.div variants={itemVariants} className="space-y-3">
          <h3
            className="text-sm font-medium"
            style={{ color: colors.textPrimary }}
          >
            {NAV_DATA.about.title}
          </h3>
          <ul className="space-y-2">
            {NAV_DATA.about.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: colors.textSecondary }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Careers Column */}
        <motion.div variants={itemVariants} className="space-y-3">
          <h3
            className="text-sm font-medium"
            style={{ color: colors.textPrimary }}
          >
            {NAV_DATA.careers.title}
          </h3>
          <ul className="space-y-2">
            {NAV_DATA.careers.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: colors.textSecondary }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Investor Portal Column */}
        <motion.div variants={itemVariants} className="space-y-3">
          <a
            href={NAV_DATA.investorPortal.href}
            className="text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: colors.textPrimary }}
          >
            {NAV_DATA.investorPortal.title}
          </a>
        </motion.div>

        {/* Contact Column */}
        <motion.div variants={itemVariants} className="space-y-3">
          <a
            href={NAV_DATA.contact.href}
            className="text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: colors.textPrimary }}
          >
            {NAV_DATA.contact.title}
          </a>
        </motion.div>
      </motion.nav>

      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-16 md:mt-24"
      >
        <h2
          className="font-serif text-6xl font-bold tracking-wider md:text-8xl lg:text-9xl"
          style={{ color: colors.textPrimary }}
        >
          {companyName}
        </h2>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-gray-200 pt-6 text-sm dark:border-gray-800 md:flex-row md:items-center"
        style={{ color: colors.textSecondary }}
      >
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <a href="#" className="transition-colors hover:opacity-70">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:opacity-70">
            LinkedIn
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-2 md:gap-4">
          {addresses.map((address, index) => (
            <span key={index} className="flex items-center">
              {address}
              {index < addresses.length - 1 && (
                <span className="mx-2 text-gray-400">/</span>
              )}
            </span>
          ))}
        </div>
        <div style={{ color: colors.textMuted }}>{timezone}</div>
      </motion.div>
    </footer>
  );
}
