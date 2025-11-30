"use client";

import { motion } from "motion/react";
import {
  ChevronLeft,
  MoreHorizontal,
  Maximize2,
  Smile,
  ArrowUp,
  Sparkles,
  User,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import "./font.css";

// Types
interface FinAiHeroProps {
  headlinePart1?: string;
  headlinePart2?: string;
  description?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

// FinLogo Component (sparkle icon)
function FinLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Sparkles className="h-4 w-4 text-[#A78BFA]" />
    </div>
  );
}

// Transaction Dispute Card
function TransactionDisputeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="rounded-xl bg-[#1A1D24]/90 p-4 backdrop-blur-sm border border-white/5"
    >
      <div className="flex items-start gap-2 mb-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20">
          <User className="h-3 w-3 text-amber-400" />
        </div>
        <div className="flex-1">
          <div className="text-[10px] font-medium text-amber-400/80 uppercase tracking-wider">
            Transaction Dispute Handling
          </div>
          <div className="text-[9px] text-white/40 mt-0.5">
            Use this task when a customer is dispu...
          </div>
        </div>
      </div>

      <div className="space-y-1.5 text-[9px] text-white/50">
        <div className="flex items-center gap-2">
          <div className="h-1 w-1 rounded-full bg-green-400" />
          <span>Freeze card triggered by FIN</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-1 w-1 rounded-full bg-green-400" />
          <span>Transaction dispute triggered by FIN</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-1 w-1 rounded-full bg-green-400" />
          <span>Credit request triggered by FIN</span>
        </div>
      </div>
    </motion.div>
  );
}

// User Information Card
function UserInfoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="rounded-xl bg-[#1A1D24]/90 p-4 backdrop-blur-sm border border-white/5"
    >
      <div className="flex items-center gap-2 mb-3">
        <User className="h-3 w-3 text-white/40" />
        <span className="text-[10px] font-medium text-white/60 uppercase tracking-wider">
          User Information
        </span>
        <ChevronDown className="h-3 w-3 text-white/30 ml-auto" />
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[9px]">
        <div>
          <div className="text-white/40">Name</div>
          <div className="text-white/70">Paul Jones</div>
        </div>
        <div>
          <div className="text-white/40">Account Type</div>
          <div className="text-white/70">Saver</div>
        </div>
        <div>
          <div className="text-white/40">Location</div>
          <div className="text-white/70">New York, USA</div>
        </div>
        <div>
          <div className="text-white/40">Date of Birth</div>
          <div className="text-white/70">01/02/1990</div>
        </div>
        <div>
          <div className="text-white/40">Card No</div>
          <div className="text-white/70">XXXX-XXXX-XXXX-8108</div>
        </div>
        <div>
          <div className="text-white/40">Language</div>
          <div className="text-white/70">English</div>
        </div>
      </div>
    </motion.div>
  );
}

// Identity Verification Card
function IdentityVerificationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.55 }}
      className="rounded-xl bg-[#1A1D24]/90 p-4 backdrop-blur-sm border border-white/5"
    >
      <div className="flex items-start gap-2 mb-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20">
          <User className="h-3 w-3 text-purple-400" />
        </div>
        <div className="flex-1">
          <div className="text-[10px] font-medium text-purple-400/80 uppercase tracking-wider">
            Identity Verification
          </div>
          <div className="text-[9px] text-white/40 mt-0.5">
            Use this task to perform identity verif...
          </div>
        </div>
      </div>

      <div className="space-y-1.5 text-[9px] text-white/50">
        <div className="flex items-center gap-2">
          <div className="h-1 w-1 rounded-full bg-white/30" />
          <span className="text-white/40">Identity Verification</span>
        </div>
        <div className="flex items-center gap-2 pl-3">
          <div className="h-1 w-1 rounded-full bg-green-400" />
          <span>Get card details triggered by FIN</span>
        </div>
        <div className="flex items-center gap-2 pl-3">
          <div className="h-1 w-1 rounded-full bg-green-400" />
          <span>Get date of birth details triggered by FIN</span>
        </div>
      </div>
    </motion.div>
  );
}

