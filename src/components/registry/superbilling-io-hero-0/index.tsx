"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    accent: "#FFFFFF",
    accentHover: "#F3F4F6",
  },
  dark: {
    accent: "#FFFFFF",
    accentHover: "#F3F4F6",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface SuperbillingIoHero0Props {
  mode?: "light" | "dark";
}

export default function SuperbillingIoHero0({
  mode = "dark",
}: SuperbillingIoHero0Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative z-1 h-[600px] flex items-center justify-center bg-gray-950 overflow-visible">
      {/* Background gradient overlay */}
      <div className="absolute z-1 top-1/2 h-[600px] w-full bg-linear-180 from-transparent via-purple-400/50 to-transparent" />

      {/* Content */}
      <div className="container relative z-10 text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-7xl lg:text-8xl font-semibold leading-tight mb-6"
        >
          3분만에 연동하는
          <br />
          가장 쉬운 구독 결제
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-base md:text-xl mb-12 text-white/80 leading-relaxed">
            복잡한 구독 빌링결제를 가장 빠르고 안정적으로
            <br />
            구축할 수 있는 단 하나의 노코드 솔루션
          </p>

          <p className="mb-4 text-white/80 leading-relaxed">
            선착순 100명에게 3개월 무료 사용권 제공
          </p>

          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 px-8 h-11 rounded-md text-sm font-medium transition-colors"
            style={{
              backgroundColor: colors.accent,
              color: "#000000",
            }}
          >
            사전예약 신청
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
