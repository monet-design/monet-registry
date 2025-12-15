"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FF6B35",
    decision: "#F59E0B",
    bugfix: "#EF4444",
    feature: "#A855F7",
    discovery: "#3B82F6",
    textPrimary: "#FFFFFF",
    textSecondary: "rgba(255, 255, 255, 0.7)",
  },
  dark: {
    accent: "#FF6B35",
    decision: "#F59E0B",
    bugfix: "#EF4444",
    feature: "#A855F7",
    discovery: "#3B82F6",
    textPrimary: "#FFFFFF",
    textSecondary: "rgba(255, 255, 255, 0.7)",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface ClaudeMemAiFeature3Props {
  mode?: "light" | "dark";
}

export default function ClaudeMemAiFeature3({
  mode = "dark",
}: ClaudeMemAiFeature3Props) {
  const colors = COLORS[mode];

  const observationTypes = [
    { emoji: "⚖️", label: "decision", count: 47, color: colors.decision },
    { emoji: "🔴", label: "bugfix", count: 23, color: colors.bugfix },
    { emoji: "🟣", label: "feature", count: 89, color: colors.feature },
    { emoji: "🔵", label: "discovery", count: 156, color: colors.discovery },
  ];

  const sections = [
    {
      id: "categorization",
      title: "How you'd remember it—\nfor your AI",
      description: "Every observation is auto-categorized. Filter by decisions, bugfixes, features, or discoveries. Combine with file scope for surgical precision.",
      code: "type:decision file:auth.ts",
      visual: "types",
    },
    {
      id: "scoping",
      title: "File & Concept\nScoping",
      description: 'Query by file path or semantic concept. "What decisions affected index.ts?" or "What do we know about auth?" Both work.',
      visual: "scopes",
      flipped: true,
    },
    {
      id: "disclosure",
      title: "Progressive\nDisclosure",
      description: "Sessions start with a lightweight index—titles, types, timestamps. The LLM fetches full observations only when it needs depth.",
      emphasis: "Token-efficient by default, never shallow when it matters.",
      visual: "disclosure",
    },
    {
      id: "context",
      title: "Before/After\nContext",
      description: "Every observation includes what came before and what followed. The LLM sees causality—not snapshots.",
      emphasis: '"Why did this decision lead to that bug?" becomes answerable.',
      visual: "causality",
      flipped: true,
    },
  ];

  return (
    <section id="how-you-remember" className="relative w-full bg-[#0D0D0D] py-24">
      <div className="mx-auto max-w-7xl space-y-32 px-6">
        {sections.map((section, sectionIndex) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`grid items-center gap-12 lg:grid-cols-2 ${section.flipped ? "lg:[direction:rtl]" : ""}`}
          >
            {/* Text Column */}
            <div className="lg:[direction:ltr]">
              <h2 className="mb-6 whitespace-pre-line text-3xl font-bold text-white md:text-4xl">
                {section.title}
              </h2>
              <p className="mb-4 text-lg text-white/60">{section.description}</p>
              {section.emphasis && (
                <p className="text-lg font-medium text-white/80">{section.emphasis}</p>
              )}
              {section.code && (
                <code className="mt-4 inline-block rounded-lg border border-white/10 bg-white/5 px-4 py-2 font-mono text-sm text-green-400">
                  {section.code}
                </code>
              )}
            </div>

            {/* Visual Column */}
            <div className="lg:[direction:ltr]">
              {section.visual === "types" && (
                <div className="space-y-3">
                  {observationTypes.map((type) => (
                    <div
                      key={type.label}
                      className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 px-4 py-3 transition-all hover:bg-white/10"
                    >
                      <span className="text-2xl">{type.emoji}</span>
                      <span className="flex-1 font-medium text-white">{type.label}</span>
                      <span className="rounded-full px-3 py-1 text-sm text-white" style={{ backgroundColor: `${type.color}30` }}>
                        {type.count}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {section.visual === "scopes" && (
                <div className="space-y-6">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <span className="mb-2 block text-xs uppercase text-white/50">By file</span>
                    <code className="font-mono text-sm text-green-400">decisions for src/auth/index.ts</code>
                  </div>
                  <div className="text-center text-white/30">or</div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <span className="mb-2 block text-xs uppercase text-white/50">By concept</span>
                    <code className="font-mono text-sm text-green-400">decisions about &quot;token refresh&quot;</code>
                  </div>
                </div>
              )}

              {section.visual === "disclosure" && (
                <div className="flex flex-col items-center gap-4 md:flex-row">
                  <div className="flex-1 rounded-lg border border-white/10 bg-white/5 p-4">
                    <span className="mb-3 block text-xs uppercase text-white/50">Session start</span>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span><span className="mr-2">⚖️</span>JWT over sessions for auth</span>
                        <span className="text-white/40">~40 tokens</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span><span className="mr-2">🔴</span>Race condition in token refresh</span>
                        <span className="text-white/40">~35 tokens</span>
                      </div>
                      <div className="flex items-center justify-between text-white/50">
                        <span>... 48 more observations</span>
                        <span className="text-white/40">~2.1k total</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl text-white/30">→</div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <span className="mb-3 block text-xs uppercase text-white/50">On demand</span>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-white">Full observation</span>
                      <span className="text-white/40">~850 tokens</span>
                    </div>
                  </div>
                </div>
              )}

              {section.visual === "causality" && (
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="space-y-4">
                    <div>
                      <span className="mb-2 block text-xs uppercase text-white/50">7 before</span>
                      <div className="space-y-1 text-sm text-white/60">
                        <div>🔵 Researched auth approaches</div>
                        <div>🔵 Compared session vs token</div>
                        <div className="text-white/30">...</div>
                      </div>
                    </div>
                    <div className="rounded-lg border-2 border-amber-500/30 bg-amber-500/10 p-3">
                      <span className="mb-1 block text-xs uppercase text-amber-500">match</span>
                      <div className="text-sm font-medium text-white">⚖️ Chose JWT for statelessness</div>
                    </div>
                    <div>
                      <span className="mb-2 block text-xs uppercase text-white/50">7 after</span>
                      <div className="space-y-1 text-sm text-white/60">
                        <div>🟣 Implemented token service</div>
                        <div>🔴 Fixed refresh race condition</div>
                        <div className="text-white/30">...</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
