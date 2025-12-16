"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#ffffff",
    cardBackground: "#F5F5F5",
    text: "#1a1a1a",
    textMuted: "#666666",
    buttonBg: "#1a1a1a",
    buttonText: "#ffffff",
    accent: "#FCD34D", // Yellow
    accentBlue: "#60A5FA",
    accentPink: "#F472B6",
  },
  dark: {
    background: "#0a0a0a",
    cardBackground: "#1a1a1a",
    text: "#ffffff",
    textMuted: "#a1a1a1",
    buttonBg: "#ffffff",
    buttonText: "#1a1a1a",
    accent: "#FCD34D",
    accentBlue: "#60A5FA",
    accentPink: "#F472B6",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import "./font.css";

// 3D Isometric Blocks SVG Component
function IsometricBlocks() {
  return (
    <svg
      viewBox="0 0 400 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Dashed connection lines */}
      <path
        d="M50 200 L150 150"
        stroke="#ccc"
        strokeWidth="1"
        strokeDasharray="4 4"
      />
      <path
        d="M350 100 L280 150"
        stroke="#ccc"
        strokeWidth="1"
        strokeDasharray="4 4"
      />
      <path
        d="M380 250 L300 220"
        stroke="#ccc"
        strokeWidth="1"
        strokeDasharray="4 4"
      />

      {/* Yellow block with dots - left bottom */}
      <g transform="translate(80, 200)">
        <path d="M0 30 L50 0 L100 30 L50 60 Z" fill="#FCD34D" />
        <path d="M0 30 L0 70 L50 100 L50 60 Z" fill="#EAB308" />
        <path d="M50 60 L50 100 L100 70 L100 30 Z" fill="#F59E0B" />
        {/* Dots pattern */}
        <circle cx="25" cy="30" r="2" fill="#1a1a1a" opacity="0.3" />
        <circle cx="40" cy="25" r="2" fill="#1a1a1a" opacity="0.3" />
        <circle cx="55" cy="30" r="2" fill="#1a1a1a" opacity="0.3" />
        <circle cx="70" cy="25" r="2" fill="#1a1a1a" opacity="0.3" />
        <circle cx="30" cy="40" r="2" fill="#1a1a1a" opacity="0.3" />
        <circle cx="50" cy="40" r="2" fill="#1a1a1a" opacity="0.3" />
        <circle cx="65" cy="40" r="2" fill="#1a1a1a" opacity="0.3" />
      </g>

      {/* Black block with grid - center */}
      <g transform="translate(150, 130)">
        <path d="M0 30 L50 0 L100 30 L50 60 Z" fill="#1a1a1a" />
        <path d="M0 30 L0 70 L50 100 L50 60 Z" fill="#0a0a0a" />
        <path d="M50 60 L50 100 L100 70 L100 30 Z" fill="#2a2a2a" />
        {/* Grid lines */}
        <line x1="20" y1="20" x2="80" y2="20" stroke="white" strokeWidth="0.5" opacity="0.5" />
        <line x1="15" y1="30" x2="85" y2="30" stroke="white" strokeWidth="0.5" opacity="0.5" />
        <line x1="20" y1="40" x2="80" y2="40" stroke="white" strokeWidth="0.5" opacity="0.5" />
        <line x1="35" y1="10" x2="35" y2="50" stroke="white" strokeWidth="0.5" opacity="0.5" />
        <line x1="50" y1="5" x2="50" y2="55" stroke="white" strokeWidth="0.5" opacity="0.5" />
        <line x1="65" y1="10" x2="65" y2="50" stroke="white" strokeWidth="0.5" opacity="0.5" />
      </g>

      {/* White block - top center */}
      <g transform="translate(180, 60)">
        <path d="M0 30 L50 0 L100 30 L50 60 Z" fill="#f5f5f5" />
        <path d="M0 30 L0 70 L50 100 L50 60 Z" fill="#e5e5e5" />
        <path d="M50 60 L50 100 L100 70 L100 30 Z" fill="#d5d5d5" />
      </g>

      {/* Pink block with T - right top */}
      <g transform="translate(250, 40)">
        <path d="M0 30 L50 0 L100 30 L50 60 Z" fill="#F472B6" />
        <path d="M0 30 L0 70 L50 100 L50 60 Z" fill="#DB2777" />
        <path d="M50 60 L50 100 L100 70 L100 30 Z" fill="#EC4899" />
        {/* T letter */}
        <text x="50" y="35" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold" fontFamily="serif">T</text>
      </g>

      {/* Yellow block with frame - right */}
      <g transform="translate(280, 120)">
        <path d="M0 30 L50 0 L100 30 L50 60 Z" fill="#FCD34D" />
        <path d="M0 30 L0 70 L50 100 L50 60 Z" fill="#EAB308" />
        <path d="M50 60 L50 100 L100 70 L100 30 Z" fill="#F59E0B" />
        {/* Red accent marker */}
        <rect x="70" y="15" width="15" height="10" fill="#EF4444" rx="2" />
      </g>

      {/* Axis indicator */}
      <g transform="translate(320, 280)">
        <line x1="0" y1="0" x2="30" y2="15" stroke="#1a1a1a" strokeWidth="1" />
        <line x1="0" y1="0" x2="0" y2="-25" stroke="#1a1a1a" strokeWidth="1" />
        <line x1="0" y1="0" x2="-25" y2="12" stroke="#1a1a1a" strokeWidth="1" />
        <text x="32" y="20" fontSize="10" fill="#666">x</text>
        <text x="2" y="-28" fontSize="10" fill="#666">y</text>
        <text x="-35" y="15" fontSize="10" fill="#666">z</text>
      </g>

      {/* Small connector dots */}
      <circle cx="50" cy="200" r="3" fill="#1a1a1a" />
      <circle cx="350" cy="100" r="3" fill="#1a1a1a" />
      <circle cx="380" cy="250" r="3" fill="#1a1a1a" />
    </svg>
  );
}

// Feature Card Mockup Components
function DesignTokensMockup() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 h-full">
      <div className="space-y-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">I</span>
          <span className="text-gray-600">12px • Spacing</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-lg">↳</span>
          <span className="text-gray-600">4px • Radius</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">Aa</span>
          <span className="text-gray-600">Regular • 20</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-blue-500"></div>
          <span className="text-gray-600">#02A2F2</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">◐</span>
          <span className="text-gray-600">Effects</span>
        </div>
        <div className="mt-4 p-2 bg-gray-50 rounded">
          <div className="text-[10px] text-gray-400 italic font-serif">figr</div>
          <div className="mt-2 space-y-1 text-[10px]">
            <div className="flex items-center gap-1">
              <span className="text-gray-400">├</span>
              <span>Soft</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-gray-400">├</span>
              <span>Small</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-gray-400">I</span>
              <span>Medium</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-gray-400">Aa</span>
              <span>Heading1</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-sm bg-blue-500"></div>
              <span>Primary/300</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ComponentsMockup() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 h-full">
      <div className="text-[10px] text-gray-400 mb-2">@username</div>
      <div className="flex items-center justify-between mb-3">
        <span className="font-semibold text-sm">$34,23.20</span>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gray-200"></div>
          <div className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded">3</div>
        </div>
      </div>
      <div className="text-xs text-gray-500 mb-2">Main city</div>
      <div className="bg-gray-50 rounded p-2 text-[10px] space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Type</span>
          <span className="text-gray-500">Bar graph</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Style</span>
          <select className="text-[10px] border rounded px-1 bg-white">
            <option>Round</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function BlocksMockup() {
  return (
    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 h-full">
      <div className="text-[10px] text-gray-400 mb-1">9:41</div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1">
          <span className="text-gray-400">&lt;</span>
          <span className="text-xs">Index today</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="bg-green-100 text-green-600 text-[10px] px-2 py-0.5 rounded">Allen</div>
          <div className="w-5 h-5 rounded bg-gray-200"></div>
        </div>
      </div>
      <div className="mb-2">
        <div className="text-lg font-semibold">$34,23.20</div>
        <div className="text-[10px] text-green-500">+$12 (10%)</div>
      </div>
      <div className="h-20 relative mb-2">
        {/* Simple candlestick chart mockup */}
        <svg viewBox="0 0 200 60" className="w-full h-full">
          <rect x="10" y="30" width="4" height="20" fill="#22c55e" />
          <rect x="30" y="25" width="4" height="25" fill="#22c55e" />
          <rect x="50" y="20" width="4" height="30" fill="#ef4444" />
          <rect x="70" y="15" width="4" height="35" fill="#22c55e" />
          <rect x="90" y="25" width="4" height="20" fill="#ef4444" />
          <rect x="110" y="10" width="4" height="40" fill="#22c55e" />
          <rect x="130" y="20" width="4" height="25" fill="#22c55e" />
          <rect x="150" y="30" width="4" height="15" fill="#ef4444" />
          {/* Labels */}
          <rect x="65" y="8" width="30" height="12" rx="2" fill="#22c55e" />
          <text x="80" y="16" textAnchor="middle" fill="white" fontSize="6">Shahi</text>
        </svg>
      </div>
      <div className="flex gap-2 text-[8px] text-gray-400 mb-2">
        <span>1D</span>
        <span>1W</span>
        <span className="bg-blue-500 text-white px-2 rounded">1M</span>
        <span>3M</span>
        <span>6M</span>
        <span>1Y</span>
        <span>ALL</span>
      </div>
      <div className="space-y-1 text-[10px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-full bg-gray-900"></div>
            <span>Apple</span>
          </div>
          <span>$228.49</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-blue-500 text-xs">G</span>
            <span>Google</span>
            <span className="bg-yellow-100 text-yellow-600 text-[8px] px-1 rounded">Jenny</span>
          </div>
          <span>$164.42</span>
        </div>
      </div>
    </div>
  );
}

function StyleMockup() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 h-full">
      <div className="flex items-center justify-between mb-3">
        <span className="font-serif italic text-gray-600">Button</span>
        <div className="flex items-center gap-1 bg-gray-100 rounded px-2 py-1">
          <span className="text-gray-400">—</span>
          <span className="text-xs">1</span>
          <span className="text-gray-400">+</span>
        </div>
      </div>
      <div className="space-y-2 text-xs">
        <div className="flex items-center gap-2 bg-gray-900 text-white px-3 py-2 rounded-lg">
          <span className="text-yellow-300">✉</span>
          <span>Enter your email</span>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-1 bg-pink-50 px-2 py-1 rounded text-[10px]">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-orange-400"></div>
            <span>Dominion 1</span>
          </div>
          <div className="bg-gray-100 px-2 py-1 rounded text-[10px]">$261</div>
          <div className="bg-gray-100 px-2 py-1 rounded text-[10px]">$300</div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="bg-yellow-50 p-2 rounded">
            <div className="text-gray-400">Trip</div>
            <div className="font-semibold">HONG KONG</div>
            <div className="text-gray-400">2 Hrs Aug</div>
          </div>
          <div className="bg-blue-50 p-2 rounded">
            <div className="text-gray-400">Type</div>
            <div className="font-semibold">SINGLE</div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  mockup: React.ReactNode;
  delay?: number;
}

