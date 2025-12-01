"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  dark: {
    background: "#111111",
    accent: "#3FC887",
    accentHover: "#35b577",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import "./font.css";

// Types
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface LogoItem {
  name: string;
  icon?: React.ReactNode;
}

interface PlainProductPageSectionHeroProps {
  mode?: "dark";
  logoText?: string;
  headline?: string;
  subheadline?: string;
  inputPlaceholder?: string;
  ctaText?: string;
  trialText?: string;
  trustedByText?: string;
  navItems?: NavItem[];
  logos?: LogoItem[];
  onSubmit?: (email: string) => void;
  onBookDemo?: () => void;
}

// Plain Logo Icon
function PlainLogoIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12L12 4L20 12L12 20L4 12Z"
        fill="#3FC887"
        stroke="#3FC887"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Raycast Icon
function RaycastIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M5 15L15 5M5 10L10 15M10 5L15 10"
        stroke="#FF6363"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Laravel Icon
function LaravelIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M3 6L10 2L17 6V14L10 18L3 14V6Z"
        stroke="#FF2D20"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M10 2V18" stroke="#FF2D20" strokeWidth="1.5" />
      <path d="M3 6L17 14" stroke="#FF2D20" strokeWidth="1.5" />
      <path d="M17 6L3 14" stroke="#FF2D20" strokeWidth="1.5" />
    </svg>
  );
}

// Galileo Icon
function GalileoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7" stroke="#7C3AED" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="3" fill="#7C3AED" />
    </svg>
  );
}

// Default logos data
const defaultLogos: LogoItem[] = [
  { name: "SANITY" },
  { name: "Raycast", icon: <RaycastIcon /> },
  { name: "Stytch" },
  { name: "granola|" },
  { name: "Laravel", icon: <LaravelIcon /> },
  { name: "Galileo", icon: <GalileoIcon /> },
];

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Product", href: "#" },
  { label: "Customers", href: "#" },
  { label: "Channels", href: "#", hasDropdown: true },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Docs", href: "#" },
  { label: "Pricing", href: "#" },
];

// Logo Cloud Item Component
function LogoCloudItem({ logo, index }: { logo: LogoItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 + index * 0.05, duration: 0.4 }}
      className="flex items-center gap-1.5"
    >
      {logo.icon && <span>{logo.icon}</span>}
      <span
        className={`text-sm font-medium tracking-wide ${
          logo.name === "SANITY" ? "font-bold tracking-widest" : ""
        } ${logo.name === "Stytch" ? "font-serif italic text-base" : ""} ${
          logo.name === "granola|" ? "font-mono" : ""
        } text-white`}
      >
        {logo.name}
      </span>
    </motion.div>
  );
}

// Main Component
export default function PlainProductPageSectionHero({
  mode = "dark",
  logoText = "Plain",
  headline = "Meet the fastest, most powerful B2B\nsupport platform ever built",
  subheadline = "Plain enables you to deliver better, more collaborative support, faster.",
  inputPlaceholder = "Your work email",
  ctaText = "See Plain in action",
  trialText = "FREE 14 DAY TRIAL",
  trustedByText = "TRUSTED BY THE BEST SUPPORT TEAMS",
  navItems = defaultNavItems,
  logos = defaultLogos,
  onSubmit,
  onBookDemo,
}: PlainProductPageSectionHeroProps) {
  const colors = COLORS[mode];
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
  };

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.15]">
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
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <PlainLogoIcon />
          <span className="text-base font-medium text-white">{logoText}</span>
        </div>

        {/* Nav Items - Hidden on mobile */}
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-sm text-gray-300 transition-colors hover:text-white"
            >
              {item.label}
              {item.hasDropdown && (
                <ChevronDown size={14} className="opacity-60" />
              )}
            </a>
          ))}
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden text-sm text-gray-300 transition-colors hover:text-white sm:block"
          >
            Sign in
          </a>
          <button
            onClick={onBookDemo}
            className="rounded-md px-4 py-2 text-sm font-medium transition-colors"
            style={{
              backgroundColor: colors.accent,
              color: colors.background,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.accentHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.accent;
            }}
          >
            Book a demo
          </button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-16 pb-12 sm:px-8 sm:pt-24 lg:pt-28">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-instrument-serif text-center text-3xl font-normal italic tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.15]"
        >
          {headline.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < headline.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-gray-400 sm:text-lg"
        >
          {subheadline}
        </motion.p>

        {/* Email Input Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:gap-2"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={inputPlaceholder}
            className="w-full rounded-md border border-[#333333] bg-[#1A1A1A] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 sm:flex-1"
            onFocus={(e) => {
              e.currentTarget.style.borderColor = colors.accent;
              e.currentTarget.style.boxShadow = `0 0 0 1px ${colors.accent}`;
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#333333";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
          <button
            type="submit"
            className="w-full rounded-md px-6 py-3 text-sm font-medium transition-colors sm:w-auto"
            style={{
              backgroundColor: colors.accent,
              color: colors.background,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.accentHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.accent;
            }}
          >
            {ctaText}
          </button>
        </motion.form>

        {/* Trial Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 text-center text-xs tracking-[0.2em] text-gray-500"
        >
          {trialText}
        </motion.p>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 sm:mt-20"
        >
          <p className="text-center text-xs tracking-[0.2em] text-gray-500">
            {trustedByText}
          </p>

          {/* Logo Grid */}
          <div className="mt-6 grid grid-cols-3 gap-x-10 gap-y-5 justify-items-center sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-12 sm:gap-y-4">
            {logos.map((logo, index) => (
              <LogoCloudItem key={logo.name} logo={logo} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
