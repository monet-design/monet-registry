"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    cardBorder: "rgba(255, 255, 255, 0.1)",
    cardHoverBg: "rgba(255, 255, 255, 0.1)",
    accent: "#ec4899",
  },
  dark: {
    cardBorder: "rgba(255, 255, 255, 0.1)",
    cardHoverBg: "rgba(255, 255, 255, 0.1)",
    accent: "#ec4899",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Zap, Shield, Code } from "lucide-react";

interface SuperbillingIoFeature5Props {
  mode?: "light" | "dark";
}

const features = [
  {
    icon: Zap,
    title: "최고의 효율성",
    description: "구독 결제, 익숙한 기능이지만 직접 개발하긴 최소 몇개월이 소요될만큼 복잡합니다. 슈퍼빌링과 함께라면 단 몇 분만에 완성할 수 있습니다.",
    link: null,
  },
  {
    icon: Shield,
    title: "최고의 전문성",
    description: "토스페이먼츠 개발자 출신 창업자가 결제 시스템의 A to Z까지 전문적인 경험을 바탕으로 설계했습니다.",
    link: { text: "창업자 프로필", href: "#" },
  },
  {
    icon: Code,
    title: "최고의 개발 이해도",
    description: "슈퍼빌링은 개발자가 개발자를 위해 만든 서비스입니다. 어떤 서비스보다도 직관적이고 편한 인터페이스를 제공합니다.",
    link: null,
  },
];

export default function SuperbillingIoFeature5({
  mode = "dark",
}: SuperbillingIoFeature5Props) {
  const colors = COLORS[mode];

  return (
    <section className="py-16 bg-gray-950">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold mt-4">
            <span
              className="bg-gradient-to-r from-pink-400 via-white to-pink-400 bg-[length:200%_100%] bg-clip-text text-transparent"
              style={{ backgroundPosition: "50% 0" }}
            >
              최고의 경험을
              <br className="md:hidden" /> 제공합니다.
            </span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              style={{ borderColor: colors.cardBorder }}
            >
              <feature.icon
                className="w-8 h-8 mb-6"
                style={{ color: colors.accent }}
              />
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {feature.description}
              </p>
              {feature.link && (
                <a
                  href={feature.link.href}
                  className="text-sm underline mt-4 text-white/80 hover:text-white"
                >
                  {feature.link.text}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
