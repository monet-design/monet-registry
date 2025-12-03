"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {},
  dark: {},
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

// Instrument Serif for headings
const instrumentSerifStyle = {
  fontFamily: "'Instrument Serif', Georgia, serif",
};

interface FrameHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  loginText?: string;
  ctaText?: string;
  headline?: string;
  subheadlinePrefix?: string;
  subheadlineSuffix?: string;
  features?: string[];
  primaryCtaText?: string;
  primaryCtaSubtext?: string;
  trustedByText?: string;
  logos?: { name: string; logo: React.ReactNode }[];
  onLoginClick?: () => void;
  onCtaClick?: () => void;
  onPrimaryCtaClick?: () => void;
}

// Logo components for trusted brands
const KanaLogo = () => (
  <span className="text-sm font-bold tracking-wider text-neutral-800">KANA.</span>
);

const DbtLogo = () => (
  <div className="flex items-center gap-1">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect width="16" height="16" fill="#FF6B4A" rx="2" />
      <path d="M4 4h8v8H4z" fill="white" />
    </svg>
    <span className="text-sm font-semibold text-neutral-800">dbt</span>
  </div>
);

const BirdLogo = () => (
  <div className="flex flex-col items-center">
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
      <path
        d="M10 0C6 0 3 2 1 5c2-1 4-1.5 6-1.5C9 3.5 11 4.5 12 6c-2 0-4 1-5 3 2-1 4-1.5 6-1.5 3 0 5 2 7 6.5-1-4-3-7-6-9C16 5 18 4 20 4c-3-2-6-4-10-4z"
        fill="#1a1a1a"
      />
    </svg>
    <span className="text-[10px] font-medium tracking-widest text-neutral-800">BIRD</span>
  </div>
);

const KlaviyoLogo = () => (
  <span className="text-sm font-medium text-neutral-800">
    klaviyo<sup className="text-[8px]">*</sup>
  </span>
);

const DeelLogo = () => (
  <span className="text-sm font-semibold text-neutral-800">deel.</span>
);

const OneAiLogo = () => (
  <span className="text-sm font-bold tracking-wide text-neutral-800">ONEAI</span>
);

const CourseraLogo = () => (
  <span className="text-sm font-medium text-neutral-800">coursera</span>
);

const defaultLogos = [
  { name: "KANA", logo: <KanaLogo /> },
  { name: "dbt", logo: <DbtLogo /> },
  { name: "BIRD", logo: <BirdLogo /> },
  { name: "Klaviyo", logo: <KlaviyoLogo /> },
  { name: "Deel", logo: <DeelLogo /> },
  { name: "ONEAI", logo: <OneAiLogo /> },
  { name: "Coursera", logo: <CourseraLogo /> },
];

const defaultFeatures = ["Tasks", "Wikis", "Whiteboards", "Goals", "Notes", "Focus"];

export default function FrameHero({
  mode = "light",
  logoText = "Frame",
  loginText = "Login",
  ctaText = "Get Started",
  headline = "The future of work\nis focused.",
  subheadlinePrefix = "Imagine all of your",
  subheadlineSuffix = "in one connected place.",
  features = defaultFeatures,
  primaryCtaText = "Get Started Free",
  primaryCtaSubtext = "(No Credit Card Required)",
  trustedByText = "Trusted by",
  logos = defaultLogos,
  onLoginClick,
  onCtaClick,
  onPrimaryCtaClick,
}: FrameHeroProps) {
  // Split features for two-line layout
  const firstRowFeatures = features.slice(0, 4);
  const secondRowFeatures = features.slice(4);

  return (
    <>
      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
      `}</style>

      <section className="relative flex min-h-screen w-full flex-col bg-[#F3F3F3]">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex w-full justify-center px-4 pt-6"
        >
          <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 shadow-sm">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-neutral-900">
                <div className="h-2.5 w-2.5 rounded-sm bg-white" />
              </div>
              <span className="text-lg font-semibold text-neutral-900">{logoText}</span>
            </div>

            <div className="ml-6 flex items-center gap-2">
              <button
                onClick={onLoginClick}
                className="px-4 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
              >
                {loginText}
              </button>
              <button
                onClick={onCtaClick}
                className="flex items-center gap-1.5 rounded-full bg-[#C4E96E] px-4 py-1.5 text-sm font-medium text-neutral-900 transition-all hover:bg-[#b5dc5a]"
              >
                {ctaText}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.nav>

        {/* Main Content */}
        <div className="flex flex-1 flex-col items-center justify-center px-4">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={instrumentSerifStyle}
            className="mb-8 text-center text-5xl leading-tight text-neutral-900 md:text-6xl lg:text-7xl"
          >
            {headline.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < headline.split('\n').length - 1 && <br />}
              </span>
            ))}
          </motion.h1>

          {/* Subheadline with feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10 flex flex-col items-center gap-2 text-center"
          >
            {/* First row */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-base text-neutral-600 md:text-lg">
              <span>{subheadlinePrefix}</span>
              {firstRowFeatures.map((feature, index) => (
                <span
                  key={feature}
                  className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-3 py-0.5 text-sm font-medium text-neutral-900"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Second row */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-base text-neutral-600 md:text-lg">
              {secondRowFeatures.map((feature, index) => (
                <span
                  key={feature}
                  className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-3 py-0.5 text-sm font-medium text-neutral-900"
                >
                  {feature}
                </span>
              ))}
              {secondRowFeatures.length > 0 && <span>and</span>}
              {secondRowFeatures.length === 0 && features.length > 0 && <span>and</span>}
              <span>{subheadlineSuffix}</span>
            </div>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center gap-2"
          >
            <button
              onClick={onPrimaryCtaClick}
              className="flex items-center gap-2 rounded-full bg-[#C4E96E] px-6 py-3 text-base font-semibold text-neutral-900 transition-all hover:bg-[#b5dc5a] hover:shadow-lg"
            >
              {primaryCtaText}
              <ArrowRight className="h-4 w-4" />
            </button>
            <span className="text-sm text-neutral-500">{primaryCtaSubtext}</span>
          </motion.div>
        </div>

        {/* Logo Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="border-t border-neutral-200 bg-white px-4 py-6"
        >
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 md:gap-12">
            <span className="text-sm text-neutral-500">{trustedByText}</span>
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              >
                {logo.logo}
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
