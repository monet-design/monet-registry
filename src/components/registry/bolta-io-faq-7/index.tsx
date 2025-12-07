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

const CONTENT = {
  title: "궁금한 점이 있으신가요?",
  description: "궁금한 점 또는 필요한 내용을 확인해 보세요.",
  subDescription: "좀 더 상세한 안내를 원하신다면 문의하기를 이용해 주세요.",
  contactTitle: "볼타 팀 문의",
  contactDescription: "원하는 답변이 없다면 팀에게 문의해 주세요!",
  contactCta: "문의하기",
};

const FAQ_ITEMS = [
  {
    question: "공동인증서 1회 인증이 MacOS에서도 가능한가요?",
    answer: "네, MacOS에서도 공동인증서 1회 인증이 가능합니다. 크롬, 사파리 등 주요 브라우저를 지원합니다.",
  },
  {
    question: "볼타로 발행한 내역이 홈택스에서도 조회가 가능한가요?",
    answer: "네, 볼타를 통해 발행한 모든 전자세금계산서는 홈택스에서 조회 가능합니다.",
  },
  {
    question: "추가로 원하는 기능이 있는데 요청이 가능할까요?",
    answer: "네, 기능 요청은 언제든지 환영합니다. 문의하기를 통해 의견을 보내주세요.",
  },
  {
    question: "개인사업자도 이용이 가능할까요?",
    answer: "네, 개인사업자도 볼타 서비스를 이용하실 수 있습니다.",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface BoltaIoFaq7Props {
  mode?: "light" | "dark";
}

export default function BoltaIoFaq7({ mode = "light" }: BoltaIoFaq7Props) {
  const colors = COLORS[mode];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Header & Contact */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              {CONTENT.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 mb-2"
            >
              {CONTENT.description}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-gray-500 text-sm mb-8"
            >
              {CONTENT.subDescription}
            </motion.p>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl border border-gray-100 p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: "#E5E7EB" }}
                >
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {CONTENT.contactTitle}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {CONTENT.contactDescription}
                  </p>
                </div>
              </div>
              <motion.a
                href="#contact"
                className="block w-full py-3 text-center text-white font-medium rounded-lg"
                style={{ backgroundColor: colors.accent }}
                whileHover={{ backgroundColor: colors.accentHover }}
                whileTap={{ scale: 0.98 }}
              >
                {CONTENT.contactCta}
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-100 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
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
                      <div className="px-6 pb-5 text-gray-600">
                        {item.answer}
                      </div>
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
