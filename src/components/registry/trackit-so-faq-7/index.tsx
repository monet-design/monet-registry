"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const CONTENT = {
  badge: "FAQ",
  title: "자주 묻는 질문",
  description: "트래킷에 대해 자주 받는 질문을 모았습니다.\n그래도 궁금한 점이 있다면 언제든 편하게 채팅 문의 주세요!",
  faqs: [
    {
      question: "트래킷은 어떤 기업에 적합한가요?",
      answer:
        "트래킷은 B2B 영업을 하는 중소기업부터 대기업까지 모든 규모의 기업에 적합합니다. 특히 영업 데이터 관리와 팀 협업이 필요한 기업에 최적화되어 있습니다.",
    },
    {
      question: "트래킷은 무엇을 커스터마이징할 수 있나요?",
      answer:
        "데이터 필드, 파이프라인 단계, 대시보드 레이아웃, 권한 설정 등 거의 모든 요소를 기업의 비즈니스 프로세스에 맞게 커스터마이징할 수 있습니다.",
    },
    {
      question: "기존 사용 중인 도구들과 연동이 가능한가요?",
      answer:
        "네, 이메일, 캘린더, 카카오톡, 슬랙, 노션 등 다양한 외부 서비스와 연동할 수 있습니다. API를 통한 커스텀 연동도 지원합니다.",
    },
    {
      question: "모바일에서도 사용할 수 있나요?",
      answer:
        "네, iOS와 Android 앱을 제공합니다. 모바일에서도 고객 정보 확인, 영업기회 관리, 팀 알림 등 주요 기능을 모두 사용할 수 있습니다.",
    },
    {
      question: "도입하는 데 시간이 얼마나 걸리나요?",
      answer:
        "기본적인 설정은 당일 완료 가능하며, 기업 맞춤 커스터마이징과 데이터 마이그레이션을 포함하면 보통 1-2주 정도 소요됩니다.",
    },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface TrackitSoFaq7Props {
  mode?: "light" | "dark";
}

export default function TrackitSoFaq7({ mode = "light" }: TrackitSoFaq7Props) {
  const isDark = mode === "dark";
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className={`w-full py-24 ${
        isDark ? "bg-gray-950" : "bg-gradient-to-b from-white to-green-50"
      }`}
    >
      <div className="max-w-[800px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${
              isDark
                ? "bg-green-900/50 text-green-300"
                : "bg-green-100 text-green-700"
            }`}
          >
            {CONTENT.badge}
          </span>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {CONTENT.title}
          </h2>
          <p
            className={`text-lg whitespace-pre-line ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {CONTENT.description}
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-4">
          {CONTENT.faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl overflow-hidden ${
                isDark
                  ? "bg-gray-900 border border-gray-800"
                  : "bg-white border border-gray-200"
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span
                  className={`text-lg font-medium ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${
                    isDark ? "bg-gray-800" : "bg-gray-100"
                  } ${openIndex === index ? "rotate-45" : ""}`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className={isDark ? "text-gray-400" : "text-gray-600"}
                  >
                    <path
                      d="M7 1V13M1 7H13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`px-6 pb-6 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
