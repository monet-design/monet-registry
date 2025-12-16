"use client";

import SonarlyDevHero0 from "@/components/registry/sonarly-dev-hero-0";
import SonarlyDevFeature1 from "@/components/registry/sonarly-dev-feature-1";
import SonarlyDevPricing2 from "@/components/registry/sonarly-dev-pricing-2";
import SonarlyDevFaq3 from "@/components/registry/sonarly-dev-faq-3";
import SonarlyDevCta4 from "@/components/registry/sonarly-dev-cta-4";
import SonarlyDevFooter5 from "@/components/registry/sonarly-dev-footer-5";

interface SonarlyDevLandingProps {
  mode?: "light" | "dark";
}

/**
 * sonarly-dev-landing - Full page component
 *
 * This page combines the following sections:
 * - sonarly-dev-hero-0
 * - sonarly-dev-feature-1
 * - sonarly-dev-pricing-2
 * - sonarly-dev-faq-3
 * - sonarly-dev-cta-4
 * - sonarly-dev-footer-5
 */
export default function SonarlyDevLanding({ mode = "light" }: SonarlyDevLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <SonarlyDevHero0 mode={mode} />
        <SonarlyDevFeature1 mode={mode} />
        <SonarlyDevPricing2 mode={mode} />
        <SonarlyDevFaq3 mode={mode} />
        <SonarlyDevCta4 mode={mode} />
        <SonarlyDevFooter5 mode={mode} />
    </div>
  );
}
