"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#F97316",
  },
  dark: {
    accent: "#FB923C",
  },
} as const;

const CONTENT = {
  title: "숫자로 증명된 볼타의 가치",
};

const STATS = [
  { value: 199590, suffix: "+", label: "누적 발행량" },
  { value: 4459, suffix: "억원+", label: "누적 발행액" },
  { value: 5897, suffix: "개+", label: "사용 기업수" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function AnimatedNumber({
  value,
  suffix = "",
  duration = 1000,
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    const startValue = 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutExpo for smooth deceleration
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(
        startValue + (value - startValue) * easeProgress
      );

      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

interface BoltaIoStats4Props {
  mode?: "light" | "dark";
}

export default function BoltaIoStats4({ mode = "light" }: BoltaIoStats4Props) {
  const colors = COLORS[mode];

  return (
    <section className="w-full py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12"
        >
          {CONTENT.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center relative"
            >
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-200" />
              )}
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
