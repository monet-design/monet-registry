"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#00b9ff", // 파란색 바 & 숫자
    accentLight: "#2dc5ff", // 시안 텍스트 (비디오 위)
    text: "#15181e", // 다크 텍스트
    textSecondary: "#424549", // 회색 텍스트
    textMuted: "#8e9093", // 라벨 텍스트
    background: "#ffffff",
  },
  dark: {
    accent: "#00b9ff",
    accentLight: "#2dc5ff",
    text: "#ffffff",
    textSecondary: "#e5e5e5",
    textMuted: "#a0a0a0",
    background: "#0f0f0f",
  },
} as const;

/**
 * 콘텐츠 데이터
 */
const DEFAULT_CONTENT = {
  title: "지금 가장\n빠르게 성장하는\n브랜드 빌더, 아임웹",
  videoUrl: "https://static-v2.imweb.me/io/home/growth-graph-video.mp4",
  bars: [
    { year: "2021", value: null },
    { year: "2022", value: null },
    { year: "2023", value: 60, unit: "만 개" },
    { year: "2024", value: 80, unit: "만 개" },
  ],
  mainStat: {
    label: "2025 누적 사이트 개설 수",
    value: 100,
    unit: "만 개",
  },
  bottomStats: [
    { label: "연평균 거래액 성장률", value: "342", unit: "%", hasGradient: true },
    { label: "고객사 거래액", value: "6", unit: "조 원", hasGradient: false },
    { label: "전국 디자이너 · 전문가 수", value: "4,000", unit: "명", hasGradient: false },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

interface BarData {
  year: string;
  value: number | null;
  unit?: string;
}

interface StatData {
  label: string;
  value: string;
  unit: string;
  hasGradient?: boolean;
}

interface ImwebMeStats6Props {
  mode?: "light" | "dark";
  title?: string;
  bars?: BarData[];
  mainStat?: {
    label: string;
    value: number;
    unit: string;
  };
  bottomStats?: StatData[];
  videoUrl?: string;
}

function AnimatedNumber({
  value,
  delay = 0,
  duration = 1.5,
}: {
  value: number;
  delay?: number;
  duration?: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.floor(eased * value));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, value, delay, duration]);

  return <span ref={ref}>{displayValue}</span>;
}

function GradientNumber({
  value,
  delay = 0,
  duration = 1.5,
  baseColor,
}: {
  value: string;
  delay?: number;
  duration?: number;
  baseColor: string;
}) {
  const numericPart = value.replace(/[^0-9]/g, "");
  const numericValue = parseInt(numericPart, 10);
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.floor(eased * numericValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, numericValue, delay, duration]);

  // Split into individual digits with gradient opacity
  const displayStr = displayValue.toString();
  const digits = displayStr.split("");
  const opacities = [1, 0.7, 0.35]; // Gradient fade effect

  return (
    <span ref={ref} className="inline-flex">
      {digits.map((digit, i) => (
        <span
          key={i}
          style={{
            color: baseColor,
            opacity: opacities[i] ?? 0.35,
          }}
        >
          {digit}
        </span>
      ))}
    </span>
  );
}

function AnimatedNumberString({
  value,
  delay = 0,
  duration = 1.5,
}: {
  value: string;
  delay?: number;
  duration?: number;
}) {
  const numericPart = value.replace(/[^0-9]/g, "");
  const numericValue = parseInt(numericPart, 10);
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.floor(eased * numericValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, numericValue, delay, duration]);

  const hasComma = value.includes(",");
  if (hasComma) {
    return <span ref={ref}>{displayValue.toLocaleString()}</span>;
  }
  return <span ref={ref}>{displayValue}</span>;
}

