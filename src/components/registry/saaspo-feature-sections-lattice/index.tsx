"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    // Primary 액센트 (녹색 계열)
    accent: "#166534",
    accentHover: "#14532d",
    accentBg: "#E6F7ED",
    // 배경색
    background: "#F5F2ED",
    // 고객 후기 카드 배경
    testimonialBg: "#1B4332",
    // 프로그레스 바 색상
    progressGreen: "#22C55E",
    progressYellow: "#FBBF24",
    progressOrange: "#F97316",
    // 그라데이션 상단 장식
    gradientTop: "#10B981",
  },
  dark: {
    accent: "#22C55E",
    accentHover: "#16A34A",
    accentBg: "#052E16",
    background: "#0A0A0A",
    testimonialBg: "#052E16",
    progressGreen: "#22C55E",
    progressYellow: "#FBBF24",
    progressOrange: "#F97316",
    gradientTop: "#10B981",
  },
} as const;

/**
 * 이미지 에셋 (아바타는 이니셜로 대체)
 */
// const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ChevronRight, Check, Target, TrendingUp, BarChart3 } from "lucide-react";

interface SaaspoFeatureSectionsLatticeProps {
  mode?: "light" | "dark";
  badge?: string;
  title?: string;
  subtitle?: string;
  testimonialQuote?: string;
  testimonialAuthor?: string;
  testimonialRole?: string;
}

// Feature card data types
interface FeatureCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