// Transaction Results Mini Card
function TransactionResultsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="rounded-xl bg-[#1A1D24]/90 p-3 backdrop-blur-sm border border-white/5"
    >
      <div className="text-[9px] text-white/50 mb-2">Transaction Results</div>
      <div className="flex gap-1 h-8 items-end">
        {[30, 45, 35, 50, 40].map((height, i) => (
          <div
            key={i}
            className="flex-1 bg-white/10 rounded-sm"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <div className="flex justify-between mt-1 text-[8px] text-white/30">
        <span>Apr 1</span>
        <span>Apr 7</span>
        <span>Apr</span>
      </div>
    </motion.div>
  );
}

// Chat Interface Card
function ChatInterfaceCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="rounded-2xl bg-[#1A1D24]/95 backdrop-blur-sm border border-white/10 overflow-hidden w-[280px]"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <ChevronLeft className="h-4 w-4 text-white/60" />
          <FinLogo />
          <span className="text-sm font-medium text-white">Fin</span>
        </div>
        <div className="flex items-center gap-2">
          <MoreHorizontal className="h-4 w-4 text-white/40" />
          <Maximize2 className="h-4 w-4 text-white/40" />
        </div>
      </div>

      {/* Chat Content */}
      <div className="p-4 space-y-4 min-h-[280px]">
        {/* AI Message */}
        <div className="bg-[#2A2D35] rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="h-3 w-3 text-[#A78BFA]" />
            <span className="text-[10px] text-white/60">Fin - AI Agent</span>
          </div>
          <p className="text-sm text-white/90">Hi Paul, how can I help?</p>
        </div>

        {/* User Message */}
        <div className="flex justify-end">
          <div className="bg-gradient-to-r from-[#E8734A] to-[#F97316] rounded-xl px-4 py-2 max-w-[200px]">
            <p className="text-sm text-white">
              There is a charge on my credit card for $42.50 that I don&apos;t recognize.
            </p>
          </div>
        </div>

        {/* Typing indicator */}
        <div className="flex items-center gap-1 px-2">
          <div className="flex gap-1">
            <div className="h-2 w-2 rounded-full bg-white/30 animate-pulse" />
            <div
              className="h-2 w-2 rounded-full bg-white/30 animate-pulse"
              style={{ animationDelay: "150ms" }}
            />
            <div
              className="h-2 w-2 rounded-full bg-white/30 animate-pulse"
              style={{ animationDelay: "300ms" }}
            />
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 bg-[#2A2D35] rounded-full px-4 py-2">
          <span className="text-sm text-white/40 flex-1">Message...</span>
          <Smile className="h-4 w-4 text-white/40" />
          <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center">
            <ArrowUp className="h-3 w-3 text-white/60" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Transaction Support Card (right side top)
function TransactionSupportCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.45 }}
      className="rounded-xl bg-[#1A1D24]/90 p-4 backdrop-blur-sm border border-white/5"
    >
      <div className="flex items-center gap-2 mb-3">
        <User className="h-3 w-3 text-white/40" />
        <span className="text-[10px] font-medium text-white/60 uppercase tracking-wider">
          Transaction Support
        </span>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[9px] mb-3">
        <div>
          <div className="text-white/40">Amount</div>
          <div className="text-[#F97316]">$42.50</div>
        </div>
        <div>
          <div className="text-white/40">Merchant</div>
          <div className="text-white/70">Metro Left</div>
        </div>
        <div>
          <div className="text-white/40">Date</div>
          <div className="text-white/70">04/02/2025</div>
        </div>
      </div>
    </motion.div>
  );
}

// Guidance Card
function GuidanceCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="rounded-xl bg-[#1A1D24]/90 p-4 backdrop-blur-sm border border-white/5"
    >
      <div className="text-[10px] font-medium text-white/70 mb-3 uppercase tracking-wider">
        Applying Guidance
      </div>

      <div className="space-y-2">
        <div className="text-[9px] text-white/50 font-medium uppercase tracking-wider">
          Basics
        </div>

        <div className="flex items-center justify-between text-[9px]">
          <span className="text-white/50">Tone of Voice</span>
          <div className="flex items-center gap-1">
            <span className="text-white/70">Professional</span>
            <ChevronDown className="h-3 w-3 text-white/40" />
          </div>
        </div>

        <div className="flex items-center justify-between text-[9px]">
          <span className="text-white/50">Answer Length</span>
          <div className="flex items-center gap-1">
            <span className="text-white/70">Standard</span>
            <ChevronDown className="h-3 w-3 text-white/40" />
          </div>
        </div>

        <div className="flex items-center gap-2 text-[9px] text-white/50 mt-2">
          <div className="h-3 w-3 rounded bg-white/10" />
          <span>Context and Clarification</span>
        </div>

        <div className="flex items-center justify-between text-[9px] mt-2 bg-white/5 rounded-lg px-2 py-1.5">
          <span className="text-white/60">Follow ID Verification Protocols</span>
          <ChevronRight className="h-3 w-3 text-white/40" />
        </div>

        <div className="flex items-center justify-between text-[9px] bg-white/5 rounded-lg px-2 py-1.5">
          <span className="text-white/60">Clearly Stat</span>
          <span className="text-white/40 text-[8px]">1 For Each Reque</span>
          <ChevronRight className="h-3 w-3 text-white/40" />
        </div>
      </div>
    </motion.div>
  );
}

