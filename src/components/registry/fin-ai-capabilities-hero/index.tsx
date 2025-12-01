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
import { ChevronDown } from "lucide-react";

// Props interface
interface FinAiCapabilitiesHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  navItems?: Array<{ label: string; hasDropdown?: boolean }>;
  rightNavItems?: string[];
  headline?: {
    line1: string;
    line2: string;
  };
  description?: string;
  footnoteRef?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  sidebarTitle?: string;
  sidebarDescription?: string;
  sidebarLinkText?: string;
  cycleNodes?: string[];
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

// Logo Component (Intercom-style grid icon)
function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="6" height="6" rx="1" fill="white" />
      <rect x="11" y="2" width="6" height="6" rx="1" fill="white" />
      <rect x="20" y="2" width="6" height="6" rx="1" fill="white" />
      <rect x="2" y="11" width="6" height="6" rx="1" fill="white" />
      <rect x="11" y="11" width="6" height="6" rx="1" fill="white" />
      <rect x="20" y="11" width="6" height="6" rx="1" fill="white" />
      <rect x="2" y="20" width="6" height="6" rx="1" fill="white" />
      <rect x="11" y="20" width="6" height="6" rx="1" fill="white" />
      <rect x="20" y="20" width="6" height="6" rx="1" fill="white" />
    </svg>
  );
}

// Grid Background Component
function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Vertical lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "120px 100%",
        }}
      />
      {/* Horizontal lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "100% 120px",
        }}
      />
    </div>
  );
}

// Header Component
function Header({
  logoText,
  navItems,
  rightNavItems,
  primaryCtaText,
}: {
  logoText: string;
  navItems: Array<{ label: string; hasDropdown?: boolean }>;
  rightNavItems: string[];
  primaryCtaText: string;
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex w-full items-center justify-between px-6 py-4 lg:px-10"
    >
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <LogoIcon className="h-6 w-6" />
        <ChevronDown className="h-4 w-4 text-white/60" />
        <span className="h-6 w-[1px] bg-white/20" />
      </div>

      {/* Center: Nav */}
      <nav className="hidden items-center gap-1 lg:flex">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center gap-1 px-4 py-2 text-[14px] text-white/90 transition-colors hover:text-white"
          >
            {item.label}
            {item.hasDropdown && (
              <ChevronDown className="h-3.5 w-3.5 text-white/60" />
            )}
          </a>
        ))}
      </nav>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {rightNavItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="hidden text-[14px] text-white/90 transition-colors hover:text-white md:block"
          >
            {item}
          </a>
        ))}
        <button className="rounded-full bg-white px-4 py-2 text-[14px] font-medium text-[#0a0f14] transition-colors hover:bg-white/90">
          {primaryCtaText}
        </button>
      </div>
    </motion.header>
  );
}

// Cycle Diagram Component
function CycleDiagram({ nodes }: { nodes: string[] }) {
  // Node positions on the oval path (4 positions: top, right, bottom, left)
  const nodePositions = [
    { x: 50, y: 0, label: nodes[0] }, // ANALYZE - top
    { x: 100, y: 50, label: nodes[1] }, // TRAIN - right
    { x: 50, y: 100, label: nodes[2] }, // TEST - bottom
    { x: 0, y: 50, label: nodes[3] }, // DEPLOY - left
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="relative mx-auto mt-12 w-full max-w-3xl lg:mt-20"
    >
      <svg
        viewBox="0 0 700 400"
        className="h-auto w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer dashed oval */}
        <ellipse
          cx="350"
          cy="200"
          rx="320"
          ry="170"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
          strokeDasharray="8 8"
          fill="none"
        />

        {/* Inner solid oval */}
        <ellipse
          cx="350"
          cy="200"
          rx="260"
          ry="130"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
          fill="none"
        />

        {/* Center rounded rectangle (stadium shape) */}
        <rect
          x="180"
          y="120"
          width="340"
          height="160"
          rx="80"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1"
          fill="none"
        />

        {/* Small connecting dots */}
        {/* Top connector dot (white) */}
        <circle cx="350" cy="70" r="4" fill="white" />

        {/* Left-bottom connector dot (orange) */}
        <circle cx="350" cy="330" r="4" fill="#f05d23" />

        {/* Node labels */}
        {/* ANALYZE - top */}
        <g>
          <rect
            x="285"
            y="10"
            width="130"
            height="40"
            rx="20"
            fill="rgba(255,255,255,0.08)"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
          />
          <text
            x="350"
            y="36"
            textAnchor="middle"
            fill="white"
            fontSize="13"
            fontWeight="500"
            letterSpacing="1"
            fontFamily="Inter, sans-serif"
          >
            {nodePositions[0].label}
          </text>
        </g>

        {/* TRAIN - right */}
        <g>
          <rect
            x="580"
            y="180"
            width="100"
            height="40"
            rx="20"
            fill="rgba(255,255,255,0.08)"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
          />
          <text
            x="630"
            y="206"
            textAnchor="middle"
            fill="white"
            fontSize="13"
            fontWeight="500"
            letterSpacing="1"
            fontFamily="Inter, sans-serif"
          >
            {nodePositions[1].label}
          </text>
        </g>

        {/* TEST - bottom */}
        <g>
          <rect
            x="300"
            y="350"
            width="100"
            height="40"
            rx="20"
            fill="rgba(255,255,255,0.08)"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
          />
          <text
            x="350"
            y="376"
            textAnchor="middle"
            fill="white"
            fontSize="13"
            fontWeight="500"
            letterSpacing="1"
            fontFamily="Inter, sans-serif"
          >
            {nodePositions[2].label}
          </text>
        </g>

        {/* DEPLOY - left */}
        <g>
          <rect
            x="20"
            y="180"
            width="110"
            height="40"
            rx="20"
            fill="rgba(255,255,255,0.08)"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
          />
          <text
            x="75"
            y="206"
            textAnchor="middle"
            fill="white"
            fontSize="13"
            fontWeight="500"
            letterSpacing="1"
            fontFamily="Inter, sans-serif"
          >
            {nodePositions[3].label}
          </text>
        </g>
      </svg>
    </motion.div>
  );
}

