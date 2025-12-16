"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FF6B35",
    accentHover: "#E55A2B",
  },
  dark: {
    accent: "#FF6B35",
    accentHover: "#FF8555",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface LoopsSoCta5Props {
  mode?: "light" | "dark";
}

export default function LoopsSoCta5({
  mode = "light",
}: LoopsSoCta5Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className={`relative w-full py-20 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`mx-auto max-w-2xl rounded-2xl border p-10 ${
            isDark ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"
          }`}
        >
          <h2
            className={`text-xl font-semibold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            We want to make email easy.
          </h2>

          <p
            className={`mt-6 text-base leading-relaxed ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Email shouldn't be complex.
          </p>

          <p
            className={`mt-4 text-base leading-relaxed ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            It shouldn't live in your codebase and it should fit with your
            brand. Your designers should love it. Your engineers should find the
            APIs easy. Your marketers should feel empowered to send good and
            relevant email.
          </p>

          <p
            className={`mt-4 text-base leading-relaxed ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            And if all of those people are just you, it should work well for you
            as well.
          </p>

          <p
            className={`mt-6 text-base ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <a
              href="#"
              className="font-medium underline-offset-2 hover:underline"
              style={{ color: colors.accent }}
            >
              Give it a try
            </a>
            , and{" "}
            <a
              href="#"
              className="font-medium underline-offset-2 hover:underline"
              style={{ color: colors.accent }}
            >
              let us know
            </a>{" "}
            what you think.
          </p>

          {/* Signature */}
          <div className="mt-8">
            <p
              className={`font-serif text-2xl italic ${
                isDark ? "text-white" : "text-gray-900"
              }`}
              style={{ fontFamily: "'Times New Roman', serif" }}
            >
              Loops Team
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
