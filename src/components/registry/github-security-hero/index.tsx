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
    accent: "#1f6feb",
    accentHover: "#388bfd",
    background: "#0d1117",
    cardGradientStart: "#1158c7",
    cardGradientEnd: "#388bfd",
  },
  dark: {
    accent: "#1f6feb",
    accentHover: "#388bfd",
    background: "#0d1117",
    cardGradientStart: "#1158c7",
    cardGradientEnd: "#388bfd",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, Code, ChevronRight } from "lucide-react";
import "./font.css";

// Types
interface FeatureCard {
  title: string;
  linkText: string;
  linkHref: string;
  icon: "check" | "code";
}

interface LogoItem {
  name: string;
  svg: React.ReactNode;
}

interface GithubSecurityHeroProps {
  mode?: "light" | "dark";
  badge?: string;
  headline?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaHref?: string;
  featureCards?: FeatureCard[];
  logos?: LogoItem[];
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

// Default feature cards
const defaultFeatureCards: FeatureCard[] = [
  {
    title: "Stop leaks before\nthey start",
    linkText: "Explore Secret Protection",
    linkHref: "#secret-protection",
    icon: "check",
  },
  {
    title: "Fix vulnerabilities\nin your code",
    linkText: "Explore Code Security",
    linkHref: "#code-security",
    icon: "code",
  },
];

// 3D Icon Components
function Check3DIcon() {
  return (
    <div className="relative w-24 h-24">
      {/* Glass hexagon background */}
      <div
        className="absolute inset-0 rounded-2xl rotate-12"
        style={{
          background: "linear-gradient(135deg, rgba(56, 139, 253, 0.4) 0%, rgba(31, 111, 235, 0.6) 100%)",
          boxShadow: "0 8px 32px rgba(31, 111, 235, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
          backdropFilter: "blur(8px)",
        }}
      />
      {/* Checkmark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Check className="w-12 h-12 text-[#3fb950] drop-shadow-lg" strokeWidth={3} />
      </div>
    </div>
  );
}

function Code3DIcon() {
  return (
    <div className="relative w-24 h-24">
      {/* Glass hexagon background */}
      <div
        className="absolute inset-0 rounded-2xl -rotate-12"
        style={{
          background: "linear-gradient(135deg, rgba(56, 139, 253, 0.4) 0%, rgba(31, 111, 235, 0.6) 100%)",
          boxShadow: "0 8px 32px rgba(31, 111, 235, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
          backdropFilter: "blur(8px)",
        }}
      />
      {/* Code brackets */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Code className="w-12 h-12 text-[#3fb950] drop-shadow-lg" strokeWidth={2.5} />
      </div>
    </div>
  );
}

// Logo Components
function CarlsbergLogo() {
  return (
    <svg viewBox="0 0 120 40" className="h-8 w-auto opacity-50 hover:opacity-80 transition-opacity">
      <text x="0" y="28" fill="#8b949e" fontSize="20" fontFamily="serif" fontStyle="italic">
        Carlsberg
      </text>
      <text x="0" y="38" fill="#8b949e" fontSize="10" fontFamily="sans-serif">
        Group
      </text>
    </svg>
  );
}

function MercadoLibreLogo() {
  return (
    <svg viewBox="0 0 140 40" className="h-8 w-auto opacity-50 hover:opacity-80 transition-opacity">
      <circle cx="20" cy="20" r="15" fill="none" stroke="#8b949e" strokeWidth="2" />
      <path d="M12 16 C12 16 20 28 28 16" fill="none" stroke="#8b949e" strokeWidth="2" />
      <text x="42" y="26" fill="#8b949e" fontSize="16" fontFamily="sans-serif" fontWeight="500">
        mercado
      </text>
      <text x="42" y="26" fill="#8b949e" fontSize="16" fontFamily="sans-serif" fontWeight="300">
        <tspan dx="58">libre</tspan>
      </text>
    </svg>
  );
}

function ThreeMlogo() {
  return (
    <svg viewBox="0 0 60 40" className="h-8 w-auto opacity-50 hover:opacity-80 transition-opacity">
      <text x="0" y="32" fill="#8b949e" fontSize="36" fontFamily="sans-serif" fontWeight="700">
        3M
      </text>
    </svg>
  );
}

function LinkedInLogo() {
  return (
    <svg viewBox="0 0 100 40" className="h-8 w-auto opacity-50 hover:opacity-80 transition-opacity">
      <text x="0" y="28" fill="#8b949e" fontSize="22" fontFamily="sans-serif" fontWeight="600">
        Linked
      </text>
      <rect x="72" y="8" width="22" height="22" rx="4" fill="#8b949e" />
      <text x="77" y="25" fill="#0d1117" fontSize="16" fontFamily="sans-serif" fontWeight="700">
        in
      </text>
    </svg>
  );
}

function OttoGroupLogo() {
  return (
    <svg viewBox="0 0 120 40" className="h-8 w-auto opacity-50 hover:opacity-80 transition-opacity">
      <text x="0" y="28" fill="#8b949e" fontSize="22" fontFamily="sans-serif" fontWeight="600">
        otto
      </text>
      <text x="50" y="28" fill="#8b949e" fontSize="22" fontFamily="sans-serif" fontWeight="300">
        group
      </text>
    </svg>
  );
}

// Default logos
const defaultLogos: LogoItem[] = [
  { name: "Carlsberg", svg: <CarlsbergLogo /> },
  { name: "Mercado Libre", svg: <MercadoLibreLogo /> },
  { name: "3M", svg: <ThreeMlogo /> },
  { name: "LinkedIn", svg: <LinkedInLogo /> },
  { name: "Otto Group", svg: <OttoGroupLogo /> },
];

// Feature Card Component
function FeatureCardComponent({
  card,
  index,
}: {
  card: FeatureCard;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
      className="relative overflow-hidden rounded-2xl p-6 md:p-8 flex-1 min-h-[200px]"
      style={{
        background: "linear-gradient(135deg, #1158c7 0%, #388bfd 100%)",
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-xl md:text-2xl font-medium text-white whitespace-pre-line leading-tight mb-auto">
          {card.title}
        </h3>
        <a
          href={card.linkHref}
          className="inline-flex items-center gap-1 text-white/90 hover:text-white text-sm mt-6 group transition-colors"
        >
          {card.linkText}
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* 3D Icon */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        {card.icon === "check" ? <Check3DIcon /> : <Code3DIcon />}
      </div>
    </motion.div>
  );
}

// Main Component
export default function GithubSecurityHero({
  mode = "dark",
  badge = "GitHub Advanced Security",
  headline = "Security that moves at the\nspeed of development",
  primaryCtaText = "Request a demo",
  secondaryCtaText = "See plans & pricing",
  primaryCtaHref = "#demo",
  secondaryCtaHref = "#pricing",
  featureCards = defaultFeatureCards,
  logos = defaultLogos,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: GithubSecurityHeroProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <span
            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium text-[#58a6ff] border border-[#388bfd]/50"
            style={{
              background: "rgba(56, 139, 253, 0.1)",
            }}
          >
            {badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="headline-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white text-center leading-[1.1] mb-10 whitespace-pre-line"
        >
          {headline}
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={onPrimaryCtaClick}
            className="px-6 py-3 bg-white text-[#0d1117] font-medium rounded-md hover:bg-gray-100 transition-colors text-sm"
          >
            {primaryCtaText}
          </button>
          <button
            onClick={onSecondaryCtaClick}
            className="px-6 py-3 font-medium rounded-md text-white text-sm transition-colors"
            style={{
              backgroundColor: colors.accent,
            }}
          >
            {secondaryCtaText}
          </button>
        </motion.div>

        {/* Feature Cards */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-16">
          {featureCards.map((card, index) => (
            <FeatureCardComponent key={card.title} card={card} index={index} />
          ))}
        </div>

        {/* Logo Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center">
              {logo.svg}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
