"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#f5f5f0",
    heading: "#111827",
    text: "#6b7280",
    cardBg1: "#e9d5ff", // purple
    cardBg2: "#fef3c7", // yellow
    cardBg3: "#d1fae5", // green
    cardBg4: "#f3f4f6", // gray
    accent1: "#7c3aed", // purple text
    accent2: "#d97706", // orange text
    accent3: "#059669", // green text
    accent4: "#d97706", // orange text
  },
  dark: {
    background: "#1f2937",
    heading: "#f9fafb",
    text: "#9ca3af",
    cardBg1: "#4c1d95",
    cardBg2: "#78350f",
    cardBg3: "#064e3b",
    cardBg4: "#374151",
    accent1: "#a78bfa",
    accent2: "#fbbf24",
    accent3: "#34d399",
    accent4: "#fbbf24",
  },
} as const;

const IMAGES = {
  support: {
    path: "/registry/userband-com-feature-2/support.jpg",
    alt: "Support Agent Screenshot",
    prompt: "SaaS dashboard showing AI chatbot conversation interface",
  },
  feedback: {
    path: "/registry/userband-com-feature-2/feedback.jpg",
    alt: "Feedback Screenshot",
    prompt: "Feedback management dashboard with list of user requests",
  },
  changelog: {
    path: "/registry/userband-com-feature-2/changelog.jpg",
    alt: "Changelog Screenshot",
    prompt: "Product changelog and announcement widget preview",
  },
  docs: {
    path: "/registry/userband-com-feature-2/docs.jpg",
    alt: "Documentation Screenshot",
    prompt: "Documentation knowledge base with navigation sidebar",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface UserbandComFeature2Props {
  mode?: "light" | "dark";
}

export default function UserbandComFeature2({
  mode = "light",
}: UserbandComFeature2Props) {
  const colors = COLORS[mode];

  const features = [
    {
      title: "서포트 에이전트",
      description:
        "서비스 문서를 학습한 AI가 실시간으로 유저와 대화하고 문의를 관리합니다",
      image: IMAGES.support,
      bgColor: colors.cardBg1,
      accentColor: colors.accent1,
    },
    {
      title: "피드백",
      description: "유저의 피드백을 수집하고 중요도, 상태들을 관리합니다",
      image: IMAGES.feedback,
      bgColor: colors.cardBg2,
      accentColor: colors.accent2,
    },
    {
      title: "체인지로그",
      description:
        "서비스의 업데이트 소식을 작성하고 유저에게 즉시 알립니다",
      image: IMAGES.changelog,
      bgColor: colors.cardBg3,
      accentColor: colors.accent3,
    },
    {
      title: "문서",
      description:
        "서비스의 최신 정보를 포함한 문서를 작성하고 관리합니다",
      image: IMAGES.docs,
      bgColor: colors.cardBg4,
      accentColor: colors.accent4,
    },
  ];

  return (
    <section
      className="relative w-full py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            style={{ color: colors.heading }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span>유저밴드와 함께</span>
            <br />
            <span>피드백을 제대로 관리하세요</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: feature.bgColor }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-4 h-48 relative">
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-white/50">
                  <Image
                    src={feature.image.path}
                    alt={feature.image.alt}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="p-6 pt-2">
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: feature.accentColor }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm" style={{ color: colors.text }}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
