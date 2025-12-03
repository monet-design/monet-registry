"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface AuthkitHeroProps {
  mode?: "light" | "dark";
  badge?: string;
  title?: string;
  subtitle?: string;
  poweredBy?: string;
  themeSupportText?: string;
  headerLeftText?: string;
  headerRightText?: string;
  onHeaderLeftClick?: () => void;
  onHeaderRightClick?: () => void;
}

// Login Card Component
function LoginCard({
  variant,
  className,
  style,
}: {
  variant: "front" | "left" | "right";
  className?: string;
  style?: React.CSSProperties;
}) {
  if (variant === "front") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`relative z-30 w-[280px] rounded-xl bg-white p-6 shadow-2xl ${className}`}
        style={style}
      >
        {/* Corner dots */}
        <div className="absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-gray-300" />
        <div className="absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-gray-300" />
        <div className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-gray-300" />
        <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-gray-300" />

        {/* Logo */}
        <div className="mb-4 flex justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
        </div>

        <h3 className="mb-5 text-center text-base font-semibold text-gray-900">
          Sign in to SuperApp
        </h3>

        <div className="space-y-3">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-700">
              Email
            </label>
            <Input
              type="email"
              placeholder="Your email address"
              className="h-9 border-gray-200 bg-gray-50 text-sm placeholder:text-gray-400"
            />
          </div>

          <Button className="h-9 w-full rounded-md bg-gray-900 text-sm font-medium text-white hover:bg-gray-800">
            Continue
          </Button>

          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs text-gray-400">OR</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <button className="flex h-9 w-full items-center justify-center gap-2 rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>

          <button className="flex h-9 w-full items-center justify-center gap-2 rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
            <svg width="16" height="16" viewBox="0 0 23 23" fill="none">
              <path fill="#f35325" d="M1 1h10v10H1z" />
              <path fill="#81bc06" d="M12 1h10v10H12z" />
              <path fill="#05a6f0" d="M1 12h10v10H1z" />
              <path fill="#ffba08" d="M12 12h10v10H12z" />
            </svg>
            Continue with Microsoft
          </button>
        </div>

        <p className="mt-4 text-center text-xs text-gray-500">
          Don&apos;t have an account?{" "}
          <button className="font-semibold text-gray-900 hover:underline">
            Sign up
          </button>
        </p>
      </motion.div>
    );
  }

  if (variant === "left") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`absolute z-10 w-[260px] rounded-xl border border-gray-700/50 bg-[#1a1f2e] p-5 shadow-xl ${className}`}
        style={style}
      >
        {/* Logo */}
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-700">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-300"
            >
              <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
            </svg>
          </div>
        </div>

        <h3 className="mb-1 text-sm font-semibold text-white">
          Welcome to the...
        </h3>
        <p className="mb-4 text-xs text-gray-400">Log in to continue...</p>

        <div className="space-y-3">
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-300">
              Email
            </label>
            <div className="h-8 rounded-md border border-gray-600 bg-gray-800/50" />
          </div>

          <div className="h-8 rounded-md bg-gray-600" />
        </div>

        <p className="mt-3 text-xs text-gray-500">Don&apos;t have an acco...</p>
      </motion.div>
    );
  }

  // right variant
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`absolute z-20 w-[260px] rounded-xl border border-gray-700/50 bg-[#232838] p-5 shadow-xl ${className}`}
      style={style}
    >
      {/* Logo */}
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-purple-500 to-pink-500 text-xs font-bold text-white">
          C
        </div>
      </div>

      <h3 className="mb-1 text-sm font-semibold text-white">...to Clamer</h3>
      <p className="mb-4 text-xs text-gray-400">
        ...ry passcode from your
        <br />
        ...icator app.
      </p>

      <div className="mb-4 flex gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-10 w-10 rounded-md border border-gray-600 bg-gray-700/50"
          />
        ))}
      </div>

      <div className="h-8 rounded-md bg-gray-600" />

      <p className="mt-3 text-xs text-gray-500">...to sign in</p>
    </motion.div>
  );
}

// Theme Toggle Component
function ThemeToggle({
  isDark,
  onToggle,
}: {
  isDark: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="flex h-10 items-center rounded-full border border-gray-700 bg-[#1a1f2e] p-1"
    >
      <button
        onClick={() => isDark && onToggle()}
        className={`flex h-8 w-16 items-center justify-center rounded-full transition-colors ${
          isDark ? "bg-gray-700 text-white" : "text-gray-500"
        }`}
      >
        <Moon size={16} />
      </button>
      <button
        onClick={() => !isDark && onToggle()}
        className={`flex h-8 w-16 items-center justify-center rounded-full transition-colors ${
          !isDark ? "bg-gray-700 text-white" : "text-gray-500"
        }`}
      >
        <Sun size={16} />
      </button>
    </motion.div>
  );
}

// WorkOS Logo SVG
function WorkOSLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="text-gray-400"
    >
      <path
        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AuthkitHero({
  mode = "light",
  badge = "Introducing",
  title = "AuthKit",
  subtitle = "The world's best login box,",
  poweredBy = "powered by WorkOS + Radix.",
  themeSupportText = "Light and dark modes supported.",
  headerLeftText = "WorkOS",
  headerRightText = "View GitHub",
  onHeaderLeftClick,
  onHeaderRightClick,
}: AuthkitHeroProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0e121d]">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-blue-500/10 via-blue-600/5 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-50 flex items-center justify-between px-8 py-6"
      >
        <button
          onClick={onHeaderLeftClick}
          className="flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
        >
          <WorkOSLogo />
          {headerLeftText}
        </button>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 bg-[#1a1f2e]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gray-300"
            >
              <path
                d="M12 2L2 7l10 5 10-5-10-5z"
                fill="currentColor"
                opacity="0.3"
              />
              <path
                d="M2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <button
          onClick={onHeaderRightClick}
          className="rounded-md border border-gray-700 bg-transparent px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-gray-600 hover:bg-gray-800/50 hover:text-white"
        >
          {headerRightText}
        </button>
      </motion.header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-4 pt-8">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-sm font-medium tracking-wide text-[#667ca1]"
        >
          {badge}
        </motion.span>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 font-serif text-7xl font-normal italic tracking-tight text-white md:text-8xl lg:text-9xl"
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
          }}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-2 text-center text-lg text-gray-300 md:text-xl"
        >
          {subtitle}
          <br />
          {poweredBy}
        </motion.p>

        {/* Login Cards Container */}
        <div className="relative mt-12 flex h-[380px] w-full max-w-3xl items-center justify-center">
          <LoginCard
            variant="left"
            style={{
              left: "50%",
              transform: "translateX(-85%) rotate(-6deg)",
              top: "20px",
            }}
          />
          <LoginCard variant="front" />
          <LoginCard
            variant="right"
            style={{
              right: "50%",
              transform: "translateX(85%) rotate(6deg)",
              top: "20px",
            }}
          />
        </div>

        {/* Theme Toggle */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <ThemeToggle
            isDark={isDarkMode}
            onToggle={() => setIsDarkMode(!isDarkMode)}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-sm text-gray-400"
          >
            {themeSupportText}
          </motion.p>
        </div>
      </div>

      {/* Import Instrument Serif font */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&display=swap");
      `}</style>
    </section>
  );
}
