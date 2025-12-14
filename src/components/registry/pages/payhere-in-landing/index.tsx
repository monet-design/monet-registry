"use client";

import PayhereInHero0 from "@/components/registry/payhere-in-hero-0";
import PayhereInFeature1 from "@/components/registry/payhere-in-feature-1";
import PayhereInFeature2 from "@/components/registry/payhere-in-feature-2";
import PayhereInFeature3 from "@/components/registry/payhere-in-feature-3";

interface PayhereInLandingProps {
  mode?: "light" | "dark";
}

/**
 * payhere-in-landing - Full page component
 *
 * This page combines the following sections:
 * - payhere-in-hero-0
 * - payhere-in-feature-1
 * - payhere-in-feature-2
 * - payhere-in-feature-3
 */
export default function PayhereInLanding({ mode = "light" }: PayhereInLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <PayhereInHero0 mode={mode} />
        <PayhereInFeature1 mode={mode} />
        <PayhereInFeature2 mode={mode} />
        <PayhereInFeature3 mode={mode} />
    </div>
  );
}
