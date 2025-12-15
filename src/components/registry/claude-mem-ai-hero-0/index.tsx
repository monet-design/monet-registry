"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#FF6B35",
    accentHover: "#FF8555",
    textPrimary: "#FFFFFF",
    textSecondary: "rgba(255, 255, 255, 0.7)",
    overlay: "rgba(0, 0, 0, 0.7)",
  },
  dark: {
    accent: "#FF6B35",
    accentHover: "#FF8555",
    textPrimary: "#FFFFFF",
    textSecondary: "rgba(255, 255, 255, 0.7)",
    overlay: "rgba(0, 0, 0, 0.7)",
  },
} as const;

/**
 * 비디오 에셋
 */
const VIDEOS = {
  heroBackground: {
    src: "https://claude-mem.ai/video/hero-bg.mp4",
    type: "video/mp4",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface ClaudeMemAiHero0Props {
  mode?: "light" | "dark";
}

export default function ClaudeMemAiHero0({
  mode = "dark",
}: ClaudeMemAiHero0Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0D0D0D]">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={VIDEOS.heroBackground.src} type={VIDEOS.heroBackground.type} />
        </video>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: colors.overlay }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 flex items-center justify-between px-6 py-4 md:px-12"
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 text-white">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="font-semibold">Claude-Mem</span>
          </div>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#benefits" className="text-sm text-white/70 transition-colors hover:text-white">
            Benefits
          </a>
          <a href="#how-it-works" className="text-sm text-white/70 transition-colors hover:text-white">
            How It Works
          </a>
          <a href="https://github.com/thedotmack/claude-mem" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 transition-colors hover:text-white">
            GitHub
          </a>
          <a href="https://docs.claude-mem.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 transition-colors hover:text-white">
            Docs
          </a>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: colors.accent }}
          >
            AI Memory That Actually Works
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="mb-4 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            <span className="block">Stop explaining context.</span>
            <span
              className="block"
              style={{
                color: colors.accent,
                textShadow: `0 0 40px ${colors.accent}40`
              }}
            >
              Start building faster.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 max-w-xl text-lg text-white/70"
        >
          Claude-Mem is your AI&apos;s trusty note-taking sidekick. Never lose track ever again.
        </motion.p>

        {/* Install Commands */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8 w-full max-w-2xl"
        >
          <div className="mb-2 text-sm text-white/50">Quick Install:</div>
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-lg border border-white/10 bg-black/40 px-4 py-3 font-mono text-sm backdrop-blur-sm">
            <code className="text-green-400">/plugin marketplace add thedotmack/claude-mem</code>
            <span className="text-white/50">&&</span>
            <code className="text-green-400">/plugin install claude-mem</code>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://github.com/thedotmack/claude-mem"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg px-6 py-3 font-medium text-white transition-all hover:brightness-110"
            style={{ backgroundColor: colors.accent }}
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
            </svg>
            <span>Star on GitHub</span>
            <span className="rounded bg-white/20 px-2 py-0.5 text-sm">6,355</span>
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
            <span>How It Works</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 flex flex-col items-center gap-2"
        >
          <span className="text-sm text-white/50">Scroll to discover</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="h-6 w-6 text-white/50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
