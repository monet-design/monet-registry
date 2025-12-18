"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#0A0F1A",
  cardBackground: "#111827",
  cardBackgroundLight: "#1A2234",
  accent: "#FF6B35",
  accentHover: "#FF8055",
  textPrimary: "#FFFFFF",
  textSecondary: "#9CA3AF",
  border: "#1F2937",
  userMessage: "#FF6B35",
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Sparkles, Send, Smile, MoreHorizontal, Maximize2, ChevronLeft, ChevronRight, User } from "lucide-react";
import "./font.css";

interface FinAiFinancialServiceHeroProps {
  mode?: "light" | "dark";
  title?: {
    line1?: string;
    line2?: string;
    highlight?: string;
    line3?: string;
  };
  description?: string;
  primaryCta?: {
    text: string;
    onClick?: () => void;
  };
  secondaryCta?: {
    text: string;
    onClick?: () => void;
  };
  chatbotName?: string;
}

// Sparkle Icon Component
function SparkleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <Sparkles className={className} />
  );
}

// Background Dashboard Pattern
function DashboardBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {/* Grid lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="fin-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#374151" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fin-grid)" />
      </svg>

      {/* Left side dashboard mockup */}
      <div className="absolute top-8 left-4 w-48 h-32 rounded border border-gray-700/30 bg-gray-800/20 p-2">
        <div className="h-2 w-16 bg-gray-600/30 rounded mb-2" />
        <div className="h-1.5 w-24 bg-gray-600/20 rounded mb-1" />
        <div className="h-1.5 w-20 bg-gray-600/20 rounded" />
        <div className="mt-4 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex-1 h-8 bg-gray-600/20 rounded-sm" style={{ height: `${20 + Math.random() * 20}px` }} />
          ))}
        </div>
      </div>

      {/* Right side dashboard mockup */}
      <div className="absolute top-12 right-8 w-56 h-40 rounded border border-gray-700/30 bg-gray-800/20 p-2">
        <div className="flex justify-between items-center mb-3">
          <div className="h-2 w-12 bg-gray-600/30 rounded" />
          <div className="h-2 w-8 bg-gray-600/30 rounded" />
        </div>
        <div className="space-y-1.5">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-1.5 bg-gray-600/20 rounded" style={{ width: `${60 + Math.random() * 40}%` }} />
          ))}
        </div>
        {/* Chart line */}
        <svg className="mt-3 w-full h-12" viewBox="0 0 100 30">
          <path d="M0 25 Q25 20 50 15 T100 5" fill="none" stroke="#4B5563" strokeWidth="1" />
        </svg>
      </div>

      {/* Scattered UI elements */}
      <div className="absolute top-1/4 left-1/4 w-24 h-6 rounded bg-gray-700/20 border border-gray-600/20" />
      <div className="absolute top-1/3 right-1/4 w-16 h-4 rounded bg-gray-700/20 border border-gray-600/20" />
    </div>
  );
}

