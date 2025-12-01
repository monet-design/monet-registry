"use client";

import { motion } from "motion/react";
import { ChevronDown, Download, MousePointer2 } from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface CursorLabel {
  name: string;
  color: string;
  position: { top: string; left?: string; right?: string };
  cursorPosition: { top: string; left?: string; right?: string };
}

interface SketchCollaborateHeroProps {
  announcementText?: string;
  announcementLinkText?: string;
  logoText?: string;
  navItems?: NavItem[];
  headlineAccent?: string;
  headlineMain?: string;
  description?: string;
  ctaText?: string;
  signInText?: string;
  cursorLabels?: CursorLabel[];
  screenshotSrc?: string;
  onCtaClick?: () => void;
  onSignInClick?: () => void;
  mode?: "light" | "dark";
}

const CUSTOMIZATION = {};

// Diamond Logo Icon
function DiamondLogo({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <path
        d="M14 2L2 10L14 26L26 10L14 2Z"
        fill="#FDB300"
        stroke="#1A1A1A"
        strokeWidth="0.5"
      />
      <path d="M14 2L8 10L14 26L20 10L14 2Z" fill="#FFCC33" />
      <path d="M14 2L2 10H26L14 2Z" fill="#FFE066" />
    </svg>
  );
}

// Cursor with user label component
function CursorWithLabel({
  name,
  color,
  cursorPosition,
  labelOffset = { x: 16, y: 8 },
  delay = 0,
}: {
  name: string;
  color: string;
  cursorPosition: { top: string; left?: string; right?: string };
  labelOffset?: { x: number; y: number };
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay + 0.5, duration: 0.4 }}
      className="pointer-events-none absolute z-20"
      style={{
        top: cursorPosition.top,
        left: cursorPosition.left,
        right: cursorPosition.right,
      }}
    >
      {/* Cursor Icon */}
      <MousePointer2
        className="h-4 w-4"
        style={{ color, fill: color }}
        strokeWidth={1.5}
      />
      {/* User Label */}
      <div
        className="absolute whitespace-nowrap rounded px-2 py-0.5 text-xs font-medium text-white"
        style={{
          backgroundColor: color,
          top: labelOffset.y,
          left: labelOffset.x,
        }}
      >
        {name}
      </div>
    </motion.div>
  );
}

const defaultNavItems: NavItem[] = [
  { label: "Product", href: "#", hasDropdown: true },
  { label: "Learn", href: "#", hasDropdown: true },
  { label: "Pricing", href: "#" },
  { label: "Help", href: "#", hasDropdown: true },
];

const defaultCursorLabels: CursorLabel[] = [
  {
    name: "Phoebe",
    color: "#F97316",
    position: { top: "25%", left: "5%" },
    cursorPosition: { top: "20%", left: "3%" },
  },
  {
    name: "Martin",
    color: "#22C55E",
    position: { top: "45%", left: "8%" },
    cursorPosition: { top: "42%", left: "6%" },
  },
  {
    name: "Joey",
    color: "#7C3AED",
    position: { top: "18%", right: "5%" },
    cursorPosition: { top: "15%", right: "7%" },
  },
  {
    name: "Evan",
    color: "#F97316",
    position: { top: "32%", right: "3%" },
    cursorPosition: { top: "29%", right: "5%" },
  },
];

