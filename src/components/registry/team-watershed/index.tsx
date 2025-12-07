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
    accent: "#1e4bd1",
    accentHover: "#1a3fa8",
    // 배경
    background: "#f8f9fc",
    // 제목 색상
    title: "#0a1930",
    // 설명 색상
    description: "#1a2b4c",
    // 점선 색상
    divider: "#c4d4f0",
  },
  dark: {
    accent: "#60A5FA",
    accentHover: "#3B82F6",
    background: "#0f172a",
    title: "#f1f5f9",
    description: "#cbd5e1",
    divider: "#334155",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState, useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import "./font.css";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface TeamWatershedProps {
  mode?: "light" | "dark";
  title?: string;
  description?: string;
  members?: TeamMember[];
}

const DEFAULT_MEMBERS: TeamMember[] = [
  {
    name: "CHRISTIANA FIGUERES",
    role: "Former UN Climate Change Executive Secretary, Chief Negotiator of Paris Agreement",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "MARK CARNEY",
    role: "UN Envoy on Climate Action",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "MARY SCHAPIRO",
    role: "Former chair of the SEC",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "CURTIS RAVENEL",
    role: "Founding member of TCFD",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "ANNETTE NAZARETH",
    role: "Former SEC commissioner",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=500&fit=crop&crop=face",
  },
];

export default function TeamWatershed({
  mode = "light",
  title = "A network of climate leaders",
  description = "Our best-in-class advisory team is made up of government officials, policymakers, climate experts, professors, consultants, investors, and business leaders. Our investors include Sequoia and Kleiner Perkins.",
  members = DEFAULT_MEMBERS,
}: TeamWatershedProps) {
  const colors = COLORS[mode];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollability, 300);
    }
  };

  return (
    <section
      className="relative w-full py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 max-w-2xl"
        >
          <h2
            className="text-4xl md:text-5xl font-normal mb-6"
            style={{
              color: colors.title,
              fontFamily: "'Instrument Serif', Georgia, serif",
            }}
          >
            {title}
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: colors.description }}
          >
            {description}
          </p>
        </motion.div>

        {/* Team Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 transition-opacity ${
              canScrollLeft ? "opacity-100" : "opacity-30 cursor-not-allowed"
            }`}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft
              className="w-6 h-6"
              style={{ color: colors.accent }}
            />
          </button>

          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 transition-opacity ${
              canScrollRight ? "opacity-100" : "opacity-30 cursor-not-allowed"
            }`}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight
              className="w-6 h-6"
              style={{ color: colors.accent }}
            />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollability}
            className="flex gap-0 overflow-x-auto scrollbar-hide px-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 flex"
              >
                {/* Divider (before each card except first) */}
                {index > 0 && (
                  <div
                    className="w-px self-stretch mx-4"
                    style={{
                      borderLeft: `1px dashed ${colors.divider}`,
                    }}
                  />
                )}

                {/* Card */}
                <div className="w-[200px] md:w-[220px]">
                  {/* Image */}
                  <div className="relative w-full aspect-[4/5] mb-4 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale"
                      style={{
                        filter: mode === "light"
                          ? "grayscale(100%) sepia(10%) hue-rotate(180deg) saturate(50%)"
                          : "grayscale(100%)",
                      }}
                    />
                  </div>

                  {/* Info */}
                  <div className="pt-2">
                    <h3
                      className="text-xs md:text-sm font-medium tracking-[0.15em] mb-2"
                      style={{ color: colors.accent }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: colors.description }}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
