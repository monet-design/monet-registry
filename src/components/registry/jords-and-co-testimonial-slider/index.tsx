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
    // Primary accent
    accent: "#5046E5",          // 퍼플 액센트
    accentHover: "#4039C8",     // 호버 상태
    // Neutral grays (브랜드 특정 그레이)
    textPrimary: "#3D3D4D",     // 다크 그레이 텍스트
    textSecondary: "#9B9BA4",   // 미디움 그레이
    textTertiary: "#C8C8D0",    // 라이트 그레이
    // Borders and backgrounds
    background: "#EFEEF4",      // 섹션 배경
    cardBackground: "#F5F5F8",  // 카드 데코 배경
    border: "#E2E1E8",          // 보더
    borderLight: "#EFEEF4",     // 라이트 보더
  },
  dark: {
    accent: "#6B5FED",
    accentHover: "#5B4FDD",
    textPrimary: "#E5E5E5",
    textSecondary: "#A0A0A8",
    textTertiary: "#6B6B75",
    background: "#1a1a1e",
    cardBackground: "#2a2a2e",
    border: "#3a3a3e",
    borderLight: "#2a2a2e",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  // No images - uses dynamic avatar/thumbnail URLs from data
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./font.css";

// Types
interface Testimonial {
  id: number;
  quote: string;
  authorName: string;
  authorRole: string;
  authorCompany: string;
  authorAvatar: string;
  productThumbnail: string;
  companyLogo?: React.ReactNode | ((props: { colors: typeof COLORS.light | typeof COLORS.dark }) => React.ReactNode);
}

interface JordsAndCoTestimonialSliderProps {
  mode?: "light" | "dark";
  tagline?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  testimonials?: Testimonial[];
}

// Default company logo component (Marco style)
function MarcoLogo({ colors }: { colors: typeof COLORS.light | typeof COLORS.dark }) {
  return (
    <div className="flex items-center gap-1.5">
      <div
        className="flex h-6 w-6 items-center justify-center rounded"
        style={{ backgroundColor: colors.accent }}
      >
        <span className="text-xs font-bold text-white">M</span>
      </div>
      <span className="text-sm font-semibold" style={{ color: colors.accent }}>
        Marco
      </span>
    </div>
  );
}

// Default testimonials data
const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      '"We launched a waitlist and gained thousands of signups with zero marketing spend"',
    authorName: "Isaac Hinman",
    authorRole: "FOUNDER",
    authorCompany: "MARCO",
    authorAvatar: "https://picsum.photos/seed/isaac-hinman/100/100",
    productThumbnail: "https://picsum.photos/seed/marco-app/200/200",
    // companyLogo will be rendered dynamically in component
  },
  {
    id: 2,
    quote:
      '"The product practically sells itself. Our conversion rates doubled within the first month"',
    authorName: "Sarah Chen",
    authorRole: "CEO",
    authorCompany: "FLOWSTACK",
    authorAvatar: "https://picsum.photos/seed/sarah-chen-2/100/100",
    productThumbnail: "https://picsum.photos/seed/flowstack-app/200/200",
  },
  {
    id: 3,
    quote:
      '"Building in public has never been easier. The community response has been incredible"',
    authorName: "Alex Rivera",
    authorRole: "FOUNDER",
    authorCompany: "BUILDSPACE",
    authorAvatar: "https://picsum.photos/seed/alex-rivera/100/100",
    productThumbnail: "https://picsum.photos/seed/buildspace-app/200/200",
  },
];

// Interlocking rings icon component
function InterlockingIcon({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      <circle cx="9" cy="12" r="5" />
      <circle cx="15" cy="12" r="5" />
    </svg>
  );
}

