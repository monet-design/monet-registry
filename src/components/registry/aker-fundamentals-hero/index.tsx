"use client";

import { motion } from "motion/react";
import "./font.css";

interface AkerFundamentalsHeroProps {
  sectionNumber?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  caption?: string;
  logoText?: string;
  floorplanImage?: string;
  floorplanLabel?: string;
  backgroundImage?: string;
}

// AKER Logo Component
function AkerLogo({ text = "AKER" }: { text?: string }) {
  return (
    <div className="flex items-center gap-2 bg-[#1a1a1a] px-3 py-1.5">
      <span className="text-sm font-medium tracking-wider text-white">
        {text}
      </span>
      <div className="flex flex-col gap-[3px]">
        <div className="h-[2px] w-4 bg-white" />
        <div className="h-[2px] w-4 bg-white" />
      </div>
    </div>
  );
}

// X Mark Icon Component
function XMarkIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#1a1a1a]"
    >
      <path
        d="M6 6L22 22M22 6L6 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Floor Plan Component
function FloorPlan({
  label = "403",
  image,
}: {
  label?: string;
  image?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.7 }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] max-w-[280px]"
    >
      <div className="relative bg-[#f5f3ef] p-4 shadow-lg">
        {/* Floor plan number label */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 font-instrument-serif text-3xl text-[#1a1a1a]">
          {label}
        </div>

        {/* Floor plan illustration - simplified SVG representation */}
        {image ? (
          <img src={image} alt="Floor Plan" className="w-full h-auto" />
        ) : (
          <svg
            viewBox="0 0 200 220"
            className="w-full h-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer walls */}
            <rect
              x="10"
              y="30"
              width="180"
              height="180"
              stroke="#1a1a1a"
              strokeWidth="2"
              fill="none"
            />

            {/* Kitchen area - top left */}
            <rect
              x="10"
              y="30"
              width="60"
              height="70"
              stroke="#1a1a1a"
              strokeWidth="1"
              fill="none"
            />
            {/* Kitchen counter */}
            <rect x="15" y="35" width="50" height="10" fill="#e5e3df" />
            <rect x="15" y="50" width="20" height="20" fill="#e5e3df" />

            {/* Bathroom - top right */}
            <rect
              x="130"
              y="30"
              width="60"
              height="50"
              stroke="#1a1a1a"
              strokeWidth="1"
              fill="none"
            />
            {/* Toilet */}
            <ellipse cx="160" cy="55" rx="8" ry="10" fill="#e5e3df" />
            {/* Sink */}
            <rect x="145" y="35" width="10" height="8" fill="#e5e3df" />

            {/* Bedroom area - bottom left */}
            <rect
              x="10"
              y="130"
              width="80"
              height="80"
              stroke="#1a1a1a"
              strokeWidth="1"
              fill="none"
            />
            {/* Bed */}
            <rect x="20" y="145" width="50" height="55" fill="#e5e3df" />

            {/* Living area - center/right */}
            {/* Sofa */}
            <path
              d="M100 130 L160 130 L160 170 L140 170 L140 150 L120 150 L120 170 L100 170 Z"
              fill="#e5e3df"
            />

            {/* Coffee table */}
            <ellipse cx="130" cy="185" rx="20" ry="10" fill="#e5e3df" />

            {/* Balcony - right side */}
            <rect
              x="170"
              y="100"
              width="20"
              height="60"
              stroke="#1a1a1a"
              strokeWidth="1"
              strokeDasharray="4 2"
              fill="none"
            />

            {/* Door openings */}
            <line
              x1="70"
              y1="100"
              x2="90"
              y2="100"
              stroke="#1a1a1a"
              strokeWidth="1"
            />

            {/* Window markers */}
            <line
              x1="40"
              y1="210"
              x2="60"
              y2="210"
              stroke="#1a1a1a"
              strokeWidth="3"
            />
          </svg>
        )}

        {/* Perennial label at bottom right */}
        <div className="absolute bottom-2 right-3 font-instrument-serif text-xs italic text-[#6b6b6b]">
          Perennial
        </div>
      </div>
    </motion.div>
  );
}

export default function AkerFundamentalsHero({
  sectionNumber = "1.0",
  title = "The Fundamentals",
  subtitle = "Re-imagining residential\ncommunities through\nfeedback and thoughtful\nprogramming.",
  description = "We work to understand our customers and use feedback to provide a sense of place. We weave brand into the small and large design details — from our keychains to our interiors — so that our spaces tell compelling stories.",
  caption = "Branded element from Aker projects.",
  logoText = "AKER",
  floorplanImage,
  floorplanLabel = "403",
  backgroundImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
}: AkerFundamentalsHeroProps) {
  return (
    <section className="relative w-full min-h-screen bg-white font-inter">
      <div className="flex min-h-screen">
        {/* Left Content Area */}
        <div className="relative flex w-1/2 flex-col justify-between p-8 lg:p-12">
          {/* Section Number */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-xs text-[#9a9a9a]"
          >
            {sectionNumber}
          </motion.div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center -mt-20">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-instrument-serif text-4xl md:text-5xl lg:text-6xl font-normal text-[#1a1a1a] tracking-tight"
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-12 font-instrument-serif text-2xl md:text-3xl lg:text-[2.5rem] font-normal text-[#1a1a1a] leading-[1.2] whitespace-pre-line"
            >
              {subtitle}
            </motion.p>
          </div>

          {/* Bottom Content */}
          <div className="space-y-6">
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-md text-sm leading-relaxed text-[#4a4a4a] ml-auto"
            >
              {description}
            </motion.p>

            {/* Caption */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xs italic text-[#9a9a9a]"
            >
              {caption}
            </motion.p>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="relative w-1/2 overflow-hidden">
          {/* Vertical divider line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#e5e5e5]" />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute right-8 top-8 z-20"
          >
            <AkerLogo text={logoText} />
          </motion.div>

          {/* X Mark Icon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute right-10 top-24 z-20"
          >
            <XMarkIcon />
          </motion.div>

          {/* Background Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${backgroundImage})`,
              }}
            />
            {/* Subtle overlay for better contrast */}
            <div className="absolute inset-0 bg-white/10" />
          </motion.div>

          {/* Floor Plan Overlay */}
          <FloorPlan label={floorplanLabel} image={floorplanImage} />
        </div>
      </div>
    </section>
  );
}
