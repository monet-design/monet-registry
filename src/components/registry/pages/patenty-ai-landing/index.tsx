"use client";

import PatentyAiHeader0 from "@/components/registry/patenty-ai-header-0";
import PatentyAiHero0 from "@/components/registry/patenty-ai-hero-0";
import PatentyAiFeature1 from "@/components/registry/patenty-ai-feature-1";
import PatentyAiFeature2 from "@/components/registry/patenty-ai-feature-2";
import PatentyAiHowItWorks3 from "@/components/registry/patenty-ai-how-it-works-3";
import PatentyAiFeature4 from "@/components/registry/patenty-ai-feature-4";
import PatentyAiCta5 from "@/components/registry/patenty-ai-cta-5";
import PatentyAiFooter6 from "@/components/registry/patenty-ai-footer-6";

interface PatentyAiLandingProps {
  mode?: "light" | "dark";
}

/**
 * patenty-ai-landing - Full page component
 *
 * This page combines the following sections:
 * - patenty-ai-header-0
 * - patenty-ai-hero-0
 * - patenty-ai-feature-1
 * - patenty-ai-feature-2
 * - patenty-ai-how-it-works-3
 * - patenty-ai-feature-4
 * - patenty-ai-cta-5
 * - patenty-ai-footer-6
 */
export default function PatentyAiLanding({
  mode = "dark",
}: PatentyAiLandingProps) {
  return (
    <div className="w-full min-h-screen">
      <PatentyAiHeader0 mode={mode} />
      <PatentyAiHero0 mode={mode} />
      <PatentyAiFeature1 mode={mode} />
      <PatentyAiFeature2 mode={mode} />
      <PatentyAiHowItWorks3 mode={mode} />
      <PatentyAiFeature4 mode={mode} />
      <PatentyAiCta5 mode={mode} />
      <PatentyAiFooter6 />
    </div>
  );
}
