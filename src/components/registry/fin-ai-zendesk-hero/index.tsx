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
import {
  ChevronDown,
  Search,
  Phone,
  Video,
  Bell,
  Grid3X3,
  Settings,
  Home,
  Users,
  LayoutGrid,
  BarChart3,
  MessageSquare,
  Smile,
  Paperclip,
  Zap,
  X,
  ChevronLeft,
  ChevronUp,
  MoreHorizontal,
  Maximize2,
} from "lucide-react";

// Intercom-style logo (snowflake/asterisk pattern)
function IntercomLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="12" cy="4" r="2" />
      <circle cx="12" cy="20" r="2" />
      <circle cx="4" cy="12" r="2" />
      <circle cx="20" cy="12" r="2" />
      <circle cx="6.34" cy="6.34" r="2" />
      <circle cx="17.66" cy="17.66" r="2" />
      <circle cx="6.34" cy="17.66" r="2" />
      <circle cx="17.66" cy="6.34" r="2" />
    </svg>
  );
}

// Zendesk-style logo
function ZendeskLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11 3v10.5L3 21h8V10.5L19 3h-8z" />
      <path d="M13 3l8 7.5V21l-8-7.5V3z" opacity="0.6" />
    </svg>
  );
}

interface NavItem {
  label: string;
  hasDropdown?: boolean;
}

interface FinAiZendeskHeroProps {
  mode?: "light" | "dark";
  brandName?: string;
  navItems?: NavItem[];
  badges?: string[];
  headline?: {
    prefix: string;
    middle: string;
    suffix: string;
  };
  description?: string;
  primaryCta?: string;
  secondaryCta?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const defaultNavItems: NavItem[] = [
  { label: "Home" },
  { label: "Product", hasDropdown: true },
  { label: "AI Technology", hasDropdown: true },
  { label: "Solutions", hasDropdown: true },
  { label: "Customers" },
  { label: "Resources", hasDropdown: true },
  { label: "Pricing" },
];

const defaultBadges = [
  "LESS THAN 1 HOUR SETUP TIME",
  "#1 IN PERFORMANCE BENCHMARKS",
  "FIN MILLION DOLLAR GUARANTEE",
];

// Dot pattern background component
function DotPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern
            id="dotPattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.15)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotPattern)" />
      </svg>
    </div>
  );
}

