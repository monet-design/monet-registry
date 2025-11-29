"use client";

import { motion } from "motion/react";
import { Play } from "lucide-react";
import Image from "next/image";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface LandingfolioHero27Props {
  logoText?: string;
  navItems?: NavItem[];
  ctaButtonText?: string;
  headline?: string;
  description?: string;
  primaryButtonText?: string;
  helperText?: string;
  videoButtonText?: string;
  teamImageSrc?: string;
  onCtaClick?: () => void;
  onPrimaryClick?: () => void;
  onVideoClick?: () => void;
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Products", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Support", href: "#support" },
];

// Logo Component
function Logo({ text = "ClarityUI" }: { text?: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-[#2563EA] flex items-center justify-center">
        <div className="w-3 h-3 rounded-full border-2 border-white" />
      </div>
      <span className="text-white font-semibold text-lg">{text}</span>
    </div>
  );
}

// Main Component
export default function LandingfolioHero27({
  logoText = "ClarityUI",
  navItems = defaultNavItems,
  ctaButtonText = "Start free trial",
  headline = "Grow SaaS Fast",
  description = "Clarity gives you the blocks & components you need to\ncreate a truly professional website.",
  primaryButtonText = "Get 14 Days Free Trial",
  helperText = "No credit card required \u00b7 Cancel anytime",
  videoButtonText = "Play 1 min video",
  teamImageSrc = "/registry/landingfolio-hero-27/team-collaboration.jpg",
  onCtaClick,
  onPrimaryClick,
  onVideoClick,
}: LandingfolioHero27Props) {
  return (
    <section className="relative w-full min-h-screen bg-[#0F172A] overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-5 lg:px-16"
      >
        {/* Logo */}
        <Logo text={logoText} />

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={onCtaClick}
          className="px-5 py-2.5 text-white text-sm font-medium rounded-full bg-[#0F172A] border border-[#334155] hover:border-[#475569] hover:bg-[#1E293B] transition-all"
        >
          {ctaButtonText}
        </button>
      </motion.nav>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
        >
          {headline}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed whitespace-pre-line"
        >
          {description}
        </motion.p>

        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10"
        >
          <button
            onClick={onPrimaryClick}
            className="px-8 py-4 bg-[#2563EA] text-white text-sm font-medium rounded-full hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/25"
          >
            {primaryButtonText}
          </button>
        </motion.div>

        {/* Helper Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-5 text-sm text-gray-500"
        >
          {helperText}
        </motion.p>
      </div>

      {/* Team Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative max-w-5xl mx-auto px-6 pb-12"
      >
        {/* Card Frame */}
        <div className="relative rounded-2xl overflow-hidden bg-[#1E293B] p-2">
          {/* Image Container */}
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image
              src={teamImageSrc}
              alt="Team collaboration"
              fill
              className="object-cover"
              priority
            />

            {/* Video Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={onVideoClick}
                className="flex items-center gap-3 px-6 py-3 bg-black/40 backdrop-blur-sm rounded-full border border-white/20 hover:bg-black/50 transition-all group"
              >
                <Play
                  size={18}
                  className="text-white"
                  strokeWidth={2}
                />
                <span className="text-white text-sm font-medium">
                  {videoButtonText}
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
