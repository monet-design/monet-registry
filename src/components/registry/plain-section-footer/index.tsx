"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#000000",
    accent: "#3ce0a0",
    textPrimary: "#ffffff",
    textMuted: "#6b6b6b",
    textCategory: "#6b6b6b",
  },
  dark: {
    background: "#000000",
    accent: "#3ce0a0",
    textPrimary: "#ffffff",
    textMuted: "#6b6b6b",
    textCategory: "#6b6b6b",
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

// Logo Component
function PlainLogo({ accentColor }: { accentColor: string }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 12L12 4L20 12L12 8L4 12Z"
          fill={accentColor}
        />
        <path
          d="M4 12L12 20L20 12L12 16L4 12Z"
          fill={accentColor}
          opacity="0.6"
        />
      </svg>
      <span className="text-xl font-semibold text-white">Plain</span>
    </div>
  );
}

// Default link sections data
const defaultLinkSections = {
  plain: {
    title: "PLAIN",
    links: [
      { label: "Product", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Customers", href: "#" },
      { label: "Startup program", href: "#" },
    ],
  },
  resources: {
    title: "RESOURCES",
    links: [
      { label: "Blog", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Docs", href: "#" },
      { label: "Security", href: "#" },
      { label: "Press kit", href: "#" },
    ],
  },
  channels: {
    title: "CHANNELS",
    links: [
      { label: "Slack", href: "#" },
      { label: "Microsoft Teams", href: "#" },
      { label: "Discourse", href: "#" },
      { label: "Email", href: "#" },
      { label: "In-app forms", href: "#" },
      { label: "Headless portal", href: "#" },
      { label: "Live chat", href: "#" },
    ],
  },
  company: {
    title: "COMPANY",
    links: [
      { label: "Careers", href: "#" },
      { label: "Manifesto", href: "#" },
    ],
  },
  support: {
    title: "SUPPORT",
    links: [
      { label: "Status", href: "#" },
      { label: "@plainsupport", href: "#" },
    ],
  },
};

const defaultLegalLinks = [
  { label: "Consent Preferences", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Cookies", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Website terms", href: "#" },
  { label: "Data Processing", href: "#" },
  { label: "Vulnerability Disclosure", href: "#" },
];

interface LinkItem {
  label: string;
  href: string;
}

interface LinkSection {
  title: string;
  links: LinkItem[];
}

interface PlainSectionFooterProps {
  mode?: "light" | "dark";
  brandName?: string;
  linkSections?: {
    plain?: LinkSection;
    resources?: LinkSection;
    channels?: LinkSection;
    company?: LinkSection;
    support?: LinkSection;
  };
  legalLinks?: LinkItem[];
  copyrightText?: string;
}

export default function PlainSectionFooter({
  mode = "dark",
  brandName = "Plain",
  linkSections = defaultLinkSections,
  legalLinks = defaultLegalLinks,
  copyrightText = "2025 Plain · Not Just Tickets Ltd",
}: PlainSectionFooterProps) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
      className="relative w-full py-16 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.background }}
    >
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Logo */}
        <motion.div variants={itemVariants} className="mb-12">
          <PlainLogo accentColor={colors.accent} />
        </motion.div>

        {/* Links Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12 mb-16"
        >
          {/* Column 1: Plain + Resources */}
          <div className="flex flex-col gap-10">
            {/* Plain Section */}
            {linkSections.plain && (
              <div>
                <h3
                  className="text-xs font-medium tracking-wider mb-4"
                  style={{ color: colors.textCategory }}
                >
                  {linkSections.plain.title}
                </h3>
                <ul className="space-y-3">
                  {linkSections.plain.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors hover:opacity-70"
                        style={{ color: colors.textPrimary }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Resources Section */}
            {linkSections.resources && (
              <div>
                <h3
                  className="text-xs font-medium tracking-wider mb-4"
                  style={{ color: colors.textCategory }}
                >
                  {linkSections.resources.title}
                </h3>
                <ul className="space-y-3">
                  {linkSections.resources.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors hover:opacity-70"
                        style={{ color: colors.textPrimary }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Column 2: Channels */}
          {linkSections.channels && (
            <div>
              <h3
                className="text-xs font-medium tracking-wider mb-4"
                style={{ color: colors.textCategory }}
              >
                {linkSections.channels.title}
              </h3>
              <ul className="space-y-3">
                {linkSections.channels.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:opacity-70"
                      style={{ color: colors.textPrimary }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Column 3: Company */}
          {linkSections.company && (
            <div>
              <h3
                className="text-xs font-medium tracking-wider mb-4"
                style={{ color: colors.textCategory }}
              >
                {linkSections.company.title}
              </h3>
              <ul className="space-y-3">
                {linkSections.company.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:opacity-70"
                      style={{ color: colors.textPrimary }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Column 4: Support */}
          {linkSections.support && (
            <div>
              <h3
                className="text-xs font-medium tracking-wider mb-4"
                style={{ color: colors.textCategory }}
              >
                {linkSections.support.title}
              </h3>
              <ul className="space-y-3">
                {linkSections.support.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:opacity-70"
                      style={{ color: colors.textPrimary }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>

        {/* Bottom Section: Legal Links + Copyright */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-white/10"
        >
          {/* Legal Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
            {legalLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-xs transition-colors hover:opacity-70"
                style={{ color: colors.textMuted }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p
            className="text-xs"
            style={{ color: colors.textMuted }}
          >
            &copy; {copyrightText}
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
