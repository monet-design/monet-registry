"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface HelpScoutAiHeroProps {
  mode?: "light" | "dark";
  title?: {
    line1?: string;
    line2?: string;
  };
  ctaText?: string;
  onCtaClick?: () => void;
  navItems?: Array<{
    label: string;
    hasDropdown?: boolean;
  }>;
  logoText?: string;
  loginText?: string;
  ctaNavText?: string;
}

export default function HelpScoutAiHero({
  mode = "light",
  title = {
    line1: "Every vendor conversation",
    line2: "One unified platform",
  },
  ctaText = "Explore the Platform",
  onCtaClick,
  navItems = [
    { label: "Product", hasDropdown: true },
    { label: "Solutions", hasDropdown: true },
    { label: "Resources", hasDropdown: true },
    { label: "Company", hasDropdown: true },
    { label: "Pricing", hasDropdown: false },
  ],
  logoText = "Help Scout",
  loginText = "Login",
  ctaNavText = "Free Trial",
}: HelpScoutAiHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-4"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z"
              fill="#4A8FE7"
            />
            <path
              d="M22 12c0-3.314-2.686-6-6-6s-6 2.686-6 6c0 2.21 1.195 4.143 2.974 5.18C11.79 18.26 11 20.04 11 22h10c0-1.96-.79-3.74-1.974-4.82C20.805 16.143 22 14.21 22 12z"
              fill="white"
            />
          </svg>
          <span className="text-lg font-semibold text-[#35458E]">{logoText}</span>
        </div>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            {loginText}
          </button>
          <button className="px-4 py-2 bg-[#526BD9] text-white text-sm font-medium rounded-lg hover:bg-[#4559C7] transition-colors">
            {ctaNavText}
          </button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="flex flex-col items-center pt-12 md:pt-16 lg:pt-20 px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="font-instrument-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
            <span className="italic font-light text-gray-500">{title.line1}</span>
            <br />
            <span className="font-semibold text-[#35458E]">{title.line2}</span>
          </h1>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={onCtaClick}
          className="px-8 py-4 bg-white border-2 border-[#526BD9] text-[#526BD9] font-medium rounded-full hover:bg-[#526BD9] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
        >
          {ctaText}
        </motion.button>

        {/* Screenshots Container */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative w-full max-w-6xl mt-12 md:mt-16 h-[400px] md:h-[500px]"
        >
          {/* Left Screenshot - Help Center */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: -3 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="absolute left-0 md:left-[5%] bottom-0 w-[280px] md:w-[350px] z-10"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="/registry/help-scout-ai-hero/help-center-ui.png"
                alt="Help Center Interface"
                width={350}
                height={280}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Center Screenshot - Inbox */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[320px] md:w-[450px] z-20"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="/registry/help-scout-ai-hero/inbox-ui.png"
                alt="Inbox Interface"
                width={450}
                height={360}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Right Screenshot - Chat Widget */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 3 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="absolute right-0 md:right-[5%] bottom-0 w-[260px] md:w-[320px] z-10"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="/registry/help-scout-ai-hero/chat-widget-ui.png"
                alt="Chat Widget Interface"
                width={320}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Decorative Background Text - Left */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 text-[120px] md:text-[180px] font-bold text-[#E8F5E9] opacity-60 select-none pointer-events-none leading-none">
            <div>Live</div>
            <div>rting</div>
          </div>

          {/* Decorative Background Text - Right */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 text-[120px] md:text-[180px] font-bold text-[#F5E6D8] opacity-60 select-none pointer-events-none leading-none text-right">
            <div>ye Base</div>
            <div>at</div>
          </div>
        </motion.div>
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');

        .font-instrument-serif {
          font-family: 'Instrument Serif', serif;
        }
      `}</style>
    </section>
  );
}
