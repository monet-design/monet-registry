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
    // Primary 액센트 (버튼, 링크 등)
    accent: "#1B5A54",
    accentHover: "#0F3D39",
    // Link color
    link: "#3D7A74",
    linkHover: "#1B5A54",
    // Border accent
    borderAccent: "#1B5A54",
  },
  dark: {
    accent: "#4FB8AD",
    accentHover: "#6CCFC4",
    link: "#5CA8A0",
    linkHover: "#4FB8AD",
    borderAccent: "#4FB8AD",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import "./font.css";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterVouchProps {
  mode?: "light" | "dark";
  logoText?: string;
  columns?: FooterColumn[];
  socialLinks?: SocialLink[];
  legalLinks?: FooterLink[];
  copyright?: string;
}

const defaultColumns: FooterColumn[] = [
  {
    title: "Use Cases",
    links: [
      { label: "Employer Brand", href: "#" },
      { label: "Internal Comms", href: "#" },
      { label: "Recruitment", href: "#" },
      { label: "Sales", href: "#" },
      { label: "UGC", href: "#" },
      { label: "Testimonials", href: "#" },
    ],
  },
  {
    title: "How it works",
    links: [
      { label: "Product", href: "#" },
      { label: "Vouch AI", href: "#" },
      { label: "Browser Extension", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Developers", href: "#" },
      { label: "vs iCIMS Video Studio", href: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Plans & Pricing", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Join Slack Community", href: "#" },
    ],
  },
];

const defaultSocialLinks: SocialLink[] = [
  { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
  { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
  { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
];

const defaultLegalLinks: FooterLink[] = [
  { label: "Terms of use", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "GDPR", href: "#" },
  { label: "DPA", href: "#" },
];

export default function FooterVouch({
  mode = "light",
  logoText = "vouch",
  columns = defaultColumns,
  socialLinks = defaultSocialLinks,
  legalLinks = defaultLegalLinks,
  copyright = "\u00A9 Copyright Vouch for Pty Ltd",
}: FooterVouchProps) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <footer
      className={`relative w-full ${isDark ? "bg-gray-950" : "bg-white"}`}
    >
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        {/* Top border accent and columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 w-full h-1"
              style={{ backgroundColor: colors.borderAccent }}
            />
            <div className="pt-8">
              <span
                className="text-3xl font-light tracking-tight"
                style={{
                  color: colors.accent,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {logoText}
              </span>
            </div>
          </motion.div>

          {/* Navigation Columns */}
          {columns.map((column, columnIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (columnIndex + 1) }}
              className="relative"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: colors.borderAccent }}
              />
              <div className="pt-8">
                <h3
                  className="text-xl mb-6 italic"
                  style={{
                    color: colors.accent,
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-base transition-colors duration-200 hover:underline"
                        style={{ color: colors.link }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = colors.linkHover)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = colors.link)
                        }
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div
          className={`mt-12 mb-6 h-px ${isDark ? "bg-gray-800" : "bg-gray-200"}`}
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className={`transition-colors duration-200 ${
                  isDark
                    ? "text-gray-500 hover:text-gray-300"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Legal Links and Copyright */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
            {legalLinks.map((link, index) => (
              <span key={link.label} className="flex items-center gap-2">
                <a
                  href={link.href}
                  className={`transition-colors duration-200 ${
                    isDark
                      ? "text-gray-500 hover:text-gray-300"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {link.label}
                </a>
                {index < legalLinks.length - 1 && (
                  <span
                    className={isDark ? "text-gray-600" : "text-gray-300"}
                  >
                    *
                  </span>
                )}
              </span>
            ))}
            <span className={isDark ? "text-gray-600" : "text-gray-300"}>
              *
            </span>
            <span className={isDark ? "text-gray-500" : "text-gray-500"}>
              {copyright}
            </span>
          </div>
        </motion.div>
      </div>

    </footer>
  );
}
