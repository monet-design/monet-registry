"use client";

import LoadfastStoreHeader from "@/components/registry/loadfast-store-header";
import LoadfastStoreHero0 from "@/components/registry/loadfast-store-hero-0";
import LoadfastStoreProblem1 from "@/components/registry/loadfast-store-problem-1";
import LoadfastStoreRoi2 from "@/components/registry/loadfast-store-roi-2";
import LoadfastStoreFeature3 from "@/components/registry/loadfast-store-feature-3";
import LoadfastStoreComparison4 from "@/components/registry/loadfast-store-comparison-4";
import LoadfastStoreSolutions5 from "@/components/registry/loadfast-store-solutions-5";
import LoadfastStoreJourney6 from "@/components/registry/loadfast-store-journey-6";
import LoadfastStorePricing7 from "@/components/registry/loadfast-store-pricing-7";
import LoadfastStoreDemo8 from "@/components/registry/loadfast-store-demo-8";
import LoadfastStoreFaq9 from "@/components/registry/loadfast-store-faq-9";

interface LoadfastStoreLandingProps {
  mode?: "light" | "dark";
}

/**
 * loadfast-store-landing - Full page component
 *
 * This page combines the following sections:
 * - loadfast-store-header
 * - loadfast-store-hero-0
 * - loadfast-store-problem-1
 * - loadfast-store-roi-2
 * - loadfast-store-feature-3
 * - loadfast-store-comparison-4
 * - loadfast-store-solutions-5
 * - loadfast-store-journey-6
 * - loadfast-store-pricing-7
 * - loadfast-store-demo-8
 * - loadfast-store-faq-9
 */
export default function LoadfastStoreLanding({ mode = "light" }: LoadfastStoreLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <LoadfastStoreHeader mode={mode} />
        <LoadfastStoreHero0 mode={mode} />
        <LoadfastStoreProblem1 mode={mode} />
        <LoadfastStoreRoi2 mode={mode} />
        <LoadfastStoreFeature3 mode={mode} />
        <LoadfastStoreComparison4 mode={mode} />
        <LoadfastStoreSolutions5 mode={mode} />
        <LoadfastStoreJourney6 mode={mode} />
        <LoadfastStorePricing7 mode={mode} />
        <LoadfastStoreDemo8 mode={mode} />
        <LoadfastStoreFaq9 mode={mode} />
    </div>
  );
}
