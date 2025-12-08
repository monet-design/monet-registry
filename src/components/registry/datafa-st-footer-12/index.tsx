"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#1A1A1A",
    cardBg: "#242424",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
    linkHover: "#FFFFFF",
  },
  dark: {
    background: "#1A1A1A",
    cardBg: "#242424",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
    linkHover: "#FFFFFF",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface DatafaStFooter12Props {
  mode?: "light" | "dark";
  brand?: {
    name: string;
    description: string;
    copyright: string;
    madeBy?: string;
    madeByLink?: string;
    builtWith?: string;
  };
  sections?: FooterSection[];
  liveStats?: {
    label: string;
    count: number;
    countries?: Array<{ name: string; flag: string; count: number }>;
  };
}

const defaultSections: FooterSection[] = [
  {
    title: "LINKS",
    links: [
      { label: "Log in", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Affiliate program (50%)", href: "#" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Terms of services", href: "#" },
      { label: "Privacy policy", href: "#" },
      { label: "Data processing agreement", href: "#" },
    ],
  },
  {
    title: "MORE",
    links: [
      { label: "Newsletter for makers", href: "#" },
      { label: "TrustMRR", href: "#" },
      { label: "ByeDispute", href: "#" },
      { label: "IndiePage", href: "#" },
      { label: "ZenVoice", href: "#" },
      { label: "GamifyList", href: "#" },
      { label: "WorkbookPDF", href: "#" },
      { label: "HabitsGarden", href: "#" },
      { label: "CodeFast", href: "#" },
    ],
  },
];

const defaultBrand = {
  name: "DataFast",
  description: "DataFast is the best web analytics tool to discover which marketing channels drive revenue and grow your business, fast.",
  copyright: "Copyright 2025 - All rights reserved",
  madeBy: "Marc",
  madeByLink: "#",
  builtWith: "ShipFast",
};

const defaultLiveStats = {
  label: "USERS IN LAST 30 MINUTES",
  count: 30,
  countries: [
    { name: "United States", flag: "US", count: 11 },
    { name: "Malaysia", flag: "MY", count: 3 },
    { name: "India", flag: "IN", count: 2 },
  ],
};

export default function DatafaStFooter12({
  mode = "dark",
  brand = defaultBrand,
  sections = defaultSections,
  liveStats = defaultLiveStats,
}: DatafaStFooter12Props) {
  const colors = COLORS[mode];

  return (
    <footer
      className="w-full border-t border-gray-800 py-12 lg:py-16"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2"
          >
            {/* Logo */}
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <div className="flex gap-0.5">
                  <div className="h-4 w-1 rounded-sm bg-orange-500" />
                  <div className="h-5 w-1 rounded-sm bg-orange-400" />
                </div>
              </div>
              <span className="text-lg font-bold" style={{ color: colors.textPrimary }}>
                {brand.name}
              </span>
            </div>

            {/* Description */}
            <p
              className="mb-4 max-w-sm text-sm leading-relaxed"
              style={{ color: colors.textSecondary }}
            >
              {brand.description}
            </p>

            {/* Copyright */}
            <p className="mb-2 text-sm" style={{ color: colors.textSecondary }}>
              {brand.copyright}
            </p>

            {/* Made By */}
            <p className="mb-4 text-sm" style={{ color: colors.textSecondary }}>
              Made with coffee and mango by{" "}
              <a
                href={brand.madeByLink}
                className="underline transition-colors hover:text-white"
              >
                {brand.madeBy}
              </a>
            </p>

            {/* Built With Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-lg bg-gray-800 px-3 py-1.5 text-sm">
              <span style={{ color: colors.textSecondary }}>Built with</span>
              <span className="font-medium text-yellow-400">{brand.builtWith}</span>
            </div>

            {/* Live Stats Widget */}
            <div
              className="rounded-xl border border-gray-700/50 p-4"
              style={{ backgroundColor: colors.cardBg }}
            >
              <div
                className="mb-2 text-xs font-medium tracking-wider"
                style={{ color: colors.textSecondary }}
              >
                {liveStats.label}
              </div>
              <div className="mb-3 flex items-center gap-2">
                <span
                  className="text-3xl font-bold"
                  style={{ color: colors.textPrimary }}
                >
                  {liveStats.count}
                </span>
                <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
              </div>

              {/* Mini Chart */}
              <div className="mb-3 flex h-16 items-end gap-1">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t"
                    style={{
                      height: `${20 + Math.random() * 80}%`,
                      backgroundColor: colors.accent,
                    }}
                  />
                ))}
              </div>

              {/* Country Stats */}
              <div className="text-xs" style={{ color: colors.textSecondary }}>
                <div className="mb-1 font-medium tracking-wider">COUNTRY</div>
                {liveStats.countries?.map((country, i) => (
                  <div key={i} className="flex items-center justify-between py-0.5">
                    <div className="flex items-center gap-2">
                      <span>
                        {country.flag === "US" ? "🇺🇸" : country.flag === "MY" ? "🇲🇾" : "🇮🇳"}
                      </span>
                      <span>{country.name}</span>
                    </div>
                    <span>{country.count}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-3 text-xs" style={{ color: colors.textSecondary }}>
              Powered by DataFast
            </p>
          </motion.div>

          {/* Link Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <h4
                className="mb-4 text-sm font-medium tracking-wider"
                style={{ color: colors.textSecondary }}
              >
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: colors.textSecondary }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
}
