"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F9F8F9",
    text: "#1A1A1A",
    textMuted: "#6B7280",
    textSecondary: "#9CA3AF",
    statusGreen: "#22C55E",
    border: "#E5E7EB",
  },
  dark: {
    background: "#0F0F0F",
    text: "#FFFFFF",
    textMuted: "#9CA3AF",
    textSecondary: "#6B7280",
    statusGreen: "#22C55E",
    border: "#374151",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Linkedin, Github } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: "linkedin" | "x" | "github";
  href: string;
  label: string;
}

interface FooterAntimetalProps {
  mode?: "light" | "dark";
  companyName?: string;
  logoIcon?: React.ReactNode;
  address?: {
    line1: string;
    line2: string;
  };
  columns?: FooterColumn[];
  socialLinks?: SocialLink[];
  badges?: {
    awsMarketplace?: boolean;
    awsPartner?: boolean;
    awsQualified?: boolean;
  };
  statusMessage?: string;
  statusOperational?: boolean;
  copyrightYear?: string;
  copyrightCompany?: string;
  legalLinks?: FooterLink[];
}

// X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// AWS Logo component
const AWSLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 80 48"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M22.5 24.7l-2.8-12.5h-2.2l-2.8 12.5h-.1l-2.4-12.5H10l3.4 15h2.6l2.7-11.8h.1l2.7 11.8h2.6l3.4-15h-2.2l-2.3 12.5h-.1z" />
    <path d="M28.3 27.2c1.8 0 3.1-.8 3.9-2.1v1.9h2v-9.8c0-2.7-1.6-4.3-4.4-4.3-2.5 0-4.4 1.3-4.6 3.5h2.1c.2-1.2 1.1-1.8 2.4-1.8 1.5 0 2.4.8 2.4 2.2v1.1l-3.1.3c-2.6.3-4.2 1.4-4.2 3.4 0 2.2 1.6 3.6 3.5 3.6zm.5-1.7c-1.2 0-2-.7-2-1.7 0-1.1.8-1.7 2.4-1.9l2.8-.3v1c0 1.7-1.4 2.9-3.2 2.9z" />
    <path d="M41.8 13c-1.6 0-2.9.7-3.6 2v-1.8h-2.1v15.6h2.1v-5.9c.7 1.2 2 1.9 3.5 1.9 2.8 0 4.7-2.2 4.7-5.9s-1.9-6-4.6-6zm-.5 10.2c-1.7 0-3-1.4-3-3.4v-1.6c0-2 1.3-3.4 3-3.4 1.9 0 3 1.5 3 4.2 0 2.8-1.1 4.2-3 4.2z" />
  </svg>
);

// Antimetal Logo Icon
const AntimetalIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const defaultColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Core", href: "#" },
      { label: "Enterprise", href: "#" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

const defaultSocialLinks: SocialLink[] = [
  { icon: "linkedin", href: "#", label: "LinkedIn" },
  { icon: "x", href: "#", label: "X" },
  { icon: "github", href: "#", label: "GitHub" },
];

const defaultLegalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export default function FooterAntimetal({
  mode = "light",
  companyName = "Antimetal",
  logoIcon,
  address = {
    line1: "135 Duane St",
    line2: "New York, NY 10013",
  },
  columns = defaultColumns,
  socialLinks = defaultSocialLinks,
  badges = {
    awsMarketplace: true,
    awsPartner: true,
    awsQualified: true,
  },
  statusMessage = "All systems operational",
  statusOperational = true,
  copyrightYear = "2024",
  copyrightCompany = "Antimetal Inc.",
  legalLinks = defaultLegalLinks,
}: FooterAntimetalProps) {
  const colors = COLORS[mode];

  const renderSocialIcon = (icon: SocialLink["icon"]) => {
    switch (icon) {
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "x":
        return <XIcon className="w-5 h-5" />;
      case "github":
        return <Github className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <footer
      className="relative w-full py-12 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-8"
        >
          {/* Left Section - Logo, Address, Badges */}
          <div className="flex flex-col gap-8 lg:w-[340px]">
            {/* Logo */}
            <div className="flex items-center gap-2">
              {logoIcon || <AntimetalIcon className="w-6 h-6" style={{ color: colors.text }} />}
              <span
                className="text-xl font-bold"
                style={{ color: colors.text }}
              >
                {companyName}
              </span>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-1">
              <p
                className="text-sm"
                style={{ color: colors.textMuted }}
              >
                {address.line1}
              </p>
              <p
                className="text-sm"
                style={{ color: colors.textMuted }}
              >
                {address.line2}
              </p>
            </div>

            {/* AWS Badges */}
            {(badges.awsMarketplace || badges.awsPartner || badges.awsQualified) && (
              <div className="flex items-center gap-4 flex-wrap">
                {badges.awsMarketplace && (
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[13px] font-bold tracking-tight"
                      style={{ color: colors.text }}
                    >
                      aws
                    </span>
                    <div className="flex flex-col">
                      <span
                        className="text-[10px] leading-tight"
                        style={{ color: colors.textMuted }}
                      >
                        Available in
                      </span>
                      <span
                        className="text-[10px] font-semibold leading-tight"
                        style={{ color: colors.text }}
                      >
                        AWS Marketplace
                      </span>
                    </div>
                  </div>
                )}
                {badges.awsPartner && (
                  <div
                    className="w-10 h-10 rounded-md flex items-center justify-center text-[8px] font-bold"
                    style={{
                      backgroundColor: mode === "light" ? "#1A365D" : "#2D3748",
                      color: "#FFFFFF",
                    }}
                  >
                    <div className="text-center leading-tight">
                      <div>AWS</div>
                      <div className="text-[6px] font-normal">PARTNER</div>
                    </div>
                  </div>
                )}
                {badges.awsQualified && (
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center border-2"
                    style={{
                      borderColor: "#3B82F6",
                      color: "#3B82F6",
                    }}
                  >
                    <div className="text-center leading-tight text-[6px] font-semibold">
                      <div>AWS</div>
                      <div>ISV</div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Navigation Columns */}
          <div className="flex flex-wrap gap-8 lg:gap-16 flex-1">
            {columns.map((column, index) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col gap-4 min-w-[120px]"
              >
                <h3
                  className="text-sm font-medium"
                  style={{ color: colors.textMuted }}
                >
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors hover:opacity-70"
                        style={{ color: colors.text }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: columns.length * 0.1 }}
              className="flex flex-col gap-4 min-w-[120px]"
            >
              <h3
                className="text-sm font-medium"
                style={{ color: colors.textMuted }}
              >
                Social
              </h3>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="transition-colors hover:opacity-70"
                    style={{ color: colors.text }}
                  >
                    {renderSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-16 pt-8"
          style={{ borderTop: `1px solid ${colors.border}` }}
        >
          {/* Status */}
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: statusOperational
                  ? colors.statusGreen
                  : "#EF4444",
              }}
            />
            <span
              className="text-sm"
              style={{ color: colors.textMuted }}
            >
              {statusMessage}
            </span>
          </div>

          {/* Copyright and Legal Links */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <span
              className="text-sm"
              style={{ color: colors.textSecondary }}
            >
              &copy; {copyrightYear} {copyrightCompany}
            </span>
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm transition-colors hover:opacity-70"
                style={{ color: colors.textSecondary }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
