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
    // Background colors
    pageBackground: "#F7F3EF", // Cream/beige page background
    containerBackground: "#F9BC96", // Peach/apricot container background
    // Text colors
    heading: "#5A2D52", // Dark purple/maroon for headings
    body: "#5A2D52", // Dark purple/maroon for body text
    // Dot indicators
    dotActive: "#5A2D52",
    dotInactive: "#5A2D5240",
  },
  dark: {
    pageBackground: "#1A1A2E",
    containerBackground: "#2D3A52",
    heading: "#F9BC96",
    body: "#E5D4C0",
    dotActive: "#F9BC96",
    dotInactive: "#F9BC9640",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  team1: {
    path: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop",
    alt: "Team members collaborating in modern office",
    prompt: "Large group of diverse employees standing on stairs in a modern office with glass walls, professional and friendly atmosphere",
  },
  team2: {
    path: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=450&fit=crop",
    alt: "Team members having a discussion",
    prompt: "Two professional women having a friendly conversation in an office setting with plants and modern decor",
  },
  team3: {
    path: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=450&fit=crop",
    alt: "Colleagues talking in office",
    prompt: "Two colleagues having a casual conversation in a modern office with contemporary furniture",
  },
  team4: {
    path: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=450&fit=crop",
    alt: "Team meeting in conference room",
    prompt: "Team members in a meeting room discussing ideas with presentation screen visible",
  },
  team5: {
    path: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=450&fit=crop",
    alt: "Team working together",
    prompt: "Team members working together at a table in a bright office space",
  },
  team6: {
    path: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=450&fit=crop",
    alt: "Office team celebration",
    prompt: "Team members celebrating together in a modern office environment",
  },
  team7: {
    path: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=450&fit=crop",
    alt: "Team brainstorming session",
    prompt: "Group of professionals brainstorming in a modern conference room",
  },
  team8: {
    path: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=600&h=450&fit=crop",
    alt: "Casual office environment",
    prompt: "People working in a casual startup office environment with open floor plan",
  },
} as const;

const DEFAULT_TEAM_IMAGES = [
  IMAGES.team1,
  IMAGES.team2,
  IMAGES.team3,
  IMAGES.team4,
  IMAGES.team5,
  IMAGES.team6,
  IMAGES.team7,
  IMAGES.team8,
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface TeamImage {
  path: string;
  alt: string;
}

interface TeamInTandemProps {
  mode?: "light" | "dark";
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  teamImages?: TeamImage[];
}

export default function TeamInTandem({
  mode = "light",
  title = "Join our Team",
  description = "Be a part of our journey to build powerful tools that support daily life for modern families.",
  ctaText = "Open Roles",
  ctaHref = "#careers",
  teamImages = DEFAULT_TEAM_IMAGES,
}: TeamInTandemProps) {
  const colors = COLORS[mode];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const totalSlides = teamImages.length;
  const visibleSlides = 3;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Get visible images with proper wrapping
  const getVisibleImages = () => {
    const images = [];
    for (let i = 0; i < visibleSlides + 1; i++) {
      const index = (currentIndex + i) % totalSlides;
      images.push({ ...teamImages[index], originalIndex: index });
    }
    return images;
  };

  return (
    <section
      className="relative w-full py-12 px-4 md:px-8 lg:px-12"
      style={{ backgroundColor: colors.pageBackground }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden"
        style={{ backgroundColor: colors.containerBackground }}
      >
        {/* Content */}
        <div className="px-6 md:px-12 lg:px-16 pt-12 md:pt-16 lg:pt-20 pb-8">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-normal text-center mb-6"
            style={{
              color: colors.heading,
              fontFamily: "'Playfair Display', serif",
            }}
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-center max-w-xl mx-auto mb-8"
            style={{ color: colors.body }}
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mb-10 md:mb-12"
          >
            <a
              href={ctaHref}
              className="group inline-flex items-center gap-2 text-base font-medium transition-all duration-300 hover:gap-3"
              style={{ color: colors.heading }}
            >
              <span className="border-b-2" style={{ borderColor: colors.heading }}>
                {ctaText}
              </span>
              <span
                className="flex items-center justify-center w-7 h-7 rounded-full border-2 transition-transform duration-300 group-hover:scale-110"
                style={{ borderColor: colors.heading }}
              >
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Image Carousel */}
        <div
          className="relative px-4 md:px-8 lg:px-12 pb-8"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" style={{ color: colors.heading }} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" style={{ color: colors.heading }} />
          </button>

          {/* Images Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-6"
              animate={{ x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <AnimatePresence mode="popLayout">
                {getVisibleImages().map((image, index) => (
                  <motion.div
                    key={`${image.originalIndex}-${currentIndex}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: index === visibleSlides ? 0.5 : 1,
                      scale: 1,
                    }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="flex-shrink-0 w-[calc(33.333%-1rem)] md:w-[calc(33.333%-1.5rem)] aspect-[4/3] relative rounded-xl overflow-hidden"
                    style={{
                      clipPath: index === visibleSlides ? "inset(0 50% 0 0)" : "none",
                    }}
                  >
                    <Image
                      src={image.path}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Pagination Dots */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center gap-2 mt-8"
          >
            {teamImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="w-2.5 h-2.5 rounded-full transition-all duration-300 hover:scale-125"
                style={{
                  backgroundColor:
                    index === currentIndex ? colors.dotActive : colors.dotInactive,
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  );
}
