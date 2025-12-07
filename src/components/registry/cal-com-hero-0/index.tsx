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
    // Cal.com 브랜드 컬러
    accent: "#292929", // 검정 (primary button)
    accentHover: "#1a1a1a",
    textPrimary: "#101010",
    textSecondary: "#6b7280",
    textMuted: "#9ca3af",
    border: "#e5e7eb",
    badgeBg: "#f3f4f6",
    badgeText: "#374151",
  },
  dark: {
    accent: "#ffffff",
    accentHover: "#e5e5e5",
    textPrimary: "#ffffff",
    textSecondary: "#a1a1aa",
    textMuted: "#71717a",
    border: "#27272a",
    badgeBg: "#27272a",
    badgeText: "#d4d4d8",
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
import { Calendar, Clock, Video, Users, Star, ChevronDown } from "lucide-react";

interface CalComHero0Props {
  mode?: "light" | "dark";
  badge?: string;
  headline?: string;
  subheadline?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  logoCloudTitle?: string;
  companyLogos?: string[];
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

// Google Icon Component
function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

// Cal.com Logo
function CalLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-8 w-8 rounded-lg bg-black flex items-center justify-center">
        <Calendar className="h-5 w-5 text-white" />
      </div>
      <span className="text-xl font-bold text-gray-900">Cal.com</span>
    </div>
  );
}

// Product Screenshot Mock Component
function ProductScreenshot() {
  return (
    <div className="relative w-full max-w-md">
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden"
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold text-sm">
              M
            </div>
            <div>
              <div className="font-semibold text-gray-900 text-sm">May</div>
              <div className="text-xs text-gray-500">cal.com/may</div>
            </div>
          </div>
        </div>

        {/* Meeting Types */}
        <div className="p-4 space-y-3">
          {/* Photoshoot */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-gray-300 cursor-pointer transition-colors"
          >
            <div className="h-2 w-2 rounded-full bg-purple-500" />
            <div className="flex-1">
              <div className="font-medium text-gray-900 text-sm">Photoshoot</div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Clock className="h-3 w-3" />
                <span>1h - 2h 30m</span>
                <span className="text-gray-300">|</span>
                <span>In person</span>
              </div>
            </div>
          </motion.div>

          {/* Quick meeting on camera */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-gray-300 cursor-pointer transition-colors"
          >
            <div className="h-2 w-2 rounded-full bg-pink-500" />
            <div className="flex-1">
              <div className="font-medium text-gray-900 text-sm">Quick meeting on camera</div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Clock className="h-3 w-3" />
                <span>15m</span>
                <span className="text-gray-300">|</span>
                <Video className="h-3 w-3" />
                <span>Google Meet</span>
              </div>
            </div>
          </motion.div>

          {/* View more link */}
          <div className="text-center pt-2">
            <span className="text-sm text-gray-400 cursor-pointer hover:text-gray-600">
              + 3 more
            </span>
          </div>
        </div>
      </motion.div>

      {/* Floating Card - cal.com/today */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute -right-4 top-4 w-48 rounded-xl border border-gray-200 bg-white shadow-lg p-3"
      >
        <div className="text-xs text-gray-400 mb-2">cal.com/today</div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-blue-50 border border-blue-100">
            <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center">
              <Users className="h-3 w-3 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium text-gray-900 truncate">Business meeting</div>
              <div className="text-[10px] text-gray-500">10:00 - 11:00</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Stars */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.3 }}
        className="absolute -left-2 bottom-20 flex gap-0.5"
      >
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
        ))}
      </motion.div>
    </div>
  );
}

// Company Logo Components (Text-based for simplicity)
function ThreeScaleLogo() {
  return (
    <span className="text-gray-400 font-semibold text-sm tracking-wide">ThreeScale</span>
  );
}

function VercelLogo() {
  return (
    <div className="flex items-center gap-1.5 text-gray-400">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 22h20L12 2z" />
      </svg>
      <span className="font-semibold text-sm">vercel</span>
    </div>
  );
}

function CoinbaseLogo() {
  return (
    <span className="text-gray-400 font-semibold text-sm">coinbase</span>
  );
}

function SimplybookLogo() {
  return (
    <span className="text-gray-400 font-semibold text-sm">simplybook</span>
  );
}

function KnightLogo() {
  return (
    <span className="text-gray-400 font-semibold text-sm">knight.io</span>
  );
}

// Default props
const defaultCompanyLogos = ["ThreeScale", "vercel", "coinbase", "simplybook", "knight.io"];

export default function CalComHero0({
  mode = "light",
  badge = "Loved by scheduling fans",
  headline = "The better way to\nschedule your\nmeetings",
  subheadline = "A fully customizable scheduling software for individuals,\nbusinesses, teams, and the entire enterprise platform.",
  primaryCtaText = "Sign up with Google",
  secondaryCtaText = "Sign up with email",
  logoCloudTitle = "Trusted by teams and enterprises including",
  companyLogos = defaultCompanyLogos,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: CalComHero0Props) {
  const colors = COLORS[mode];

  const renderLogo = (name: string, index: number) => {
    switch (name) {
      case "ThreeScale":
        return <ThreeScaleLogo key={index} />;
      case "vercel":
        return <VercelLogo key={index} />;
      case "coinbase":
        return <CoinbaseLogo key={index} />;
      case "simplybook":
        return <SimplybookLogo key={index} />;
      case "knight.io":
        return <KnightLogo key={index} />;
      default:
        return <span key={index} className="text-gray-400 font-semibold text-sm">{name}</span>;
    }
  };

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      `}</style>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <CalLogo />

        {/* Nav Items */}
        <div className="hidden lg:flex items-center gap-8">
          {["Solutions", "Enterprise", "Use", "Developers", "Resources", "Pricing"].map((item) => (
            <a
              key={item}
              href="#"
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item}
              {["Solutions", "Enterprise", "Developers", "Resources"].includes(item) && (
                <ChevronDown className="h-3 w-3" />
              )}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Login
          </button>
          <button
            className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
          >
            Get started
          </button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-12 pb-8 lg:pt-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 mb-6"
            >
              <span className="text-xs font-medium text-gray-600">{badge}</span>
              <span className="flex -space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="h-5 w-5 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white"
                  />
                ))}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-6"
            >
              {headline.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < headline.split("\n").length - 1 && <br />}
                </span>
              ))}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base sm:text-lg leading-relaxed text-gray-600 mb-8"
            >
              {subheadline.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < subheadline.split("\n").length - 1 && <br />}
                </span>
              ))}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={onPrimaryCtaClick}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
              >
                <GoogleIcon />
                {primaryCtaText}
              </button>
              <button
                onClick={onSecondaryCtaClick}
                className="inline-flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors underline underline-offset-4"
              >
                {secondaryCtaText}
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 border-2 border-white"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-semibold text-gray-900">4.8</span>
                <span className="mx-1">|</span>
                <span>Based on 1,000+ reviews</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Product Screenshot */}
          <div className="relative flex justify-center lg:justify-end">
            <ProductScreenshot />
          </div>
        </div>
      </div>

      {/* Logo Cloud */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="border-t border-gray-100 bg-gray-50/50"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-10">
          <p
            className="text-center text-xs text-gray-400 mb-8 uppercase tracking-wider"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {logoCloudTitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {companyLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              >
                {renderLogo(logo, index)}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
