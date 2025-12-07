"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    cardBg: "rgba(255, 255, 255, 0.1)",
    cardBorder: "rgba(255, 255, 255, 0.3)",
    iconBg: "#334155",
  },
  dark: {
    cardBg: "rgba(255, 255, 255, 0.1)",
    cardBorder: "rgba(255, 255, 255, 0.3)",
    iconBg: "#334155",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Zap, Puzzle, Lock } from "lucide-react";

interface SuperbillingIoFeature2Props {
  mode?: "light" | "dark";
}

const features = [
  {
    icon: Zap,
    title: "3분만에 만드는 구독결제",
    description: "최적화 API,SDK를 이용해 빠르게 연동\n(직접 구현 시 2~3개월 소요)",
  },
  {
    icon: Puzzle,
    title: "효율적인 노코드 운영",
    description: "최초 연동 후 개발자의 도움 없이\n언제든 쉽게 수정하고 운영",
  },
  {
    icon: Lock,
    title: "안전한 결제 데이터 관리",
    description: "민감한 결제 데이터 보안,\n간편하고 안전하게 관리",
  },
];

export default function SuperbillingIoFeature2({
  mode = "dark",
}: SuperbillingIoFeature2Props) {
  const colors = COLORS[mode];

  return (
    <section className="py-32 bg-gray-950">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Why SuperBilling?
          </h2>
          <p className="text-lg md:text-xl text-slate-200">
            까다롭고 복잡한 구독 결제는 슈퍼빌링에게 맡기고,
            <br />
            가장 중요한 비즈니스에만 집중하세요.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center flex-1 rounded-lg backdrop-blur border p-8"
              style={{
                backgroundColor: colors.cardBg,
                borderColor: colors.cardBorder,
              }}
            >
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
                style={{ backgroundColor: colors.iconBg }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-slate-200 leading-relaxed text-base md:text-lg whitespace-pre-line">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
