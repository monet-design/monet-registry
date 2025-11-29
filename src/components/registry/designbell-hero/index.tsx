"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Bell } from "lucide-react";

interface LogoItem {
  name: string;
  logo: React.ReactNode;
}

interface DesignBellHeroProps {
  brandName?: string;
  launchDate?: string;
  headline?: string;
  subheadline?: string;
  emailPlaceholder?: string;
  buttonText?: string;
  trustedByText?: string;
  logos?: LogoItem[];
  onSubmit?: (email: string) => void;
}

function SendlaneLogo() {
  return (
    <div className="flex items-center gap-1.5 text-white/60">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="opacity-80"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="text-sm font-medium tracking-tight">sendlane</span>
    </div>
  );
}

function NationwideLogo() {
  return (
    <div className="flex items-center gap-1.5 text-white/60">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="opacity-80"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
      <span className="text-sm font-medium tracking-tight">Nationwide</span>
    </div>
  );
}

function NoharaLogo() {
  return (
    <div className="flex items-center gap-1.5 text-white/60">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="opacity-80"
      >
        <rect x="2" y="2" width="8" height="8" rx="1" />
        <rect x="14" y="2" width="8" height="8" rx="1" />
        <rect x="2" y="14" width="8" height="8" rx="1" />
        <rect x="14" y="14" width="8" height="8" rx="1" />
      </svg>
      <span className="text-sm font-semibold tracking-tight">NOHARA</span>
    </div>
  );
}

function GoldprintLogo() {
  return (
    <div className="flex items-center text-white/60">
      <span className="text-sm font-bold italic tracking-tight">GOLDPRINT</span>
    </div>
  );
}

function ListenLogo() {
  return (
    <div className="flex items-center gap-1 text-white/60">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="opacity-80"
      >
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
      <span className="text-sm font-medium tracking-tight">LISTEN</span>
    </div>
  );
}

function HandDrawnArrow({ className, flip }: { className?: string; flip?: boolean }) {
  return (
    <svg
      width="40"
      height="32"
      viewBox="0 0 40 32"
      fill="none"
      className={className}
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
    >
      <path
        d="M4 4C8 6 14 10 18 16C22 22 28 26 34 28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M28 24L34 28L32 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

const defaultLogos: LogoItem[] = [
  { name: "Sendlane", logo: <SendlaneLogo /> },
  { name: "Nationwide", logo: <NationwideLogo /> },
  { name: "Nohara", logo: <NoharaLogo /> },
  { name: "Goldprint", logo: <GoldprintLogo /> },
  { name: "Listen", logo: <ListenLogo /> },
];

export default function DesignBellHero({
  brandName = "DesignBell",
  launchDate = "LAUNCHING SEPTEMBER 25",
  headline = "Unlock Your Brand's\nDesign Potential",
  subheadline = "One subscription. Unlimited designs. Secure your founding-member spot for priority access and exclusive perks. Join the waitlist now.",
  emailPlaceholder = "your.email@domain.com",
  buttonText = "Join Waitlist",
  trustedByText = "Trusted by",
  logos = defaultLogos,
  onSubmit,
}: DesignBellHeroProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
  };

  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-[#020419]">
      {/* Background gradient and wave effect */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020419] via-[#050a28] to-[#030620]" />

        {/* Silk wave texture overlay - more visible, organic flow */}
        <div className="absolute inset-0">
          {/* Main wave flowing from bottom-left to right */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[90%]"
            style={{
              background: `
                radial-gradient(ellipse 150% 70% at 30% 100%, rgba(10, 20, 55, 0.7) 0%, transparent 45%),
                radial-gradient(ellipse 100% 55% at 60% 95%, rgba(15, 30, 70, 0.5) 0%, transparent 40%),
                radial-gradient(ellipse 80% 45% at 10% 80%, rgba(20, 40, 90, 0.55) 0%, transparent 35%),
                radial-gradient(ellipse 60% 35% at 45% 85%, rgba(12, 25, 60, 0.4) 0%, transparent 30%)
              `,
            }}
          />
          {/* Secondary flowing wave layer */}
          <div
            className="absolute bottom-0 left-0 h-[70%] w-[60%]"
            style={{
              background: `
                radial-gradient(ellipse 100% 80% at 0% 100%, rgba(15, 35, 85, 0.45) 0%, transparent 50%),
                radial-gradient(ellipse 70% 50% at 30% 90%, rgba(20, 45, 100, 0.3) 0%, transparent 40%)
              `,
            }}
          />
        </div>

        {/* Subtle blue glow effects */}
        <div className="absolute left-[15%] top-[60%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#0a1550]/25 blur-[150px]" />
        <div className="absolute right-[20%] top-[70%] h-[400px] w-[400px] translate-x-1/2 rounded-full bg-[#060d40]/20 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <span className="text-lg font-semibold tracking-tight text-white">
            {brandName}
          </span>
          <Bell className="h-5 w-5 text-amber-400" fill="currentColor" />
        </motion.div>

        {/* Launch Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-8"
        >
          <span className="inline-flex items-center rounded-full border border-[#3a4080]/50 bg-[#1a2055]/80 px-4 py-1.5 text-[11px] font-medium tracking-[0.15em] text-slate-300">
            {launchDate}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-center text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.5rem]"
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
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-5 max-w-lg text-center text-sm leading-relaxed text-slate-400"
        >
          {subheadline}
        </motion.p>

        {/* Email Input Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="mt-8 w-full max-w-md"
        >
          <div className="relative flex items-center rounded-full bg-white p-1.5 shadow-lg shadow-black/20">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={emailPlaceholder}
              className="flex-1 bg-transparent px-4 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="flex items-center gap-2 rounded-full bg-[#0ea5e9] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#0284c7] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#020419]"
            >
              <ArrowRight className="h-4 w-4" />
              {buttonText}
            </button>
          </div>
        </motion.form>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 w-full"
        >
          {/* Logo Strip with arrows */}
          <div className="relative flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10">
            {/* Left arrow and "Trusted by" label */}
            <div className="absolute -left-4 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-1 md:flex">
              <span className="text-[9px] font-medium uppercase tracking-wider text-white/40">
                {trustedByText}
              </span>
              <HandDrawnArrow className="text-white/40" />
            </div>

            {logos.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                className="transition-opacity hover:opacity-100"
              >
                {item.logo}
              </motion.div>
            ))}

            {/* Right arrow */}
            <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 md:block">
              <HandDrawnArrow className="text-white/40" flip />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
