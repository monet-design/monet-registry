"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#1a1a1a",
    textPrimary: "#ffffff",
    textSecondary: "#9ca3af",
    border: "#2a2a2a",
    chartBar: "#e8abe7",
    badge: "#f5f5f5",
    badgeText: "#1a1a1a",
  },
  dark: {
    background: "#1a1a1a",
    textPrimary: "#ffffff",
    textSecondary: "#9ca3af",
    border: "#2a2a2a",
    chartBar: "#e8abe7",
    badge: "#f5f5f5",
    badgeText: "#1a1a1a",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Code, Zap } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface CountryData {
  flag: string;
  name: string;
  count: number;
}

interface CodefaStFooter16Props {
  mode?: "light" | "dark";
  brandName?: string;
  tagline?: string;
  madeWith?: string;
  authorName?: string;
  authorLink?: string;
  builtWithLabel?: string;
  builtWithName?: string;
  builtWithLink?: string;
  copyright?: string;
  activeUsers?: number;
  chartData?: number[];
  countries?: CountryData[];
  linksTitle?: string;
  links?: FooterLink[];
  legalTitle?: string;
  legalLinks?: FooterLink[];
  makerTitle?: string;
  makerLinks?: FooterLink[];
  poweredByLabel?: string;
  poweredByName?: string;
  poweredByLink?: string;
}

