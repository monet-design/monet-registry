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
    // Substack Orange
    accent: "#FF6719",
    accentHover: "#E85A14",
    // Background
    background: "#FFFFFF",
    // Text colors
    headingText: "#282828",
    linkText: "#6B6B6B",
    taglineText: "#6B6B6B",
    copyrightText: "#6B6B6B",
  },
  dark: {
    accent: "#FF6719",
    accentHover: "#FF8844",
    background: "#0A0A0A",
    headingText: "#F5F5F5",
    linkText: "#A3A3A3",
    taglineText: "#A3A3A3",
    copyrightText: "#A3A3A3",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Apple } from "lucide-react";

// Substack Logo Component
function SubstackLogo({ color = "#FF6719" }: { color?: string }) {
  return (
    <svg
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H24V4.8H0V0Z"
        fill={color}
      />
      <path
        d="M0 7.2H24V12H0V7.2Z"
        fill={color}
      />
      <path
        d="M0 14.4V28L12 21.2L24 28V14.4H0Z"
        fill={color}
      />
    </svg>
  );
}

// Google Play Icon Component
function GooglePlayIcon({ className, color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
    </svg>
  );
}

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterSubstackProps {
  mode?: "light" | "dark";
  tagline?: string;
  columns?: FooterColumn[];
  copyrightText?: string;
  showAppStoreButtons?: boolean;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  privacyUrl?: string;
  termsUrl?: string;
  collectionNoticeUrl?: string;
}

const defaultColumns: FooterColumn[] = [
  {
    title: "Read",
    links: [
      { label: "Discover", href: "#" },
      { label: "Get the app", href: "#" },
      { label: "Featured", href: "#" },
      { label: "Substack Reader", href: "#" },
      { label: "Top in culture", href: "#" },
      { label: "Top podcasts", href: "#" },
      { label: "Top in food & drink", href: "#" },
      { label: "Top in finance", href: "#" },
      { label: "Top in sports", href: "#" },
      { label: "Top in politics", href: "#" },
      { label: "Top in technology", href: "#" },
      { label: "Top in faith", href: "#" },
      { label: "Top in business", href: "#" },
      { label: "Sitemap", href: "#" },
    ],
  },
  {
    title: "Writers",
    links: [
      { label: "Switch to Substack", href: "#" },
      { label: "Switch from Ghost", href: "#" },
      { label: "Get started", href: "#" },
      { label: "Go paid", href: "#" },
      { label: "For podcasts", href: "#" },
      { label: "For bloggers", href: "#" },
      { label: "For finance writers", href: "#" },
      { label: "For authors", href: "#" },
      { label: "For comic creators", href: "#" },
      { label: "For food writers", href: "#" },
      { label: "For local news", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Help", href: "#" },
      { label: "Jobs", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Vulnerability Policy", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resource center", href: "#" },
      { label: "Guide to going paid", href: "#" },
      { label: "Help center", href: "#" },
      { label: "Community and programs", href: "#" },
      { label: "Brand assets", href: "#" },
    ],
  },
];

export default function FooterSubstack({
  mode = "light",
  tagline = "Substack is the home for\ngreat writing",
  columns = defaultColumns,
  copyrightText = "Substack Inc.",
  showAppStoreButtons = true,
  appStoreUrl = "#",
  googlePlayUrl = "#",
  privacyUrl = "#",
  termsUrl = "#",
  collectionNoticeUrl = "#",
}: FooterSubstackProps) {
  const colors = COLORS[mode];

  return (
    <footer
      className="w-full py-12 px-6 md:px-12 lg:px-16"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          {/* Left Section - Logo, Tagline, App Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 lg:w-[240px] shrink-0"
          >
            {/* Logo */}
            <SubstackLogo color={colors.accent} />

            {/* Tagline */}
            <p
              className="text-base italic whitespace-pre-line leading-relaxed"
              style={{ color: colors.taglineText }}
            >
              {tagline}
            </p>

            {/* App Store Buttons */}
            {showAppStoreButtons && (
              <div className="flex flex-wrap gap-2 mt-auto pt-8">
                <a
                  href={appStoreUrl}
                  className="inline-flex items-center gap-2 px-3 py-2 border border-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  style={{
                    borderColor: mode === "dark" ? "#525252" : "#1F2937",
                  }}
                >
                  <Apple className="w-5 h-5" style={{ color: mode === "dark" ? "#FFFFFF" : "#000000" }} />
                  <div className="flex flex-col">
                    <span
                      className="text-[8px] leading-tight"
                      style={{ color: mode === "dark" ? "#A3A3A3" : "#6B7280" }}
                    >
                      Download on the
                    </span>
                    <span
                      className="text-xs font-semibold leading-tight"
                      style={{ color: mode === "dark" ? "#FFFFFF" : "#000000" }}
                    >
                      App Store
                    </span>
                  </div>
                </a>
                <a
                  href={googlePlayUrl}
                  className="inline-flex items-center gap-2 px-3 py-2 border border-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  style={{
                    borderColor: mode === "dark" ? "#525252" : "#1F2937",
                  }}
                >
                  <GooglePlayIcon className="w-5 h-5" color={mode === "dark" ? "#FFFFFF" : "#000000"} />
                  <div className="flex flex-col">
                    <span
                      className="text-[8px] leading-tight"
                      style={{ color: mode === "dark" ? "#A3A3A3" : "#6B7280" }}
                    >
                      GET IT ON
                    </span>
                    <span
                      className="text-xs font-semibold leading-tight"
                      style={{ color: mode === "dark" ? "#FFFFFF" : "#000000" }}
                    >
                      Google Play
                    </span>
                  </div>
                </a>
              </div>
            )}
          </motion.div>

          {/* Right Section - Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 flex-1">
            {columns.map((column, columnIndex) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4"
              >
                <h3
                  className="text-sm font-semibold"
                  style={{ color: colors.headingText }}
                >
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm hover:underline transition-colors"
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

        {/* Bottom Section - Copyright and Legal Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-12 pt-8 border-t"
          style={{ borderColor: mode === "dark" ? "#262626" : "#E5E5E5" }}
        >
          {/* Copyright */}
          <p
            className="text-sm"
            style={{ color: colors.copyrightText }}
          >
            &copy; {copyrightText}
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-4">
            <a
              href={privacyUrl}
              className="text-sm underline hover:no-underline transition-colors"
              style={{ color: colors.copyrightText }}
            >
              Privacy
            </a>
            <a
              href={termsUrl}
              className="text-sm underline hover:no-underline transition-colors"
              style={{ color: colors.copyrightText }}
            >
              Terms
            </a>
            <a
              href={collectionNoticeUrl}
              className="text-sm underline hover:no-underline transition-colors"
              style={{ color: colors.copyrightText }}
            >
              Collection notice
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
