"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const CONTENT = {
  sections: [
    {
      badge: "단계적 도입",
      title: "트래킷만의 CRM 도입 성공을 위한 단계적 도입을 지원합니다.",
      steps: [
        { number: "1", title: "쉬운 도입과 학습", active: true },
        { number: "2", title: "커스터마이징" },
        { number: "3", title: "비즈니스 운영 도구로 확장" },
      ],
    },
    {
      title: "고객 정보 자동 수집 및 정리",
      description:
        "적절한 연결만의 자동으로 고객 연락처와 소통 내역이 정리됩니다.",
      features: [
        {
          title: "연락처 자동 구성",
          description:
            "이름, 전화번호, 이메일, 회사로 고객 연락처가 자동으로 구성됩니다.",
          image:
            "https://framerusercontent.com/images/contact-auto.png",
        },
        {
          title: "기업 정보 인리치먼트",
          description:
            "공공데이터와 내부 데이터를 결합해 기업 정보를 자동으로 인리치먼트합니다.",
          image:
            "https://framerusercontent.com/images/enrichment.png",
        },
        {
          title: "통합 고객 프로필",
          description:
            "흩어진 고객 데이터가 통합 프로필로 통합 고객 모든 정보를 제공합니다.",
          image:
            "https://framerusercontent.com/images/profile.png",
        },
      ],
    },
    {
      title: "강력한 커스터마이징, 우리 조직에 꼭 맞게",
      description:
        "데이터 구조부터 화면 구성, 모든요소가 우리 정책에 맞게 자유롭게 설계할 수 있습니다.",
      cards: [
        {
          title: "데이터 커스터마이징",
          description:
            "어떤 산업, 어떤 프로세스에도 맞게 자유롭게 데이터 구조를 커스터마이징할 수 있습니다.",
        },
        {
          title: "페이지 커스터마이징",
          description:
            "각 조직원별 역할에 따라 대시보드 페이지를 커스터마이징할 수 있습니다.",
        },
      ],
    },
    {
      title: "숫자로 말하는 대시보드",
      description:
        "영업 매출과 KPI를 실시간으로 분석하고 팀을 분산대 관리할 수 있습니다.",
      stats: [
        {
          value: "218,000,000",
          label: "예상 매출 합계액 보기",
          description:
            "어떤 및 입금액, 대응, 전환율 등 핵심 KPI를 실시간으로 파악할 수 있습니다.",
        },
        {
          value: "",
          label: "기간별 실적 비교",
          description:
            "전달대비 이번달 실적 비교를 통해 매출 목표 달성 여부를 확인할 수 있습니다.",
        },
        {
          value: "",
          label: "영업 현황 분석",
          description:
            "영업, 팀, 매출, 전환 등 기준에 따른 리포트를 확인할 수 있습니다.",
        },
      ],
    },
    {
      title: "자동화로 반복 업무 제거",
      description: "반복되는 트래킷이 대신합니다. 담당 배치, 메시지, 알림까지 자동화해서 시간을 아껴줍니다.",
      automations: [
        {
          icon: "workflow",
          title: "워크플로우 자동화",
          description:
            "반복되는 워크플로우를 자동화해 업무 로드를 감소시킬 수 있습니다.",
        },
        {
          icon: "message",
          title: "메시지 자동화",
          description:
            "이메일, 알림톡, 문자 메시지 고객에게 자동 발송합니다.",
        },
        {
          icon: "notification",
          title: "알림 자동화",
          description:
            "주요 이벤트에 대해 팀원에게 자동으로 알림을 보냅니다.",
        },
      ],
    },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useState } from "react";

interface TrackitSoFeature2Props {
  mode?: "light" | "dark";
}