// Chat interface mockup component
function FinChatInterface() {
  return (
    <div className="w-[280px] rounded-xl bg-[#1a1f2e] shadow-2xl overflow-hidden border border-white/5">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <ChevronLeft className="w-4 h-4 text-white/50" />
          <IntercomLogo className="w-5 h-5 text-white" />
          <span className="text-white text-sm font-medium">Fin</span>
        </div>
        <div className="flex items-center gap-2">
          <MoreHorizontal className="w-4 h-4 text-white/50" />
          <Maximize2 className="w-4 h-4 text-white/50" />
        </div>
      </div>

      {/* Chat body */}
      <div className="p-4 space-y-4 min-h-[280px]">
        {/* Orange button placeholder */}
        <div className="flex justify-center">
          <div className="bg-orange-500 rounded-full px-6 py-2 text-white text-xs font-medium">
            Ask a question
          </div>
        </div>

        {/* System message */}
        <div className="text-center text-white/40 text-xs mt-6">
          <p>Hang tight, we are connecting you with a teammate.</p>
          <p>
            Wait time is around <span className="text-cyan-400">2 minutes</span>
          </p>
        </div>

        {/* Agent joined */}
        <div className="flex items-center gap-2 mt-4">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-xs">
            M
          </div>
          <span className="text-white/60 text-xs">
            <span className="text-white">Melissa</span> joined the conversation
          </span>
        </div>

        {/* Agent message */}
        <div className="mt-4">
          <div className="flex items-center gap-2 mb-2">
            <IntercomLogo className="w-4 h-4 text-orange-500" />
            <span className="text-white text-sm font-medium">
              Melissa Walter
            </span>
          </div>
          <div className="bg-[#2a3142] rounded-lg p-3 text-white/80 text-xs leading-relaxed">
            Hey Alex, I&apos;m happy to review your team&apos;s usage and
            recommend how many seats you might be able to remove.
            Alternatively, we could switch your payment terms to annual billing,
            which would save you 15%. What sounds best?
          </div>
        </div>
      </div>

      {/* Input area */}
      <div className="p-3 border-t border-white/5">
        <div className="flex items-center gap-2 bg-[#252a3a] rounded-lg px-3 py-2">
          <input
            type="text"
            placeholder="Message..."
            className="flex-1 bg-transparent text-white text-sm placeholder:text-white/30 outline-none"
          />
          <Smile className="w-4 h-4 text-white/30" />
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center">
            <ChevronUp className="w-3 h-3 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Zendesk dashboard mockup
function ZendeskDashboard() {
  return (
    <div className="w-[600px] rounded-xl bg-[#1a1d21] shadow-2xl overflow-hidden border border-white/5">
      {/* Tab bar */}
      <div className="flex items-center bg-[#2d3138] px-2 py-1">
        <div className="flex items-center gap-2 bg-[#1a1d21] rounded-t-lg px-3 py-2 text-white text-xs">
          <div className="w-4 h-4 rounded bg-teal-500/30 flex items-center justify-center">
            <span className="text-teal-400 text-[8px]">A</span>
          </div>
          <span>Alex Martin</span>
          <span className="text-white/40 text-[10px]">| downgraded our com...</span>
          <X className="w-3 h-3 text-white/40" />
        </div>
        <div className="px-3 text-white/40 text-xs">+ Alex</div>
        <div className="ml-auto flex items-center gap-2 px-2">
          <Search className="w-4 h-4 text-white/40" />
          <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
            Conversations <span className="bg-white/20 rounded px-1">3</span>
          </div>
          <Video className="w-4 h-4 text-white/40" />
          <Phone className="w-4 h-4 text-white/40" />
          <Bell className="w-4 h-4 text-white/40" />
          <Grid3X3 className="w-4 h-4 text-white/40" />
          <Settings className="w-4 h-4 text-white/40" />
          <div className="w-6 h-6 rounded-full bg-teal-500" />
        </div>
      </div>

      {/* Sub header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 text-xs">
        <Home className="w-4 h-4 text-white/40" />
        <span className="text-white">Tandem Software</span>
        <span className="text-white/40">User</span>
        <span className="bg-green-500 text-white px-2 py-0.5 rounded text-[10px]">
          Open
        </span>
        <span className="text-white/60">Ticket #2371</span>
        <div className="ml-auto text-orange-500 text-xs">Next →</div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-12 bg-[#1a1d21] border-r border-white/5 py-4 flex flex-col items-center gap-4">
          <Home className="w-5 h-5 text-white/40" />
          <Users className="w-5 h-5 text-white/40" />
          <LayoutGrid className="w-5 h-5 text-white/40" />
          <BarChart3 className="w-5 h-5 text-white/40" />
          <div className="mt-auto">
            <IntercomLogo className="w-5 h-5 text-orange-500" />
          </div>
          <Settings className="w-5 h-5 text-white/40 mb-2" />
        </div>

        {/* Ticket details panel */}
        <div className="w-32 bg-[#1f2227] p-3 text-xs border-r border-white/5">
          <div className="space-y-3">
            <div>
              <span className="text-white/40">Assignee*</span>
              <div className="flex items-center gap-1 mt-1">
                <div className="w-4 h-4 rounded-full bg-green-500" />
                <span className="text-white text-[10px]">
                  Support/Fin AI Agent
                </span>
              </div>
            </div>
            <div>
              <span className="text-white/40">Followers</span>
              <span className="text-white/60 ml-2">None</span>
            </div>
            <div>
              <span className="text-white/40">Tags</span>
              <div className="mt-1">
                <span className="bg-[#3d4450] text-white/60 px-2 py-0.5 rounded text-[10px]">
                  Set required ▼
                </span>
              </div>
            </div>
            <div>
              <span className="text-white/40">Type</span>
              <div className="flex gap-1 mt-1">
                <span className="text-white/60 text-[10px]">Question ▼</span>
              </div>
            </div>
            <div>
              <span className="text-white/40">Topic</span>
              <span className="text-white/60 ml-2 text-[10px]">Billing ▼</span>
            </div>
            <div>
              <span className="text-white/40">Priority</span>
              <span className="text-white/60 ml-2 text-[10px]">High ▼</span>
            </div>
          </div>
        </div>

        {/* Main conversation area */}
        <div className="flex-1 p-4">
          {/* Conversation modal */}
          <div className="bg-[#282c34] rounded-lg border border-white/10 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
              <span className="text-white text-sm font-medium">
                Conversation with Alex Martin
              </span>
              <div className="flex items-center gap-2">
                <X className="w-4 h-4 text-white/40" />
                <div className="w-4 h-4 rounded-full border border-white/20" />
              </div>
            </div>

            {/* Summary card */}
            <div className="m-3 p-3 bg-[#3d4450] rounded-lg">
              <div className="text-orange-400 text-xs font-medium mb-1">
                Question
              </div>
              <p className="text-white/80 text-xs mb-2">
                Customer asked why their invoice is still high after
                downgrading plans.
              </p>
              <div className="text-orange-400 text-xs font-medium mb-1">
                Summary
              </div>
              <ul className="text-white/60 text-xs space-y-1 list-disc list-inside">
                <li>Downgraded to Team on June 5 (10 seats included)</li>
                <li>18 active users, billed for 8 extra seats.</li>
                <li>Offered seat reduction or annual (15% off)</li>
                <li>Customer accepted, ready to proceed</li>
              </ul>
            </div>

            {/* Agent response */}
            <div className="px-4 pb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500" />
                <span className="text-white text-sm">Melissa Walter</span>
                <span className="text-white/30 text-xs">• Jun 28 16:32</span>
              </div>
              <div className="bg-[#e8f4f8] rounded-lg p-3 text-slate-700 text-xs leading-relaxed">
                Hey Alex, I&apos;m happy to review your team&apos;s usage and
                recommend how many seats you might be able to remove.
                Alternatively, we could switch your payment terms to annual
                billing, which would save you 15%. What sounds best?
              </div>
            </div>

            {/* Reply area */}
            <div className="px-4 pb-3 flex items-center gap-2 text-xs border-t border-white/5 pt-3">
              <span className="text-red-400">← Public reply</span>
              <span className="text-white/40">|</span>
              <span className="text-white/60">To</span>
              <span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">
                @ Alex Martin ✏
              </span>
            </div>

            <div className="px-4 pb-3 flex items-center gap-3">
              <Smile className="w-4 h-4 text-white/30" />
              <Paperclip className="w-4 h-4 text-white/30" />
              <Zap className="w-4 h-4 text-white/30" />
              <div className="ml-auto">
                <button className="bg-orange-500 text-white text-xs px-4 py-1.5 rounded">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel - User info */}
        <div className="w-44 bg-[#1f2227] p-3 text-xs border-l border-white/5">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-white/10" />
            <div>
              <div className="text-white font-medium">Alex Martin</div>
              <div className="flex items-center gap-1">
                <Maximize2 className="w-3 h-3 text-white/30" />
                <ChevronUp className="w-3 h-3 text-white/30" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-white/40">Email</span>
              <span className="text-white/60 text-[10px]">alex@tandem.io</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40">Extern ID.</span>
              <span className="text-white/40">e-admin</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40">Phone</span>
              <span className="text-white/40">+1(555)549-0627</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40">Local time</span>
              <span className="text-white/40">Tue 14:05 (MT)-5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40">Language</span>
              <span className="text-white/40">English (United States)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40">Org</span>
              <span className="text-orange-400">AMC ▼</span>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-white/40">Notes</span>
              <ChevronUp className="w-3 h-3 text-white/30" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/40">Device information</span>
              <ChevronUp className="w-3 h-3 text-white/30" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/40">Pages viewed</span>
              <ChevronUp className="w-3 h-3 text-white/30" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/40">Interactions</span>
              <ChevronUp className="w-3 h-3 text-white/30" />
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/5">
            <div className="text-orange-400 text-[10px]">Conversations</div>
            <div className="text-white/40 text-[10px] mt-1">08_21_26_05</div>
            <div className="text-cyan-400 text-[10px] mt-1">Status: New</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FinAiZendeskHero({
  mode = "light",
  brandName = "Intercom",
  navItems = defaultNavItems,
  badges = defaultBadges,
  headline = {
    prefix: "Get",
    middle: "Fin and keep\nyour team on",
    suffix: "Zendesk",
  },
  description = "Fin—the best-performing AI Agent for customer service—is available on Zendesk, so you can resolve up to 93% of customer queries and deliver higher quality support without any migration or changes to your setup.",
  primaryCta = "Start free trial",
  secondaryCta = "View demo",
  onPrimaryClick,
  onSecondaryClick,
}: FinAiZendeskHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#0a1628] overflow-hidden">
      {/* Dot pattern background */}
      <DotPattern />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 flex items-center justify-between px-6 py-4"
      >
        {/* Logo */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <IntercomLogo className="w-6 h-6 text-white" />
            <ChevronDown className="w-4 h-4 text-white/60" />
          </div>

          {/* Nav items */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-1 px-3 py-2 text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="w-3 h-3 text-white/50" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right nav */}
        <div className="flex items-center gap-4">
          <button className="text-sm text-white/80 hover:text-white transition-colors hidden sm:block">
            Contact sales
          </button>
          <button className="text-sm text-white/80 hover:text-white transition-colors hidden sm:block">
            Sign in
          </button>
          <button className="text-sm text-white/80 hover:text-white transition-colors hidden md:block">
            View demo
          </button>
          <button className="bg-white text-slate-900 text-sm font-medium px-4 py-2 rounded-full hover:bg-white/90 transition-colors">
            {primaryCta}
          </button>
        </div>
      </motion.nav>

      {/* Hero content */}
      <div className="relative z-10 px-6 pt-8 pb-16">
        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8"
        >
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-[10px] md:text-xs tracking-[0.15em] text-white/50 uppercase"
            >
              {badge}
              {index === badges.length - 1 && (
                <div className="w-4 h-4 rounded border border-white/20 flex items-center justify-center">
                  <span className="text-[8px]">?</span>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto text-center mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            <span
              className="text-white italic"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {headline.prefix}
            </span>{" "}
            <IntercomLogo className="inline-block w-10 h-10 md:w-14 md:h-14 text-white align-middle -mt-2" />{" "}
            <span className="text-white font-medium">
              {headline.middle.split("\n")[0]}
            </span>
            <br />
            <span
              className="text-white italic"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {headline.middle.split("\n")[1]}
            </span>{" "}
            <ZendeskLogo className="inline-block w-10 h-10 md:w-14 md:h-14 text-white align-middle -mt-2" />{" "}
            <span className="text-white font-medium">{headline.suffix}</span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-xl mx-auto text-center text-white/50 text-sm md:text-base leading-relaxed mb-8"
        >
          {description}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-3"
        >
          <button
            onClick={onPrimaryClick}
            className="bg-white text-slate-900 text-sm font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
          >
            {primaryCta}
          </button>
          <button
            onClick={onSecondaryClick}
            className="border border-white/30 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
          >
            {secondaryCta}
          </button>
        </motion.div>

        {/* Dashboard mockups */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 md:mt-24 relative max-w-6xl mx-auto"
        >
          <div className="relative flex items-end justify-center gap-4 px-4">
            {/* Fin Chat - Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="hidden md:block relative z-10 -mr-20 mb-8"
            >
              <FinChatInterface />
            </motion.div>

            {/* Zendesk Dashboard - Center */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="relative z-20 scale-[0.85] md:scale-100 origin-bottom"
            >
              <ZendeskDashboard />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1628] to-transparent pointer-events-none" />

      {/* Import Instrument Serif font */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap");
      `}</style>
    </section>
  );
}
