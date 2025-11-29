"use client";

import { motion } from "motion/react";
import { Play, Wheat } from "lucide-react";
import Image from "next/image";
import "./font.css";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface LandingfolioHero33Props {
  logoText?: string;
  navItems?: NavItem[];
  tagline?: string;
  headlineNormal?: string;
  headlineItalic?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  images?: {
    topRight?: string;
    middleRight?: string;
    bottomCenter?: string;
  };
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  onNavClick?: (href: string) => void;
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contacts", href: "#contacts" },
];

// Wheat Logo Icon
function WheatIcon({ className = "w-6 h-6" }: { className?: string }) {
  return <Wheat className={className} />;
}

// Logo Component
function Logo({ text = "BakerSTREET" }: { text?: string }) {
  const bakerPart = text.slice(0, 5);
  const streetPart = text.slice(5);

  return (
    <div className="flex items-center gap-2">
      <WheatIcon className="w-5 h-5 text-white" />
      <span className="text-white text-lg">
        <span className="font-instrument-serif italic">{bakerPart}</span>
        <span className="font-semibold tracking-wide">{streetPart}</span>
      </span>
    </div>
  );
}

// Main Component
export default function LandingfolioHero33({
  logoText = "BakerSTREET",
  navItems = defaultNavItems,
  tagline = "STARTING AT $9.99/MONTH",
  headlineNormal = "Master",
  headlineItalic = "Bread making",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu penatibus pellentesque dolor consequat ligula egestas massa gravida. Porttitor venenatis enim praesent.",
  primaryButtonText = "Get started",
  secondaryButtonText = "Watch trailer",
  images = {
    topRight: "/registry/landingfolio-hero-33/hands-kneading.jpg",
    middleRight: "/registry/landingfolio-hero-33/flour-artistic.jpg",
    bottomCenter: "/registry/landingfolio-hero-33/baked-bread.jpg",
  },
  onPrimaryClick,
  onSecondaryClick,
  onNavClick,
}: LandingfolioHero33Props) {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-8 py-6 lg:px-16"
      >
        {/* Logo */}
        <Logo text={logoText} />

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                if (onNavClick) {
                  e.preventDefault();
                  onNavClick(item.href);
                }
              }}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-8 lg:px-16 pt-8 lg:pt-16">
        <div className="relative">
          {/* Left Content */}
          <div className="relative z-40 max-w-lg">
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-[#C4A574] text-xs tracking-widest font-medium mb-6"
            >
              {tagline}
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-white text-5xl md:text-6xl lg:text-7xl leading-tight mb-8"
            >
              <span className="font-instrument-serif">{headlineNormal}</span>
              <br />
              <span className="font-instrument-serif italic">
                {headlineItalic}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-gray-400 text-sm leading-relaxed mb-10 max-w-md"
            >
              {description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Primary Button */}
              <button
                onClick={onPrimaryClick}
                className="px-8 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
              >
                {primaryButtonText}
              </button>

              {/* Secondary Button */}
              <button
                onClick={onSecondaryClick}
                className="flex items-center gap-3 px-6 py-3.5 bg-transparent border border-white/30 text-white text-sm font-medium rounded-full hover:border-white/50 hover:bg-white/5 transition-all"
              >
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Play size={10} className="text-white ml-0.5" fill="white" />
                </span>
                {secondaryButtonText}
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Images - Positioned absolutely relative to section */}
      {/* Top Right Image - Largest, positioned at top right, overlapping navigation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        className="absolute -top-20 lg:-top-24 right-[10%] lg:right-[18%] w-64 h-64 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden z-20"
      >
        <Image
          src={images.topRight || ""}
          alt="Hands kneading bread dough"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 380px"
        />
      </motion.div>

      {/* Middle Right Image - Small, positioned at right edge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
        className="absolute top-[42%] -right-10 lg:-right-6 w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden z-10"
      >
        <Image
          src={images.middleRight || ""}
          alt="Flour close-up"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 144px, 208px"
        />
      </motion.div>

      {/* Bottom Center Image - Large, positioned at bottom center */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
        className="absolute -bottom-32 lg:-bottom-40 left-1/2 -translate-x-1/2 lg:left-[30%] lg:-translate-x-0 w-72 h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden z-30"
      >
        <Image
          src={images.bottomCenter || ""}
          alt="Freshly baked artisan bread"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 288px, 380px"
        />
      </motion.div>
    </section>
  );
}
