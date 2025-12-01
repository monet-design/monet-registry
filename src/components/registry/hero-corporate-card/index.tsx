"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const CUSTOMIZATION = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ChevronDown, Star, ArrowRight } from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface HeroCorporateCardProps {
  logo?: string;
  navItems?: NavItem[];
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  emailPlaceholder?: string;
  ctaText?: string;
  disclaimer?: string;
  reviewPlatform?: string;
  reviewCount?: string;
  reviewRating?: number;
  onEmailSubmit?: (email: string) => void;
  cardImages?: string[];
}

export default function HeroCorporateCard({
  logo = "ramp",
  navItems = [
    { label: "Products", href: "#", hasDropdown: true },
    { label: "Solutions", href: "#", hasDropdown: true },
    { label: "Customers", href: "#" },
    { label: "Resources", href: "#", hasDropdown: true },
    { label: "Pricing", href: "#" },
  ],
  title = "Save more with the",
  titleHighlight = "all-in-one corporate card",
  subtitle = "The fastest, easiest way to manage expenses. Do it all with one card.",
  emailPlaceholder = "What's your work email?",
  ctaText = "Get Started",
  disclaimer = "No personal credit checks or founder guarantee.",
  reviewPlatform = "G2",
  reviewCount = "1,500+",
  reviewRating = 5,
  onEmailSubmit,
  cardImages = [
    "/registry/hero-corporate-card/card-1.png",
    "/registry/hero-corporate-card/card-2.png",
    "/registry/hero-corporate-card/card-3.png",
  ],
}: HeroCorporateCardProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    onEmailSubmit?.(email);
  };

  return (
    <section className="relative min-h-screen w-full bg-[#b5b4ab] overflow-hidden">
      {/* Background Card Images */}
      <div className="absolute inset-0 z-0">
        {/* Card 1 - Left */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -15 }}
          animate={{ opacity: 0.6, x: 0, rotate: -12 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute left-[-5%] top-[15%] w-[45%]"
        >
          <Image
            src={cardImages[0]}
            alt="Corporate card"
            width={600}
            height={380}
            className="w-full h-auto opacity-70"
          />
        </motion.div>

        {/* Card 2 - Center */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute left-[25%] top-[10%] w-[50%]"
        >
          <Image
            src={cardImages[1]}
            alt="Corporate card"
            width={600}
            height={380}
            className="w-full h-auto opacity-60"
          />
        </motion.div>

        {/* Card 3 - Right */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 15 }}
          animate={{ opacity: 0.6, x: 0, rotate: 8 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute right-[-10%] top-[20%] w-[45%]"
        >
          <Image
            src={cardImages[2]}
            alt="Corporate card"
            width={600}
            height={380}
            className="w-full h-auto opacity-70"
          />
        </motion.div>

        {/* Card 4 - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute left-[-8%] bottom-[5%] w-[40%]"
        >
          <Image
            src={cardImages[0]}
            alt="Corporate card"
            width={600}
            height={380}
            className="w-full h-auto opacity-50 rotate-[-5deg]"
          />
        </motion.div>

        {/* Card 5 - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute right-[-5%] bottom-[0%] w-[40%]"
        >
          <Image
            src={cardImages[2]}
            alt="Corporate card"
            width={600}
            height={380}
            className="w-full h-auto opacity-50 rotate-[10deg]"
          />
        </motion.div>
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#b5b4ab]/30 via-transparent to-[#b5b4ab]/50 z-[1]" />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-gray-900">{logo}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-gray-900"
            >
              <path
                d="M4 12L12 4M12 4H6M12 4V10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </div>

          {/* Sign In */}
          <a
            href="#"
            className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
          >
            Sign in
          </a>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-72px)] px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.2)" }}
          >
            {title}
            <br />
            {titleHighlight}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 mb-8"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.15)" }}
          >
            {subtitle}
          </motion.p>

          {/* Email Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-0 max-w-md mx-auto mb-4"
          >
            <div className="relative w-full sm:w-auto flex-1 flex bg-white rounded-full overflow-hidden shadow-lg">
              <input
                type="email"
                name="email"
                placeholder={emailPlaceholder}
                className="w-full px-6 py-4 text-gray-700 text-sm focus:outline-none bg-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 m-1.5 bg-[#c8d429] hover:bg-[#b8c419] text-gray-900 font-semibold text-sm rounded-full transition-colors whitespace-nowrap"
              >
                {ctaText}
              </button>
            </div>
          </motion.form>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm text-white/50 mb-16"
          >
            {disclaimer}
          </motion.p>

          {/* Review Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
          >
            <span className="text-white font-medium text-sm">{reviewPlatform}</span>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: reviewRating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-white/80 text-sm">{reviewCount} reviews</span>
            <ArrowRight className="w-4 h-4 text-white/60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
