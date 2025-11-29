import dynamic from "next/dynamic";

// Dynamic import of hero-9 component
const LandingfolioHero9 = dynamic(
  () => import("@/components/landingfolio-hero/hero-9/index"),
  { ssr: true }
);

export default function LandingfolioHeroExamplePage() {
  return (
    <>
      <style>{`
        header, footer { display: none !important; }
        #app-root { min-height: 0 !important; display: block !important; }
      `}</style>
      <div className="min-h-screen">
        <LandingfolioHero9 />
      </div>
    </>
  );
}
