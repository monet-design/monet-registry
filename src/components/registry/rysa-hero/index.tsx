"use client";

import { motion } from "motion/react";
import { Plus } from "lucide-react";
import Image from "next/image";
import "./font.css";

// Types
interface RysaHeroProps {
  logo?: string;
  tagline?: string;
  headline?: string;
  description?: string;
  ctaText?: string;
  illustrationSrc?: string;
  illustrationAlt?: string;
  onCtaClick?: () => void;
}

export default function RysaHero({
  logo = "RYSA",
  tagline = "Effortless style. Zero decision fatigue. All in one app.",
  headline = "Turn Your Wardrobe Into\na High-Performing\nSystem",
  description = "A premium mobile app that digitizes your wardrobe\nand delivers expert styling designed for decision-\nmakers who value efficiency, precision and presence.",
  ctaText = "Get Early Access",
  illustrationSrc = "/registry/rysa-hero/ascii-fashion.png",
  illustrationAlt = "Fashion illustration",
  onCtaClick,
}: RysaHeroProps) {
  return (
    <section className="w-full min-h-screen bg-white text-black overflow-hidden">
      {/* Header */}
      <header className="w-full px-8 md:px-16 lg:px-24 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-black font-bold text-xl tracking-tight">
              {logo}
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block text-sm text-black/80"
          >
            {tagline}
          </motion.p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 pt-8 md:pt-16 lg:pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-start">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-instrument-serif text-4xl sm:text-5xl md:text-6xl lg:text-[64px] italic text-black mb-8 whitespace-pre-line leading-[1.1]"
            >
              {headline}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-black/70 text-base md:text-lg whitespace-pre-line leading-relaxed mb-10"
            >
              {description}
            </motion.p>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-black text-white text-sm font-medium rounded-full hover:bg-black/90 transition-colors"
            >
              <Plus className="w-4 h-4" />
              {ctaText}
            </motion.button>
          </div>

          {/* Right Column - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl aspect-[3/4]">
              <Image
                src={illustrationSrc}
                alt={illustrationAlt}
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
