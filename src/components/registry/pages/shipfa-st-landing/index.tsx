"use client";

import ShipfaStHeader from "@/components/registry/shipfa-st-header";
import ShipfaStHero0 from "@/components/registry/shipfa-st-hero-0";
import ShipfaStTestimonial1 from "@/components/registry/shipfa-st-testimonial-1";
import ShipfaStStats2 from "@/components/registry/shipfa-st-stats-2";
import ShipfaStFeature3 from "@/components/registry/shipfa-st-feature-3";
import ShipfaStLogoCloud4 from "@/components/registry/shipfa-st-logo-cloud-4";
import ShipfaStShowcase5 from "@/components/registry/shipfa-st-showcase-5";
import ShipfaStPricing6 from "@/components/registry/shipfa-st-pricing-6";
import ShipfaStFaq7 from "@/components/registry/shipfa-st-faq-7";
import ShipfaStTestimonial8 from "@/components/registry/shipfa-st-testimonial-8";
import ShipfaStFooter10 from "@/components/registry/shipfa-st-footer-10";

interface ShipfaStLandingProps {
  mode?: "light" | "dark";
}

/**
 * shipfa-st-landing - Full page component
 *
 * This page combines the following sections:
 * - shipfa-st-header
 * - shipfa-st-hero-0
 * - shipfa-st-testimonial-1
 * - shipfa-st-stats-2
 * - shipfa-st-feature-3
 * - shipfa-st-logo-cloud-4
 * - shipfa-st-showcase-5
 * - shipfa-st-pricing-6
 * - shipfa-st-faq-7
 * - shipfa-st-testimonial-8
 * - shipfa-st-footer-10
 */
export default function ShipfaStLanding({
  mode = "dark",
}: ShipfaStLandingProps) {
  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: "#1D232A" }}>
      <ShipfaStHeader mode={mode} />
      <ShipfaStHero0 mode={mode} />
      <ShipfaStTestimonial1 mode={mode} />
      <ShipfaStStats2 mode={mode} />
      <ShipfaStFeature3 mode={mode} />
      <ShipfaStLogoCloud4 mode={mode} />
      <ShipfaStShowcase5 mode={mode} />
      <ShipfaStPricing6 mode={mode} />
      <ShipfaStFaq7 mode={mode} />
      <ShipfaStTestimonial8 mode={mode} />
      <ShipfaStFooter10 mode={mode} />
    </div>
  );
}
