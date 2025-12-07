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

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, Clock, Shield } from "lucide-react";

interface VoosterAiKoCta6Props {
  mode?: "light" | "dark";
}

const benefits = [
  {
    icon: ArrowRight,
    title: "무료 베타 액세스",
    description: "모든 기능을 무료로 체험하세요",
  },
  {
    icon: Clock,
    title: "선착순 제한",
    description: "한정 수량만 제공됩니다",
  },
  {
    icon: Shield,
    title: "얼리어답터 혜택",
    description: "정식 출시 시 무료/할인 혜택 제공",
  },
];

export default function VoosterAiKoCta6({
  mode = "light",
}: VoosterAiKoCta6Props) {
  const colors = COLORS[mode];

  return (
    <section
      id="community"
      className="relative overflow-hidden bg-gray-900 px-4 py-24 text-white"
    >
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="mb-6 text-4xl font-medium !leading-[1.4] tracking-tight md:text-5xl">
            지금 바로 시작하세요
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed opacity-80">
            베타 기간 동안 모든 기능을 무료로 체험해보세요
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 grid gap-8 md:grid-cols-3"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-800">
                  <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-medium">{benefit.title}</h3>
                <p className="text-center text-sm font-light opacity-70">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <button
            className="inline-flex h-10 items-center justify-center rounded-full px-12 py-4 text-lg font-medium text-white transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: colors.accent }}
          >
            무료로 시작하기
          </button>
        </motion.div>
      </div>

      {/* Glow Effect */}
      <div className="absolute bottom-0 w-full">
        <div
          className="absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] sm:h-[512px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(249, 115, 22, 0.2) 10%, transparent 60%)",
          }}
        />
        <div
          className="absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-[2] rounded-[50%] sm:h-[256px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(249, 115, 22, 0.3) 10%, transparent 60%)",
          }}
        />
      </div>
    </section>
  );
}
