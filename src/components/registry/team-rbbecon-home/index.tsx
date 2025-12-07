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
    accent: "#C54A27", // Terracotta/brick red
    accentHover: "#A83D1F", // Darker terracotta
    testimonialBg: "#C54A27", // Terracotta background
  },
  dark: {
    accent: "#D65A37",
    accentHover: "#C54A27",
    testimonialBg: "#C54A27",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  office1: {
    path: "/registry/team-rbbecon-home/office-1.jpg",
    alt: "Colleagues working together in a modern office environment",
    prompt: `Professional office environment with two female colleagues discussing work at a computer desk, modern open office with natural lighting, business casual attire`,
  },
  office2: {
    path: "/registry/team-rbbecon-home/office-2.jpg",
    alt: "Professionals collaborating in an office meeting",
    prompt: `Professional business meeting scene with a smiling bearded man in casual attire collaborating with colleagues, modern office background, warm natural lighting`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import "./font.css";

interface TeamRbbeconHomeProps {
  mode?: "light" | "dark";
  // Hero section
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  // Testimonial section
  quote?: string;
  quoteLogo?: React.ReactNode;
  quoteSource?: string;
  // Images
  image1Src?: string;
  image1Alt?: string;
  image2Src?: string;
  image2Alt?: string;
}

export default function TeamRbbeconHome({
  mode = "light",
  title = "Expert, user-friendly advice",
  description = "We provide independent expert advice on the highest profile cases covering all aspects of competition policy. Our experience covers over 3,000 cases across 120 jurisdictions. Our multi-lingual teams can work in 30 languages. We are leading advisors on the largest European cases. We have advised the merging parties on over one-third of EU Phase II mergers in the last 5 years.",
  buttonText = "MEET OUR EXPERTS",
  buttonHref = "#",
  quote = "The clear leader in advising on mergers and advising companies targeted by government probes.",
  quoteSource = "GCR",
  image1Src = IMAGES.office1.path,
  image1Alt = IMAGES.office1.alt,
  image2Src = IMAGES.office2.path,
  image2Alt = IMAGES.office2.alt,
}: TeamRbbeconHomeProps) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full team-rbbecon-font">
      {/* Hero/About Section */}
      <div className="relative bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-tight mb-8 italic">
                {title}
              </h2>

              {/* Description with accent bar */}
              <div className="flex gap-4">
                <div
                  className="w-1 flex-shrink-0"
                  style={{ backgroundColor: colors.accent }}
                />
                <p className="text-gray-700 text-base leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Button */}
              <motion.a
                href={buttonHref}
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 border border-gray-900 text-sm font-medium tracking-wider text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Right Images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              {/* Top Image */}
              <div className="relative w-full h-48 md:h-56 overflow-hidden">
                <Image
                  src={image1Src}
                  alt={image1Alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom Image */}
              <div className="relative w-full h-48 md:h-56 overflow-hidden">
                <Image
                  src={image2Src}
                  alt={image2Alt}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 md:py-24"
        style={{ backgroundColor: colors.testimonialBg }}
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          {/* Quote Mark */}
          <div className="mb-8">
            <svg
              className="w-12 h-12 mx-auto"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 24C14 28.4183 10.4183 32 6 32V36C12.6274 36 18 30.6274 18 24V12H6V24H14Z"
                fill="rgba(255,255,255,0.6)"
              />
              <path
                d="M38 24C38 28.4183 34.4183 32 30 32V36C36.6274 36 42 30.6274 42 24V12H30V24H38Z"
                fill="rgba(255,255,255,0.6)"
              />
            </svg>
          </div>

          {/* Quote Text */}
          <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-8 italic">
            {quote}
          </blockquote>

          {/* GCR Logo */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              <div className="w-3 h-3 bg-white" />
              <div className="w-3 h-3 bg-white" />
            </div>
            <span className="text-white text-xl font-bold tracking-wide">
              {quoteSource}
            </span>
          </div>
          <p className="text-white/70 text-xs mt-1">Global Competition Review</p>
        </div>
      </motion.div>
    </section>
  );
}
