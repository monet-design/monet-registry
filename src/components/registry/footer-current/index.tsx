"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#FFFFFF",
    bottomBar: "#F9FAFB",
    border: "#E5E7EB",
    textPrimary: "#111827",
    textSecondary: "#6B7280",
    trustpilotGreen: "#00B67A",
    bbbBlue: "#21549F",
  },
  dark: {
    background: "#111827",
    bottomBar: "#1F2937",
    border: "#374151",
    textPrimary: "#F9FAFB",
    textSecondary: "#9CA3AF",
    trustpilotGreen: "#00B67A",
    bbbBlue: "#3B82F6",
  },
} as const;

/**
 * 텍스트 컨텐츠
 */
const CONTENT = {
  logo: "C",
  helpLinks: [
    { label: "Blog", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Legal Docs", href: "#" },
  ],
  companyLinks: [
    { label: "Our Story", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  trustpilot: {
    score: "4.5",
    reviews: "10,702",
  },
  copyright: "Copyright © 2016 - 2025 Current",
  legalLinks: [
    { label: "Sitemap", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "ESIGN Consent", href: "#" },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Instagram, Facebook, Linkedin } from "lucide-react";

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

// X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Current logo component
const CurrentLogo = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 40 40"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20c5.523 0 10.523-2.239 14.142-5.858l-7.071-7.071A10 10 0 1 1 20 10c2.761 0 5.261 1.119 7.071 2.929l7.071-7.071C30.523 2.239 25.523 0 20 0z" />
  </svg>
);

// Trustpilot star component
const TrustpilotStars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className="w-6 h-6 flex items-center justify-center"
        style={{ backgroundColor: "#00B67A" }}
      >
        <svg
          className="w-4 h-4 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
    ))}
  </div>
);

// BBB Badge component
const BBBBadge = () => (
  <div className="flex items-stretch rounded overflow-hidden border border-gray-200">
    <div className="flex items-center justify-center px-3 py-2 bg-white">
      <svg className="w-10 h-10" viewBox="0 0 50 50" fill="none">
        <path
          d="M10 15h8c3 0 5 2 5 4.5s-1.5 4-4 4.5v.1c3 .4 5 2.5 5 5.4 0 3-2.5 5.5-6 5.5H10V15zm8 7.5c1.5 0 2.5-1 2.5-2.3s-1-2.2-2.5-2.2h-4v4.5h4zm.5 9c1.8 0 3-1.2 3-2.8s-1.2-2.7-3-2.7h-4.5v5.5h4.5z"
          fill="#21549F"
        />
        <path
          d="M26 15h8c3 0 5 2 5 4.5s-1.5 4-4 4.5v.1c3 .4 5 2.5 5 5.4 0 3-2.5 5.5-6 5.5H26V15zm8 7.5c1.5 0 2.5-1 2.5-2.3s-1-2.2-2.5-2.2h-4v4.5h4zm.5 9c1.8 0 3-1.2 3-2.8s-1.2-2.7-3-2.7h-4.5v5.5h4.5z"
          fill="#21549F"
        />
        <path
          d="M42 15h8c3 0 5 2 5 4.5s-1.5 4-4 4.5v.1c3 .4 5 2.5 5 5.4 0 3-2.5 5.5-6 5.5H42V15zm8 7.5c1.5 0 2.5-1 2.5-2.3s-1-2.2-2.5-2.2h-4v4.5h4zm.5 9c1.8 0 3-1.2 3-2.8s-1.2-2.7-3-2.7h-4.5v5.5h4.5z"
          fill="#21549F"
        />
      </svg>
    </div>
    <div
      className="flex flex-col items-center justify-center px-3 py-2 text-white text-xs font-bold"
      style={{ backgroundColor: "#21549F" }}
    >
      <span>ACCREDITED</span>
      <span>BUSINESS</span>
    </div>
    <div className="flex items-center justify-center px-3 py-2 bg-white">
      <span className="text-2xl font-bold" style={{ color: "#21549F" }}>
        A
      </span>
    </div>
  </div>
);

