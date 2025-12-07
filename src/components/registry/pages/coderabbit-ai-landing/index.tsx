"use client";

import CoderabbitAiHeader0 from "@/components/registry/coderabbit-ai-header-0";
import CoderabbitAiHero1 from "@/components/registry/coderabbit-ai-hero-1";
import CoderabbitAiLogoCloud2 from "@/components/registry/coderabbit-ai-logo-cloud-2";
import CoderabbitAiFeature3 from "@/components/registry/coderabbit-ai-feature-3";
import CoderabbitAiFeature4 from "@/components/registry/coderabbit-ai-feature-4";
import CoderabbitAiFeature5 from "@/components/registry/coderabbit-ai-feature-5";
import CoderabbitAiFeature6 from "@/components/registry/coderabbit-ai-feature-6";
import CoderabbitAiHowItWorks7 from "@/components/registry/coderabbit-ai-how-it-works-7";
import CoderabbitAiFeature8 from "@/components/registry/coderabbit-ai-feature-8";
import CoderabbitAiCta9 from "@/components/registry/coderabbit-ai-cta-9";
import CoderabbitAiTestimonial10 from "@/components/registry/coderabbit-ai-testimonial-10";
import CoderabbitAiCta11 from "@/components/registry/coderabbit-ai-cta-11";
import CoderabbitAiFooter12 from "@/components/registry/coderabbit-ai-footer-12";

interface CoderabbitAiLandingProps {
  mode?: "light" | "dark";
}

/**
 * coderabbit-ai-landing - Full page component
 *
 * This page combines the following sections:
 * - coderabbit-ai-header-0
 * - coderabbit-ai-hero-1
 * - coderabbit-ai-logo-cloud-2
 * - coderabbit-ai-feature-3
 * - coderabbit-ai-feature-4
 * - coderabbit-ai-feature-5
 * - coderabbit-ai-feature-6
 * - coderabbit-ai-how-it-works-7
 * - coderabbit-ai-feature-8
 * - coderabbit-ai-cta-9
 * - coderabbit-ai-testimonial-10
 * - coderabbit-ai-cta-11
 * - coderabbit-ai-footer-12
 */
export default function CoderabbitAiLanding({ mode = "light" }: CoderabbitAiLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <CoderabbitAiHeader0 mode={mode} />
        <CoderabbitAiHero1 mode={mode} />
        <CoderabbitAiLogoCloud2 mode={mode} />
        <CoderabbitAiFeature3 mode={mode} />
        <CoderabbitAiFeature4 mode={mode} />
        <CoderabbitAiFeature5 mode={mode} />
        <CoderabbitAiFeature6 mode={mode} />
        <CoderabbitAiHowItWorks7 mode={mode} />
        <CoderabbitAiFeature8 mode={mode} />
        <CoderabbitAiCta9 mode={mode} />
        <CoderabbitAiTestimonial10 mode={mode} />
        <CoderabbitAiCta11 mode={mode} />
        <CoderabbitAiFooter12 mode={mode} />
    </div>
  );
}
