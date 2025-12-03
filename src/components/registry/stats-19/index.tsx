"use client";

import { useEffect } from "react";
import { motion } from "motion/react";

interface StatItem {
  value: string;
  label: string;
}

interface Stats19Props {
  mode?: "light" | "dark";
  title?: string;
  titleHighlight?: string;
  stats?: StatItem[];
}

const CUSTOMIZATION = {}

export default function Stats19({
  mode = "dark",
  title = "Some",
  titleHighlight = "statistics.",
  stats = [
    { value: "1,800", label: "Students" },
    { value: "28", label: "Teachers" },
    { value: "30", label: "Countries" },
    { value: "300k", label: "Breads" },
  ],
}: Stats19Props) {
  // Load Instrument Serif font
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section className="w-full bg-black px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          <span className="font-normal">{title} </span>
          <span
            className="font-normal italic"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
            }}
          >
            {titleHighlight}
          </span>
        </motion.h2>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-[#2A2A2A] bg-black"
        >
          <div className="grid grid-cols-2 divide-x divide-[#2A2A2A] sm:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex flex-col items-center justify-center px-4 py-10 text-center sm:px-6 sm:py-12"
              >
                <span className="text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-3 text-sm text-[#6B6B6B] sm:text-base">
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
