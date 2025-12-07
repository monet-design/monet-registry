"use client";

// ============================================================================
// CUSTOMIZATION
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

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface SuperbillingIoCta7Props {
  mode?: "light" | "dark";
}

export default function SuperbillingIoCta7({
  mode = "dark",
}: SuperbillingIoCta7Props) {
  const colors = COLORS[mode];

  return (
    <section className="py-24 md:py-32 bg-gray-950">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 text-white">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12">
            복잡한 구독 결제, 이제 3분만에 해결하세요.
            <br />
            Early Access 신청하고 특별한 혜택을 받아보세요.
          </p>

          <div>
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
            <p className="text-sm text-gray-400 mt-4">
              * 선착순 100명까지만 신청 가능합니다
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
