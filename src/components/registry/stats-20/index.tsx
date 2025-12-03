"use client";

import { useEffect } from "react";
import { motion } from "motion/react";

interface StatItem {
  value: string;
  description: string;
  linkText: string;
  linkHref: string;
}

interface Stats20Props {
  mode?: "light" | "dark";
  stats?: StatItem[];
}

const CUSTOMIZATION = {}

const defaultStats: StatItem[] = [
  {
    value: "$11M+",
    description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit ges aliquam.",
    linkText: "Read the story",
    linkHref: "#",
  },
  {
    value: "79.14%",
    description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit ges aliquam.",
    linkText: "Read the story",
    linkHref: "#",
  },
  {
    value: "$299/y",
    description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit ges aliquam.",
    linkText: "Read the story",
    linkHref: "#",
  },
  {
    value: "34k+",
    description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit ges aliquam.",
    linkText: "Read the story",
    linkHref: "#",
  },
];

export default function Stats20({ mode = "dark", stats = defaultStats }: Stats20Props) {
  // Load Inter font
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#0A0A0F] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      {/* Background glow effect - subtle blue/teal gradient at top center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 20%, rgba(35, 55, 90, 0.4) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {/* Value */}
              <span
                className="text-5xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl"
                style={{ fontWeight: 300 }}
              >
                {stat.value}
              </span>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-[#9CA3AF] sm:mt-5">
                {stat.description}
              </p>

              {/* Link */}
              <a
                href={stat.linkHref}
                className="mt-4 inline-block text-sm font-medium text-white underline underline-offset-4 transition-opacity hover:opacity-80 sm:mt-5"
              >
                {stat.linkText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
