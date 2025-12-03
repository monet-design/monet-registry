"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (GitHub 다크 테마)
 */
const COLORS = {
  light: {
    background: "#ffffff",
    text: "#24292f",
    textSecondary: "#57606a",
    textMuted: "#6e7781",
    border: "#d0d7de",
  },
  dark: {
    background: "#0d1117",
    text: "#f0f6fc",
    textSecondary: "#8b949e",
    textMuted: "#6e7681",
    border: "#30363d",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Linkedin, Instagram, Youtube, Github } from "lucide-react";

// Custom X (Twitter) icon since lucide-react uses the old Twitter bird
function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Custom TikTok icon
function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  );
}

// Custom Twitch icon
function TwitchIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
    </svg>
  );
}

// GitHub Logo Component
function GitHubLogo({ color }: { color: string }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        height="32"
        viewBox="0 0 45 44"
        fill="none"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.477.927C10.485.927.76 10.65.76 22.647c0 9.596 6.223 17.736 14.853 20.608 1.087.2 1.483-.47 1.483-1.047 0-.516-.019-1.882-.03-3.693-6.04 1.312-7.315-2.912-7.315-2.912-.988-2.51-2.412-3.178-2.412-3.178-1.972-1.348.149-1.32.149-1.32 2.18.154 3.327 2.24 3.327 2.24 1.937 3.318 5.084 2.36 6.321 1.803.197-1.403.759-2.36 1.38-2.903-4.823-.548-9.894-2.412-9.894-10.734 0-2.372.847-4.31 2.236-5.828-.224-.55-.969-2.759.214-5.748 0 0 1.822-.584 5.972 2.226 1.732-.482 3.59-.723 5.437-.732 1.845.009 3.703.25 5.437.732 4.147-2.81 5.967-2.226 5.967-2.226 1.185 2.99.44 5.198.217 5.748 1.392 1.519 2.232 3.457 2.232 5.828 0 8.344-5.078 10.18-9.916 10.717.779.672 1.473 1.998 1.473 4.027 0 2.907-.027 5.25-.027 5.965 0 .58.392 1.256 1.492 1.044 8.623-2.876 14.842-11.012 14.842-20.605 0-11.997-9.726-21.72-21.723-21.72"
          fill={color}
        />
      </svg>
      <span className="text-2xl font-semibold" style={{ color }}>
        GitHub
      </span>
    </div>
  );
}

// Types
interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface LegalLink {
  label: string;
  href: string;
}

interface GithubFooterProps {
  mode?: "light" | "dark";
  newsletterTitle?: string;
  newsletterDescription?: string;
  subscribeButtonText?: string;
  columns?: FooterColumn[];
  legalLinks?: LegalLink[];
  socialLinks?: SocialLink[];
  copyrightText?: string;
  onSubscribe?: () => void;
}

// Default data
const defaultColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Enterprise", href: "/enterprise" },
      { label: "Copilot", href: "/copilot" },
      { label: "Security", href: "/security" },
      { label: "Pricing", href: "/pricing" },
      { label: "Team", href: "/team" },
      { label: "Resources", href: "/resources" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Compare GitHub", href: "/compare" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Developer API", href: "/developers" },
      { label: "Partners", href: "/partners" },
      { label: "Education", href: "/education" },
      { label: "GitHub CLI", href: "/cli" },
      { label: "GitHub Desktop", href: "/desktop" },
      { label: "GitHub Mobile", href: "/mobile" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "Community Forum", href: "/community" },
      { label: "Professional Services", href: "/services" },
      { label: "Premium Support", href: "/premium-support" },
      { label: "Skills", href: "/skills" },
      { label: "Status", href: "/status" },
      { label: "Contact GitHub", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Why GitHub", href: "/why" },
      { label: "Customer stories", href: "/customers" },
      { label: "Blog", href: "/blog" },
      { label: "The ReadME Project", href: "/readme" },
      { label: "Careers", href: "/careers" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Inclusion", href: "/inclusion" },
      { label: "Social Impact", href: "/social-impact" },
      { label: "Shop", href: "/shop" },
    ],
  },
];

