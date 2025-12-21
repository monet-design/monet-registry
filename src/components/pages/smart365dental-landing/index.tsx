"use client";

import Smart365dentalHero1 from "@/components/registry/smart365dental-hero-1";
import Smart365dentalTeam2 from "@/components/registry/smart365dental-team-2";
import Smart365dentalServices3 from "@/components/registry/smart365dental-services-3";
import Smart365dentalBeforeAfter4 from "@/components/registry/smart365dental-before-after-4";
import Smart365dentalConsultation5 from "@/components/registry/smart365dental-consultation-5";
import Smart365dentalLocation6 from "@/components/registry/smart365dental-location-6";

interface Smart365dentalLandingProps {
  mode?: "light" | "dark";
}

/**
 * smart365dental-landing - Full page component
 *
 * This page combines the following sections:
 * - smart365dental-hero-1
 * - smart365dental-team-2
 * - smart365dental-services-3
 * - smart365dental-before-after-4
 * - smart365dental-consultation-5
 * - smart365dental-location-6
 */
export default function Smart365dentalLanding({ mode = "light" }: Smart365dentalLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <Smart365dentalHero1 mode={mode} />
        <Smart365dentalTeam2 mode={mode} />
        <Smart365dentalServices3 mode={mode} />
        <Smart365dentalBeforeAfter4 mode={mode} />
        <Smart365dentalConsultation5 mode={mode} />
        <Smart365dentalLocation6 mode={mode} />
    </div>
  );
}
