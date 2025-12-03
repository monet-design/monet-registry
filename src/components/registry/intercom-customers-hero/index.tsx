"use client";

import { motion } from "motion/react";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#19100F",      // Dark brown/black background
    badge: "#F5F5F3",           // Light badge background
    badgeText: "#1A1A1A",       // Badge text
  },
} as const;

const IMAGES = {
  person1: {
    path: "/registry/intercom-customers-hero/person-1.jpg",
    alt: "Customer testimonial portrait 1",
    prompt: `Professional headshot portrait for customer testimonial.
Style: Natural, professional photography
Layout: Centered portrait, head and shoulders
Composition: Warm, friendly expression, professional attire
Background: Neutral, slightly blurred
Color palette: Warm skin tones, natural lighting
Mood: Approachable, trustworthy, confident
Technical: High resolution, portrait orientation`,
  },
  person2: {
    path: "/registry/intercom-customers-hero/person-2.jpg",
    alt: "Customer testimonial portrait 2",
    prompt: `Professional headshot portrait for customer testimonial.
Style: Natural, professional photography
Layout: Centered portrait, head and shoulders
Composition: Warm, friendly expression, professional attire
Background: Neutral, slightly blurred
Color palette: Warm skin tones, natural lighting
Mood: Approachable, trustworthy, confident
Technical: High resolution, portrait orientation`,
  },
  person3: {
    path: "/registry/intercom-customers-hero/person-3.jpg",
    alt: "Customer testimonial portrait 3",
    prompt: `Professional headshot portrait for customer testimonial.
Style: Natural, professional photography
Layout: Centered portrait, head and shoulders
Composition: Warm, friendly expression, professional attire
Background: Neutral, slightly blurred
Color palette: Warm skin tones, natural lighting
Mood: Approachable, trustworthy, confident
Technical: High resolution, portrait orientation`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Types
interface CompanyCard {
  type: "logo" | "image";
  name: string;
  logo?: React.ReactNode;
  imageUrl?: string;
}

interface IntercomCustomersHeroProps {
  badge?: string;
  headline?: string;
  subheadline?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonHref?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  companies?: CompanyCard[];
}

// Company Logo Components
function LightspeedLogo() {
  return (
    <span
      className="text-2xl md:text-3xl tracking-tight"
      style={{
        fontFamily: "'Times New Roman', Georgia, serif",
        color: "#8A7D73",
        fontWeight: 400,
        fontStyle: "italic",
      }}
    >
      Lightspeed
    </span>
  );
}

function AmazonLogo() {
  return (
    <span
      className="text-2xl md:text-3xl font-bold tracking-tight"
      style={{
        fontFamily: "'Times New Roman', Georgia, serif",
        color: "#8A7D73",
        fontStyle: "italic",
      }}
    >
      Amazon
    </span>
  );
}

function PolymarketLogo() {
  return (
    <span
      className="text-2xl md:text-3xl font-bold tracking-tight"
      style={{
        fontFamily: "'Times New Roman', Georgia, serif",
        color: "#8A7D73",
        fontStyle: "italic",
      }}
    >
      Polymarket
    </span>
  );
}

function TinesLogo() {
  return (
    <span
      className="text-2xl md:text-3xl tracking-tight"
      style={{
        fontFamily: "'Times New Roman', Georgia, serif",
        color: "#6A635E",
        fontWeight: 400,
        fontStyle: "italic",
      }}
    >
      Tines
    </span>
  );
}

function ClayLogo() {
  return (
    <span
      className="text-3xl md:text-4xl tracking-tight"
      style={{
        fontFamily: "'Times New Roman', Georgia, serif",
        color: "#6A635E",
        fontWeight: 400,
        fontStyle: "italic",
      }}
    >
      Clay
    </span>
  );
}

function CheckoutLogo() {
  return (
    <span
      className="text-xl md:text-2xl tracking-tight"
      style={{
        fontFamily: "'Arial', sans-serif",
        color: "#8A7D73",
        fontWeight: 400,
      }}
    >
      Checkout.com
    </span>
  );
}

function ToastLogo() {
  return (
    <span
      className="text-3xl md:text-4xl tracking-tight"
      style={{
        fontFamily: "'Times New Roman', Georgia, serif",
        color: "#6A635E",
        fontWeight: 400,
        fontStyle: "italic",
      }}
    >
      Toast
    </span>
  );
}

function PerplexityLogo() {
  return (
    <span
      className="text-2xl md:text-3xl tracking-tight"
      style={{
        fontFamily: "'Times New Roman', Georgia, serif",
        color: "#5A534E",
        fontWeight: 400,
        fontStyle: "italic",
      }}
    >
      Perplexity
    </span>
  );
}

function VantaLogo() {
  return (
    <span
      className="text-3xl md:text-4xl tracking-tight"
      style={{
        fontFamily: "'Times New Roman', Georgia, serif",
        color: "#7A6E66",
        fontWeight: 400,
        fontStyle: "italic",
      }}
    >
      Vanta
    </span>
  );
}

// Default companies
const defaultCompanies: CompanyCard[] = [
  { type: "logo", name: "Lightspeed", logo: <LightspeedLogo /> },
  { type: "image", name: "Person 1", imageUrl: IMAGES.person1.path },
  { type: "logo", name: "Clay", logo: <ClayLogo /> },
  { type: "logo", name: "Checkout.com", logo: <CheckoutLogo /> },
  { type: "logo", name: "Amazon", logo: <AmazonLogo /> },
  { type: "image", name: "Person 2", imageUrl: IMAGES.person2.path },
  { type: "logo", name: "Tines", logo: <TinesLogo /> },
  { type: "logo", name: "Toast", logo: <ToastLogo /> },
  { type: "logo", name: "Polymarket", logo: <PolymarketLogo /> },
  { type: "logo", name: "Perplexity", logo: <PerplexityLogo /> },
  { type: "logo", name: "Vanta", logo: <VantaLogo /> },
  { type: "image", name: "Person 3", imageUrl: IMAGES.person3.path },
];

// Grid positions for masonry-like layout
const gridPositions = [
  { col: "col-start-1", row: "row-start-1 row-span-2", size: "h-48" },
  { col: "col-start-2", row: "row-start-1", size: "h-24" },
  { col: "col-start-3", row: "row-start-1 row-span-2", size: "h-48" },
  { col: "col-start-4", row: "row-start-1 row-span-2", size: "h-48" },
  { col: "col-start-1", row: "row-start-3 row-span-2", size: "h-56" },
  { col: "col-start-2", row: "row-start-2 row-span-2", size: "h-48" },
  { col: "col-start-2", row: "row-start-4", size: "h-20" },
  { col: "col-start-3", row: "row-start-3 row-span-2", size: "h-48" },
  { col: "col-start-1", row: "row-start-5", size: "h-44" },
  { col: "col-start-2", row: "row-start-5 row-span-2", size: "h-56" },
  { col: "col-start-3", row: "row-start-5 row-span-2", size: "h-48" },
  { col: "col-start-4", row: "row-start-3 row-span-3", size: "h-56" },
];

// Main Component
export default function IntercomCustomersHero({
  badge = "Customer stories",
  headline = "Success stories from\ncompanies like yours",
  subheadline = "Filter to find the most relevant examples from over 100 companies\naround the world.",
  primaryButtonText = "View demo",
  secondaryButtonText = "Start free trial",
  primaryButtonHref = "#",
  secondaryButtonHref = "#",
  onPrimaryClick,
  onSecondaryClick,
  companies = defaultCompanies,
}: IntercomCustomersHeroProps) {
  const colors = COLORS.light;
  return (
    <section className="relative w-full min-h-screen overflow-hidden" style={{ backgroundColor: colors.background }}>
      {/* Background Grid of Company Cards */}
      <div className="absolute inset-0 w-full h-full">
        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-3 p-4 h-full opacity-100">
          {companies.slice(0, 12).map((company, index) => {
            const position = gridPositions[index] || gridPositions[0];
            return (
              <motion.div
                key={`${company.name}-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className={`${position.col} ${position.row} rounded-lg overflow-hidden`}
              >
                {company.type === "logo" ? (
                  <div className="w-full h-full bg-[#2A2320] flex items-center justify-center p-6 rounded-lg border border-[#3A3330]/50">
                    {company.logo}
                  </div>
                ) : (
                  <div
                    className="w-full h-full bg-cover bg-center rounded-lg"
                    style={{
                      backgroundImage: `url(${company.imageUrl})`,
                      backgroundColor: "#3A3330",
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile/Tablet Grid */}
        <div className="lg:hidden grid grid-cols-2 gap-2 p-3 h-full opacity-60">
          {companies.slice(0, 6).map((company, index) => (
            <motion.div
              key={`mobile-${company.name}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="rounded-lg overflow-hidden h-32"
            >
              {company.type === "logo" ? (
                <div className="w-full h-full bg-[#2A2320] flex items-center justify-center p-4 rounded-lg border border-[#3A3330]/50">
                  {company.logo}
                </div>
              ) : (
                <div
                  className="w-full h-full bg-cover bg-center rounded-lg"
                  style={{
                    backgroundImage: `url(${company.imageUrl})`,
                    backgroundColor: "#3A3330",
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#19100F]/60 via-[#19100F]/80 to-[#19100F]/60 pointer-events-none" />

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full" style={{ color: colors.badgeText, backgroundColor: colors.badge }}>
            {badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight max-w-4xl"
          style={{
            fontFamily: "'Times New Roman', Georgia, serif",
            color: "#F5F0EA",
            lineHeight: 1.1,
          }}
        >
          {headline.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < headline.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-base md:text-lg max-w-xl leading-relaxed"
          style={{ color: "#9A938E" }}
        >
          {subheadline.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < subheadline.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3"
        >
          {/* Primary Button */}
          <a
            href={primaryButtonHref}
            onClick={(e) => {
              if (onPrimaryClick) {
                e.preventDefault();
                onPrimaryClick();
              }
            }}
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full bg-[#2A2320] text-[#F5F0EA] border border-[#4A4340] hover:bg-[#3A3330] hover:border-[#5A5350] transition-all"
          >
            {primaryButtonText}
          </a>

          {/* Secondary Button */}
          <a
            href={secondaryButtonHref}
            onClick={(e) => {
              if (onSecondaryClick) {
                e.preventDefault();
                onSecondaryClick();
              }
            }}
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full bg-transparent text-[#B5AEA8] border border-[#4A4340] hover:bg-[#2A2320]/50 hover:text-[#F5F0EA] transition-all"
          >
            {secondaryButtonText}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
