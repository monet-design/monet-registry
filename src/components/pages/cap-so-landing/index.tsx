"use client";

import CapSoHeader0 from "@/components/registry/cap-so-header-0";
import CapSoHero1 from "@/components/registry/cap-so-hero-1";
import CapSoFeature2 from "@/components/registry/cap-so-feature-2";
import CapSoFeature3 from "@/components/registry/cap-so-feature-3";
import CapSoTestimonial4 from "@/components/registry/cap-so-testimonial-4";
import CapSoPricing5 from "@/components/registry/cap-so-pricing-5";
import CapSoFaq6 from "@/components/registry/cap-so-faq-6";
import CapSoScrollText from "@/components/registry/cap-so-scroll-text";
import CapSoCta7 from "@/components/registry/cap-so-cta-7";
import CapSoFooter8 from "@/components/registry/cap-so-footer-8";

interface CapSoLandingProps {
  mode?: "light" | "dark";
}

/**
 * cap-so-landing - Full page component
 *
 * This page combines the following sections:
 * - cap-so-header-0
 * - cap-so-hero-1
 * - cap-so-feature-2
 * - cap-so-feature-3
 * - cap-so-testimonial-4
 * - cap-so-pricing-5
 * - cap-so-faq-6
 * - cap-so-scroll-text
 * - cap-so-cta-7
 * - cap-so-footer-8
 */
export default function CapSoLanding({ mode = "light" }: CapSoLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <CapSoHeader0 mode={mode} />
        <CapSoHero1 mode={mode} />
        <CapSoFeature2 mode={mode} />
        <CapSoFeature3 mode={mode} />
        <CapSoTestimonial4 mode={mode} />
        <CapSoPricing5 mode={mode} />
        <CapSoFaq6 mode={mode} />
        <CapSoScrollText mode={mode} />
        <CapSoCta7 mode={mode} />
        <CapSoFooter8 mode={mode} />
    </div>
  );
}
