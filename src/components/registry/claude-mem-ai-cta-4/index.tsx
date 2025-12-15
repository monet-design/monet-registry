"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FF6B35",
    accentHover: "#FF8555",
    glow: "rgba(255, 107, 53, 0.3)",
    textPrimary: "#FFFFFF",
    textSecondary: "rgba(255, 255, 255, 0.7)",
  },
  dark: {
    accent: "#FF6B35",
    accentHover: "#FF8555",
    glow: "rgba(255, 107, 53, 0.3)",
    textPrimary: "#FFFFFF",
    textSecondary: "rgba(255, 255, 255, 0.7)",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface ClaudeMemAiCta4Props {
  mode?: "light" | "dark";
}

export default function ClaudeMemAiCta4({
  mode = "dark",
}: ClaudeMemAiCta4Props) {
  const colors = COLORS[mode];

  return (
    <section id="protocol" className="relative w-full overflow-hidden bg-[#0D0D0D] py-24">
      {/* Glow Effect */}
      <div
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ backgroundColor: colors.accent }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: colors.accent }}
          >
            Coming Soon
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            Real-Time Agent Data
          </h2>
          <p className="mb-2 text-xl text-white/70">
            An open standard for AI agent memory.
          </p>
          <p className="mb-8 text-xl font-medium text-white">
            RAG captures knowledge. RAD captures intelligence.
          </p>
          <p className="mx-auto mb-12 max-w-2xl text-white/60">
            Just as RAG (Retrieval Augmented Generation) standardized external knowledge retrieval,
            RAD will standardize how agents capture and retrieve their own working memory.
            Hook-based architecture, intelligent compression, temporal awareness — all in one open protocol.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://github.com/thedotmack/claude-mem"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-white transition-all hover:brightness-110"
            style={{ backgroundColor: colors.accent }}
          >
            <span>Claude-Mem for Claude Code</span>
            <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          <a
            href="https://github.com/thedotmack/claude-mem"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
            </svg>
            <span>Star on GitHub</span>
            <span className="rounded bg-white/10 px-2 py-0.5 text-sm">6,355</span>
          </a>
        </motion.div>

        {/* Install Command */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="mb-2 text-sm text-white/50">Quick Install:</div>
          <code className="inline-block rounded-lg border border-white/10 bg-black/40 px-4 py-2 font-mono text-sm text-green-400 backdrop-blur-sm">
            /plugin marketplace add thedotmack/claude-mem && /plugin install claude-mem
          </code>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4 text-sm"
        >
          <a
            href="https://github.com/thedotmack/claude-mem#readme"
            className="text-white/50 transition-colors hover:text-white"
          >
            Documentation
          </a>
          <span className="text-white/30">•</span>
          <a
            href="https://github.com/thedotmack/claude-mem"
            className="text-white/50 transition-colors hover:text-white"
          >
            Source Code
          </a>
        </motion.div>
      </div>
    </section>
  );
}
