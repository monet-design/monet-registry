"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 텍스트 콘텐츠
 */
const TEXT = {
  title: "단계별 특허 품질 완성",
  subtitle:
    "당신의 피드백에 기반하며 지속적으로 완성도를 높이는 페이턴티 워크플로우",
} as const;

/**
 * 워크플로우 단계 데이터
 */
const WORKFLOW_STEPS = [
  {
    id: 1,
    title: "AI 청구항 생성",
    description: "첨부된 발명 문서를 분석하고 청구항을 제안합니다",
    statusText: "AI 생성 중",
    progressText: "특허 명세서 구조를 준비하고 있습니다",
    progress: 23,
  },
  {
    id: 2,
    title: "초안 생성 & 피드백",
    description: "명세서 초안을 AI가 작성하고 유저의 피드백을 통해 개선합니다",
    statusText: "초안 작성 중",
    progressText: "특허 내용을 생성하고 있습니다",
    progress: 56,
  },
  {
    id: 3,
    title: "세부 편집 및 최종검수",
    description: "세부사항 수정과 최종검수를 통해 최종 품질을 완성합니다",
    statusText: "검수 진행 중",
    progressText: "최종 검토를 진행하고 있습니다",
    progress: 89,
  },
  {
    id: 4,
    title: "OA 분석 및 대응전략",
    description:
      "출원 이후 심사관 의견에 대한 AI 기반 분석 및 대응전략을 수립합니다",
    statusText: "분석 완료",
    progressText: "대응 전략이 준비되었습니다",
    progress: 100,
  },
] as const;

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#0a0a0a",
  cardBackground: "#171717",
  cardBorder: "#262626",
  browserBar: "#262626",
  browserBarBorder: "#404040",
  urlBar: "#0a0a0a",
  textPrimary: "#ffffff",
  textSecondary: "#a3a3a3",
  textMuted: "#737373",
  accentOrange: "#f97316",
  dotActive: "#ffffff",
  dotInactive: "#525252",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { Sparkles, FileText, CheckCircle, Search } from "lucide-react";

interface PatentyAiFeature1Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  steps?: typeof WORKFLOW_STEPS;
  autoPlayInterval?: number;
}

