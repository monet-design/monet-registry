"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    bg: "#FFFFFF",
    cardBg: "#F5F5F5",
    cardBg02: "#E5E5E5",
    cardBg03: "#FAFAFA",
    cardBg04: "#FFFFFF",
    text: "#1F1F1F",
    textSecondary: "#6B7280",
    textTertiary: "#9CA3AF",
    accent: "#F97316",
    border: "#E5E5E5",
    border02: "#D1D5DB",
  },
  dark: {
    bg: "#0A0A0A",
    cardBg: "#141414",
    cardBg02: "#1F1F1F",
    cardBg03: "#0D0D0D",
    cardBg04: "#1A1A1A",
    text: "#FFFFFF",
    textSecondary: "#9CA3AF",
    textTertiary: "#6B7280",
    accent: "#F97316",
    border: "#262626",
    border02: "#333333",
  },
} as const;

const IMAGES = {
  modelsCard: {
    light:
      "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/misc/asset-e6375f83012e4a76ff15.png",
    dark: "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/misc/asset-0f82efbbc1a26deeca19.png",
  },
  codebaseCard: {
    light:
      "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/misc/asset-fd9b3b4cd7d670f9f7d8.png",
    dark: "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/misc/asset-3cb319c263fd5a76115b.png",
  },
  teamPhoto:
    "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/homepage/homepage-team-photo-1.jpg",
} as const;

const FEATURES = [
  {
    title: "Access the best models",
    description:
      "Choose between every cutting-edge model from OpenAI, Anthropic, Gemini, and xAI.",
    link: "Explore models",
    linkHref: "https://cursor.com/docs/models",
    external: true,
    models: [
      { name: "Auto", tag: "Suggested", selected: false },
      { name: "Composer 1", tag: null, selected: false },
      { name: "GPT-5", tag: "High Fast", selected: false },
      { name: "Claude Sonnet 4.5", tag: null, selected: true },
      { name: "Claude Opus 4.5", tag: null, selected: false },
      { name: "Gemini 3 Pro", tag: null, selected: false },
      { name: "Grok Code", tag: null, selected: false },
    ],
  },
  {
    title: "Complete codebase understanding",
    description:
      "Cursor learns how your codebase works, no matter the scale or complexity.",
    link: "Learn about codebase indexing",
    linkHref: "https://cursor.com/docs/context/codebase-indexing",
    external: true,
    searchExample: {
      query: "Where are these menu label colors defined?",
      results: [
        { type: "Grepped", text: "Choose a model" },
        { type: "Searched", text: "Where is the model picker UI implemented?" },
        { type: "Searching", text: null },
      ],
    },
  },
  {
    title: "Develop enduring software",
    description:
      "Trusted by over half of the Fortune 500 to accelerate development, securely and at scale.",
    link: "Explore enterprise",
    linkHref: "/enterprise",
    external: false,
  },
] as const;

// ============================================================================

import { motion } from "motion/react";
import { Check } from "lucide-react";

interface CursorComFeature4Props {
  mode?: "light" | "dark";
}

