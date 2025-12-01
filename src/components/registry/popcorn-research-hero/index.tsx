"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#111111",
    text: "#FFFFFF",
    textSecondary: "#555555",
    accent: "#FFFFFF",
    accentHover: "#E5E5E5",
  },
  dark: {
    background: "#111111",
    text: "#FFFFFF",
    textSecondary: "#555555",
    accent: "#FFFFFF",
    accentHover: "#E5E5E5",
  },
} as const;

const IMAGES = {
  globe: {
    path: "/registry/popcorn-research-hero/globe.png",
    alt: "3D rendered globe with network connections",
    prompt: `3D rendered globe with glowing network connections and satellite orbits.
Style: High-tech, futuristic, space technology aesthetic
Layout: Centered spherical globe with orbital rings and connection lines
Composition: Dark globe with illuminated continents, glowing network lines connecting points, satellite orbit paths
Color palette: Dark blue/black globe, bright blue/cyan connection lines, purple/magenta glow effects
Elements: Continents outlines, network nodes, orbital rings, atmospheric glow
Mood: Advanced technology, global connectivity, space-age telecommunications
Technical: PNG with transparency, glowing effects, 1:1 aspect ratio`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface FeatureItem {
  title: string;
  subtitle: string;
  description: string;
}

interface PopcornResearchHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  navItems?: NavItem[];
  signUpLabel?: string;
  badgeText?: string;
  headline?: string;
  subheadline?: string;
  features?: FeatureItem[];
  globeImage?: string;
}

export default function PopcornResearchHero({
  mode = "dark",
  logoText = "Popcorn",
  navItems = [
    { label: "Home", href: "#" },
    { label: "Manifesto", href: "#" },
    { label: "Research", href: "#", isActive: true },
    { label: "Careers", href: "#" },
  ],
  signUpLabel = "Sign up",
  badgeText = "Our technology",
  headline = "Tomorrow,\nToday",
  subheadline = "Traditional telecom wasn't built for the intelligence age.\nWe're building a software layer to change that.",
  features = [
    {
      title: "Globally",
      subtitle: "Fast",
      description: "Unmatched speeds and low latency worldwide.",
    },
    {
      title: "Natively",
      subtitle: "Intelligent",
      description: "Built-in intelligence that handles unwanted calls and admin.",
    },
    {
      title: "Always",
      subtitle: "Connected",
      description: "Uninterrupted coverage from joint cellular and satellite network.",
    },
  ],
  globeImage = IMAGES.globe.path,
}: PopcornResearchHeroProps) {
  const colors = COLORS[mode];
  return (
    <section className="relative min-h-screen w-full bg-[#111111] overflow-hidden font-sans">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center justify-between px-8 py-6 md:px-16"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-2 h-2 bg-white rounded-sm" />
              <div className="w-2 h-2 bg-white rounded-sm" />
              <div className="w-2 h-2 bg-white rounded-sm" />
              <div className="w-2 h-2 bg-white rounded-sm" />
            </div>
            <span className="text-white font-semibold text-lg">{logoText}</span>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm transition-colors ${
                item.isActive
                  ? "text-white border-b border-white pb-0.5"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Sign Up Button */}
        <button className="px-5 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-colors">
          {signUpLabel}
        </button>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-8 md:pt-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center px-4 py-2 rounded-full border border-gray-600 bg-black/50 mb-6"
        >
          <span className="text-white text-sm">{badgeText}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl text-white font-serif italic leading-tight mb-6"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {headline.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < headline.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 text-base md:text-lg max-w-xl mb-8"
        >
          {subheadline.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < subheadline.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.p>

        {/* Globe Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full max-w-2xl aspect-square -mb-32 md:-mb-48"
        >
          <Image
            src={globeImage}
            alt={IMAGES.globe.alt}
            fill
            className="object-contain"
            priority
          />
          {/* Glow effect under the globe */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-t from-purple-900/20 to-transparent blur-2xl" />
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 bg-[#111111] pt-40 md:pt-56 pb-16 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="text-white text-xl font-semibold mb-1">
                {feature.title}
              </h3>
              <p className="text-[#555555] text-lg mb-4">{feature.subtitle}</p>
              <div className="w-8 h-px bg-gray-600 mb-4" />
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Import Instrument Serif font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&display=swap');
      `}</style>
    </section>
  );
}
