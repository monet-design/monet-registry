"use client";

import { motion } from "motion/react";
import {
  ChevronDown,
  Calendar,
  ArrowLeft,
  BarChart3,
  Bot,
  Cloud,
  Settings,
  Zap,
  TestTube,
  Rocket,
  Workflow,
  MessageSquare,
  LayoutGrid,
  Users,
  LineChart,
  Target,
} from "lucide-react";
import "./font.css";

// Types
interface NavItem {
  label: string;
  hasDropdown?: boolean;
}

interface SidebarMenuItem {
  icon: React.ReactNode;
  label: string;
  hasDropdown?: boolean;
  isActive?: boolean;
  isSubmenu?: boolean;
}

interface TopicCard {
  title: string;
  conversations: string;
  cxScore: string;
  color: string;
  size?: "large" | "medium" | "small";
}

interface ChartRow {
  label: string;
}

interface FinAiInsightsHeroProps {
  logoText?: string;
  headline?: {
    prefix?: string;
    highlight?: string;
    suffix?: string;
  };
  subheadline?: string;
  primaryCta?: string;
  secondaryCta?: string;
  navItems?: NavItem[];
}

// Logo Icon Component (snowflake-like pattern)
function LogoIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L12 22M2 12L22 12M4.93 4.93L19.07 19.07M19.07 4.93L4.93 19.07"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="3" fill="white" />
      <circle cx="12" cy="5" r="1.5" fill="white" />
      <circle cx="12" cy="19" r="1.5" fill="white" />
      <circle cx="5" cy="12" r="1.5" fill="white" />
      <circle cx="19" cy="12" r="1.5" fill="white" />
    </svg>
  );
}

// Aurora Background Effect
function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main aurora glow */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[600px] opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 70% 20%, rgba(56, 189, 248, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 85% 40%, rgba(168, 85, 247, 0.25) 0%, transparent 45%), radial-gradient(ellipse at 60% 30%, rgba(34, 211, 238, 0.2) 0%, transparent 40%)",
        }}
      />
      {/* Light beam effect */}
      <div
        className="absolute top-[10%] right-[15%] w-[400px] h-[500px] rotate-12 opacity-40"
        style={{
          background:
            "linear-gradient(180deg, rgba(147, 197, 253, 0.15) 0%, rgba(196, 181, 253, 0.1) 30%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      {/* Mountain silhouette gradient */}
      <div
        className="absolute bottom-[25%] right-[5%] w-[600px] h-[400px] opacity-70"
        style={{
          background:
            "linear-gradient(to top, #0a0a10 0%, transparent 60%)",
        }}
      />
    </div>
  );
}

// Navigation Component
function Navigation({
  logoText,
  navItems,
}: {
  logoText: string;
  navItems: NavItem[];
}) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12 relative z-10"
    >
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <LogoIcon />
        <ChevronDown className="w-4 h-4 text-white/60" />
      </div>

      {/* Center: Nav Items */}
      <div className="hidden lg:flex items-center gap-1">
        {navItems.map((item, index) => (
          <button
            key={index}
            className="flex items-center gap-1 px-3 py-2 text-sm text-white/80 hover:text-white transition-colors"
          >
            {item.label}
            {item.hasDropdown && (
              <ChevronDown className="w-3.5 h-3.5 text-white/50" />
            )}
          </button>
        ))}
      </div>

      {/* Right: CTA buttons */}
      <div className="flex items-center gap-3">
        <button className="hidden sm:block text-sm text-white/80 hover:text-white transition-colors">
          Contact sales
        </button>
        <button className="hidden sm:block text-sm text-white/80 hover:text-white transition-colors">
          Sign in
        </button>
        <button className="hidden md:block text-sm text-white/80 hover:text-white transition-colors">
          View demo
        </button>
        <button className="px-4 py-2 text-sm font-medium text-[#0a0a10] bg-white rounded-full hover:bg-white/90 transition-colors">
          Start free trial
        </button>
      </div>
    </motion.nav>
  );
}

