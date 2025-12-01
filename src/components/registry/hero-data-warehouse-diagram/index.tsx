"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#0B1E24",      // Dark teal background
    button: "#384A4F",          // Dark gray button
    accent: "#C0CE5D",          // Lime green accent
    green: "#C7F4C2",           // Light green box
  },
  dark: {
    background: "#0a1a1f",
    button: "#2a3a3f",
    accent: "#b3c150",
    green: "#b0e0a8",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, Github } from "lucide-react";

interface HeroDataWarehouseDiagramProps {
  mode?: "light" | "dark";
  bannerText?: string;
  bannerLinkText?: string;
  bannerLinkHref?: string;
  logoText?: string;
  navItems?: Array<{ label: string; href: string }>;
  ctaText?: string;
  ctaHref?: string;
  headline?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  githubHref?: string;
  diagramNodes?: {
    applications?: string;
    oltp?: string;
    streams?: string;
    central?: string;
    output?: string;
  };
}

export default function HeroDataWarehouseDiagram({
  mode = "light",
  bannerText = "Check out The Missing Bridge in Enterprise Data Architecture on the Patch Blog",
  bannerLinkText = "patch-tech/dpm",
  bannerLinkHref = "#",
  logoText = "patch",
  navItems = [
    { label: "Product", href: "#" },
    { label: "Docs", href: "#" },
    { label: "Blog", href: "#" },
  ],
  ctaText = "Early Access",
  ctaHref = "#",
  headline = "Get the most\nfrom your data\nwarehouse",
  description = "You've invested a lot in your data warehouse. Patch helps you efficiently run your most intensive workloads, like those powering customer-facing features and expensive batch jobs.",
  primaryButtonText = "Early Access",
  primaryButtonHref = "#",
  githubHref = "#",
  diagramNodes = {
    applications: "applications",
    oltp: "OLTP",
    streams: "streams",
    central: "patch",
    output: "data warehouse/lake",
  },
}: HeroDataWarehouseDiagramProps) {
  const colors = COLORS[mode];
  return (
    <section className="relative min-h-screen w-full bg-white">
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-[#0B1E24] py-2.5 px-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href={bannerLinkHref}
            className="flex items-center gap-2 text-white text-sm hover:opacity-80 transition-opacity"
          >
            <span>{bannerText}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={githubHref}
            className="flex items-center gap-2 text-white text-sm hover:opacity-80 transition-opacity"
          >
            <Github className="w-4 h-4" />
            <span>{bannerLinkText}</span>
          </a>
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full py-4 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-2xl font-medium text-[#0B1E24] tracking-tight"
            >
              {logoText}
            </a>
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-sm text-[#0B1E24] hover:opacity-70 transition-opacity"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <a
            href={ctaHref}
            className="px-5 py-2.5 bg-[#384A4F] text-white text-sm rounded-md hover:bg-[#2a3a3f] transition-colors"
          >
            {ctaText}
          </a>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-[#0B1E24] leading-[1.1] tracking-tight font-serif whitespace-pre-line">
              {headline}
            </h1>
            <p className="text-base md:text-lg text-[#0B1E24]/80 max-w-md leading-relaxed">
              {description}
            </p>
            <a
              href={primaryButtonHref}
              className="inline-block px-6 py-3 bg-[#C0CE5D] text-[#0B1E24] text-sm font-medium rounded-md hover:bg-[#b3c150] transition-colors"
            >
              {primaryButtonText}
            </a>
          </motion.div>

          {/* Right Content - Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <DataFlowDiagram nodes={diagramNodes} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface DataFlowDiagramProps {
  nodes?: {
    applications?: string;
    oltp?: string;
    streams?: string;
    central?: string;
    output?: string;
  };
}

function DataFlowDiagram({
  nodes = {
    applications: "applications",
    oltp: "OLTP",
    streams: "streams",
    central: "patch",
    output: "data warehouse/lake",
  },
}: DataFlowDiagramProps) {
  return (
    <svg
      viewBox="0 0 500 450"
      className="w-full h-auto max-w-lg mx-auto"
      fill="none"
    >
      {/* Applications box (top right) */}
      <motion.g
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <rect
          x="320"
          y="20"
          width="130"
          height="70"
          rx="4"
          fill="#C7F4C2"
          stroke="#0B1E24"
          strokeWidth="1"
        />
        <text
          x="385"
          y="60"
          textAnchor="middle"
          className="text-xs fill-[#0B1E24]"
          fontFamily="monospace"
        >
          {nodes.applications}
        </text>
        {/* Connection dot */}
        <rect x="382" y="87" width="6" height="6" fill="#0B1E24" />
      </motion.g>

      {/* OLTP box (left middle) */}
      <motion.g
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <rect
          x="80"
          y="150"
          width="90"
          height="90"
          rx="4"
          fill="white"
          stroke="#D8D8D8"
          strokeWidth="1"
        />
        {/* OLTP icon - grid of boxes */}
        <rect
          x="105"
          y="170"
          width="20"
          height="20"
          rx="2"
          fill="white"
          stroke="#0B1E24"
          strokeWidth="1"
        />
        <rect
          x="130"
          y="170"
          width="20"
          height="20"
          rx="2"
          fill="white"
          stroke="#0B1E24"
          strokeWidth="1"
        />
        <rect
          x="105"
          y="195"
          width="20"
          height="20"
          rx="2"
          fill="#0B1E24"
          stroke="#0B1E24"
          strokeWidth="1"
        />
        <rect
          x="130"
          y="195"
          width="20"
          height="20"
          rx="2"
          fill="white"
          stroke="#0B1E24"
          strokeWidth="1"
        />
        <text
          x="125"
          y="232"
          textAnchor="middle"
          className="text-xs fill-[#0B1E24]"
          fontFamily="monospace"
        >
          {nodes.oltp}
        </text>
        {/* Connection dots */}
        <rect x="167" y="192" width="6" height="6" fill="#0B1E24" />
      </motion.g>

      {/* Streams box (left bottom) */}
      <motion.g
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <rect
          x="80"
          y="260"
          width="90"
          height="90"
          rx="4"
          fill="white"
          stroke="#D8D8D8"
          strokeWidth="1"
        />
        {/* Streams icon - stacked boxes */}
        <rect
          x="105"
          y="280"
          width="45"
          height="18"
          rx="2"
          fill="white"
          stroke="#0B1E24"
          strokeWidth="1"
        />
        <rect
          x="105"
          y="303"
          width="45"
          height="18"
          rx="2"
          fill="#0B1E24"
          stroke="#0B1E24"
          strokeWidth="1"
        />
        <text
          x="125"
          y="342"
          textAnchor="middle"
          className="text-xs fill-[#0B1E24]"
          fontFamily="monospace"
        >
          {nodes.streams}
        </text>
        {/* Connection dots */}
        <rect x="167" y="302" width="6" height="6" fill="#0B1E24" />
      </motion.g>

      {/* Center circle - Patch */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <circle cx="310" cy="250" r="80" fill="#F3F5E7" stroke="none" />
        {/* Lime quarter */}
        <path
          d="M 310 250 L 310 170 A 80 80 0 0 1 390 250 Z"
          fill="#C0CE5D"
        />
        <text
          x="340"
          y="280"
          textAnchor="middle"
          className="text-sm fill-[#0B1E24]"
          fontFamily="monospace"
        >
          {nodes.central}
        </text>
        {/* Connection dots */}
        <rect x="307" y="167" width="6" height="6" fill="#0B1E24" />
        <rect x="387" y="247" width="6" height="6" fill="#0B1E24" />
        <rect x="307" y="327" width="6" height="6" fill="#0B1E24" />
      </motion.g>

      {/* Data warehouse/lake box (bottom) */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <rect
          x="270"
          y="370"
          width="130"
          height="70"
          rx="4"
          fill="#DEE2E1"
          stroke="#0B1E24"
          strokeWidth="1"
        />
        <text
          x="335"
          y="410"
          textAnchor="middle"
          className="text-xs fill-[#0B1E24]"
          fontFamily="monospace"
        >
          {nodes.output}
        </text>
        {/* Connection dot */}
        <rect x="332" y="367" width="6" height="6" fill="#0B1E24" />
      </motion.g>

      {/* Connection lines */}
      <motion.g
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        {/* Applications to center */}
        <line
          x1="385"
          y1="93"
          x2="385"
          y2="140"
          stroke="#0B1E24"
          strokeWidth="1"
        />
        <line
          x1="385"
          y1="140"
          x2="310"
          y2="140"
          stroke="#0B1E24"
          strokeWidth="1"
        />
        <line
          x1="310"
          y1="140"
          x2="310"
          y2="167"
          stroke="#0B1E24"
          strokeWidth="1"
        />

        {/* OLTP to center */}
        <line
          x1="173"
          y1="195"
          x2="230"
          y2="195"
          stroke="#0B1E24"
          strokeWidth="1"
        />

        {/* Streams to center */}
        <line
          x1="173"
          y1="305"
          x2="230"
          y2="305"
          stroke="#0B1E24"
          strokeWidth="1"
        />

        {/* Horizontal line connecting OLTP and Streams paths */}
        <line
          x1="230"
          y1="195"
          x2="230"
          y2="305"
          stroke="#0B1E24"
          strokeWidth="1"
        />

        {/* Connection from vertical line to center */}
        <line
          x1="230"
          y1="250"
          x2="230"
          y2="250"
          stroke="#0B1E24"
          strokeWidth="1"
        />

        {/* Center to output */}
        <line
          x1="310"
          y1="330"
          x2="310"
          y2="345"
          stroke="#0B1E24"
          strokeWidth="1"
        />
        <line
          x1="310"
          y1="345"
          x2="335"
          y2="345"
          stroke="#0B1E24"
          strokeWidth="1"
        />
        <line
          x1="335"
          y1="345"
          x2="335"
          y2="367"
          stroke="#0B1E24"
          strokeWidth="1"
        />

        {/* Center to right (applications direction) */}
        <line
          x1="393"
          y1="250"
          x2="450"
          y2="250"
          stroke="#0B1E24"
          strokeWidth="1"
        />
        <line
          x1="450"
          y1="250"
          x2="450"
          y2="55"
          stroke="#0B1E24"
          strokeWidth="1"
        />
        {/* Arrow head */}
        <polygon points="445,60 450,50 455,60" fill="#0B1E24" />
      </motion.g>
    </svg>
  );
}
