"use client";

import BoltaIoHeader0 from "@/components/registry/bolta-io-header-0";
import BoltaIoHero1 from "@/components/registry/bolta-io-hero-1";
import BoltaIoTestimonial2 from "@/components/registry/bolta-io-testimonial-2";
import BoltaIoFeature3 from "@/components/registry/bolta-io-feature-3";
import BoltaIoStats4 from "@/components/registry/bolta-io-stats-4";
import BoltaIoCta5 from "@/components/registry/bolta-io-cta-5";
import BoltaIoTrust6 from "@/components/registry/bolta-io-trust-6";
import BoltaIoFaq7 from "@/components/registry/bolta-io-faq-7";
import BoltaIoFooter8 from "@/components/registry/bolta-io-footer-8";

interface BoltaIoLandingProps {
  mode?: "light" | "dark";
}

/**
 * bolta-io-landing - Full page component
 *
 * This page combines the following sections:
 * - bolta-io-header-0
 * - bolta-io-hero-1
 * - bolta-io-testimonial-2
 * - bolta-io-feature-3
 * - bolta-io-stats-4
 * - bolta-io-cta-5
 * - bolta-io-trust-6
 * - bolta-io-faq-7
 * - bolta-io-footer-8
 */
export default function BoltaIoLanding({ mode = "light" }: BoltaIoLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <BoltaIoHeader0 mode={mode} />
        <BoltaIoHero1 mode={mode} />
        <BoltaIoTestimonial2 mode={mode} />
        <BoltaIoFeature3 mode={mode} />
        <BoltaIoStats4 mode={mode} />
        <BoltaIoCta5 mode={mode} />
        <BoltaIoTrust6 mode={mode} />
        <BoltaIoFaq7 mode={mode} />
        <BoltaIoFooter8 mode={mode} />
    </div>
  );
}
