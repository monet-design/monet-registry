"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    primary: "#C2523A",        // 테라코타/오렌지-레드
    primaryHover: "#a8442f",
  },
  dark: {
    primary: "#d4634b",
    primaryHover: "#c05540",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

interface AsconHeroProps {
  mode?: "light" | "dark";
  logo?: string;
  navItems?: NavItem[];
  languageOptions?: string[];
  currentLanguage?: string;
  contactLabel?: string;
  contactHref?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImage?: string;
  onCtaClick?: () => void;
  onLanguageChange?: (lang: string) => void;
}

export default function AsconHero({
  mode = "light",
  logo = "asconsystems",
  navItems = [
    { label: "Produkt", href: "/produkt" },
    { label: "Uber uns", href: "/uber-uns" },
    { label: "Karriere", href: "/karriere" },
    { label: "Ressourcen", href: "/ressourcen" },
  ],
  languageOptions = ["EN", "DE"],
  currentLanguage = "DE",
  contactLabel = "Kontakt",
  contactHref = "/kontakt",
  title = "Weit uber die\nGrenzen Ihrer\nVorstellungskraft\nhinaus",
  description = "Wir machen es moglich, dass Sie jeden programmierbaren,\nphysikalischen Prozess transformieren konnen - und das\nganz ohne Programmieren.",
  ctaLabel = "Uber uns",
  ctaHref = "/uber-uns",
  backgroundImage = "/registry/ascon-hero/background.png",
  onCtaClick,
  onLanguageChange,
}: AsconHeroProps) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full min-h-screen overflow-hidden" style={{ backgroundColor: colors.primary }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Abstract 3D background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 w-full px-6 md:px-12 lg:px-16 py-6"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* Logo Icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <rect x="2" y="2" width="8" height="8" fill="currentColor" />
              <rect x="14" y="2" width="8" height="8" fill="currentColor" />
              <rect x="2" y="14" width="8" height="8" fill="currentColor" />
              <rect x="14" y="14" width="8" height="8" fill="currentColor" />
            </svg>
            <span className="text-white text-lg font-light tracking-wide">
              {logo}
            </span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-white/90 text-sm hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side - Language & Contact */}
          <div className="flex items-center gap-6">
            {/* Language Switcher */}
            <div className="hidden md:flex items-center gap-2">
              {languageOptions.map((lang, index) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange?.(lang)}
                  className={`text-sm transition-colors ${
                    lang === currentLanguage
                      ? "text-white font-medium"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Contact Button */}
            <Link
              href={contactHref}
              className="text-white text-sm hover:text-white/80 transition-colors"
            >
              {contactLabel}
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-16 pt-16 md:pt-24 lg:pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end min-h-[60vh]">
            {/* Left Column - Title */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pb-12 lg:pb-24"
            >
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] tracking-tight whitespace-pre-line">
                {title}
              </h1>
            </motion.div>

            {/* Right Column - Description & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pb-12 lg:pb-24 flex flex-col gap-8"
            >
              {/* Description */}
              <p className="text-white/90 text-sm md:text-base leading-relaxed whitespace-pre-line max-w-md">
                {description}
              </p>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={ctaHref}
                  onClick={onCtaClick}
                  className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm px-6 py-3 rounded-full transition-all border border-white/20"
                >
                  <span>{ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
