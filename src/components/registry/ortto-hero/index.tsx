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

interface OrttoHeroProps {
  mode?: "light" | "dark";
  badge?: string;
  titleBlack?: string;
  highlightedWords?: {
    text: string;
    color: string;
    icon?: React.ReactNode;
  }[];
  suffixText?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  dashboardImage?: string;
  tagline?: string;
  logos?: {
    name: string;
    logo: React.ReactNode;
  }[];
}

// Data icons for the highlighted words
const DataIcon = () => (
  <svg
    viewBox="0 0 80 32"
    fill="none"
    className="inline-block h-[0.6em] w-auto ml-1"
  >
    <ellipse cx="16" cy="16" rx="14" ry="14" fill="#5BA89D" />
    <ellipse cx="40" cy="16" rx="14" ry="14" fill="#5BA89D" />
    <path
      d="M54 16C54 8.268 60.268 2 68 2V30C60.268 30 54 23.732 54 16Z"
      fill="#5BA89D"
    />
  </svg>
);

const MessagingIcon = () => (
  <svg
    viewBox="0 0 60 32"
    fill="none"
    className="inline-block h-[0.6em] w-auto ml-1"
  >
    <path d="M0 8L20 24L40 8" stroke="#E86B4A" strokeWidth="8" fill="none" />
    <path d="M20 8L40 24L60 8" stroke="#E86B4A" strokeWidth="8" fill="none" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg
    viewBox="0 0 50 28"
    fill="none"
    className="inline-block h-[0.5em] w-auto ml-1"
  >
    <rect x="0" y="0" width="50" height="28" rx="4" fill="#E86B4A" />
    <rect x="4" y="16" width="8" height="8" rx="1" fill="white" />
    <rect x="14" y="10" width="8" height="14" rx="1" fill="white" />
    <rect x="24" y="6" width="8" height="18" rx="1" fill="white" />
    <rect x="34" y="12" width="8" height="12" rx="1" fill="white" />
  </svg>
);

// Default logos for the logo cloud
const DefaultLogos = [
  {
    name: "westfund",
    logo: (
      <span className="text-[#E8734A] font-medium text-lg tracking-tight">
        westfund
      </span>
    ),
  },
  {
    name: "Microsoft",
    logo: (
      <div className="flex items-center gap-1.5">
        <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
          <div className="bg-[#F25022] w-full h-full" />
          <div className="bg-[#7FBA00] w-full h-full" />
          <div className="bg-[#00A4EF] w-full h-full" />
          <div className="bg-[#FFB900] w-full h-full" />
        </div>
        <span className="text-gray-700 font-medium text-lg">Microsoft</span>
      </div>
    ),
  },
  {
    name: "Vodafone",
    logo: (
      <div className="flex items-center gap-1">
        <div className="w-5 h-5 rounded-full bg-[#E60000] flex items-center justify-center">
          <span className="text-white text-xs font-bold">&apos;</span>
        </div>
        <span className="text-[#E60000] font-medium text-lg">vodafone</span>
      </div>
    ),
  },
  {
    name: "LG",
    logo: (
      <div className="flex items-center gap-1">
        <div className="w-6 h-6 rounded-full border-2 border-[#A50034] flex items-center justify-center">
          <span className="text-[#A50034] text-xs font-bold">L</span>
        </div>
        <span className="text-gray-700 font-bold text-lg">LG</span>
      </div>
    ),
  },
  {
    name: "Play",
    logo: (
      <span className="text-[#6B2D5B] font-black text-xl italic">PLAY</span>
    ),
  },
  {
    name: "Macquarie",
    logo: (
      <span className="text-gray-700 font-serif text-sm">
        MACQUARIE
        <br />
        <span className="text-xs">University</span>
      </span>
    ),
  },
  {
    name: "Plan",
    logo: (
      <div className="flex items-center gap-1">
        <div className="w-6 h-6 rounded bg-[#004B87] flex items-center justify-center">
          <span className="text-[#FFD100] text-xs font-bold">P</span>
        </div>
        <span className="text-[#004B87] font-bold text-sm">PLAN</span>
      </div>
    ),
  },
  {
    name: "LiveChat",
    logo: (
      <div className="flex items-center gap-1">
        <div className="w-5 h-5 rounded bg-[#FF5100] flex items-center justify-center">
          <span className="text-white text-xs">L</span>
        </div>
        <span className="text-gray-700 font-medium text-lg">LiveChat</span>
      </div>
    ),
  },
  {
    name: "TrustRadius",
    logo: (
      <div className="flex items-center gap-1">
        <span className="text-[#00B67A] font-bold text-lg">T</span>
        <span className="text-gray-700 font-medium text-lg">TrustRadius</span>
      </div>
    ),
  },
  {
    name: "StreamYard",
    logo: (
      <div className="flex items-center gap-1">
        <div className="w-5 h-5 rounded-full bg-[#6366F1] flex items-center justify-center">
          <span className="text-white text-xs">S</span>
        </div>
        <span className="text-gray-700 font-medium text-lg">StreamYard</span>
      </div>
    ),
  },
  {
    name: "Bitly",
    logo: <span className="text-[#EE6123] font-bold text-xl">bitly</span>,
  },
  {
    name: "Gravity Sketch",
    logo: (
      <div className="flex items-center gap-1">
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#6366F1] to-[#EC4899]" />
        <span className="text-gray-700 font-medium text-sm">
          gravity
          <br />
          <span className="text-[#6366F1]">sketch</span>
        </span>
      </div>
    ),
  },
];

