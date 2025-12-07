"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#F97316",
    accentHover: "#EA580C",
  },
  dark: {
    accent: "#FB923C",
    accentHover: "#F97316",
  },
} as const;

const IMAGES = {
  vibeCoder: {
    path: "/registry/vooster-ai-ko-target-user-2/vibecoder.png",
    alt: "아이디어는 넘치지만 정리가 어려운 '바이브 코더'",
    prompt: `An illustration of a frustrated developer with messy hair sitting at a laptop, anime/cartoon style with warm colors. The character shows overwhelmed expression with hands on head. Background is simple and clean.`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface VoosterAiKoTargetUser2Props {
  mode?: "light" | "dark";
}

const tabs = [
  { id: "vibe-coder", label: "바이브 코더" },
  { id: "solo-dev", label: "1인 개발자" },
  { id: "small-team", label: "소규모 팀" },
];

const tabContent = {
  "vibe-coder": {
    title: "아이디어는 넘치지만 정리가 어려운 '바이브 코더'",
    description:
      "만들고자하는 아이디어는 있지만,\n정확한 디버깅, 프롬프팅에 어려움을 느끼는 분입니다.\nVooster가 여러분의 아이디어를\n체계적으로, 세세하게 관리해드립니다.",
    features: [
      "창의적 문제 해결을 즐기는 개발자",
      "빠른 프로토타이핑 전문가",
      "새로운 기술 스택 학습에 적극적",
    ],
  },
  "solo-dev": {
    title: "혼자서 모든 것을 해결해야 하는 '1인 개발자'",
    description:
      "기획, 디자인, 개발, 배포까지\n모든 과정을 혼자 진행하는 분입니다.\nVooster가 당신의 AI 동료가 되어\n효율적인 개발을 도와드립니다.",
    features: [
      "프로젝트 전체 사이클 경험",
      "독립적 의사결정 능력",
      "멀티태스킹에 능숙",
    ],
  },
  "small-team": {
    title: "효율적인 협업이 필요한 '소규모 팀'",
    description:
      "작은 팀으로 큰 프로젝트를 진행하며\n체계적인 관리가 필요한 팀입니다.\nVooster가 팀의 PM 역할을 수행하여\n협업 효율을 극대화합니다.",
    features: [
      "빠른 의사결정 구조",
      "유연한 역할 분담",
      "긴밀한 커뮤니케이션",
    ],
  },
};

export default function VoosterAiKoTargetUser2({
  mode = "light",
}: VoosterAiKoTargetUser2Props) {
  const colors = COLORS[mode];
  const [activeTab, setActiveTab] = useState("vibe-coder");
  const content = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section className="relative z-10 overflow-hidden bg-transparent px-4 py-12 sm:py-24 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 pt-6 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-10">
          {/* Badge */}
          <span className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-3 py-1 text-sm font-medium">
            타겟 사용자
          </span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-medium tracking-tight text-gray-950 md:text-5xl"
          >
            Vooster, 이런 분들께{"\n"}가장 필요합니다.
          </motion.h2>

          <p className="text-lg font-light text-gray-600">
            당신의 개발 스타일과 목표에 맞는 AI 프로젝트 관리 경험을 제공합니다
          </p>

          {/* Tabs */}
          <div className="flex gap-2 rounded-full bg-gray-100 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8 grid gap-8 md:grid-cols-2 md:items-center"
            >
              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={IMAGES.vibeCoder.path}
                  alt={content.title}
                  className="max-w-md rounded-lg"
                />
              </div>

              {/* Text Content */}
              <div className="text-left">
                <h3 className="mb-4 text-2xl font-medium text-gray-950 md:text-3xl">
                  {content.title}
                </h3>
                <p className="mb-6 whitespace-pre-line text-gray-600">
                  {content.description}
                </p>
                <ul className="mb-8 space-y-2">
                  {content.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <span className="text-orange-500">-</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="rounded-md px-6 py-3 text-sm font-medium text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: colors.accent }}
                >
                  무료로 시작하기
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
