import VoosterHero from "@/components/sections/vooster-hero";
import WhyVooster from "@/components/sections/why-vooster";
import PRDAutomation from "@/components/sections/prd-automation";
import CursorIntegration from "@/components/sections/cursor-integration";
import Workflow from "@/components/sections/workflow";
import VoosterCTA from "@/components/sections/vooster-cta";

export default function Home() {
  return (
    <>
      <VoosterHero />
      <WhyVooster />
      <PRDAutomation />
      <CursorIntegration />
      <Workflow />
      <VoosterCTA />
    </>
  );
}
