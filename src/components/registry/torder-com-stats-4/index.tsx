"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FC0000",
    text: "#111",
    subtext: "#666",
  },
  dark: {
    accent: "#FC0000",
    text: "#fff",
    subtext: "#999",
  },
} as const;

const STATS = [
  { label: "인건비", value: "85%", suffix: " 감소", color: "#FC0000" },
  { label: "회전도", value: "55%", suffix: " 감소", color: "#FC0000" },
  { label: "회전율", value: "141%", suffix: " 증가", color: "#22C55E" },
  { label: "매출", value: "133%", suffix: " 증가", color: "#22C55E" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";

interface TorderComStats4Props {
  mode?: "light" | "dark";
}

function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, numericValue]);

  return <span>{count}%</span>;
}

export default function TorderComStats4({
  mode = "light",
}: TorderComStats4Props) {
  const colors = COLORS[mode];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={`w-full py-24 px-4 ${mode === "dark" ? "bg-gray-950" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Title */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-wider"
            style={{ color: colors.accent }}
          >
            데이터가 말한다
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4"
            style={{ color: colors.text }}
          >
            매출 상승의 공식
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base md:text-lg"
            style={{ color: colors.subtext }}
          >
            인건비 85% 감소, 회전도 55% 감소, 회전율 141% 증가, 매출 133% 증가.<br />
            효과를 숫자로 직접 체감한 사장님들이 티오더로 만든 성공 스토리를 확인해보세요.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 md:p-8 rounded-2xl text-center ${
                mode === "dark" ? "bg-gray-900" : "bg-white"
              } shadow-lg`}
            >
              <p
                className="text-sm font-semibold mb-2"
                style={{ color: colors.subtext }}
              >
                {stat.label}
              </p>
              <p
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold"
                style={{ color: stat.color }}
              >
                <AnimatedCounter value={stat.value} inView={isInView} />
              </p>
              <p
                className="text-sm font-medium mt-2"
                style={{ color: colors.text }}
              >
                {stat.suffix}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="/interview/case"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold transition-transform hover:scale-105"
            style={{ backgroundColor: colors.accent }}
          >
            성공 스토리 보기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