function FeatureCard({ title, description, mockup, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-[#F5F5F5] rounded-2xl p-6 flex flex-col group hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex-1 mb-6">{mockup}</div>
      <div className="flex items-end justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300"
        >
          <ArrowUpRight className="w-5 h-5" />
        </motion.div>
      </div>
    </motion.div>
  );
}

interface SaaspoFeatureSectionsFigrProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  ctaText?: string;
  features?: {
    title: string;
    description: string;
  }[];
}

export default function SaaspoFeatureSectionsFigr({
  mode = "light",
  title = "Complete Design Systems at\nYour Fingertips",
  subtitle = "Design systems in a day, not months. Focus on building, while we handle the design consistency",
  ctaText = "Build Your System",
  features = [
    {
      title: "Set Up Design Tokens In Minutes",
      description: "Skip the setup headaches — deploy your entire design foundation in few clicks!",
    },
    {
      title: "Craft Components Your Way",
      description: "Export production-ready pieces with flexible properties and export controls",
    },
    {
      title: "Assemble premade blocks",
      description: "Create stunning interfaces in minutes using drag-and-drop, ready-made components",
    },
    {
      title: "Your Components your style",
      description: "Instantly update your design language with consistent styles across all components.",
    },
  ],
}: SaaspoFeatureSectionsFigrProps) {
  const colors = COLORS[mode];
  const mockups = [<DesignTokensMockup key="tokens" />, <ComponentsMockup key="components" />, <BlocksMockup key="blocks" />, <StyleMockup key="style" />];

  return (
    <section
      className="relative w-full py-16 md:py-24 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16 md:mb-24">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h1
              className="figr-title text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
              style={{ color: colors.text }}
            >
              {title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p
              className="text-base md:text-lg mb-8 max-w-md"
              style={{ color: colors.textMuted }}
            >
              {subtitle}
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-lg font-medium text-sm w-fit"
              style={{
                backgroundColor: colors.buttonBg,
                color: colors.buttonText,
              }}
            >
              {ctaText}
            </motion.button>
          </motion.div>

          {/* Right - 3D Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-md">
              <IsometricBlocks />
            </div>
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              mockup={mockups[index]}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
