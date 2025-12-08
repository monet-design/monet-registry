"use client";

import DatafaStHeader from "@/components/registry/datafa-st-header";
import DatafaStHero0 from "@/components/registry/datafa-st-hero-0";
import DatafaStSocialProof1 from "@/components/registry/datafa-st-social-proof-1";
import DatafaStHowItWorks2 from "@/components/registry/datafa-st-how-it-works-2";
import DatafaStTestimonial3 from "@/components/registry/datafa-st-testimonial-3";
import DatafaStFeature4 from "@/components/registry/datafa-st-feature-4";
import DatafaStLogoCloud5 from "@/components/registry/datafa-st-logo-cloud-5";
import DatafaStBiography6 from "@/components/registry/datafa-st-biography-6";
import DatafaStPricing8 from "@/components/registry/datafa-st-pricing-8";
import DatafaStFaq9 from "@/components/registry/datafa-st-faq-9";
import DatafaStCta11 from "@/components/registry/datafa-st-cta-11";
import DatafaStFooter12 from "@/components/registry/datafa-st-footer-12";

interface DatafaStLandingProps {
  mode?: "light" | "dark";
}

/**
 * datafa-st-landing - Full page component
 *
 * This page combines the following sections:
 * - datafa-st-header
 * - datafa-st-hero-0
 * - datafa-st-social-proof-1
 * - datafa-st-how-it-works-2
 * - datafa-st-testimonial-3
 * - datafa-st-feature-4
 * - datafa-st-logo-cloud-5
 * - datafa-st-biography-6
 * - datafa-st-pricing-8
 * - datafa-st-faq-9
 * - datafa-st-cta-11
 * - datafa-st-footer-12
 */
export default function DatafaStLanding({ mode = "dark" }: DatafaStLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <DatafaStHeader mode={mode} />
        <DatafaStHero0 mode={mode} />
        <DatafaStSocialProof1 mode={mode} />
        <DatafaStHowItWorks2 mode={mode} />
        <DatafaStTestimonial3 mode={mode} />
        <DatafaStFeature4 mode={mode} />
        <DatafaStLogoCloud5 mode={mode} />
        <DatafaStBiography6 mode={mode} />
        <DatafaStPricing8 mode={mode} />
        <DatafaStFaq9 mode={mode} />
        <DatafaStCta11 mode={mode} />
        <DatafaStFooter12 mode={mode} />
    </div>
  );
}
