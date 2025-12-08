"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  background: "#1a1a1a",
  red: "#FCA5A5",
  green: "#86EFAC",
  redBg: "rgba(69, 10, 10, 0.3)",
  greenBg: "rgba(5, 46, 22, 0.3)",
  textSecondary: "#9ca3af",
} as const;

const DEFAULT_CONTENT = {
  heading: {
    prefix: "Coding courses are designed for",
    highlighted1: "software engineers",
    middle: ", not",
    highlighted2: "entrepreneurs",
  },
  employeeCard: {
    title: "Coding as an employee",
    points: [
      "Invert binary trees",
      "Master 47 sorting algorithms you'll never implement",
      "Memorize Big O notation to impress your interviewer",
      "Read documentation longer than The Lord of the Rings",
      "Write complex code when a simple AI prompt would do",
    ],
  },
  entrepreneurCard: {
    title: "Coding as an entrepreneur",
    points: [
      "Learn only the fundamentals",
      "Use AI to code for you",
      "Keep learning on the fly",
    ],
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface CodefaStFeature1Props {
  heading?: {
    prefix?: string;
    highlighted1?: string;
    middle?: string;
    highlighted2?: string;
  };
  employeeCard?: {
    title?: string;
    points?: readonly string[];
  };
  entrepreneurCard?: {
    title?: string;
    points?: readonly string[];
  };
}

function XIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 67 67" fill="none">
      <circle cx="33.5" cy="33.5" r="28" fill={COLORS.red} />
      <path
        d="M41.7 25L25 41.7"
        stroke="#7f1d1d"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 25L41.7 41.7"
        stroke="#7f1d1d"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 67 67" fill="none">
      <circle cx="33.5" cy="33.5" r="28" fill={COLORS.green} />
      <path
        d="M25 33.4L30.6 39L41.7 27.8"
        stroke="#14532d"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CodefaStFeature1({
  heading = DEFAULT_CONTENT.heading,
  employeeCard = DEFAULT_CONTENT.employeeCard,
  entrepreneurCard = DEFAULT_CONTENT.entrepreneurCard,
}: CodefaStFeature1Props) {
  const mergedHeading = { ...DEFAULT_CONTENT.heading, ...heading };
  const mergedEmployee = { ...DEFAULT_CONTENT.employeeCard, ...employeeCard };
  const mergedEntrepreneur = {
    ...DEFAULT_CONTENT.entrepreneurCard,
    ...entrepreneurCard,
  };

  return (
    <section
      className="text-center py-32 md:py-48 space-y-20 px-8"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="space-y-8 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold !leading-tight text-white text-balance"
        >
          {mergedHeading.prefix}{" "}
          <span className="italic" style={{ color: COLORS.red }}>
            {mergedHeading.highlighted1}
          </span>
          {mergedHeading.middle}{" "}
          <span className="italic" style={{ color: COLORS.green }}>
            {mergedHeading.highlighted2}
          </span>
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
        {/* Employee Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl p-6 border"
          style={{
            backgroundColor: COLORS.redBg,
            borderColor: COLORS.red,
          }}
        >
          <div className="space-y-4">
            <h3
              className="text-2xl font-bold flex items-center justify-between"
              style={{ color: COLORS.red }}
            >
              {mergedEmployee.title}
              <XIcon />
            </h3>
            <ul className="space-y-3" style={{ color: COLORS.textSecondary }}>
              {mergedEmployee.points.map((point, index) => (
                <li key={index}>
                  <span className="mr-2">{"•"}</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Entrepreneur Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl p-6 border"
          style={{
            backgroundColor: COLORS.greenBg,
            borderColor: COLORS.green,
          }}
        >
          <div className="space-y-4">
            <h3
              className="text-2xl font-bold flex items-center justify-between"
              style={{ color: COLORS.green }}
            >
              {mergedEntrepreneur.title}
              <CheckIcon />
            </h3>
            <ul className="space-y-3" style={{ color: COLORS.textSecondary }}>
              {mergedEntrepreneur.points.map((point, index) => (
                <li key={index}>
                  <span className="mr-2">{"•"}</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