// Hero Content Component
function HeroContent({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
}: {
  headline: { prefix?: string; highlight?: string; suffix?: string };
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
}) {
  return (
    <div className="relative z-10 px-6 sm:px-8 lg:px-12 pt-12 sm:pt-16 lg:pt-20 max-w-3xl">
      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="font-instrument-serif text-4xl sm:text-5xl lg:text-6xl leading-tight"
      >
        <span className="text-white/50 italic">{headline.prefix} </span>
        <span className="text-white italic">{headline.highlight}</span>
        <br />
        <span className="text-white italic">{headline.suffix}</span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-6 text-base text-white/50 max-w-md leading-relaxed"
      >
        <span className="text-white font-medium">Fin Insights</span>{" "}
        {subheadline}
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-8 flex flex-wrap gap-3"
      >
        <button className="px-6 py-2.5 text-sm font-medium text-[#0a0a10] bg-white rounded-md hover:bg-white/90 transition-colors">
          {primaryCta}
        </button>
        <button className="px-6 py-2.5 text-sm font-medium text-white bg-transparent border border-white/30 rounded-md hover:bg-white/10 transition-colors">
          {secondaryCta}
        </button>
      </motion.div>
    </div>
  );
}

// Sidebar Menu Item Component
function SidebarItem({
  icon,
  label,
  hasDropdown,
  isActive,
  isSubmenu,
}: SidebarMenuItem) {
  return (
    <div
      className={`flex items-center gap-2.5 px-3 py-1.5 rounded-md text-sm cursor-pointer transition-colors ${
        isActive
          ? "bg-[#2a2a35] text-white"
          : isSubmenu
          ? "text-white/40 hover:text-white/60 pl-8"
          : "text-white/60 hover:text-white/80"
      }`}
    >
      {!isSubmenu && <span className="w-4 h-4">{icon}</span>}
      <span className="flex-1">{label}</span>
      {hasDropdown && <ChevronDown className="w-3.5 h-3.5 text-white/40" />}
    </div>
  );
}

// Topic Card Component
function TopicCardComponent({ card }: { card: TopicCard }) {
  const sizeClasses = {
    large: "col-span-1 row-span-2",
    medium: "col-span-1 row-span-1",
    small: "col-span-1 row-span-1",
  };

  return (
    <div
      className={`${sizeClasses[card.size || "medium"]} rounded-lg p-3 ${card.color}`}
    >
      <div className="text-xs font-medium text-white/90 mb-1">{card.title}</div>
      <div className="text-[10px] text-white/60">{card.conversations}</div>
      <div className="text-[10px] text-white/60">{card.cxScore}</div>
    </div>
  );
}

