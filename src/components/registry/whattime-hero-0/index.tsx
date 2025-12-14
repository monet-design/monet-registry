"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#00A47C",
    accentHover: "#008F6B",
    accentLight: "#E6F7F2",
  },
  dark: {
    accent: "#00C896",
    accentHover: "#00A47C",
    accentLight: "#0D3D2D",
  },
} as const;

const IMAGES = {
  heroPreview: {
    path: "/scraped/whattime-co-kr-2025-12-14/images/image-2.png",
    alt: "메인배너 이미지",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ChevronDown, Check } from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
}

interface WhattimeHero0Props {
  mode?: "light" | "dark";
  logoText?: string;
  navItems?: NavItem[];
  headline?: string;
  highlightedText?: string;
  subheadline?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  emailLinkText?: string;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

// Logo Component
function WhattimeLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-8 w-8 rounded-full bg-[#00A47C] flex items-center justify-center">
        <Check className="h-5 w-5 text-white" strokeWidth={3} />
      </div>
      <span className="text-xl font-bold text-gray-900">되는시간</span>
    </div>
  );
}

// Default values
const defaultNavItems: NavItem[] = [
  { label: "서비스 소개", hasDropdown: true },
  { label: "고객 사례", hasDropdown: true },
  { label: "고객 지원", hasDropdown: true },
  { label: "가격 안내" },
  { label: "도입 문의" },
];

export default function WhattimeHero0({
  mode = "light",
  logoText = "되는시간",
  navItems = defaultNavItems,
  headline = "간편하고 쉬운",
  highlightedText = "일정 관리",
  subheadline = "캘린더와 연동하여 편리하게 일정 관리하고, 많은 사람들과 빠르게 스케줄 잡으세요.",
  primaryCtaText = "Google로 시작하기",
  secondaryCtaText = "도입 문의하기",
  emailLinkText = "회사 e-mail로 시작하기",
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: WhattimeHero0Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(circle, #00A47C 0%, transparent 70%)" }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex items-center justify-between px-6 py-4 sm:px-8 lg:px-20"
      >
        <WhattimeLogo />

        {/* Nav Items */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href || "#"}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            로그인
          </button>
          <button
            className="rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-colors"
            style={{ backgroundColor: colors.accent }}
          >
            무료 사용
          </button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-16 sm:pt-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900"
        >
          {headline}{" "}
          <span style={{ color: colors.accent }}>{highlightedText}</span>
          의 시작
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
        >
          {subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <button
            onClick={onPrimaryCtaClick}
            className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {primaryCtaText}
          </button>
          <button
            onClick={onSecondaryCtaClick}
            className="rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors"
            style={{ backgroundColor: colors.accent }}
          >
            {secondaryCtaText}
          </button>
        </motion.div>

        {/* Email Link */}
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          href="#"
          className="inline-flex items-center gap-1 mt-4 text-sm hover:underline"
          style={{ color: colors.accent }}
        >
          {emailLinkText}
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.a>
      </div>

      {/* Hero Preview Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="relative z-10 px-6 pb-16 mt-12"
      >
        <div className="mx-auto max-w-5xl">
          <Image
            src={IMAGES.heroPreview.path}
            alt={IMAGES.heroPreview.alt}
            width={1158}
            height={648}
            className="w-full h-auto rounded-2xl shadow-2xl"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
