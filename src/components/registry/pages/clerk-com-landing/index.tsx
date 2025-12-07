"use client";

import ClerkComHeader0 from "@/components/registry/clerk-com-header-0";
import ClerkComHero1 from "@/components/registry/clerk-com-hero-1";
import ClerkComLogoCloud2 from "@/components/registry/clerk-com-logo-cloud-2";
import ClerkComFeature3 from "@/components/registry/clerk-com-feature-3";
import ClerkComFeature4 from "@/components/registry/clerk-com-feature-4";
import ClerkComFeature5 from "@/components/registry/clerk-com-feature-5";
import ClerkComFeature6 from "@/components/registry/clerk-com-feature-6";
import ClerkComFeature7 from "@/components/registry/clerk-com-feature-7";
import ClerkComTestimonial0 from "@/components/registry/clerk-com-testimonial-0";
import ClerkComCta1 from "@/components/registry/clerk-com-cta-1";
import ClerkComFooter2 from "@/components/registry/clerk-com-footer-2";

interface ClerkComLandingProps {
  mode?: "light" | "dark";
}

/**
 * clerk-com-landing - Full page component
 *
 * This page combines the following sections:
 * - clerk-com-header-0 (Navigation)
 * - clerk-com-hero-1 (Hero)
 * - clerk-com-logo-cloud-2 (Logo Cloud)
 * - clerk-com-feature-3 (Pixel-perfect UIs)
 * - clerk-com-feature-4 (Authentication features - dark)
 * - clerk-com-feature-5 (Multi-tenancy)
 * - clerk-com-feature-6 (Billing)
 * - clerk-com-feature-7 (SDKs & Integrations)
 * - clerk-com-testimonial-0 (Testimonials)
 * - clerk-com-cta-1 (CTA)
 * - clerk-com-footer-2 (Footer)
 */
export default function ClerkComLanding({ mode = "light" }: ClerkComLandingProps) {
  return (
    <div className="w-full min-h-screen">
      <ClerkComHeader0 mode="dark" />
      <ClerkComHero1 mode="dark" />
      <ClerkComLogoCloud2 mode={mode} />
      <ClerkComFeature3 mode={mode} />
      <ClerkComFeature4 mode="dark" />
      <ClerkComFeature5 mode={mode} />
      <ClerkComFeature6 mode={mode} />
      <ClerkComFeature7 mode="dark" />
      <ClerkComTestimonial0 mode={mode} />
      <ClerkComCta1 mode={mode} />
      <ClerkComFooter2 mode={mode} />
    </div>
  );
}
