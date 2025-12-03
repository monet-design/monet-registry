"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#FDF8F3",
    logoText: "#201515",
    accent: "#FF4A00",
    headingText: "#201515",
    linkText: "#201515",
    linkHover: "#FF4A00",
    alphabetText: "#6B6B6B",
    alphabetActive: "#201515",
    copyrightText: "#6B6B6B",
    socialBg: "#201515",
    socialIcon: "#FFFFFF",
  },
  dark: {
    background: "#1A1A1A",
    logoText: "#FFFFFF",
    accent: "#FF4A00",
    headingText: "#FFFFFF",
    linkText: "#D1D5DB",
    linkHover: "#FF4A00",
    alphabetText: "#9CA3AF",
    alphabetActive: "#FFFFFF",
    copyrightText: "#9CA3AF",
    socialBg: "#FFFFFF",
    socialIcon: "#1A1A1A",
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
import { Rss, Youtube } from "lucide-react";

// X (Twitter) Icon
const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Zapier Logo Component
const ZapierLogo = ({
  size = "large",
  colors,
}: {
  size?: "large" | "small";
  colors: (typeof COLORS)["light"] | (typeof COLORS)["dark"];
}) => {
  const isLarge = size === "large";
  return (
    <div className="flex items-end gap-1">
      {/* Orange Underscore */}
      <div
        className={isLarge ? "w-16 h-5 mb-2 lg:w-24 lg:h-7 lg:mb-3" : "w-4 h-1.5 mb-0.5"}
        style={{ backgroundColor: colors.accent }}
      />
      {/* Zapier Text */}
      <span
        className={
          isLarge
            ? "text-[80px] lg:text-[140px] font-black leading-none tracking-tight"
            : "text-xl font-black leading-none tracking-tight"
        }
        style={{ color: colors.logoText }}
      >
        zapier
      </span>
    </div>
  );
};

interface FooterLink {
  label: string;
  href: string;
  isShowMore?: boolean;
}

interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

interface NavLink {
  label: string;
  href: string;
}

interface SocialLink {
  platform: "rss" | "x" | "youtube";
  href: string;
}

interface FooterZapierProps {
  mode?: "light" | "dark";
  linkGroups?: FooterLinkGroup[];
  navLinks?: NavLink[];
  socialLinks?: SocialLink[];
  alphabetNav?: string[];
  companyName?: string;
  legalLinks?: NavLink[];
}

const defaultLinkGroups: FooterLinkGroup[] = [
  {
    title: "Top Searches",
    links: [
      { label: "Slack Integrations", href: "#" },
      { label: "Salesforce Integrations", href: "#" },
      { label: "HubSpot CRM Integrations", href: "#" },
      { label: "PayPal Integrations", href: "#" },
      { label: "Asana Integrations", href: "#" },
      { label: "Show more", href: "#", isShowMore: true },
    ],
  },
  {
    title: "Popular Apps",
    links: [
      { label: "Dropbox", href: "#" },
      { label: "Google Sheets", href: "#" },
      { label: "DocuSign", href: "#" },
      { label: "WordPress", href: "#" },
      { label: "Office 365", href: "#" },
      { label: "Show more", href: "#", isShowMore: true },
    ],
  },
  {
    title: "Trending Apps",
    links: [
      { label: "Twitch", href: "#" },
      { label: "Printful", href: "#" },
      { label: "Microsoft To-Do", href: "#" },
      { label: "Microsoft Outlook", href: "#" },
      { label: "Medium", href: "#" },
      { label: "Show more", href: "#", isShowMore: true },
    ],
  },
  {
    title: "Top Apps by Category",
    links: [
      { label: "Project Management", href: "#" },
      { label: "Calendar", href: "#" },
      { label: "Email", href: "#" },
      { label: "CRM (Customer Relationship Management)", href: "#" },
      { label: "Marketing Automation", href: "#" },
      { label: "Show more", href: "#", isShowMore: true },
    ],
  },
  {
    title: "Our Best Content",
    links: [
      { label: "Best Video Conferencing Apps", href: "#" },
      { label: "Best Email Apps", href: "#" },
      { label: "Best CRM Apps", href: "#" },
      { label: "Best Note Taking Apps", href: "#" },
      { label: "Best Calendar Apps", href: "#" },
      { label: "Show more", href: "#", isShowMore: true },
    ],
  },
];

const defaultNavLinks: NavLink[] = [
  { label: "Pricing", href: "#" },
  { label: "Help", href: "#" },
  { label: "Developer Platform", href: "#" },
  { label: "Press", href: "#" },
  { label: "Jobs", href: "#" },
  { label: "Zapier for Companies", href: "#" },
  { label: "Transfer", href: "#" },
];

const defaultSocialLinks: SocialLink[] = [
  { platform: "rss", href: "#" },
  { platform: "x", href: "#" },
  { platform: "youtube", href: "#" },
];

const defaultAlphabetNav = [
  "0-9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const defaultLegalLinks: NavLink[] = [
  { label: "Legal", href: "#" },
  { label: "Privacy", href: "#" },
];

const SocialIcon = ({
  platform,
  size = 16,
}: {
  platform: SocialLink["platform"];
  size?: number;
}) => {
  switch (platform) {
    case "rss":
      return <Rss size={size} />;
    case "x":
      return <XIcon size={size} />;
    case "youtube":
      return <Youtube size={size} />;
    default:
      return null;
  }
};

export default function FooterZapier({
  mode = "light",
  linkGroups = defaultLinkGroups,
  navLinks = defaultNavLinks,
  socialLinks = defaultSocialLinks,
  alphabetNav = defaultAlphabetNav,
  companyName = "Zapier Inc.",
  legalLinks = defaultLegalLinks,
}: FooterZapierProps) {
  const colors = COLORS[mode];
  const currentYear = new Date().getFullYear();

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
      className="relative w-full"
      style={{ backgroundColor: colors.background }}
    >
      {/* Hero Logo Section */}
      <motion.div
        className="py-8 lg:py-16 px-6 lg:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ZapierLogo size="large" colors={colors} />
      </motion.div>

      {/* Apps by Title Section */}
      <motion.div
        className="text-center py-8 px-6 lg:px-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-sm font-medium mb-6"
          style={{ color: colors.headingText }}
        >
          Apps by Title
        </h2>
        {/* Alphabet Navigation */}
        <div className="flex flex-wrap justify-center gap-2 lg:gap-4 max-w-4xl mx-auto">
          {alphabetNav.map((letter) => (
            <a
              key={letter}
              href={`#${letter}`}
              className="text-xs lg:text-sm transition-colors duration-200 hover:opacity-70"
              style={{ color: colors.alphabetText }}
            >
              {letter}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Link Groups Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 px-6 lg:px-12 py-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {linkGroups.map((group, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <h3
              className="text-sm font-semibold mb-4"
              style={{ color: colors.headingText }}
            >
              {group.title}
            </h3>
            <ul className="space-y-2.5">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{
                      color: link.isShowMore
                        ? colors.accent
                        : colors.linkText,
                    }}
                    onMouseEnter={(e) => {
                      if (!link.isShowMore) {
                        (e.target as HTMLElement).style.color =
                          colors.linkHover;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!link.isShowMore) {
                        (e.target as HTMLElement).style.color =
                          colors.linkText;
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Navigation Bar */}
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between gap-6 px-6 lg:px-12 py-6 max-w-7xl mx-auto border-t"
        style={{ borderColor: `${colors.headingText}10` }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {/* Social Links */}
        <div className="flex items-center gap-4">
          <span
            className="text-sm"
            style={{ color: colors.headingText }}
          >
            Follow us
          </span>
          <div className="flex items-center gap-2">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity duration-200 hover:opacity-70"
                style={{
                  backgroundColor: colors.socialBg,
                  color: colors.socialIcon,
                }}
                aria-label={social.platform}
              >
                <SocialIcon platform={social.platform} size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm transition-colors duration-200 hover:opacity-70"
              style={{ color: colors.headingText }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </motion.div>

      {/* Copyright Bar */}
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between gap-4 px-6 lg:px-12 py-6 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Small Logo */}
        <ZapierLogo size="small" colors={colors} />

        {/* Copyright and Legal */}
        <div className="flex items-center gap-6">
          <span
            className="text-sm"
            style={{ color: colors.copyrightText }}
          >
            &copy; {currentYear} {companyName}
          </span>
          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm transition-colors duration-200 hover:opacity-70"
                style={{ color: colors.headingText }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
