"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    background: "#FFFFFF",
    textPrimary: "#1F2937",
    textSecondary: "#6B7280",
    border: "#E5E7EB",
  },
  dark: {
    background: "#000000",
    textPrimary: "#FFFFFF",
    textSecondary: "#A1A1A1",
    border: "#27272A",
  },
} as const;

/**
 * 기본 콘텐츠 데이터
 */
const DEFAULT_ADDRESS = {
  line1: "2261 Market Street #5039",
  line2: "San Francisco, CA 94114",
};

const DEFAULT_LINKS = {
  documentation: {
    title: "Documentation",
    items: [
      { label: "Getting Started", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Examples", href: "#" },
      { label: "SDKs", href: "#" },
    ],
  },
  resources: {
    title: "Resources",
    items: [
      { label: "Changelog", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Status", href: "#" },
      { label: "Webhooks", href: "#" },
    ],
  },
  company: {
    title: "Company",
    items: [
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Customers", href: "#" },
      { label: "Brand", href: "#" },
    ],
  },
  legal: {
    title: "Legal",
    items: [
      { label: "Acceptable Use", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
};

const DEFAULT_SOCIAL_LINKS = {
  twitter: "#",
  github: "#",
  linkedin: "#",
  discord: "#",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

// Social Icons
const TwitterIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const DiscordIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

interface LinkItem {
  label: string;
  href: string;
}

interface LinkSection {
  title: string;
  items: LinkItem[];
}

interface Address {
  line1: string;
  line2: string;
}

interface SocialLinks {
  twitter?: string;
  github?: string;
  linkedin?: string;
  discord?: string;
}

interface ResendFooterProps {
  mode?: "light" | "dark";
  address?: Address;
  links?: {
    documentation?: LinkSection;
    resources?: LinkSection;
    company?: LinkSection;
    legal?: LinkSection;
  };
  socialLinks?: SocialLinks;
}

export default function ResendFooter({
  mode = "dark",
  address = DEFAULT_ADDRESS,
  links = DEFAULT_LINKS,
  socialLinks = DEFAULT_SOCIAL_LINKS,
}: ResendFooterProps) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const linkSections = [
    links.documentation || DEFAULT_LINKS.documentation,
    links.resources || DEFAULT_LINKS.resources,
    links.company || DEFAULT_LINKS.company,
    links.legal || DEFAULT_LINKS.legal,
  ];

  const socialIconsData = [
    { icon: TwitterIcon, href: socialLinks.twitter, label: "Twitter" },
    { icon: GitHubIcon, href: socialLinks.github, label: "GitHub" },
    { icon: LinkedInIcon, href: socialLinks.linkedin, label: "LinkedIn" },
    { icon: DiscordIcon, href: socialLinks.discord, label: "Discord" },
  ].filter((item) => item.href);

  return (
    <footer
      className="w-full py-16 px-6 md:px-12 lg:px-16"
      style={{ backgroundColor: colors.background }}
    >
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Address and Social Links */}
          <motion.div
            className="col-span-2 md:col-span-3 lg:col-span-2"
            variants={itemVariants}
          >
            <div className="space-y-4">
              <p
                className="text-sm leading-relaxed"
                style={{ color: colors.textSecondary }}
              >
                {address.line1}
                <br />
                {address.line2}
              </p>
              <div className="flex items-center gap-4 pt-2">
                {socialIconsData.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="transition-opacity hover:opacity-70"
                    style={{ color: colors.textPrimary }}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Link Sections */}
          {linkSections.map((section, sectionIndex) => (
            <motion.div key={sectionIndex} variants={itemVariants}>
              <h3
                className="text-sm font-normal mb-4"
                style={{ color: colors.textPrimary }}
              >
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href={item.href}
                      className="text-sm transition-opacity hover:opacity-70"
                      style={{ color: colors.textSecondary }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}
