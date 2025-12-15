"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FF6B35",
    crtGreen: "#00FF00",
    textPrimary: "#FFFFFF",
    textSecondary: "rgba(255, 255, 255, 0.7)",
  },
  dark: {
    accent: "#FF6B35",
    crtGreen: "#00FF00",
    textPrimary: "#FFFFFF",
    textSecondary: "rgba(255, 255, 255, 0.7)",
  },
} as const;

const VIDEOS = {
  screen: {
    src: "https://claude-mem.ai/assets/screen-874.mp4",
    type: "video/mp4",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface ClaudeMemAiFeature2Props {
  mode?: "light" | "dark";
}

export default function ClaudeMemAiFeature2({
  mode = "dark",
}: ClaudeMemAiFeature2Props) {
  const colors = COLORS[mode];

  const features = [
    { icon: "search", text: "Searchable by time" },
    { icon: "camera", text: "Before & after context" },
    { icon: "bolt", text: "Generated live" },
  ];

  return (
    <section id="crt-timeline" className="relative w-full bg-[#0D0D0D] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: colors.accent }}
            >
              Live Observation
            </span>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Your AI doesn&apos;t have to<br />remember anymore
            </h2>
            <p className="mb-8 text-lg text-white/60">
              A dedicated observer AI watches every session, generating searchable
              observations in real-time. Complete logs with before-and-after context,
              organized by time—just like how humans handle the same problem.
            </p>
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-center gap-3">
                  <span className="text-xl">
                    {feature.icon === "search" && "🔍"}
                    {feature.icon === "camera" && "📸"}
                    {feature.icon === "bolt" && "⚡"}
                  </span>
                  <span className="text-white/80">{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CRT Computer */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Monitor */}
              <div className="relative rounded-2xl bg-gradient-to-b from-[#E8E4DC] to-[#D4CFC4] p-4 shadow-2xl">
                {/* Screen Bezel */}
                <div className="rounded-xl bg-[#2A2A2A] p-3">
                  {/* Screen */}
                  <div className="relative aspect-[4/3] w-[300px] overflow-hidden rounded-lg bg-[#0a1a0a] md:w-[400px]">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                      style={{ filter: "sepia(0.1) saturate(1.2)" }}
                    >
                      <source src={VIDEOS.screen.src} type={VIDEOS.screen.type} />
                    </video>
                    {/* CRT Scanlines Effect */}
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0.1) 2px)",
                      }}
                    />
                    {/* CRT Glow */}
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        boxShadow: "inset 0 0 60px rgba(0,255,0,0.1)",
                      }}
                    />
                  </div>
                </div>
                {/* Badge */}
                <div className="mt-2 flex items-center justify-between px-2">
                  <span className="font-mono text-xs text-[#666]">claude—mem</span>
                  <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
                </div>
                {/* Vents */}
                <div className="mt-2 flex justify-center gap-1">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-1 w-8 rounded-full bg-[#C4BFB4]" />
                  ))}
                </div>
              </div>

              {/* Base/Keyboard */}
              <div className="mx-auto mt-1 w-[90%] rounded-b-xl bg-gradient-to-b from-[#D4CFC4] to-[#C4BFB4] p-4">
                <div className="flex items-center gap-2">
                  {/* Floppy Drive */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="h-1 w-16 rounded bg-[#1a1a1a]" />
                    <div className="h-1 w-1 rounded-full bg-[#666]" />
                  </div>
                  {/* Keyboard */}
                  <div className="flex-1 space-y-1">
                    {[...Array(4)].map((_, row) => (
                      <div key={row} className="flex justify-center gap-0.5">
                        {[...Array(row === 3 ? 8 : 12)].map((_, key) => (
                          <div
                            key={key}
                            className={`h-2 rounded-sm bg-[#E8E4DC] ${
                              row === 3 && key === 4 ? "w-8" : "w-3"
                            }`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
