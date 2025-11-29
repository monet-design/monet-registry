"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Globe,
  TrendingUp,
  Lock,
  FileText,
  Clock,
  Sparkles,
} from "lucide-react";
import "./font.css";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface FeatureItem {
  icon: React.ReactNode;
  label: string;
}

interface MiddayHeroProps {
  logoText?: string;
  headline?: string;
  subheadline?: string;
  inputPlaceholder?: string;
  ctaText?: string;
  signInText?: string;
  navItems?: NavItem[];
  features?: FeatureItem[];
  onSubmit?: (email: string) => void;
}

// Feature Icon Component
function FeatureIcon({
  icon,
  label,
  index,
}: {
  icon: React.ReactNode;
  label: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 + index * 0.08, duration: 0.5 }}
      className="flex flex-col items-center gap-2.5"
    >
      <div className="relative flex h-16 w-14 items-center justify-center overflow-hidden rounded-2xl border border-[#E8E7E3] bg-gradient-to-b from-white to-[#F5F4F0] shadow-sm">
        <span className="text-[#1A1A1A]">{icon}</span>
      </div>
      <span className="text-center text-[11px] text-[#878787] max-w-[70px] leading-tight">
        {label}
      </span>
    </motion.div>
  );
}

// Logo Icon Component (simple sun/star icon)
function LogoIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="3" fill="#38363B" />
      <path
        d="M10 2V5M10 15V18M18 10H15M5 10H2M15.66 4.34L13.54 6.46M6.46 13.54L4.34 15.66M15.66 15.66L13.54 13.54M6.46 6.46L4.34 4.34"
        stroke="#38363B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Default features data
const defaultFeatures: FeatureItem[] = [
  {
    icon: <Globe size={22} strokeWidth={1.5} />,
    label: "Open source",
  },
  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    label: "Live profit/loss",
  },
  {
    icon: <Lock size={22} strokeWidth={1.5} />,
    label: "Vault",
  },
  {
    icon: <FileText size={22} strokeWidth={1.5} />,
    label: "Receipt linking",
  },
  {
    icon: <Clock size={22} strokeWidth={1.5} />,
    label: "Time tracking",
  },
  {
    icon: <Sparkles size={22} strokeWidth={1.5} />,
    label: "AI-enhanced filter & search",
  },
];

// Main Component
export default function MiddayHero({
  logoText = "midday",
  headline = "The financial OS for your business.",
  subheadline = "File management, real-time profit/loss tracking, and seamless preparation for your accountant, powered by AI-enhanced search and filters.",
  inputPlaceholder = "Enter your email",
  ctaText = "Join waitlist",
  signInText = "Sign in",
  features = defaultFeatures,
  onSubmit,
}: MiddayHeroProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
  };

  return (
    <section className="relative min-h-screen w-full bg-[#F7F6F2]">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <LogoIcon />
          <span className="text-sm font-medium text-[#38363B]">{logoText}</span>
        </div>

        {/* Sign In Button */}
        <button className="rounded-full border border-[#38363B] bg-transparent px-4 py-1.5 text-sm font-medium text-[#38363B] transition-colors hover:bg-[#38363B] hover:text-white">
          {signInText}
        </button>
      </motion.nav>

      {/* Main Content */}
      <div className="mx-auto max-w-3xl px-6 pt-16 pb-12 sm:px-8 sm:pt-20 lg:pt-24">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-instrument-serif text-center text-3xl font-normal tracking-tight text-[#1A1A1A] sm:text-4xl md:text-5xl"
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-[#6B6B6B] sm:text-base"
        >
          {subheadline}
        </motion.p>

        {/* Email Input Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-md items-center gap-0 rounded-full border border-[#D5D5D3] bg-white p-1 shadow-sm sm:mt-10"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={inputPlaceholder}
            className="flex-1 bg-transparent px-4 py-2 text-sm text-[#38363B] placeholder:text-[#A0A0A0] focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-[#38363B] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2A282C]"
          >
            {ctaText}
          </button>
        </motion.form>

        {/* Feature Icons */}
        <div className="mt-12 flex flex-wrap items-start justify-center gap-6 sm:mt-16 sm:gap-8">
          {features.map((feature, index) => (
            <FeatureIcon
              key={feature.label}
              icon={feature.icon}
              label={feature.label}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Bottom Dashboard Preview (placeholder) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative mx-auto max-w-5xl px-6 sm:px-8"
      >
        <div className="overflow-hidden rounded-t-xl border border-b-0 border-[#E5E4E0] bg-white shadow-lg">
          {/* Browser Chrome */}
          <div className="flex items-center gap-2 border-b border-[#E5E4E0] bg-[#FAFAF9] px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            </div>
            <div className="ml-4 flex-1">
              <div className="mx-auto max-w-xs rounded-md bg-[#F0F0EE] px-3 py-1 text-center text-xs text-[#888]">
                app.midday.ai
              </div>
            </div>
          </div>

          {/* Dashboard Content Placeholder */}
          <div className="flex h-48 items-start justify-between p-6 sm:h-64">
            {/* Sidebar placeholder */}
            <div className="hidden w-48 space-y-3 sm:block">
              <div className="h-3 w-24 rounded bg-[#E5E4E0]" />
              <div className="h-3 w-32 rounded bg-[#F0F0EE]" />
              <div className="h-3 w-28 rounded bg-[#F0F0EE]" />
              <div className="h-3 w-20 rounded bg-[#F0F0EE]" />
            </div>

            {/* Main content placeholder */}
            <div className="flex-1 space-y-4 sm:pl-8">
              <div className="flex items-center justify-between">
                <div className="h-4 w-32 rounded bg-[#E5E4E0]" />
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#888]">This week</span>
                  <div className="rounded bg-[#F0F0EE] px-2 py-1 text-xs text-[#666]">
                    48,72h
                  </div>
                </div>
              </div>

              {/* Chart placeholder */}
              <div className="h-24 w-full rounded-lg bg-gradient-to-r from-[#F8F8F6] to-[#F0F0EE]" />

              {/* Stats row */}
              <div className="flex gap-4">
                <div className="h-8 w-20 rounded bg-[#F0F0EE]" />
                <div className="h-8 w-24 rounded bg-[#F0F0EE]" />
                <div className="h-8 w-16 rounded bg-[#F0F0EE]" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Fade out gradient at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F7F6F2] to-transparent" />
    </section>
  );
}
