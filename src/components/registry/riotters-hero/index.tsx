"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface RiottersHeroProps {
  /** Logo text */
  logoText?: string;
  /** Navigation items */
  navItems?: { label: string; href: string; hasDropdown?: boolean }[];
  /** Contact button text */
  contactText?: string;
  /** Main headline - first line */
  headlineLine1?: string;
  /** Main headline - second line with highlight */
  headlineLine2?: string;
  /** Highlighted word in headline */
  highlightedWord?: string;
  /** Testimonial author name */
  authorName?: string;
  /** Testimonial author title */
  authorTitle?: string;
  /** Testimonial quote */
  quote?: string;
  /** CTA link text */
  ctaText?: string;
  /** CTA link URL */
  ctaUrl?: string;
  /** Images for the collage */
  collageImages?: {
    main: string;
    lamp: string;
    sketches: string;
  };
  /** Click handlers */
  onContactClick?: () => void;
  onCtaClick?: () => void;
}

// Hand-drawn underline SVG
function HandDrawnUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M2 8C40 4 80 6 100 5C120 4 160 8 198 4"
        stroke="#28D7CE"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
      <motion.path
        d="M5 10C45 6 85 9 105 8C125 7 165 10 195 7"
        stroke="#28D7CE"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      />
    </svg>
  );
}

// Avatar icon component
function AvatarIcon({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 text-white"
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
      </svg>
    </div>
  );
}

export default function RiottersHero({
  logoText = "riotters",
  navItems = [
    { label: "Services", href: "#", hasDropdown: true },
    { label: "About", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Process", href: "#" },
    { label: "Toolbox", href: "#" },
  ],
  contactText = "Contact Us",
  headlineLine1 = "Gett ready for",
  headlineLine2 = "a design",
  highlightedWord = "accellerattion",
  authorName = "Dustin Ray",
  authorTitle = "Head of Business Development, bizee.com",
  quote = '"Working with Riotters has never felt like an agency-client relationship. Everyone from their team is very engaged and involved in the project, making them feel like they are an extension of our team."',
  ctaText = "Explore Case Studies",
  ctaUrl = "#",
  collageImages = {
    main: "/registry/riotters-hero/purple-chair.png",
    lamp: "/registry/riotters-hero/purple-lamp.png",
    sketches: "/registry/riotters-hero/design-sketches.png",
  },
  onContactClick,
  onCtaClick,
}: RiottersHeroProps) {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 lg:px-12 py-5"
      >
        {/* Logo */}
        <div className="text-[#1a1a1a] text-xl font-medium tracking-tight">
          {logoText}
        </div>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="flex items-center gap-1 text-sm text-[#1a1a1a] hover:text-[#666] transition-colors"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onContactClick}
          className="flex items-center gap-2 bg-[#303030] text-white text-sm px-5 py-2.5 rounded-full hover:bg-[#1a1a1a] transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#28D7CE]" />
          {contactText}
        </motion.button>
      </motion.nav>

      {/* Main Content */}
      <div className="px-6 lg:px-12 pt-8 lg:pt-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Testimonial */}
          <div className="flex flex-col justify-between order-2 lg:order-1">
            {/* Author Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 mb-8"
            >
              <AvatarIcon />
              <div>
                <p className="text-sm font-medium text-[#1a1a1a]">
                  {authorName}
                </p>
                <p className="text-sm text-[#888]">{authorTitle}</p>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-[#1a1a1a] text-base lg:text-lg leading-relaxed mb-8 max-w-md"
            >
              {quote}
            </motion.blockquote>

            {/* CTA Link */}
            <motion.a
              href={ctaUrl}
              onClick={(e) => {
                if (onCtaClick) {
                  e.preventDefault();
                  onCtaClick();
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2 text-sm text-[#1a1a1a] hover:text-[#666] transition-colors group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] group-hover:bg-[#666] transition-colors" />
              {ctaText}
            </motion.a>
          </div>

          {/* Right Column - Headline + Images */}
          <div className="order-1 lg:order-2">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#1a1a1a] leading-tight">
                {headlineLine1}
                <br />
                {headlineLine2}{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-[#28D7CE]/20 px-2 -mx-2">
                    {highlightedWord}
                  </span>
                  <HandDrawnUnderline className="absolute -bottom-2 left-0 w-full" />
                </span>
              </h1>
            </motion.div>

            {/* Image Collage */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative"
            >
              <div className="grid grid-cols-12 gap-3">
                {/* Main purple chair image */}
                <div className="col-span-7 relative aspect-[4/3] rounded-lg overflow-hidden bg-[#E3B5C5]">
                  <Image
                    src={collageImages.main}
                    alt="3D design showcase"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Design sketches */}
                <div className="col-span-5 relative aspect-[4/3] rounded-lg overflow-hidden bg-[#F5F5F5]">
                  <Image
                    src={collageImages.sketches}
                    alt="Design sketches"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Purple lamp image */}
                <div className="col-span-5 relative aspect-[3/4] rounded-lg overflow-hidden bg-[#DFE5EA]">
                  <Image
                    src={collageImages.lamp}
                    alt="Design lamp"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Empty space or additional image slot */}
                <div className="col-span-7 relative aspect-[16/9] rounded-lg overflow-hidden bg-[#EDF1F1]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/50 backdrop-blur-sm" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
