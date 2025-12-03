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
    background: "#F8F8F8",
    accent: "#1B3A6B",
    accentHover: "#0F2A52",
    link: "#1B3A6B",
    badgeBg: "#1B3A6B",
    badgeText: "#FFFFFF",
    border: "#E5E5E5",
  },
  dark: {
    background: "#0F172A",
    accent: "#3B82F6",
    accentHover: "#60A5FA",
    link: "#93C5FD",
    badgeBg: "#3B82F6",
    badgeText: "#FFFFFF",
    border: "#334155",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";

// Logo Component
const WatershedLogo = ({ className = "", style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
    <ellipse cx="24" cy="24" rx="10" ry="20" stroke="currentColor" strokeWidth="2" />
    <path d="M4 24H44" stroke="currentColor" strokeWidth="2" />
    <path d="M7 14H41" stroke="currentColor" strokeWidth="2" />
    <path d="M7 34H41" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// Social Icons
const XIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const VimeoIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z" />
  </svg>
);

const LinkedInIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

interface FooterLink {
  label: string;
  href: string;
  isNew?: boolean;
  hasPlus?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterWatershedProps {
  mode?: "light" | "dark";
  logoHref?: string;
  regions?: { label: string; value: string }[];
  defaultRegion?: string;
  platformLinks?: FooterLink[];
  solutionsLinks?: FooterLink[];
  companyLinks?: FooterLink[];
  eventsLinks?: FooterLink[];
  customersLinks?: FooterLink[];
  guidesLinks?: FooterLink[];
  resourcesLinks?: FooterLink[];
  socialLinks?: {
    x?: string;
    vimeo?: string;
    linkedin?: string;
  };
  legalLinks?: { label: string; href: string }[];
  copyright?: string;
}

export default function FooterWatershed({
  mode = "light",
  logoHref = "/",
  regions = [
    { label: "US", value: "us" },
    { label: "Europe", value: "europe" },
  ],
  defaultRegion = "us",
  platformLinks = [
    { label: "Measure", href: "#" },
    { label: "Report", href: "#" },
    { label: "Act", href: "#" },
    { label: "Marketplace", href: "#" },
    { label: "CEDA", href: "#" },
  ],
  solutionsLinks = [
    { label: "Finance", href: "#" },
    { label: "Supply Chain", href: "#" },
    { label: "Consumer goods", href: "#" },
  ],
  companyLinks = [
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Brand", href: "#" },
    { label: "Mission", href: "#" },
  ],
  eventsLinks = [
    { label: "Upcoming", href: "#" },
    { label: "On demand", href: "#" },
  ],
  customersLinks = [
    { label: "Customer Stories", href: "#" },
    { label: "Climate leads", href: "#" },
    { label: "Community", href: "#" },
  ],
  guidesLinks = [
    { label: "State of the climate economy", href: "#" },
    { label: "Climate disclosure guide", href: "#" },
    { label: "How to build a climate program", href: "#" },
    { label: "ESG Management Matrix", href: "#", isNew: true },
  ],
  resourcesLinks = [
    { label: "Sustainability assessment", href: "#", isNew: true },
    { label: "Carbon accounting", href: "#" },
    { label: "ESG reporting", href: "#" },
    { label: "RFP Guide", href: "#" },
    { label: "Regulatory frameworks", href: "#", hasPlus: true },
  ],
  socialLinks = {
    x: "#",
    vimeo: "#",
    linkedin: "#",
  },
  legalLinks = [
    { label: "Privacy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Security", href: "#" },
  ],
  copyright = "2024 Watershed Technology, Inc.",
}: FooterWatershedProps) {
  const colors = COLORS[mode];
  const [selectedRegion, setSelectedRegion] = useState(defaultRegion);

  const LinkItem = ({ link }: { link: FooterLink }) => (
    <motion.li
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <a
        href={link.href}
        className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
        style={{ color: colors.link }}
      >
        {link.label}
        {link.isNew && (
          <span
            className="rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
            style={{ backgroundColor: colors.badgeBg, color: colors.badgeText }}
          >
            New
          </span>
        )}
        {link.hasPlus && (
          <span style={{ color: colors.accent }}>+</span>
        )}
      </a>
    </motion.li>
  );

  const Section = ({ title, links }: FooterSection) => (
    <div className="flex flex-col gap-4">
      <motion.h3
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="text-sm font-semibold"
        style={{ color: colors.accent }}
      >
        {title}
      </motion.h3>
      <ul className="flex flex-col gap-3">
        {links.map((link, index) => (
          <LinkItem key={index} link={link} />
        ))}
      </ul>
    </div>
  );

  return (
    <footer
      className="w-full py-16 px-6 md:px-12 lg:px-16"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Region Selector */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-6"
          >
            <a href={logoHref} className="inline-block w-fit">
              <WatershedLogo
                className="h-12 w-12"
                style={{ color: colors.accent }}
              />
            </a>
            {/* Region Toggle */}
            <div
              className="inline-flex w-fit rounded-full border p-1"
              style={{ borderColor: colors.border }}
            >
              {regions.map((region) => (
                <button
                  key={region.value}
                  onClick={() => setSelectedRegion(region.value)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                    selectedRegion === region.value
                      ? "shadow-sm"
                      : "hover:opacity-70"
                  }`}
                  style={{
                    backgroundColor:
                      selectedRegion === region.value ? "#FFFFFF" : "transparent",
                    color: colors.accent,
                  }}
                >
                  {region.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Column 1: Platform + Events */}
          <div className="flex flex-col gap-10">
            <Section title="Platform" links={platformLinks} />
            <Section title="Events" links={eventsLinks} />
          </div>

          {/* Column 2: Solutions + Customers */}
          <div className="flex flex-col gap-10">
            <Section title="Solutions" links={solutionsLinks} />
            <Section title="Customers" links={customersLinks} />
          </div>

          {/* Column 3: Company + Guides */}
          <div className="flex flex-col gap-10">
            <Section title="Company" links={companyLinks} />
            <Section title="Guides" links={guidesLinks} />
          </div>
        </div>

        {/* Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 lg:ml-[25%]"
        >
          <Section title="Resources" links={resourcesLinks} />
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-16 flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row"
          style={{ borderColor: colors.border }}
        >
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.x && (
              <a
                href={socialLinks.x}
                className="transition-opacity hover:opacity-70"
                style={{ color: colors.accent }}
                aria-label="X (Twitter)"
              >
                <XIcon className="h-5 w-5" />
              </a>
            )}
            {socialLinks.vimeo && (
              <a
                href={socialLinks.vimeo}
                className="transition-opacity hover:opacity-70"
                style={{ color: colors.accent }}
                aria-label="Vimeo"
              >
                <VimeoIcon className="h-5 w-5" />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                className="transition-opacity hover:opacity-70"
                style={{ color: colors.accent }}
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            )}
          </div>

          {/* Legal Links and Copyright */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:justify-end">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="transition-opacity hover:opacity-70"
                style={{ color: colors.link }}
              >
                {link.label}
              </a>
            ))}
            <span style={{ color: colors.link }}>&copy; {copyright}</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
