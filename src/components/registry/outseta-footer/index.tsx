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
    // Background
    background: "#FAFAFA",
    // Logo text color - dark purple/black
    logoText: "#1A1A1A",
    // Column title - dark color
    columnTitle: "#1A1A1A",
    // Link text - muted gray
    linkText: "#6B7280",
    linkHover: "#374151",
    // Social icon border
    socialBorder: "#E5E7EB",
    socialBorderHover: "#D1D5DB",
    // Copyright text
    copyright: "#9CA3AF",
  },
  dark: {
    background: "#0A0A0A",
    logoText: "#F5F5F5",
    columnTitle: "#F5F5F5",
    linkText: "#9CA3AF",
    linkHover: "#D1D5DB",
    socialBorder: "#374151",
    socialBorderHover: "#4B5563",
    copyright: "#6B7280",
  },
} as const;

/**
 * 푸터 링크 데이터
 */
const FOOTER_LINKS = {
  product: {
    title: "Product",
    links: [
      { label: "Payments", href: "#" },
      { label: "CRM", href: "#" },
      { label: "Email", href: "#" },
      { label: "Help desk", href: "#" },
      { label: "Auth and gating", href: "#" },
      { label: "Pricing", href: "#" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Affiliate program", href: "#" },
      { label: "Privacy policy", href: "#" },
      { label: "Terms of service", href: "#" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Zapier integration", href: "#" },
      { label: "Webflow + Outseta", href: "#" },
      { label: "Webflow agencies", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Best membership software", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  developers: {
    title: "Developers",
    links: [
      { label: "Knowledge base", href: "#" },
      { label: "API docs", href: "#" },
      { label: "Time-saving workflows", href: "#" },
    ],
  },
} as const;

/**
 * 소셜 미디어 링크
 */
const SOCIAL_LINKS = [
  { name: "X (Twitter)", href: "#", icon: "x" },
  { name: "YouTube", href: "#", icon: "youtube" },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

// Logo Component - Spiral icon similar to Outseta
function LogoIcon({ color }: { color: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="14" stroke={color} strokeWidth="2" fill="none" />
      <path
        d="M16 6C10.477 6 6 10.477 6 16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M16 10C12.686 10 10 12.686 10 16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M16 14C14.895 14 14 14.895 14 16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// X (Twitter) Icon
function XIcon({ color }: { color: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// YouTube Icon
function YouTubeIcon({ color }: { color: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

interface FooterColumn {
  title: string;
  links: readonly { label: string; href: string }[];
}

interface SocialLink {
  name: string;
  href: string;
  icon: "x" | "youtube";
}

interface OutsetaFooterProps {
  mode?: "light" | "dark";
  logoText?: string;
  columns?: {
    product?: FooterColumn;
    company?: FooterColumn;
    resources?: FooterColumn;
    developers?: FooterColumn;
  };
  socialLinks?: readonly SocialLink[];
  copyrightYear?: number;
}

export default function OutsetaFooter({
  mode = "light",
  logoText = "Outseta",
  columns = FOOTER_LINKS,
  socialLinks = SOCIAL_LINKS,
  copyrightYear = new Date().getFullYear(),
}: OutsetaFooterProps) {
  const colors = COLORS[mode];

  const columnOrder = ["product", "company", "resources", "developers"] as const;

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
        ease: [0, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <footer
      className="w-full py-16 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.background }}
    >
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Side - Logo and Social */}
          <motion.div
            className="lg:col-span-3 flex flex-col gap-8"
            variants={itemVariants}
          >
            {/* Logo */}
            <div className="flex items-center gap-2">
              <LogoIcon color={colors.logoText} />
              <span
                className="text-xl font-semibold tracking-tight"
                style={{ color: colors.logoText }}
              >
                {logoText}
              </span>
            </div>

            {/* Social Icons and Copyright */}
            <div className="flex items-center gap-3 mt-auto lg:mt-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 rounded-md flex items-center justify-center transition-colors"
                  style={{
                    border: `1px solid ${colors.socialBorder}`,
                  }}
                  whileHover={{
                    borderColor: colors.socialBorderHover,
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  {social.icon === "x" && <XIcon color={colors.linkText} />}
                  {social.icon === "youtube" && (
                    <YouTubeIcon color={colors.linkText} />
                  )}
                </motion.a>
              ))}
              <span
                className="text-sm ml-2"
                style={{ color: colors.copyright }}
              >
                &copy; {copyrightYear}
              </span>
            </div>
          </motion.div>

          {/* Right Side - Navigation Columns */}
          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">
            {columnOrder.map((key) => {
              const column = columns[key];
              if (!column) return null;

              return (
                <motion.div key={key} className="flex flex-col" variants={itemVariants}>
                  <h3
                    className="text-sm font-semibold mb-4"
                    style={{ color: colors.columnTitle }}
                  >
                    {column.title}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <motion.a
                          href={link.href}
                          className="text-sm transition-colors"
                          style={{ color: colors.linkText }}
                          whileHover={{ color: colors.linkHover }}
                        >
                          {link.label}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
