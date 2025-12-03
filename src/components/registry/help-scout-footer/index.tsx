"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#f8fafc",
    text: "#1e293b",
    textMuted: "#64748b",
    textLight: "#94a3b8",
    accent: "#22c55e",
  },
  dark: {
    background: "#141e27",
    text: "#dde7ef",
    textMuted: "#99a3ac",
    textLight: "#6b7a87",
    accent: "#22c55e",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

// Types
interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
  status?: {
    text: string;
    color: string;
  };
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface CertificationBadge {
  name: string;
  label?: string;
  image?: React.ReactNode;
}

interface HelpScoutFooterProps {
  mode?: "light" | "dark";
  columns?: FooterColumn[];
  socialLinks?: SocialLink[];
  certifications?: CertificationBadge[];
  companyName?: string;
  year?: number;
  taglinePrefix?: string;
  taglineBold?: string;
}

// Default data
const defaultColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Product Overview", href: "/product" },
      { label: "Shared Inbox", href: "/shared-inbox" },
      { label: "Knowledge Base", href: "/knowledge-base" },
      { label: "Live Chat", href: "/live-chat" },
      { label: "Proactive Messaging", href: "/proactive-messaging" },
      { label: "Omnichannel Support", href: "/omnichannel" },
      { label: "Automation", href: "/automation" },
      { label: "Mobile", href: "/mobile" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "Zendesk", href: "/compare/zendesk" },
      { label: "Intercom", href: "/compare/intercom" },
      { label: "Freshdesk", href: "/compare/freshdesk" },
      { label: "Gorgias", href: "/compare/gorgias" },
      { label: "Front", href: "/compare/front" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Terms & Privacy", href: "/terms" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Do Not Sell", href: "/do-not-sell" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Developers", href: "/developers", external: true },
      { label: "Help Docs", href: "/docs", external: true },
      { label: "Contact", href: "/contact" },
      {
        label: "Status",
        href: "/status",
        status: { text: "99.99%", color: "#22c55e" },
      },
    ],
  },
];

// Social Icons
const XIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// B Corp Badge Component
const BCorpBadge = ({ mode }: { mode: "light" | "dark" }) => (
  <div className="flex flex-col items-center">
    <div
      className="flex h-14 w-14 items-center justify-center rounded-full border-2"
      style={{
        borderColor: mode === "dark" ? "#99a3ac" : "#64748b",
        color: mode === "dark" ? "#dde7ef" : "#1e293b",
      }}
    >
      <span className="text-lg font-bold">B</span>
    </div>
    <span
      className="mt-1 text-[10px] uppercase tracking-wider"
      style={{ color: mode === "dark" ? "#99a3ac" : "#64748b" }}
    >
      Certified
    </span>
    <span
      className="text-[10px] uppercase tracking-wider"
      style={{ color: mode === "dark" ? "#99a3ac" : "#64748b" }}
    >
      Corporation
    </span>
  </div>
);

// Pledge 1% Badge Component
const Pledge1Badge = ({ mode }: { mode: "light" | "dark" }) => (
  <div className="flex flex-col items-center">
    <span
      className="text-[10px] uppercase tracking-wider"
      style={{ color: mode === "dark" ? "#99a3ac" : "#64748b" }}
    >
      Pledge
    </span>
    <span
      className="text-2xl font-bold"
      style={{ color: mode === "dark" ? "#dde7ef" : "#1e293b" }}
    >
      1%
    </span>
  </div>
);

const defaultSocialLinks: SocialLink[] = [
  { name: "X", href: "https://x.com/helpscout", icon: <XIcon /> },
  {
    name: "Facebook",
    href: "https://facebook.com/helpscout",
    icon: <FacebookIcon />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/helpscout",
    icon: <LinkedInIcon />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/helpscout",
    icon: <InstagramIcon />,
  },
];

// Main Component
export default function HelpScoutFooter({
  mode = "dark",
  columns = defaultColumns,
  socialLinks = defaultSocialLinks,
  companyName = "Help Scout",
  year = 2023,
  taglinePrefix = "The all-in-one platform for",
  taglineBold = "delightful conversations",
}: HelpScoutFooterProps) {
  const colors = COLORS[mode];

  return (
    <footer
      className="relative w-full px-8 py-12 md:px-12 lg:px-16"
      style={{ backgroundColor: colors.background }}
    >
      {/* Google Fonts for Tagline */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
        `}
      </style>

      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Left Side - Link Columns */}
          <div className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-4">
            {columns.map((column, columnIndex) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
              >
                <h3
                  className="mb-4 text-sm font-semibold"
                  style={{ color: colors.text }}
                >
                  {column.title}
                </h3>
                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="group inline-flex items-center gap-1 text-sm transition-colors duration-200 hover:opacity-80"
                        style={{ color: colors.textMuted }}
                      >
                        {link.label}
                        {link.external && (
                          <ExternalLink
                            size={11}
                            className="opacity-60"
                            style={{ color: colors.textMuted }}
                          />
                        )}
                        {link.status && (
                          <span className="ml-1 inline-flex items-center gap-1">
                            <span
                              className="inline-block h-1.5 w-1.5 rounded-full"
                              style={{ backgroundColor: link.status.color }}
                            />
                            <span
                              className="text-xs"
                              style={{ color: link.status.color }}
                            >
                              {link.status.text}
                            </span>
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Social, Badges, Copyright */}
          <motion.div
            className="flex flex-col items-start gap-6 lg:items-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="transition-opacity duration-200 hover:opacity-70"
                  style={{ color: colors.textMuted }}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Certification Badges */}
            <div className="flex items-center gap-6">
              <BCorpBadge mode={mode} />
              <Pledge1Badge mode={mode} />
            </div>

            {/* Copyright */}
            <p className="text-sm" style={{ color: colors.textMuted }}>
              &copy; {year} {companyName}
            </p>
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.div
          className="mt-20 flex justify-center md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p
            className="text-center text-xl md:text-2xl"
            style={{
              fontFamily: "'Instrument Serif', serif",
              color: colors.text,
            }}
          >
            <span className="italic">{taglinePrefix} </span>
            <span className="font-bold italic">{taglineBold}</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
