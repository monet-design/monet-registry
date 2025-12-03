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
    background: "#F6F6F6",
    buttonBg: "#333333",
    buttonText: "#FFFFFF",
    inputBorder: "#E5E5E5",
  },
  dark: {
    background: "#111111",
    buttonBg: "#FFFFFF",
    buttonText: "#111111",
    inputBorder: "#333333",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

// Custom X (Twitter) Icon
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Custom Instagram Icon
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// Custom YouTube Icon
const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// Custom Mastodon Icon
const MastodonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.668 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z" />
  </svg>
);

// Sketch Diamond Logo
const SketchLogo = () => (
  <svg viewBox="0 0 32 32" fill="currentColor" className="w-6 h-6">
    <path d="M16 2L2 10l14 20 14-20L16 2zm0 4.5L26.5 10 16 26.5 5.5 10 16 6.5z" />
  </svg>
);

interface LinkItem {
  label: string;
  href: string;
  isNew?: boolean;
  isExternal?: boolean;
}

interface LinkColumn {
  title: string;
  links: LinkItem[];
}

interface FooterSketchProps {
  mode?: "light" | "dark";
  newsletterTitle?: string;
  newsletterDescription?: string;
  emailPlaceholder?: string;
  signUpButtonText?: string;
  consentText?: string;
  linkColumns?: LinkColumn[];
  copyrightText?: string;
  socialLinks?: {
    twitter?: string;
    instagram?: string;
    youtube?: string;
    mastodon?: string;
  };
}

const defaultLinkColumns: LinkColumn[] = [
  {
    title: "Product",
    links: [
      { label: "What's New", href: "#" },
      { label: "Design", href: "#" },
      { label: "Collaboration", href: "#" },
      { label: "Prototyping", href: "#" },
      { label: "Developer Handoff", href: "#" },
      { label: "Color Variables", href: "#" },
      { label: "Commenting", href: "#" },
      { label: "Libraries", href: "#" },
      { label: "Smart Layout", href: "#" },
      { label: "Symbols", href: "#" },
      { label: "Apps", href: "#" },
      { label: "Extensions", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Beta", href: "#" },
      { label: "All Features", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
  {
    title: "Why Sketch",
    links: [
      { label: "Sketch Myths", href: "#" },
      { label: "Figma to Sketch", href: "#" },
      { label: "Adobe XD to Sketch", href: "#" },
      { label: "Switch from InVision", href: "#" },
      { label: "Meet Our Customers", href: "#", isNew: true },
      { label: "Free for Education", href: "#" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Blog", href: "#" },
      { label: "Guides & Courses", href: "#" },
      { label: "Course: Sketch 101", href: "#" },
      { label: "Course: Sketch 102", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Newsletter", href: "#" },
      { label: "Developer Platform", href: "#", isExternal: true },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Support", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Manage License", href: "#" },
      { label: "Community Forum", href: "#", isExternal: true },
      { label: "Service Status", href: "#", isExternal: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Security", href: "#" },
      { label: "Terms & Policies", href: "#" },
    ],
  },
];

export default function FooterSketch({
  mode = "light",
  newsletterTitle = "Never miss an update",
  newsletterDescription = "Get all the latest news, blog posts and product updates from Sketch, delivered directly to your inbox.\nWe'll rarely send more than one email a month.",
  emailPlaceholder = "Email address",
  signUpButtonText = "Sign up",
  consentText = "I agree to receive marketing emails from Sketch.",
  linkColumns = defaultLinkColumns,
  copyrightText = "2024 Sketch B.V.",
  socialLinks = {
    twitter: "#",
    instagram: "#",
    youtube: "#",
    mastodon: "#",
  },
}: FooterSketchProps) {
  const colors = COLORS[mode];
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <footer
      className="relative w-full py-16 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.background }}
    >
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Newsletter Section */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16"
          variants={itemVariants}
        >
          {/* Left side - Title and Description */}
          <div className="lg:max-w-md">
            <h3
              className={`text-base font-semibold mb-2 ${
                mode === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {newsletterTitle}
            </h3>
            <p
              className={`text-sm leading-relaxed ${
                mode === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {newsletterDescription.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < newsletterDescription.split("\n").length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          {/* Right side - Form */}
          <div className="lg:max-w-md w-full">
            <div className="flex gap-2 mb-3">
              <input
                type="email"
                placeholder={emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`flex-1 px-4 py-3 text-sm border rounded-md outline-none transition-colors ${
                  mode === "dark"
                    ? "bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-500"
                    : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-gray-400"
                }`}
              />
              <button
                className="px-5 py-3 text-sm font-medium rounded-md transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: colors.buttonBg,
                  color: colors.buttonText,
                }}
              >
                {signUpButtonText}
              </button>
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className={`w-4 h-4 rounded border ${
                  mode === "dark" ? "border-gray-600" : "border-gray-300"
                }`}
              />
              <span
                className={`text-sm ${
                  mode === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {consentText}
              </span>
            </label>
          </div>
        </motion.div>

        {/* Links Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16"
          variants={containerVariants}
        >
          {linkColumns.map((column, columnIndex) => (
            <motion.div key={columnIndex} variants={itemVariants}>
              <h4
                className={`text-sm font-semibold mb-4 ${
                  mode === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {column.title}
              </h4>
              <ul className="space-y-2.5">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className={`text-sm inline-flex items-center gap-1.5 transition-colors ${
                        mode === "dark"
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {link.label}
                      {link.isNew && (
                        <span
                          className={`text-xs font-medium uppercase tracking-wide ${
                            mode === "dark" ? "text-gray-500" : "text-gray-400"
                          }`}
                        >
                          NEW
                        </span>
                      )}
                      {link.isExternal && (
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8 border-t"
          style={{
            borderColor: mode === "dark" ? "#333333" : "#E5E5E5",
          }}
          variants={itemVariants}
        >
          {/* Logo */}
          <div
            className={mode === "dark" ? "text-white" : "text-gray-400"}
          >
            <SketchLogo />
          </div>

          {/* Copyright */}
          <p
            className={`text-sm ${
              mode === "dark" ? "text-gray-500" : "text-gray-500"
            }`}
          >
            &copy; {copyrightText}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                className={`transition-colors ${
                  mode === "dark"
                    ? "text-gray-500 hover:text-white"
                    : "text-gray-400 hover:text-gray-900"
                }`}
                aria-label="Twitter"
              >
                <XIcon />
              </a>
            )}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                className={`transition-colors ${
                  mode === "dark"
                    ? "text-gray-500 hover:text-white"
                    : "text-gray-400 hover:text-gray-900"
                }`}
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            )}
            {socialLinks.youtube && (
              <a
                href={socialLinks.youtube}
                className={`transition-colors ${
                  mode === "dark"
                    ? "text-gray-500 hover:text-white"
                    : "text-gray-400 hover:text-gray-900"
                }`}
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </a>
            )}
            {socialLinks.mastodon && (
              <a
                href={socialLinks.mastodon}
                className={`transition-colors ${
                  mode === "dark"
                    ? "text-gray-500 hover:text-white"
                    : "text-gray-400 hover:text-gray-900"
                }`}
                aria-label="Mastodon"
              >
                <MastodonIcon />
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
