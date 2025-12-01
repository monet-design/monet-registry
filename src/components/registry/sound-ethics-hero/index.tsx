"use client";

import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

// Types
interface NewsItem {
  title: string;
  date: string;
  category: string;
}

interface SoundEthicsHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  menuText?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  tagline?: string;
  companyName?: string;
  companyAddress?: string;
  badgeText?: string;
  categoryLabel?: string;
  categoryTags?: string[];
  ctaText?: string;
  newsItem?: NewsItem;
  backgroundImage?: string;
  onCtaClick?: () => void;
  onMenuClick?: () => void;
}

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Logo Icon Component (horizontal lines icon)
function SoundEthicsLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="6" width="28" height="3" rx="1" fill="currentColor" />
      <rect x="2" y="12" width="28" height="3" rx="1" fill="currentColor" />
      <rect x="2" y="18" width="20" height="3" rx="1" fill="currentColor" />
      <rect x="2" y="24" width="28" height="3" rx="1" fill="currentColor" />
    </svg>
  );
}

// Barcode Component
function Barcode({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-end gap-[1px] ${className}`}>
      {[3, 2, 4, 2, 3, 1, 4, 2, 3, 2, 4, 3, 2, 1, 3, 4, 2, 3, 1, 2].map(
        (height, i) => (
          <div
            key={i}
            className="w-[2px] bg-[#C8EB5F]"
            style={{ height: `${height * 4}px` }}
          />
        )
      )}
    </div>
  );
}

// Info Bar Component
function InfoBar({
  companyName,
  companyAddress,
  badgeText,
  categoryLabel,
  categoryTags,
}: {
  companyName: string;
  companyAddress: string;
  badgeText: string;
  categoryLabel: string;
  categoryTags: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="flex flex-wrap items-center gap-3 text-[9px] sm:text-[10px] tracking-wider"
    >
      {/* Barcode */}
      <Barcode className="h-4" />

      {/* Company Info */}
      <div className="flex items-center gap-2">
        <SoundEthicsLogo className="w-4 h-4 text-[#C8EB5F]" />
        <div className="flex flex-col text-[#C8EB5F]">
          <span className="font-semibold">{companyName}</span>
          <span className="opacity-70 text-[8px]">{companyAddress}</span>
        </div>
      </div>

      {/* Badge */}
      <div className="border border-[#C8EB5F] px-2 py-1 text-[#C8EB5F] font-semibold">
        {badgeText}
      </div>

      {/* Category */}
      <div className="flex items-center gap-2">
        <span className="text-white/60">{categoryLabel}</span>
        <div className="flex gap-1">
          {categoryTags.map((tag, i) => (
            <span
              key={i}
              className="bg-[#C8EB5F] text-black px-1.5 py-0.5 text-[8px] font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// News Card Component
function NewsCard({
  title,
  date,
  category,
}: {
  title: string;
  date: string;
  category: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, rotate: 2 }}
      animate={{ opacity: 1, x: 0, rotate: 2 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className="bg-[#C8EB5F] p-4 max-w-[280px] transform rotate-2 relative"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)",
      }}
    >
      <h3 className="font-oswald text-sm sm:text-base font-bold text-black uppercase leading-tight mb-2">
        {title}
      </h3>
      <div className="flex items-center gap-2 text-[10px] text-black/70">
        <span>{date}</span>
        <span>{category}</span>
      </div>
    </motion.div>
  );
}

// CTA Button Component
function CtaButton({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-[#C8EB5F] text-black px-6 py-3 font-oswald font-bold text-sm uppercase tracking-wider transform -skew-x-6 hover:bg-[#D4F06A] transition-colors"
    >
      <span className="inline-block skew-x-6">{text}</span>
    </motion.button>
  );
}

// Main Component
export default function SoundEthicsHero({
  mode = "dark",
  logoText = "SOUND\nETHICS",
  menuText = "MENU",
  headlineLine1 = "SOUND",
  headlineLine2 = "ETHICS",
  tagline = "In the Dawn of AI Revolution",
  companyName = "SOUND ETHICS INC.",
  companyAddress = "1500 Vine Street, CA 90028",
  badgeText = "GUARANTEED GENUINE",
  categoryLabel = "AI REVOLUTION",
  categoryTags = ["ETH", "SND"],
  ctaText = "GET IN TOUCH",
  newsItem = {
    title: "RIAA TAKES ON SUNO AND UDIO: AI COPYRIGHT CLASH",
    date: "7.1.2024",
    category: "News",
  },
  backgroundImage = "/registry/sound-ethics-hero/concert-bg.jpg",
  onCtaClick,
  onMenuClick,
}: SoundEthicsHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0A0C10]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Concert stage background"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between px-6 sm:px-10 py-6"
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <SoundEthicsLogo className="w-8 h-8 sm:w-10 sm:h-10 text-[#C8EB5F]" />
            <span className="font-oswald text-[#C8EB5F] text-sm sm:text-base font-bold uppercase tracking-wide whitespace-pre-line leading-tight">
              {logoText}
            </span>
          </div>

          {/* Menu */}
          <button
            onClick={onMenuClick}
            className="flex items-center gap-2 text-[#C8EB5F] font-oswald font-bold text-sm sm:text-base uppercase tracking-wider hover:opacity-80 transition-opacity"
          >
            {menuText}
          </button>
        </motion.header>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 pb-10">
          {/* Main Title */}
          <div className="mb-4">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-oswald text-[#C8EB5F] text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold uppercase leading-[0.85] tracking-tight italic"
              style={{
                textShadow: "0 0 60px rgba(200, 235, 95, 0.3)",
              }}
            >
              {headlineLine1}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-oswald text-[#C8EB5F] text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold uppercase leading-[0.85] tracking-tight italic"
              style={{
                textShadow: "0 0 60px rgba(200, 235, 95, 0.3)",
              }}
            >
              {headlineLine2}
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-white/80 font-inter text-sm sm:text-base mb-6 max-w-md"
          >
            {tagline}
          </motion.p>

          {/* Info Bar */}
          <div className="mb-8 hidden sm:block">
            <InfoBar
              companyName={companyName}
              companyAddress={companyAddress}
              badgeText={badgeText}
              categoryLabel={categoryLabel}
              categoryTags={categoryTags}
            />
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mt-auto">
            {/* CTA Button */}
            <CtaButton text={ctaText} onClick={onCtaClick} />

            {/* News Card */}
            <div className="self-end">
              <NewsCard
                title={newsItem.title}
                date={newsItem.date}
                category={newsItem.category}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
