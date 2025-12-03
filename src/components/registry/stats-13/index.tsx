"use client";

import { motion } from "motion/react";

interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
}

interface Stats13Props {
  mode?: "light" | "dark";
  title?: string;
  stats?: StatItem[];
}

const CUSTOMIZATION = {}

function SlashDivider() {
  return (
    <div className="flex items-center gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          className="h-8 w-[2px] origin-center -rotate-[20deg] bg-[#797D84]"
        />
      ))}
    </div>
  );
}

export default function Stats13({
  mode = "light",
  title = "The only platform that\ncreates rare UI Kits.",
  stats = [
    {
      value: "1.5M",
      label: "Active",
      sublabel: "Customers",
    },
    {
      value: "4.8/5",
      label: "Ratings on",
      sublabel: "TrustPilot",
    },
  ],
}: Stats13Props) {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="whitespace-pre-line text-center text-3xl font-bold tracking-tight text-[#121826] sm:text-4xl lg:text-left lg:text-[40px] lg:leading-[1.2]"
        >
          {title}
        </motion.h2>

        {/* Stats */}
        <div className="flex items-center gap-8 sm:gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-8 sm:gap-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-left"
              >
                <div className="text-4xl font-bold tracking-tight text-[#121826] sm:text-5xl lg:text-[56px]">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm text-[#797D84] lg:text-base">
                  {stat.label}
                  {stat.sublabel && (
                    <>
                      <br />
                      {stat.sublabel}
                    </>
                  )}
                </p>
              </motion.div>

              {/* Divider - show between items */}
              {index < stats.length - 1 && <SlashDivider />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
