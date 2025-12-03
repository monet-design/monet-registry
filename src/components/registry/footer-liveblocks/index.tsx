"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#ffffff",
    text: "#1a1a1a",
    textSecondary: "#6b7280",
    statusGreen: "#22C55E",
  },
  dark: {
    background: "#0c0c0c",
    text: "#ffffff",
    textSecondary: "#7b7b7b",
    statusGreen: "#22C55E",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Github, Linkedin, Youtube } from "lucide-react";

// Custom X (Twitter) icon
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

// Custom Discord icon
function DiscordIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

// Liveblocks Logo Component
function LiveblocksLogo({ color }: { color: string }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 4h6v6H4V4z"
          fill={color}
        />
        <path
          d="M14 4h6v6h-6V4z"
          fill={color}
          opacity="0.6"
        />
        <path
          d="M4 14h6v6H4v-6z"
          fill={color}
          opacity="0.6"
        />
        <path
          d="M14 14h6v6h-6v-6z"
          fill={color}
          opacity="0.3"
        />
      </svg>
      <span className="text-lg font-semibold" style={{ color }}>
        liveblocks
      </span>
    </div>
  );
}

// Types
interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterLiveblocksProps {
  mode?: "light" | "dark";
  columns?: FooterSection[][];
  companyLinks?: FooterLink[];
  socialLinks?: SocialLink[];
  statusText?: string;
  statusOperational?: boolean;
  copyrightText?: string;
  copyrightYear?: number;
}

// Default data
const defaultColumns: FooterSection[][] = [
  // First column - Products, Platform, Solutions
  [
    {
      title: "Products",
      links: [
        { label: "Comments", href: "/products/comments" },
        { label: "Notifications", href: "/products/notifications" },
        { label: "Text Editor", href: "/products/text-editor" },
        { label: "Realtime APIs", href: "/products/realtime-apis" },
      ],
    },
    {
      title: "Platform",
      links: [
        { label: "Dashboard", href: "/dashboard" },
        { label: "Infrastructure", href: "/infrastructure" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Next.js", href: "/solutions/nextjs" },
        { label: "React", href: "/solutions/react" },
        { label: "JavaScript", href: "/solutions/javascript" },
        { label: "Redux", href: "/solutions/redux" },
        { label: "Zustand", href: "/solutions/zustand" },
        { label: "Yjs", href: "/solutions/yjs" },
        { label: "Tiptap", href: "/solutions/tiptap" },
        { label: "Slate", href: "/solutions/slate" },
        { label: "Lexical", href: "/solutions/lexical" },
        { label: "Quill", href: "/solutions/quill" },
        { label: "Monaco", href: "/solutions/monaco" },
        { label: "CodeMirror", href: "/solutions/codemirror" },
      ],
    },
  ],
  // Second column - Resources, Use cases
  [
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "Examples", href: "/examples" },
        { label: "React components", href: "/docs/components" },
        { label: "DevTools", href: "/devtools" },
        { label: "Next.js Starter Kit", href: "/starter-kit" },
        { label: "Tutorial", href: "/tutorial" },
        { label: "Guides", href: "/guides" },
        { label: "Release notes", href: "/changelog" },
      ],
    },
    {
      title: "Use cases",
      links: [
        { label: "Multiplayer forms", href: "/use-cases/forms" },
        { label: "Multiplayer text editor", href: "/use-cases/text-editor" },
        { label: "Multiplayer creative tools", href: "/use-cases/creative-tools" },
        { label: "Multiplayer whiteboard", href: "/use-cases/whiteboard" },
        { label: "Comments", href: "/use-cases/comments" },
        { label: "Sharing and permissions", href: "/use-cases/sharing" },
        { label: "Document browsing", href: "/use-cases/document-browsing" },
      ],
    },
  ],
];

const defaultCompanyLinks: FooterLink[] = [
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Customers", href: "/customers" },
  { label: "Changelog", href: "/changelog" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact us", href: "/contact" },
  { label: "Terms of service", href: "/terms" },
  { label: "Privacy policy", href: "/privacy" },
  { label: "Security", href: "/security" },
];

function getDefaultSocialLinks(iconColor: string): SocialLink[] {
  return [
    {
      icon: <Github size={18} color={iconColor} />,
      href: "https://github.com/liveblocks",
      label: "GitHub",
    },
    {
      icon: <DiscordIcon size={18} />,
      href: "https://discord.gg/liveblocks",
      label: "Discord",
    },
    {
      icon: <XIcon size={18} />,
      href: "https://x.com/liveblocks",
      label: "X (Twitter)",
    },
    {
      icon: <Linkedin size={18} color={iconColor} />,
      href: "https://linkedin.com/company/liveblocks",
      label: "LinkedIn",
    },
    {
      icon: <Youtube size={18} color={iconColor} />,
      href: "https://youtube.com/@liveblocks",
      label: "YouTube",
    },
  ];
}

export default function FooterLiveblocks({
  mode = "dark",
  columns = defaultColumns,
  companyLinks = defaultCompanyLinks,
  socialLinks,
  statusText = "All systems operational",
  statusOperational = true,
  copyrightText = "Liveblocks Inc.",
  copyrightYear = new Date().getFullYear(),
}: FooterLiveblocksProps) {
  const colors = COLORS[mode];
  const resolvedSocialLinks = socialLinks || getDefaultSocialLinks(colors.textSecondary);

  return (
    <footer
      className="relative w-full px-6 py-12 md:px-12 lg:px-16"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* First Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {columns[0]?.map((section, sectionIndex) => (
              <div key={section.title} className={sectionIndex > 0 ? "mt-8" : ""}>
                <h4
                  className="mb-3 text-sm font-semibold"
                  style={{ color: colors.text }}
                >
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors duration-200"
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
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Second Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {columns[1]?.map((section, sectionIndex) => (
              <div key={section.title} className={sectionIndex > 0 ? "mt-8" : ""}>
                <h4
                  className="mb-3 text-sm font-semibold"
                  style={{ color: colors.text }}
                >
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors duration-200"
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
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Third Column - Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4
              className="mb-3 text-sm font-semibold"
              style={{ color: colors.text }}
            >
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
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
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Fourth Column - Logo, Status, Social */}
          <motion.div
            className="flex flex-col items-start lg:items-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Logo */}
            <LiveblocksLogo color={colors.text} />

            {/* Status Indicator */}
            <div className="mt-3 flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: statusOperational
                    ? colors.statusGreen
                    : "#EF4444",
                }}
              />
              <span
                className="text-sm"
                style={{
                  color: statusOperational
                    ? colors.statusGreen
                    : "#EF4444",
                }}
              >
                {statusText}
              </span>
            </div>

            {/* Social Links */}
            <div className="mt-4 flex items-center gap-3">
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

            {/* Copyright - positioned at bottom right */}
            <div className="mt-auto pt-32 lg:pt-40">
              <span
                className="text-sm"
                style={{ color: colors.textSecondary }}
              >
                &copy; {copyrightYear} {copyrightText}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
