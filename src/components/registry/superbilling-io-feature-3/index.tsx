"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const FEATURE_COLORS = [
  { bg: "#FFFFFF", text: "#000000" },
  { bg: "#5626db", text: "#FFFFFF" },
  { bg: "#183752", text: "#FFFFFF" },
  { bg: "#455160", text: "#FFFFFF" },
  { bg: "#730063", text: "#FFFFFF" },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface SuperbillingIoFeature3Props {
  mode?: "light" | "dark";
}

const features = [
  {
    title: "내 서비스에 딱 맞는 요금제 생성",
    description: "월간/연간 결제, 무료체험정책, 사용량기반 과금 등 핵심 기능들을 모두 지원해요",
    badge: null,
  },
  {
    title: "간편한 운영관리",
    description: "가격 수정, 요금제 추가도 대시보드에서 간편하게",
    badge: null,
  },
  {
    title: "결제 알림 발송",
    description: "신규구독, 결제실패, 구독취소 등 다양한 이벤트에 따라 알림을 보낼 수 있어요.",
    badge: null,
  },
  {
    title: "멀티PG 대응",
    description: "여러 PG사도 괜찮아요. 슈퍼빌링에서 동시에 연동할 수 있어요.",
    badge: "SOON",
  },
  {
    title: "데이터 대시보드",
    description: "핵심 지표인 구독, 기간별 전환률/이탈률/매출 등 모든 지표를 모니터링하세요.",
    badge: null,
  },
];

export default function SuperbillingIoFeature3({
  mode = "dark",
}: SuperbillingIoFeature3Props) {
  return (
    <section className="py-16 bg-gray-950">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col w-fit"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-6 text-white">
            가장 쉬운 구독 결제
          </h2>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed text-white/90">
            까다로운 구독 빌링결제 구현 시간을 99% 단축하세요. 결제 주기, 무료체험정책, 멀티PG 등
            <br />
            결제 관련 기능은 모두 슈퍼빌링에게 맡기세요.
          </p>
        </motion.div>

        {/* Features List */}
        <div className="flex flex-col space-y-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              style={{
                backgroundColor: FEATURE_COLORS[index].bg,
                color: FEATURE_COLORS[index].text,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                    {feature.title}
                    {feature.badge && (
                      <span className="text-xs px-2 py-1 bg-orange-400 text-white rounded-full font-medium">
                        {feature.badge}
                      </span>
                    )}
                  </h3>
                  <p className="text-lg md:text-xl opacity-85 max-w-2xl">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
