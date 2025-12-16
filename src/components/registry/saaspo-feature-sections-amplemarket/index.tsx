"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#8B5CF6", // Purple
    accentHover: "#7C3AED",
    cardBg: "#F7F7F7",
    textPrimary: "#1A1A1A",
    textSecondary: "#666666",
    textMuted: "#999999",
    buttonPurple: "#8B5CF6",
    greenDot: "#22C55E",
    redDot: "#EF4444",
    yellowDot: "#EAB308",
  },
  dark: {
    accent: "#A78BFA",
    accentHover: "#8B5CF6",
    cardBg: "#1F1F1F",
    textPrimary: "#FFFFFF",
    textSecondary: "#A0A0A0",
    textMuted: "#666666",
    buttonPurple: "#8B5CF6",
    greenDot: "#22C55E",
    redDot: "#EF4444",
    yellowDot: "#EAB308",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, Play, ChevronDown, Building2, Mail, Linkedin, Check, Star, Search, Settings } from "lucide-react";

interface SaaspoFeatureSectionsAmplemarketProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  features?: {
    title: string;
    description: string;
  }[];
}

// Handwritten "Duo" SVG Component
function DuoLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 60"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 45 Q5 25 15 15 Q25 5 35 15 Q40 20 38 35 Q36 48 25 48 Q15 48 12 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M42 25 Q42 15 50 15 Q55 15 55 25 L55 45 Q55 48 52 48"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M62 30 Q62 18 75 18 Q88 18 88 30 Q88 45 75 45 Q62 45 62 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M95 8 L98 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M100 12 L103 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <text x="95" y="18" fontSize="8" fill="currentColor" fontStyle="italic">!</text>
    </svg>
  );
}

// Browser Window Mockup
function BrowserMockup({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl bg-white shadow-xl border border-gray-200 overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-gray-100 rounded-md px-4 py-1 text-xs text-gray-500 w-64 text-center">
            app.amplemarket.com
          </div>
        </div>
        <div className="w-16" />
      </div>
      <div className="bg-white">
        {children}
      </div>
    </div>
  );
}