export default function SketchCollaborateHero({
  announcementText = "New: Smart Animate",
  announcementLinkText = "Learn more",
  logoText = "",
  navItems = defaultNavItems,
  headlineAccent = "Collaborative",
  headlineMain = "design\nthat works in real-time",
  description = "From designers to developers and anyone who needs eyes on a project, all the tools you need to collaborate are right here.",
  ctaText = "Get started for free",
  signInText = "Sign In",
  cursorLabels = defaultCursorLabels,
  screenshotSrc = "/registry/sketch-collaborate-hero/design-tool-screenshot.png",
  onCtaClick,
  onSignInClick,
  mode = "light",
}: SketchCollaborateHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA]">
      {/* Announcement Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden bg-[#1a1a1a] px-4 py-2.5 text-center"
      >
        <div className="flex items-center justify-center gap-2 text-sm text-white">
          <span className="font-semibold">{announcementText}</span>
          <span className="text-white/70">
            {" "}
            — Bring movement to your prototypes.
          </span>
          <button className="ml-1 font-semibold underline hover:no-underline">
            {announcementLinkText}
          </button>
        </div>
        {/* Preview images in announcement bar */}
        <div className="pointer-events-none absolute right-[10%] top-1/2 hidden -translate-y-1/2 md:block">
          <div className="flex gap-2 opacity-60">
            <div className="h-10 w-16 rounded bg-white/10" />
            <div className="h-10 w-16 rounded bg-white/10" />
            <div className="h-10 w-16 rounded bg-white/10" />
          </div>
        </div>
      </motion.div>

      {/* Header Navigation */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="relative z-30 flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        {/* Logo and Nav */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <DiamondLogo />
            {logoText && (
              <span className="text-lg font-semibold text-[#1a1a1a]">
                {logoText}
              </span>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 text-sm text-[#1a1a1a] transition-colors hover:text-[#666]"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                )}
              </a>
            ))}
          </nav>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={onSignInClick}
            className="text-sm font-medium text-[#1a1a1a] transition-colors hover:text-[#666]"
          >
            {signInText}
          </button>
          <button
            onClick={onCtaClick}
            className="flex items-center gap-2 rounded-lg bg-[#1a1a1a] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#333]"
          >
            Get started
            <Download className="h-4 w-4" />
          </button>
        </div>
      </motion.header>

      {/* Hero Content */}
      <div className="relative mx-auto max-w-5xl px-6 pb-8 pt-12 sm:px-8 sm:pt-16 lg:pt-20">
        {/* Floating Cursors */}
        {cursorLabels.map((cursor, index) => (
          <CursorWithLabel
            key={cursor.name}
            name={cursor.name}
            color={cursor.color}
            cursorPosition={cursor.cursorPosition}
            delay={index * 0.15}
          />
        ))}

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-4xl font-bold leading-tight tracking-tight text-[#1a1a1a] sm:text-5xl md:text-6xl"
        >
          <span className="font-light italic text-[#80BEE6]">
            {headlineAccent}
          </span>{" "}
          {headlineMain.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < headlineMain.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-[#666] sm:text-lg"
        >
          {description}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <button
            onClick={onCtaClick}
            className="rounded-full bg-[#1a1a1a] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#333] hover:shadow-lg"
          >
            {ctaText}
          </button>
        </motion.div>

        {/* Screenshot with gradient border */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="relative mt-12 sm:mt-16"
        >
          {/* Gradient border wrapper */}
          <div className="relative rounded-2xl bg-gradient-to-br from-[#c084fc] via-[#f472b6] to-[#60a5fa] p-[3px] shadow-2xl">
            {/* Inner content */}
            <div className="overflow-hidden rounded-[14px] bg-white">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-gray-200 bg-[#f5f5f5] px-4 py-2.5">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                  <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                  <div className="h-3 w-3 rounded-full bg-[#28CA41]" />
                </div>
                <div className="ml-4 flex flex-1 items-center justify-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="h-4 w-4 rounded bg-gray-300" />
                    <div className="h-4 w-4 rounded bg-gray-300" />
                  </div>
                  <div className="flex items-center gap-1 rounded bg-white px-3 py-1 text-xs text-gray-600">
                    <span className="font-medium">Sports App</span>
                    <span className="text-gray-400">Workspace Document</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="h-5 w-5 rounded bg-gray-200"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Screenshot content */}
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={screenshotSrc}
                  alt="Design tool interface showing collaborative design work"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Subtle glow effect behind the screenshot */}
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-blue-400/20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
