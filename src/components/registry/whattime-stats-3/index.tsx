"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#00A47C",
    accentLight: "#E6F7F2",
  },
  dark: {
    accent: "#00C896",
    accentLight: "#0D3D2D",
  },
} as const;

const IMAGES = {
  caseImage: {
    path: "/scraped/whattime-co-kr-2025-12-14/images/image-63.png",
    alt: "케이스 이미지",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface Stat {
  category: string;
  categoryColor: string;
  title: string;
  percentage?: string;
}

interface WhattimeStats3Props {
  mode?: "light" | "dark";
  subtitle?: string;
  title?: string;
  highlightedText?: string;
  description?: string;
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  {
    category: "고객영업",
    categoryColor: "#00A47C",
    title: "잠재고객 72% 증가",
  },
  {
    category: "채용",
    categoryColor: "#00A47C",
    title: "일정 조율 시간 70% 감소",
  },
  {
    category: "교육",
    categoryColor: "#00A47C",
    title: "솔루션 비용 70% 감소",
  },
];

export default function WhattimeStats3({
  mode = "light",
  subtitle = "기대 효과",
  title = "고객들이 증명하는 업무",
  highlightedText = "효율성 증가",
  description = "더 많은 잠재고객과 채용 후보자를 만나고, 일정 조율에 드는 시간과 비용을 절감하여 업무 효율성을 높이세요.",
  stats = defaultStats,
}: WhattimeStats3Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title Section - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title} <span style={{ color: colors.accent }}>{highlightedText}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Stats Cards with SVG dotted line */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* SVG Dotted Line behind cards */}
            <svg
              viewBox="0 0 80 300"
              className="absolute left-1/2 top-0 h-full w-20 -translate-x-1/2 -z-0"
              style={{ height: "calc(100% - 40px)", top: "20px" }}
            >
              <line
                x1="40"
                y1="0"
                x2="40"
                y2="100%"
                stroke="#E5E7EB"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            </svg>

            {/* Stats Cards */}
            <div className="space-y-6 relative z-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="w-fit mx-auto bg-white rounded-2xl border border-gray-100 p-8 shadow-lg text-center"
                >
                  <p className="text-sm font-semibold mb-2" style={{ color: stat.categoryColor }}>
                    {stat.category}
                  </p>
                  <p className="text-xl font-bold text-gray-900">{stat.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Case Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src={IMAGES.caseImage.path}
              alt={IMAGES.caseImage.alt}
              width={743}
              height={741}
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
