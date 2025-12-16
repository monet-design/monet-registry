"use client";

import LoopsSoHeader0 from "@/components/registry/loops-so-header-0";
import LoopsSoHero0 from "@/components/registry/loops-so-hero-0";
import LoopsSoFeature1 from "@/components/registry/loops-so-feature-1";
import LoopsSoFeature2 from "@/components/registry/loops-so-feature-2";
import LoopsSoFeature3 from "@/components/registry/loops-so-feature-3";
import LoopsSoFeature4 from "@/components/registry/loops-so-feature-4";
import LoopsSoCta5 from "@/components/registry/loops-so-cta-5";
import LoopsSoFooter6 from "@/components/registry/loops-so-footer-6";

interface LoopsSoLandingProps {
  mode?: "light" | "dark";
}

/**
 * loops-so-landing - Full page component
 *
 * This page combines the following sections:
 * - loops-so-header-0
 * - loops-so-hero-0
 * - loops-so-feature-1
 * - loops-so-feature-2
 * - loops-so-feature-3
 * - loops-so-feature-4
 * - loops-so-cta-5
 * - loops-so-footer-6
 */
export default function LoopsSoLanding({ mode = "light" }: LoopsSoLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <LoopsSoHeader0 mode={mode} />
        <LoopsSoHero0 mode={mode} />
        <LoopsSoFeature1 mode={mode} />
        <LoopsSoFeature2 mode={mode} />
        <LoopsSoFeature3 mode={mode} />
        <LoopsSoFeature4 mode={mode} />
        <LoopsSoCta5 mode={mode} />
        <LoopsSoFooter6 mode={mode} />
    </div>
  );
}
