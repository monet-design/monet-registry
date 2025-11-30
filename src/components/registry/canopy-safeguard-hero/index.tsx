"use client";

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import "./font.css";

// Types
interface CTAButton {
  text: string;
  variant: "primary" | "secondary";
  href?: string;
}

interface CanopySafeguardHeroProps {
  badge?: string;
  headline?: string;
  description?: string;
  ctaButtons?: CTAButton[];
}

// Geometric Circuit Illustration Component
function CircuitIllustration() {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="absolute right-0 top-0 h-full w-1/2 max-w-[600px]"
      viewBox="0 0 600 540"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMaxYMid slice"
    >
      {/* Horizontal lines */}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        d="M0 160 H350"
        stroke="#2A2D30"
        strokeWidth="1"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        d="M0 270 H500"
        stroke="#2A2D30"
        strokeWidth="1"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        d="M0 380 H350"
        stroke="#2A2D30"
        strokeWidth="1"
      />

      {/* Vertical lines */}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        d="M350 100 V440"
        stroke="#2A2D30"
        strokeWidth="1"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        d="M500 200 V340"
        stroke="#2A2D30"
        strokeWidth="1"
      />

      {/* Diagonal connectors */}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        d="M350 160 L420 160 L500 270"
        stroke="#2A2D30"
        strokeWidth="1"
        fill="none"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        d="M350 380 L420 380 L500 270"
        stroke="#2A2D30"
        strokeWidth="1"
        fill="none"
      />

      {/* Plus icon at top intersection */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.2 }}
      >
        <circle cx="350" cy="160" r="28" fill="#1A1D20" stroke="#2A2D30" strokeWidth="1" />
        <path d="M340 160 H360 M350 150 V170" stroke="#E9F93F" strokeWidth="2.5" strokeLinecap="round" />
      </motion.g>

      {/* Glowing dot at center right */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.3 }}
      >
        <circle cx="500" cy="270" r="36" fill="#1A1D20" stroke="#2A2D30" strokeWidth="1" />
        {/* Glow effect */}
        <circle cx="500" cy="270" r="14" fill="#E9F93F" opacity="0.3" />
        <circle cx="500" cy="270" r="10" fill="#E9F93F" opacity="0.6" />
        <circle cx="500" cy="270" r="6" fill="#E9F93F" />
      </motion.g>

      {/* Small node circles */}
      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 1.4 }}
        cx="350" cy="270" r="4" fill="#3A3D40"
      />
      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 1.5 }}
        cx="350" cy="380" r="4" fill="#3A3D40"
      />
      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 1.6 }}
        cx="420" cy="160" r="3" fill="#3A3D40"
      />
      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 1.7 }}
        cx="420" cy="380" r="3" fill="#3A3D40"
      />
    </motion.svg>
  );
}

// Default data
const defaultCTAButtons: CTAButton[] = [
  { text: "Start Now", variant: "primary" },
  { text: "LoanLab", variant: "secondary" },
];

// Main Component
export default function CanopySafeguardHero({
  badge = "SAFEGUARD",
  headline = "Get accurate calculations\nfor your lending program,\nevery time.",
  description = "Test cases from your end-to-end borrower lifecycle simulations in LoanLab. SafeGuard ensures new code changes align with the borrower scenarios and edge cases that matter.",
  ctaButtons = defaultCTAButtons,
}: CanopySafeguardHeroProps) {
  // Split headline by newlines
  const headlineLines = headline.split("\n");

  return (
    <section className="relative w-full overflow-hidden bg-[#0E1114]">
      {/* Circuit Illustration */}
      <CircuitIllustration />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-block text-xs font-medium tracking-[0.2em] text-[#6B7280]"
          >
            {badge}
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-instrument-serif mb-8 text-4xl font-normal leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[56px]"
          >
            {headlineLines.map((line, index) => (
              <span key={index}>
                {line}
                {index < headlineLines.length - 1 && <br />}
              </span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-10 max-w-xl text-base leading-relaxed text-[#6B7280]"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap items-center gap-3"
          >
            {ctaButtons.map((button, index) => (
              <button
                key={index}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                  button.variant === "primary"
                    ? "bg-[#E9F93F] text-[#0E1114] hover:bg-[#D4E436]"
                    : "border border-[#2A2D30] bg-[#1A1D20] text-white hover:border-[#3A3D40] hover:bg-[#25282B]"
                }`}
              >
                {button.text}
                <ChevronRight className="h-4 w-4" />
              </button>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
