"use client";

import GreetinghrHeader from "@/components/registry/greetinghr-header";
import GreetinghrHero0 from "@/components/registry/greetinghr-hero-0";
import GreetinghrLogoCloud1 from "@/components/registry/greetinghr-logo-cloud-1";
import GreetinghrCta2 from "@/components/registry/greetinghr-cta-2";
import GreetinghrFeature3 from "@/components/registry/greetinghr-feature-3";
import GreetinghrFeature4 from "@/components/registry/greetinghr-feature-4";
import GreetinghrFeature5 from "@/components/registry/greetinghr-feature-5";
import GreetinghrFooter from "@/components/registry/greetinghr-footer";

interface GreetinghrLandingProps {
  mode?: "light" | "dark";
}

/**
 * greetinghr-landing - Full page component
 *
 * This page combines the following sections:
 * - greetinghr-header
 * - greetinghr-hero-0
 * - greetinghr-logo-cloud-1
 * - greetinghr-cta-2
 * - greetinghr-feature-3
 * - greetinghr-feature-4
 * - greetinghr-feature-5
 * - greetinghr-footer
 */
export default function GreetinghrLanding({ mode = "light" }: GreetinghrLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <GreetinghrHeader mode={mode} />
        <GreetinghrHero0 mode={mode} />
        <GreetinghrLogoCloud1 />
        <GreetinghrCta2 mode={mode} />
        <GreetinghrFeature3 mode={mode} />
        <GreetinghrFeature4 mode={mode} />
        <GreetinghrFeature5 mode={mode} />
        <GreetinghrFooter mode={mode} />
    </div>
  );
}
