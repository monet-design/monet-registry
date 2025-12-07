"use client";

import SuperbillingIoHeader from "@/components/registry/superbilling-io-header";
import SuperbillingIoHero0 from "@/components/registry/superbilling-io-hero-0";
import SuperbillingIoHowItWorks1 from "@/components/registry/superbilling-io-how-it-works-1";
import SuperbillingIoFeature2 from "@/components/registry/superbilling-io-feature-2";
import SuperbillingIoFeature3 from "@/components/registry/superbilling-io-feature-3";
import SuperbillingIoFeature4 from "@/components/registry/superbilling-io-feature-4";
import SuperbillingIoFeature5 from "@/components/registry/superbilling-io-feature-5";
import SuperbillingIoPricing6 from "@/components/registry/superbilling-io-pricing-6";
import SuperbillingIoCta7 from "@/components/registry/superbilling-io-cta-7";
import SuperbillingIoFooter8 from "@/components/registry/superbilling-io-footer-8";

interface SuperbillingIoLandingProps {
  mode?: "light" | "dark";
}

/**
 * superbilling-io-landing - Full page component
 *
 * This page combines the following sections:
 * - superbilling-io-header
 * - superbilling-io-hero-0
 * - superbilling-io-how-it-works-1
 * - superbilling-io-feature-2
 * - superbilling-io-feature-3
 * - superbilling-io-feature-4
 * - superbilling-io-feature-5
 * - superbilling-io-pricing-6
 * - superbilling-io-cta-7
 * - superbilling-io-footer-8
 */
export default function SuperbillingIoLanding({ mode = "dark" }: SuperbillingIoLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <SuperbillingIoHeader mode={mode} />
        <SuperbillingIoHero0 mode={mode} />
        <SuperbillingIoHowItWorks1 mode={mode} />
        <SuperbillingIoFeature2 mode={mode} />
        <SuperbillingIoFeature3 mode={mode} />
        <SuperbillingIoFeature4 mode={mode} />
        <SuperbillingIoFeature5 mode={mode} />
        <SuperbillingIoPricing6 mode={mode} />
        <SuperbillingIoCta7 mode={mode} />
        <SuperbillingIoFooter8 mode={mode} />
    </div>
  );
}
