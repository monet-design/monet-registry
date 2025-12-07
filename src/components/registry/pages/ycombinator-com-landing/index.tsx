"use client";

import YcombinatorComHero0 from "@/components/registry/ycombinator-com-hero-0";
import YcombinatorComVideo7 from "@/components/registry/ycombinator-com-video-7";
import YcombinatorComBenefit8 from "@/components/registry/ycombinator-com-benefit-8";
import YcombinatorComPrinciples9 from "@/components/registry/ycombinator-com-principles-9";
import YcombinatorComLogoCloud4 from "@/components/registry/ycombinator-com-logo-cloud-4";
import YcombinatorComFeature5 from "@/components/registry/ycombinator-com-feature-5";
import YcombinatorComTestimonial6 from "@/components/registry/ycombinator-com-testimonial-6";
import YcombinatorComShowcase1 from "@/components/registry/ycombinator-com-showcase-1";
import YcombinatorComCta2 from "@/components/registry/ycombinator-com-cta-2";
import YcombinatorComFooter3 from "@/components/registry/ycombinator-com-footer-3";

interface YcombinatorComLandingProps {
  mode?: "light" | "dark";
}

/**
 * ycombinator-com-landing - Full page component
 *
 * This page combines the following sections:
 * - ycombinator-com-hero-0
 * - ycombinator-com-video-7
 * - ycombinator-com-benefit-8
 * - ycombinator-com-principles-9
 * - ycombinator-com-logo-cloud-4
 * - ycombinator-com-feature-5
 * - ycombinator-com-testimonial-6
 * - ycombinator-com-showcase-1
 * - ycombinator-com-cta-2
 * - ycombinator-com-footer-3
 */
export default function YcombinatorComLanding({ mode = "light" }: YcombinatorComLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <YcombinatorComHero0 mode={mode} />
        <YcombinatorComVideo7 mode={mode} />
        <YcombinatorComBenefit8 mode={mode} />
        <YcombinatorComPrinciples9 mode={mode} />
        <YcombinatorComLogoCloud4 mode={mode} />
        <YcombinatorComFeature5 mode={mode} />
        <YcombinatorComTestimonial6 mode={mode} />
        <YcombinatorComShowcase1 mode={mode} />
        <YcombinatorComCta2 mode={mode} />
        <YcombinatorComFooter3 mode={mode} />
    </div>
  );
}
