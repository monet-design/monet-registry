"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    primary: "#044BD9",        // Ahrefs 블루
    primaryHover: "#0340B8",
    accent: "#F7941D",         // 오렌지 버튼
    accentHover: "#e8850f",
  },
  dark: {
    primary: "#1a5adb",
    primaryHover: "#1e4ebd",
    accent: "#ff9d2e",
    accentHover: "#f89520",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface AhrefsEnterpriseHeroProps {
  mode?: "light" | "dark";
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  trustText?: string;
  logos?: Array<{
    name: string;
    logo: React.ReactNode;
  }>;
  teamIllustrationSrc?: string;
}

// Logo components
const PinterestLogo = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 inline-block mr-1" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

const DellLogo = () => (
  <span className="font-bold tracking-tight text-lg">DELL</span>
);

const CapitalOneLogo = () => (
  <span className="font-bold text-lg">
    Capit<span className="text-red-500">a</span>lOne
  </span>
);

const AccentureLogo = () => (
  <span className="font-semibold text-lg">accenture</span>
);

const TripadvisorLogo = () => (
  <div className="flex items-center gap-1">
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <circle cx="8" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="16" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="8" cy="12" r="1" fill="currentColor"/>
      <circle cx="16" cy="12" r="1" fill="currentColor"/>
    </svg>
    <span className="font-semibold text-lg">Tripadvisor</span>
  </div>
);

const HubSpotLogo = () => (
  <span className="font-bold text-lg">
    Hub<span className="text-orange-500">S</span>p<span className="text-orange-500">o</span>t
  </span>
);

const defaultLogos = [
  { name: "Pinterest", logo: <><PinterestLogo /> Pinterest</> },
  { name: "Dell", logo: <DellLogo /> },
  { name: "Capital One", logo: <CapitalOneLogo /> },
  { name: "Accenture", logo: <AccentureLogo /> },
  { name: "Tripadvisor", logo: <TripadvisorLogo /> },
  { name: "HubSpot", logo: <HubSpotLogo /> },
];

export default function AhrefsEnterpriseHero({
  mode = "light",
  title = "With Ahrefs Enterprise,\nyour team comes together\nto grow your web\npresence.",
  description = "From junior content marketer to technical SEO advisor, each team member gets the data and tools they need to transform insights into action.",
  ctaText = "Book a call",
  ctaHref = "#",
  trustText = "Ahrefs is trusted by marketers from the world's leading companies.",
  logos = defaultLogos,
  teamIllustrationSrc = "/registry/ahrefs-enterprise-hero/team-illustration.png",
}: AhrefsEnterpriseHeroProps) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: colors.primary }}>
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* Hero text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-serif text-white leading-[1.15] whitespace-pre-line">
            {title}
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-white/90 text-base md:text-lg max-w-md leading-relaxed"
        >
          {description}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <a
            href={ctaHref}
            className="inline-block text-white font-semibold text-base px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: colors.accent }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = colors.accentHover)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = colors.accent)}
          >
            {ctaText}
          </a>
        </motion.div>

        {/* Team Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <Image
            src={teamIllustrationSrc}
            alt="Team collaboration illustration"
            width={700}
            height={400}
            className="object-contain"
            priority
          />
        </motion.div>
      </div>

      {/* Logo section */}
      <div className="relative z-10 bg-white py-6">
        <div className="max-w-6xl mx-auto px-6">
          {/* Logo grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          >
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="text-gray-700 flex items-center"
              >
                {logo.logo}
              </motion.div>
            ))}
          </motion.div>

          {/* Trust text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-4 text-center text-gray-500 text-sm"
          >
            {trustText}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
