"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F5F3EF",
    accent: "#E85D2C",
    textPrimary: "#1a1a1a",
    textSecondary: "#6B6B6B",
    borderColor: "#E5E5E5",
  },
  dark: {
    background: "#1a1a1a",
    accent: "#E85D2C",
    textPrimary: "#F5F3EF",
    textSecondary: "#9CA3AF",
    borderColor: "#374151",
  },
} as const;

/**
 * 팀원 데이터
 */
const DEFAULT_TEAM_MEMBERS = [
  {
    id: 1,
    name: "Fergal Reid",
    role: "Chief AI Officer",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
  },
  {
    id: 2,
    name: "Brian McDonnell",
    role: "Director, Engineering",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
  },
  {
    id: 3,
    name: "Mario Kostelac",
    role: "Principal Machine Learning Engineer",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
  },
  {
    id: 4,
    name: "Alexey Tarasov",
    role: "Senior Manager, ML Engineering",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
  },
  {
    id: 5,
    name: "Fedor Parfenov",
    role: "Staff Machine Learning Scientist",
    imageUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
  },
  {
    id: 6,
    name: "Pedro Santos",
    role: "Principal Engineer",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import "./font.css";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

interface TeamFinAiCxProps {
  mode?: "light" | "dark";
  badgeText?: string;
  titlePart1?: string;
  titlePart2?: string;
  description?: string;
  sectionLabel?: string;
  teamMembers?: TeamMember[];
}

export default function TeamFinAiCx({
  mode = "light",
  badgeText = "AI TEAM",
  titlePart1 = "Built by",
  titlePart2 = "a world-class team of AI experts",
  description = "Building models of this quality is only possible thanks to Intercom's 50-person-strong, world-class AI group, led by Fergal Reid, and our decade-long experience in building customer service software.",
  sectionLabel = "AI GROUP LEADERSHIP",
  teamMembers = DEFAULT_TEAM_MEMBERS,
}: TeamFinAiCxProps) {
  const colors = COLORS[mode];
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollability, 300);
    }
  };

  return (
    <section
      className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-8"
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: colors.accent }}
          />
          <span
            className="text-xs font-medium tracking-wider uppercase"
            style={{ color: colors.textSecondary }}
          >
            {badgeText}
          </span>
        </motion.div>

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
            <span
              className="font-serif italic"
              style={{ color: colors.textPrimary }}
            >
              {titlePart1}
            </span>
            <span
              className="font-light ml-4"
              style={{ color: colors.textPrimary }}
            >
              {titlePart2}
            </span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-start gap-4 mb-16 max-w-2xl"
        >
          <span
            className="text-sm font-light"
            style={{ color: colors.textSecondary }}
          >
            01
          </span>
          <p
            className="text-base md:text-lg leading-relaxed font-light"
            style={{ color: colors.textSecondary }}
          >
            {description}
          </p>
        </motion.div>

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <span
            className="text-xs font-medium tracking-wider uppercase"
            style={{ color: colors.textSecondary }}
          >
            {sectionLabel}
          </span>
        </motion.div>

        {/* Team Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div
            ref={carouselRef}
            onScroll={checkScrollability}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex-shrink-0 w-44 md:w-48"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 grayscale">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 176px, 192px"
                  />
                </div>
                <h3
                  className="text-sm font-semibold mb-1"
                  style={{ color: colors.textPrimary }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-xs leading-snug"
                  style={{ color: colors.textSecondary }}
                >
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex gap-2 mt-8"
        >
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-200 hover:bg-black/5 disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ borderColor: colors.borderColor }}
            aria-label="Previous team members"
          >
            <ChevronLeft
              className="w-5 h-5"
              style={{ color: colors.textPrimary }}
            />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-200 hover:bg-black/5 disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ borderColor: colors.borderColor }}
            aria-label="Next team members"
          >
            <ChevronRight
              className="w-5 h-5"
              style={{ color: colors.textPrimary }}
            />
          </button>
        </motion.div>
      </div>

      {/* Hide scrollbar style */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
