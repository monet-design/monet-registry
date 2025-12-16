"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F5F5F7",
    cardBackground: "#FFFFFF",
    titleText: "#000000",
    bodyText: "#6B7280",
    badgeDot: "#F97316",
    badgeBackground: "#FFFFFF",
    badgeText: "#000000",
    buttonBackground: "#000000",
    buttonText: "#FFFFFF",
    toggleActive: "#22C55E",
    shieldGradientStart: "#F97316",
    shieldGradientEnd: "#EF4444",
  },
  dark: {
    background: "#111827",
    cardBackground: "#1F2937",
    titleText: "#FFFFFF",
    bodyText: "#9CA3AF",
    badgeDot: "#F97316",
    badgeBackground: "#374151",
    badgeText: "#FFFFFF",
    buttonBackground: "#FFFFFF",
    buttonText: "#000000",
    toggleActive: "#22C55E",
    shieldGradientStart: "#F97316",
    shieldGradientEnd: "#EF4444",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Lock, Settings, CirclePlus } from "lucide-react";

// AI Logo Components
const AILogo = () => (
  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-md border border-gray-100">
    <span className="text-black text-xl font-bold">AI</span>
  </div>
);

const GoogleLogo = () => (
  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-md border border-gray-100">
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  </div>
);

const OpenAILogo = () => (
  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-md border border-gray-100">
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364l2.0201-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4046-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
    </svg>
  </div>
);

const FigmaLogo = () => (
  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-md border border-gray-100">
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path fill="#F24E1E" d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"/>
      <path fill="#A259FF" d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"/>
      <path fill="#F24E1E" d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"/>
      <path fill="#1ABCFE" d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"/>
      <path fill="#0ACF83" d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"/>
    </svg>
  </div>
);

const MicrosoftLogo = () => (
  <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center shadow-md opacity-60">
    <div className="w-6 h-6 grid grid-cols-2 gap-0.5">
      <div className="bg-white/90"></div>
      <div className="bg-white/90"></div>
      <div className="bg-white/90"></div>
      <div className="bg-white/90"></div>
    </div>
  </div>
);

