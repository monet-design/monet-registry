"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {},
  dark: {},
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, ArrowUp, ArrowDown, Shirt } from "lucide-react";
import "./font.css";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface FlagshipHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  navItems?: NavItem[];
}

// Logo Icon Component
function LogoIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="28" height="28" rx="8" fill="url(#gradient)" />
      <circle cx="14" cy="14" r="4" fill="white" />
      <defs>
        <linearGradient
          id="gradient"
          x1="0"
          y1="0"
          x2="28"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5A623" />
          <stop offset="1" stopColor="#9B59B6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Product Card Component (Left Side)
function ProductPlacementCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="absolute left-[2%] top-[18%] z-10 hidden lg:block"
    >
      <div className="w-[200px] rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
          <span className="text-xs text-gray-700 font-medium">Place your products</span>
          <span className="bg-[#9568F1] text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">
            <Shirt size={10} />
            Rack 2
          </span>
        </div>
        <div className="grid grid-cols-3 gap-1 p-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-[3/4] rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center"
            >
              <div className="w-6 h-8 bg-gradient-to-b from-[#B8D4A8] to-[#8FBF7A] rounded-sm opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Check Icon Badge
function CheckBadge({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className={`absolute z-20 ${className}`}
    >
      <div className="w-10 h-10 rounded-full bg-[#9568F1] flex items-center justify-center shadow-lg">
        <Check size={20} strokeWidth={3} className="text-white" />
      </div>
    </motion.div>
  );
}

// Photo Card Component
function PhotoCard({ className, delay = 0.5 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`absolute z-10 ${className}`}
    >
      <div className="w-[140px] rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden">
        <div className="aspect-[3/4] bg-gradient-to-br from-[#E8F0E4] to-[#D4E4CC] flex items-center justify-center">
          <div className="w-12 h-16 bg-gradient-to-b from-[#98C379] to-[#7FB562] rounded-md opacity-80" />
        </div>
      </div>
    </motion.div>
  );
}