// Transaction Card Component
function TransactionCard() {
  return (
    <div className="rounded-xl overflow-hidden" style={{ backgroundColor: COLORS.cardBackground }}>
      {/* Header */}
      <div className="p-3 border-b border-gray-700/50">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
            <User className="w-3 h-3 text-orange-400" />
          </div>
          <div>
            <div className="text-[10px] text-orange-400 font-medium">TRANSACTION DISPUTE HANDLING</div>
            <div className="text-[8px] text-gray-500">USE THIS TASK WHEN A CUSTOMER IS DISPUT...</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 space-y-1.5">
        <div className="text-[8px] text-cyan-400">FREEZE CARD TRIGGERED BY FIN</div>
        <div className="text-[8px] text-cyan-400">TRANSACTION DISPUTE TRIGGERED BY FIN</div>
        <div className="text-[8px] text-cyan-400">CREDIT REQUEST TRIGGERED BY FIN</div>
      </div>

      {/* User Info Section */}
      <div className="mx-3 mb-3 p-2 rounded-lg bg-gray-800/50 border border-gray-700/30">
        <div className="flex items-center gap-1.5 mb-2">
          <User className="w-3 h-3 text-gray-400" />
          <span className="text-[8px] text-gray-400">USER INFORMATION</span>
        </div>
        <div className="grid grid-cols-2 gap-y-1 text-[7px]">
          <span className="text-gray-500">NAME</span>
          <span className="text-gray-300">PAUL JONES</span>
          <span className="text-gray-500">ACCOUNT TYPE</span>
          <span className="text-gray-300">SAVER</span>
          <span className="text-gray-500">LOCATION</span>
          <span className="text-gray-300">NEW YORK, USA</span>
          <span className="text-gray-500">DATE OF BIRTH</span>
          <span className="text-gray-300">01/02/1990</span>
          <span className="text-gray-500">CARD NO</span>
          <span className="text-gray-300">XXXX-XXXX-XXXX-8089</span>
          <span className="text-gray-500">LANGUAGE</span>
          <span className="text-gray-300">ENGLISH</span>
        </div>
      </div>

      {/* Identity Verification */}
      <div className="mx-3 mb-3 p-2 rounded-lg border border-orange-500/30 bg-orange-500/5">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-3 h-3 rounded bg-orange-500/20" />
          <span className="text-[8px] text-orange-400 font-medium">IDENTITY VERIFICATION</span>
        </div>
        <div className="text-[7px] text-gray-500 mb-1">USE THIS TASK TO CONFIRM IDENTITY VERIF...</div>
        <div className="space-y-1">
          <div className="text-[7px] text-purple-400">IDENTITY VERIFICATION</div>
          <div className="text-[7px] text-cyan-400 ml-2">GET CARD DETAILS TRIGGERED BY FIN</div>
          <div className="text-[7px] text-cyan-400 ml-2">GET DATE OF BIRTH DETAILS TRIGGERED BY FIN</div>
        </div>
      </div>

      {/* Transaction Report */}
      <div className="mx-3 mb-3 p-2 rounded-lg bg-gray-800/50 border border-gray-700/30">
        <div className="text-[8px] text-gray-400 mb-2">TRANSACTION REPORT</div>
        <div className="flex items-end gap-1 h-8">
          {[4, 3, 5, 6, 4, 7].map((h, i) => (
            <div key={i} className="flex-1 bg-gray-600/40 rounded-sm" style={{ height: `${h * 4}px` }} />
          ))}
        </div>
        <div className="flex justify-between mt-1 text-[6px] text-gray-500">
          <span>APR 1</span>
          <span>APR 7</span>
          <span>APR...</span>
        </div>
      </div>
    </div>
  );
}

