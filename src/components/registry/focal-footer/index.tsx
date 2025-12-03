"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    outerBg: "#FD9A85", // 살몬 핑크 외부 배경
    cardBg: "#33120B", // 다크 브라운 카드 배경
    headingText: "#F5A99A", // 핑크 헤딩 텍스트
    linkText: "#E8D5D0", // 베이지/밝은 크림 링크 텍스트
    mutedText: "#9A7A72", // 음소거된 텍스트 (저작권)
    logoText: "#FFFFFF", // 로고 텍스트
  },
  dark: {
    outerBg: "#1a0a06",
    cardBg: "#0d0503",
    headingText: "#F5A99A",
    linkText: "#E8D5D0",
    mutedText: "#9A7A72",
    logoText: "#FFFFFF",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

// Types
interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FocalFooterProps {
  mode?: "light" | "dark";
  logoText?: string;
  address?: string[];
  columns?: FooterColumn[];
  copyright?: string;
  onLinkClick?: (href: string) => void;
}

// Focal Logo Component - Concentric circles icon
function FocalLogo({
  text = "Focal",
  color = "#FFFFFF",
}: {
  text?: string;
  color?: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle */}
        <circle cx="14" cy="14" r="13" stroke={color} strokeWidth="2" />
        {/* Middle circle */}
        <circle cx="14" cy="14" r="8" stroke={color} strokeWidth="2" />
        {/* Inner filled circle */}
        <circle cx="14" cy="14" r="3.5" fill={color} />
        {/* Broadcast lines on right */}
        <path
          d="M22 8C24 10 25 12 25 14C25 16 24 18 22 20"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span
        className="text-lg font-semibold tracking-tight"
        style={{ color }}
      >
        {text}
      </span>
    </div>
  );
}

// Default values
const defaultColumns: FooterColumn[] = [
  {
    title: "Features",
    links: [
      { label: "Asset Library", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Media Player", href: "#" },
      { label: "Pages", href: "#" },
    ],
  },
  {
    title: "Use cases",
    links: [
      { label: "DTC and eCom", href: "#" },
      { label: "Gaming", href: "#" },
      { label: "Agencies", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Privacy policy", href: "#" },
      { label: "Solutions library", href: "#" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "X", href: "#" },
      { label: "Linkedin", href: "#" },
    ],
  },
];

const defaultAddress = ["Paasivuorenkatu 4 A,", "00530 Helsinki, Finland."];

export default function FocalFooter({
  mode = "light",
  logoText = "Focal",
  address = defaultAddress,
  columns = defaultColumns,
  copyright = "2023 Focal Technologies Oy.",
  onLinkClick,
}: FocalFooterProps) {
  const colors = COLORS[mode];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (onLinkClick) {
      e.preventDefault();
      onLinkClick(href);
    }
  };

  return (
    <section
      className="relative w-full py-8 px-6 md:px-8"
      style={{ backgroundColor: colors.outerBg }}
    >
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto rounded-3xl px-8 py-10 md:px-12 md:py-12"
        style={{ backgroundColor: colors.cardBg }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
          {/* Logo and Address Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3"
          >
            <FocalLogo text={logoText} color={colors.logoText} />
            <div className="mt-6 space-y-0.5">
              {address.map((line, index) => (
                <p
                  key={index}
                  className="text-sm"
                  style={{ color: colors.linkText }}
                >
                  {line}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-6">
            {columns.map((column, columnIndex) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + columnIndex * 0.08 }}
              >
                <h3
                  className="text-sm font-medium mb-4"
                  style={{ color: colors.headingText }}
                >
                  {column.title}
                </h3>
                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="text-sm transition-opacity duration-200 hover:opacity-70"
                        style={{ color: colors.linkText }}
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

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 pt-0"
        >
          <p className="text-sm" style={{ color: colors.mutedText }}>
            &copy; {copyright}
          </p>
        </motion.div>
      </motion.footer>
    </section>
  );
}