export default function OrttoHero({
  mode = "light",
  titleBlack = "Journeys made simple.",
  highlightedWords = [
    { text: "customer data", color: "#5BA89D", icon: <DataIcon /> },
    { text: "messaging", color: "#E86B4A", icon: <MessagingIcon /> },
    { text: "analytics", color: "#E86B4A", icon: <AnalyticsIcon /> },
  ],
  suffixText = "working together.",
  primaryButtonText = "Get started",
  primaryButtonHref = "#",
  secondaryButtonText = "Watch a video",
  secondaryButtonHref = "#",
  dashboardImage = "/registry/ortto-hero/dashboard.png",
  tagline = "Whether you're starting out or scaling up, grow faster with Ortto.",
  logos = DefaultLogos,
}: OrttoHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#F5F3F1]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Hero Content */}
        <div className="text-left max-w-4xl">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-bold leading-[1.05] tracking-tight text-[#1D1D22]"
          >
            {titleBlack}
          </motion.h1>

          {/* Subtitle with highlighted words */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-light leading-[1.1] tracking-tight text-[#1D1D22] mt-1"
          >
            <span>Your </span>
            <span style={{ color: highlightedWords[0]?.color }}>
              {highlightedWords[0]?.text}
            </span>
            {highlightedWords[0]?.icon}
            <span>, </span>
            <span style={{ color: highlightedWords[1]?.color }}>
              {highlightedWords[1]?.text}
            </span>
            {highlightedWords[1]?.icon}
            <br />
            <span>and </span>
            <span style={{ color: highlightedWords[2]?.color }}>
              {highlightedWords[2]?.text}
            </span>
            {highlightedWords[2]?.icon}
            <span> {suffixText}</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            <a
              href={primaryButtonHref}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#1D1D22] rounded-full hover:bg-[#2d2d33] transition-colors"
            >
              {primaryButtonText}
            </a>
            <a
              href={secondaryButtonHref}
              className="inline-flex items-center justify-center px-4 py-3 text-base font-medium text-[#1D1D22] underline underline-offset-4 hover:text-[#4d4d53] transition-colors"
            >
              {secondaryButtonText}
            </a>
          </motion.div>
        </div>

        {/* Dashboard Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
            <Image
              src={dashboardImage}
              alt="Marketing automation dashboard"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-xl md:text-2xl font-semibold text-[#1D1D22] mt-16 mb-8"
        >
          {tagline}
        </motion.p>

        {/* Logo Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center"
        >
          {logos.slice(0, 6).map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
              className="flex items-center justify-center h-10 grayscale-0 opacity-80 hover:opacity-100 transition-opacity"
            >
              {logo.logo}
            </motion.div>
          ))}
        </motion.div>

        {/* Second row of logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center mt-6"
        >
          {logos.slice(6, 12).map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
              className="flex items-center justify-center h-10 grayscale-0 opacity-80 hover:opacity-100 transition-opacity"
            >
              {logo.logo}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
