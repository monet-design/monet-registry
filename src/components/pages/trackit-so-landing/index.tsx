"use client";

import TrackitSoHeader0 from "@/components/registry/trackit-so-header-0";
import TrackitSoHero0 from "@/components/registry/trackit-so-hero-0";
import TrackitSoLogoCloud1 from "@/components/registry/trackit-so-logo-cloud-1";
import TrackitSoFeature2 from "@/components/registry/trackit-so-feature-2";
import TrackitSoFeature3 from "@/components/registry/trackit-so-feature-3";
import TrackitSoFeature4 from "@/components/registry/trackit-so-feature-4";
import TrackitSoFeature5 from "@/components/registry/trackit-so-feature-5";
import TrackitSoFeature6 from "@/components/registry/trackit-so-feature-6";
import TrackitSoFaq7 from "@/components/registry/trackit-so-faq-7";
import TrackitSoCta8 from "@/components/registry/trackit-so-cta-8";
import TrackitSoFooter9 from "@/components/registry/trackit-so-footer-9";

interface TrackitSoLandingProps {
  mode?: "light" | "dark";
}

/**
 * trackit-so-landing - Full page component
 *
 * This page combines the following sections:
 * - trackit-so-header-0
 * - trackit-so-hero-0
 * - trackit-so-logo-cloud-1
 * - trackit-so-feature-2
 * - trackit-so-feature-3
 * - trackit-so-feature-4
 * - trackit-so-feature-5
 * - trackit-so-feature-6
 * - trackit-so-faq-7
 * - trackit-so-cta-8
 * - trackit-so-footer-9
 */
export default function TrackitSoLanding({ mode = "light" }: TrackitSoLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <TrackitSoHeader0 mode={mode} />
        <TrackitSoHero0 mode={mode} />
        <TrackitSoLogoCloud1 mode={mode} />
        <TrackitSoFeature2 mode={mode} />
        <TrackitSoFeature3 mode={mode} />
        <TrackitSoFeature4 mode={mode} />
        <TrackitSoFeature5 mode={mode} />
        <TrackitSoFeature6 mode={mode} />
        <TrackitSoFaq7 mode={mode} />
        <TrackitSoCta8 mode={mode} />
        <TrackitSoFooter9 mode={mode} />
    </div>
  );
}
