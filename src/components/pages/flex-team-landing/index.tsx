"use client";

import FlexTeamHero0 from "@/components/registry/flex-team-hero-0";
import FlexTeamLogoBar1 from "@/components/registry/flex-team-logo-bar-1";
import FlexTeamFeature2 from "@/components/registry/flex-team-feature-2";
import FlexTeamFeature3 from "@/components/registry/flex-team-feature-3";
import FlexTeamFeature4 from "@/components/registry/flex-team-feature-4";
import FlexTeamFeature5 from "@/components/registry/flex-team-feature-5";
import FlexTeamFeature6 from "@/components/registry/flex-team-feature-6";
import FlexTeamFooter7 from "@/components/registry/flex-team-footer-7";

interface FlexTeamLandingProps {
  mode?: "light" | "dark";
}

/**
 * flex-team-landing - Full page component
 *
 * This page combines the following sections:
 * - flex-team-hero-0
 * - flex-team-logo-bar-1
 * - flex-team-feature-2
 * - flex-team-feature-3
 * - flex-team-feature-4
 * - flex-team-feature-5
 * - flex-team-feature-6
 * - flex-team-footer-7
 */
export default function FlexTeamLanding({ mode = "light" }: FlexTeamLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <FlexTeamHero0 mode={mode} />
        <FlexTeamLogoBar1 mode={mode} />
        <FlexTeamFeature2 mode={mode} />
        <FlexTeamFeature3 mode={mode} />
        <FlexTeamFeature4 mode={mode} />
        <FlexTeamFeature5 mode={mode} />
        <FlexTeamFeature6 mode={mode} />
        <FlexTeamFooter7 mode={mode} />
    </div>
  );
}
