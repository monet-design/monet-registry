"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FC0000",
    text: "#111",
    subtext: "#666",
  },
  dark: {
    accent: "#FC0000",
    text: "#fff",
    subtext: "#999",
  },
} as const;

const FAQ_ITEMS = [
  {
    question: "티오더는 PG 결제 수수료가 있나요?",
    answer: "티오더는 초기 계약 시 안내한 월 이용료 외 별도의 결제 수수료를 부과하지 않습니다. 자세한 사항은 티오더 제로 캠페인에서 확인해보세요.",
    link: { text: "캠페인 바로가기", url: "/interview/post/zero_campaign" },
  },
  {
    question: "티오더는 포스 종류와 관계 없이 이용할 수 있나요?",
    answer: "티오더는 업계 유일 30개 이상의 포스사와의 자동 연동을 지원합니다. 또한 100% 자동으로 연동 프로그램을 수동으로 켜거나 별도 작업 없이 편리하게 이용할 수 있습니다.",
  },
  {
    question: "티오더는 어떤 업종에서 이용할 수 있나요?",
    answer: "티오더는 업종에 제한 없이 서비스 도입이 가능한 어느 곳이든 이용할 수 있습니다. 일반적으로는 일반음식점, 주점, 레스토랑, 노래방, 골프연습장, 호텔, 포장 전문점 등에서 많이 사용됩니다.",
  },
  {
    question: "불편사항은 어디서 해결할 수 있나요?",
    answer: "티오더 고객센터 대표번호(1644-4425) 또는 카카오톡 채팅 상담으로 연락하실 수 있습니다. 운영 시간은 오전 10시부터 익일 오전 02시까지입니다.",
  },
  {
    question: "세금계산서 발행은 어떻게 되나요?",
    answer: "세금계산서의 경우 계약이 시작되는 시점에 약정 기간의 총금액으로 발행됩니다. 단, 계약한 유형에 따라서 세금계산서 발행 시점이 다를 수 있습니다.",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface TorderComFaq14Props {
  mode?: "light" | "dark";
}

export default function TorderComFaq14({
  mode = "dark",
}: TorderComFaq14Props) {
  const colors = COLORS[mode];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-24 px-4 bg-black">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center mb-12"
        >
          자주 묻는 질문
        </motion.h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl bg-gray-900 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="flex items-center gap-3">
                  <span className="text-gray-500 font-semibold">Q</span>
                  <span className="text-white font-semibold">{faq.question}</span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-400 leading-relaxed pl-8">
                        {faq.answer}
                      </p>
                      {faq.link && (
                        <a
                          href={faq.link.url}
                          className="inline-block mt-4 ml-8 px-4 py-2 rounded-full text-white text-sm font-semibold"
                          style={{ backgroundColor: colors.accent }}
                        >
                          {faq.link.text}
                        </a>
                      )}
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
