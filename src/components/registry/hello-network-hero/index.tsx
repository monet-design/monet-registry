"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface HelloNetworkHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  navItems?: Array<{ label: string; href: string }>;
  ctaButtonText?: string;
  ctaButtonHref?: string;
  headlineLines?: [string, string, string];
  accentWord?: string;
  cardImageSrc?: string;
  languageOptions?: string[];
}

// Gift box SVG component for the decorative background
function GiftBox({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ribbon bow */}
      <path
        d="M60 35C60 35 45 20 35 25C25 30 30 45 40 45C50 45 60 35 60 35Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M60 35C60 35 75 20 85 25C95 30 90 45 80 45C70 45 60 35 60 35Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Box body */}
      <rect
        x="15"
        y="45"
        width="90"
        height="90"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Vertical ribbon */}
      <line
        x1="60"
        y1="45"
        x2="60"
        y2="135"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Horizontal ribbon */}
      <line
        x1="15"
        y1="90"
        x2="105"
        y2="90"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function HelloNetworkHero({
  mode = "light",
  logoText = "Hello.",
  navItems = [
    { label: "Solutions", href: "#" },
    { label: "Benefices", href: "#" },
    { label: "A propos", href: "#" },
  ],
  ctaButtonText = "Demander une demo",
  ctaButtonHref = "#",
  headlineLines = [
    "Votre partenaire technologique",
    "pour promouvoir votre",
    "evenement",
  ],
  accentWord = "evenement",
  cardImageSrc = "/registry/hello-network-hero/card.png",
  languageOptions = ["FR", "EN"],
}: HelloNetworkHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F3F9FE]">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 flex items-center justify-between px-8 py-6 md:px-16"
      >
        {/* Logo */}
        <div className="text-2xl font-bold text-[#1a1a1a]">{logoText}</div>

        {/* Nav Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[#4a4a4a] transition-colors hover:text-[#1a1a1a]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button and Language */}
        <div className="flex items-center gap-6">
          <a
            href={ctaButtonHref}
            className="flex items-center gap-2 rounded-lg bg-[#2E2F31] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#3a3b3d]"
          >
            <span className="flex h-4 w-4 items-center justify-center rounded bg-[#3b82f6] text-[10px]">
              ▶
            </span>
            {ctaButtonText}
          </a>
          <div className="hidden items-center gap-2 text-sm text-[#6b6b6b] md:flex">
            {languageOptions.map((lang, index) => (
              <span
                key={lang}
                className={index === 0 ? "font-medium text-[#1a1a1a]" : ""}
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Background Gift Boxes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Left side gift boxes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute left-[2%] top-[45%] text-[#d0d4dc]"
        >
          <GiftBox className="h-40 w-32" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute left-[15%] top-[30%] text-[#d0d4dc]"
        >
          <GiftBox className="h-56 w-44" />
        </motion.div>

        {/* Right side gift boxes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute right-[15%] top-[28%] text-[#d0d4dc]"
        >
          <GiftBox className="h-56 w-44" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute right-[2%] top-[48%] text-[#d0d4dc]"
        >
          <GiftBox className="h-40 w-32" />
        </motion.div>

        {/* Bottom gift boxes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-[-5%] left-[30%] text-[#d0d4dc]"
        >
          <GiftBox className="h-32 w-24" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-[-8%] right-[25%] text-[#d0d4dc]"
        >
          <GiftBox className="h-36 w-28" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-4 pt-8 md:pt-12">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-4xl leading-tight text-[#1a1a1a] md:text-5xl lg:text-6xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {headlineLines.map((line, index) => (
            <span key={index} className="block">
              {line === accentWord ? (
                <span
                  className="bg-gradient-to-r from-[#7dd3fc] via-[#a5b4fc] to-[#c4b5fd] bg-clip-text italic text-transparent"
                >
                  {line}
                </span>
              ) : (
                line
              )}
            </span>
          ))}
        </motion.h1>

        {/* Card Image */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 md:mt-16"
        >
          <Image
            src={cardImageSrc}
            alt="Hello Payment Card"
            width={280}
            height={400}
            className="drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Font import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
      `}</style>
    </section>
  );
}