export default function CursorComFeature4({
  mode = "dark",
}: CursorComFeature4Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full px-6 py-16 lg:px-12 lg:py-24"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-2xl font-medium md:text-3xl"
          style={{ color: colors.text }}
        >
          Stay on the frontier
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1: Models */}
          <motion.a
            href={FEATURES[0].linkHref}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex h-full flex-col rounded-xl p-6 transition-shadow hover:shadow-lg"
            style={{
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.border}`,
            }}
          >
            <div className="flex flex-1 flex-col">
              <h3
                className="mb-2 text-lg font-medium"
                style={{ color: colors.text }}
              >
                {FEATURES[0].title}
              </h3>
              <p className="mb-4 text-sm" style={{ color: colors.textSecondary }}>
                {FEATURES[0].description}
              </p>
              <div className="mb-6">
                <span
                  className="inline-flex items-center gap-1 text-sm font-medium"
                  style={{ color: colors.textSecondary }}
                >
                  {FEATURES[0].link} ↗
                </span>
              </div>
            </div>

            {/* Models Card Figure */}
            <figure className="relative mt-auto aspect-square overflow-hidden rounded-lg md:aspect-[4/3]">
              <img
                src={IMAGES.modelsCard[mode]}
                alt=""
                className="absolute inset-0 h-full w-full scale-110 object-cover"
                style={{ filter: mode === "dark" ? "brightness(0.8)" : "none" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-[83.333%] max-w-[320px] min-w-[180px] overflow-hidden rounded-md"
                  style={{
                    backgroundColor: colors.cardBg04,
                    boxShadow:
                      mode === "dark"
                        ? "0 0 0 1px rgba(255,255,255,0.1), 0 4px 20px rgba(0,0,0,0.4)"
                        : "0 0 0 1px rgba(0,0,0,0.05), 0 4px 20px rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="p-1">
                    {FEATURES[0].models.map((model) => (
                      <div
                        key={model.name}
                        className="flex w-full items-center rounded px-3 py-2 text-sm"
                        style={{
                          backgroundColor: model.selected
                            ? colors.cardBg02
                            : "transparent",
                        }}
                      >
                        <span
                          className="flex flex-1 items-baseline gap-2"
                          style={{ color: colors.text }}
                        >
                          <span>{model.name}</span>
                          {model.tag && (
                            <span
                              className="text-xs"
                              style={{ color: colors.textTertiary }}
                            >
                              {model.tag}
                            </span>
                          )}
                        </span>
                        {model.selected && (
                          <Check
                            className="ml-2 h-4 w-4"
                            style={{ color: colors.text }}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </figure>
          </motion.a>

          {/* Feature 2: Codebase Understanding */}
          <motion.a
            href={FEATURES[1].linkHref}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex h-full flex-col rounded-xl p-6 transition-shadow hover:shadow-lg"
            style={{
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.border}`,
            }}
          >
            <div className="flex flex-1 flex-col">
              <h3
                className="mb-2 text-lg font-medium"
                style={{ color: colors.text }}
              >
                {FEATURES[1].title}
              </h3>
              <p className="mb-4 text-sm" style={{ color: colors.textSecondary }}>
                {FEATURES[1].description}
              </p>
              <div className="mb-6">
                <span
                  className="inline-flex items-center gap-1 text-sm font-medium"
                  style={{ color: colors.textSecondary }}
                >
                  {FEATURES[1].link} ↗
                </span>
              </div>
            </div>

            {/* Codebase Card Figure */}
            <figure className="relative mt-auto aspect-square overflow-hidden rounded-lg md:aspect-[4/3]">
              <img
                src={IMAGES.codebaseCard[mode]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-[83.333%] max-w-[360px] min-w-[180px]"
                  role="region"
                  aria-label="Tool calls"
                >
                  <div className="space-y-3">
                    <div
                      className="w-full rounded-md px-4 py-3 text-sm"
                      style={{
                        backgroundColor: colors.cardBg04,
                        border: `1px solid ${colors.border02}`,
                        color: colors.text,
                      }}
                    >
                      {FEATURES[1].searchExample.query}
                    </div>
                    <ul className="space-y-2 pl-2">
                      {FEATURES[1].searchExample.results.map((result, i) => (
                        <li
                          key={i}
                          className="flex items-baseline gap-1 overflow-hidden text-sm leading-snug"
                          style={{ color: colors.textSecondary }}
                        >
                          {result.type === "Searching" ? (
                            <span
                              className="animate-pulse"
                              style={{ color: colors.textSecondary }}
                            >
                              Searching
                            </span>
                          ) : (
                            <>
                              <span
                                className="shrink-0"
                                style={{ color: colors.textSecondary }}
                              >
                                {result.type}
                              </span>
                              <span
                                className="min-w-0 truncate opacity-60"
                                style={{ color: colors.textSecondary }}
                              >
                                {result.text}
                              </span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </figure>
          </motion.a>

          {/* Feature 3: Enterprise */}
          <motion.a
            href={FEATURES[2].linkHref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex h-full flex-col rounded-xl p-6 transition-shadow hover:shadow-lg"
            style={{
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.border}`,
            }}
          >
            <div className="flex flex-1 flex-col">
              <h3
                className="mb-2 text-lg font-medium"
                style={{ color: colors.text }}
              >
                {FEATURES[2].title}
              </h3>
              <p className="mb-4 text-sm" style={{ color: colors.textSecondary }}>
                {FEATURES[2].description}
              </p>
              <div className="mb-6">
                <span
                  className="inline-flex items-center gap-1 text-sm font-medium"
                  style={{ color: colors.textSecondary }}
                >
                  {FEATURES[2].link} →
                </span>
              </div>
            </div>

            {/* Team Photo Figure */}
            <figure className="relative mt-auto overflow-hidden rounded-lg">
              <img
                src={IMAGES.teamPhoto}
                alt="Cursor team"
                className="h-auto w-full"
                loading="lazy"
              />
            </figure>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
