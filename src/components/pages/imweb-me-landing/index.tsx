"use client";

import ImwebMeHero0 from "@/components/registry/imweb-me-hero-0";
import ImwebMeShowcase1 from "@/components/registry/imweb-me-showcase-1";
import ImwebMeTestimonial2 from "@/components/registry/imweb-me-testimonial-2";
import ImwebMeFeature3 from "@/components/registry/imweb-me-feature-3";
import ImwebMeStats6 from "@/components/registry/imweb-me-stats-6";
import ImwebMeCta7 from "@/components/registry/imweb-me-cta-7";
import ImwebMeFooter8 from "@/components/registry/imweb-me-footer-8";

interface ImwebMeLandingProps {
  mode?: "light" | "dark";
}

/**
 * imweb-me-landing - Full page component
 *
 * This page combines the following sections:
 * - imweb-me-hero-0
 * - imweb-me-showcase-1
 * - imweb-me-testimonial-2
 * - imweb-me-feature-3
 * - imweb-me-stats-6
 * - imweb-me-cta-7
 * - imweb-me-footer-8
 */
export default function ImwebMeLanding({ mode = "light" }: ImwebMeLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <ImwebMeHero0 mode={mode} />
        <ImwebMeShowcase1 mode={mode} />
        <ImwebMeTestimonial2 mode={mode} />
        <ImwebMeFeature3 mode={mode} />
        <ImwebMeStats6 mode={mode} />
        <ImwebMeCta7 mode={mode} />
        <ImwebMeFooter8 mode={mode} />
    </div>
  );
}
