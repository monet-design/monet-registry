"use client";

import { motion } from "motion/react";

const COLORS = {
  light: {
    accent: "#3366FF",
    accentHover: "#2952CC",
    gradientFrom: "#EBF0FF",
    gradientTo: "#B8CCFF",
  },
  dark: {
    accent: "#4D7AFF",
    accentHover: "#3366FF",
    gradientFrom: "#1A2744",
    gradientTo: "#0F1729",
  },
} as const;

interface RelateKrHero1Props {
  mode?: "light" | "dark";
}

export default function RelateKrHero1({
  mode = "light",
}: RelateKrHero1Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, white 0%, ${colors.gradientFrom} 30%, ${colors.gradientTo} 100%)`,
          }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(51, 102, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(51, 102, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        {/* Y Combinator Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full shadow-sm">
            <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">
              Y
            </div>
            <span className="text-sm text-gray-600">Backed by Y Combinator</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          style={{ color: colors.accent }}
        >
          심플한 B2B 영업 CRM
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
        >
          Relate은 체계적이고 효율적인 영업 프로세스를<br className="hidden sm:block" />
          위한 심플한 B2B 세일즈 CRM 소프트웨어 입니다.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full shadow-lg transition-all hover:shadow-xl"
            style={{
              backgroundColor: 'white',
              color: colors.accent,
              border: `1px solid ${colors.gradientFrom}`,
            }}
          >
            무료로 시작하기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