// Chat Interface Component
function ChatInterface({ botName = "Fin" }: { botName?: string }) {
  return (
    <div className="rounded-xl overflow-hidden flex flex-col h-full" style={{ backgroundColor: COLORS.cardBackground }}>
      {/* Header */}
      <div className="p-3 border-b border-gray-700/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ChevronLeft className="w-4 h-4 text-gray-400" />
          <SparkleIcon className="w-4 h-4 text-gray-300" />
          <span className="text-sm font-medium text-white">{botName}</span>
        </div>
        <div className="flex items-center gap-2">
          <MoreHorizontal className="w-4 h-4 text-gray-400" />
          <Maximize2 className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 space-y-4">
        {/* Bot Message */}
        <div className="flex gap-2">
          <div className="p-3 rounded-xl bg-gray-800/80 max-w-[85%]">
            <div className="flex items-center gap-1.5 mb-1">
              <SparkleIcon className="w-3 h-3 text-gray-400" />
              <span className="text-[10px] text-gray-400">{botName} · AI Agent</span>
            </div>
            <p className="text-sm text-gray-200">Hi Paul, how can I help?</p>
          </div>
        </div>

        {/* User Message */}
        <div className="flex justify-end">
          <div className="p-3 rounded-xl max-w-[85%]" style={{ backgroundColor: COLORS.userMessage }}>
            <p className="text-sm text-white">There is a charge on my credit card for $42.50 that I don&apos;t recognize.</p>
          </div>
        </div>

        {/* Typing Indicator */}
        <div className="flex gap-2">
          <div className="p-3 rounded-xl bg-gray-800/80">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-gray-500 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-gray-500 animate-pulse" style={{ animationDelay: "0.2s" }} />
              <div className="w-2 h-2 rounded-full bg-gray-500 animate-pulse" style={{ animationDelay: "0.4s" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="p-3 border-t border-gray-700/50">
        <div className="flex items-center gap-2 p-2 rounded-full bg-gray-800/50 border border-gray-700/50">
          <span className="text-sm text-gray-500 flex-1 pl-2">Message...</span>
          <Smile className="w-5 h-5 text-gray-400" />
          <div className="w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center">
            <Send className="w-3.5 h-3.5 text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Settings/Guidance Panel
function GuidancePanel() {
  return (
    <div className="rounded-xl overflow-hidden" style={{ backgroundColor: COLORS.cardBackground }}>
      {/* Transaction Info Header */}
      <div className="p-3 border-b border-gray-700/50">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-gray-400" />
          <span className="text-[10px] text-gray-400">TRANSACTION UPDATE</span>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2 text-[8px]">
          <div>
            <div className="text-gray-500">AMOUNT</div>
            <div className="text-orange-400 font-medium">$42.50</div>
          </div>
          <div>
            <div className="text-gray-500">MERCHANT</div>
            <div className="text-gray-300">METRO LIFT</div>
          </div>
          <div>
            <div className="text-gray-500">DATE</div>
            <div className="text-gray-300">04/02/2025</div>
          </div>
        </div>
      </div>

      {/* Applying Guidance Section */}
      <div className="p-3 border-b border-gray-700/50">
        <div className="px-2 py-1.5 rounded bg-gray-800/50 border border-gray-700/30 mb-3">
          <span className="text-[9px] text-gray-300 font-medium">APPLYING GUIDANCE</span>
        </div>

        <div className="space-y-3">
          <div>
            <span className="text-[8px] text-gray-500">BASICS</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[8px] text-gray-400">TONE OF VOICE</span>
            <span className="text-[8px] text-green-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              PROFESSIONAL
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[8px] text-gray-400">ANSWER LENGTH</span>
            <span className="text-[8px] text-green-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              STANDARD
            </span>
          </div>

          <div className="flex items-center gap-1.5 mt-2">
            <div className="w-3 h-3 rounded bg-gray-700" />
            <span className="text-[8px] text-gray-300">CONTEXT AND CLARIFICATION</span>
          </div>

          <div className="flex items-center justify-between p-2 rounded bg-gray-800/30">
            <span className="text-[8px] text-gray-300">FOLLOW ID VERIFICATION PROTOCOLS</span>
            <ChevronRight className="w-3 h-3 text-gray-500" />
          </div>

          <div className="flex items-center justify-between p-2 rounded bg-gray-800/30">
            <div className="flex gap-4">
              <span className="text-[8px] text-gray-300">CLEARLY STAT...</span>
              <span className="text-[8px] text-gray-500">1 FOR EACH REQUE...</span>
            </div>
            <ChevronRight className="w-3 h-3 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="p-3">
        <div className="text-[8px] text-gray-500 mb-2">FIN AI AGENT PERFORMANCE OVER TIME</div>
        <div className="text-[10px] text-gray-400 mb-1">85%</div>
        <svg className="w-full h-16" viewBox="0 0 200 50">
          <path d="M0 45 Q20 40 40 38 T80 30 T120 25 T160 20 T200 15" fill="none" stroke="#22C55E" strokeWidth="1.5" />
          <path d="M0 45 Q20 42 40 40 T80 35 T120 32 T160 28 T200 22" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
          <path d="M0 45 Q20 44 40 43 T80 40 T120 38 T160 35 T200 30" fill="none" stroke="#6B7280" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
        <div className="flex justify-between text-[6px] text-gray-500 mt-1">
          <span>APRIL 1</span>
          <span>APRIL 14</span>
          <span>APRIL 28</span>
          <span>MAY 14</span>
          <span>MAY 28</span>
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function FinAiFinancialServiceHero({
  mode = "dark",
  title = {
    line1: "The best-performing AI",
    line2: "Agent for",
    highlight: "Financial",
    line3: "Services support",
  },
  description = "Fin is the best-performing AI Agent for financial services—resolving complex queries like card issues and disputes with unmatched accuracy. With a complete, configurable AI Agent System that gives you full control, you can stay compliant and scale your support confidently.",
  primaryCta = {
    text: "Start free trial",
  },
  secondaryCta = {
    text: "View demo",
  },
  chatbotName = "Fin",
}: FinAiFinancialServiceHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: COLORS.background }}>
      {/* Background Pattern */}
      <DashboardBackground />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-16 pb-8 sm:px-8 sm:pt-24 lg:pt-28 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] fin-ai-hero-title"
        >
          <span className="text-white">{title.line1}</span>
          <br />
          <span className="text-white">{title.line2} </span>
          <span style={{ color: COLORS.accent }}>{title.highlight}</span>
          <br />
          <span style={{ color: COLORS.accent }}>{title.line3}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mt-6 max-w-xl text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textSecondary }}
        >
          {description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <button
            onClick={primaryCta.onClick}
            className="px-6 py-3 bg-white text-gray-900 text-sm font-medium rounded-full hover:bg-gray-100 transition-all duration-200"
          >
            {primaryCta.text}
          </button>
          <button
            onClick={secondaryCta.onClick}
            className="px-6 py-3 bg-transparent text-white text-sm font-medium rounded-full border border-white/30 hover:bg-white/10 transition-all duration-200"
          >
            {secondaryCta.text}
          </button>
        </motion.div>
      </div>

      {/* Dashboard Preview Cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Card - Transaction Details */}
          <div className="hidden md:block">
            <TransactionCard />
          </div>

          {/* Center Card - Chat Interface */}
          <div className="min-h-[400px]">
            <ChatInterface botName={chatbotName} />
          </div>

          {/* Right Card - Guidance Panel */}
          <div className="hidden md:block">
            <GuidancePanel />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
