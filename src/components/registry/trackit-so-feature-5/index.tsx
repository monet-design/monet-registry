"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const CONTENT = {
  badge: "외부 시스템 연동",
  title: "원하는 모든 시스템과 연결하세요.",
  description:
    "이메일, 캘린더, 카카오톡, 전자계약부터 내부 시스템까지 원하는 모든 툴과 유연하게 연결하세요. 트래킷에 자동으로 데이터를 모으고, 하나의 흐름으로 활용할 수 있습니다.",
  integrations: [
    {
      name: "Kakao",
      icon: "https://framerusercontent.com/images/L0yFPVjgfhAffN56tmT4lceAPQ.png",
    },
    {
      name: "Telegram",
      icon: "https://framerusercontent.com/images/ih6OdtRNvOU719Nn4mRxGr2fHCQ.png",
    },
    {
      name: "Google",
      icon: "https://framerusercontent.com/images/wqqRTQwh3lNTXCz44esb5EUsSY.png",
    },
    {
      name: "Naver",
      icon: "https://framerusercontent.com/images/XvzD7GBLYn9b4gKBWrmXr45eEDc.webp",
    },
    {
      name: "Toss",
      icon: "https://framerusercontent.com/images/DyFsuVx1mG0e8u23qLfVEZtNGSI.png",
    },
    {
      name: "Notion",
      icon: "https://framerusercontent.com/images/wt0YgJ7V5LldJHTZ4bRLTF99JY.png",
    },
    {
      name: "Google Calendar",
      icon: "https://framerusercontent.com/images/m2oHmJ1WACNuyQ6AAyelYIMY2k.png",
    },
    {
      name: "Slack",
      icon: "https://framerusercontent.com/images/TH4ZyOa0ETJpHJ4EYynv7trBXkI.webp",
    },
  ],
  centerLogo: "https://framerusercontent.com/images/zeGexpTWz9szTsx8J09HZRTJmac.png",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface TrackitSoFeature5Props {
  mode?: "light" | "dark";
}

export default function TrackitSoFeature5({
  mode = "light",
}: TrackitSoFeature5Props) {
  const isDark = mode === "dark";

  return (
    <section className={`w-full py-24 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${
              isDark
                ? "bg-pink-900/50 text-pink-300"
                : "bg-pink-100 text-pink-700"
            }`}
          >
            {CONTENT.badge}
          </span>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {CONTENT.title}
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {CONTENT.description}
          </p>
        </motion.div>

        {/* Integration wheel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative flex items-center justify-center"
          style={{ height: "500px" }}
        >
          {/* Outer rings */}
          <div
            className={`absolute w-[450px] h-[450px] rounded-full border ${
              isDark ? "border-gray-800" : "border-gray-200"
            }`}
            style={{
              background: isDark
                ? "radial-gradient(circle, rgba(0,0,0,0.3) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(0,0,0,0.02) 0%, transparent 70%)",
            }}
          />
          <div
            className={`absolute w-[340px] h-[340px] rounded-full border ${
              isDark ? "border-gray-700" : "border-gray-300"
            }`}
            style={{
              background: isDark
                ? "radial-gradient(circle, rgba(0,0,0,0.4) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)",
            }}
          />
          <div
            className={`absolute w-[230px] h-[230px] rounded-full border ${
              isDark ? "border-gray-600" : "border-gray-300"
            }`}
            style={{
              background: isDark
                ? "radial-gradient(circle, rgba(0,0,0,0.5) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(0,0,0,0.04) 0%, transparent 70%)",
            }}
          />

          {/* Center logo */}
          <div
            className={`absolute w-24 h-24 rounded-3xl ${
              isDark ? "bg-gray-800" : "bg-white"
            } shadow-xl flex items-center justify-center z-10`}
          >
            <img
              src={CONTENT.centerLogo}
              alt="Trackit"
              className="w-12 h-12 object-contain"
            />
          </div>

          {/* Integration icons */}
          {CONTENT.integrations.map((integration, index) => {
            const angle = (index * 360) / CONTENT.integrations.length - 90;
            const radius = 180;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`absolute w-14 h-14 rounded-2xl ${
                  isDark ? "bg-gray-800" : "bg-white"
                } shadow-lg flex items-center justify-center`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <img
                  src={integration.icon}
                  alt={integration.name}
                  className="w-8 h-8 object-contain"
                />
              </motion.div>
            );
          })}

          {/* Gradient orbs */}
          <div
            className="absolute w-32 h-32 rounded-full opacity-30 blur-3xl"
            style={{
              background: "radial-gradient(circle, #FF4747 0%, transparent 70%)",
              top: "20%",
              left: "30%",
            }}
          />
          <div
            className="absolute w-32 h-32 rounded-full opacity-30 blur-3xl"
            style={{
              background: "radial-gradient(circle, #0097FE 0%, transparent 70%)",
              bottom: "20%",
              right: "30%",
            }}
          />
          <div
            className="absolute w-32 h-32 rounded-full opacity-30 blur-3xl"
            style={{
              background: "radial-gradient(circle, #9966FF 0%, transparent 70%)",
              top: "50%",
              left: "20%",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
