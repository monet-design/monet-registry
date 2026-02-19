"use client";

import { motion } from "motion/react";

// ============================================================================
// CUSTOMIZATION - Modify these values to adapt the component to your project
// ============================================================================

const COLORS = {
  light: {
    background:
      "linear-gradient(150deg, #f2e2da 0%, #ede0e4 20%, #e4dde8 40%, #dde3ee 60%, #ede0e4 80%, #f2e2da 100%)",
    cardBg: "rgba(255, 255, 255, 0.65)",
    cardBorder: "rgba(255, 255, 255, 0.8)",
    heading: "#0a0a0a",
    subtitle: "#4a4a4a",
    navText: "#1a1a1a",
    navBorder: "#d4d4d4",
    navHoverBg: "rgba(0, 0, 0, 0.04)",
    signInBg: "#ffffff",
    signInBorder: "#d4d4d4",
    signInText: "#1a1a1a",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Types
interface ImprintHeroProps {
  logoText?: string;
  navItems?: { label: string; href: string }[];
  signInText?: string;
  headline?: string;
  subtitle?: string;
  onSignInClick?: () => void;
  onNavClick?: (href: string) => void;
}

// Imprint Logo Icon
function ImprintLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="26"
        height="26"
        rx="6"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="14" cy="10" r="3" fill="currentColor" />
      <circle cx="14" cy="20" r="3" fill="currentColor" />
      <line
        x1="14"
        y1="13"
        x2="14"
        y2="17"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

// Decorative Credit Card SVG
function DecoCards() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {/* White/light card - back left */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="absolute rounded-2xl shadow-xl"
        style={{
          width: 360,
          height: 228,
          left: "calc(50% - 300px)",
          top: "calc(50% - 30px)",
          rotate: "-12deg",
          background:
            "linear-gradient(145deg, #f8f8f8 0%, #e8e8e8 50%, #f0f0f0 100%)",
          zIndex: 0,
        }}
      />

      {/* Brushed silver card - mid left */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="absolute overflow-hidden rounded-2xl shadow-2xl"
        style={{
          width: 360,
          height: 228,
          left: "calc(50% - 240px)",
          top: "calc(50% - 80px)",
          rotate: "-6deg",
          background:
            "linear-gradient(160deg, #d8d8d8 0%, #b0b0b0 25%, #c8c8c8 50%, #a0a0a0 75%, #bbb 100%)",
          zIndex: 1,
        }}
      >
        {/* EMV chip */}
        <div
          className="absolute left-7 top-7 rounded-md"
          style={{
            width: 38,
            height: 28,
            background:
              "linear-gradient(135deg, #dab06a 0%, #f0d080 40%, #c49840 100%)",
          }}
        >
          <div className="flex h-full flex-col justify-center gap-[3px] px-2">
            <div className="h-px bg-amber-800/20" />
            <div className="h-px bg-amber-800/20" />
            <div className="h-px bg-amber-800/20" />
          </div>
        </div>
        {/* Contactless icon */}
        <svg
          className="absolute left-12 top-10 opacity-30"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M8 18a8 8 0 0 0 0-12M12 18a12 12 0 0 0 0-12"
            stroke="#666"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        {/* Card accent stripe */}
        <div
          className="absolute bottom-12 left-0 right-0 h-[2px]"
          style={{ background: "rgba(232, 93, 58, 0.5)" }}
        />
        <div
          className="absolute bottom-10 left-0 right-0 h-[1px]"
          style={{ background: "rgba(232, 93, 58, 0.3)" }}
        />
      </motion.div>

      {/* Dark black card - right */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="absolute overflow-hidden rounded-2xl shadow-2xl"
        style={{
          width: 360,
          height: 228,
          left: "calc(50% - 20px)",
          top: "calc(50% - 100px)",
          rotate: "4deg",
          background:
            "linear-gradient(160deg, #2a2a2a 0%, #1a1a1a 40%, #222 60%, #111 100%)",
          zIndex: 2,
        }}
      >
        {/* Subtle card logo area */}
        <div className="absolute bottom-6 right-7 text-xs font-bold tracking-widest text-white/10">
          VISA
        </div>
        {/* Card number dots */}
        <div className="absolute bottom-16 left-7 flex gap-3">
          {[0, 1, 2, 3].map((g) => (
            <div key={g} className="flex gap-1">
              {[0, 1, 2, 3].map((d) => (
                <div
                  key={d}
                  className="h-1 w-1 rounded-full bg-white/15"
                />
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// Nav Pill Button
function NavPill({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick?: (href: string) => void;
}) {
  return (
    <button
      onClick={() => onClick?.(href)}
      className="rounded-full border px-5 py-2 text-sm font-medium transition-colors"
      style={{
        borderColor: COLORS.light.navBorder,
        color: COLORS.light.navText,
        backgroundColor: "transparent",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = COLORS.light.navHoverBg;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      {label}
    </button>
  );
}

// Main Component
export default function ImprintHero({
  logoText = "IMPRINT",
  navItems = [
    { label: "Products", href: "#products" },
    { label: "Technology", href: "#technology" },
    { label: "Partners", href: "#partners" },
    { label: "About", href: "#about" },
  ],
  signInText = "Cardholder sign in",
  headline = "Perfectly configured co-branded financial products.",
  subtitle = "Meet the powerful, purpose-built co-branded products that seamlessly adapt to your brand.",
  onSignInClick,
  onNavClick,
}: ImprintHeroProps) {
  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
      style={{ background: COLORS.light.background }}
    >
      {/* Decorative credit cards */}
      <DecoCards />

      {/* Frosted glass card overlay */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        className="relative z-10 mx-4 w-full max-w-lg rounded-3xl border p-10 shadow-lg"
        style={{
          backgroundColor: COLORS.light.cardBg,
          borderColor: COLORS.light.cardBorder,
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-6 flex items-center gap-2"
        >
          <ImprintLogo className="h-6 w-6 text-black" />
          <span
            className="text-lg font-bold tracking-wider"
            style={{ color: COLORS.light.heading, letterSpacing: "0.08em" }}
          >
            {logoText}
          </span>
        </motion.div>

        {/* Nav pills */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-10 flex flex-wrap gap-2"
        >
          {navItems.map((item) => (
            <NavPill
              key={item.label}
              label={item.label}
              href={item.href}
              onClick={onNavClick}
            />
          ))}
        </motion.nav>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-5 text-3xl font-medium leading-tight tracking-tight"
          style={{
            color: COLORS.light.heading,
            letterSpacing: "-0.03em",
          }}
        >
          {headline}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-base leading-relaxed"
          style={{ color: COLORS.light.subtitle }}
        >
          {subtitle}
        </motion.p>
      </motion.div>

      {/* Sign in button - top right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="absolute right-6 top-6 z-20"
      >
        <button
          onClick={onSignInClick}
          className="rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50"
          style={{
            backgroundColor: COLORS.light.signInBg,
            borderColor: COLORS.light.signInBorder,
            color: COLORS.light.signInText,
          }}
        >
          {signInText}
        </button>
      </motion.div>
    </section>
  );
}
