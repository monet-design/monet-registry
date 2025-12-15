"use client";

import UserbandComHero0 from "@/components/registry/userband-com-hero-0";
import UserbandComFeature1 from "@/components/registry/userband-com-feature-1";
import UserbandComFeature2 from "@/components/registry/userband-com-feature-2";
import UserbandComFeature3 from "@/components/registry/userband-com-feature-3";
import UserbandComFeature4 from "@/components/registry/userband-com-feature-4";
import UserbandComFeature5 from "@/components/registry/userband-com-feature-5";
import UserbandComFeature6 from "@/components/registry/userband-com-feature-6";
import UserbandComFeature7 from "@/components/registry/userband-com-feature-7";
import UserbandComFaq8 from "@/components/registry/userband-com-faq-8";
import UserbandComCta9 from "@/components/registry/userband-com-cta-9";
import UserbandComFooter10 from "@/components/registry/userband-com-footer-10";

interface UserbandComLandingProps {
  mode?: "light" | "dark";
}

/**
 * userband-com-landing - Full page component
 *
 * This page combines the following sections:
 * - userband-com-hero-0
 * - userband-com-feature-1
 * - userband-com-feature-2
 * - userband-com-feature-3
 * - userband-com-feature-4
 * - userband-com-feature-5
 * - userband-com-feature-6
 * - userband-com-feature-7
 * - userband-com-faq-8
 * - userband-com-cta-9
 * - userband-com-footer-10
 */
export default function UserbandComLanding({ mode = "light" }: UserbandComLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <UserbandComHero0 mode={mode} />
        <UserbandComFeature1 mode={mode} />
        <UserbandComFeature2 mode={mode} />
        <UserbandComFeature3 mode={mode} />
        <UserbandComFeature4 mode={mode} />
        <UserbandComFeature5 mode={mode} />
        <UserbandComFeature6 mode={mode} />
        <UserbandComFeature7 mode={mode} />
        <UserbandComFaq8 mode={mode} />
        <UserbandComCta9 mode={mode} />
        <UserbandComFooter10 mode={mode} />
    </div>
  );
}