// Chat Message Component (Center)
function ChatMessages() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="absolute left-1/2 -translate-x-1/2 bottom-[8%] z-20 hidden md:block"
    >
      <div className="flex flex-col gap-2 w-[280px]">
        {/* First Message */}
        <div className="bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-100">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 rounded-full bg-[#FFD4A8]" />
            <span className="text-[11px] text-gray-500">Megan - Store (Main Street)</span>
            <span className="text-[10px] text-gray-400 ml-auto">10:02</span>
          </div>
          <p className="text-sm text-gray-800">Here&apos;s a shot of the fixture.</p>
        </div>

        {/* Second Message */}
        <div className="bg-[#E8E4F0] rounded-xl px-4 py-3 shadow-lg">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 rounded-full bg-[#9568F1] flex items-center justify-center">
              <span className="text-[8px] text-white font-bold">T</span>
            </div>
            <span className="text-[11px] text-gray-600">Tess - Visual Merchandiser</span>
            <span className="text-[10px] text-gray-400 ml-auto">10:48</span>
          </div>
          <p className="text-sm text-gray-800">Update looks awesome!<br />Great job!</p>
        </div>

        {/* Status Badge */}
        <div className="flex justify-center">
          <div className="bg-white rounded-full px-4 py-2 shadow-lg border border-gray-100 flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#4CAF50] flex items-center justify-center">
              <Check size={10} strokeWidth={3} className="text-white" />
            </div>
            <span className="text-xs">
              <span className="font-semibold text-gray-800">Main Street</span>
              <span className="text-gray-500"> store VM complete</span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Stats Card Component (Right Side)
function StatsCards() {
  return (
    <>
      {/* +26% Card */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute right-[4%] top-[16%] z-10 hidden lg:block"
      >
        <div className="bg-[#E8F5E2] rounded-lg px-3 py-1.5 flex items-center gap-1 shadow-md">
          <span className="text-[#2E7D32] font-semibold text-sm">+26%</span>
          <ArrowUp size={14} className="text-[#2E7D32]" />
        </div>
      </motion.div>

      {/* Product Image with -11% */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute right-[8%] top-[24%] z-10 hidden lg:block"
      >
        <div className="relative">
          <div className="w-[100px] rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden">
            <div className="aspect-[3/4] bg-gradient-to-br from-[#FBE9E7] to-[#FFCCBC] flex items-center justify-center">
              <div className="w-10 h-14 bg-gradient-to-b from-[#FFAB91] to-[#FF8A65] rounded-md opacity-80" />
            </div>
          </div>
          <div className="absolute -top-2 -left-2 bg-[#E3F2FD] rounded-lg px-2 py-1 flex items-center gap-1 shadow-md">
            <span className="text-[#1565C0] font-semibold text-xs">-11%</span>
            <ArrowDown size={12} className="text-[#1565C0]" />
          </div>
        </div>
      </motion.div>

      {/* +34% Sales Card */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute right-[2%] top-[52%] z-10 hidden lg:block"
      >
        <div className="bg-[#C8E6C9] rounded-xl px-4 py-3 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-[#1B5E20] font-bold text-2xl">+34%</span>
            <ArrowUp size={18} className="text-[#1B5E20]" />
          </div>
          <p className="text-[#2E7D32] text-xs mt-1">Sales since last week</p>
        </div>
      </motion.div>

      {/* Rack 2 Price Card */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute right-[6%] bottom-[18%] z-10 hidden lg:block"
      >
        <div className="w-[120px] rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden">
          <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
            <div className="w-full h-full bg-[#F5F5F5] flex items-center justify-center">
              <div className="w-8 h-10 bg-gradient-to-b from-gray-300 to-gray-400 rounded-sm" />
            </div>
          </div>
          <div className="px-3 py-2 flex items-center justify-between">
            <div className="flex items-center gap-1 text-gray-500 text-[10px]">
              <Shirt size={10} />
              Rack 2
            </div>
            <span className="font-semibold text-sm text-gray-800">$27,358</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}

// Store Illustration Background
function StoreIllustration() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <svg
        viewBox="0 0 800 500"
        className="w-full h-auto max-w-4xl opacity-[0.15]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Clothing rack left */}
        <path
          d="M50 150 L50 350 M150 150 L150 350 M50 150 L150 150"
          stroke="#8B7355"
          strokeWidth="2"
        />
        {/* Hangers left */}
        <path d="M60 160 L60 200 M80 160 L80 210 M100 160 L100 195 M120 160 L120 205 M140 160 L140 200" stroke="#8B7355" strokeWidth="1.5" />

        {/* Center display table */}
        <ellipse cx="400" cy="380" rx="120" ry="40" stroke="#8B7355" strokeWidth="2" />
        <path d="M280 380 L280 420 M520 380 L520 420" stroke="#8B7355" strokeWidth="2" />
        <ellipse cx="400" cy="420" rx="120" ry="40" stroke="#8B7355" strokeWidth="2" />

        {/* Shelves on display */}
        <rect x="340" y="340" width="120" height="30" rx="4" stroke="#8B7355" strokeWidth="1.5" fill="none" />

        {/* Clothing rack right */}
        <path
          d="M650 150 L650 350 M750 150 L750 350 M650 150 L750 150"
          stroke="#8B7355"
          strokeWidth="2"
        />
        {/* Hangers right */}
        <path d="M660 160 L660 200 M680 160 L680 210 M700 160 L700 195 M720 160 L720 205 M740 160 L740 200" stroke="#8B7355" strokeWidth="1.5" />

        {/* Floor lines */}
        <path d="M0 450 L800 450" stroke="#8B7355" strokeWidth="1" strokeDasharray="5,5" />
      </svg>
    </div>
  );
}

// Default navigation items
const defaultNavItems: NavItem[] = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Stories", href: "#stories" },
  { label: "About", href: "#about" },
];

// Main Component
export default function FlagshipHero({
  mode = "light",
  logoText = "Flagship",
  headline = "Make your retail stores\neven more profitable.",
  subheadline = "Uncover rich insights within your Visual Merchandising process.",
  ctaText = "Get in touch",
  navItems = defaultNavItems,
}: FlagshipHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#FFFDF5] overflow-hidden">
      {/* Store Illustration Background */}
      <StoreIllustration />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-30 flex items-center justify-center px-6 py-4 sm:px-8 lg:px-12"
      >
        <div className="flex items-center gap-8 rounded-full bg-white px-6 py-3 shadow-sm border border-gray-100">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <LogoIcon />
            <span className="text-base font-semibold text-gray-900">{logoText}</span>
          </div>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button className="rounded-full bg-[#9568F1] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#8154E0]">
            {ctaText}
          </button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-20 mx-auto max-w-4xl px-6 pt-16 pb-12 sm:px-8 sm:pt-24 lg:pt-28">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-instrument-serif text-center text-4xl font-normal tracking-tight text-gray-900 sm:text-5xl md:text-6xl whitespace-pre-line"
          style={{ fontStyle: "italic" }}
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-gray-500 sm:text-lg"
        >
          {subheadline}
        </motion.p>
      </div>

      {/* Floating UI Elements */}
      <ProductPlacementCard />
      <CheckBadge className="left-[14%] top-[48%] hidden lg:flex" />
      <PhotoCard className="left-[6%] bottom-[15%] hidden lg:block" delay={0.55} />
      <PhotoCard className="left-[18%] top-[32%] hidden xl:block" delay={0.65} />
      <ChatMessages />
      <StatsCards />
    </section>
  );
}
