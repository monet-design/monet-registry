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
    // Primary accent
    accent: "#2751E2",          // Kajabi 블루
    accentHover: "#1e41b8",     // 호버 상태
  },
  dark: {
    accent: "#4B6FEE",
    accentHover: "#3B5FDE",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  dashboard: {
    path: "/registry/kajabi-home-hero/dashboard-preview.png",
    alt: "Kajabi Dashboard Preview",
    prompt: `Kajabi creator platform dashboard interface screenshot.
Style: Clean, modern SaaS interface with professional business aesthetic
Layout: Creator dashboard showing content management, analytics, and navigation
Composition:
- Main area: Dashboard overview with course/product listings
- Left sidebar: Navigation menu (Dashboard, Products, Marketing, Sales, etc)
- Top bar: Search, notifications, user profile
- Center: Content cards showing courses, memberships, coaching products
- Stats widgets: Revenue, students, engagement metrics
Color palette: White background, blue (#2751E2) accents, gray text, clean cards
Elements: Product thumbnails, progress bars, analytics graphs, navigation icons
Mood: Professional, organized, empowering for creators
Technical: Modern web dashboard, clear typography, card-based layout`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

// Types
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface KajabiHomeHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  headline?: string;
  highlightedText?: string;
  subheadline?: string;
  ctaText?: string;
  loginText?: string;
  navItems?: NavItem[];
  dashboardImageSrc?: string;
  onCtaClick?: () => void;
  onLoginClick?: () => void;
}

// Kajabi Logo Icon
function KajabiLogo({
  className = "w-5 h-5",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm0 2.18l5.5 2.75v7.14L12 16.82l-5.5-2.75V7.93L12 4.18z" />
      <path d="M12 8.5L8.5 10.25v3.5L12 15.5l3.5-1.75v-3.5L12 8.5z" />
    </svg>
  );
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Products", href: "#", hasDropdown: true },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Blog", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Login", href: "#" },
];

// Main Component
export default function KajabiHomeHero({
  mode = "light",
  logoText = "KAJABI",
  headline = "All the tools you need to build a successful",
  highlightedText = "knowledge business",
  subheadline = "Kajabi is the leading all-in-one platform for entrepreneurs who want to create, market, and sell online courses, coaching programs, memberships, and more.",
  ctaText = "GET STARTED",
  loginText = "Login",
  navItems = defaultNavItems,
  dashboardImageSrc = IMAGES.dashboard.path,
  onCtaClick,
  onLoginClick,
}: KajabiHomeHeroProps) {
  const colors = COLORS[mode];
  return (
    <section className="relative min-h-screen w-full bg-white dark:bg-gray-950 overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <KajabiLogo className="w-6 h-6" style={{ color: colors.accent }} />
          <span className="text-sm font-bold tracking-wider text-gray-900 dark:text-gray-100">
            {logoText}
          </span>
        </div>

        {/* Navigation Items - Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.slice(0, -1).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-sm text-gray-900 dark:text-gray-100 transition-colors"
              style={{
                ["--hover-color" as string]: colors.accent,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              {item.label}
              {item.hasDropdown && (
                <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              )}
            </a>
          ))}
        </div>

        {/* Right Side - Login & CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={onLoginClick}
            className="hidden sm:block text-sm text-gray-900 dark:text-gray-100 transition-colors"
            onMouseEnter={(e) => (e.currentTarget.style.color = colors.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            {loginText}
          </button>
          <button
            onClick={onCtaClick}
            className="rounded-full px-5 py-2.5 text-xs font-semibold tracking-wider text-white transition-colors"
            style={{
              backgroundColor: colors.accent,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.accentHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.accent)}
          >
            {ctaText}
          </button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-8 sm:px-8 sm:pt-20 lg:pt-24">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            {headline}
            <br />
            <span style={{ color: colors.accent }}>{highlightedText}</span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg"
        >
          {subheadline}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex justify-center"
        >
          <button
            onClick={onCtaClick}
            className="rounded-full px-8 py-4 text-sm font-semibold tracking-wider text-white transition-all hover:shadow-lg"
            style={{
              backgroundColor: colors.accent,
              ["--shadow-color" as string]: `${colors.accent}40`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.accentHover;
              e.currentTarget.style.boxShadow = `0 10px 15px -3px ${colors.accent}40`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.accent;
              e.currentTarget.style.boxShadow = "";
            }}
          >
            {ctaText}
          </button>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative mt-12 sm:mt-16"
        >
          {/* Decorative background gradient */}
          <div
            className="absolute -inset-4 rounded-3xl"
            style={{
              background: `linear-gradient(to bottom, ${colors.accent}0D, transparent)`,
            }}
          />

          {/* Dashboard Image Container */}
          <div
            className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-2xl"
            style={{
              boxShadow: `0 25px 50px -12px ${colors.accent}1A`,
            }}
          >
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 border-b border-[#E5E5E5] bg-[#FAFAFA] px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <div className="h-3 w-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="ml-4 flex-1">
                <div className="mx-auto max-w-xs rounded-md bg-white border border-[#E5E5E5] px-3 py-1.5 text-center text-xs text-[#888]">
                  app.kajabi.com
                </div>
              </div>
            </div>

            {/* Dashboard Image */}
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={dashboardImageSrc}
                alt="Kajabi Dashboard Preview"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Floating Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -left-4 top-1/4 hidden lg:block"
          >
            <div className="rounded-xl bg-white p-4 shadow-lg border border-[#E5E5E5]">
              <div className="text-xs text-[#6B6B6B]">Total Revenue</div>
              <div className="mt-1 text-xl font-bold text-[#1A1A1A]">
                $24,580
              </div>
              <div className="mt-1 text-xs text-green-500">+12.5%</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute -right-4 top-1/3 hidden lg:block"
          >
            <div className="rounded-xl bg-white p-4 shadow-lg border border-[#E5E5E5]">
              <div className="text-xs text-[#6B6B6B]">Active Students</div>
              <div className="mt-1 text-xl font-bold text-[#1A1A1A]">2,847</div>
              <div className="mt-1 text-xs text-green-500">+8.3%</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
