"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#0D0D12",
  textPrimary: "#FFFFFF",
  textSecondary: "#9CA3AF",
  textMuted: "#6B7280",
  accent: "#8B5CF6",
  cardBackground: "#E8E8ED",
  cardText: "#1A1A1A",
  cardTextSecondary: "#4B5563",
  border: "rgba(255, 255, 255, 0.1)",
  ctaButtonBorder: "rgba(255, 255, 255, 0.3)",
} as const;

/**
 * 기본 콘텐츠 데이터
 */
const DEFAULT_CONTENT = {
  logo: {
    text: "wope",
    href: "/",
  },
  tagline: "Experience the next generation\nof SEO analytics.",
  ctaButton: {
    label: "Unlimited trial for 14 days",
    href: "/trial",
  },
  platformLinks: {
    title: "Platform",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Wiki", href: "/wiki" },
      { label: "Community", href: "/community" },
      { label: "Download", href: "/download" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  legalLinks: {
    title: "Legals",
    links: [
      { label: "Terms of Services", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  contactCard: {
    title: "Get in touch",
    address: {
      line1: "651 N Broad St",
      line2: "Suite 201",
      line3: "Middletown, Delaware 19709",
      line4: "United States",
    },
  },
  copyright: {
    year: "2023",
    company: "Wope LLC",
    group: "Group Company",
  },
  socialLinks: [
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
    { label: "Discord", href: "https://discord.com", icon: "discord" },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Instagram, Youtube, Linkedin, Twitter, MapPin } from "lucide-react";

interface LinkItem {
  label: string;
  href: string;
}

interface LinkSection {
  title: string;
  links: LinkItem[];
}

interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

interface FooterWopeProps {
  logo?: {
    text?: string;
    href?: string;
  };
  tagline?: string;
  ctaButton?: {
    label?: string;
    href?: string;
  };
  platformLinks?: LinkSection;
  legalLinks?: LinkSection;
  contactCard?: {
    title?: string;
    address?: {
      line1?: string;
      line2?: string;
      line3?: string;
      line4?: string;
    };
  };
  copyright?: {
    year?: string;
    company?: string;
    group?: string;
  };
  socialLinks?: SocialLink[];
}

function WopeLogo({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="12" r="10" stroke={COLORS.accent} strokeWidth="2" />
      <path
        d="M8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12"
        stroke={COLORS.accent}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="2" fill={COLORS.accent} />
    </svg>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function GroupIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 2L4 7L12 12L20 7L12 2Z"
        fill="url(#groupGradient)"
      />
      <path
        d="M4 17L12 22L20 17"
        stroke="url(#groupGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12L12 17L20 12"
        stroke="url(#groupGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="groupGradient" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EF4444" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SocialIcon({ icon, className }: { icon: string; className?: string }) {
  switch (icon) {
    case "instagram":
      return <Instagram className={className} size={18} />;
    case "youtube":
      return <Youtube className={className} size={18} />;
    case "linkedin":
      return <Linkedin className={className} size={18} />;
    case "twitter":
      return <Twitter className={className} size={18} />;
    case "discord":
      return <DiscordIcon className={className} />;
    default:
      return null;
  }
}

export default function FooterWope({
  logo = DEFAULT_CONTENT.logo,
  tagline = DEFAULT_CONTENT.tagline,
  ctaButton = DEFAULT_CONTENT.ctaButton,
  platformLinks = DEFAULT_CONTENT.platformLinks as unknown as LinkSection,
  legalLinks = DEFAULT_CONTENT.legalLinks as unknown as LinkSection,
  contactCard = DEFAULT_CONTENT.contactCard,
  copyright = DEFAULT_CONTENT.copyright,
  socialLinks = DEFAULT_CONTENT.socialLinks as unknown as SocialLink[],
}: FooterWopeProps) {
  return (
    <footer
      className="w-full py-16 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: COLORS.background }}
    >
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12">
          {/* Left Column - Logo, Tagline, CTA */}
          <div className="md:col-span-4 lg:col-span-3 space-y-6">
            <a href={logo.href} className="inline-flex items-center gap-2">
              <WopeLogo />
              <span
                className="text-lg font-semibold"
                style={{ color: COLORS.textPrimary }}
              >
                {logo.text}
              </span>
            </a>

            <p
              className="text-sm leading-relaxed whitespace-pre-line"
              style={{ color: COLORS.textSecondary }}
            >
              {tagline}
            </p>

            <a
              href={ctaButton.href}
              className="inline-block px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:bg-white/5"
              style={{
                color: COLORS.textPrimary,
                border: `1px solid ${COLORS.ctaButtonBorder}`,
              }}
            >
              {ctaButton.label}
            </a>
          </div>

          {/* Platform Links */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3
              className="text-sm font-medium mb-4"
              style={{ color: COLORS.textPrimary }}
            >
              {platformLinks.title}
            </h3>
            <ul className="space-y-3">
              {platformLinks.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:opacity-80 transition-opacity"
                    style={{ color: COLORS.textSecondary }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3
              className="text-sm font-medium mb-4"
              style={{ color: COLORS.textPrimary }}
            >
              {legalLinks.title}
            </h3>
            <ul className="space-y-3">
              {legalLinks.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:opacity-80 transition-opacity"
                    style={{ color: COLORS.textSecondary }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Card */}
          <div className="md:col-span-4 lg:col-span-5">
            <div
              className="rounded-2xl p-5 relative overflow-hidden"
              style={{ backgroundColor: COLORS.cardBackground }}
            >
              <div className="flex justify-between items-start">
                <div className="space-y-3">
                  <h3
                    className="text-base font-semibold"
                    style={{ color: COLORS.cardText }}
                  >
                    {contactCard.title}
                  </h3>
                  <div
                    className="text-sm leading-relaxed space-y-0.5"
                    style={{ color: COLORS.cardTextSecondary }}
                  >
                    <p>{contactCard.address?.line1}</p>
                    <p>{contactCard.address?.line2}</p>
                    <p>{contactCard.address?.line3}</p>
                    <p>{contactCard.address?.line4}</p>
                  </div>
                </div>

                {/* Map Icon/Illustration */}
                <div className="relative w-16 h-16 flex-shrink-0">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mt-16 mb-8 h-px"
          style={{ backgroundColor: COLORS.border }}
        />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div
            className="flex items-center gap-2 text-sm"
            style={{ color: COLORS.textMuted }}
          >
            <span>©{copyright.year} {copyright.company} is a</span>
            <GroupIcon className="w-5 h-5" />
            <span>{copyright.group}</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="transition-opacity hover:opacity-70"
                style={{ color: COLORS.textSecondary }}
              >
                <SocialIcon icon={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
