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
    border: "#e5e7eb",
    inputBg: "#f3f4f6",
    buttonBg: "#1a1a1a",
    buttonText: "#ffffff",
  },
  dark: {
    background: "#0a0a14",
    text: "#ffffff",
    textSecondary: "#8b8b9a",
    border: "#1f1f2e",
    inputBg: "transparent",
    buttonBg: "#ffffff",
    buttonText: "#0a0a14",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";

// Discord SVG Icon
function DiscordIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
    </svg>
  );
}

// Twitter/X SVG Icon
function TwitterIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Reflect Logo SVG
function ReflectLogo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="8" fill="url(#reflect-gradient)" />
      <path
        d="M16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24C20.4183 24 24 20.4183 24 16"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="20" cy="12" r="3" fill="white" />
      <defs>
        <linearGradient
          id="reflect-gradient"
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7c3aed" />
          <stop offset="1" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterReflectProps {
  mode?: "light" | "dark";
  logoText?: string;
  columns?: FooterColumn[];
  newsletterTitle?: string;
  newsletterSubtitle?: string;
  emailPlaceholder?: string;
  subscribeText?: string;
  privacyPolicyText?: string;
  privacyPolicyHref?: string;
  termsText?: string;
  termsHref?: string;
  copyrightText?: string;
  discordHref?: string;
  twitterHref?: string;
  onSubscribe?: (email: string) => void;
}

const defaultColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Integrations", href: "/integrations" },
      { label: "Pricing", href: "/pricing" },
      { label: "Changelog", href: "/changelog" },
      { label: "Roadmap", href: "/roadmap" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our team", href: "/team" },
      { label: "Our values", href: "/values" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Downloads", href: "/downloads" },
      { label: "Documentation", href: "/docs" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function FooterReflect({
  mode = "dark",
  logoText = "Reflect",
  columns = defaultColumns,
  newsletterTitle = "Join our newsletter",
  newsletterSubtitle = "Keep up to date with everything Reflect",
  emailPlaceholder = "Enter your email",
  subscribeText = "Subscribe",
  privacyPolicyText = "Privacy Policy",
  privacyPolicyHref = "/privacy",
  termsText = "Terms of Conditions",
  termsHref = "/terms",
  copyrightText = "Reflect App, LLC. All rights reserved.",
  discordHref = "https://discord.com",
  twitterHref = "https://twitter.com",
  onSubscribe,
}: FooterReflectProps) {
  const [email, setEmail] = useState("");
  const colors = COLORS[mode];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && onSubscribe) {
      onSubscribe(email);
    }
  };

  return (
    <footer
      className="relative w-full px-6 py-12 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Top Section - Logo, Social Icons, Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-10 md:flex-row md:justify-between"
        >
          {/* Left - Logo and Social */}
          <div className="flex flex-col gap-8">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <ReflectLogo size={32} />
              <span
                className="text-lg font-medium"
                style={{ color: colors.text }}
              >
                {logoText}
              </span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href={discordHref}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
                aria-label="Discord"
              >
                <DiscordIcon size={20} color={colors.textSecondary} />
              </a>
              <a
                href={twitterHref}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
                aria-label="Twitter"
              >
                <TwitterIcon size={18} color={colors.textSecondary} />
              </a>
            </div>
          </div>

          {/* Right - Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-16 lg:gap-24">
            {columns.map((column) => (
              <div key={column.title}>
                <h3
                  className="mb-4 text-sm font-medium"
                  style={{ color: colors.text }}
                >
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm transition-opacity hover:opacity-70"
                        style={{ color: colors.textSecondary }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div
          className="my-10"
          style={{ borderTop: `1px solid ${colors.border}` }}
        />

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          {/* Left - Newsletter Text */}
          <div>
            <h3
              className="mb-2 text-xl font-semibold"
              style={{ color: colors.text }}
            >
              {newsletterTitle}
            </h3>
            <p
              className="text-sm"
              style={{ color: colors.textSecondary }}
            >
              {newsletterSubtitle}
            </p>
          </div>

          {/* Right - Email Form */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={emailPlaceholder}
              className="rounded-md border px-4 py-2.5 text-sm outline-none transition-colors placeholder:opacity-50 focus:ring-1"
              style={{
                backgroundColor: colors.inputBg,
                borderColor: colors.border,
                color: colors.text,
                minWidth: "220px",
              }}
            />
            <button
              type="submit"
              className="rounded-md px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
              style={{
                backgroundColor: colors.buttonBg,
                color: colors.buttonText,
              }}
            >
              {subscribeText}
            </button>
          </form>
        </motion.div>

        {/* Divider */}
        <div
          className="my-10"
          style={{ borderTop: `1px solid ${colors.border}` }}
        />

        {/* Bottom Section - Legal Links and Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          {/* Left - Legal Links */}
          <div className="flex items-center gap-2">
            <a
              href={privacyPolicyHref}
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: colors.textSecondary }}
            >
              {privacyPolicyText}
            </a>
            <span style={{ color: colors.textSecondary }}>·</span>
            <a
              href={termsHref}
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: colors.textSecondary }}
            >
              {termsText}
            </a>
          </div>

          {/* Right - Copyright */}
          <p
            className="text-sm"
            style={{ color: colors.textSecondary }}
          >
            {copyrightText}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
