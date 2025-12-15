"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    bg: "#141414",
    text: "#FAFAFA",
    textMuted: "#A1A1AA",
    buttonBg: "#FAFAFA",
    buttonText: "#141414",
  },
  dark: {
    bg: "#141414",
    text: "#FAFAFA",
    textMuted: "#A1A1AA",
    buttonBg: "#FAFAFA",
    buttonText: "#141414",
  },
} as const;

const CONTENT = {
  title: "Frequently asked questions",
  faqs: [
    {
      question: "Does Conductor use worktrees?",
      answer: "Yes, each Conductor workspace is a new git worktree.",
    },
    {
      question: "Which coding agents does Conductor support?",
      answer: "Claude Code and Codex. Want to see something else? Email us.",
    },
    {
      question: "How does Conductor pay for Claude Code?",
      answer:
        "Conductor uses Claude Code however you're already logged in. If you're logged into Claude Code with an API key, Conductor will use that too. If you're logged in with the Claude Pro or Max plan, Conductor will use that.",
    },
  ],
  cta: {
    title: "We built Conductor using Conductor.",
    subtitle: "We think you'll like it as much as we do.",
    button: "Download Conductor",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import Link from "next/link";
import { Download } from "lucide-react";

interface ConductorBuildFaq4Props {
  mode?: "light" | "dark";
}

export default function ConductorBuildFaq4({
  mode = "dark",
}: ConductorBuildFaq4Props) {
  const colors = COLORS[mode];

  return (
    <section className="w-full py-20" style={{ backgroundColor: colors.bg }}>
      <div className="mx-auto max-w-2xl px-6">
        {/* FAQ Section */}
        <h2
          className="mb-8 font-mono text-sm font-medium underline underline-offset-4"
          style={{ color: colors.text }}
        >
          {CONTENT.title}
        </h2>

        <div className="mb-16 space-y-6">
          {CONTENT.faqs.map((faq, index) => (
            <div key={index}>
              <h3
                className="mb-1 font-mono text-sm font-bold"
                style={{ color: colors.text }}
              >
                {faq.question}
              </h3>
              <p className="flex gap-2 font-mono text-sm">
                <span style={{ color: colors.textMuted }}>|_</span>
                <span style={{ color: colors.textMuted }}>{faq.answer}</span>
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3
            className="mb-1 font-mono text-sm font-bold"
            style={{ color: colors.text }}
          >
            {CONTENT.cta.title}
          </h3>
          <p
            className="mb-6 font-mono text-sm"
            style={{ color: colors.textMuted }}
          >
            {CONTENT.cta.subtitle}
          </p>
          <Link
            href="/download"
            className="inline-flex items-center gap-2 rounded-md px-6 py-3 font-mono text-sm transition-colors hover:opacity-90"
            style={{
              backgroundColor: colors.buttonBg,
              color: colors.buttonText,
            }}
          >
            {CONTENT.cta.button}
            <Download className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
