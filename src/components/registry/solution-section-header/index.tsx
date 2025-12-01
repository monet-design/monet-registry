"use client";

import { motion } from "motion/react";
import { Cloud } from "lucide-react";

interface SolutionSectionHeaderProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title?: string;
  subtitle?: string;
  mode?: "light" | "dark";
}

const CUSTOMIZATION = {};

// Chevron decoration pattern component
function ChevronPattern({
  direction,
  className = "",
}: {
  direction: "left" | "right";
  className?: string;
}) {
  const chevrons =
    direction === "left"
      ? ["<", "<", "<", "<", "<", "<", "<", "<"]
      : [">", ">", ">", ">", ">", ">", ">", ">"];

  return (
    <div
      className={`flex items-center gap-1.5 text-[10px] text-[#c8c8c8] tracking-[0.2em] ${className}`}
    >
      {direction === "left" && (
        <div className="h-px w-8 bg-[#d8d8d8]" />
      )}
      {chevrons.map((char, i) => (
        <span
          key={i}
          className="opacity-60"
          style={{
            opacity: direction === "left" ? 0.3 + i * 0.08 : 0.9 - i * 0.08,
          }}
        >
          {char}
        </span>
      ))}
      {direction === "right" && (
        <div className="h-px w-8 bg-[#d8d8d8]" />
      )}
    </div>
  );
}

// Center V mark
function CenterVMark() {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      className="text-[#c8c8c8]"
    >
      <path
        d="M1 1L8 8L15 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Full decoration row with chevrons and center mark
function DecorationRow() {
  return (
    <div className="flex items-center justify-center gap-4">
      <ChevronPattern direction="right" />
      <CenterVMark />
      <ChevronPattern direction="left" />
    </div>
  );
}

export default function SolutionSectionHeader({
  badge = "The solution",
  badgeIcon = <Cloud size={14} strokeWidth={1.5} />,
  title = "Antimetal is a complete command\nand control system for AWS",
  subtitle = "Take a look at how Antimetal can save you time and money",
  mode = "light",
}: SolutionSectionHeaderProps) {
  // Split title by newline for proper line breaks
  const titleLines = title.split("\n");

  return (
    <section className="relative w-full bg-[#f8f8f8] py-24 px-6">
      {/* Top decoration pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mb-16"
      >
        <DecorationRow />
      </motion.div>

      {/* Content container */}
      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 flex items-center justify-center"
        >
          <div className="flex items-center gap-2 text-[13px] text-[#6b6b6b]">
            <span className="text-[#888888]">{badgeIcon}</span>
            <span className="font-medium">{badge}</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#0a0a0a]"
        >
          {titleLines.map((line, index) => (
            <span key={index}>
              {line}
              {index < titleLines.length - 1 && <br />}
            </span>
          ))}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-5 text-[15px] sm:text-[16px] text-[#6b6b6b] leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Bottom decoration pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-24"
      >
        <DecorationRow />
      </motion.div>
    </section>
  );
}
