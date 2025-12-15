"use client";

import DeepconAiHeader0 from "@/components/registry/deepcon-ai-header-0";
import DeepconAiHero0 from "@/components/registry/deepcon-ai-hero-0";
import DeepconAiStats01 from "@/components/registry/deepcon-ai-stats-0-1";
import DeepconAiBenchmark02 from "@/components/registry/deepcon-ai-benchmark-0-2";
import DeepconAiLogoCloud03 from "@/components/registry/deepcon-ai-logo-cloud-0-3";
import DeepconAiShowcase04 from "@/components/registry/deepcon-ai-showcase-0-4";
import DeepconAiFeature1 from "@/components/registry/deepcon-ai-feature-1";
import DeepconAiCta2 from "@/components/registry/deepcon-ai-cta-2";
import DeepconAiFooter3 from "@/components/registry/deepcon-ai-footer-3";

interface DeepconAiLandingProps {
  mode?: "light" | "dark";
}

/**
 * deepcon-ai-landing - Full page component
 *
 * This page combines the following sections:
 * - deepcon-ai-header-0 (Header with navigation)
 * - deepcon-ai-hero-0 (Hero with badge, headline, search form)
 * - deepcon-ai-stats-0-1 (Features grid + Stats)
 * - deepcon-ai-benchmark-0-2 (Benchmark results + Charts)
 * - deepcon-ai-logo-cloud-0-3 (Trusted by logos)
 * - deepcon-ai-showcase-0-4 (Database example)
 * - deepcon-ai-feature-1 (Why Deepcon?)
 * - deepcon-ai-cta-2 (CTA section)
 * - deepcon-ai-footer-3 (Footer)
 */
export default function DeepconAiLanding({ mode = "light" }: DeepconAiLandingProps) {
  return (
    <div className="w-full min-h-screen">
      <DeepconAiHeader0 mode={mode} />
      <DeepconAiHero0 mode={mode} />
      <DeepconAiStats01 mode={mode} />
      <DeepconAiBenchmark02 mode={mode} />
      <DeepconAiLogoCloud03 mode={mode} />
      <DeepconAiShowcase04 mode={mode} />
      <DeepconAiFeature1 mode={mode} />
      <DeepconAiCta2 mode={mode} />
      <DeepconAiFooter3 mode={mode} />
    </div>
  );
}
