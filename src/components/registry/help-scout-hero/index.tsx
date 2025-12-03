"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    primary: "#4052B5",         // Blue primary
    primaryHover: "#3545A0",    // Blue hover
    background: "#1a2332",      // Dark bg for knowledge base
    backgroundLight: "#2a3444", // Lighter dark
  },
  dark: {
    primary: "#5062C5",
    primaryHover: "#4555B0",
    background: "#0a1a1f",
    backgroundLight: "#1a2a2f",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import {
  ChevronDown,
  Bell,
  HelpCircle,
  Search,
  MoreVertical,
  Paperclip,
  Send,
  Mail,
  MessageCircle,
  BookOpen,
  Users,
  Settings,
} from "lucide-react";

// Navigation item type
interface NavItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
}

// Props for the component
interface HelpScoutHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  navItems?: NavItem[];
  headlinePrefix?: string;
  headlineMain?: string;
  subheadline?: string;
  ctaText?: string;
  loginText?: string;
  freeTrialText?: string;
  onCtaClick?: () => void;
  onLoginClick?: () => void;
  onFreeTrialClick?: () => void;
}

// Help Scout Logo Component
function HelpScoutLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className={className}
    >
      <path
        d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z"
        fill="#4052B5"
      />
      <path
        d="M16 8c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z"
        fill="#fff"
      />
      <path
        d="M16 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
        fill="#4052B5"
      />
    </svg>
  );
}

// Default navigation items
const defaultNavItems: NavItem[] = [
  { label: "Product", hasDropdown: true },
  { label: "Solutions", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "Company", hasDropdown: true },
  { label: "Pricing" },
];

// Inbox UI Mock Component
function InboxMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="absolute left-1/2 -translate-x-1/2 top-0 z-20 w-[700px] origin-center"
      style={{ transform: "translateX(-50%) rotate(-1deg)" }}
    >
      <div className="rounded-xl bg-white shadow-2xl border border-gray-200 overflow-hidden">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#4052B5] text-white">
          <div className="flex items-center gap-1">
            <HelpScoutLogo className="w-5 h-5" />
            <span className="text-sm font-medium ml-1">Inboxes</span>
            <ChevronDown size={14} />
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span>Docs</span>
            <ChevronDown size={12} className="ml-[-8px]" />
            <span>Messages</span>
            <span>Reports</span>
            <span>Customers</span>
            <span>Manage</span>
            <ChevronDown size={12} className="ml-[-8px]" />
          </div>
          <div className="flex items-center gap-3">
            <Bell size={16} />
            <HelpCircle size={16} />
            <Search size={16} />
            <div className="w-6 h-6 rounded-full bg-blue-300" />
          </div>
        </div>

        {/* Email Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border border-gray-300 rounded" />
            <span className="text-sm font-medium text-gray-800">Order update</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              <div className="w-6 h-6 rounded-full bg-orange-400" />
              <div className="w-6 h-6 rounded-full bg-purple-400" />
            </div>
            <span className="text-xs px-2 py-1 bg-blue-500 text-white rounded-full">Active</span>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <div className="w-5 h-5 rounded-full bg-pink-300" />
              <span>Sabrina B</span>
            </div>
            <MoreVertical size={16} className="text-gray-400" />
          </div>
        </div>

        {/* Email Content */}
        <div className="p-6 min-h-[200px]">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-200 to-pink-300 flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium text-gray-900">Tina Hsu</span>
                <span className="text-xs text-gray-400">Jun 10, 2:44pm</span>
              </div>
              <div className="text-sm text-gray-600 space-y-3">
                <p>Hi there,</p>
                <p>
                  I hope you're doing well. I want to add more items to my order, has it shipped yet? I used a discount
                  code too, can that apply to the additional item?
                </p>
                <p>I've attached both the receipt and a screenshot of the product for reference.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reply Area */}
        <div className="px-4 py-3 border-t border-gray-100 flex items-center gap-2">
          <Paperclip size={16} className="text-gray-400" />
          <div className="flex-1 h-8 bg-gray-50 rounded-lg" />
          <Send size={16} className="text-gray-400" />
        </div>

        {/* Thread indicator */}
        <div className="px-4 py-2 border-t border-gray-100 flex items-center gap-2">
          <div className="flex -space-x-1">
            <div className="w-5 h-5 rounded-full bg-blue-400" />
            <div className="w-5 h-5 rounded-full bg-green-400" />
          </div>
          <span className="text-xs text-blue-500">6 threads</span>
        </div>
      </div>
    </motion.div>
  );
}