const defaultLegalLinks: LegalLink[] = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy (Updated 02/2024)", href: "/privacy" },
  { label: "Sitemap", href: "/sitemap" },
  { label: "What is Git?", href: "/git-guides" },
  { label: "Manage cookies", href: "#" },
  { label: "Do not share my personal information", href: "#" },
];

function getDefaultSocialLinks(iconColor: string): SocialLink[] {
  return [
    {
      icon: <Linkedin size={20} color={iconColor} />,
      href: "https://linkedin.com/company/github",
      label: "LinkedIn",
    },
    {
      icon: <Instagram size={20} color={iconColor} />,
      href: "https://instagram.com/github",
      label: "Instagram",
    },
    {
      icon: <Youtube size={20} color={iconColor} />,
      href: "https://youtube.com/github",
      label: "YouTube",
    },
    {
      icon: <XIcon size={20} />,
      href: "https://x.com/github",
      label: "X (Twitter)",
    },
    {
      icon: <TikTokIcon size={20} />,
      href: "https://tiktok.com/@github",
      label: "TikTok",
    },
    {
      icon: <TwitchIcon size={20} />,
      href: "https://twitch.tv/github",
      label: "Twitch",
    },
    {
      icon: <Github size={20} color={iconColor} />,
      href: "https://github.com/github",
      label: "GitHub",
    },
  ];
}

export default function GithubFooter({
  mode = "dark",
  newsletterTitle = "Subscribe to our developer newsletter",
  newsletterDescription = "Get tips, technical guides, and best practices. Twice a month.\nRight in your inbox.",
  subscribeButtonText = "Subscribe",
  columns = defaultColumns,
  legalLinks = defaultLegalLinks,
  socialLinks,
  copyrightText = `© ${new Date().getFullYear()} GitHub, Inc.`,
  onSubscribe,
}: GithubFooterProps) {
  const colors = COLORS[mode];
  const resolvedSocialLinks = socialLinks || getDefaultSocialLinks(colors.textSecondary);

  return (
    <footer
      className="relative w-full px-6 py-10 md:px-12 lg:px-16"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Section - Logo & Newsletter */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* GitHub Logo */}
            <div className="mb-6">
              <GitHubLogo color={colors.text} />
            </div>

            {/* Newsletter Section */}
            <div className="max-w-xs">
              <h3
                className="mb-2 text-base font-semibold"
                style={{ color: colors.text }}
              >
                {newsletterTitle}
              </h3>
              <p
                className="mb-4 text-sm leading-relaxed whitespace-pre-line"
                style={{ color: colors.textSecondary }}
              >
                {newsletterDescription}
              </p>
              <button
                onClick={onSubscribe}
                className="rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200"
                style={{
                  color: colors.text,
                  border: `1px solid ${colors.border}`,
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {subscribeButtonText}
              </button>
            </div>
          </motion.div>

          {/* Right Section - Link Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {columns.map((column, columnIndex) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (columnIndex + 1) }}
              >
                <h4
                  className="mb-4 text-xs font-semibold tracking-wider"
                  style={{ color: colors.textSecondary }}
                >
                  {column.title}
                </h4>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors duration-200"
                        style={{ color: colors.textSecondary }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = colors.text;
                          e.currentTarget.style.textDecoration = "underline";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = colors.textSecondary;
                          e.currentTarget.style.textDecoration = "none";
                        }}
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

        {/* Divider */}
        <div
          className="my-8 h-px w-full"
          style={{ backgroundColor: colors.border }}
        />

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span
              className="text-xs"
              style={{ color: colors.textSecondary }}
            >
              {copyrightText}
            </span>
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-xs transition-colors duration-200"
                style={{ color: colors.textSecondary }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.text;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.textSecondary;
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {resolvedSocialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="transition-opacity duration-200 hover:opacity-70"
                style={{ color: colors.textSecondary }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
