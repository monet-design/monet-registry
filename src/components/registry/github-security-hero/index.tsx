"use client";

import { motion } from "motion/react";
import { Check, Code, ChevronRight, ChevronDown, Search } from "lucide-react";
import "./font.css";

// Types
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface SubNavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface FeatureCard {
  title: string;
  linkText: string;
  linkHref: string;
  icon: "check" | "code";
}

interface CompanyLogo {
  name: string;
  logoElement: React.ReactNode;
}

interface GithubSecurityHeroProps {
  badge?: string;
  headline?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  featureCards?: FeatureCard[];
  companyLogos?: CompanyLogo[];
}

// GitHub Logo SVG
function GitHubLogo() {
  return (
    <svg
      height="32"
      aria-hidden="true"
      viewBox="0 0 16 16"
      version="1.1"
      width="32"
      fill="currentColor"
    >
      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
    </svg>
  );
}

// 3D Check Icon Component
function Check3DIcon() {
  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      {/* Hexagon background */}
      <div
        className="absolute inset-0 rounded-2xl rotate-12"
        style={{
          background:
            "linear-gradient(135deg, rgba(59, 130, 246, 0.6) 0%, rgba(37, 99, 235, 0.8) 100%)",
          boxShadow:
            "0 8px 32px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
        }}
      />
      {/* Icon */}
      <Check
        className="relative z-10 text-green-400 drop-shadow-lg"
        size={48}
        strokeWidth={4}
      />
    </div>
  );
}

// 3D Code Icon Component
function Code3DIcon() {
  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      {/* Hexagon background */}
      <div
        className="absolute inset-0 rounded-2xl -rotate-12"
        style={{
          background:
            "linear-gradient(135deg, rgba(59, 130, 246, 0.6) 0%, rgba(37, 99, 235, 0.8) 100%)",
          boxShadow:
            "0 8px 32px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
        }}
      />
      {/* Icon */}
      <Code
        className="relative z-10 text-green-400 drop-shadow-lg"
        size={44}
        strokeWidth={3}
      />
    </div>
  );
}

