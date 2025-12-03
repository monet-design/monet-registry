"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, Menu } from "lucide-react";
import "./font.css";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface FewAndFarHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  headline?: {
    line1?: string;
    line2?: string;
    italicWord?: string;
    line2End?: string;
  };
  description?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  navItems?: NavItem[];
  heroImageUrl?: string;
  journalCard?: {
    category: string;
    title: string;
    description: string;
  };
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

// B Corp Logo Component
function BCorpLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className="flex flex-col items-center">
        <span className="text-[10px] text-[#1A1A1A] tracking-wide mb-1">
          Certified
        </span>
        <div className="w-12 h-12 border-2 border-[#1A1A1A] rounded-full flex items-center justify-center">
          <span className="text-xl font-bold text-[#1A1A1A]">B</span>
        </div>
        <span className="text-[8px] text-[#1A1A1A] mt-1">Corporation</span>
      </div>
      <div className="border-l border-[#D5D5D5] pl-3 pt-1">
        <p className="text-[9px] text-[#666666] leading-relaxed max-w-[120px]">
          This company meets high
          <br />
          standards of social and
          <br />
          environmental impact.
        </p>
      </div>
    </div>
  );
}

// Wave Logo Icon (for wall display)
function WaveLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="50"
        cy="50"
        r="48"
        stroke="#1A1A1A"
        strokeWidth="4"
        fill="none"
      />
      <path
        d="M25 55C30 45 40 40 50 45C60 50 70 45 75 35"
        stroke="#1A1A1A"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M25 70C30 60 40 55 50 60C60 65 70 60 75 50"
        stroke="#1A1A1A"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// Navigation Dots Component
function NavigationDots({ count = 5 }: { count?: number }) {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${
            i === 0 ? "bg-white" : "bg-white/40"
          }`}
        />
      ))}
      <ArrowRight className="w-3 h-3 text-white mt-1 rotate-90" />
    </div>
  );
}

// Journal Card Component
function JournalCard({
  category,
  title,
  description,
}: {
  category: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="flex items-center gap-4 bg-[#1A1A1A]/70 backdrop-blur-md rounded-lg p-4 max-w-md"
    >
      <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-[#3A6EA5]">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white">B</span>
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-[10px] text-[#B0B0B0] uppercase tracking-wider">
          {category}
        </span>
        <h4 className="text-white text-sm font-medium mt-0.5 truncate">
          {title}
        </h4>
        <p className="text-[#A0A0A0] text-[11px] mt-0.5 line-clamp-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

// Default values
const defaultNavItems: NavItem[] = [
  { label: "About us", href: "#about" },
  { label: "Our Work", href: "#work" },
];

const defaultHeadline = {
  line1: "We help charities make",
  line2: "our world a",
  italicWord: "better",
  line2End: "place",
};

const defaultDescription =
  "We're a B Corp Certified digital agency that creates brands, websites and fundraising campaigns to make charities resonate with funders and those they help.";

const defaultJournalCard = {
  category: "JOURNAL",
  title: "What being a B Corp means for our charity partners",
  description:
    "Choosing a digital partner is tough for charities and that's exactly why we spent two years going through the rigorous B Corp certification process.",
};

// Main Component
export default function FewAndFarHero({
  mode = "light",
  logoText = "Few and    Far",
  headline = defaultHeadline,
  description = defaultDescription,
  primaryCta = { label: "About us", href: "#about" },
  secondaryCta = { label: "Book a Call", href: "#contact" },
  navItems = defaultNavItems,
  heroImageUrl = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
  journalCard = defaultJournalCard,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: FewAndFarHeroProps) {
  return (
    <section className="relative w-full min-h-screen flex">
      {/* Left Content Section */}
      <div className="w-full lg:w-[45%] bg-[#F5F3EF] flex flex-col justify-between px-8 py-8 lg:px-12 lg:py-10 min-h-screen">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-instrument-serif text-lg text-[#1A1A1A] tracking-wide">
            {logoText}
            <sup className="text-[8px] ml-0.5">R</sup>
          </span>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center py-12">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-instrument-serif text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] leading-[1.1] text-[#1A1A1A] tracking-tight"
          >
            {headline.line1}
            <br />
            {headline.line2}{" "}
            <span className="italic">{headline.italicWord}</span>{" "}
            {headline.line2End}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-inter text-[#5A5A5A] text-sm sm:text-[15px] leading-relaxed mt-6 max-w-md"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center gap-6 mt-8"
          >
            <button
              onClick={onPrimaryCtaClick}
              className="bg-[#1A1A1A] text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-[#333333] transition-colors"
            >
              {primaryCta.label}
            </button>
            <button
              onClick={onSecondaryCtaClick}
              className="flex items-center gap-2 text-[#1A1A1A] text-sm font-medium hover:gap-3 transition-all group"
            >
              {secondaryCta.label}
              <span className="flex items-center">
                <span className="w-6 h-[1px] bg-[#1A1A1A] group-hover:w-8 transition-all" />
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </motion.div>
        </div>

        {/* B Corp Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <BCorpLogo />
        </motion.div>
      </div>

      {/* Right Image Section */}
      <div className="hidden lg:block lg:w-[55%] relative overflow-hidden">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={heroImageUrl}
            alt="Office meeting"
            className="w-full h-full object-cover"
          />
          {/* Overlay for better readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
        </motion.div>

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute top-0 right-0 flex items-center gap-8 px-8 py-6"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[#1A1A1A] text-sm font-medium hover:opacity-70 transition-opacity"
            >
              {item.label}
            </a>
          ))}
          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm">
            <Menu className="w-5 h-5 text-[#1A1A1A]" />
          </button>
        </motion.nav>

        {/* Wave Logo on Wall */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute top-1/4 right-1/4 transform translate-x-1/2"
        >
          <WaveLogo className="w-32 h-32 opacity-90" />
        </motion.div>

        {/* Journal Card */}
        <div className="absolute bottom-8 left-8 right-20">
          <JournalCard
            category={journalCard.category}
            title={journalCard.title}
            description={journalCard.description}
          />
        </div>

        {/* Navigation Dots */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="absolute right-6 top-1/2 transform -translate-y-1/2"
        >
          <NavigationDots count={5} />
        </motion.div>
      </div>
    </section>
  );
}
