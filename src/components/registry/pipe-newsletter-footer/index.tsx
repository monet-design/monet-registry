"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - 다크 테마 전용 footer
 */
const COLORS = {
  light: {
    background: "#131313",
    cardBackground: "#1c1d21",
    inputBackground: "#30313e",
    inputPlaceholder: "#6b6c75",
    buttonBackground: "#ffffff",
    buttonText: "#000000",
    titleText: "#f6f8fc",
    descriptionText: "#808185",
    categoryHeader: "#6b6c75",
    linkText: "#b3b5b9",
    bottomLinkText: "#6b6c75",
    copyrightText: "#4a4c50",
    socialIconBg: "#2a2a35",
    socialIconColor: "#6b6c75",
    divider: "#2a2a30",
  },
  dark: {
    background: "#131313",
    cardBackground: "#1c1d21",
    inputBackground: "#30313e",
    inputPlaceholder: "#6b6c75",
    buttonBackground: "#ffffff",
    buttonText: "#000000",
    titleText: "#f6f8fc",
    descriptionText: "#808185",
    categoryHeader: "#6b6c75",
    linkText: "#b3b5b9",
    bottomLinkText: "#6b6c75",
    copyrightText: "#4a4c50",
    socialIconBg: "#2a2a35",
    socialIconColor: "#6b6c75",
    divider: "#2a2a30",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useState } from "react";

// Social Icons
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// Default data
const defaultFooterData = {
  newsletter: {
    title: "Sign up to The Recap",
    description:
      "Your one-stop shop for the tech, business, and\nfinance news you need to know each week.",
    placeholder: "Enter email address...",
    buttonText: "Subscribe",
  },
  navigation: [
    {
      title: "PRODUCTS",
      links: [
        { label: "For Entrepreneurs", href: "#" },
        { label: "For Partners", href: "#" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Newsroom", href: "#" },
        { label: "Changelog", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
    {
      title: "LEARN MORE",
      links: [
        { label: "Blog", href: "#" },
        { label: "FAQs", href: "#" },
      ],
    },
  ],
  bottomLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Responsible Disclosure", href: "#" },
    { label: "Terms of Use", href: "#" },
  ],
  copyright: "2023 Pipe Technologies Inc. All rights reserved.",
  socialLinks: [
    { icon: "x", href: "#", label: "X (Twitter)" },
    { icon: "linkedin", href: "#", label: "LinkedIn" },
  ],
};

interface NavigationColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface PipeNewsletterFooterProps {
  mode?: "light" | "dark";
  newsletterTitle?: string;
  newsletterDescription?: string;
  newsletterPlaceholder?: string;
  newsletterButtonText?: string;
  navigation?: NavigationColumn[];
  bottomLinks?: { label: string; href: string }[];
  copyright?: string;
  onSubscribe?: (email: string) => void;
}

export default function PipeNewsletterFooter({
  mode = "dark",
  newsletterTitle = defaultFooterData.newsletter.title,
  newsletterDescription = defaultFooterData.newsletter.description,
  newsletterPlaceholder = defaultFooterData.newsletter.placeholder,
  newsletterButtonText = defaultFooterData.newsletter.buttonText,
  navigation = defaultFooterData.navigation,
  bottomLinks = defaultFooterData.bottomLinks,
  copyright = defaultFooterData.copyright,
  onSubscribe,
}: PipeNewsletterFooterProps) {
  const colors = COLORS[mode];
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    onSubscribe?.(email);
    setEmail("");
  };

  const socialIcons = [
    { Icon: XIcon, label: "X (Twitter)", href: "#" },
    { Icon: LinkedInIcon, label: "LinkedIn", href: "#" },
  ];

  return (
    <footer
      className="relative w-full font-sans"
      style={{ backgroundColor: colors.background }}
    >
      {/* Main Content */}
      <div
        className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16"
        style={{ backgroundColor: colors.cardBackground }}
      >
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-sm"
          >
            <h2
              className="text-xl font-semibold tracking-tight md:text-2xl"
              style={{ color: colors.titleText }}
            >
              {newsletterTitle}
            </h2>
            <p
              className="mt-3 whitespace-pre-line text-sm leading-relaxed"
              style={{ color: colors.descriptionText }}
            >
              {newsletterDescription}
            </p>
            <form onSubmit={handleSubscribe} className="mt-6 space-y-3">
              <input
                type="email"
                placeholder={newsletterPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border-0 px-4 py-2.5 text-sm outline-none transition-colors focus:ring-1 focus:ring-white/20"
                style={{
                  backgroundColor: colors.inputBackground,
                  color: colors.titleText,
                }}
              />
              <button
                type="submit"
                className="rounded-md px-5 py-2 text-sm font-medium transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: colors.buttonBackground,
                  color: colors.buttonText,
                }}
              >
                {newsletterButtonText}
              </button>
            </form>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3 lg:gap-x-16"
          >
            {navigation.map((column, idx) => (
              <div key={idx}>
                <h3
                  className="text-xs font-medium uppercase tracking-widest"
                  style={{ color: colors.categoryHeader }}
                >
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className="text-sm transition-opacity hover:opacity-70"
                        style={{ color: colors.linkText }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto max-w-6xl border-t px-6 py-6 lg:px-8"
        style={{
          backgroundColor: colors.cardBackground,
          borderColor: colors.divider,
        }}
      >
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Bottom Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {bottomLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-xs transition-opacity hover:opacity-70"
                style={{ color: colors.bottomLinkText }}
              >
                {link.label}
              </a>
            ))}
            <span
              className="text-xs"
              style={{ color: colors.copyrightText }}
            >
              &copy;{copyright}
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {socialIcons.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-md transition-opacity hover:opacity-70"
                style={{
                  backgroundColor: colors.socialIconBg,
                  color: colors.socialIconColor,
                }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
