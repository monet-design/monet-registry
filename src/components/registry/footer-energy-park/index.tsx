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
    background: "#F2F2F2",
    accentBar: "#FEFABE",
    buttonBg: "#000000",
    buttonText: "#FFFFFF",
    divider: "#D5D5D5",
  },
  dark: {
    background: "#1A1A1A",
    accentBar: "#FEFABE",
    buttonBg: "#FFFFFF",
    buttonText: "#000000",
    divider: "#333333",
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
import { ArrowUp } from "lucide-react";

interface FooterEnergyParkProps {
  mode?: "light" | "dark";
  logo?: {
    icon?: React.ReactNode;
    text?: string;
  };
  phone?: string;
  email?: string;
  tagline?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
  navigationLinks?: {
    title: string;
    links: { label: string; href: string }[];
  };
  socialLinks?: {
    title: string;
    links: { label: string; href: string }[];
  };
  legalLinks?: {
    title: string;
    links: { label: string; href: string }[];
  };
  copyright?: string;
  siteCredit?: string;
  onBackToTop?: () => void;
}

function EnergyParkLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 28L28 4V28H4Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function FooterEnergyPark({
  mode = "light",
  logo = {
    icon: <EnergyParkLogo />,
    text: "Energy\nPark.",
  },
  phone = "020 3345 3310",
  email = "enquiries@energy-park.co.uk",
  tagline = "Experts in smart EV charging solutions\nfor residential sites and businesses.",
  ctaButtonText = "Client portal",
  ctaButtonLink = "#",
  navigationLinks = {
    title: "Navigation",
    links: [
      { label: "Solutions", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Residents", href: "#" },
    ],
  },
  socialLinks = {
    title: "Follow us",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
  legalLinks = {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Modern Slavery Policy", href: "#" },
      { label: "ESG Policy", href: "#" },
      { label: "Sustainability Policy", href: "#" },
    ],
  },
  copyright = "Copyright © Energy Park 2025",
  siteCredit = "Site by Outpost",
  onBackToTop,
}: FooterEnergyParkProps) {
  const colors = COLORS[mode];

  const handleBackToTop = () => {
    if (onBackToTop) {
      onBackToTop();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      className="relative w-full"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-16">
        {/* Top Section - Logo and Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"
        >
          {/* Logo */}
          <div
            className={`flex items-center gap-2 ${mode === "dark" ? "text-white" : "text-black"}`}
          >
            {logo.icon}
            <span className="text-sm font-semibold leading-tight whitespace-pre-line">
              {logo.text}
            </span>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start gap-1 md:items-end">
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className={`text-2xl font-medium md:text-3xl ${mode === "dark" ? "text-white" : "text-black"} transition-opacity hover:opacity-70`}
            >
              {phone}
            </a>
            <a
              href={`mailto:${email}`}
              className={`text-2xl font-medium md:text-3xl ${mode === "dark" ? "text-white" : "text-black"} transition-opacity hover:opacity-70`}
            >
              {email}
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div
          className="my-10"
          style={{ borderTop: `1px solid ${colors.divider}` }}
        />

        {/* Middle Section - Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Tagline and CTA */}
          <div className="flex flex-col gap-6">
            <p
              className={`whitespace-pre-line text-sm leading-relaxed ${mode === "dark" ? "text-gray-300" : "text-gray-900"}`}
            >
              {tagline}
            </p>
            <a
              href={ctaButtonLink}
              className="inline-flex w-fit items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-opacity hover:opacity-80"
              style={{
                backgroundColor: colors.buttonBg,
                color: colors.buttonText,
              }}
            >
              {ctaButtonText}
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-4">
            <h3
              className={`text-sm font-medium ${mode === "dark" ? "text-white" : "text-black"}`}
            >
              {navigationLinks.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {navigationLinks.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors ${mode === "dark" ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-black"}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h3
              className={`text-sm font-medium ${mode === "dark" ? "text-white" : "text-black"}`}
            >
              {socialLinks.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {socialLinks.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors ${mode === "dark" ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-black"}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-4">
            <h3
              className={`text-sm font-medium ${mode === "dark" ? "text-white" : "text-black"}`}
            >
              {legalLinks.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {legalLinks.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors ${mode === "dark" ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-black"}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom Section - Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center"
        >
          <p
            className={`text-sm ${mode === "dark" ? "text-gray-500" : "text-gray-500"}`}
          >
            {copyright}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className={`text-sm transition-colors ${mode === "dark" ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-black"}`}
            >
              {siteCredit}
            </a>
            <button
              onClick={handleBackToTop}
              className={`flex items-center gap-1 text-sm transition-colors ${mode === "dark" ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-black"}`}
            >
              Back to top
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Yellow Accent Bar */}
      <div className="h-2 w-full" style={{ backgroundColor: colors.accentBar }} />
    </footer>
  );
}
