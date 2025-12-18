"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#0a0d1c",
    accent: "#4B9FFF",
    textPrimary: "#FFFFFF",
    textSecondary: "#8B8D94",
    cardBg: "#151825",
    cardBorder: "#2a2d3a",
  },
  dark: {
    background: "#0a0d1c",
    accent: "#4B9FFF",
    textPrimary: "#FFFFFF",
    textSecondary: "#8B8D94",
    cardBg: "#151825",
    cardBorder: "#2a2d3a",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ChevronDown, Play, ArrowUpRight } from "lucide-react";

// Types
interface NavItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
}

interface FinAiTasksHeroProps {
  mode?: "light" | "dark";
  headline?: {
    serif: string;
    sans: string;
  };
  description?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  navItems?: NavItem[];
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Home" },
  { label: "Product", hasDropdown: true },
  { label: "AI Technology", hasDropdown: true },
  { label: "Solutions", hasDropdown: true },
  { label: "Customers" },
  { label: "Resources", hasDropdown: true },
  { label: "Pricing" },
];

// Logo Component
function FinLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L2 7v10l10 5 10-5V7L12 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M12 2v20M2 7l10 5 10-5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

// Code Interface Illustration
function CodeInterfaceIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full h-full"
    >
      {/* Background Grid Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 600 500">
          {/* Vertical lines */}
          {[...Array(15)].map((_, i) => (
            <motion.line
              key={`v-${i}`}
              x1={i * 40 + 20}
              y1="0"
              x2={i * 40 + 20}
              y2="500"
              stroke="#4B9FFF"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 1, delay: i * 0.05 }}
            />
          ))}
          {/* Horizontal lines */}
          {[...Array(12)].map((_, i) => (
            <motion.line
              key={`h-${i}`}
              x1="0"
              y1={i * 40 + 20}
              x2="600"
              y2={i * 40 + 20}
              stroke="#4B9FFF"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.2 }}
              transition={{ duration: 1, delay: i * 0.05 }}
            />
          ))}
        </svg>
      </div>

      {/* ORDER EXCHANGE Card - Top Right */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute top-4 right-4 w-48 bg-[#151825] rounded-lg border border-[#2a2d3a] shadow-xl overflow-hidden"
      >
        <div className="px-3 py-2 border-b border-[#2a2d3a] flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4B9FFF]" />
          <span className="text-[10px] font-mono text-white tracking-wider">ORDER EXCHANGE</span>
        </div>
        <div className="p-3 text-[8px] font-mono text-[#8B8D94] space-y-1">
          <p>Use this task when any customer</p>
          <p>expresses the intention of</p>
          <p>exchanging an order.</p>
        </div>
      </motion.div>

      {/* A_PATH Card - Far Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute top-4 -right-8 w-32 bg-[#151825] rounded-lg border border-[#2a2d3a] shadow-xl overflow-hidden"
      >
        <div className="px-2 py-1 border-b border-[#2a2d3a]">
          <span className="text-[8px] font-mono text-[#8B8D94]">A_PATH</span>
        </div>
        <div className="p-2 text-[7px] font-mono text-[#8B8D94]">
          <p>INSTRUCTIONS</p>
          <p className="mt-1 text-[6px]">Identify the customer&apos;s order</p>
          <p className="text-[6px]">ID only if it qualifies for</p>
          <p className="text-[6px]">exchange. If not provided, deny</p>
        </div>
      </motion.div>

      {/* RETEST Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute top-28 right-12"
      >
        <div className="flex items-center gap-1 px-2 py-1 bg-[#1a1d2e] rounded border border-[#3a3d4e]">
          <ArrowUpRight className="w-2.5 h-2.5 text-[#4B9FFF]" />
          <span className="text-[8px] font-mono text-white">RETEST</span>
        </div>
      </motion.div>

      {/* CODE BODY Card - Center */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="absolute top-32 left-8 w-72 bg-[#0d1017] rounded-lg border border-[#2a2d3a] shadow-2xl overflow-hidden"
      >
        <div className="px-3 py-2 border-b border-[#2a2d3a] flex items-center justify-between">
          <span className="text-[10px] font-mono text-[#8B8D94] tracking-wider">CODE BODY</span>
          <span className="text-[8px] font-mono text-[#4B9FFF]">TRAIN FIN OR EXAMPLE INPUT</span>
        </div>
        <div className="p-3 text-[9px] font-mono leading-relaxed">
          <div className="flex">
            <span className="text-[#5c6370] w-6 select-none">1</span>
            <span><span className="text-[#c678dd]">from</span> <span className="text-[#e5c07b]">datetime</span> <span className="text-[#c678dd]">import</span> <span className="text-[#61afef]">datetime</span>, <span className="text-[#61afef]">timedelta</span></span>
          </div>
          <div className="flex">
            <span className="text-[#5c6370] w-6 select-none">2</span>
            <span className="text-[#5c6370]"></span>
          </div>
          <div className="flex">
            <span className="text-[#5c6370] w-6 select-none">3</span>
            <span><span className="text-[#c678dd]">def</span> <span className="text-[#61afef]">check_exchange_status</span>(<span className="text-[#e5c07b]">order</span>,</span>
          </div>
          <div className="flex">
            <span className="text-[#5c6370] w-6 select-none">4</span>
            <span className="pl-8"><span className="text-[#e5c07b]">nowdatetime</span>):</span>
          </div>
          <div className="flex">
            <span className="text-[#5c6370] w-6 select-none">5</span>
            <span className="pl-4"><span className="text-[#e5c07b]">now</span> = <span className="text-[#e5c07b]">now</span> <span className="text-[#c678dd]">or</span> <span className="text-[#61afef]">datetime</span>.<span className="text-[#61afef]">now</span>()</span>
          </div>
          <div className="flex">
            <span className="text-[#5c6370] w-6 select-none">6</span>
            <span className="text-[#5c6370]"></span>
          </div>
          <div className="flex">
            <span className="text-[#5c6370] w-6 select-none">7</span>
            <span className="pl-4"><span className="text-[#5c6370]"># Step 1: Product check</span></span>
          </div>
          <div className="flex">
            <span className="text-[#5c6370] w-6 select-none">8</span>
            <span className="pl-4"><span className="text-[#c678dd]">if</span> <span className="text-[#e5c07b]">order</span>.<span className="text-[#61afef]">get</span>(<span className="text-[#98c379]">&quot;product&quot;</span>,</span>
          </div>
        </div>
      </motion.div>

      {/* INSTRUCTIONS Card - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-20 left-4 w-80 bg-[#151825] rounded-lg border border-[#2a2d3a] shadow-xl overflow-hidden"
      >
        <div className="px-3 py-2 border-b border-[#2a2d3a]">
          <span className="text-[10px] font-mono text-[#8B8D94] tracking-wider">INSTRUCTIONS</span>
        </div>
        <div className="p-3 text-[9px] text-[#8B8D94] space-y-2">
          <div className="flex gap-2">
            <span className="text-white">1.</span>
            <p>
              <span className="text-[#4B9FFF] bg-[#1a2535] px-1 rounded text-[8px]">USE GET ORDER INFO</span>
              {" "}to get the customer&apos;s Shopify orders, list them with ID,
              product name, product category, and time. then ask which to exchange.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="text-white">2.</span>
            <p>
              After the customer selects the order.
              and <span className="text-[#4B9FFF]">↑ UPDATE</span>: selects the order. <span className="text-[#4B9FFF]">↑ UPDATE SELECT/REPL ↑ Update</span> general user.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Chat Bubble */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="absolute bottom-8 left-20 bg-[#2a2d3a] rounded-2xl px-4 py-2 shadow-lg"
      >
        <span className="text-[10px] text-white">Can I exchange my order?</span>
      </motion.div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        <motion.path
          d="M180 160 L180 200 L200 200"
          stroke="#4B9FFF"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        <motion.path
          d="M300 280 L300 320"
          stroke="#4B9FFF"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
      </svg>
    </motion.div>
  );
}

// Main Component
export default function FinAiTasksHero({
  mode = "dark",
  headline = {
    serif: "The #1 AI Agent\nfor",
    sans: "resolving\ncomplex queries",
  },
  description = "Fin automates the most complex customer queries like refunds, transaction disputes, and technical troubleshooting with speed and reliability. Give Fin detailed, step-by-step instructions, and it will follow them exactly as expected—reducing time to resolution and improving the customer experience.",
  primaryCtaText = "Start free trial",
  secondaryCtaText = "View demo",
  navItems = defaultNavItems,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: FinAiTasksHeroProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Custom styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

        .font-serif-italic {
          font-family: 'Instrument Serif', serif;
          font-style: italic;
        }

        .font-sans-body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <svg className="absolute left-0 top-0 h-full w-1/2" viewBox="0 0 400 800">
          {[...Array(20)].map((_, i) => (
            <motion.line
              key={`bg-v-${i}`}
              x1={i * 20}
              y1="0"
              x2={i * 20}
              y2="800"
              stroke="#4B9FFF"
              strokeWidth="0.3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1, delay: i * 0.02 }}
            />
          ))}
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-30 w-full px-4 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <FinLogo className="w-6 h-6 text-white" />
            <ChevronDown className="w-3 h-3 text-[#8B8D94]" />
          </motion.div>

          {/* Nav Items - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href || "#"}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                className="flex items-center gap-1 text-sm text-[#8B8D94] hover:text-white transition-colors font-sans-body"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
              </motion.a>
            ))}
          </div>

          {/* Auth Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <button className="text-sm text-[#8B8D94] hover:text-white transition-colors font-sans-body">
              Contact sales
            </button>
            <button className="text-sm text-[#8B8D94] hover:text-white transition-colors font-sans-body">
              Sign in
            </button>
            <button className="text-sm text-[#8B8D94] hover:text-white transition-colors font-sans-body">
              View demo
            </button>
            <button className="px-4 py-2 text-sm text-white bg-[#1a1d2e] hover:bg-[#252840] border border-[#2a2d3a] rounded-full transition-colors font-sans-body">
              Start free trial
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 lg:px-8 pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
            >
              {headline.serif.split("\n").map((line, i) => (
                <span key={i} className="block font-serif-italic text-white">
                  {line}
                </span>
              ))}
              {headline.sans.split("\n").map((line, i) => (
                <span
                  key={`sans-${i}`}
                  className="block font-sans-body font-normal"
                  style={{ color: colors.textSecondary }}
                >
                  {line}
                </span>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base lg:text-lg leading-relaxed font-sans-body max-w-lg"
              style={{ color: colors.textSecondary }}
            >
              {description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onPrimaryCtaClick}
                className="px-6 py-3 text-sm font-medium text-[#0a0d1c] bg-white hover:bg-gray-100 border border-white rounded-full transition-colors font-sans-body"
              >
                {primaryCtaText}
              </button>
              <button
                onClick={onSecondaryCtaClick}
                className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#1a1d2e] hover:bg-[#252840] border border-[#2a2d3a] rounded-full transition-colors font-sans-body"
              >
                <Play className="w-4 h-4 fill-current" />
                {secondaryCtaText}
              </button>
            </motion.div>
          </div>

          {/* Right Column - Code Interface Illustration */}
          <div className="relative h-[500px] lg:h-[600px]">
            <CodeInterfaceIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
