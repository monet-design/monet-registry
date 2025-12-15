"use client";

import WhattimeHero0 from "@/components/registry/whattime-hero-0";
import WhattimeLogoCloud1 from "@/components/registry/whattime-logo-cloud-1";
import WhattimeHowItWorks2 from "@/components/registry/whattime-how-it-works-2";
import WhattimeStats3 from "@/components/registry/whattime-stats-3";
import WhattimeTestimonial4 from "@/components/registry/whattime-testimonial-4";
import WhattimeFeatureMeeting5 from "@/components/registry/whattime-feature-meeting-5";
import WhattimeFeatureInterview6 from "@/components/registry/whattime-feature-interview-6";
import WhattimeFeatureSecurity7 from "@/components/registry/whattime-feature-security-7";
import WhattimeFeatureIntegration8 from "@/components/registry/whattime-feature-integration-8";
import WhattimeCta9 from "@/components/registry/whattime-cta-9";
import WhattimeFooter10 from "@/components/registry/whattime-footer-10";

interface WhattimeLandingProps {
  mode?: "light" | "dark";
}

/**
 * whattime-landing - Full page component
 *
 * This page combines the following sections:
 * - whattime-hero-0
 * - whattime-logo-cloud-1
 * - whattime-how-it-works-2
 * - whattime-stats-3
 * - whattime-testimonial-4
 * - whattime-feature-meeting-5
 * - whattime-feature-interview-6
 * - whattime-feature-security-7
 * - whattime-feature-integration-8
 * - whattime-cta-9
 * - whattime-footer-10
 */
export default function WhattimeLanding({ mode = "light" }: WhattimeLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <WhattimeHero0 mode={mode} />
        <WhattimeLogoCloud1 mode={mode} />
        <WhattimeHowItWorks2 mode={mode} />
        <WhattimeStats3 mode={mode} />
        <WhattimeTestimonial4 mode={mode} />
        <WhattimeFeatureMeeting5 mode={mode} />
        <WhattimeFeatureInterview6 mode={mode} />
        <WhattimeFeatureSecurity7 mode={mode} />
        <WhattimeFeatureIntegration8 mode={mode} />
        <WhattimeCta9 mode={mode} />
        <WhattimeFooter10 mode={mode} />
    </div>
  );
}