// OKRs & Goals Mock UI Component
function OKRsGoalsUI() {
  return (
    <div className="space-y-3">
      {/* Marketing Goals Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 rounded bg-purple-100 flex items-center justify-center">
            <Target className="w-3 h-3 text-purple-600" />
          </div>
          <span className="font-medium text-sm text-gray-900">Marketing</span>
          <span className="text-gray-400 text-sm">· 26 goals</span>
        </div>

        <div className="space-y-2">
          {[
            { icon: Target, label: "Improve brand awareness", hasChart: true },
            { icon: TrendingUp, label: "Increase international revenue", hasChart: true },
            { icon: TrendingUp, label: "Increase sales in ANZ by 10%", isActive: true },
            { icon: Target, label: "Complete EMEA rep sales training" },
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-2 p-2 rounded-lg ${item.isActive ? "bg-amber-50" : ""}`}>
              <item.icon className={`w-4 h-4 ${item.isActive ? "text-amber-500" : "text-gray-400"}`} />
              <span className={`text-xs ${item.isActive ? "text-amber-700 font-medium" : "text-gray-600"}`}>{item.label}</span>
              {item.hasChart && <BarChart3 className="w-3 h-3 text-gray-300 ml-auto" />}
            </div>
          ))}
        </div>
      </div>

      {/* Key Result Detail & Chart */}
      <div className="flex gap-3">
        <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-3">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-3 h-3 text-gray-400" />
            <span className="text-[10px] text-gray-400 uppercase tracking-wide">Key Result</span>
          </div>
          <p className="text-xs font-medium text-gray-900 mb-2">Increase sales in ANZ by 10%</p>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: "90%" }} />
            </div>
            <span className="text-[10px] font-medium text-green-600">ON TRACK</span>
          </div>
          <div className="flex justify-between text-[9px] text-gray-400 mb-3">
            <span>Start: 0%</span>
            <span>Current: 90%</span>
            <span>Goal: 100%</span>
          </div>
          <p className="text-[10px] text-gray-500 mb-2">What&apos;s the status?</p>
          <div className="flex gap-1">
            {["Off track", "Progressing", "On track"].map((status, i) => (
              <button key={i} className={`px-2 py-1 text-[9px] rounded ${i === 2 ? "bg-green-100 text-green-700" : "bg-gray-50 text-gray-500"}`}>
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-3 h-3 text-gray-400" />
            <span className="text-[10px] font-medium text-gray-900">Key Results</span>
          </div>
          {/* Donut Chart */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <svg className="w-12 h-12 -rotate-90">
                <circle cx="24" cy="24" r="20" fill="none" stroke="#E5E7EB" strokeWidth="4" />
                <circle cx="24" cy="24" r="20" fill="none" stroke="#22C55E" strokeWidth="4" strokeDasharray="75 125" />
                <circle cx="24" cy="24" r="20" fill="none" stroke="#FBBF24" strokeWidth="4" strokeDasharray="25 125" strokeDashoffset="-75" />
                <circle cx="24" cy="24" r="20" fill="none" stroke="#EF4444" strokeWidth="4" strokeDasharray="12 125" strokeDashoffset="-100" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-900">26</span>
            </div>
            <div className="space-y-1 text-[9px]">
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500" /><span className="text-gray-600">On track</span></div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-yellow-500" /><span className="text-gray-600">Progressing</span></div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-500" /><span className="text-gray-600">Off track</span></div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-gray-300" /><span className="text-gray-600">No update</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 1:1s Mock UI Component
function OneOnOnesUI() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      {/* User Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-semibold text-sm">
          RG
        </div>
        <div>
          <p className="font-medium text-sm text-gray-900">Ruby Gu</p>
          <p className="text-xs text-gray-500">Account Executive</p>
        </div>
      </div>

      {/* Agenda */}
      <div className="mb-4">
        <p className="text-xs font-medium text-gray-900 mb-2">Agenda</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-green-100 flex items-center justify-center">
              <Check className="w-3 h-3 text-green-600" />
            </div>
            <span className="text-xs text-gray-500 line-through">Your priorities this quarter</span>
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 ml-auto" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded border border-gray-200" />
            <span className="text-xs text-gray-700">PTO request</span>
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 ml-auto" />
          </div>
        </div>
      </div>

      {/* Manager Suggestion */}
      <div className="bg-gray-50 rounded-lg p-3">
        <p className="text-[10px] text-gray-500 mb-2">Because you are Ruby&apos;s manager</p>
        <p className="text-xs text-gray-700 mb-2">In what ways can I provide better or more feedback to help you succeed?</p>
        <button className="text-[10px] text-blue-600 hover:text-blue-700">Add talking point</button>
      </div>
    </div>
  );
}

// Updates Mock UI Component
function UpdatesUI() {
  return (
    <div className="flex gap-3">
      {/* Weekly Update Card */}
      <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="font-medium text-sm text-gray-900">Weekly update</span>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-[10px] font-semibold">
              KB
            </div>
            <span className="text-xs text-gray-600">Kevin Booker</span>
          </div>
        </div>

        <p className="text-xs font-medium text-gray-900 mb-1">What did you focus on?</p>
        <p className="text-[11px] text-gray-600 mb-4">This week, I outlined the new manager training program. Implementation is moving quickly, but it will need team collaboration to succeed.</p>

        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-[10px] font-semibold">
            MM
          </div>
          <span className="text-xs text-gray-700">Mel Miller</span>
          <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[9px] rounded-full">Manager</span>
        </div>

        {/* Small Chart */}
        <div className="h-8 flex items-end gap-1">
          {[40, 60, 30, 70, 50, 80, 45].map((h, i) => (
            <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: i === 5 ? "#F97316" : "#FED7AA" }} />
          ))}
        </div>
      </div>

      {/* Sentiment Cards */}
      <div className="w-40 space-y-3">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3">
          <p className="text-[10px] text-gray-500 mb-2">How are you feeling?</p>
          <div className="flex justify-between">
            {[
              { emoji: "😕", label: "Poor" },
              { emoji: "😐", label: "Neutral" },
              { emoji: "😊", label: "Great" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-xl">{item.emoji}</span>
                <span className="text-[9px] text-gray-500">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3">
          <p className="text-[10px] text-gray-500 mb-2">Average team sentiment:</p>
          <div className="bg-green-50 rounded-lg p-2">
            <p className="text-[9px] text-green-700">May 5 - May 12</p>
            <p className="text-xs font-medium text-green-800">Score: 3</p>
          </div>
          {/* Small trend line */}
          <div className="mt-2 h-4 flex items-end">
            <svg className="w-full h-full" viewBox="0 0 100 20">
              <path d="M0 15 Q25 10, 50 12 T100 5" fill="none" stroke="#22C55E" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ title, description, children, className = "" }: FeatureCardProps) {
  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-1 mb-2">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <ChevronRight className="w-4 h-4 text-gray-400" />
      </div>
      <p className="text-sm text-gray-500 mb-4">{description}</p>
      {children}
    </motion.div>
  );
}

export default function SaaspoFeatureSectionsLattice({
  mode = "light",
  badge = "IMPROVE MANAGER PRODUCTIVITY",
  title = "More productive managers,\nhigher performing teams",
  subtitle = "Make managers your highest point of leverage with productive meetings, clear expectations, and accountability.",
  testimonialQuote = "I love getting notified that my team member received praise so I can bring it up in our next one-on-one.",
  testimonialAuthor = "Kyle Teague",
  testimonialRole = "Director of Learning and Development, Olo",
}: SaaspoFeatureSectionsLatticeProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-20 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Top Gradient Decoration */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-32"
        style={{
          background: `linear-gradient(to bottom, ${colors.gradientTop}, transparent)`
        }}
      />
      <div
        className="absolute top-32 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
        style={{ backgroundColor: colors.gradientTop }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div
            className="inline-block px-4 py-2 rounded-full text-xs font-semibold tracking-wide mb-6"
            style={{
              backgroundColor: colors.accentBg,
              color: colors.accent
            }}
          >
            {badge}
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 whitespace-pre-line">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* OKRs & Goals - Large Card */}
          <FeatureCard
            title="OKRs & Goals"
            description="Focus individuals and teams on your company's top priorities, tracking progress and risks each step of the way."
          >
            <OKRsGoalsUI />
          </FeatureCard>

          {/* 1:1s Card */}
          <FeatureCard
            title="1:1s"
            description="Make every meeting more productive with auto-suggested agendas and action items."
          >
            <OneOnOnesUI />
          </FeatureCard>

          {/* Updates Card */}
          <FeatureCard
            title="Updates"
            description="Stay in sync, async, with weekly status updates."
            className="lg:col-span-1"
          >
            <UpdatesUI />
          </FeatureCard>

          {/* Testimonial Card */}
          <motion.div
            className="rounded-2xl p-8 flex flex-col justify-between"
            style={{ backgroundColor: colors.testimonialBg }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="text-4xl text-green-400 font-serif">&ldquo;</span>
              <p className="text-xl text-white font-medium leading-relaxed mt-2">
                {testimonialQuote}
              </p>
              <span className="text-4xl text-green-400 font-serif">&rdquo;</span>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-semibold">
                KT
              </div>
              <div>
                <p className="font-medium text-white">{testimonialAuthor}</p>
                <p className="text-sm text-green-300">{testimonialRole}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
