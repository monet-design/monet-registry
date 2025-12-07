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
    pageBg: "#f5f3ee",
    cardBg: "#e8e5df",
    // Border
    cardBorder: "#1a1a1a",
    // Navigation
    navBg: "#ffffff",
    navBorder: "#e5e5e5",
  },
  dark: {
    pageBg: "#1a1a1a",
    cardBg: "#2a2a2a",
    cardBorder: "#ffffff",
    navBg: "#333333",
    navBorder: "#444444",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  // Using placeholder for profile images
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, RefreshCcw } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  company: string;
  companyLogo?: string;
  profileImage?: string;
  profileGradient?: string;
}

interface TeamLawtradesNetworkProps {
  mode?: "light" | "dark";
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Invaluable is the word we're using. If you're a legal team of one, or even two, and you still need to plug holes in places, Lawtrades is a really fantastic solution.",
    name: "BRANDON UNE",
    company: "RECHARGE",
    profileImage: "https://picsum.photos/seed/brandon-une/200/200",
  },
  {
    id: 2,
    quote:
      "The quality of legal talent we've found through the platform has been exceptional. It's transformed how we handle our legal needs.",
    name: "SARAH CHEN",
    company: "STRIPE",
    profileImage: "https://picsum.photos/seed/sarah-chen/200/200",
  },
  {
    id: 3,
    quote:
      "Having access to on-demand legal expertise has been a game-changer for our growing startup. Highly recommend for any scaling company.",
    name: "MICHAEL ROSS",
    company: "NOTION",
    profileImage: "https://picsum.photos/seed/michael-ross/200/200",
  },
];

// Profile placeholder with initials
function ProfilePlaceholder({
  name,
  gradient,
}: {
  name: string;
  gradient?: string;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className={`w-full h-full bg-gradient-to-b ${gradient || "from-[#7cd4c8] to-[#e8dcc8]"} flex items-end justify-center`}
    >
      {/* Silhouette placeholder */}
      <div className="relative w-[85%] h-[85%] flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-gray-800/20 flex items-center justify-center">
          <span className="text-2xl font-semibold text-gray-800/60">
            {initials}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function TeamLawtradesNetwork({
  mode = "light",
  testimonials = defaultTestimonials,
}: TeamLawtradesNetworkProps) {
  const colors = COLORS[mode];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Load Instrument Serif font
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className="relative w-full py-12 md:py-16 lg:py-20"
      style={{ backgroundColor: colors.pageBg }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[24px] md:rounded-[32px] overflow-hidden"
          style={{
            backgroundColor: colors.cardBg,
            borderBottom: `3px solid ${colors.cardBorder}`,
          }}
        >
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Profile Image Section */}
            <div className="w-full md:w-[200px] lg:w-[240px] flex-shrink-0 p-5 md:p-6 lg:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-square rounded-[16px] md:rounded-[20px] overflow-hidden shadow-md"
                >
                  {currentTestimonial.profileImage ? (
                    <Image
                      src={currentTestimonial.profileImage}
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <ProfilePlaceholder
                      name={currentTestimonial.name}
                      gradient={currentTestimonial.profileGradient}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Quote Content */}
            <div className="flex-1 px-5 pb-6 md:px-4 md:py-8 lg:px-6 lg:py-10 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6 md:mb-8"
                >
                  <p
                    className="text-xl md:text-2xl lg:text-[28px] xl:text-[32px] leading-[1.3] md:leading-[1.25] tracking-[-0.02em]"
                    style={{
                      fontFamily: "'Instrument Serif', Georgia, serif",
                      color: mode === "light" ? "#1a1a1a" : "#ffffff",
                    }}
                  >
                    "{currentTestimonial.quote}"
                  </p>
                </motion.blockquote>
              </AnimatePresence>

              {/* Company Logo & Name */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3"
                >
                  {/* Company Logo */}
                  <div className="flex items-center gap-2">
                    <RefreshCcw
                      className="w-5 h-5"
                      style={{ color: mode === "light" ? "#1a1a1a" : "#ffffff" }}
                    />
                    <span
                      className="text-sm md:text-base font-semibold tracking-tight"
                      style={{ color: mode === "light" ? "#1a1a1a" : "#ffffff" }}
                    >
                      recharge
                    </span>
                  </div>
                  {/* Author Name */}
                  <span
                    className="text-xs md:text-sm tracking-wide"
                    style={{
                      color: mode === "light" ? "#666666" : "#999999",
                    }}
                  >
                    {currentTestimonial.name}, {currentTestimonial.company}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Section - Decorative Line & Navigation */}
            <div className="relative w-full md:w-[140px] lg:w-[160px] flex-shrink-0 flex flex-row md:flex-col items-center justify-between md:justify-end p-5 md:p-6 lg:p-8">
              {/* Decorative curved dashed line */}
              <svg
                className="hidden md:block absolute top-8 right-8 w-[80px] h-[120px]"
                viewBox="0 0 80 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0 Q 80 30, 70 120"
                  stroke={mode === "light" ? "#1a1a1a" : "#ffffff"}
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  fill="none"
                />
                <circle
                  cx="70"
                  cy="118"
                  r="4"
                  fill={mode === "light" ? "#1a1a1a" : "#ffffff"}
                />
              </svg>

              {/* Navigation Controls */}
              <div className="flex items-center gap-3 md:mt-auto">
                {/* Prev Button */}
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: colors.navBg,
                    border: `1px solid ${colors.navBorder}`,
                  }}
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft
                    className="w-4 h-4"
                    style={{ color: mode === "light" ? "#1a1a1a" : "#ffffff" }}
                  />
                </button>

                {/* Page Indicator */}
                <span
                  className="text-sm font-medium tabular-nums min-w-[32px] text-center"
                  style={{ color: mode === "light" ? "#1a1a1a" : "#ffffff" }}
                >
                  {currentIndex + 1}/{testimonials.length}
                </span>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: colors.navBg,
                    border: `1px solid ${colors.navBorder}`,
                  }}
                  aria-label="Next testimonial"
                >
                  <ArrowRight
                    className="w-4 h-4"
                    style={{ color: mode === "light" ? "#1a1a1a" : "#ffffff" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
