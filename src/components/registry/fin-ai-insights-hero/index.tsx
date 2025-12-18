"use client";

import { motion } from "motion/react";
import { ChevronDown, Calendar, BarChart3, Settings, Zap, TestTube2, Rocket, Workflow, Bot, Search, LineChart } from "lucide-react";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  background: "#0a0b14",
  cardBackground: "#0f1119",
  cardBorder: "#1a1c2a",
  accent: "#9b6dff",
  accentLight: "#b794ff",
  textPrimary: "#ffffff",
  textSecondary: "#9ca3af",
  textMuted: "#6b7280",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Types
interface NavItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
}

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  hasSubmenu?: boolean;
  children?: { label: string; isActive?: boolean }[];
}

interface TopicCard {
  title: string;
  conversations: string;
  cxScore: string;
  size: "large" | "medium" | "small";
}

interface ChartItem {
  label: string;
  data: number[];
}

interface FinAiInsightsHeroProps {
  logoText?: string;
  headline?: string;
  highlightedText?: string;
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
function IntercomLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <path d="M8 12v8M12 10v12M16 8v16M20 10v12M24 12v8" stroke="#0a0b14" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Aurora Background
function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${COLORS.background} 0%, ${COLORS.background} 100%)`,
        }}
      />

      {/* Aurora effect - center glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px]"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 60% 30%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse 70% 40% at 40% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)
          `,
        }}
      />

      {/* Subtle star-like dots */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Mountain silhouette effect */}
      <div
        className="absolute bottom-[40%] left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
        style={{
          background: `
            linear-gradient(135deg, transparent 40%, rgba(30, 27, 75, 0.6) 50%, transparent 60%),
            linear-gradient(225deg, transparent 40%, rgba(20, 20, 40, 0.4) 55%, transparent 65%)
          `,
          clipPath: 'polygon(0% 100%, 30% 40%, 50% 60%, 70% 30%, 100% 100%)',
        }}
      />
    </div>
  );
}

// Sidebar Menu Items
const defaultSidebarItems: SidebarItem[] = [
  { icon: <Bot className="w-4 h-4" />, label: "Fin AI Agent", isActive: false },
  {
    icon: <BarChart3 className="w-4 h-4" />,
    label: "Analyze",
    hasSubmenu: true,
    children: [
      { label: "Performance" },
      { label: "Optimize" },
      { label: "Topic Explorer", isActive: true },
    ]
  },
  { icon: <LineChart className="w-4 h-4" />, label: "Train", hasSubmenu: true },
  { icon: <TestTube2 className="w-4 h-4" />, label: "Test" },
  { icon: <Rocket className="w-4 h-4" />, label: "Deploy", hasSubmenu: true },
  { icon: <Settings className="w-4 h-4" />, label: "Fin settings" },
];

const defaultTopicCards: TopicCard[] = [
  { title: "Activating a new card", conversations: "245 CONVERSATIONS", cxScore: "59.8% CX SCORE", size: "large" },
  { title: "Lost or stolen cards", conversations: "156 CONVERSATIONS", cxScore: "48.2% CX SCORE", size: "medium" },
  { title: "Replacing expired card", conversations: "95 CONVERSATIONS", cxScore: "52.4% CX SCORE", size: "medium" },
  { title: "Card not working", conversations: "34 CONVERSATIONS", cxScore: "53.2% CX SCORE", size: "medium" },
  { title: "Virtual card issues", conversations: "21 CONVERSATIONS", cxScore: "44.2% CX SCORE", size: "small" },
  { title: "Delayed card deliv...", conversations: "32 CONVERSATIONS", cxScore: "44.7% CX SCORE", size: "small" },
  { title: "International card use i...", conversations: "33 CONVERSATIONS", cxScore: "45% CX SCORE", size: "small" },
];

const defaultChartData: ChartItem[] = [
  { label: "Activating a new card", data: [40, 60, 45, 70, 55, 80, 65, 75, 50] },
  { label: "Lost or stolen cards", data: [30, 45, 55, 40, 60, 50, 65, 45, 55] },
  { label: "Card not working", data: [20, 35, 25, 40, 30, 45, 35, 40, 30] },
  { label: "Replacing expired card", data: [35, 50, 40, 55, 45, 60, 50, 55, 45] },
  { label: "Delayed card delivery", data: [25, 40, 30, 45, 35, 50, 40, 45, 35] },
  { label: "Virtual card issues", data: [15, 30, 20, 35, 25, 40, 30, 35, 25] },
  { label: "International card use issues", data: [20, 35, 25, 40, 30, 45, 35, 40, 30] },
  { label: "Blocked or suspended cards", data: [10, 25, 15, 30, 20, 35, 25, 30, 20] },
  { label: "Spending limits and...", data: [18, 28, 22, 32, 26, 38, 30, 34, 28] },
];

