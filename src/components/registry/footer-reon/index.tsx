"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#EF4459",
  textPrimary: "#FFFFFF",
  textSecondary: "rgba(255, 255, 255, 0.85)",
  divider: "rgba(255, 255, 255, 0.3)",
} as const;

/**
 * 기본 텍스트 콘텐츠
 */
const DEFAULT_CONTENT = {
  ctaHeading: "Want to work with us?",
  ctaLink: "Get in touch",
  copyright: "2024 Reon",
  policies: [
    { text: "Pastry policy", href: "#" },
    { text: '"Do we peek at you?" policy', href: "#" },
  ],
} as const;

/**
 * 네비게이션 링크
 */
const DEFAULT_NAV_LINKS = {
  column1: [
    { text: "Services", href: "#" },
    { text: "Industries", href: "#" },
    { text: "Insights", href: "#" },
    { text: "Work", href: "#" },
  ],
  column2: [
    { text: "About", href: "#" },
    { text: "Careers", href: "#" },
    { text: "Contact", href: "#" },
  ],
  social: [
    { text: "Linkedin", href: "#", external: true },
    { text: "Facebook", href: "#", external: true },
    { text: "Instagram", href: "#", external: true },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface NavLink {
  text: string;
  href: string;
  external?: boolean;
}

interface PolicyLink {
  text: string;
  href: string;
}

interface FooterReonProps {
  ctaHeading?: string;
  ctaLink?: string;
  ctaLinkHref?: string;
  navColumn1?: NavLink[];
  navColumn2?: NavLink[];
  socialLinks?: NavLink[];
  copyright?: string;
  policies?: PolicyLink[];
  backgroundColor?: string;
}

export default function FooterReon({
  ctaHeading = DEFAULT_CONTENT.ctaHeading,
  ctaLink = DEFAULT_CONTENT.ctaLink,
  ctaLinkHref = "#",
  navColumn1 = DEFAULT_NAV_LINKS.column1 as unknown as NavLink[],
  navColumn2 = DEFAULT_NAV_LINKS.column2 as unknown as NavLink[],
  socialLinks = DEFAULT_NAV_LINKS.social as unknown as NavLink[],
  copyright = DEFAULT_CONTENT.copyright,
  policies = DEFAULT_CONTENT.policies as unknown as PolicyLink[],
  backgroundColor = COLORS.background,
}: FooterReonProps) {
  return (
    <footer
      className="relative w-full py-12 md:py-16"
      style={{ backgroundColor }}
    >
      {/* Top divider line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ backgroundColor: COLORS.divider }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Left section - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2
              className="text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-1"
              style={{ color: COLORS.textPrimary }}
            >
              {ctaHeading}
            </h2>
            <a
              href={ctaLinkHref}
              className="inline-flex items-center gap-2 text-3xl md:text-4xl lg:text-[42px] font-light leading-tight group"
              style={{ color: COLORS.textPrimary }}
            >
              <span className="underline underline-offset-4 decoration-2 group-hover:decoration-4 transition-all">
                {ctaLink}
              </span>
              <span className="text-2xl md:text-3xl" role="img" aria-label="thumbs up">
                <ThumbsUpEmoji />
              </span>
            </a>
          </motion.div>

          {/* Right section - Navigation columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 grid grid-cols-3 gap-8 lg:gap-12"
          >
            {/* Column 1 */}
            <nav className="flex flex-col gap-3">
              {navColumn1.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm md:text-base hover:opacity-70 transition-opacity"
                  style={{ color: COLORS.textPrimary }}
                >
                  {link.text}
                </a>
              ))}
            </nav>

            {/* Column 2 */}
            <nav className="flex flex-col gap-3">
              {navColumn2.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm md:text-base hover:opacity-70 transition-opacity"
                  style={{ color: COLORS.textPrimary }}
                >
                  {link.text}
                </a>
              ))}
            </nav>

            {/* Social Column */}
            <nav className="flex flex-col gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1 text-sm md:text-base hover:opacity-70 transition-opacity"
                  style={{ color: COLORS.textPrimary }}
                >
                  {link.text}
                  {link.external && (
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                  )}
                </a>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Bottom section - Copyright and policies */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 md:mt-24 flex flex-wrap items-center gap-2 text-xs md:text-sm"
          style={{ color: COLORS.textSecondary }}
        >
          <span>&copy;{copyright}</span>
          {policies.map((policy, index) => (
            <span key={index} className="flex items-center gap-2">
              <span className="opacity-60">&#183;</span>
              <a
                href={policy.href}
                className="underline underline-offset-2 hover:opacity-70 transition-opacity"
              >
                {policy.text}
              </a>
            </span>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}

// Custom Thumbs Up Emoji Component (yellow hand emoji style)
function ThumbsUpEmoji() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path
        d="M19.5 33.5C19.5 31.5 21 30 23 30H27C29 30 30.5 31.5 30.5 33.5V53.5C30.5 55.5 29 57 27 57H23C21 57 19.5 55.5 19.5 53.5V33.5Z"
        fill="#FCEA2B"
        stroke="#E08E00"
        strokeWidth="2"
      />
      <path
        d="M30 35C30 35 32 35 35 32C38 29 39 24 41 21C43 18 45 16 48 17C51 18 51 21 50 24C49 27 47 31 47 31H55C58 31 60 33 60 36C60 39 58 40 58 40C59 41 60 43 59 45C58 47 57 47 57 47C58 48 58 50 57 52C56 54 55 54 55 54C55.5 55 55.5 57 54 58.5C52.5 60 50 60 48 60H35C32 60 30 58 30 55V35Z"
        fill="#FCEA2B"
        stroke="#E08E00"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
