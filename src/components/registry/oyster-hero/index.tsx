"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    announcementBg: "#656565", // Dark gray announcement banner
    buttonBg: "#575757", // Dark gray button
  },
  dark: {
    announcementBg: "#4a4a4a",
    buttonBg: "#3a3a3a",
  },
} as const;

const IMAGES = {
  hero: {
    path: "/registry/oyster-hero/hero-image.png",
    alt: "Professional using Oyster platform",
    prompt: `Professional portrait of person using laptop in modern setting.
Style: Natural, professional photography with warm lighting
Composition: Medium shot, person engaged with laptop
Background: Modern, clean environment with soft focus
Color palette: Warm natural tones, professional attire
Mood: Productive, professional, modern workplace
Technical: High resolution, portrait orientation`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";

interface FeatureCard {
  text: string;
}

interface TrustIndicator {
  text: string;
}

interface PartnerLogo {
  name: string;
}

interface OysterHeroProps {
  mode?: "light" | "dark";
  tagline?: string;
  headlineBold1?: string;
  headlineItalic1?: string;
  headlineBold2?: string;
  headlineItalic2?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  trustIndicators?: TrustIndicator[];
  featureCards?: FeatureCard[];
  partnerLogos?: PartnerLogo[];
  heroImageSrc?: string;
  announcementText?: string;
}

// Hand-drawn arrow decoration SVG
function HandDrawnArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12C7 10 9 8 12 7C15 6 18 7 20 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 6L20 9L17 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Hand-drawn curved line decoration SVG
function HandDrawnCurve({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="40"
      height="60"
      viewBox="0 0 40 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35 5C30 15 25 25 20 35C15 45 10 50 5 55"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Hand-drawn squiggle decoration
function HandDrawnSquiggle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="50"
      height="30"
      viewBox="0 0 50 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 15C10 10 15 20 20 15C25 10 30 20 35 15C40 10 45 20 50 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function OysterHero({
  mode = "light",
  tagline = "AUTOMATED GLOBAL EMPLOYMENT PLATFORM",
  headlineBold1 = "Hire",
  headlineItalic1 = "talent in",
  headlineBold2 = "180+",
  headlineItalic2 = "countries",
  description = "Hire, pay, reward, and manage talent compliantly without setting up an entity. Access deep local intelligence to win talent and stay competitive. Fill new roles fast and expand to new markets in days.",
  primaryButtonText = "Book a Demo",
  secondaryButtonText = "Sign Up for Free",
  trustIndicators = [
    { text: "G2's Leader in global employment platforms" },
    { text: "90% customer satisfaction rate" },
  ],
  featureCards = [
    { text: "CALCULATE EMPLOYMENT COSTS INSTANTLY" },
    { text: "DRAFT EMPLOYMENT AGREEMENTS AUTOMATICALLY" },
    { text: "ACTIVATE GLOBAL PAYROLL AND BENEFITS" },
  ],
  partnerLogos = [
    { name: "lokalise" },
    { name: "badoo" },
    { name: "Spryker" },
    { name: "FormAssembly" },
    { name: "Payhawk" },
    { name: "metadata.io" },
  ],
  heroImageSrc = IMAGES.hero.path,
  announcementText = "Confidently hire and manage global talent | Get started for free",
}: OysterHeroProps) {
  const colors = COLORS[mode];
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Top Announcement Banner */}
      <div className="w-full py-2.5 px-4" style={{ backgroundColor: colors.announcementBg }}>
        <div className="flex items-center justify-center gap-2 text-white text-sm">
          <span>{announcementText}</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full px-6 lg:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <span className="text-2xl font-bold text-[#1a1a1a]">Oyster</span>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {["Products", "Why Oyster", "Resources"].map((item) => (
              <button
                key={item}
                className="flex items-center gap-1 text-[#1a1a1a] text-sm font-medium hover:opacity-70 transition-opacity"
              >
                {item}
                <ChevronDown className="w-4 h-4" />
              </button>
            ))}
            <button className="text-[#1a1a1a] text-sm font-medium hover:opacity-70 transition-opacity">
              Pricing
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-[#1a1a1a] text-sm font-medium hover:opacity-70 transition-opacity">
            Log In
          </button>
          <button className="px-4 py-2 border border-[#1a1a1a] rounded-full text-sm font-medium text-[#1a1a1a] hover:bg-gray-50 transition-colors">
            Speak to an Expert
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-medium text-white transition-colors" style={{ backgroundColor: colors.buttonBg }}>
            Sign Up
          </button>
        </div>
      </nav>

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Hand-drawn decorations */}
            <HandDrawnCurve className="absolute -top-8 -left-4 text-[#1a1a1a]" />
            <HandDrawnArrow className="absolute top-16 -left-8 text-[#1a1a1a] rotate-[-20deg]" />

            {/* Tagline */}
            <p className="text-xs tracking-[0.2em] text-[#1a1a1a] font-medium mb-4">
              {tagline}
            </p>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl leading-tight mb-6">
              <span className="font-bold text-[#1a1a1a]">{headlineBold1}</span>{" "}
              <span className="font-normal italic text-[#1a1a1a]">{headlineItalic1}</span>
              <br />
              <span className="font-bold text-[#1a1a1a]">{headlineBold2}</span>{" "}
              <span className="font-normal italic text-[#1a1a1a]">{headlineItalic2}</span>
            </h1>

            {/* Description */}
            <p className="text-base text-[#4a4a4a] leading-relaxed mb-8 max-w-lg">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-[#1a1a1a] text-white rounded-full text-sm font-medium hover:bg-[#333] transition-colors"
              >
                {primaryButtonText}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 border border-[#1a1a1a] text-[#1a1a1a] rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                {secondaryButtonText}
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col gap-2">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span className="text-sm text-[#4a4a4a]">{indicator.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image with Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Hand-drawn decorations */}
            <HandDrawnSquiggle className="absolute -top-4 left-1/4 text-[#1a1a1a]" />
            <HandDrawnCurve className="absolute -top-2 right-8 text-[#1a1a1a] rotate-180" />

            {/* Hero Image Container */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src={heroImageSrc}
                  alt="Professional using Oyster platform"
                  width={550}
                  height={650}
                  className="w-full h-auto object-cover"
                />

                {/* Feature Cards Overlay */}
                <div className="absolute right-4 top-1/3 flex flex-col gap-3">
                  {featureCards.map((card, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="bg-[#1a1a1a]/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg"
                    >
                      <span className="text-white text-xs font-medium tracking-wide">
                        {card.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Partner Logos Section */}
      <div className="w-full border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8">
            {partnerLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                className="text-gray-400 text-lg font-semibold"
              >
                {logo.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
