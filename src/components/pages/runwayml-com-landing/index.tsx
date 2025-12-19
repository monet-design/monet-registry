"use client";

import RunwaymlComHero0 from "@/components/registry/runwayml-com-hero-0";
import RunwaymlComLogoCloud1 from "@/components/registry/runwayml-com-logo-cloud-1";
import RunwaymlComFeature2 from "@/components/registry/runwayml-com-feature-2";
import RunwaymlComFeature3 from "@/components/registry/runwayml-com-feature-3";
import RunwaymlComFeature4 from "@/components/registry/runwayml-com-feature-4";
import RunwaymlComTestimonial5 from "@/components/registry/runwayml-com-testimonial-5";
import RunwaymlComCta6 from "@/components/registry/runwayml-com-cta-6";
import RunwaymlComFooter7 from "@/components/registry/runwayml-com-footer-7";

interface RunwaymlComLandingProps {
  mode?: "light" | "dark";
}

/**
 * runwayml-com-landing - Full page component
 *
 * This page combines the following sections:
 * - runwayml-com-hero-0
 * - runwayml-com-logo-cloud-1
 * - runwayml-com-feature-2
 * - runwayml-com-feature-3
 * - runwayml-com-feature-4
 * - runwayml-com-testimonial-5
 * - runwayml-com-cta-6
 * - runwayml-com-footer-7
 */
export default function RunwaymlComLanding({ mode = "light" }: RunwaymlComLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <RunwaymlComHero0 mode={mode} />
        <RunwaymlComLogoCloud1 mode={mode} />
        <RunwaymlComFeature2 mode={mode} />
        <RunwaymlComFeature3 mode={mode} />
        <RunwaymlComFeature4 mode={mode} />
        <RunwaymlComTestimonial5 mode={mode} />
        <RunwaymlComCta6 mode={mode} />
        <RunwaymlComFooter7 mode={mode} />
    </div>
  );
}
