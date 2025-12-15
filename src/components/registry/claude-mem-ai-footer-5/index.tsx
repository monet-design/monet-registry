"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FF6B35",
    accentHover: "#FF8555",
    textPrimary: "#FFFFFF",
    textSecondary: "rgba(255, 255, 255, 0.5)",
    border: "rgba(255, 107, 53, 0.3)",
  },
  dark: {
    accent: "#FF6B35",
    accentHover: "#FF8555",
    textPrimary: "#FFFFFF",
    textSecondary: "rgba(255, 255, 255, 0.5)",
    border: "rgba(255, 107, 53, 0.3)",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface ClaudeMemAiFooter5Props {
  mode?: "light" | "dark";
}

export default function ClaudeMemAiFooter5({
  mode = "dark",
}: ClaudeMemAiFooter5Props) {
  const colors = COLORS[mode];

  const links = [
    { label: "Docs", href: "https://docs.claude-mem.ai/introduction" },
    { label: "GitHub", href: "https://github.com/thedotmack/claude-mem" },
    { label: "Issues", href: "https://github.com/thedotmack/claude-mem/issues" },
  ];

  return (
    <footer className="relative w-full bg-[#0D0D0D]">
      {/* Gradient Border */}
      <div
        className="h-px w-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${colors.border}, transparent)`,
        }}
      />

      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h3 className="mb-4 text-xl font-semibold text-white">
            Still have questions?
          </h3>
          <a
            href="https://docs.claude-mem.ai/introduction"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition-all hover:bg-white/10"
          >
            <span>Read the Documentation</span>
            <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-8"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-white/30"
        >
          © 2025 Claude-Mem
        </motion.div>
      </div>
    </footer>
  );
}
