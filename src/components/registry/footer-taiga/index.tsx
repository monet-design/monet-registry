"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#D7D3CD",
    text: "#1a1a2e",
    textMuted: "#6b6b6b",
    textSecondary: "#999A99",
  },
  dark: {
    background: "#2a2a2e",
    text: "#f5f5f5",
    textMuted: "#a0a0a0",
    textSecondary: "#888888",
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
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from "lucide-react";

// Navigation data
const productLinks = {
  watercraft: {
    title: "Watercraft",
    items: [
      { label: "Orca", href: "#" },
      { label: "Orca Carbon", href: "#" },
    ],
  },
  snowmobiles: {
    title: "Snowmobiles",
    items: [
      { label: "Nomad", href: "#" },
      { label: "Atlas", href: "#" },
      { label: "Ekko", href: "#" },
    ],
  },
  fleet: { title: "Fleet", href: "#" },
  shop: { title: "Shop", href: "#" },
};

const companyLinks = [
  { label: "Taiga Charging", href: "#" },
  { label: "Service Providers", href: "#" },
  { label: "Test Ride", href: "#" },
  { label: "Taiga Referral Program", href: "#" },
  { label: "About", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Careers", href: "#" },
];

const resourceLinks = [
  { label: "News", href: "#" },
  { label: "Stories", href: "#" },
  { label: "Investors", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Suppliers", href: "#" },
  { label: "Owner Zone", href: "#" },
];

const legalLinks = [
  { label: "Privacy policy", href: "#" },
  { label: "Terms & conditions", href: "#" },
  { label: "Legal", href: "#" },
  { label: "Patents", href: "#" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

// Logo Component
function TaigaLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="currentColor"
      className={className}
      aria-label="Taiga"
    >
      {/* Triangle icon */}
      <path d="M20 4L36 32H4L20 4Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M20 12L28 26H12L20 12Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      {/* TAIGA text */}
      <text x="50" y="28" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="500" letterSpacing="4">
        TAIGA
      </text>
    </svg>
  );
}

interface FooterTaigaProps {
  mode?: "light" | "dark";
  companyName?: string;
  logoComponent?: React.ReactNode;
  products?: typeof productLinks;
  company?: typeof companyLinks;
  resources?: typeof resourceLinks;
  legal?: typeof legalLinks;
  socials?: typeof socialLinks;
  copyrightYear?: number;
  copyrightText?: string;
  languageLabel?: string;
}

export default function FooterTaiga({
  mode = "light",
  companyName = "TAIGA MOTORS INC.",
  logoComponent,
  products = productLinks,
  company = companyLinks,
  resources = resourceLinks,
  legal = legalLinks,
  socials = socialLinks,
  copyrightYear = 2024,
  copyrightText = "Taiga\u2122, Nomad\u2122, Atlas\u2122, Ekko\u2122, Orca\u2122 and related trademarks, names and logos are the property of Taiga Motors Inc. and are registered and/or used in Canada, the U.S. and countries around the world. Use of the trademarks, names and logos displayed on the Site is not permitted without the prior written consent of Taiga Motors Inc.",
  languageLabel = "English USD$",
}: FooterTaigaProps) {
  const colors = COLORS[mode];

  return (
    <footer
      className="w-full"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Logo section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            {logoComponent || (
              <TaigaLogo
                className="h-10 w-auto"
              />
            )}
          </motion.div>

          {/* Product navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {/* Watercraft */}
            <div className="mb-6">
              <h3
                className="mb-3 text-lg font-medium"
                style={{ color: colors.text }}
              >
                {products.watercraft.title}
              </h3>
              <ul className="space-y-2">
                {products.watercraft.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm transition-colors hover:opacity-80"
                      style={{ color: colors.textMuted }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Snowmobiles */}
            <div className="mb-6">
              <h3
                className="mb-3 text-lg font-medium"
                style={{ color: colors.text }}
              >
                {products.snowmobiles.title}
              </h3>
              <ul className="space-y-2">
                {products.snowmobiles.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm transition-colors hover:opacity-80"
                      style={{ color: colors.textMuted }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fleet & Shop */}
            <div className="space-y-3">
              <a
                href={products.fleet.href}
                className="block text-lg font-medium transition-colors hover:opacity-80"
                style={{ color: colors.text }}
              >
                {products.fleet.title}
              </a>
              <a
                href={products.shop.href}
                className="block text-lg font-medium transition-colors hover:opacity-80"
                style={{ color: colors.text }}
              >
                {products.shop.title}
              </a>
            </div>
          </motion.div>

          {/* Company links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm transition-colors hover:opacity-80"
                    style={{ color: colors.textMuted }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resource links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm transition-colors hover:opacity-80"
                    style={{ color: colors.textMuted }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 border-t pt-8"
          style={{ borderColor: `${colors.textSecondary}40` }}
        >
          {/* Legal links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
            {legal.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm transition-colors hover:opacity-80"
                style={{ color: colors.text }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Copyright and social */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p
                className="text-sm font-medium mb-3"
                style={{ color: colors.text }}
              >
                &copy; {companyName} {copyrightYear}
              </p>
              <p
                className="text-xs leading-relaxed"
                style={{ color: colors.textSecondary }}
              >
                {copyrightText}
              </p>
            </div>

            {/* Social icons and language */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="transition-colors hover:opacity-70"
                    style={{ color: colors.textMuted }}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              <span
                className="text-sm"
                style={{ color: colors.textMuted }}
              >
                {languageLabel} <span className="ml-1">&#x25BC;</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
