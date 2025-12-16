"use client";

import AntlerCoHeader0 from "@/components/registry/antler-co-header-0";
import AntlerCoHero0 from "@/components/registry/antler-co-hero-0";
import AntlerCoFeature1 from "@/components/registry/antler-co-feature-1";
import AntlerCoHowItWorks2 from "@/components/registry/antler-co-how-it-works-2";
import AntlerCoTestimonial3 from "@/components/registry/antler-co-testimonial-3";
import AntlerCoFeature4 from "@/components/registry/antler-co-feature-4";
import AntlerCoShowcase5 from "@/components/registry/antler-co-showcase-5";
import AntlerCoFeature6 from "@/components/registry/antler-co-feature-6";
import AntlerCoShowcase7 from "@/components/registry/antler-co-showcase-7";
import AntlerCoFeature8 from "@/components/registry/antler-co-feature-8";
import AntlerCoCta9 from "@/components/registry/antler-co-cta-9";
import AntlerCoFooter10 from "@/components/registry/antler-co-footer-10";

interface AntlerCoLandingProps {
  mode?: "light" | "dark";
}

/**
 * antler-co-landing - Full page component
 *
 * This page combines the following sections:
 * - antler-co-header-0
 * - antler-co-hero-0
 * - antler-co-feature-1
 * - antler-co-how-it-works-2
 * - antler-co-testimonial-3
 * - antler-co-feature-4
 * - antler-co-showcase-5
 * - antler-co-feature-6
 * - antler-co-showcase-7
 * - antler-co-feature-8
 * - antler-co-cta-9
 * - antler-co-footer-10
 */
export default function AntlerCoLanding({ mode = "light" }: AntlerCoLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <AntlerCoHeader0 mode={mode} />
        <AntlerCoHero0 mode={mode} />
        <AntlerCoFeature1 mode={mode} />
        <AntlerCoHowItWorks2 mode={mode} />
        <AntlerCoTestimonial3 mode={mode} />
        <AntlerCoFeature4 mode={mode} />
        <AntlerCoShowcase5 mode={mode} />
        <AntlerCoFeature6 mode={mode} />
        <AntlerCoShowcase7 mode={mode} />
        <AntlerCoFeature8 mode={mode} />
        <AntlerCoCta9 mode={mode} />
        <AntlerCoFooter10 mode={mode} />
    </div>
  );
}
