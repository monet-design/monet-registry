"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Play } from "lucide-react";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface LandingfolioHero1Props {
  mode?: "light" | "dark";
  logoText?: string;
  navItems?: NavItem[];
  customerLoginText?: string;
  signUpText?: string;
  tagline?: string;
  headline?: string;
  headlineAccent?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  trialText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Automation", href: "#automation" },
];

// Dashboard Preview Component
function DashboardPreview() {
  return (
    <div className="relative w-full max-w-[900px] mx-auto">
      {/* Browser Frame */}
      <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-2xl">
        {/* Browser Chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#FAFAFA] border-b border-gray-100">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-[200px] border-r border-gray-100 p-4 hidden md:block">
            {/* Dashboard link */}
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-50 mb-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-600"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9,22 9,12 15,12 15,22" />
              </svg>
              <span className="text-sm font-medium text-gray-900">
                Dashboard
              </span>
            </div>

            {/* Actions section */}
            <div className="mb-4">
              <p className="text-[10px] font-medium text-gray-400 tracking-wider uppercase px-3 mb-2">
                ACTIONS
              </p>
              <div className="space-y-1">
                <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                  User Flow
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Content Calender
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="9,10 4,15 9,20" />
                    <path d="M20 4v7a4 4 0 01-4 4H4" />
                  </svg>
                  Quick Actions
                </div>
              </div>
            </div>

            {/* Profiles section */}
            <div className="mb-4">
              <p className="text-[10px] font-medium text-gray-400 tracking-wider uppercase px-3 mb-2">
                PROFILES
              </p>
              <div className="space-y-1">
                <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  All Profiles
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                  Segments
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                  </svg>
                  Import/Exports
                </div>
              </div>
            </div>

            {/* Dynamics section */}
            <div>
              <p className="text-[10px] font-medium text-gray-400 tracking-wider uppercase px-3 mb-2">
                DYNAMICS
              </p>
              <div className="space-y-1">
                <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                  </svg>
                  Landing Pages
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* Today's Report Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Today&apos;s Report
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Date range
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="w-10 h-10 rounded-full border-4 border-blue-500 border-t-transparent mx-auto mb-2" />
                <p className="text-xs text-gray-500">Opened email</p>
                <p className="text-lg font-bold text-gray-900">
                  3,536{" "}
                  <span className="text-xs font-normal text-green-500">
                    32.4%
                  </span>
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full border-4 border-purple-500 border-t-transparent mx-auto mb-2" />
                <p className="text-xs text-gray-500">Clicked email</p>
                <p className="text-lg font-bold text-gray-900">
                  1,424{" "}
                  <span className="text-xs font-normal text-green-500">
                    29.1%
                  </span>
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full border-4 border-yellow-500 border-t-transparent mx-auto mb-2" />
                <p className="text-xs text-gray-500">Unsubscribed</p>
                <p className="text-lg font-bold text-gray-900">
                  153{" "}
                  <span className="text-xs font-normal text-red-500">
                    1.74%
                  </span>
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full border-4 border-gray-300 border-t-transparent mx-auto mb-2" />
                <p className="text-xs text-gray-500">Bounced</p>
                <p className="text-lg font-bold text-gray-900">
                  32{" "}
                  <span className="text-xs font-normal text-red-500">
                    0.09%
                  </span>
                </p>
              </div>
            </div>

            {/* Chart Area */}
            <div className="flex gap-4">
              {/* Subscribers Chart */}
              <div className="flex-1 bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Subscribers
                    </p>
                    <p className="text-xs text-gray-500">
                      The growth rate of subscribers
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>Unique Subscribers</span>
                    <span className="font-semibold text-blue-600">14,857</span>
                  </div>
                  <div className="flex justify-between">
                    <span>New Email Subscribers</span>
                    <span className="text-gray-900">-</span>
                  </div>
                  <div className="flex justify-between">
                    <span>New SMS Subscribers</span>
                    <span className="text-gray-900">-</span>
                  </div>
                </div>
              </div>

              {/* Campaign Reports */}
              <div className="flex-1 bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Campaign Reports
                    </p>
                    <p className="text-xs text-gray-500">
                      Check all Campaigns
                    </p>
                  </div>
                  <button className="text-xs text-blue-500 hover:underline">
                    Check All Campaigns
                  </button>
                </div>
                <div className="text-xs">
                  <div className="flex justify-between border-b border-gray-200 py-1">
                    <span className="text-gray-500">Campaign</span>
                    <span className="text-gray-500">Opened</span>
                    <span className="text-gray-500">Revenue</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-700 truncate max-w-[100px]">
                      Total Security Package
                    </span>
                    <span className="text-gray-900">3,386</span>
                    <span className="text-gray-900">$14,385</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-700 truncate max-w-[100px]">
                      Gadgets for Young People
                    </span>
                    <span className="text-gray-900">4,692</span>
                    <span className="text-gray-900">$12,490</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Play Button Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex">
              <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <Play size={24} className="text-gray-800 ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function LandingfolioHero1({
  mode = "light",
  logoText = "RAREBLOCKS",
  navItems = defaultNavItems,
  customerLoginText = "Customer Login",
  signUpText = "Sign up",
  tagline = "Smart email campaign builder, made for Developers",
  headline = "Turn your visitors into",
  headlineAccent = "profitable business",
  primaryButtonText = "Get more customers",
  secondaryButtonText = "Watch free demo",
  trialText = "60 Days free trial \u00b7 No credit card required",
  onPrimaryClick,
  onSecondaryClick,
}: LandingfolioHero1Props) {
  return (
    <section className="relative w-full min-h-screen bg-[#F8F9FB] overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-4 lg:px-12"
      >
        {/* Logo */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-1">
            <span className="text-red-500 font-bold text-lg">/</span>
            <span className="text-sm font-semibold tracking-wider text-gray-900">
              {logoText}
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
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
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <a
            href="#login"
            className="hidden sm:block text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            {customerLoginText}
          </a>
          <button className="px-5 py-2.5 bg-[#1A1A1A] text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
            {signUpText}
          </button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto px-6 pt-12 pb-8 text-center">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-sm text-gray-600 mb-6"
        >
          {tagline}
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8"
        >
          {headline}
          <br />
          {headlineAccent}
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <button
            onClick={onPrimaryClick}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#1A1A1A] text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            {primaryButtonText}
          </button>
          <button
            onClick={onSecondaryClick}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-gray-900 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <Play size={16} />
            {secondaryButtonText}
          </button>
        </motion.div>

        {/* Trial Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-sm text-gray-500"
        >
          {trialText}
        </motion.p>
      </div>

      {/* Dashboard Preview */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative px-6 lg:px-12 pb-12"
      >
        <DashboardPreview />
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8F9FB] to-transparent pointer-events-none" />
    </section>
  );
}
