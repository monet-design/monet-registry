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

interface LandingfolioHero34Props {
  logoText?: string;
  navItems?: NavItem[];
  headlineRegular?: string;
  headlineItalic?: string;
  description?: string;
  buttonText?: string;
  playButtonText?: string;
  heroImageSrc?: string;
  heroImageAlt?: string;
  onButtonClick?: () => void;
  onPlayClick?: () => void;
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Contacts", href: "#" },
];

export default function LandingfolioHero34({
  logoText = "BakerSTREET",
  navItems = defaultNavItems,
  headlineRegular = "Master",
  headlineItalic = "Bread making",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu penatibus pellentesque dolor consequat ligula egestas massa gravida. Porttitor venenatis enim praesent.",
  buttonText = "Get started",
  playButtonText = "Play trailer",
  heroImageSrc = "/landingfolio-hero/hero-34/bread-hero.jpg",
  heroImageAlt = "Artisan bread assortment",
  onButtonClick,
  onPlayClick,
}: LandingfolioHero34Props) {
  return (
    <section className="w-full min-h-screen bg-black overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Wheat className="w-5 h-5 text-white" strokeWidth={1.5} />
              <span className="text-white text-lg tracking-wide">
                <span style={{ fontFamily: "'Instrument Serif', serif" }}>
                  Baker
                </span>
                <span className="font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                  STREET
                </span>
              </span>
            </div>

            {/* Nav Links - Right */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white text-sm font-normal hover:opacity-70 transition-opacity underline underline-offset-4"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center pt-12 lg:pt-16">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-white"
          >
            <span
              className="block text-5xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {headlineRegular}
            </span>
            <span
              className="block text-5xl md:text-6xl lg:text-7xl italic"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {headlineItalic}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-[#878787] text-base leading-relaxed max-w-lg"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {description}
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8"
          >
            <button
              onClick={onButtonClick}
              className="px-10 py-3.5 bg-transparent text-white text-sm font-medium rounded-full border border-white hover:bg-white hover:text-black transition-all duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {buttonText}
            </button>
          </motion.div>

          {/* Hero Image / Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative w-full max-w-5xl mt-12"
          >
            {/* Image Container with rounded top corners */}
            <div className="relative w-full aspect-video rounded-t-2xl overflow-hidden">
              <Image
                src={heroImageSrc}
                alt={heroImageAlt}
                fill
                className="object-cover"
                priority
              />

              {/* Play Button and Text Overlay - inside image at bottom */}
              <div className="absolute inset-x-0 bottom-6 md:bottom-10 flex flex-col items-center">
                <motion.button
                  onClick={onPlayClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white/80 bg-transparent flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1" />
                </motion.button>
                <span
                  className="mt-4 text-white text-sm font-normal"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {playButtonText}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
