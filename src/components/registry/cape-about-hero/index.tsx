"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

// Font CSS import
import "./font.css";

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface CapeAboutHeroProps {
  logo?: string;
  navItems?: NavItem[];
  ctaButtonText?: string;
  ctaButtonHref?: string;
  onCtaClick?: () => void;
  title?: string;
  backgroundImage?: string;
}

// Abstract scribble SVG component
function AbstractScribble({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Main circular scribble pattern */}
      <motion.path
        d="M320 80 Q380 120 350 180 Q320 240 380 300 Q420 360 360 420 Q300 480 240 450 Q180 420 140 480"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      <motion.path
        d="M280 60 Q340 100 300 160 Q260 220 320 280 Q380 340 320 400 Q260 460 200 420"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      <motion.path
        d="M340 100 Q400 140 370 200 Q340 260 400 320 Q440 380 380 440"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.4 }}
      />
      <motion.path
        d="M260 40 Q300 80 280 140 Q260 200 300 260 Q340 320 300 380 Q260 440 220 400"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.6 }}
      />
      {/* Additional detail lines */}
      <motion.path
        d="M300 120 Q350 160 330 220 Q310 280 350 340"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.7 }}
      />
      <motion.path
        d="M360 140 Q400 180 380 240 Q360 300 400 360"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.3, delay: 0.8 }}
      />
      <motion.path
        d="M240 80 Q280 120 260 180 Q240 240 280 300 Q320 360 280 420"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      <motion.path
        d="M380 180 Q420 220 400 280 Q380 340 420 400"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.9 }}
      />
    </svg>
  );
}

export default function CapeAboutHero({
  logo = "Cape",
  navItems = [
    { label: "About", href: "/about", isActive: true },
    { label: "FAQs", href: "/faqs" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Commitment to Privacy", href: "/privacy" },
  ],
  ctaButtonText = "REQUEST EARLY ACCESS",
  ctaButtonHref = "#",
  onCtaClick,
  title = "About Us",
  backgroundImage = "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop",
}: CapeAboutHeroProps) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background container */}
      <div className="absolute inset-0 flex">
        {/* Left side - Portrait image (75%) */}
        <div className="relative w-3/4 h-full">
          <Image
            src={backgroundImage}
            alt="Portrait"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        {/* Right side - Black with scribble (25%) */}
        <div className="relative w-1/4 h-full bg-black overflow-hidden">
          <AbstractScribble className="absolute inset-0 w-full h-full" />
        </div>
      </div>

      {/* Navigation bar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 w-full px-4 pt-4"
      >
        <div className="max-w-[95%] mx-auto bg-white rounded-lg shadow-sm px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-instrument-serif text-2xl font-bold text-gray-900 tracking-tight"
          >
            {logo}
          </Link>

          {/* Navigation items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-sm transition-colors ${
                  item.isActive
                    ? "text-gray-900 font-medium border-b border-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onCtaClick}
            className="bg-[#8B7FD4] hover:bg-[#7A6FC3] text-white text-xs font-medium tracking-wider px-4 py-2.5 rounded-md transition-colors"
          >
            {ctaButtonText}
          </motion.button>
        </div>
      </motion.nav>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-16 left-8 md:left-16 z-10"
      >
        <h1 className="font-instrument-serif text-5xl md:text-6xl lg:text-7xl text-[#E8DCC8] italic">
          {title}
        </h1>
      </motion.div>
    </section>
  );
}
