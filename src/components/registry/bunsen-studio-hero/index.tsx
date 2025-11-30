"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

interface BunsenStudioHeroProps {
  logoText?: string;
  navItems?: NavItem[];
  ctaText?: string;
  ctaHref?: string;
  headline?: string;
  subheadline?: string;
  onCtaClick?: () => void;
}

// Abstract geometric background pattern SVG
function GeometricBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 900"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left arc segments - scientific/molecular pattern */}
      <g opacity="0.15" stroke="#ffffff" strokeWidth="1">
        {/* Outer arc segments */}
        {[...Array(12)].map((_, i) => {
          const startAngle = (i * 30 - 90) * (Math.PI / 180);
          const endAngle = ((i + 1) * 30 - 95) * (Math.PI / 180);
          const radius = 280;
          const cx = 350;
          const cy = 450;
          const x1 = cx + radius * Math.cos(startAngle);
          const y1 = cy + radius * Math.sin(startAngle);
          const x2 = cx + radius * Math.cos(endAngle);
          const y2 = cy + radius * Math.sin(endAngle);
          return (
            <motion.path
              key={`outer-${i}`}
              d={`M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.8 }}
            />
          );
        })}
        {/* Inner arc segments */}
        {[...Array(8)].map((_, i) => {
          const startAngle = (i * 45 - 45) * (Math.PI / 180);
          const endAngle = ((i + 1) * 45 - 50) * (Math.PI / 180);
          const radius = 180;
          const cx = 350;
          const cy = 450;
          const x1 = cx + radius * Math.cos(startAngle);
          const y1 = cy + radius * Math.sin(startAngle);
          const x2 = cx + radius * Math.cos(endAngle);
          const y2 = cy + radius * Math.sin(endAngle);
          return (
            <motion.path
              key={`inner-${i}`}
              d={`M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.06, duration: 0.7 }}
            />
          );
        })}
        {/* Small dots/nodes */}
        {[...Array(6)].map((_, i) => {
          const angle = (i * 60) * (Math.PI / 180);
          const radius = 230;
          const cx = 350 + radius * Math.cos(angle);
          const cy = 450 + radius * Math.sin(angle);
          return (
            <motion.circle
              key={`dot-left-${i}`}
              cx={cx}
              cy={cy}
              r="3"
              fill="#ffffff"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
            />
          );
        })}
      </g>

      {/* Right arc segments */}
      <g opacity="0.12" stroke="#ffffff" strokeWidth="1">
        {[...Array(10)].map((_, i) => {
          const startAngle = (i * 36 + 90) * (Math.PI / 180);
          const endAngle = ((i + 1) * 36 + 85) * (Math.PI / 180);
          const radius = 320;
          const cx = 950;
          const cy = 650;
          const x1 = cx + radius * Math.cos(startAngle);
          const y1 = cy + radius * Math.sin(startAngle);
          const x2 = cx + radius * Math.cos(endAngle);
          const y2 = cy + radius * Math.sin(endAngle);
          return (
            <motion.path
              key={`right-outer-${i}`}
              d={`M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.04, duration: 0.6 }}
            />
          );
        })}
        {/* Small nodes on right */}
        {[...Array(4)].map((_, i) => {
          const angle = (i * 90 + 45) * (Math.PI / 180);
          const radius = 260;
          const cx = 950 + radius * Math.cos(angle);
          const cy = 650 + radius * Math.sin(angle);
          return (
            <motion.circle
              key={`dot-right-${i}`}
              cx={cx}
              cy={cy}
              r="2.5"
              fill="#ffffff"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
            />
          );
        })}
      </g>

      {/* Thin vertical line through center */}
      <motion.line
        x1="600"
        y1="0"
        x2="600"
        y2="350"
        stroke="#ffffff"
        strokeWidth="0.5"
        opacity="0.15"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      />

      {/* Diagonal blue accent line */}
      <motion.line
        x1="550"
        y1="280"
        x2="620"
        y2="750"
        stroke="#4F7CFF"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ delay: 1.2, duration: 1.2, ease: "easeInOut" }}
      />
    </svg>
  );
}

export default function BunsenStudioHero({
  logoText = "BUNSEN",
  navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
  ],
  ctaText = "Start a project",
  ctaHref = "#contact",
  headline = "Science,\nMeet Design.",
  subheadline = "Bunsen is a full-service creative and communications\nstudio serving science and frontier technology\ncompanies.",
  onCtaClick,
}: BunsenStudioHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#0A0A0A] overflow-hidden">
      {/* Geometric background pattern */}
      <GeometricBackground />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center justify-between px-8 py-6 sm:px-12 lg:px-16"
      >
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-white text-lg font-bold tracking-wider">
            {logoText}
          </span>
        </div>

        {/* Right side navigation */}
        <div className="flex items-center gap-8">
          {/* Nav Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/80 text-sm hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href={ctaHref}
            onClick={(e) => {
              if (onCtaClick) {
                e.preventDefault();
                onCtaClick();
              }
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 bg-white text-[#0A0A0A] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            {ctaText}
            <ArrowRight size={16} strokeWidth={2} />
          </motion.a>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center px-8 sm:px-12 lg:px-16 pt-32 sm:pt-40 lg:pt-48">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight whitespace-pre-line"
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          className="mt-12 sm:mt-16 text-white/60 text-sm sm:text-base leading-relaxed max-w-md whitespace-pre-line"
        >
          {subheadline}
        </motion.p>
      </div>

      {/* Subtle gradient overlay at bottom for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
    </section>
  );
}
