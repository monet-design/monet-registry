"use client";

import CodefaStHeader from "@/components/registry/codefa-st-header";
import CodefaStHero0 from "@/components/registry/codefa-st-hero-0";
import CodefaStFeature1 from "@/components/registry/codefa-st-feature-1";
import CodefaStHowItWorks2 from "@/components/registry/codefa-st-how-it-works-2";
import CodefaStFeature4 from "@/components/registry/codefa-st-feature-4";
import CodefaStFeature6 from "@/components/registry/codefa-st-feature-6";
import CodefaStFeature8 from "@/components/registry/codefa-st-feature-8";
import CodefaStPricing10 from "@/components/registry/codefa-st-pricing-10";
import CodefaStFaq12 from "@/components/registry/codefa-st-faq-12";
import CodefaStTestimonial13 from "@/components/registry/codefa-st-testimonial-13";
import CodefaStCta14 from "@/components/registry/codefa-st-cta-14";
import CodefaStFooter16 from "@/components/registry/codefa-st-footer-16";

interface CodefaStLandingProps {
  mode?: "light" | "dark";
}

/**
 * codefa-st-landing - Full page component
 *
 * This page combines the following sections:
 * - codefa-st-header
 * - codefa-st-hero-0
 * - codefa-st-feature-1
 * - codefa-st-how-it-works-2
 * - codefa-st-feature-4
 * - codefa-st-feature-6
 * - codefa-st-feature-8
 * - codefa-st-pricing-10
 * - codefa-st-faq-12
 * - codefa-st-testimonial-13
 * - codefa-st-cta-14
 * - codefa-st-footer-16
 */
export default function CodefaStLanding({ mode = "light" }: CodefaStLandingProps) {
  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
        <CodefaStHeader mode={mode} />
        <CodefaStHero0 mode={mode} />
        <CodefaStFeature1 />
        <CodefaStHowItWorks2 mode={mode} />
        <CodefaStFeature4 mode={mode} />
        <CodefaStFeature6 mode={mode} />
        <CodefaStFeature8 mode={mode} />
        <CodefaStPricing10 mode={mode} />
        <CodefaStFaq12 mode={mode} />
        <CodefaStTestimonial13 mode={mode} />
        <CodefaStCta14 mode={mode} />
        <CodefaStFooter16 mode={mode} />
    </div>
  );
}
