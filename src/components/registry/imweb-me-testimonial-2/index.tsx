"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#A06A20", // 갈색/브라운 배경
    text: "#FFFFFF",
    textMuted: "rgba(255, 255, 255, 0.7)",
    cardBackground: "#FFFFFF",
    cardText: "#1A1A1A",
    tagBackground: "rgba(255, 255, 255, 0.1)",
  },
  dark: {
    background: "#8B5A1B",
    text: "#FFFFFF",
    textMuted: "rgba(255, 255, 255, 0.7)",
    cardBackground: "#1A1A1A",
    cardText: "#FFFFFF",
    tagBackground: "rgba(255, 255, 255, 0.1)",
  },
} as const;

/**
 * 고객 사례 데이터 타입
 */
interface CaseStudy {
  id: number;
  image: string;
  title: string;
  company: string;
  category: string;
}

/**
 * 기본 고객 사례 데이터
 */
const DEFAULT_CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    title: "글로벌 100억을 바라보는 패션 브랜드의 성장 공식",
    company: "해브해드",
    category: "패션 브랜드",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=800&h=600&fit=crop",
    title: "비건 뷰티로 연 매출 30억에서 글로벌 진출까지",
    company: "아로마티카",
    category: "비건 뷰티 브랜드",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    title: "프라이팬 하나로 1년 만에 매출 300억 만들다",
    company: "피카라이프",
    category: "주방 용품 브랜드",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=600&fit=crop",
    title: "D2C 전략으로 연 매출 50억을 달성한 비결",
    company: "스타일리시",
    category: "라이프스타일 브랜드",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

interface ImwebMeTestimonial2Props {
  mode?: "light" | "dark";
  title?: string;
  caseStudies?: CaseStudy[];
}

export default function ImwebMeTestimonial2({
  mode = "light",
  title = "브랜드 성장은\n더 빠르게",
  caseStudies = DEFAULT_CASE_STUDIES,
}: ImwebMeTestimonial2Props) {
  const colors = COLORS[mode];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? caseStudies.length - 1 : prev - 1
    );
  }, [caseStudies.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === caseStudies.length - 1 ? 0 : prev + 1
    );
  }, [caseStudies.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const currentCase = caseStudies[currentIndex];
  const nextIndex = (currentIndex + 1) % caseStudies.length;
  const nextCase = caseStudies[nextIndex];

  return (
    <section
      className="relative w-full overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header with Title and Navigation */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 md:mb-12">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold whitespace-pre-line leading-tight"
            style={{ color: colors.text }}
          >
            {title}
          </motion.h2>

          {/* Navigation Arrows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mt-6 md:mt-0"
          >
            <button
              onClick={handlePrev}
              aria-label="이전 항목"
              className="p-2 transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full"
              style={{ color: colors.textMuted }}
            >
              <ArrowLeft className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
            </button>
            <button
              onClick={handleNext}
              aria-label="다음 항목"
              className="p-2 transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full"
              style={{ color: colors.text }}
            >
              <ArrowRight className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
            </button>
          </motion.div>
        </div>

        {/* Carousel Content */}
        <div className="relative">
          <div className="flex items-stretch gap-4 md:gap-6">
            {/* Main Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 max-w-3xl"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCase.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="cursor-pointer group"
                  onClick={handleNext}
                  role="button"
                  tabIndex={0}
                  aria-label={`${currentCase.title} 열기`}
                  onKeyDown={(e) => e.key === "Enter" && handleNext()}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 md:mb-6">
                    <Image
                      src={currentCase.image}
                      alt={currentCase.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>

                  {/* Card Content */}
                  <div>
                    <h3
                      className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 transition-opacity group-hover:opacity-80"
                      style={{ color: colors.text }}
                    >
                      {currentCase.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span
                        className="text-sm md:text-base"
                        style={{ color: colors.text }}
                      >
                        {currentCase.company}
                      </span>
                      <span
                        className="text-sm md:text-base"
                        style={{ color: colors.textMuted }}
                      >
                        {currentCase.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Next Card Preview (Desktop only) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block w-48 xl:w-64 flex-shrink-0"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={nextCase.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                  onClick={() => goToSlide(nextIndex)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${nextCase.title} - ${nextCase.category}`}
                  onKeyDown={(e) => e.key === "Enter" && goToSlide(nextIndex)}
                >
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={nextCase.image}
                      alt={nextCase.title}
                      fill
                      className="object-cover"
                      sizes="256px"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Dots Indicator (Mobile) */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`슬라이드 ${index + 1}로 이동`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 bg-white"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
