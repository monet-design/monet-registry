"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#F5F5F0",
    headingText: "#000000",
    gradientStart: "#FF2E2E",
    gradientMid1: "#EE7B16",
    gradientMid2: "#8A43E1",
    gradientEnd: "#D510FC",
  },
  dark: {
    background: "#1A1A1A",
    headingText: "#FFFFFF",
    gradientStart: "#FF2E2E",
    gradientMid1: "#EE7B16",
    gradientMid2: "#8A43E1",
    gradientEnd: "#D510FC",
  },
} as const;

const PAIN_POINTS = [
  "눈치보이는 디자이너와의 소통",
  "막막한 기획",
  "값비싼 외주비용",
  "내 제품을 잘 모르는 AI",
  "엄청난 시간 소모",
  "막막한 디자인",
  "경쟁사 디자인 베끼기",
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface HookableAiCta3Props {
  mode?: "light" | "dark";
  heading?: string;
  painPoints?: string[];
  animationDuration?: number;
}

export default function HookableAiCta3({
  mode = "light",
  heading = "Say Goodbye to",
  painPoints = PAIN_POINTS,
  animationDuration = 2000,
}: HookableAiCta3Props) {
  const colors = COLORS[mode];
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % painPoints.length);
    }, animationDuration);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [painPoints.length, animationDuration]);

  const getVisibleItems = () => {
    const items = [];
    for (let i = -2; i <= 2; i++) {
      const index =
        (currentIndex + i + painPoints.length) % painPoints.length;
      items.push({
        text: painPoints[index],
        position: i,
        index,
      });
    }
    return items;
  };

  const getOpacity = (position: number) => {
    switch (position) {
      case 0:
        return 1;
      case -1:
      case 1:
        return 0.4;
      case -2:
      case 2:
        return 0.15;
      default:
        return 0;
    }
  };

  const getTranslateY = (position: number) => {
    return position * 70;
  };

  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, ${colors.gradientStart} 0%, ${colors.gradientMid1} 36.28%, ${colors.gradientMid2} 69.75%, ${colors.gradientEnd} 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  return (
    <section
      className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {/* Heading with curved arrow */}
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight"
              style={{ color: colors.headingText }}
            >
              {heading}
            </motion.h2>

            {/* Curved Arrow SVG */}
            <motion.svg
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              width="80"
              height="60"
              viewBox="0 0 80 60"
              fill="none"
              className="hidden md:block w-16 h-12 lg:w-20 lg:h-15"
            >
              <path
                d="M5 45 Q 20 10, 60 20 Q 75 25, 70 35"
                stroke="url(#arrowGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M65 28 L70 35 L62 38"
                stroke="url(#arrowGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <defs>
                <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={colors.gradientMid1} />
                  <stop offset="100%" stopColor={colors.gradientMid2} />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>

          {/* Scrolling pain points */}
          <div className="relative h-[280px] md:h-[350px] w-full md:w-auto md:min-w-[400px] lg:min-w-[500px] overflow-hidden">
            {/* Top fade overlay */}
            <div
              className="absolute top-0 left-0 right-0 h-24 z-10 pointer-events-none"
              style={{
                background: `linear-gradient(to bottom, ${colors.background} 0%, transparent 100%)`,
              }}
            />

            {/* Scrolling items container */}
            <div className="relative h-full flex items-center justify-center md:justify-start">
              <AnimatePresence mode="popLayout">
                {getVisibleItems().map((item) => (
                  <motion.div
                    key={`${item.index}-${item.position}`}
                    initial={{
                      opacity: 0,
                      y: getTranslateY(item.position + 1),
                    }}
                    animate={{
                      opacity: getOpacity(item.position),
                      y: getTranslateY(item.position),
                    }}
                    exit={{
                      opacity: 0,
                      y: getTranslateY(item.position - 1),
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    className="absolute left-0 right-0 text-center md:text-left"
                  >
                    <span
                      className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold whitespace-nowrap ${
                        item.position === 0 ? "" : "text-gray-400"
                      }`}
                      style={item.position === 0 ? gradientStyle : undefined}
                    >
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Bottom fade overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none"
              style={{
                background: `linear-gradient(to top, ${colors.background} 0%, transparent 100%)`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px"
        style={{
          background: `linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.1) 80%, transparent 100%)`,
        }}
      />
    </section>
  );
}