export default function ImwebMeStats6({
  mode = "light",
  title = DEFAULT_CONTENT.title,
  bars = DEFAULT_CONTENT.bars,
  mainStat = DEFAULT_CONTENT.mainStat,
  bottomStats = DEFAULT_CONTENT.bottomStats,
  videoUrl = DEFAULT_CONTENT.videoUrl,
}: ImwebMeStats6Props) {
  const colors = COLORS[mode];
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Bar heights proportional to the design (2021=shortest, growing each year)
  const barHeights = [48, 80, 140, 200];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 whitespace-pre-line text-2xl font-bold leading-[1.35] md:mb-16 md:text-3xl lg:text-[34px]"
          style={{ color: colors.text }}
        >
          {title}
        </motion.h2>

        {/* Main Content Area - Bar Chart + Video */}
        <div className="relative flex flex-col gap-4 lg:flex-row lg:items-end lg:gap-0">
          {/* Bar Chart */}
          <div className="flex items-end gap-1.5 md:gap-2 lg:gap-3">
            {bars.map((bar, index) => (
              <motion.div
                key={bar.year}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
                className="relative flex origin-bottom flex-col rounded-t"
                style={{
                  backgroundColor: colors.accent,
                  height: barHeights[index],
                  width: index < 2 ? 64 : 110, // Smaller bars for 2021, 2022
                }}
              >
                {/* Year Label */}
                <span className="absolute left-2.5 top-2 text-[11px] font-medium text-white md:left-3 md:top-2.5 md:text-xs">
                  {bar.year}
                </span>

                {/* Value (only for 2023, 2024) */}
                {bar.value !== null && (
                  <div className="absolute bottom-3 left-2.5 flex items-baseline gap-0.5 md:bottom-4 md:left-3">
                    <span className="text-[28px] font-bold leading-none text-white md:text-4xl lg:text-[42px]">
                      <AnimatedNumber value={bar.value} delay={0.3 + index * 0.12} />
                    </span>
                    <span className="text-[10px] font-medium text-white md:text-xs">
                      {bar.unit}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Main Video Stat Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="relative h-[280px] w-[280px] overflow-hidden rounded-t md:h-[360px] md:w-[360px] lg:h-[420px] lg:w-[420px]"
            >
              {/* Video Background */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src={videoUrl} type="video/mp4" />
              </video>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-center px-5 py-4 md:px-6 md:py-5">
                <span className="mb-1 text-[10px] font-medium text-white/80 md:mb-2 md:text-xs">
                  {mainStat.label}
                </span>
                <div className="flex items-baseline">
                  <span
                    className="text-[56px] font-bold leading-none md:text-7xl lg:text-[90px]"
                    style={{ color: colors.accentLight }}
                  >
                    <AnimatedNumber value={mainStat.value} delay={0.7} duration={1.8} />
                  </span>
                  <span
                    className="ml-1 text-lg font-medium md:text-xl lg:text-2xl"
                    style={{ color: colors.accentLight }}
                  >
                    {mainStat.unit}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:gap-12 lg:gap-16"
        >
          {bottomStats.map((stat, index) => (
            <div key={stat.label} className="flex-shrink-0">
              <span
                className="mb-1.5 block text-[11px] font-medium md:mb-2 md:text-xs"
                style={{ color: colors.textMuted }}
              >
                {stat.label}
              </span>
              <div className="flex items-baseline">
                <span className="text-[42px] font-bold leading-none md:text-5xl lg:text-[56px]">
                  {stat.hasGradient ? (
                    <GradientNumber
                      value={stat.value}
                      delay={1.0 + index * 0.15}
                      duration={1.4}
                      baseColor={colors.textSecondary}
                    />
                  ) : (
                    <span style={{ color: colors.textSecondary }}>
                      <AnimatedNumberString
                        value={stat.value}
                        delay={1.0 + index * 0.15}
                        duration={1.4}
                      />
                    </span>
                  )}
                </span>
                <span
                  className="ml-0.5 text-base font-medium md:text-lg lg:text-xl"
                  style={{
                    color: index === 0 ? colors.accent : colors.textMuted,
                  }}
                >
                  {stat.unit}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
