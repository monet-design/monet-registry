"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    // Primary 액센트 (버튼, 링크 등)
    accent: "#FFFFFF",
    accentHover: "#E5E5E5",
  },
  dark: {
    accent: "#FFFFFF",
    accentHover: "#E5E5E5",
  },
} as const;

/**
 * 슬라이드 콘텐츠 데이터
 */
const SLIDES = [
  {
    id: 1,
    text: "AI 청구항 생성",
  },
  {
    id: 2,
    text: "단 하루만에 작성",
  },
  {
    id: 3,
    text: "세부 편집 및 검수",
  },
  {
    id: 4,
    text: "특허 출원 완료",
  },
] as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  // 예시:
  // hero: {
  //   path: "/registry/patenty-ai-feature-4/hero.jpg",
  //   alt: "Hero image description",
  //   prompt: `Detailed image generation prompt...`,
  // },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "motion/react";

interface PatentyAiFeature4Props {
  mode?: "light" | "dark";
  title?: string;
  slides?: readonly { id: number; text: string }[];
  autoPlayInterval?: number;
}

export default function PatentyAiFeature4({
  mode = "dark",
  title = "Patenty를 직접 확인해보세요",
  slides = SLIDES,
  autoPlayInterval = 4000,
}: PatentyAiFeature4Props) {
  const [activeIndex, setActiveIndex] = useState(1);

  // Memoize particle positions to prevent re-renders causing position changes
  const particlePositions = useMemo(() => {
    return [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [slides.length, autoPlayInterval]);

  const getSlideStyle = (index: number) => {
    const diff = index - activeIndex;
    const length = slides.length;

    // Handle circular positions
    const normalizedDiff =
      diff === 0
        ? 0
        : diff === -1 || (activeIndex === 0 && index === length - 1)
          ? -1
          : diff === 1 || (activeIndex === length - 1 && index === 0)
            ? 1
            : diff < 0
              ? -2
              : 2;

    if (normalizedDiff === 0) {
      return {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        zIndex: 30,
      };
    } else if (normalizedDiff === -1) {
      return {
        opacity: 0.4,
        x: -40,
        y: 15,
        scale: 0.95,
        rotate: -2,
        zIndex: 20,
      };
    } else if (normalizedDiff === 1) {
      return {
        opacity: 0.4,
        x: 40,
        y: 25,
        scale: 0.9,
        rotate: 2,
        zIndex: 10,
      };
    } else {
      return {
        opacity: 0,
        x: 0,
        y: 50,
        scale: 0.85,
        rotate: 0,
        zIndex: 0,
      };
    }
  };

  return (
    <section className="relative w-full py-20 sm:py-32 px-4 bg-neutral-950">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            {title}
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto mb-24"
        >
          <div
            className="relative w-full max-w-5xl mx-auto h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden"
            role="region"
            aria-label="Feature showcase carousel"
          >
            <div
              className="relative w-full h-full"
              style={{ perspective: "1000px" }}
            >
              {slides.map((slide, index) => {
                const slideStyle = getSlideStyle(index);

                return (
                  <motion.div
                    key={slide.id}
                    className="absolute inset-0"
                    initial={false}
                    animate={{
                      opacity: slideStyle.opacity,
                      x: slideStyle.x,
                      y: slideStyle.y,
                      scale: slideStyle.scale,
                      rotate: slideStyle.rotate,
                      zIndex: slideStyle.zIndex,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} of ${slides.length}: ${slide.text}`}
                    aria-hidden={index !== activeIndex}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="relative bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl h-full">
                      {/* Browser Chrome */}
                      <div className="flex items-center gap-2 px-4 py-3 bg-neutral-800 border-b border-neutral-700">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="flex-1 ml-4 px-4 py-1.5 bg-neutral-900 rounded-md text-xs text-neutral-500">
                          www.patenty.ai
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="relative w-full h-[calc(100%-52px)] bg-neutral-950 flex items-center justify-center">
                        {/* Background with light beam effect */}
                        <div className="absolute inset-0 overflow-hidden">
                          {/* Stars/particles background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" />

                          {/* Light beam from bottom-left */}
                          <div
                            className="absolute -bottom-32 -left-32 w-[800px] h-[800px]"
                            style={{
                              background:
                                "conic-gradient(from 30deg at 0% 100%, transparent 0deg, rgba(200,200,200,0.12) 15deg, rgba(180,180,180,0.08) 30deg, rgba(160,160,160,0.04) 45deg, transparent 60deg)",
                              filter: "blur(1px)",
                            }}
                          />

                          {/* Secondary light beam */}
                          <div
                            className="absolute -bottom-20 -left-20 w-[600px] h-[600px]"
                            style={{
                              background:
                                "conic-gradient(from 40deg at 0% 100%, transparent 0deg, rgba(255,255,255,0.06) 10deg, rgba(255,255,255,0.03) 25deg, transparent 40deg)",
                            }}
                          />

                          {/* Subtle particles */}
                          {particlePositions.map((pos, i) => (
                            <div
                              key={i}
                              className="absolute w-0.5 h-0.5 bg-white/20 rounded-full"
                              style={{
                                left: pos.left,
                                top: pos.top,
                              }}
                            />
                          ))}
                        </div>

                        {/* Center text */}
                        <div className="relative z-10 text-center">
                          <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide">
                            {slide.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation dots */}
            <div
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2"
              role="group"
              aria-label="Carousel navigation"
            >
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-white w-8"
                      : "bg-neutral-600 hover:bg-neutral-500 w-2"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === activeIndex}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
