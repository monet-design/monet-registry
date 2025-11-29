"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import "./font.css";

interface StatItem {
  value: string;
  label: string;
}

interface AneshKangutkarBioProps {
  label?: string;
  dateRange?: string;
  title?: string;
  description?: string;
  resumeButtonText?: string;
  onResumeClick?: () => void;
  stats?: StatItem[];
}

function CircularResumeButton({
  text = "DOWNLOAD RESUME",
  onClick,
}: {
  text?: string;
  onClick?: () => void;
}) {
  const repeatedText = `${text} \u2022 ${text} \u2022 `;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="group relative h-[120px] w-[120px] cursor-pointer"
      aria-label={text}
    >
      {/* Outer circle border */}
      <div className="absolute inset-0 rounded-full border border-[#3a3a3a]" />

      {/* Rotating text */}
      <svg
        className="absolute inset-0 h-full w-full animate-spin-slow"
        viewBox="0 0 120 120"
      >
        <defs>
          <path
            id="circlePath"
            d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
          />
        </defs>
        <text
          className="fill-[#6b6b6b] text-[9px] uppercase tracking-[0.15em]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <textPath href="#circlePath" startOffset="0%">
            {repeatedText}
          </textPath>
        </text>
      </svg>

      {/* Center arrow icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <ArrowUpRight
          className="h-5 w-5 text-[#e5e5e5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.5}
        />
      </div>
    </motion.button>
  );
}

export default function AneshKangutkarBio({
  label = "MANDATORY",
  dateRange = "2022 - NOW",
  title = "ABOUT ME\nSECTION",
  description = "FOR 3 YEARS, I'VE BEEN WORKING TO BRING WHAT A BRAND DOES TO LIFE THROUGH DIGITAL EXPERIENCES THAT ARE INTUITIVE, HUMAN, AND EASY TO CONNECT WITH. I BELIEVE IN DESIGN THAT STANDS OUT, THE KIND THAT'S BUILT WITH INTENT, SHAPED BY CURIOSITY, AND DESIGNED WITH PASSION.",
  resumeButtonText = "DOWNLOAD RESUME",
  onResumeClick,
  stats = [
    { value: "3", label: "YEARS" },
    { value: "50", label: "PROJECTS" },
  ],
}: AneshKangutkarBioProps) {
  const titleLines = title.split("\n");

  return (
    <section className="w-full bg-[#0D0D0D] px-6 py-16 font-satoshi sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        {/* Top Row: Label and Date */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center justify-between"
        >
          <span className="text-xs italic tracking-wide text-[#5a5a5a]">
            {label}
          </span>
          <span className="text-xs tracking-wide text-[#5a5a5a]">
            {dateRange}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 text-5xl font-bold italic leading-[1.0] tracking-tight text-[#B3462E] sm:text-6xl lg:text-7xl"
        >
          {titleLines.map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </motion.h2>

        {/* Main Content Grid: Resume Button + Description */}
        <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          {/* Left: Circular Resume Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CircularResumeButton
              text={resumeButtonText}
              onClick={onResumeClick}
            />
          </motion.div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-start pt-2"
          >
            <p className="max-w-md text-[11px] font-medium uppercase leading-[1.9] tracking-[0.03em] text-[#7a7a7a] sm:text-xs">
              {description}
            </p>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex items-end gap-12 sm:gap-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex items-end gap-3">
              <span className="text-7xl font-bold leading-none tracking-tight text-[#B3462E] sm:text-8xl lg:text-9xl">
                {stat.value}
              </span>
              <span className="mb-3 text-[10px] uppercase tracking-[0.15em] text-[#5a5a5a] sm:text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
