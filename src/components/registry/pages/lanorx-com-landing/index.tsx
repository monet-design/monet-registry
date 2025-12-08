"use client";

import LanorxComHero0 from "@/components/registry/lanorx-com-hero-0";
import LanorxComFeature1 from "@/components/registry/lanorx-com-feature-1";
import LanorxComHowItWorks2 from "@/components/registry/lanorx-com-how-it-works-2";
import LanorxComFeature3 from "@/components/registry/lanorx-com-feature-3";
import LanorxComFeature4 from "@/components/registry/lanorx-com-feature-4";
import LanorxComTestimonial5 from "@/components/registry/lanorx-com-testimonial-5";
import LanorxComCta6 from "@/components/registry/lanorx-com-cta-6";
import LanorxComFooter7 from "@/components/registry/lanorx-com-footer-7";

interface LanorxComLandingProps {
  mode?: "light" | "dark";
}

/**
 * lanorx-com-landing - Full page component
 *
 * This page combines the following sections:
 * - lanorx-com-hero-0
 * - lanorx-com-feature-1
 * - lanorx-com-how-it-works-2
 * - lanorx-com-feature-3
 * - lanorx-com-feature-4
 * - lanorx-com-testimonial-5
 * - lanorx-com-cta-6
 * - lanorx-com-footer-7
 */
export default function LanorxComLanding({ mode = "light" }: LanorxComLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <LanorxComHero0 mode={mode} />
        <LanorxComFeature1 mode={mode} />
        <LanorxComHowItWorks2 mode={mode} />
        <LanorxComFeature3 mode={mode} />
        <LanorxComFeature4 mode={mode} />
        <LanorxComTestimonial5 mode={mode} />
        <LanorxComCta6 mode={mode} />
        <LanorxComFooter7 mode={mode} />
    </div>
  );
}
