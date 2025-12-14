"use client";

const COLORS = {
  light: {
    accent: "#1C1917",
    clay: "#D2886F",
    sand: "#F5F5F0",
    stone: "#E8E6E1",
  },
  dark: {
    accent: "#F5F5F0",
    clay: "#D2886F",
    sand: "#1C1917",
    stone: "#292524",
  },
} as const;

import { motion } from "motion/react";

interface LoadfastStoreProblem1Props {
  mode?: "light" | "dark";
}

export default function LoadfastStoreProblem1({
  mode = "light",
}: LoadfastStoreProblem1Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  const painPoints = [
    "You look slower than you actually are",
    "Typos slip through when you rush",
    "Important follow-ups get delayed",
    "Your best templates are buried in old emails",
  ];

  return (
    <section
      className="py-16 lg:py-24"
      style={{ backgroundColor: colors.stone }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif font-normal text-3xl lg:text-4xl tracking-tight mb-6"
          style={{ color: colors.accent }}
        >
          You're still typing like it's 1999
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-8"
          style={{ color: `${colors.accent}99` }}
        >
          While your colleagues send perfect responses in seconds, you're still
          copy-pasting from old emails—or worse—typing the same sentences from
          scratch. Every. Single. Day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left"
        >
          {painPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-lg" style={{ color: colors.clay }}>
                •
              </span>
              <span
                className="text-sm"
                style={{ color: `${colors.accent}B3` }}
              >
                {point}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base font-medium mt-8"
          style={{ color: `${colors.accent}CC` }}
        >
          The professionals who get promoted aren't typing more. They're typing
          smarter.
        </motion.p>
      </div>
    </section>
  );
}