interface FooterCurrentProps {
  mode?: "light" | "dark";
  logo?: React.ReactNode;
  helpLinks?: readonly { label: string; href: string }[];
  companyLinks?: readonly { label: string; href: string }[];
  trustpilotScore?: string;
  trustpilotReviews?: string;
  showTrustpilot?: boolean;
  showBBB?: boolean;
  copyright?: string;
  legalLinks?: readonly { label: string; href: string }[];
  socialLinks?: {
    instagram?: string;
    tiktok?: string;
    twitter?: string;
    facebook?: string;
    linkedin?: string;
  };
}

export default function FooterCurrent({
  mode = "light",
  logo,
  helpLinks = CONTENT.helpLinks,
  companyLinks = CONTENT.companyLinks,
  trustpilotScore = CONTENT.trustpilot.score,
  trustpilotReviews = CONTENT.trustpilot.reviews,
  showTrustpilot = true,
  showBBB = true,
  copyright = CONTENT.copyright,
  legalLinks = CONTENT.legalLinks,
  socialLinks = {
    instagram: "#",
    tiktok: "#",
    twitter: "#",
    facebook: "#",
    linkedin: "#",
  },
}: FooterCurrentProps) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <footer
      className="w-full"
      style={{ backgroundColor: colors.background }}
    >
      {/* Main Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 py-12 md:py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Logo */}
          <div className="md:col-span-3">
            {logo || (
              <CurrentLogo
                className="w-10 h-10"
                style={{ color: colors.textPrimary }}
              />
            )}
          </div>

          {/* Help Links */}
          <div className="md:col-span-2">
            <h3
              className="font-semibold text-base mb-4"
              style={{ color: colors.textPrimary }}
            >
              Help
            </h3>
            <ul className="space-y-3">
              {helpLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:opacity-70"
                    style={{ color: colors.textPrimary }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2">
            <h3
              className="font-semibold text-base mb-4"
              style={{ color: colors.textPrimary }}
            >
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:opacity-70"
                    style={{ color: colors.textPrimary }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-2" />

          {/* Trust Badges */}
          <div className="md:col-span-3 space-y-4">
            {showTrustpilot && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="p-4 rounded-lg"
                style={{ backgroundColor: isDark ? colors.bottomBar : "#F3F4F6" }}
              >
                <div className="flex items-center gap-1 mb-2">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="#00B67A"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span
                    className="font-bold text-lg"
                    style={{ color: colors.textPrimary }}
                  >
                    Trustpilot
                  </span>
                </div>
                <TrustpilotStars />
                <p
                  className="text-xs mt-2"
                  style={{ color: colors.textSecondary }}
                >
                  TrustScore {trustpilotScore} | {trustpilotReviews} reviews
                </p>
              </motion.div>
            )}

            {showBBB && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <BBBBadge />
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div
        className="border-t"
        style={{
          backgroundColor: colors.bottomBar,
          borderColor: colors.border,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright and Legal Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-sm">
              <span style={{ color: colors.textSecondary }}>{copyright}</span>
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="transition-colors hover:opacity-70"
                  style={{ color: colors.textSecondary }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  className="transition-colors hover:opacity-70"
                  style={{ color: colors.textPrimary }}
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {socialLinks.tiktok && (
                <a
                  href={socialLinks.tiktok}
                  className="transition-colors hover:opacity-70"
                  style={{ color: colors.textPrimary }}
                  aria-label="TikTok"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  className="transition-colors hover:opacity-70"
                  style={{ color: colors.textPrimary }}
                  aria-label="X (Twitter)"
                >
                  <XIcon className="w-5 h-5" />
                </a>
              )}
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  className="transition-colors hover:opacity-70"
                  style={{ color: colors.textPrimary }}
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  className="transition-colors hover:opacity-70"
                  style={{ color: colors.textPrimary }}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
