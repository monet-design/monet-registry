"use client";

import { useEffect } from "react";
import { motion } from "motion/react";

interface StatItem {
  value: string;
  label: string;
}

interface Stats10Props {
  mode?: "light" | "dark";
  title?: string;
  description?: string;
  stats?: StatItem[];
}

const CUSTOMIZATION = {}

export default function Stats10({
  mode = "dark",
  title = "The Landingfolio Facts",
  description = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  stats = [
    { value: "1M+", label: "Tickets Delivered This Month" },
    { value: "53K+", label: "Active Customers Rate" },
    { value: "98.29%", label: "Customer Satisfaction Rate" },
  ],
}: Stats10Props) {
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
      {/* Background glow effect */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl"
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
          }}
        >
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-[#9CA3AF]"
        >
          {description}
        </motion.p>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-12"
        >
          {/* Glow effect behind card */}
          <div
            className="pointer-events-none absolute -inset-4 rounded-2xl opacity-50"
            style={{
              background:
                "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
            }}
          />

          {/* Card with gradient border */}
          <div className="relative rounded-xl p-[1px] bg-gradient-to-b from-[#3B82F6]/40 via-[#6366F1]/20 to-transparent">
            <div
              className="rounded-xl px-8 py-12 sm:px-12 sm:py-16"
              style={{
                background:
                  "linear-gradient(180deg, rgba(30, 32, 60, 0.8) 0%, rgba(15, 17, 35, 0.9) 100%)",
              }}
            >
              <div className="grid grid-cols-1 divide-y divide-[#3B4265]/50 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex flex-col items-center justify-center px-4 py-8 text-center sm:py-4"
                  >
                    <span className="text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
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
        </motion.div>
      </div>
    </section>
  );
}
