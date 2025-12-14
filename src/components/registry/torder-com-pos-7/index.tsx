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

const POS_PARTNERS = [
  { name: "OKPOS", subtitle: "오케이 포스" },
  { name: "ASTEMS", subtitle: "아스템즈" },
  { name: "METACITY", subtitle: "메타시티 포스" },
  { name: "tPay", subtitle: "티페이 포스" },
  { name: "MSP", subtitle: "MSP 포스" },
  { name: "AIRPOS", subtitle: "에어 포스" },
  { name: "WAVEPOS", subtitle: "웨이브 포스" },
  { name: "UNIONPOS", subtitle: "유니온 포스" },
  { name: "NETPOS", subtitle: "넷포스" },
  { name: "KPN", subtitle: "퍼스트 포스" },
  { name: "EasyPOS", subtitle: "이지 포스" },
  { name: "Infrasys", subtitle: "인프라시스 포스" },
  { name: "FOODTECH", subtitle: "푸드테크 포스" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface TorderComPos7Props {
  mode?: "light" | "dark";
}

export default function TorderComPos7({
  mode = "dark",
}: TorderComPos7Props) {
  const colors = COLORS[mode];

  return (
    <section className="w-full py-24 px-4 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white"
        >
          <span style={{ color: colors.accent }}>30개 이상</span>의 포스와<br />
          자동 연동 지원
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-gray-400"
        >
          변경 없이 쓰던 포스 그대로 연동하세요
        </motion.p>
      </div>

      {/* Floating POS Cards */}
      <div className="relative h-[600px] max-w-5xl mx-auto">
        {POS_PARTNERS.map((pos, index) => {
          const positions = [
            { top: "5%", left: "15%" },
            { top: "0%", right: "20%" },
            { top: "15%", left: "35%" },
            { top: "10%", right: "5%" },
            { top: "25%", right: "30%" },
            { top: "35%", left: "0%" },
            { top: "40%", right: "0%" },
            { top: "50%", left: "20%" },
            { top: "55%", right: "15%" },
            { top: "65%", left: "5%" },
            { top: "70%", right: "25%" },
            { top: "80%", left: "30%" },
            { top: "75%", right: "5%" },
          ];
          const position = positions[index % positions.length];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              animate={{
                y: [0, -10, 0],
              }}
              className="absolute p-4 md:p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl"
              style={{
                ...position,
                animationDuration: `${3 + index * 0.2}s`,
              }}
            >
              <p className="text-lg md:text-xl font-bold text-white">{pos.name}</p>
              <p className="text-xs text-gray-500 mt-1">{pos.subtitle}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
