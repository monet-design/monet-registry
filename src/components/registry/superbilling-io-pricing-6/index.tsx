"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    cardBg: "#1f1f1f",
    cardBorder: "#333333",
    primaryBorder: "#ec4899",
    accent: "#ec4899",
  },
  dark: {
    cardBg: "#1f1f1f",
    cardBorder: "#333333",
    primaryBorder: "#ec4899",
    accent: "#ec4899",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check } from "lucide-react";

interface SuperbillingIoPricing6Props {
  mode?: "light" | "dark";
}

const plans = [
  {
    name: "Personal",
    description: "개인 및 소규모 프로젝트를 위한 기본 요금제",
    price: "$40",
    period: "/월",
    features: [
      "활성 구독자 100명 이하",
      "나만의 요금제 생성",
      "노코드 결제 UI",
      "API & Webhook 액세스",
      "데이터 대시보드",
    ],
    featured: false,
    buttonVariant: "outline" as const,
  },
  {
    name: "Pro",
    description: "성장하는 비즈니스를 위한 프로페셔널 요금제",
    price: "$120",
    period: "/월",
    badge: "추천 요금제",
    features: [
      { text: "Personal 요금제의 모든 기능", muted: true },
      "활성 구독자 2000명 이하",
      "계정 수 기반 과금",
      "사용량 기반 과금",
      "이메일/알림톡 알림",
      "멀티 PG 대응",
      "프로모션 관리",
    ],
    featured: true,
    buttonVariant: "primary" as const,
  },
  {
    name: "Enterprise",
    description: "대규모 비즈니스를 위한 맞춤형 요금제",
    price: "문의",
    period: "",
    features: [
      { text: "Pro 요금제의 모든 기능", muted: true },
      "활성 구독자 무제한",
      "전담 매니저",
      "화이트라벨 솔루션",
      "SLA 보장",
      "전용 API 지원",
      "보안 감사 및 컴플라이언스",
    ],
    featured: false,
    buttonVariant: "outline" as const,
  },
];

export default function SuperbillingIoPricing6({
  mode = "dark",
}: SuperbillingIoPricing6Props) {
  const colors = COLORS[mode];

  return (
    <section className="py-16 md:py-24 bg-gray-950" id="pricing">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            합리적인 요금제
          </h2>
          <p className="text-lg text-gray-400">
            비즈니스 규모에 맞는 최적의 요금제를 선택하세요
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <ul className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.li
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.featured ? "shadow-lg" : ""
              }`}
              style={{
                backgroundColor: colors.cardBg,
                borderWidth: "1px",
                borderColor: plan.featured ? colors.primaryBorder : colors.cardBorder,
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className="text-sm rounded-full px-3 py-1 text-white"
                    style={{ backgroundColor: colors.accent }}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Info */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-400">{plan.period}</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => {
                  const featureText = typeof feature === "string" ? feature : feature.text;
                  const isMuted = typeof feature === "object" && feature.muted;

                  return (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check
                        className={`h-5 w-5 ${
                          isMuted ? "text-pink-400/70" : "text-pink-400"
                        }`}
                      />
                      <span
                        className={
                          isMuted
                            ? "font-medium text-gray-400"
                            : "text-white"
                        }
                      >
                        {featureText}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* Button */}
              <button
                className={`w-full h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  plan.buttonVariant === "primary"
                    ? "text-white hover:opacity-90"
                    : "border border-gray-600 bg-transparent text-white hover:bg-gray-800"
                }`}
                style={
                  plan.buttonVariant === "primary"
                    ? { backgroundColor: colors.accent }
                    : {}
                }
              >
                신청하기
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
