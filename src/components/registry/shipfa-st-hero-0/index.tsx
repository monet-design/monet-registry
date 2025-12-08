"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#1D232A",
    text: "#FFFFFF",
    textMuted: "rgba(255, 255, 255, 0.8)",
    accent: "#FBBD23",
    accentHover: "#F5A623",
    highlight: "#E7E5E4",
    cardBg: "#2A303C",
    border: "rgba(255, 255, 255, 0.1)",
    gitClone: "#FBBD23",
  },
  dark: {
    background: "#1D232A",
    text: "#FFFFFF",
    textMuted: "rgba(255, 255, 255, 0.8)",
    accent: "#FBBD23",
    accentHover: "#F5A623",
    highlight: "#E7E5E4",
    cardBg: "#2A303C",
    border: "rgba(255, 255, 255, 0.1)",
    gitClone: "#FBBD23",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  avatars: [
    {
      path: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      alt: "User 1",
    },
    {
      path: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      alt: "User 2",
    },
    {
      path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      alt: "User 3",
    },
    {
      path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      alt: "User 4",
    },
    {
      path: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      alt: "User 5",
    },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Zap, Star, Gift } from "lucide-react";
import Image from "next/image";

// Tailwind Logo SVG Component
const TailwindLogo = () => (
  <svg viewBox="0 0 54 33" className="w-full h-full" fill="#38BDF8">
    <path d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" />
  </svg>
);

// Laurel Wreath for Product Hunt Badge
const LaurelWreath = ({ side }: { side: "left" | "right" }) => (
  <svg
    viewBox="0 0 40 50"
    className={`w-8 h-10 ${side === "right" ? "transform scale-x-[-1]" : ""}`}
    fill="currentColor"
  >
    <path d="M8 45c-2-4-2-8 0-12 1.5 3.5 3.5 6.5 7 9-2.5-.5-5-1.5-7 3z" />
    <path d="M5 38c-3-3-4-7-3-11 2 3 4.5 5.5 8.5 7-2.5.5-4.5 1.5-5.5 4z" />
    <path d="M3 30c-2.5-3.5-3-8-1-12 1.5 3.5 4 6 8 7.5-2.5.5-5 2-7 4.5z" />
    <path d="M2 22c-1.5-4-1-8.5 1.5-12.5 1 4 3 7 7 9-2.5.5-5.5 1.5-8.5 3.5z" />
    <path d="M4 14c0-4 1.5-8 5-11.5-.5 4.5 1 8 4 11-2 0-5.5 0-9 .5z" />
    <path d="M10 8c1-3.5 3.5-6.5 7-8-1.5 4-1 7.5 1 11-2-.5-5-1.5-8-3z" />
  </svg>
);

interface ShipfaStHero0Props {
  mode?: "light" | "dark";
  title?: string;
  highlightedText?: string;
  description?: string;
  ctaText?: string;
  discountText?: string;
  discountAmount?: string;
  customersLeft?: number;
  makerCount?: number;
  badgeRank?: string;
  badgeText?: string;
  onCtaClick?: () => void;
}

export default function ShipfaStHero0({
  mode = "dark",
  title = "Ship your startup\nin days,",
  highlightedText = "not weeks",
  description = "The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app and make your first $ online fast.",
  ctaText = "Get ShipFast",
  discountAmount = "$100 off",
  discountText = "for the first 7900 customers",
  customersLeft = 10,
  makerCount = 7890,
  badgeRank = "2nd",
  badgeText = "Product of the day",
  onCtaClick,
}: ShipfaStHero0Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full overflow-hidden py-8 lg:py-20"
      style={{ backgroundColor: colors.background }}
    >
      {/* Keyboard Shortcut Hint */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute top-4 right-4 lg:top-8 lg:right-8 hidden md:flex items-center gap-2 text-sm"
        style={{ color: colors.textMuted }}
      >
        <span>Press</span>
        <kbd
          className="px-2 py-1 rounded text-sm font-mono"
          style={{ backgroundColor: colors.cardBg, color: colors.text }}
        >
          L
        </kbd>
        <span>to see the Leaderboards</span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8 lg:gap-10 items-center lg:items-start text-center lg:text-left max-w-xl"
        >
          {/* Product Hunt Badge */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-1 group"
            style={{ color: colors.textMuted }}
          >
            <LaurelWreath side="left" />
            <div className="flex flex-col items-center">
              <span className="text-xs uppercase tracking-wider">
                {badgeText}
              </span>
              <span
                className="text-lg font-bold"
                style={{ color: colors.text }}
              >
                {badgeRank}
              </span>
            </div>
            <LaurelWreath side="right" />
          </motion.a>

          {/* Title */}
          <h1
            className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight"
            style={{ color: colors.text }}
          >
            {title.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
            <span className="relative inline-block mt-2">
              <span
                className="absolute -left-2 -right-2 -top-1 -bottom-1 -rotate-1"
                style={{ backgroundColor: colors.highlight }}
              />
              <span
                className="relative font-extrabold italic"
                style={{ color: colors.background }}
              >
                {highlightedText}
              </span>
            </span>
          </h1>

          {/* Description */}
          <p
            className="text-lg leading-relaxed"
            style={{ color: colors.textMuted }}
          >
            {description}
          </p>

          {/* CTA Section */}
          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCtaClick}
              className="flex items-center justify-center gap-2 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-200 group"
              style={{
                backgroundColor: colors.accent,
                color: colors.background,
              }}
            >
              <Zap className="w-5 h-5 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-200" />
              {ctaText}
            </motion.button>

            {/* Discount Info */}
            <div
              className="flex items-center justify-center lg:justify-start gap-2 text-sm"
              style={{ color: colors.textMuted }}
            >
              <Gift
                className="w-5 h-5 animate-pulse"
                style={{ color: colors.accent }}
              />
              <span>
                <span style={{ color: colors.accent }}>{discountAmount}</span>{" "}
                {discountText} ({customersLeft} left)
              </span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Avatar Group */}
            <div className="flex -space-x-3">
              {IMAGES.avatars.map((avatar, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-2 overflow-hidden"
                  style={{ borderColor: colors.background }}
                >
                  <Image
                    src={avatar.path}
                    alt={avatar.alt}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Rating */}
            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p style={{ color: colors.textMuted }} className="text-sm">
                <span className="font-semibold" style={{ color: colors.text }}>
                  {makerCount}
                </span>{" "}
                makers ship faster
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Tech Stack Visualization */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative w-full max-w-xl lg:max-w-lg"
        >
          {/* Oval Container */}
          <div className="relative aspect-square">
            {/* Oval Border */}
            <div
              className="absolute inset-0 border-2 rounded-[50%] scale-x-[1.15]"
              style={{ borderColor: colors.border }}
            />

            {/* Tech Stack Items */}
            <div className="absolute inset-0 p-8">
              {/* NEXT.JS - Top Left */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute top-[10%] left-[15%] flex items-center gap-2"
              >
                <div className="w-24 h-8 bg-black rounded flex items-center justify-center px-3 gap-1">
                  <span className="text-white font-bold text-sm tracking-tight">
                    NEXT
                  </span>
                  <span className="text-white text-xs">.JS</span>
                </div>
              </motion.div>

              {/* Tailwind - Top Right */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute top-[5%] right-[5%] flex items-center gap-3"
              >
                <div className="w-12 h-10">
                  <TailwindLogo />
                </div>
                <div style={{ color: colors.text }}>
                  <p className="font-semibold">Tailwind</p>
                  <ul className="text-xs" style={{ color: colors.textMuted }}>
                    <li>- components</li>
                    <li>- animations</li>
                  </ul>
                </div>
              </motion.div>

              {/* Resend - Left */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute top-[35%] left-[10%] flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <div style={{ color: colors.text }}>
                  <p className="font-semibold">Resend</p>
                  <ul className="text-xs" style={{ color: colors.textMuted }}>
                    <li>- DNS records</li>
                    <li>- avoid spam</li>
                  </ul>
                </div>
              </motion.div>

              {/* Stripe / Lemon Squeezy - Right */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute top-[30%] right-[0%] flex items-center gap-3"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #635BFF, #00D4FF)",
                  }}
                >
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div style={{ color: colors.text }}>
                  <p className="font-semibold text-sm">Stripe</p>
                  <p className="font-semibold text-sm text-yellow-400">
                    Lemon Squeezy
                  </p>
                  <ul className="text-xs" style={{ color: colors.textMuted }}>
                    <li>- webhook</li>
                    <li>- checkout</li>
                  </ul>
                </div>
              </motion.div>

              {/* NextAuth - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-[30%] left-[10%] flex items-center gap-3"
              >
                <div
                  className="w-10 h-10 rounded-full"
                  style={{
                    background:
                      "linear-gradient(135deg, #D946EF, #8B5CF6, #06B6D4)",
                  }}
                />
                <div style={{ color: colors.text }}>
                  <p className="font-semibold">NextAuth</p>
                  <ul className="text-xs" style={{ color: colors.textMuted }}>
                    <li>- Google login</li>
                    <li>- Magic link</li>
                  </ul>
                </div>
              </motion.div>

              {/* MongoDB / Supabase - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute bottom-[20%] right-[10%] flex items-center gap-3"
              >
                <div className="w-10 h-10">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-full h-full"
                    fill="#00ED64"
                  >
                    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
                  </svg>
                </div>
                <div style={{ color: colors.text }}>
                  <p className="font-semibold">MongoDB</p>
                  <p className="font-semibold text-emerald-400">Supabase</p>
                </div>
              </motion.div>

              {/* Center Text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-[8%] left-1/2 -translate-x-1/2 text-center text-sm whitespace-nowrap"
                style={{ color: colors.textMuted }}
              >
                + all the boring stuff (SEO tags,
                <br />
                API calls, customer support)
              </motion.p>
            </div>

            {/* Git Clone Command */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2"
            >
              {/* Curved Arrow */}
              <svg
                viewBox="0 0 50 50"
                className="w-8 h-8 absolute -top-8 right-0"
                style={{ color: colors.accent }}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M10 40 Q 40 40 40 15" />
                <path d="M35 10 L 40 15 L 45 10" />
              </svg>
              <code
                className="font-mono text-lg tracking-wide"
                style={{ color: colors.gitClone }}
              >
                git clone ship-fast
              </code>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
