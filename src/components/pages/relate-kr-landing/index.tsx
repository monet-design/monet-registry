"use client";

import RelateKrHeader0 from "@/components/registry/relate-kr-header-0";
import RelateKrHero1 from "@/components/registry/relate-kr-hero-1";
import RelateKrFeature2 from "@/components/registry/relate-kr-feature-2";
import RelateKrFeature3 from "@/components/registry/relate-kr-feature-3";
import RelateKrFeature4 from "@/components/registry/relate-kr-feature-4";
import RelateKrFeature5 from "@/components/registry/relate-kr-feature-5";
import RelateKrFeature6 from "@/components/registry/relate-kr-feature-6";
import RelateKrFeature7 from "@/components/registry/relate-kr-feature-7";
import RelateKrTestimonial8 from "@/components/registry/relate-kr-testimonial-8";
import RelateKrFooter9 from "@/components/registry/relate-kr-footer-9";

interface RelateKrLandingProps {
  mode?: "light" | "dark";
}

/**
 * relate-kr-landing - Full page component
 *
 * This page combines the following sections:
 * - relate-kr-header-0
 * - relate-kr-hero-1
 * - relate-kr-feature-2
 * - relate-kr-feature-3
 * - relate-kr-feature-4
 * - relate-kr-feature-5
 * - relate-kr-feature-6
 * - relate-kr-feature-7
 * - relate-kr-testimonial-8
 * - relate-kr-footer-9
 */
export default function RelateKrLanding({ mode = "light" }: RelateKrLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <RelateKrHeader0 mode={mode} />
        <RelateKrHero1 mode={mode} />
        <RelateKrFeature2 mode={mode} />
        <RelateKrFeature3 mode={mode} />
        <RelateKrFeature4 mode={mode} />
        <RelateKrFeature5 mode={mode} />
        <RelateKrFeature6 mode={mode} />
        <RelateKrFeature7 mode={mode} />
        <RelateKrTestimonial8 mode={mode} />
        <RelateKrFooter9 mode={mode} />
    </div>
  );
}
