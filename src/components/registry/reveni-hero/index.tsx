"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Check } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

interface LogoItem {
  name: string;
  logo: React.ReactNode;
}

interface ReveniHeroProps {
  mode?: "light" | "dark";
  brandName?: string;
  navItems?: NavItem[];
  headline?: {
    regular: string[];
    italic: string[];
  };
  subheadline?: string;
  ctaText?: string;
  headerCtaText?: string;
  badgeText?: string;
  heroImage?: string;
  secondaryImage?: string;
  logos?: LogoItem[];
  onCtaClick?: () => void;
}

const CUSTOMIZATION = {}

// Logo Components
function ReveniLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M4 6l4 6-4 6h3l4-6-4-6H4z" />
      <path d="M10 6l4 6-4 6h3l4-6-4-6h-3z" />
    </svg>
  );
}

function MascaroLogo() {
  return (
    <span className="text-sm font-light tracking-[0.3em] text-[#1a2f2f]/60">
      MASCARO
    </span>
  );
}

function BimaniLogo() {
  return (
    <span className="text-base font-light tracking-[0.2em] text-[#1a2f2f]/60">
      BIMANI
    </span>
  );
}

function SepiiaLogo() {
  return (
    <span className="text-base font-bold tracking-tight text-[#1a2f2f]/60">
      sepiia
    </span>
  );
}

function SingularuLogo() {
  return (
    <div className="flex items-center gap-1 text-[#1a2f2f]/60">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
        <polygon points="6,0 12,6 6,12 0,6" />
      </svg>
      <span className="text-xs font-medium tracking-wider">SINGULARU</span>
    </div>
  );
}

function ApodemiaLogo() {
  return (
    <div className="flex items-center gap-1 text-[#1a2f2f]/60">
      <span className="text-lg">W</span>
      <span className="text-xs font-medium tracking-wider">APODEMIA</span>
    </div>
  );
}

function CupleLogo() {
  return (
    <div className="flex items-center gap-1.5 text-[#1a2f2f]/60">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <circle cx="4" cy="8" r="2" />
        <circle cx="12" cy="8" r="2" />
        <circle cx="8" cy="4" r="2" />
        <circle cx="8" cy="12" r="2" />
      </svg>
      <span className="text-sm font-medium tracking-wider">CUPLE</span>
    </div>
  );
}

// Decorative curved line SVG
function DecorativeCurve({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="200"
      height="300"
      viewBox="0 0 200 300"
      fill="none"
    >
      <path
        d="M180 20C180 20 200 80 180 140C160 200 120 220 100 260C80 300 60 300 40 280"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// Phone icon decorative element
function PhoneDecor({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="80"
      height="100"
      viewBox="0 0 80 100"
      fill="currentColor"
    >
      <path d="M20 10C10 10 5 20 5 30L5 70C5 80 15 95 30 95C30 95 35 70 50 50C65 30 75 25 75 25C75 25 70 10 55 10L20 10Z" />
      <path
        d="M55 30C55 30 50 35 45 45C40 55 35 65 35 75"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
}

const defaultNavItems: NavItem[] = [
  { label: "For your business", href: "#" },
  { label: "How it works", href: "#" },
  { label: "Partners", href: "#" },
  { label: "Help center", href: "#" },
];

const defaultLogos: LogoItem[] = [
  { name: "Mascaro", logo: <MascaroLogo /> },
  { name: "Bimani", logo: <BimaniLogo /> },
  { name: "Sepiia", logo: <SepiiaLogo /> },
  { name: "Singularu", logo: <SingularuLogo /> },
  { name: "Apodemia", logo: <ApodemiaLogo /> },
  { name: "Cuple", logo: <CupleLogo /> },
];

export default function ReveniHero({
  mode = "light",
  brandName = "reveni",
  navItems = defaultNavItems,
  headline = {
    regular: ["Increase your sales with the", "best ", " and ", " experience"],
    italic: ["returns", "exchanges"],
  },
  subheadline = "Enhance customer loyalty with instant refunds and reduce your returns with instant exchanges and store credit.",
  ctaText = "Book a demo",
  headerCtaText = "Book a demo",
  badgeText = "+100%",
  heroImage = "/registry/reveni-hero/hero-woman.png",
  secondaryImage = "/registry/reveni-hero/secondary-image.png",
  logos = defaultLogos,
  onCtaClick,
}: ReveniHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#DFFFEF]">
      {/* Google Fonts import for Playfair Display */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap");
      `}</style>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-4 sm:px-10 lg:px-16"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <ReveniLogo className="h-6 w-6 text-[#1a2f2f]" />
          <span className="text-lg font-medium text-[#1a2f2f]">{brandName}</span>
        </div>

        {/* Nav Items - Hidden on mobile */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[#1a2f2f] transition-colors hover:text-[#1a2f2f]/70"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Header CTA */}
        <button
          onClick={onCtaClick}
          className="rounded-full border border-[#1a2f2f] bg-white px-5 py-2 text-sm font-medium text-[#1a2f2f] transition-all hover:bg-[#1a2f2f] hover:text-white"
        >
          {headerCtaText}
        </button>
      </motion.nav>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 pt-12 sm:px-10 lg:px-16 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl font-medium leading-tight text-[#1a2f2f] sm:text-5xl lg:text-[3.25rem]"
            >
              {headline.regular[0]}
              <br />
              {headline.regular[1]}
              <span
                className="italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {headline.italic[0]}
              </span>
              {headline.regular[2]}
              <span
                className="italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {headline.italic[1]}
              </span>
              <br />
              {headline.regular[3]}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-md text-sm leading-relaxed text-[#1a2f2f]/70 sm:text-base"
            >
              {subheadline}
            </motion.p>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onClick={onCtaClick}
              className="mt-8 rounded-full border border-[#1a2f2f] bg-white px-8 py-3.5 text-sm font-medium text-[#1a2f2f] transition-all hover:bg-[#1a2f2f] hover:text-white"
            >
              {ctaText}
            </motion.button>
          </div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Decorative curved line */}
            <DecorativeCurve className="absolute -right-4 -top-8 z-0 text-[#7ECDC8]" />

            {/* Phone decorative element */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -left-4 bottom-1/3 z-20"
            >
              <PhoneDecor className="h-20 w-16 text-[#1a2f2f]" />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute right-8 top-4 z-20 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-lg"
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                <Check className="h-3 w-3 text-white" strokeWidth={3} />
              </div>
              <span className="text-sm font-semibold text-[#1a2f2f]">
                {badgeText}
              </span>
            </motion.div>

            {/* Main Image */}
            <div className="relative z-10 overflow-hidden rounded-2xl">
              <Image
                src={heroImage}
                alt="Customer using mobile app"
                width={450}
                height={550}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Secondary Image */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-4 -right-4 z-20 h-24 w-24 overflow-hidden rounded-xl shadow-lg sm:h-32 sm:w-32"
            >
              <Image
                src={secondaryImage}
                alt="Product display"
                width={128}
                height={128}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Logo Strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mt-20 border-t border-[#1a2f2f]/10 px-6 py-8 sm:px-10 lg:mt-24 lg:px-16"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {logos.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1 + index * 0.05 }}
              className="transition-opacity hover:opacity-80"
            >
              {item.logo}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
