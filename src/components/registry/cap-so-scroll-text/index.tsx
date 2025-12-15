"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const CONTENT = {
  words: ["Record.", "Edit.", "Share."],
} as const;

interface CapSoScrollTextProps {
  mode?: "light" | "dark";
}

export default function CapSoScrollText({ mode = "light" }: CapSoScrollTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Each word fades in at different scroll positions
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.33], [0.3, 1, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.4, 0.53], [0.3, 1, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.6, 0.73], [0.3, 1, 1]);

  const opacities = [opacity1, opacity2, opacity3];

  return (
    <div
      ref={containerRef}
      className="relative z-0 h-[200vh] max-w-[600px] mx-auto leading-[1.2] text-center"
    >
      <div className="sticky top-0 mx-auto flex h-[50%] max-w-4xl justify-center items-center bg-transparent px-4 py-20">
        <span className="flex flex-wrap gap-y-4 justify-center p-5 text-3xl font-medium text-center md:gap-y-8 md:text-[52px] text-gray-900">
          {CONTENT.words.map((word, index) => (
            <motion.span
              key={word}
              className="relative mx-1 lg:mx-1.5"
              style={{ opacity: opacities[index] }}
            >
              <span className="absolute opacity-30">{word}</span>
              <span className="text-gray-900">{word}</span>
            </motion.span>
          ))}
        </span>
      </div>
    </div>
  );
}
