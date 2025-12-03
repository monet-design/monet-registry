"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#000000",
    categoryTitle: "#FFFFFF",
    linkText: "#9CA3AF",
    linkHover: "#FFFFFF",
    borderColor: "#374151",
    copyrightText: "#6B7280",
  },
  dark: {
    background: "#000000",
    categoryTitle: "#FFFFFF",
    linkText: "#9CA3AF",
    linkHover: "#FFFFFF",
    borderColor: "#374151",
    copyrightText: "#6B7280",
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
import { ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterAhrefsProps {
  mode?: "light" | "dark";
  languages?: string[];
  defaultLanguage?: string;
  coreTools?: FooterLink[];
  freeSeoTools?: FooterLink[];
  extraTools?: FooterLink[];
  productLinks?: FooterLink[];
  companyLinks?: FooterLink[];
  resourceLinks?: FooterLink[];
  socialLinks?: FooterLink[];
  copyrightText?: string;
}

const defaultCoreTools: FooterLink[] = [
  { label: "Dashboard", href: "#" },
  { label: "Site Explorer", href: "#" },
  { label: "Keywords Explorer", href: "#" },
  { label: "Site Audit", href: "#" },
  { label: "Rank Tracker", href: "#" },
  { label: "Content Explorer", href: "#" },
];

const defaultFreeSeoTools: FooterLink[] = [
  { label: "Webmaster Tools", href: "#" },
  { label: "Backlink Checker", href: "#" },
  { label: "Broken Link Checker", href: "#" },
  { label: "Website Authority Checker", href: "#" },
  { label: "Keyword Generator", href: "#" },
  { label: "YouTube Keyword Tool", href: "#" },
  { label: "Amazon Keyword Tool", href: "#" },
  { label: "Bing Keyword Tool", href: "#" },
  { label: "SERP Checker", href: "#" },
  { label: "SEO Toolbar", href: "#" },
  { label: "WordPress Plugin", href: "#" },
  { label: "Keyword Rank Checker", href: "#" },
  { label: "Keyword Difficulty Checker", href: "#" },
  { label: "Website Checker", href: "#" },
  { label: "AI Writing tools", href: "#" },
];

const defaultExtraTools: FooterLink[] = [
  { label: "Domain Comparison", href: "#" },
  { label: "Batch Analysis", href: "#" },
  { label: "Link Intersect", href: "#" },
  { label: "Content Gap", href: "#" },
  { label: "Email Alerts", href: "#" },
  { label: "SEO Checker", href: "#" },
  { label: "Word Count", href: "#" },
  { label: "Grammar Checker", href: "#" },
  { label: "Traffic Checker", href: "#" },
  { label: "Looker Studio Connectors", href: "#" },
  { label: "Top Websites", href: "#" },
  { label: "SEO Reporting", href: "#" },
];

const defaultProductLinks: FooterLink[] = [
  { label: "Pricing", href: "#" },
  { label: "Our data", href: "#" },
  { label: "AhrefsBot", href: "#" },
  { label: "API", href: "#" },
  { label: "Enterprise", href: "#" },
];

const defaultCompanyLinks: FooterLink[] = [
  { label: "About", href: "#" },
  { label: "Team", href: "#" },
  { label: "Jobs", href: "#" },
  { label: "Media kit", href: "#" },
  { label: "Contact us", href: "#" },
  { label: "Legal info", href: "#" },
  { label: "Events", href: "#" },
];

const defaultResourceLinks: FooterLink[] = [
  { label: "Blog", href: "#" },
  { label: "Tech blog", href: "#" },
  { label: "Podcast", href: "#" },
  { label: "SEO Guide", href: "#" },
  { label: "Help center", href: "#" },
  { label: "Academy", href: "#" },
  { label: "Alternatives", href: "#" },
  { label: "SEO Agencies", href: "#" },
  { label: "Digest", href: "#" },
];

const defaultSocialLinks: FooterLink[] = [
  { label: "Twitter", href: "#" },
  { label: "Youtube", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Linkedin", href: "#" },
];

export default function FooterAhrefs({
  mode = "dark",
  languages = ["English", "Deutsch", "Espanol", "Francais", "Italiano", "Polski", "Portugues"],
  defaultLanguage = "English",
  coreTools = defaultCoreTools,
  freeSeoTools = defaultFreeSeoTools,
  extraTools = defaultExtraTools,
  productLinks = defaultProductLinks,
  companyLinks = defaultCompanyLinks,
  resourceLinks = defaultResourceLinks,
  socialLinks = defaultSocialLinks,
  copyrightText = "2024 Ahrefs Pte. Ltd. (201227417H) 16 Raffles Quay, #33-03 Hong Leong Building, Singapore 048581",
}: FooterAhrefsProps) {
  const colors = COLORS[mode];
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

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

  const columnVariants = {
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

  return (
    <footer
      className="relative w-full py-16"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Language Selector */}
          <motion.div variants={columnVariants} className="col-span-1">
            <h3
              className="mb-4 text-sm font-semibold"
              style={{ color: colors.categoryTitle }}
            >
              Language
            </h3>
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors hover:border-gray-500"
                style={{
                  color: colors.categoryTitle,
                  borderColor: colors.borderColor,
                }}
              >
                {selectedLanguage}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${isLanguageOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isLanguageOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 top-full z-10 mt-1 rounded-md border py-1"
                  style={{
                    backgroundColor: colors.background,
                    borderColor: colors.borderColor,
                  }}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setIsLanguageOpen(false);
                      }}
                      className="block w-full px-4 py-1.5 text-left text-sm transition-colors hover:bg-gray-800"
                      style={{ color: colors.linkText }}
                    >
                      {lang}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Core tools */}
          <motion.div variants={columnVariants} className="col-span-1">
            <h3
              className="mb-4 text-sm font-semibold"
              style={{ color: colors.categoryTitle }}
            >
              Core tools
            </h3>
            <ul className="space-y-2.5">
              {coreTools.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: colors.linkText }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Free SEO tools */}
          <motion.div variants={columnVariants} className="col-span-1">
            <h3
              className="mb-4 flex items-center gap-1 text-sm font-semibold"
              style={{ color: colors.categoryTitle }}
            >
              Free SEO tools
              <ArrowRight size={14} />
            </h3>
            <ul className="space-y-2.5">
              {freeSeoTools.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: colors.linkText }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Extra tools & features */}
          <motion.div variants={columnVariants} className="col-span-1">
            <h3
              className="mb-4 text-sm font-semibold"
              style={{ color: colors.categoryTitle }}
            >
              Extra tools & features
            </h3>
            <ul className="space-y-2.5">
              {extraTools.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: colors.linkText }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Product & Company */}
          <motion.div variants={columnVariants} className="col-span-1">
            <h3
              className="mb-4 text-sm font-semibold"
              style={{ color: colors.categoryTitle }}
            >
              Product
            </h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: colors.linkText }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <h3
              className="mb-4 mt-8 text-sm font-semibold"
              style={{ color: colors.categoryTitle }}
            >
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: colors.linkText }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources & Social */}
          <motion.div variants={columnVariants} className="col-span-1 lg:col-span-2">
            <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-2">
              <div>
                <h3
                  className="mb-4 text-sm font-semibold"
                  style={{ color: colors.categoryTitle }}
                >
                  Resources
                </h3>
                <ul className="space-y-2.5">
                  {resourceLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors hover:text-white"
                        style={{ color: colors.linkText }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 lg:mt-0">
                <h3
                  className="mb-4 text-sm font-semibold"
                  style={{ color: colors.categoryTitle }}
                >
                  Social
                </h3>
                <ul className="space-y-2.5">
                  {socialLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors hover:text-white"
                        style={{ color: colors.linkText }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-16 border-t pt-8"
          style={{ borderColor: colors.borderColor }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p
            className="text-center text-sm"
            style={{ color: colors.copyrightText }}
          >
            &copy; {copyrightText}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
