"use client";

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

// Types
interface A5GHeroProps {
  logoText?: string;
  navItems?: { label: string; href: string }[];
  headerCtaText?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  subheadline?: string;
  ctaText?: string;
  logoStripTitle?: string;
  companyLogos?: string[];
  onCtaClick?: () => void;
  onHeaderCtaClick?: () => void;
}

// Logo Icon Component
function A5GLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5BA3E0" />
          <stop offset="100%" stopColor="#3A7BBF" />
        </linearGradient>
      </defs>
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="7"
        stroke="white"
        strokeWidth="1.2"
        fill="none"
      />
      <circle cx="11" cy="16" r="4.5" fill="url(#blueGradient)" />
      <circle cx="22" cy="10" r="2" fill="white" />
      <circle cx="22" cy="22" r="2" fill="white" />
      <path
        d="M15.5 16L20 10M15.5 16L20 22"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Header Component
function Header({
  logoText,
  navItems,
  headerCtaText,
  onHeaderCtaClick,
}: {
  logoText: string;
  navItems: { label: string; href: string }[];
  headerCtaText: string;
  onHeaderCtaClick?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between py-6"
    >
      <div className="flex items-center gap-2">
        <A5GLogo className="h-7 w-7" />
        <span className="text-lg font-semibold text-white">{logoText}</span>
      </div>

      <nav className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button
        onClick={onHeaderCtaClick}
        className="rounded-full border border-white/30 bg-transparent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/50 hover:bg-white/5"
      >
        {headerCtaText}
      </button>
    </motion.div>
  );
}

// Main Component
export default function A5GHero({
  logoText = "A5G",
  navItems = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  headerCtaText = "Get started",
  headlineLine1 = "Unleash the Power of",
  headlineLine2 = "Intelligent Automation",
  subheadline = "Revolutionize your business processes by incorporating AI\nsolutions, propelling your organization into the future.",
  ctaText = "Start free trial",
  logoStripTitle = "Join 5,000+ companies already growing!",
  companyLogos = ["HBOmax", "Disney+", "TESLA", "NETFLIX", "SHOWTIME", "prime video"],
  onCtaClick,
  onHeaderCtaClick,
}: A5GHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Wave Image */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/registry/a5g-hero/wave-background.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Header */}
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Header
            logoText={logoText}
            navItems={navItems}
            headerCtaText={headerCtaText}
            onHeaderCtaClick={onHeaderCtaClick}
          />
        </div>

        {/* Hero Content - Centered in remaining space */}
        <div className="flex flex-1 flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-normal tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {headlineLine1}
            <br />
            <span className="font-medium italic">{headlineLine2}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-lg whitespace-pre-line text-sm leading-relaxed text-white/60 sm:text-base"
          >
            {subheadline}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <button
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90 hover:shadow-lg hover:shadow-white/20"
            >
              {ctaText}
              <ChevronRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>

        {/* Logo Strip - Fixed at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6 lg:px-8"
        >
          <p className="mb-6 text-center text-xs tracking-wide text-white/50">
            {logoStripTitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
            {companyLogos.map((logo) => (
              <CompanyLogo key={logo} name={logo} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// HBO Icon Component - Rounded rectangle with HBO text inside
function HBOIcon() {
  return (
    <svg viewBox="0 0 40 18" fill="none" className="h-4 w-10">
      <rect x="1" y="1" width="38" height="16" rx="4" stroke="currentColor" strokeWidth="1" fill="none" />
      <text x="20" y="13" textAnchor="middle" fill="currentColor" fontSize="9" fontWeight="600" fontFamily="Arial, sans-serif" letterSpacing="0.5">HBO</text>
    </svg>
  );
}

// Disney D Icon Component - Stylized D in a circle
function DisneyIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1" fill="none" />
      <text x="10" y="14" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="600" fontStyle="italic" fontFamily="Georgia, serif">D</text>
    </svg>
  );
}

// Tesla T Icon Component - Stylized Tesla T logo
function TeslaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path d="M12 3L2 8v1.5l10-4.5 10 4.5V8L12 3z" fill="currentColor" />
      <path d="M12 7L5 10v1.2l7-3 7 3V10L12 7z" fill="currentColor" />
      <path d="M10.5 11v10h3V11l-1.5-0.7L10.5 11z" fill="currentColor" />
    </svg>
  );
}

// Showtime SHO Icon Component - Rounded rectangle with SHO text inside
function ShowtimeIcon() {
  return (
    <svg viewBox="0 0 34 16" fill="none" className="h-3.5 w-8">
      <rect x="1" y="1" width="32" height="14" rx="3" stroke="currentColor" strokeWidth="1" fill="none" />
      <text x="17" y="11.5" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="600" fontFamily="Arial, sans-serif" letterSpacing="0.3">SHO</text>
    </svg>
  );
}

// Amazon Smile Icon Component - Arrow smile under text
function AmazonSmileIcon() {
  return (
    <svg viewBox="0 0 50 12" fill="none" className="h-2.5 w-12 -mt-1">
      <path d="M2 7C12 11 38 11 48 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M42 4l7 3.5-3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

// Company Logo Component
function CompanyLogo({ name }: { name: string }) {
  const logoStyles: Record<string, React.ReactNode> = {
    HBOmax: (
      <div className="flex items-center gap-0.5 text-white/40">
        <HBOIcon />
        <span className="text-sm font-medium tracking-tight">max</span>
      </div>
    ),
    "Disney+": (
      <div className="flex items-center gap-0.5 text-white/40">
        <DisneyIcon />
        <span className="text-base font-medium italic tracking-tight">isney</span>
        <span className="text-base font-normal">+</span>
      </div>
    ),
    TESLA: (
      <div className="flex items-center gap-1.5 text-white/40">
        <TeslaIcon />
        <span className="text-sm font-semibold tracking-[0.3em]">TESLA</span>
      </div>
    ),
    NETFLIX: (
      <span className="text-base font-extrabold tracking-[0.15em] text-white/40">
        NETFLIX
      </span>
    ),
    SHOWTIME: (
      <div className="flex items-center gap-0 text-white/40">
        <ShowtimeIcon />
        <span className="text-xs font-semibold tracking-[0.15em]">WTIME</span>
      </div>
    ),
    "prime video": (
      <div className="flex flex-col items-center text-white/40">
        <div className="flex items-center gap-0.5">
          <span className="text-sm font-normal italic">prime</span>
          <span className="text-sm font-bold">video</span>
        </div>
        <AmazonSmileIcon />
      </div>
    ),
  };

  return (
    <div className="transition-opacity hover:opacity-100">
      {logoStyles[name] || (
        <span className="text-sm font-medium text-white/40">{name}</span>
      )}
    </div>
  );
}
