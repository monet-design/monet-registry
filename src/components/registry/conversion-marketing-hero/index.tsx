"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#4389a7",
    accentHover: "#3a7a96",
    teal: "#e7f7fa",
    tealDark: "#4389a7",
    yellowHighlight: "#e8f4ee",
    purple: "#7c3aed",
    orange: "#f97316",
  },
  dark: {
    accent: "#5da8c9",
    accentHover: "#4389a7",
    teal: "#1e3a42",
    tealDark: "#5da8c9",
    yellowHighlight: "#1a3a2a",
    purple: "#a78bfa",
    orange: "#fb923c",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Image as ImageIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Navigation item type
interface NavItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
}

// User row type for the contacts card
interface UserRow {
  avatar: string;
  name: string;
  email: string;
  selected?: boolean;
}

// Props for the component
interface ConversionMarketingHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  navItems?: NavItem[];
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  emailPlaceholder?: string;
  onCtaClick?: () => void;
}

// Logo component
function ConversionLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect width="28" height="28" rx="6" fill="currentColor" />
        <path
          d="M8 14L12 18L20 10"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// Default navigation items
const defaultNavItems: NavItem[] = [
  { label: "Home" },
  { label: "Products", hasDropdown: true },
  { label: "Templates" },
  { label: "Careers" },
  { label: "Blog" },
  { label: "Support" },
];

// Default user rows for the contacts card
const defaultUserRows: UserRow[] = [
  { avatar: "JD", name: "John Doe", email: "john@piedpiper.com" },
  { avatar: "LR", name: "Levi Rowland", email: "levi@raspberry.com" },
  { avatar: "JP", name: "Julia Power", email: "julia@acme.com" },
  { avatar: "SF", name: "Shiela Focus", email: "shiela@sparkflow.ai" },
  { avatar: "CF", name: "Charles Faux", email: "charles@bloom.io", selected: true },
];

// Color swatches for the card
const colorSwatches = [
  "#ffffff",
  "#1a1a1a",
  "#f59e0b",
  "#10b981",
  "#06b6d4",
  "#3b82f6",
];

// Media library items
const mediaItems = [
  { name: "Homepage_Header.png", size: "1.2 MB", time: "8:12 AM" },
  { name: "Social_Posts_Bundle.zip", size: "45 MB", time: "8:16 AM" },
  { name: "Hero_Image", size: "300 MB", time: "8:25 AM" },
  { name: "2025_Q3_Banner.jpeg", size: "512 MB", time: "8:46 AM" },
];