// Mini Chart Component
function MiniChart({ data, color = COLORS.accent }: { data: number[]; color?: string }) {
  const maxVal = Math.max(...data);
  return (
    <div className="flex items-end gap-0.5 h-6">
      {data.map((val, i) => (
        <div
          key={i}
          className="w-1.5 rounded-t-sm"
          style={{
            height: `${(val / maxVal) * 100}%`,
            backgroundColor: color,
            opacity: 0.7 + (i / data.length) * 0.3,
          }}
        />
      ))}
    </div>
  );
}

// Dashboard Preview Component
function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      className="relative mx-auto max-w-5xl px-4 sm:px-6"
    >
      <div
        className="rounded-2xl overflow-hidden border shadow-2xl"
        style={{
          backgroundColor: COLORS.cardBackground,
          borderColor: COLORS.cardBorder,
        }}
      >
        <div className="flex">
          {/* Sidebar Icons */}
          <div
            className="w-12 py-4 flex flex-col items-center gap-3 border-r"
            style={{ borderColor: COLORS.cardBorder }}
          >
            <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
              <Bot className="w-3 h-3 text-white/60" />
            </div>
            <div className="w-6 h-6 rounded flex items-center justify-center text-white/40">
              <Search className="w-3 h-3" />
            </div>
            <div className="w-6 h-6 rounded flex items-center justify-center text-white/40">
              <Zap className="w-3 h-3" />
            </div>
            <div className="w-6 h-6 rounded flex items-center justify-center text-white/40">
              <Settings className="w-3 h-3" />
            </div>
            <div className="w-6 h-6 rounded flex items-center justify-center text-white/40">
              <BarChart3 className="w-3 h-3" />
            </div>
          </div>

          {/* Sidebar Menu */}
          <div
            className="w-48 py-4 px-3 border-r"
            style={{ borderColor: COLORS.cardBorder }}
          >
            <div className="text-white text-sm font-medium mb-4">Fin AI Agent</div>

            {defaultSidebarItems.map((item, idx) => (
              <div key={idx} className="mb-1">
                <div className={`flex items-center gap-2 px-2 py-1.5 rounded text-xs ${item.isActive ? 'bg-white/10 text-white' : 'text-white/60'}`}>
                  {item.icon}
                  <span>{item.label}</span>
                  {item.hasSubmenu && <ChevronDown className="w-3 h-3 ml-auto" />}
                </div>
                {item.children && (
                  <div className="ml-6 mt-1">
                    {item.children.map((child, childIdx) => (
                      <div
                        key={childIdx}
                        className={`px-2 py-1 text-xs rounded ${child.isActive ? 'text-white bg-white/5' : 'text-white/50'}`}
                        style={child.isActive ? { backgroundColor: 'rgba(155, 109, 255, 0.2)' } : {}}
                      >
                        {child.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="mt-4 pt-3 border-t" style={{ borderColor: COLORS.cardBorder }}>
              <div className="flex items-center gap-2 px-2 py-1.5 text-xs text-white/60">
                <Workflow className="w-4 h-4" />
                <span>Workflows</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 text-xs text-white/60">
                <Zap className="w-4 h-4" />
                <span>Simple automations</span>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-white/10 flex items-center justify-center">
                  <Settings className="w-2 h-2 text-white/60" />
                </div>
                <span className="text-white text-sm font-medium">Topics Explorer</span>
              </div>
            </div>

            {/* Filters Row */}
            <div className="flex items-center gap-3 mb-3">
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs text-white/70 border"
                style={{ borderColor: COLORS.cardBorder, backgroundColor: 'rgba(255,255,255,0.03)' }}
              >
                <Calendar className="w-3 h-3" />
                <span>Nov 20, 2024 - Feb 11, 2025</span>
              </div>
              <div className="flex-1" />
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs border"
                style={{ borderColor: COLORS.accent, color: COLORS.accent }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.accent }} />
                Customer Experience (CX) score
                <ChevronDown className="w-3 h-3" />
              </div>
              <div
                className="px-3 py-1.5 rounded-md text-xs text-white/70 border"
                style={{ borderColor: COLORS.cardBorder }}
              >
                View 10 <ChevronDown className="w-3 h-3 inline ml-1" />
              </div>
            </div>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-white/50 mb-4">
              <span className="hover:text-white/70 cursor-pointer">&larr; Back to 10 Highest-volume topics</span>
              <span>&gt;</span>
              <span className="text-white">Card Management</span>
            </div>

            <div className="flex gap-4">
              {/* Topic Cards Grid */}
              <div className="flex-1">
                <div className="grid grid-cols-3 gap-2">
                  {/* Large Card */}
                  <div
                    className="col-span-1 row-span-2 p-3 rounded-lg"
                    style={{ backgroundColor: COLORS.accent }}
                  >
                    <div className="text-white text-xs font-medium mb-1">{defaultTopicCards[0].title}</div>
                    <div className="text-white/70 text-[10px] mb-0.5">{defaultTopicCards[0].conversations}</div>
                    <div className="text-white/70 text-[10px]">{defaultTopicCards[0].cxScore}</div>
                  </div>

                  {/* Medium Cards */}
                  <div
                    className="col-span-2 p-3 rounded-lg"
                    style={{ backgroundColor: 'rgba(155, 109, 255, 0.4)' }}
                  >
                    <div className="text-white/80 text-xs">{defaultTopicCards[1].title}</div>
                    <div className="text-white/50 text-[10px]">{defaultTopicCards[1].conversations}</div>
                  </div>

                  {/* Row 2 */}
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: 'rgba(155, 109, 255, 0.3)' }}
                  >
                    <div className="text-white/80 text-xs">{defaultTopicCards[2].title}</div>
                    <div className="text-white/50 text-[10px]">{defaultTopicCards[2].conversations}</div>
                  </div>
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: 'rgba(155, 109, 255, 0.35)' }}
                  >
                    <div className="text-white/80 text-xs">{defaultTopicCards[3].title}</div>
                    <div className="text-white/50 text-[10px]">{defaultTopicCards[3].conversations}</div>
                  </div>

                  {/* Row 3 - Small Cards */}
                  <div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: 'rgba(155, 109, 255, 0.25)' }}
                  >
                    <div className="text-white/70 text-[10px]">{defaultTopicCards[4].title}</div>
                  </div>
                  <div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: 'rgba(155, 109, 255, 0.28)' }}
                  >
                    <div className="text-white/70 text-[10px]">{defaultTopicCards[5].title}</div>
                  </div>
                  <div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: 'rgba(155, 109, 255, 0.22)' }}
                  >
                    <div className="text-white/70 text-[10px]">{defaultTopicCards[6].title}</div>
                  </div>
                </div>
              </div>

              {/* Charts Panel */}
              <div
                className="w-64 p-3 rounded-lg border"
                style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderColor: COLORS.cardBorder }}
              >
                {defaultChartData.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 py-1.5 border-b border-white/5 last:border-0">
                    <div className="w-20 text-[9px] text-white/50 truncate">{item.label}</div>
                    <div className="flex-1">
                      <MiniChart data={item.data} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Main Component
export default function FinAiInsightsHero({
  logoText = "Intercom",
  headline = "A new era of",
  highlightedText = "Insights\nhas arrived",
  description = "Fin Insights is a groundbreaking, AI-powered product\nthat gives you complete, real-time visibility across your\nentire customer experience.",
  primaryCtaText = "Start free trial",
  secondaryCtaText = "View demo",
  navItems = defaultNavItems,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: FinAiInsightsHeroProps) {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Font import for Instrument Serif */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');

        .font-serif-italic {
          font-family: 'Instrument Serif', serif;
          font-style: italic;
        }
      `}</style>

      {/* Aurora Background */}
      <AuroraBackground />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <IntercomLogo className="w-7 h-7 text-white" />
            <ChevronDown className="w-3 h-3 text-white/60" />
          </div>

          {/* Nav Items - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href || "#"}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                className="flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Side Nav */}
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-white/80 hover:text-white transition-colors hidden sm:block">
            Contact sales
          </a>
          <a href="#" className="text-sm text-white/80 hover:text-white transition-colors hidden sm:block">
            Sign in
          </a>
          <a href="#" className="text-sm text-white/80 hover:text-white transition-colors hidden sm:block">
            View demo
          </a>
          <button
            onClick={onPrimaryCtaClick}
            className="px-4 py-2 text-sm font-medium rounded-full bg-white text-gray-900 hover:bg-white/90 transition-colors"
          >
            {primaryCtaText}
          </button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-12 pb-8 sm:px-8 sm:pt-16 lg:pt-20">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
        >
          <span className="text-white/80 font-light">{headline} </span>
          <span className="font-serif-italic text-white whitespace-pre-line">{highlightedText}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 max-w-lg text-base sm:text-lg leading-relaxed whitespace-pre-line"
          style={{ color: COLORS.textSecondary }}
        >
          <span className="text-white font-medium">Fin Insights</span> {description.replace('Fin Insights ', '')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex items-center gap-4"
        >
          <button
            onClick={onPrimaryCtaClick}
            className="px-5 py-2.5 text-sm font-medium rounded-md bg-white text-gray-900 hover:bg-white/90 transition-colors"
          >
            {primaryCtaText}
          </button>
          <button
            onClick={onSecondaryCtaClick}
            className="px-5 py-2.5 text-sm font-medium rounded-md border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            {secondaryCtaText}
          </button>
        </motion.div>
      </div>

      {/* Dashboard Preview */}
      <DashboardPreview />
    </section>
  );
}