export default function TrackitSoFeature2({
  mode = "light",
}: TrackitSoFeature2Props) {
  const isDark = mode === "dark";
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      className={`w-full py-20 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section 1: 단계적 도입 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`rounded-3xl p-8 md:p-12 mb-20 ${
            isDark ? "bg-gray-900" : "bg-white"
          }`}
        >
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${
              isDark
                ? "bg-purple-900/50 text-purple-300"
                : "bg-purple-100 text-purple-700"
            }`}
          >
            {CONTENT.sections[0].badge}
          </span>
          <h2
            className={`text-2xl md:text-3xl font-bold mb-8 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {CONTENT.sections[0].title}
          </h2>
          <div className="flex flex-wrap gap-4">
            {CONTENT.sections[0].steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all ${
                  activeStep === index
                    ? isDark
                      ? "bg-blue-600 text-white"
                      : "bg-blue-500 text-white"
                    : isDark
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    activeStep === index
                      ? "bg-white/20"
                      : isDark
                      ? "bg-gray-700"
                      : "bg-gray-200"
                  }`}
                >
                  {step.number}
                </span>
                <span className="font-medium">{step.title}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Section 2: 고객 정보 자동 수집 및 정리 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2
            className={`text-2xl md:text-4xl font-bold text-center mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {CONTENT.sections[1].title}
          </h2>
          <p
            className={`text-lg text-center mb-12 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {CONTENT.sections[1].description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONTENT.sections[1].features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl p-6 ${
                  isDark ? "bg-gray-900" : "bg-white"
                } border ${isDark ? "border-gray-800" : "border-gray-200"}`}
              >
                <div
                  className={`w-full h-48 rounded-xl mb-6 ${
                    isDark ? "bg-gray-800" : "bg-gray-100"
                  } flex items-center justify-center`}
                >
                  <div
                    className={`text-4xl ${
                      isDark ? "text-gray-600" : "text-gray-300"
                    }`}
                  >
                    {index === 0 ? "👤" : index === 1 ? "🏢" : "📊"}
                  </div>
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {feature.title}
                </h3>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section 3: 강력한 커스터마이징 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2
            className={`text-2xl md:text-4xl font-bold text-center mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {CONTENT.sections[2].title}
          </h2>
          <p
            className={`text-lg text-center mb-12 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {CONTENT.sections[2].description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CONTENT.sections[2].cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl p-8 ${
                  isDark ? "bg-gray-900" : "bg-white"
                } border ${isDark ? "border-gray-800" : "border-gray-200"}`}
              >
                <div
                  className={`w-full h-64 rounded-xl mb-6 ${
                    isDark ? "bg-gray-800" : "bg-gray-100"
                  } flex items-center justify-center`}
                >
                  <div
                    className={`text-6xl ${
                      isDark ? "text-gray-600" : "text-gray-300"
                    }`}
                  >
                    {index === 0 ? "⚙️" : "📱"}
                  </div>
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {card.title}
                </h3>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section 4: 숫자로 말하는 대시보드 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2
            className={`text-2xl md:text-4xl font-bold text-center mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {CONTENT.sections[3].title}
          </h2>
          <p
            className={`text-lg text-center mb-12 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {CONTENT.sections[3].description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONTENT.sections[3].stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl p-6 ${
                  isDark ? "bg-gray-900" : "bg-white"
                } border ${isDark ? "border-gray-800" : "border-gray-200"}`}
              >
                {stat.value && (
                  <div
                    className={`text-3xl font-bold mb-2 ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    {stat.value}
                  </div>
                )}
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {stat.label}
                </h3>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section 5: 자동화로 반복 업무 제거 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className={`text-2xl md:text-4xl font-bold text-center mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {CONTENT.sections[4].title}
          </h2>
          <p
            className={`text-lg text-center mb-12 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {CONTENT.sections[4].description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONTENT.sections[4].automations.map((automation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl p-6 ${
                  isDark ? "bg-gray-900" : "bg-white"
                } border ${isDark ? "border-gray-800" : "border-gray-200"}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                    isDark ? "bg-gray-800" : "bg-gray-100"
                  }`}
                >
                  <span className="text-2xl">
                    {automation.icon === "workflow"
                      ? "⚡"
                      : automation.icon === "message"
                      ? "💬"
                      : "🔔"}
                  </span>
                </div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {automation.title}
                </h3>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {automation.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
