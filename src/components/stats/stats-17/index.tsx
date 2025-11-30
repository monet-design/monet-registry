"use client";

import { motion } from "motion/react";
import { useEffect } from "react";

interface StatItem {
  value: string;
  label: string;
}

interface Stats17Props {
  title?: string;
  description?: string;
  stats?: StatItem[];
}

const defaultStats: StatItem[] = [
  {
    value: "1M+",
    label: "Tickets Delivered This Month",
  },
  {
    value: "53K+",
    label: "Active Customers Rate",
  },
  {
    value: "98.29%",
    label: "Customer Satisfaction Rate",
  },
];

export default function Stats17({
  title = "The Landingfolio Facts",
  description = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  stats = defaultStats,
}: Stats17Props) {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Instrument+Serif&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section className="relative w-full bg-black py-20 md:py-28 overflow-hidden">
      {/* Top glow effect */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(100, 140, 200, 0.15) 0%, rgba(80, 100, 180, 0.08) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 md:px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-sm md:text-base max-w-2xl mb-12 md:mb-16 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Stats Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-2xl border border-slate-700/50 overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(20, 25, 40, 0.8) 0%, rgba(15, 18, 30, 0.9) 100%)",
          }}
        >
          {/* Inner glow at top */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center top, rgba(100, 140, 220, 0.12) 0%, transparent 70%)",
            }}
          />

          <div className="relative grid grid-cols-1 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`relative flex flex-col items-center justify-center py-12 md:py-16 px-6 ${
                  index !== stats.length - 1
                    ? "border-b md:border-b-0 md:border-r border-slate-700/50"
                    : ""
                }`}
              >
                <span className="text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tight mb-3">
                  {stat.value}
                </span>
                <span className="text-gray-400 text-sm text-center">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
