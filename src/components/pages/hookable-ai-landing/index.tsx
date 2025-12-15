"use client";

import HookableAiHeader from "@/components/registry/hookable-ai-header";
import HookableAiHero0 from "@/components/registry/hookable-ai-hero-0";
import HookableAiLogoCloud1 from "@/components/registry/hookable-ai-logo-cloud-1";
import HookableAiFeature2 from "@/components/registry/hookable-ai-feature-2";
import HookableAiCta3 from "@/components/registry/hookable-ai-cta-3";
import HookableAiTestimonial4 from "@/components/registry/hookable-ai-testimonial-4";
import HookableAiPricing5 from "@/components/registry/hookable-ai-pricing-5";
import HookableAiFeature6 from "@/components/registry/hookable-ai-feature-6";
import HookableAiContact7 from "@/components/registry/hookable-ai-contact-7";
import HookableAiFaq8 from "@/components/registry/hookable-ai-faq-8";
import HookableAiFooter from "@/components/registry/hookable-ai-footer";

interface HookableAiLandingProps {
  mode?: "light" | "dark";
}

/**
 * hookable-ai-landing - Full page component
 *
 * This page combines the following sections:
 * - hookable-ai-header
 * - hookable-ai-hero-0
 * - hookable-ai-logo-cloud-1
 * - hookable-ai-feature-2
 * - hookable-ai-cta-3
 * - hookable-ai-testimonial-4
 * - hookable-ai-pricing-5
 * - hookable-ai-feature-6
 * - hookable-ai-contact-7
 * - hookable-ai-faq-8
 * - hookable-ai-footer
 */
export default function HookableAiLanding({ mode = "light" }: HookableAiLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <HookableAiHeader mode={mode} />
        <HookableAiHero0 mode={mode} />
        <HookableAiLogoCloud1 mode={mode} />
        <HookableAiFeature2 mode={mode} />
        <HookableAiCta3 mode={mode} />
        <HookableAiTestimonial4 mode={mode} />
        <HookableAiPricing5 mode={mode} />
        <HookableAiFeature6 />
        <HookableAiContact7 mode={mode} />
        <HookableAiFaq8 />
        <HookableAiFooter />
    </div>
  );
}