// Contacts Card Component
function ContactsCard({ users }: { users: UserRow[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, x: -20, rotate: -3 }}
      animate={{ opacity: 1, y: 0, x: 0, rotate: -3 }}
      transition={{ delay: 0.5, duration: 0.7 }}
      className="absolute left-0 top-16 w-[280px] rounded-xl bg-white shadow-xl border border-gray-200 overflow-hidden z-10"
      style={{ transform: "rotate(-3deg)" }}
    >
      {/* User List */}
      <div className="p-3">
        {users.map((user, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
              user.selected ? "bg-[#e8f4ee]" : "hover:bg-gray-50"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium ${
                index === 0
                  ? "bg-purple-500"
                  : index === 1
                  ? "bg-emerald-500"
                  : index === 2
                  ? "bg-orange-500"
                  : index === 3
                  ? "bg-pink-500"
                  : "bg-amber-500"
              }`}
            >
              {user.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
            </div>
            <p className="text-xs text-gray-500 truncate">{user.email}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* Color Picker */}
      <div className="p-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Color</p>
        <div className="flex items-center gap-2">
          {colorSwatches.map((color, index) => (
            <div
              key={index}
              className={`w-6 h-6 rounded ${index === 0 ? "border border-gray-300" : ""}`}
              style={{ backgroundColor: color }}
            />
          ))}
          <span className="ml-2 text-xs text-gray-500"># FFFFFF</span>
        </div>
      </div>

      {/* Font Selector */}
      <div className="px-4 pb-3">
        <p className="text-sm font-medium text-gray-700 mb-2">Font</p>
        <div className="flex items-center gap-2">
          <div className="flex-1 border border-gray-200 rounded-lg px-3 py-2 flex items-center justify-between">
            <span className="text-sm text-gray-700">Helvetica</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <div className="border border-gray-200 rounded-lg px-3 py-2">
            <span className="text-sm text-gray-700">14px</span>
          </div>
        </div>
      </div>

      {/* Media Library */}
      <div className="border-t border-gray-100 p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium text-gray-700">Media Library</p>
          <button className="text-xs text-gray-500 flex items-center gap-1">
            <ArrowRight className="w-3 h-3" />
            Upload
          </button>
        </div>
        <div className="space-y-2">
          {mediaItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-purple-100 flex items-center justify-center">
                <ImageIcon className="w-4 h-4 text-purple-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-700 truncate">{item.name}</p>
              </div>
              <p className="text-xs text-gray-400">{item.size}</p>
              <p className="text-xs text-gray-400">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Lead Profile Card Component
function LeadProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.7 }}
      className="absolute left-[240px] top-8 w-[320px] rounded-xl bg-white shadow-xl border border-gray-200 overflow-hidden z-20"
    >
      {/* Progress Bar */}
      <div className="px-4 pt-4">
        <div className="bg-[#e0f7fa] rounded-full px-4 py-2 flex items-center justify-between">
          <span className="text-xs text-[#4389a7] flex items-center gap-1">
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" />
            </svg>
            Tracking performance 5/5
          </span>
        </div>
      </div>

      {/* Profile Header */}
      <div className="p-4 flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center text-white font-medium">
          CF
        </div>
        <div className="flex-1">
          <p className="font-medium text-gray-900">Charles Faux</p>
          <p className="text-sm text-gray-500">charles@bloom.io</p>
        </div>
        <div className="bg-gray-100 rounded-full px-3 py-1 flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-orange-400" />
          <span className="text-xs text-gray-600">Hot Lead</span>
        </div>
      </div>

      {/* Lavender Card */}
      <div className="px-4 pb-4">
        <div className="rounded-lg border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-3 py-2 flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-purple-200 flex items-center justify-center">
              <span className="text-xs text-purple-600">L</span>
            </div>
            <span className="text-sm font-medium text-gray-700">Lavender</span>
          </div>
          <div className="p-3">
            <div className="text-xs font-medium text-gray-600 mb-2">
              The Complete Data Platform
            </div>
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="bg-yellow-100 rounded p-2 h-12" />
              <div className="bg-pink-100 rounded p-2 h-12" />
              <div className="bg-blue-100 rounded p-2 h-12" />
            </div>
            <p className="text-[10px] text-gray-500 font-medium">
              Lavender Helps Sales Teams Close Smarter —<br />
              With Data That Works for You
            </p>
            <p className="text-[8px] text-gray-400 mt-1 leading-relaxed">
              Lavender empowers e-Commerce sales leaders with fast, contextual data at their
              fingertips. From pipeline insights to customer behavior trends, our AI-driven
              platform helps you identify opportunities, personalize outreach, and track
              performance in real-time.
            </p>
          </div>
          <div className="border-t border-gray-100 p-3 grid grid-cols-2 gap-3">
            <div className="rounded overflow-hidden">
              <div className="bg-pink-200 h-10" />
              <div className="bg-white p-1">
                <p className="text-[8px] font-medium text-gray-600">AI-Assisted Reports</p>
              </div>
            </div>
            <div className="rounded overflow-hidden">
              <div className="bg-yellow-200 h-10 flex items-center justify-center gap-1">
                <div className="w-4 h-4 rounded-full bg-pink-300" />
                <div className="w-4 h-4 rounded-full bg-green-300" />
                <div className="w-4 h-4 rounded-full bg-blue-300" />
              </div>
              <div className="bg-white p-1">
                <p className="text-[8px] font-medium text-gray-600">Real-Time Collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Variants Card Component
function VariantsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, x: 20, rotate: 3 }}
      animate={{ opacity: 1, y: 0, x: 0, rotate: 3 }}
      transition={{ delay: 0.7, duration: 0.7 }}
      className="absolute right-0 top-12 w-[260px] rounded-xl bg-white shadow-xl border border-gray-200 overflow-hidden z-10"
      style={{ transform: "rotate(3deg)" }}
    >
      {/* Header */}
      <div className="px-4 pt-4 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="text-gray-400">
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
              <path d="M3 8L7 4M3 8L7 12M3 8H13" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </button>
          <span className="text-sm font-medium text-gray-700 truncate">Sales Lead / Accoun...</span>
        </div>
        <div className="flex items-center gap-1 bg-purple-100 rounded px-2 py-1">
          <svg className="w-3 h-3 text-purple-500" viewBox="0 0 12 12" fill="currentColor">
            <path d="M3 4L6 1L9 4M3 8L6 11L9 8" />
          </svg>
          <span className="text-xs text-purple-600">Variant 3</span>
        </div>
      </div>

      {/* Variants List */}
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 16 16" fill="none" stroke="currentColor">
              <path d="M3 4L6 1L9 4M3 8L6 11L9 8" strokeWidth="1.5" />
            </svg>
            <span className="text-sm text-gray-700">Variant 1</span>
          </div>
          <button className="text-xs text-gray-500">Edit</button>
        </div>
        <div className="bg-gray-100 rounded-lg px-3 py-2">
          <span className="text-sm text-gray-600">Computer & Software</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 16 16" fill="none" stroke="currentColor">
              <path d="M3 4L6 1L9 4M3 8L6 11L9 8" strokeWidth="1.5" />
            </svg>
            <span className="text-sm text-gray-700">Variant 2</span>
          </div>
          <button className="text-xs text-gray-500">Edit</button>
        </div>
        <div className="bg-gray-100 rounded-lg px-3 py-2">
          <span className="text-sm text-gray-600">Marketing & Advertising</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 16 16" fill="none" stroke="currentColor">
              <path d="M3 4L6 1L9 4M3 8L6 11L9 8" strokeWidth="1.5" />
            </svg>
            <span className="text-sm text-gray-700">Variant 3</span>
          </div>
          <button className="text-xs text-purple-600 bg-purple-100 rounded px-2 py-0.5">Edit</button>
        </div>
        <div className="bg-gray-100 rounded-lg px-3 py-2">
          <span className="text-sm text-gray-600">Sales Lead / Account Manager</span>
        </div>
      </div>

      {/* Stats Card */}
      <div className="mx-4 mb-4 rounded-lg border border-gray-200 p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Last Month</span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3 text-gray-400" viewBox="0 0 12 12" fill="currentColor">
              <path d="M3 4L6 1L9 4M3 8L6 11L9 8" />
            </svg>
            <span className="text-xs text-gray-500">Query</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-[10px] text-gray-400 mb-1">Open rate</p>
            <div className="w-6 h-6 rounded bg-blue-500" />
          </div>
          <div>
            <p className="text-[10px] text-gray-400 mb-1">Click-through rate</p>
            <div className="w-6 h-6 rounded bg-purple-500" />
          </div>
          <div>
            <p className="text-[10px] text-gray-400 mb-1">Bounce Rate</p>
            <div className="w-6 h-6 rounded bg-gray-300" />
          </div>
          <div>
            <p className="text-[10px] text-gray-400 mb-1">Unsubscribe Rate</p>
            <div className="w-6 h-6 rounded bg-green-500" />
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div>
            <p className="text-[10px] text-gray-400">Total Unique Opens</p>
            <p className="text-sm font-medium text-blue-600">* 1,912</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-400">Total Unique Clicks</p>
            <p className="text-sm font-medium text-blue-600">* 14</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Main Component
export default function ConversionMarketingHero({
  mode = "light",
  logoText = "Conversion",
  navItems = defaultNavItems,
  headline = "The Modern Marketing\nAutomation Platform",
  subheadline = "Conversion is the AI-native Marketing Automation Platform built for\nhigh-growth B2B businesses. Activate customer data, build custom\njourneys, and send beautiful emails to every single customer.",
  ctaText = "Book a demo",
  emailPlaceholder = "What's your work email?",
  onCtaClick,
}: ConversionMarketingHeroProps) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12 border-b border-gray-100"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <ConversionLogo className="text-gray-900" />
          <span
            className="text-lg font-semibold text-gray-900"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {logoText}
          </span>
        </div>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href || "#"}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Button
            className="rounded-full px-5 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: colors.accent,
              fontFamily: "'Inter', sans-serif"
            }}
          >
            {ctaText}
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
          <button
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Login
          </button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="mx-auto max-w-4xl px-6 pt-16 pb-8 sm:pt-20 lg:pt-24 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight text-gray-900"
          style={{
            fontFamily: "'DM Serif Display', serif",
          }}
        >
          {headline.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < headline.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-600"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {subheadline.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < subheadline.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.p>

        {/* Email Capture Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center justify-center gap-3 mt-8 max-w-md mx-auto"
        >
          <div className="relative flex-1">
            <Input
              type="email"
              placeholder={emailPlaceholder}
              className="rounded-full px-5 py-6 text-sm border-gray-200 focus:border-gray-300 focus:ring-0"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
          </div>
          <Button
            onClick={onCtaClick}
            className="rounded-full px-6 py-6 text-sm font-medium text-white hover:opacity-90 transition-opacity shrink-0"
            style={{
              backgroundColor: colors.accent,
              fontFamily: "'Inter', sans-serif"
            }}
          >
            {ctaText}
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </motion.div>
      </div>

      {/* Dashboard Cards Section */}
      <div className="relative mx-auto max-w-5xl px-6 sm:px-8 mt-4 pb-20 h-[500px]">
        {/* Contacts Card - Left */}
        <ContactsCard users={defaultUserRows} />

        {/* Lead Profile Card - Center */}
        <LeadProfileCard />

        {/* Variants Card - Right */}
        <VariantsCard />

        {/* Fade out gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
