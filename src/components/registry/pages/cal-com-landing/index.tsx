"use client";

import CalComHero0 from "@/components/registry/cal-com-hero-0";

interface CalComLandingProps {
  mode?: "light" | "dark";
}

/**
 * cal-com-landing - Full page component
 *
 * This page combines the following sections:
 * - cal-com-hero-0
 */
export default function CalComLanding({ mode = "light" }: CalComLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <CalComHero0 mode={mode} />
    </div>
  );
}
