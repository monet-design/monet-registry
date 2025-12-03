"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    // 브랜드 Primary
    accent: "#C4F4ED",          // 민트 액센트 (주요 버튼)
    accentHover: "#A8E8DF",     // 민트 호버
    // 브랜드 Secondary
    accentRed: "#F87171",       // 레드 액센트 (통계 배지)
    accentPink: "#FEE8E7",      // 핑크 배경 (채팅 버튼)
    accentPinkHover: "#FDD9D7", // 핑크 호버
  },
  dark: {
    accent: "#A8E8DF",
    accentHover: "#8DD6CC",
    accentRed: "#EF4444",
    accentPink: "#FDD9D7",
    accentPinkHover: "#FCC4C1",
  },
} as const;

const IMAGES = {
  illustration: {
    path: "/registry/hero-oddit-fresh-perspective/illustration.png",
    alt: "Creative illustration",
    prompt: `Abstract creative illustration with playful geometric elements.
Style: Modern, whimsical, design-forward aesthetic
Layout: Centered composition with floating elements and shapes
Composition: Mix of organic and geometric shapes - circles, curves, abstract forms
Color palette: Soft pastels with mint green (#C4F4ED), deep navy (#1E1B4B), coral accents
Elements: Floating geometric shapes, abstract patterns, creative design motifs
Mood: Fresh, creative, innovative, design-focused
Technical: PNG with transparency, scalable vector-style illustration`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import { Star, TrendingUp, MessageCircle } from "lucide-react";

interface HeroOdditFreshPerspectiveProps {
  mode?: "light" | "dark";
  title?: string;
  titleHighlight?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  socialProofText?: string;
  socialProofCount?: string;
  brands?: { name: string; logo?: string }[];
  stats?: { value: string; label: string; color: "red" | "mint" }[];
  illustrationSrc?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function HeroOdditFreshPerspective({
  mode = "light",
  title = "A Fresh Perspective",
  titleHighlight = "on your Customer\nJourney",
  description = "Conversion optimized design and UX for fast growing brands who want to improve performance, without sacrificing quality.",
  primaryButtonText = "Book A Call",
  secondaryButtonText = "Explore Our Products",
  socialProofText = "Happy Brands Worldwide",
  socialProofCount = "10,000+",
  brands = [
    { name: "the oodie" },
    { name: "Huel" },
    { name: "CORKCICLE." },
    { name: "CROSSNET" },
    { name: "Dr. Squatch" },
    { name: "JONES" },
  ],
  stats = [
    { value: "70%", label: "CVR", color: "red" },
    { value: "20%", label: "ADD TO CART", color: "mint" },
  ],
  illustrationSrc = IMAGES.illustration.path,
  onPrimaryClick,
  onSecondaryClick,
}: HeroOdditFreshPerspectiveProps) {
  const colors = COLORS[mode];

  return (
    <section className="relative min-h-screen w-full bg-gray-50 dark:bg-gray-950 overflow-hidden">
      {/* Main Content */}
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-xl"
          >
            <h1 className="text-gray-900 dark:text-gray-100 text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
              <span className="italic">{title}</span>
              <br />
              <span className="italic whitespace-pre-line">{titleHighlight}</span>
            </h1>

            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              {description}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onSecondaryClick}
                className="px-6 py-3 border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 font-medium rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-colors duration-300"
              >
                {secondaryButtonText}
              </button>
              <button
                onClick={onPrimaryClick}
                className="px-6 py-3 font-medium rounded-lg transition-colors duration-300"
                style={{ backgroundColor: colors.accent, color: '#1E1B4B' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.accentHover}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.accent}
              >
                {primaryButtonText}
              </button>
            </div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              <Image
                src={illustrationSrc}
                alt="Creative illustration"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-8">
          {/* Stars and Count */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-gray-900 text-gray-900 dark:fill-gray-100 dark:text-gray-100"
                />
              ))}
            </div>
            <span className="text-gray-900 dark:text-gray-100 font-medium ml-2">
              {socialProofCount} {socialProofText}
            </span>
          </motion.div>

          {/* Brand Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-8"
          >
            {brands.map((brand, index) => (
              <div
                key={index}
                className="text-gray-900 dark:text-gray-100 font-bold text-lg md:text-xl tracking-tight opacity-80 hover:opacity-100 transition-opacity"
                style={{
                  fontFamily:
                    brand.name === "the oodie"
                      ? "cursive"
                      : brand.name === "Dr. Squatch"
                        ? "serif"
                        : "sans-serif",
                  fontStyle: brand.name === "Dr. Squatch" ? "italic" : "normal",
                }}
              >
                {brand.name}
              </div>
            ))}
          </motion.div>

          {/* Stats Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-between gap-4"
          >
            {stats.map((stat, index) => (
              <StatBadge
                key={index}
                value={stat.value}
                label={stat.label}
                color={stat.color}
                colors={colors}
              />
            ))}

            {/* Chat Button */}
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors"
              style={{ backgroundColor: colors.accentPink, color: '#1E1B4B' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.accentPinkHover}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.accentPink}
            >
              <MessageCircle className="w-4 h-4" />
              We&apos;re humans, let&apos;s chat!
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatBadge({
  value,
  label,
  color,
  colors,
}: {
  value: string;
  label: string;
  color: "red" | "mint";
  colors: typeof COLORS.light | typeof COLORS.dark;
}) {
  const bgColor = color === "red" ? colors.accentRed : colors.accent;
  const textColor = color === "red" ? "white" : "#1E1B4B";

  return (
    <div
      className="flex items-center gap-2 px-4 py-2 rounded-lg"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <span className="font-bold">{value}</span>
      <TrendingUp className="w-4 h-4" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