// Sidebar Note Component
function SidebarNote({
  footnoteRef,
  title,
  description,
  linkText,
}: {
  footnoteRef: string;
  title: string;
  description: string;
  linkText: string;
}) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="absolute right-6 top-1/4 hidden w-48 lg:right-10 lg:block xl:w-52"
    >
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-wider">
          <span className="text-[#f05d23]">{footnoteRef}</span>
          <span className="ml-1 text-white">BUILT ON FIN AI ENGINE</span>
          <span className="text-white/60">&trade;</span>
        </p>
        <p className="text-sm leading-relaxed text-white/70">{description}</p>
        <a
          href="#"
          className="inline-block text-sm text-[#f05d23] transition-colors hover:text-[#ff7a45]"
        >
          {linkText}
        </a>
      </div>
    </motion.aside>
  );
}

// Main Component
export default function FinAiCapabilitiesHero({
  mode = "light",
  logoText = "Intercom",
  navItems = [
    { label: "Home" },
    { label: "Product", hasDropdown: true },
    { label: "AI Technology", hasDropdown: true },
    { label: "Solutions", hasDropdown: true },
    { label: "Customers" },
    { label: "Resources", hasDropdown: true },
    { label: "Pricing" },
  ],
  rightNavItems = ["Contact sales", "Sign in", "View demo"],
  headline = {
    line1: "Complete, fully configurable",
    line2: "AI Agent system",
  },
  description = "Fin is the only complete, fully configurable AI Agent System in customer service—empowering support teams to customize, test, and continuously improve Fin through a no-code user experience anyone can manage.",
  footnoteRef = "[1]",
  primaryCtaText = "Start free trial",
  secondaryCtaText = "View demo",
  sidebarTitle = "BUILT ON FIN AI ENGINE",
  sidebarDescription = "Fin combines the only complete, fully configurable AI Agent System with a patented AI architecture to deliver the highest performance.",
  sidebarLinkText = "Learn more",
  cycleNodes = ["ANALYZE", "TRAIN", "TEST", "DEPLOY"],
  onPrimaryCtaClick = () => {},
  onSecondaryCtaClick = () => {},
}: FinAiCapabilitiesHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0f14]">
      {/* Font import for Instrument Serif */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
        .font-instrument-serif {
          font-family: 'Instrument Serif', serif;
        }
      `}</style>

      {/* Grid Background */}
      <GridBackground />

      {/* Header */}
      <Header
        logoText={logoText}
        navItems={navItems}
        rightNavItems={rightNavItems}
        primaryCtaText={primaryCtaText}
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 lg:px-10 lg:pt-20">
        {/* Hero Text Content */}
        <div className="max-w-3xl">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-instrument-serif text-5xl font-normal leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {headline.line1}
            <br />
            {headline.line2}
          </motion.h1>

          {/* Separator line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="my-6 h-[1px] w-16 origin-left bg-white/30"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl text-base leading-relaxed text-white/70 lg:text-lg"
          >
            {description}
            <sup className="ml-1 text-[#f05d23]">{footnoteRef}</sup>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={onPrimaryCtaClick}
              className="rounded-full bg-white px-6 py-3 text-[14px] font-medium text-[#0a0f14] transition-colors hover:bg-white/90"
            >
              {primaryCtaText}
            </button>
            <button
              onClick={onSecondaryCtaClick}
              className="rounded-full border border-white/30 bg-transparent px-6 py-3 text-[14px] font-medium text-white transition-colors hover:border-white/50 hover:bg-white/5"
            >
              {secondaryCtaText}
            </button>
          </motion.div>
        </div>

        {/* Sidebar Note */}
        <SidebarNote
          footnoteRef={footnoteRef}
          title={sidebarTitle}
          description={sidebarDescription}
          linkText={sidebarLinkText}
        />

        {/* Cycle Diagram */}
        <CycleDiagram nodes={cycleNodes} />
      </div>
    </section>
  );
}
