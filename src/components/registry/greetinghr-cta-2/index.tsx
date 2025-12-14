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
    // Primary 액센트 (배경)
    accent: "#1890FF",
    // 설명 텍스트
    description: "#E4E4E7",
    // 버튼 테두리
    buttonBorder: "#E4E4E7",
  },
  dark: {
    accent: "#1890FF",
    description: "#E4E4E7",
    buttonBorder: "#E4E4E7",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  brochure: {
    path: "/registry/greetinghr-cta-2/brochure-preview.png",
    alt: "그리팅 서비스 소개서 표지",
    prompt: `A professional service brochure cover for HR/recruitment SaaS product named "그리팅" (Greeting). Features business professionals and screenshots of the software interface. Clean, professional design with blue accent colors.`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface GreetinghrCta2Props {
  mode?: "light" | "dark";
  badge?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  brochureImage?: string;
  brochureAlt?: string;
}

export default function GreetinghrCta2({
  mode = "light",
  badge = "국내 1위 채용 관리 솔루션",
  heading = "그리팅을 처음 들어보셨나요?",
  description = "그리팅으로 복잡한 채용 과정을 더 쉽고 단순하게 바꿔보세요.",
  buttonText = "서비스 소개서 다운로드",
  buttonHref = "#",
  brochureImage = IMAGES.brochure.path,
  brochureAlt = IMAGES.brochure.alt,
}: GreetinghrCta2Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full py-8 px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-2xl"
        style={{
          backgroundColor: colors.accent,
          boxShadow:
            "rgba(255, 255, 255, 0.2) 0.5625px 0.5625px 0.5625px 0px inset, rgba(0, 0, 0, 0.05) -0.5625px -0.5625px 0.5625px 0px inset",
        }}
      >
        <div className="relative flex flex-col lg:flex-row items-center justify-between px-8 md:px-12 lg:px-16 py-12 lg:py-16">
          {/* Text Content */}
          <div className="flex flex-col items-start gap-6 lg:gap-8 max-w-xl z-10">
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-sm md:text-base font-medium"
              style={{ color: colors.description }}
            >
              {badge}
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight"
            >
              {heading}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-base md:text-lg"
              style={{ color: colors.description }}
            >
              {description}
            </motion.p>

            {/* Button */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              href={buttonHref}
              className="group inline-flex items-center gap-2 px-5 py-3 bg-white text-gray-900 font-medium text-sm md:text-base rounded transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
              style={{
                border: `1px solid ${colors.buttonBorder}`,
              }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>
          </div>

          {/* Brochure Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative mt-8 lg:mt-0 lg:ml-8"
          >
            <div
              className="relative w-64 md:w-80 lg:w-96 aspect-[3788/2680] rounded-xl overflow-hidden"
              style={{
                boxShadow:
                  "rgba(197, 200, 201, 0.72) 0px 0.542px 1.19px -1.25px, rgba(197, 200, 201, 0.64) 0px 2.06px 4.53px -2.5px, rgba(197, 200, 201, 0.25) 0px 9px 19.8px -3.75px",
              }}
            >
              <Image
                src={brochureImage}
                alt={brochureAlt}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