// Feature Card Component
function FeatureCardComponent({
  title,
  linkText,
  linkHref,
  icon,
  index,
}: FeatureCard & { index: number }) {
  return (
    <motion.a
      href={linkHref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
      className="group relative flex-1 min-w-[280px] rounded-xl overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(37, 99, 235, 0.35) 100%)",
      }}
    >
      {/* Card background glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 min-h-[180px]">
        <div className="flex-1">
          <h3 className="text-white text-xl sm:text-2xl font-medium leading-tight mb-4">
            {title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h3>
          <div className="flex items-center gap-1 text-white/90 text-sm font-medium group-hover:text-white transition-colors">
            {linkText}
            <ChevronRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </div>
        </div>
        <div className="flex-shrink-0">
          {icon === "check" ? <Check3DIcon /> : <Code3DIcon />}
        </div>
      </div>
    </motion.a>
  );
}

// Company Logos
const defaultCompanyLogos: CompanyLogo[] = [
  {
    name: "Carlsberg Group",
    logoElement: (
      <span className="font-serif text-white/60 text-lg tracking-wide italic">
        Carlsberg
        <span className="block text-xs not-italic">Group</span>
      </span>
    ),
  },
  {
    name: "Mercado Libre",
    logoElement: (
      <span className="text-white/60 text-lg font-medium flex items-center gap-2">
        <span className="text-yellow-400">🤝</span>
        mercado
        <span className="font-light">libre</span>
      </span>
    ),
  },
  {
    name: "3M",
    logoElement: (
      <span className="text-white/60 text-3xl font-bold tracking-tighter">
        3M
      </span>
    ),
  },
  {
    name: "LinkedIn",
    logoElement: (
      <span className="text-white/60 text-xl font-semibold">
        Linked<span className="bg-white/60 text-[#0d1117] px-1">in</span>
      </span>
    ),
  },
  {
    name: "Otto Group",
    logoElement: (
      <span className="text-white/60 text-xl">
        <span className="font-light">otto</span>{" "}
        <span className="font-medium">group</span>
      </span>
    ),
  },
];

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Product", href: "#", hasDropdown: true },
  { label: "Solutions", href: "#", hasDropdown: true },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Open Source", href: "#", hasDropdown: true },
  { label: "Enterprise", href: "#", hasDropdown: true },
  { label: "Pricing", href: "#" },
];

// Default sub nav items
const defaultSubNavItems: SubNavItem[] = [
  { label: "Advanced Security", href: "#", isActive: true },
  { label: "Secret Protection", href: "#" },
  { label: "Code Security", href: "#" },
  { label: "Supply Chain Security", href: "#" },
  { label: "Plans & pricing", href: "#" },
];

// Default feature cards
const defaultFeatureCards: FeatureCard[] = [
  {
    title: "Stop leaks before\nthey start",
    linkText: "Explore Secret Protection",
    linkHref: "#",
    icon: "check",
  },
  {
    title: "Fix vulnerabilities\nin your code",
    linkText: "Explore Code Security",
    linkHref: "#",
    icon: "code",
  },
];

// Main Component
export default function GithubSecurityHero({
  badge = "GitHub Advanced Security",
  headline = "Security that moves at the\nspeed of development",
  primaryCta = { text: "Request a demo", href: "#" },
  secondaryCta = { text: "See plans & pricing", href: "#" },
  featureCards = defaultFeatureCards,
  companyLogos = defaultCompanyLogos,
}: GithubSecurityHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#0d1117] overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
        }}
      />

      {/* Top Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10"
      >
        {/* Left side - Logo and nav items */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="#" className="text-white hover:text-white/80 transition-colors">
            <GitHubLogo />
          </a>
          <div className="hidden lg:flex items-center gap-1">
            {defaultNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 px-3 py-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={14} />}
              </a>
            ))}
          </div>
        </div>

        {/* Right side - Search and auth */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/20 text-white/50 text-sm">
            <Search size={14} />
            <span>Search or jump to...</span>
            <span className="ml-4 px-1.5 py-0.5 rounded border border-white/20 text-xs">
              /
            </span>
          </div>
          <a
            href="#"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Sign in
          </a>
          <a
            href="#"
            className="px-3 py-1.5 rounded-md border border-white/30 text-sm text-white hover:border-white transition-colors"
          >
            Sign up
          </a>
        </div>
      </motion.nav>

      {/* Sub Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="relative z-10 flex items-center gap-4 sm:gap-6 px-4 sm:px-6 py-3 overflow-x-auto scrollbar-hide"
      >
        <a
          href="#"
          className="flex-shrink-0 text-base font-semibold text-white"
        >
          GitHub Security
        </a>
        <span className="text-white/30">/</span>
        <div className="flex items-center gap-1 sm:gap-4">
          {defaultSubNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex-shrink-0 px-2 py-1 text-sm transition-colors ${
                item.isActive
                  ? "text-white border-b-2 border-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <span className="px-4 py-1.5 rounded-full border border-blue-500/50 text-sm text-blue-400 bg-blue-500/10">
            {badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-instrument-serif text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white italic leading-tight tracking-tight"
        >
          {headline.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < headline.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 sm:mt-10"
        >
          <a
            href={primaryCta.href}
            className="w-full sm:w-auto px-6 py-3 rounded-md bg-white text-[#0d1117] text-sm font-medium text-center hover:bg-white/90 transition-colors"
          >
            {primaryCta.text}
          </a>
          <a
            href={secondaryCta.href}
            className="w-full sm:w-auto px-6 py-3 rounded-md bg-blue-600 text-white text-sm font-medium text-center hover:bg-blue-500 transition-colors"
          >
            {secondaryCta.text}
          </a>
        </motion.div>

        {/* Feature Cards */}
        <div className="flex flex-col sm:flex-row gap-4 mt-16 sm:mt-20">
          {featureCards.map((card, index) => (
            <FeatureCardComponent key={card.title} {...card} index={index} />
          ))}
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mt-16 sm:mt-20"
        >
          {companyLogos.map((logo) => (
            <div key={logo.name} className="flex items-center">
              {logo.logoElement}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