// Performance Graph Card
function PerformanceGraphCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.55 }}
      className="rounded-xl bg-[#1A1D24]/90 p-4 backdrop-blur-sm border border-white/5"
    >
      <div className="text-[9px] text-white/50 mb-3 uppercase tracking-wider">
        Fin AI Agent Performance Over Time
      </div>

      <div className="text-[8px] text-white/40 mb-2">65%</div>

      {/* Graph Lines */}
      <div className="relative h-16">
        <svg
          className="w-full h-full"
          viewBox="0 0 200 60"
          preserveAspectRatio="none"
        >
          {/* Grid lines */}
          <line
            x1="0"
            y1="15"
            x2="200"
            y2="15"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="30"
            x2="200"
            y2="30"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="45"
            x2="200"
            y2="45"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.5"
          />

          {/* Main performance line */}
          <path
            d="M0,45 Q30,40 50,35 T100,25 T150,20 T200,15"
            fill="none"
            stroke="#10B981"
            strokeWidth="1.5"
          />
          {/* Secondary line */}
          <path
            d="M0,50 Q30,48 50,45 T100,40 T150,35 T200,30"
            fill="none"
            stroke="#6B7280"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          {/* Third line */}
          <path
            d="M0,55 Q30,52 50,48 T100,42 T150,38 T200,35"
            fill="none"
            stroke="#4B5563"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="flex justify-between mt-2 text-[7px] text-white/30">
        <span>April 1</span>
        <span>April 14</span>
        <span>April 28</span>
        <span>May 12</span>
        <span>May 26</span>
      </div>
    </motion.div>
  );
}

// Background Dashboard Elements
function BackgroundDashboard() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Random dashboard elements */}
      <div className="absolute top-[10%] left-[5%] w-32 h-20 rounded-lg border border-white/10 bg-white/5" />
      <div className="absolute top-[5%] right-[10%] w-40 h-24 rounded-lg border border-white/10 bg-white/5" />
      <div className="absolute bottom-[30%] left-[8%] w-28 h-16 rounded-lg border border-white/10 bg-white/5" />
      <div className="absolute top-[15%] right-[5%] w-24 h-32 rounded-lg border border-white/10 bg-white/5" />

      {/* Bar chart silhouette */}
      <div className="absolute top-[20%] left-[3%] flex items-end gap-1 h-12">
        {[8, 12, 6, 14, 10, 8].map((h, i) => (
          <div
            key={i}
            className="w-2 bg-white/10 rounded-sm"
            style={{ height: `${h * 3}px` }}
          />
        ))}
      </div>

      {/* Line chart silhouette */}
      <div className="absolute top-[8%] right-[15%]">
        <svg width="80" height="40" viewBox="0 0 80 40">
          <path
            d="M0,30 Q20,25 30,20 T50,15 T80,10"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  );
}

// Main Component
export default function FinAiHero({
  headlinePart1 = "The best-performing AI\nAgent for",
  headlinePart2 = "Financial\nServices support",
  description = "Fin is the best-performing AI Agent for financial services\n—resolving complex queries like card issues and\ndisputes with unmatched accuracy. With a complete,\nconfigurable AI Agent System that gives you full control,\nyou can stay compliant and scale your support\nconfidently.",
  primaryCtaText = "Start free trial",
  secondaryCtaText = "View demo",
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: FinAiHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0A0E1A]">
      {/* Background Dashboard */}
      <BackgroundDashboard />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Hero Text Section */}
        <div className="max-w-2xl mb-16">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-instrument-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6"
          >
            <span className="text-white whitespace-pre-line">{headlinePart1}</span>{" "}
            <span
              className="whitespace-pre-line"
              style={{
                background:
                  "linear-gradient(135deg, #E8734A 0%, #F97316 50%, #D97706 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {headlinePart2}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-white/60 leading-relaxed mb-8 whitespace-pre-line max-w-lg"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3"
          >
            <button
              onClick={onPrimaryCtaClick}
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90 hover:shadow-lg hover:shadow-white/10"
            >
              {primaryCtaText}
            </button>
            <button
              onClick={onSecondaryCtaClick}
              className="rounded-full border border-white/30 bg-black px-6 py-3 text-sm font-medium text-white transition-all hover:border-white/50 hover:bg-white/5"
            >
              {secondaryCtaText}
            </button>
          </motion.div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-start">
          {/* Left Column */}
          <div className="space-y-4">
            <TransactionDisputeCard />
            <UserInfoCard />
            <IdentityVerificationCard />
            <TransactionResultsCard />
          </div>

          {/* Center Column - Chat Interface */}
          <div className="flex justify-center">
            <ChatInterfaceCard />
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <TransactionSupportCard />
            <GuidanceCard />
            <PerformanceGraphCard />
          </div>
        </div>
      </div>
    </section>
  );
}
