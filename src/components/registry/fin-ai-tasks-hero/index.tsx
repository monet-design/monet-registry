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
import { ChevronDown, Play } from "lucide-react";
import "./font.css";

// Types
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface FinAiTasksHeroProps {
  mode?: "light" | "dark";
  logoIcon?: React.ReactNode;
  headline?: {
    prefix?: string;
    highlight?: string;
    conjunction?: string;
    action?: string;
    object?: string;
  };
  description?: {
    bold?: string;
    regular?: string;
  };
  primaryCta?: {
    text: string;
    onClick?: () => void;
  };
  secondaryCta?: {
    text: string;
    onClick?: () => void;
  };
  navItems?: NavItem[];
  rightNavItems?: { label: string; href: string }[];
}

// Logo Icon Component
function LogoIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="6" height="6" rx="1" fill="#FF6B6B" />
      <rect x="11" y="2" width="6" height="6" rx="1" fill="#FF6B6B" />
      <rect x="20" y="2" width="6" height="6" rx="1" fill="#FF6B6B" />
      <rect x="2" y="11" width="6" height="6" rx="1" fill="#FF6B6B" />
      <rect x="11" y="11" width="6" height="6" rx="1" fill="#FF6B6B" />
      <rect x="20" y="11" width="6" height="6" rx="1" fill="#FF6B6B" />
      <rect x="2" y="20" width="6" height="6" rx="1" fill="#FF6B6B" />
      <rect x="11" y="20" width="6" height="6" rx="1" fill="#FF6B6B" />
    </svg>
  );
}

// Grid Background Component
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Diagonal grid lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="diagonal-grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="60"
              stroke="white"
              strokeWidth="0.5"
            />
            <line
              x1="0"
              y1="0"
              x2="60"
              y2="0"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal-grid)" />
      </svg>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0A0F1C]/80" />
    </div>
  );
}

