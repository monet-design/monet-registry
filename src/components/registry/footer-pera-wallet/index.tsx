"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F5F5F5",
    text: "#1A1A1A",
    textMuted: "#6B7280",
    border: "#E5E7EB",
    buttonBg: "#1A1A1A",
    buttonText: "#FFFFFF",
  },
  dark: {
    background: "#0F0F0F",
    text: "#FFFFFF",
    textMuted: "#9CA3AF",
    border: "#374151",
    buttonBg: "#FFFFFF",
    buttonText: "#1A1A1A",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

// Pera Logo Icon
const PeraLogoIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 4L4 10v12l12 6 12-6V10L16 4zm0 2.5l8.5 4.25L16 15l-8.5-4.25L16 6.5zm-9 6.25l8 4v7.5l-8-4v-7.5zm10 11.5v-7.5l8-4v7.5l-8 4z" />
  </svg>
);

// Apple App Store Icon
const AppleIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

// Google Play Icon
const GooglePlayIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z" />
  </svg>
);

// Discord Icon
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

// Reddit Icon
const RedditIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
  </svg>
);

// Twitter/X Icon
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

// Telegram Icon
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: "discord" | "reddit" | "x" | "telegram";
  href: string;
  label: string;
}

interface FooterPeraWalletProps {
  mode?: "light" | "dark";
  companyName?: string;
  logoIcon?: React.ReactNode;
  tagline?: string;
  columns?: FooterColumn[];
  legalLinks?: FooterLink[];
  socialLinks?: SocialLink[];
  copyrightYear?: string;
  copyrightCompany?: string;
  showAppStoreButtons?: boolean;
  appStoreUrl?: string;
  playStoreUrl?: string;
}

const defaultColumns: FooterColumn[] = [
  {
    title: "Products",
    links: [
      { label: "Pera iOS", href: "#", external: true },
      { label: "Pera Android", href: "#", external: true },
      { label: "Pera Web", href: "#", external: true },
      { label: "Pera Explorer", href: "#", external: true },
      { label: "Algorand ASA Verification", href: "#", external: true },
      { label: "Pera QR Code Generator", href: "#", external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Support Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Join Our Team", href: "#" },
      { label: "Media Kit", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Roadmap (Request Feature)", href: "#" },
      { label: "Bug Bounty", href: "#" },
    ],
  },
  {
    title: "Additional Resources",
    links: [
      { label: "Open Source Repos", href: "#" },
      { label: "Algorand Governance", href: "#" },
      { label: "Algorand Foundation", href: "#" },
      { label: "Algorand Developer Portal", href: "#" },
      { label: "Pera Technical & API Docs", href: "#" },
    ],
  },
];

const defaultLegalLinks: FooterLink[] = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const defaultSocialLinks: SocialLink[] = [
  { icon: "discord", href: "#", label: "Discord" },
  { icon: "reddit", href: "#", label: "Reddit" },
  { icon: "x", href: "#", label: "X" },
  { icon: "telegram", href: "#", label: "Telegram" },
];

export default function FooterPeraWallet({
  mode = "light",
  companyName = "pera",
  logoIcon,
  tagline = "Your Algorand journey starts here",
  columns = defaultColumns,
  legalLinks = defaultLegalLinks,
  socialLinks = defaultSocialLinks,
  copyrightYear = "2023",
  copyrightCompany = "Pera Wallet LDA. All rights reserved",
  showAppStoreButtons = true,
  appStoreUrl = "#",
  playStoreUrl = "#",
}: FooterPeraWalletProps) {
  const colors = COLORS[mode];

  const renderSocialIcon = (icon: SocialLink["icon"]) => {
    switch (icon) {
      case "discord":
        return <DiscordIcon className="w-5 h-5" />;
      case "reddit":
        return <RedditIcon className="w-5 h-5" />;
      case "x":
        return <XIcon className="w-5 h-5" />;
      case "telegram":
        return <TelegramIcon className="w-5 h-5" />;
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
        {/* Header Section - Logo and App Store Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-12"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            {logoIcon || (
              <PeraLogoIcon
                className="w-7 h-7"
              />
            )}
            <span
              className="text-xl font-bold"
              style={{ color: colors.text }}
            >
              {companyName}
            </span>
          </div>

          {/* Tagline and App Store Buttons */}
          {showAppStoreButtons && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span
                className="text-base"
                style={{ color: colors.text }}
              >
                {tagline}
              </span>
              <div className="flex items-center gap-3">
                {/* App Store Button */}
                <a
                  href={appStoreUrl}
                  className="flex items-center justify-center w-11 h-11 rounded-lg transition-opacity hover:opacity-80"
                  style={{ backgroundColor: colors.buttonBg, color: colors.buttonText }}
                  aria-label="Download on App Store"
                >
                  <AppleIcon className="w-6 h-6" />
                </a>
                {/* Play Store Button */}
                <a
                  href={playStoreUrl}
                  className="flex items-center justify-center w-11 h-11 rounded-lg transition-opacity hover:opacity-80"
                  style={{ backgroundColor: colors.buttonBg, color: colors.buttonText }}
                  aria-label="Get it on Google Play"
                >
                  <GooglePlayIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          )}
        </motion.div>

        {/* Navigation Columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 py-12"
        >
          {columns.map((column, columnIndex) => (
            <div
              key={column.title}
              className="flex flex-col gap-4"
            >
              <h3
                className="text-sm font-semibold"
                style={{ color: colors.text }}
              >
                {column.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm flex items-center gap-1 transition-colors hover:opacity-70"
                      style={{ color: colors.textMuted }}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                      {link.external && (
                        <ExternalLink className="w-3 h-3" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Legal + Social Column */}
          <div className="flex flex-col gap-8">
            {/* Legal Links */}
            <div className="flex flex-col gap-4">
              <h3
                className="text-sm font-semibold"
                style={{ color: colors.text }}
              >
                Legal
              </h3>
              <ul className="flex flex-col gap-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:opacity-70"
                      style={{ color: colors.textMuted }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-4">
              <h3
                className="text-sm font-semibold"
                style={{ color: colors.text }}
              >
                Social
              </h3>
              <div className="flex items-center gap-4">
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
            </div>
          </div>
        </motion.div>

        {/* Bottom Section - Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-8"
          style={{ borderTop: `1px solid ${colors.border}` }}
        >
          <p
            className="text-sm"
            style={{ color: colors.textMuted }}
          >
            &copy; {copyrightYear} {copyrightCompany}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
