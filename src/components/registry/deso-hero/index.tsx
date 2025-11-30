"use client";

import { motion } from "motion/react";
import { Menu, Layers } from "lucide-react";
import Image from "next/image";

interface DesoHeroProps {
  logoText?: string;
  chapterLabel?: string;
  chapterTitle?: string;
  headingLine1?: string;
  headingAccent1?: string;
  headingLine2?: string;
  headingLine3?: string;
  headingAccent2?: string;
  description?: string;
  ctaLink?: string;
  ctaLinkText?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  navButton1Text?: string;
  navButton2Text?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  onNavButton1Click?: () => void;
  onNavButton2Click?: () => void;
}

export default function DesoHero({
  logoText = "DeSo",
  chapterLabel = "CHAPTER 01: WELCOME",
  chapterTitle = "Welcome",
  headingLine1 = "The",
  headingAccent1 = "Social Layer",
  headingLine2 = "of",
  headingLine3 = "Crypto Has",
  headingAccent2 = "Arrived",
  description = "DeSo is the first layer-1 blockchain built from the ground up to decentralize social media and scale storage-heavy apps to billions of users.",
  ctaLink = "#",
  ctaLinkText = "Read the vision.",
  primaryButtonText = "Create Wallet",
  secondaryButtonText = "Start Building",
  navButton1Text = "Create Wallet",
  navButton2Text = "Buy DESO",
  onPrimaryClick,
  onSecondaryClick,
  onNavButton1Click,
  onNavButton2Click,
}: DesoHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a1628]">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#112F46]/50 via-[#0a1628] to-[#030815]" />

      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1a4a7a]/20 rounded-full blur-[120px]" />

      {/* Header Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 flex items-center justify-between px-6 py-5 md:px-10"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 text-[#3B82F6]"
            fill="currentColor"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span
            className="text-xl font-bold text-white tracking-tight"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {logoText}
          </span>
        </div>

        {/* Nav Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onNavButton1Click}
            className="hidden md:block px-5 py-2 text-sm font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
          >
            {navButton1Text}
          </button>
          <button
            onClick={onNavButton2Click}
            className="hidden md:block px-5 py-2 text-sm font-medium text-[#0a1628] bg-[#E4C857] rounded-full hover:bg-[#d4b847] transition-colors"
          >
            {navButton2Text}
          </button>
          <button className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="relative z-10 px-6 md:px-10 pt-8 md:pt-16 pb-20">
        {/* Chapter Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-16 h-[2px] bg-[#E4C857]" />
          <span
            className="text-xs tracking-[0.2em] text-white/70 uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {chapterLabel}
          </span>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <h1
              className="text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="text-white italic">{headingLine1} </span>
              <span className="text-[#E4C857] italic">{headingAccent1}</span>
              <span className="text-white italic"> {headingLine2}</span>
              <br />
              <span className="text-white italic">{headingLine3} </span>
              <span className="text-[#E4C857] italic">{headingAccent2}</span>
            </h1>
          </motion.div>

          {/* Right Column - Description and CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:pt-24"
          >
            <p
              className="text-base md:text-lg text-white/80 leading-relaxed mb-2 max-w-md"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {description}{" "}
              <a
                href={ctaLink}
                className="text-[#E4C857] hover:underline font-medium"
              >
                {ctaLinkText}
              </a>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={onPrimaryClick}
                className="px-7 py-3 text-sm font-semibold text-[#0a1628] bg-[#E4C857] rounded-full hover:bg-[#d4b847] transition-colors"
              >
                {primaryButtonText}
              </button>
              <button
                onClick={onSecondaryClick}
                className="px-7 py-3 text-sm font-semibold text-white border border-white/40 rounded-full hover:bg-white/10 transition-colors"
              >
                {secondaryButtonText}
              </button>
            </div>
          </motion.div>
        </div>

        {/* 3D Logo Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="absolute left-1/4 top-1/2 -translate-x-1/2 translate-y-8 md:translate-y-0 z-0"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotateZ: [0, 3, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/registry/deso-hero/logo-3d.png"
              alt="DeSo 3D Logo"
              width={280}
              height={280}
              className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Chapter Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-6 left-6 z-20"
      >
        <div className="flex items-center gap-3 px-5 py-3 bg-[#0f1f35]/80 backdrop-blur-sm rounded-full border border-white/10">
          <div className="p-2 bg-[#1a3a5c] rounded-lg">
            <Layers className="w-4 h-4 text-[#3B82F6]" />
          </div>
          <div>
            <p
              className="text-[10px] tracking-[0.15em] text-white/50 uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Chapter 01
            </p>
            <p
              className="text-sm text-white font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {chapterTitle}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  );
}
