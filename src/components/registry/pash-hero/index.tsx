"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#D7D6CD", // Warm gray-beige background
    accent: "#DD5409", // Vibrant orange accent
    accentHover: "#F5762A", // Lighter orange hover
    headerBg: "#212120", // Dark header background
  },
  dark: {
    background: "#2a2926",
    accent: "#c24708",
    accentHover: "#dd5409",
    headerBg: "#0d0d0d",
  },
} as const;

const IMAGES = {
  person: {
    path: "/registry/pash-hero/person.png",
    alt: "Designer portrait",
    prompt: `Professional portrait photo of designer in creative setting.
Style: Editorial, contemporary portrait photography
Composition: Full body or three-quarter length portrait
Background: Clean, neutral backdrop or creative space
Color palette: Natural skin tones, casual creative attire
Mood: Creative, confident, professional designer
Technical: High resolution, portrait orientation, PNG with transparency`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Menu } from "lucide-react";
import Image from "next/image";

interface PashHeroProps {
  mode?: "light" | "dark";
  logo?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  marqueeText?: string;
  greeting?: string;
  introText?: string;
  name?: string;
  description?: string;
  personImage?: string;
}

export default function PashHero({
  mode = "light",
  logo = "PT®",
  ctaText = "GET STARTED",
  onCtaClick,
  marqueeText = "HELP UKRAINIAN CHILDREN",
  greeting = "HELLO",
  introText = "I'M",
  name = "PAVLO",
  description = "Experienced Web Designer and pixel perfect Webflow Developer. The websites that I create motivate people to explore them and buy your products. I am good with discipline, analytics, product testing and time management, of course. My range of design services includes creating Websites (or improving existing ones) and developing them on Webflow and applications. I help your customers to get exactly what they want.",
  personImage = IMAGES.person.path,
}: PashHeroProps) {
  const colors = COLORS[mode];
  return (
    <section className="relative w-full overflow-hidden font-sans" style={{ backgroundColor: colors.background }}>
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-[#212120]"
        >
          {logo}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <button
            onClick={onCtaClick}
            className="rounded-full px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:scale-105"
            style={{ backgroundColor: colors.accent }}
          >
            {ctaText}
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all hover:text-white" style={{ borderColor: colors.accent, color: colors.accent }}>
            <Menu className="h-5 w-5" />
          </button>
        </motion.div>
      </header>

      {/* Marquee Banner */}
      <div className="relative w-full overflow-hidden py-2.5" style={{ backgroundColor: colors.headerBg }}>
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="mx-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white"
            >
              {marqueeText} <span className="text-base">🇺🇦</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative px-6 pb-16 pt-8 md:px-12 md:pb-24 md:pt-12">
        {/* Large Typography */}
        <div className="relative">
          {/* HELLO */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[15vw] font-extrabold uppercase leading-[0.85] tracking-tight md:text-[12vw]"
            style={{ color: colors.accentHover }}
          >
            {greeting}
          </motion.h1>

          {/* I'M and PAVLO row */}
          <div className="relative flex items-end">
            {/* I'M */}
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-serif text-[12vw] italic leading-[0.9] text-[#212120] md:text-[9vw]"
            >
              {introText}
            </motion.span>

            {/* Person Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative mx-auto -mb-4 w-[35vw] max-w-[280px] md:-mb-8 md:w-[22vw]"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={personImage}
                  alt="Profile"
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* Orange accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-3 md:h-4" style={{ backgroundColor: colors.accentHover }} />
            </motion.div>

            {/* PAVLO */}
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-[15vw] font-extrabold uppercase leading-[0.85] tracking-tight md:text-[12vw]"
            style={{ color: colors.accentHover }}
            >
              {name}
            </motion.span>
          </div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="ml-auto mt-8 max-w-md md:mt-4"
        >
          <p className="font-serif text-sm italic leading-relaxed text-[#212120] md:text-base">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Font imports */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap');

        .font-sans {
          font-family: 'Inter', sans-serif;
        }
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </section>
  );
}
