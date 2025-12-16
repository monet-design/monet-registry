"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const CONTENT = {
  features: [
    {
      title: "조직도 기반 데이터 접근 권한 제어",
      description:
        "조직 구조에 따라 팀별, 역할별로 데이터 접근 권한을 설정할 수 있습니다. 담당자에게는 필요한 정보만, 관리자에게는 전체 데이터를 보여주는 등 조직에 맞는 유연한 권한 관리가 가능해 보안과 효율을 동시에 갖출 수 있습니다.",
      bullets: [
        "조직도 구성",
        "롤 기반 접근 권한 제어",
        "내 데이터는 나만 보기",
        "조직장은 조직원 데이터까지 보기",
      ],
      imagePosition: "left",
      image: "/scraped/trackit-so-2025-12-15/images/image-33.png",
    },
    {
      title: "모바일 앱으로 영업 현황을 한눈에",
      description:
        "모바일에서도 고객 연락처, 영업 파이프라인, 고객 이력, 팀 권한까지 그대로 엔터프라이즈 수준의 CRM을 손안에서 간편하게 관리하세요.",
      bullets: [
        "앱 푸시 알림으로 실시간 대응",
        "음성 메모 자동 기록",
        "사진 및 명함 스캔 업로드",
        "연락처 연결",
      ],
      imagePosition: "right",
      image: "/scraped/trackit-so-2025-12-15/images/image-34.png",
    },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface TrackitSoFeature4Props {
  mode?: "light" | "dark";
}

export default function TrackitSoFeature4({
  mode = "light",
}: TrackitSoFeature4Props) {
  const isDark = mode === "dark";

  return (
    <section className={`w-full py-20 ${isDark ? "bg-gray-950" : "bg-white"}`}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="space-y-24">
          {CONTENT.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${
                feature.imagePosition === "right"
                  ? "lg:flex-row-reverse"
                  : "lg:flex-row"
              } gap-12 items-center`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <h3
                  className={`text-2xl md:text-3xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-base md:text-lg leading-relaxed ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className={`flex items-center gap-3 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                          isDark
                            ? "bg-yellow-900 text-yellow-400"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        ✓
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
