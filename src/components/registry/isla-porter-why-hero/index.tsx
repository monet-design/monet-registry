"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-white 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    // 브랜드 금색 액센트
    accent: "#C9A962",          // 골드 액센트
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  background: {
    path: "/registry/isla-porter-why-hero/background.jpg",
    alt: "Luxury kitchen interior",
    prompt: `Luxury modern kitchen interior photography.
Style: High-end architectural photography, professional real estate aesthetic
Layout: Wide angle view of designer kitchen with natural lighting
Composition:
- Modern minimalist kitchen with marble countertops and dark cabinetry
- Large windows with natural light flooding the space
- High-end appliances and fixtures
- Warm ambient lighting mixing with natural daylight
Color palette: Dark wood tones, white marble, warm neutral walls, soft natural light
Elements: Kitchen island, pendant lights, bar stools, clean lines
Mood: Sophisticated, luxurious, inviting, upscale residential design
Technical: High resolution, professional interior photography, 16:9 aspect ratio`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Search, User } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface PageNavItem {
  label: string;
  href: string;
}

interface IslaPorterWhyHeroProps {
  mode?: "light";
  logoText?: string;
  navItems?: NavItem[];
  ctaText?: string;
  keywords?: string[];
  description?: string;
  pageNavItems?: PageNavItem[];
}

export default function IslaPorterWhyHero({
  mode = "light",
  logoText = "ISLA PORTER",
  navItems = [
    { label: "CATALOG", href: "#", hasDropdown: true },
    { label: "PORTFOLIO", href: "#" },
    { label: "PROCESS", href: "#" },
    { label: "ABOUT", href: "#", hasDropdown: true },
    { label: "DIARY", href: "#" },
  ],
  ctaText = "GET STARTED",
  keywords = ["CRAFTMANSHIP.", "CREATIVITY.", "COLLABORATION."],
  description = "Isla Porter was created to make intentional,\npersonalized design more accessible to\neveryone.",
  pageNavItems = [
    { label: "OVERVIEW", href: "#overview" },
    { label: "BENEFITS", href: "#benefits" },
    { label: "QUALITY", href: "#quality" },
    { label: "CUSTOMIZATIONS", href: "#customizations" },
    { label: "ATTRIBUTES", href: "#attributes" },
    { label: "WARRANTY", href: "#warranty" },
  ],
}: IslaPorterWhyHeroProps) {
  const colors = COLORS[mode];
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.background.path}
          alt={IMAGES.background.alt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Navigation */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex w-full items-center justify-between px-8 py-6"
        >
          {/* Left Nav */}
          <nav className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-1 font-sans text-xs font-normal tracking-wider text-white transition-opacity hover:opacity-70"
              >
                {item.label}
                {item.hasDropdown && (
                  <span className="text-[10px]">+</span>
                )}
              </a>
            ))}
          </nav>

          {/* Center Logo */}
          <a
            href="#"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-lg tracking-[0.3em] text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {logoText}
          </a>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="flex items-center gap-1 font-sans text-xs font-normal tracking-wider text-white transition-opacity hover:opacity-70"
            >
              {ctaText}
              <span className="text-[10px]">+</span>
            </a>
            <button className="text-white transition-opacity hover:opacity-70">
              <Search size={16} strokeWidth={1.5} />
            </button>
            <button className="text-white transition-opacity hover:opacity-70">
              <User size={16} strokeWidth={1.5} />
            </button>
            <a
              href="#"
              className="font-sans text-xs font-normal tracking-wider text-white transition-opacity hover:opacity-70"
            >
              CART (0)
            </a>
          </div>
        </motion.header>

        {/* Main Content - Keywords */}
        <div className="flex flex-1 flex-col items-center justify-center px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2"
          >
            {keywords.map((keyword, index) => (
              <span
                key={index}
                className="font-serif text-3xl tracking-[0.15em] md:text-4xl lg:text-5xl"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: colors.accent,
                }}
              >
                {keyword}
              </span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 text-center font-serif text-sm italic leading-relaxed tracking-wide md:text-base"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: colors.accent,
              whiteSpace: "pre-line",
            }}
          >
            {description}
          </motion.p>
        </div>

        {/* Bottom Page Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex w-full items-center justify-between px-8 pb-8"
        >
          {pageNavItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group flex items-center gap-2 transition-opacity hover:opacity-70"
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: colors.accent }}
              />
              <span className="font-sans text-xs font-normal tracking-wider text-white">
                {item.label}
              </span>
            </a>
          ))}
        </motion.nav>
      </div>

      {/* Google Font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
      `}</style>
    </section>
  );
}
