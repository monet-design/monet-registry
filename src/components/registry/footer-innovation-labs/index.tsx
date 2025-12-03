"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#F5F5F5", // Light gray background
  text: "#000000", // Black text
  textMuted: "#6B7280", // Gray muted text
  ctaBackground: "#0A1F44", // Dark navy blue
  ctaText: "#FFFFFF", // White text on CTA
  linkAccent: "#2563EB", // Blue for email link
  divider: "#000000", // Black divider line
} as const;

/**
 * 네비게이션 인덱스 링크
 */
const INDEX_LINKS = [
  { number: 1, label: "Home", href: "#" },
  { number: 2, label: "Projects", href: "#" },
  { number: 3, label: "Areas of Exploration", href: "#" },
  { number: 4, label: "Partnerships", href: "#" },
  { number: 5, label: "Life at Labs", href: "#" },
  { number: 6, label: "News & Perspectives", href: "#" },
  { number: 7, label: "Terms and Conditions", href: "#" },
  { number: 8, label: "Privacy Policy", href: "#" },
  { number: 9, label: "Sitemap", href: "#" },
] as const;

/**
 * 소셜 미디어 링크
 */
const SOCIAL_LINKS = [
  { number: 1, label: "LinkedIn", href: "#" },
  { number: 2, label: "Instagram", href: "#" },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface FooterInnovationLabsProps {
  companyName?: string;
  tagline?: string;
  copyrightYear?: string;
  contactEmail?: string;
  creditText?: string;
  ctaTitle?: string;
  ctaButtonText?: string;
  indexLinks?: { number: number; label: string; href: string }[];
  socialLinks?: { number: number; label: string; href: string }[];
  onCtaClick?: () => void;
}

export default function FooterInnovationLabs({
  companyName = "Lowe's Innovation Labs",
  tagline = "n Labs. We bring the future h",
  copyrightYear = "2024",
  contactEmail = "publicrelations@lowes.com",
  creditText = "Website by Locomotive",
  ctaTitle = "Interested in\nlearning more?",
  ctaButtonText = "Let's connect",
  indexLinks = [...INDEX_LINKS],
  socialLinks = [...SOCIAL_LINKS],
  onCtaClick,
}: FooterInnovationLabsProps) {
  return (
    <section
      className="relative w-full"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Marquee Title Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="overflow-hidden border-b border-gray-200 py-8 md:py-12"
      >
        <div className="whitespace-nowrap text-[clamp(3rem,10vw,8rem)] font-bold leading-none tracking-tight text-black">
          {tagline}
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Labs Index Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div
              className="mb-4 border-t pt-4"
              style={{ borderColor: COLORS.divider }}
            >
              <h3 className="text-sm font-medium tracking-wide text-black">
                Labs Index
              </h3>
            </div>
            <nav>
              <ul className="space-y-2">
                {indexLinks.map((link, index) => (
                  <motion.li
                    key={link.number}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    viewport={{ once: true }}
                    className="flex items-baseline gap-16"
                  >
                    <span
                      className="w-4 text-sm tabular-nums"
                      style={{ color: COLORS.textMuted }}
                    >
                      {link.number}
                    </span>
                    <a
                      href={link.href}
                      className="text-sm text-black transition-colors hover:text-gray-600"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Social Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div
              className="mb-4 border-t pt-4"
              style={{ borderColor: COLORS.divider }}
            >
              <h3 className="text-sm font-medium tracking-wide text-black">
                Social
              </h3>
            </div>
            <nav>
              <ul className="space-y-2">
                {socialLinks.map((link, index) => (
                  <motion.li
                    key={link.number}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.03 }}
                    viewport={{ once: true }}
                    className="flex items-baseline gap-16"
                  >
                    <span
                      className="w-4 text-sm tabular-nums"
                      style={{ color: COLORS.textMuted }}
                    >
                      {link.number}
                    </span>
                    <a
                      href={link.href}
                      className="text-sm text-black transition-colors hover:text-gray-600"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div
              className="flex h-full min-h-[280px] flex-col justify-between rounded-2xl p-6 md:p-8"
              style={{ backgroundColor: COLORS.ctaBackground }}
            >
              <h4
                className="text-xl font-medium leading-snug md:text-2xl"
                style={{ color: COLORS.ctaText }}
              >
                {ctaTitle.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < ctaTitle.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </h4>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onCtaClick}
                className="mt-8 flex w-full items-center justify-between rounded-lg bg-white px-5 py-4 text-left text-sm font-medium text-black transition-colors hover:bg-gray-100"
              >
                <span>{ctaButtonText}</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="border-t border-gray-200"
      >
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col items-start justify-between gap-4 text-sm md:flex-row md:items-center">
            {/* Copyright */}
            <div className="flex flex-wrap items-center gap-4 md:gap-8">
              <span className="text-black">&copy; {copyrightYear}</span>
              <span className="text-black">{companyName}</span>
            </div>

            {/* Contact Email */}
            <div className="flex items-center gap-2">
              <span style={{ color: COLORS.textMuted }}>
                For media inquiries
              </span>
              <a
                href={`mailto:${contactEmail}`}
                className="underline transition-colors hover:text-blue-700"
                style={{ color: COLORS.linkAccent }}
              >
                {contactEmail}
              </a>
            </div>

            {/* Credit */}
            <div className="flex items-center gap-1">
              <span style={{ color: COLORS.textMuted }}>{creditText}</span>
              <span className="text-black">&reg;</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
