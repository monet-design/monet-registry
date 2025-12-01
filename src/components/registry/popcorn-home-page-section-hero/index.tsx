"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#F7F7F7",
    buttonPrimary: "#494949",
    buttonPrimaryHover: "#333",
    badgeBg: "#3a3a3a",
  },
} as const;

const IMAGES = {
  phoneMockups: {
    path: "/registry/popcorn-home-page-section-hero/phone-mockups.png",
    alt: "App mockups",
    prompt: `Mobile app mockups on smartphones.
Style: Clean product mockup, multiple phones
Layout: Multiple phone screens showing app interface
Elements: App UI, modern design, feature showcase
Color palette: Modern, clean, tech-focused
Mood: Professional, modern, innovative
Technical: PNG with transparency, high resolution`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Phone, MapPin, X } from "lucide-react";
import Image from "next/image";

interface PopcornHomePageSectionHeroProps {
  mode?: "light";
  badge?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  emailPlaceholder?: string;
  ctaText?: string;
  logoText?: string;
  navItems?: { label: string; href: string; active?: boolean }[];
  features?: { icon: React.ReactNode; title: string }[];
  disclaimer?: string;
  phoneImageSrc?: string;
  onSignUp?: (email: string) => void;
}

export default function PopcornHomePageSectionHero({
  mode = "light",
  badge = "Heyo! We launched our Alpha!",
  heading = "One global plan.\nNo hassle.",
  subheading = "Enjoy unlimited global service for $69/mo.",
  description = "No roaming fees, or headaches.",
  emailPlaceholder = "Enter your e-mail",
  ctaText = "Sign up",
  logoText = "Popcorn",
  navItems = [
    { label: "Home", href: "#", active: true },
    { label: "Manifesto", href: "#" },
    { label: "Research", href: "#" },
    { label: "Careers", href: "#" },
  ],
  features = [
    {
      icon: <Phone className="w-4 h-4 text-neutral-700" />,
      title: "Unlimited talk\nand text globally",
    },
    {
      icon: <MapPin className="w-4 h-4 text-neutral-700" />,
      title: "Unlimited data\nin 150+ Countries",
    },
    {
      icon: <X className="w-4 h-4 text-neutral-700" />,
      title: "Cancel\nanytime",
    },
  ],
  disclaimer = "*Subject to our Play by the Rules policy",
  phoneImageSrc = "/registry/popcorn-home-page-section-hero/phone-mockups.png",
  onSignUp,
}: PopcornHomePageSectionHeroProps) {
  const colors = COLORS[mode];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    onSignUp?.(email);
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Font import for Instrument Serif */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
      `}</style>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <PopcornLogo />
          <span className="text-lg font-semibold text-neutral-900">{logoText}</span>
        </div>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`text-sm transition-colors ${
                item.active
                  ? "text-neutral-900 border-b border-neutral-900"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Sign Up Button */}
        <button
          className="text-white text-sm px-5 py-2.5 rounded-full transition-colors"
          style={{ backgroundColor: colors.buttonPrimary }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = colors.buttonPrimaryHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = colors.buttonPrimary;
          }}
        >
          {ctaText}
        </button>
      </motion.nav>

      {/* Hero Content */}
      <div className="flex flex-col items-center px-6 pt-12 pb-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white text-sm px-5 py-2 rounded-full mb-6"
          style={{ backgroundColor: colors.badgeBg }}
        >
          {badge}
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl text-center text-neutral-900 mb-6"
          style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}
        >
          {heading.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < heading.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-neutral-500 text-center text-base md:text-lg mb-1"
        >
          {subheading}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-neutral-500 text-center text-base md:text-lg mb-8"
        >
          {description}
        </motion.p>

        {/* Email Input */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="flex items-center bg-white border border-neutral-200 rounded-full pl-6 pr-1.5 py-1.5 w-full max-w-md shadow-sm"
        >
          <input
            type="email"
            name="email"
            placeholder={emailPlaceholder}
            className="flex-1 bg-transparent outline-none text-neutral-700 placeholder:text-neutral-400 text-sm"
          />
          <button
            type="submit"
            className="text-white text-sm px-6 py-2.5 rounded-full transition-colors"
            style={{ backgroundColor: colors.buttonPrimary }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.buttonPrimaryHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.buttonPrimary;
            }}
          >
            {ctaText}
          </button>
        </motion.form>

        {/* Phone Mockups */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative mt-12 mb-8 w-full max-w-2xl"
        >
          <Image
            src={IMAGES.phoneMockups.path}
            alt={IMAGES.phoneMockups.alt}
            width={600}
            height={600}
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-3 gap-8 md:gap-16 mb-6 max-w-3xl"
        >
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-3">
                {feature.icon}
              </div>
              <p className="text-neutral-900 text-sm md:text-base font-medium whitespace-pre-line">
                {feature.title}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-neutral-400 text-xs text-center mb-8"
        >
          {disclaimer}
        </motion.p>
      </div>
    </section>
  );
}

function PopcornLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="4" fill="#1a1a1a" />
      <g fill="white">
        <circle cx="8" cy="8" r="2" />
        <circle cx="16" cy="8" r="2" />
        <circle cx="8" cy="16" r="2" />
        <circle cx="16" cy="16" r="2" />
        <circle cx="12" cy="12" r="2" />
      </g>
    </svg>
  );
}
