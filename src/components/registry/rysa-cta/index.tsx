"use client";

import React from "react";
import { Plus } from "lucide-react";
import { motion } from "motion/react";

// CUSTOMIZATION
export const CUSTOMIZATION = {};

interface RysaCtaProps {
  mode?: "light" | "dark";
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  accentColor?: string;
}

// Pixel pattern component for the decorative sides
const PixelPattern = ({
  side,
  accentColor,
}: {
  side: "left" | "right";
  accentColor: string;
}) => {
  // Pattern data: 1 = accent color, 0 = transparent
  const leftPattern = [
    [0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 1, 1],
    [1, 1, 1, 1, 0, 0, 1, 1],
    [0, 0, 1, 1, 0, 0, 1, 1],
    [0, 0, 1, 1, 0, 0, 1, 1],
    [0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0],
  ];

  const rightPattern = [
    [0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 1],
    [0, 0, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 1, 1],
    [1, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
  ];

  const pattern = side === "left" ? leftPattern : rightPattern;
  const cellSize = 16;

  return (
    <svg
      width={cellSize * 8}
      height={cellSize * 16}
      viewBox={`0 0 ${cellSize * 8} ${cellSize * 16}`}
      className="flex-shrink-0"
    >
      {pattern.map((row, rowIndex) =>
        row.map((cell, colIndex) =>
          cell === 1 ? (
            <rect
              key={`${rowIndex}-${colIndex}`}
              x={colIndex * cellSize}
              y={rowIndex * cellSize}
              width={cellSize}
              height={cellSize}
              fill={accentColor}
            />
          ) : null
        )
      )}
    </svg>
  );
};

export default function RysaCta({
  mode = "light",
  title = "RYSA AI is Live!",
  subtitle = "Two AI assistants working together for your style success",
  buttonText = "Start Using RYSA AI",
  onButtonClick,
  accentColor = "#0259FF",
}: RysaCtaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-4xl mx-auto"
    >
      <div
        className="relative flex items-center justify-between overflow-hidden rounded-[20px] px-6 py-10 md:px-10 md:py-14"
        style={{
          backgroundColor: "#000000",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Left pixel pattern */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block"
        >
          <PixelPattern side="left" accentColor={accentColor} />
        </motion.div>

        {/* Center content */}
        <div className="flex flex-col items-center justify-center flex-1 gap-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold italic text-white"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm md:text-base text-white/80 max-w-md"
          >
            {subtitle}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onButtonClick}
            className="flex items-center gap-2 px-6 py-3 mt-2 text-sm md:text-base font-medium text-black bg-white rounded-xl hover:bg-gray-100 transition-colors duration-200"
          >
            <Plus className="w-4 h-4" />
            {buttonText}
          </motion.button>
        </div>

        {/* Right pixel pattern */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block"
        >
          <PixelPattern side="right" accentColor={accentColor} />
        </motion.div>
      </div>
    </motion.div>
  );
}
