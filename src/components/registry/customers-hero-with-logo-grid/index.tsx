"use client";

import { motion } from "motion/react";
import "./font.css";

// Types
interface LogoItem {
  name: string;
  logo: React.ReactNode;
}

interface CustomersHeroWithLogoGridProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  logos?: LogoItem[];
  onCtaClick?: () => void;
}

// Logo Components - Styled to match the reference image
function FenderLogo() {
  return (
    <span
      className="text-xl text-[#1A1A1A] italic"
      style={{ fontFamily: "'Brush Script MT', cursive" }}
    >
      Fender
    </span>
  );
}

function RappiLogo() {
  return (
    <span
      className="font-bold text-lg tracking-tight text-[#FF4400] italic"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      Rappi
    </span>
  );
}

function TaxfixLogo() {
  return (
    <span className="font-semibold text-lg text-[#1A1A1A] tracking-tight">
      ta<span className="text-[#1A1A1A]">x</span>fix
    </span>
  );
}

function BillComLogo() {
  return (
    <div className="flex items-baseline">
      <span className="font-bold text-lg text-[#1A1A1A]">Bill</span>
      <span className="text-sm text-[#1A1A1A]">.com</span>
    </div>
  );
}

function SixtLogo() {
  return (
    <span className="font-black text-xl tracking-tight text-[#FF6600] uppercase">
      SIXT
    </span>
  );
}

function SothebysLogo() {
  return (
    <span
      className="text-lg text-[#1A1A1A] tracking-wide"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      Sotheby&apos;s
    </span>
  );
}

function OneFootballLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-[#1A1A1A]"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" />
      </svg>
      <span className="font-semibold text-xs uppercase tracking-wide text-[#1A1A1A]">
        ONEFOOTBALL
      </span>
    </div>
  );
}

function JoybirdLogo() {
  return (
    <span className="font-bold text-base uppercase tracking-widest text-[#1A1A1A]">
      JOYBIRD
    </span>
  );
}

function RapchatLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="font-bold text-sm text-[#1A1A1A]">RC</span>
      <span className="font-medium text-xs text-[#666] uppercase tracking-wider">
        RAPCHAT
      </span>
    </div>
  );
}

function TermiusLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-[#1A1A1A]"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8M8 12h8" />
      </svg>
      <span className="font-medium text-sm text-[#1A1A1A]">termius</span>
    </div>
  );
}

function DoodleLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-[#1A1A1A]"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
      <span className="font-semibold text-sm text-[#1A1A1A]">Doodle</span>
    </div>
  );
}

function BitsoLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-[#00C389]"
      >
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
      </svg>
      <span className="font-bold text-sm text-[#1A1A1A]">Bitso</span>
    </div>
  );
}

// Default logos
const defaultLogos: LogoItem[] = [
  { name: "Fender", logo: <FenderLogo /> },
  { name: "Rappi", logo: <RappiLogo /> },
  { name: "Taxfix", logo: <TaxfixLogo /> },
  { name: "Bill.com", logo: <BillComLogo /> },
  { name: "SIXT", logo: <SixtLogo /> },
  { name: "Sotheby's", logo: <SothebysLogo /> },
  { name: "OneFootball", logo: <OneFootballLogo /> },
  { name: "JOYBIRD", logo: <JoybirdLogo /> },
  { name: "RAPCHAT", logo: <RapchatLogo /> },
  { name: "Termius", logo: <TermiusLogo /> },
  { name: "Doodle", logo: <DoodleLogo /> },
  { name: "Bitso", logo: <BitsoLogo /> },
];

// Main Component
export default function CustomersHeroWithLogoGrid({
  headline = "You're in good company",
  subheadline = "Join leading organizations using Avo to ship faster without\ncompromising their data quality.",
  ctaText = "Request demo",
  ctaHref = "#",
  logos = defaultLogos,
  onCtaClick,
}: CustomersHeroWithLogoGridProps) {
  return (
    <section className="relative w-full bg-[#FAFAFA] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Hero Content */}
        <div className="mb-12 md:mb-16">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-playfair-display-italic text-4xl sm:text-5xl md:text-6xl font-normal text-[#1A1A1A] tracking-tight"
          >
            {headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-base text-[#4A4A4A] max-w-md leading-relaxed"
          >
            {subheadline.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < subheadline.split("\n").length - 1 && <br />}
              </span>
            ))}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6"
          >
            <a
              href={ctaHref}
              onClick={(e) => {
                if (onCtaClick) {
                  e.preventDefault();
                  onCtaClick();
                }
              }}
              className="inline-flex items-center justify-center rounded-full bg-[#E91E63] px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#D81B60] hover:shadow-md"
            >
              {ctaText}
            </a>
          </motion.div>
        </div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
        >
          {logos.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.03, duration: 0.4 }}
              className="flex items-center justify-center rounded-lg border border-[#E8E8E8] bg-white px-4 py-5 transition-all hover:border-[#D0D0D0] hover:shadow-sm"
            >
              {item.logo}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
