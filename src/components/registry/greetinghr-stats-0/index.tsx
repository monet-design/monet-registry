"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#001946",
  textPrimary: "#FFFFFF",
  textSecondary: "rgba(162, 162, 171, 0.72)",
  textMuted: "rgb(113, 113, 122)",
  border: "rgb(228, 228, 231)",
  profileBg: "rgb(0, 25, 70)",
} as const;

/**
 * 통계 데이터
 */
const STATS_DATA = {
  mainStat: "7,000+",
  statLabel: "*2025년 그리팅 이용 고객사",
};

/**
 * 테스티모니얼 데이터
 */
const TESTIMONIALS_DATA = [
  {
    id: 1,
    quote:
      '"기아처럼 다이렉트 소싱을 활발히 하는 팀이라면 그리팅 TRM을 추천해요. 기존보다 체계적으로 인재를 관리하고, 더 빠르고 정확하게 채용할 수 있어요."',
    logoSrc:
      "https://framerusercontent.com/images/LMX19mt9axmp9ZwpV01cmlOZes.png",
    logoAlt: "기아 로고",
  },
  {
    id: 2,
    quote:
      '"원하는 인재를 빠르게 채용하고 싶은 기업에 그리팅 ATS를 추천합니다. 리소스를 줄이고 속도를 높여주는 그리팅 ATS를 써보세요."',
    logoSrc:
      "https://framerusercontent.com/images/geomcosgCyFCem3JMrwW1p1426k.png",
    logoAlt: "SK D&D 로고",
  },
  {
    id: 3,
    quote:
      '"그리팅은 초등학생도 쓸 만큼 쉬운 솔루션이에요. 기능이 직관적이라 처음 써도 금방 익힐 수 있었고, 온보딩에서 우리 채용 프로세스에 맞춘 안내도 만족스러웠어요."',
    logoSrc:
      "https://framerusercontent.com/images/AhbFWQJglz4Az2bnubkJLwCIo.png",
    logoAlt: "회사 로고",
  },
  {
    id: 4,
    quote:
      '"카카오게임즈는 채용담당자부터 실무진까지 전 과정에서 그리팅 ATS를 적극 활용하고 있어요. 우리 프로세스에 맞게 유연하게 커스텀할 수 있어 현업에서도 만족도가 높습니다."',
    logoSrc:
      "https://framerusercontent.com/images/ab6HsrJQUTvwmdKbTZLPY5ARNY.png",
    logoAlt: "카카오게임즈 로고",
  },
  {
    id: 5,
    quote:
      '"많은 포지션을 채용하는 기업에 그리팅 ATS를 추천해요. 채용 관리부터 평가, 면접 일정 조율까지 효율적인 프로세스를 만들 수 있으니까요. 한마디로 말하자면 \'근검절약\'이에요."',
    logoSrc:
      "https://framerusercontent.com/images/42kD7NJJVaZUZVmbJvBAY2qjYvo.png",
    logoAlt: "회사 로고",
  },
];

/**
 * 프로필 이미지 데이터
 */
const PROFILE_IMAGES = [
  "https://framerusercontent.com/images/UxfXyRxOMMaePNx9Ae0U1Hq4tAI.png",
  "https://framerusercontent.com/images/b1W2vN3qs8u47wV12qLD1RmgL4.png",
  "https://framerusercontent.com/images/P3Px88Yekf7fjSAOMvqplKUJs4.png",
  "https://framerusercontent.com/images/NAOeUaZXYWbYC5NsUZkNrUEDFA.png",
  "https://framerusercontent.com/images/HQikIhqk5Yd6O3kOR6JXvpvTYzc.png",
];

/**
 * 하단 설명 텍스트
 */
const BOTTOM_TEXT = {
  line1: "산업별 대표 기업이 그리팅과 함께",
  line2: "단순 관리를 넘어, ",
  highlight: "채용 성공",
  line3: "을 경험하고 있습니다.",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

interface GreetinghrStats0Props {
  mainStat?: string;
  statLabel?: string;
  testimonials?: typeof TESTIMONIALS_DATA;
  profileImages?: string[];
  bottomText?: typeof BOTTOM_TEXT;
  autoRotateInterval?: number;
}

export default function GreetinghrStats0({
  mainStat = STATS_DATA.mainStat,
  statLabel = STATS_DATA.statLabel,
  testimonials = TESTIMONIALS_DATA,
  profileImages = PROFILE_IMAGES,
  bottomText = BOTTOM_TEXT,
  autoRotateInterval = 5000,
}: GreetinghrStats0Props) {
  const [activeIndex, setActiveIndex] = useState(1);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(nextTestimonial, autoRotateInterval);
    return () => clearInterval(interval);
  }, [nextTestimonial, autoRotateInterval]);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section
      className="relative w-full py-20 md:py-28 lg:py-32"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          {/* Left: Stats */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="font-poppins text-[120px] font-normal leading-none tracking-[-0.05em] md:text-[160px] lg:text-[189px]"
              style={{ color: COLORS.textPrimary }}
            >
              {mainStat}
            </h2>
            <p
              className="mt-4 text-lg md:text-xl lg:text-[28px]"
              style={{ color: COLORS.textSecondary }}
            >
              {statLabel}
            </p>
          </motion.div>

          {/* Right: Testimonial Carousel */}
          <motion.div
            className="flex max-w-[520px] flex-col"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Quote */}
            <div className="relative min-h-[120px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeIndex}
                  className="text-lg leading-relaxed md:text-xl lg:text-[22px] lg:leading-[1.6]"
                  style={{ color: "rgb(212, 212, 216)" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTestimonial.quote}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Company Logo */}
            <div className="mt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className="relative h-8 w-24"
                  style={{
                    filter:
                      "brightness(0.41) contrast(2) grayscale(1) invert(1)",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={activeTestimonial.logoSrc}
                    alt={activeTestimonial.logoAlt}
                    fill
                    className="object-contain object-left"
                    unoptimized
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Profile Images */}
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-3">
                {profileImages.slice(0, 5).map((src, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="relative h-12 w-12 overflow-hidden rounded-full md:h-14 md:w-14"
                    style={{
                      backgroundColor: COLORS.profileBg,
                      boxShadow: `0 0 0 1px ${COLORS.border}`,
                      zIndex: profileImages.length - index,
                    }}
                    whileHover={{ scale: 1.05 }}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0.4 + index * 0.15,
                      filter:
                        activeIndex === index
                          ? "brightness(1)"
                          : "brightness(0.6)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={src}
                      alt={`프로필 ${index + 1}`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Bottom Description */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p
                className="text-sm leading-relaxed md:text-base"
                style={{ color: COLORS.textMuted }}
              >
                {bottomText.line1}
                <br />
                {bottomText.line2}
                <strong style={{ color: COLORS.textSecondary }}>
                  {bottomText.highlight}
                </strong>
                {bottomText.line3}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
