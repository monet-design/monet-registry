"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#8B7DD8",
    sectionTitle: "rgba(255, 255, 255, 0.6)",
    linkText: "#FFFFFF",
    linkHover: "rgba(255, 255, 255, 0.7)",
    copyrightText: "rgba(255, 255, 255, 0.6)",
    logoColor: "#FFFFFF",
  },
  dark: {
    background: "#8B7DD8",
    sectionTitle: "rgba(255, 255, 255, 0.6)",
    linkText: "#FFFFFF",
    linkHover: "rgba(255, 255, 255, 0.7)",
    copyrightText: "rgba(255, 255, 255, 0.6)",
    logoColor: "#FFFFFF",
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
import { ExternalLink } from "lucide-react";

// Tines logo component (3 horizontal lines stacked)
const TinesLogo = ({ size = 32 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="6" y="8" width="20" height="3" rx="1.5" />
    <rect x="6" y="14.5" width="20" height="3" rx="1.5" />
    <rect x="6" y="21" width="20" height="3" rx="1.5" />
  </svg>
);

interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

interface FooterTinesProps {
  mode?: "light" | "dark";
  linkGroups?: FooterLinkGroup[];
  companyName?: string;
}

const defaultLinkGroups: FooterLinkGroup[] = [
  {
    title: "PLATFORM",
    links: [
      { label: "Meet the platform", href: "#" },
      { label: "Storyboard", href: "#" },
      { label: "Cases", href: "#" },
      { label: "Workbench", href: "#" },
      { label: "AI in Tines", href: "#" },
      { label: "Build apps", href: "#" },
      { label: "Formulas", href: "#" },
      { label: "What's new", href: "#" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "SOLUTIONS",
    links: [
      { label: "By product", href: "#" },
      { label: "Security", href: "#" },
      { label: "IT operations", href: "#" },
      { label: "Infrastructure", href: "#" },
      { label: "Engineering", href: "#" },
      { label: "Product", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Professional services", href: "#" },
      { label: "Federal", href: "#" },
      { label: "Enterprise", href: "#" },
      { label: "MSSPs", href: "#" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Blog", href: "#" },
      { label: "Case studies", href: "#" },
      { label: "Library", href: "#" },
      { label: "University", href: "#" },
      { label: "Tines Explained", href: "#", isExternal: true },
      { label: "Customer center", href: "#" },
      { label: "Events", href: "#" },
      { label: "Podcast", href: "#" },
      { label: "Webinars", href: "#" },
      { label: "Bootcamps", href: "#" },
      { label: "Docs", href: "#" },
      { label: "API", href: "#" },
      { label: "Get certified", href: "#" },
      { label: "YDWWT", href: "#" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Tines Store", href: "#", isExternal: true },
      { label: "Contact", href: "#" },
      { label: "Newsroom", href: "#" },
      { label: "Brand assets", href: "#", isExternal: true },
      { label: "Legal and privacy", href: "#" },
      { label: "Security", href: "#" },
      { label: "Trust center", href: "#", isExternal: true },
    ],
  },
  {
    title: "CONNECT",
    links: [
      { label: "Slack Community", href: "#", isExternal: true },
      { label: "LinkedIn", href: "#", isExternal: true },
      { label: "Twitter", href: "#", isExternal: true },
      { label: "YouTube", href: "#", isExternal: true },
    ],
  },
  {
    title: "RSS",
    links: [
      { label: "Blog", href: "#", isExternal: true },
      { label: "Product updates", href: "#", isExternal: true },
      { label: "Library", href: "#", isExternal: true },
      { label: "Self-hosting releases", href: "#", isExternal: true },
    ],
  },
];

export default function FooterTines({
  mode = "light",
  linkGroups = defaultLinkGroups,
  companyName = "Tines",
}: FooterTinesProps) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const columnVariants = {
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
      className="relative w-full py-16 px-8 lg:px-16"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Link Columns */}
        <motion.div
          className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {linkGroups.map((group, idx) => (
            <motion.div key={idx} variants={columnVariants} className="col-span-1">
              <h3
                className="mb-5 text-xs font-medium tracking-wider"
                style={{ color: colors.sectionTitle }}
              >
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-1 text-sm transition-colors duration-200 hover:opacity-70"
                      style={{ color: colors.linkText }}
                      target={link.isExternal ? "_blank" : undefined}
                      rel={link.isExternal ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                      {link.isExternal && (
                        <ExternalLink size={12} className="opacity-60" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-20 flex flex-col items-center justify-between gap-8 sm:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <p
            className="text-sm"
            style={{ color: colors.copyrightText }}
          >
            &copy; {companyName}
          </p>

          {/* Logo */}
          <div style={{ color: colors.logoColor }}>
            <TinesLogo size={28} />
          </div>

          {/* Spacer for alignment */}
          <div className="hidden sm:block w-12" />
        </motion.div>
      </div>
    </footer>
  );
}
