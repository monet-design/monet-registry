"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#1890FF",
    accentHover: "#40A9FF",
    background:
      "linear-gradient(180deg, #F1F5F9 0%, #E8F4FD 50%, #D4E8F9 100%)",
    navBg: "#FFFFFF",
    cardBg: "#1890FF",
    cardShadow: "rgba(24, 144, 255, 0.2)",
    textPrimary: "#27272A",
    textSecondary: "#71717A",
    border: "#E4E4E7",
    buttonPrimary: "#0F0F0F",
    buttonSecondary: "#FFFFFF",
  },
  dark: {
    accent: "#40A9FF",
    accentHover: "#69B9FF",
    background: "linear-gradient(180deg, #0F172A 0%, #1E293B 100%)",
    navBg: "#1E293B",
    cardBg: "#1890FF",
    cardShadow: "rgba(24, 144, 255, 0.3)",
    textPrimary: "#F4F4F5",
    textSecondary: "#A1A1AA",
    border: "#3F3F46",
    buttonPrimary: "#FFFFFF",
    buttonSecondary: "#27272A",
  },
} as const;

/**
 * 텍스트 콘텐츠
 */
const CONTENT = {
  nav: {
    logo: "Greeting",
    items: [
      { label: "왜 그리팅인가", href: "#" },
      { label: "제품", href: "#", hasDropdown: true },
      { label: "솔루션", href: "#", hasDropdown: true },
      { label: "고객 사례", href: "#", hasDropdown: true },
      { label: "가격", href: "#" },
      { label: "유용한 자료", href: "#", hasDropdown: true },
    ],
    login: "로그인",
    cta: "도입 문의",
  },
  hero: {
    badge: "국내 1위 채용 관리 솔루션",
    title: "채용 관리를 넘어 ",
    titleAccent: "채용 성공",
    titleEnd: "으로",
    description:
      "모집부터 선발까지, 수시부터 대규모 채용까지\n그리팅 하나로 모든 채용 문제를 해결하세요.",
    primaryCta: "도입 문의하기",
    secondaryCta: "무료 체험하기",
  },
  stats: [
    { label: "채용 속도 향상", value: "2X" },
    { label: "소싱 효율 개선", value: "67%" },
  ],
};

/**
 * 이미지 에셋
 */
const IMAGES = {
  hero: {
    path: "https://framerusercontent.com/images/auevaEFjVIwUfyVkExlqFkMBqI8.png?scale-down-to=1024",
    alt: "채용 관리 플랫폼을 사용하는 전문가",
    prompt: `<is_transparent_background>false</is_transparent_background>
<summary>Professional Korean woman smiling while working on laptop</summary>
<mood>Professional, friendly, modern workplace atmosphere</mood>
<background_summary>Light gray or transparent background, clean and minimal</background_summary>
<primary_element>A young Korean professional woman with short black hair, wearing a black casual sweater, sitting at a desk with a silver MacBook laptop. She is resting her chin on her hand and smiling warmly while looking at the screen. The pose is natural and confident.</primary_element>
<etc_element>Silver laptop on a light colored desk visible in the lower portion of the image</etc_element>`,
  },
  chartUp: {
    path: "https://framerusercontent.com/images/1K5yosrjvnQ7CoJhZt4UbclUYGA.png",
    alt: "상승 그래프",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

interface GreetinghrHero0Props {
  mode?: "light" | "dark";
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

// Pyramid Chart Component
function PyramidChart() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <defs>
        <linearGradient id="pyramidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="36%" stopColor="#EDF7FF" />
          <stop offset="100%" stopColor="#ADD9FF" />
        </linearGradient>
      </defs>
      {/* Top layer - darkest blue */}
      <polygon points="40,12 50,28 30,28" fill="#3752E9" />
      {/* Middle layer - medium blue */}
      <polygon points="30,28 50,28 58,44 22,44" fill="#4290FF" />
      {/* Bottom layer - lightest blue */}
      <polygon points="22,44 58,44 68,62 12,62" fill="#ADD9FF" />
    </svg>
  );
}

// Line Chart Component
function LineChart() {
  return (
    <svg viewBox="0 0 100 70" className="w-full h-full">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1890FF" />
          <stop offset="100%" stopColor="#40A9FF" />
        </linearGradient>
      </defs>
      <polyline
        points="10,50 30,45 50,55 70,25 90,20"
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arrow at end */}
      <polygon points="85,18 95,15 90,25" fill="#40A9FF" />
    </svg>
  );
}

