"use client";

import TorderComHero0 from "@/components/registry/torder-com-hero-0";
import TorderComEvent1 from "@/components/registry/torder-com-event-1";
import TorderComLogoCloud2 from "@/components/registry/torder-com-logo-cloud-2";
import TorderComFeature3 from "@/components/registry/torder-com-feature-3";
import TorderComStats4 from "@/components/registry/torder-com-stats-4";
import TorderComDesign5 from "@/components/registry/torder-com-design-5";
import TorderComTestimonial6 from "@/components/registry/torder-com-testimonial-6";
import TorderComPos7 from "@/components/registry/torder-com-pos-7";
import TorderComLocation8 from "@/components/registry/torder-com-location-8";
import TorderComCs9 from "@/components/registry/torder-com-cs-9";
import TorderComAbout10 from "@/components/registry/torder-com-about-10";
import TorderComCta12 from "@/components/registry/torder-com-cta-12";
import TorderComAwards13 from "@/components/registry/torder-com-awards-13";
import TorderComFaq14 from "@/components/registry/torder-com-faq-14";
import TorderComFooter15 from "@/components/registry/torder-com-footer-15";

interface TorderComLandingProps {
  mode?: "light" | "dark";
}

/**
 * torder-com-landing - Full page component
 *
 * This page combines the following sections:
 * - torder-com-hero-0 (Section 0: Hero with video slider)
 * - torder-com-event-1 (Section 1: Event promotions)
 * - torder-com-logo-cloud-2 (Section 2: Top brand logos)
 * - torder-com-feature-3 (Section 3: Feature comparison)
 * - torder-com-stats-4 (Section 4: Sales statistics)
 * - torder-com-design-5 (Section 5: Design customization)
 * - torder-com-testimonial-6 (Section 6: Customer testimonials)
 * - torder-com-pos-7 (Section 7: POS integrations)
 * - torder-com-location-8 (Section 8: Support center locations)
 * - torder-com-cs-9 (Section 9: 24/7 Customer service)
 * - torder-com-about-10 (Section 10: About team)
 * - torder-com-cta-12 (Section 12: CTA section)
 * - torder-com-awards-13 (Section 13: Awards and recognition)
 * - torder-com-faq-14 (Section 14: FAQ)
 * - torder-com-footer-15 (Section 15: Footer)
 */
export default function TorderComLanding({ mode = "light" }: TorderComLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <TorderComHero0 mode="dark" />
        <TorderComEvent1 mode="dark" />
        <TorderComLogoCloud2 mode={mode} />
        <TorderComFeature3 mode={mode} />
        <TorderComStats4 mode={mode} />
        <TorderComDesign5 mode={mode} />
        <TorderComTestimonial6 mode="dark" />
        <TorderComPos7 mode="dark" />
        <TorderComLocation8 mode={mode} />
        <TorderComCs9 mode={mode} />
        <TorderComAbout10 mode="dark" />
        <TorderComCta12 mode="dark" />
        <TorderComAwards13 mode="dark" />
        <TorderComFaq14 mode="dark" />
        <TorderComFooter15 mode={mode} />
    </div>
  );
}
