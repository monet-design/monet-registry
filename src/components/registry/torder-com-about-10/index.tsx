"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const BACKGROUND_IMAGES = {
  image1: "/scraped/torder-com-2025-12-14/images/image-195.jpg",
  image2: "/scraped/torder-com-2025-12-14/images/image-196.jpg",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface TorderComAbout10Props {
  mode?: "light" | "dark";
}

export default function TorderComAbout10({
  mode = "light",
}: TorderComAbout10Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Transform background image opacity
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5]);

  // Animate text words
  const words = [
    ["300명이", "넘는", "구성원이"],
    ["티오더라는"],
    ["자부심을", "만듭니다"],
  ];

  const paragraph = [
    ["우리의", "경쟁력은", "서비스에", "대한", "진심과", "자부심."],
    ["사장님들께", "꼭", "필요한", "테이블오더", "서비스를", "제공하기", "위해"],
    ["티오더의", "구성원들은", "오늘도", "밤낮없이", "고민하고", "있습니다."],
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24 px-4"
    >
      {/* Background Images with Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url('${BACKGROUND_IMAGES.image1}')`,
          opacity: bgOpacity,
        }}
      />
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${BACKGROUND_IMAGES.image2}')`,
          opacity: useTransform(bgOpacity, (value) => 1 - value),
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-8 leading-tight"
        >
          {words.map((line, lineIndex) => (
            <div key={lineIndex}>
              {line.map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: lineIndex * 0.3 + wordIndex * 0.1,
                    duration: 0.5,
                  }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
              {lineIndex < words.length - 1 && <br />}
            </div>
          ))}
        </motion.h2>

        {/* Paragraph */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="text-base md:text-lg lg:text-xl leading-relaxed"
        >
          {paragraph.map((line, lineIndex) => (
            <div key={lineIndex} className="mb-2">
              {line.map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 1.5 + lineIndex * 0.2 + wordIndex * 0.05,
                    duration: 0.3,
                  }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
              {lineIndex < paragraph.length - 1 && <br />}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
