"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#f5f5f0",
    heading: "#111827",
    text: "#6b7280",
    border: "#e5e7eb",
  },
  dark: {
    background: "#1f2937",
    heading: "#f9fafb",
    text: "#9ca3af",
    border: "#374151",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface UserbandComFaq8Props {
  mode?: "light" | "dark";
}

const faqItems = [
  {
    question: "유저밴드는 어떤 서비스를 제공하나요?",
    answer:
      "유저밴드는 SaaS 기업을 위한 올인원 유저 서포트 플랫폼입니다. AI 기반 서포트 에이전트, 피드백 수집 및 관리, 체인지로그, 문서 관리 기능을 제공합니다.",
  },
  {
    question: "어떤 팀이 유저밴드를 사용하면 좋나요?",
    answer:
      "제품 팀, 고객 지원 팀, 성장 팀 등 유저와 소통하고 피드백을 관리해야 하는 모든 SaaS 팀에 적합합니다.",
  },
  {
    question: "무료로 시작할 수 있나요?",
    answer:
      "네, 무료 플랜으로 시작할 수 있습니다. 무료 플랜에서도 핵심 기능들을 사용해볼 수 있어요.",
  },
  {
    question: "기존 고객 피드백 툴과 뭐가 다른가요?",
    answer:
      "유저밴드는 단순 피드백 수집을 넘어 AI 서포트 에이전트, 실시간 대화 분석, 자동 피드백 분류 등 통합된 유저 관리 경험을 제공합니다.",
  },
  {
    question: "다국어를 지원하나요?",
    answer:
      "네, 체인지로그와 문서에서 다국어 콘텐츠를 지원합니다. 자동 번역 제안 기능으로 쉽게 다국어 콘텐츠를 관리할 수 있어요.",
  },
  {
    question: "한 계정으로 여러 제품을 관리할 수 있나요?",
    answer:
      "네, 하나의 워크스페이스에서 여러 프로젝트를 생성하고 관리할 수 있습니다. 각 프로젝트별로 독립적인 위젯, 문서, 체인지로그를 운영할 수 있어요.",
  },
];

export default function UserbandComFaq8({
  mode = "light",
}: UserbandComFaq8Props) {
  const colors = COLORS[mode];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="relative w-full py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-4xl font-bold tracking-tight text-center mb-12"
            style={{ color: colors.heading }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            자주 묻는 질문
          </motion.h2>

          <div className="space-y-0">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="border-b"
                style={{ borderColor: colors.border }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <button
                  className="w-full py-6 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span
                    className="text-lg font-medium"
                    style={{ color: colors.heading }}
                  >
                    {item.question}
                  </span>
                  <motion.svg
                    className="w-5 h-5 shrink-0 ml-4"
                    fill="none"
                    stroke={colors.text}
                    viewBox="0 0 24 24"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p
                        className="pb-6 text-base leading-relaxed"
                        style={{ color: colors.text }}
                      >
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