// Code Body Panel
function CodeBodyPanel({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30, rotateY: -5 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
      className="absolute top-[10%] right-[5%] w-[340px] bg-[#0D1117] border border-[#30363D] rounded-lg overflow-hidden shadow-2xl"
      style={{ transform: "perspective(1000px)" }}
    >
      <div className="flex items-center gap-2 px-3 py-2 bg-[#161B22] border-b border-[#30363D]">
        <span className="text-[10px] text-[#8B949E] tracking-wider uppercase">
          Code Body
        </span>
        <div className="ml-auto flex items-center gap-2">
          <button className="flex items-center gap-1 bg-[#238636] text-white text-[10px] px-2 py-1 rounded">
            <Play size={10} />
            Retest
          </button>
        </div>
      </div>
      <div className="p-3 font-mono text-[11px] leading-relaxed">
        <div className="flex">
          <span className="text-[#6E7681] w-6 text-right mr-3 select-none">1</span>
          <span>
            <span className="text-[#FF7B72]">from</span>{" "}
            <span className="text-[#D2A8FF]">datetime</span>{" "}
            <span className="text-[#FF7B72]">import</span>{" "}
            <span className="text-[#79C0FF]">datetime</span>,{" "}
            <span className="text-[#79C0FF]">date</span>
          </span>
        </div>
        <div className="flex">
          <span className="text-[#6E7681] w-6 text-right mr-3 select-none">2</span>
          <span className="text-[#8B949E]"></span>
        </div>
        <div className="flex">
          <span className="text-[#6E7681] w-6 text-right mr-3 select-none">3</span>
          <span>
            <span className="text-[#FF7B72]">def</span>{" "}
            <span className="text-[#D2A8FF]">check_exchange</span>
            <span className="text-[#C9D1D9]">(order,</span>
          </span>
        </div>
        <div className="flex">
          <span className="text-[#6E7681] w-6 text-right mr-3 select-none">4</span>
          <span className="text-[#C9D1D9] ml-8">now=None):</span>
        </div>
        <div className="flex">
          <span className="text-[#6E7681] w-6 text-right mr-3 select-none">5</span>
          <span className="text-[#C9D1D9] ml-4">
            exchange_status(order,
          </span>
        </div>
        <div className="flex">
          <span className="text-[#6E7681] w-6 text-right mr-3 select-none">6</span>
          <span className="text-[#C9D1D9] ml-8">
            now = now <span className="text-[#FF7B72]">or</span> datetime.now()
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// Order Exchange Panel
function OrderExchangePanel({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className="absolute top-[5%] right-[25%] w-[200px] bg-[#0D1117] border border-[#30363D] rounded-lg overflow-hidden shadow-xl"
    >
      <div className="flex items-center gap-2 px-3 py-2 bg-[#161B22] border-b border-[#30363D]">
        <div className="w-3 h-3 rounded bg-[#238636]" />
        <span className="text-[10px] text-[#8B949E] tracking-wider uppercase">
          Order Exchange
        </span>
      </div>
      <div className="p-3">
        <div className="border-l-2 border-[#30363D] pl-3 space-y-1">
          <div className="h-2 w-16 bg-[#30363D] rounded" />
          <div className="h-2 w-24 bg-[#30363D] rounded" />
          <div className="h-2 w-20 bg-[#30363D] rounded" />
        </div>
      </div>
    </motion.div>
  );
}

// Instructions Panel
function InstructionsPanel({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className="absolute bottom-[20%] right-[8%] w-[280px] bg-[#0D1117] border border-[#30363D] rounded-lg overflow-hidden shadow-xl"
    >
      <div className="flex items-center gap-2 px-3 py-2 bg-[#161B22] border-b border-[#30363D]">
        <span className="text-[10px] text-[#8B949E] tracking-wider uppercase">
          Instructions
        </span>
      </div>
      <div className="p-3 space-y-3 text-[11px]">
        <div className="flex gap-2">
          <span className="text-[#6E7681]">1.</span>
          <span className="text-[#C9D1D9]">
            <span className="text-[#79C0FF]">USE:</span>{" "}
            <span className="text-[#A5D6FF]">GET_ORDER_INFO</span>{" "}
            <span className="text-[#8B949E]">to get the customer&apos;s</span>
          </span>
        </div>
        <div className="flex gap-2">
          <span className="text-[#6E7681]">2.</span>
          <span className="text-[#C9D1D9]">
            <span className="text-[#8B949E]">After the customer selects the order,</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// Chat Bubble Component
function ChatBubble({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className="absolute bottom-[10%] left-[35%] bg-[#F5F5F5] rounded-2xl rounded-bl-sm px-4 py-2.5 shadow-lg"
    >
      <span className="text-[#1A1A1A] text-sm">Can I exchange my order?</span>
    </motion.div>
  );
}

// Small Info Card
function SmallInfoCard({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className="absolute top-[15%] right-[38%] bg-[#0D1117] border border-[#30363D] rounded-lg p-3 shadow-lg w-[160px]"
    >
      <div className="text-[9px] text-[#8B949E] uppercase tracking-wider mb-2">
        Order Exchange
      </div>
      <div className="text-[10px] text-[#C9D1D9] leading-relaxed">
        Use this task when any customer expresses the intention of exchanging an order.
      </div>
    </motion.div>
  );
}

// Right Side Visual Component
function RightSideVisual() {
  return (
    <div className="relative w-full h-full">
      <OrderExchangePanel delay={0.4} />
      <SmallInfoCard delay={0.5} />
      <CodeBodyPanel delay={0.6} />
      <InstructionsPanel delay={0.7} />
      <ChatBubble delay={0.9} />
    </div>
  );
}

// Default navigation items
const defaultNavItems: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "Product", href: "#", hasDropdown: true },
  { label: "AI Technology", href: "#", hasDropdown: true },
  { label: "Solutions", href: "#", hasDropdown: true },
  { label: "Customers", href: "#" },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Pricing", href: "#" },
];

const defaultRightNavItems = [
  { label: "Contact sales", href: "#" },
  { label: "Sign in", href: "#" },
  { label: "View demo", href: "#" },
];

// Main Component
export default function FinAiTasksHero({
  mode = "light",
  logoIcon,
  headline = {
    prefix: "The",
    highlight: "#1 AI Agent",
    conjunction: "for",
    action: "resolving",
    object: "complex queries",
  },
  description = {
    bold: "Fin automates the most complex customer queries",
    regular:
      "like refunds, transaction disputes, and technical troubleshooting with speed and reliability. Give Fin detailed, step-by-step instructions, and it will follow them exactly as expected\u2014reducing time to resolution and improving the customer experience.",
  },
  primaryCta = { text: "Start free trial" },
  secondaryCta = { text: "View demo" },
  navItems = defaultNavItems,
  rightNavItems = defaultRightNavItems,
}: FinAiTasksHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#0A0F1C] font-inter overflow-hidden">
      {/* Background Grid */}
      <GridBackground />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 flex items-center justify-between px-6 py-4"
      >
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          {logoIcon || <LogoIcon />}
          <ChevronDown size={14} className="text-white/60" />
        </div>

        {/* Center: Nav Items */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors"
            >
              {item.label}
              {item.hasDropdown && (
                <ChevronDown size={12} className="text-white/50" />
              )}
            </a>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          {rightNavItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm ${
                index < rightNavItems.length - 1
                  ? "text-white/70 hover:text-white"
                  : "text-white/70 hover:text-white"
              } transition-colors hidden sm:block`}
            >
              {item.label}
            </a>
          ))}
          <button className="bg-white text-[#0A0F1C] px-4 py-2 rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
            {primaryCta.text}
          </button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center min-h-[calc(100vh-80px)]">
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2 px-6 lg:px-12 xl:px-20 py-12 lg:py-0">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight"
          >
            <span className="font-instrument-serif italic text-white font-normal">
              {headline.prefix}
            </span>{" "}
            <span className="text-white font-normal">{headline.highlight}</span>
            <br />
            <span className="font-instrument-serif italic text-white font-normal ml-16 sm:ml-24 lg:ml-32">
              {headline.conjunction}
            </span>{" "}
            <span className="text-white font-light">{headline.action}</span>
            <br />
            <span className="text-white font-light">{headline.object}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 text-base lg:text-lg text-[#9CA3AF] leading-relaxed max-w-lg"
          >
            <span className="text-white font-medium">{description.bold}</span>{" "}
            {description.regular}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 flex items-center gap-4"
          >
            <button
              onClick={primaryCta.onClick}
              className="bg-white text-[#0A0F1C] px-6 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
            >
              {primaryCta.text}
            </button>
            <button
              onClick={secondaryCta.onClick}
              className="border border-white/30 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
            >
              {secondaryCta.text}
            </button>
          </motion.div>
        </div>

        {/* Right Side: Visual Elements */}
        <div className="hidden lg:block w-1/2 h-[600px] relative">
          <RightSideVisual />
        </div>
      </div>
    </section>
  );
}