// Knowledge Base UI Mock Component
function KnowledgeBaseMock() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60, y: 60 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="absolute left-0 bottom-0 z-10 w-[380px]"
      style={{ transform: "translateX(-10%) translateY(20%)" }}
    >
      <div className="rounded-xl bg-[#1a2332] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center">
              <BookOpen size={16} className="text-white" />
            </div>
            <span className="text-white font-medium">Acme Inc.</span>
            <ChevronDown size={14} className="text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-4">Looking for help?</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search the knowledge base..."
              className="w-full px-4 py-2.5 rounded-lg bg-[#2a3444] text-white placeholder-gray-400 text-sm"
              readOnly
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-blue-500 text-white text-xs rounded">
              Search
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="px-6 pb-6 grid grid-cols-3 gap-4">
          {[
            { icon: BookOpen, label: "Content Strategy", color: "bg-blue-500" },
            { icon: Users, label: "Community Management", color: "bg-purple-500" },
            { icon: Settings, label: "Troubleshooting and FAQs", color: "bg-indigo-500" },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className={`w-10 h-10 mx-auto mb-2 rounded-lg ${item.color} flex items-center justify-center`}>
                <item.icon size={18} className="text-white" />
              </div>
              <span className="text-xs text-gray-300">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Customer Profile UI Mock Component
function CustomerProfileMock() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60, y: 40 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="absolute right-0 top-[10%] z-10 w-[280px]"
      style={{ transform: "translateX(5%)" }}
    >
      {/* Profile Card */}
      <div className="rounded-xl bg-white shadow-xl border border-gray-200 overflow-hidden mb-3">
        <div className="p-4">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-200 to-pink-300 flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center gap-1">
                <span className="font-medium text-gray-900">Tina Hsu</span>
                <MoreVertical size={14} className="text-gray-400" />
              </div>
              <a href="#" className="text-xs text-blue-500">tina@artfinance.com</a>
              <div className="mt-2 space-y-1 text-xs text-gray-500">
                <div className="flex justify-between">
                  <span>Sales</span>
                </div>
                <div className="flex justify-between">
                  <span>Art Finance</span>
                </div>
                <div className="flex justify-between">
                  <span>Duxbury, United States</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <div className="rounded-xl bg-white shadow-xl border border-gray-200 overflow-hidden">
        {/* Answers/Ask Tabs */}
        <div className="flex items-center justify-center gap-4 px-4 py-2 bg-[#4052B5] text-white text-sm">
          <button className="flex items-center gap-1">
            <Search size={14} />
            <span>Answers</span>
          </button>
          <button className="flex items-center gap-1 opacity-70">
            <MessageCircle size={14} />
            <span>Ask</span>
          </button>
        </div>

        {/* Avatars */}
        <div className="px-4 py-4 text-center">
          <div className="flex justify-center -space-x-2 mb-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white"
                style={{
                  background: `linear-gradient(135deg, hsl(${i * 50}, 70%, 60%), hsl(${i * 50 + 30}, 70%, 50%))`,
                }}
              />
            ))}
          </div>
          <p className="text-sm font-medium text-gray-900">Start a conversation</p>
          <p className="text-xs text-gray-500">What channel do you prefer?</p>
        </div>

        {/* Channel Options */}
        <div className="px-4 pb-4 space-y-2">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
              <Mail size={14} className="text-orange-500" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-gray-900">Email</p>
              <p className="text-xs text-gray-500">No time to wait around? We usually respond within a few hours</p>
            </div>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <MessageCircle size={14} className="text-green-500" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-gray-900">Chat</p>
              <p className="text-xs text-gray-500">We're online right now, talk with our team in real-time</p>
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// Background Decorative Text Component
function BackgroundText() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Left side - Green tinted text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.06, x: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="absolute left-[-5%] top-[35%] text-[#2E7D32] font-bold"
        style={{ fontSize: "clamp(60px, 10vw, 120px)" }}
      >
        Live Chat
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.06, x: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="absolute left-[-8%] top-[55%] text-[#2E7D32] font-bold"
        style={{ fontSize: "clamp(60px, 10vw, 120px)" }}
      >
        Reporting
      </motion.div>

      {/* Right side - Orange/Peach tinted text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.06, x: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="absolute right-[-5%] top-[35%] text-[#E65100] font-bold"
        style={{ fontSize: "clamp(60px, 10vw, 120px)" }}
      >
        Knowledge Base
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.06, x: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="absolute right-[-8%] top-[55%] text-[#E65100] font-bold"
        style={{ fontSize: "clamp(60px, 10vw, 120px)" }}
      >
        Support
      </motion.div>
    </div>
  );
}

// Main Component
export default function HelpScoutHero({
  mode = "light",
  logoText = "Help Scout",
  navItems = defaultNavItems,
  headlinePrefix = "Every",
  headlineMain = "customer conversation\nOne unified platform",
  ctaText = "Explore the Platform",
  loginText = "Login",
  freeTrialText = "Free Trial",
  onCtaClick,
  onLoginClick,
  onFreeTrialClick,
}: HelpScoutHeroProps) {
  const colors = COLORS[mode];
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap');
      `}</style>

      {/* Background Decorative Text */}
      <BackgroundText />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-50 flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <HelpScoutLogo />
          <span
            className="text-lg font-semibold text-[#4052B5]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {logoText}
          </span>
        </div>

        {/* Nav Items */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href || "#"}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {item.label}
              {item.hasDropdown && <ChevronDown size={14} />}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onLoginClick}
            className="hidden sm:block text-sm text-gray-600 hover:text-gray-900 transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {loginText}
          </button>
          <button
            onClick={onFreeTrialClick}
            className="rounded-lg bg-[#4052B5] px-4 py-2 text-sm font-medium text-white hover:bg-[#3545A0] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {freeTrialText}
          </button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-40 mx-auto max-w-4xl px-6 pt-12 pb-8 sm:pt-16 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight text-gray-900"
        >
          <span
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
            }}
          >
            {headlinePrefix}
          </span>{" "}
          {headlineMain.split("\n").map((line, index) => (
            <span key={index}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
                {line}
              </span>
              {index < headlineMain.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.h1>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8"
        >
          <button
            onClick={onCtaClick}
            className="inline-flex items-center justify-center rounded-full border-2 border-[#4052B5] bg-white px-8 py-4 text-base font-semibold text-[#4052B5] hover:bg-[#4052B5] hover:text-white transition-all duration-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {ctaText}
          </button>
        </motion.div>
      </div>

      {/* UI Screenshots Container */}
      <div className="relative mx-auto max-w-6xl h-[500px] mt-8">
        <InboxMock />
        <KnowledgeBaseMock />
        <CustomerProfileMock />
      </div>
    </section>
  );
}
