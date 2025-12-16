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
    background: "#F5F5F7",
    cardBackground: "#FFFFFF",
    accent: "#3B82F6",
    accentHover: "#2563EB",
    green: "#22C55E",
    text: "#1F2937",
    textMuted: "#6B7280",
  },
  dark: {
    background: "#0F0F10",
    cardBackground: "#1C1C1E",
    accent: "#3B82F6",
    accentHover: "#60A5FA",
    green: "#22C55E",
    text: "#FFFFFF",
    textMuted: "#9CA3AF",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  mountainBg: {
    path: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Green mountain landscape",
    prompt: `Serene green mountain landscape at golden hour with soft misty atmosphere. Rolling green mountains with smooth hills, lush green grass. Atmospheric haze creating depth.`,
  },
  videoCall: {
    path: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    alt: "Professional person on video call",
    prompt: `Professional person in casual attire on video call, clean background, looking at camera with confident expression.`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Search, Slack, Gift, Link2 } from "lucide-react";
import Image from "next/image";

interface FeatureCard {
  title: string;
  description: string;
  type: "job-posting" | "profile-search" | "messaging" | "video-call";
}

interface SaaspoFeatureSectionsParaformProps {
  mode?: "light" | "dark";
  features?: FeatureCard[];
}

const defaultFeatures: FeatureCard[] = [
  {
    title: "Say goodbye to business development",
    description:
      "We handle the business development, you focus on placing great talent. Paraform connects you to roles from high-growth startups and category leading enterprises.",
    type: "job-posting",
  },
  {
    title: "All the tools to make recruiting easy",
    description:
      "Access an all-in-one toolkit with sourcing, CRM, notetaker, scheduler and more—completely free of charge.",
    type: "profile-search",
  },
  {
    title: "Leave the follow-ups to us",
    description:
      "From client comms to feedback and payments, we manage the manual work so you can stay focused on recruiting.",
    type: "messaging",
  },
  {
    title: "Let AI do the heavy lifting",
    description:
      "AI to supercharge recruiters, not to replace. Focus on what drives results: real conversations and stronger candidate relationships.",
    type: "video-call",
  },
];

type ColorScheme = (typeof COLORS)["light"] | (typeof COLORS)["dark"];

// Job Posting Card UI Component
function JobPostingUI({ colors }: { colors: ColorScheme }) {
  return (
    <div className="w-full max-w-[320px] mx-auto">
      <div
        className="rounded-xl p-4 shadow-xl"
        style={{ backgroundColor: colors.cardBackground === "#1C1C1E" ? "#FFFFFF" : colors.cardBackground }}
      >
        {/* Job Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-[#2D5A41] flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
              <path
                fill="currentColor"
                d="M12 2L4 6v12l8 4 8-4V6l-8-4zm0 2.5L17 7l-5 2.5L7 7l5-2.5zM6 8.5l5 2.5v6.5l-5-2.5V8.5zm12 0v6.5l-5 2.5v-6.5l5-2.5z"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm">Software Engineer, SDK</h4>
            <p className="text-xs text-gray-500">$200k - $230k · Brooklyn · Hiring 7</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-4 text-xs border-b border-gray-100 pb-2">
          <span className="font-semibold text-gray-900">Reward</span>
          <span className="text-gray-400">Role details</span>
          <span className="text-gray-400">About Fern</span>
          <span className="text-gray-400">Ideal companies</span>
        </div>

        {/* Reward Details */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-gray-400" />
              <span className="text-gray-700">Base hire reward</span>
            </div>
            <span className="text-gray-600">~ 40,250 x 7</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Link2 className="w-4 h-4 text-gray-400" />
              <span className="text-gray-700">Bonus</span>
            </div>
            <span className="text-gray-600">$1,300</span>
          </div>
        </div>

        {/* Total */}
        <div className="flex items-center justify-between py-3 border-t border-gray-100">
          <span className="text-sm text-gray-500">Total rewards</span>
          <span className="text-3xl font-bold text-gray-900">$283,050</span>
        </div>

        {/* Submit Button */}
        <button
          className="w-full py-3 rounded-lg text-white font-medium text-sm mt-2"
          style={{ backgroundColor: colors.accent }}
        >
          Submit candidate
        </button>
      </div>
    </div>
  );
}

// Profile Search UI Component
function ProfileSearchUI({ colors }: { colors: ColorScheme }) {
  const profiles = [
    { name: "Haeni Kim", role: "iOS Developer" },
    { name: "Chisom Robertson", role: "Frontend Developer" },
    { name: "Mike J.", role: "Chief Frontend Architect" },
    { name: "Sarah L.", role: "Head of Frontend Engineering" },
    { name: "Eduardo Pereira", role: "" },
    { name: "Bruno Sousa", role: "" },
  ];

  return (
    <div className="relative w-full max-w-[380px] mx-auto h-[220px]">
      {/* Profile Grid (blurred background) */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-3 opacity-60">
        {profiles.map((profile, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-600 flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-white text-sm font-medium truncate">{profile.name}</p>
              {profile.role && <p className="text-gray-400 text-xs truncate">{profile.role}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Search Bar Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px]">
        <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 shadow-2xl">
          <span className="text-gray-400 text-sm flex-1">Search across 2.7M profiles</span>
          <button
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "#1F2937" }}
          >
            <Search className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Messaging UI Component
function MessagingUI({ colors }: { colors: ColorScheme }) {
  return (
    <div className="relative w-full max-w-[380px] mx-auto">
      {/* Notification Toast */}
      <div className="absolute -top-2 right-0 z-10">
        <div className="text-xs text-gray-400 mb-1 text-right">You submitted a candidate</div>
        <div
          className="rounded-xl p-3 flex items-center gap-3 shadow-lg"
          style={{ backgroundColor: colors.accent }}
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex-shrink-0" />
          <div className="text-white">
            <p className="font-semibold text-sm">Dominic Anderson</p>
            <p className="text-xs opacity-80">Lead Frontend Engineer</p>
          </div>
          <div className="ml-2">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </div>
          <div className="text-xs text-white/70 ml-auto">07:21 AM</div>
        </div>
      </div>

      {/* Slack-style Message */}
      <div className="mt-16">
        <div
          className="rounded-xl p-4 flex items-start gap-3"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Slack className="w-4 h-4 text-white" />
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm">Mia Wilson</p>
            <p className="text-gray-700 text-sm">
              Great! Let&apos;s move to the<br />Technical Interview <span className="text-lg">👍</span>
            </p>
          </div>
        </div>
        <div className="text-xs text-gray-400 mt-2">09:45 AM</div>
      </div>
    </div>
  );
}

// Video Call UI Component
function VideoCallUI() {
  return (
    <div className="relative w-full max-w-[380px] mx-auto">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        {/* Main video area */}
        <div className="relative aspect-[4/3]">
          <Image
            src={IMAGES.videoCall.path}
            alt={IMAGES.videoCall.alt}
            fill
            className="object-cover"
          />
          {/* Name overlay */}
          <div className="absolute top-4 left-4">
            <p className="text-white font-semibold text-sm">Alex Smith</p>
            <p className="text-white/70 text-xs">Recruiter</p>
          </div>
          {/* Time stamp */}
          <div className="absolute bottom-4 left-4 text-white/80 text-xs">
            9:32 AM | Alex x Aiko
          </div>
          {/* Picture-in-picture */}
          <div className="absolute bottom-4 right-4 w-20 h-24 rounded-lg overflow-hidden border-2 border-white/30">
            <Image
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80"
              alt="Aiko on video call"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
              <span className="text-white text-xs bg-black/40 px-1 rounded">Aiko</span>
            </div>
          </div>
          {/* Call controls */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SaaspoFeatureSectionsParaform({
  mode = "dark",
  features = defaultFeatures,
}: SaaspoFeatureSectionsParaformProps) {
  const colors = COLORS[mode];

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const renderUI = (type: FeatureCard["type"]) => {
    switch (type) {
      case "job-posting":
        return <JobPostingUI colors={colors} />;
      case "profile-search":
        return <ProfileSearchUI colors={colors} />;
      case "messaging":
        return <MessagingUI colors={colors} />;
      case "video-call":
        return <VideoCallUI />;
      default:
        return null;
    }
  };

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4 md:px-8"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`relative rounded-3xl overflow-hidden ${
                index === 0 ? "md:row-span-1" : ""
              }`}
              style={{
                backgroundColor: index === 0 ? undefined : colors.cardBackground,
              }}
              variants={itemVariants}
            >
              {/* Card with mountain background (first card) */}
              {index === 0 ? (
                <div className="relative h-full min-h-[560px]">
                  {/* Mountain Background */}
                  <div className="absolute inset-0">
                    <Image
                      src={IMAGES.mountainBg.path}
                      alt={IMAGES.mountainBg.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col p-6 md:p-8">
                    <h3
                      className="text-xl md:text-2xl font-semibold mb-6"
                      style={{ color: "#FFFFFF" }}
                    >
                      {feature.title}
                    </h3>

                    {/* UI Component */}
                    <div className="flex-1 flex items-center justify-center py-4">
                      {renderUI(feature.type)}
                    </div>

                    {/* Description at bottom */}
                    <p className="text-white/80 text-sm md:text-base leading-relaxed mt-auto">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-6 md:p-8 h-full min-h-[350px] flex flex-col">
                  <h3
                    className="text-xl md:text-2xl font-semibold mb-3"
                    style={{ color: colors.text }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm md:text-base leading-relaxed mb-6"
                    style={{ color: colors.textMuted }}
                  >
                    {feature.description}
                  </p>

                  {/* UI Component */}
                  <div className="flex-1 flex items-center justify-center">
                    {renderUI(feature.type)}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