// Mini Chart Row Component
function MiniChartRow({ label }: ChartRow) {
  return (
    <div className="flex items-center gap-3 py-1">
      <span className="text-[10px] text-white/40 w-24 truncate">{label}</span>
      <div className="flex-1 flex items-center gap-0.5">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="w-6 h-4 bg-purple-500/30 rounded-sm"
            style={{
              height: `${8 + Math.random() * 12}px`,
              opacity: 0.3 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Dashboard Preview Component
function DashboardPreview() {
  const sidebarMenuItems: SidebarMenuItem[] = [
    { icon: <BarChart3 size={14} />, label: "Analyze", hasDropdown: true },
    { icon: null, label: "Performance", isSubmenu: true },
    { icon: null, label: "Optimize", isSubmenu: true },
    {
      icon: <LayoutGrid size={14} />,
      label: "Topic Explorer",
      isActive: true,
    },
    { icon: <Cloud size={14} />, label: "Train", hasDropdown: true },
    { icon: <TestTube size={14} />, label: "Test" },
    { icon: <Rocket size={14} />, label: "Deploy", hasDropdown: true },
    { icon: <Settings size={14} />, label: "Fin settings" },
  ];

  const topicCards: TopicCard[] = [
    {
      title: "Activating a new card",
      conversations: "245 CONVERSATIONS",
      cxScore: "95.8% CX SCORE",
      color: "bg-purple-500",
      size: "large",
    },
    {
      title: "Lost or stolen cards",
      conversations: "178 CONVERSATIONS",
      cxScore: "89.2% CX SCORE",
      color: "bg-purple-400/60",
      size: "medium",
    },
    {
      title: "Replacing expired card",
      conversations: "76 CONVERSATIONS",
      cxScore: "92.4% CX SCORE",
      color: "bg-purple-500/80",
      size: "medium",
    },
    {
      title: "Card not working",
      conversations: "54 CONVERSATIONS",
      cxScore: "85.3% CX SCORE",
      color: "bg-purple-400/70",
      size: "medium",
    },
    {
      title: "Virtual card issues",
      conversations: "23 CONVERSATIONS",
      cxScore: "88.2% CX SCORE",
      color: "bg-purple-600/60",
      size: "small",
    },
    {
      title: "Delayed card deliv...",
      conversations: "32 CONVERSATIONS",
      cxScore: "84.7% CX SCORE",
      color: "bg-purple-500/60",
      size: "small",
    },
    {
      title: "International card use i...",
      conversations: "41 CONVERSATIONS",
      cxScore: "90.1% CX SCORE",
      color: "bg-purple-400/50",
      size: "small",
    },
  ];

  const chartRows: ChartRow[] = [
    { label: "Activating a new card" },
    { label: "Lost or stolen cards" },
    { label: "Card not working" },
    { label: "Replacing expired card" },
    { label: "Delayed card delivery" },
    { label: "Virtual card issues" },
    { label: "International card use issues" },
    { label: "Blocked or suspended cards" },
    { label: "Spending limits and..." },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="relative z-10 mx-4 sm:mx-8 lg:mx-12 mt-12 sm:mt-16"
    >
      <div className="rounded-xl border border-white/10 bg-[#0d0d14]/90 backdrop-blur-sm shadow-2xl overflow-hidden">
        <div className="flex">
          {/* Left Sidebar - Icon bar */}
          <div className="hidden sm:flex flex-col items-center gap-4 p-3 bg-[#0a0a10] border-r border-white/5">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
              <LayoutGrid size={16} className="text-white/60" />
            </div>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <Bot size={16} className="text-white/40" />
            </div>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <Zap size={16} className="text-white/40" />
            </div>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <MessageSquare size={16} className="text-white/40" />
            </div>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <LineChart size={16} className="text-white/40" />
            </div>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <Target size={16} className="text-white/40" />
            </div>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <Users size={16} className="text-white/40" />
            </div>
          </div>

          {/* Left Sidebar - Menu */}
          <div className="hidden md:block w-48 p-3 border-r border-white/5">
            <div className="flex items-center gap-2 mb-4">
              <Bot size={16} className="text-white/80" />
              <span className="text-sm font-medium text-white">
                Fin AI Agent
              </span>
            </div>

            <div className="space-y-0.5">
              {sidebarMenuItems.map((item, index) => (
                <SidebarItem key={index} {...item} />
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 space-y-0.5">
              <SidebarItem
                icon={<Workflow size={14} />}
                label="Workflows"
              />
              <SidebarItem
                icon={<Zap size={14} />}
                label="Simple automations"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <LayoutGrid size={16} className="text-white/60" />
              <span className="text-sm font-medium text-white">
                Topics Explorer
              </span>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <button className="flex items-center gap-2 px-3 py-1.5 text-xs text-white/60 bg-white/5 rounded-md border border-white/10">
                <Calendar size={12} />
                <span>Nov 20, 2024 - Feb 11, 2025</span>
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 text-xs text-white bg-green-600/20 rounded-full border border-green-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span>Customer Experience (CX) score</span>
                <ChevronDown size={12} />
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 text-xs text-white/60 bg-white/5 rounded-md border border-white/10">
                <span>View 10</span>
                <ChevronDown size={12} />
              </button>
            </div>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-4 text-xs">
              <ArrowLeft size={12} className="text-white/40" />
              <span className="text-white/40">
                Back to 10 Highest-volume topics
              </span>
              <span className="text-white/40">{">"}</span>
              <span className="text-white font-medium">Card Management</span>
            </div>

            {/* Content Grid */}
            <div className="flex gap-4">
              {/* Topic Cards Grid */}
              <div className="flex-1 grid grid-cols-3 gap-2 auto-rows-[60px]">
                {topicCards.map((card, index) => (
                  <TopicCardComponent key={index} card={card} />
                ))}
              </div>

              {/* Mini Chart */}
              <div className="hidden lg:block w-64 p-3 bg-white/5 rounded-lg border border-white/5">
                <div className="space-y-1">
                  {chartRows.map((row, index) => (
                    <MiniChartRow key={index} {...row} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
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

// Main Component
export default function FinAiInsightsHero({
  logoText = "Fin",
  headline = {
    prefix: "A new era of",
    highlight: "Insights",
    suffix: "has arrived",
  },
  subheadline = "is a groundbreaking, AI-powered product that gives you complete, real-time visibility across your entire customer experience.",
  primaryCta = "Start free trial",
  secondaryCta = "View demo",
  navItems = defaultNavItems,
}: FinAiInsightsHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#0a0a10] font-inter overflow-hidden">
      {/* Aurora Background */}
      <AuroraBackground />

      {/* Navigation */}
      <Navigation logoText={logoText} navItems={navItems} />

      {/* Hero Content */}
      <HeroContent
        headline={headline}
        subheadline={subheadline}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
      />

      {/* Dashboard Preview */}
      <DashboardPreview />

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a10] to-transparent pointer-events-none" />
    </section>
  );
}
