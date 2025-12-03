"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#FFFFFF",
    cardBackground: "#F5F5F5",
    text: "#1A1A1A",
    textMuted: "#6B7280",
    buttonBackground: "#1A1A1A",
    buttonText: "#FFFFFF",
    border: "#E5E5E5",
    linkUnderline: "#1A1A1A",
  },
  dark: {
    background: "#0D0D0D",
    cardBackground: "#171717",
    text: "#FFFFFF",
    textMuted: "#888888",
    buttonBackground: "#E8E4DE",
    buttonText: "#0D0D0D",
    border: "#2A2A2A",
    linkUnderline: "#FFFFFF",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

// Figma Icon
function FigmaIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  );
}

// Twitter/X Icon
function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Slack Icon
function SlackIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.163 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.163 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.163 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.27a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.315A2.527 2.527 0 0 1 24 15.163a2.528 2.528 0 0 1-2.522 2.523h-6.315z" />
    </svg>
  );
}

// YouTube Icon
function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

// TikTok Icon
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

// Webflow Icon
function WebflowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.802 8.56s-1.946 6.103-2.105 6.607c-.059-.588-.897-6.607-.897-6.607S13.125 5.81 10.381 5.81c-2.41 0-4.633 1.614-5.534 4.208 0 0-2.064 6.063-2.23 6.563-.008-.481-.32-6.563-.32-6.563-.221-2.617-2.455-4.208-4.297-4.208V18.2s1.583-.016 1.65-.02c2.268-.038 3.913-1.63 4.581-3.545 0 0 1.793-5.353 1.853-5.541.009.158.844 5.7.844 5.7.267 2.01 2.074 3.386 3.946 3.386v-.009s1.56.016 1.625.02c2.302-.044 3.62-1.634 4.424-3.382 0 0 3.181-7.013 3.255-7.19-.063.144-3.064 7.198-3.064 7.198-.85 2.038-2.403 3.363-4.592 3.363V18.2s1.62-.016 1.688-.02c3.252-.047 5.467-2.076 6.663-4.878L24 5.823h-4.21c-.084 0-1.988 2.737-1.988 2.737z" />
    </svg>
  );
}

// LinkedIn Icon
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// Logo Icon (Relume style R in box)
function RelumeLogoIcon({ className, color }: { className?: string; color: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="30" height="30" rx="4" stroke={color} strokeWidth="2" />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fill={color}
        fontFamily="Inter, sans-serif"
        fontSize="16"
        fontWeight="600"
      >
        R
      </text>
    </svg>
  );
}