function BrowserMockup({
  step,
  isActive,
  position,
}: {
  step: (typeof WORKFLOW_STEPS)[number];
  isActive: boolean;
  position: "left" | "center" | "right" | "hidden";
}) {
  const getTransform = () => {
    switch (position) {
      case "left":
        return {
          x: "-40px",
          y: "15px",
          scale: 0.95,
          rotate: -2,
          opacity: 1,
          zIndex: 20,
        };
      case "center":
        return {
          x: "0px",
          y: "0px",
          scale: 1,
          rotate: 0,
          opacity: 1,
          zIndex: 30,
        };
      case "right":
        return {
          x: "40px",
          y: "26px",
          scale: 0.9,
          rotate: 2,
          opacity: 0,
          zIndex: 10,
        };
      case "hidden":
        return {
          x: "-40px",
          y: "-58px",
          scale: 0.8,
          rotate: -2,
          opacity: 0.4,
          zIndex: 20,
        };
    }
  };

  const transform = getTransform();
  const Icon =
    step.id === 1
      ? Sparkles
      : step.id === 2
      ? FileText
      : step.id === 3
      ? CheckCircle
      : Search;

  return (
    <motion.div
      className="absolute inset-0"
      initial={false}
      animate={{
        x: transform.x,
        y: transform.y,
        scale: transform.scale,
        rotate: transform.rotate,
        opacity: transform.opacity,
        zIndex: transform.zIndex,
      }}
      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="relative h-full overflow-hidden rounded-2xl shadow-2xl"
        style={{
          backgroundColor: COLORS.cardBackground,
          border: `1px solid ${COLORS.cardBorder}`,
        }}
      >
        {/* Browser Header */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{
            backgroundColor: COLORS.browserBar,
            borderBottom: `1px solid ${COLORS.browserBarBorder}`,
          }}
        >
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div
            className="ml-4 flex-1 rounded-md px-4 py-1.5 text-xs"
            style={{
              backgroundColor: COLORS.urlBar,
              color: COLORS.textMuted,
            }}
          >
            www.patenty.ai
          </div>
        </div>

        {/* Browser Content */}
        <div
          className="relative h-[calc(100%-52px)] w-full"
          style={{ backgroundColor: COLORS.background }}
        >
          {/* Mock Interface Content */}
          <div className="flex h-full flex-col p-6">
            {/* Status Bar */}
            <div
              className="mb-4 flex items-center gap-3 rounded-lg p-4"
              style={{ backgroundColor: COLORS.cardBackground }}
            >
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{ backgroundColor: COLORS.accentOrange }}
              >
                <Icon className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <p
                  className="text-sm font-medium"
                  style={{ color: COLORS.textPrimary }}
                >
                  {step.statusText}
                </p>
                <p className="text-xs" style={{ color: COLORS.textMuted }}>
                  {step.progressText}
                </p>
              </div>
              <span
                className="text-sm font-medium"
                style={{ color: COLORS.textSecondary }}
              >
                {step.progress}%
              </span>
            </div>

            {/* Progress Bar */}
            <div
              className="mb-6 h-1 w-full overflow-hidden rounded-full"
              style={{ backgroundColor: COLORS.cardBorder }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: COLORS.accentOrange }}
                initial={{ width: 0 }}
                animate={{ width: `${step.progress}%` }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>

            {/* Mock Content Area */}
            <div
              className="flex-1 rounded-lg p-4"
              style={{ backgroundColor: COLORS.cardBackground }}
            >
              <div className="space-y-3">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="h-3 rounded"
                    style={{
                      backgroundColor: COLORS.cardBorder,
                      width: `${70 + Math.random() * 30}%`,
                      opacity: 0.6 - i * 0.05,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Gradient Overlay */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `linear-gradient(to top, ${COLORS.background}e6 0%, transparent 40%, transparent 100%)`,
            }}
          />

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center p-12 pb-16">
            <div className="max-w-2xl text-center">
              <p
                className="text-lg font-medium leading-relaxed"
                style={{ color: COLORS.textSecondary }}
              >
                {step.title} - {step.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PatentyAiFeature1({
  mode = "dark",
  title = TEXT.title,
  subtitle = TEXT.subtitle,
  steps = WORKFLOW_STEPS,
  autoPlayInterval = 4000,
}: PatentyAiFeature1Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % steps.length);
  }, [steps.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(timer);
  }, [nextSlide, autoPlayInterval]);

  const getPosition = (
    index: number
  ): "left" | "center" | "right" | "hidden" => {
    const diff = index - activeIndex;
    const normalizedDiff =
      ((diff % steps.length) + steps.length) % steps.length;

    if (normalizedDiff === 0) return "center";
    if (normalizedDiff === steps.length - 1) return "left";
    if (normalizedDiff === 1) return "right";
    return "hidden";
  };

  return (
    <section
      className="w-full px-4 py-20 sm:py-32"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12 text-center sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: COLORS.textPrimary }}
          >
            {title}
          </h2>
          <p
            className="mx-auto max-w-3xl text-xl leading-relaxed sm:text-2xl"
            style={{ color: COLORS.textSecondary }}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="mx-auto mb-24 max-w-6xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="relative mx-auto h-[400px] w-full max-w-5xl overflow-hidden sm:h-[500px] lg:h-[600px]"
            role="region"
            aria-label="Workflow showcase carousel"
          >
            <div
              className="relative h-full w-full"
              style={{ perspective: "1000px" }}
            >
              {steps.map((step, index) => (
                <BrowserMockup
                  key={step.id}
                  step={step}
                  isActive={index === activeIndex}
                  position={getPosition(index)}
                />
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="absolute -bottom-12 left-1/2 flex -translate-x-1/2 gap-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor:
                      index === activeIndex
                        ? COLORS.dotActive
                        : COLORS.dotInactive,
                    width: index === activeIndex ? "2rem" : "0.5rem",
                  }}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === activeIndex}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
