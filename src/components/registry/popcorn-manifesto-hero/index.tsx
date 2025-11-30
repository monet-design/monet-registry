"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface PopcornManifestoHeroProps {
  logoText?: string;
  navItems?: { label: string; isActive?: boolean }[];
  signUpText?: string;
  tagText?: string;
  headingLine1?: string;
  headingLine2?: string;
  descriptionLine1?: string;
  descriptionLine2?: string;
  heroImageSrc?: string;
  heroImageAlt?: string;
  onSignUpClick?: () => void;
  onNavItemClick?: (label: string) => void;
}

// Popcorn Logo Icon
function PopcornLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="4" width="6" height="6" rx="1" fill="#1a1a1a" />
      <rect x="14" y="4" width="6" height="6" rx="1" fill="#1a1a1a" />
      <rect x="4" y="14" width="6" height="6" rx="1" fill="#1a1a1a" />
      <rect x="14" y="14" width="6" height="6" rx="1" fill="#1a1a1a" />
    </svg>
  );
}

// Navigation Component
function Navigation({
  logoText,
  navItems,
  signUpText,
  onSignUpClick,
  onNavItemClick,
}: {
  logoText: string;
  navItems: { label: string; isActive?: boolean }[];
  signUpText: string;
  onSignUpClick?: () => void;
  onNavItemClick?: (label: string) => void;
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between py-5"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <PopcornLogo className="h-5 w-5" />
        <span className="text-base font-bold text-[#1a1a1a]">{logoText}</span>
      </div>

      {/* Navigation */}
      <nav className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => onNavItemClick?.(item.label)}
            className={`text-sm transition-colors ${
              item.isActive
                ? "font-medium text-[#1a1a1a] underline underline-offset-4"
                : "text-[#6b6b6b] hover:text-[#1a1a1a]"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Sign Up Button */}
      <button
        onClick={onSignUpClick}
        className="rounded-full bg-[#4d4d4d] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#333]"
      >
        {signUpText}
      </button>
    </motion.header>
  );
}

// Main Component
export default function PopcornManifestoHero({
  logoText = "Popcorn",
  navItems = [
    { label: "Home" },
    { label: "Manifesto", isActive: true },
    { label: "Research" },
    { label: "Careers" },
  ],
  signUpText = "Sign up",
  tagText = "Our promise",
  headingLine1 = "Tomorrow's",
  headingLine2 = "Telecom",
  descriptionLine1 = "Our mission is to provide exceptional global",
  descriptionLine2 = "connectivity, to enhance humanity's potential.",
  heroImageSrc = "/registry/popcorn-manifesto-hero/phone-clouds.png",
  heroImageAlt = "Smartphone floating in clouds",
  onSignUpClick,
  onNavItemClick,
}: PopcornManifestoHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F7F7F7]">
      {/* Container */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        {/* Navigation */}
        <Navigation
          logoText={logoText}
          navItems={navItems}
          signUpText={signUpText}
          onSignUpClick={onSignUpClick}
          onNavItemClick={onNavItemClick}
        />

        {/* Hero Content */}
        <div className="flex flex-col items-center pt-12 text-center">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-block rounded-full bg-[#ECECEA] px-4 py-2 text-xs font-medium tracking-wide text-[#6b6b6b]">
              {tagText}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-serif text-6xl font-normal leading-[1.1] tracking-tight text-[#1a1a1a] sm:text-7xl lg:text-8xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {headingLine1}
            <br />
            {headingLine2}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 max-w-md font-serif text-base italic leading-relaxed text-[#6b6b6b]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {descriptionLine1}
            <br />
            {descriptionLine2}
          </motion.p>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative mt-8 w-full max-w-2xl"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={heroImageSrc}
                alt={heroImageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
      `}</style>
    </section>
  );
}
