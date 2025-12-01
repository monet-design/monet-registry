"use client";

import { useEffect } from "react";
import { motion } from "motion/react";

interface StatItem {
  value: string;
  label: string;
}

interface Stats15Props {
  mode?: "light" | "dark";
  title?: string;
  topRowStats?: StatItem[];
  bottomRowStats?: StatItem[];
}

const CUSTOMIZATION = {}

export default function Stats15({
  mode = "dark",
  title = "The Landingfolio Facts",
  topRowStats = [
    { value: "1M+", label: "Tickets Delivered This Month" },
    { value: "37K+", label: "Active Customers Rate" },
    { value: "99%", label: "Customer Satisfaction Rate" },
  ],
  bottomRowStats = [
    { value: "25", label: "Expert Team Members" },
    { value: "42%", label: "Customers Retention Rate" },
  ],
}: Stats15Props) {
  // Load Instrument Serif font
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
    <section className="relative w-full overflow-hidden bg-black px-6 py-20 sm:px-8 lg:px-12">
      <div className="relative mx-auto max-w-6xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-normal tracking-tight text-white sm:text-4xl md:text-5xl"
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
          }}
        >
          {title}
        </motion.h2>

        {/* Stats Grid */}
        <div className="mt-16">
          {/* Top Row - 3 Stats with cyan/mint gradient */}
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {topRowStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="relative flex flex-col items-center justify-center px-4 py-10 text-center"
              >
                {/* Vertical divider (not on first item) */}
                {index > 0 && (
                  <div className="absolute left-0 top-1/2 hidden h-24 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#333] to-transparent sm:block" />
                )}
                <span
                  className="text-5xl font-light tracking-tight sm:text-6xl md:text-7xl"
                  style={{
                    background: "linear-gradient(180deg, #7DD3FC 0%, #A5F3FC 50%, #67E8F9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </span>
                <span className="mt-4 text-sm font-medium tracking-wide text-[#9CA3AF]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Horizontal divider */}
          <div className="mx-auto my-4 h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-[#333] to-transparent" />

          {/* Bottom Row - 2 Stats with violet/purple gradient */}
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:max-w-3xl sm:mx-auto">
            {bottomRowStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="relative flex flex-col items-center justify-center px-4 py-10 text-center"
              >
                {/* Vertical divider (not on first item) */}
                {index > 0 && (
                  <div className="absolute left-0 top-1/2 hidden h-24 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#333] to-transparent sm:block" />
                )}
                <span
                  className="text-5xl font-light tracking-tight sm:text-6xl md:text-7xl"
                  style={{
                    background: "linear-gradient(180deg, #A78BFA 0%, #818CF8 50%, #A78BFA 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </span>
                <span className="mt-4 text-sm font-medium tracking-wide text-[#9CA3AF]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
