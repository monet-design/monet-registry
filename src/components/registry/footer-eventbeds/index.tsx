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
    // Primary 액센트 (섹션 제목 색상 - 보라색)
    accent: "#7C3AED",
    accentHover: "#6D28D9",
  },
  dark: {
    accent: "#A78BFA",
    accentHover: "#8B5CF6",
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

// SVG Logo Component
const EventBedsLogo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 25c-6.075 0-11-4.925-11-11S9.925 5 16 5s11 4.925 11 11-4.925 11-11 11z"
      fill="#9CA3AF"
    />
    <path
      d="M16 8c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 13c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5z"
      fill="#9CA3AF"
    />
  </svg>
);

// IATA Logo Component
const IATALogo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="60"
    height="40"
    viewBox="0 0 60 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="30" cy="20" r="18" stroke="#1F2937" strokeWidth="2" fill="none" />
    <text x="30" y="18" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1F2937">
      IATA
    </text>
    <text x="30" y="27" textAnchor="middle" fontSize="5" fill="#1F2937">
      ACCREDITED AGENT
    </text>
  </svg>
);

// ESSA Logo Component
const ESSALogo = ({ className }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <span className="text-xl tracking-[0.3em] font-light text-gray-800">ESSA</span>
    <div className="h-8 w-px bg-gray-300" />
    <div className="flex flex-col text-[10px] text-gray-600 leading-tight">
      <span>MEMBER</span>
      <span>2021</span>
    </div>
  </div>
);

interface FooterEventbedsProps {
  mode?: "light" | "dark";
  brandName?: string;
  brandDescription?: string;
  companyName?: string;
  address?: {
    line1: string;
    line2: string;
    line3: string;
    accreditationNumber?: string;
  };
  sitemapLinks?: Array<{ label: string; href: string }>;
  legalLinks?: Array<{ label: string; href: string }>;
  copyrightText?: string;
  showCertifications?: boolean;
}

export default function FooterEventbeds({
  mode = "light",
  brandName = "eventbeds",
  brandDescription = "EventBeds™ is a trading name\nof NuBreed Hotels Ltd.",
  companyName = "NuBreed Hotels Ltd",
  address = {
    line1: "Belgravia House, 115 Rockingham Street, Sheffield, S1 4EB",
    line2: "United Kingdom",
    line3: "",
    accreditationNumber: "IATA Accredited Agent: 96093104",
  },
  sitemapLinks = [
    { label: "Home", href: "#" },
    { label: "For business", href: "#" },
  ],
  legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  copyrightText = "EventBeds™ by NuBreed Hotels © 2023. All rights reserved.",
  showCertifications = true,
}: FooterEventbedsProps) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <footer
      className={`w-full ${isDark ? "bg-gray-950" : "bg-white"}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12"
        >
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <EventBedsLogo className="h-8 w-8" />
              <span
                className={`text-2xl font-normal ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {brandName}
                <sup className="text-xs">™</sup>
              </span>
            </div>
            <p
              className={`text-sm whitespace-pre-line ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {brandDescription}
            </p>
          </div>

          {/* Sitemap Column */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: colors.accent }}
            >
              Sitemap
            </h3>
            <nav className="flex flex-col gap-3">
              {sitemapLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`text-sm font-medium transition-colors hover:underline ${
                    isDark
                      ? "text-white hover:text-gray-300"
                      : "text-gray-900 hover:text-gray-600"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Address Column */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: colors.accent }}
            >
              Address
            </h3>
            <div
              className={`text-sm space-y-1 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <p className="font-medium">{companyName}</p>
              <p>{address.line1}</p>
              <p>{address.line2}</p>
              {address.line3 && <p>{address.line3}</p>}
              {address.accreditationNumber && (
                <p className="pt-1">{address.accreditationNumber}</p>
              )}
            </div>

            {/* Certifications */}
            {showCertifications && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-6 mt-4"
              >
                <IATALogo />
                <ESSALogo />
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Divider */}
        <div
          className={`mt-12 border-t ${
            isDark ? "border-gray-800" : "border-gray-200"
          }`}
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <p
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
          >
            {copyrightText}
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:underline ${
                  isDark
                    ? "text-white hover:text-gray-300"
                    : "text-gray-900 hover:text-gray-600"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
