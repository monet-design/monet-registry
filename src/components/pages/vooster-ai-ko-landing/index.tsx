"use client";

import VoosterAiKoHeader from "@/components/registry/vooster-ai-ko-header";
import VoosterAiKoHero0 from "@/components/registry/vooster-ai-ko-hero-0";
import VoosterAiKoFeature1 from "@/components/registry/vooster-ai-ko-feature-1";
import VoosterAiKoTargetUser2 from "@/components/registry/vooster-ai-ko-target-user-2";
import VoosterAiKoRoadmap3 from "@/components/registry/vooster-ai-ko-roadmap-3";
import VoosterAiKoPricing4 from "@/components/registry/vooster-ai-ko-pricing-4";
import VoosterAiKoFaq5 from "@/components/registry/vooster-ai-ko-faq-5";
import VoosterAiKoCta6 from "@/components/registry/vooster-ai-ko-cta-6";
import VoosterAiKoFooter7 from "@/components/registry/vooster-ai-ko-footer-7";

interface VoosterAiKoLandingProps {
  mode?: "light" | "dark";
}

/**
 * vooster-ai-ko-landing - Full page component
 *
 * This page combines the following sections:
 * - vooster-ai-ko-header
 * - vooster-ai-ko-hero-0
 * - vooster-ai-ko-feature-1
 * - vooster-ai-ko-target-user-2
 * - vooster-ai-ko-roadmap-3
 * - vooster-ai-ko-pricing-4
 * - vooster-ai-ko-faq-5
 * - vooster-ai-ko-cta-6
 * - vooster-ai-ko-footer-7
 */
export default function VoosterAiKoLanding({ mode = "light" }: VoosterAiKoLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <VoosterAiKoHeader mode={mode} />
        <VoosterAiKoHero0 mode={mode} />
        <VoosterAiKoFeature1 mode={mode} />
        <VoosterAiKoTargetUser2 mode={mode} />
        <VoosterAiKoRoadmap3 mode={mode} />
        <VoosterAiKoPricing4 mode={mode} />
        <VoosterAiKoFaq5 mode={mode} />
        <VoosterAiKoCta6 mode={mode} />
        <VoosterAiKoFooter7 mode={mode} />
    </div>
  );
}
