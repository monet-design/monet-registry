"use client";

import { motion } from "motion/react";

// Google Font import for DM Serif Display
const fontImport = `@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');`;

interface StatItem {
  value: string;
  label: string;
}

interface Stats8Props {
  title?: string;
  description?: string;
  stats?: StatItem[];
}

const defaultStats: StatItem[] = [
  { value: "483", label: "Satisfied global\nclients" },
  { value: "78%", label: "Download total\nrange" },
  { value: "854", label: "Finish success\nprojects" },
  { value: "315", label: "Branding awards\nwinning" },
];

// Decorative curve component for corners
function DecorativeCurve({ position }: { position: "top-left" | "bottom-right" }) {
  if (position === "top-left") {
    return (
      <svg
        className="absolute top-0 left-0 w-24 h-32 text-white/20"
        viewBox="0 0 96 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-20 128C-20 128 -20 60 40 20C60 5 80 0 96 0"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    );
  }

  return (
    <svg
      className="absolute bottom-0 right-0 w-24 h-32 text-white/20"
      viewBox="0 0 96 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 128C20 128 40 120 56 108C116 60 116 0 116 0"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

export default function Stats8({
  title = "Our achievements",
  description = "Clarity gives you the blocks & components you need to create a\ntruly professional website for your SaaS and gives the blocks.",
  stats = defaultStats,
}: Stats8Props) {
  return (
    <section className="relative w-full bg-[#F9FAFC] py-16 md:py-24">
      {/* Font import */}
      <style dangerouslySetInnerHTML={{ __html: fontImport }} />
      <div className="mx-auto max-w-6xl px-6">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold text-[#1a1a2e] md:text-4xl lg:text-5xl"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl whitespace-pre-line text-base text-[#8B8B9E] md:text-lg"
          >
            {description}
          </motion.p>
        </div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl bg-[#2563EA] px-8 py-12 md:px-12 md:py-16"
        >
          {/* Decorative curves */}
          <DecorativeCurve position="top-left" />
          <DecorativeCurve position="bottom-right" />

          {/* Stats Grid */}
          <div className="relative z-10 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                  {stat.value}
                </span>
                <span className="mt-2 whitespace-pre-line text-sm text-white/90 md:text-base">
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
