"use client";

import ClaudeMemAiHero0 from "@/components/registry/claude-mem-ai-hero-0";
import ClaudeMemAiHowItWorks1 from "@/components/registry/claude-mem-ai-how-it-works-1";
import ClaudeMemAiFeature2 from "@/components/registry/claude-mem-ai-feature-2";
import ClaudeMemAiFeature3 from "@/components/registry/claude-mem-ai-feature-3";
import ClaudeMemAiCta4 from "@/components/registry/claude-mem-ai-cta-4";
import ClaudeMemAiFooter5 from "@/components/registry/claude-mem-ai-footer-5";

interface ClaudeMemAiLandingProps {
  mode?: "light" | "dark";
}

/**
 * claude-mem-ai-landing - Full page component
 *
 * This page combines the following sections:
 * - claude-mem-ai-hero-0
 * - claude-mem-ai-how-it-works-1
 * - claude-mem-ai-feature-2
 * - claude-mem-ai-feature-3
 * - claude-mem-ai-cta-4
 * - claude-mem-ai-footer-5
 */
export default function ClaudeMemAiLanding({ mode = "light" }: ClaudeMemAiLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <ClaudeMemAiHero0 mode={mode} />
        <ClaudeMemAiHowItWorks1 mode={mode} />
        <ClaudeMemAiFeature2 mode={mode} />
        <ClaudeMemAiFeature3 mode={mode} />
        <ClaudeMemAiCta4 mode={mode} />
        <ClaudeMemAiFooter5 mode={mode} />
    </div>
  );
}
