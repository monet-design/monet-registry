"use client";

import CursorComHero0 from "@/components/registry/cursor-com-hero-0";
import CursorComLogoCloud1 from "@/components/registry/cursor-com-logo-cloud-1";
import CursorComFeature2 from "@/components/registry/cursor-com-feature-2";
import CursorComTestimonial3 from "@/components/registry/cursor-com-testimonial-3";
import CursorComFeature4 from "@/components/registry/cursor-com-feature-4";
import CursorComChangelog5 from "@/components/registry/cursor-com-changelog-5";
import CursorComAbout6 from "@/components/registry/cursor-com-about-6";
import CursorComBlog7 from "@/components/registry/cursor-com-blog-7";
import CursorComCta8 from "@/components/registry/cursor-com-cta-8";
import CursorComFooter9 from "@/components/registry/cursor-com-footer-9";

interface CursorComLandingProps {
  mode?: "light" | "dark";
}

/**
 * cursor-com-landing - Full page component
 *
 * This page combines the following sections:
 * - cursor-com-hero-0
 * - cursor-com-logo-cloud-1
 * - cursor-com-feature-2
 * - cursor-com-testimonial-3
 * - cursor-com-feature-4
 * - cursor-com-changelog-5
 * - cursor-com-about-6
 * - cursor-com-blog-7
 * - cursor-com-cta-8
 * - cursor-com-footer-9
 */
export default function CursorComLanding({
  mode = "dark",
}: CursorComLandingProps) {
  return (
    <div className="w-full min-h-screen">
      <CursorComHero0 mode={mode} />
      <CursorComLogoCloud1 mode={mode} />
      <CursorComFeature2 mode={mode} />
      <CursorComTestimonial3 mode={mode} />
      <CursorComFeature4 mode={mode} />
      <CursorComChangelog5 mode={mode} />
      <CursorComAbout6 mode={mode} />
      <CursorComBlog7 mode={mode} />
      <CursorComCta8 mode={mode} />
      <CursorComFooter9 mode={mode} />
    </div>
  );
}