// Slack hashtag icon for CTA
function SlackHashIcon({ className, color }: { className?: string; color: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke={color} strokeOpacity="0.3" />
      <path
        d="M15 12L13 28M27 12L25 28M12 17H28M11 23H27"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface FooterRelumeIpsumProps {
  mode?: "light" | "dark";
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaButtonHref?: string;
  logoText?: string;
  logoTagline?: string;
  madeByPrefix?: string;
  madeByName?: string;
  madeByHref?: string;
  description?: string;
  navLinksLeft?: Array<{ label: string; href: string }>;
  navLinksRight?: Array<{ label: string; href: string }>;
  socialLinks?: Array<{ icon: "figma" | "twitter" | "slack" | "youtube" | "tiktok" | "webflow" | "linkedin"; href: string }>;
  copyrightYear?: string;
  copyrightCompany?: string;
  legalLinks?: Array<{ label: string; href: string }>;
}

export default function FooterRelumeIpsum({
  mode = "dark",
  ctaTitle = "Join our awesome community",
  ctaDescription = "Share work, seek support, vote on components, stay updated and network with other Lumers.",
  ctaButtonText = "Join our Slack",
  ctaButtonHref = "#",
  logoText = "Relume Ipsum",
  logoTagline = "Beta",
  madeByPrefix = "Made by",
  madeByName = "Relume",
  madeByHref = "#",
  description = "Relume Ipsum is still in early Beta, so please keep in mind that there may be some imperfections as we continue to work on improving it.",
  navLinksLeft = [
    { label: "Install", href: "#" },
    { label: "Watch Demo", href: "#" },
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Learn", href: "#" },
  ],
  navLinksRight = [
    { label: "Feedback", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Slack", href: "#" },
    { label: "Become an Affiliate", href: "#" },
  ],
  socialLinks = [
    { icon: "figma", href: "#" },
    { icon: "twitter", href: "#" },
    { icon: "slack", href: "#" },
    { icon: "youtube", href: "#" },
    { icon: "tiktok", href: "#" },
    { icon: "webflow", href: "#" },
    { icon: "linkedin", href: "#" },
  ],
  copyrightYear = "2023",
  copyrightCompany = "Relume",
  legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ],
}: FooterRelumeIpsumProps) {
  const colors = COLORS[mode];

  const getSocialIcon = (icon: string, className: string) => {
    switch (icon) {
      case "figma":
        return <FigmaIcon className={className} />;
      case "twitter":
        return <TwitterIcon className={className} />;
      case "slack":
        return <SlackIcon className={className} />;
      case "youtube":
        return <YouTubeIcon className={className} />;
      case "tiktok":
        return <TikTokIcon className={className} />;
      case "webflow":
        return <WebflowIcon className={className} />;
      case "linkedin":
        return <LinkedInIcon className={className} />;
      default:
        return null;
    }
  };

  return (
    <footer
      className="w-full py-12 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-6xl mx-auto">
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            backgroundColor: colors.cardBackground,
            border: `1px solid ${colors.border}`,
          }}
        >
          <div className="flex items-center gap-4 md:gap-6 flex-1">
            <SlackHashIcon className="w-10 h-10 flex-shrink-0" color={colors.text} />
            <div>
              <h3
                className="text-lg md:text-xl font-medium mb-1"
                style={{ color: colors.text }}
              >
                {ctaTitle}
              </h3>
              <p
                className="text-sm md:text-base"
                style={{ color: colors.textMuted }}
              >
                {ctaDescription}
              </p>
            </div>
          </div>
          <motion.a
            href={ctaButtonHref}
            className="px-6 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-opacity hover:opacity-90"
            style={{
              backgroundColor: colors.buttonBackground,
              color: colors.buttonText,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {ctaButtonText}
          </motion.a>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12"
        >
          {/* Left Column - Logo and Info */}
          <div className="md:col-span-5 lg:col-span-4">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <RelumeLogoIcon className="w-8 h-8" color={colors.text} />
              <span className="text-lg font-semibold" style={{ color: colors.text }}>
                {logoText}
              </span>
              <span
                className="px-2 py-0.5 text-xs rounded"
                style={{
                  backgroundColor: colors.textMuted,
                  color: colors.background,
                }}
              >
                {logoTagline}
              </span>
            </div>

            {/* Made by */}
            <p className="text-sm mb-4" style={{ color: colors.textMuted }}>
              {madeByPrefix}{" "}
              <a
                href={madeByHref}
                className="underline underline-offset-2 transition-opacity hover:opacity-80"
                style={{ color: colors.text }}
              >
                {madeByName}
              </a>
            </p>

            {/* Description */}
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: colors.textMuted }}
            >
              {description}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="transition-opacity hover:opacity-70"
                  style={{ color: colors.text }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {getSocialIcon(link.icon, "w-5 h-5")}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1 lg:col-span-2" />

          {/* Middle Column - Nav Links Left */}
          <div className="md:col-span-3">
            <nav className="flex flex-col gap-3">
              {navLinksLeft.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-sm transition-opacity hover:opacity-70"
                  style={{ color: colors.textMuted }}
                  whileHover={{ x: 2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Right Column - Nav Links Right */}
          <div className="md:col-span-3">
            <nav className="flex flex-col gap-3">
              {navLinksRight.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-sm transition-opacity hover:opacity-70"
                  style={{ color: colors.textMuted }}
                  whileHover={{ x: 2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>
        </motion.div>

        {/* Divider */}
        <div
          className="h-px w-full mb-6"
          style={{ backgroundColor: colors.border }}
        />

        {/* Bottom Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <p className="text-sm" style={{ color: colors.textMuted }}>
            &copy; {copyrightYear} {copyrightCompany}. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm underline underline-offset-2 transition-opacity hover:opacity-70"
                style={{ color: colors.textMuted }}
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
