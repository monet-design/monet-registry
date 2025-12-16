"use client";

// ============================================================================
// CUSTOMIZATION - Edit these values to customize the component for your project
// ============================================================================

const COLORS = {
  light: {
    background: "#F5F0E8",
    text: "#1a1a1a",
    textMuted: "#6b7280",
    mapColor: "#A8D5D8",
    pinColor: "#E85C4A",
  },
  dark: {
    background: "#1a1a1a",
    text: "#f5f5f5",
    textMuted: "#9ca3af",
    mapColor: "#1E3A3A",
    pinColor: "#E85C4A",
  },
} as const;

const LOCATIONS = [
  { name: "New York", x: 25, y: 35 },
  { name: "Austin", x: 20, y: 42 },
  { name: "Sao Paulo", x: 32, y: 70 },
  { name: "London", x: 48, y: 28 },
  { name: "Amsterdam", x: 50, y: 26 },
  { name: "Berlin", x: 52, y: 27 },
  { name: "Oslo", x: 51, y: 22 },
  { name: "Stockholm", x: 54, y: 21 },
  { name: "Lagos", x: 50, y: 55 },
  { name: "Nairobi", x: 58, y: 58 },
  { name: "Dubai", x: 62, y: 42 },
  { name: "Mumbai", x: 68, y: 45 },
  { name: "Bangalore", x: 70, y: 52 },
  { name: "Singapore", x: 78, y: 58 },
  { name: "Jakarta", x: 80, y: 62 },
  { name: "Seoul", x: 85, y: 35 },
  { name: "Tokyo", x: 88, y: 38 },
  { name: "Sydney", x: 90, y: 78 },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface AntlerCoFeature8Props {
  mode?: "light" | "dark";
}

export default function AntlerCoFeature8({
  mode = "light",
}: AntlerCoFeature8Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center md:text-left mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-light mb-4"
            style={{ color: colors.text }}
          >
            Exceptional founders come from
            <br />
            <em className="italic">anywhere</em> with{" "}
            <em className="italic">any background</em>
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl"
            style={{ color: colors.textMuted }}
          >
            Talent is everywhere and so is opportunity. Antler works with exceptional
            founders across six continents. Come and find us at one of our 30+
            locations around the world.
          </p>
        </motion.div>

        {/* World Map */}
        <motion.div
          className="relative w-full h-64 md:h-96 lg:h-[500px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Simplified World Map SVG */}
          <svg
            viewBox="0 0 100 60"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Continents - simplified shapes */}
            <g fill={colors.mapColor} opacity="0.6">
              {/* North America */}
              <path d="M5,15 Q15,10 25,12 L30,20 Q32,30 28,35 L20,40 Q10,38 8,30 Q5,22 5,15Z" />
              {/* South America */}
              <path d="M25,45 Q32,42 35,50 L33,65 Q28,72 25,70 L22,60 Q20,50 25,45Z" />
              {/* Europe */}
              <path d="M45,18 Q55,15 58,20 L56,28 Q50,32 45,28 Q43,22 45,18Z" />
              {/* Africa */}
              <path d="M45,35 Q55,32 58,40 L56,55 Q50,62 45,58 L43,45 Q43,38 45,35Z" />
              {/* Asia */}
              <path d="M60,15 Q75,10 88,18 L90,35 Q85,42 75,40 L65,35 Q58,25 60,15Z" />
              {/* Australia */}
              <path d="M82,58 Q90,55 95,60 L93,72 Q88,78 82,75 Q78,68 82,58Z" />
            </g>

            {/* Location Pins */}
            {LOCATIONS.map((location, index) => (
              <motion.g
                key={location.name}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              >
                <circle
                  cx={location.x}
                  cy={location.y}
                  r="1"
                  fill={colors.pinColor}
                />
              </motion.g>
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
