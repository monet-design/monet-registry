"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    accent: "#14B8A6", // Teal CTA 버튼
    accentHover: "#0D9488",
    cardBg: "#1a1d21", // 다크 카드 배경
    cardBorder: "#2a2d32",
  },
  dark: {
    accent: "#14B8A6",
    accentHover: "#0D9488",
    cardBg: "#0d0f11",
    cardBorder: "#1a1d21",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import { Briefcase, PiggyBank, DollarSign, Users } from "lucide-react";
import "./font.css";

// Types
interface LanceHeroProps {
  mode?: "light" | "dark";
  logo?: {
    icon?: React.ReactNode;
    text?: string;
  };
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  contactText?: string;
  emailPlaceholder?: string;
  onSubmit?: (email: string) => void;
  onContactClick?: () => void;
}

// Flow Card Component
function FlowCard({
  label,
  icon,
  variant = "default",
  amount,
  delay = 0,
  hasRing = false,
}: {
  label: string;
  icon: React.ReactNode;
  variant?: "default" | "orange" | "purple" | "blue";
  amount?: string;
  delay?: number;
  hasRing?: boolean;
}) {
  const variantStyles = {
    default: "bg-[#1a1d21] border-[#2a2d32]",
    orange: "bg-gradient-to-br from-orange-500 to-orange-600 border-transparent",
    purple: "bg-gradient-to-br from-purple-600 to-purple-700 border-transparent",
    blue: "bg-gradient-to-br from-blue-500 to-blue-600 border-transparent",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-start gap-2"
    >
      <span className="text-[10px] text-slate-400 uppercase tracking-wider">
        {label}
      </span>
      <div className={`relative ${hasRing ? "p-1" : ""}`}>
        {hasRing && (
          <div className="absolute inset-0 rounded-2xl border-2 border-blue-500" />
        )}
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center border ${variantStyles[variant]}`}
        >
          {icon}
        </div>
      </div>
      {amount && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.2, duration: 0.3 }}
          className="mt-1 bg-[#1a1d21] border border-[#2a2d32] rounded-lg px-3 py-1.5"
        >
          <span className="text-white text-sm font-medium">{amount}</span>
        </motion.div>
      )}
    </motion.div>
  );
}

// Central Dashboard Card
function DashboardCard({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6 }}
      className="relative"
    >
      {/* Floating $1,800 badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 0.3, duration: 0.4 }}
        className="absolute -top-4 right-2 bg-[#0d0f11] border border-[#2a2d32] rounded-lg px-3 py-2 z-10"
      >
        <span className="text-white text-sm font-semibold">$1,800</span>
      </motion.div>

      {/* Main dashboard container */}
      <div className="bg-[#0d0f11] border border-[#1a1d21] rounded-2xl p-4 w-[280px]">
        {/* Dashboard header dots */}
        <div className="flex gap-1.5 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-[#2a2d32]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#2a2d32]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#2a2d32]" />
        </div>

        {/* Balance card */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-4 mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-blue-200 text-xs">Current Balance</span>
            <div className="w-6 h-4 bg-yellow-400 rounded-sm" />
          </div>
          <div className="text-white text-xl font-semibold">$1,800</div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          {["Send", "Request", "More"].map((action) => (
            <div
              key={action}
              className="flex-1 bg-[#1a1d21] rounded-lg py-2 px-3 text-center"
            >
              <span className="text-slate-400 text-[10px]">{action}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Flow Lines SVG
function FlowLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 800 300"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Left side curves */}
      <motion.path
        d="M 80 80 Q 200 80 280 150"
        stroke="url(#gradient1)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      />
      <motion.path
        d="M 80 220 Q 200 220 280 150"
        stroke="url(#gradient1)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />

      {/* Right side curves */}
      <motion.path
        d="M 520 150 Q 600 80 720 80"
        stroke="url(#gradient2)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      />
      <motion.path
        d="M 520 150 Q 600 220 720 220"
        stroke="url(#gradient2)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      />

      {/* Gradients */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Mountain Logo Icon
function MountainIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L2 22h20L12 2zm0 4l7 14H5l7-14z" />
    </svg>
  );
}

// Main Component
export default function LanceHero({
  mode = "light",
  logo = {
    icon: <MountainIcon className="w-5 h-5 text-white" />,
    text: "lance",
  },
  headline = "Revolutionizing\nFreelance Banking",
  subheadline = "Freelancers! Get a bank account that pays your taxes,\nautomates your savings, and sends you a paycheck.",
  ctaText = "Open Free Account",
  contactText = "CONTACT US",
  emailPlaceholder = "Email",
  onSubmit,
  onContactClick,
}: LanceHeroProps) {
  const colors = COLORS[mode];
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
  };

  return (
    <section className="w-full bg-black dark:bg-gray-950 text-white overflow-hidden">
      {/* Header */}
      <nav className="w-full px-6 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            {logo.icon}
            <span className="text-white font-medium text-lg">{logo.text}</span>
          </motion.div>

          {/* Contact */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onContactClick}
            className="text-slate-500 text-[11px] tracking-[0.2em] hover:text-white transition-colors"
          >
            {contactText}
          </motion.button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        {/* Hero Text */}
        <div className="text-center mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl font-medium italic text-white mb-6 whitespace-pre-line leading-tight"
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-400 text-sm sm:text-base whitespace-pre-line leading-relaxed"
          >
            {subheadline}
          </motion.p>
        </div>

        {/* Email Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={emailPlaceholder}
            className="w-full sm:w-64 px-4 py-3 bg-transparent border border-white/30 rounded-md text-white placeholder-slate-400 text-sm focus:outline-none focus:border-white/50 transition-colors"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 text-white text-sm font-medium rounded-lg transition-colors"
            style={{ backgroundColor: colors.accent }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.accentHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.accent)}
          >
            {ctaText}
          </button>
        </motion.form>

        {/* Dashboard Preview Section */}
        <div className="relative h-[300px] sm:h-[350px]">
          {/* Flow lines background */}
          <FlowLines />

          {/* Cards Grid */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="flex items-center gap-8 sm:gap-16">
              {/* Left Cards */}
              <div className="flex flex-col gap-8">
                <FlowCard
                  label="Main job"
                  icon={<Briefcase className="w-6 h-6 text-white" />}
                  delay={0.6}
                />
                <FlowCard
                  label="Freelance client"
                  icon={<Users className="w-6 h-6 text-white" />}
                  variant="blue"
                  delay={0.7}
                  hasRing
                />
              </div>

              {/* Center Dashboard */}
              <DashboardCard delay={0.5} />

              {/* Right Cards */}
              <div className="flex flex-col gap-8">
                <FlowCard
                  label="Main account"
                  icon={<DollarSign className="w-5 h-5 text-white" />}
                  variant="orange"
                  delay={0.8}
                />
                <FlowCard
                  label="Savings"
                  icon={<PiggyBank className="w-6 h-6 text-white" />}
                  variant="purple"
                  delay={0.9}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
