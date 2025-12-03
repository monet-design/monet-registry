"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#0D0D0D",     // 다크 배경
    accent: "#B0C81C",         // 라임 그린
    accentHover: "#c4dc20",
  },
  dark: {
    background: "#000000",
    accent: "#d4ff33",
    accentHover: "#e0ff5c",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";

interface NavItem {
  label: string;
  href: string;
}

interface CursorUser {
  name: string;
  color: string;
  position: { x: number; y: number };
}

interface AtomicDesignHeroProps {
  mode?: "light" | "dark";
  logoIcon?: React.ReactNode;
  navItems?: NavItem[];
  notifyButtonText?: string;
  headline?: string;
  subheadline?: string;
  emailPlaceholder?: string;
  ctaButtonText?: string;
  cursorUsers?: CursorUser[];
  onNotifyClick?: () => void;
  onCtaSubmit?: (email: string) => void;
}

function AtomicLogo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 8L12 12V20L20 24L28 20V12L20 8Z"
        fill="white"
      />
      <path
        d="M12 20V28L20 32L28 28V20L20 24L12 20Z"
        fill="white"
        fillOpacity="0.6"
      />
    </svg>
  );
}

function CursorIcon({ color }: { color: string }) {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L6.5 18L8.5 11L15 9L1 1Z"
        fill={color}
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneMockup({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="w-[180px] rounded-[24px] bg-[#1a1a1a] p-2 shadow-2xl">
        <div className="rounded-[18px] bg-[#0f0f0f] p-4">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500" />
            <div>
              <p className="text-[10px] text-white/60">Good evening,</p>
              <p className="text-xs font-medium text-white">Henry</p>
            </div>
          </div>
          <div className="mb-3 rounded-lg bg-gradient-to-br from-cyan-400/40 to-purple-500/40 p-3">
            <p className="text-[9px] text-white/70">Your schedule shown</p>
            <p className="text-[8px] text-white/50">Today 10am - 5pm</p>
          </div>
          <div className="rounded-lg bg-gradient-to-r from-cyan-400 to-purple-400 px-3 py-2 text-center text-[10px] font-medium text-white">
            Send money
          </div>
        </div>
      </div>
      <p className="mt-2 text-[10px] text-white/50">Vlad Muslakov</p>
    </div>
  );
}

function WatchMockup({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="w-[140px] rounded-[20px] bg-[#1a1a1a] p-2 shadow-2xl">
        <div className="rounded-[14px] bg-[#0a0a0a] p-3">
          <div className="mb-2 flex items-center justify-between text-[8px] text-white/50">
            <span>&lt;</span>
            <span>10:09</span>
            <span className="flex gap-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
            </span>
          </div>
          <p className="mb-2 text-[10px] font-medium text-white">Today</p>
          <div className="mb-2 rounded bg-[#1a1a1a] px-2 py-1 text-[8px] text-white/70">
            + Add task
          </div>
          <div className="flex items-center gap-1 rounded bg-[#1a1a1a] px-2 py-1">
            <div className="h-2 w-2 rounded-sm border border-white/40" />
            <span className="text-[8px] text-white/70">Payment UI</span>
          </div>
        </div>
      </div>
      <p className="mt-2 text-right text-[10px] text-white/50">Aryan Shah</p>
    </div>
  );
}

function DashboardMockup({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="w-[220px] rounded-lg bg-[#0f0f0f] p-3 shadow-2xl">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-red-500/60" />
            <div className="h-1.5 w-1.5 rounded-full bg-yellow-500/60" />
            <div className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
          </div>
          <div className="text-[8px] text-white/40">OLAMA</div>
        </div>
        <div className="mb-3 flex items-baseline gap-4">
          <div>
            <p className="text-lg font-semibold text-white">$59,410</p>
          </div>
          <div>
            <p className="text-sm font-medium text-white">5,9k</p>
          </div>
        </div>
        <div className="mb-2 h-16 w-full rounded bg-gradient-to-r from-[#1a3a20] via-[#1a3a20] to-[#1a3a20]">
          <svg className="h-full w-full" viewBox="0 0 200 60" preserveAspectRatio="none">
            <path
              d="M0 50 Q30 45 50 30 T100 25 T150 35 T200 20"
              stroke="#4ade80"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0 50 Q30 45 50 30 T100 25 T150 35 T200 20 V60 H0 Z"
              fill="url(#greenGradient)"
              opacity="0.3"
            />
            <defs>
              <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex items-center justify-between text-[9px] text-white/50">
          <span>89,580</span>
          <span>$2,950</span>
        </div>
      </div>
      <p className="mt-2 text-center text-[10px] text-white/50">Nur Praditya</p>
    </div>
  );
}

function HealthMockup({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="w-[200px] overflow-hidden rounded-[24px] bg-[#0a0a0a] shadow-2xl">
        <div className="relative h-[120px] w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]" />
          <div className="absolute bottom-0 left-0 right-0 h-20 rounded-t-3xl bg-[#111] p-4">
            <p className="text-xs text-white">Your sugar intake is</p>
            <p className="text-sm font-medium text-white">looking great</p>
            <div className="mt-2 flex gap-1">
              <div className="h-1 flex-1 rounded-full bg-green-400" />
              <div className="h-1 flex-1 rounded-full bg-green-500" />
              <div className="h-1 flex-1 rounded-full bg-green-600" />
              <div className="h-1 flex-1 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CredentialsMockup({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="w-[200px] rounded-lg bg-[#0f0f0f] p-4 shadow-2xl">
        <div className="mb-2 flex gap-2 text-[7px] text-white/40">
          <span>Home</span>
          <span>Use Cases</span>
          <span>Customers</span>
          <span>Pricing</span>
          <span>Resources</span>
        </div>
        <div className="relative mb-3 flex items-center justify-center">
          <div className="h-20 w-20 rounded-full border-2 border-purple-500/50">
            <div className="flex h-full w-full items-center justify-center">
              <svg viewBox="0 0 80 80" className="h-full w-full">
                <circle
                  cx="40"
                  cy="40"
                  r="35"
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  opacity="0.5"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="28"
                  fill="none"
                  stroke="#818cf8"
                  strokeWidth="1.5"
                  strokeDasharray="8 4"
                  opacity="0.7"
                />
              </svg>
            </div>
          </div>
        </div>
        <p className="text-center text-sm font-medium text-white">Credentials</p>
        <p className="mt-1 text-center text-[8px] text-white/50">
          Securely encrypt and use third-party
          <br />
          API secrets & credentials.
        </p>
        <div className="mt-3 flex justify-center">
          <div className="rounded bg-cyan-500/80 px-3 py-1 text-[8px] font-medium text-white">
            Get Started
          </div>
        </div>
      </div>
      <p className="mt-2 text-right text-[10px] text-white/50">Thomas Cullen</p>
    </div>
  );
}

const defaultNavItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
];

const defaultCursorUsers: CursorUser[] = [
  { name: "Sarah", color: "#22c55e", position: { x: 25, y: 42 } },
  { name: "Eliah", color: "#a3e635", position: { x: 72, y: 32 } },
];

export default function AtomicDesignHero({
  mode = "light",
  logoIcon,
  navItems = defaultNavItems,
  notifyButtonText = "Notify me",
  headline = "Design work,\nthe efficient way",
  subheadline = "Innovative design solutions for technology firms and emerging businesses weary of the typical aesthetic methodology. Arriving shortly.",
  emailPlaceholder = "name@email.com",
  ctaButtonText = "Get notified",
  cursorUsers = defaultCursorUsers,
  onNotifyClick,
  onCtaSubmit,
}: AtomicDesignHeroProps) {
  const colors = COLORS[mode];
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCtaSubmit?.(email);
  };

  return (
    <section className="relative min-h-[800px] w-full overflow-hidden" style={{ backgroundColor: colors.background }}>
      {/* Gradient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-[20%] left-[10%] h-[400px] w-[400px] rounded-full bg-[#1a3a20]/30 blur-[120px]" />
        <div className="absolute right-[15%] top-[50%] h-[300px] w-[300px] rounded-full bg-[#1a2a4a]/20 blur-[100px]" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 flex items-center justify-between px-8 py-6"
      >
        {/* Logo */}
        <div className="flex items-center">
          {logoIcon || <AtomicLogo />}
        </div>

        {/* Center Nav */}
        <div className="hidden rounded-full bg-[#1a1a1a]/80 px-6 py-2.5 backdrop-blur-sm md:flex">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Notify Button */}
        <button
          onClick={onNotifyClick}
          className="rounded-full bg-[#2a2a2a] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#3a3a3a]"
        >
          {notifyButtonText}
        </button>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-12">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="font-instrument-serif text-5xl leading-[1.15] tracking-tight text-white md:text-6xl lg:text-7xl">
            {headline.split("\n").map((line, index) => (
              <span key={index} className="block italic">
                {line}
              </span>
            ))}
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-6 max-w-md text-center text-sm leading-relaxed text-white/50"
        >
          {subheadline}
        </motion.p>

        {/* Email Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-md items-center gap-2"
        >
          <div className="relative flex flex-1 items-center rounded-full border border-white/10 bg-[#1a1a1a]/60 px-4 py-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={emailPlaceholder}
              className="w-full bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="rounded-full px-6 py-2.5 text-sm font-medium text-black transition-all hover:shadow-lg"
            style={{ backgroundColor: colors.accent, boxShadow: `0 0 20px ${colors.accent}20` }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = colors.accentHover;
              e.currentTarget.style.boxShadow = `0 0 20px ${colors.accentHover}40`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = colors.accent;
              e.currentTarget.style.boxShadow = `0 0 20px ${colors.accent}20`;
            }}
          >
            {ctaButtonText}
          </button>
        </motion.form>

        {/* Cursor Users and Device Mockups Container */}
        <div className="relative mt-8 h-[350px]">
          {/* Cursor Users */}
          {cursorUsers.map((user, index) => (
            <motion.div
              key={user.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="absolute z-30"
              style={{
                left: `${user.position.x}%`,
                top: `${user.position.y}%`,
              }}
            >
              <CursorIcon color={user.color} />
              <span
                className="ml-2 inline-block rounded-full px-3 py-1 text-xs font-medium"
                style={{ backgroundColor: user.color, color: '#000' }}
              >
                {user.name}
              </span>
            </motion.div>
          ))}

          {/* Device Mockups */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute -left-4 top-0"
          >
            <PhoneMockup />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute -right-4 top-0"
          >
            <WatchMockup />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-0 left-[10%]"
          >
            <HealthMockup />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
          >
            <DashboardMockup />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="absolute bottom-0 right-[5%]"
          >
            <CredentialsMockup />
          </motion.div>
        </div>
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');

        .font-instrument-serif {
          font-family: 'Instrument Serif', serif;
        }
      `}</style>
    </section>
  );
}
