"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FF6B35",
    accentSecondary: "#22D3EE",
    textPrimary: "#FFFFFF",
    textSecondary: "rgba(255, 255, 255, 0.7)",
    border: "rgba(255, 255, 255, 0.1)",
    bgCard: "rgba(255, 255, 255, 0.05)",
  },
  dark: {
    accent: "#FF6B35",
    accentSecondary: "#22D3EE",
    textPrimary: "#FFFFFF",
    textSecondary: "rgba(255, 255, 255, 0.7)",
    border: "rgba(255, 255, 255, 0.1)",
    bgCard: "rgba(255, 255, 255, 0.05)",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface ClaudeMemAiHowItWorks1Props {
  mode?: "light" | "dark";
}

export default function ClaudeMemAiHowItWorks1({
  mode = "dark",
}: ClaudeMemAiHowItWorks1Props) {
  const colors = COLORS[mode];

  const awarenessItems = [
    { label: "Before", text: "What happened in previous sessions" },
    { label: "Current", text: "Present context and recent work", isCurrent: true },
    { label: "Next", text: "What comes next, pending tasks" },
  ];

  return (
    <section id="how-it-works" className="relative min-h-screen w-full bg-[#0D0D0D] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
            One AI takes notes about what<br />another AI does.
          </h2>
          <p className="mx-auto mb-16 max-w-3xl text-lg text-white/60">
            Claude-Mem watches your AI coding assistant work and captures what matters.
            Every decision, every bug fix, every architectural choice — remembered automatically.
          </p>
        </motion.div>

        {/* Awareness Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-0"
        >
          {awarenessItems.map((item, index) => (
            <div key={item.label} className="flex items-center">
              <div className="flex flex-col items-center gap-2 px-8 py-4">
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: item.isCurrent ? colors.accentSecondary : "rgba(255,255,255,0.5)" }}
                >
                  {item.label}
                </span>
                <span className="text-sm text-white/70">{item.text}</span>
              </div>
              {index < awarenessItems.length - 1 && (
                <div className="hidden h-px w-16 bg-white/20 md:block" />
              )}
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
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
      </div>
    </section>
  );
}
