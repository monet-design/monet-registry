"use client";

import ConductorBuildHeader0 from "@/components/registry/conductor-build-header-0";
import ConductorBuildHero1 from "@/components/registry/conductor-build-hero-1";
import ConductorBuildTestimonial2 from "@/components/registry/conductor-build-testimonial-2";
import ConductorBuildHowItWorks3 from "@/components/registry/conductor-build-how-it-works-3";
import ConductorBuildFaq4 from "@/components/registry/conductor-build-faq-4";
import ConductorBuildFooter5 from "@/components/registry/conductor-build-footer-5";

interface ConductorBuildLandingProps {
  mode?: "light" | "dark";
}

/**
 * conductor-build-landing - Full page component
 *
 * This page combines the following sections:
 * - conductor-build-header-0
 * - conductor-build-hero-1
 * - conductor-build-testimonial-2
 * - conductor-build-how-it-works-3
 * - conductor-build-faq-4
 * - conductor-build-footer-5
 */
export default function ConductorBuildLanding({ mode = "dark" }: ConductorBuildLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <ConductorBuildHeader0 mode={mode} />
        <ConductorBuildHero1 mode={mode} />
        <ConductorBuildTestimonial2 mode={mode} />
        <ConductorBuildHowItWorks3 mode={mode} />
        <ConductorBuildFaq4 mode={mode} />
        <ConductorBuildFooter5 mode={mode} />
    </div>
  );
}
