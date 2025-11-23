import Cta from "@/components/sections/cta";
import Faq from "@/components/sections/faq";
import Features from "@/components/sections/features";
import FeaturesV2 from "@/components/sections/features-v2";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
import Pricing from "@/components/sections/pricing";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <FeaturesV2 />
      <Pricing />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
