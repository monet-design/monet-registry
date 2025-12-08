"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#1d232a",
    cardBg: "#191e24",
    chartBar: "#FFBE18",
    discord: "#7289da",
    discordHover: "#596dac",
    textPrimary: "#ffffff",
    textSecondary: "#a6adbb",
    textMuted: "#6b7280",
    border: "rgba(166, 173, 187, 0.1)",
  },
  dark: {
    background: "#1d232a",
    cardBg: "#191e24",
    chartBar: "#FFBE18",
    discord: "#7289da",
    discordHover: "#596dac",
    textPrimary: "#ffffff",
    textSecondary: "#a6adbb",
    textMuted: "#6b7280",
    border: "rgba(166, 173, 187, 0.1)",
  },
} as const;

/**
 * 콘텐츠 데이터
 */
const CONTENT = {
  brand: {
    name: "ShipFast",
    tagline: "Ship your startup in days, not weeks",
    copyright: "Copyright © 2025 - All rights reserved",
    builtWith: "Built with",
  },
  widget: {
    title: "Powered by",
    subtitle: "DataFast",
    activeUsers: 22,
    countries: [
      { name: "United States", flag: "🇺🇸", count: 3 },
      { name: "United Kingdom", flag: "🇬🇧", count: 2 },
      { name: "Australia", flag: "🇦🇺", count: 2 },
    ],
    timestamps: ["08:18", "08:25", "08:32", "08:39", "08:46"],
  },
  stats: {
    label: "TOTAL  REVENUE",
    revenue: "$1,008,525",
    verified: "Verified by TrustMRR",
  },
  discord: {
    buttonText: "Join Us",
    title: "We build together on Discord!",
  },
  links: {
    title: "LINKS",
    items: [
      { label: "Login", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Support", href: "#" },
      { label: "Leaderboard", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Affiliates — Earn up to $124 per sale", href: "#" },
    ],
  },
  legal: {
    title: "LEGAL",
    items: [
      { label: "Terms of services", href: "#" },
      { label: "Privacy policy", href: "#" },
      { label: "Licenses", href: "#" },
    ],
  },
  products: {
    title: "By the maker of ShipFast",
    items: [
      { label: "Newsletter for makers", href: "#" },
      { label: "TrustMRR", href: "#" },
      { label: "ByeDispute", href: "#" },
      { label: "IndiePage", href: "#" },
      { label: "ZenVoice", href: "#" },
      { label: "GamifyList", href: "#" },
      { label: "WorkbookPDF", href: "#" },
      { label: "HabitsGarden", href: "#" },
      { label: "PoopUp", href: "#" },
      { label: "Fake It Till You Make It", href: "#" },
      { label: "LogoFast", href: "#" },
      { label: "Logo inspiration", href: "#" },
      { label: "CodeFast", href: "#" },
      { label: "DataFast", href: "#" },
    ],
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Star } from "lucide-react";

interface ShipfaStFooter10Props {
  mode?: "light" | "dark";
}

// Lightning/Bolt icon
const LightningIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 375 509"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path d="M249.685 14.125C249.685 11.5046 248.913 8.94218 247.465 6.75675C246.017 4.57133 243.957 2.85951 241.542 1.83453C239.126 0.809546 236.463 0.516683 233.882 0.992419C231.301 1.46815 228.917 2.69147 227.028 4.50999L179.466 50.1812C108.664 118.158 48.8369 196.677 2.11373 282.944C0.964078 284.975 0.367442 287.272 0.38324 289.605C0.399039 291.938 1.02672 294.226 2.20377 296.241C3.38082 298.257 5.06616 299.929 7.09195 301.092C9.11775 302.255 11.4133 302.867 13.75 302.869H129.042V494.875C129.039 497.466 129.791 500.001 131.205 502.173C132.62 504.345 134.637 506.059 137.01 507.106C139.383 508.153 142.01 508.489 144.571 508.072C147.131 507.655 149.516 506.503 151.432 504.757L172.698 485.394C247.19 417.643 310.406 338.487 359.975 250.894L373.136 227.658C374.292 225.626 374.894 223.327 374.882 220.99C374.87 218.653 374.243 216.361 373.065 214.341C371.887 212.322 370.199 210.646 368.17 209.482C366.141 208.318 363.841 207.706 361.5 207.707H249.685V14.125Z" />
  </svg>
);

// Discord icon
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
  </svg>
);

// Chart bars component for DataFast widget
const ChartBars = ({ color }: { color: string }) => {
  const barHeights = [40, 70, 60, 85, 55, 20, 50, 65, 45, 60, 75, 45, 30, 55, 70];

  return (
    <div className="flex items-end gap-[3px] h-16">
      {barHeights.map((height, i) => (
        <div
          key={i}
          className="w-[6px] rounded-sm"
          style={{
            height: `${height}%`,
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
};

export default function ShipfaStFooter10({
  mode = "dark",
}: ShipfaStFooter10Props) {
  const colors = COLORS[mode];

  return (
    <footer
      className="w-full py-24 px-8"
      style={{
        backgroundColor: colors.background,
        borderTop: `1px solid ${colors.border}`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:flex-nowrap flex-wrap">
          {/* Left column - Brand & Widget */}
          <div className="w-80 max-w-full flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            {/* Logo */}
            <a href="#" className="flex gap-2 justify-center md:justify-start items-center">
              <div
                className="w-6 h-6 rounded flex items-center justify-center"
                style={{ backgroundColor: colors.chartBar }}
              >
                <LightningIcon className="w-3.5 h-3.5 text-gray-900" />
              </div>
              <strong
                className="font-extrabold tracking-tight text-base md:text-lg"
                style={{ color: colors.textPrimary }}
              >
                {CONTENT.brand.name}
              </strong>
            </a>

            {/* Tagline */}
            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: colors.textSecondary }}
            >
              {CONTENT.brand.tagline}
              <br />
              {CONTENT.brand.copyright}
            </p>

            {/* Built with badge */}
            <a
              href="#"
              className="inline-flex gap-1 items-center mt-4 text-sm border rounded px-2 py-1 transition-all duration-200 hover:bg-gray-800"
              style={{
                color: colors.textSecondary,
                borderColor: colors.border,
              }}
            >
              <span>{CONTENT.brand.builtWith}</span>
              <span
                className="font-bold flex gap-0.5 items-center tracking-tight"
                style={{ color: colors.textPrimary }}
              >
                <div
                  className="w-5 h-5 rounded flex items-center justify-center"
                  style={{ backgroundColor: colors.chartBar }}
                >
                  <LightningIcon className="w-3 h-3 text-gray-900" />
                </div>
                {CONTENT.brand.name}
              </span>
            </a>

            {/* DataFast Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-5 rounded-lg p-4 w-full max-w-[330px]"
              style={{ backgroundColor: colors.cardBg }}
            >
              {/* Active users count */}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-3xl font-bold"
                  style={{ color: colors.textPrimary }}
                >
                  {CONTENT.widget.activeUsers}
                </span>
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: colors.chartBar }}
                />
              </div>

              {/* Chart */}
              <ChartBars color={colors.chartBar} />

              {/* Timestamps */}
              <div className="flex justify-between mt-2">
                {CONTENT.widget.timestamps.map((time, i) => (
                  <span
                    key={i}
                    className="text-xs"
                    style={{ color: colors.textMuted }}
                  >
                    {time}
                  </span>
                ))}
              </div>

              {/* Country section */}
              <div className="mt-4">
                <p
                  className="text-xs uppercase tracking-wider mb-3"
                  style={{ color: colors.textMuted }}
                >
                  COUNTRY
                </p>
                <div className="space-y-2">
                  {CONTENT.widget.countries.map((country, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">{country.flag}</span>
                        <span
                          className="text-sm font-medium"
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
              </div>
            </motion.div>

            {/* Powered by DataFast */}
            <p className="mt-2 text-sm" style={{ color: colors.textSecondary }}>
              {CONTENT.widget.title}{" "}
              <a href="#" className="underline hover:opacity-80">
                {CONTENT.widget.subtitle}
              </a>{" "}
              <span>👆</span>
            </p>

            {/* Mobile Discord section */}
            <div className="mt-8 space-y-2 md:hidden">
              <p
                className="font-medium text-sm"
                style={{ color: colors.textPrimary }}
              >
                {CONTENT.discord.title}
              </p>
              <button
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-sm text-white font-medium transition-colors"
                style={{ backgroundColor: colors.discord }}
              >
                <DiscordIcon className="w-4 h-4" />
                {CONTENT.discord.buttonText}
              </button>
            </div>
          </div>

          {/* Right columns - Links */}
          <div className="flex-grow flex flex-wrap md:pl-24 -mb-10 md:mt-0 mt-10 text-center md:text-left">
            {/* LINKS column */}
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h4
                className="font-semibold tracking-widest text-sm md:text-left mb-3"
                style={{ color: colors.textPrimary }}
              >
                {CONTENT.links.title}
              </h4>
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                {CONTENT.links.items.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="hover:underline transition-opacity hover:opacity-80"
                    style={{ color: colors.textSecondary }}
                  >
                    {item.label}
                  </a>
                ))}
                {/* Discord button desktop */}
                <button
                  className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded text-sm text-white font-medium transition-colors mt-2"
                  style={{ backgroundColor: colors.discord }}
                >
                  <DiscordIcon className="w-4 h-4" />
                  {CONTENT.discord.buttonText}
                </button>
              </div>
            </div>

            {/* LEGAL column */}
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h4
                className="font-semibold tracking-widest text-sm md:text-left mb-3"
                style={{ color: colors.textPrimary }}
              >
                {CONTENT.legal.title}
              </h4>
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                {CONTENT.legal.items.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="hover:underline transition-opacity hover:opacity-80"
                    style={{ color: colors.textSecondary }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* By the maker of ShipFast column */}
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h4
                className="font-semibold tracking-widest text-sm md:text-left mb-3"
                style={{ color: colors.textPrimary }}
              >
                {CONTENT.products.title}
              </h4>
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-6 text-sm">
                {CONTENT.products.items.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="hover:underline transition-opacity hover:opacity-80"
                    style={{ color: colors.textSecondary }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Revenue Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex md:justify-start justify-center"
              >
                <div className="inline-flex items-center gap-3 bg-white rounded-lg p-4 shadow-lg">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: colors.chartBar }}
                  >
                    <LightningIcon className="w-7 h-7 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium">
                      {CONTENT.stats.label}
                    </p>
                    <p className="text-xl font-bold text-gray-900 font-mono tracking-tight">
                      {CONTENT.stats.revenue}
                    </p>
                    <p className="text-[10px] text-gray-400 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {CONTENT.stats.verified}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
