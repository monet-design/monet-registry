"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#F97316",
    accentHover: "#EA580C",
    background: "#FDF6EE",
  },
  dark: {
    accent: "#FB923C",
    accentHover: "#F97316",
    background: "#1C1917",
  },
} as const;

const CONTENT = {
  title: "볼타 레터",
  description: "매달 다른 세금계산서 마감일을 놓치지 않도록 볼타에서 알려드립니다.",
  subDescription: "전자세금계산서 관련 최신 뉴스, 볼타 레터를 구독하고 받아보세요.",
  placeholder: "업무용 이메일",
  cta: "구독하기",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";

interface BoltaIoCta5Props {
  mode?: "light" | "dark";
}

export default function BoltaIoCta5({ mode = "light" }: BoltaIoCta5Props) {
  const colors = COLORS[mode];
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing:", email);
  };

  return (
    <section
      className="w-full py-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          {CONTENT.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 mb-2"
        >
          {CONTENT.description}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-gray-500 text-sm mb-8"
        >
          {CONTENT.subDescription}
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={CONTENT.placeholder}
            className="flex-1 px-6 py-4 rounded-full border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
            required
          />
          <motion.button
            type="submit"
            className="px-8 py-4 rounded-full text-white font-medium whitespace-nowrap"
            style={{ backgroundColor: colors.accent }}
            whileHover={{ backgroundColor: colors.accentHover }}
            whileTap={{ scale: 0.98 }}
          >
            {CONTENT.cta}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
