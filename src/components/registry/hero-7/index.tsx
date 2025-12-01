"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const CUSTOMIZATION = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { TrendingUp } from "lucide-react";
import Image from "next/image";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface LandingfolioHero7Props {
  logoText?: string;
  tagline?: string;
  headlinePart1?: string;
  headlinePart2?: string;
  description?: string;
  ctaText?: string;
  navItems?: NavItem[];
  statNumber?: string;
  statText?: string;
  onCtaClick?: () => void;
}

// Logo Icon Component - Blue circle with gradient
function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        fill="none"
      />
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Header Component
function Header({
  logoText,
  navItems,
}: {
  logoText: string;
  navItems: NavItem[];
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between py-5"
      role="banner"
    >
      <div className="flex items-center gap-2">
        <LogoIcon className="h-6 w-6" />
        <span className="text-base font-semibold text-white">{logoText}</span>
      </div>

      <nav className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm text-[#9CA3AF] transition-colors hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}

// Default values
const defaultNavItems: NavItem[] = [
  { label: "Products", href: "#" },
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Support", href: "#" },
];

// Main Component
export default function LandingfolioHero7({
  logoText = "DuskUI",
  tagline = "A HUB FOR DESIGNERS, DEVELOPERS & MARKETERS",
  headlinePart1 = "Unlimited Design",
  headlinePart2 = "Inspiration",
  description = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
  ctaText = "Start Exploring Inspiration",
  navItems = defaultNavItems,
  statNumber = "42",
  statText = "new design inspiration was added last week",
  onCtaClick = () => {},
}: LandingfolioHero7Props) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <Header logoText={logoText} navItems={navItems} />

        {/* Hero Content */}
        <div className="flex flex-col gap-8 py-12 lg:flex-row lg:items-center lg:gap-16 lg:py-20">
          {/* Left side - Text content */}
          <div className="flex-1 space-y-6 lg:max-w-xl">
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs font-medium uppercase tracking-[0.2em] text-[#9CA3AF]"
            >
              {tagline}
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="block font-serif italic text-[#A78BFA]">
                {headlinePart1}
              </span>
              <span className="block font-serif text-white">
                {headlinePart2}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-md text-sm leading-relaxed text-[#6B7280]"
            >
              {description}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button
                onClick={onCtaClick}
                className="rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white hover:text-black"
              >
                {ctaText}
              </button>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="h-px w-full max-w-md origin-left bg-[#374151]"
            />

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-3"
            >
              <TrendingUp className="h-5 w-5 text-[#60A5FA]" strokeWidth={2} />
              <p className="text-sm text-white">
                <span className="font-medium">{statNumber}</span>{" "}
                <span className="text-[#9CA3AF]">{statText}</span>
              </p>
            </motion.div>
          </div>

          {/* Right side - 3D Graphics */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex flex-1 items-center justify-center"
          >
            <div className="relative h-[400px] w-[400px] sm:h-[500px] sm:w-[500px]">
              <Image
                src="/registry/landingfolio-hero-7/3d-shapes.png"
                alt="Abstract 3D torus shapes with orange and pink gradient"
                fill
                sizes="(max-width: 640px) 400px, 500px"
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