export default function CodefaStFooter16({
  mode = "dark",
  brandName = "CodeFast",
  tagline = "Learn to code in weeks, not months.",
  madeWith = "Made with ☕️ and 🥐 by",
  authorName = "Marc",
  authorLink = "https://marclou.com",
  builtWithLabel = "Built with",
  builtWithName = "ShipFast",
  builtWithLink = "#",
  copyright = "Copyright © 2025 - All rights reserved",
  activeUsers = 16,
  chartData = [3, 5, 8, 4, 6, 7, 5, 4, 3, 2],
  countries = [
    { flag: "🇺🇸", name: "United States", count: 4 },
    { flag: "🇬🇧", name: "United Kingdom", count: 3 },
    { flag: "🇨🇦", name: "Canada", count: 3 },
  ],
  linksTitle = "LINKS",
  links = [
    { label: "Support", href: "#", external: true },
    { label: "Pricing", href: "#" },
    { label: "Course", href: "#" },
    { label: "Roadmap", href: "#" },
    { label: "Reviews & Case Studies", href: "#" },
    { label: "Affiliate (Earn up to $150)", href: "#" },
  ],
  legalTitle = "LEGAL",
  legalLinks = [
    { label: "Terms of services", href: "#" },
    { label: "Privacy policy", href: "#" },
  ],
  makerTitle = "BY THE MAKER OF THIS SITE",
  makerLinks = [
    { label: "Newsletter for makers", href: "#", external: true },
    { label: "TrustMRR", href: "#", external: true },
    { label: "ByeDispute", href: "#", external: true },
    { label: "IndiePage", href: "#", external: true },
    { label: "ZenVoice", href: "#", external: true },
    { label: "GamifyList", href: "#", external: true },
    { label: "WorkbookPDF", href: "#", external: true },
    { label: "HabitsGarden", href: "#", external: true },
    { label: "ShipFast", href: "#", external: true },
    { label: "DataFast", href: "#", external: true },
  ],
  poweredByLabel = "Powered by",
  poweredByName = "DataFast",
  poweredByLink = "#",
}: CodefaStFooter16Props) {
  const colors = COLORS[mode];
  const maxChartValue = Math.max(...chartData);

  return (
    <footer
      className="w-full border-t"
      style={{
        backgroundColor: colors.background,
        borderColor: colors.border,
      }}
    >
      <div className="mx-auto max-w-7xl px-8 py-24">
        <div className="flex flex-col flex-wrap md:flex-row md:flex-nowrap md:items-start">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex-shrink-0 text-center md:mx-0 md:w-96 md:pr-12 md:text-left"
          >
            {/* Logo */}
            <a
              href="#"
              className="flex items-center justify-center gap-2 md:justify-start"
            >
              <div
                className="flex h-6 w-6 items-center justify-center rounded"
                style={{ color: colors.textPrimary }}
              >
                <Code className="h-5 w-5" />
              </div>
              <strong
                className="text-base font-extrabold tracking-tight md:text-lg"
                style={{ color: colors.textPrimary }}
              >
                {brandName}
              </strong>
            </a>

            {/* Tagline */}
            <p
              className="mt-3 text-sm"
              style={{ color: colors.textSecondary }}
            >
              {tagline}
            </p>

            {/* Made with */}
            <p
              className="mb-3 mt-1 text-sm"
              style={{ color: colors.textSecondary }}
            >
              {madeWith}{" "}
              <a
                href={authorLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
                style={{ color: colors.textPrimary }}
              >
                {authorName}
              </a>
            </p>

            {/* Built with badge */}
            <a
              href={builtWithLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cursor-pointer rounded px-2 py-1 text-sm ring-1 ring-white/10 transition-all duration-200 hover:ring-yellow-500"
              style={{
                backgroundColor: colors.badge,
                color: colors.badgeText,
              }}
            >
              <div className="flex items-center gap-1">
                <span>{builtWithLabel}</span>
                <span className="flex items-center gap-0.5 font-semibold tracking-tight">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  {builtWithName}
                </span>
              </div>
            </a>

            {/* Copyright */}
            <p
              className="mt-2 text-sm opacity-80"
              style={{ color: colors.textSecondary }}
            >
              {copyright}
            </p>

            {/* Analytics Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 w-full max-w-[330px] rounded-lg border p-4 text-left"
              style={{
                backgroundColor: "#242424",
                borderColor: colors.border,
              }}
            >
              {/* Users count */}
              <p
                className="text-xs font-medium tracking-wider"
                style={{ color: colors.textSecondary }}
              >
                USERS IN LAST 30 MINUTES
              </p>
              <div className="mt-2 flex items-center gap-2">
                <span
                  className="text-4xl font-bold"
                  style={{ color: colors.textPrimary }}
                >
                  {activeUsers}
                </span>
                <span
                  className="h-2 w-2 animate-pulse rounded-full"
                  style={{ backgroundColor: colors.chartBar }}
                />
              </div>

              {/* Chart */}
              <div className="mt-4 flex h-20 items-end gap-1">
                {chartData.map((value, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t"
                    style={{
                      height: `${(value / maxChartValue) * 100}%`,
                      backgroundColor: colors.chartBar,
                      opacity: 0.8 + (index / chartData.length) * 0.2,
                    }}
                  />
                ))}
              </div>

              {/* Time labels */}
              <div
                className="mt-1 flex justify-between text-xs"
                style={{ color: colors.textSecondary }}
              >
                <span>08:18</span>
                <span>08:25</span>
                <span>08:32</span>
                <span>08:39</span>
                <span>08:46</span>
              </div>

              {/* Country stats */}
              <p
                className="mt-4 text-xs font-medium tracking-wider"
                style={{ color: colors.textSecondary }}
              >
                COUNTRY
              </p>
              <div className="mt-2 space-y-2">
                {countries.map((country, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{country.flag}</span>
                      <span
                        className="text-sm"
                        style={{ color: colors.textPrimary }}
                      >
                        {country.name}
                      </span>
                    </div>
                    <span
                      className="text-sm"
                      style={{ color: colors.textPrimary }}
                    >
                      {country.count}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Powered by */}
            <div className="mt-2">
              <a
                href={poweredByLink}
                className="text-sm transition-colors duration-100 hover:underline"
                style={{ color: `${colors.textPrimary}cc` }}
              >
                {poweredByLabel} {poweredByName} 👆
              </a>
            </div>
          </motion.div>

          {/* Links Columns */}
          <div className="-mb-10 mt-10 flex flex-grow flex-wrap justify-center text-center md:mt-0 md:text-left lg:pl-24">
            {/* Links Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full px-4 md:w-1/2 lg:w-1/3"
            >
              <div
                className="mb-3 text-sm font-semibold tracking-widest"
                style={{ color: colors.textPrimary }}
              >
                {linksTitle}
              </div>
              <div className="mb-10 flex flex-col items-center gap-2 text-sm md:items-start">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="transition-opacity hover:opacity-80"
                    style={{ color: colors.textPrimary }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Legal Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full px-4 md:w-1/2 lg:w-1/3"
            >
              <div
                className="mb-3 text-sm font-semibold tracking-widest"
                style={{ color: colors.textPrimary }}
              >
                {legalTitle}
              </div>
              <div className="mb-10 flex flex-col items-center gap-2 text-sm md:items-start">
                {legalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="transition-opacity hover:opacity-80"
                    style={{ color: colors.textPrimary }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Maker Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full px-4 md:w-1/2 lg:w-1/3"
            >
              <div
                className="mb-3 text-sm font-semibold tracking-widest"
                style={{ color: colors.textPrimary }}
              >
                {makerTitle}
              </div>
              <div className="mb-10 flex flex-col items-center gap-2 text-sm md:items-start">
                {makerLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="transition-opacity hover:opacity-80"
                    style={{ color: colors.textPrimary }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