// Lead Item Component
function LeadItem({ name, company, tag, isNew = false, color = "purple" }: { name: string; company: string; tag?: string; isNew?: boolean; color?: string }) {
  const colorClasses: Record<string, string> = {
    purple: "bg-purple-100 text-purple-700",
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    orange: "bg-orange-100 text-orange-700",
    pink: "bg-pink-100 text-pink-700",
  };

  return (
    <div className="flex items-center gap-3 py-2 px-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
      <div className={`w-8 h-8 rounded-full ${colorClasses[color] || colorClasses.purple} flex items-center justify-center text-xs font-medium`}>
        {name.charAt(0)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-900 truncate">{name}</span>
          {isNew && (
            <span className="px-1.5 py-0.5 text-[10px] font-medium bg-green-100 text-green-700 rounded">New lead</span>
          )}
        </div>
        <span className="text-xs text-gray-500">{company}</span>
      </div>
      {tag && (
        <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded">{tag}</span>
      )}
    </div>
  );
}

// Main Demo Screenshot Component
function MainDemoScreenshot() {
  return (
    <div className="flex h-[400px]">
      {/* Left Panel - Leads List */}
      <div className="w-[280px] border-r border-gray-100 bg-white">
        <div className="p-3 border-b border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-gray-900">Duo leads</span>
            <Search className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Good morning, Meghan!
            </span>
          </div>
          <div className="text-[10px] text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">
            Recently added: 3+
          </div>
        </div>
        <div className="overflow-y-auto h-[300px] p-2">
          <LeadItem name="darklove" company="Sales Automation Specialist" color="purple" />
          <LeadItem name="Esther Howard" company="Sales Automation Specialist" tag="Send a Series X" color="blue" isNew />
          <LeadItem name="Dianne Russell" company="Sales Specialist" color="pink" />
          <LeadItem name="TrueMap" company="Account Manager" tag="Reviewed Outreach on G2" color="green" />
          <LeadItem name="Jacob Jones" company="Head of Sales" color="orange" />
          <LeadItem name="Sunrise" company="Inside Sales Rep" color="yellow" />
          <LeadItem name="PostBoy" company="Sales Representative" color="blue" />
          <LeadItem name="OpenTech" company="Partner Account Manager" color="purple" />
          <LeadItem name="Penguin" company="Sales Development Manager" color="pink" />
        </div>
      </div>

      {/* Center Panel - Video/Content */}
      <div className="flex-1 bg-gray-50 flex items-center justify-center relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 text-white ml-1" />
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <span className="font-medium">1.2x</span>
              </span>
              <span className="text-gray-400">2 min 38 sec</span>
              <span className="text-purple-600 font-medium">2 min 12 sec</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Lead Details */}
      <div className="w-[300px] border-l border-gray-100 bg-white p-4 overflow-y-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-medium">
            JJ
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">Jacob Jones</span>
              <span className="px-1.5 py-0.5 text-[10px] bg-green-100 text-green-700 rounded">New lead</span>
            </div>
            <span className="text-xs text-gray-500">Head of Sales @ Toughsup</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-600">Toughsup</span>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            Your trusted partner in delivering innovative, durable solutions. We combine strength and efficiency to help you power through challenges and achieve lasting results...
            <span className="text-purple-600 cursor-pointer"> See more</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 text-[10px] bg-gray-100 text-gray-600 rounded">Software service</span>
          <span className="px-2 py-1 text-[10px] bg-gray-100 text-gray-600 rounded">San Francisco, United States</span>
          <span className="px-2 py-1 text-[10px] bg-gray-100 text-gray-600 rounded">10 - 100 employees</span>
        </div>

        <div className="border-t border-gray-100 pt-4">
          <span className="text-xs font-medium text-gray-700 flex items-center gap-1 mb-2">
            <Star className="w-3 h-3 text-yellow-500" />
            Reasons to engage
          </span>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <Check className="w-3 h-3 text-green-500 mt-0.5" />
              <span className="text-[11px] text-gray-600">Reviewed Outreach on G2</span>
            </div>
            <div className="flex items-start gap-2 text-[11px] text-gray-500">
              Jacob has recently posted a review about one of your competitors on G2. This provides an opportunity to reach out...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature Card UI Mockup - Real-time sales intelligence
function SalesIntelligenceMockup() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 text-left">
      <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
        <span className="w-2 h-2 bg-green-500 rounded-full" />
        Good morning, Meghan!
      </div>
      <div className="space-y-2">
        {[
          { name: "darklove", badge: "Recently added: 3+", badgeColor: "purple" },
          { name: "Esther Howard", info: "Sales Automation Specialist" },
          { name: "Dianne Russell", info: "Sales Recruiter" },
          { name: "TrueMap", badge: "Reviewed Outreach on G2", badgeColor: "gray" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 py-1.5">
            <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-[10px] font-medium">
              {item.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-xs font-medium text-gray-900">{item.name}</span>
              {item.info && <span className="text-[10px] text-gray-500 ml-2">{item.info}</span>}
            </div>
            {item.badge && (
              <span className={`text-[9px] px-1.5 py-0.5 rounded ${item.badgeColor === "purple" ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-600"}`}>
                {item.badge}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Feature Card UI Mockup - Deep account research
function AccountResearchMockup() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 text-left">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-medium">
          JJ
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium text-gray-900">Jacob Jones</span>
            <span className="px-1 py-0.5 text-[8px] bg-green-100 text-green-700 rounded">New lead</span>
          </div>
          <span className="text-[10px] text-gray-500">Head of Sales @ Toughsup</span>
        </div>
        <button className="ml-auto text-[10px] px-2 py-1 bg-purple-600 text-white rounded">Push to CRM</button>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <Building2 className="w-3 h-3 text-purple-600" />
        <span className="text-[10px] font-medium text-purple-600">Toughsup</span>
      </div>
      <p className="text-[10px] text-gray-600 leading-relaxed mb-2">
        Your trusted partner in delivering innovative, durable solutions...
      </p>
      <div className="flex flex-wrap gap-1">
        <span className="px-1.5 py-0.5 text-[8px] bg-gray-100 text-gray-600 rounded">Software service</span>
        <span className="px-1.5 py-0.5 text-[8px] bg-gray-100 text-gray-600 rounded">San Francisco</span>
      </div>
    </div>
  );
}

// Feature Card UI Mockup - Multichannel plays
function MultichannelMockup() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 text-left">
      <div className="space-y-2 mb-3">
        <div className="flex items-center gap-2">
          <Linkedin className="w-4 h-4 text-blue-600" />
          <span className="text-xs text-gray-700">1. LinkedIn Step</span>
          <span className="ml-auto text-[10px] text-gray-400">Day 1</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-gray-600" />
          <span className="text-xs text-gray-700">2. Email Step</span>
          <span className="ml-auto text-[10px] text-gray-400">Day 2</span>
        </div>
      </div>
      <div className="bg-gray-50 rounded p-2 text-[10px] text-gray-600">
        <div className="font-medium text-gray-700 mb-1">Subject: Your experience with OpenTech</div>
        <p>Hi Jacob,</p>
        <p className="mt-1">I noticed your detailed review on G2 about OpenTech. You mentioned that while it&apos;s great for creating attractive websites quickly...</p>
      </div>
      <div className="mt-2 flex justify-end">
        <button className="text-[10px] px-3 py-1 bg-purple-600 text-white rounded flex items-center gap-1">
          Send sequence <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}

// Feature Card UI Mockup - AI-assisted human refined
function HumanRefinedMockup() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 text-left">
      <div className="flex items-center gap-2 mb-3 text-xs text-gray-700">
        <Settings className="w-4 h-4" />
        <span>New signal creation</span>
      </div>
      <div className="space-y-2">
        <div>
          <span className="text-[10px] text-gray-500">Select a signal</span>
          <div className="mt-1 flex items-center gap-2 p-2 bg-gray-50 rounded border border-gray-200">
            <span className="text-xs text-gray-700">Job changes: Recent job changes</span>
            <ChevronDown className="w-3 h-3 ml-auto text-gray-400" />
          </div>
        </div>
        <div>
          <span className="text-[10px] text-gray-500">Configure your signal</span>
          <div className="mt-1 space-y-1.5">
            <div className="flex items-center gap-2 p-1.5 bg-gray-50 rounded text-[10px] text-gray-600">
              <Check className="w-3 h-3 text-green-500" />
              Changed role within the same company
            </div>
            <div className="flex items-center gap-2 p-1.5 bg-gray-50 rounded text-[10px] text-gray-600">
              <Check className="w-3 h-3 text-green-500" />
              Changed company
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Arrow SVG for annotations
function CurlyArrow({ className = "", direction = "down" }: { className?: string; direction?: "down" | "up" | "left" | "right" }) {
  const rotations = {
    down: "rotate-0",
    up: "rotate-180",
    left: "rotate-90",
    right: "-rotate-90",
  };

  return (
    <svg viewBox="0 0 50 60" className={`w-10 h-12 ${rotations[direction]} ${className}`} fill="none">
      <path
        d="M25 5 Q20 15 25 25 Q30 35 25 45 Q22 52 20 55"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M15 50 L20 55 L25 50"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function SaaspoFeatureSectionsAmplemarket({
  mode = "light",
  title = "Discover\nAmplemarket's Duo",
  subtitle = "The future of sales is here: AI-powered, human refined.",
  features = [
    {
      title: "Real-time sales intelligence",
      description: "Welcome to effortless signal-led selling — where top leads come to you!",
    },
    {
      title: "Deep account & lead research",
      description: "All the lead data you need in just one click. Goodbye, manual research!",
    },
    {
      title: "AI-optimized multichannel plays",
      description: "Create thoughtful, personalized outreach across every channel.",
    },
    {
      title: "AI-assisted, human refined!",
      description: "Control what you want, when you want with AI that amplifies your expertise.",
    },
  ],
}: SaaspoFeatureSectionsAmplemarketProps) {
  const colors = COLORS[mode];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const featureMockups = [
    <SalesIntelligenceMockup key="sales" />,
    <AccountResearchMockup key="account" />,
    <MultichannelMockup key="multichannel" />,
    <HumanRefinedMockup key="human" />,
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-white">
      {/* Google Fonts for handwritten style */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=DM+Serif+Display&display=swap');
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          {/* NEW badge and link */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-6">
            <span className="text-xs font-medium text-gray-500 tracking-wider">NEW</span>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-colors">
              Read the article on Duo
              <ArrowRight className="w-3 h-3" />
            </a>
          </motion.div>

          {/* Main Title with Duo Logo */}
          <motion.div variants={itemVariants} className="relative inline-block">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              {title.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h2>
            {/* Handwritten Duo Logo */}
            <div className="absolute -right-16 md:-right-20 top-0 text-gray-900">
              <DuoLogo className="w-20 h-14 md:w-24 md:h-16" />
            </div>
          </motion.div>
        </motion.div>

        {/* Main Demo Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-6">
              {subtitle}
            </h3>
            <BrowserMockup>
              <MainDemoScreenshot />
            </BrowserMockup>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-2xl p-6 md:p-8 relative group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Handwritten annotation */}
              <div className="absolute -top-2 -left-2 md:top-2 md:left-4 text-gray-400 flex items-start gap-1">
                <CurlyArrow className="text-gray-300" direction="down" />
                <span
                  className="text-sm md:text-base italic mt-6"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  {index === 2 ? "magic!" : ""}
                </span>
              </div>

              <div className="mb-4">
                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Feature Mockup */}
              <div className="mt-4">
                {featureMockups[index]}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