export default function GreetinghrHero0({
  mode = "light",
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: GreetinghrHero0Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ background: colors.background }}
    >
      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 inline-flex items-center rounded-full border px-4 py-2"
            style={{
              backgroundColor: colors.navBg,
              borderColor: colors.border,
            }}
          >
            <span
              className="text-sm font-medium"
              style={{ color: colors.textPrimary }}
            >
              {CONTENT.hero.badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            style={{ color: colors.textPrimary }}
          >
            {CONTENT.hero.title}
            <span style={{ color: colors.accent }}>
              {CONTENT.hero.titleAccent}
            </span>
            {CONTENT.hero.titleEnd}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 max-w-xl whitespace-pre-line text-base sm:text-lg"
            style={{ color: colors.textSecondary }}
          >
            {CONTENT.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center gap-3 sm:flex-row"
          >
            <button
              onClick={onSecondaryCtaClick}
              className="rounded-md border px-6 py-3 text-sm font-medium transition-all hover:bg-gray-50"
              style={{
                backgroundColor: colors.buttonSecondary,
                borderColor: colors.border,
                color: colors.textPrimary,
              }}
            >
              {CONTENT.hero.secondaryCta}
            </button>
            <button
              onClick={onPrimaryCtaClick}
              className="flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium text-white transition-all hover:opacity-90"
              style={{ backgroundColor: colors.buttonPrimary }}
            >
              {CONTENT.hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>

        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative mt-12 flex items-end justify-center"
        >
          {/* Left Stats Card - 채용 속도 향상 2X */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute bottom-24 left-0 z-20 sm:left-4 md:left-8 lg:left-16"
          >
            <div
              className="rounded-2xl p-5 sm:p-6"
              style={{
                backgroundColor: colors.cardBg,
                boxShadow: `9px 10px 22px ${colors.cardShadow}`,
              }}
            >
              <p className="mb-1 text-sm font-bold text-white sm:text-base">
                {CONTENT.stats[0].label}
              </p>
              <p className="text-5xl font-medium text-white sm:text-6xl md:text-7xl">
                {CONTENT.stats[0].value}
              </p>
            </div>
          </motion.div>

          {/* Pyramid Icon Card */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute left-12 top-0 z-10 hidden sm:left-24 sm:block md:left-32 lg:left-48"
          >
            <div
              className="h-24 w-24 rounded-2xl p-4 sm:h-28 sm:w-28 md:h-32 md:w-32"
              style={{ backgroundColor: colors.navBg }}
            >
              <PyramidChart />
            </div>
          </motion.div>

          {/* Center Image */}
          <div className="relative z-10 h-[300px] w-[280px] sm:h-[380px] sm:w-[350px] md:h-[450px] md:w-[420px] lg:h-[500px] lg:w-[480px]">
            <Image
              src={IMAGES.hero.path}
              alt={IMAGES.hero.alt}
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>

          {/* Right Stats Card - 소싱 효율 개선 67% */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute right-0 top-8 z-20 sm:right-4 sm:top-12 md:right-8 lg:right-16"
          >
            <div
              className="rounded-2xl p-5 sm:p-6"
              style={{
                backgroundColor: colors.cardBg,
                boxShadow: `9px 10px 22px ${colors.cardShadow}`,
              }}
            >
              <p className="mb-1 text-sm font-bold text-white sm:text-base">
                {CONTENT.stats[1].label}
              </p>
              <p className="text-5xl font-medium text-white sm:text-6xl md:text-7xl">
                {CONTENT.stats[1].value}
              </p>
            </div>
          </motion.div>

          {/* Line Chart Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-16 right-8 z-10 hidden sm:right-16 sm:block md:right-24 lg:right-36"
          >
            <div
              className="h-20 w-24 rounded-2xl p-3 sm:h-24 sm:w-28"
              style={{ backgroundColor: colors.navBg }}
            >
              <LineChart />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
