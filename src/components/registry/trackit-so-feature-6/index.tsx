"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const CONTENT = {
  badge: "강력한 보안",
  title: "트래킷은 보안을 최우선으로 생각합니다.",
  description:
    "모든 데이터는 암호화되어 저장되며, 접근 권한은 팀과 역할에 따라 정밀하게 제어됩니다. 이중 인증, 접속 로그 기록 등 엔터프라이즈 수준의 보안 체계를 갖추고 있습니다.",
  features: [
    {
      icon: "🔒",
      title: "암호화 저장",
      description:
        "모든 데이터는 AES-256 등 안전한 방식으로 암호화되어 저장됩니다.",
    },
    {
      icon: "**",
      title: "민감 정보 마스킹",
      description:
        "주민등록번호, 계좌번호 등 민감한 정보는 화면에 노출되지 않도록 마스킹 처리할 수 있습니다.",
    },
    {
      icon: "🔐",
      title: "2단계 인증",
      description:
        "비밀번호 외에도 인증 코드를 추가로 입력해 계정을 더욱 안전하게 보호합니다.",
    },
    {
      icon: "🔄",
      title: "자동 로그아웃",
      description:
        "사용자가 일정 시간 이상 활동하지 않으면 자동으로 로그아웃되어 정보 노출을 방지합니다.",
    },
    {
      icon: "👤",
      title: "IP 접근 제한",
      description:
        "사전에 등록된 IP에서만 접속할 수 있도록 제한해 외부 비인가 접근을 차단합니다.",
    },
    {
      icon: "📋",
      title: "시스템 접근 로그 보관",
      description:
        "관리자 및 사용자의 시스템 접근 기록을 보관해 보안 감사와 이상 징후 대응이 가능합니다.",
    },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface TrackitSoFeature6Props {
  mode?: "light" | "dark";
}

export default function TrackitSoFeature6({
  mode = "light",
}: TrackitSoFeature6Props) {
  const isDark = mode === "dark";

  return (
    <section
      className={`w-full py-24 ${
        isDark ? "bg-gray-950" : "bg-gradient-to-b from-amber-50 to-white"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${
              isDark
                ? "bg-amber-900/50 text-amber-300"
                : "bg-amber-100 text-amber-700"
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
            className={`text-lg max-w-3xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {CONTENT.description}
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONTENT.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-2xl ${
                isDark
                  ? "bg-gray-900 border border-gray-800"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-2xl ${
                  isDark ? "bg-gray-800" : "bg-amber-100"
                }`}
              >
                {feature.icon}
              </div>
              <h3
                className={`text-lg font-semibold mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