// Pagination Dots Component
function PaginationDots({
  total,
  current,
  onSelect,
  colors,
}: {
  total: number;
  current: number;
  onSelect: (index: number) => void;
  colors: typeof COLORS.light | typeof COLORS.dark;
}) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className="h-1.5 rounded-full transition-all duration-300"
          style={{
            width: index === current ? "1.5rem" : "0.375rem",
            backgroundColor: index === current ? colors.accent : colors.textTertiary,
          }}
          aria-label={`Go to testimonial ${index + 1}`}
        />
      ))}
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({
  testimonial,
  colors,
}: {
  testimonial: Testimonial;
  colors: typeof COLORS.light | typeof COLORS.dark;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative w-full max-w-2xl"
    >
      {/* Main card */}
      <div
        className="overflow-hidden rounded-2xl border bg-white shadow-lg shadow-black/5"
        style={{ borderColor: colors.border }}
      >
        {/* Top section with thumbnail and quote */}
        <div className="flex">
          {/* Product Thumbnail */}
          <div className="flex-shrink-0 p-4">
            <div className="h-28 w-28 overflow-hidden rounded-xl bg-gray-900">
              <img
                src={testimonial.productThumbnail}
                alt="Product"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Quote */}
          <div className="flex flex-1 items-center px-4 py-6 pr-8">
            <p className="text-lg font-medium leading-relaxed" style={{ color: colors.textPrimary }}>
              {testimonial.quote}
            </p>
          </div>
        </div>

        {/* Bottom section with author info and company logo */}
        <div
          className="flex items-center justify-between border-t px-4 py-3"
          style={{ borderColor: colors.borderLight }}
        >
          {/* Author Info */}
          <div className="flex items-center gap-3">
            <img
              src={testimonial.authorAvatar}
              alt={testimonial.authorName}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium" style={{ color: colors.textPrimary }}>
                {testimonial.authorName}
              </p>
              <p className="text-xs tracking-wide" style={{ color: colors.textSecondary }}>
                {testimonial.authorRole} - {testimonial.authorCompany}
              </p>
            </div>
          </div>

          {/* Company Logo */}
          {testimonial.companyLogo ? (
            // If a custom logo is provided (as React element), render it
            // Note: When using custom logos, they should also accept colors prop
            typeof testimonial.companyLogo === "function"
              ? testimonial.companyLogo({ colors })
              : testimonial.companyLogo
          ) : (
            // Default logo rendering with first letter
            <div className="flex items-center gap-1.5">
              <div
                className="flex h-6 w-6 items-center justify-center rounded"
                style={{ backgroundColor: colors.accent }}
              >
                <span className="text-xs font-bold text-white">
                  {testimonial.authorCompany.charAt(0)}
                </span>
              </div>
              <span className="text-sm font-semibold" style={{ color: colors.accent }}>
                {testimonial.authorCompany}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Decorative shadow card behind */}
      <div
        className="absolute -right-4 top-4 -z-10 h-full w-full rounded-2xl border"
        style={{ borderColor: colors.border, backgroundColor: colors.cardBackground }}
        aria-hidden="true"
      />
    </motion.div>
  );
}

// Main Component
export default function JordsAndCoTestimonialSlider({
  mode = "light",
  tagline = "REAL WORDS. REAL RESULTS.",
  headlineLine1 = "Proof from the people",
  headlineLine2 = "building real things",
  testimonials = defaultTestimonials,
}: JordsAndCoTestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const colors = COLORS[mode];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-center text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <InterlockingIcon className="h-8 w-8" style={{ color: colors.textSecondary }} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-xs font-medium tracking-[0.2em]"
            style={{ color: colors.textSecondary }}
          >
            {tagline}
          </motion.p>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-normal tracking-tight sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Instrument Serif', serif", color: colors.textPrimary }}
          >
            <span className="block italic">{headlineLine1}</span>
            <span className="block italic">{headlineLine2}</span>
          </motion.h2>
        </div>

        {/* Testimonial Card */}
        <div
          className="mb-10 flex justify-center px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={testimonials[currentIndex].id}
              testimonial={testimonials[currentIndex]}
              colors={colors}
            />
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <PaginationDots
            total={testimonials.length}
            current={currentIndex}
            onSelect={handleSelect}
            colors={colors}
          />
        </motion.div>
      </div>
    </section>
  );
}