// Feature Card 1: Purpose-built for LLMs
const LLMsIllustration = () => (
  <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
    {/* Dashed connection lines */}
    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
      <defs>
        <pattern id="dash" patternUnits="userSpaceOnUse" width="8" height="1">
          <line x1="0" y1="0" x2="4" y2="0" stroke="#E5E7EB" strokeWidth="2"/>
        </pattern>
      </defs>
      {/* Curved dashed lines connecting logos */}
      <path d="M180,80 Q180,150 100,180" fill="none" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4"/>
      <path d="M180,80 Q180,150 260,180" fill="none" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4"/>
      <path d="M180,80 Q240,120 300,150" fill="none" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4"/>
    </svg>

    {/* Main Anthropic Logo */}
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
      <div className="relative">
        <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-xl">
          <span className="text-white text-3xl font-bold">C</span>
        </div>
        {/* Gradient ring */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-orange-400 via-pink-400 to-purple-400 -z-10 opacity-60 blur-sm"></div>
      </div>
    </div>

    {/* Bottom row logos */}
    <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-3 z-10">
      <MicrosoftLogo />
      <AILogo />
      <GoogleLogo />
      <OpenAILogo />
      <div className="w-14 h-14 bg-gray-100 rounded-xl opacity-40"></div>
    </div>

    {/* Second row */}
    <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-3 z-10">
      <div className="w-14 h-14 bg-gray-100 rounded-xl opacity-30"></div>
      <div className="w-14 h-14 bg-gray-100 rounded-xl opacity-40"></div>
      <FigmaLogo />
      <div className="w-14 h-14 bg-gray-100 rounded-xl opacity-40"></div>
      <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl opacity-60"></div>
    </div>
  </div>
);

// Feature Card 2: Designed for simplicity
const SimplicityIllustration = () => (
  <div className="relative w-full h-64 flex items-center justify-center">
    {/* Dashed border frame */}
    <div className="absolute inset-4 border-2 border-dashed border-gray-200 rounded-2xl"></div>

    {/* Text formatting toolbar */}
    <div className="absolute top-8 left-8 flex items-center gap-3 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100">
      <span className="font-bold text-gray-700">B</span>
      <span className="italic text-gray-700">I</span>
      <span className="underline text-gray-700">U</span>
      <span className="line-through text-gray-700">S</span>
    </div>

    {/* Color picker dots */}
    <div className="absolute top-8 right-8 flex items-center gap-1 bg-white rounded-full px-2 py-1 shadow-sm border border-gray-100">
      <div className="w-5 h-5 bg-green-600 rounded-full"></div>
      <div className="w-5 h-5 bg-green-400 rounded-full"></div>
      <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
    </div>

    {/* Create agent button */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="relative">
        <button className="bg-black text-white px-6 py-3 rounded-xl font-medium shadow-lg">
          Create agent
        </button>
        {/* Curved arrow */}
        <svg className="absolute -bottom-6 -left-8 w-16 h-8" viewBox="0 0 64 32">
          <path d="M60,4 Q40,4 30,20 Q20,36 4,28" fill="none" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4"/>
        </svg>
      </div>
    </div>

    {/* Toggle switch */}
    <div className="absolute bottom-16 right-8">
      <div className="w-12 h-7 bg-green-500 rounded-full relative">
        <div className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full shadow"></div>
      </div>
    </div>

    {/* Reply with AI button */}
    <div className="absolute bottom-8 left-8 flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100">
      <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L9 9l-7 3 7 3 3 7 3-7 7-3-7-3-3-7z"/>
      </svg>
      <span className="text-sm text-gray-700">Reply with AI</span>
    </div>
  </div>
);

// Feature Card 3: Engineered for security
const SecurityIllustration = () => (
  <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
    {/* Gradient background element */}
    <div className="absolute top-0 right-0 w-32 h-24 bg-gradient-to-br from-orange-400 to-red-400 rounded-bl-3xl opacity-80"></div>

    {/* Dashed orbit circles */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-48 h-48 border-2 border-dashed border-gray-200 rounded-full"></div>
    </div>

    {/* Shield icon */}
    <div className="relative z-10">
      <div className="w-24 h-28 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-full rounded-b-3xl flex items-center justify-center shadow-xl">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <Lock className="w-5 h-5 text-gray-800" />
        </div>
      </div>
    </div>

    {/* Orbiting icons */}
    <div className="absolute top-12 left-12">
      <Settings className="w-5 h-5 text-gray-400" />
    </div>
    <div className="absolute top-12 right-12">
      <CirclePlus className="w-5 h-5 text-gray-400" />
    </div>

    {/* Password dots */}
    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
      ))}
    </div>

    {/* Link icon */}
    <div className="absolute bottom-16 right-12">
      <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    </div>
  </div>
);

interface FeatureCardProps {
  illustration: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ illustration, title, description, index }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
  >
    <div className="p-6">
      {illustration}
    </div>
    <div className="px-6 pb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

interface SaaspoFeatureSectionsChatbaseProps {
  mode?: "light" | "dark";
  badge?: string;
  title?: string;
  description?: string;
  features?: Array<{
    title: string;
    description: string;
  }>;
}

export default function SaaspoFeatureSectionsChatbase({
  mode = "light",
  badge = "Highlights",
  title = "The complete platform for\nAI support agents",
  description = "Chatbase is designed for building AI support agents that solve your customers' hardest problems while improving business outcomes.",
  features = [
    {
      title: "Purpose-built for LLMs",
      description: "Language models with reasoning capabilities for effective responses to complex queries.",
    },
    {
      title: "Designed for simplicity",
      description: "Create, manage, and deploy AI Agents easily, even without technical skills.",
    },
    {
      title: "Engineered for security",
      description: "Enjoy peace of mind with robust encryption and strict compliance standards.",
    },
  ],
}: SaaspoFeatureSectionsChatbaseProps) {
  const colors = COLORS[mode];

  const illustrations = [
    <LLMsIllustration key="llms" />,
    <SimplicityIllustration key="simplicity" />,
    <SecurityIllustration key="security" />,
  ];

  return (
    <section
      className="w-full py-20 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: colors.badgeBackground }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: colors.badgeDot }}
              ></div>
              <span
                className="text-sm font-medium"
                style={{ color: colors.badgeText }}
              >
                {badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold leading-tight whitespace-pre-line"
              style={{ color: colors.titleText }}
            >
              {title}
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg max-w-md lg:pt-16"
            style={{ color: colors.bodyText }}
          >
            {description}
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              illustration={illustrations[index]}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
